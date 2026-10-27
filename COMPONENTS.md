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

## Applicability

This registry governs production implementations, repairs and extensions.
Independent concepts/Demos in `outputs/` may use their own HTML/CSS, Header,
buttons, cards and temporary interaction patterns. They do not need to migrate
canonical components or exercise unchanged route families before showing a
draft. Use existing assets and components when useful, not as a mandatory
constraint on visual exploration. A requested production redesign may introduce
new variants or owners within its authorized scope and update this registry
when those choices are adopted.

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

**Owner:** `src/app/(en)/about/AboutSections.tsx` and
`src/app/(en)/about/AboutPage.module.css`.

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

**Owner:** `src/app/(en)/layout.tsx`, `src/app/[locale]/layout.tsx`,
`src/components/Header.tsx`, and `src/components/Footer.tsx`.

**Includes:** global Header, main content boundary, Footer, skip link, desktop
and mobile navigation behavior.

**Rule:** page code must not create alternate site headers or footers. Header
surface variants are controlled states of the same component.

Footer retains the white PLATFORM® wordmark as a home link, with the
manufacturer/material-brand relation in the caption below. Desktop navigation has four flexible columns; complete localized
labels wrap within their own column. Do not truncate labels, shrink type, or
force nowrap. Resources includes the localized Grade Data & TDS entrance.
Mobile navigation uses labeled, line-separated disclosures with 44px minimum
link targets. Brand relation, direct contacts, navigation, and legal links are
owned by Footer on every route. Application inquiry and grade-evaluation
sections belong to their page compositions and do not change Footer structure.

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
  actions used by product-category Heroes; pair with the `productHero` size.
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
primary/secondary pair. Product-category Heroes use the shared
`productHeroPrimary` / `productHeroSecondary` variants and `productHero` size
while preserving the legacy pair's exact geometry and responsive behavior.
The Products overview uses one `primary` action with `form` sizing in its
image PageHero.
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

**Field composition pilot (2026-10-10):** `src/components/ui/field.tsx` and
`label.tsx` adapt the official shadcn/ui Field structure to the existing native
controls, utility import, and semantic tokens. `FieldSet`, `FieldLegend`,
`FieldGroup`, `Field`, `FieldLabel`, and `FieldDescription` own the label/control/
help-text composition. Vertical, horizontal, and responsive orientations are
explicit variants. Consumers provide unique IDs and `aria-describedby` links.
The initial consumer is the development-only component acceptance page;
Contact retains its current form owner pending a separately verified migration.

### Component Acceptance Page — Development Only

**Owners:** `src/app/(en)/design-system/page.tsx` and
`src/components/design-system/ComponentShowcase.tsx` with its CSS module.

**Route:** `/design-system`; unavailable outside development, with `noindex`
metadata and no public navigation or sitemap entry.

**Acceptance-tool interface:** `ShowcaseNavigation.tsx` owns the sticky category
index, current-section state and native language selector shared by the gallery
and Home companion. `showcase-config.ts` owns their section definitions,
supported language options and preview-language resolution. The navigation uses
passive scroll observation, reads current section nodes after streamed updates,
and keeps the selected link visible within the desktop horizontal index. Below
48rem, a native category selector replaces that index; it shares the same
current-section state and stable anchors. Category and language controls sit
side by side in one 64px row, with accessible labels.

`/design-system?lang=zh|en|de|fr|pt-br` selects the existing Home, navigation and evidence
messages and localized destinations; the tool interface stays Chinese. Language
changes retain a recognized section hash and re-align it beneath the sticky
controls. Home composition and actual-home links preserve the chosen language.
The selector uses the existing native Select and Field owners, including their
focus and disabled states while navigation is pending.

Catalogue headings and navigation are the acceptance tool's own compact
interface. They do not redefine the specimens' appearance. The shared
SectionIntro examples remain under `#composition`; all production specimens
continue to use their actual component owners.

`NavigationShowcase.tsx` and its CSS module own the internal navigation
specimen at `#navigation`. Its version selector defaults to the actual local
Header and also offers the selected single-row concept and original proposal.
The single-row concept lives in `outputs/navigation-single-row-2026-10-17/`
and is served only in development by
`src/app/(en)/design-system/navigation-single-row/route.ts`. It receives existing
messages and `buildHeaderNavigation` destinations. Scene, initial menu state,
language and viewport controls support visual comparison. The single-row
direction was adopted in the shared local Header on 2026-10-17. The original proposal
is an independent HTML artifact in `outputs/navigation-concept-20261015/`,
served only in development by
`src/app/(en)/design-system/navigation-concept/route.ts`; its approved direction
was adopted into the shared Header on 2026-10-15. Its data comes from existing messages and navigation
sources. A single lazy iframe switches among these concepts and the actual
localized Home or Products page. The actual Header, routes, menu state and
keyboard behavior remain under their production owners. Existing Field/Select controls switch the scene
and the viewport (current width, 390px, 1024px or 1920px). Fixed widths scroll
inside the preview stage; the page itself must not overflow. The real-page
link follows the chosen scene and language. Inspect closed/expanded, dark/white,
current-section, language and keyboard states in this live specimen and on the
representative real routes. The actual-Header option uses its real owner;
the separately labeled original proposal remains an independent reference.
`next.config.ts` permits only same-origin framing in development for this
preview; production retains `frame-ancestors 'none'` and `X-Frame-Options: DENY`.

