# Taiyi POM Site PRD

This file is the product, content, design, and acceptance reference for the Taiyi Polymer website. It is not runtime code. Use it to keep future page edits, AI-generated content, component choices, and visual polish aligned with the site's business goal, brand direction, implementation scope, and release quality bar.

## Current Working Baseline

As of 2026-07-01, the active working branch is `codex/site-cleanup-batches`. The GitHub tag `checkpoint-before-react-bits` points to the checkpoint commit `6a64732 checkpoint: current site iteration`.

Treat that tag as the pre-React-Bits recovery point. If later motion or component experiments feel wrong, compare against or return to that tag rather than guessing which visual changes caused the drift.

The current homepage and main navigation baseline is:

- Header, mega menu, and homepage content use a shared `82rem` maximum content frame with matching desktop side padding.
- Main navigation is white, compact, and right-weighted, with a dark logo, smaller nav labels, a `Contact` text link, and a search icon button instead of a heavy quote button.
- The homepage should avoid region-dividing lines, faint grid overlays, nested pale panels, and second-layer background blocks over the main page background.
- The first screen should stay restrained and image-led. React Bits-style interaction should begin below the hero unless there is a strong functional reason.

### Active Implementation Snapshot (2026-07-16)

This is a handoff snapshot for future maintenance sessions. Refresh it after the next checkpoint commit rather than treating stale working-tree details as permanent product requirements.

- Active branch: `codex/keptds`; last committed baseline at the time of this snapshot: `2c97a27 Add deployment environment template`.
- The working tree contains intentional, uncommitted Resources and Header work. Inspect `git status --short` before editing and preserve all existing changes.
- Resources are organized by buyer task: Choose a Material, Process & Troubleshoot, and Find Data. `src/data/resourceNavigation.ts` is the shared navigation source used to keep the Resources mega menu and Resources page language aligned.
- `/resources` has an image-led technical hero, task navigation, grouped resource lists, and a restrained contact path. Do not turn it back into a collection of unrelated cards.
- Products, Applications, and Resources mega-menu item underlines now share the `mega-nav-label` implementation. Their thickness, color, offset, animation, and text-width behavior should remain visually consistent.
- The dark homepage header and its expanded menu are one frosted-glass material system. Inner pages use the white header and white expanded menu with no gap between them.
- A cross-material Conductive / Antistatic page can support search intent and specialist inquiries without becoming a primary top-navigation branch. Keep the main product architecture focused on established material families.
- Current uncommitted files at this snapshot: `src/app/resources/page.tsx`, `src/app/styles/header.css`, `src/app/styles/resources.css`, `src/components/Header.tsx`, `src/data/resources.ts`, and new `src/data/resourceNavigation.ts`.
- Most recent verification for the shared navigation work: `npm run typecheck` passed; Products, Applications, and Resources expanded-menu hover states were visually inspected at `1920x1080` on a white inner-page header, and Products was also checked on the dark homepage header. Browser console errors: none.

### Component Solution Structure (2026-08-08)

- Component-led content belongs to the Applications family. `/components` is the hub, with one detail route per component family; it is not a new top-level navigation branch and it is not part of Resources.
- The initial six families are Precision Plastic Gears, Bushings and Sleeves, Conveyor Chain Components, Valve Spools and Cartridges, Textile Guide Components, and IC Handling Trays.
- Applications, its mega menu, and the Footer expose the component hub without listing every child route in global navigation.
- The hub and six initial detail routes now contain verified engineering content, useful component imagery, and complete internal-link paths. Keep the hub and only detail routes backed by `componentSolutionDetails` indexable and included in `sitemap.xml`; future scaffold routes remain `noindex, follow` and excluded until they pass the same content, imagery, and internal-link gate.

### Multilingual Products Release (2026-08-13)

