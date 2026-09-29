export const defaultTargetBranch = "codex/keptds";

export function checkCommitTarget(branch, upstream, target = defaultTargetBranch) {
  if (branch !== target && !branch.startsWith(`${target}-`)) {
    throw new Error(`Commit blocked: use ${target} or ${target}-* with upstream origin/${target}. Current branch: ${branch || "detached HEAD"}.`);
  }
  if (upstream !== `origin/${target}`) {
    throw new Error(`Commit blocked: expected upstream origin/${target}; found ${upstream || "none"}.`);
  }
}

export function checkPushTarget(remote, input, target = defaultTargetBranch, verifyUpdate) {
  if (remote !== "origin") throw new Error("Push blocked: use the configured origin remote.");
  for (const line of input.split(/\r?\n/).filter(line => line.trim())) {
    const fields = line.trim().split(/\s+/);
    if (fields.length !== 4 || fields[2] !== `refs/heads/${target}`) {
      throw new Error(`Push blocked: expected origin/${target}; found ${fields[2] || "invalid ref"}.`);
    }
    const [, localOid, , remoteOid] = fields;
    if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i.test(localOid) ||
        !/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i.test(remoteOid) || localOid.length !== remoteOid.length) {
      throw new Error("Push blocked: invalid object IDs.");
    }
    if (/^0+$/.test(localOid)) throw new Error("Push blocked: branch deletion is not allowed.");
    if (!verifyUpdate) throw new Error("Push blocked: commit ancestry could not be verified.");
    verifyUpdate(localOid, /^0+$/.test(remoteOid) ? null : remoteOid);
  }
}
