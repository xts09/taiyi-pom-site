import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  getSitemapLanguageOptions,
  getSitemapReleasedSourcePaths,
} from "../src/i18n/releaseManifest.ts";
import {
  assertMatchingRouteSets,
  assertNoSitemapUrlFragments,
} from "../src/lib/routeSetInvariant.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("released sitemap routes remain unique with explicit locale coverage", () => {
  const sourcePaths = getSitemapReleasedSourcePaths();

  assert.equal(sourcePaths.length, 187);
  assert.equal(new Set(sourcePaths).size, sourcePaths.length);
  assert.equal(
    sourcePaths.reduce(
      (total, sourcePath) =>
        total + getSitemapLanguageOptions(sourcePath).length,
      0,
    ),
    899,
  );
  assert.deepEqual(
    getSitemapLanguageOptions("/news/chinaplas-2026").map(
      ({ href }) => href,
    ),
    [
      "/news/chinaplas-2026",
      "/de/news/chinaplas-2026",
      "/fr/news/chinaplas-2026",
      "/pt-br/news/chinaplas-2026",
      "/zh/news/chinaplas-2026",
    ],
  );
});

test("route-set invariant reports missing, unexpected, and duplicate routes", () => {
  assert.doesNotThrow(() =>
    assertMatchingRouteSets(["/a", "/b"], ["/b", "/a"], "fixture"),
  );
  assert.throws(
    () =>
      assertMatchingRouteSets(
        ["/a", "/a", "/unexpected"],
        ["/a", "/missing"],
        "fixture",
      ),
    /missing=\[\/missing\][\s\S]*unexpected=\[\/unexpected\][\s\S]*actualDuplicates=\[\/a\]/,
  );
});

test("sitemap URL invariant rejects page fragments", () => {
  assert.doesNotThrow(() =>
    assertNoSitemapUrlFragments([
      "https://www.taiyipolymer.com/products/categories/pom",
    ]),
  );
  assert.throws(
    () =>
      assertNoSitemapUrlFragments([
        "https://www.taiyipolymer.com/products/categories/pom#material-families",
      ]),
    /Sitemap URLs must not include fragments:[\s\S]*#material-families/,
  );
});

test("sitemap generation enforces release-manifest set equality", () => {
  const sitemapSource = readFileSync(
    resolve(projectRoot, "src/app/sitemap.ts"),
    "utf8",
  );

  assert.match(sitemapSource, /assertMatchingRouteSets\(/);
  assert.match(sitemapSource, /assertNoSitemapUrlFragments\(/);
  assert.match(sitemapSource, /getSitemapReleasedSourcePaths\(\)/);
  assert.match(
    sitemapSource,
    /uniqueLocalizedLanguageRoutes\.map\(\(\{ sourcePath \}\) => sourcePath\)/,
  );
});
