import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const compiled = ts.transpileModule(
  readFileSync(new URL("../src/lib/googleTracking.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

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
