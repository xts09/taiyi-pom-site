import type {
  ChineseOnlyProductCategorySlug,
  LocalizedCategoryProfileMessages,
} from "@/i18n/productFunnelTypes";

export const chinesePomCategoryExpansion = {
  "wear-resistant-low-friction-pom-compound": {
    categoryLabel: "耐磨与低摩擦 POM",
    metadata: {
      title: "耐磨与低摩擦 POM 牌号目录 | 台益",
      description:
        "PLATFORM® 耐磨与低摩擦 POM 面向齿轮、轴套、滚轮、导轨及其他运动零件，覆盖 PTFE、MoS2、芳纶纤维等改性体系。",
      imageAlt: "台益耐磨与低摩擦 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "耐磨与低摩擦 POM",
      description:
        "PLATFORM® 耐磨与低摩擦 POM 采用 PTFE、MoS2、芳纶纤维及其他耐磨改性体系，面向齿轮、轴套、滚轮、导轨等持续滑动或转动的零件。不同牌号在摩擦、磨损、强度与加工性能之间各有侧重。",
      overviewLabel: "材料概览",
      overview:
        "系列配套关键力学与热性能数据，技术文件和样品按具体牌号与项目确认。",
    },
    navigation: {
      aria: "耐磨与低摩擦 POM 页面分区导航",
      title: "耐磨与低摩擦 POM",
      subtitle: "面向齿轮、轴套、滚轮与导轨等运动部件",
    },
    directory: {
      kicker: "牌号范围",
      title: "耐磨与低摩擦 POM 牌号",
      body:
        "从 PTFE、MoS2、芳纶纤维到其他耐磨添加体系，不同牌号提供各有侧重的摩擦、耐磨、强度与加工性能组合，并配套关键力学与热性能数据。",
      summaries: {
        "etm270h-wear-resistant-pom":
          "耐磨改性 POM，兼顾较高的拉伸与弯曲表现。",
        "epaf100a-high-wear-resistant-pom":
          "芳纶纤维改性高耐磨 POM，用于评估刚度、耐磨和耐热表现。",
        "eptl402-high-wear-resistant-pom":
          "PTFE 填充高耐磨 POM，用于滑动件和低摩擦磨损场景。",
        "enm1040-high-wear-resistant-pom":
          "采用特殊耐磨添加剂体系的 POM，用于滑动与功能零件。",
        "edm-111-high-wear-resistant-pom":
          "面向汽车、电气、卫浴和工业注塑应用的高耐磨 POM。",
        "ems162-high-wear-resistant-pom":
          "MoS2 填充黑色高耐磨 POM，兼顾耐磨与稳定力学表现。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "这组材料适合哪些零件？",
          answer:
            "主要面向齿轮、轴套、滚轮、导轨及其他持续运动或滑动的注塑零件，覆盖汽车、电气、卫浴、输送与工业设备等应用。",
        },
        {
          question: "系列采用哪些改性体系？",
          answer:
            "系列包含 PTFE 填充、MoS2 填充、芳纶纤维增强及其他耐磨添加体系，可提供不同的低摩擦、耐磨、强度与加工性能组合。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "牌号页列出关键性能数据；技术文件和样品可按项目申请，零件试验可结合实际摩擦副与工况开展。",
        },
      ],
    },
    inquiry: {
      eyebrow: "耐磨 POM 项目",
      title: "比较摩擦、耐磨、强度与加工表现",
      body:
        "提供相关牌号的技术数据、文件与样品，供齿轮、轴套、滚轮和导轨等运动部件开展材料比较与零件试验。",
      steps: ["零件与运动方式", "目标性能", "数据、样品与验证"],
    },
  },
  "uv-resistant-pom-compound": {
    categoryLabel: "耐候 POM",
    metadata: {
      title: "耐候 POM 牌号与数据 | 台益",
      description:
        "PLATFORM® 耐候 POM 面向长期接触光照的注塑零件，在流动性、冲击性能、颜色与表面效果上提供不同选择。",
      imageAlt: "台益耐候 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "耐候 POM",
      description:
        "PLATFORM® 耐候 POM 面向长期接触光照的注塑零件。各牌号在流动性、冲击性能、颜色和表面效果上各有侧重，可结合实际暴露条件比较。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有中文详情和关键数据，技术文件和样品按具体牌号与项目确认。",
    },
    navigation: {
      aria: "耐候 POM 页面分区导航",
      title: "耐候 POM",
      subtitle: "面向长期接触光照的注塑零件",
    },
    directory: {
      kicker: "牌号范围",
      title: "耐候 POM 牌号",
      body:
        "各牌号在流动性、冲击性能、颜色和表面效果上各有侧重，目录列出牌号定位、关键数据和可提供的资料。",
      summaries: {
        "etm090u-uv-resistant-pom":
          "中等流动耐候 POM，用于汽车、电气、卫浴和精密零件。",
        "etm100pu-uv-resistant-pom":
          "高流动耐候 POM，用于填充要求更高的注塑零件。",
        "edr180u-uv-resistant-pom":
          "兼顾高抗冲、哑光外观与抗紫外性能的 POM。",
        "edr2000zd-uv-resistant-pom":
          "面向光照环境的高抗冲、抗紫外与耐老化 POM。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "耐候 POM 面向哪些零件？",
          answer:
            "主要面向汽车、设备及其他长期接触光照的注塑零件，覆盖对颜色、外观、冲击或流动性能有不同侧重的项目。",
        },
        {
          question: "不同牌号有哪些差异？",
          answer:
            "系列包含中等与较高流动、高抗冲、哑光外观及耐紫外老化等不同组合，可查看各牌号详情和已发布数据。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "牌号页列出关键数据；技术文件和样品可按项目申请，颜色与暴露条件按实际要求确认。",
        },
      ],
    },
    inquiry: {
      eyebrow: "耐候 POM 项目",
      title: "按实际光照条件开展验证",
      body:
        "根据光照条件、颜色、外观和机械要求比较候选牌号，并提供技术数据与样品，用于暴露试验和零件验证。",
      steps: ["暴露与环境", "颜色与外观", "载荷与验证"],
    },
  },
  "carbon-fiber-reinforced-pom-compound": {
    categoryLabel: "碳纤维增强 POM",
    metadata: {
      title: "碳纤维增强 POM 牌号与数据 | 台益",
      description:
        "PLATFORM® 黑色碳纤维增强 POM 覆盖 20% 至 40% 碳纤含量，面向高刚度、尺寸控制与受控电阻率要求。",
      imageAlt: "台益黑色碳纤维增强 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "碳纤维增强 POM",
      description:
        "面向同时关注结构与电性能的精密零件，PLATFORM® 碳纤维增强 POM 以 20%、30% 和 40% 三个增强层级，提供不同的刚度、成型收缩、尺寸与电阻率表现。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有机械、热性能、成型收缩和电阻率数据，可进一步获取技术文件与样品。",
    },
    navigation: {
      aria: "碳纤维增强 POM 页面分区导航",
      title: "碳纤维增强 POM",
      subtitle: "20% 至 40% 碳纤增强，面向结构与电性能零件",
    },
    directory: {
      kicker: "牌号范围",
      title: "碳纤维增强 POM 牌号",
      body:
        "系列覆盖 20% 至 40% 碳纤含量，目录集中呈现刚度、强度、成型收缩、热性能与电阻率等数据。",
      summaries: {
        "ecf200-carbon-fiber-pom":
          "20% 碳纤维增强 POM，兼顾刚度、较低收缩与受控电阻率。",
        "ecf300-carbon-fiber-pom":
          "30% 碳纤维增强 POM，兼顾高刚度、较低收缩与稳定电性能。",
        "ecf400-carbon-fiber-pom":
          "40% 碳纤维增强 POM，面向更高刚度、尺寸控制与导电要求。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "碳纤维增强 POM 面向哪些零件？",
          answer:
            "主要面向需要较高刚度、尺寸控制或受控电阻率的精密结构件和功能零件，覆盖电子电气与运动机构等应用。",
        },
        {
          question: "不同牌号有哪些差异？",
          answer:
            "系列按 20%、30% 和 40% 碳纤含量形成三个增强层级，并提供不同的刚度、成型收缩、尺寸与电阻率表现。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "牌号页列出关键数据；技术文件和样品可按项目申请，纤维取向与测量方法按实际试验条件确认。",
        },
      ],
    },
    inquiry: {
      eyebrow: "碳纤增强 POM 项目",
      title: "把结构与电性能带入同一零件验证",
      body:
        "根据刚度、尺寸、电阻率和模具要求比较候选牌号，并提供技术数据与样品，用于试模和零件验证。",
      steps: ["载荷与刚度", "流动与尺寸", "电性能与验证"],
    },
  },
  "conductive-antistatic-pom-compound": {
    categoryLabel: "导电与抗静电 POM",
    metadata: {
      title: "导电与抗静电 POM 牌号目录 | 台益",
      description:
        "PLATFORM® 黑色导电与抗静电 POM 面向需要受控电阻率与电荷管理的电子电气、输送及自动化零件。",
      imageAlt: "台益黑色导电与抗静电 POM 粒子",
    },
    hero: {
      eyebrow: "POM 功能材料系列",
      title: "导电与抗静电 POM",
      description:
        "PLATFORM® 黑色导电与抗静电 POM 具有不同的表面与体积电阻率，面向需要受控电阻率或电荷管理的电子电气、输送及自动化零件。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均配套表面与体积电阻率、机械和热性能数据，并可进一步获取技术文件、样品与测试方法信息。",
    },
    navigation: {
      aria: "导电与抗静电 POM 页面分区导航",
      title: "导电与抗静电 POM",
      subtitle: "黑色 POM 覆盖不同电阻率与电荷管理要求",
    },
    directory: {
      kicker: "牌号范围",
      title: "导电与抗静电 POM 牌号",
      body:
        "各牌号具有不同的电阻率范围，目录列出表面与体积电阻率、机械性能和热性能数据。",
      summaries: {
        "egh25cn-conductive-antistatic-pom":
          "面向汽车、电子电气、卫浴和工业零件的受控电阻率黑色 POM。",
        "ecn1003b-conductive-pom":
          "黑色导电 POM，用于需要较低表面与体积电阻率的特定注塑零件。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "这组材料面向哪些零件？",
          answer:
            "主要面向电子电气、输送与自动化领域中需要受控电阻率或电荷管理的注塑零件。",
        },
        {
          question: "各牌号提供哪些数据？",
          answer:
            "牌号页提供表面与体积电阻率、机械性能和热性能数据，并标明相应的测试项目与已发布条件。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "牌号页列出关键数据；技术文件和样品可按项目申请，测试方法与测量位置按实际要求确认。",
        },
      ],
    },
    inquiry: {
      eyebrow: "电性能 POM 项目",
      title: "把电阻率目标落实到实际零件",
      body:
        "根据目标电阻率、测试方法、使用环境和零件几何比较候选牌号，并提供技术数据与样品。",
      steps: ["功能与电阻率", "测试与环境", "几何与验证"],
    },
  },
  "ultra-high-flow-pom": {
    categoryLabel: "超高流动 POM",
    metadata: {
      title: "超高流动 POM 牌号与数据 | 台益",
      description:
        "PLATFORM® ETM1500 与 ETM1800 将基础 POM 系列延伸至超高流动层级，面向薄壁、长流路与填充敏感的注塑零件。",
      imageAlt: "台益本色超高流动 POM 粒子",
    },
    hero: {
      eyebrow: "POM 高流动系列",
      title: "超高流动 POM",
      description:
        "PLATFORM® ETM1500 与 ETM1800 提供两个超高流动层级，面向薄壁、长流路、复杂结构或填充敏感的精密注塑零件。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有机械、热性能与成型收缩数据，可进一步获取技术文件和样品，并结合模具条件开展试模。",
    },
    navigation: {
      aria: "超高流动 POM 页面分区导航",
      title: "超高流动 POM",
      subtitle: "面向薄壁、长流路与复杂填充的超高流动 POM",
    },
    directory: {
      kicker: "牌号范围",
      title: "超高流动 POM 牌号",
      body:
        "ETM1500 与 ETM1800 提供两个超高流动层级，目录集中呈现流动、机械性能、热性能与成型收缩数据。",
      summaries: {
        "etm1500-base-pom-resin":
          "超高流动基础 POM，用于需要更易填充和稳定加工的注塑零件。",
        "etm1800-base-pom-resin":
          "更高流动基础 POM，用于长流长或填充要求更高的注塑项目。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "超高流动 POM 面向哪些零件？",
          answer:
            "主要面向薄壁、长流路、复杂结构或填充敏感的精密注塑零件，覆盖电子电气与汽车等应用。",
        },
        {
          question: "ETM1500 与 ETM1800 有什么区别？",
          answer:
            "ETM1500 与 ETM1800 的流动表现不同。牌号页同时列出机械、热性能和成型收缩数据，便于比较成型与零件性能。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "牌号页列出关键数据；技术文件和样品可按项目申请，并可结合模具条件安排试模。",
        },
      ],
    },
    inquiry: {
      eyebrow: "超高流动 POM 项目",
      title: "把流动能力转化为稳定成型",
      body:
        "根据壁厚、流路、浇口、设备和零件性能要求比较 ETM1500 与 ETM1800，并提供技术数据与样品用于试模。",
      steps: ["壁厚与流长", "浇口、排气与设备", "性能与验证"],
    },
  },
} as const satisfies Record<
  ChineseOnlyProductCategorySlug,
  LocalizedCategoryProfileMessages
>;
