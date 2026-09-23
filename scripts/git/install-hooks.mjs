import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { checkCommitTarget } from "./branch-policy.mjs";

function git(...args) { return execFileSync("git", args, { encoding: "utf8" }).trim(); }
const root = git("rev-parse", "--show-toplevel");
const branch = git("symbolic-ref", "--short", "HEAD");
const upstream = git("rev-parse", "--abbrev-ref", "@{upstream}");
checkCommitTarget(branch, upstream);
const hookPath = resolve(root, ".githooks").replaceAll("\\", "/");
let existing = "";
try { existing = execFileSync("git", ["config", "--get", "core.hooksPath"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { existing = ""; }
if (existing && resolve(root, existing).replaceAll("\\", "/") !== hookPath) {
  throw new Error(`Existing hook directory ${existing} must be reviewed before replacement.`);
}
git("config", "--local", "core.hooksPath", hookPath);
git("config", "--local", "push.default", "upstream");
console.log(`Git guards installed. ${branch} pushes to ${upstream}.`);
