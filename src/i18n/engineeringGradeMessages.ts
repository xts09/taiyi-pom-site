import type { EngineeringTdsDocument } from "@/data/engineeringTds";
import { createChineseEngineeringGradeCopy } from "@/i18n/chineseEngineeringGradeMessages";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";

const contactSources: Record<LocalizedUrlSegment, string> = {
  de: "Deutsche Seite für technische Werkstofftypen",
  fr: "Page française des grades de matériaux techniques",
  "pt-br": "Página brasileira de grades de materiais de engenharia",
  zh: "中文工程塑料牌号页",
};

export type LocalizedEngineeringGradeCopy = ReturnType<
  typeof createChineseEngineeringGradeCopy
>;

const documentSupportLabels: Record<LocalizedUrlSegment, string> = {
  de: "Dokumentenservice",
  fr: "Documents disponibles",
  "pt-br": "Documentação disponível",
  zh: "资料支持",
};

const corePropertiesCopy: Record<
  LocalizedUrlSegment,
  { title: string; metadataDescription: (grade: string, family: string, direction: string) => string }
> = {
  de: {
    title: "Ausgewählte Kennwerte für die Vorauswahl",
    metadataDescription: (grade, family, direction) =>
      `${grade} ${family} – ${direction}: ausgewählte Kennwerte für die technische Vorauswahl; Werkstoffunterlagen auf Anfrage.`,
  },
  fr: {
    title: "Principales données pour la présélection",
    metadataDescription: (grade, family, direction) =>
      `${grade} ${family} – ${direction} : données de référence sélectionnées pour la présélection technique ; documents sur demande.`,
  },
  "pt-br": {
    title: "Dados essenciais para a pré-seleção",
    metadataDescription: (grade, family, direction) =>
      `${grade} ${family} – ${direction}: dados de referência selecionados para a pré-seleção técnica; documentação mediante solicitação.`,
  },
  zh: {
    title: "用于初筛的核心参考数据",
    metadataDescription: (grade, family, direction) =>
      `${grade} ${family} ${direction}牌号：核心物性参考值与资料申请入口，供材料初筛。`,
  },
};

const isSpunGf45 = (document: EngineeringTdsDocument) =>
  (document.grade === "SPUN-9200" || document.grade === "SPUN-4500") &&
  document.category === "Glass Fiber Reinforced" &&
  document.filler === "45";

const createLocalizedSummary = (
  document: EngineeringTdsDocument,
  localeSegment: LocalizedUrlSegment,
) => {
  if (isSpunGf45(document)) {
    if (localeSegment === "zh") {
      return `${document.grade} 是 ${document.family} GF45 玻纤增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。`;
    }
    if (localeSegment === "de") {
      return `${document.grade} ist ein glasfaserverstärkter ${document.family}-Typ mit 45 % Glasfaser (GF45). Für Strukturteile mit höheren Anforderungen an Steifigkeit, Festigkeit, Wärmeverhalten und Tragfähigkeit.`;
    }
    if (localeSegment === "fr") {
      return `${document.grade} est un grade de ${document.family} renforcé à 45 % de fibres de verre (GF45). Pour les pièces structurelles exigeant davantage de rigidité, de résistance, de tenue thermique et de capacité de charge.`;
    }
    return `${document.grade} é um grau de ${document.family} reforçado com 45% de fibra de vidro (GF45). Para peças estruturais com maiores requisitos de rigidez, resistência, comportamento térmico e capacidade de carga.`;
  }

  return translateExpandedContent(
    createChineseEngineeringGradeCopy(document).summary,
    localeSegment,
  );
};

export const createLocalizedEngineeringGradeCopy = (
  document: EngineeringTdsDocument,
  localeSegment: LocalizedUrlSegment,
): LocalizedEngineeringGradeCopy => {
  const copy = translateExpandedContent(
    createChineseEngineeringGradeCopy(document),
    localeSegment,
  );

  return {
    ...copy,
    metadata: {
      ...copy.metadata,
      description: corePropertiesCopy[localeSegment].metadataDescription(
        document.grade,
        document.family,
        copy.directionLabel,
      ),
    },
    properties: {
      ...copy.properties,
      title: corePropertiesCopy[localeSegment].title,
    },
    summary: createLocalizedSummary(document, localeSegment),
    documentSupport: documentSupportLabels[localeSegment],
  };
};

export const getLocalizedEngineeringGradeContactSource = (
  localeSegment: LocalizedUrlSegment,
) => contactSources[localeSegment];
