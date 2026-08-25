# Security and privacy checklist

## Current static scope

- [x] No secrets or credentials in frontend code.
- [x] No backend, database, authentication, admin route or real customer seed data.
- [x] No analytics, trackers or third-party embedded media.
- [x] No enquiry storage or simulated success state.
- [x] WhatsApp handoff is transparent: the user chooses whether to send.
- [x] Free-text fields are single-line normalized and length capped before the message URL is built.
- [x] External links use explicit HTTPS origins; new tabs use `rel="noreferrer"`.
- [x] Concept is `noindex,nofollow` and visibly labelled.
- [x] No medical, payment, identity or precise-location data is requested.
- [x] Generated media and actual-media rights boundaries are documented.

## Host headers for production

Configure at the host/CDN when available:

- `Content-Security-Policy: default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self'; connect-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains` after HTTPS is stable.

The exact CSP may require adjustment if an owner-approved analytics, font or media provider is added. Do not weaken it pre-emptively.

## Incident response

For the current static site: remove or roll back the affected build, preserve logs, rotate any compromised hosting credentials, invalidate deploy tokens, reverify DNS, and document the incident. There is no application database to breach or restore.
