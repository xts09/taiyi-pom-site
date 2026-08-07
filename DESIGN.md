---
name: Taiyi POM Site
description: Evidence-led industrial design for engineering-plastics sourcing and material evaluation.
colors:
  taiyi-cobalt: "#0b5fb8"
  taiyi-cobalt-hover: "#084d94"
  technical-cyan: "#00b8d9"
  brand-red-logo: "oklch(56% 0.22 27)"
  polymer-white: "#ffffff"
  laboratory-canvas: "#f4f7fa"
  cool-paper: "oklch(98% 0.008 240)"
  industrial-ink: "#07111f"
  body-slate: "#526276"
  production-navy: "#03101d"
  evidence-navy: "oklch(22% 0.04 252)"
  on-dark: "#ffffff"
  on-dark-muted: "rgba(226, 236, 245, 0.82)"
  quiet-rule: "rgba(15, 23, 42, 0.13)"
typography:
  display:
    fontFamily: '"IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(3rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(2rem, 3.2vw, 3.35rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.04em"
rounded:
  tight: "0.25rem"
  control: "0.32rem"
  panel: "0.5rem"
  evidence: "1rem"
  pill: "999px"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4.5rem"
  3xl: "7rem"
layout:
  siteMax: "92rem"
  siteGutter: "clamp(2rem, 7.5vw, 7rem)"
  splitPrimary: "minmax(0, 5fr) minmax(0, 7fr)"
  splitBalanced: "repeat(2, minmax(0, 1fr))"
  indexedTracks: "2.25rem minmax(15rem, 5fr) minmax(0, 7fr)"
  columnGap: "1.5rem"
  copyMax: "42rem"
  alignmentTolerance: "2px"
breakpoints:
  sm: "40rem"
  md: "48rem"
  lg: "64rem"
  xl: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.taiyi-cobalt}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.tight}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.taiyi-cobalt-hover}"
  button-secondary:
    backgroundColor: "{colors.polymer-white}"
    textColor: "{colors.industrial-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tight}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  input-field:
    backgroundColor: "{colors.polymer-white}"
    textColor: "{colors.industrial-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.72rem 0.82rem"
    height: "2.75rem"
  content-panel:
    backgroundColor: "{colors.polymer-white}"
    textColor: "{colors.industrial-ink}"
    rounded: "{rounded.panel}"
    padding: "1.5rem"
  evidence-panel:
    backgroundColor: "{colors.production-navy}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.evidence}"
    padding: "2.5rem"
---

# Design System: Taiyi POM Site

## Overview

**Creative North Star: "The Materials Lab"**

The site should feel like a well-run materials laboratory connected directly to a real production floor. It is precise, evidence-led, calm, and physical. Real factory, laboratory, certificate, pellet, molded-part, and technical-document imagery carries more authority than decorative graphics.

The existing industrial identity remains the foundation: a near-white technical canvas, deep navy evidence surfaces, Taiyi cobalt interactions, restrained satin texture, one IBM Plex Sans voice across display, navigation, and body roles, and a shared wide content rail. The system consolidates these choices rather than replacing them.

Cards, shadows, dark sections, and texture must explain hierarchy. They are not default decoration. Pages should first establish one clear reading path, then use components only where grouping or interaction earns them.

**Key Characteristics:**

- Evidence before decoration.
- Light technical canvas with deliberate dark proof surfaces.
- One cobalt interaction language across the site.
- Real imagery with intentional crops and useful captions.
- Compact, readable typography with natural wrapping.
- Shared rails, spacing rhythm, and component states.

## Page Family Language

The site uses a shared foundation, not one visual template. Each route family
keeps the composition that best explains its job while reusing the same rail,
type, actions, and evidence rules.

- **Company / About:** identity, factory scale, real manufacturing and testing
  proof, credentials, then one application inquiry. `/about` is the single
  Company destination; its `#manufacturing` section owns production, warehouse,
  and testing evidence.
- **Products:** comparison and grade-selection workbench. Product data and
  technical documents take priority over factory storytelling.
- **Applications:** part-first decision support. Typical components, operating
  conditions, and candidate-material direction carry the page.
