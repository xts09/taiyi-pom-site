import type {
  ChineseOnlyProductGradeSliceFSlug,
  LocalizedGradeProfileMessages,
} from "@/i18n/productFunnelTypes";
import { createChinesePomGradeProfile } from "../chinesePomGradeProfileFactory.ts";

const categoryLabel = "导电与抗静电 POM";

export const chinesePomGradeExpansionF = {
  "egh25cn-conductive-antistatic-pom": createChinesePomGradeProfile({
    grade: "EGH25CN",
    categoryLabel,
    metadataTitle: "EGH25CN 受控电阻率 POM | 台益",
    metadataDescription:
      "评估 EGH25CN 黑色 POM 的受控电阻率、刚度、收缩与热性能方向，并申请资料或样品。",
    imageAlt: "台益 EGH25CN 黑色受控电阻率 POM 粒子",
    eyebrow: "导电与抗静电 POM · 受控电阻率方向",
    summary:
      "EGH25CN 是面向汽车、电子电气、卫浴和工业注塑件受控电阻率需求的黑色 POM 候选牌号。最终适用性需先定义目标电阻范围、测试方法、环境和测量位置，再结合零部件几何、模具与力学要求验证。",
    flowNote: "面向受控电阻率与较高刚度筛选的黑色 POM 方向",
    features: ["受控电阻率方向", "黑色", "刚度评估", "零件级电测要求"],
    applications: ["汽车注塑件", "电子电气零件", "卫浴零件", "工业注塑件"],
    evaluationBody:
      "EGH25CN 作为技术评估候选材料提供。最终认可需在客户模具和实际零部件上按约定方法完成表面与体积电阻、尺寸、力学和环境稳定性验证。",
    notesBody:
      "本页用于 EGH25CN 的初步选型。电阻率受测试方法、温湿度、试样状态、表面、测量位置和零部件几何影响；目录数值不能替代零件级验证。",
    inquiryTitle: "评估 EGH25CN 是否符合您的受控电阻率要求？",
    inquiryBody:
      "请提供目标表面与体积电阻范围、测试方法、温湿度、测量位置、零部件几何、力学目标、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "ecn1003b-conductive-pom": createChinesePomGradeProfile({
    grade: "ECN1003B",
    categoryLabel,
    metadataTitle: "ECN1003B 黑色导电 POM | 台益",
    metadataDescription:
      "评估 ECN1003B 黑色导电 POM 的较低表面与体积电阻率、尺寸和力学性能方向。",
    imageAlt: "台益 ECN1003B 黑色导电 POM 粒子",
    eyebrow: "导电 POM · 较低电阻率方向",
    summary:
      "ECN1003B 是面向电子零件、抗静电注塑件和功能塑料零件较低电阻率需求的黑色导电 POM 候选牌号。最终适用性需明确电阻范围、测试方法、环境与测量位置，并结合尺寸、力学和实际装配要求确认。",
    flowNote: "面向较低表面与体积电阻率筛选的黑色导电方向",
    features: ["导电方向", "较低电阻率方向", "黑色", "尺寸稳定方向"],
    applications: ["电子零部件", "抗静电注塑件", "功能塑料零件"],
    evaluationBody:
      "ECN1003B 作为技术评估候选材料提供。最终认可需在客户模具和实际零部件上按约定方法完成电阻率、尺寸、力学与环境稳定性验证。",
    notesBody:
      "本页用于 ECN1003B 的初步选型。导电方向不代表自动满足特定 ESD 或安全规范；电阻目标、测试条件、接触方式、环境和零部件结构必须逐项确认。",
    inquiryTitle: "评估 ECN1003B 是否符合您的导电零件要求？",
    inquiryBody:
      "请提供目标表面与体积电阻范围、测试或 ESD 要求、温湿度、测量位置、零部件几何、力学目标、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
} satisfies Record<
  ChineseOnlyProductGradeSliceFSlug,
  LocalizedGradeProfileMessages
>;