- Phase A is limited to isolated, non-indexable routing previews at `/de/i18n-preview`, `/fr/i18n-preview`, and `/pt-br/i18n-preview`.
- Phase B publishes complete, human-reviewed React pages at `/de/products`, `/fr/products`, and `/pt-br/products`, backed by typed dictionaries and `next-intl`. The English `/products` page and these three localized pages form one public language group.
- The four Products pages emit the correct HTML language, a self-canonical, reciprocal `hreflang` entries for `en`, `de`, `fr`, `pt-BR`, and `x-default`, and are indexable sitemap entries. The Header exposes the same four destinations on desktop and in the mobile menu only while visiting this released page group.
- Existing unprefixed English routes outside this released group remain unchanged. Do not publish a localized URL, language switcher destination, sitemap entry, or `hreflang` for an incomplete page.
- Every Phase A preview route remains `noindex` in metadata and HTTP policy and stays absent from sitemap, public language navigation, and `hreflang`.
- The localized release manifest maps only reviewed page pairs. Unreleased destinations keep their existing English URL instead of creating a localized URL with English fallback or a false 404.
- Codex owns linguistic, technical, factual, SEO, and rendered review. User confirmation is required only when the approved English source does not establish an underlying business fact.
- Future localized pages require the same reviewed release gate. A locale URL must not expose English fallback content or become indexable before its full translated page passes review.

### Multilingual Core Funnel Release (2026-08-14)

- ML1 extends the reviewed public language group to Home and Contact at `/de`, `/fr`, `/pt-br`, `/de/contact`, `/fr/contact`, and `/pt-br/contact` while preserving the existing English routes.
- Home, Products, and Contact now share reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates, self-canonicals, language-switcher destinations, and sitemap inclusion.
- Localized Home and Contact use typed, complete page dictionaries. Contact field labels, material options, prefilled context, progress, success, fallback, and email-draft copy must not fall back to English.
- Within these released pages, Home, Products, and Contact links remain in the current locale. Applications, Resources, About, product categories, grade pages, technical-data search, previews, dynamic search parameters, and legal pages continue to use their existing English routes until separately reviewed.
- Publishing a locale shell is still not sufficient: each future route requires complete translated copy, factual and linguistic review, responsive rendered acceptance, reciprocal SEO signals, and explicit release-manifest inclusion.

### Multilingual Product Decision Pilot (2026-08-15)

- Batch 3A extends the public `de`, `fr`, and `pt-br` funnel to `/products/categories/base-pom-resin`, `/products/xt-100-base-pom-resin`, and `/technical-data-sheets` under each locale prefix.
- The localized category, XT-100 evidence page, technical-data entry, and Contact handoff form one reviewed path. Product values, units, methods, and document status continue to come from the shared product source; server-only dictionaries localize interface and evaluation copy without duplicating technical records.
- The English source pages and all three localized versions emit reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates, self-canonicals, language-switcher destinations, and unique sitemap entries.
- Unreleased localized product aliases remain unavailable. Localized technical-data query variants are `noindex, follow` and canonicalize to the clean language landing page; dynamic search results are not part of this release.
- Category rows without a reviewed localized grade page route to the localized project-review form instead of exposing English fallback copy on a localized URL.
- The next expansion should follow the same gate for priority POM categories and reviewed cross-reference grades before translating Resources, Applications, and Components linked from those grades.

### Multilingual Product Decision Expansion (2026-08-15)

- Batch 3B first slice adds reviewed ETM450 and ETM750 grade pages under `de`, `fr`, and `pt-br`, creating six additional localized product URLs while retaining the existing unprefixed English source pages.
- The localized Base POM Resin category now links ETM450, ETM750, and XT-100 to released grade pages. The localized technical-data page presents the same three reviewed grades and preserves locale and grade context when handing off to Contact.
- Product values, units, methods, and document status remain sourced from the shared catalog. Localized grade profiles explain selection focus, application fit, processing limits, and validation boundaries without duplicating or overstating technical records.
- Each released grade language group emits self-canonicals and reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates. The sitemap contains 196 unique URLs, including all six new localized grade URLs without duplicates.
- Technical-data query variants remain `noindex, follow`. Competitor-grade mappings whose evidence status is still `screening-seed` remain internal and must not be published as static comparison pages or equivalence claims.

