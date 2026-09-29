import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { checkCommitTarget } from "./branch-policy.mjs";

const payload = [".githooks/pre-commit", ".githooks/pre-push", "scripts/git/guard.mjs", "scripts/git/branch-policy.mjs", "scripts/git/install-hooks.mjs"];
const source = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
function git(...args) { return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim(); }
function configValues(key, local = true) {
  const result = spawnSync("git", ["config", ...(local ? ["--local"] : []), "--get-all", key], { encoding: "utf8" });
  if (result.status === 1) return [];
  if (result.status !== 0) throw new Error(`Unable to read ${key}: ${result.stderr}`);
  return result.stdout.trimEnd().split(/\r?\n/);
}
function setValues(key, values) {
  const result = spawnSync("git", ["config", "--local", "--unset-all", key], { encoding: "utf8" });
  if (![0, 5].includes(result.status)) throw new Error(`Unable to restore ${key}: ${result.stderr}`);
  for (const value of values) git("config", "--local", "--add", key, value);
}
const normalize = value => resolve(value).replaceAll("\\", "/");
const digest = value => createHash("sha256").update(value).digest("hex");

try {
  const common = git("rev-parse", "--path-format=absolute", "--git-common-dir");
  const store = resolve(common, "taiyi-guards");
  const statePath = resolve(store, "state.json");
  const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : null;
  const command = process.argv[2] || "--install";
  const hooks = configValues("core.hooksPath", false);
  const push = configValues("push.default", false);

  function assertManaged() {
    if (!state || hooks.length !== 1 || normalize(hooks[0]) !== state.hooksPath) throw new Error("Active hooks differ from this installation. No configuration was changed.");
    if (push.length !== 1 || push[0] !== "upstream") throw new Error("push.default changed after installation. Review it before restoring configuration.");
  }
  if (command === "--status") {
    assertManaged();
    for (const [name, hash] of Object.entries(state.files)) {
      const file = resolve(state.versionPath, name);
      if (!existsSync(file) || digest(readFileSync(file)) !== hash) throw new Error(`Guard payload is missing or modified: ${name}`);
    }
    console.log(`Git guards active in common directory: ${state.hooksPath}. Hooks and push.default are repository-wide.`);
  } else if (command === "--restore") {
    assertManaged();
    for (const oldPath of state.previous["core.hooksPath"]) {
      if (!existsSync(resolve(oldPath))) throw new Error(`Previous hooks directory is missing: ${oldPath}. Active guards were retained.`);
    }
    setValues("core.hooksPath", state.previous["core.hooksPath"]);
    setValues("push.default", state.previous["push.default"]);
    writeFileSync(statePath, JSON.stringify({ ...state, restored: true }, null, 2));
    console.log("Restored the saved repository-local configuration; guard files retained for audit.");
  } else if (command === "--install") {
    checkCommitTarget(git("symbolic-ref", "--short", "HEAD"), git("rev-parse", "--abbrev-ref", "@{upstream}"));
    if (state && !state.restored) assertManaged();
    const legacyPath = normalize(resolve(source, ".githooks"));
    if (hooks.length > 1 || (hooks[0] && normalize(hooks[0]) !== legacyPath && normalize(hooks[0]) !== state?.hooksPath)) {
      throw new Error(`Existing hook directory ${hooks.join(", ")} must be reviewed before replacement.`);
    }
    const files = Object.fromEntries(payload.map(name => [name, readFileSync(resolve(source, name), "utf8").replaceAll("\r\n", "\n")]));
    const version = digest(JSON.stringify(files)).slice(0, 20);
    const versionPath = normalize(resolve(store, "versions", version));
    for (const [name, content] of Object.entries(files)) {
      const destination = resolve(versionPath, name);
      mkdirSync(dirname(destination), { recursive: true });
      if (existsSync(destination)) {
        if (digest(readFileSync(destination)) !== digest(content)) throw new Error(`Existing guard payload was modified: ${destination}`);
      } else {
        writeFileSync(destination, content);
      }
      if (name.startsWith(".githooks/")) chmodSync(destination, 0o755);
    }
    const hooksPath = normalize(resolve(versionPath, ".githooks"));
    const previous = state && !state.restored ? state.previous : {
      "core.hooksPath": configValues("core.hooksPath"),
      "push.default": configValues("push.default"),
    };
    const next = { versionPath, hooksPath, previous, files: Object.fromEntries(Object.entries(files).map(([name, content]) => [name, digest(content)])) };
    writeFileSync(statePath, JSON.stringify(next, null, 2));
    git("config", "--local", "core.hooksPath", hooksPath);
    git("config", "--local", "push.default", "upstream");
    console.log(`Git guards installed in ${hooksPath}. Repository-wide configuration applies to all linked worktrees; branches and files were not changed.`);
  } else {
    throw new Error(`Unknown installer command: ${command}`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