- **Resources:** reading and document discovery. Editorial hierarchy and clear
  metadata lead; promotional visual treatment stays restrained.
- **Conversion:** direct, low-friction forms and contact support, with only the
  evidence needed to build confidence in the next action.

Family consistency is judged by visible composition and information rhythm,
not by duplicating every section. A detailed page should extend its overview's
logic rather than introduce a disconnected surface language.

## External Reference Synthesis

Taiyi may borrow useful patterns from the `awesome-design-md` collection, but
the project does not copy another brand's identity. The reference blend is
**structured enterprise technology + white-paper product engineering**:

- **IBM influence — structure:** Use Carbon-like discipline for data hierarchy,
  modular grids, restrained labels, and clear separation between product
  explanation and technical evidence. Use IBM Plex Sans as Taiyi's unified
  interface typeface without importing IBM's proprietary brand system.
- **HP influence — material sequence:** Keep the near-white technical canvas,
  one strong blue interaction signal, and deep navy closing or proof surfaces.
  Angular or chevron-like motifs are allowed only when they explain a real
  product, process, or directional relationship; they are not a decorative
  pattern library.
- **Taiyi override — authority:** Taiyi cobalt, production navy, laboratory
  canvas, real manufacturing imagery, and the evidence-first reading path remain
  the source of truth. Reference styles may shape hierarchy and composition,
  never the logo, claims, color ownership, or content language.

**Reference Guardrail:** Treat external `DESIGN.md` files as inspiration for
layout, surface sequencing, and interaction clarity. Do not paste a reference
file over this document or introduce its gradients, fonts, rounded language,
or brand motifs unless an explicit Taiyi design decision adopts them.

## Governance And Sources Of Truth

Use the design sources in this order:

1. `DESIGN.md` defines visual principles, composition roles, alignment,
   typography, surfaces, motion, and acceptance criteria.
2. `tokens.css` defines runtime primitive, semantic, and component values.
3. `COMPONENTS.md` defines component ownership, variants, and migration status.
4. `PRODUCT.md` defines business goals, content rules, claims, and CTA meaning.
5. `.impeccable/design.json` supplies visual samples for tooling. It does not
   override runtime tokens, component ownership, or this document.

When sources conflict, fix the lower-priority source or document an intentional
exception in the owning component. Page-local CSS is never a new design-system
source of truth.

## Colors

The palette is cool, technical, and industrial. Taiyi cobalt is the only primary interaction color. Technical cyan is reserved for focus, small engineering markers, and controlled dark-surface highlights. Brand red stays inside the PLATFORM logo and does not become a competing UI accent.

### Primary

- **Taiyi Cobalt:** Primary buttons, active navigation, links that need emphasis, focus-adjacent states, and selected controls.
- **Taiyi Cobalt Hover:** Hover and active depth for cobalt controls.

### Secondary

- **Technical Cyan:** Focus rings, technical markers, and sparse highlights on dark surfaces. Never use it for a second family of primary buttons.

### Tertiary

- **Brand Red, Logo Only:** Preserve inside approved brand artwork. Do not reuse it for badges, errors, buttons, or decorative rules.

### Neutral

- **Polymer White:** Inputs, readable panels, and high-contrast content surfaces.
- **Laboratory Canvas:** Default page background for light technical pages.
- **Cool Paper:** Slightly elevated or grouped light areas when plain white would merge into the canvas.
- **Industrial Ink:** Primary text and high-contrast interface labels.
- **Body Slate:** Supporting copy on light surfaces.
- **Production Navy:** Header glass foundation, Footer, and important evidence or CTA panels.
- **Evidence Navy:** Dark narrative bands that group real factory or testing proof.
- **On Dark / On Dark Muted:** Text hierarchy on navy surfaces.
- **Quiet Rule:** Form strokes and the few dividers that carry real structure.

**The One Cobalt Rule.** One interaction intent gets one color. Do not introduce page-local blues, teals, or reds for ordinary actions.

**The Logo Red Rule.** Red belongs to the PLATFORM mark unless a real destructive or legal state requires red semantically.