**Purpose:** Keep this route as the living acceptance surface for the shared
UI system. Its examples evolve with the production components and approved
visual system. `DESIGN.md` defines visual intent, `tokens.css` supplies runtime
values, and this registry records component APIs and migration status; the page
shows their actual rendered behavior.

**Maintenance contract:**

1. When adding, changing, or retiring a shared component, approved variant,
   token role, or interaction state, keep the affected examples current in the
   same task. Update the owning registry entry when its API, variants,
   ownership, or migration status changes. Existing examples inherit shared
   styling automatically; revise their composition when coverage changes.
2. Import the real owning components. Showcase CSS controls specimen layout
   and foundation displays; control appearance and behavior stay with the
   shared owners.
3. Cover supported states that matter for each component: default, hover,
   keyboard focus, disabled, open/closed, and relevant field validation or
   loading states. Include long Chinese/English content and narrow layouts.
   Record planned variants as planned until their implementation exists.
4. Preserve the section anchors below. Add new shared roles to a suitable
   group or a clearly named new section, and keep the section navigation in
   sync. Retirement removes obsolete examples and updates their references.
5. Verify the affected group at desktop 1920x1080 and mobile 390x844, including
   keyboard and meaningful interactions. Check representative real consumers
   to confirm the same behavior in context; save task evidence under `outputs/`.
   Specialized compositions may use development-only companion routes such
   as `/design-system/engineering-gf`.

| Stable entry | Review purpose |
| --- | --- |
| `/design-system#foundations` | Semantic colors, typography, spacing, and radius roles |
| `/design-system#actions` | Button variants and interaction states |
| `/design-system#fields` | Field composition, control states, and long content |
| `/design-system#disclosures` | Accordion states, keyboard behavior, and long labels |
| `/design-system#surfaces` | Shared Card surfaces and content slots |
| `/design-system#navigation` | Actual Header in dark/white, desktop/mobile and interactive menu states |
| `/design-system#evidence` | Real MediaFigure, MetricGroup and DocumentCard specimens |
| `/design-system#composition` | Section Intro layouts and component composition |
| `/design-system#home-patterns` | Home material catalogue and component/industry entry cards |

`/design-system/engineering-gf` provides a development-only representative
consumer using the unchanged `EngineeringGfLandingPage` PA66 composition.
Its route owner is `src/app/(en)/design-system/engineering-gf/page.tsx`.
This preview allows component regression checks while the production route's
release gate remains closed. It has the same development and indexing guards.

**Coverage:** semantic foreground/background pairs, type/spacing/radius,
primary/secondary/inverse actions, disabled and long-label cases, native field
controls, working Radix disclosures, standard/soft/evidence surfaces, and
stacked/split Section Intro compositions. `EvidenceShowcase.tsx` uses real
factory/laboratory images, company figures and certificate PDF destinations.
`HomePatternShowcase.tsx` uses the Products overview's compact catalogue and
the homepage's entry-card owners. Hover and keyboard focus are checked
on real controls. Preview CSS owns layout and foundation specimens only;
existing component variants and runtime tokens remain the styling owners.

`/design-system/home?lang=zh` is a development-only companion for the complete
homepage body. Its owner is `src/app/(en)/design-system/home/page.tsx`; it calls
the real `TaskFirstHomeNarrative` and `HomeInquirySection` with existing messages
and localized destinations. Language links cover `zh`, `en`, `de`, `fr` and
`pt-br`. The production Home Hero stays in its existing owner; the companion
checks body composition and inquiry routing. It has the same development and
indexing guards as the acceptance page. Existing `#entry-points`,
`#factory-snapshot` and `#material-review` anchors remain usable.

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
application indexes, and related-product rows remain eligible migration targets
when those route families are next changed. Four-metric grade lists use the
specialized owner below.

**Variants:** `compact`, `data`, `related`.

**Rule:** Directory Row is not a Card. It may use a quiet separator and hover
surface, but it must preserve list density and aligned columns.

### Product Grade Directory — Canonical

**Owner:** `src/components/GradeDirectory.tsx` owns the three-column label strip,
numbered grade row, four-metric definition list, and action slot.
`GradeDirectoryPagination.tsx` owns page state, controls, and focus behavior.

**Consumers:** English and localized POM, PA6, PA66, and PPA category grade
lists. Each page supplies its own translated labels, catalog-backed values,
released destination, and action text. Keep the rendered row classes and
responsive data grid shared without moving product or translation policy into
the component.

Localized POM directory formulation labels are resolved from the catalogue's
first feature by `src/i18n/pomDirectoryCopy.ts`. Filler percentages remain
catalogue-owned. The same helper and real EMS102/EMS162 records appear in the
`/design-system` grade-directory specimen. Label translations and compact
test-condition notes stay outside the structural row component.
`GradeDirectoryRow` can opt into a visible selection description with
`descriptionVisible`; the default dense row keeps its existing presentation.
The localized wear-POM category uses the matching selection-note class for
EMS102/EMS162. Both states are maintained in the acceptance page.

### Engineering Property Table — Canonical

