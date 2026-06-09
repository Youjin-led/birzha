# Decisions

## 2026-06-09: Lead Delivery Uses SMTP With Local Backup

Use `send.php` as the lead endpoint for `znakvsem.ru`. The endpoint first saves every valid lead to `__leads_store/`, then sends the email. This prevents losing requests when mail delivery fails.

Use Mail.ru SMTP with an application password for reliable delivery to `patentvsem@mail.ru`. The private credentials live only in `smtp-config.php` on the hosting server. The repository contains only `smtp-config.example.php`.

Keep PHP in RU-CENTER automatic site mode. Manual web-server mode is not appropriate for this site because RU-CENTER does not guarantee the generated web-server configuration there, and PHP processing broke in that mode.
