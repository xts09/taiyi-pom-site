# Taiyi Polymer Site Design Audit

Method: joint Taste + Impeccable review in a single context. The project rules in
`AGENTS.md`, `DESIGN.md`, `PRODUCT.md`, `COMPONENTS.md`, and `tokens.css` are the
acceptance authority. Taste was used for visual specificity and composition;
Impeccable was used for heuristic, responsive, accessibility, and implementation
integrity checks.

Date: 2026-08-01

## Scope And Evidence

Desktop review used 1920x1080. Mobile review used 390x844.

Representative routes:

- `/`
- `/products`
- `/products/categories/pom`
- `/products/ecf300-carbon-fiber-pom`
- `/applications`
- `/applications/automotive`
- `/resources`
- `/about`
- `/contact`

Shared states checked:

- Dark home Header, closed and Products mega menu expanded.
- White inner-page Header, closed and Products mega menu expanded.
- Mobile menu expanded.
- Shared Footer on desktop and mobile.
- Home GSAP sections after real scroll activation.

Rendered evidence is stored under `output/playwright/audit-*.png`.

## Design Read

This is an overseas-facing industrial B2B sourcing site for procurement teams,
material engineers, and molding engineers. The correct visual world is calm,
precise, physical, and evidence-led. The current direction is strongest when it
uses real production evidence, dark engineered-material surfaces, compact type,
and restrained motion. It becomes less specific when it falls back to repeated
white cards, blue side tabs, and thin separators.

Recommended dials: design variance 5, motion intensity 5, visual density 5.

## Design Health

| # | Heuristic | Score | Key issue |
| --- | --- | ---: | --- |
| 1 | Visibility of system status | 3 | Interactive and motion states are clear; some reveal content is temporarily hidden during initialization. |
| 2 | Match with the real world | 4 | Part, mold, grade, document, and factory language maps well to buyer work. |
| 3 | User control and freedom | 3 | Navigation and disclosures are reversible; mobile target size needs work. |
| 4 | Consistency and standards | 2 | CTA labels, section intros, cards, and page-local CSS drift from the documented system. |
| 5 | Error prevention | 3 | Contact form sets a clear minimum and labels optional fields. |
| 6 | Recognition rather than recall | 4 | Product families, applications, documents, and contact paths remain visible. |
| 7 | Flexibility and efficiency | n/a | Marketing and technical-reading surface, not an operation-heavy application. |
| 8 | Aesthetic and minimalist design | 3 | Home and About are strong; product/application details overuse framed modules. |
| 9 | Error recovery | 2 | Form states exist in code, but submission failure was not exercised in this visual audit. |
| 10 | Help and documentation | 4 | TDS, Resources, document badges, and inquiry preparation are prominent. |
| **Total** |  | **28/36** | **Good foundation, inconsistent execution** |

## Technical Audit Health

| Dimension | Score | Key finding |
| --- | ---: | --- |
| Accessibility | 3/4 | Semantics, labels, focus styles, and reduced motion are present; mobile menu targets fall below the 44px project baseline. |
| Performance | 3/4 | Media uses Next Image and motion is bounded; several animation systems and large style layers increase complexity. |
| Responsive design | 3/4 | No horizontal overflow at 390px; core layouts stack correctly. |
| Theming | 2/4 | Tokens exist but hard-coded values remain widespread. |
| Implementation integrity | 2/4 | Shared components are partial while late overrides and page-local visual systems remain common. |
| **Total** | **13/20** | **Acceptable; significant system cleanup remains** |

## Priority Findings

### P1 - Resources index no longer delivers the documented directory experience

**Location:** `src/app/resources/page.tsx:47`,
`src/app/styles/resources.css:11`, `PRODUCT.md` Active Implementation Snapshot.

The page currently contains one hero/task card and then the Footer. At desktop,
`main.min-h-screen` leaves a large empty area between the card and Footer. More
importantly, the grouped resource lists and restrained contact path described in
the product baseline are absent. The result feels like a gateway placeholder,
not a technical resource directory.

**Recommendation:** restore grouped resource previews below the task selector,
using directory rows rather than more floating cards. Remove the artificial
desktop void by letting content determine the main height.

### P1 - Runtime styling has drifted beyond the documented system

**Location:** primarily `src/app/globals.css`,
`src/app/styles/products.css`, and `src/app/styles/home.css`.

The deterministic source scan found 897 items: 889 advisories and 8 warnings.
The advisories include 440 font-size and 384 color values outside the current
DESIGN definition. A direct scan found 341 `!important` declarations and 1,007
hard-coded hex occurrences. `SectionIntro` is used in only three files while 26
TSX files own local H2/H3 compositions. Not every value is wrong, but the volume
explains why peer sections repeatedly drift in alignment and hierarchy.

