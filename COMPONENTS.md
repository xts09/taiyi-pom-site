# Taiyi POM Site Component Registry

This file is the code-facing registry for the Taiyi POM website design system.
It maps recurring interface roles to canonical components, controlled variants,
current implementations, and migration boundaries across the whole site.

## Sources of Truth

Use these sources in this order:

1. `DESIGN.md` — visual principles, hierarchy, materials, and composition rules.
2. `tokens.css` — primitive, semantic, and component values.
3. `COMPONENTS.md` — component roles, ownership, variants, and migration status.
4. `.impeccable/design.json` — visual samples for design tooling; it does not
   define runtime component names or override this registry.
5. `src/components/` — production implementations.

Page CSS may arrange shared components, but must not silently create a new
surface, action, form-control, radius, or focus system.

## Status Legend

- **Canonical** — shared implementation exists and should be used for new work.
- **Partial** — shared implementation exists, but legacy aliases remain.
- **Planned** — repeated site-wide role is confirmed; shared implementation is
  not complete.
- **Pattern only** — layout may reuse tokens and primitives, but should not be
  collapsed into one generic component.

## Site Families Covered

The registry was derived from all current route families:

| Route family | Representative routes |
| --- | --- |
| Home | `/` |
| Products | `/products`, category routes, product detail routes, POM landings |
| Applications | `/applications`, application detail routes, `/components` hub and component solution routes |
| Resources | `/resources`, resource categories and technical articles |
| News | `/news/*` editorial articles |
| Company | `/about` |
| Conversion | `/contact`, technical data sheet search |
| Utility | Privacy policy, not-found, global Header and Footer |

## Company Family Composition — Pattern Only

**Owner:** `src/app/about/AboutSections.tsx` and
`src/app/about/AboutPage.module.css`.

**Composition:** image-led hero, overlapping identity plate, open company
metric rail, manufacturing evidence, credential proof, then one inquiry.
`/about` owns this complete Company sequence; the `#manufacturing` anchor
exposes production, warehouse, and testing evidence without a duplicate route.

**Rule:** reuse the family sequence and its visual materials, but do not turn
the evidence rows into generic cards or force unrelated route families into
this composition. `AboutOverviewHero`, `AboutIdentityPlate`,
`AboutCompanySnapshot`, `FactoryProofRows`, and `AboutOverviewInquiry` are a
page-family composition, not a new global component suite.

## Foundation Components

### Site Frame — Canonical

**Owner:** `src/app/layout.tsx`, `src/components/Header.tsx`,
`src/components/Footer.tsx`

**Includes:** global Header, main content boundary, Footer, skip link, desktop
and mobile navigation behavior.

**Rule:** page code must not create alternate site headers or footers. Header
surface variants are controlled states of the same component.

### Rail / Section Shell — Partial

**Current owner:** `.site-container`, site rail variables, and page-local band
styles.

**Planned owner:** `SectionShell` composition.

**Variants:** `light`, `paper`, `dark`, `evidence`; full-bleed band with a
shared inner rail.

**Do not merge:** section content layout. A rail standardizes width and outer
spacing, not the arrangement inside every section.

## Primitive Components

### Action — Partial

**Canonical owner:** `src/components/ui/button.tsx`

**Variants:**

- `primary` — solid Taiyi cobalt, one high-emphasis action.
- `inverse` — white action on controlled dark/evidence surfaces.
- `secondary` — neutral surface or quiet border.
- `productHeroPrimary` / `productHeroSecondary` — the verified paired
  actions used by product-directory Heroes; pair with the `productHero` size.
- `productDetailPrimary` / `productDetailSecondary` — the verified paired
  actions used by product-detail Heroes; pair with the `productDetailHero`
  size.
- `applicationHeroPrimary` / `applicationHeroSecondary` — the verified paired
  actions used by application-detail Heroes; pair with the `applicationHero`
  size.
- `resourceArticleInverse` — the compact white action used at the end of long
  resource articles; pair with the `resourceArticleAction` size.
- `resourceIndexPrimary` / `resourceIndexSecondary` — the cyan and glass
  action pair used by the Resources index Hero; pair with the
  `resourceIndexAction` size.
