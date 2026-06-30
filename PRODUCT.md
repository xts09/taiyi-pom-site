# Taiyi POM Site Product Guide

This file is the product, content, and design reference for the Taiyi Nano website. It is not runtime code. Use it to keep future page edits, AI-generated content, component choices, and visual polish aligned with the site's business goal and brand direction.

## Product Role

The site is a technical sourcing website for Jiangsu Taiyi Nano Technology Co., Ltd. It should help overseas buyers and engineering teams understand modified POM material directions, compare grade families, review application fit, find TDS/resource paths, and contact sales with enough context for a practical material recommendation.

The site should feel like a credible engineering plastics manufacturer, not a generic marketing landing page.

## Primary Users

- Overseas procurement teams comparing suppliers, material families, and documentation readiness.
- Material engineers screening POM, modified POM, PA6, PA66, PPA, or PPS options for molded parts.
- Injection molding and mold engineers evaluating shrinkage, warpage, flow, dimensional stability, wear, friction, impact, or document requirements.
- Buyers who need a TDS, grade direction, or inquiry path without reading a dense datasheet first.

## Core Jobs

- Explain what Taiyi Nano supplies and where modified POM fits.
- Help users move from application need to material direction.
- Make product families, grade categories, and TDS routes easy to scan.
- Provide resources that answer common technical screening questions before inquiry.
- Make contact and quote actions visible without making the site feel pushy.

## Positioning

Taiyi Nano should be positioned as a factory-based modified engineering plastic compound manufacturer with practical POM evaluation support, in-house compounding capability, and document support for industrial sourcing.

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

## Information Architecture

Top navigation should stay focused:

- Products: material families, grade categories, grade details, TDS path.
- Applications: industry/application fit and recommended material review direction.
- Resources: selection guide, processing guide, application notes, FAQ, and TDS support.
- About: factory capability, production proof, document support, and company credibility.
- Contact: inquiry preparation and sales contact.

News or updates can exist under Resources later, but should not become a primary navigation item unless there is a real publishing plan.

## Visual Direction

The design should be industrial, restrained, and confident.

Use:

- Dark navy surfaces for important CTAs, hero sections, and technical emphasis.
- White or very light blue-gray content surfaces for readable technical sections.
- Real factory, product, application, pellet, CAD, or part imagery.
- Compact but breathable layouts that support scanning.
- Blue accent bars or small technical markers when they clarify hierarchy.
- Minimal borders; use spacing, surface contrast, shadow, and typography before adding lines.

Avoid:

- Generic AI landing page composition.
- Decorative gradient blobs, orbs, bokeh, and purely atmospheric backgrounds.
- Too many nested cards.
- One-note pale blue backgrounds everywhere.
- Heavy grid lines, table-like borders, and visual clutter.
- Playful SaaS animation or consumer portfolio styling.

## Page Patterns

Home should establish the business quickly: modified POM and engineering plastic compound direction, product families, application fit, resources, and inquiry path.

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
- Avoid elastic, playful, noisy, or repeated animation on technical pages.
- Respect reduced-motion behavior where practical.
- Prefer existing site components and visual language first; use external component libraries only as enhancement, not as replacement for the brand.

## Tooling Notes

Use GitNexus before broad refactors or pre-commit review to understand affected symbols and flows, especially when touching navigation, shared data, product pages, application pages, Resources pages, or About.

Use design skills or UI libraries to sharpen hierarchy, spacing, and motion decisions, but judge each component against this site's industrial B2B context before applying it.

## Quality Bar

Before considering a UI change complete, check:

- The page explains its purpose within the first screen.
- CTAs are visible but not loud.
- Text lines are readable and do not wrap awkwardly.
- Backgrounds, shadows, and borders feel consistent with the rest of the site.
- Real images are cropped intentionally and do not look like placeholders.
- Technical content does not overclaim.
- Mobile may be simpler, but it must not break, overlap, or hide core content.

## Accessibility

Aim for WCAG AA basics:

- Strong text contrast.
- Semantic headings.
- Keyboard-accessible navigation, buttons, links, and accordions.
- Visible focus states.
- Meaningful alt text for real images.
- No text overflow or incoherent overlap across desktop and mobile.
