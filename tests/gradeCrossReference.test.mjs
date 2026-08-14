import assert from "node:assert/strict";
import test from "node:test";

import {
  crossReferenceCandidateGrades,
  findGradeCrossReference,
  gradeCrossReferences,
  normalizeReferenceGrade,
  searchGradeCrossReferences,
} from "../src/data/gradeCrossReferences.ts";

test("normalizes trademarks, spacing, punctuation, and case", () => {
  assert.equal(normalizeReferenceGrade(" DURACON® M90-44 "), "duraconm9044");
  assert.equal(normalizeReferenceGrade("m 90 44"), "m9044");
});

test("recognizes M90-44 and returns the reviewed XT-100 direction", () => {
  const match = findGradeCrossReference("M90-44");

  assert.equal(match?.record.id, "duracon-m90-44");
  assert.equal(match?.record.reference.displayName, "DURACON® M90-44");
  assert.deepEqual(match?.record.candidateGrades, ["XT-100"]);
  assert.equal(match?.score, 100);
});

test("recognizes a grade inside a natural-language lookup", () => {
  const match = findGradeCrossReference("candidate alternative to m90-44");

  assert.equal(match?.record.id, "duracon-m90-44");
  assert.equal(match?.score, 80);
});

test("supports aliases and returns no result for an unknown grade", () => {
  assert.equal(findGradeCrossReference("GH25")?.record.id, "polyplastics-gh-25");
  assert.equal(findGradeCrossReference("Celanese S9364")?.record.id, "hostaform-s9364");
  assert.deepEqual(searchGradeCrossReferences("unknown-123"), []);
});

test("the first seed contains eleven reference records and ten Taiyi grades", () => {
  assert.equal(gradeCrossReferences.length, 11);
  assert.equal(crossReferenceCandidateGrades.length, 10);
  assert.deepEqual(
    [...crossReferenceCandidateGrades].sort(),
    [
      "ECN1003B",
      "EDR180",
      "EGB25",
      "EGH502H",
      "EHI402T",
      "EPAF100A",
      "ETM090U",
      "ETM450",
      "ETM750",
      "XT-100",
    ],
  );
});

test("public screening language avoids equivalence and direct-replacement claims", () => {
  const publicCopy = gradeCrossReferences
    .flatMap((record) => [
      record.publicPosition,
      ...record.matchBasis,
      ...record.requiredChecks,
    ])
    .join(" ");

  assert.doesNotMatch(publicCopy, /\bequivalent\b|direct replacement/i);
  assert.ok(
    gradeCrossReferences.every(
      (record) => record.source.relationshipStatus === "screening-seed",
    ),
  );
});
