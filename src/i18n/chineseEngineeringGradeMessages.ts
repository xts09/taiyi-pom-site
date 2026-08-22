import type {
  EngineeringTdsDocument,
  EngineeringTdsProperty,
} from "../data/engineeringTds.ts";
import { chineseEngineeringDirectionCopy } from "./messages/zh-CN-engineering-categories.ts";

const familyCopy = {
  PA6: {
    label: "PA6 改性材料",
    categoryPath: "/products/categories/pa6-compound",
    environmentNote:
      "PA6 的吸湿与调湿状态会影响尺寸和力学性能，数据比较与零部件测试需采用一致条件。",
  },
  PA66: {
    label: "PA66 改性材料",
    categoryPath: "/products/categories/pa66-compound",
    environmentNote:
      "PA66 的含水状态、温度和加工历史会影响实际性能，最终认可需基于目标零部件状态。",
  },
  PPA: {
    label: "PPA 改性材料",
    categoryPath: "/products/categories/ppa-compound",
    environmentNote:
      "PPA 需结合长期温度、热循环、含水状态和零部件尺寸要求完成验证。",
  },
} as const;

const propertyLabels: Record<string, string> = {
  "Specific gravity": "密度",
  "Water absorption(23 °C, 50 %RH)": "吸水率（23 °C、50% RH）",
  "Mold shrinkage(Flow direction, Φ = 100 mm, t = 3 mm)":
    "注塑收缩率（流动方向，Φ=100 mm，t=3 mm）",
  "Melting point (10 °C/min)": "熔融温度（10 °C/min）",
  "Heat deflection temperature (0.45 MPa)": "热变形温度（0.45 MPa）",
  "Heat deflection temperature (1.8 MPa)": "热变形温度（1.8 MPa）",
  "Flammability (t = 0.8 mm)": "阻燃等级（t=0.8 mm）",
  "Tensile modulus": "拉伸模量",
  "Tensile stress": "拉伸强度",
  "Elongation at break": "断裂伸长率",
  "Flexural strength": "弯曲强度",
  "Flexural modulus": "弯曲模量",
  "Charpy impact strength(Notched) @ 23 °C":
    "简支梁缺口冲击强度（23 °C）",
  "Rockwell Hardness(R-Scale)": "洛氏硬度（R 标尺）",
  "Volume resistivity": "体积电阻率",
  "Permittivity (1 MHz)": "介电常数（1 MHz）",
  "Filler contents": "填充含量",
};

const applicationCopy: Record<string, readonly string[]> = {
  "Automotive parts, electrical & electronics, industrial housings, brackets and precision molded components.":
    ["汽车功能零部件", "电气与电子零部件", "工业壳体与支架", "精密注塑件"],
  "Automotive parts, electrical & electronics, industrial housings, brackets and precision molded components requiring reduced warpage.":
    [
      "需要降低翘曲的汽车零部件",
      "电气与电子结构件",
      "工业壳体与支架",
      "尺寸稳定型精密注塑件",
    ],
  "Clips, fasteners, automotive interior/exterior parts and impact-resistant industrial components.":
    ["卡扣与紧固件", "汽车内外饰零部件", "抗冲工业零部件", "承受装配冲击的注塑件"],
  "Connectors, electrical housings, switches, bobbins, terminal blocks and other E&E components requiring V-0 review.":
    ["需要 V-0 审核的连接器", "电气壳体与开关", "线圈骨架", "接线端子与其他电气零部件"],
  "Connectors, electrical housings, switches, bobbins, terminal blocks and other E&E components.":
    ["连接器", "电气壳体与开关", "线圈骨架", "接线端子与其他电气零部件"],
  "Gears, bushings, rollers, sliding blocks, guide parts and motion components.":
    ["齿轮与衬套", "滚轮与滑块", "导向零部件", "其他运动组件"],
  "Precision molded components requiring dimensional stability and lower anisotropy.":
    ["尺寸稳定型精密注塑件", "要求较低各向异性的结构件", "尺寸公差敏感零部件"],
  "Thin-wall molded parts, complex geometry components and applications requiring smooth demolding.":
    ["薄壁注塑件", "复杂几何零部件", "需要顺畅脱模的零部件", "稳定批量注塑应用"],
};

const directionApplications: Record<string, readonly string[]> = {
  "Carbon Fiber Reinforced": ["高刚性结构件", "尺寸稳定型精密零部件", "需要导电方向评估的零部件"],
  "Flame Retardant": ["电气壳体", "连接器与端子", "需要阻燃等级审核的结构件"],
  "GF Mineral Reinforced": ["尺寸稳定型壳体", "降低翘曲的结构件", "高温精密注塑件"],
  "Glass Bead Filled": ["尺寸公差敏感零部件", "要求较低各向异性的精密注塑件"],
  "Glass Fiber Reinforced": ["汽车结构件", "电气与电子零部件", "工业壳体、支架与精密注塑件"],
  "Impact Modified": ["卡扣与紧固件", "汽车内外饰件", "抗冲工业零部件"],
  "Mineral Filled": ["尺寸稳定型壳体", "降低翘曲的结构件", "精密注塑件"],
  "Mold Release": ["薄壁注塑件", "复杂几何零部件", "需要顺畅脱模的部件"],
  "V0 Flame Retardant": ["需要 V-0 审核的连接器", "电气壳体", "线圈骨架与接线端子"],
  "Wear Low Friction": ["齿轮与衬套", "滚轮与滑块", "导向件和运动组件"],
};

