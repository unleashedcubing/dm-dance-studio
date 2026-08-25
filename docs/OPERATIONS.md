# Backup, restore and rollback

## Backup

- Keep source in an owner-approved Git repository with protected default branch and two-factor authentication.
- Tag every owner-approved production release.
- Keep the owner-supplied original logo/media in the repository or a documented asset archive; do not rely on a hosted copy as the only original.
- Export DNS records and store registrar recovery details in the owner’s password manager, not this repository.

## Restore

1. Clone the approved repository/tag.
2. Run `npm run verify` (no dependency installation is required).
3. Start the zero-dependency local server and complete browser QA.
4. Deploy the approved static files and verify the hosted URL.

## Rollback

1. Select the last known-good tagged release.
2. Redeploy that release’s static files through the host’s immutable deployment history.
3. Purge only the affected cache paths if the host requires it.
4. Verify home, legal pages, call, directions and WhatsApp links at mobile and desktop sizes.

## Retention

The site retains no enquiries. WhatsApp conversation retention is outside this codebase and requires an owner-approved policy. If analytics or a backend is added later, define purpose, minimum fields, access roles, retention duration, deletion workflow and export controls before collection begins.