## Typography

**Display Font:** IBM Plex Sans Variable with Noto Sans SC and system fallbacks.

**Body Font:** IBM Plex Sans Variable with Noto Sans SC and system fallbacks.

**Character:** IBM Plex Sans provides one precise industrial voice across headings, navigation, body copy, data labels, and forms. Hierarchy comes from size, spacing, and the controlled weight roles below rather than from switching families.

### Hierarchy

- **Display** (700, responsive 3rem to 5rem, 0.96 line-height): Hero headlines only. Desktop headlines should use one or two natural lines and must not depend on manual `<br>` tags.
- **Headline** (700, responsive 2rem to 3.35rem, 1 line-height): Section and major module headings.
- **Title** (600, 1.25rem, 1.2 line-height): Cards, capability groups, and supporting modules.
- **Body** (400 to 500, 1rem, 1.65 line-height): Explanatory copy. Keep normal reading measures between roughly 45 and 70 characters per line.
- **Label** (600, 0.75rem, restrained tracking): Metadata, field labels, and real technical qualifiers. Uppercase only when the label is genuinely metadata.

**The Natural Wrap Rule.** Adjust the column or type scale before forcing a line break. A title should never be split simply to create a composition.

**The One Display Voice Rule.** All proportional interface text uses IBM Plex Sans. Do not solve a local layout problem by adding another font or decorative italic family. Monospace is reserved for genuine identifiers, measurements, and technical data.

**The Four Weight Rule.** Use only 400 for body copy, 500 for emphasized body and navigation, 600 for titles, labels, and controls, and 700 for display and headline roles. Do not introduce intermediate variable-font weights.

## Layout

The primary site rail is a centered maximum width of 92rem with fluid side gutters. Header, mega menu, hero content, section content, evidence modules, CTA bands, and Footer should share visible rendered edges unless a full-bleed photograph or dark evidence band intentionally breaks out.

Use a 12-column grid for complex desktop compositions and simpler two-column grids for ordinary content. Mobile layouts below 48rem collapse to one column. At widths below 64rem, remove non-essential overlaps and simplify navigation and evidence compositions rather than scaling the desktop layout down.

The spacing rhythm uses a 4px base with repeated 8, 12, 16, 24, 32, 48, 72, and 112px steps. Tight spacing belongs inside a component; generous spacing belongs between separate ideas. Avoid large empty areas that do not establish hierarchy.

**The One Rail Rule.** Primary modules align to the same rendered rail. A local component cannot introduce an unrelated page width.

**The Mobile Simplification Rule.** Preserve information and action priority, not desktop geometry.

**The Section Rhythm Rule.** Use surface contrast, spacing, or one grouped container before adding separator lines.

### Alignment Contract

Alignment is accepted by visible rendered edges, not by matching container
variables or using the same nominal `max-width`.

- **Outer rail:** Every primary page module uses `--site-rail-width` and
  `--site-rail-inset`. At a 1920px viewport this currently renders as a 1472px
  rail with a 224px left edge. Full-bleed media and background bands may escape
  the rail; their readable content may not.
- **Peer alignment:** Titles, descriptions, controls, rows, and media that play
  the same role on one page must use the same grid track. A section cannot move
  its supporting-copy column simply because its paragraph is shorter.
- **Header-to-body alignment:** A split section intro and the body immediately
  below it must share track definitions. In numbered layouts, the marker aligns
  with the number column, the heading aligns with row titles, and the supporting
  copy aligns with row descriptions.
- **Measure alignment:** Normal body copy is limited to 42rem or roughly 65
  characters unless it is an article. Peer paragraphs use the same starting
  edge even when their line lengths differ.
- **Tolerance:** Peer visible edges should differ by no more than 2px at the
  same viewport. A larger difference requires a documented composition role,
  not a page-local nudge.

### Standard Interior Grids

Use these composition roles instead of inventing new fractions per section:

1. **Split 5/7:** Default desktop section intro and ordinary title/copy
   composition. Use a 24px minimum column gap and keep the copy on the right
   track. This is the default for peer homepage stages and inner-page section
   intros.
