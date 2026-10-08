# CyberShield Showcase

A static, mobile-first academic project showcase by **Hopeful Innovations**, FEU Institute of Technology. Built for visitors arriving from the research poster QR code.

CyberShield is an academic prototype, not an official public NAPOLCOM service or a production-certified operational platform. This website is independent of the private application. It contains no authentication, backend, database, secrets, or operational API connections.

## Stack and setup

Vite, React, TypeScript, and custom responsive CSS. Node.js 22.12+ or 24 is recommended. No environment variables are required.

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm ci` is recommended for repeatable installs using the included lockfile. The production output is `dist/`. If the local runtime restricts network-interface enumeration, use `npm run dev -- --host 127.0.0.1`.

## Structure

- `src/components/`: navigation, brand, icons, and section headings
- `src/sections/`: overview, security, gallery, research results, methodology, walkthrough, and team
- `src/data/content.ts`: feature copy, screenshot metadata, controls, results, and team names
- `src/styles/global.css`: design tokens and responsive styles
- `public/screenshots/`: reviewed demonstration screenshots, compressed to WebP
- `public/logos/`: supplied project and exhibition branding
- `public/icons/`: Icons8 iOS-family PNG icons
- `CONTENT_SOURCES.md`: research references and claim qualifications
- `ASSET_REVIEW.md`: asset decisions, missing inputs, and replacement instructions

## Design reference

The current redesign combines the approved CyberShield identity with a Kaiko-inspired editorial composition: a spacious blue hero, lightweight display typography, an overlapping ivory reading surface, thin dividers, varied section layouts, and the real role-based dashboards as the central visual. The reference informed composition only; no Kaiko branding, artwork, healthcare copy, or proprietary assets are used. Mobile preserves the same information order and intentionally restacks dense evidence and system content. No decorative cybersecurity stock imagery or fake system screens are used.

The original standalone hero photo was not supplied. The current hero uses an abstract CSS texture over the project blue, with no representational image or copied reference artwork. The mockup itself is not shipped as a website asset. See `UI_REDESIGN_NOTES.md` and `UI_REDESIGN_QA.md` for the redesign rationale, baseline, browser checks, and known limitations.

## Update content and results

Edit `src/data/content.ts` for structured content. Update the composite score and source notes in `src/sections/Results.tsx` if new authoritative results are approved. Keep quality ratings separate from technical security-testing outcomes. Current values were checked against Chapter 4, Tables 43 and 49, and Chapters 5–6 of the supplied thesis.

Never turn a documented or planned security control into a validated claim without new supporting evidence. Do not omit remediation results. Accepted outcomes include both full passes and passes with a note.

## Replace screenshots

1. Review the entire screenshot at full size for personal data, real identifiers, audit events, internal implementation details, credentials, and infrastructure information.
2. Use fictional or anonymized records. Crop or irreversibly redact sensitive areas before export; CSS overlays are not sanitization.
3. Export a legible WebP into `public/screenshots/`.
4. Update its path, dimensions, caption, and alt text in `src/data/content.ts` and the gallery component if needed.
5. Test mobile display and full-size enlargement.

The administrator screenshot is deliberately withheld. Its metadata has `image: null`, which renders an explicit placeholder. No original administrator image is present in this repository or production bundle.

The existing demonstration screenshots visibly use test names and identifiers. Their values are not presented as actual agency inventory or operational statistics.

## Add the demonstration video

Replace the clearly labeled placeholder in `src/sections/Closing.tsx` only with a sanitized video. Use accessible native video controls, captions, a transcript, no autoplay, and a lightweight poster image. Do not provide access credentials or link to the private system.

## GitHub connection

This delivery is Git-ready. No remote repository has been connected: the available GitHub integration returned no accessible repositories and did not expose repository creation.

Create an empty repository named `cybershield-project-showcase`, then from this project directory:

```sh
git init -b main
git add .
git commit -m "feat: build CyberShield academic showcase"
git remote add origin https://github.com/YOUR-USERNAME/cybershield-project-showcase.git
git push -u origin main
```

If working from an existing initialized checkout, skip initialization and the initial commit. Never include the thesis, unreviewed originals, environment files, private keys, or private application code.

## Vercel

Import the GitHub repository into Vercel, or connect it in the existing Vercel project's Git settings after repository creation.

- Framework: **Vite**
- Build command: **npm run build**
- Output directory: **dist**
- Install command: **npm ci**
- Node.js: **24.x**
- Environment variables: **none**

No `vercel.json` is required. Verify a preview deployment first. The current website can also be deployed directly from its source files without a Git connection. For future maintenance, connecting GitHub enables a reproducible change/push/deploy workflow.

Before printing a QR code, verify the permanent production URL, replace any desired placeholder assets, and review the page on a physical phone. Add absolute `og:url` and a canonical link only after the permanent production URL is established. Text-only OpenGraph metadata is included; no fabricated social-preview image is supplied.

## Accessibility and performance

Semantic sections, visible focus, skip link, native disclosure, reduced-motion support, keyboard-operable menu and gallery, and a native modal dialog with focus return. On small screens the enlarged image has its own scrollable region so details can be read without causing page overflow. Screenshot images load lazily and retain explicit dimensions. All icons are local, decorative images with empty alt text; visible text conveys the meaning.

## Asset attribution

Icons by [Icons8](https://icons8.com), iOS outline family. PNG delivery was used because the connected account did not provide SVG MCP access. Keep the visible attribution unless separately licensed for attribution-free use. Catalog IDs and source URLs are recorded in `ASSET_REVIEW.md`.

Supplied CyberShield and TICaP logos are used for the requested academic showcase; no institutional endorsement is implied.
