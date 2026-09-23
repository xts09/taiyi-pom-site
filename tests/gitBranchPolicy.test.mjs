import assert from "node:assert/strict";
import test from "node:test";
import { checkCommitTarget, checkPushTarget } from "../scripts/git/branch-policy.mjs";

const update = target => `refs/heads/codex/keptds-work ${"1".repeat(40)} refs/heads/${target} ${"2".repeat(40)}\n`;
const verified = () => {};

test("commit requires the keptds branch family and correct upstream", () => {
  assert.doesNotThrow(() => checkCommitTarget("codex/keptds-work", "origin/codex/keptds"));
  assert.doesNotThrow(() => checkCommitTarget("codex/keptds", "origin/codex/keptds"));
  assert.throws(() => checkCommitTarget("deepseek/dev", "origin/deepseek/dev"));
  assert.throws(() => checkCommitTarget("deepseek/dev", "origin/codex/keptds"));
  assert.throws(() => checkCommitTarget("codex/keptds-work", "origin/deepseek/dev"));
  assert.throws(() => checkCommitTarget("", ""));
});

test("push checks every actual destination ref, including explicit refspecs", () => {
  assert.doesNotThrow(() => checkPushTarget("origin", update("codex/keptds"), undefined, verified));
  assert.throws(() => checkPushTarget("origin", update("deepseek/dev")));
  assert.throws(() => checkPushTarget("origin", update("codex/keptds") + update("main")));
  assert.throws(() => checkPushTarget("other", update("codex/keptds")));
  assert.throws(() => checkPushTarget("origin", "malformed update"));
});

test("an explicit alternative target keeps destination validation active", () => {
  assert.doesNotThrow(() => checkCommitTarget("main", "origin/main", "main"));
  assert.doesNotThrow(() => checkPushTarget("origin", update("main"), "main", verified));
  assert.throws(() => checkPushTarget("origin", update("deepseek/dev"), "main"));
});

test("push rejects deletion and unverified history, including with a target override", () => {
  assert.throws(() => checkPushTarget("origin", update("codex/keptds")), /ancestry/);
  assert.throws(() => checkPushTarget("origin", update("main").replace("1".repeat(40), "0".repeat(40)), "main", verified), /deletion/);
  assert.throws(() => checkPushTarget("origin", update("codex/keptds"), undefined, () => { throw new Error("unavailable"); }), /unavailable/);
});
