import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  getLanguageAlternatesForPath,
  isLocalizedReleaseIndexable,
} from "../src/i18n/releaseManifest.ts";

const englishRedirectSource = readFileSync(
  new URL("../src/app/(en)/modified-pom-compounds/page.tsx", import.meta.url),
  "utf8",
);
const localizedRedirectSource = readFileSync(
  new URL("../src/app/[locale]/modified-pom-compounds/page.tsx", import.meta.url),
  "utf8",
);
const sitemapSource = readFileSync(
  new URL("../src/app/sitemap.ts", import.meta.url),
  "utf8",
);

test("redirects the retired English Modified POM route to the canonical directory", () => {
  assert.match(
    englishRedirectSource,
    /permanentRedirect\("\/products\/categories\/pom#material-families"\)/,
  );
});

test("preserves the locale while redirecting the retired localized route", () => {
  assert.match(localizedRedirectSource, /getLocalizedHref\(destinationPath/);
  assert.match(localizedRedirectSource, /#material-families/);
});

test("keeps the retired route out of indexable ownership and the sitemap", () => {
  assert.equal(isLocalizedReleaseIndexable("/modified-pom-compounds", "zh"), false);
  assert.deepEqual(getLanguageAlternatesForPath("/modified-pom-compounds"), {});
  assert.doesNotMatch(
    sitemapSource,
    /sourcePath: "\/modified-pom-compounds"/,
  );
});
