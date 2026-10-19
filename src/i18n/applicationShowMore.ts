import type { MessageLocale } from "./config.ts";

export type ApplicationShowMoreKind = "materials" | "parts";

type ShowMoreFormatter = (count: number) => string;

const showMoreFormatters: Record<
  MessageLocale,
  Record<ApplicationShowMoreKind, ShowMoreFormatter>
> = {
  en: {
    parts: (count) => `Show ${count} more ${count === 1 ? "part" : "parts"}`,
    materials: (count) =>
      `Show ${count} more candidate ${count === 1 ? "material" : "materials"}`,
  },
  de: {
    parts: (count) =>
      `${count} ${count === 1 ? "weiteres Bauteil" : "weitere Bauteile"} anzeigen`,
    materials: (count) =>
      `${count} ${count === 1 ? "weiteren Werkstoffkandidaten" : "weitere Werkstoffkandidaten"} anzeigen`,
  },
  fr: {
    parts: (count) =>
      `Afficher ${count} ${count === 1 ? "pièce supplémentaire" : "pièces supplémentaires"}`,
    materials: (count) =>
      `Afficher ${count} ${count === 1 ? "matériau candidat supplémentaire" : "matériaux candidats supplémentaires"}`,
  },
  "pt-BR": {
    parts: (count) => `Mostrar mais ${count} ${count === 1 ? "peça" : "peças"}`,
    materials: (count) =>
      `Mostrar mais ${count} ${count === 1 ? "material candidato" : "materiais candidatos"}`,
  },
  "zh-CN": {
    parts: (count) => `再查看 ${count} 个部件`,
    materials: (count) => `再查看 ${count} 个候选材料`,
  },
};

const showLessLabels: Record<
  MessageLocale,
  Record<ApplicationShowMoreKind, string>
> = {
  en: {
    parts: "Show fewer parts",
    materials: "Show fewer candidate materials",
  },
  de: {
    parts: "Weniger Bauteile anzeigen",
    materials: "Weniger Werkstoffkandidaten anzeigen",
  },
  fr: {
    parts: "Afficher moins de pièces",
    materials: "Afficher moins de matériaux candidats",
  },
  "pt-BR": {
    parts: "Mostrar menos peças",
    materials: "Mostrar menos materiais candidatos",
  },
  "zh-CN": {
    parts: "收起部件列表",
    materials: "收起候选材料",
  },
};

export const formatApplicationShowMore = (
  locale: MessageLocale,
  kind: ApplicationShowMoreKind,
  count: number,
) => showMoreFormatters[locale][kind](count);

export const formatApplicationShowLess = (
  locale: MessageLocale,
  kind: ApplicationShowMoreKind,
) => showLessLabels[locale][kind];
