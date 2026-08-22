import type {
  ChineseOnlyProductGradeSliceDSlug,
  LocalizedGradeProfileMessages,
} from "@/i18n/productFunnelTypes";
import { createChinesePomGradeProfile } from "../chinesePomGradeProfileFactory.ts";

const categoryLabel = "耐候 POM";
const applications = ["汽车零部件", "电子电气零件", "卫浴配件", "工业注塑件"];

export const chinesePomGradeExpansionD = {
  "etm090u-uv-resistant-pom": createChinesePomGradeProfile({
    grade: "ETM090U",
    categoryLabel,
    metadataTitle: "ETM090U 中等流动耐候 POM | Taiyi Polymer",
    metadataDescription:
      "评估 ETM090U 中等流动耐候 POM 的力学、收缩、热性能与颜色方向，并申请资料或样品。",
    imageAlt: "Taiyi Polymer ETM090U 耐候 POM 粒子",
    eyebrow: "耐候 POM · 中等流动方向",
    summary:
      "ETM090U 是面向汽车、电子电气、卫浴和精密注塑件的中等流动耐候 POM 候选牌号。已发布数据支持材料初筛；耐候适用性必须结合目标光源、暴露周期、温度、颜色变化与实际使用环境确认。",
    flowNote: "兼顾中等流动、力学表现与耐候筛选的方向",
    features: ["耐候方向", "中等流动方向", "本色或黑色", "光照验证要求"],
    applications: ["汽车零部件", "电子电气零件", "卫浴配件", "精密注塑件"],
    evaluationBody:
      "ETM090U 作为技术评估候选材料提供。最终认可需在客户模具和目标暴露条件中完成加工、尺寸、颜色与性能保持验证。",
    notesBody:
      "本页用于 ETM090U 的初步选型。耐候方向不等于对所有光源和周期均自动适用；辐照强度、时间、温湿度、颜色、壁厚和应力状态都需按项目确认。",
    inquiryTitle: "评估 ETM090U 是否适用于您的光照环境零件？",
    inquiryBody:
      "请提供光源与暴露周期、使用温湿度、颜色变化限值、零部件几何、当前材料、目标性能、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "etm100pu-uv-resistant-pom": createChinesePomGradeProfile({
    grade: "ETM100PU",
    categoryLabel,
    metadataTitle: "ETM100PU 高流动耐候 POM | Taiyi Polymer",
    metadataDescription:
      "评估 ETM100PU 高流动耐候 POM 的充模、力学、热性能与耐候方向，并申请样品。",
    imageAlt: "Taiyi Polymer ETM100PU 耐候 POM 粒子",
    eyebrow: "耐候 POM · 高流动注塑方向",
    summary:
      "ETM100PU 是面向汽车、电子电气、卫浴和工业注塑件的高流动耐候 POM 候选牌号，用于同时审核充模和光照环境下的材料方向。最终适用性需结合实际流长、壁厚、模具、光源、暴露周期、颜色和使用温度确认。",
    flowNote: "面向填充要求更高零件的高流动耐候方向",
    features: ["耐候方向", "高流动方向", "本色或黑色", "注塑充模评估"],
    applications,
    evaluationBody:
      "ETM100PU 作为技术评估候选材料提供。最终认可需在客户模具和目标暴露条件中完成充模、尺寸、颜色与性能保持验证。",
    notesBody:
      "本页用于 ETM100PU 的初步选型。流动方向与耐候方向必须分别验证；壁厚、流长、浇口、加工窗口、光源、周期和温湿度都会影响结果。",
    inquiryTitle: "评估 ETM100PU 是否适用于您的填充敏感耐候零件？",
    inquiryBody:
      "请提供壁厚与流长、浇口、模具阶段、光源与暴露周期、温湿度、颜色要求、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "edr180u-uv-resistant-pom": createChinesePomGradeProfile({
    grade: "EDR180U",
    categoryLabel,
    metadataTitle: "EDR180U 高抗冲哑光耐候 POM | Taiyi Polymer",
    metadataDescription:
      "评估 EDR180U 高抗冲哑光耐候 POM 的冲击、外观、流动与热性能方向，并申请样品。",
    imageAlt: "Taiyi Polymer EDR180U 哑光耐候 POM 粒子",
    eyebrow: "耐候 POM · 高抗冲哑光方向",
    summary:
      "EDR180U 是面向需要同时评估冲击韧性、哑光外观和耐候方向零件的 POM 候选牌号。最终适用性需结合零部件缺口与壁厚、载荷、光源、暴露周期、颜色和实际使用温度确认。",
    flowNote: "兼顾高抗冲、哑光外观与耐候筛选的方向",
    features: ["耐候方向", "高抗冲方向", "哑光方向", "本色或黑色"],
    applications,
    evaluationBody:
      "EDR180U 作为技术评估候选材料提供。最终认可需在客户模具和目标暴露条件中完成冲击、低温、表面外观、颜色与性能保持验证。",
    notesBody:
      "本页用于 EDR180U 的初步选型。哑光外观、冲击与耐候表现均受表面纹理、壁厚、加工条件、光源、周期、温湿度和颜色影响。",
    inquiryTitle: "评估 EDR180U 是否符合您的冲击、哑光与耐候要求？",
    inquiryBody:
      "请提供冲击与外观目标、表面纹理、光源与暴露周期、温湿度、颜色、零部件几何、当前材料、用量和所需资料。我们将据此准备牌号与样品评估。",
  }),
  "edr2000zd-uv-resistant-pom": createChinesePomGradeProfile({
    grade: "EDR2000ZD-UV",
    categoryLabel,
    metadataTitle: "EDR2000ZD-UV 高抗冲耐老化 POM | Taiyi Polymer",
    metadataDescription:
      "评估 EDR2000ZD-UV 高抗冲、耐紫外与耐老化 POM 的外观和性能保持方向。",
    imageAlt: "Taiyi Polymer EDR2000ZD-UV 耐候 POM 粒子",
    eyebrow: "耐候 POM · 高抗冲与耐老化方向",
    summary:
      "EDR2000ZD-UV 是面向光照环境下外观与性能保持评估的高抗冲、耐紫外和耐老化 POM 候选牌号。最终适用性需结合光源、辐照强度、暴露周期、温湿度、颜色、载荷和零部件几何确认。",
    flowNote: "面向高抗冲、耐紫外与耐老化筛选的方向",
    features: ["耐紫外方向", "耐老化方向", "高抗冲方向", "本色或黑色"],
    applications: ["汽车零部件", "电子电气零件", "卫浴配件", "精密注塑件"],
    evaluationBody:
      "EDR2000ZD-UV 作为技术评估候选材料提供。最终认可需在客户模具和目标暴露条件中完成冲击、颜色、外观与性能保持验证。",
    notesBody:
      "本页用于 EDR2000ZD-UV 的初步选型。耐紫外与耐老化方向不能替代约定标准和实际环境测试；光谱、剂量、周期、温湿度和应力状态必须明确。",
    inquiryTitle: "评估 EDR2000ZD-UV 是否适用于您的长期光照环境？",
    inquiryBody:
      "请提供光源或测试标准、辐照强度与周期、温湿度、颜色和性能保持目标、零部件几何、当前材料、用量及所需资料。我们将据此准备牌号与样品评估。",
  }),
} satisfies Record<
  ChineseOnlyProductGradeSliceDSlug,
  LocalizedGradeProfileMessages
>;
