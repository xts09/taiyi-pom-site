<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stable Session Protocol

- Keep work in short, verifiable steps. Avoid combining broad analysis, large edits, build, browser automation, and screenshots in one long chain.
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
