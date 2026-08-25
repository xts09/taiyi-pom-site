import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { systemTopics } from "../src/data/systemTopics.ts";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const readProjectFile = (path) =>
  readFileSync(resolve(projectRoot, path), "utf8");
const pageSource = readProjectFile(
  "src/app/(en)/applications/water-control/[topic]/ValveFlowControlTopicPage.tsx",
);
const valveTopic = systemTopics[0];

test("keeps the compact System Topic centered on unique system evidence", () => {
  assert.equal(valveTopic.systemBoundaryRoles.length, 4);
  assert.equal(valveTopic.representativePartContexts.length, 3);
  assert.equal(valveTopic.requirementAllocations.length, 4);
  assert.equal(valveTopic.materialDirections.length, 3);
  assert.equal(valveTopic.validationConsiderations.length, 4);

  assert.equal((pageSource.match(/<section\b/g) ?? []).length, 4);
  assert.match(pageSource, /<ActionPanel/);
  assert.match(pageSource, /id="requirement-allocation"/);
  assert.match(pageSource, /Allocate each duty across interacting Parts/);
  assert.match(pageSource, /Validate the finished valve/);
});

test("removes repeated journey framing without deleting distinct actions", () => {
  assert.equal((pageSource.match(/Discuss Your Application/g) ?? []).length, 1);
  assert.equal((pageSource.match(/Find Grade Data &amp; TDS/g) ?? []).length, 1);
  assert.doesNotMatch(
    pageSource,
    /Back to Water Control|styles\.flow|relatedPaths|Material Selection Guide|Alternative POM Grade Validation/,
  );

  assert.match(pageSource, /Valve Spools & Cartridges/);
  assert.match(pageSource, /Open component guide/);
  assert.match(pageSource, /\/components\/valve-spools-and-cartridges/);
  assert.match(pageSource, /\/technical-data-sheets/);
  assert.match(pageSource, /\/contact/);
});

test("keeps the preview grade-neutral and representative-only after compaction", () => {
  const exactGradePattern =
    /\b(?:ETM450|EDM-111|EPAF100A|EGH202H|EGH302H|EGB25)\b/;

  assert.doesNotMatch(pageSource, exactGradePattern);
  assert.doesNotMatch(JSON.stringify(valveTopic), exactGradePattern);
  assert.doesNotMatch(pageSource, /guide-wheel/);
  assert.deepEqual(valveTopic.representativePartIds, [
    "valve-spool-assembly",
    "thermostatic-valve-body",
    "valve-housing-component",
  ]);
});
