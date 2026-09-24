import type { EngineeringTdsDocument } from "@/data/engineeringTds";
import { createChineseEngineeringGradeCopy } from "@/i18n/chineseEngineeringGradeMessages";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { translateExpandedContent } from "@/i18n/expandedLocaleContent";
import { chineseEngineeringDirectionCopy } from "@/i18n/messages/zh-CN-engineering-categories";

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
  const direction = translateExpandedContent(
    chineseEngineeringDirectionCopy[document.category] ?? {
      label: document.category,
      summary: "结合零部件功能、加工条件与目标性能进行项目评估。",
    },
    localeSegment,
  );

  if (localeSegment === "zh") {
    if (isSpunGf45(document)) {
      return `${document.grade} 是 ${document.family} GF45 玻纤增强牌号。${direction.summary} 当前页面所列数值用于技术初筛；最终适用性需结合零部件几何、模具、加工窗口和实际工况确认。`;
    }
    return createChineseEngineeringGradeCopy(document).summary;
  }

  if (isSpunGf45(document)) {
    if (localeSegment === "de") {
      return `${document.grade} ist ein glasfaserverstärkter ${document.family}-Typ mit 45 % Glasfaser (GF45). ${direction.summary} Die aufgeführten Werte dienen der technischen Vorauswahl. Die endgültige Eignung ist anhand von Bauteil, Werkzeug, Verarbeitung und Einsatzbedingungen zu bestätigen.`;
    }
    if (localeSegment === "fr") {
      return `${document.grade} est un grade de ${document.family} renforcé à 45 % de fibres de verre (GF45). ${direction.summary} Les valeurs présentées servent à la présélection technique. L’aptitude finale doit être confirmée sur la pièce, avec l’outillage, le procédé et les conditions réelles d’utilisation.`;
    }
    return `${document.grade} é um grau de ${document.family} reforçado com 45% de fibra de vidro (GF45). ${direction.summary} Os valores apresentados servem para a pré-seleção técnica. A adequação final deve ser confirmada na peça, com o ferramental, o processo e as condições reais de uso.`;
  }

  if (localeSegment === "de") {
    return `${document.grade} ist ein Werkstofftyp aus der ${document.family}-Familie für die Richtung „${direction.label}“. ${direction.summary} Die aufgeführten Werte dienen der technischen Vorauswahl. Die endgültige Eignung ist anhand der Bauteilgeometrie, des Werkzeugs, des Verarbeitungsfensters und der realen Einsatzbedingungen zu bestätigen.`;
  }

  if (localeSegment === "fr") {
    return `${document.grade} est un grade de la famille ${document.family}, orienté « ${direction.label} ». ${direction.summary} Les valeurs présentées servent à la présélection technique. L’aptitude finale doit être confirmée à partir de la géométrie de la pièce, de l’outillage, de la fenêtre de procédé et des conditions réelles d’utilisation.`;
  }

  return `${document.grade} é um grau da família ${document.family}, na direção “${direction.label}”. ${direction.summary} Os valores apresentados servem para a pré-seleção técnica. A adequação final deve ser confirmada com base na geometria da peça, no ferramental, na janela de processo e nas condições reais de uso.`;
};

export const createLocalizedEngineeringGradeCopy = (
  document: EngineeringTdsDocument,
  localeSegment: LocalizedUrlSegment,
): LocalizedEngineeringGradeCopy => {
  const copy = translateExpandedContent(
    // The dictionaries use the original source keys. Replace these two fields
    // with core-data wording in the returned public copy below.
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
