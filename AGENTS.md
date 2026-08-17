<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Mandatory Task Preflight And Sources Of Truth

Before the first edit or implementation command in every task, classify the
requested scope and read the required project sources below. Do not rely on
memory from an earlier thread. If the scope expands during the task, stop and
read the newly relevant source before continuing.

### Source Priority

Use project guidance in this order:

1. `AGENTS.md` - execution, ownership, regression, and handoff rules.
2. `DESIGN.md` - canonical visual system, layout grids, alignment, type,
   surfaces, radius, motion, and visual acceptance.
3. `tokens.css` - runtime primitive, semantic, and component values.
4. `COMPONENTS.md` - canonical component ownership, variants, and migration
   boundaries.
5. `PRODUCT.md` - brand names, business goals, copy, claims, CTA meaning, SEO,
   route intent, and dated implementation state.
6. `docs/site-visual-rules.md` - quick review checklist only. It never overrides
   `DESIGN.md`.
7. `.impeccable/design.json` - visual tooling samples only. It never overrides
   runtime tokens, component ownership, or `DESIGN.md`.

When two sources conflict, follow the higher-priority source and repair or flag
the lower-priority source. Page-local CSS and a screenshot from an old thread
are not new sources of truth.

### Required Reading By Task Type

- **Any visual, layout, responsive, styling, imagery, or motion task:** read the
  relevant sections of `DESIGN.md` and the Visual Regression Contract in this
  file before editing.
- **Any shared component, Button, Card, form control, Hero, Section Intro,
  Header, Footer, or navigation task:** also read the owning entry in
  `COMPONENTS.md` and inspect `tokens.css` before introducing values or
  variants.
- **Any copy, brand, CTA, SEO, claim, product-positioning, application, About,
  Contact, or Footer-content task:** read the relevant `PRODUCT.md` sections.
  Use `Taiyi Polymer` publicly, `PLATFORM` for the material brand, and the legal
  company name only where the entity is required.
- **Any product catalog, generated data, Resources, sitemap, or technical-data
  task:** read the dated implementation snapshot in `PRODUCT.md` and the
  relevant maintenance guide before changing source or generated files.
- **Any Next.js API, convention, routing, metadata, caching, or build task:**
  read the relevant local guide under `node_modules/next/dist/docs/` before
  writing code.
- **Any deployment or launch-readiness task:** read
  `docs/launch-checklist.md` and use the documented project checks.

### Pre-Edit Declaration

Before a visual edit, state the route, viewport, acceptance criteria, visual
family being changed, and owning files. Before a cross-page edit, name the
affected route families and shared owner. An audit or critique does not by
itself authorize implementation outside the approved scope.

### Completion Gate

Before reporting completion, verify the result against the same sources read at
preflight. For visual work, rendered evidence and the viewport matrix are
mandatory. For copy and CTA work, search for stale variants. For shared
components, verify representative consumers from each affected route family.

## Stable Session Protocol

