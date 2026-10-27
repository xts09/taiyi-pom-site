import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const granted = { analytics: "granted", advertising: "granted" };
const denied = { analytics: "denied", advertising: "denied" };
const compile = (file, jsx = false) => ts.transpileModule(readFileSync(resolve(file), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, ...(jsx ? { jsx: ts.JsxEmit.ReactJSX } : {}) },
}).outputText;
const tagSource = compile("src/components/GoogleTag.tsx", true);
const consentSource = compile("src/lib/googleConsent.ts");

// Persistent refs, functional setters and rerendered effects exercise the real component.
function fixture({ preferences = granted, legacyAnalytics = null, hostname = "www.taiyipolymer.com", internal = false } = {}) {
  const ids = ["G-TEST", "AW-TEST"], commands = [], updates = [];
  const storage = new Map(internal ? [["internal", "1"]] : []);
  const window = {
    location: { href: `https://${hostname}/contact?email=private@example.invalid#private`, hostname, pathname: "/contact" },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) },
    gtag: (...args) => commands.push(JSON.parse(JSON.stringify(args))),
  };
  const states = [], effects = [], pending = [];
  let hook = 0, dirty = false;
  const react = {
    useState: initial => {
      const index = hook++;
      if (!(index in states)) states[index] = typeof initial === "function" ? initial() : initial;
      return [states[index], value => {
        const next = typeof value === "function" ? value(states[index]) : value;
        if (!Object.is(next, states[index])) dirty = true;
        states[index] = next;
      }];
    },
    useRef: initial => {
      const index = hook++;
      if (!(index in states)) states[index] = { current: initial };
      return states[index];
    },
    useEffect: (callback, deps) => {
      const index = hook++, previous = effects[index];
      if (!previous || deps.some((value, i) => !Object.is(value, previous.deps[i]))) {
        pending.push(() => { previous?.cleanup?.(); effects[index] = { deps, cleanup: callback() }; });
      }
    },
  };
  const jsx = (type, props) => ({ type, props });
  const mocks = {
    react,
    "react/jsx-runtime": { jsx, jsxs: jsx, Fragment: "fragment" },
    "next/script": { default: "script" },
    "@/lib/googleConsent": {
      clearGoogleAnalyticsCookies: () => {}, clearGoogleAdvertisingCookies: () => {},
      useGoogleAnalyticsConsent: () => preferences === "loading" ? "loading" : preferences?.analytics ?? legacyAnalytics,
      useGoogleAdvertisingConsent: () => preferences === "loading" ? "loading" : preferences?.advertising ?? "denied",
      updateGoogleConsentPreferences: value => { updates.push({ ...value }); },
    },
    "@/lib/googleInternalTraffic": {
      GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE: "1", GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER: "internal_traffic", GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY: "internal",
      resolveGoogleInternalTrafficDisabled: (_query, stored) => stored === "1",
    },
    "@/lib/googleTracking": { googleTagConfigIds: ids, googleAnalyticsId: ids[0], googleAdsId: ids[1], isGoogleTagHostnameAllowed: host => host === "www.taiyipolymer.com" },
    "@/lib/analyticsAttribution": { analyticsPageLocationParamNames: [] },
  };
  const fixtureModule = { exports: {} };
  vm.runInNewContext(tagSource, { window, URL, queueMicrotask: callback => callback(), exports: fixtureModule.exports, module: fixtureModule, require: name => {
    assert.ok(name in mocks, `Unexpected import: ${name}`);
    return mocks[name];
  } });
  const render = () => {
    let output;
    for (let pass = 0; pass < 12; pass++) {
      dirty = false; hook = 0;
      output = fixtureModule.exports.GoogleTag();
      for (const callback of pending.splice(0)) callback();
      if (!dirty) return output;
    }
    assert.fail("Consent fixture did not settle");
  };
  render();
  return { render, commands, updates, choose: value => { preferences = value; return render(); },
    disabled: () => ids.map(id => window[`ga-disable-${id}`]),
    configured: () => commands.filter(command => command[0] === "config").map(command => command[1]) };
}

