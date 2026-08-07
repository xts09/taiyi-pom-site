import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

import { matchesTechnicalQuery } from "../src/lib/mfiSearch.ts";

const require = createRequire(import.meta.url);
const catalog = require("../src/generated/catalog.json");
const conductiveEntries = catalog.filter(
  (record) => record.kind === "conductive-entry",
);

test("the generated catalog exposes every conductive directory entry", () => {
  assert.equal(conductiveEntries.length, 78);
  assert.ok(
    conductiveEntries.some((record) => record.grade === "POM-CNT-R610"),
  );
});

test("matches conductive grades by grade, matrix, and technology wording", () => {
  const record = conductiveEntries.find(
    (entry) => entry.grade === "POM-CNT-R610",
  );

  assert.ok(record);

  const target = {
    fields: [
      record.grade,
      record.matrix,
      "CNT Antistatic",
      record.rangeLabel,
      "conductive antistatic static control charge control grade data",
    ],
  };

  assert.equal(matchesTechnicalQuery("POM-CNT-R610", target), true);
  assert.equal(matchesTechnicalQuery("pom antistatic", target), true);
  assert.equal(matchesTechnicalQuery("PA6", target), false);
});

test("keeps MFI comparisons limited to records with MFI data", () => {
  assert.equal(
    matchesTechnicalQuery("MFI >= 100", {
      fields: ["ETM150 high-flow POM"],
      mfi: "150 g/10 min",
    }),
    true,
  );
  assert.equal(
    matchesTechnicalQuery("MFI = 100", {
      fields: ["ETM150 high-flow POM"],
      mfi: "150 g/10 min",
    }),
    false,
  );
  assert.equal(
    matchesTechnicalQuery("MFI >= 100", {
      fields: ["POM-CNT-R610 conductive POM"],
    }),
    false,
  );
});
