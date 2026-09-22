import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { componentSolutionDetails } from "../src/data/componentSolutionDetails.ts";
import {
  getResourceNavigationGroupMetadataTitle,
  resourceNavigationGroups,
} from "../src/data/resourceNavigation.ts";
import {
  resourceIndexLinks,
  resourcePages,
} from "../src/data/resources.ts";
import {
  createCategorySlug,
  pomProductCategoryData,
} from "../src/lib/productCategories.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

test("applies the approved precision-gear title without changing its page copy", () => {
  const detail = componentSolutionDetails.find(
    (candidate) => candidate.slug === "precision-plastic-gears",
  );

  assert.ok(detail);
  assert.equal(
    detail.seo.title,
    "POM Materials for Precision Plastic Gears | Taiyi Polymer",
  );
  assert.equal(detail.seo.title.match(/Taiyi Polymer/g)?.length, 1);
  assert.equal(detail.hero.title, "Precision plastic gears");
  assert.equal(
    detail.seo.description,
    "Compare load, speed, tooth geometry, wear, tolerance, molding, and validation requirements for precision plastic gears using modified POM.",
  );
  assert.ok(
    detail.related.some(
      (link) => link.href === "/resources/pom-gear-material-selection",
    ),
  );
});

test("separates Material Selection display labels from stable metadata titles", () => {
  const materialGroup = resourceNavigationGroups.find(
    (group) => group.id === "material-selection",
  );
  const guide = resourcePages.find(
    (page) => page.slug === "material-selection-guide",
  );

  assert.ok(materialGroup);
  assert.ok(guide);
  assert.equal(materialGroup.title, "Material Selection Resources");
  assert.equal(materialGroup.metadataTitle, "Material Selection Resources");
  assert.equal(
    materialGroup.links.find(
      (link) => link.href === "/resources/material-selection-guide",
    )?.label,
    "POM Material Selection for Molded Parts",
  );
  assert.equal(guide.title, "POM Material Selection for Molded Parts");
  assert.equal(guide.metadataTitle, "POM Material Selection for Molded Parts");
  assert.equal(guide.navLabel, "POM Material Selection");
  assert.equal(
    guide.description,
    "A practical POM material selection guide for comparing wear-resistant, low-friction, reinforced, conductive, antistatic, UV, and high-impact compounds.",
  );
  assert.equal(
    resourceIndexLinks.find(
      (link) => link.href === "/resources/material-selection-guide",
    )?.label,
    "POM Material Selection",
  );
});

test("keeps metadata-title fallback compatible for every resource group", () => {
  assert.deepEqual(
    Object.fromEntries(
      resourceNavigationGroups.map((group) => [
        group.id,
        getResourceNavigationGroupMetadataTitle(group),
      ]),
    ),
    {
      "material-selection": "Material Selection Resources",
      "processing-troubleshooting": "Processing & Troubleshooting Resources",
      "data-validation": "Data & Validation Resources",
    },
  );
});

test("keeps the shared conductive category label and uses its stable slug only in ProductGrid", () => {
  const category = pomProductCategoryData.find(
    (item) =>
      createCategorySlug(item.category) ===
      "conductive-antistatic-pom-compound",
  );
  const productGridSource = readProjectFile("src/components/ProductGrid.tsx");

  assert.ok(category);
  assert.equal(category.label, "Conductive / Antistatic POM");
  assert.equal(
    createCategorySlug(category.category),
    "conductive-antistatic-pom-compound",
  );
  assert.match(
    productGridSource,
    /conductiveAntistaticPomCategorySlug\s*=\s*\n?\s*"conductive-antistatic-pom-compound"/,
  );
  assert.match(
    productGridSource,
    /createCategorySlug\(category\) === conductiveAntistaticPomCategorySlug/,
  );
  assert.doesNotMatch(
    productGridSource,
    /item\.label\s*===\s*"Conductive \/ Antistatic POM"/,
  );
});