**Owner:** `src/components/EngineeringPropertyTable.tsx` owns the engineering
grade detail property table and its TDS request note.

**Consumers:** English and localized engineering grade detail pages. The pages
provide catalog-backed properties, translated headings and column labels, and
their locale-aware request links. POM detail pages retain their separate data
notes and processing guidance.

The English grade route owns its Hero introduction. Localized engineering
introductions belong to `chineseEngineeringGradeMessages.ts` and
`engineeringGradeMessages.ts`; reviewed translations of complete summary
templates belong to `expandedLocaleOverrides.ts`. Localized POM intros remain
in the product-funnel and POM expansion messages, with expansion translations
in the same override owner. The generic translation entry resolves only the
registered grade/family summary templates; it does not rewrite arbitrary prose.
`LocalizedEngineeringGradePage` and `LocalizedXt100ProductPage` render
`properties.body` once as the below-table data note. Do not also pass that same
paragraph to the table's optional introduction.

### Listing Pagination — Product Directories and Resource Search

**Owner:** `src/components/GradeDirectoryPagination.tsx` for grade rows and
`src/components/PaginationNav.tsx` with its CSS module for shared page controls.

**Consumers:** English and localized `/products/categories/pom`, PA6 and PA66
directories. Lists over ten grades show ten per page, keep continuous grade
numbering and the full catalog count, and leave individual grade routes unchanged.
Directory page selection uses the `page` URL parameter with native history so
refresh, shared links, and Back/Forward retain the selected page. Other query
parameters are preserved; invalid values fall back to page one and values beyond
the directory size display the last page. The server renders page one, and the
client restores the URL selection on hydration.
`src/lib/focusDirectoryResults.ts` moves focus to the result heading (or the
labelled result region) after a page selection, before scrolling to that region.
It realigns after the sticky navigation settles while focus remains on the target.
`ConductiveCompoundsExplorer.tsx` uses the same controls after its filters and
keeps matrix groups intact, so a page may contain fewer than ten grades. It uses
the same focus helper; its filter and page state remain local to the explorer.
English and localized `/technical-data-sheets` use URL-backed pages of ten
results; `src/data/technicalDataSearch.ts` owns the ordered result groups and
`src/lib/paginateResultGroups.ts` slices across them without changing totals.

### Disclosure — Partial

**Canonical owner:** `src/components/ui/accordion.tsx`

**Current consumers:** `EngineeringGfLandingPage`, the English/Chinese
`PrecisionGearLanding`, and the mobile article directory in
`ResourceArticleSidebar`. Material-range and Resource FAQ
compositions retain separate implementations and are migration candidates.
The development component acceptance page also uses this primitive.

**Variants:** `plain` preserves compact 14px labels/content; `technical-row`
uses a single white information group with 8px corners, 16px semibold labels,
64px minimum rows, and shared content insets for technical disclosures.
Desktop insets are 24px; below 48rem they are 16px. `panel` remains planned.

**Rule:** triggers, keyboard behavior, focus, and open/closed indicators come
from the primitive. Content structure remains domain-specific.

`accordion.tsx` owns the header, label, indicator, content, and body slots.
`accordion.module.css` owns row alignment, the centered chevron, open/hover
colors, technical grouping, content spacing, motion, and a single 2px cobalt
keyboard-focus outline. The technical variant insets this outline within the
row. Forced colors use `Highlight`; reduced motion disables transitions and
content animation. Consumers arrange domain content and may constrain its
reading measure; they must not redefine shared states or indicators.

When opening an item displaces its trigger beyond the viewport or beneath the
sticky header, the shared trigger restores that row to view after layout.
Visible triggers do not move; caller click handlers and prevented events are
preserved.

`AccordionContent forceMount` retains technical content in server-rendered HTML
and hides it while closed. This opt-in behavior is used by the English/Chinese
gear landing; other consumers retain Radix mounting behavior. Shared height
and opacity animation follows the 180ms motion token. Closed panels must stay
absent from the visible accessibility tree.

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

**Owners:** `src/components/Header.tsx` owns desktop navigation, the current
section and language destinations. `HeaderMobileMenu.tsx` owns the native
dialog and its three-level mobile flow. `src/lib/headerNavigation.ts` builds
compact labels and localized destinations on the server; `SiteDocument.tsx`
passes that model to Header without serializing the grade catalogue.
`BrandDescriptor.tsx` owns the optional inline two-line
HIGH-PERFORMANCE / ENGINEERING PLASTICS descriptor and the stacked
ENGINEERED POLYMERS caption used in the mobile dialog. The shared skin is
`src/app/(en)/styles/header.css`, imported by every localized layout.

**Composition:** the adopted local single-row Header is 80px high at 1200px
and above. Brand, business links, company links, language and Find TDS action
share one vertical center. Main labels use 17px/500 on wide desktop and
16px/500 below 1680px; the language/action use 15px. The 190px wordmark has
an inline 11px/600 descriptor above 1679px; compact desktop hides that
descriptor, and 1200–1279px uses a 164px wordmark. Company links and tools
remain distinct groups within the same row. Accept visible centers within 2px.
Products retains its three material groups in a 2:1:1 grid; the POM group
keeps its two subcolumns and separate Base Resin entry. Tablet widths through
1199px use a 76px bar and phone widths through 600px use 72px. The mobile
bar shows the wordmark, localized Find TDS action and labeled Menu control.
Height tokens live in `tokens.css` and feed `--site-header-height` offsets.

