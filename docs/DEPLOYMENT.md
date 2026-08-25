# Deployment and domain path

## Current deployment state

Not deployed. The project is directly deployable static HTML, CSS and JavaScript with no build step or backend dependency.

## Temporary preview

1. Run `npm run verify` and complete the browser QA checklist in `docs/HANDOFF.md`.
2. Deploy `index.html`, `privacy.html`, `terms.html`, `404.html`, `pitch-deck/`, `assets/`, `icons/`, `src/` and `robots.txt` to an explicitly temporary preview URL.
3. Preserve `noindex,nofollow` and `robots.txt: Disallow /`.
4. Recheck the hosted base path, main links, console, mobile navigation and WhatsApp handoff.
5. Label the URL as an independent concept, not the business’s official site.

The pitch deck lives at `/pitch-deck/`. Keep it `noindex, nofollow`; if it contains future commercial terms, review those terms separately before sharing.

## Owner-controlled production domain

Before launch:

1. Owner approves the project, facts, logo/media, privacy notice, terms and conversion wording.
2. Owner creates or controls the registrar and DNS account; never register the domain under the developer’s personal ownership.
3. Reverify name, address, phone, listing hours, schedule, website status and social profiles.
4. Choose the owner’s canonical domain and replace preview-only origin values if later added.
5. Change the meta robots policy and root `robots.txt` together; add a canonical URL, Open Graph image, production sitemap and Search Console only after approval.
6. Configure HTTPS, `www`/apex redirects and rollback access.
7. Ask the owner to update the Google Business Profile website field and official Instagram bio.

## Email and forms

No email service or server form exists. The site prepares a WhatsApp message locally. Do not promise email delivery, stored enquiries, automatic confirmations or an admin dashboard.

If future requirements need lead storage, select an authenticated server runtime first; add server validation, authorization, secure cookies, CSRF protection, rate limits, audit logging, retention rules and owner-controlled provider accounts before enabling it.
