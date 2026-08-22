import type {
  ChineseOnlyProductGradeSliceESlug,
  LocalizedGradeProfileMessages,
} from "@/i18n/productFunnelTypes";
import { createChinesePomGradeProfile } from "../chinesePomGradeProfileFactory.ts";

const glassCategory = "玻纤增强 POM";
const glassApplications = ["汽车零部件", "电子电气零件", "卫浴零件", "工业注塑件"];
const carbonCategory = "碳纤增强 POM";
const carbonApplications = ["汽车功能零件", "电子电气零件", "工业注塑件"];
const glassEvaluation = (grade: string) =>
  `${grade} 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成纤维取向、熔接线、尺寸、刚度、冲击与热性能验证。`;
const glassNotes = (grade: string) =>
  `本页用于 ${grade} 的初步选型。玻纤增强材料具有方向性；流向、浇口、熔接线、壁厚、保压、模温和取样方向都可能改变收缩与力学表现。`;
const glassInquiry =
  "请提供零部件几何与壁厚、载荷与刚度目标、浇口与流向、收缩或翘曲问题、模具阶段、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。";

export const chinesePomGradeExpansionE = {
  "egh202h-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH202H",
    categoryLabel: glassCategory,
    metadataTitle: "EGH202H 10% 玻纤增强 POM | 台益",
    metadataDescription:
      "评估 EGH202H 10% 玻纤增强 POM 的刚度、强度、收缩与热性能方向，并申请资料或样品。",
    imageAlt: "台益 EGH202H 玻纤增强 POM 粒子",
    eyebrow: "10% 玻纤增强 POM · 标准增强方向",
    summary:
      "EGH202H 是采用 10% 玻璃纤维增强的标准 POM 候选牌号，用于汽车、电子电气、卫浴和工业零件的刚度、强度、收缩与热性能初筛。最终适用性需结合纤维取向、零部件几何、模具与载荷条件确认。",
    flowNote: "面向标准刚度提升与尺寸评估的 10% 玻纤方向",
    features: ["10% 玻璃纤维", "标准增强方向", "刚度提升方向", "尺寸验证要求"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH202H"),
    notesBody: glassNotes("EGH202H"),
    inquiryTitle: "评估 EGH202H 是否符合您的标准增强要求？",
    inquiryBody: glassInquiry,
  }),
  "egh302h-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH302H",
    categoryLabel: glassCategory,
    metadataTitle: "EGH302H 15% 玻纤增强 POM | 台益",
    metadataDescription:
      "评估 EGH302H 15% 玻纤增强 POM 的强度、刚度、收缩与热性能方向，并申请样品。",
    imageAlt: "台益 EGH302H 玻纤增强 POM 粒子",
    eyebrow: "15% 玻纤增强 POM · 中等增强方向",
    summary:
      "EGH302H 是采用 15% 玻璃纤维增强的 POM 候选牌号，用于在标准与更高增强方向之间评估强度、刚度、收缩和加工表现。最终适用性需结合纤维取向、熔接线、零部件几何、模具和载荷确认。",
    flowNote: "兼顾强度、刚度与加工评估的 15% 玻纤方向",
    features: ["15% 玻璃纤维", "中等增强方向", "强度提升方向", "收缩评估"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH302H"),
    notesBody: glassNotes("EGH302H"),
    inquiryTitle: "评估 EGH302H 是否符合您的强度与刚度要求？",
    inquiryBody: glassInquiry,
  }),
  "egh402h-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH402H",
    categoryLabel: glassCategory,
    metadataTitle: "EGH402H 20% 高刚度玻纤 POM | 台益",
    metadataDescription:
      "评估 EGH402H 20% 玻纤增强 POM 的高刚度、低收缩与耐热方向，并申请资料或样品。",
    imageAlt: "台益 EGH402H 高刚度玻纤 POM 粒子",
    eyebrow: "20% 玻纤增强 POM · 高刚度低收缩方向",
    summary:
      "EGH402H 是采用 20% 玻璃纤维增强的 POM 候选牌号，面向需要较高刚度、较低注塑收缩和耐热评估的功能与结构零件。最终适用性需结合纤维取向、载荷、尺寸公差、模具和使用温度确认。",
    flowNote: "面向较高刚度、低收缩与耐热评估的 20% 玻纤方向",
    features: ["20% 玻璃纤维", "高刚度方向", "较低收缩方向", "耐热评估"],
    applications: ["汽车功能零件", "精密零件", "结构注塑件"],
    evaluationBody: glassEvaluation("EGH402H"),
    notesBody: glassNotes("EGH402H"),
    inquiryTitle: "评估 EGH402H 是否符合您的刚度与尺寸要求？",
    inquiryBody: glassInquiry,
  }),
  "egh402t-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH402T",
    categoryLabel: glassCategory,
    metadataTitle: "EGH402T 20% 玻纤平衡流动 POM | 台益",
    metadataDescription:
      "评估 EGH402T 20% 玻纤增强 POM 的流动、刚度与尺寸控制方向，并申请样品。",
    imageAlt: "台益 EGH402T 玻纤增强 POM 粒子",
    eyebrow: "20% 玻纤增强 POM · 平衡流动方向",
    summary:
      "EGH402T 是采用 20% 玻璃纤维增强的 POM 候选牌号，用于兼顾注塑流动、刚度和尺寸控制的项目评估。最终适用性需结合流长、壁厚、浇口、纤维取向、熔接线和实际载荷确认。",
    flowNote: "兼顾流动、刚度与尺寸控制的 20% 玻纤方向",
    features: ["20% 玻璃纤维", "平衡流动方向", "刚度提升方向", "尺寸控制方向"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH402T"),
    notesBody: glassNotes("EGH402T"),
    inquiryTitle: "评估 EGH402T 是否适用于您的平衡流动增强零件？",
    inquiryBody: glassInquiry,
  }),
  "egh502t-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH502T",
    categoryLabel: glassCategory,
    metadataTitle: "EGH502T 25% 玻纤增强 POM | 台益",
    metadataDescription:
      "评估 EGH502T 25% 玻纤增强 POM 的刚度、低收缩与受控流动方向，并申请样品。",
    imageAlt: "台益 EGH502T 玻纤增强 POM 粒子",
    eyebrow: "25% 玻纤增强 POM · 受控流动方向",
    summary:
      "EGH502T 是采用 25% 玻璃纤维增强的 POM 候选牌号，用于需要较高刚度、较低收缩与受控加工流动性的注塑项目。最终适用性需结合零部件方向性、浇口、熔接线、尺寸公差和载荷确认。",
    flowNote: "兼顾较高刚度、低收缩与受控流动的 25% 玻纤方向",
    features: ["25% 玻璃纤维", "高刚度方向", "较低收缩方向", "受控流动方向"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH502T"),
    notesBody: glassNotes("EGH502T"),
    inquiryTitle: "评估 EGH502T 是否符合您的刚度与加工要求？",
    inquiryBody: glassInquiry,
  }),
  "egh580h-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH580H",
    categoryLabel: glassCategory,
    metadataTitle: "EGH580H 25% 高弯曲玻纤 POM | 台益",
    metadataDescription:
      "评估 EGH580H 25% 玻纤增强 POM 的弯曲、刚度、收缩与尺寸控制方向，并申请样品。",
    imageAlt: "台益 EGH580H 玻纤增强 POM 粒子",
    eyebrow: "25% 玻纤增强 POM · 高弯曲性能方向",
    summary:
      "EGH580H 是采用 25% 玻璃纤维增强的 POM 候选牌号，用于需要较高弯曲表现、刚度和尺寸控制的零部件初筛。最终适用性需结合流向、载荷方向、壁厚、熔接线、模具和使用温度确认。",
    flowNote: "面向较高弯曲表现与尺寸控制的 25% 玻纤方向",
    features: ["25% 玻璃纤维", "较高弯曲方向", "高刚度方向", "尺寸控制方向"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH580H"),
    notesBody: glassNotes("EGH580H"),
    inquiryTitle: "评估 EGH580H 是否符合您的弯曲与尺寸要求？",
    inquiryBody: glassInquiry,
  }),
  "egh580t-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH580T",
    categoryLabel: glassCategory,
    metadataTitle: "EGH580T 25% 玻纤刚韧平衡 POM | 台益",
    metadataDescription:
      "评估 EGH580T 25% 玻纤增强 POM 的刚度、冲击、流动与尺寸方向，并申请样品。",
    imageAlt: "台益 EGH580T 玻纤增强 POM 粒子",
    eyebrow: "25% 玻纤增强 POM · 刚度与冲击平衡方向",
    summary:
      "EGH580T 是采用 25% 玻璃纤维增强的 POM 候选牌号，用于兼顾高刚度、冲击表现与加工流动性的项目评估。最终适用性需结合缺口、纤维取向、熔接线、载荷、壁厚和使用温度确认。",
    flowNote: "兼顾高刚度、冲击表现与流动性的 25% 玻纤方向",
    features: ["25% 玻璃纤维", "高刚度方向", "冲击平衡方向", "流动评估"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH580T"),
    notesBody: glassNotes("EGH580T"),
    inquiryTitle: "评估 EGH580T 是否符合您的刚度与冲击要求？",
    inquiryBody: glassInquiry,
  }),
  "egh602h-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH602H",
    categoryLabel: glassCategory,
    metadataTitle: "EGH602H 30% 高刚度玻纤 POM | 台益",
    metadataDescription:
      "评估 EGH602H 30% 玻纤增强 POM 的高刚度、尺寸稳定与低收缩方向，并申请样品。",
    imageAlt: "台益 EGH602H 高刚度玻纤 POM 粒子",
    eyebrow: "30% 玻纤增强 POM · 高刚度尺寸稳定方向",
    summary:
      "EGH602H 是采用 30% 玻璃纤维增强的 POM 候选牌号，面向需要更高刚度、尺寸稳定与较低收缩的功能和精密零件。最终适用性需结合方向性、载荷、尺寸公差、浇口、模具和使用温度确认。",
    flowNote: "面向更高刚度、尺寸稳定与低收缩的 30% 玻纤方向",
    features: ["30% 玻璃纤维", "高刚度方向", "尺寸稳定方向", "较低收缩方向"],
    applications: ["汽车功能零件", "电子电气零件", "精密注塑件"],
    evaluationBody: glassEvaluation("EGH602H"),
    notesBody: glassNotes("EGH602H"),
    inquiryTitle: "评估 EGH602H 是否符合您的高刚度与尺寸要求？",
    inquiryBody: glassInquiry,
  }),
  "egh602t-glass-fiber-pom": createChinesePomGradeProfile({
    grade: "EGH602T",
    categoryLabel: glassCategory,
    metadataTitle: "EGH602T 30% 玻纤稳定加工 POM | 台益",
    metadataDescription:
      "评估 EGH602T 30% 玻纤增强 POM 的低收缩、刚度与稳定加工方向，并申请样品。",
    imageAlt: "台益 EGH602T 玻纤增强 POM 粒子",
    eyebrow: "30% 玻纤增强 POM · 低收缩稳定加工方向",
    summary:
      "EGH602T 是采用 30% 玻璃纤维增强的 POM 候选牌号，用于需要较低注塑收缩、增强刚度和稳定加工方向的零部件评估。最终适用性需结合纤维取向、流长、壁厚、浇口、保压与尺寸公差确认。",
    flowNote: "兼顾低收缩、增强刚度与稳定加工的 30% 玻纤方向",
    features: ["30% 玻璃纤维", "较低收缩方向", "稳定加工方向", "增强刚度方向"],
    applications: glassApplications,
    evaluationBody: glassEvaluation("EGH602T"),
    notesBody: glassNotes("EGH602T"),
    inquiryTitle: "评估 EGH602T 是否符合您的低收缩与加工要求？",
    inquiryBody: glassInquiry,
  }),
  "ecf200-carbon-fiber-pom": createChinesePomGradeProfile({
    grade: "ECF200",
    categoryLabel: carbonCategory,
    metadataTitle: "ECF200 20% 碳纤增强导电 POM | 台益",
    metadataDescription:
      "评估 ECF200 20% 碳纤增强 POM 的刚度、低收缩、尺寸稳定与导电方向。",
    imageAlt: "台益 ECF200 碳纤增强黑色 POM 粒子",
    eyebrow: "20% 碳纤增强 POM · 刚度与导电方向",
    summary:
      "ECF200 是采用 20% 碳纤维增强的黑色 POM 候选牌号，用于评估刚度、低收缩、尺寸稳定与导电方向。最终适用性需结合纤维取向、零部件几何、载荷、电阻目标、测试方法和环境确认。",
    flowNote: "面向刚度、尺寸稳定与导电筛选的 20% 碳纤方向",
    features: ["20% 碳纤维", "高刚度方向", "低收缩方向", "导电黑色方向"],
    applications: carbonApplications,
    evaluationBody:
      "ECF200 作为技术评估候选材料提供。最终认可需在客户模具和实际零部件上完成纤维取向、尺寸、刚度和电阻率验证。",
    notesBody:
      "本页用于 ECF200 的初步选型。碳纤增强材料具有方向性；浇口、流向、熔接线、壁厚、表面状态和测量位置都会影响力学与电性能。",
    inquiryTitle: "评估 ECF200 是否符合您的刚度与电阻目标？",
    inquiryBody:
      "请提供刚度与尺寸目标、电阻范围与测试方法、零部件几何、浇口与流向、使用环境、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "ecf300-carbon-fiber-pom": createChinesePomGradeProfile({
    grade: "ECF300",
    categoryLabel: carbonCategory,
    metadataTitle: "ECF300 30% 碳纤增强导电 POM | 台益",
    metadataDescription:
      "评估 ECF300 30% 碳纤增强 POM 的高刚度、低收缩、尺寸稳定与导电方向。",
    imageAlt: "台益 ECF300 碳纤增强黑色 POM 粒子",
    eyebrow: "30% 碳纤增强 POM · 高刚度导电方向",
    summary:
      "ECF300 是采用 30% 碳纤维增强的黑色 POM 候选牌号，用于需要高刚度、低收缩、尺寸稳定与导电方向的项目初筛。最终适用性需结合加工流动、纤维取向、载荷、电阻目标、测试方法和环境确认。",
    flowNote: "面向高刚度、低收缩与稳定导电筛选的 30% 碳纤方向",
    features: ["30% 碳纤维", "高刚度方向", "低收缩方向", "导电黑色方向"],
    applications: carbonApplications,
    evaluationBody:
      "ECF300 作为技术评估候选材料提供。最终认可需在客户模具和实际零部件上完成流动、纤维取向、尺寸、刚度和电阻率验证。",
    notesBody:
      "本页用于 ECF300 的初步选型。更高碳纤含量并非自动适用于所有零件；加工流动、表面、方向性、熔接线和电性能测量条件均需评估。",
    inquiryTitle: "评估 ECF300 是否符合您的高刚度与导电要求？",
    inquiryBody:
      "请提供刚度与尺寸目标、电阻范围与测试方法、壁厚与流长、浇口、使用环境、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "ecf400-carbon-fiber-pom": createChinesePomGradeProfile({
    grade: "ECF400",
    categoryLabel: carbonCategory,
    metadataTitle: "ECF400 40% 碳纤增强导电 POM | 台益",
    metadataDescription:
      "评估 ECF400 40% 碳纤增强 POM 的更高刚度、尺寸稳定与导电黑色材料方向。",
    imageAlt: "台益 ECF400 碳纤增强黑色 POM 粒子",
    eyebrow: "40% 碳纤增强 POM · 更高刚度导电方向",
    summary:
      "ECF400 是采用 40% 碳纤维增强的黑色 POM 候选牌号，用于更高刚度、尺寸稳定与导电方向的项目评估。最终适用性需重点结合加工流动、纤维取向、表面、熔接线、载荷、电阻目标和测试环境确认。",
    flowNote: "面向更高刚度、尺寸稳定与导电筛选的 40% 碳纤方向",
    features: ["40% 碳纤维", "更高刚度方向", "尺寸稳定方向", "导电黑色方向"],
    applications: carbonApplications,
    evaluationBody:
      "ECF400 作为技术评估候选材料提供。最终认可需在客户模具和实际零部件上完成充模、纤维取向、尺寸、刚度、表面和电阻率验证。",
    notesBody:
      "本页用于 ECF400 的初步选型。较高碳纤含量会提高对流动、浇口、取向、表面和熔接线的敏感性；必须按真实零部件和约定电测条件验证。",
    inquiryTitle: "评估 ECF400 是否适用于您的高填充碳纤项目？",
    inquiryBody:
      "请提供刚度与尺寸目标、电阻范围与测试方法、壁厚与流长、浇口、表面要求、使用环境、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
} satisfies Record<
  ChineseOnlyProductGradeSliceESlug,
  LocalizedGradeProfileMessages
>;
