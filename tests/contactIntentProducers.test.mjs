import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { extname, resolve } from "node:path";
import test from "node:test";

const projectRoot = resolve(import.meta.dirname, "..");
const canonicalContactIntents = new Set([
  "sample",
  "tds",
  "grade-evaluation",
  "quote-supply",
]);
const producerRoots = ["src/app", "src/components", "src/data"];

const collectSourceFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);

    if (entry.isDirectory()) return collectSourceFiles(path);
    return [".ts", ".tsx"].includes(extname(entry.name)) ? [path] : [];
  });

const readSource = (path) => readFileSync(resolve(projectRoot, path), "utf8");

const extractContactCalls = (source) =>
  [...source.matchAll(/createContactHref\(\s*\{([\s\S]*?)\}\s*(?:,\s*[^)]*)?\)/g)].map(
    (match) => ({
      body: match[1],
      intent: match[1].match(/\bintent\s*:\s*["']([^"']+)["']/)?.[1],
      source: match[1].match(/\bsource\s*:\s*["']([^"']+)["']/)?.[1],
    }),
  );

test("production Contact producers only emit canonical literal intents", () => {
  const sourceFiles = producerRoots.flatMap((path) =>
    collectSourceFiles(resolve(projectRoot, path)),
  );
  const violations = [];

  for (const path of sourceFiles) {
    const source = readFileSync(path, "utf8");

    if (source.includes("createContactHref")) {
      for (const match of source.matchAll(/\bintent\s*:\s*["']([^"']+)["']/g)) {
        if (!canonicalContactIntents.has(match[1])) {
          violations.push(`${path}: ${match[1]}`);
        }
      }
    }

    for (const match of source.matchAll(/[?&]intent=([a-z0-9-]+)/gi)) {
      if (!canonicalContactIntents.has(match[1])) {
        violations.push(`${path}: ${match[1]}`);
      }
    }
  }

  assert.deepEqual(violations, []);
});

test("the inbound parser allowlist remains the four canonical intents", () => {
  const source = readSource("src/lib/contactContext.ts");
  const allowlist = source.match(
    /const allowedIntents = new Set<ContactIntent>\(\[([\s\S]*?)\]\);/,
  )?.[1];

  assert.ok(allowlist, "missing Contact intent allowlist");
  assert.deepEqual(
    [...allowlist.matchAll(/["']([^"']+)["']/g)]
      .map((match) => match[1])
      .sort(),
    [...canonicalContactIntents].sort(),
  );
});

test("retired unsupported intents stay out of production producers", () => {
  const productionSource = producerRoots
    .flatMap((path) => collectSourceFiles(resolve(projectRoot, path)))
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");

  assert.doesNotMatch(productionSource, /manufacturing-review|material-requirement/);
});

test("About keeps manufacturing specific and broad material handoffs distinct", () => {
  for (const path of [
    "src/app/(en)/about/AboutSections.tsx",
    "src/components/localized/LocalizedAboutPage.tsx",
  ]) {
    const aboutCalls = extractContactCalls(readSource(path)).filter(
      (call) => call.source === "about",
    );

    assert.equal(aboutCalls.length, 2, path);
    assert.deepEqual(
      aboutCalls.map((call) => call.intent),
      ["quote-supply", undefined],
      path,
    );
  }
});

test("localized Technical Data document handoffs all use the TDS intent", () => {
  const calls = extractContactCalls(
    readSource("src/components/localized/LocalizedTechnicalDataPage.tsx"),
  );

  assert.equal(calls.length, 2);
  assert.deepEqual(calls.map((call) => call.intent), ["tds", "tds"]);
});

test("English Technical Data keeps its independent search interaction model", () => {
  const source = readSource("src/app/(en)/technical-data-sheets/page.tsx");

  assert.doesNotMatch(source, /createContactHref|[?&]intent=/);
});

test("the shared Contact form submits the selected canonical intent", () => {
  const source = readSource("src/components/ContactInquiryForm.tsx");

  assert.match(source, /<Select\s+name="intent"/);
  assert.match(source, /intent:\s*readField\(formData,\s*"intent",\s*""\)/);
});
