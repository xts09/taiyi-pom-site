import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/conversionEvents.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function eventHarness(initialConsent = "granted") {
  let consent = initialConsent;
  const events = [];
  const exports = {};
  const window = {
    location: {
      pathname: "/zh/contact",
      href: "https://example.invalid/zh/contact?email=private@example.invalid#inquiry?grade=PRIVATE-GRADE",
    },
    gtag: (...args) => events.push(JSON.parse(JSON.stringify(args))),
  };
  const mocks = {
    "@/lib/googleTracking": { googleAdsId: "AW-test", googleAdsLeadConversionLabel: "test-lead" },
    "@/lib/googleConsent": { readGoogleAnalyticsConsent: () => consent },
    "@/lib/analyticsAttribution": {
      readMarketingAttribution: () => ({ lastTouch: { source: "private-attribution" } }),
    },
  };
  vm.runInNewContext(compiled, { exports, window, require: (name) => {
    assert.ok(Object.hasOwn(mocks, name), `Unexpected dependency ${name}`);
    return mocks[name];
  } });
  return { api: exports, events, setConsent: (value) => { consent = value; } };
}

test("funnel diagnostics transmit only route, fixed form and coarse failure reason", () => {
  const { api, events } = eventHarness();
  api.trackInquiryEntry("footer");
  api.trackInquiryFunnel("view");
  api.trackInquiryFunnel("attempt");
  api.trackInquiryFunnel("error", "timeout");
  assert.deepEqual(events, [
    ["event", "inquiry_entry", { link_context: "footer", page_path: "/zh/contact" }],
    ["event", "inquiry_view", { form_name: "material_requirement", page_path: "/zh/contact" }],
    ["event", "inquiry_attempt", { form_name: "material_requirement", page_path: "/zh/contact" }],
    ["event", "inquiry_error", { form_name: "material_requirement", page_path: "/zh/contact", error_reason: "timeout" }],
  ]);
  assert.ok(!JSON.stringify(events).includes("private"));
  assert.ok(!JSON.stringify(events).includes("PRIVATE-GRADE"));
});

test("new diagnostics stop when consent is undecided, denied or withdrawn", () => {
  const { api, events, setConsent } = eventHarness(null);
  for (const consent of [null, "denied", "granted", "denied"]) {
    setConsent(consent);
    api.trackInquiryEntry("page");
    assert.equal(api.trackInquiryFunnel("view"), consent === "granted");
  }
  assert.equal(events.length, 2);
});

test("diagnostics and email fallback never emit primary lead or Ads conversion", () => {
  const { api, events } = eventHarness();
  api.trackInquiryFunnel("attempt");
  api.trackInquiryFunnel("error", "delivery_unavailable");
  api.trackInquiryFallback("mailto_draft");
  assert.deepEqual(events.map((event) => event[1]), ["inquiry_attempt", "inquiry_error", "contact_fallback"]);

  api.trackInquirySubmitted("server_email");
  assert.deepEqual(events.slice(-2).map((event) => event[1]), ["generate_lead", "conversion"]);
});
