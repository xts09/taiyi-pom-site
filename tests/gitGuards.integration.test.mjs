import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const artifacts = resolve(root, "outputs/git-guard-tests");
mkdirSync(artifacts, { recursive: true });
const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !/^GIT_|^TAIYI_GIT_TARGET_BRANCH$/.test(key)));
env.GIT_CONFIG_NOSYSTEM = "1";
env.GIT_CONFIG_GLOBAL = process.platform === "win32" ? "NUL" : "/dev/null";
env.GIT_TERMINAL_PROMPT = "0";
const payload = [".githooks/pre-commit", ".githooks/pre-push", "scripts/git/guard.mjs", "scripts/git/branch-policy.mjs", "scripts/git/install-hooks.mjs"];

test("real Git operations remain guarded after installer worktree move/removal", { timeout: 120000 }, () => {
  const base = mkdtempSync(resolve(artifacts, "lifecycle-"));
  const primary = resolve(base, "primary");
  const bare = resolve(base, "origin.git");
  const linked = resolve(base, "installer");
  const moved = resolve(base, "moved-installer");
  for (const path of [primary, bare, linked, moved]) assert.ok(path.startsWith(base + sep));
  const records = [];
  function run(cwd, executable, args, fail = false) {
    const result = spawnSync(executable, args, { cwd, env, encoding: "utf8", timeout: 20000 });
    if (fail) assert.notEqual(result.status, 0, `${args.join(" ")} unexpectedly passed`);
    else assert.equal(result.status, 0, `${args.join(" ")}: ${result.stderr || result.error}`);
    return result;
  }
  const git = (cwd, ...args) => run(cwd, "git", args).stdout.trim();
  const blocked = (cwd, args, message) => {
    const result = run(cwd, "git", args, true);
    assert.match(result.stderr, message);
  };
  const node = (cwd, script, ...args) => run(cwd, process.execPath, [script, ...args]);
  mkdirSync(primary);
  git(base, "init", "--bare", bare);
  git(primary, "init", "-b", "codex/keptds");
  git(primary, "config", "user.name", "Guard Test");
  git(primary, "config", "user.email", "guard-test@example.invalid");
  git(primary, "config", "push.default", "simple");
  for (const name of payload) {
    const file = resolve(primary, name);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, readFileSync(resolve(root, name)));
  }
  git(primary, "add", ".");
  git(primary, "commit", "-m", "fixture");
  const first = git(primary, "rev-parse", "HEAD");
  git(primary, "remote", "add", "origin", bare);
  git(primary, "push", "-u", "origin", "codex/keptds");
  git(primary, "worktree", "add", "-b", "codex/keptds-test", linked);
  git(linked, "branch", "--set-upstream-to=origin/codex/keptds");
  git(primary, "switch", "-c", "main");
  const beforeStatus = git(primary, "status", "--porcelain");
  const installer = resolve(linked, "scripts/git/install-hooks.mjs");
  node(linked, installer);
  const hooks = git(primary, "config", "--get", "core.hooksPath");
  assert.ok(hooks.startsWith(primary.replaceAll("\\", "/") + "/.git/taiyi-guards/"));
  const stateFile = resolve(primary, ".git/taiyi-guards/state.json");
  const state = readFileSync(stateFile, "utf8");
  node(linked, installer);
  assert.equal(readFileSync(stateFile, "utf8"), state);
  assert.equal(git(primary, "status", "--porcelain"), beforeStatus);
  node(linked, installer, "--status");
  blocked(primary, ["commit", "--allow-empty", "-m", "blocked"], /Commit blocked/);
  records.push("idempotent install; shared config; other-worktree commit blocked; files unchanged");

  git(linked, "commit", "--allow-empty", "-m", "allowed");
  git(linked, "push");
  const published = git(linked, "rev-parse", "HEAD");
  blocked(linked, ["push", "origin", "HEAD:main"], /Push blocked/);
  blocked(linked, ["push", "origin", "HEAD:deepseek/dev"], /Push blocked/);
  blocked(linked, ["push", "origin", "--delete", "codex/keptds"], /deletion/);
  blocked(linked, ["push", "--force", "origin", `${first}:codex/keptds`], /non-fast-forward/);
  assert.equal(git(bare, "rev-parse", "refs/heads/codex/keptds"), published);
  records.push("fast-forward allowed; wrong targets, deletion and force update rejected");

  const tree = git(bare, "rev-parse", `${published}^{tree}`);
  const unknown = git(bare, "-c", "user.name=Guard Test", "-c", "user.email=guard-test@example.invalid", "commit-tree", tree, "-p", published, "-m", "remote-only");
  git(bare, "update-ref", "refs/heads/codex/keptds", unknown);
  blocked(linked, ["push", "--force", "origin", "HEAD:codex/keptds"], /unavailable/);
  git(bare, "update-ref", "refs/heads/codex/keptds", published);
  records.push("unknown remote ancestor fails closed");

  git(primary, "worktree", "move", linked, moved);
  node(moved, resolve(moved, "scripts/git/install-hooks.mjs"), "--status");
  git(moved, "commit", "--allow-empty", "-m", "after move");
  git(moved, "push");
  git(primary, "worktree", "remove", moved);
  assert.equal(existsSync(moved), false);
  blocked(primary, ["commit", "--allow-empty", "-m", "after removal"], /Commit blocked/);
  const stableInstaller = resolve(JSON.parse(state).versionPath, "scripts/git/install-hooks.mjs");
  node(primary, stableInstaller, "--status");
  records.push("moved installer works; removed installer still blocks commits from main");

  node(primary, stableInstaller, "--restore");
  assert.equal(git(primary, "config", "--get", "push.default"), "simple");
  assert.notEqual(spawnSync("git", ["config", "--local", "--get", "core.hooksPath"], { cwd: primary, env }).status, 0);
  git(primary, "commit", "--allow-empty", "-m", "explicit restore");
  git(primary, "switch", "codex/keptds");
  git(primary, "config", "core.hooksPath", resolve(base, "custom-hooks"));
  const refused = run(primary, process.execPath, [resolve(primary, "scripts/git/install-hooks.mjs")], true);
  assert.match(refused.stderr, /must be reviewed/);
  records.push("configuration restored; unknown hooks protected");
  writeFileSync(resolve(base, "results.json"), JSON.stringify(records, null, 2));
});
