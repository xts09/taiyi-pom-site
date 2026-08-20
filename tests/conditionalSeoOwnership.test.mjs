import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  findCategoryBySlug,
  getCategoryApplicationSlugs,
  getCategoryMetadataTitle,
  getCategorySelectionLinks,
  productCategoryEntries,
} from "../src/lib/productCategories.ts";

const resourcesSource = readFileSync(
  new URL("../src/data/resources.ts", import.meta.url),
  "utf8",
);
const applicationsSource = readFileSync(
  new URL("../src/data/applications.ts", import.meta.url),
  "utf8",
);

test("assigns the generic carbon-fiber POM compound phrase to the category", () => {
  const category = findCategoryBySlug(
    "carbon-fiber-reinforced-pom-compound",
  );

  assert.ok(category);
  assert.equal(category.label, "Carbon Fiber Reinforced POM Compound");
  assert.equal(
    getCategoryMetadataTitle(category.category),
    "Carbon Fiber Reinforced POM Compound",
  );
});

test("connects alternative-grade validation to the modified POM commercial owner", () => {
  const guideStart = resourcesSource.indexOf(
    'slug: "alternative-pom-grade-validation"',
  );
  const nextGuideStart = resourcesSource.indexOf(
    '\n  {\n    slug:',
    guideStart + 1,
  );
  const guideSource = resourcesSource.slice(guideStart, nextGuideStart);

  assert.notEqual(guideStart, -1);
  assert.match(
    guideSource,
    /label: "Compare Modified POM Grades",\s+href: "\/modified-pom-compounds"/,
  );
});

test("keeps category application routes focused and valid", () => {
  const validApplicationSlugs = new Set(
    [...applicationsSource.matchAll(/^\s{4}slug: "([^"]+)",$/gm)].map(
      (match) => match[1],
    ),
  );

  assert.equal(validApplicationSlugs.size, 8);

  for (const category of productCategoryEntries) {
    const slugs = getCategoryApplicationSlugs(category.category);

    assert.ok(slugs.length >= 2, category.category);
    assert.ok(slugs.length <= 4, category.category);
    assert.equal(new Set(slugs).size, slugs.length, category.category);
    assert.ok(
      slugs.every((slug) => validApplicationSlugs.has(slug)),
      category.category,
    );
  }
});

test("adds distinct editorial inlinks to the three low-inbound routes", () => {
  const links = [
    ...getCategorySelectionLinks("Base POM Resin"),
    ...getCategorySelectionLinks("Carbon Fiber Reinforced POM Compound"),
    ...getCategorySelectionLinks("Glass Fiber Reinforced POM Compound"),
  ].map((link) => link.href);

  assert.deepEqual(new Set(links), new Set([
    "/products/categories/ultra-high-flow-pom",
    "/products/eac115c-pa6-carbon-fiber-reinforced",
    "/products/eax645-ppa-gf-mineral-reinforced",
  ]));
});

test("keeps POM, wear, and conductive selection links on their intended owners", () => {
  assert.deepEqual(
    getCategorySelectionLinks("POM").map((link) => link.href),
    [
      "/modified-pom-compounds",
      "/products/ems162-high-wear-resistant-pom",
      "/products/eptl402-high-wear-resistant-pom",
      "/resources/wear-resistant-low-friction-pom-selection-guide",
    ],
  );
  assert.deepEqual(
    getCategorySelectionLinks("Wear-Resistant Low-Friction POM Compound").map(
      (link) => link.href,
    ),
    ["/wear-resistant-low-friction-pom"],
  );
  assert.deepEqual(
    getCategorySelectionLinks("Conductive / Antistatic POM Compound").map(
      (link) => link.href,
    ),
    [
      "/conductive-antistatic-pom",
      "/products/conductive-antistatic-compounds",
    ],
  );
});
