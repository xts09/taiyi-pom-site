# Mobile Polish Audit Notes

## DE / FR / PT-BR Full-Site Parity — 2026-08-21

- Baseline release-manifest count: English 172, Simplified Chinese 172,
  German 15, French 15, Brazilian Portuguese 15.
- Each of DE/FR/PT-BR is missing the same 157 paths: 108 grade details, nine
  product categories, nine Applications routes, 18 Resources routes, eight
  About/Components routes, three POM solution pages, Privacy, and the
  cross-material conductive directory.
- Existing localized core-funnel copy and seven released POM grade profiles
  remain source-of-truth inputs; the expansion must extend their typed models
  instead of replacing them or duplicating catalogue values.
- Implementation will keep existing visual components and CSS. New work is
  limited to language content models, localized route branching, release/SEO
  ownership, tests, and dated product documentation.
- Completed 2026-08-22: EN, DE, FR, PT-BR, and ZH now expose 172 source paths
  each, with all five destinations available from every released language
  group and 860 unique sitemap locations.
- The DE, FR, and PT-BR expanded dictionaries contain 4,376 identical keys
  each. Source-aware terminology overrides keep product-grade language
  professional while catalogue values, units, methods, and names remain
  source-owned.
- Representative desktop and 390x844 mobile checks covered the POM directory,
  Applications, Resources, and an engineering-grade detail. The final gates
  passed: 81 tests, ESLint, TypeScript, and a 928-page production build.

## Full-site Human Mouse Audit — 2026-08-21

- Testing target: local running site at `http://localhost:3100/` unless browser
  discovery shows that instance is unavailable.
- Method: visible cursor interactions, realistic scroll cadence, hover and
  click states, browser back, form validation, and viewport-specific journeys.
- Standards: `DESIGN.md` visual contracts, `PRODUCT.md` route intent and
  acceptance checklist, plus the current Vercel Web Interface Guidelines.
- Production code remains read-only throughout this audit.
- Audit completed at `1440x900` desktop and `390x844` mobile with English,
  German, French, and Brazilian Portuguese samples.
- Highest-priority defects: fixed navigation obscures two anchor destinations;
  the German Contact H1 is clipped at `390x844`.
- Other material findings: localized technical links silently fall back to
  English, silk hero imagery weakens the industrial evidence language, and the
  resource article TOC active state is stale after anchor clicks.
- Remediation diagnosis: About applies `scroll-margin-top` to the credentials
  section while the footer hash targets the nested heading; the real target does
  not receive the offset. The product category already declares a calculated
  offset, so Batch 1 must verify the runtime pinned-nav height rather than add a
  duplicate override.
- The German Contact title is owned by the shared `PageHero` typography and is
  clipped by the Contact Hero's overflow boundary. The fix should be shared
  long-word resilience, not a translated-copy change.
- The Resource TOC click handler sets the requested index, but its observer can
  immediately reselect the preceding intersecting section.
- Locale fallback to English is an explicit `PRODUCT.md` release contract.
  Batch 4 must communicate that boundary or launch fully reviewed localized
  pages; it must not create prefixed English fallback routes.
- Batch 1 recheck: the product-category Applications anchor settles correctly
  after its existing delayed alignment. At 1440x900 the pinned nav bottom is
  about 205px and the target top about 221px; direct hash loading also passes.
  The earlier screenshot captured the smooth-scroll transition, so no product
  code change is justified.
- The About failure is confirmed: the footer hash targets the nested H2, whose
  scroll margin is 0, while the untargeted section owns the 80px margin. Batch 1
  moves the tokenized header-plus-breathing offset to the real H2 target.
- Batch 1 complete in `a7edf30`. About direct hash, footer click, history return,
  Manufacturing regression, and the product Applications anchor pass at the
  required desktop/mobile samples. The layout detector and TypeScript check are
  clean.
- Batch 2 diagnosis confirmed at 390x844: the German H1 had a 286px client
  width and 319px scroll width, then was clipped by the Hero overflow boundary.
  The shared title owner now applies `hyphens: auto` and
  `overflow-wrap: anywhere`; the same sample measures 286px for both client and
  scroll width. All required mobile, locale, shared-consumer and desktop samples
  retain document-width parity.
- Batch 3 diagnosis confirmed: after clicking `Failure Mode`, its section and
  the tail of `Gear Duty` simultaneously intersect the TOC observer band at
  112px. The observer sorted top coordinates ascending and reselected the old
  section. Reversing that one comparison keeps hash, target and `aria-current`
  aligned without adding locks or timers. Desktop click sequences at 1440x900
  and 1920x1080 pass; the 390x844 accordion closes, reopens with the clicked
  item active, retains 44px targets and has no document overflow.
- Batch 4 complete. A release-manifest helper now identifies links that remain
  on the English source URL for a localized visitor. Shared Header entries and
  localized Products decision/directory links show a compact `EN` boundary
  marker with localized assistive copy. Published localized links, including
  Base POM Resin, glass-fiber POM and high-impact POM, remain unmarked. A real
  POM click lands on the English route and Base POM remains on the German route.
  German dark/white Header states, 390px mobile navigation/cards, French,
  Brazilian Portuguese and English regressions pass without document overflow.
