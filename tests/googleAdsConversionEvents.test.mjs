import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const compile = (path) => ts.transpileModule(
  readFileSync(new URL(path, import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const trackingSource = compile("../src/lib/googleTracking.ts");
const eventsSource = compile("../src/lib/conversionEvents.ts");
const conversionTarget = "AW-18381447688/VBrBCNWr3qEdEIjE-rxE";

function fixture({ env = {}, consent = "granted", advertising = consent, hasGtag = true } = {}) {
  const tracking = {};
  vm.runInNewContext(trackingSource, {
    exports: tracking,
    process: { env: { NODE_ENV: "production", ...env } },
  });
  const events = [];
  const window = { location: { pathname: "/contact" } };
  if (hasGtag) {
    window.gtag = (...args) => events.push(JSON.parse(JSON.stringify(args)));
  }
  const mocks = {
    "@/lib/googleTracking": tracking,
    "@/lib/googleConsent": { readGoogleAnalyticsConsent: () => consent, readGoogleAdvertisingConsent: () => advertising },
    "@/lib/analyticsAttribution": {
      readMarketingAttribution: () => ({
        lastTouch: {
          source: "google", medium: "cpc", campaign: "pom",
          clickIdType: "gclid", clickId: "private-click-id",
          email: "private@example.invalid", company: "Private inquiry company",
          message: "Private inquiry contents",
        },
      }),
    },
  };
  const api = {};
  vm.runInNewContext(eventsSource, {
    exports: api,
    window,
    require: (name) => {
      assert.ok(name in mocks, `Unexpected import: ${name}`);
      return mocks[name];
    },
  });
  return { api, events };
}

test("one confirmed production inquiry emits one Ads conversion to the exact target without private data", () => {
  const { api, events } = fixture();
  api.trackInquirySubmitted("server_email");
  assert.deepEqual(events.map((event) => event[1]), ["generate_lead", "conversion"]);
  assert.deepEqual(events.filter((event) => event[1] === "conversion"), [
    ["event", "conversion", { send_to: conversionTarget }],
  ]);
  const serialized = JSON.stringify(events);
  for (const value of [
    "private-click-id", "private@example.invalid", "Private inquiry company",
    "Private inquiry contents",
  ]) {
    assert.ok(!serialized.includes(value), `${value} must not be sent`);
  }
});

for (const consent of ["denied", null]) {
  test(`${consent} consent emits no inquiry or Ads event`, () => {
    const { api, events } = fixture({ consent });
    api.trackInquirySubmitted("server_email");
    api.trackInquiryFormMail();
    assert.deepEqual(events, []);
  });
}

test("an unavailable gtag does not throw or emit an Ads event", () => {
  const { api, events } = fixture({ hasGtag: false });
  assert.doesNotThrow(() => api.trackInquirySubmitted("server_email"));
  assert.doesNotThrow(() => api.trackInquiryFormMail());
  assert.deepEqual(events, []);
});

test("an explicit empty label preserves the analytics lead but disables the Ads conversion", () => {
  const { api, events } = fixture({ env: { NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL: "" } });
  api.trackInquirySubmitted("server_email");
  assert.deepEqual(events.map((event) => event[1]), ["generate_lead"]);
});

for (const nodeEnv of ["development", "test"]) {
  test(`${nodeEnv} never emits production Ads events even with an explicit label`, () => {
    const { api, events } = fixture({
      env: { NODE_ENV: nodeEnv, NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL: "explicit-label" },
    });
    api.trackInquirySubmitted("server_email");
    api.trackInquiryFormMail();
    assert.deepEqual(events, []);
  });
}

test("a form_mail attempt targets Ads without reporting a delivered conversion", () => {
  const { api, events } = fixture();
  api.trackInquiryFormMail();
  assert.deepEqual(events, [["event", "form_mail", { send_to: "AW-18381447688" }]]);
});

test("an inquiry error or email draft fallback never emits the Ads lead conversion", () => {
  const { api, events } = fixture();
  api.trackInquiryFunnel("error", "delivery_rejected");
  api.trackInquiryFallback("mailto_draft");
  assert.deepEqual(events.map((event) => event[1]), ["inquiry_error", "contact_fallback"]);
});

for (const [analytics, advertising, expected] of [
  ["denied", "denied", []],
  ["granted", "denied", ["generate_lead"]],
  ["denied", "granted", ["conversion"]],
  ["granted", "granted", ["generate_lead", "conversion"]],
]) {
  test(`confirmed submission respects independent permissions ${analytics}/${advertising}`, () => {
    const { api, events } = fixture({ consent: analytics, advertising });
    api.trackInquirySubmitted("server_email");
    assert.deepEqual(events.map(event => event[1]), expected);
    if (analytics === "granted") assert.equal(events[0][2].send_to, "G-CQ8CYP39VN");
  });
}