The `.site-header-glass` layer alone owns the continuous Hero backdrop,
spanning bar and panel with the existing fill/filter/shadow tokens. Menu
content stays transparent. Inner routes connect the white bar directly to
the white panel. Both use the page rail; preserve the material and visible
edges on actual rendered pages. Language popovers retain their navy surface.
Groups and overview actions use spacing; the inline descriptor's subtle
vertical separator belongs only to that wide-desktop brand lockup.

**POM navigation:** `Header.pomMenu` owns short names in all five language
messages, sourced from `src/i18n/headerPomMenuMessages.ts`. The server model
uses `getCategoryPath` for the existing eight categories. POM's two subgroups
contain performance modifications and reinforcement/fillers; Base Resin is a
separate supplemental destination. Desktop renders that structure; mobile uses
the same ordered items beneath the POM heading. Visible labels omit redundant
material suffixes; accessible labels retain POM context. Catalogue names,
product-page copy and the homepage material presentation keep their owners.

**Visible affordances:** Products, Applications and Resources pair their text
with a shared chevron that rotates only while open. `.nav-link-label` owns the
top-level text underline; the chevron is outside that underline. Main links use
17px/500 and expanded destination links 16px/500 in `--nav-ink`, with the accent
color on hover/focus. Supplemental paragraphs retain `--nav-muted`. All menu links,
including menu-overview links, have at least a 44px click target. The existing
`.mega-nav-label` continues to own menu-item underlines.

**Language control:** desktop uses one native-name disclosure with equivalent
route links, current-language marking, Escape/focus return and outside close.
Opening it closes the mega menu, and vice versa. Mobile keeps a native-language
select in the dialog footer beside its TDS entry. Both consume the same
release-manifest language options and preserve Contact query/hash context.
Trigger and option targets remain at least 44px high.

**Menu interaction:** Radix owns desktop hover and click state; focusing a
trigger does not pre-open it. Enter/Space opens or toggles the focused trigger,
Arrow Down enters an open panel, and Escape closes it and restores trigger
focus. Touch at desktop widths toggles once per tap. The mobile native dialog
keeps the page inert, explicitly wraps Tab/Shift+Tab at its first/last control,
and closes on Escape or Close. Root → group → links uses one view
state; Back restores the originating row, closing restores the trigger, and
closing/unmounting releases the page scroll lock. Destination links close it;
the content scrolls while TDS/language remain in the footer. The opening control
shows the localized Menu label beside its icon. Controls retain
a minimum 44px target.

**Grade data entry:** Resources retains the full localized `findGradeData`
link to `/technical-data-sheets`. The bar and mobile footer visibly use
`Header.findTds`: Find TDS / 查找 TDS and corresponding locale labels. The
bar retains the full accessible name and title. Every width keeps this action
label rather than shortening it to an acronym. The concept route consumes the
same message. Resource item underlines remain owned by `.mega-nav-label`.



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

The Products overview uses canonical `PageHero` with the existing natural-POM
material photograph. `ProductsDirectoryPage.module.css` owns its rail,
responsive image/copy grid and TDS-action placement, using existing product
typography tokens. Product introduction copy stays in `Products.hero.body`.
Category and grade Heroes retain their existing imagery and action variants.

**Applications convergence:** The Applications directory and detail Heroes
retain their shared typography. The Chinese motion-components scene title's
available width is owned locally by
`src/components/localized/LocalizedApplicationDetailPage.module.css` so its
heading wraps naturally without changing other application headings.

The Applications directory and detail Heroes
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
weights, a quieter headline scale, a 60rem editorial canvas for technical
features, and a 65ch measure for introductions and long prose. Resource titles
wrap naturally against their real content width; page-local type ramps must
not be reintroduced. Directory and standard resource Heroes also share one
evidence-material contract: the existing midnight satin texture, evidence
radius, quiet border, and no resting shadow. The split directory Hero keeps its
light task side without inventing a separate dark-panel material. Article
documents use the standard polymer-white surface, quiet border, 8px panel
radius, and no resting shadow on desktop; mobile remains integrated with the
page canvas.

**Wear-test benchmark owner:** `src/components/WearBenchmarkPage.tsx` and its
local CSS module own the English/Chinese benchmark tables, report details,
curves and specimen photos. `WearBenchmarkRecords.tsx` opens native record
disclosures for incoming and in-page anchors. `WearEvidenceGallery.tsx` and
its local CSS own image previews and the keyboard-accessible original-image
dialog. Hero, section intros and actions reuse their shared owners.
`src/data/wearTestEvidence.ts` is the single
public source for all six report-level numeric records and bilingual copy.
`WearTestEvidence.tsx` owns only the benchmark entry links in the POM
landing and selection guide. Keep source workbooks, formulations and
internal review files outside public components and assets.