- Batch 5A complete. The wear/low-friction solution Hero now uses a molded
  sliding-part, bushing and roller scene with a light technical scrim while
  retaining its existing geometry, H1, copy and CTAs. Contact uses an authentic
  laboratory-equipment image with desktop and mobile dark scrims. English,
  German, French and Brazilian Portuguese Contact Heroes remain readable at
  390x844; English Wear and Contact also pass at 1920x1080. The layout detector,
  TypeScript check and dev-server render complete without errors.
- Batch 5B complete. Product-grade primary actions now use the canonical
  product blue while preserving the existing 48px geometry, labels and links.
  POM grade rows keep their outer card grouping but drop the nested four-cell
  outlines and dividers. The desktop Header search target is now 44px and the
  TDS search input/button render at 44.4px inside a 46px row; mobile remains
  46.4px inside a 48px row. The target routes and shared dark/white Header
  states pass at 1920x1080 and 390x844 without document overflow. The layout
  detector, TypeScript check and `git diff --check` complete successfully.
- Batch ZH-0 confirmed that the existing German, French and Brazilian
  Portuguese release covers 15 reviewed core-funnel paths rather than every
  English route. The user wants full Chinese coverage eventually and approved
  starting with parity for those 15 paths.
- Batch ZH-1 complete. New Simplified Chinese dictionaries cover shared chrome,
  Home, Products and Contact, including every Contact form, status and email
  fallback field. They remain intentionally disconnected from locale routing
  and public SEO until the category, grade and TDS dictionary passes in Batch
  ZH-2. TypeScript and Prettier checks pass.
- Batch ZH-2 complete. The new Chinese product-funnel dictionary covers all
  four reviewed categories, seven reviewed grade pages and the localized TDS
  entry. Technical selection copy preserves the existing candidate-evaluation,
  customer-tooling and application-validation boundaries. No public `/zh`
  surface is enabled yet. TypeScript, Prettier, placeholder and unsupported-
  claim checks pass.
- Batch ZH-3 complete. `/zh` now publicly exposes the same 15 reviewed core
  paths as DE/FR/PT-BR with complete Chinese copy, five-language navigation,
  reciprocal SEO alternates and sitemap coverage. Representative Home,
  Products, category, grade, TDS and Contact routes passed 1920x1080 and
  390x844 rendered checks without horizontal overflow. Unreleased `/zh`
  families remain 404 and their navigation handoffs retain `EN — 英文内容`.

## Baseline

- Primary mobile viewport: 390×844.
- Narrow and wide phone confirmation: 375×812 and 430×932.
- Breakpoint confirmation when relevant: 767px, 768px, and 769px.
- Desktop regression: 1920×1080.

## Findings

### Batch 0 — 390px baseline

- All 16 priority routes satisfy `scrollWidth === clientWidth`; no global
  horizontal overflow fix is authorized.
- Product category grade data is already rendered as mobile cards with a
  readable two-column metric layout; no duplicate mobile table/card DOM is
  needed.
- `/products/categories/pom`: the family rail is an intentional horizontal
  scroller, but cards size to content, creating uneven widths and an imprecise
  swipe experience. Use one consistent mobile card width and scroll snapping.
- Resource article routes: the shared mobile `On this page` accordion trigger
  is 36px high because a consumer overrides the shared trigger padding. Restore
  the 44px token at the consumer.
- Global mobile menu and several legacy actions measure approximately 43px;
  defer them to the isolated Header/Footer shared-component batch rather than
  changing navigation during Batch 1.
- `/modified-pom-compounds`: the mobile Hero contains a large blank interval
  between the H1 and its sole action. This is a verified Hero-family defect and
  is deferred to Batch 3.
- Baseline screenshots saved under `outputs/mobile-polish/batch-0/`.

### Batch 5 — locale and regression gates

- German `base-pom-resin`, French `glass-fiber-reinforced-pom-compound`, and
  Brazilian Portuguese `high-impact-pom-compound` retain localized H1 content,
  the simplified mobile specification treatment, and document-width parity.
- Brazilian Portuguese `/products` Footer contact actions and legal links meet
  the 44px mobile touch target without horizontal overflow.
- The modified-POM Hero uses its mobile surface and readable intro through
  768px, then returns to the desktop image-Hero text color at 769px; both CTAs
  remain visible and 48px high on both sides of the breakpoint.
- No URL, metadata, canonical, robots, H1, schema, technical record, or link
  destination was changed.
- Validation passed: SEO ownership tests 11/11, full tests 60/60, ESLint,
  TypeScript, catalog check (193 records), SEO catalog check (115 indexable
  grades), and `next build` (280 static pages generated).

## Protected Invariants

- SEO, copy semantics, URL ownership, technical data, and CTA destinations.
- Existing PLATFORM visual system and shared component ownership.
- Released English, German, French, and Brazilian Portuguese route behavior.