- `outline` — low-emphasis action on controlled surfaces.
- `ghost` — compact utility action.
- `link` — textual navigation action.
- `destructive` — reserved for real destructive actions, not brand emphasis.

**Legacy families to migrate:** `.cta-primary`, `.cta-secondary`,
`heroPrimaryAction`, `heroSecondaryAction`, and `inquiryAction`.

**Migration status:** all `recommendation` ActionPanel actions now use the
verified `inverse` link-button variant across product, application, POM landing,
and resource routes. Existing page-specific responsive geometry is preserved,
and the Applications index Hero is the first verified non-ActionPanel
primary/secondary pair. Product index and product-category Heroes now use the shared
`productHeroPrimary` / `productHeroSecondary` variants and `productHero` size
while preserving the legacy pair's exact geometry and responsive behavior.
Product-detail Heroes use the dedicated product-detail variants and size so
their 48px geometry, compact type, mobile full-width behavior, and longer
campaign labels remain stable without page-local button classes.
Application-detail Heroes use their dedicated variants and size while the
`.application-hero-cta` class remains only as a page-layout container.
Long resource articles use `resourceArticleInverse` so their compact white CTA
shares Button ownership without adopting the larger recommendation-panel
geometry.
The Resources index Hero uses its cyan/glass variants while
`.resource-index-actions` remains only the responsive layout container.
Shared Button focus styling is owned by `button.module.css` and must remain
visibly distinct on both light and dark surfaces.

**Rule:** links styled as buttons must use `Button` with `asChild`. Labels stay
on one line and retain at least a 44px target.

### Field Control — Canonical

**Owners:**

- `src/components/ui/input.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/field-control.module.css`

**Current consumer:** Contact inquiry form.

**Variants:** single-line input, select, textarea; shared disabled, hover, and
focus states.

**Rule:** page CSS may control field-grid placement and label spacing. It must
not redefine control height, radius, border, placeholder, or focus halo.

### Surface / Card — Partial

**Canonical owner:** `src/components/ui/card.tsx`. Its `legacy` default remains
temporarily for existing consumers that have not migrated.

**Canonical variants:**

- `standard` — white information surface, 8px radius, one quiet border.
- `soft` — cool-paper grouped surface with no extra border or shadow.
- `evidence` — production navy, 16px radius, optional satin depth, no border.
- `interactive` — standard surface plus hover/focus behavior when the whole
  card is clickable.

**Representative consumers migrated:** Product Grade Snapshot (`evidence`),
Application Typical Part (`standard`), Resource task paths (`interactive`),
About manufacturing capability (`standard`), and Contact form panel (`soft`).

**Legacy families still to classify or migrate:** `.premium-card`,
`.application-match-card`,
`.resource-index-card`, `.resource-module-card`, `.pom-landing-panel`,
certificate cards, and page-local inquiry panels.

**Rule:** a surface gets one primary depth signal at rest: border, surface
change, or shadow. Do not automatically wrap editorial content in cards.

### Directory Row — Canonical, Partial Migration

**Canonical owner:** `src/components/DirectoryRow.tsx`.

**Role:** dense, scan-first navigation for product families, application
directories, grade lists, and similar indexed collections.

**Current implementations:** resource overview rows, resource category data
rows, and resource article related links. Product family directories,
application indexes, product grade lists, and related-product rows remain
eligible migration targets when those route families are next changed.

**Variants:** `compact`, `data`, `related`.

**Rule:** Directory Row is not a Card. It may use a quiet separator and hover
surface, but it must preserve list density and aligned columns.

### Disclosure — Partial

**Canonical owner:** `src/components/ui/accordion.tsx`

**Composed consumers:** `MaterialRangeAccordion`, `ResourceFaqAccordion`, and
resource explorer components.

**Planned variants:** `plain`, `panel`, `technical-row`.

**Rule:** triggers, keyboard behavior, focus, and open/closed indicators come
from the primitive. Content structure remains domain-specific.

## Navigation Components

### Breadcrumbs — Canonical

**Canonical owner:** `src/components/Breadcrumbs.tsx`

**Variants:** `default`, `hero`, `resource`.

**Status:** `default`, `hero`, and `resource` variants share one canonical
`data-slot` anatomy. The unused `.subpage-breadcrumb` style family has been
removed; new visible breadcrumb trails must use this component.