### Multilingual Reviewed Grade Expansion (2026-08-16)

- Batch 3C adds reviewed EGB25 and EGH502H grade pages under `de`, `fr`, and `pt-br`, extending the public product-decision funnel with six localized grade URLs.
- EGB25 remains identified as 25% glass-bead-filled POM; EGH502H remains identified as 25% glass-fiber-reinforced POM. Shared catalog records continue to own all values, units, methods, applications, and document status.
- The localized technical-data entry lists the two grades only after their full page copy is reviewed. Their category breadcrumb labels are localized, while unreleased category destinations continue to use the existing English URL instead of exposing an incomplete localized category page.
- Each grade language group uses a self-canonical and reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates. Clean grade URLs are indexable and included in sitemap; technical-data query variants remain `noindex, follow`.
- The generated sitemap now contains 202 unique URLs, including the six new localized grade URLs without duplicate `<loc>` entries.
- Public wording describes independent PLATFORM candidates for technical evaluation. It does not expose a competitor matrix or claim equivalence, direct replacement, or automatic application approval.

### Multilingual Reinforced POM Category Expansion (2026-08-16)

- Batch 3D publishes the Glass Bead Filled POM and Glass Fiber Reinforced POM category pages under `de`, `fr`, and `pt-br`, adding six reviewed localized category URLs.
- The glass-bead category links the released EGB25 page in the current language. The glass-fiber category links the released EGH502H page in the current language; unreleased grade rows hand off to the localized Contact route with category and grade context instead of exposing incomplete localized detail pages.
- Category copy explains shrinkage, fiber orientation, stiffness, tooling, processing, documents, and project-validation boundaries without duplicating technical values from the shared catalog or making automatic suitability claims.
- Each category language group uses a self-canonical and reciprocal `en`, `de`, `fr`, `pt-BR`, and `x-default` alternates. All six clean category URLs are indexable and included in sitemap.
- The generated sitemap now contains 208 unique URLs. Dynamic technical-data queries, aliases, and internal preview pages remain outside this localized release.

### Unified Grade Alternative Search (2026-08-15)

- The English `/technical-data-sheets` search recognizes only curated reference-grade aliases and may place reviewed PLATFORM candidates ahead of ordinary catalogue matches. Unknown reference grades must not produce a guessed recommendation.
- Candidate wording remains preliminary screening language and directs users to compare current TDS data, application requirements, documents, and customer validation; it must not claim equivalence or direct replacement.
- Reference matching stays server-side. The former public `/pom-grade-cross-reference` route, workspace component, dedicated styles, sitemap exposure, and internal entry points are removed rather than maintained as a separate tool.
- The retired route was public for only one day and intentionally returns 404 after removal. The unified technical-data search is the sole public entry for current-grade lookup.

## Version Goal

The current site version should help an overseas buyer or engineer understand Taiyi Polymer's POM compound direction, identify relevant product or application paths, find technical documents or resources, and contact sales with enough context for a material recommendation.

The experience should feel like a credible B2B engineering plastics manufacturer: clear, technical, calm, and easy to scan. It should not feel like a generic AI landing page, a consumer startup site, or a decorative portfolio.

## In Scope

- Home page structure, visual hierarchy, alignment, and primary inquiry paths.
- Product listing, product categories, grade detail pages, and TDS routes.
- Application overview and application detail pages.
- Resources overview, guide pages, FAQ, and technical-data-sheet entry.
- About page factory proof, capability narrative, and production imagery.
- Contact page inquiry guidance and form path.
- Shared navigation, mega menu, secondary navigation, CTAs, and core responsive behavior.
- Conservative motion and interaction polish when it supports comprehension.

