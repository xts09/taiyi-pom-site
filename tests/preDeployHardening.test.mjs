import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { componentSolutions } from "../src/data/componentSolutions.ts";
import { getLanguageAlternatesForPath } from "../src/i18n/releaseManifest.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");

const expectedAlternates = (sourcePath) => ({
  en: sourcePath,
  de: `/de${sourcePath}`,
  fr: `/fr${sourcePath}`,
  "pt-BR": `/pt-br${sourcePath}`,
  "zh-CN": `/zh${sourcePath}`,
  "x-default": sourcePath,
});

test("the 87 released English owners have exact manifest-backed hreflang groups", () => {
  const engineeringPaths = JSON.parse(
    readProjectFile("src/generated/catalog.json"),
  )
    .filter((record) => record.kind === "engineering-tds")
    .map((record) => `/products/${record.slug}`);
  const componentPaths = componentSolutions.map(
    (solution) => `/components/${solution.slug}`,
  );
  const staticOwnerPaths = [
    "/about",
    "/privacy",
    "/components",
    "/wear-resistant-low-friction-pom",
    "/conductive-antistatic-pom",
    "/products/conductive-antistatic-compounds",
  ];
  const ownerPaths = [
    ...engineeringPaths,
    ...componentPaths,
    ...staticOwnerPaths,
  ];

  assert.equal(engineeringPaths.length, 75);
  assert.equal(componentPaths.length, 6);
  assert.equal(staticOwnerPaths.length, 6);
  assert.equal(ownerPaths.length, 87);

  for (const sourcePath of ownerPaths) {
    assert.deepEqual(
      getLanguageAlternatesForPath(sourcePath),
      expectedAlternates(sourcePath),
      sourcePath,
    );
  }
});

test("English metadata owners consume the release manifest at the page boundary", () => {
  const seoSource = readProjectFile("src/lib/seo.ts");
  const gradePageSource = readProjectFile(
    "src/app/(en)/products/[slug]/page.tsx",
  );
  const componentPageSource = readProjectFile(
    "src/app/(en)/components/[slug]/page.tsx",
  );
  const staticOwnerSources = [
    "src/app/(en)/about/page.tsx",
    "src/app/(en)/privacy/page.tsx",
    "src/app/(en)/components/page.tsx",
    "src/app/(en)/wear-resistant-low-friction-pom/page.tsx",
    "src/app/(en)/conductive-antistatic-pom/page.tsx",
    "src/app/(en)/products/conductive-antistatic-compounds/page.tsx",
  ].map(readProjectFile);

  assert.match(seoSource, /canonical: path/);
  assert.match(
    seoSource,
    /createEngineeringTdsPageMetadata[\s\S]*?languageAlternates[\s\S]*?createPageMetadata\([\s\S]*?languageAlternates/,
  );
  assert.match(gradePageSource, /getLanguageAlternatesForPath\(sourcePath\)/);
  assert.match(
    gradePageSource,
    /createEngineeringTdsPageMetadata\([\s\S]*?languageAlternates/,
  );
  assert.match(componentPageSource, /detail\s*\?\s*getLanguageAlternatesForPath/);
  assert.match(componentPageSource, /languageAlternates,/);

  for (const source of staticOwnerSources) {
    assert.match(source, /getLanguageAlternates\(/);
  }
});

test("the retired Modified POM page redirects to the canonical POM directory", () => {
  const englishRedirect = readProjectFile(
    "src/app/(en)/modified-pom-compounds/page.tsx",
  );
  const localizedRedirect = readProjectFile(
    "src/app/[locale]/modified-pom-compounds/page.tsx",
  );

  assert.match(
    englishRedirect,
    /permanentRedirect\("\/products\/categories\/pom#material-families"\)/,
  );
  assert.match(localizedRedirect, /permanentRedirect\(/);
  assert.match(localizedRedirect, /destinationPath/);
  assert.deepEqual(
    getLanguageAlternatesForPath("/modified-pom-compounds"),
    {},
  );
});

test("only the below-fold application scene loses eager image priority", () => {
  const applicationPageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  const sceneImage = applicationPageSource.match(
    /<Image\s+src=\{publicPath\(visualAssets\.scene\)\}[\s\S]*?\/>/,
  )?.[0];
  const pomHeroSource = readProjectFile("src/components/PomLandingPage.tsx");
  const aboutHeroSource = readProjectFile("src/app/(en)/about/AboutSections.tsx");

  assert.ok(sceneImage);
  assert.doesNotMatch(sceneImage, /\bpriority\b/);
  assert.match(pomHeroSource, /src=\{page\.heroImage\.src\}[\s\S]*?\bpriority\b/);
  assert.match(aboutHeroSource, /src=\{publicPath\(heroImage\.src\)\}[\s\S]*?\bpriority\b/);
});

test("About Material Focus exposes a token-backed keyboard focus ring", () => {
  const aboutStyles = readProjectFile(
    "src/app/(en)/about/AboutPage.module.css",
  );
  const focusRules = [
    ...aboutStyles.matchAll(/\.focusRow:focus-visible\s*\{([^}]*)\}/g),
  ].map((match) => match[1]);

  assert.ok(focusRules.length > 0);
  assert.equal(focusRules.some((rule) => /outline:\s*none/.test(rule)), false);
  assert.equal(
    focusRules.some((rule) =>
      /outline:\s*3px\s+solid\s+var\(--ds-focus-ring\)/.test(rule),
    ),
    true,
  );
});