### Secondary Section Navigation — Partial

**Canonical owner:** `src/components/SecondarySectionNav.tsx`

**Current variants:** product and application.

**Status:** the component now exposes one canonical `data-slot` anatomy for its
identity, actions, and tabs. Product/application prefix classes remain as
compatibility skin hooks while their visual rules are consolidated gradually.

**Rule:** this component owns the sticky/pinned state, tab behavior, and action
placement. Pages supply labels, anchors, and optional actions.

### Header and Mega Menu — Canonical

**Owner:** `src/components/Header.tsx` and `src/app/styles/header.css`.

**Rule:** preserve the existing shared navigation contract. Mega-menu layout is
a specialized composition, not a generic Card.

## Content Components

### Page Hero — Partial

**Confirmed variants:**

- `editorial` — text-led inner-page hero without dominant media.
- `image` — real factory, product, or application image with controlled scrim.
- `evidence` — dark technical hero paired with data or document context.

**Current implementations to consolidate:** `ResourceHero`, `.inner-hero`,
`.product-index-hero`, `.application-index-hero`,
product-detail heroes, application-detail heroes, and POM landing heroes.

**Canonical owner:** `src/components/PageHero.tsx`. Contact editorial Hero is
the first migrated representative. The About family deliberately owns a more
specific image-plus-evidence composition; its overview and manufacturing
detail share that page-family structure rather than adding another generic
`PageHero` variant.

**Heading rule:** Hero titles wrap against the real copy-column width and use
balanced line wrapping. Do not impose arbitrary `ch` limits or manual line
breaks to shape a desktop heading; a mobile breakpoint may adjust type size but
must not recreate a character-width cap. The product-category Hero is the first
verified legacy-family sample for this rule. Application index/detail Heroes
now follow the same rule, while Resource Heroes were verified as already using
real content-column bounds with balanced wrapping. A fixed, verified desktop
title may remain on one line only when the page resets to normal wrapping before
the title can overflow; the Manufacturing Hero is the current example.

**Products convergence:** The product directory, product-category, and
product-detail Heroes share the `--ds-product-hero-*` typography roles in
`tokens.css`. Route-specific imagery and information density may differ, but
eyebrow, display title, supporting copy, and positioning copy must not recreate
page-local font sizes, weights, tracking, or reading measures. The same family
also shares one `--ds-product-hero-surface-*` material: polymer-white fill,
quiet border, standard panel radius, and no resting shadow. Page CSS may control
overlay geometry and imagery but must not redefine the panel material. Shared
`--ds-product-hero-*gap` and `--ds-product-hero-inset` roles own the internal
rhythm: 48px maximum inset on wide screens, 24px minimum inset on mobile, a
tight eyebrow/title group, and a clearly separated supporting-copy group.

**Applications convergence:** The Applications directory and detail Heroes
share `--ds-application-hero-*` typography roles, aliased to the verified
Products Hero scale. Image composition and information density remain
route-specific, while eyebrow, H1, and primary supporting copy use the same
display family, weights, tracking, leading, and reading measure. Nested review
summary text remains an independent dense role. Application-detail information
cards also alias the verified Products Hero surface: polymer-white fill, quiet
border, standard panel radius, and no resting shadow. The Applications index
remains a true split Hero; do not wrap it in a decorative gradient panel or add
a thick accent rail to simulate hierarchy. Shared
`--ds-application-hero-inset`, eyebrow-gap, body-gap, and group-gap roles own
the Hero rhythm: 48px maximum detail-card inset on wide screens, 24px minimum
on mobile, and 24px separation between primary copy, review data, and actions.

**Resources convergence:** The Resources directory and standard resource
Heroes share `--ds-resource-hero-*` eyebrow, title, and body roles, aliased to
the verified Products Hero scale while retaining their route-specific dark
evidence surfaces. Long-form resource articles use the related
`--ds-resource-article-*` Read-mode roles: the same display/body families and
weights, a quieter headline scale, a 60rem editorial canvas for introductions
and technical features, and a 52rem measure for long prose. Resource titles
wrap naturally against their real content width; page-local type ramps must
not be reintroduced. Directory and standard resource Heroes also share one
evidence-material contract: the existing midnight satin texture, evidence
radius, quiet border, and no resting shadow. The split directory Hero keeps its
light task side without inventing a separate dark-panel material. Article
documents use the standard polymer-white surface, quiet border, 8px panel
radius, and no resting shadow on desktop; mobile remains integrated with the
page canvas.

