import { execFileSync } from "node:child_process";
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
    checkPushTarget(process.argv[3], readFileSync(0, "utf8"), target);
  } else {
    throw new Error("Unknown Git guard mode.");
  }
} catch (error) {
  console.error(error.message);
  console.error("See docs/git-workflow.md. Change the target only when explicitly requested by the user.");
  process.exitCode = 1;
}
