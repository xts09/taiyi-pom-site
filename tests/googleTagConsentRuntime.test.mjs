import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

// Exercise the real component's effects through consent changes and startup.
function fixture({ consent = "granted", hostname = "www.taiyipolymer.com", internal = false } = {}) {
  const ids = ["G-TEST", "AW-TEST"];
  const window = {
    location: { href: `https://${hostname}/contact`, hostname, pathname: "/contact" },
    localStorage: { getItem: () => internal ? "1" : null },
  };
  const states = [], effects = [], pending = [];
  let hook = 0;
  const react = {
    useState: initial => {
      const index = hook++;
      if (!(index in states)) states[index] = initial;
      return [states[index], value => { states[index] = value; }];
    },
    useEffect: (callback, deps) => {
      const index = hook++;
      const previous = effects[index];
      if (!previous || deps.some((value, i) => value !== previous.deps[i])) {
        pending.push(() => {
          previous?.cleanup?.();
          effects[index] = { deps, cleanup: callback() };
        });
      }
    },
  };
  const jsx = (type, props) => ({ type, props });
  const mocks = {
    react,
    "react/jsx-runtime": { jsx, jsxs: jsx, Fragment: "fragment" },
    "next/script": { default: "script" },
    "@/lib/googleConsent": { clearGoogleAnalyticsCookies: () => {}, useGoogleAnalyticsConsent: () => consent },
    "@/lib/googleInternalTraffic": {
      GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE: "1", GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER: "internal_traffic", GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY: "internal",
      resolveGoogleInternalTrafficDisabled: (_query, stored) => stored === "1",
    },
    "@/lib/googleTracking": { googleTagConfigIds: ids, googleTagId: ids[0], isGoogleTagHostnameAllowed: host => host === "www.taiyipolymer.com" },
    "@/lib/analyticsAttribution": { analyticsPageLocationParamNames: [] },
  };
  const fixtureModule = { exports: {} };
  const source = readFileSync(resolve("src/components/GoogleTag.tsx"), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const context = vm.createContext({ window, URL, queueMicrotask: callback => callback(), exports: fixtureModule.exports, module: fixtureModule, require: name => {
    if (!(name in mocks)) throw new Error(`Unexpected import: ${name}`);
    return mocks[name];
  } });
  vm.runInContext(compiled, context);
  const render = () => {
    hook = 0;
    const output = fixtureModule.exports.GoogleTag();
    for (const callback of pending.splice(0)) callback();
    return output;
  };
  render(); render();
  return { render, choose: value => { consent = value; return render(); }, disabled: () => ids.map(id => window[`ga-disable-${id}`]) };
}

for (const consent of [null, "loading", "denied"]) {
  test(`startup ${consent} keeps loaded tag destinations disabled`, () => {
    const f = fixture({ consent });
    assert.deepEqual(f.disabled(), [true, true]);
    assert.equal(f.render(), null);
  });
}

test("same-page withdrawal disables loaded tags and accepting again restores them", () => {
  const f = fixture();
  assert.deepEqual(f.disabled(), [false, false]);
  assert.notEqual(f.render(), null);
  assert.equal(f.choose("denied"), null);
  assert.deepEqual(f.disabled(), [true, true]);
  assert.notEqual(f.choose("granted"), null);
  assert.deepEqual(f.disabled(), [false, false]);
});

for (const options of [{ internal: true }, { hostname: "preview.example.com" }]) {
  test(`accepting never overrides ${options.internal ? "internal traffic" : "hostname"} exclusions`, () => {
    const f = fixture({ ...options, consent: "denied" });
    assert.equal(f.choose("granted"), null);
    assert.deepEqual(f.disabled(), [true, true]);
  });
}
