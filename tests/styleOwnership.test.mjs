import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
    "src/app/(en)/modified-pom-compounds/page.tsx",
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

test("grade cross-reference workspace keeps its route-local stylesheet", () => {
  const workspacePage = readProjectFile(
    "src/app/(en)/pom-grade-cross-reference/page.tsx",
  );

  assert.ok(workspacePage.includes('import styles from "./page.module.css";'));
  assert.doesNotMatch(workspacePage, /styles\/products\.css/);
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