const hasValue = (value?: string) =>
  Boolean(value && value !== "-" && value.toUpperCase() !== "N/A");

const localizeMethod = (method: string) =>
  method === "TAIYI Standard" ? "Taiyi 内部标准" : method;

const localizeUnit = (unit: string) => (unit === "Class" ? "等级" : unit);

export const localizeEngineeringProperty = (
  property: EngineeringTdsProperty,
) => ({
  label: propertyLabels[property.label] ?? property.label,
  value: property.value,
  unit: localizeUnit(property.unit),
  method: localizeMethod(property.method),
});

export const getChineseEngineeringApplications = (
  document: EngineeringTdsDocument,
) =>
  applicationCopy[document.applications] ??
  directionApplications[document.category] ?? ["工程塑料注塑件项目评估"];

export const createChineseEngineeringGradeCopy = (
  document: EngineeringTdsDocument,
) => {
  const family = familyCopy[document.family];
  const direction = chineseEngineeringDirectionCopy[document.category] ?? {
    label: document.category,
    summary: "结合零部件功能、加工条件与目标性能进行项目评估。",
  };
  const fillerText = hasValue(document.filler)
    ? `${document.filler}% 填充／增强参考`
    : "改性体系按项目确认";
  const flammabilityText = hasValue(document.flammability)
    ? `${document.flammability} 阻燃等级参考`
    : "阻燃等级按牌号与项目确认";
  const summary = `${document.grade} 是 ${document.family} ${direction.label}方向牌号，${direction.summary} 当前页面所列数值用于技术初筛；最终适用性需结合零部件几何、模具、加工窗口和实际工况确认。`;
  const properties = document.properties.map(localizeEngineeringProperty);

  return {
    categoryLabel: family.label,
    categorySourcePath: family.categoryPath,
    directionLabel: direction.label,
    metadata: {
      title: `${document.grade} ${document.family} ${direction.label}牌号 | 台益`,
      description: `${document.grade} ${document.family} ${direction.label}牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。`,
      imageAlt: `台益 ${document.grade} ${document.family} ${direction.label}材料`,
    },
    eyebrow: `${document.family} · ${direction.label}`,
    summary,
    documentSupport: "资料支持",
    documentNote: "TDS、SDS、COA、REACH 与 RoHS 的可用性按牌号、市场和项目确认。",
    tdsAction: `申请 ${document.grade} 技术数据`,
    sampleAction: `申请 ${document.grade} 样品`,
    snapshot: {
      aria: `${document.grade} 关键数据概览`,
      title: "牌号数据概览",
      body: "用于早期比较的目录参考值；数值、单位、标准和测试条件需结合阅读。",
      items: [
        { label: "密度", value: document.density, note: "ISO 1183" },
        {
          label: "拉伸强度",
          value: document.tensile,
          unit: "MPa",
          note: "ISO 527",
        },
        {
          label: "HDT（1.8 MPa）",
          value: document.hdt,
          unit: "degC",
          note: "ISO 75",
        },
        {
          label: "阻燃等级",
          value: document.flammability,
          note: "UL 94，0.8 mm",
        },
      ].filter((item) => hasValue(item.value)),
    },
    sectionNav: {
      aria: `${document.grade} 产品详情分区`,
      properties: "性能数据",
      fit: "材料特点",
      evaluation: "评估路径",
      notes: "注意事项",
    },
    properties: {
      kicker: "技术依据",
      title: "用于初筛的完整参考数据",
      body: "以下数值来自牌号目录。测试结果不能脱离单位、方法、试样状态与实际零部件条件单独使用。",
      property: "性能",
      value: "数值",
      unit: "单位",
      method: "测试方法",
      requestAction: "申请最新牌号资料",
      items: properties,
    },
    featuresTitle: "牌号特点",
    features: [
      `${document.family} ${direction.label}方向`,
      fillerText,
      flammabilityText,
      family.environmentNote,
    ],
    applicationsTitle: "典型评估方向",
    applications: getChineseEngineeringApplications(document),
    evaluation: {
      kicker: "技术评估路径",
      title: "从目录数据到零部件认可",
      body: "牌号数据用于缩小候选范围，最终认可需在目标模具、工艺和实际工况下完成。",
      steps: [
        {
          title: "明确零部件要求",
          body: "提供功能、载荷、温湿度、壁厚、尺寸和法规要求。",
        },
        {
          title: "审核数据与加工",
          body: "结合增强体系、流动、收缩、干燥、模具和测试条件比较候选牌号。",
        },
        {
          title: "完成样品验证",
          body: "在目标模具和实际零部件上确认尺寸、外观、性能与文件要求。",
        },
      ],
    },
    notes: {
      title: "材料评估注意事项",
      body: `${family.environmentNote} 本页用于初步材料筛选，不构成不经验证的替代、等同或适用性承诺。`,
      categoryAction: `查看全部 ${document.family} 牌号`,
    },
    inquiry: {
      eyebrow: "项目评估",
      title: `准备 ${document.grade} 牌号评估`,
      body: "请提供应用、关键性能、模具阶段、模穴数、尺寸关注点、当前材料或参考牌号、资料需求和预估用量。我们将据此确认数据、样品和验证步骤。",
      action: "提交牌号评估信息",
    },
    related: {
      kicker: "牌号比较",
      title: `比较相关 ${document.family} 牌号`,
      categoryAction: `查看 ${document.family} 分类`,
      tensile: "拉伸强度",
      hdt: "HDT",
    },
  };
};
