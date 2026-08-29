import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

test("route-specific styles stay out of the root layout", () => {
  const rootLayout = readProjectFile("src/app/(en)/layout.tsx");

  assert.doesNotMatch(
    rootLayout,
    /import\s+["']\.\/styles\/(?:home|products|applications|resources)\.css["']/,
  );

  const routeOwners = new Map([
    ["src/app/(en)/page.tsx", 'import "./styles/home.css";'],
    [
      "src/app/(en)/applications/layout.tsx",
      'import "../styles/applications.css";',
    ],
    [
      "src/app/(en)/products/layout.tsx",
      'import "../styles/products.css";',
    ],
    [
      "src/app/(en)/resources/layout.tsx",
      'import "../styles/resources.css";',
    ],
    [
      "src/app/[locale]/products/layout.tsx",
      'import "../../(en)/styles/products.css";',
    ],
  ]);

  for (const [path, expectedImport] of routeOwners) {
    assert.ok(readProjectFile(path).includes(expectedImport), path);
  }
});

test("product side entrances retain their product stylesheet", () => {
  const productSideEntrances = [
    "src/app/(en)/conductive-antistatic-pom/page.tsx",
    "src/app/(en)/technical-data-sheets/page.tsx",
    "src/app/(en)/wear-resistant-low-friction-pom/page.tsx",
  ];

  for (const path of productSideEntrances) {
    assert.ok(
      readProjectFile(path).includes('import "../styles/products.css";'),
      path,
    );
  }
});

test("retired product entrances redirect without loading a page stylesheet", () => {
  const retiredEntrance = readProjectFile(
    "src/app/(en)/modified-pom-compounds/page.tsx",
  );

  assert.match(retiredEntrance, /permanentRedirect\(/);
  assert.doesNotMatch(retiredEntrance, /styles\/products\.css/);
});

test("retired grade cross-reference route is absent while technical search remains", () => {
  const retiredFiles = [
    "src/app/(en)/pom-grade-cross-reference/page.tsx",
    "src/app/(en)/pom-grade-cross-reference/GradeCrossReferenceWorkspace.tsx",
    "src/app/(en)/pom-grade-cross-reference/page.module.css",
  ];
  const technicalSearchPage = readProjectFile(
    "src/app/(en)/technical-data-sheets/page.tsx",
  );
  const technicalSearchSelector = readProjectFile(
    "src/data/technicalDataSearch.ts",
  );

  for (const path of retiredFiles) {
    assert.equal(existsSync(resolve(projectRoot, path)), false, path);
  }
  assert.ok(technicalSearchPage.includes("selectTechnicalDataSearch"));
  assert.ok(technicalSearchSelector.includes("findGradeCrossReference"));
  assert.ok(technicalSearchPage.includes('eyebrow="Suggested PLATFORM grade"'));
});

test("contact layout stays locally owned without override escalation", () => {
  const contactPage = readProjectFile("src/app/(en)/contact/page.tsx");
  const contactStyles = readProjectFile(
    "src/app/(en)/contact/ContactPage.module.css",
  );

  assert.doesNotMatch(contactStyles, /!important\b/);
  assert.doesNotMatch(contactStyles, /#(?:07111f|526276|0b5fb8|ffffff)\b/i);
  assert.doesNotMatch(
    contactPage,
    /\b(?:contact-page|mesh-surface|inner-hero|contact-split|contact-identity)\b/,
  );
});
