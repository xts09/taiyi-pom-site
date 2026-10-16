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
      "ETM270H 是耐磨 POM 牌号，面向齿轮、滑动件、轴套和功能注塑件的充模、拉伸及弯曲性能需求。",
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
      "EPAF100A 是芳纶纤维改性的高耐磨 POM 牌号，选材关注刚度、磨耗、尺寸与耐热表现。",
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
      "查看 EPTL402 PTFE 填充耐磨 POM 的流动性、力学与热性能，以及滑动件、轴套和齿轮应用参考。可申请 TDS 和样品。",
    imageAlt: "台益 EPTL402 PTFE 填充耐磨 POM 粒子",
    eyebrow: "PTFE 填充耐磨 POM",
    summary:
      "EPTL402 是 PTFE 填充耐磨 POM，面向滑动件、轴套、齿轮和运动组件。现有数据表列有流动性、力学和热性能，供牌号比较与样件选材参考。",
    flowNote: "ISO 1133 · 195 °C / 2.16 kg",
    features: ["PTFE 填充配方", "耐磨 POM", "面向滑动组件", "本色"],
    applications: ["滑动件", "轴套", "齿轮", "工业运动组件"],
    evaluationBody:
      "样件评估关注实际摩擦副中的磨耗、噪声、尺寸变化和使用寿命，测试条件包括载荷、速度、润滑与温度。",
    notesBody:
      "数据表中的性能值用于初步选材。摩擦与磨耗表现需结合对偶材料、表面粗糙度及实际工况确认。",
    inquiryTitle: "EPTL402 数据与样品",
    inquiryBody:
      "提供对偶材料、载荷、速度和润滑情况，可帮助判断 EPTL402 是否适合您的零件。也可注明颜色、用量及所需技术资料。",
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
      "ENM1040 采用耐磨添加剂体系，面向滑动件、齿轮和功能注塑件的耐磨与加工需求。",
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
      "EDM-111 是高耐磨 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的耐磨与稳定加工需求。",
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
  "ems102-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EMS102",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EMS102 MoS2 填充黑色 POM | 台益",
    metadataDescription:
      "查看 EMS102 MoS2 填充黑色 POM 的力学、热、电学和注塑参考数据，并申请资料或样品。",
    imageAlt: "POM 改性材料示意图",
    eyebrow: "MoS2 填充 POM · 黑色",
    summary:
      "MoS2 改性黑色耐磨 POM。复杂流道或充模流动性敏感的零件，首轮优先评估 EMS102（MFI 8 g/10 min，拉伸强度 60 MPa）。",
    flowNote: "MoS2 填充 · 充模流动性优先",
    colorValue: "黑色",
    features: ["MoS2 填充", "黑色", "充模流动性优先", "目录 MFI 8 g/10 min"],
    applications: ["汽车零部件", "电子电气零件", "卫浴配件", "工业注塑件"],
    evaluationBody:
      "充模敏感的零件优先将 EMS102 纳入首轮试模，记录填充完整性与熔接线，再按实际对偶面比较启动阻力、磨耗和间隙变化。",
    notesBody:
      "目录典型值；拉伸强度：ISO 527；MFI：ISO 1133，195 °C／2.16 kg。牌号放行以目标摩擦副下的磨耗、间隙和寿命验收结果为准。",
    inquiryTitle: "EMS102 选型与试模资料",
    inquiryBody:
      "说明零件结构、现用材料和磨损问题，获取 EMS102 与 EMS162 的物性对比、TDS 和试模样品支持。",
  }),
  "ems162-high-wear-resistant-pom": createChinesePomGradeProfile({
    grade: "EMS162",
    categoryLabel: "耐磨与低摩擦 POM",
    metadataTitle: "EMS162 MoS2 填充黑色耐磨 POM | 台益",
    metadataDescription:
      "评估 EMS162 MoS2 填充黑色耐磨 POM 的磨耗、力学、尺寸与热性能方向，并申请样品。",
    imageAlt: "台益 EMS162 MoS2 填充黑色耐磨 POM 粒子",
    eyebrow: "MoS2 填充 POM · 黑色",
    summary:
      "MoS2 改性黑色耐磨 POM。滑动与传动件以拉伸强度为主要筛选指标时，从 EMS162 切入对比（65 MPa，MFI 7 g/10 min）。",
    flowNote: "MoS2 填充 · 拉伸强度优先",
    colorValue: "黑色",
    features: ["MoS2 填充", "黑色", "拉伸强度优先", "目录拉伸强度 65 MPa"],
    applications: ["滑动件", "汽车功能零件", "电子电气零件", "工业注塑件"],
    evaluationBody:
      "以拉伸受力为主要要求的滑动与传动件，从 EMS162 切入试模。用现用材料作基准，比较受力变形、接触磨耗与间隙保持。",
    notesBody:
      "目录典型值；拉伸强度：ISO 527；MFI：ISO 1133，195 °C／2.16 kg。牌号放行以目标摩擦副下的磨耗、间隙和寿命验收结果为准。",
    inquiryTitle: "EMS162 选型与试模资料",
    inquiryBody:
      "说明零件受力、对偶件和当前磨损问题，获取 EMS162 与 EMS102 的物性对比、TDS 和试模样品支持。",
  }),
} satisfies Record<
  ChineseOnlyProductGradeSliceCSlug,
  LocalizedGradeProfileMessages
>;
