import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { normalizeTechnicalDataQuery } from "../src/lib/technicalDataQueryVocabulary.ts";
import {
  zhTechnicalDataSearchMessages,
  zhTechnicalDataSearchVocabulary,
} from "../src/i18n/technicalDataSearchMessages.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const catalog = JSON.parse(readProjectFile("src/generated/catalog.json"));

test("keeps one canonical catalogue behind the 115-grade progressive browse", () => {
  const pom = catalog.filter((record) => record.kind === "product");
  const engineering = catalog.filter(
    (record) => record.kind === "engineering-tds",
  );
  const conductive = catalog.filter(
    (record) => record.kind === "conductive-entry",
  );
  const browseRecords = [...pom, ...engineering];
  const counts = Object.fromEntries(
    ["POM", "PA6", "PA66", "PPA"].map((family) => [
      family,
      browseRecords.filter((record) =>
        family === "POM"
          ? record.kind === "product"
          : record.family === family,
      ).length,
    ]),
  );

  assert.deepEqual(counts, { POM: 40, PA6: 33, PA66: 37, PPA: 5 });
  assert.equal(browseRecords.length, 115);
  assert.equal(new Set(browseRecords.map((record) => record.slug)).size, 115);
  assert.equal(conductive.length, 78);
  assert.equal(
    conductive.some((record) => "slug" in record),
    false,
    "conductive directory entries must not be invented as grade-detail routes",
  );
});

test("maps localized Chinese intent vocabulary to canonical search terms", () => {
  const cases = {
    耐磨: "wear",
    低摩擦: "low friction",
    玻纤增强: "glass fiber",
    导电: "conductive",
    抗静电: "antistatic",
    齿轮: "gear",
    水路阀: "valve",
  };

  for (const [query, expected] of Object.entries(cases)) {
    assert.equal(
      normalizeTechnicalDataQuery(query, zhTechnicalDataSearchVocabulary),
      expected,
    );
  }

  assert.equal(
    normalizeTechnicalDataQuery("ETM450", zhTechnicalDataSearchVocabulary),
    "ETM450",
  );
  assert.equal(
    normalizeTechnicalDataQuery("耐磨 齿轮", zhTechnicalDataSearchVocabulary),
    "wear gear",
  );
});

test("treats catalogue document state as registration evidence, not nonexistence", () => {
  const gradeRecords = catalog.filter(
    (record) => record.kind === "product" || record.kind === "engineering-tds",
  );
  const registeredPdfRecords = gradeRecords.filter(
    (record) => record.tds?.status === "pdf" && record.tds.pdfPath,
  );
  const componentSource = readProjectFile(
    "src/components/localized/LocalizedTechnicalDataSearchPage.tsx",
  );
  const messageSource = readProjectFile(
    "src/i18n/technicalDataSearchMessages.ts",
  );
  const englishRouteSource = readProjectFile(
    "src/app/(en)/technical-data-sheets/page.tsx",
  );

  assert.equal(registeredPdfRecords.length, 0);
  assert.equal(
    zhTechnicalDataSearchMessages.contentTypes.some(
      (option) => option.value === "tds" || /pdf/i.test(option.label),
    ),
    false,
  );
  assert.doesNotMatch(componentSource, /无\s*TDS|TDS\s*不存在|No TDS available/i);
  assert.doesNotMatch(messageSource, /无\s*TDS|TDS\s*不存在|No TDS available/i);
  assert.doesNotMatch(
    englishRouteSource,
    /label:\s*"Technical Data Sheets",\s*value:\s*"tds"/,
  );
  assert.doesNotMatch(
    englishRouteSource,
    /label:\s*"TDS",\s*href:\s*"\/technical-data-sheets\?resource=tds"/,
  );
  assert.doesNotMatch(englishRouteSource, /Documents:\s*\{product\.documents/);
  assert.match(
    englishRouteSource,
    /Grade data available; request current technical documents for the project/,
  );
  assert.match(messageSource, /技术资料请按项目确认/);
  assert.match(componentSource, /申请技术资料并说明应用条件/);
});

test("limits the shared-search rollout to English regression and the ZH pilot", () => {
  const englishRoute = readProjectFile(
    "src/app/(en)/technical-data-sheets/page.tsx",
  );
  const localizedRoute = readProjectFile(
    "src/app/[locale]/technical-data-sheets/page.tsx",
  );
  const localizedSearch = readProjectFile(
    "src/components/localized/LocalizedTechnicalDataSearchPage.tsx",
  );

  assert.match(englishRoute, /selectTechnicalDataSearch\(\{ params \}\)/);
  assert.match(localizedRoute, /localeConfig\.urlSegment === "zh"/);
  assert.match(localizedRoute, /<LocalizedTechnicalDataPage/);
  assert.match(localizedSearch, /technicalDataGradeBrowseGroups\.map/);
  assert.match(
    localizedSearch,
    /\/products\/conductive-antistatic-compounds#grade-explorer/,
  );
  assert.match(localizedSearch, /suggestedBoundary/);
  assert.match(
    zhTechnicalDataSearchMessages.suggestedBoundary,
    /不代表等同、直接替代/,
  );
});

test("preserves the frozen English rendered-result fixture set", () => {
  const baseline = JSON.parse(
    readProjectFile(
      "tests/fixtures/technical-data-search/en-selector-baseline.json",
    ),
  );

  assert.equal(baseline.fixtures.length, 9);
  assert.deepEqual(
    baseline.fixtures.map((fixture) => fixture.count),
    [0, 1, 44, 37, 48, 12, 2, 1, 0],
  );
  assert.equal(
    baseline.untouchedLocalizedBaselines.every(
      (entry) => entry.gradeLinks === 40,
    ),
    true,
  );
});