## Out Of Scope For This Version

- Online quoting, account login, cart, payments, real-time inventory, or order tracking.
- User-uploaded part drawing analysis.
- Live chat, CRM automation, or automated email workflows beyond the existing inquiry path.
- CMS authoring, admin dashboards, broad multilingual content management beyond the published Products language group, or customer portals.
- Claims that require unavailable certificates, audited test data, customer approvals, or legal review.
- Decorative animation systems that do not directly improve product selection, scanning, or inquiry flow.

## Product Role

The site is a technical sourcing website for Jiangsu Taiyi Nano Technology Co., Ltd. It should help overseas buyers and engineering teams understand POM compound material directions, compare grade families, review application fit, find TDS/resource paths, and contact sales with enough context for a practical material recommendation.

The site should feel like a credible engineering plastics manufacturer, not a generic marketing landing page.

## Primary Users

- Overseas procurement teams comparing suppliers, material families, and documentation readiness.
- Material engineers screening POM compounds, PA6, PA66, PPA, or PPS options for molded parts.
- Injection molding and mold engineers evaluating shrinkage, warpage, flow, dimensional stability, wear, friction, impact, or document requirements.
- Buyers who need a TDS, grade direction, or inquiry path without reading a dense datasheet first.

## Core Jobs

- Explain what Taiyi Polymer supplies and where POM compounds fit.
- Help users move from application need to material direction.
- Make product families, grade categories, and TDS routes easy to scan.
- Provide resources that answer common technical screening questions before inquiry.
- Make contact and quote actions visible without making the site feel pushy.

## Positioning

Taiyi Polymer should be positioned as a factory-based engineering plastic compound manufacturer with practical POM compound evaluation support, in-house compounding capability, and document support for industrial sourcing.

Use proof points such as factory scale, production lines, testing equipment, available documents, applications, and real production imagery. Avoid claims that require unverified certificates, customer cases, compliance approvals, or performance guarantees.

## Voice

The voice is professional, restrained, technical, and helpful.

Use:

- Direct engineering language.
- Short explanations that clarify tradeoffs.
- Grade-specific or project-specific framing.
- Use `Taiyi Polymer` as the public company name, `PLATFORM` as the material brand, and `Jiangsu Taiyi Nano Technology Co., Ltd.` where the legal entity is required.
- Use `Discuss Your Application` for a general inquiry, `Submit Project Requirements` for form submission, and `Find Grade Data & TDS` for technical-data entry points.
- Name the expected result when possible: candidate material families, a grade shortlist, available documents, or a sample-evaluation step.

Avoid:

- Hype words like revolutionary, cutting-edge, world-class, best, unmatched, or guaranteed.
- Consumer-startup friendliness.
- Vague innovation copy.
- Generic `direction`, `review`, or `support` wording when a concrete customer outcome can be named.
- Unsupported claims about potable water, food contact, automotive approval, flammability, outdoor durability, fuel contact, or electrical compliance.

## Content Rules

- Suitability must be framed as grade-specific and project-specific.
- Processing, shrinkage, compliance, and performance details should point to TDS, trials, or project review unless exact verified data exists in the website data.
- Do not invent fixed molding temperatures, drying temperatures, pressure values, shrinkage percentages, certifications, inventory, pricing, delivery times, or customer cases.
- Resource pages should answer buyer-search questions clearly and preserve technical caution.
- Product pages should prioritize material direction, data comparison, application fit, and document routes over decorative storytelling.

## Content And Data Requirements

Product and technical content should be treated as structured product data, not freeform marketing copy.

- Each product or grade should have a stable name, slug, category, short description, material direction, application fit, available document path, and inquiry route.
- If exact technical values are unavailable, use qualitative screening language and direct users to TDS or project review.
- TDS, SDS, COA, REACH, RoHS, and similar document mentions must distinguish between generally available support and grade-specific availability.
- Application pages should connect part function to material direction, not claim universal suitability.
- Resource content should be reusable across product and application flows, especially for selection, processing, troubleshooting, and document preparation.
- Images should support the content: product pellets, molded parts, CAD/application context, factory, equipment, or testing. Avoid purely atmospheric images when a buyer needs technical confidence.

