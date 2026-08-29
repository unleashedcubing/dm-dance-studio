# QA report — 2026-08-29

## Automated, zero-dependency checks

Command: `npm run verify`

- JavaScript syntax: **pass** for `business.js`, `trial.js`, `main.js`, `legal.js`, and `pitch-deck/deck.js` using `node --check`.
- Unit tests: **4/4 pass** using the Node test runner.
  - Multiline input normalization and length caps.
  - Non-confirmatory batch-enquiry message wording.
  - Phone normalization and URL encoding.
  - Invalid phone rejection.
- Main-link scan: **pass** across `index.html`, `privacy.html`, `terms.html`, `404.html`, and `pitch-deck/index.html`; no broken local asset/page links.
- Dependency audit: not applicable; the final project has no dependencies or lockfile.
- TypeScript/build/migration checks: not applicable after the user explicitly chose plain HTML/CSS/JavaScript, with no build or database.

## Browser-driven journey checks

Browser: Codex in-app Chromium surface against `http://127.0.0.1:4173/`.

- Home title and primary H1: **pass**.
- Verified call, Google Maps, Instagram and WhatsApp links populated from the single business data source: **pass**.
- Call links remain on the verified public studio number, while every preview WhatsApp entry point resolves to the requester-supplied temporary destination `7702504241`: **pass**.
- Embedded Google Map resolves the correct DM Dance Studio Nallagandla listing and retains a direct directions fallback: **pass**.
- Brand-color logo, favicon and three local official-account images load with their declared dimensions: **pass**.
- Nine Instagram profile/reel links resolve to the expected official profile or exact reel; both gallery captions expose “Watch the full dance”: **pass**.
- Three attributed testimonial cards render from the requester-supplied review screenshots, with staggered reveal motion and no outbound review links: **pass**.
- Review-score separator lines, optional-field badges and the review action row are absent: **pass**.
- Class-card action copy has consistent 17 px breathing room below its divider at desktop and mobile: **pass**.
- Review ratings are now informational rather than tiny outbound targets; inline conversion links and gallery reel links expose larger touch areas: **pass**.
- Mobile navigation opens, reports `aria-expanded="true"`, and exposes links: **pass**.
- “Ask about Zumba” scrolls to the enquiry form, sets `interest` to `Zumba fitness`, and focuses the select: **pass**.
- FAQ disclosure opens and reveals the direct kids/adults answer: **pass**.
- Removed research/process phrases are absent from customer-facing content: **pass**.
- Gallery callout occupies its own grid row and does not overlap photos or captions: **pass**.
- Enquiry form uses a light high-contrast surface, visible labels and 57 px fields at desktop and mobile: **pass**.
- Privacy link resolves and renders the correct heading/title: **pass**.
- WhatsApp message submission was not sent during QA; the pure message builder is covered by unit tests.
- Console warnings/errors on checked routes and viewports: **none**.

## Owner pitch checks

- Owner-facing copy addresses the studio directly with consistent “you/your” language and uses “we/our” only for the proposed delivery partnership: **pass**.
- Nine slides render with exactly one active slide at a time: **pass**.
- Previous/next buttons, live counter, URL hash, document title and progress bar update together: **pass**.
- Left/right and Page Up/Page Down keyboard navigation move between slides without creating internal slide scrolling: **pass**.
- All nine slides have zero page overflow at 1600×900; the complete 16:9 presentation frame and controls fit without scrolling: **pass**.
- All nine slides fit without horizontal or vertical overflow at 390×844 and the shorter 390×693 mobile viewport; the control bar remains outside the slide canvas: **pass**.
- Presentation framing: centered 16:9 canvas above 760 px and centered 9:16 canvas on mobile, with controls reserved outside the frame: **pass**.
- Deck logo and studio imagery load; the final website and Instagram actions resolve correctly: **pass**.
- Reduced-motion rules and print pagination are present: **pass**.
- The deck states the requester-supplied fixed terms of ₹8,000 upfront plus ₹1,200/month and the intended `dmdancestudio.in` handoff without a revenue guarantee or outcome claim: **pass**.

## Responsive visual checks

| Viewport | Result | Notes |
|---|---|---|
| 390×844 narrow mobile | Pass | Mobile menu and four-way call/directions/WhatsApp/Instagram bar visible; single-column enquiry form and studio-photo crops remain readable |
| 768×1024 tablet | Pass | Single-column hero, full-width visual and clean content hierarchy; no overflow |
| 1280×600 short laptop | Pass | Header, headline and primary CTA remain visible; remaining hero detail scrolls normally |
| 1440×900 desktop | Pass | Balanced poster-style split hero; map and photo collage render cleanly with no layout shift observed |

At every checked width, `document.documentElement.scrollWidth` equalled the viewport width.

## Accessibility checks completed

- Semantic landmarks, one H1, ordered heading hierarchy and labelled navigation.
- Keyboard-visible focus styling and skip link.
- 44 px or larger primary touch targets.
- Mobile navigation state is exposed through `aria-expanded`.
- Form inputs have visible labels and native required validation.
- Reduced-motion CSS disables non-essential reveal, marquee, vinyl and image motion.
- Official studio images have explicit dimensions and descriptive alt text; the generated brand-color logo remains square at every checked breakpoint and favicon size.
- Color contrast was selected conservatively; a formal external WCAG contrast audit remains recommended before production.

## Hosted verification

- GitHub Pages build and deployment for commit `beb9f1627074d8216e9bef1ae2b57d66fed0f508`: **success**.
- Public website: **200** at `https://unleashedcubing.github.io/dm-dance-studio/`.
- Owner pitch: **200** at `https://unleashedcubing.github.io/dm-dance-studio/pitch-deck/`.
- Privacy and terms pages: **200**.
- Unknown path: **404**, with the repository's custom 404 detected by GitHub Pages.
- Hosted visual and console recheck: **not run** because the browser-testing surface was unavailable after deployment. Local browser journey, console and responsive checks remain passing; repeat them against the hosted URL before an owner meeting if the browser surface becomes available.
