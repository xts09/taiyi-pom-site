# Taiyi Polymer Mobile Polish

> Historical task plan started 2026-08-21. Completed and pending items below describe that period, not the current project plan; see `PRODUCT.md` for the current state.

## DE / FR / PT-BR Full-Site Parity — 2026-08-21

### Goal

- Raise German, French, and Brazilian Portuguese from 15 released paths each
  to the same 172-path public set already owned by English and Simplified
  Chinese.
- Preserve catalogue-owned technical values, existing URLs, CTA intent,
  layout families, and fail-closed behavior for aliases or preview routes.
- Release complete route families atomically only after native copy, internal
  links, metadata, structured data, alternates, sitemap, and responsive checks
  pass.

### Continuous batches

- [x] A — Inventory route/content owners and validate one representative
      dynamic-page localization model.
- [x] B — Complete Products: POM directory, nine missing categories, 108
      missing POM/PA6/PA66/PPA grade details.
- [x] C — Complete the three POM solution pages, Privacy, and the cross-material
      conductive/antistatic directory.
- [x] D — Complete Applications, About, and Components.
- [x] E — Complete Resources directory, categories, and 14 technical articles.
- [x] F — Atomically enable DE/FR/PT-BR for all 172 source paths, reciprocal
      five-language SEO signals, and sitemap coverage.
- [x] G — Run route-count, no-English-fallback, technical-data, link, visual,
      test, lint, typecheck, and production-build gates; update PRODUCT.md.

### Acceptance

- EN, DE, FR, PT-BR, and ZH each expose the same 172 released source paths.
- Every new localized route has complete visible copy in its target language;
  product names, polymer abbreviations, standards, units, and technical values
  remain shared source data.
- Internal links among released route families retain the current locale.
- Every page group has reciprocal `en`, `de`, `fr`, `pt-BR`, `zh-CN`, and
  `x-default` alternates and one unique sitemap location per locale.
- Representative route families pass at `1920x1080` and `390x844` without
  horizontal overflow or clipped long localized text.

## Full-site Human Mouse Audit — 2026-08-21

### Scope

- Audit the running local site from a first-time visitor's perspective using
  visible mouse clicks, scrolling, hover, menu expansion, forms, filters, and
  browser navigation rather than route-only DOM inspection.
- Cover the main English journey and representative mobile/localized journeys.
- Record findings only; do not modify production code in this audit.

### Batches

- [x] Batch A — First impression, homepage, Header, mega menus, search/TDS.
- [x] Batch B — Products hub, POM directory, grade detail, solution crossover.
- [x] Batch C — Applications, Components, Resources, About.
- [x] Batch D — Contact conversion, form validation, back-navigation and Footer.
- [x] Batch E — Mobile menu, touch flow, released German/French/Portuguese paths.
- [x] Batch F — Consolidate severity, reproduction paths, visual evidence, and
      user-journey conclusions.

## Full-site Audit Remediation — 2026-08-21

### Execution order

- [x] Batch 0 — Reconcile and checkpoint the existing uncommitted mobile work.
- [x] Batch 1 — Repair fixed-header and pinned-nav anchor positioning.
- [x] Batch 2 — Make localized Page Hero titles resilient to long words.
- [x] Batch 3 — Fix Resource article TOC click/scroll active state.
- [x] Batch 4 — Clarify intentional English fallback links without false locale URLs.
- [x] Batch 5A — Replace generic silk Hero imagery with industrial evidence.
- [x] Batch 5B — Polish CTA affordance, divider density and 44px utility targets.
- [x] Batch ZH-0 — Audit Chinese localization architecture and release scope.
- [x] Batch ZH-1 — Create Chinese shared, Home, Products and Contact dictionaries without public release.
- [x] Batch ZH-2 — Create Chinese category, grade and TDS dictionaries.
- [x] Batch ZH-3 — Atomically enable `/zh` routing, navigation, sitemap and SEO, then run regression.
- [ ] Batch ZH-4 — Expand Chinese coverage to all remaining site families.
- [ ] Batch 6 — Run full regression, commit by batch and deploy.