## Information Architecture

Top navigation should stay focused:

- Products: material families, grade categories, grade details, TDS path.
- Applications: industry/application fit and recommended material review direction.
- Resources: selection guide, processing guide, application notes, FAQ, and TDS support.
- About: factory capability, production proof, document support, and company credibility.
- Contact: inquiry preparation and sales contact.

News or updates can exist under Resources later, but should not become a primary navigation item unless there is a real publishing plan.

## Page Requirements

### Home

- Establish POM compounds as the core line, with selected engineering plastic compound support, within the first screen.
- Show core proof points: annual capacity, establishment year, production lines, factory scale, and laboratory/testing equipment.
- Provide clear routes to products, applications, TDS/resources, and contact.
- Keep the shared content frame consistent across header, hero, metrics, product, selection, factory, and CTA sections.
- Avoid visible section-dividing lines, faint grid overlays, nested pale panels, and decorative background layers.
- Use interaction below the hero to clarify selection or product structure, not to decorate the page.

### Products

- Let users scan product families and grade directions before opening detail pages.
- Product category pages should explain the family, show relevant grade groups, expose document paths, and provide inquiry CTAs.
- Grade pages should prioritize key properties, application fit, document availability, and contact path.
- Do not overstate performance without verified data.

### Applications

- Help users map part function and operating need to a material review direction.
- Application pages should use practical engineering notes, visual context, and restrained CTAs.
- Recommended materials should be framed as starting points for review, not final guarantees.

### Resources

- Organize technical guides around buyer and engineer questions: selection, processing, application notes, FAQ, and TDS support.
- Make technical-data-sheet access easy to find from navigation, resources, products, and contact.
- Accordions, filters, and guide explorers are acceptable when they reduce scanning effort.

### About

- Build trust through factory capability, production scale, testing/document support, and real imagery.
- Avoid generic corporate storytelling unless it is backed by concrete evidence.

### Contact

- Help users prepare a useful inquiry: material, part function, application environment, required documents, processing method, and target properties.
- Confirmation and error states should be clear, calm, and professional.

## Functional Requirements

- Header navigation must expose Products, Applications, Resources, About, Contact, and a search/TDS-oriented entry.
- Mega menus should align to the same page frame as the header and homepage content.
- Search entry should lead users toward technical data sheets or material discovery, not a dead-end placeholder.
- Product accordions, filters, or reveal controls must be keyboard accessible and understandable without animation.
- Contact form submission must provide success and failure feedback.
- Internal links should move users between product, application, resource, and inquiry paths without trapping them in isolated pages.
- Reduced-motion users should still receive the same content and interaction affordances.

## Visual DNA v1

Visual DNA v1 is the stable design contract for the current site. It captures the approved direction without freezing one screenshot, one generated asset, or one temporary module layout. Future redesigns should preserve this DNA unless the product direction is intentionally revised.

### Brand Character

- The site should feel calm, precise, physical, and industrial rather than generic, decorative, or software-like.
- Material expertise should be communicated through real production context, disciplined typography, useful technical detail, and controlled motion.
- Reference sites may inform pacing, image use, material surfaces, and interaction logic, but their layouts or visual signatures should not be copied literally.

### Image Hierarchy And Authenticity

