# Site Visual Rules - Quick Reference

`DESIGN.md` is the canonical visual and composition specification.
`COMPONENTS.md` defines implementation ownership and controlled variants.
This file is only a short review checklist and must not introduce different
values or component rules.

This checklist covers production repairs, extensions and adopted designs.
Independent concepts/Demos may test new type, colors, surfaces, grids and
component patterns in `outputs/`. Their acceptance is the requested visual
direction plus a basic rendered check for legibility, assets and clipping;
unchanged production-route regression is not required. See the task modes in
`AGENTS.md` and the applicability section in `DESIGN.md` before applying this
checklist to a redesign.

Taiyi Polymer pages should read as one restrained engineering-materials system,
not a collection of unrelated marketing templates.

- **Rail:** Use the shared 92rem rail and fluid gutter. Full-bleed media may
  escape it; readable content may not.
- **Interior grid:** Peer split section intros use the shared 5/7 grid. Indexed
  headers reuse the exact number/title/description tracks of their rows.
- **Alignment:** Judge visible rendered edges. Peer edges have a 2px tolerance
  at the same viewport.
- **Type:** One H1 per route. Journey-stage, evidence-section, and component
  headings use their documented levels; do not create a local title scale.
- **Reading:** Use the semantic reading foreground for light-surface prose.
  Aim for 7:1 for normal body/description text; keep small metadata and
  placeholders at least 4.5:1. Navigation destinations use the primary
  foreground. Inspect real white, canvas and dark consumers.
- **Copy measure:** Normal section copy stays within 42rem or about 65ch and
  starts on the shared copy track.
- **Actions:** Use the canonical labels in `DESIGN.md`. One section has one
  primary intent, and button geometry comes from the shared Button component.
- **Radius:** Controls 4-5px, standard panels 8px, large evidence panels 16px.
  Radius communicates role and is not selected per page.
- **Surfaces:** Use canvas, narrative, process, evidence, conversion, or Footer
  roles. Avoid repeated near-identical dark endings and decorative texture.
- **Modules:** Directories are scan-first lists or rows. Explanations use prose,
  media, tables, or evidence blocks. Do not represent the same task with cards,
  mini tables, and unrelated rows on one page.
- **Color:** Taiyi cobalt is the interaction color. Technical cyan is a sparse
  marker/focus color. PLATFORM red stays in the logo.
- **Verification:** Inspect 1920x1080 and 390x844, adjacent sections, Header
  states when relevant, overflow, CTA wrapping, focus, and console errors.
