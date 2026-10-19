import type { LocalizedUrlSegment } from "@/i18n/config";
import type { HeaderPomMenuMessages } from "@/i18n/types";

export const headerPomMenuMessages: Record<"en" | LocalizedUrlSegment, HeaderPomMenuMessages> = {
  en: {
    title: "POM Materials",
    performance: "Performance",
    reinforcement: "Reinforcement & Fillers",
    items: {
      wear: "Wear & Low Friction", impact: "High Impact", uv: "UV Resistant",
      electrical: "Conductive / Antistatic", glassFiber: "Glass Fiber",
      carbonFiber: "Carbon Fiber", glassBead: "Glass Beads", base: "Base Resin",
    },
  },
  zh: {
    title: "POM 材料",
    performance: "功能改性",
    reinforcement: "增强与填充",
    items: {
      wear: "耐磨与低摩擦", impact: "高抗冲", uv: "抗紫外线",
      electrical: "导电与抗静电", glassFiber: "玻璃纤维增强",
      carbonFiber: "碳纤维增强", glassBead: "玻璃微珠填充", base: "基础树脂",
    },
  },
  de: {
    title: "POM-Werkstoffe",
    performance: "Eigenschaften",
    reinforcement: "Verstärkung & Füllstoffe",
    items: {
      wear: "Verschleiß & Reibung", impact: "Schlagzäh", uv: "UV-beständig",
      electrical: "Leitfähig / antistatisch", glassFiber: "Glasfaserverstärkt",
      carbonFiber: "Kohlefaserverstärkt", glassBead: "Glaskugelgefüllt", base: "Basisharz",
    },
  },
  fr: {
    title: "Matériaux POM",
    performance: "Performances",
    reinforcement: "Renforts & charges",
    items: {
      wear: "Usure & faible frottement", impact: "Résistance aux chocs", uv: "Résistance aux UV",
      electrical: "Conducteur / antistatique", glassFiber: "Fibres de verre",
      carbonFiber: "Fibres de carbone", glassBead: "Billes de verre", base: "Résine de base",
    },
  },
  "pt-br": {
    title: "Materiais POM",
    performance: "Desempenho",
    reinforcement: "Reforço e cargas",
    items: {
      wear: "Desgaste e baixo atrito", impact: "Alto impacto", uv: "Resistência UV",
      electrical: "Condutivo / antiestático", glassFiber: "Fibra de vidro",
      carbonFiber: "Fibra de carbono", glassBead: "Microesferas de vidro", base: "Resina base",
    },
  },
};