- Keep work in short, verifiable steps. Avoid combining broad analysis, large edits, build, browser automation, and screenshots in one long chain.
- Store every generated deliverable, export, preview, audit record, and task artifact for this project under `F:\Projects\taiyi-pom-site\outputs\`. Use a task-specific subdirectory when practical. Do not write outputs to `C:\Users\xts10\Documents\Codex\outputs`, the Windows desktop, downloads, or any other C-drive location unless the user explicitly requests that exact destination. User-provided source files on C: remain source files and must not be moved unless explicitly requested.
- Prefer targeted searches and file reads. Do not scan large generated folders such as `.next`, `node_modules`, `dist`, `build`, `coverage`, cache, or media-heavy folders unless explicitly needed.
- Use the in-app browser only when visual verification is needed, and perform one browser action at a time.
- Keep tool output compact: summarize errors and results instead of dumping long logs, DOM snapshots, JSON, screenshots, or generated files into chat.
- Avoid printing full `git diff` output in chat. Default to `git diff --stat`, `git diff --name-only`, or tightly scoped file/keyword diffs; save large diffs or long command output under `.codex-run/` and summarize the key changes.
- Before starting a dev server, check whether port `3000` is already listening. Do not leave duplicate Next.js dev servers running.
- If the thread already contains many screenshots, large images, long logs, or large tool outputs, suggest continuing with a lightweight new thread that carries only a short task summary.
- If reconnecting, rate-limit, or tool timeout symptoms appear, stop the long path, preserve the known state, and continue with a smaller current-session step.

## Change Ownership And Handoff

- Assume the working tree may contain intentional uncommitted user or prior-session work. Run `git status --short` before editing and never revert, replace, or reformat unrelated changes.
- A visual or technical audit is not authorization for a broad redesign. Review first; implement only the page, component, and visual family the user explicitly approves.
- When continuing from a long visual-review thread, read the dated implementation snapshot in `PRODUCT.md` before changing shared navigation, Resources, product data, or SEO behavior.
- Prefer editing the owning component or final active rule. Remove obsolete duplicate rules when ownership is clear; do not accumulate late overrides to force a result.

## Shared Navigation Contract

- Header and mega-menu work is cross-page work. Verify `/` with the dark over-hero header and one inner route with the white header, both closed and expanded, at `1920x1080` unless another viewport is requested.
- Mega-menu item hover underlines are owned by the shared `.mega-nav-label` element in `Header.tsx` and `header.css`. Products, Applications, and Resources must not reintroduce separate pseudo-element underline implementations.
- The top-level navigation underline is a current-section indicator at the header edge. The mega-menu underline is a text-level hover indicator. Keep each internally consistent without forcing both into one structural role.
- Navigation alignment is accepted by visible rendered edges, not by matching container variables alone.
- Dark header and expanded mega menu must render as one perceived frosted-glass material. White inner-page navigation must connect directly to the expanded panel without a visible gap.

## Visual Feedback Handling Protocol

- Treat visual feedback as a result-quality issue first, not an implementation-detail issue. CSS variables, shared components, or cleaner DOM structure do not count as success unless the rendered result satisfies the user's visual intent.
- Before editing after a visual complaint, translate the feedback into concrete acceptance criteria. For example: "same material" means the user-perceived surface, color, blur, transparency, seam, and background bleed must match, not merely that two selectors share variables.
- Diagnose the screenshot or described region before changing code. State the visible failure, the likely code-level cause, and the smallest file scope to change.
- Preserve the user's pointed distinction words. If the user asks for "frosted glass", do not silently replace it with a dark translucent panel; if the user asks for "aligned", do not answer with "container widths are equal" unless the visible edges also align.
- Change one visual variable family at a time: material, spacing, typography, layout, imagery, or interaction. Avoid mixing several visual corrections in one patch unless the user explicitly asks for a larger redesign.
- Use rendered visual acceptance as the final standard. For UI work, report both what changed in code and what visible condition it is meant to satisfy.

## Visual Regression Contract (Mandatory)

This project has a history of layered CSS, repeated media queries, and late
overrides. For any visual edit, follow this contract in addition to the visual
feedback protocol above.

1. Before editing, state the exact route, viewport, visible acceptance criteria,
   and file scope. Do not silently reinterpret a material request as a layout
   redesign, or a local request as a shared-component redesign.
2. Find the final active CSS rule before changing it. Search every matching
   selector, media query, and `!important` declaration. Change the owning rule
   instead of appending a broad override at the end of a stylesheet.
3. Do not touch `globals.css`, `Header`, shared navigation, or a shared component
   for a page-local issue unless the user explicitly asked for the cross-page
   behavior. When a shared change is required, name the affected routes before
   editing.
4. Change one visual family per pass: layout, material, type scale, spacing,
   imagery, or interaction. Do not bundle an unrequested visual cleanup into a
   bug fix.
5. Capture a rendered before/after comparison at the same viewport. At desktop,
   use `1920x1080` unless the user names another target. Build success, clean
   CSS, or matching computed variables never substitutes for a rendered check.
6. Run the relevant regression matrix before calling a visual task complete:
   - Home change: verify `/` hero and `Factory Snapshot`.
   - Header or mega-menu change: verify `/` dark header and one inner-page white
     header, each closed and expanded.
   - Shared secondary navigation change: verify one product category and one
     application page, including the pinned state.
   - Responsive layout change: verify the named desktop viewport plus one mobile
     viewport.
7. If computed styles do not match the source after a hot update, stop treating
   the result as verified. Restart the existing dev server, clear `.next`, reload
   the exact route, and repeat the rendered check.
8. Final reports must include the changed files, exact routes/states checked, and
   whether visual evidence was inspected. Do not claim completion from a build
   result alone.
