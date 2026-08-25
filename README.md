# DM Dance Studio Nallagandla — independent website concept

A responsive, static, conversion-focused concept for DM Dance Studio Nallagandla. The primary journey helps a visitor choose an interest and prepare a WhatsApp enquiry. The site does not store, submit, or email data.

This is **not an official owner-operated website**. It is deliberately `noindex, nofollow`. The requester confirmed permission to use selected official-account media; business facts, policies, participant releases and production-domain use still require owner approval.

## Local setup

No dependency installation or build is required. Start a local server with:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`. The owner pitch is available at `http://127.0.0.1:4173/pitch-deck/`. Optional zero-dependency checks use the installed Node runtime:

```bash
npm run verify
```

## Architecture

- Plain static HTML, CSS and JavaScript; no framework, transpiler or build step.
- Suitable for any static host or direct local preview.
- `src/data/business.js` is the single editable source for the name, phone, address, hours, map and social links.
- `src/trial.js` builds and sanitizes the WhatsApp handoff locally.
- `pitch-deck/` is a separate nine-slide owner presentation with keyboard, button, scroll and touch navigation.
- No analytics, cookies, database, email delivery, protected staff routes, accounts, or secrets.

## Content and operations

- Research evidence: `docs/SOURCE_INVENTORY.md`
- Content states and approvals: `docs/CONTENT_STATUS.md`
- Owner-media candidates: `docs/MEDIA_APPROVAL.md`
- Deployment and domain path: `docs/DEPLOYMENT.md`
- Security and privacy: `docs/SECURITY.md`
- Backup, restore and rollback: `docs/OPERATIONS.md`
- Owner handoff: `docs/HANDOFF.md`
- QA results: `docs/QA_REPORT.md`

## Media record

The live layout uses a requester-directed wine/cream/gold redesign of the official profile mark plus three official-account studio images under permission confirmed on 2026-08-24. The logo variant also supplies the favicon. See `docs/MEDIA_APPROVAL.md` for provenance and production follow-up. The earlier generated hero concept remains unused in the archive.
