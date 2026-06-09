<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(405, ['ok' => false, 'message' => 'Method not allowed']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    send_json(400, ['ok' => false, 'message' => 'Некорректные данные заявки']);
}

function send_json(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function field_value(array $data, string $key): string
{
    $value = $data[$key] ?? '';
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    return trim((string)$value);
}

function clean_line(string $value): string
{
    return str_replace(["\r", "\n"], ' ', $value);
}

function encode_subject(string $subject): string
{
    return '=?UTF-8?B?' . base64_encode(clean_line($subject)) . '?=';
}

function prune_old_leads(string $dir, int $maxAgeDays): void
{
    $maxAge = time() - ($maxAgeDays * 86400);
    foreach (glob($dir . DIRECTORY_SEPARATOR . '*.json') ?: [] as $file) {
        if (is_file($file) && (filemtime($file) ?: 0) < $maxAge) {
            @unlink($file);
        }
    }
}

function save_lead_backup(array $data, string $bodyText): bool
{
    $dir = __DIR__ . DIRECTORY_SEPARATOR . '__leads_store';
    if (!is_dir($dir) && !mkdir($dir, 0750, true)) {
        return false;
    }

    $htaccess = $dir . DIRECTORY_SEPARATOR . '.htaccess';
    if (!is_file($htaccess)) {
        @file_put_contents($htaccess, "Require all denied\nDeny from all\n");
    }

    prune_old_leads($dir, 30);

    $fileName = date('Y-m-d_His') . '_' . bin2hex(random_bytes(4)) . '.json';
    $payload = [
        'created_at' => date('c'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
        'data' => $data,
        'mail_body' => $bodyText
    ];

    return file_put_contents(
        $dir . DIRECTORY_SEPARATOR . $fileName,
        json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT),
        LOCK_EX
    ) !== false;
}

function load_smtp_config(): ?array
{
    $path = __DIR__ . DIRECTORY_SEPARATOR . 'smtp-config.php';
    if (!is_file($path)) {
        return null;
    }

    $config = require $path;
    return is_array($config) ? $config : null;
}

function smtp_read($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    $code = (int)substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed: ' . trim($response));
    }
    return $response;
}

function dot_stuff(string $body): string
{
    $body = str_replace(["\r\n", "\r"], "\n", $body);
    $lines = explode("\n", $body);
    foreach ($lines as &$line) {
        if (strpos($line, '.') === 0) {
            $line = '.' . $line;
        }
    }
    unset($line);
    return implode("\r\n", $lines);
}

function smtp_send(array $config, string $to, string $subject, string $bodyText, string $replyTo): bool
{
    $host = (string)($config['host'] ?? 'smtp.mail.ru');
    $port = (int)($config['port'] ?? 465);
    $secure = (string)($config['secure'] ?? 'ssl');
    $username = (string)($config['username'] ?? '');
    $password = (string)($config['password'] ?? '');
    $fromEmail = (string)($config['from_email'] ?? $username);
    $fromName = (string)($config['from_name'] ?? 'ZnakVsem');

    if ($username === '' || $password === '' || $fromEmail === '') {
        return false;
    }

    $transportHost = $secure === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @fsockopen($transportHost, $port, $errno, $errstr, 20);
    if (!$socket) {
        return false;
    }

    stream_set_timeout($socket, 20);

    try {
        $greeting = smtp_read($socket);
        if ((int)substr($greeting, 0, 3) !== 220) {
            throw new RuntimeException('SMTP greeting failed');
        }

        smtp_command($socket, 'EHLO znakvsem.ru', [250]);

        if ($secure === 'tls') {
            smtp_command($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS failed');
            }
            smtp_command($socket, 'EHLO znakvsem.ru', [250]);
        }

        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($username), [334]);
        smtp_command($socket, base64_encode($password), [235]);
        smtp_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
        smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: =?UTF-8?B?' . base64_encode($fromName) . '?= <' . $fromEmail . '>',
            'To: <' . $to . '>',
            'Reply-To: ' . $replyTo,
            'Subject: ' . $subject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'Message-ID: <' . bin2hex(random_bytes(12)) . '@znakvsem.ru>'
        ];

        fwrite($socket, implode("\r\n", $headers) . "\r\n\r\n" . dot_stuff($bodyText) . "\r\n.\r\n");
        $response = smtp_read($socket);
        $code = (int)substr($response, 0, 3);
        if (!in_array($code, [250], true)) {
            throw new RuntimeException('SMTP DATA failed: ' . trim($response));
        }

        smtp_command($socket, 'QUIT', [221]);
        fclose($socket);
        return true;
    } catch (Throwable $error) {
        @fwrite($socket, "QUIT\r\n");
        fclose($socket);
        error_log($error->getMessage());
        return false;
    }
}

