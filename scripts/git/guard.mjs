import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { checkCommitTarget, checkPushTarget, defaultTargetBranch } from "./branch-policy.mjs";

const target = process.env.TAIYI_GIT_TARGET_BRANCH || defaultTargetBranch;
function readGit(args) {
  try { return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); }
  catch { return ""; }
}

try {
  if (process.argv[2] === "pre-commit") {
    checkCommitTarget(readGit(["symbolic-ref", "--quiet", "--short", "HEAD"]), readGit(["rev-parse", "--abbrev-ref", "@{upstream}"]), target);
  } else if (process.argv[2] === "pre-push") {
    checkPushTarget(process.argv[3], readFileSync(0, "utf8"), target, (localOid, remoteOid) => {
      for (const oid of [localOid, remoteOid].filter(Boolean)) {
        const type = readGit(["cat-file", "-t", oid]);
        if (type !== "commit") throw new Error(`Push blocked: commit ${oid} is unavailable. Fetch origin and retry.`);
      }
      if (remoteOid) {
        const result = spawnSync("git", ["merge-base", "--is-ancestor", remoteOid, localOid], { stdio: "ignore" });
        if (result.status === 1) throw new Error("Push blocked: non-fast-forward update is not allowed.");
        if (result.status !== 0) throw new Error("Push blocked: commit ancestry could not be verified. Fetch origin and retry.");
      }
    });
  } else {
    throw new Error("Unknown Git guard mode.");
  }
} catch (error) {
  console.error(error.message);
  console.error("See docs/git-workflow.md. Change the target only when explicitly requested by the user.");
  process.exitCode = 1;
}
