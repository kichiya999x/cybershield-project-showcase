# CyberShield Project Showcase

A responsive research showcase for the CyberShield academic prototype by Hopeful Innovations at FEU Institute of Technology.

## Local development

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/`. The standalone research summary is available at `http://127.0.0.1:5173/research/`.

## Production build

```bash
npm run build
npm run preview
```

The Vite multi-page build produces both the showcase and Research Summary. No React Router dependency is required.

## Project structure

- `src/sections/` — showcase sections
- `src/ResearchSummary.tsx` — document-style research summary
- `src/data/content.ts` — shared structured project content
- `src/styles/global.css` — authoritative site stylesheet
- `public/` — reviewed public images, icons, and logos
- `docs/` — source, asset, design, QA, and deployment records

The current branch is implementation-only. It has not been merged or deployed. The planned video walkthrough remains a documented future enhancement and is not rendered as a placeholder.
