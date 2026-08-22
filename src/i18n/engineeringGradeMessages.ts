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

const createLocalizedSummary = (
  document: EngineeringTdsDocument,
  localeSegment: LocalizedUrlSegment,
) => {
  if (localeSegment === "zh") {
    return createChineseEngineeringGradeCopy(document).summary;
  }

  const direction = translateExpandedContent(
    chineseEngineeringDirectionCopy[document.category] ?? {
      label: document.category,
      summary: "结合零部件功能、加工条件与目标性能进行项目评估。",
    },
    localeSegment,
  );

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
    createChineseEngineeringGradeCopy(document),
    localeSegment,
  );

  return {
    ...copy,
    summary: createLocalizedSummary(document, localeSegment),
    documentSupport: documentSupportLabels[localeSegment],
  };
};

export const getLocalizedEngineeringGradeContactSource = (
  localeSegment: LocalizedUrlSegment,
) => contactSources[localeSegment];
