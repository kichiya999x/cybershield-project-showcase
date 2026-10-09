# Design QA

## Comparison targets

- Source visual truth: `docs/qa/reference-current-hero.png` (2048 × 1233), `docs/qa/reference-poster.png` (1078 × 450), and `docs/qa/team-compact-reference.png` (3060 × 1814).
- Combined comparison evidence: `docs/qa/hero-comparison.png` (1800 × 1400) and `docs/qa/team-compact-comparison.html` (source image and live implementation in the same browser view).
- Browser-rendered implementation evidence: `docs/qa/hero-desktop-1440x900.png` (1440 × 900), `docs/qa/hero-mobile-500x900.png` (500 × 900), and the live `/`, `/#team`, and `/research/` routes captured in the Codex in-app browser during this QA pass.
- CSS viewports: 1440 × 900 for desktop comparison; 390 × 844 for the Research Summary mobile refinement; additional responsive checks at 320 × 800, 768 × 1024, 1024 × 768, and 844 × 390.
- Density normalization: browser captures were evaluated at their CSS viewport dimensions. The larger source captures were fitted with `object-fit: contain` on the comparison boards; no pixel-level measurement was inferred from the density mismatch.
- State: public, unauthenticated academic showcase with the hero at rest, the team section in view, and the Research Summary at its document header.

## Full-view comparison evidence

The poster references and implementation retain the same dominant visual hierarchy: pale institutional background, blue typographic headline, asymmetric poster field, large CyberShield mark, academic navigation, and a warm off-white editorial transition into the content. The redesigned team section preserves the original section heading and four-person order while reducing the oversized ID-photo treatment to a compact circular directory.

## Focused-region comparison evidence

- Hero: the supplied CyberShield image remains an image asset rather than a CSS or SVG substitute. The white wordmark remains visible against the dark-blue poster field, and the mark stays fully contained at desktop and mobile breakpoints.
- Team: the four original portraits remain unretouched, consistently cropped at 136 px desktop and 120–130 px smaller breakpoints, with thin blue outlines, centered names, understated roles, and the original institutional footer row.
- Research Summary: focused mobile review confirmed a 39 px display title at 390 px, readable line wrapping, no clipping, and a 375 px document scroll width inside the 390 px viewport.
- Dashboard evidence: the Administrator screenshot uses the same interface composition as the source but replaces identifying/event details with demonstration labels. All dashboard crops and enlargement controls remain clear.

## Required fidelity surfaces

- Fonts and typography: the Segoe UI Variable/system fallback preserves the source’s clean institutional tone. Display weights, compact uppercase labels, body leading, and the mobile Research Summary wrap were visually checked.
- Spacing and layout rhythm: section-label columns, thin-rule grids, paper-surface transitions, team density, and responsive track changes remain consistent with the editorial reference.
- Colors and tokens: the warm ivory, navy, CyberShield blue, pale-blue section tint, and restrained yellow focus accent map to the poster and existing showcase language.
- Image quality and asset fidelity: all supplied marks and portraits remain real raster assets. Runtime hero and Administrator WebPs were quality checked; the latter and hero mark are pixel-identical lossless conversions, while the atmospheric hero background measured 42.74 dB PSNR.
- Copy and content: public copy identifies the work as an academic prototype, separates participant ratings from security tests, and qualifies unvalidated/deployment-level controls.
- States and accessibility: mobile navigation, tab keyboard navigation, selected states, dialog escape/focus return, alt text, landmarks, and console output were checked.

## Findings and comparison history

### Iteration 1

- [P2] Mobile Research Summary title dominated the first viewport.
  - Evidence: at 390 × 844, the initial display scale pushed the lead and prototype notice too far below the title.
  - Fix: reduced the mobile title clamp from the initial 2.35rem/12vw scale to `clamp(2rem, 10vw, 3rem)`.
  - Post-fix evidence: in-app browser recapture at 390 × 844 measured a 39 px font size, kept the full title readable, brought the lead and disclosure into the first viewport, and retained zero horizontal overflow.

### Iteration 2

- No actionable P0, P1, or P2 differences remained in the hero, team, dashboard, or Research Summary comparisons.

## Open questions

- None blocking. Physical-device and deployed signed-out validation remain release checks rather than design mismatches.

## Follow-up polish

- [P3] Consider a dedicated serif or humanist display face only if the project later adds licensed local font assets; the current system-font stack is intentionally dependency-free and visually consistent.

## Implementation checklist

- [x] Preserve poster-inspired hero identity and supplied imagery.
- [x] Add verified objectives/scope and a dedicated Research Summary.
- [x] Replace the Administrator placeholder with sanitized public evidence.
- [x] Keep team portraits compact, circular, consistent, and responsive.
- [x] Confirm keyboard interactions, console state, responsive layout, and production build.

final result: passed