**Recommendation:** migrate by visual role, not by global rewrite. Start with
Section Intro and Directory Row ownership, then remove obsolete final-active
overrides from one route family at a time.

### P2 - General-contact CTA labels violate the canonical intent table

**Location:** `src/components/ExportRoutesSection.tsx:51`,
`src/components/HomeInquirySection.tsx:32`, `DESIGN.md:366`.

`Start a material review` and `Share Project Requirements` both lead to the same
general `/contact` intent that the system names `Discuss Your Application`.
This weakens recognition and makes similar conversion moments feel independently
written.

**Recommendation:** use `Discuss Your Application` for both links. Keep `Submit
Project Requirements` only for the form submit control.

### P2 - Product and application details overuse cards, side tabs, and separators

**Location:** `src/app/globals.css:1577`,
`src/app/styles/products.css:289`, product/application detail templates.

The application part grid and product evaluation sections repeat blue left bars,
bordered white panels, nested data cells, and thin dividers. The detector flagged
seven side-tab patterns. Some title markers are intentional, but repeating them
inside every card makes the detail templates more generic and less premium than
the evidence-led Home and About pages.

**Recommendation:** reserve the blue marker for major section identity. Render
typical parts and material data as directory rows or unframed grids; use a card
only where the whole surface is interactive or materially elevated.

### P2 - Mobile navigation targets are below the project 44px baseline

**Location:** `src/components/Header.tsx:608`,
`src/components/Header.tsx:647`, `src/app/styles/header.css:902`.

At 390px, the main Menu summary measured 38px high and many submenu links
measured 35px. They remain usable and exceed WCAG 2.2's 24px minimum, but they
miss this project's explicit 44px control standard and are unnecessarily tight
for a dense multi-level menu.

**Recommendation:** increase the summary and submenu row block size to at least
44px without enlarging the visible typography.

### P2 - Conversion panels repeat immediately before a conversion-heavy Footer

**Location:** `src/components/Footer.tsx:124` and ActionPanel consumers on
Products, Applications, product detail, application detail, and About routes.

Many pages end with a large inquiry panel, followed directly by a Footer that
repeats the pitch, CTA, email, call, and WhatsApp actions. The second block adds
little new information and makes page endings feel formulaic.

**Recommendation:** keep the Footer contact system, but use compact contextual
end panels or omit them where the preceding page already resolves the inquiry
intent.

## Positive Findings

- Home now has coherent alignment across Material Range, Grade Shortlist,
  certificates, Export Routes, and the inquiry section.
- The dark and white mega menus align to the same visible rail and connect to
  their Headers without a seam.
- Certified Quality Systems presents real certificate evidence with readable
  hierarchy; lazy-loaded placeholders disappear after real scroll activation.
- Export Routes has a strong structure, correct route endpoints, and visible
  path-drawing motion after entering the viewport.
- Product category data remains scan-friendly on mobile and does not overflow.
- Contact uses clear required/optional labeling, practical prompts, and a usable
  desktop/mobile hierarchy.
- All inspected routes had zero runtime console errors. TypeScript passed.

## Motion Verdict

Motion is no longer too sparse. The strongest moments are the hero entry,
material-range reveal, qualification sequence, and Export Routes path drawing.
The system respects `prefers-reduced-motion` in the reviewed motion components.
Do not add more global reveal effects before fixing static hierarchy. Future
motion should be reserved for route drawing, disclosure state, image evidence,
and high-level section pacing.

## Recommended Repair Batches

1. **Resources index:** restore grouped directory content and remove desktop
   empty height.
2. **Shared language:** normalize the two homepage CTA labels and mobile menu
   target sizes.
3. **Detail-template polish:** remove repetitive side tabs, nested frames, and
   low-value separators from product/application details.
4. **System migration:** expand SectionIntro/Directory Row adoption and retire
   obsolete overrides route family by route family.
5. **Footer strategy:** reduce duplicate pre-Footer conversion panels after the
   earlier batches stabilize.

## Resolution Status

- **Completed:** Resources now provides a grouped technical directory on
  desktop and mobile instead of ending after the hero.
- **Completed:** homepage inquiry labels now use the canonical `Discuss Your
  Application` language, and mobile navigation targets meet the 44px minimum.
- **Completed:** repetitive card-level blue markers were removed from the
  automotive application and product-detail support sections; the primary data
  section marker remains.
