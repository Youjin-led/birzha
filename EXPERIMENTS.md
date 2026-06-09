# Experiments

## 2026-06-09: PHP And Mail Troubleshooting

What did not work:

- RU-CENTER manual web-server mode:
  - `.php` files were returned as static text through `openresty`.
  - `send.php` and diagnostic `info.php` showed source code instead of executing.
- Enabling `php_module`, `fastcgi_module`, and PHP parameters alone did not fix execution while the site remained in manual mode.
- PHP `mail()`:
  - returned `true` / `{"ok":true}`;
  - did not deliver messages to `patentvsem@mail.ru`.
- Enabling PHP mail logging to `/var/log/php_mail.log` caused a warning:
  - `mail(/var/log/php_mail.log): Failed to open stream: Permission denied`
  - the warning polluted JSON responses and broke frontend parsing.

What worked:

- RU-CENTER support clarified that automatic site mode should be used.
- After enabling automatic site mode and PHP 8.5, `send.php` returned proper JSON and no longer exposed source code.
- Mail.ru SMTP with an application password delivered the test request successfully to `patentvsem@mail.ru`.
- Local JSON backup in `__leads_store/` worked and was protected from public access with HTTP 403.