**Keep separate:** the Home hero. It is the brand-level entry composition and
should consume shared Actions and typography tokens without becoming a generic
inner-page Hero.

### Section Intro — Partial

**Role:** optional eyebrow, section heading, supporting paragraph, and optional
single action aligned to the site rail.

**Current implementations:** `HomeStageHeader`, About section headers,
certification headings, product directory heads, and resource section heads.

**Visual variants:** `light`, `dark`. **Layout variants:** `stacked`, `split`.

The canonical `split` layout follows the `Split 5/7` contract in `DESIGN.md`.
It is selected only when the title and supporting copy are peer tracks and the
section body continues that geometry. `stacked` remains the default for a
single reading path. Page styles may stack a split intro responsively, but they
must not introduce arbitrary desktop fractions for peer section intros.
Indexed process layouts remain a specialized composition; their intro must
reuse the same title and description tracks as the indexed rows below it.

Evidence canvases do not require a new `SectionIntro` prop. The page owner may
place a stacked intro inside the canvas or align a split intro to the canvas's
documented internal columns. The component still owns semantics and type; page
CSS owns that placement. Do not leave the intro as a detached full-rail banner
when its copy, action, or evidence belongs to the canvas below.

**Canonical owner:** `src/components/SectionIntro.tsx`. The manufacturing
capability introduction now belongs to the About-family evidence composition;
it no longer uses a standalone `SectionIntro` wrapper.

**Rule:** this component standardizes hierarchy and spacing, not section body
layout. Its title has no default character-width cap: split layouts use the real
grid column, stacked layouts use the available rail, and a consumer may opt into
`--section-intro-title-max` only for a documented reading-width requirement.
Canonical action labels and one-intent-per-label behavior follow the Action
Intent And Labels table in `DESIGN.md`.

### Metric Group — Canonical

**Current implementations:** `CompanyMetrics`, `.base-metric`, product hero
stats, POM landing metrics, product workbench metrics, and About factory
figures.

**Variants:** `rail`, `grid`, `inline`.

**Anatomy:** label, value, optional unit, note. Numeric alignment and unit
rendering use `CountUpValue` and `UnitText` where applicable.

**Canonical owner:** `src/components/MetricGroup.tsx` with component tokens in
`tokens.css`. Home factory metrics and About facility figures are the first
migrated representatives; page styles may set layout variables but must not
redefine label/value/note typography.

### Media Figure — Canonical

**Role:** real image or document preview with a functional caption and
controlled aspect ratio.

**Current implementations:** About factory figures, application-use media,
product hero media, resource article media, certificate previews, and quality
system documents.

**Variants:** `landscape`, `portrait-document`, `edge-to-edge`, `captioned`.

**Rule:** cropping and focal point remain page data. The shared component owns
frame, caption hierarchy, loading behavior, and accessible image structure.

Long-form resource articles may use the `part-showcase` Read-mode variant for
three or fewer related molded-part geometries. It uses complete-object
containment instead of the landscape crop, keeps one shared caption, and must
frame images as representative application context rather than grade or test
evidence.

**Canonical owner:** `src/components/MediaFigure.tsx`. About facility evidence,
Manufacturing proof rows, and Automotive typical-part media are the first
migrated representatives. Page families keep control of aspect ratio, focal
point, overlay treatment, and whether edges are square or rounded through
component variables.

### Document Card — Canonical

**Role:** certificate or technical document preview with document type, title,
optional scope/status, and one clear open/download action.

**Current implementations:** `QualitySystemsSection`, About certificates,
technical data sheet search/results, and product document links.

**Variants:** `certificate`, `technical-document`, `compact-link`.

**Rule:** the document itself is not placed inside an additional decorative
card. One document equals one interactive surface.

**Canonical owner:** `src/components/DocumentCard.tsx`. About certificates use
the `certificate` variant without moving certification scope back under each
preview. Engineering-grade and product TDS search results use `compact-link`,
which remains a border-separated directory row rather than a floating card.

