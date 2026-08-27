import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { applicationNavigationEntries } from "../src/data/applicationNavigation.ts";
import { applications } from "../src/data/applications.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("Header uses the lightweight application navigation boundary", () => {
  const headerSource = readFileSync(
    resolve(projectRoot, "src/components/Header.tsx"),
    "utf8",
  );

  assert.match(headerSource, /@\/data\/applicationNavigation/);
  assert.doesNotMatch(headerSource, /@\/data\/applications/);
});

test("application navigation entries stay aligned with application owners", () => {
  assert.deepEqual(
    applicationNavigationEntries.map(({ slug, title }) => ({ slug, title })),
    applications.map(({ slug, title }) => ({ slug, title })),
  );
});