2. **Split 6/6:** Balanced media/text, form/contact, and final conversion
   compositions where both sides carry similar visual weight. Increase the gap
   with spacing tokens; do not alter the track ratio to tune one paragraph.
3. **Indexed 3-track:** `2.25rem / minmax(15rem, 5fr) / minmax(0, 7fr)` for
   numbered engineering steps and scan-first directories. The section header
   must reuse the title and description tracks.
4. **Editorial stack:** One readable column, normally 42rem to 65ch, for
   articles, technical explanations, and narrow utility pages.
5. **Evidence canvas:** A full rail evidence panel may own an internal grid,
   but its outer edge, panel header, and primary media edge still align to the
   site rail and to each other.

Do not create a fifth split ratio to fix wrapping. First adjust copy measure,
type scale, or the documented role of the module.

### Section Header Levels

- **Level 1 - Page Hero:** One H1 per route. Display scale, one or two natural
  desktop lines, with optional eyebrow and actions.
- **Level 2 - Journey Stage:** A primary page step such as material range or
  grade shortlisting. Use the large section headline scale. A technical-cyan
  marker is allowed only when the page uses the same marker grammar for peer
  journey stages.
- **Level 3 - Evidence Section:** Factory, certification, export, document, or
  capability proof. Use the standard headline scale and no decorative marker
  unless markers are functional labels.
- **Level 4 - Component Title:** Cards, rows, disclosures, and compact panels.
  Keep these close to body scale; they must not compete with section headings.

Two different levels may look different. Two headings at the same level must
share type scale, wrap behavior, intro spacing, and split-grid role.

### Responsive Layout Contract

- **80rem and above:** Apply the documented desktop grid roles.
- **64rem to 79.999rem:** Simplify wide evidence compositions and remove
  non-essential overlaps before reducing type size.
- **48rem to 63.999rem:** Split layouts may stack; directories can retain two
  columns only when labels remain readable.
- **Below 48rem:** Use one primary content column. Number/title pairs may keep a
  compact marker column, but descriptions move under the title.
- **Sticky-header targets:** Every addressable section uses
  `scroll-margin-top: var(--site-header-height)` plus any required breathing
  room.
- **No overflow:** At 390px, the document width equals the viewport width,
  actions remain one line, and no heading or label is clipped by its container.

## Elevation & Depth

The system is flat by default and uses tonal layering first. Light panels separate from the canvas through a small surface difference, while dark evidence panels use navy depth and restrained satin texture. Shadows are structural and quiet, not decorative halos.

### Shadow Vocabulary

- **Header Ambient:** A subtle downward shadow on the solid inner-page header to separate navigation from content.
- **Panel Ambient:** A soft navy-tinted shadow for large evidence, contact, or inquiry panels that need to lift from a similar background.
- **Frosted Header Depth:** Blur, a faint inner highlight, and one restrained shadow behave as a single material when the header overlays imagery.

**The Flat by Default Rule.** A component gets either a border, a surface change, or a shadow at rest. Do not stack all three.

**The Satin Containment Rule.** Satin texture belongs inside large proof or CTA surfaces. Do not cover every page section with texture.

### Surface Roles And Sequence

Every background or panel surface must declare one of these roles:

- **Canvas:** Polymer white, laboratory canvas, or cool paper for readable
  technical content.
- **Narrative:** Real photography or approved calm material texture supporting
  a brand or manufacturing story.
- **Process:** Deep navy for selection logic, engineering steps, or concentrated
  technical emphasis.
- **Evidence:** Production/evidence navy around real certificates, documents,
  factory images, or test context.
- **Conversion:** One decisive inquiry area near the end of a page.
- **Footer:** Production navy navigation and contact foundation; it does not
  become a second full conversion section when a conversion band directly
  precedes it.

Adjacent full-width bands must differ through a meaningful role, not a thin
line. Do not place more than two visually similar dark bands in sequence. When
a dark conversion band sits directly above the Footer, either reduce the
Footer pitch hierarchy or simplify the conversion band so the two do not read
as duplicate endings.