**Specialist POM landing content:** `src/components/PomLandingPage.tsx` renders
the wear/low-friction and conductive/antistatic pages from
`src/data/pomLandingPages.ts`. Wear grade links use the existing `labelParts`
presentation so the formulation list retains compact descriptive rows.
`gradeEvidence.note` is an optional measurement-basis paragraph inside the
grade-list section introduction; it does not introduce a separate panel.
Chinese content is owned by `src/i18n/messages/zh-CN-pom-landings.ts`; the
functional POM overrides registered in `expandedLocaleOverrides.ts` supply
German, French and Brazilian Portuguese wording.

The Resources overview Hero is content-height driven. Its directory uses a
stacked SectionIntro and group headers above full-width link grids: three
columns from 80rem, two from 48rem, one below. DOM order stays the reading and
keyboard order. On mobile, Hero task links retain the title and count while
omitting redundant category labels. These layout rules also cover the case
preview inside the overview, not standalone case pages.

**Keep separate:** the Home hero. It is the brand-level entry composition and
should consume shared Actions and typography tokens without becoming a generic
inner-page Hero.

### Section Intro — Partial

**Automotive application pilot (2026-09-09, historical layout):**
`src/components/AutomotiveSystemGroup.tsx` and its CSS module own the automotive
component selection layout, adjacent structural cases, material comparison
section and resource/inquiry section. The material directions reuse the
application-detail card treatment without imagery. The now-retired
`AutomotivePartTabs.tsx` supplied the small client boundary for every multi-part
system and keyboard navigation; active panel content was composed on the server.
`src/data/automotiveSelection.ts`
owns the candidate-family mappings and shared automotive labels;
`src/data/automotivePageDesign.ts` owns the approved five-language page copy.
This is a page-specific composition using
the shared rail and tokens, not a new generic Card or Section Intro variant.
`LocalizedApplicationDetailPage` retains the standard application-detail Hero
and routes only the automotive content sections to this module. Other
application layouts retain their existing owners. Five peer system sections
preserve all canonical parts and form one native single-open disclosure group;
Visibility & Window Systems opens initially. Within the expanded system,
multi-part systems render one tab panel at a time while the window/wiper
examples retain their adjacent case evidence.
The automotive related-component area retains the standard full-size
`ApplicationRelatedSolutions` treatment rather than reducing it to inline links.
Shared Header, navigation styling,
Button variants and Footer remain under their existing owners.
The private `AutomotiveTextLink` owns inline material, case, grade and resource
actions. Its label owns the underline, its SVG arrow is undecorated, and the
link supplies the 44px target and keyboard focus ring. Do not add a second
link-wide border or text decoration to these controls.

The October 8 automotive migration below supersedes this pilot's system
disclosures and individual part tabs. `AutomotiveSystemGroup.tsx` now supplies
the selected-part structural case evidence and final resources/quality section;
it does not own the active category or part-image controls.
The subsequent October 8 simplification removes automotive's duplicate
standalone material grid and related-component cards. Part-local material
conditions and exact guide links remain. `AutomotiveNextSteps` owns compact case
links with their existing stages and its page-owned consultation section. Other
application compositions retain their material-grid and related-guide owners.

**Part-based application groups (2026-10-07; automotive added 2026-10-08):**
`src/components/ApplicationPartGroups.tsx` and its CSS module own the reviewed
electronics, washing-machine, motion, conveyor, textile, outdoor, water-control and automotive
category tabs, main part image, thumbnail
controls and adjacent part/material requirements.
`src/data/applicationPartGroupPresentation.ts` owns their shared copy shape
and the approved route/default-group registry, source material-path selections
and optional source-direction index selections. The indices distinguish
conditions that share a product-category destination;
`src/data/electronicsPageDesign.ts`, `src/data/washingMachinePageDesign.ts`
`src/data/industrialApplicationPageDesign.ts`, `src/data/textileApplicationPageDesign.ts`,
`src/data/outdoorApplicationPageDesign.ts` and `src/data/waterControlApplicationPageDesign.ts`
own the original seven applications' five-language UI wording;
`src/data/automotivePartGroupPageDesign.ts` owns the automotive category wording.
Canonical group
membership remains in `applicationSystemPresentation.ts`; part copy and images
remain in the localized application records. `LocalizedApplicationDetailPage`
selects this composition only for the eight registered application families,
and resolves material and exact
component-guide links on the server. All other application compositions retain
their existing owners. Existing group bookmarks open their matching panel;
Drive & Motion, Drum Drive, Transmission & Actuation and Conveying Surfaces &
Chain Path are the respective defaults for the original four families. Yarn
Path & Guidance, Irrigation and Valve Internals & Actuation are the textile,
outdoor and water-control defaults. Two-, three- and four-group tab layouts are
supported; automotive adds five categories, with two columns and a full-width
last tab on mobile. Four groups also form two columns on mobile. Groups with more than three
images use a three-column thumbnail grid, while single-image groups omit
thumbnail controls. One set of part records serves desktop and
mobile, with all panels present in server-rendered HTML. The outer rail and
balanced media/text tracks follow `DESIGN.md`; Header, secondary navigation,
Button variants, the full related-guide area and the final inquiry section
retain their existing owners.

All eight registered application families enable `selectedPartOnly`: the
adjacent part name, description and exact guide follow the selected image,
without a separate requirements label. Image-free single-part groups retain
their part details and align them with the material column on desktop.

