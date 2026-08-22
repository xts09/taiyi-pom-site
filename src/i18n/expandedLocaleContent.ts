import type { LocalizedUrlSegment } from "./config.ts";
import { expandedLocaleOverrides } from "./expandedLocaleOverrides.ts";
import applicationNarrativeGermanDictionary from "./generated/application-narrative-de.json" with { type: "json" };
import applicationNarrativeFrenchDictionary from "./generated/application-narrative-fr.json" with { type: "json" };
import applicationNarrativePortugueseDictionary from "./generated/application-narrative-pt-BR.json" with { type: "json" };
import germanDictionary from "./generated/de.json" with { type: "json" };
import frenchDictionary from "./generated/fr.json" with { type: "json" };
import portugueseDictionary from "./generated/pt-BR.json" with { type: "json" };

type TranslationDictionary = Readonly<Record<string, string>>;

const dictionaries: Partial<
  Record<LocalizedUrlSegment, TranslationDictionary>
> = {
  de: { ...germanDictionary, ...applicationNarrativeGermanDictionary },
  fr: { ...frenchDictionary, ...applicationNarrativeFrenchDictionary },
  "pt-br": {
    ...portugueseDictionary,
    ...applicationNarrativePortugueseDictionary,
  },
};

const chinesePattern = /[\u3400-\u9fff]/;

const gradeTerminologyReplacements: Partial<
  Record<LocalizedUrlSegment, ReadonlyArray<readonly [RegExp, string]>>
> = {
  de: [
    [/Neigungsdaten/g, "Werkstoffdaten"],
    [/Qualitäten/g, "Werkstofftypen"],
    [/Qualität/g, "Werkstofftyp"],
    [/Klassen/g, "Werkstofftypen"],
    [/Klasse/g, "Werkstofftyp"],
    [/Sorten/g, "Werkstofftypen"],
    [/Sorte/g, "Werkstofftyp"],
    [/Marken/g, "Werkstofftypen"],
    [/Marke/g, "Werkstofftyp"],
    [/Kandidatenbewertungen/g, "Kandidatenwerkstofftypen"],
    [/Bewertungen/g, "Werkstofftypen"],
    [/Noten/g, "Werkstofftypen"],
    [/Grade/g, "Werkstofftypen"],
    [/Grad/g, "Werkstofftyp"],
    [/Steigungen/g, "Werkstofftypen"],
    [/Steigung/g, "Werkstofftyp"],
  ],
  fr: [
    [/qualités/g, "grades"],
    [/qualité/g, "grade"],
    [/niveaux/g, "grades"],
    [/niveau/g, "grade"],
    [/notes/g, "grades"],
    [/note/g, "grade"],
    [/marques/g, "grades"],
    [/marque/g, "grade"],
    [/classes/g, "grades"],
    [/classe/g, "grade"],
    [/pentes/g, "grades"],
    [/pente/g, "grade"],
    [/teneurs/g, "grades"],
    [/teneur/g, "grade"],
  ],
  "pt-br": [
    [/dados de classificação/g, "dados de graus"],
    [
      /verificação de classificação alternativa/g,
      "validação de graus alternativos",
    ],
    [/classificações/g, "graus"],
    [/classificação/g, "grau"],
    [/classes/g, "graus"],
    [/classe/g, "grau"],
    [/notas/g, "graus"],
    [/nota/g, "grau"],
    [/marcas/g, "graus"],
    [/marca/g, "grau"],
    [/inclinações/g, "graus"],
    [/inclinação/g, "grau"],
    [/categorias/g, "graus"],
    [/categoria/g, "grau"],
    [/qualidades/g, "graus"],
    [/qualidade/g, "grau"],
  ],
};