Generated texture is permitted only for calm, non-factual material surfaces.
Real certificates, factories, laboratories, parts, and production claims must
use authentic source imagery.

## Shapes

Small controls and ordinary buttons use tight corners around 4px. Inputs use approximately 5px corners. Standard content panels use 8px corners. A 16px radius is reserved for large evidence or inquiry panels where the rounded silhouette is part of the composition. Pills are reserved for true tags, compact filters, or circular controls.

Borders are one pixel and quiet. Decorative thick side rules, repeated card outlines, and border grids are not part of the system.

**The Radius Roles Rule.** Radius communicates component scale. Do not choose a new radius per page.

## Components

The production component inventory, ownership rules, controlled variants, and
migration status live in `COMPONENTS.md`. This section defines the visual rules;
the registry defines which shared implementation owns each recurring role.

### Buttons

- **Shape:** Tight 4px corners, one-line labels, and a minimum 44px touch target.
- **Primary:** Solid Taiyi cobalt with white text. No gradients, shimmer, glow, or pill treatment.
- **Secondary:** White or transparent neutral surface with a quiet border and industrial-ink text. On dark backgrounds, use a controlled translucent fill and on-dark text.
- **Hover / Active:** One-pixel lift on hover and subtle press on active. Do not resize or wrap.
- **Focus:** Visible cobalt or technical-cyan outline with a clear offset.

#### Action Intent And Labels

Use one label for one recurring intent across every route:

| Intent | Canonical label | Destination / use |
| --- | --- | --- |
| General material inquiry | `Discuss Your Application` | `/contact` |
| Inquiry form submission | `Submit Project Requirements` | Contact form submit |
| Grade and document search | `Find Grade Data & TDS` | Technical-data search |
| Full grade document request | `Request Full TDS` | Grade-specific inquiry |
| Grade sample request | `Request a [Grade] Sample` | Grade-specific inquiry |
| Product exploration | `Browse [Family] Compounds` or `Explore Material Range` | Product navigation |

Do not alternate between `Start a material review`, `Share Project
Requirements`, `Send Requirement`, and `Discuss Your Application` for the same
general-contact intent. A section gets one primary action. A secondary action
must lead to a genuinely different task.

### Cards / Containers

- **Standard panel:** White or cool-paper surface, 8px corners, and no shadow unless the panel would otherwise disappear into the canvas.
- **Evidence panel:** Production navy or evidence navy, 16px corners only at large scale, real imagery, and one clear text hierarchy.
- **Internal padding:** 24px by default, increasing to 40px only for large evidence or CTA panels.
- **Nesting:** Do not place a rounded card inside another rounded card unless the inner element is an interactive control with its own state.

**Implementation ownership.** Shared surface variants live in
`src/components/ui/card.tsx`. Card owns the surface, border, radius, shadow,
and interactive state. Page styles may arrange the internal grid; default
content inset comes from `CardContent`.

### Inputs / Fields

- **Style:** White background, quiet one-pixel rule, 5px corners, persistent label above the field, and at least 44px control height.
- **Focus:** Cobalt border plus a restrained technical-cyan focus halo.
- **Error / Disabled:** Preserve text contrast and state meaning. Do not communicate errors through color alone.

**Implementation ownership.** `tokens.css` owns control values. Shared Button,
Input, Select, and Textarea implementations live in `src/components/ui/`.
Page-level styles may position these controls, but must not redefine their
height, radius, border, focus treatment, or primary-action color.

### Page Heroes / Section Intros

- **Page Hero:** Shared anatomy for eyebrow, one H1, supporting description,
  optional media, and optional actions. Pages supply real media, focal point,
  scrim, and route-specific size.
- **Section Intro:** Shared hierarchy for optional eyebrow, one section title,
  and concise supporting copy. It may be stacked or split but does not own the
  section body.
- **Ownership:** `src/components/PageHero.tsx` and
  `src/components/SectionIntro.tsx` own semantic structure and typography.
  Page CSS owns placement and page-specific media treatment.

### Navigation

