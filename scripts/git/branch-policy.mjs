export const defaultTargetBranch = "codex/keptds";

export function checkCommitTarget(branch, upstream, target = defaultTargetBranch) {
  if (branch !== target && !branch.startsWith(`${target}-`)) {
    throw new Error(`Commit blocked: use ${target} or ${target}-* with upstream origin/${target}. Current branch: ${branch || "detached HEAD"}.`);
  }
  if (upstream !== `origin/${target}`) {
    throw new Error(`Commit blocked: expected upstream origin/${target}; found ${upstream || "none"}.`);
  }
}

export function checkPushTarget(remote, input, target = defaultTargetBranch) {
  if (remote !== "origin") throw new Error("Push blocked: use the configured origin remote.");
  for (const line of input.split(/\r?\n/).filter(line => line.trim())) {
    const fields = line.trim().split(/\s+/);
    if (fields.length !== 4 || fields[2] !== `refs/heads/${target}`) {
      throw new Error(`Push blocked: expected origin/${target}; found ${fields[2] || "invalid ref"}.`);
    }
  }
}
