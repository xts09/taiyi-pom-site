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
      `Show ${count} more material ${count === 1 ? "direction" : "directions"}`,
  },
  de: {
    parts: (count) =>
      `${count} ${count === 1 ? "weiteres Bauteil" : "weitere Bauteile"} anzeigen`,
    materials: (count) =>
      `${count} ${count === 1 ? "weitere Werkstoffrichtung" : "weitere Werkstoffrichtungen"} anzeigen`,
  },
  fr: {
    parts: (count) =>
      `Afficher ${count} ${count === 1 ? "pièce supplémentaire" : "pièces supplémentaires"}`,
    materials: (count) =>
      `Afficher ${count} ${count === 1 ? "orientation matériau supplémentaire" : "orientations matériau supplémentaires"}`,
  },
  "pt-BR": {
    parts: (count) => `Mostrar mais ${count} ${count === 1 ? "peça" : "peças"}`,
    materials: (count) =>
      `Mostrar mais ${count} ${count === 1 ? "direção de material" : "direções de material"}`,
  },
  "zh-CN": {
    parts: (count) => `再查看 ${count} 个部件`,
    materials: (count) => `再查看 ${count} 个材料方向`,
  },
};

const showLessLabels: Record<
  MessageLocale,
  Record<ApplicationShowMoreKind, string>
> = {
  en: {
    parts: "Show fewer parts",
    materials: "Show fewer material directions",
  },
  de: {
    parts: "Weniger Bauteile anzeigen",
    materials: "Weniger Werkstoffrichtungen anzeigen",
  },
  fr: {
    parts: "Afficher moins de pièces",
    materials: "Afficher moins d’orientations matériau",
  },
  "pt-BR": {
    parts: "Mostrar menos peças",
    materials: "Mostrar menos direções de material",
  },
  "zh-CN": {
    parts: "收起部件列表",
    materials: "收起材料方向",
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
