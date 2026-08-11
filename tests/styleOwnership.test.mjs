import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

test("route-specific styles stay out of the root layout", () => {
  const rootLayout = readProjectFile("src/app/layout.tsx");

  assert.doesNotMatch(
    rootLayout,
    /import\s+["']\.\/styles\/(?:home|products|applications|resources)\.css["']/,
  );

  const routeOwners = new Map([
    ["src/app/page.tsx", 'import "./styles/home.css";'],
    [
      "src/app/applications/layout.tsx",
      'import "../styles/applications.css";',
    ],
    ["src/app/products/layout.tsx", 'import "../styles/products.css";'],
    ["src/app/resources/layout.tsx", 'import "../styles/resources.css";'],
  ]);

  for (const [path, expectedImport] of routeOwners) {
    assert.ok(readProjectFile(path).includes(expectedImport), path);
  }
});

test("product side entrances retain their product stylesheet", () => {
  const productSideEntrances = [
    "src/app/conductive-antistatic-pom/page.tsx",
    "src/app/modified-pom-compounds/page.tsx",
    "src/app/pom-grade-cross-reference/page.tsx",
    "src/app/technical-data-sheets/page.tsx",
    "src/app/wear-resistant-low-friction-pom/page.tsx",
  ];

  for (const path of productSideEntrances) {
    assert.ok(
      readProjectFile(path).includes('import "../styles/products.css";'),
      path,
    );
  }
});

test("contact layout stays locally owned without override escalation", () => {
  const contactPage = readProjectFile("src/app/contact/page.tsx");
  const contactStyles = readProjectFile(
    "src/app/contact/ContactPage.module.css",
  );

  assert.doesNotMatch(contactStyles, /!important\b/);
  assert.doesNotMatch(contactStyles, /#(?:07111f|526276|0b5fb8|ffffff)\b/i);
  assert.doesNotMatch(
    contactPage,
    /\b(?:contact-page|mesh-surface|inner-hero|contact-split|contact-identity)\b/,
  );
});
