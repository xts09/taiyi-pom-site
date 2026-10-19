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
  const navigationSource = readFileSync(
    resolve(projectRoot, "src/lib/headerNavigation.ts"),
    "utf8",
  );
  const siteDocumentSource = readFileSync(
    resolve(projectRoot, "src/components/SiteDocument.tsx"),
    "utf8",
  );

  assert.doesNotMatch(headerSource, /@\/data\/applications/);
  assert.doesNotMatch(headerSource, /@\/data\/applicationNavigation/);
  assert.match(
    headerSource,
    /import type \{[^}]*HeaderNavigationModel[^}]*\} from "@\/lib\/headerNavigation"/,
  );
  assert.match(navigationSource, /@\/data\/applicationNavigation/);
  assert.doesNotMatch(navigationSource, /@\/data\/applications/);
  assert.match(navigationSource, /applicationNavigationEntries\.map/);
  assert.match(navigationSource, /messages\.Taxonomy\.applications\[entry\.slug\]/);
  assert.match(navigationSource, /`\/applications\/\$\{entry\.slug\}`/);
  assert.match(
    siteDocumentSource,
    /navigation=\{buildHeaderNavigation\(messages,\s*localeSegment\)\}/,
  );
  assert.match(headerSource, /navigation\.sections\.map/);
});

test("application navigation entries stay aligned with application owners", () => {
  assert.deepEqual(
    applicationNavigationEntries.map(({ slug, title }) => ({ slug, title })),
    applications.map(({ slug, title }) => ({ slug, title })),
  );
});