`ApplicationGradeText.tsx` owns exact POM catalog-grade links within existing
non-automotive material conditions. It resolves indexable catalog names on the
server and uses the language release manifest for destinations; it does not
infer aliases or introduce grade recommendations. Each name links once per
condition paragraph. `ApplicationPartGroups`
accepts optional server-rendered `linkedConditions` alongside the unchanged
condition strings. Merged wear/friction directions retain each source condition.
The inline link's color, underline and keyboard focus are owned by
`ApplicationGradeText.module.css`; `/design-system#composition` shows the real
owner. Automotive's part-specific recommendations retain their existing path.

Automotive retains all twelve canonical parts and defaults to Visibility &
Window Systems. Its material conditions, contextual inquiry and structural
case evidence follow the selected part image. `automotivePartMaterials` remains
the candidate source; a group-wide union must not give gears a structural GF
recommendation. Fuel parts retain an evaluation note and inquiry without a
POM prefill. The unverified seat-guide image stays omitted, with an image-free
requirements/material layout. Existing group and automotive-part hash links
open the correct category and select the corresponding illustrated part.

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

The definition list contains each metric group directly. Values and optional
notes use `dd`; do not insert an extra layout wrapper between `dl` and its
term/description groups. CSS `display: contents` does not repair list semantics.

**Canonical owner:** `src/components/MetricGroup.tsx` with component tokens in
`tokens.css`. About facility figures and `/design-system#evidence` use this
owner; page styles may set layout variables but must not redefine
label/value/note typography. The current Home factory/laboratory composition
uses its documented compact fact lists in `HomeSections.module.css`, reviewed
through the Home acceptance companion.

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

### Localized POM Category Related Paths

`LocalizedBasePomCategoryPage.tsx` shows its application-path section and local
navigation entry when released applications or component solutions exist.
`BasePomRelatedPaths.module.css` owns the simple directory's mobile single-column
layout across these localized categories, so long application labels retain a
readable text column. Desktop layout and the richer English category directory
retain their existing owners.

### Carbon-Fiber POM Reference Comparison — Pilot

**Owner:** `src/components/CarbonFiberPomComparison.tsx` and its CSS module.

**Scope:** the English carbon-fiber POM category. It reads properties, test
methods and TDS status from the catalog and provides grade-specific data and
document-request links. Its horizontally scrollable table stays within the
shared content rail. Business scope is recorded in `PRODUCT.md`.

### Glass-Fiber POM Grade Comparison — English / Chinese Pilot

**Owner:** `src/components/PomGlassFiberComparison.tsx` and its CSS module.
`src/lib/pomGlassFiberComparison.ts` owns catalog selection, stable percentage
ordering, core metric definitions, and Chinese property labels.

The English and Chinese glass-fiber POM categories use `GlassFiberGradeCards`
and its CSS module for the user-selected historical card layout (reference:
`bdf7a35` product-directory styles). At wide desktop sizes, the numbered grade,
four metrics and data action share one compact horizontal row. Below 64rem the
metrics move beneath the grade identity, and mobile metrics form two columns.
Keep the cards as one vertical directory instead of reverting to the general
directory's three-column card grid. Glass-fiber percentage remains in the grade
eyebrow. The whole card links to grade data.
The POM landing pages retain a short test-basis disclosure only. Full data and
TDS support belong to the linked grade detail pages; do not repeat the complete
cross-grade table on this landing page. Other POM categories and languages keep their owners.
The existing category Hero and secondary navigation are not owned by this module.

The five-language PA6/PA66 GF pages retain their original PageHero factory
image and use the opt-in `compact` variant of this card owner. It preserves
all four metrics and the whole-card grade link; on mobile the linked grade
title replaces the repeated action label. POM keeps the default card variant.
`EngineeringGfGradeComparison` places the full-parameters disclosure before
the card directory so comparison does not require scrolling past every grade.
The complete seven-property comparison and per-grade TDS links remain available.
This component owns the PA6, PA66 and PPA glass-fiber percentage filter. It uses
the shared native `Select` primitive and catalogue-sourced percentages. All
grades render initially; a selection filters the table and cards together in
local client state without creating a route or changing catalogue records.
Labels belong to `engineeringGfLandingMessages.ts` in all five released languages.
`EngineeringGfLandingPage` owns the surrounding page composition. PA66 sets
`tradeoffs` to `null` in its source and localized page content, consolidating
those notes into its properties section and moving the existing guide links there.
The omitted tab follows that content state; PA6 and PPA keep their separate
tradeoff block and tab. PA66's GF50 introduction interpolates grade names from
the catalog. This composition refinement remains local.
PA66's registration selects a separate edited specimen-material illustration;
its localized caption and alt text identify it as an illustration. The original
laboratory image, figure geometry and PA6/PPA image selections remain intact.
PA66's optional `materialNotes` content selects an unnumbered definition list
and the canonical Accordion primitive for molding/selection details. Existing
guide links sit in the same text column. Its five-language UI copy overrides
belong to `engineeringGfLandingMessages.ts`; PA6/PPA keep their numbered lists
and existing labels. The specimen crop and outer split remain unchanged.
For this PA66 composition, the same material-properties section renders before
the grade directory and applications. Its navigation order follows that section
order. The shared renderer keeps the existing section content and uses the
presence of `materialNotes` to select this composition; PA6/PPA retain their
original order.
POM TDS links
remain on the individual grade detail pages. The localized PA pages reuse the
same catalogue records and layout while translating visible labels, links,
metadata and structured-data language signals.

