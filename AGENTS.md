<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Task Modes And Creative Scope

Classify the deliverable before applying production rules:

The generated Next.js notice above applies to code that uses Next.js APIs,
routing, conventions or build behavior. Standalone HTML/CSS/JavaScript concepts
do not depend on Next.js and do not require reading its framework guides. This
task-mode scope governs the applicability of the generated notice.

- **Concept / Demo / Prototype / visual exploration:** create an independent,
  viewable artifact under `outputs/`. A request for a concept authorizes its
  design and construction. Use the user's references and stated constraints;
  explore typography, color, layout, imagery, surfaces and motion together when
  the composition calls for it. Current production tokens, component owners and
  approved screenshots are context, not limits on a new concept. Preserve only
  the identity/content elements the user actually asks to retain. Sample copy,
  data, placeholders and generated imagery are allowed in clearly identified
  demonstrations; do not delay the draft for a complete business-evidence audit.
- **Production repair / extension:** apply canonical tokens, component ownership,
  factual copy and the relevant regression matrix. Prefer surgical changes for
  a local defect.
- **Production redesign:** the user's redesign scope permits coordinated changes
  to multiple visual families. Do not silently downgrade it to a Preserve pass.
  State the new direction, preserve needed functional contracts, and update the
  canonical sources when that direction is adopted in production.
- **Audit / research / instruction maintenance:** read and change only the sources
  needed for the requested outcome. An audit alone does not authorize a production
  redesign; an explicit concept request does authorize a separate draft.

The stable-session protocol limits operation size and output, not creativity.
Continue authorized work in short steps until a concrete result is reviewable.
Ask only for missing essential information or a genuine scope/permission
boundary; routine design decisions do not require a new approval. Show the
first useful visual draft early and incorporate feedback as it arrives.

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

For production work, resolve conflicting project sources in this order and
repair or flag the lower-priority source. The user's current instructions set
the task scope and override earlier project preferences. Concept experiments
may depart from the production baseline without changing runtime tokens or
canonical docs. Old screenshots, audit notes and cancelled concept briefs are
historical context, not additional constraints on a fresh concept.

### Required Reading By Task Type

- **Concept / Demo:** read the task-mode rules, relevant brand/context sections
  of `DESIGN.md` / `PRODUCT.md`, and supplied references. Read relevant asset
  paths as needed. Do not load shared-owner registries, catalog maintenance
  guides or Next.js internals unless the draft actually integrates with them.
- **Production visual, layout, responsive, styling, imagery, or motion task:**
  read the relevant sections of `DESIGN.md` and the Visual Regression Contract
  in this file before editing.
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

For a concept, briefly state the direction, artifact location and intended
viewports, then build; this is not an approval checkpoint. For production
visual work, state the route, viewport, visible acceptance criteria and owning
files. Before a cross-page production edit, name affected route families and
shared owners. An audit or critique does not authorize unrelated production
implementation.

### Completion Gate

Before delivery, inspect a rendered concept at its intended viewport(s) and
correct obvious clipping, broken assets and unreadable text. Do not require
production builds, exhaustive interactions or unrelated page-family regression
for an independent draft. For production work, verify the same sources read at
preflight: rendered evidence and the relevant viewport matrix, stale-copy
searches, and representative consumers of changed shared components.

### Documentation Freshness Gate

- For production changes to shared UI components, approved variants, design
  tokens, or shared interaction states, maintain the corresponding examples
  on `/design-system` in the same task. Follow the Component Acceptance Page
  maintenance contract in `COMPONENTS.md`; inspect the affected examples and
  representative real consumers at the relevant viewports before delivery.
- When a task changes a canonical token, route owner, shared component owner,
  public route family, or release boundary, update the corresponding canonical
  source in the same task. Runtime token changes must keep both the narrative
  and machine-readable summary in `DESIGN.md` aligned; ownership changes must
  update `COMPONENTS.md`; durable product or release changes must update
  `PRODUCT.md`.
- An independent concept records its experimental system in its own output
  directory. It does not need to rewrite production docs or tokens before it
  can be shown. Promote a selected direction only when production adoption is
  requested.