for (const analytics of ["denied", "granted"]) for (const advertising of ["denied", "granted"]) {
  test(`tag destinations respect analytics=${analytics}, advertising=${advertising}`, () => {
    const f = fixture({ preferences: { analytics, advertising } });
    const expected = [...(analytics === "granted" ? ["G-TEST"] : []), ...(advertising === "granted" ? ["AW-TEST"] : [])];
    assert.deepEqual(f.disabled(), [analytics !== "granted", advertising !== "granted"]);
    assert.deepEqual(f.configured(), expected);
    assert.deepEqual(f.updates.at(-1), { analytics, advertising });
    const output = f.render();
    if (!expected.length) assert.equal(output, null);
    else assert.equal(new URL(output.props.src).searchParams.get("id"), expected[0]);
    for (const command of f.commands.filter(command => command[0] === "config")) {
      assert.equal(command[2].page_location, "https://www.taiyipolymer.com/contact");
      assert.equal(command[2].allow_google_signals, false);
      assert.equal(command[2].allow_ad_personalization_signals, false);
    }
    f.render(); f.render();
    assert.deepEqual(f.configured(), expected, "ordinary rerenders must not configure destinations twice");
  });
}

for (const preferences of [null, "loading"]) test(`startup ${preferences} keeps both destinations disabled`, () => {
  const f = fixture({ preferences });
  assert.deepEqual(f.disabled(), [true, true]);
  assert.deepEqual(f.configured(), []);
  assert.equal(f.render(), null);
});

test("legacy analytics permission enables only GA and never infers advertising permission", () => {
  const f = fixture({ preferences: null, legacyAnalytics: "granted" });
  assert.deepEqual(f.disabled(), [false, true]);
  assert.deepEqual(f.configured(), ["G-TEST"]);
  assert.deepEqual(f.updates.at(-1), { analytics: "granted", advertising: "denied" });
});

test("withdrawal disables both destinations and later acceptance configures them once again", () => {
  const f = fixture();
  assert.equal(f.choose(denied), null);
  assert.deepEqual(f.disabled(), [true, true]);
  assert.deepEqual(f.updates.at(-1), denied);
  assert.notEqual(f.choose(granted), null);
  assert.deepEqual(f.disabled(), [false, false]);
  assert.deepEqual(f.configured(), ["G-TEST", "AW-TEST", "G-TEST", "AW-TEST"]);
  assert.equal(f.commands.filter(command => command[0] === "js").length, 1);
});

test("changing one category neither grants nor leaves the other category enabled", () => {
  const f = fixture({ preferences: { analytics: "granted", advertising: "denied" } });
  const initialLoader = f.render().props.src;
  f.choose({ analytics: "denied", advertising: "granted" });
  assert.deepEqual(f.disabled(), [true, false]);
  assert.deepEqual(f.configured(), ["G-TEST", "AW-TEST"]);
  assert.equal(f.render().props.src, initialLoader);
  f.choose({ analytics: "granted", advertising: "denied" });
  assert.deepEqual(f.disabled(), [false, true]);
  assert.deepEqual(f.configured(), ["G-TEST", "AW-TEST", "G-TEST"]);
});

for (const options of [{ internal: true }, { hostname: "localhost" }, { hostname: "127.0.0.1" }, { hostname: "preview.example.com" }]) {
  test(`acceptance cannot override ${options.internal ? "internal traffic" : options.hostname} exclusion`, () => {
    const f = fixture({ ...options, preferences: denied });
    assert.equal(f.choose(granted), null);
    assert.deepEqual(f.disabled(), [true, true]);
    assert.deepEqual(f.configured(), []);
    assert.deepEqual(f.updates.at(-1), denied);
  });
}

function consentFixture({ legacy = null, stored = null, storageUnavailable = false } = {}) {
  const storage = new Map(), commands = [], listeners = new Map(), dispatched = [];
  if (legacy) storage.set("taiyi_google_analytics_consent", legacy);
  if (stored) storage.set("taiyi_google_consent_v2", stored);
  const window = {
    location: { hostname: "www.taiyipolymer.com" },
    localStorage: {
      getItem: key => { if (storageUnavailable) throw new Error("blocked"); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (storageUnavailable) throw new Error("blocked"); storage.set(key, value); },
    },
    addEventListener: (name, callback) => { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(callback); },
    removeEventListener: (name, callback) => listeners.get(name)?.delete(callback),
    dispatchEvent: event => { dispatched.push(event.type); for (const callback of listeners.get(event.type) ?? []) callback(event); return true; },
    gtag: (...args) => commands.push(args),
  };
  const api = {};
  vm.runInNewContext(consentSource, { exports: api, window, document: { cookie: "" }, CustomEvent: class { constructor(type) { this.type = type; } }, require: name => {
    if (name === "react") return { useSyncExternalStore: (subscribe, read) => { subscribe(() => {}); return read(); } };
    if (name === "@/lib/analyticsAttribution") return { clearMarketingAttribution: () => {} };
    throw new Error(`Unexpected consent dependency: ${name}`);
  } });
  return { api, storage, commands, window, dispatched };
}