## Conversion Components

### Action Panel — Canonical

**Canonical owner:** `src/components/ActionPanel.tsx`.

The former `MaterialRecommendationCta` wrapper has been removed. About,
product, application, POM landing, and resource review panels now consume the
canonical component directly. `HomeInquirySection` remains a specialized
checklist composition.

The `recommendation` variant now owns the former `.material-cta*` layout,
supporting-copy treatment, evidence aside, action styling, and responsive
stacking through component tokens and internal slots. No compatibility hooks
remain.

Resource article endings now use `ActionPanel` instead of a page-local dark CTA
composition. Resource index and category section headings use the canonical
`SectionIntro` hierarchy.

**Variants:**

- `light` — neutral section-ending action.
- `evidence` — dark/satin panel for an important technical review path.
- `compact` — unskinned inline action layout.
- `recommendation` — technical recommendation band with one decisive action
  and optional evidence aside.

**Anatomy:** optional kicker, single heading, concise supporting copy, one
primary action, optional evidence aside.

**Rule:** the action label and destination are supplied by the page; surface,
spacing, type hierarchy, and Button implementation come from the component.
Recommendation titles use the full available copy width on desktop; they must
not be constrained by an arbitrary character width or forced onto one line.

Set `footerAdjacent` only when the panel is the page's final conversion action.
The shared Footer then omits its own pitch and duplicate CTA while preserving
brand, contact actions, navigation, and legal information. Do not set it when
related grades, documents, or another decision section follows the panel.

### Contact Action Tile — Canonical, Footer-scoped

**Owner:** `src/components/Footer.tsx`.

**Use:** fully clickable email, phone, and WhatsApp actions.

**Rule:** this is a specialized contact primitive. Do not reuse its dark Footer
styling for ordinary content cards.

### Floating Contact Shortcut — Canonical

**Owner:** `src/components/FloatingContact.tsx` and
`src/components/FloatingContact.module.css`.

**Role:** persistent access to the inquiry form, email, WhatsApp, and phone on
public routes. Wide desktop uses a restrained right-edge tab with a
left-opening panel; medium desktop uses a compact bottom-right trigger with a
bottom-right panel. Mobile-navigation widths rely on the Header Menu contact
paths instead of rendering a duplicate floating shortcut.

**Rule:** hide the shortcut on `/contact`, never open it automatically, keep it
below shared navigation layers, and do not replace it with a permanently
expanded stack of contact icons.

## Pattern-Only Compositions

The following must share tokens and primitives but remain domain compositions:

- Home hero and its motion sequence.
- `FactoryProofRows` cinematic manufacturing narrative.
- Product workbench/specification layouts.
- Application matching and engineering-note matrices.
- Resource article comparison and data-matrix features.
- Header mega-menu information architecture.

Collapsing these into one Card or one generic grid would erase hierarchy and
make unrelated content look templated.

## Migration Batches

### Batch 1 — Foundations and primitives

- Three-layer token foundation.
- Root token ownership.
- Button primary variant.
- Input, Select, and Textarea primitives.
- Contact form sample migration.

**Status:** completed.

### Batch 2 — Surface system

- Implement `standard`, `soft`, `evidence`, and `interactive` Card variants.
- Migrate one representative example from Products, Applications, Resources,
  About, and Contact before removing legacy surface styles.
- Verify that editorial proof layouts remain unwrapped.

**Status:** shared variants and five route-family representatives completed;
legacy consumer migration remains incremental.

### Batch 3 — Repeated compositions

- Page Hero.
- Section Intro.
- Metric Group.
- Action Panel.

**Status:** Page Hero, Section Intro, Metric Group, and Action Panel foundations
plus representative About, Contact, Home, manufacturing, product, and
application consumers completed. Batch 3 is complete; remaining legacy
consumers can migrate incrementally without inventing new anatomy.

### Batch 4 — Evidence and documents

- Media Figure.
- Document Card.

**Status:** Media Figure and Document Card foundations plus representative
About, Manufacturing, Application, and TDS consumers are complete. The
homepage quality-system gallery remains a specialized whole-card document
composition and will be reviewed with other legacy consumers instead of being
forced into a generic media card.
- Certificate and TDS migration.