### Gear Assembly Test Evidence — Pilot

`RelatedCaseStudies.tsx` and its CSS module own the contextual case directory.
POM grade details pass a grade; applications, component solutions and localized
POM categories pass their source path. Collection data controls placement and
language visibility. Application consumers supply the standard application rail
through the scoped `relatedCases` rule; other consumers use their existing rail.
The English glass-fiber category keeps its dedicated decision-path directory.

`CaseStudiesPage.tsx` owns the English/Chinese overview composition and its
page-local CSS. `CaseStudyFilters.tsx` controls application filtering while
receiving server-rendered cards; all cases are present initially. Classification,
short summaries and related-guide mappings live in `caseStudyDiscovery.ts`.
`CaseStudyRelatedLinks.tsx` and its CSS own the grade and reading section used
by both case detail renderers. Article titles come from the existing resource
records. ETM 100P uses a grade inquiry until an exact product page is published.

`MaterialCaseStudyPage.tsx` renders the supplied glass-fiber POM customer
accounts in English and Chinese on the shared case article rail. Its four story
sections are grouped inside one `evidence` surface owned by the case article CSS
module instead of being separated by rules, so the record reads as a single
proof block; the gear case page shares the same `.section` rule and separates by
spacing alone. Story copy and current project
stages belong to `src/data/glassFiberCaseStudies.ts`; `src/data/caseStudies.ts`
combines these entries with the existing gear case for the overview and preview.

**Owners:** `src/components/GearEnduranceCasePage.tsx` and its CSS module own
the dedicated English/Chinese case pages. `GearEnduranceEvidence.tsx` owns only
the POM gear article interpretation and link. Approved facts and case copy live
in `src/data/gearEnduranceEvidence.ts`.

`PrecisionGearLanding.tsx` and its CSS module own the English/Chinese gear
landing composition, with concise copy in `src/data/gearLandingCopy.ts`.
They reuse the component rail and hero styling without changing shared rules.
Material comparison leads to one grouped case-evidence section, optional
technical topics and a final project inquiry. Shared Radix disclosures retain
diagnostic and technical content in the server-rendered HTML.
Other components and other gear locales retain the existing renderer.
Material suitability remains visible in the comparison. Validation checks sit
with each material family's selection details inside the shared disclosure.
The landing reuses the existing application button variant and size for both
general inquiry actions. Material, case and technical introductions use
`SectionIntro`, including its responsive type and description behavior.
The material comparison uses the canonical 5/7 split: an introduction beside
three material rows with suitability copy and existing product-owner links.
Selection disclosures follow those rows. At tablet widths the introduction
stacks above them; mobile also stacks each row's title and description.
`Accordion` owns trigger geometry, keyboard navigation, chevron state and focus
feedback. Technical topics form a single-open group. Material,
test-interpretation and technical-topic
anchors remain addressable.
The page owns its case composition instead of changing `RelatedCaseStudies`:
the ETM story and recorded test use a balanced evidence grid, followed by
gear-first supporting-case rows with issue, material/design and reported-stage
copy. `Card variant="evidence" asChild` owns the ETM evidence surface; its
article grid and domain-specific content remain in the gear composition.
Existing case records still own titles, grades, links and stages.
Technical topics sit beside a smaller introduction and contextual reading
links. Narrow layouts retain the introduction, topics, then reading order.
One content-grid gap owns section separation; adjacent section paddings and
shared-case margins must not accumulate. The final inquiry consumes the
canonical compact `ActionPanel` with concise supporting copy
and one application inquiry action. English and Chinese share this composition;
other gear locales keep their existing renderer.

Keep the sample quantity, test conditions, subsequent wear observations and
result boundary next to the acceptance result. This module has no original
report download or customer imagery.

## Reading Contrast — Canonical

`tokens.css` owns `--ds-color-reading-slate` and the semantic
`--ds-foreground-muted` role. Home, shared sections/cards/fields and migrated
legacy product/resource text consume that role. Dark surfaces retain their
dedicated light foreground. `/design-system#foundations` includes white,
canvas and navy reading specimens, using live tokens. The navigation specimen
loads the actual Header and its localized destination model.

## Typography — Canonical

`globals.css` and `tokens.css` own the existing IBM Plex Sans interface and
heading roles, with Noto Sans SC and system fallbacks. Both root layouts retain
the existing Fontsource import. `UnitText.tsx` owns unit and exponent markup;
`MetricGroup.module.css` uses the shared display font. `/design-system#foundations`
shows the shared heading, body and label typography.

The Tailwind import explicitly scans `src/`, where production UI classes live.
Generated previews and archived compilation directories are not class sources.

## Homepage Body Composition — 2026-10-14

`HomePage.tsx` retains the shared homepage Hero and passes localized Contact
intent labels to the inquiry owner. `TaskFirstHomeNarrative.tsx` composes the
material showcase, component, industry, project support, and factory/laboratory sequence;
`HomeSections.module.css` owns its page-local surfaces, hierarchy and responsive
layout. `HomeMaterialCatalogue.tsx` owns the three desktop columns and mobile
single-open disclosure using the canonical Accordion. The Products overview
renders its `compact` density ahead of requirement-based selection, replacing
the previous family rows. Counts and family paths
are derived on the server from catalogue data and product-category helpers;
only compact presentation props reach the client.

