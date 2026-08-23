import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { translateExpandedText } from "../src/i18n/expandedLocaleContent.ts";

const pomLandingDataSource = readFileSync(
  new URL("../src/data/pomLandingPages.ts", import.meta.url),
  "utf8",
);
const chinesePomLandingDataSource = readFileSync(
  new URL("../src/i18n/messages/zh-CN-pom-landings.ts", import.meta.url),
  "utf8",
);

const pomLandingComponentSource = readFileSync(
  new URL("../src/components/PomLandingPage.tsx", import.meta.url),
  "utf8",
);

test("keeps supplier evidence limited to the Modified POM handoff", () => {
  assert.equal(
    [...pomLandingDataSource.matchAll(/supplierEvidence: \{/g)].length,
    1,
  );
  assert.equal(
    [...chinesePomLandingDataSource.matchAll(/supplierEvidence: \{/g)].length,
    1,
  );
  assert.match(
    pomLandingDataSource,
    /modifiedPomCompounds:[\s\S]*?supplierEvidence: \{[\s\S]*?target: "about-qualification"/,
  );
  assert.match(
    chinesePomLandingDataSource,
    /chineseModifiedPomLanding[\s\S]*?supplierEvidence: \{[\s\S]*?target: "about-qualification"/,
  );
});

test("localizes supplier evidence copy without localizing the relationship target", () => {
  const expected = {
    de: [
      "Lieferantenqualifizierung",
      "Nachweise zur Lieferantenqualifizierung prüfen",
    ],
    fr: [
      "Qualification fournisseur",
      "Consulter les justificatifs de qualification fournisseur",
    ],
    "pt-br": [
      "Qualificação de fornecedores",
      "Consultar evidências para qualificação de fornecedores",
    ],
  };

  for (const [locale, [label, actionLabel]] of Object.entries(expected)) {
    assert.equal(translateExpandedText("供应商准入", locale), label);
    assert.equal(
      translateExpandedText("查看供应商准入依据", locale),
      actionLabel,
    );
  }
});

test("resolves the reviewed evidence target through the locale-aware page path", () => {
  assert.match(
    pomLandingComponentSource,
    /"about-qualification": "\/about#overview-credentials-title"/,
  );
  assert.match(
    pomLandingComponentSource,
    /localizedHref\(supplierEvidenceHrefByTarget\[supplierEvidence\.target\]\)/,
  );
});