test("real consent reader keeps legacy analytics distinct from an explicit v2 choice", () => {
  const f = consentFixture({ legacy: "granted" });
  assert.equal(f.api.readGoogleConsentPreferences(), null);
  assert.equal(f.api.readGoogleAnalyticsConsent(), "granted");
  assert.equal(f.api.readGoogleAdvertisingConsent(), "denied");
  assert.equal(f.storage.has("taiyi_google_consent_v2"), false);
});

for (const analytics of ["granted", "denied"]) for (const advertising of ["granted", "denied"]) {
  test(`real v2 storage reads independent ${analytics}/${advertising} permissions with stable snapshots`, () => {
    const f = consentFixture({ legacy: analytics === "granted" ? "denied" : "granted", stored: JSON.stringify({ version: 2, analytics, advertising }) });
    assert.deepEqual(JSON.parse(JSON.stringify(f.api.readGoogleConsentPreferences())), { analytics, advertising });
    assert.equal(f.api.readGoogleConsentPreferences(), f.api.readGoogleConsentPreferences());
    assert.equal(f.api.readGoogleAnalyticsConsent(), analytics);
    assert.equal(f.api.readGoogleAdvertisingConsent(), advertising);
  });
}

for (const stored of [null, "not-json", JSON.stringify({ version: 1, ...granted }), JSON.stringify({ version: 2, analytics: "granted" }), JSON.stringify({ version: 2, analytics: "granted", advertising: true })]) {
  test(`missing or malformed v2 preference never grants advertising: ${stored}`, () => {
    const f = consentFixture({ legacy: "granted", stored });
    assert.equal(f.api.readGoogleConsentPreferences(), null);
    assert.equal(f.api.readGoogleAdvertisingConsent(), "denied");
  });
}

test("real storage, withdrawal and reacceptance update both categories and dispatch once", () => {
  const f = consentFixture();
  for (const choice of [granted, denied, { analytics: "denied", advertising: "granted" }]) {
    f.api.storeGoogleConsentPreferences(choice);
    f.api.updateGoogleConsentPreferences(choice);
    assert.deepEqual(JSON.parse(f.storage.get("taiyi_google_consent_v2")), { version: 2, ...choice });
    assert.equal(f.api.readGoogleAnalyticsConsent(), choice.analytics);
    assert.equal(f.api.readGoogleAdvertisingConsent(), choice.advertising);
    assert.equal(f.commands.at(-1)[2].analytics_storage, choice.analytics);
    assert.equal(f.commands.at(-1)[2].ad_storage, choice.advertising);
    assert.equal(f.commands.at(-1)[2].ad_personalization, "denied");
  }
  assert.equal(f.dispatched.length, 3);
});

test("storage denial still permits a same-page choice and its revocation", () => {
  const f = consentFixture({ storageUnavailable: true });
  assert.equal(f.api.readGoogleConsentPreferences(), null);
  for (const choice of [granted, denied]) {
    assert.doesNotThrow(() => f.api.storeGoogleConsentPreferences(choice));
    assert.equal(f.api.readGoogleAnalyticsConsent(), choice.analytics);
    assert.equal(f.api.readGoogleAdvertisingConsent(), choice.advertising);
  }
});

test("a storage event clears cached permission after another tab withdraws consent", () => {
  const f = consentFixture();
  f.api.useGoogleConsentPreferences();
  f.api.storeGoogleConsentPreferences(granted);
  f.storage.set("taiyi_google_consent_v2", JSON.stringify({ version: 2, ...denied }));
  f.window.dispatchEvent({ type: "storage", key: "taiyi_google_consent_v2" });
  assert.equal(f.api.readGoogleAnalyticsConsent(), "denied");
  assert.equal(f.api.readGoogleAdvertisingConsent(), "denied");
});