- **Completed:** final conversion panels now explicitly mark Footer adjacency.
  On those routes the Footer removes its duplicate pitch and CTA while keeping
  brand, contact actions, navigation, and legal information. Routes without a
  final conversion panel retain the full Footer.
- **Completed:** the resource page family now uses shared `SectionIntro` for
  directory and related-resource headings, and resource article endings use the
  canonical `ActionPanel`.
- **Completed:** `DirectoryRow` now owns resource overview, category data, and
  article-related rows through compact, data, and related variants. Obsolete
  resource row selectors were removed.
- **Completed:** the resource shell no longer carries legacy container utility
  classes, reducing `resources.css` from four `!important` declarations to zero.
- **Completed:** the 404 layout no longer applies a second viewport-height
  minimum, removing the large desktop and mobile gap before the Footer.
- **Ongoing maintenance:** obsolete global overrides should continue to be
  retired route family by route family when those templates are next changed;
  a one-shot stylesheet rewrite remains outside this visual repair because it
  would create unnecessary cross-route regression risk.

## Run Notes

- Impeccable URL detector was skipped because its optional Puppeteer dependency
  is not installed; Playwright rendered checks and the source detector were used
  instead.
- Source detector result: 897 total, 8 warnings, 889 advisories. The seven
  side-tab warnings were manually checked; title markers are valid in isolation,
  repeated card-level markers are not.
- `npm run catalog:check`: passed with 193 records.
- `npm run seo:catalog-check`: passed with 115 indexable grade pages and no
  duplicated descriptions.
- `npm run lint`, `npm run typecheck`, and the three existing tests: passed.
- Isolated production build: passed with 225 generated static pages.
- Browser console: no unexpected errors on inspected routes. The deliberate
  404 route reports only its expected failed main-document request.
- Tailwind source discovery now excludes standard, isolated-build, and stale
  `.next` directories, preventing generated HTML from contaminating dev CSS.
- Port 3000 was restored after clearing the contaminated dev cache and remains
  available. All Playwright audit sessions were closed.
- The audit snapshot was completed before implementation; the resolution status
  above records the focused follow-up changes made from its findings.

## 2026-08-02 Incremental Review

### Scope

- Rechecked all 19 route entry points plus representative product, category,
  application, resource, campaign, legal, and 404 pages.
- Inspected desktop layouts at 1920x1080 and representative mobile layouts at
  390x844, including dark/white Header states and pinned secondary navigation.
- Re-ran catalog, SEO, asset-reference, image-sizing, copy, and interaction
  checks. No missing referenced assets, broken inspected images, or horizontal
  overflow remained.

### Corrections

- Removed an inherited rounded cyan decoration from the application-detail hero
  support band and verified the white hero-to-navigation transition.
- Limited application-detail compact sticky actions to desktop. Mobile and
  tablet pinned states now keep only the section tabs instead of covering the
  page with duplicated title and CTA controls.
- Increased the desktop product-detail CTA column so both primary actions remain
  single-line while preserving the existing responsive collapse.
- Tightened form semantics and microcopy: email spellcheck is disabled,
  project-detail autocomplete is suppressed, visible ellipses are normalized,
  and the shared accordion no longer transitions every CSS property.
- Replaced four stale `Taiyi Plastic` SEO titles with the canonical
  `Taiyi Polymer` name in source catalog records and regenerated the catalog.

### Verification

- `npm run lint`, `npm run typecheck`, and all 9 tests passed.
- Catalog check passed with 193 records; SEO check passed with 115 indexable
  grade pages, no duplicate descriptions, and no fully duplicated pages.
- Production build passed with 225 generated static pages.
- Fresh console monitoring across Home, application detail, product detail, and
  Contact returned zero console errors and zero page errors.
- Final visual evidence was inspected for Home Hero/factory metrics, application
  detail desktop/mobile pinned states, product detail desktop/mobile, product
  category pinned state, resource article mobile, Privacy, and 404.

### Homepage Visual Convergence

- Integrated the Hero screening card into the video surface and retained video
  autoplay on desktop and mobile.
- Reworked Material Range as one core-material panel plus a continuous,
  responsive material directory without nested outlined cards.
- Rebuilt grade shortlisting as a four-stage process rail. GSAP now animates
  the rail from origin to completion while essential copy remains visible before
  intersection observers run.
- Unified the certification and export-route sections around the shared
  `SectionIntro` and `Card` contracts, strengthened default route visibility,
  and aligned the final inquiry panel with shared button tokens.
- Inspected `/` at 1920x1080 and 390x844, including the Hero/factory metrics,
  material directory, shortlist flow, certificates, export route interaction,
  and final inquiry panel. Both viewports had zero document overflow and the
  browser console reported zero errors.