- Do not record an active branch name, current commit, dirty-file list, sitemap
  total, test count, or build count as a durable product requirement. Read live
  repository state when needed. Dated milestone counts may remain as history
  when their date and historical status are explicit.
- Before treating a documented source path as current, verify that it exists.
  Mark superseded audits, handoffs, and browser snapshots as historical instead
  of silently carrying their instructions into new work.
- `.impeccable/design.json` is ignored tooling output. Regenerate it only when
  that tooling is intentionally used; never hand-edit it into a competing
  source of truth.

## Stable Session Protocol

- **子代理使用规则（更新）：** 本项目允许按任务需要主动使用短时、范围明确的子代理，无需逐次征求许可。本条替代此前“代理线程必须由用户明确要求才能创建”的限制；保守执行协议不应被理解为全面禁止子代理。
- 仅把可独立执行、能够减少主任务耗时或提供独立复核的具体子任务交给子代理；简单任务直接完成。启动前简要说明分工，避免重复扫描、并发修改同一文件或重复启动服务，主代理负责汇总与验证。
- 上述许可仅针对当前任务内的子代理协作，不授权主动创建新的用户任务、项目线程、定时任务或长期无人值守后台任务；这些仍需用户明确要求。其余小步执行、输出控制与保守服务收尾规则继续适用。
- Keep operations short and verifiable. Continue the authorized task across these steps; brief progress replaces repeated permission questions. A concept's creative scope is not restricted to one visual variable per step.
- Store every generated deliverable, export, preview, audit record, and task artifact for this project under `F:\Projects\taiyi-pom-site\outputs\`. Use a task-specific subdirectory when practical. Do not write outputs to `C:\Users\xts10\Documents\Codex\outputs`, the Windows desktop, downloads, or any other C-drive location unless the user explicitly requests that exact destination. User-provided source files on C: remain source files and must not be moved unless explicitly requested.
- Prefer targeted searches and file reads. Do not scan large generated folders such as `.next`, `node_modules`, `dist`, `build`, `coverage`, cache, or media-heavy folders unless explicitly needed.
- Use the in-app browser only when visual verification is needed, and perform one browser action at a time.
- Keep tool output compact: summarize errors and results instead of dumping long logs, DOM snapshots, JSON, screenshots, or generated files into chat.
- Avoid printing full `git diff` output in chat. Default to `git diff --stat`, `git diff --name-only`, or tightly scoped file/keyword diffs; save large diffs or long command output under `outputs/<task>/` and summarize the key changes.
- Before starting a dev server, check whether port `3000` is already listening. Do not leave duplicate Next.js dev servers running.
- Keep exactly one project development server available once it has been started. Reuse the existing listener and leave it running during normal task cleanup; stop or restart it only when the user explicitly asks, the process exits, the port conflicts, or a restart is required to verify stale code.
- If the thread already contains many screenshots, large images, long logs, or large tool outputs, suggest continuing with a lightweight new thread that carries only a short task summary.
- If reconnecting, rate-limit, or tool timeout symptoms appear, stop the long path, preserve the known state, and continue with a smaller current-session step.

## Change Ownership And Handoff

- Default Git destination: **origin/codex/keptds**. Never infer the desired
  destination from the active branch. Before commit/push, verify the branch,
  upstream, worktree state and actual push refspec. Use `codex/keptds` or a
  `codex/keptds-*` work branch tracking `origin/codex/keptds` if the target is
  occupied by another worktree. Preserve that worktree's pending changes.
- Run `npm run git:setup` once per clone to activate the commit/push guards.
  Follow `docs/git-workflow.md`. Another destination or a guard exception
  requires an explicit user instruction; do not bypass guards automatically.

- Assume the working tree may contain intentional uncommitted user or prior-session work. Run `git status --short` before editing and never revert, replace, or reformat unrelated changes.
- An audit alone does not authorize production redesign. A request for a concept/Demo authorizes an independent visual draft; a request for redesign authorizes coordinated changes within the named page/component scope.
- When continuing from a long visual-review thread, read the dated implementation snapshot in `PRODUCT.md` before changing shared navigation, Resources, product data, or SEO behavior.
- In production code, edit the owning component or final active rule and remove obsolete duplicates when ownership is clear. Independent concepts may use their own HTML/CSS without migrating shared components first.

## Independent Product Judgment And Competitive Review

- Treat the user's proposal as an important input, not as a pre-approved conclusion. Test it against user intent, available evidence, product strategy, information architecture, SEO, conversion, localization, maintenance cost, and technical risk.
- Proactively identify relevant issues the user has not mentioned. State material objections, missing prerequisites, and tradeoffs clearly; do not agree merely to preserve momentum.
- For product strategy, application architecture, positioning, or major page-direction work, review current public competitor and adjacent-industry references before recommending implementation. Prefer primary sources such as official product pages, technical guides, data centers, and case studies.
- Separate observed competitor facts from inference and recommendation. Record source URLs and the review date, and do not copy competitor visuals, wording, claims, or structure without evaluating fit for Taiyi Polymer.
- Use competitors to calibrate category expectations, evidence depth, navigation, grade discovery, and conversion paths. Taiyi Polymer's source-of-truth documents, validated catalog data, and authentic capabilities still take priority.
- Before recommending a production standalone landing page, check distinct user intent, a non-duplicative technical narrative, validated product records, credible evidence, suitable imagery and sustainable multilingual/SEO ownership. This production evidence gate does not block requested concepts, Demos or visual prototypes.
- Label recommendations by confidence and readiness. Distinguish what is suitable for a prototype, what is suitable for production, and what remains blocked by missing evidence.
- Save task-specific competitive research and decision rationale under `outputs/`. Promote a conclusion into `PRODUCT.md` only after the product direction is approved; do not turn exploratory research into canonical strategy automatically.

## Shared Navigation Contract

- Header and mega-menu work is cross-page work. Verify `/` with the dark over-hero header and one inner route with the white header, both closed and expanded, at `1920x1080` unless another viewport is requested.
- Mega-menu item hover underlines are owned by the shared `.mega-nav-label` element in `Header.tsx` and `header.css`. Products, Applications, and Resources must not reintroduce separate pseudo-element underline implementations.
- Top-level current-section and hover underlines share one text-level baseline. The mega-menu underline is also text-level, while remaining structurally owned by `.mega-nav-label`.
- Navigation alignment is accepted by visible rendered edges, not by matching container variables alone.
- Dark header and expanded mega menu must render as one perceived frosted-glass material. White inner-page navigation must connect directly to the expanded panel without a visible gap.

## Visual Feedback Handling Protocol

- Treat visual feedback as a result-quality issue first, not an implementation-detail issue. CSS variables, shared components, or cleaner DOM structure do not count as success unless the rendered result satisfies the user's visual intent.
- Before editing after a visual complaint, translate the feedback into concrete acceptance criteria. For example: "same material" means the user-perceived surface, color, blur, transparency, seam, and background bleed must match, not merely that two selectors share variables.
- Diagnose the screenshot or described region before changing code. State the visible failure, the likely code-level cause, and the smallest file scope to change.
- Preserve the user's pointed distinction words. If the user asks for "frosted glass", do not silently replace it with a dark translucent panel; if the user asks for "aligned", do not answer with "container widths are equal" unless the visible edges also align.
- For a local production defect, isolate the relevant visual variable family. For concepts and requested redesigns, coordinate material, spacing, typography, layout, imagery and interaction as needed for a coherent result.
- Use rendered visual acceptance as the final standard. For UI work, report both what changed in code and what visible condition it is meant to satisfy.

## Visual Regression Contract (Mandatory)

This contract applies to production visual changes because the project has
layered CSS, repeated media queries and late overrides. Independent concepts
use the lighter Concept completion gate above; they do not need to exercise
unmodified production routes.

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
4. For a local bug fix, isolate layout, material, type scale, spacing, imagery
   or interaction. A requested production redesign may coordinate these
   families within its stated scope. Do not bundle unrelated cleanup into a fix.
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
