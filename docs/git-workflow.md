# Git destination

The default integration destination is **origin/codex/keptds**. Do not infer
the intended destination from whichever branch happens to be checked out.

Before committing, check the current branch, upstream, worktree status and
remote target. Use `codex/keptds`, or a `codex/keptds-*` work branch tracking
`origin/codex/keptds` when another worktree occupies the integration branch.
Preserve that other worktree's uncommitted changes.

## Local setup

On the correct branch with its upstream configured, run `npm run git:setup`.
This installs the versioned hooks through an absolute `core.hooksPath` and
sets `push.default=upstream`. Installation is required once per clone; Git
does not activate hooks merely because they are committed. The installer
refuses to replace a different existing hook directory.

- `pre-commit` checks the branch family and upstream.
- `pre-push` checks the actual destination of every ref, even with an explicit
  command such as `git push origin HEAD:deepseek/dev`.
- Both hooks require Node.js. The hook configuration is shared by linked
  worktrees in this clone; keep the installing worktree available.

Use `git push origin HEAD:codex/keptds` for an explicit default destination.
Verify the remote head after pushing. Never force-push to repair a branch
selection mistake; transfer the intended commits onto the target history.

## Explicitly approved exceptions

If the user explicitly requests a different destination, set
`TAIYI_GIT_TARGET_BRANCH` to that branch for the relevant commands only. The
guard still checks the branch/upstream at commit time and every destination
at push time. Clear the variable afterwards. Do not set an exception merely
to bypass an unexpected rejection, and do not use `--no-verify` as a routine
workaround. These local checks prevent accidental mistakes; they do not
replace server-side branch protection.
