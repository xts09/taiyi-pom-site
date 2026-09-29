# Git destination

The default integration destination is **origin/codex/keptds**. Do not infer
the intended destination from whichever branch happens to be checked out.

Before committing, check the current branch, upstream, worktree status and
remote target. Use `codex/keptds`, or a `codex/keptds-*` work branch tracking
`origin/codex/keptds` when another worktree occupies the integration branch.
Preserve that other worktree's uncommitted changes.

## Local setup

On the correct branch with its upstream configured, run `npm run git:setup`.
This installs self-contained hooks and their Node dependencies under
`$(git rev-parse --git-common-dir)/taiyi-guards/versions/<payload-hash>/`.
`core.hooksPath` points to the installed copy and `push.default` becomes
`upstream`. Removing or moving the installing linked worktree does not
remove the guards. Installation is required once per clone; Git
does not activate hooks merely because they are committed. The installer
refuses to replace a different existing hook directory.

- `pre-commit` checks the branch family and upstream.
- `pre-push` checks the actual destination of every ref, even with an explicit
  command such as `git push origin HEAD:deepseek/dev`.
- It rejects branch deletion and non-fast-forward updates. Both advertised
  object IDs must be locally available commits; an unknown remote ancestor
  stops the push with a fetch/retry instruction. New branch creation verifies
  the local commit. Target overrides do not disable these checks.
- Both hooks require Node.js. `core.hooksPath` and `push.default` are
  repository-local settings shared by linked worktrees. They affect those
  worktrees' Git operations, while leaving their files, branches and upstreams
  unchanged. No global Git settings or worktree-specific overrides are set.

## Status and restoration

Run `npm run git:status` to check the active configuration and installed file
hashes. Run `npm run git:setup` after updating the versioned guard sources;
repeating the same install preserves the initial backup. Unknown hook
directories and configuration changes made after installation require review.

The initial repository-local values are saved in `taiyi-guards/state.json` in
the common Git directory. `npm run git:restore` restores them only while the
current configuration still belongs to this installer. If the previous hook
directory no longer exists, restoration stops and retains the active guards.
Installed versions are retained for audit. After the installing worktree is
removed, the installed `scripts/git/install-hooks.mjs` supports the same
`--status` and `--restore` commands from any remaining worktree. Moving the
entire repository, including its common Git directory, requires running setup
again to update absolute paths.

The guard is local protection, not a server policy: configuration overrides,
disabled hooks or edits to installed code can bypass it. GitHub branch
protection is a separate server-side setting and is not configured here.

References: [Git hooks](https://git-scm.com/docs/githooks),
[shared worktree configuration](https://git-scm.com/docs/git-worktree), and
[ancestor checks](https://git-scm.com/docs/git-merge-base).

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
