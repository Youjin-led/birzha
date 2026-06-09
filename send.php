<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Некорректные данные заявки'], JSON_UNESCAPED_UNICODE);
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

function send_json(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
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
$subject = '=?UTF-8?B?' . base64_encode('Заявка с znakvsem.ru: ' . clean_line($actionTitle)) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ZnakVsem <no-reply@znakvsem.ru>',
    'Reply-To: ' . ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) ? clean_line($email) : 'patentvsem@mail.ru')
];

$sent = mail($to, $subject, $bodyText, implode("\r\n", $headers));

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
