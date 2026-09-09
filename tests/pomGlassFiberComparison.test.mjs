import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import {
  getPomGlassFiberComparison,
  pomGlassFiberMetrics,
  pomPropertyLabels,
} from "../src/lib/pomGlassFiberComparison.ts";

const directory = new URL("../content/catalog/products/pom/", import.meta.url);
const records = readdirSync(directory)
  .filter((name) => name.endsWith("-glass-fiber-pom.json"))
  .map((name) => JSON.parse(readFileSync(new URL(name, directory), "utf8")));

test("structured glass fiber percentages retain every catalog grade and agree with its reviewed source", () => {
  const rows = getPomGlassFiberComparison(records);
  assert.equal(rows.length, 10);
  for (const [index, row] of rows.entries()) {
    assert.equal(
      row.glassFiberContent,
      Number(row.features[0].match(/^(\d+)% glass fiber content$/)[1]),
    );
    assert.ok(
      index === 0 || rows[index - 1].glassFiberContent <= row.glassFiberContent,
    );
    for (const metric of pomGlassFiberMetrics) {
      const property = row.properties.find(
        (item) => item.label === metric.source,
      );
      assert.ok(
        property?.value && property.unit && property.method,
        `${row.grade}: ${metric.source}`,
      );
    }
    for (const property of row.properties) {
      assert.ok(
        pomPropertyLabels[property.label],
        `Missing Chinese label: ${property.label}`,
      );
    }
  }
});

test("comparison preserves source values, units, methods and document state without modifying the input", () => {
  const input = structuredClone(records).reverse();
  const before = structuredClone(input);
  const rows = getPomGlassFiberComparison(input);
  assert.deepEqual(input, before);
  for (const row of rows) {
    const source = input.find((item) => item.slug === row.slug);
    assert.deepEqual(row.properties, source.properties);
    assert.deepEqual(row.tds, source.tds);
  }
});

test("a missing structured percentage fails instead of guessing from a grade name or translated feature", () => {
  const record = { ...records[0] };
  delete record.glassFiberContent;
  assert.throws(
    () => getPomGlassFiberComparison([record]),
    /Missing glass fiber content/,
  );
});
