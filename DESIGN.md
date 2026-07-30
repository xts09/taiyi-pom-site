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
    fontFamily: '"Archivo Variable", "IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(3rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Archivo Variable", "IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(2rem, 3.2vw, 3.35rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Archivo Variable", "IBM Plex Sans Variable", "Noto Sans SC", system-ui, sans-serif'
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

The existing industrial identity remains the foundation: a near-white technical canvas, deep navy evidence surfaces, Taiyi cobalt interactions, restrained satin texture, Archivo display type, IBM Plex Sans body type, and a shared wide content rail. The system consolidates these choices rather than replacing them.

Cards, shadows, dark sections, and texture must explain hierarchy. They are not default decoration. Pages should first establish one clear reading path, then use components only where grouping or interaction earns them.

**Key Characteristics:**

- Evidence before decoration.
- Light technical canvas with deliberate dark proof surfaces.
- One cobalt interaction language across the site.
- Real imagery with intentional crops and useful captions.
- Compact, readable typography with natural wrapping.
- Shared rails, spacing rhythm, and component states.

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

**Display Font:** Archivo Variable with IBM Plex Sans Variable, Noto Sans SC, and system fallbacks.

**Body Font:** IBM Plex Sans Variable with Noto Sans SC and system fallbacks.

**Character:** Archivo provides compact industrial authority for headings. IBM Plex Sans keeps navigation, body copy, data labels, and forms practical and internationally readable.

### Hierarchy

- **Display** (700, responsive 3rem to 5rem, 0.96 line-height): Hero headlines only. Desktop headlines should use one or two natural lines and must not depend on manual `<br>` tags.
- **Headline** (700, responsive 2rem to 3.35rem, 1 line-height): Section and major module headings.
- **Title** (600, 1.25rem, 1.2 line-height): Cards, capability groups, and supporting modules.
- **Body** (400 to 500, 1rem, 1.65 line-height): Explanatory copy. Keep normal reading measures between roughly 45 and 70 characters per line.
- **Label** (600, 0.75rem, restrained tracking): Metadata, field labels, and real technical qualifiers. Uppercase only when the label is genuinely metadata.

**The Natural Wrap Rule.** Adjust the column or type scale before forcing a line break. A title should never be split simply to create a composition.

**The One Display Voice Rule.** Headings use Archivo. Do not solve a local layout problem by adding another font or decorative italic family.

## Layout

The primary site rail is a centered maximum width of 92rem with fluid side gutters. Header, mega menu, hero content, section content, evidence modules, CTA bands, and Footer should share visible rendered edges unless a full-bleed photograph or dark evidence band intentionally breaks out.

Use a 12-column grid for complex desktop compositions and simpler two-column grids for ordinary content. Mobile layouts below 48rem collapse to one column. At widths below 64rem, remove non-essential overlaps and simplify navigation and evidence compositions rather than scaling the desktop layout down.

The spacing rhythm uses a 4px base with repeated 8, 12, 16, 24, 32, 48, 72, and 112px steps. Tight spacing belongs inside a component; generous spacing belongs between separate ideas. Avoid large empty areas that do not establish hierarchy.

**The One Rail Rule.** Primary modules align to the same rendered rail. A local component cannot introduce an unrelated page width.

**The Mobile Simplification Rule.** Preserve information and action priority, not desktop geometry.

**The Section Rhythm Rule.** Use surface contrast, spacing, or one grouped container before adding separator lines.

## Elevation & Depth

The system is flat by default and uses tonal layering first. Light panels separate from the canvas through a small surface difference, while dark evidence panels use navy depth and restrained satin texture. Shadows are structural and quiet, not decorative halos.

### Shadow Vocabulary

- **Header Ambient:** A subtle downward shadow on the solid inner-page header to separate navigation from content.
- **Panel Ambient:** A soft navy-tinted shadow for large evidence, contact, or inquiry panels that need to lift from a similar background.
- **Frosted Header Depth:** Blur, a faint inner highlight, and one restrained shadow behave as a single material when the header overlays imagery.

**The Flat by Default Rule.** A component gets either a border, a surface change, or a shadow at rest. Do not stack all three.

**The Satin Containment Rule.** Satin texture belongs inside large proof or CTA surfaces. Do not cover every page section with texture.

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

## Do's and Don'ts

### Do:

- **Do** preserve the current PLATFORM logo, Archivo and IBM Plex type pairing, 92rem rail, industrial navy, near-white canvas, and Taiyi cobalt interaction language.
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
