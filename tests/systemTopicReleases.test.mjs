import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  applicationSystemTopicPromotions,
  canResolveSystemTopicLocaleRelease,
  getEnglishSystemTopicStaticParams,
  resolveApplicationSystemTopicReferences,
  resolveEnglishSystemTopicRoute,
  resolveSystemTopicRuntimeEnvironment,
  systemTopicReleases,
  validateSystemTopicReleases,
} from "../src/data/systemTopicReleases.ts";
import { systemTopics } from "../src/data/systemTopics.ts";
import {
  applications,
  getApplicationBySlug,
} from "../src/data/applications.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const release = systemTopicReleases[0];
const englishRelease = release.localeReleases[0];

test("creates one explicit English Valve Flow Control preview release", () => {
  const validation = validateSystemTopicReleases();

  assert.equal(validation.releaseCount, 1);
  assert.equal(validation.localeReleaseCount, 1);
  assert.equal(validation.previewLocaleReleases, 1);
  assert.equal(validation.publicLocaleReleases, 0);
  assert.equal(englishRelease.locale, "en");
  assert.equal(englishRelease.status, "preview");
  assert.deepEqual(englishRelease.route, {
    applicationSlug: "water-control",
    topicSlug: "valve-flow-control",
    sourcePath: "/applications/water-control/valve-flow-control",
  });
  assert.deepEqual(validation.duplicateReleaseSystemIds, []);
  assert.deepEqual(validation.duplicateLocaleRouteKeys, []);
  assert.deepEqual(validation.brokenReleaseSystemIds, []);
  assert.deepEqual(validation.missingReleaseTopicIds, []);
  assert.deepEqual(validation.crossApplicationReleaseKeys, []);
  assert.deepEqual(validation.invalidRouteKeys, []);
});

test("allows preview in development and Vercel Preview but never production", () => {
  assert.equal(
    resolveSystemTopicRuntimeEnvironment({ NODE_ENV: "development" }),
    "development",
  );
  assert.equal(
    resolveSystemTopicRuntimeEnvironment({
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
    }),
    "preview",
  );
  assert.equal(
    resolveSystemTopicRuntimeEnvironment({
      NODE_ENV: "development",
      VERCEL_ENV: "production",
    }),
    "production",
  );
  assert.equal(
    resolveSystemTopicRuntimeEnvironment({ NODE_ENV: "production" }),
    "production",
  );
  assert.equal(
    resolveSystemTopicRuntimeEnvironment({ NODE_ENV: "test" }),
    "test",
  );

  assert.equal(
    canResolveSystemTopicLocaleRelease(englishRelease, {
      NODE_ENV: "development",
    }),
    true,
  );
  assert.equal(
    canResolveSystemTopicLocaleRelease(englishRelease, {
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
    }),
    true,
  );
  assert.equal(
    canResolveSystemTopicLocaleRelease(englishRelease, {
      NODE_ENV: "production",
      VERCEL_ENV: "production",
    }),
    false,
  );
  assert.equal(
    canResolveSystemTopicLocaleRelease(englishRelease, {
      NODE_ENV: "production",
    }),
    false,
  );
});

test("excludes preview Topics from production static params and route resolution", () => {
  const developmentEnvironment = { NODE_ENV: "development" };
  const previewEnvironment = {
    NODE_ENV: "production",
    VERCEL_ENV: "preview",
  };
  const productionEnvironment = {
    NODE_ENV: "production",
    VERCEL_ENV: "production",
  };

  assert.deepEqual(getEnglishSystemTopicStaticParams(developmentEnvironment), [
    { topic: "valve-flow-control" },
  ]);
  assert.deepEqual(getEnglishSystemTopicStaticParams(previewEnvironment), [
    { topic: "valve-flow-control" },
  ]);
  assert.deepEqual(getEnglishSystemTopicStaticParams(productionEnvironment), []);
  assert.equal(
    resolveEnglishSystemTopicRoute(
      "valve-flow-control",
      productionEnvironment,
    ),
    undefined,
  );
  assert.equal(
    resolveEnglishSystemTopicRoute(
      "unknown-topic",
      developmentEnvironment,
    ),
    undefined,
  );
  assert.equal(
    resolveEnglishSystemTopicRoute(
      "valve-flow-control",
      developmentEnvironment,
    )?.topic,
    systemTopics[0],
  );
});

test("keeps preview SEO surfaces disabled and the Application relation preview-only", () => {
  const validation = validateSystemTopicReleases();

  assert.equal(englishRelease.indexable, false);
  assert.equal(englishRelease.includeInSitemap, false);
  assert.equal(englishRelease.includeInAlternates, false);
  assert.equal(validation.hiddenPromotions, 0);
  assert.equal(validation.previewPromotions, 1);
  assert.equal(validation.visiblePromotions, 0);
  assert.deepEqual(validation.previewPublicSurfaceKeys, []);
  assert.deepEqual(validation.visiblePromotionWithoutPublicReleaseKeys, []);
  assert.deepEqual(validation.previewPromotionWithoutPreviewReleaseKeys, []);
  assert.deepEqual(applicationSystemTopicPromotions, [
    {
      systemId: "water-control-valve-flow-control",
      applicationId: "water-control",
      locale: "en",
      status: "preview",
      placement: "engineering-topics",
      order: 1,
    },
  ]);

  const sitemapSource = readProjectFile("src/app/sitemap.ts");
  const waterPageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  assert.doesNotMatch(sitemapSource, /systemTopicReleases|valve-flow-control/);
  assert.match(waterPageSource, /resolveApplicationSystemTopicReferences/);
});

