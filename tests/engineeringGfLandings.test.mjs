import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  getLanguageAlternatesForPath,
  getSitemapLanguageOptions,
  getSitemapReleasedSourcePaths,
} from "../src/i18n/releaseManifest.ts";

const readProjectFile = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const catalog = JSON.parse(readProjectFile("src/generated/catalog.json"));
const dataSource = readProjectFile("src/data/engineeringGfLandingPages.ts");
const localizationSource = readProjectFile(
  "src/i18n/engineeringGfLandingMessages.ts",
);
const landingPageSource = readProjectFile(
  "src/components/EngineeringGfLandingPage.tsx",
);
const landingStyles = readProjectFile(
  "src/components/EngineeringGfLandingPage.module.css",
);
const comparisonSource = readProjectFile("src/components/EngineeringGfGradeComparison.tsx");
const directionSource = readProjectFile("src/data/engineeringDirectionNavigation.ts");
const releaseManifestSource = readProjectFile("src/i18n/releaseManifest.ts");
const sitemapSource = readProjectFile("src/app/sitemap.ts");
const pa6RouteSource = readProjectFile(
  "src/app/(en)/products/categories/glass-fiber-reinforced-pa6-compound/page.tsx",
);
const pa66RouteSource = readProjectFile(
  "src/app/(en)/products/categories/glass-fiber-reinforced-pa66-compound/page.tsx",
);
const ppaRouteSource = readProjectFile(
  "src/app/(en)/products/categories/glass-fiber-reinforced-ppa-compound/page.tsx",
);
const localizedRouteSources = [
  "src/app/[locale]/products/categories/glass-fiber-reinforced-pa6-compound/page.tsx",
  "src/app/[locale]/products/categories/glass-fiber-reinforced-pa66-compound/page.tsx",
  "src/app/[locale]/products/categories/glass-fiber-reinforced-ppa-compound/page.tsx",
].map(readProjectFile);

const gfGrades = catalog.filter(
  (record) =>
    record.kind === "engineering-tds" &&
    record.category === "Glass Fiber Reinforced" &&
    ["PA6", "PA66", "PPA"].includes(record.family),
);

test("keeps the PA6, PA66 and PPA GF landing catalogs complete and separate", () => {
  const pa6 = gfGrades.filter((grade) => grade.family === "PA6");
  const pa66 = gfGrades.filter((grade) => grade.family === "PA66");
  const ppa = gfGrades.filter((grade) => grade.family === "PPA");

  assert.equal(pa6.length, 17);
  assert.equal(pa66.length, 15);
  assert.equal(ppa.length, 2);
  assert.deepEqual(
    [...new Set(pa6.map((grade) => Number(grade.filler)))].sort((a, b) => a - b),
    [8, 15, 20, 30, 32, 35, 40, 45, 50],
  );
  assert.deepEqual(
    [...new Set(pa66.map((grade) => Number(grade.filler)))].sort((a, b) => a - b),
    [15, 20, 25, 30, 33, 35, 40, 45, 50],
  );
  assert.deepEqual(
    ppa.map((grade) => grade.grade),
    ["EAG630H", "EAG650H"],
  );
  assert.deepEqual(
    ppa.map((grade) => Number(grade.filler)),
    [30, 50],
  );
});

