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