- Prefer verified real imagery in this order: factory and production, laboratory and testing, certificates and documents, products and molded-part context.
- One decisive, well-cropped image is better than several mediocre images. Do not introduce a carousel merely to compensate for weak or insufficient assets.
- Use a carousel only when there are at least three visually consistent, high-quality images that each add distinct information. Otherwise use one static image or a deliberate image-and-content composition.
- AI-generated imagery may support abstract material textures, satin-like light surfaces, and non-factual atmospheric backgrounds. It must not fabricate factories, laboratories, certificates, customer cases, test results, or product evidence.
- Generated product or document visuals must not introduce unverified grades, compliance claims, performance values, or packaging details. Essential claims and navigation must remain live HTML text rather than being available only inside an image.
- Crop real images intentionally. Avoid empty image containers, visibly stretched photos, inconsistent aspect ratios, and controls that draw attention to low-resolution assets.

### Surface And Background Language

- Avoid long runs of flat, undifferentiated color when a restrained physical surface would improve depth. Use real photography or approved light/dark satin-like textures selectively, not as decoration on every section.
- Dark surfaces should feel like controlled industrial material: deep navy-black, subtly translucent or softly textured when appropriate, with strong text contrast.
- Light surfaces should remain clean and neutral. White satin or technical-paper texture may add depth, but must not reduce legibility or make the page look dirty, cloudy, or over-processed.
- Gradients must describe plausible light, depth, or material response. Do not use arbitrary colorful gradients, blobs, glows, or decorative effects.

### Layout, Density, And Typography

- All primary modules align to the shared site rail. Visible rendered edges are the acceptance standard; matching variables alone is not enough.
- Use space deliberately. Avoid both crowded technical tables and large unearned voids. A section should feel compact enough to scan and open enough to establish hierarchy.
- Keep module titles concise and naturally wrapped. Do not force line breaks for effect, allow narrow columns to create awkward wraps, or use oversized headings that consume the module.
- Preserve clear alignment within each module: title, supporting copy, controls, imagery, and content blocks should share deliberate top or baseline relationships.
- Use the established type system and scale. Do not add new fonts or typographic treatments to solve a local layout problem.

### Components And Interaction

- Use Tailwind for layout, responsive behavior, spacing, state styling, and small adjustments. Use shadcn/Radix primitives for interaction-heavy elements such as accordions, dialogs, menus, and carousels when those behaviors are genuinely needed.
- Components should reduce bugs and create consistency; they should not be added merely to make a static section look more designed.
- Comparison or review accordions should keep one meaningful item expanded when closing every item would create an empty or confusing state.
- Remove redundant controls, repeated labels, and duplicate information. Static presentation is preferred when interaction does not improve comprehension.

### Motion

- Motion should clarify hierarchy, establish pacing, or confirm interaction. It must not compensate for weak composition or weak imagery.
- Prefer a small number of coordinated moments: restrained hero entry, purposeful section reveals, and clear state transitions. Avoid constant looping, decorative parallax, or identical reveal effects on every module.
- Never gate essential content behind animation. Respect `prefers-reduced-motion` and preserve the same information and interaction affordances without motion.

### Visual Acceptance

- Judge changes from rendered output, not component reuse, CSS cleanliness, or design intent alone.
- For desktop visual work, compare before and after at `1920x1080` unless another viewport is specified. Responsive changes also require one representative mobile check.
- Verify alignment, crop quality, title wrapping, information density, interaction state, and transition behavior in the affected module and its immediate neighboring sections.
- Do not call a visual change complete when the page still contains obvious empty space, mismatched surfaces, hard wrapping, low-quality imagery, or controls that do not earn their place.

## Visual Direction

The design should be industrial, restrained, and confident.

Use:

- A consistent content reference line across header, mega menu, hero, metrics, product, application, resources, and CTA sections.
- Dark navy surfaces for important CTAs, hero sections, and technical emphasis.
- White or very light blue-gray content surfaces for readable technical sections.
- Real factory, product, application, pellet, CAD, or part imagery.
- Compact but breathable layouts that support scanning.
- Blue accent bars or small technical markers only when they clarify hierarchy.
- Minimal borders; use spacing, surface contrast, shadow, and typography before adding lines. On the homepage, default to no visible section-dividing lines.
- Frosted-glass navigation may be used when it feels like a controlled industrial material: translucent, softly blurred, dark enough for legibility, and visually continuous across the header and its expanded mega menu.

