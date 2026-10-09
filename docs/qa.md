# QA Record

Date: 2026-10-09  
Branch: `feat/ui-redesign-v1`

## Automated checks

- `npm ci` — passed after stopping the running Vite process that held the Windows Rolldown binary open; 23 packages audited, zero vulnerabilities.
- `npm run build` — passed. Vite produced both `dist/index.html` and `dist/research/index.html`.
- `git diff --check` — passed; only Windows line-ending notices were reported.
- Dead-source search — passed for removed control status fields, walkthrough/placeholder markup, legacy Evidence navigation copy, and placeholder screenshot classes.

## Browser checks

Checked in the Codex in-app Chromium browser against `http://127.0.0.1:5173/`.

- Responsive widths: 320 × 800, 390 × 844, 768 × 1024, 1024 × 768, 1440 × 900, and 844 × 390.
- No unintended horizontal page overflow at any checked width.
- Study Objectives changes from one column on mobile/tablet to two columns on desktop.
- Team layout changes from one column at 320/390, two columns at 768/844 landscape, and four columns at 1024/1440.
- Hero mark remained fully contained across the checked breakpoints; the supplied white-text mark is visible on desktop and remains within the mobile hero.
- Mobile menu opens, closes with Escape, and restores focus to the menu button.
- Dashboard tabs respond to Home and End and update `aria-selected` correctly.
- The screenshot dialog opens, closes with Escape, and returns focus to its invoking screenshot button.
- All four dashboard assets loaded with non-zero natural dimensions, including the sanitized Administrator WebP at 1586 × 992.
- All four team portraits loaded and rendered at a consistent 136 × 136 CSS pixels on desktop.
- `/research/` loads with its unique title and metadata, has no horizontal overflow at 390 px, and returns to the showcase through its navigation.
- Main showcase and Research Summary browser consoles reported no warnings or errors.

## Accessibility and motion

- Semantic headings, links, buttons, tab roles, dialog labeling, image alt text, skip navigation, and visible focus styles were checked in the rendered accessibility tree.
- Reduced-motion behavior is implemented in both React reveal logic and the stylesheet media query. Browser media emulation was not available in the in-app QA surface, so this behavior was source-verified rather than runtime-simulated.

## Not performed

- Physical-phone testing
- Signed-out testing against a deployed URL
- Production or preview deployment of this branch
- Screen-reader testing with a dedicated assistive-technology application
