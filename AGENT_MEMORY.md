# Agent Memory

## ZnakVsem Mail Delivery

- Working production path: `znakvsem.ru/docs/send.php` handles form submissions.
- PHP must run in RU-CENTER automatic site mode. Manual web-server mode caused `.php` files to be served as plain text.
- RU-CENTER working setup:
  - `Сайты -> znakvsem.ru -> Настройки -> Веб-сервер`
  - `Автоматический режим работы сайта`: enabled
  - PHP version: PHP 8.5 was tested working; PHP 7.4 should also be compatible with current `send.php`.
- Do not rely on PHP `mail()` for delivery to `patentvsem@mail.ru`; it returned success but messages did not arrive.
- Working delivery method: SMTP through Mail.ru using an application password.
- SMTP settings:
  - host: `smtp.mail.ru`
  - port: `465`
  - secure: `ssl`
  - username/from_email: `patentvsem@mail.ru`
  - password: Mail.ru application password, never commit or archive it
  - recipient: `patentvsem@mail.ru`
- Real secret file on hosting must be named `smtp-config.php` and placed next to `send.php`.
- `smtp-config.php` is ignored by Git and must not be added to release archives.
- Keep `smtp-config.example.php` in repo as the template.
- `send.php` stores a backup copy of every lead in `__leads_store/`, auto-pruning JSON files older than 30 days.
- `__leads_store/` is protected by `.htaccess` and direct browser access returns 403.
- Remove diagnostic `info.php` from hosting after PHP checks.