function fallback_mail(string $to, string $subject, string $bodyText, string $replyTo): bool
{
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'From: ZnakVsem <no-reply@znakvsem.ru>',
        'Reply-To: ' . $replyTo
    ];

    return mail($to, $subject, $bodyText, implode("\r\n", $headers));
}

$name = field_value($data, 'name');
$phone = field_value($data, 'phone');
$email = field_value($data, 'email');
$actionTitle = field_value($data, 'action_title') ?: field_value($data, 'intent') ?: 'Заявка с сайта znakvsem.ru';

if ($name === '' || $phone === '') {
    send_json(422, ['ok' => false, 'message' => 'Укажите имя и телефон']);
}

$labels = [
    'action_title' => 'Тип заявки',
    'intent' => 'Намерение',
    'name' => 'Имя',
    'phone' => 'Телефон',
    'email' => 'Email',
    'comment' => 'Комментарий',
    'selected' => 'Выбранные знаки',
    'selected_count' => 'Количество знаков',
    'certificate' => 'Номер свидетельства',
    'description' => 'Описание',
    'cookie_consent' => 'Согласие cookies',
    'cookie_accepted_at' => 'Время согласия cookies',
    'landing_page' => 'Страница входа',
    'referrer' => 'Источник перехода',
    'utm_source' => 'UTM Source',
    'utm_medium' => 'UTM Medium',
    'utm_campaign' => 'UTM Campaign',
    'utm_content' => 'UTM Content',
    'utm_term' => 'UTM Term',
    'yclid' => 'Yandex Click ID',
    'gclid' => 'Google Click ID',
    'page_url' => 'Страница отправки',
    'source' => 'Источник'
];

$body = [];
$body[] = 'Новая заявка с сайта znakvsem.ru';
$body[] = '';

foreach ($labels as $key => $label) {
    $value = field_value($data, $key);
    if ($value !== '') {
        $body[] = $label . ': ' . $value;
    }
}

$body[] = '';
$body[] = 'Дата отправки: ' . date('Y-m-d H:i:s');
$bodyText = implode("\n", $body);
$backupSaved = save_lead_backup($data, $bodyText);

$to = 'patentvsem@mail.ru';
$subject = encode_subject('Заявка с znakvsem.ru: ' . $actionTitle);
$replyTo = $email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)
    ? clean_line($email)
    : 'patentvsem@mail.ru';

$smtpConfig = load_smtp_config();
$sent = $smtpConfig
    ? smtp_send($smtpConfig, $to, $subject, $bodyText, $replyTo)
    : fallback_mail($to, $subject, $bodyText, $replyTo);

if (!$sent) {
    send_json(500, [
        'ok' => false,
        'message' => $backupSaved
            ? 'Заявка сохранена, но письмо не отправилось'
            : 'Не удалось отправить заявку'
    ]);
}

send_json(200, [
    'ok' => true,
    'message' => $backupSaved
        ? 'Заявка отправлена'
        : 'Заявка отправлена, но резервная копия не сохранена'
]);
