import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  findCategoryBySlug,
  getCategoryMetadataTitle,
} from "../src/lib/productCategories.ts";

const resourcesSource = readFileSync(
  new URL("../src/data/resources.ts", import.meta.url),
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

test("connects alternative-grade validation to the ranked manufacturing owner", () => {
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
    /label: "Review Modified POM Manufacturing Capabilities",\s+href: "\/about#manufacturing"/,
  );
});