Avoid:

- Generic AI landing page composition.
- Decorative gradient blobs, orbs, bokeh, and purely atmospheric backgrounds.
- Too many nested cards.
- One-note pale blue backgrounds everywhere.
- Heavy grid lines, table-like borders, and visual clutter.
- Treating code-level sameness as visual sameness. Shared variables, reused selectors, or one DOM layer do not satisfy the design unless the rendered surface actually looks consistent.

## Header Glass Quality Bar

When the header uses a dark frosted-glass treatment, the navigation bar and expanded mega menu must read as one intentional material system.

- The header and expanded menu should have matching perceived color, blur, transparency, highlight, and shadow behavior. The user should not see a separate gray layer, hard seam, or obvious change in material quality between them.
- Background content may provide atmosphere through blur, but it must not remain clearly identifiable through the expanded menu. Factory cards, white panels, image edges, and text behind the menu should not compete with menu labels.
- The treatment must remain frosted glass, not a flat black translucent rectangle. It should preserve softness, depth, and subtle light response while keeping menu text readable.
- If `backdrop-filter` creates inconsistent results because the header and menu sit over different page content, add a stable glass material layer or scrim that controls the bleed instead of only changing opacity.
- Implementation is not the acceptance standard. A shared CSS variable, a shared pseudo-element, or a single component structure is only acceptable if the rendered result meets the visual criteria above.
- Playful SaaS animation or consumer portfolio styling.

## Page Patterns

Home should establish the business quickly: POM compounds as the core line, selected engineering plastic compound support, product families, application fit, resources, and inquiry path.

Home alignment is part of the product quality bar. Section content should not wander between unrelated left edges. If a module needs asymmetry, it should still clearly relate to the shared page frame.

Product pages should make comparison easy: family/category context, grade list, key properties, document links, and practical CTAs.

Application pages should connect part function to material review direction. Use images and compact engineering notes, not long generic paragraphs.

Resources pages should feel like technical guides. They can use search, topic navigation, accordions, or module lists, but the layout must stay calm and readable.

About should use factory proof: production capacity, production lines, testing/document support, and real workshop imagery. Avoid generic corporate timeline blocks unless there is meaningful content behind them.

## Hero And Secondary Navigation Pattern

Product category pages and application detail/category pages should share the same hero-to-secondary-navigation logic.

- Use a full-width image-led hero with a white information card over the left side of the image.
- The hero card should be large enough to feel intentional and product-grade, not like a small floating label. It may be wider and taller than the text strictly requires when this improves visual weight and first-screen balance.
- The hero card should overlap downward into the secondary navigation support area, similar to the product category pages. This overlap creates the page rhythm: image hero, white technical card, then secondary navigation.
- The transition between the hero image and the secondary navigation must be a clean white or matching surface band. Do not allow image gradients, mesh backgrounds, pale blue strips, shadows, or mismatched background colors to show as a separate "gap" between the hero and nav.
- The secondary navigation should sit on a generous white full-width band. It should feel like it catches and supports the hero card, not like a thin line pasted under the hero.
- Product and application secondary navigation should use the same visual language: white background, clear tab spacing, blue active underline, optional left blue title marker, and restrained CTA buttons.
- Sticky secondary navigation can reveal compact title and action controls, but the pinned state should stay functional and calm. Avoid crowding it with long explanatory text.
- When adapting this pattern to mobile, simplify the layout rather than preserving every desktop overlap. The core content, CTAs, and section tabs must remain visible and usable.

## Motion And Components

Motion is allowed only when it improves hierarchy, feedback, or polish.