test("keeps the approved comparison fields and marks only real gaps unpublished", () => {
  const requiredFields = [
    "filler",
    "tensile",
    "flexuralStrength",
    "flexuralModulus",
    "hdt",
    "waterAbsorption",
  ];

  for (const grade of gfGrades) {
    for (const field of requiredFields) {
      assert.notEqual(grade[field], "", `${grade.grade} ${field}`);
    }
  }

  assert.deepEqual(
    gfGrades.filter((grade) => !grade.impact).map((grade) => grade.grade),
    ["EAG220", "EAG240"],
  );
  for (const label of [
    "Glass fiber",
    "Tensile stress",
    "Flexural strength",
    "Flexural modulus",
    "Notched impact",
    "HDT (1.8 MPa)",
    "Water absorption",
    "Not published",
  ]) {
    assert.ok(localizationSource.includes(`"${label}"`), label);
  }
  assert.match(comparisonSource, /ui\.glassFiberLabel/);
  assert.match(comparisonSource, /ui\.notPublishedLabel/);
  assert.doesNotMatch(comparisonSource, /\?\s*"0/);
});

test("connects the PA6, PA66 and PPA hub directions to their GF landing owners", () => {
  assert.match(
    directionSource,
    /"PA6:Glass Fiber Reinforced"[\s\S]*glass-fiber-reinforced-pa6-compound/,
  );
  assert.match(
    directionSource,
    /"PA66:Glass Fiber Reinforced"[\s\S]*glass-fiber-reinforced-pa66-compound/,
  );
  assert.match(
    directionSource,
    /"PPA:Glass Fiber Reinforced"[\s\S]*glass-fiber-reinforced-ppa-compound/,
  );
  assert.match(directionSource, /\?\? "#pom-grades"/);
});

test("uses inquiry and technical-data destinations for the primary engineering glass-fiber actions", () => {
  assert.match(
    landingPageSource,
    /const technicalDataHref = localizedPath\("\/technical-data-sheets"\)/,
  );
  assert.match(
    landingPageSource,
    /<Link href=\{contactHref\}>\{ui\.discussApplicationAction\}<\/Link>/,
  );
  assert.doesNotMatch(landingPageSource, /EngineeringGfAnchorLink/);
  assert.match(
    landingPageSource,
    /\{ href: technicalDataHref, label: ui\.technicalDataAction \}/,
  );
});

test("keeps the pinned PA glass-fiber navigation on the shared rail", () => {
  assert.match(
    landingStyles,
    /\.products-motion-root\.is-section-nav-pinned\)[\s\S]*padding-inline: 0/,
  );
  assert.match(
    landingStyles,
    /\.products-motion-root\.is-sticky-actions-visible\)[\s\S]*padding-inline: 0/,
  );
});

test("places the PA glass-fiber breadcrumb within the factory hero", () => {
  assert.match(
    landingStyles,
    /\.heroBreadcrumb \{[\s\S]*position: absolute[\s\S]*top: 0/,
  );
  assert.doesNotMatch(landingStyles, /home-dark-satin-wave-v1/);
});

test("does not turn unresolved suffixes into invented positioning", () => {
  assert.doesNotMatch(
    dataSource,
    /\b(?:A|H|U|HA)\s+(?:means|indicates|stands for|denotes)\b/i,
  );

  const knownGrades = new Set(gfGrades.map((grade) => grade.grade));
  const referencedGrades = new Set(dataSource.match(/\bEAG\d+[A-Z]*\b/g) ?? []);

  for (const grade of referencedGrades) {
    assert.ok(knownGrades.has(grade), grade);
  }
});

test("publishes all three routes as complete five-language sitemap owners", () => {
  for (const routeSource of [pa6RouteSource, pa66RouteSource, ppaRouteSource]) {
    assert.match(routeSource, /indexable: true/);
    assert.match(
      routeSource,
      /languageAlternates: getLanguageAlternatesForPath\(page\.path\)/,
    );
  }

  for (const routeSource of localizedRouteSources) {
    assert.match(routeSource, /isLocalizedReleaseIndexable/);
    assert.match(routeSource, /getEngineeringGfLandingMessages/);
    assert.match(routeSource, /languageAlternates: getLanguageAlternates/);
    assert.match(routeSource, /localeSegment=\{localeConfig\.urlSegment\}/);
    assert.match(routeSource, /inLanguage=\{localeConfig\.htmlLang\}/);
  }

  assert.match(landingPageSource, /getLocalizedHref/);
  assert.match(landingPageSource, /inLanguage/);
  for (const localeKey of ["de", "fr", '"pt-br"', "zh"]) {
    assert.match(localizationSource, new RegExp(`^  ${localeKey}: \\{`, "m"));
  }

  for (const path of [
    "/products/categories/glass-fiber-reinforced-pa6-compound",
    "/products/categories/glass-fiber-reinforced-pa66-compound",
    "/products/categories/glass-fiber-reinforced-ppa-compound",
  ]) {
    assert.match(releaseManifestSource, new RegExp(path));
    assert.match(sitemapSource, new RegExp(path));
    assert.ok(getSitemapReleasedSourcePaths().includes(path));
    assert.deepEqual(
      getSitemapLanguageOptions(path).map(({ href }) => href),
      [path, `/de${path}`, `/fr${path}`, `/pt-br${path}`, `/zh${path}`],
    );
    assert.deepEqual(getLanguageAlternatesForPath(path), {
      en: path,
      de: `/de${path}`,
      fr: `/fr${path}`,
      "pt-BR": `/pt-br${path}`,
      "zh-CN": `/zh${path}`,
      "x-default": path,
    });
  }
});
