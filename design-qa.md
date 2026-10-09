# Design QA — Mobile Hero Overlap Fix

## Comparison targets

- Source visual truth: `C:/Users/kiesh/Downloads/CyberShield_Mobile_Hero_Overlap_Fix_Implementation_Plan.md` and `docs/qa/hero-mobile-500x900.png` (500 × 900 px).
- Combined comparison evidence: `docs/qa/mobile-hero-overlap-comparison.html`, which places the source capture and the live fixed route in one browser view.
- Browser-rendered implementation evidence: live `http://127.0.0.1:5173/` capture in the Codex in-app browser at a 390 × 1100 CSS viewport; the live route is also embedded in the combined comparison board.
- Responsive geometry checks: 320, 360, 375, 390, 393, 430, 620, 621, 768, 860, 1024, and 1440 px wide.
- Density normalization: the source is a 500 × 900 raster capture. The implementation was rendered at 390 CSS px wide with device-scale factor 1 and scaled to fit the 900 px comparison stage. No pixel-perfect size inference was made across the unequal source and implementation widths.
- State: public, unauthenticated showcase; mobile menu closed; hero at the top-of-page resting state.

## Full-view comparison evidence

The combined browser board shows the original mobile poster composition beside the live fixed hero. The implementation preserves the established white header, blue editorial headline, academic description, calls to action, supplied CyberShield mark, continuous atmospheric background, divider, and two metadata labels. The mark and metadata now remain separate in normal document flow, with visible breathing room and no collision.

The source capture predates approved copy refinements, so wording and CTA stacking were not treated as regressions from this CSS-only fix. No text, asset, component, or semantic-order changes were made for this task.

## Focused-region comparison evidence

- At 390 × 1100, the entire mobile hero is visible in one browser capture. The mark is fully contained, the divider is visible, both metadata labels sit below it, and the next section begins after the hero.
- At 390 × 844, measured visual-to-footnote separation is 42 px and the footnote-to-next-section separation is 48 px, with a zero-pixel intersection area between the logo region and metadata.
- At the 620/621 px boundary, the footnote is `position: static` at 620 px and returns to the unchanged tablet `position: absolute` behavior at 621 px. Both widths have zero intersection area.
- No focused image-quality crop was needed because the supplied hero mark asset, its sizing rule, and its rendering were intentionally unchanged.

## Required fidelity surfaces

- Fonts and typography: font family, weights, sizes, line heights, letter spacing, and mobile wrapping are unchanged. The existing hierarchy remains readable from 320 px upward.
- Spacing and layout rhythm: the mobile hero now uses `min-height: calc(100svh - 72px)` with `72px 0 48px` inner padding. The metadata participates in normal flow with 8 px top margin, 18 px top padding, and a 6 px internal gap. The obsolete 850 px narrow-screen minimum was removed.
- Colors and visual tokens: the atmospheric background, navy/blue palette, divider, and metadata colors are unchanged.
- Image quality and asset fidelity: the original `cybershield-hero-mark.webp` remains in use with the existing responsive size rules; it was not regenerated, cropped, or replaced.
- Copy and content: hero headline, description, CTA labels, logo alt text, and metadata are unchanged by the fix.
- States and accessibility: keyboard focus remains visible with the existing yellow 3 px outline and 5 px offset. The semantic order remains copy → visual → footnote. Browser console warnings/errors were empty on `/` and `/research/`.

## Findings and comparison history

### Iteration 1

- [P1] Mobile hero metadata overlapped the hero mark.
  - Location: `.hero-footnote` within the `@media (width <= 620px)` rules in `src/styles/global.css`.
  - Evidence: the source implementation combined a vertically flowing mobile hero with an absolutely positioned footnote (`bottom: 74px`) and fixed minimum heights, so the metadata could occupy the same space as the responsive logo.
  - Impact: the divider and institutional metadata could cover the hero mark or be pushed into the next section on short/narrow phones.
  - Fix: returned the mobile footnote to normal flow, cleared its positional offsets, converted it to a compact column, replaced the fixed hero minimum with a small-viewport-aware minimum, removed the narrow 850 px override, and allowed the visual wrapper to size from its content.
  - Post-fix evidence: 320–620 px checks show zero visual/footnote intersection, no horizontal overflow, and visible separation before the following section. The 620/621 transition also remains clean.

### Iteration 2

- No actionable P0, P1, or P2 findings remain.

## Open questions and residual test gaps

- Physical iPhone Safari testing was not available in this environment. Browser-based responsive validation covered the requested phone, breakpoint, tablet, and desktop widths.

## Implementation checklist

- [x] Keep the existing hero content and component structure unchanged.
- [x] Move mobile metadata into normal document flow.
- [x] Preserve the full-size hero mark and continuous background.
- [x] Remove conflicting mobile fixed/minimum-height assumptions.
- [x] Verify 320–430 px phone widths and the 620/621 px breakpoint boundary.
- [x] Confirm no horizontal overflow, visible keyboard focus, clean console output, and successful production build.

final result: passed
