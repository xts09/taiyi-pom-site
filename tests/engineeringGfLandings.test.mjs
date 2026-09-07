import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readProjectFile = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const catalog = JSON.parse(readProjectFile("src/generated/catalog.json"));
const dataSource = readProjectFile("src/data/engineeringGfLandingPages.ts");
const pageSource = readProjectFile(
  "src/components/EngineeringGfLandingPage.tsx",
);
const comparisonSource = readProjectFile("src/components/EngineeringGfGradeComparison.tsx");
const productGridSource = readProjectFile("src/components/ProductGrid.tsx");
const releaseManifestSource = readProjectFile("src/i18n/releaseManifest.ts");
const sitemapSource = readProjectFile("src/app/sitemap.ts");
const pa6RouteSource = readProjectFile(
  "src/app/(en)/products/categories/glass-fiber-reinforced-pa6-compound/page.tsx",
);
const pa66RouteSource = readProjectFile(
  "src/app/(en)/products/categories/glass-fiber-reinforced-pa66-compound/page.tsx",
);

const gfGrades = catalog.filter(
  (record) =>
    record.kind === "engineering-tds" &&
    record.category === "Glass Fiber Reinforced" &&
    ["PA6", "PA66"].includes(record.family),
);

test("keeps the two GF landing catalogs complete and separate", () => {
  const pa6 = gfGrades.filter((grade) => grade.family === "PA6");
  const pa66 = gfGrades.filter((grade) => grade.family === "PA66");

  assert.equal(pa6.length, 17);
  assert.equal(pa66.length, 15);
  assert.deepEqual(
    [...new Set(pa6.map((grade) => Number(grade.filler)))].sort((a, b) => a - b),
    [8, 15, 20, 30, 32, 35, 40, 45, 50],
  );
  assert.deepEqual(
    [...new Set(pa66.map((grade) => Number(grade.filler)))].sort((a, b) => a - b),
    [15, 20, 25, 30, 33, 35, 40, 45, 50],
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
  assert.match(comparisonSource, /Glass fiber<\/th>[\s\S]*Tensile stress[\s\S]*Flexural strength/);
  assert.match(comparisonSource, /Flexural modulus[\s\S]*Notched impact[\s\S]*HDT 1\.8 MPa/);
  assert.match(comparisonSource, /Water absorption/);
  assert.match(comparisonSource, /"Not published"/);
  assert.doesNotMatch(comparisonSource, /\?\s*"0/);
});

test("connects the PA6 and PA66 hub directions to their GF landing owners", () => {
  assert.match(
    productGridSource,
    /"PA6:Glass Fiber Reinforced"[\s\S]*glass-fiber-reinforced-pa6-compound/,
  );
  assert.match(
    productGridSource,
    /"PA66:Glass Fiber Reinforced"[\s\S]*glass-fiber-reinforced-pa66-compound/,
  );
  assert.match(productGridSource, /\?\? "#pom-grades"/);
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

test("stages both routes as noindex outside the release manifest and sitemap", () => {
  for (const routeSource of [pa6RouteSource, pa66RouteSource]) {
    assert.match(routeSource, /indexable: false/);
    assert.doesNotMatch(routeSource, /languageAlternates/);
  }

  for (const slug of [
    "glass-fiber-reinforced-pa6-compound",
    "glass-fiber-reinforced-pa66-compound",
  ]) {
    assert.doesNotMatch(releaseManifestSource, new RegExp(slug));
    assert.doesNotMatch(sitemapSource, new RegExp(slug));
  }
});
