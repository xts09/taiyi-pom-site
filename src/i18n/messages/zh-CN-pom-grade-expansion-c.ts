import type {
  ChineseOnlyProductGradeSliceCSlug,
  LocalizedGradeProfileMessages,
} from "@/i18n/productFunnelTypes";
import { createChinesePomGradeProfile } from "../chinesePomGradeProfileFactory.ts";

export const chinesePomGradeExpansionC = {
  "etm270h-wear-resistant-pom": {
    categoryLabel: "耐磨与低摩擦 POM",
    metadata: {
      title: "ETM270H 耐磨高流动 POM | 台益",
      description:
        "根据强度、刚度、收缩与热性能数据评估 ETM270H 耐磨 POM 是否适合齿轮、滑动件和轴套。",
      imageAlt: "台益 ETM270H 耐磨 POM 粒子",
    },
    breadcrumb: "ETM270H",
    eyebrow: "耐磨 POM · 滑动与运动零件",
    summary:
      "ETM270H 是面向齿轮、滑动件、轴套和功能注塑件的耐磨 POM 候选牌号，用于同时评估充模、拉伸、弯曲与耐磨方向。已发布数据支持前期筛选；实际摩擦、磨耗和寿命仍需结合摩擦副、载荷、速度、润滑、温度与零部件几何验证。",
    sampleAction: "申请 ETM270H 样品",
    snapshot: {
      aria: "ETM270H 关键数据概览",
      title: "ETM270H 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "面向滑动与运动零件的耐磨和高流动方向",
    },
    sectionNavAria: "ETM270H 产品页分区",
    features: ["高流动方向", "耐磨方向", "滑动应用方向", "尺寸验证要求"],
    applications: ["齿轮", "滑动件", "轴套", "功能注塑件"],
    evaluationBody:
      "ETM270H 作为技术评估候选材料提供。最终认可需在客户模具和实际摩擦副中完成充模、尺寸、磨耗、噪声与寿命验证。",
    notesBody:
      "本页用于 ETM270H 的初步选型。材料数据不能替代目标摩擦副测试；配对材料、表面粗糙度、载荷、速度、润滑、温度、壁厚与浇口均可能改变实际结果。",
    inquiry: {
      eyebrow: "ETM270H 项目评估",
      title: "评估 ETM270H 是否适用于您的滑动或运动零件？",
      body: "请提供零部件几何、摩擦副材料、载荷与速度、润滑条件、使用温度、当前材料、失效现象、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 ETM270H 评估",
    },
  },
  "epaf100a-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EPAF100A",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EPAF100A 芳纶纤维耐磨 POM | 台益",
    metadataDescription:
      "评估 EPAF100A 芳纶纤维改性耐磨 POM 的刚度、耐磨与热性能方向，并申请资料或样品。",
    imageAlt: "台益 EPAF100A 芳纶纤维耐磨 POM 粒子",
    eyebrow: "芳纶纤维改性 POM · 高耐磨方向",
    summary:
      "EPAF100A 是采用芳纶纤维改性的高耐磨 POM 候选牌号，用于同时评估刚度、磨耗、尺寸与耐热表现。已发布数据支持前期筛选；实际耐磨寿命仍需结合纤维取向、摩擦副、载荷、速度、润滑和温度验证。",
    flowNote: "面向刚度、耐磨与较高热性能的芳纶纤维改性方向",
    features: ["芳纶纤维改性", "高耐磨方向", "刚度提升方向", "较高热性能方向"],
    applications: ["汽车功能零件", "电子电气零件", "卫浴配件", "工业注塑件"],
    evaluationBody:
      "EPAF100A 作为技术评估候选材料提供。最终认可需在客户模具和目标摩擦副中完成纤维取向、尺寸、磨耗与热性能验证。",
    notesBody:
      "本页用于 EPAF100A 的初步选型。纤维取向、熔接线、表面粗糙度、配对材料、载荷、速度和温度都可能改变零部件刚度与磨耗表现。",
    inquiryTitle: "评估 EPAF100A 是否符合您的耐磨与刚度要求？",
    inquiryBody:
      "请提供零部件几何、摩擦副、载荷与速度、温度、润滑、刚度目标、当前材料、失效现象、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "eptl402-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EPTL402",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EPTL402 PTFE 填充低摩擦 POM | 台益",
    metadataDescription:
      "评估 EPTL402 PTFE 填充耐磨 POM 是否适合滑动件、轴套、齿轮和低摩擦应用。",
    imageAlt: "台益 EPTL402 PTFE 填充耐磨 POM 粒子",
    eyebrow: "PTFE 填充 POM · 低摩擦滑动方向",
    summary:
      "EPTL402 是面向滑动件、轴套、齿轮和运动组件的 PTFE 填充高耐磨 POM 候选牌号，用于审核低摩擦与磨耗方向。最终适用性需结合目标摩擦副、表面状态、载荷、速度、润滑、温度和噪声要求确认。",
    flowNote: "面向滑动件与低摩擦磨损应用的 PTFE 填充方向",
    features: ["PTFE 填充方向", "高耐磨方向", "低摩擦滑动方向", "摩擦副验证要求"],
    applications: ["滑动件", "轴套", "齿轮", "工业运动组件"],
    evaluationBody:
      "EPTL402 作为技术评估候选材料提供。最终认可需在目标摩擦副和实际工况中完成摩擦、磨耗、噪声、尺寸与寿命验证。",
    notesBody:
      "本页用于 EPTL402 的初步选型。PTFE 填充方向不代表对所有配对材料都具有相同摩擦表现；表面粗糙度、载荷、速度、润滑和温度必须按项目确认。",
    inquiryTitle: "评估 EPTL402 是否适用于您的低摩擦滑动件？",
    inquiryBody:
      "请提供摩擦副材料、表面状态、载荷、速度、运动方式、润滑、温度、当前材料、失效现象、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "enm1040-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "ENM1040",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "ENM1040 特殊添加剂耐磨 POM | 台益",
    metadataDescription:
      "评估 ENM1040 特殊耐磨添加剂 POM 的磨耗、流动、强度与热性能方向，并申请样品。",
    imageAlt: "台益 ENM1040 耐磨 POM 粒子",
    eyebrow: "特殊添加剂 POM · 均衡耐磨方向",
    summary:
      "ENM1040 是采用特殊耐磨添加剂体系的 POM 候选牌号，用于滑动件、齿轮和功能注塑件的耐磨与加工平衡评估。最终适用性需结合目标摩擦副、载荷、速度、润滑、温度和零部件几何确认。",
    flowNote: "兼顾耐磨方向与注塑加工表现的特殊添加剂体系",
    features: ["特殊耐磨添加剂", "高耐磨方向", "均衡加工方向", "滑动应用方向"],
    applications: ["滑动件", "齿轮", "功能注塑件", "工业注塑件"],
    evaluationBody:
      "ENM1040 作为技术评估候选材料提供。最终认可需在客户模具和实际摩擦副中完成充模、尺寸、磨耗与寿命验证。",
    notesBody:
      "本页用于 ENM1040 的初步选型。添加剂体系的实际效果受摩擦副、表面粗糙度、载荷、速度、润滑、温度和加工窗口影响。",
    inquiryTitle: "评估 ENM1040 是否适用于您的耐磨功能零件？",
    inquiryBody:
      "请提供零部件几何、摩擦副、载荷与速度、润滑、温度、当前材料、磨损或噪声问题、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "edm-111-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EDM-111",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EDM-111 高耐磨 POM | 台益",
    metadataDescription:
      "评估 EDM-111 高耐磨 POM 的加工、尺寸、力学与热性能方向，并申请项目资料或样品。",
    imageAlt: "台益 EDM-111 本色高耐磨 POM 粒子",
    eyebrow: "高耐磨 POM · 稳定注塑方向",
    summary:
      "EDM-111 是面向汽车、电子电气、卫浴和工业注塑应用的高耐磨 POM 候选牌号，用于评估耐磨方向与稳定注塑表现。最终适用性需结合零部件几何、摩擦副、载荷、速度、温度和模具条件确认。",
    flowNote: "面向多类功能注塑件的高耐磨与稳定加工方向",
    features: ["高耐磨方向", "稳定注塑方向", "本色", "项目工况验证要求"],
    applications: ["汽车零部件", "电子电气零件", "卫浴配件", "工业注塑件"],
    evaluationBody:
      "EDM-111 作为技术评估候选材料提供。最终认可需在客户模具和目标工况中完成加工、尺寸、磨耗与寿命验证。",
    notesBody:
      "本页用于 EDM-111 的初步选型。耐磨方向不能替代目标摩擦副测试；配对材料、表面状态、载荷、速度、温度和润滑条件均会影响结果。",
    inquiryTitle: "评估 EDM-111 是否适用于您的耐磨注塑件？",
    inquiryBody:
      "请提供应用、零部件几何、摩擦副、载荷与速度、温度、润滑、当前材料、失效现象、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "ems162-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EMS162",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EMS162 MoS2 填充黑色耐磨 POM | 台益",
    metadataDescription:
      "评估 EMS162 MoS2 填充黑色耐磨 POM 的磨耗、力学、尺寸与热性能方向，并申请样品。",
    imageAlt: "台益 EMS162 MoS2 填充黑色耐磨 POM 粒子",
    eyebrow: "MoS2 填充 POM · 黑色耐磨方向",
    summary:
      "EMS162 是采用 MoS2 填充的黑色高耐磨 POM 候选牌号，用于滑动件、汽车功能件和工业注塑件的耐磨与稳定力学表现评估。最终适用性需结合摩擦副、载荷、速度、润滑、温度和外观要求确认。",
    flowNote: "兼顾耐磨与稳定力学表现的 MoS2 填充黑色方向",
    features: ["MoS2 填充方向", "高耐磨方向", "稳定力学方向", "黑色"],
    applications: ["滑动件", "汽车功能零件", "电子电气零件", "工业注塑件"],
    evaluationBody:
      "EMS162 作为技术评估候选材料提供。最终认可需在客户模具和实际摩擦副中完成磨耗、噪声、尺寸、外观与寿命验证。",
    notesBody:
      "本页用于 EMS162 的初步选型。MoS2 填充方向的实际摩擦与磨耗表现受配对材料、表面状态、载荷、速度、润滑、温度和加工条件影响。",
    inquiryTitle: "评估 EMS162 是否适用于您的黑色耐磨零件？",
    inquiryBody:
      "请提供零部件几何、摩擦副、载荷与速度、润滑、温度、当前材料、磨损或噪声问题、黑色外观要求、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
} satisfies Record<
  ChineseOnlyProductGradeSliceCSlug,
  LocalizedGradeProfileMessages
>;
