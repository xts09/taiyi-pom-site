import type { CatalogProductRecord } from "@/data/catalog/types";

export const pomGlassFiberMetrics = [
  { source: "Flexural Modulus", en: "Flexural modulus", zh: "弯曲模量" },
  {
    source: "Charpy Notched Impact Strength",
    en: "Notched Charpy impact",
    zh: "简支梁缺口冲击",
  },
  {
    source: "Heat Deflection Temperature",
    en: "HDT · 1.8 MPa",
    zh: "HDT · 1.8 MPa",
  },
] as const;

export const pomPropertyLabels: Record<string, string> = {
  Density: "密度",
  "Melt Flow Rate (MFI)": "熔体流动速率（MFI）",
  "Molding Shrinkage": "成型收缩率",
  "Water Absorption": "吸水率",
  "Tensile Strength": "拉伸强度",
  "Tensile Modulus": "拉伸模量",
  "Tensile Strain at Break": "断裂伸长率",
  "Flexural Strength": "弯曲强度",
  "Flexural Modulus": "弯曲模量",
  "Charpy Notched Impact Strength": "简支梁缺口冲击强度",
  "Izod Notched Impact Strength": "悬臂梁缺口冲击强度",
  "Heat Deflection Temperature": "热变形温度",
  "Melting Temperature": "熔融温度",
  "Coefficient of Linear Thermal Expansion, CLTE": "线性热膨胀系数（CLTE）",
  "Volume Resistivity": "体积电阻率",
  "Surface Resistivity": "表面电阻率",
  "Dielectric Strength": "介电强度",
  "Drying Temperature": "干燥温度",
  "Drying Time": "干燥时间",
  "Melt Temperature": "熔体温度",
  "Hopper Temperature": "料斗温度",
  "Front Temperature": "前段温度",
  "Middle Temperature": "中段温度",
  "Rear Temperature": "后段温度",
  "Nozzle Temperature": "喷嘴温度",
  "Mold Temperature": "模具温度",
};

export function getPomGlassFiberComparison(
  records: readonly CatalogProductRecord[],
) {
  return records
    .filter(
      (record) => record.category === "Glass Fiber Reinforced POM Compound",
    )
    .map((record) => {
      if (record.glassFiberContent === undefined) {
        throw new Error(`Missing glass fiber content: ${record.grade}`);
      }
      return { ...record, glassFiberContent: record.glassFiberContent };
    })
    .sort(
      (a, b) =>
        a.glassFiberContent - b.glassFiberContent || a.sortOrder - b.sortOrder,
    );
}
