import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { normalizeTechnicalDataQuery } from "../src/lib/technicalDataQueryVocabulary.ts";
import { zhTechnicalDataSearchMessages } from "../src/i18n/technicalDataSearchMessages.ts";
import { deTechnicalSearch } from "../src/i18n/messages/de-technical-search.ts";
import { frTechnicalSearch } from "../src/i18n/messages/fr-technical-search.ts";
import { ptBRTechnicalSearch } from "../src/i18n/messages/pt-BR-technical-search.ts";

const locales = [
  ["de", deTechnicalSearch, "VERSCHLEISS", "Zahnräder", "Glasfaser"],
  ["fr", frTechnicalSearch, "USURE", "Engrenages", "Fibres de verre"],
  ["pt-br", ptBRTechnicalSearch, "DESGASTE", "Engrenagens", "Fibra de vidro"],
];

for (const [locale, data, wear, gear, glass] of locales) {
  test(`${locale}: local terms match canonical search terms without changing grade identifiers`, () => {
    for (const [input, expected] of [[wear, "wear"], [gear, "gear"], [glass, "glass fiber"], ["ETM450", "ETM450"], ["A-USURE450", "A-USURE450"]]) {
      assert.equal(normalizeTechnicalDataQuery(input, data.vocabulary), expected);
    }
    assert.equal(normalizeTechnicalDataQuery(`${wear} ${gear}`, data.vocabulary), "wear gear");
  });

  test(`${locale}: filter values and document states preserve catalog semantics`, () => {
    for (const key of ["contentTypes", "families", "directions"]) {
      assert.deepEqual(data.copy[key].map((item) => item.value), zhTechnicalDataSearchMessages[key].map((item) => item.value));
    }
    assert.deepEqual(Object.keys(data.copy.documentStates), Object.keys(zhTechnicalDataSearchMessages.documentStates));
    assert.doesNotMatch(JSON.stringify(data), /[\u3400-\u9fff]/u);
    assert.match(data.copy.suggestedBoundary, /équivalence|Gleichwertigkeit|equivalência/);
  });
}

test("Latin terms do not replace substrings in other words; CJK behavior is preserved", () => {
  assert.equal(normalizeTechnicalDataQuery("mesures", frTechnicalSearch.vocabulary), "mesures");
  assert.equal(normalizeTechnicalDataQuery("(USURE)", frTechnicalSearch.vocabulary), "( wear )");
  assert.equal(normalizeTechnicalDataQuery("低摩擦齿轮", [{ aliases: ["齿轮"], canonicalTerm: "gear" }]), "低摩擦 gear");
});

test("every catalog category in the grade browser has a localized label", () => {
  const catalog = JSON.parse(readFileSync(new URL("../src/generated/catalog.json", import.meta.url), "utf8"));
  const categories = new Set();
  const collect = (value) => {
    if (!value || typeof value !== "object") return;
    if (typeof value.category === "string") categories.add(value.category);
    Object.values(value).forEach(collect);
  };
  collect(catalog);
  assert.ok(categories.size > 0);
  for (const [locale, data] of locales) {
    for (const category of categories) assert.ok(data.categories[category], `${locale}: ${category}`);
  }
});