test("resolves the Water Control relation in development and fails closed elsewhere", () => {
  const waterControl = getApplicationBySlug("water-control");
  const developmentEnvironment = { NODE_ENV: "development" };
  const productionEnvironment = {
    NODE_ENV: "production",
    VERCEL_ENV: "production",
  };

  assert.ok(waterControl);
  assert.deepEqual(
    resolveApplicationSystemTopicReferences(
      waterControl,
      "en",
      developmentEnvironment,
    ),
    [
      {
        systemId: "water-control-valve-flow-control",
        href: "/applications/water-control/valve-flow-control",
        title: "Valve Flow Control",
        releaseStatus: "preview",
        partExamples: [
          {
            id: "valve-spool-assembly",
            label: "Valve Spool Assembly",
          },
          {
            id: "thermostatic-valve-body",
            label: "Thermostatic Valve Body",
          },
          {
            id: "valve-housing-component",
            label: "Valve Housing Component",
          },
        ],
      },
    ],
  );
  assert.deepEqual(
    resolveApplicationSystemTopicReferences(
      waterControl,
      "en",
      productionEnvironment,
    ),
    [],
  );
  assert.deepEqual(
    resolveApplicationSystemTopicReferences(
      waterControl,
      "zh-CN",
      developmentEnvironment,
    ),
    [],
  );

  for (const application of applications.filter(
    (candidate) => candidate.slug !== "water-control",
  )) {
    assert.deepEqual(
      resolveApplicationSystemTopicReferences(
        application,
        "en",
        developmentEnvironment,
      ),
      [],
    );
  }

  assert.deepEqual(
    resolveApplicationSystemTopicReferences(
      {
        ...waterControl,
        parts: waterControl.parts.filter(
          (part) => part.id !== "valve-spool-assembly",
        ),
      },
      "en",
      developmentEnvironment,
    ),
    [],
  );
});

test("reuses the existing related-solution presentation and leaves Home unchanged", () => {
  const applicationPageSource = readProjectFile(
    "src/components/localized/LocalizedApplicationDetailPage.tsx",
  );
  const applicationsCssSource = readProjectFile(
    "src/app/(en)/styles/applications.css",
  );
  const homeSource = readProjectFile(
    "src/components/TaskFirstHomeNarrative.tsx",
  );

  assert.match(applicationPageSource, /function ApplicationRelatedSolutions/);
  assert.match(applicationPageSource, /items=\{componentSolutionItems\}/);
  assert.match(applicationPageSource, /items=\{systemTopicItems\}/);
  assert.match(applicationPageSource, /application-component-guides/);
  assert.doesNotMatch(
    applicationPageSource,
    /Explore by Engineering System|Explore by Component Family/,
  );
  assert.doesNotMatch(applicationsCssSource, /application-system-topic-/);

  for (const componentSlug of [
    "precision-plastic-gears",
    "bushings-and-sleeves",
    "conveyor-chain-components",
    "valve-spools-and-cartridges",
    "textile-guide-components",
    "ic-handling-trays",
  ]) {
    assert.match(homeSource, new RegExp(`/components/${componentSlug}`));
  }
  assert.match(homeSource, /localizedHref\("\/components"\)/);
  assert.doesNotMatch(homeSource, /valve-flow-control|systemTopicReleases/);
});

test("hard-gates the preview route and emits no public SEO contract", () => {
  const routeSource = readProjectFile(
    "src/app/(en)/applications/water-control/[topic]/page.tsx",
  );

  assert.match(routeSource, /export const dynamicParams = false/);
  assert.match(routeSource, /getEnglishSystemTopicStaticParams/);
  assert.match(routeSource, /resolveEnglishSystemTopicRoute/);
  assert.match(routeSource, /notFound\(\)/);
  assert.match(routeSource, /index: false/);
  assert.match(routeSource, /follow: false/);
  assert.match(routeSource, /alternates: null/);
  assert.match(routeSource, /openGraph: null/);
  assert.doesNotMatch(
    routeSource,
    /createPageMetadata|getLanguageAlternates|canonical\s*:|JsonLd/,
  );
});

test("keeps the first preview grade-neutral and representative-only", () => {
  const pageSource = readProjectFile(
    "src/app/(en)/applications/water-control/[topic]/ValveFlowControlTopicPage.tsx",
  );
  const topicSource = readProjectFile("src/data/systemTopics.ts");
  const exactGradePattern =
    /\b(?:ETM450|EDM-111|EPAF100A|EGH202H|EGH302H|EGB25)\b/;

  assert.doesNotMatch(pageSource, exactGradePattern);
  assert.doesNotMatch(topicSource, exactGradePattern);
  assert.doesNotMatch(pageSource, /guide-wheel/);
  assert.match(pageSource, /Find Grade Data &amp; TDS/);
  assert.match(pageSource, /Discuss Your Application/);
  assert.match(pageSource, /Valve Spools & Cartridges/);
});

test("rejects public exposure for a draft Topic and preview SEO leakage", () => {
  const publicRelease = {
    ...release,
    localeReleases: [
      {
        ...englishRelease,
        status: "public",
        indexable: true,
        includeInSitemap: true,
        includeInAlternates: true,
      },
    ],
  };
  const leakingPreview = {
    ...release,
    localeReleases: [
      {
        ...englishRelease,
        includeInSitemap: true,
      },
    ],
  };

  assert.equal(
    resolveEnglishSystemTopicRoute(
      "valve-flow-control",
      { NODE_ENV: "production", VERCEL_ENV: "production" },
      [publicRelease],
    ),
    undefined,
  );
  assert.deepEqual(
    validateSystemTopicReleases([publicRelease]).unreviewedPublicTopicKeys,
    ["water-control-valve-flow-control::en"],
  );
  assert.deepEqual(
    validateSystemTopicReleases([leakingPreview]).previewPublicSurfaceKeys,
    ["water-control-valve-flow-control::en"],
  );
});
