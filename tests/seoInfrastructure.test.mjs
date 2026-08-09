import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { serializeJsonLd } from "../src/lib/jsonLd.ts";

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
  const layoutSource = readFileSync(resolve(projectRoot, "src/app/layout.tsx"), "utf8");
  const seoSource = readFileSync(resolve(projectRoot, "src/lib/seo.ts"), "utf8");

  assert.doesNotMatch(layoutSource, /^\s*keywords:\s*\[/m);
  assert.doesNotMatch(seoSource, /"@type":\s*"SearchAction"/);
  assert.doesNotMatch(seoSource, /makesOffer:\s*\[\s*"/s);
  assert.match(seoSource, /^\s*knowsAbout:\s*\[/m);
});