const sourceAwareTerminologyReplacements: ReadonlyArray<{
  sourceIncludes: string;
  replacements: Partial<
    Record<LocalizedUrlSegment, ReadonlyArray<readonly [RegExp, string]>>
  >;
}> = [
  {
    sourceIncludes: "运动",
    replacements: {
      de: [[/Sportarten/g, "Bewegungen"]],
      fr: [[/sports/g, "mouvements"]],
      "pt-br": [[/esportes/g, "movimentos"]],
    },
  },
  {
    sourceIncludes: "水路",
    replacements: {
      de: [
        [/Wasserlaufmedien/g, "Medien im Wasserkreislauf"],
        [/Wasserlauf/g, "Wasserkreislauf"],
        [/Wasserwegkomponenten/g, "Wasserkreislauf-Bauteile"],
      ],
      fr: [
        [/cours d’eau/g, "circuits d’eau"],
        [/voies navigables/g, "circuits d’eau"],
      ],
      "pt-br": [
        [/vias navegáveis/g, "circuitos de água"],
        [/componentes do canal/g, "componentes do circuito de água"],
      ],
    },
  },
  {
    sourceIncludes: "当前失效现象",
    replacements: {
      de: [[/Stromausfallphänomene/g, "aktuelle Ausfallerscheinungen"]],
      fr: [
        [
          /phénomènes de défaillance du courant/g,
          "phénomènes de défaillance actuels",
        ],
      ],
      "pt-br": [
        [/(?:fenômenos|condições) de falha de corrente/g, "falhas atuais"],
      ],
    },
  },
  {
    sourceIncludes: "牌号资料或样品安排",
    replacements: {
      de: [
        [
          /(?:Bewertungen|Werkstofftypen) oder Musteranordnungen/g,
          "Werkstoffdaten oder Musterbereitstellung",
        ],
      ],
      fr: [
        [
          /informations de (?:note|grade) ou les arrangements d’échantillons/g,
          "données de grades ou la mise à disposition d’échantillons",
        ],
      ],
      "pt-br": [
        [
          /informações de (?:nota|grau) ou arranjos de exemplos/g,
          "dados de graus ou disponibilidade de amostras",
        ],
      ],
    },
  },
  {
    sourceIncludes: "材料方向",
    replacements: {
      de: [
        [/Anweisungen/g, "Werkstoffrichtungen"],
        [/Orientierung des POM-Materials/g, "POM-Werkstoffrichtungen"],
        [/POM-Materialorientierung/g, "POM-Werkstoffrichtungen"],
        [/Richtung des POM-Materials/g, "POM-Werkstoffrichtungen"],
        [/Richtung der POM-Materialien/g, "POM-Werkstoffrichtungen"],
      ],
      fr: [
        [/instructions/g, "orientations matériau"],
        [/orientation du matériau POM/g, "orientations matériau POM"],
        [/direction du matériau POM/g, "orientations matériau POM"],
        [/direction des matériaux POM/g, "orientations matériau POM"],
      ],
      "pt-br": [
        [/instruções/g, "direções de material"],
        [/orientação do material POM/g, "direções de material POM"],
        [/direção do material POM/g, "direções de material POM"],
        [/direção dos materiais POM/g, "direções de material POM"],
      ],
    },
  },
  {
    sourceIncludes: "当前材料",
    replacements: {
      fr: [[/matériaux courants/g, "matériaux actuels"]],
      "pt-br": [[/materiais de corrente/g, "materiais atuais"]],
    },
  },
];

const polishExpandedTranslation = (
  source: string,
  translated: string,
  localeSegment: LocalizedUrlSegment,
) => {
  let polished = translated;

  if (source.includes("牌号")) {
    polished = (gradeTerminologyReplacements[localeSegment] ?? []).reduce(
      (value, [pattern, replacement]) => value.replace(pattern, replacement),
      polished,
    );
  }

  return sourceAwareTerminologyReplacements.reduce((value, rule) => {
    if (!source.includes(rule.sourceIncludes)) {
      return value;
    }

    return (rule.replacements[localeSegment] ?? []).reduce(
      (nextValue, [pattern, replacement]) =>
        nextValue.replace(pattern, replacement),
      value,
    );
  }, polished);
};

export const hasExpandedLocaleDictionary = (
  localeSegment: LocalizedUrlSegment,
) => localeSegment === "zh" || dictionaries[localeSegment] !== undefined;

export const translateExpandedText = (
  value: string,
  localeSegment: LocalizedUrlSegment,
) => {
  if (localeSegment === "zh" || !chinesePattern.test(value)) {
    return value;
  }

  const dictionary = dictionaries[localeSegment];
  const translated =
    expandedLocaleOverrides[localeSegment]?.[value] ?? dictionary?.[value];

  if (!translated) {
    throw new Error(
      `Missing ${localeSegment} expanded-content translation: ${value}`,
    );
  }

  return polishExpandedTranslation(value, translated, localeSegment);
};

export const translateExpandedContent = <T>(
  value: T,
  localeSegment: LocalizedUrlSegment,
): T => {
  if (typeof value === "string") {
    return translateExpandedText(value, localeSegment) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) =>
      translateExpandedContent(item, localeSegment),
    ) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        translateExpandedContent(child, localeSegment),
      ]),
    ) as T;
  }

  return value;
};
