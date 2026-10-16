import type { Product } from "../data/products";
import type { LocalizedUrlSegment } from "./config.ts";

type Labels = Readonly<Record<LocalizedUrlSegment, string>>;

const formulationLabels: Readonly<Record<string, Labels>> = {
  "MoS2-filled POM": { zh: "MoS₂ 填充", de: "MoS₂-Füllung", fr: "Charge MoS₂", "pt-br": "Carga de MoS₂" },
  "MoS2-filled direction": { zh: "MoS₂ 填充", de: "MoS₂-Füllung", fr: "Charge MoS₂", "pt-br": "Carga de MoS₂" },
  "PTFE-filled formulation": { zh: "PTFE 润滑改性", de: "PTFE-Modifizierung", fr: "Modification PTFE", "pt-br": "Modificação com PTFE" },
  "Special wear-resistant additive": { zh: "耐磨添加剂改性", de: "Verschleißschutzadditiv", fr: "Additif anti-usure", "pt-br": "Aditivo antidesgaste" },
  "Wear-modified POM": { zh: "耐磨改性", de: "Verschleißmodifiziert", fr: "Modification anti-usure", "pt-br": "Modificação antidesgaste" },
  "Impact-modified POM": { zh: "抗冲改性", de: "Schlagzähmodifiziert", fr: "Modification choc", "pt-br": "Modificação ao impacto" },
  "UV-resistant grade": { zh: "抗紫外改性", de: "UV-stabilisiert", fr: "Stabilisé UV", "pt-br": "Estabilizado contra UV" },
  "UV and aging resistance": { zh: "抗紫外与耐老化改性", de: "UV- und Alterungsstabilisierung", fr: "Stabilisation UV et vieillissement", "pt-br": "Estabilização UV e ao envelhecimento" },
  "Conductive grade": { zh: "导电改性", de: "Elektrisch leitfähig", fr: "Conducteur électrique", "pt-br": "Eletricamente condutivo" },
  "Controlled resistivity": { zh: "电阻率控制配方", de: "Rezeptur mit definiertem Widerstand", fr: "Formulation à résistivité contrôlée", "pt-br": "Formulação com resistividade controlada" },
  "Standard grade": { zh: "通用 POM", de: "Standard-POM", fr: "POM standard", "pt-br": "POM padrão" },
  "High flow": { zh: "高流动", de: "Hohe Fließfähigkeit", fr: "Fluidité élevée", "pt-br": "Alta fluidez" },
  "Higher flow": { zh: "较高流动", de: "Erhöhte Fließfähigkeit", fr: "Fluidité accrue", "pt-br": "Fluidez aumentada" },
  "Very high flow": { zh: "更高流动", de: "Sehr hohe Fließfähigkeit", fr: "Très haute fluidité", "pt-br": "Fluidez muito alta" },
  "Ultra high flow": { zh: "超高流动", de: "Ultrahohe Fließfähigkeit", fr: "Ultra haute fluidité", "pt-br": "Fluidez ultra-alta" },
  "Low-density POM": { zh: "低密度 POM", de: "POM mit niedriger Dichte", fr: "POM à faible densité", "pt-br": "POM de baixa densidade" },
};

const fillerLabels: Readonly<Record<string, Labels>> = {
  "glass fiber": { zh: "玻纤增强", de: "Glasfaser", fr: "fibres de verre", "pt-br": "fibra de vidro" },
  "carbon fiber": { zh: "碳纤维增强", de: "Kohlenstofffaser", fr: "fibres de carbone", "pt-br": "fibra de carbono" },
  "aramid fiber": { zh: "芳纶纤维改性", de: "Aramidfaser", fr: "fibres d’aramide", "pt-br": "fibra de aramida" },
  "glass bead": { zh: "玻璃微珠填充", de: "Glaskugeln", fr: "billes de verre", "pt-br": "microesferas de vidro" },
};

export function getPomGradeDirectoryLabel(
  product: Pick<Product, "features">,
  locale: LocalizedUrlSegment,
) {
  const feature = product.features[0] ?? "";
  const filler = feature.match(/^(\d+)% (glass fiber|carbon fiber|aramid fiber|glass bead) content$/);
  if (filler) return `${filler[1]}% ${fillerLabels[filler[2]][locale]}`;
  return formulationLabels[feature]?.[locale] ?? "POM";
}

export const pomComparisonDataNote: Labels = {
  zh: "目录典型值；拉伸强度：ISO 527；MFI：ISO 1133，195 °C／2.16 kg；热变形温度：ISO 75，1.8 MPa。",
  de: "Typische Katalogwerte; Zugfestigkeit: ISO 527; MFI: ISO 1133, 195 °C/2,16 kg; Wärmeformbeständigkeit: ISO 75, 1,8 MPa.",
  fr: "Valeurs typiques du catalogue ; traction : ISO 527 ; MFI : ISO 1133, 195 °C/2,16 kg ; température de fléchissement sous charge : ISO 75, 1,8 MPa.",
  "pt-br": "Valores típicos do catálogo; resistência à tração: ISO 527; MFI: ISO 1133, 195 °C/2,16 kg; temperatura de deflexão térmica: ISO 75, 1,8 MPa.",
};
