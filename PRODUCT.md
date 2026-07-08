# Taiyi POM Site PRD

This file is the product, content, design, and acceptance reference for the Taiyi Nano website. It is not runtime code. Use it to keep future page edits, AI-generated content, component choices, and visual polish aligned with the site's business goal, brand direction, implementation scope, and release quality bar.

## Current Working Baseline

As of 2026-07-01, the active working branch is `codex/site-cleanup-batches`. The GitHub tag `checkpoint-before-react-bits` points to the checkpoint commit `6a64732 checkpoint: current site iteration`.

Treat that tag as the pre-React-Bits recovery point. If later motion or component experiments feel wrong, compare against or return to that tag rather than guessing which visual changes caused the drift.

The current homepage and main navigation baseline is:

- Header, mega menu, and homepage content use a shared `82rem` maximum content frame with matching desktop side padding.
- Main navigation is white, compact, and right-weighted, with a dark logo, smaller nav labels, a `Contact` text link, and a search icon button instead of a heavy quote button.
- The homepage should avoid region-dividing lines, faint grid overlays, nested pale panels, and second-layer background blocks over the main page background.
- The first screen should stay restrained and image-led. React Bits-style interaction should begin below the hero unless there is a strong functional reason.

## Version Goal

The current site version should help an overseas buyer or engineer understand Taiyi Nano's POM compound direction, identify relevant product or application paths, find technical documents or resources, and contact sales with enough context for a material recommendation.

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
- CMS authoring, admin dashboards, multilingual content management, or customer portals.
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

- Explain what Taiyi Nano supplies and where POM compounds fit.
- Help users move from application need to material direction.
- Make product families, grade categories, and TDS routes easy to scan.
- Provide resources that answer common technical screening questions before inquiry.
- Make contact and quote actions visible without making the site feel pushy.

## Positioning

Taiyi Nano should be positioned as a factory-based engineering plastic compound manufacturer with practical POM compound evaluation support, in-house compounding capability, and document support for industrial sourcing.

Use proof points such as factory scale, production lines, testing equipment, available documents, applications, and real production imagery. Avoid claims that require unverified certificates, customer cases, compliance approvals, or performance guarantees.

## Voice

The voice is professional, restrained, technical, and helpful.

Use:

- Direct engineering language.
- Short explanations that clarify tradeoffs.
- Grade-specific or project-specific framing.
- Plain CTAs such as "Discuss Requirement", "Find a TDS", or "Contact Sales".

Avoid:

- Hype words like revolutionary, cutting-edge, world-class, best, unmatched, or guaranteed.
- Consumer-startup friendliness.
- Vague innovation copy.
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

- A first-time buyer can understand what Taiyi Nano supplies within the first screen and first scroll.
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
- Add multilingual support only when translation ownership and content review are clear.
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