- React Bits, GSAP, Motion, or similar effects should be subtle and one-time for content reveal, hover feedback, or section transitions.
- Do not add animation just because a library is available.
- Near-term React Bits candidates are the homepage selection logic path and product portfolio accordion. Do not use decorative background effects such as aurora, blobs, spotlights, or noisy text tricks for this site.
- Avoid elastic, playful, noisy, or repeated animation on technical pages.
- Respect reduced-motion behavior where practical.
- Prefer existing site components and visual language first; use external component libraries only as enhancement, not as replacement for the brand.

## Success Criteria

The site is successful when:

- A first-time buyer can understand what Taiyi Polymer supplies within the first screen and first scroll.
- A material engineer can find a relevant product family, grade direction, application path, or TDS route without guessing.
- The website feels credible for industrial sourcing and does not rely on unsupported claims.
- Contact and document inquiry paths are visible but do not overpower technical content.
- Desktop and mobile layouts stay aligned, readable, and free of incoherent overlap.

## SEO And Performance Requirements

- Page titles and metadata should reflect material family, application, or resource intent.
- Product and application pages should use plain technical language that matches buyer search behavior.
- Images should be compressed, intentionally cropped, and given useful alt text when they communicate real content.
- Avoid shipping decorative assets, animation scripts, or component libraries that do not support the current page goal.
- Production builds should pass before a pushed checkpoint or release candidate.

## Tooling Notes

Use GitNexus before broad refactors or pre-commit review to understand affected symbols and flows, especially when touching navigation, shared data, product pages, application pages, Resources pages, or About.

Use design skills or UI libraries to sharpen hierarchy, spacing, and motion decisions, but judge each component against this site's industrial B2B context before applying it.

## Quality Bar

Before considering a UI change complete, check:

- The page explains its purpose within the first screen.
- CTAs are visible but not loud.
- Text lines are readable and do not wrap awkwardly.
- Backgrounds, shadows, and borders feel consistent with the rest of the site.
- Visual materials are judged by the rendered result. For header glass and mega menus, "consistent" means perceived material consistency, not only shared code.
- Real images are cropped intentionally and do not look like placeholders.
- Technical content does not overclaim.
- Mobile may be simpler, but it must not break, overlap, or hide core content.

## Acceptance Checklist

Use this checklist before treating a design or implementation batch as complete.

- Header, mega menu, and primary page content share a clear reference frame.
- Header and mega menu glass, when enabled, render as one coherent frosted material with no obvious seam, gray mismatch, or excessive background bleed.
- Homepage modules do not use unnecessary dividing lines, faint grids, or second-layer background blocks.
- Products, Applications, Resources, About, Contact, and TDS/search routes are reachable from the main navigation.
- Product pages expose category context, grade direction, document path, and inquiry route.
- Application pages frame material suggestions as review directions.
- Resource pages answer practical technical questions and preserve caution where exact data is unavailable.
- Contact path works and provides clear feedback.
- CTAs are visible but do not dominate technical hierarchy.
- No unsupported technical, compliance, customer, pricing, lead-time, or certification claims were added.
- Real images are cropped intentionally and do not look like placeholders.
- Mobile layout has no text overflow, broken controls, or incoherent overlap.
- Keyboard navigation and focus states are usable for menus, buttons, links, accordions, and forms.
- `npm run build` passes before a checkpoint commit unless the change is documentation-only.

## Future Backlog

Potential future work should be evaluated against the PRD before implementation.

- Add a more structured material selection path on the homepage.
- Convert the homepage product portfolio into a controlled, accessible accordion or comparison explorer.
- Improve technical-data-sheet discovery with filtering or search if product data supports it.
- Expand multilingual support beyond the published Products language group only through reviewed, complete locale/page releases.
- Add richer resource content when verified processing, selection, or troubleshooting material exists.
- Add analytics or conversion tracking when privacy, hosting, and business reporting needs are defined.

## Accessibility

Aim for WCAG AA basics:

- Strong text contrast.
- Semantic headings.
- Keyboard-accessible navigation, buttons, links, and accordions.
- Visible focus states.
- Meaningful alt text for real images.
- No text overflow or incoherent overlap across desktop and mobile.
