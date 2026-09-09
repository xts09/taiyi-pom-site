import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { caseApplicationCategories, caseReadingGuides, caseStudyDiscovery } from "../src/data/caseStudyDiscovery.ts";
import { caseStudyPlacementIds, getRelatedCaseStudies } from "../src/data/caseStudies.ts";
import { glassFiberCaseStudies } from "../src/data/glassFiberCaseStudies.ts";
import { gearEnduranceTest } from "../src/data/gearEnduranceEvidence.ts";
import { getSitemapLanguageOptions } from "../src/i18n/releaseManifest.ts";

test("all published cases have one application category and the expected coverage", () => {
  const ids = [gearEnduranceTest.id, ...glassFiberCaseStudies.map(study => study.id)];
  assert.deepEqual(Object.keys(caseStudyDiscovery).sort(), ids.sort());
  const counts = Object.fromEntries(caseApplicationCategories.map(category => [category.id, 0]));
  for (const entry of Object.values(caseStudyDiscovery)) {
    assert.ok(entry.category in counts);
    counts[entry.category]++;
    for (const language of ["en", "zh"]) assert.ok(entry.summary[language] && entry.topic[language]);
  }
  assert.deepEqual(counts, { automotive: 3, appliances: 3, "pumps-valves": 3, conveying: 1, energy: 1 });
});

test("related reading has two distinct real articles released in both case languages", () => {
  const resourceSource = readFileSync(new URL("../src/data/resources.ts", import.meta.url), "utf8");
  const resourceSlugs = new Set([...resourceSource.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]));
  for (const entry of Object.values(caseStudyDiscovery)) {
    assert.equal(entry.articles.length, 2);
    assert.equal(new Set(entry.articles).size, 2);
    for (const key of entry.articles) {
      const guide = caseReadingGuides[key];
      assert.ok(resourceSlugs.has(guide.slug), guide.slug);
      assert.ok(guide.reason.en && guide.reason.zh);
      const routes = getSitemapLanguageOptions(`/resources/${guide.slug}`).map(option => option.href);
      assert.ok(routes.includes(`/resources/${guide.slug}`));
      assert.ok(routes.includes(`/zh/resources/${guide.slug}`));
    }
  }
  assert.deepEqual(caseStudyDiscovery[gearEnduranceTest.id].articles, ["gear", "wear"]);
  assert.ok(caseStudyDiscovery["gf-case-04"].articles.includes("processing"));
});

test("glass fiber case links use existing exact grades", () => {
  for (const study of glassFiberCaseStudies) {
    const record = JSON.parse(readFileSync(new URL(`../content/catalog/products/pom/${study.grade.toLowerCase()}-glass-fiber-pom.json`, import.meta.url), "utf8"));
    assert.equal(record.grade, study.grade);
    assert.equal(record.slug, `${study.grade.toLowerCase()}-glass-fiber-pom`);
  }
});

test("case placements create grade and contextual backlinks without unpublished locales", () => {
  const publishedIds = new Set(Object.keys(caseStudyDiscovery));
  const contextualIds = new Set();

  for (const [path, ids] of Object.entries(caseStudyPlacementIds)) {
    assert.match(path, /^\/(products\/categories|applications|components)\//);
    assert.equal(new Set(ids).size, ids.length, path);
    for (const id of ids) {
      assert.ok(publishedIds.has(id), `${path}: ${id}`);
      if (path.startsWith("/applications/") || path.startsWith("/components/")) {
        contextualIds.add(id);
      }
    }
  }

  for (const study of glassFiberCaseStudies) {
    assert.ok(contextualIds.has(study.id), study.id);
  }

  assert.deepEqual(
    getRelatedCaseStudies({ grade: "EGH402H" }).map((study) => study.id),
    ["gf-case-01", "gf-case-09"],
  );
  assert.deepEqual(
    getRelatedCaseStudies({ sourcePath: "/applications/automotive", localeSegment: "zh" }).map((study) => study.id),
    ["gf-case-01", "gf-case-02", "gf-case-04"],
  );
  assert.deepEqual(
    getRelatedCaseStudies({ sourcePath: "/applications/automotive", localeSegment: "de" }),
    [],
  );
});