### Batch 5 — Navigation consolidation

- Breadcrumb legacy cleanup.
- Secondary Section Navigation internal variant cleanup.
- Header/Footer regression only; no information-architecture redesign.

**Status:** Header regression pass A is complete. The current-section indicator
now follows `aria-current`, the Radix mega-menu closes on a repeated trigger,
and the mobile panel exposes the TDS/search destination while remaining
scrollable on short viewports. The intentional dark Header used by About routes
is unchanged pending an explicit cross-page visual decision. Breadcrumbs now
use one shared internal anatomy with the unused legacy selector family removed.
Secondary Section Navigation uses one shared internal anatomy and one set of
motion query hooks while preserving its existing product/application skins,
labels, and pinned behavior.

### Audited Follow-up Queue

1. **Completed:** the shared POM landing-page hero actions now use `Button`,
   and its technical summary rails use `MetricGroup` without replacing the
   page-specific product narrative or the plain/image hero distinction.
2. **Completed:** the TDS technical search uses the shared `Input` and
   `Button` primitives while retaining its compound search-control anatomy.
   The FAQ explorer now uses the same `Input` primitive and a standard Lucide
   search icon. Guide explorers share that same input/icon anatomy, and the
   conductive grade directory now uses the shared `Select` and `Input`
   primitives for its controlled filters.
3. **Completed:** product/application `SecondarySectionNav` variants share the
   same internal slots and motion queries while preserving route-specific
   labels, responsive tab layouts, and pinned behavior.
4. **Completed:** visible Breadcrumb consumers share the canonical component
   anatomy, and the unused `.subpage-breadcrumb` rules have been removed.
5. **Completed:** all Material Recommendation CTA consumers now use
   `ActionPanel` directly, and the compatibility wrapper has been removed.
6. **Completed:** the `recommendation` variant owns the former
   `.material-cta*` visual family through component tokens and slots; the
   compatibility selectors have been removed after full CTA route-matrix
   verification.
7. **Completed:** recommendation actions use the shared `Button` inverse
   variant, and recommendation titles wrap only when the actual layout width
   requires it.
8. **Completed:** the Applications index Hero uses shared primary/secondary
   Button variants with its original desktop/mobile geometry and a verified
   keyboard focus outline; its legacy CTA classes have been removed.
9. **Completed:** product-category Heroes use the shared product-Hero Button
   variants and size with their original desktop/mobile geometry, the
   glass-fiber mobile full-width exception, and the shared keyboard focus
   outline verified. The legacy product-Hero classes remain owned by the
   product-detail routes until that family is migrated.
10. **Completed:** the product index Hero uses the shared product-Hero Button
    variants and size with exact desktop/mobile screenshot parity and a
    verified keyboard focus outline; its legacy CTA classes have been removed.
11. **Completed:** both product-detail Hero render branches use the shared
    product-detail Button variants and size. Standard, document-supported, and
    longer campaign-label samples preserve their desktop/mobile geometry; the
    obsolete `.product-hero-primary-action` and `.product-hero-tds-link` CSS
    families have been removed.
12. **Completed:** application-detail Hero actions use the shared application
    Button variants and size. Automotive and long-title Conveyor Automation
    samples preserve their desktop/mobile geometry and keyboard focus outline;
    the former descendant-link styling is removed from the layout container.
13. **Completed:** long resource-article closing actions use the shared
    `resourceArticleInverse` variant and `resourceArticleAction` size. Standard
    and long-title article samples preserve their desktop/mobile geometry, and
    the local white-link class stack has been removed.
14. **Completed:** the Resources index Hero uses shared resource-index Button
    variants and size. Desktop and mobile screenshots retain exact pixel
    parity, including mobile full-width behavior; the three legacy action
    classes have been removed.

## Definition of Done

A component family is unified only when:

1. Its role and variants are documented here.
2. Values come from `tokens.css`.
3. A canonical implementation exists under `src/components/`.
4. At least one representative consumer from every relevant route family has
   been visually verified.
5. Legacy selectors are mapped and removed when their final consumer migrates.
6. Desktop and mobile states, focus, disabled, and content wrapping are checked.
7. Page-specific layout remains possible without redefining the component skin.
