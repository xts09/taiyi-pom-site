import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokenSource = readFileSync(resolve(projectRoot, "tokens.css"), "utf8");
const buttonSource = readFileSync(
  resolve(projectRoot, "src/components/ui/button.module.css"),
  "utf8",
);
const fieldSource = readFileSync(
  resolve(projectRoot, "src/components/ui/field-control.module.css"),
  "utf8",
);

test("runtime design-token references resolve within the token registry", () => {
  const definitions = new Set(
    [...tokenSource.matchAll(/--(ds-[\w-]+)\s*:/g)].map(
      ([, token]) => token,
    ),
  );
  const references = [
    ...tokenSource.matchAll(/var\(--(ds-[\w-]+)/g),
  ].map(([, token]) => token);
  const unresolvedTokens = [
    ...new Set(references.filter((token) => !definitions.has(token))),
  ].sort();

  assert.deepEqual(unresolvedTokens, []);
});

test("shared controls retain dual-surface and forced-colors focus indicators", () => {
  assert.match(tokenSource, /--ds-focus-ring-contrast:/);

  for (const source of [buttonSource, fieldSource]) {
    assert.match(source, /:focus-visible/);
    assert.match(source, /var\(--ds-focus-ring-contrast\)/);
    assert.match(source, /@media \(forced-colors: active\)/);
    assert.match(source, /outline-color: Highlight/);
  }
});
