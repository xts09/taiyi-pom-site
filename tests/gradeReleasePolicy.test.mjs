import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  getCatalogGradeLocalizedSegments,
  getLanguageAlternates,
  getSitemapLanguageOptions,
  legacyFiveLocaleNonPomGradeSlugs,
} from "../src/i18n/releaseManifest.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(
  readFileSync(resolve(projectRoot, "src/generated/catalog.json"), "utf8"),
);

const allLocalizedSegments = ["de", "fr", "pt-br", "zh"];
const defaultNonPomGradeLocalizedSegments = ["de", "zh"];

const expectedFiveLanguageHrefs = (sourcePath) => [
  sourcePath,
  `/de${sourcePath}`,
  `/fr${sourcePath}`,
  `/pt-br${sourcePath}`,
  `/zh${sourcePath}`,
];

const expectedFiveLanguageAlternates = (sourcePath) => ({
  en: sourcePath,
  de: `/de${sourcePath}`,
  fr: `/fr${sourcePath}`,
  "pt-BR": `/pt-br${sourcePath}`,
  "zh-CN": `/zh${sourcePath}`,
  "x-default": sourcePath,
});

test("the non-POM migration boundary names only real published engineering grades", () => {
  const engineeringGradeSlugs = new Set(
    catalog
      .filter(
        (record) =>
          record.kind === "engineering-tds" && record.seo?.indexable !== false,
      )
      .map((record) => record.slug),
  );

  assert.equal(
    new Set(legacyFiveLocaleNonPomGradeSlugs).size,
    legacyFiveLocaleNonPomGradeSlugs.length,
    "preserved grade slugs must be unique",
  );

  for (const slug of legacyFiveLocaleNonPomGradeSlugs) {
    assert.ok(engineeringGradeSlugs.has(slug), `unknown preserved grade: ${slug}`);
    assert.deepEqual(
      getCatalogGradeLocalizedSegments({ kind: "engineering-tds", slug }),
      allLocalizedSegments,
    );
  }
});

test("future POM and non-POM grades receive the intended default locales", () => {
  assert.deepEqual(
    getCatalogGradeLocalizedSegments({
      kind: "product",
      slug: "future-pom-contract-fixture",
    }),
    allLocalizedSegments,
  );
  assert.deepEqual(
    getCatalogGradeLocalizedSegments({
      kind: "engineering-tds",
      slug: "future-pa66-contract-fixture",
    }),
    defaultNonPomGradeLocalizedSegments,
  );
});

test("representative existing grade URLs keep their five-language sitemap and alternates", () => {
  for (const slug of [
    "etm450-base-pom-resin",
    "eag130-pa6-glass-fiber-reinforced",
    "eag230h-pa66-glass-fiber-reinforced",
    "eag630h-ppa-glass-fiber-reinforced",
  ]) {
    const sourcePath = `/products/${slug}`;

    assert.deepEqual(
      getSitemapLanguageOptions(sourcePath).map(({ href }) => href),
      expectedFiveLanguageHrefs(sourcePath),
    );
    assert.deepEqual(
      getLanguageAlternates(sourcePath),
      expectedFiveLanguageAlternates(sourcePath),
    );
  }
});

test("PA6, PA66 and PPA glass-fiber landings remain five-language releases", () => {
  for (const sourcePath of [
    "/products/categories/glass-fiber-reinforced-pa6-compound",
    "/products/categories/glass-fiber-reinforced-pa66-compound",
    "/products/categories/glass-fiber-reinforced-ppa-compound",
  ]) {
    assert.deepEqual(
      getSitemapLanguageOptions(sourcePath).map(({ href }) => href),
      expectedFiveLanguageHrefs(sourcePath),
    );
    assert.deepEqual(
      getLanguageAlternates(sourcePath),
      expectedFiveLanguageAlternates(sourcePath),
    );
  }
});