**Hero title:** `HomePage.tsx` renders `Home.hero.title` directly inside one H1.
`home.css` owns its existing scale, leading and real-column wrap behavior;
the font comes from the existing shared display role. Background, eyebrow, body,
actions and metadata keep their existing owners. The actual Home scene at
`/design-system#navigation` verifies this Hero with the shared Header.

`src/lib/homeMaterialCatalogue.ts` owns the server-side column builder shared
by `ProductsDirectoryPage.tsx` and `/design-system#home-patterns`.
`src/data/homeEntries.ts` owns the existing
component/industry destinations and images. `HomeEntryCards.tsx` exports
`HomeComponentCard` and `HomeIndustryCard`, used by both Home and its acceptance
specimens. Both take `title`, `href`, `image` and `imageAlt`; the component card
also takes the typed `part` key for geometry-specific containment. These are
homepage-scoped compositions with their existing `HomeSections.module.css`
styles, not generic Card variants. Component images remain contained; industry
photographs remain cropped, with the mobile title below the photograph.

The catalogue, image entries, manufacturing/certificate rows and inquiry paths
are maintained on `/design-system` and its Home companion in the same task as
their production owners. Preview CSS supplies specimen layout only.

Evidence uses canonical `MediaFigure` and `DocumentCard` compositions. The
six component images, eight industry routes, certificate PDF destinations,
`#entry-points` Hero destination and `#material-review` anchor remain available.
`#factory-snapshot` connects the Why section to its production evidence. Old
`HomeCoreProductExplorer.tsx` owns the opening material photograph and four
family links, styled by its existing `home.css` rules. Hero motion remains in
`HomeMotion`; body owners do not opt into its previous scroll-reveal hooks.

`HomeInquirySection.tsx` owns TDS, sample, grade-evaluation and quote/supply links.
It uses localized labels from the existing Contact form and the canonical
contact-context helper, with TDS opening the released data directory.

## Conversion Components

### Action Panel — Canonical

**Canonical owner:** `src/components/ActionPanel.tsx`.

The former `MaterialRecommendationCta` wrapper has been removed. About,
product, application, POM landing, and resource review panels now consume the
canonical component directly. `HomeInquirySection` owns the homepage's four
intent links in a white panel over a blue material background.

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

`recommendation` supplies on-dark copy and inverse-action styling and requires
a caller-owned dark band. Unskinned endings on the light canvas, including
engineering glass-fiber landing pages, use `compact` with the primary Button.
In stacked layouts, both copy and optional aside size to their contents;
desktop horizontal flex bases must not become mobile reserved heights.

Place the panel according to the page's decision flow. Page conversion actions
remain within the main content; Footer independently owns brand, direct contact
actions, navigation, and legal information on every route.

### Contact Inquiry Context And Diagnostics

`ContactPage.tsx` owns the translated form/sidebar composition.
`ContactInquiryForm.tsx` owns field state, explicit context clearing and the
server-delivery/fallback behavior. `ContactDirectEmailLink.tsx` owns only the
dedicated sidebar draft link, using `contactContext.ts` to compose its href
from initial query context or the active inquiry hash. Hash changes and the
explicit context-change event keep it in sync when the visitor clears context.
It does not copy entered contact/form fields or alter the plain email link.

`AnalyticsTracker.tsx` owns internal contact-entry clicks.
`ContactInquiryForm.tsx` owns a once-per-mount visible-form event, accepted
submission attempts and coarse failure diagnostics; the in-flight guard also
guards the attempt event. `conversionEvents.ts` applies current consent to
every dispatch. These diagnostic events carry no form contents, source
context, attribution values, query or hash and do not invoke the Ads lead action.
Confirmed non-spam server delivery retains the existing lead boundary.

`trackInquiryFormMail` emits the consent-gated Ads `form_mail` attempt event
from the same in-flight-protected form submit handler. It sends only the Ads
destination, without email or other form contents. The configured Ads
`conversion` is emitted by `trackInquirySubmitted`, never by observing translated
success text. The existing global `GoogleTag` remains the sole loader.

### Cookie Preferences

`AnalyticsConsent.tsx` owns the shared preference panel and Footer settings
entry across all routes and five languages. Accept All grants website analytics
and Google Ads measurement; the other action rejects optional cookies.
Closing keeps the current choice, and Footer settings allow withdrawal.
Previous analytics permission is preserved but never grants advertising
measurement. `googleConsent.ts` owns persistence and withdrawal, while
`GoogleTag.tsx` applies the choices before configuring destinations. The
`/design-system` inline example exercises the panel without changing a
visitor's stored consent.

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
homepage certificate strip now consumes the canonical DocumentCard with
page-local horizontal preview sizing in HomeSections.module.css.
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

### Completed Migration History

The 14 completed audit follow-ups are preserved in
[historical migration records](docs/archive/2026-09-30-retired-rules.md#completed-component-migrations).
Use the component entries above for current owners, variants, and migration boundaries.

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
