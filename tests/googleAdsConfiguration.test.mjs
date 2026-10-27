import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const compiled = ts.transpileModule(
  readFileSync(new URL("../src/lib/googleTracking.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const nextConfigSource = readFileSync(
  new URL("../next.config.ts", import.meta.url),
  "utf8",
);
const compiledNextConfig = ts.transpileModule(nextConfigSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

async function productionCsp() {
  const exports = {};
  vm.runInNewContext(compiledNextConfig, {
    exports,
    process: { env: { NODE_ENV: "production" } },
    require: (id) => {
      assert.equal(id, "next-intl/plugin");
      return { default: () => (config) => config };
    },
  });
  const routes = await exports.default.headers();
  const header = routes.find((route) => route.source === "/:path*").headers
    .find((header) => header.key === "Content-Security-Policy");
  return new Map(header.value.split("; ").map((directive) => {
    const [name, ...sources] = directive.split(" ");
    return [name, sources];
  }));
}

function configuration(env = {}) {
  const exports = {};
  vm.runInNewContext(compiled, { exports, process: { env: { NODE_ENV: "production", ...env } } });
  return exports;
}

test("the production Ads account defaults to the supplied lead conversion", () => {
  const config = configuration();
  assert.equal(config.googleAdsId, "AW-18381447688");
  assert.equal(config.googleAdsLeadConversionLabel, "VBrBCNWr3qEdEIjE-rxE");
  assert.equal(config.googleTagConfigIds.filter(id => id === config.googleAdsId).length, 1);
});

test("an explicit conversion label retains precedence over the default", () => {
  assert.equal(configuration({ NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL: "existing-label" }).googleAdsLeadConversionLabel, "existing-label");
});

test("an explicit empty label disables the default conversion", () => {
  assert.equal(configuration({ NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL: "" }).googleAdsLeadConversionLabel, "");
});

test("another Ads account never inherits this account's conversion label", () => {
  assert.equal(configuration({ NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-OTHER" }).googleAdsLeadConversionLabel, "");
});

test("local development does not enable the production Ads defaults", () => {
  const config = configuration({ NODE_ENV: "development" });
  assert.equal(config.googleAdsId, "");
  assert.equal(config.googleAdsLeadConversionLabel, "");
});

test("production response headers allow Google Ads collection using fetch and beacon", async () => {
  const csp = await productionCsp();
  const connectSources = csp.get("connect-src");
  for (const endpoint of [
    "https://ad.doubleclick.net/ccm/s/collect",
    "https://www.googleadservices.com/ccm/conversion/18381447688/",
    "https://www.googletagmanager.com",
    "https://www.google.com/pagead/1p-conversion/18381447688/",
    "https://pagead2.googlesyndication.com",
  ]) {
    assert.ok(connectSources.includes(new URL(endpoint).origin), `${endpoint} must be allowed by connect-src`);
  }
  assert.ok(!connectSources.includes("*"));
  assert.ok(!connectSources.includes("https:"));
});

test("production response headers allow the Tag Assistant badge styles and fonts", async () => {
  const csp = await productionCsp();
  const styles = [
    "https://www.googletagmanager.com/debug/badge.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons+Extended|Google+Material+Icons",
    "https://fonts.googleapis.com/css?family=Product+Sans:400|Google+Sans:400,500",
  ];
  for (const asset of styles) {
    assert.ok(csp.get("style-src").includes(new URL(asset).origin), `${asset} must be allowed`);
  }
  assert.ok(csp.get("font-src").includes("https://fonts.gstatic.com"));
});

test("Tag Assistant support retains the existing production script and framing restrictions", async () => {
  const csp = await productionCsp();
  assert.deepEqual(Array.from(csp.get("default-src")), ["'self'"]);
  assert.deepEqual(Array.from(csp.get("object-src")), ["'none'"]);
  assert.deepEqual(Array.from(csp.get("frame-ancestors")), ["'none'"]);
  assert.ok(!csp.get("script-src").includes("'unsafe-eval'"));
  assert.ok(!csp.get("style-src").includes("https:"));
  assert.ok(!csp.get("font-src").includes("https:"));
});
