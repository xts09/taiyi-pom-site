import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { serializeJsonLd } from "../src/lib/jsonLd.ts";
import { privacyPolicyRelease } from "../src/data/legal.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const collectTsxFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectTsxFiles(path);
    }

    return entry.isFile() && entry.name.endsWith(".tsx") ? [path] : [];
  });

test("serializes JSON-LD without literal HTML opening characters", () => {
  const payload = {
    "@context": "https://schema.org",
    name: '</script><script>alert("unsafe")</script>',
  };

  const serialized = serializeJsonLd(payload);

  assert.equal(serialized.includes("<"), false);
  assert.deepEqual(JSON.parse(serialized), payload);
});

test("routes use the shared JSON-LD serializer", () => {
  const sourceFiles = ["src/app", "src/components"].flatMap((path) =>
    collectTsxFiles(resolve(projectRoot, path)),
  );
  const structuredDataFiles = sourceFiles.filter((path) =>
    readFileSync(path, "utf8").includes('type="application/ld+json"'),
  );

  assert.ok(structuredDataFiles.length > 0);

  for (const path of structuredDataFiles) {
    const source = readFileSync(path, "utf8");
    const label = relative(projectRoot, path);

    assert.match(source, /__html:\s*serializeJsonLd\(/, label);
    assert.doesNotMatch(source, /__html:\s*JSON\.stringify\(/, label);
  }
});

test("retired or misleading SEO markers stay removed", () => {
  const layoutSource = readFileSync(
    resolve(projectRoot, "src/app/(en)/layout.tsx"),
    "utf8",
  );
  const seoSource = readFileSync(resolve(projectRoot, "src/lib/seo.ts"), "utf8");

  assert.doesNotMatch(layoutSource, /^\s*keywords:\s*\[/m);
  assert.doesNotMatch(seoSource, /"@type":\s*"SearchAction"/);
  assert.doesNotMatch(seoSource, /makesOffer:\s*\[\s*"/s);
  assert.match(seoSource, /^\s*knowsAbout:\s*\[/m);
});

test("metadata descriptions remain complete and company history stays distinct from legal founding", () => {
  const seoSource = readFileSync(resolve(projectRoot, "src/lib/seo.ts"), "utf8");
  const companySource = readFileSync(
    resolve(projectRoot, "src/data/company.ts"),
    "utf8",
  );
  const aboutSource = readFileSync(
    resolve(projectRoot, "src/app/(en)/about/page.tsx"),
    "utf8",
  );

  assert.doesNotMatch(seoSource, /const ellipsis\s*=|foundingDate/);
  assert.match(
    seoSource,
    /formatMetadataDescription = \(description: string\) =>\s*description\.replace/,
  );
  assert.match(companySource, /label: "Manufacturing Roots"/);
  assert.match(companySource, /value: "2003"/);
  assert.doesNotMatch(companySource, /Years in Operation|Manufacturing since 2003/);
  assert.doesNotMatch(aboutSource, /foundingDate/);
  assert.match(aboutSource, /name: companyName/);
  assert.match(aboutSource, /alternateName: siteName/);
});

test("grade pages keep breadcrumb JSON-LD without ineligible Product rich-result markup", () => {
  const seoSource = readFileSync(resolve(projectRoot, "src/lib/seo.ts"), "utf8");
  const productPageSource = readFileSync(
    resolve(projectRoot, "src/app/(en)/products/[slug]/page.tsx"),
    "utf8",
  );
  const localizedProductSources = [
    "src/components/localized/LocalizedEngineeringGradePage.tsx",
    "src/components/localized/LocalizedXt100ProductPage.tsx",
  ].map((path) => readFileSync(resolve(projectRoot, path), "utf8"));

  assert.doesNotMatch(seoSource, /createProductJsonLd|ProductJsonLdProperty/);

  for (const source of [productPageSource, ...localizedProductSources]) {
    assert.doesNotMatch(
      source,
      /createProductJsonLd|productJsonLd|"@type":\s*"Product"/,
    );
    assert.match(source, /createBreadcrumbJsonLd/);
    assert.match(source, /serializeJsonLd\(breadcrumbJsonLd\)/);
  }

  assert.equal(
    productPageSource.match(/serializeJsonLd\(breadcrumbJsonLd\)/g)?.length,
    2,
  );
  assert.equal(productPageSource.match(/<Breadcrumbs/g)?.length, 2);
});

test("keeps the indexable Privacy page in sitemap with its real revision date", () => {
  const sitemapSource = readFileSync(
    resolve(projectRoot, "src/app/sitemap.ts"),
    "utf8",
  );
  const privacySource = readFileSync(
    resolve(projectRoot, "src/app/(en)/privacy/page.tsx"),
    "utf8",
  );

  assert.match(privacyPolicyRelease.lastModified, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(privacyPolicyRelease.lastModified, "2026-08-08");
  assert.match(
    sitemapSource,
    /sourcePath:\s*"\/privacy",[\s\S]*?priority:\s*0\.2,[\s\S]*?changeFrequency:\s*"yearly"/,
  );
  assert.match(
    sitemapSource,
    /lastModified:\s*privacyPolicyRelease\.lastModified/,
  );
  assert.match(
    privacySource,
    /privacyPolicyRelease\.lastUpdatedLabel/,
  );
  assert.doesNotMatch(privacySource, /robots:\s*\{[\s\S]*?index:\s*false/);
});

test("the legacy conductive compounds URL stays consolidated", () => {
  const nextConfigSource = readFileSync(resolve(projectRoot, "next.config.ts"), "utf8");
  const ownerSource = readFileSync(
    resolve(
      projectRoot,
      "src/app/(en)/products/conductive-antistatic-compounds/page.tsx",
    ),
    "utf8",
  );
  const sitemapSource = readFileSync(
    resolve(projectRoot, "src/app/sitemap.ts"),
    "utf8",
  );
  const landingSource = readFileSync(
    resolve(projectRoot, "src/data/pomLandingPages.ts"),
    "utf8",
  );
  const resourcesSource = readFileSync(
    resolve(projectRoot, "src/data/resources.ts"),
    "utf8",
  );

  assert.match(
    nextConfigSource,
    /source:\s*"\/conductive-antistatic-compounds"[\s\S]*?destination:\s*"\/products\/conductive-antistatic-compounds"[\s\S]*?permanent:\s*true/,
  );
  assert.equal(
    existsSync(
      resolve(
        projectRoot,
        "src/app/(en)/conductive-antistatic-compounds/page.tsx",
      ),
    ),
    false,
  );
  assert.match(
    ownerSource,
    /const path = "\/products\/conductive-antistatic-compounds"/,
  );
  assert.match(
    sitemapSource,
    /sourcePath:\s*"\/products\/conductive-antistatic-compounds"/,
  );
  assert.doesNotMatch(
    sitemapSource,
    /sourcePath:\s*"\/conductive-antistatic-compounds"/,
  );
  assert.match(
    landingSource,
    /href:\s*"\/products\/conductive-antistatic-compounds"/,
  );
  assert.doesNotMatch(
    landingSource,
    /href:\s*"\/conductive-antistatic-compounds"/,
  );
  assert.doesNotMatch(
    resourcesSource,
    /href:\s*"\/conductive-antistatic-compounds"/,
  );
});

test("query-driven utility pages stay canonical-only and non-indexable", () => {
  const englishContactSource = readFileSync(
    resolve(projectRoot, "src/app/(en)/contact/page.tsx"),
    "utf8",
  );
  const localizedContactSource = readFileSync(
    resolve(projectRoot, "src/app/[locale]/contact/page.tsx"),
    "utf8",
  );
  const englishTechnicalDataSource = readFileSync(
    resolve(projectRoot, "src/app/(en)/technical-data-sheets/page.tsx"),
    "utf8",
  );
  const localizedTechnicalDataSource = readFileSync(
    resolve(projectRoot, "src/app/[locale]/technical-data-sheets/page.tsx"),
    "utf8",
  );

  assert.doesNotMatch(englishContactSource, /export const metadata/);

  for (const source of [englishContactSource, localizedContactSource]) {
    assert.match(source, /hasContactSearchParams\(await searchParams\)/);
    assert.match(source, /indexable:[\s\S]*?!hasSearchContext/);
    assert.match(
      source,
      /languageAlternates:\s*hasSearchContext[\s\S]*?\? undefined[\s\S]*?: contactLanguageAlternates/,
    );
  }

  for (const source of [
    englishTechnicalDataSource,
    localizedTechnicalDataSource,
  ]) {
    assert.match(source, /indexable:[\s\S]*?!hasSearchIntent/);
    assert.match(
      source,
      /languageAlternates:\s*hasSearchIntent[\s\S]*?\? undefined/,
    );
  }
});
