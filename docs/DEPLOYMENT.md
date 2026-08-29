# Deployment and domain path

## Current deployment state

Preview deployed on GitHub Pages from the root of `main` with HTTPS enforced.

- Repository: `https://github.com/unleashedcubing/dm-dance-studio`
- Public preview: `https://unleashedcubing.github.io/dm-dance-studio/`
- Owner pitch: `https://unleashedcubing.github.io/dm-dance-studio/pitch-deck/`
- Initial deployed commit: `beb9f1627074d8216e9bef1ae2b57d66fed0f508`

The project is static HTML, CSS and JavaScript with no build step or backend dependency. GitHub Pages uses `main` and `/(root)` as the publishing source; `.nojekyll` prevents Jekyll processing.

## Temporary preview

1. Run `npm run verify` before each push.
2. Push the reviewed commit to `main`; GitHub Pages republishes the root automatically.
3. Preserve `noindex,nofollow` and `robots.txt: Disallow /` while this is a concept preview.
4. Recheck the hosted base path, main links, console, mobile navigation and WhatsApp handoff after each material release.
5. Continue labeling the URL as an independent concept, not the business’s official site.

The pitch deck lives at `/pitch-deck/`. Keep it `noindex, nofollow`. It now contains the requester-supplied fixed commercial terms of ₹8,000 upfront plus ₹1,200 per month; recheck those terms before sharing.

## Owner-controlled production domain: dmdancestudio.in

Before launch:

1. Owner approves the project, facts, logo/media, privacy notice, terms and conversion wording.
2. Owner creates or controls the registrar and DNS account; never register the domain under the developer’s personal ownership.
3. Reverify name, address, phone, listing hours, schedule, website status and social profiles.
4. Register or confirm owner control of `dmdancestudio.in`, then replace preview-only origin values with that canonical domain.
5. Change the meta robots policy and root `robots.txt` together; add a canonical URL, Open Graph image, production sitemap and Search Console only after approval.
6. Configure HTTPS, `www`/apex redirects and rollback access.
7. Ask the owner to update the Google Business Profile website field and official Instagram bio.
8. Confirm that the current Google listing number, `+91 91001 30108`, accepts WhatsApp; update the single business data source if the owner supplies a different WhatsApp number.

## Email and forms

No email service or server form exists. The site prepares a WhatsApp message locally. Do not promise email delivery, stored enquiries, automatic confirmations or an admin dashboard.

If future requirements need lead storage, select an authenticated server runtime first; add server validation, authorization, secure cookies, CSRF protection, rate limits, audit logging, retention rules and owner-controlled provider accounts before enabling it.