- **Desktop:** Single-line navigation using IBM Plex Sans. The current section indicator sits at the header edge; mega-menu link hover indicators stay at text level.
- **Hero routes:** Header and expanded menu read as one dark frosted material with stable contrast and no visible gap.
- **Inner routes:** White header and white expanded menu connect directly without a separate gray strip.
- **Mobile:** Use the existing labeled Menu control and stacked groups. Do not shrink the desktop menu into an unreadable row.

### Footer

- **Surface:** Production navy with restrained satin depth.
- **Structure:** Brand and primary inquiry path first, then contact actions and navigation. Mobile navigation collapses into labeled groups.
- **Contact actions:** Entire tiles are clickable, use 8px corners, and share one icon treatment and focus state.

### Evidence Module

- Use real factory, laboratory, certificate, product, or molded-part imagery.
- Pair each image with one distinct proof claim. Do not repeat the same image or paragraph merely to fill a section.
- Captions are functional and short. They name what the visitor is seeing.

**The Shared Ownership Rule.** Header, Footer, standard buttons, fields, rail containers, and recurring evidence panels each have one owning component or rule set. Page CSS may compose them but must not redefine their fundamental states.

## Motion

Motion supports hierarchy, state change, or spatial explanation. It is not a
separate decorative layer.

- Entry reveals use opacity and transform, normally 360ms to 800ms with the
  shared ease-out curve.
- Related items may stagger by 60ms to 100ms. Long cascades that delay reading
  are not allowed.
- Scroll-triggered section reveals normally run once. They must not shift the
  final layout or change document height.
- Route lines, progress paths, and diagrams animate from origin to destination;
  endpoint pulses cannot substitute for path progression.
- Auto-playing video remains muted, inline, and visually useful without audio.
  Motion controls are not required when the video is decorative, muted, short,
  and does not contain essential information.
- `prefers-reduced-motion` removes non-essential movement and preserves the
  complete final state.
- Animate transforms and opacity by default. Avoid layout-thrashing properties,
  heavy filters, and simultaneous animation across every module.

## Visual Acceptance Contract

Visual quality is proven in the rendered page, not inferred from shared class
names or clean component code.

For every visual change:

1. Name the affected route, viewport, state, and visible acceptance criteria
   before editing.
2. Find the final active rule. Do not append a broad override when ownership is
   already clear.
3. Capture before and after at the same viewport. Desktop defaults to
   1920x1080; mobile defaults to 390x844.
4. Measure peer title, copy, control, and panel edges when alignment is part of
   the request. Use the 2px tolerance rule.
5. Check closed and expanded Header states when navigation or the shared rail is
   affected.
6. Verify adjacent sections, not only the edited crop. Surface and spacing
   transitions are part of the result.
7. Confirm no horizontal overflow, clipped text, wrapped desktop CTA labels,
   overlapping content, or console errors.
8. Report the exact routes and states inspected. Build success alone is not
   visual acceptance.

## Do's and Don'ts

### Do:

- **Do** preserve the current PLATFORM logo, unified IBM Plex Sans type system, 92rem rail, industrial navy, near-white canvas, and Taiyi cobalt interaction language.
- **Do** use real production, laboratory, certificate, material, and molded-part imagery as evidence.
- **Do** create hierarchy through spacing, typography, surface contrast, and deliberate dark proof bands.
- **Do** keep headings concise and naturally wrapped at desktop and mobile widths.
- **Do** reuse shared buttons, inputs, navigation, Footer, and container rules before creating page-local variants.
- **Do** verify shared visual changes on the homepage, one inner route, and one mobile viewport.

### Don't:

- **Don't** redesign each page as a separate visual world.
- **Don't** introduce new accent colors, fonts, radii, shadows, or button types to fix a local composition.
- **Don't** use gradients, glows, glass, or satin texture as decoration without a material or hierarchy role.
- **Don't** stack cards inside cards, surround every group with borders, or place thin divider lines throughout the page.
- **Don't** fabricate factories, laboratories, certificates, test results, customer approvals, or technical claims with generated imagery.
- **Don't** force heading line breaks or shrink text below comfortable reading sizes to preserve a desktop composition.
- **Don't** modify shared Header, Footer, navigation, or standard controls from a page-local stylesheet.