Detailed plan: `outputs/full-site-human-audit/remediation-plan.md`.

### Acceptance

- Every top-level navigation destination is reached by clicking visible UI.
- At least one complete material-selection-to-contact journey is completed.
- Hover, expanded menu, filter, accordion, form-error, and mobile-menu states
  are visually inspected.
- Findings distinguish usability, visual-design, accessibility, content-intent,
  and technical failures.
- Evidence and the final audit live under `outputs/full-site-human-audit/`.

## Scope

- Refine the existing production design for 375–430px mobile web.
- Preserve URLs, metadata, H1 text, schema, page ownership, technical data,
  CTA destinations, desktop information architecture, and released locale
  behavior.
- Use existing tokens, shared components, and owning stylesheets.

## Batches

- [x] Batch 0 — Audit representative routes at 390px, then confirm failures at
      375px, 430px, 767/768/769px, and 1920px only where relevant.
- [x] Batch 1 — Fix verified P0 overflow, grade-browsing, and tap-target defects.
- [x] Batch 2 — Fix shared Header, mobile menu, and Footer defects in isolation.
- [x] Batch 3 — Refine Hero and CTA behavior by route family.
- [x] Batch 4 — Refine section rhythm, cards, imagery, and typography.
- [x] Batch 5 — Run locale, SEO, desktop, test, and production-build gates.

## Acceptance

- No horizontal page overflow at 375px, 390px, or 430px.
- Key mobile actions remain at least 44px high and do not overlap.
- Grade names and primary technical values remain readable without page-level
  horizontal scrolling.
- The homepage dark Header and an inner-page white Header retain closed and
  expanded desktop behavior when shared navigation changes.
- Before/after evidence uses the same viewport; default samples are 390×844
  and 1920×1080.
- No URL, canonical, robots, metadata, H1, schema type, technical record, or
  primary link destination changes.

## Progress Notes

- 2026-08-21: Plan created. Batch 0 audit started; no UI files changed yet.
- 2026-08-21: Batch 0 complete. All 16 priority routes match document width at
  the 390px browser baseline. Existing grade lists already render as readable
  cards. Verified issues for Batch 1: inconsistent-width POM family rail cards
  without scroll snapping, and the shared Resource article mobile TOC trigger
  measuring 36px instead of the 44px touch target.
- 2026-08-21: Batch 1 complete. POM family cards are equal-width snap items at
  the phone breakpoint; document width remains stable at 375/390/430 samples.
  Resource mobile TOC triggers and section links now measure 44px. Typecheck
  passed; 1920px product-family grid remains unchanged.
- 2026-08-21: Batch 2 complete. Header and both mobile-menu material states
  already pass without changes. Footer mobile contact, accordion-link, social,
  privacy, and settings actions now expose 44px hit areas. The 1920px Footer
  keeps its original desktop contact height and menu composition.
- 2026-08-21: Batch 3 complete. Homepage, product category, wear, conductive,
  resource, component, and application Hero samples already pass. The modified
  POM mobile intro was white on a white surface because a desktop image-Hero
  selector had higher specificity; its primary CTA was also explicitly hidden.
  The mobile selector now wins and both 48px actions render. 375/390/430 and
  1920 checks pass without document overflow or desktop changes.
- 2026-08-21: Batch 4 complete. Modified-POM decision cards, conductive inputs,
  and both gear route families already pass and remain unchanged. Mobile
  product-category grade specs no longer render a nested four-cell border grid;
  they use the existing two-column data hierarchy with spacing. Phone widths
  remain stable and the 1920px technical grid is unchanged.
- 2026-08-21: Batch 5 complete. German, French, and Brazilian Portuguese
  category samples preserve the English mobile treatment without document
  overflow. The modified-POM Hero transition passes at 767/768/769px. SEO
  ownership tests (11/11), the full test suite (60/60), ESLint, TypeScript,
  catalog checks, SEO catalog checks, and the Next.js production build pass.
- `task_plan.md`, `notes.md`, and `outputs/mobile-polish/` are task artifacts
  and remain outside the production commit unless explicitly requested.
