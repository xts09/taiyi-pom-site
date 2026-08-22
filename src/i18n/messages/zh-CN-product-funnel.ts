import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const common = {
  home: "首页",
  products: "产品",
  category: "基础 POM 树脂",
  technicalData: "技术数据",
  contact: "联系我们",
  contactSourceCategory: "产品分类",
  contactSourceGrade: "中文 POM 牌号页",
  contactSourceTechnicalData: "中文 POM 技术数据",
} satisfies ProductFunnelMessages["common"];

const category = {
  metadata: {
    title: "精密注塑用基础 POM 树脂 | 台益",
    description:
      "按流动性、拉伸强度、热变形温度与项目要求比较台益基础 POM 树脂。",
    imageAlt: "台益本色基础 POM 树脂",
  },
  hero: {
    eyebrow: "POM 材料系列",
    title: "基础 POM 树脂",
    description:
      "根据流动性、力学性能、热变形温度和零部件几何，比较适用于精密及通用注塑件的基础牌号。",
    overviewLabel: "选型路径",
    overview:
      "先从已列牌号中进行初筛，再打开牌号页，审核已发布的性能数据、应用说明和资料状态。",
    documentsTitle: "按牌号与项目提供资料",
    documentsBody:
      "TDS、SDS、COA、REACH 和 RoHS 资料根据牌号、目标市场与项目阶段确认。",
    contactAction: "讨论您的应用",
    technicalDataAction: "打开技术数据",
  },
  navigation: {
    aria: "基础 POM 树脂页面分区导航",
    title: "基础 POM 树脂",
    subtitle: "比较流动性、强度与模具要求",
    grades: "牌号",
    faq: "常见问题",
  },
  directory: {
    kicker: "牌号选择",
    title: "比较基础 POM 牌号",
    body: "8 个基础 POM 牌号均已发布完整中文详情页。数据用于技术初筛，最终认可仍需结合客户模具和实际应用完成。",
    countSuffix: "个已列牌号",
    grade: "牌号",
    keyData: "关键数据",
    route: "下一步",
    mfi: "MFI",
    tensile: "拉伸强度",
    hdt: "HDT",
    color: "颜色",
    natural: "本色",
    black: "黑色",
    detailAction: "查看牌号详情",
    reviewAction: "申请项目评估",
    summaries: {
      "etm090nc-base-pom-resin": "标准牌号，兼顾强度与尺寸稳定性。",
      "etm130-base-pom-resin": "中等流动性与均衡的力学性能。",
      "etm1500-base-pom-resin": "极高流动性，便于填充复杂注塑件。",
      "etm1800-base-pom-resin": "面向流长要求更高零部件的最高流动方向。",
      "etm270-base-pom-resin": "适用于薄壁与精密注塑件的高流动牌号。",
      "etm450-base-pom-resin": "适用于精密、电气和汽车零件的高流动牌号。",
      "etm750-base-pom-resin": "适用于薄壁和填充困难零件的极高流动牌号。",
      "xt-100-base-pom-resin": "面向精密与通用注塑件的低密度、高抗冲方向 POM。",
    },
  },
  faq: {
    kicker: "常见问题",
    title: "初步选型问题",
    items: [
      {
        question: "如何选择合适的流动范围？",
        answer:
          "壁厚、流长、浇口、模穴数和模具状态共同决定所需流动范围。MFI 更高并不代表零部件性能一定更好。",
      },
      {
        question: "这些牌号可以直接互换吗？",
        answer:
          "不可以。数据表用于初筛；零部件几何、模具、加工、尺寸稳定性和最终应用都必须在实际工艺中验证。",
      },
      {
        question: "可以申请哪些资料？",
        answer:
          "TDS、SDS、COA、REACH 和 RoHS 资料的可用性将根据牌号与项目确认。",
      },
    ],
  },
  inquiry: {
    eyebrow: "项目评估",
    title: "准备可靠的候选牌号清单",
    body: "请提供零部件功能、壁厚、流长、模具阶段、当前材料、目标性能、颜色、资料需求和预估用量。我们将据此明确下一步数据、样品与验证安排。",
    action: "提交项目信息",
    steps: ["零部件几何", "工艺与模具", "资料与样品"],
  },
} satisfies ProductFunnelMessages["category"];

const categoryProfiles = {
  "glass-bead-filled-pom-compound": {
    categoryLabel: "玻璃微珠填充 POM",
    metadata: {
      title: "玻璃微珠填充 POM 牌号与数据 | 台益",
      description:
        "根据收缩、热性能、注塑件要求和资料可用性评估玻璃微珠填充 POM。",
      imageAlt: "台益本色玻璃微珠填充 POM",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "玻璃微珠填充 POM",
      description:
        "根据流动性、纵向与横向收缩、热性能和零部件要求，评估含 25% 玻璃微珠的 EGB25。",
      overviewLabel: "选型路径",
      overview:
        "先从已列牌号中进行初筛，再打开牌号页，审核已发布的性能数据、应用说明和资料状态。",
    },
    navigation: {
      aria: "玻璃微珠填充 POM 页面分区导航",
      title: "玻璃微珠填充 POM",
      subtitle: "比较收缩、热性能与零部件要求",
    },
    directory: {
      kicker: "牌号选择",
      title: "评估玻璃微珠填充 POM 牌号",
      body: "EGB25 已完成本语言版本审核。数据用于初筛；最终认可需在客户模具和实际应用中完成。",
      summaries: {
        "egb25-glass-bead-pom":
          "含 25% 玻璃微珠，用于评估较均衡的纵向与横向收缩。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "玻璃微珠填充相关问题",
      items: [
        {
          question: "为什么要同时审核纵向和横向收缩？",
          answer:
            "玻璃微珠有助于获得较均衡的收缩表现，但几何、浇口、壁厚和工艺条件仍会影响实际注塑件。",
        },
        {
          question: "EGB25 可以不经试模直接认可吗？",
          answer:
            "不可以。数据表数值用于技术初筛；尺寸、翘曲、表面和零部件性能必须在目标模具与工艺中确认。",
        },
        {
          question: "可以申请哪些资料？",
          answer:
            "TDS、SDS、COA、REACH 和 RoHS 资料的可用性将根据牌号、目标市场与项目确认。",
        },
      ],
    },
    inquiry: {
      eyebrow: "EGB25 项目评估",
      title: "根据尺寸目标评估 EGB25",
      body: "请提供零部件几何、壁厚、浇口、模具阶段、当前收缩、尺寸公差、颜色和资料需求。我们将据此准备牌号与样品评估。",
      steps: ["几何与浇口", "收缩与公差", "资料与样品"],
    },
  },
  "glass-fiber-reinforced-pom-compound": {
    categoryLabel: "玻璃纤维增强 POM",
    metadata: {
      title: "玻璃纤维增强 POM 牌号与数据 | 台益",
      description:
        "按刚性、收缩、热性能与项目要求比较含 10% 至 30% 玻璃纤维的 POM。",
      imageAlt: "台益本色玻璃纤维增强 POM",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "玻璃纤维增强 POM",
      description:
        "根据流动性、刚性、收缩、热性能与零部件要求，比较含 10% 至 30% 玻璃纤维的 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先从已列牌号中进行初筛，再打开牌号页，审核已发布的性能数据、应用说明和资料状态。",
    },
    navigation: {
      aria: "玻璃纤维增强 POM 页面分区导航",
      title: "玻璃纤维增强 POM",
      subtitle: "比较纤维含量、刚性、收缩与加工性能",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较玻璃纤维增强 POM 牌号",
      body: "EGH502H 已发布完整中文牌号页。其他牌号在达到相同发布标准前，将进入项目评估。",
      summaries: {
        "egh202h-glass-fiber-pom": "10% 玻璃纤维，适度提升刚性。",
        "egh302h-glass-fiber-pom": "15% 玻璃纤维，进一步提高强度与刚性。",
        "egh402h-glass-fiber-pom": "20% 玻璃纤维，具有高刚性与较低收缩。",
        "egh402t-glass-fiber-pom": "20% 玻璃纤维，兼顾流动性与尺寸控制。",
        "egh502h-glass-fiber-pom": "25% 玻璃纤维，面向高刚性、抗蠕变与低收缩。",
        "egh502t-glass-fiber-pom": "25% 玻璃纤维，兼顾刚性与受控加工流动性。",
        "egh580h-glass-fiber-pom": "25% 玻璃纤维，面向高弯曲强度与尺寸控制。",
        "egh580t-glass-fiber-pom": "25% 玻璃纤维，兼顾冲击性能与流动性。",
        "egh602h-glass-fiber-pom": "30% 玻璃纤维，面向高刚性与尺寸稳定。",
        "egh602t-glass-fiber-pom": "30% 玻璃纤维，面向较低收缩与稳定加工。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "玻璃纤维增强相关问题",
      items: [
        {
          question: "如何选择合适的玻璃纤维含量？",
          answer:
            "应综合评估刚性、载荷、壁厚、收缩、翘曲、流长和表面要求。更高的玻璃纤维含量并非对所有零部件都更合适。",
        },
        {
          question: "为什么纤维取向很重要？",
          answer:
            "纤维会沿熔体流动方向取向，因此浇口、流向和几何会显著改变实际零部件的性能、收缩与翘曲。",
        },
        {
          question: "所有已列牌号都完成中文发布了吗？",
          answer:
            "没有。目前 EGH502H 已发布完整中文牌号页，其他牌号先通过项目数据与样品评估。",
        },
      ],
    },
    inquiry: {
      eyebrow: "项目评估",
      title: "缩小玻璃纤维增强 POM 牌号范围",
      body: "请提供载荷与刚性目标、零部件几何、壁厚、浇口、模具阶段、当前收缩或翘曲、颜色和资料需求。我们将据此准备候选牌号与样品路径。",
      steps: ["载荷与刚性", "模具与纤维流动", "资料与样品"],
    },
  },
  "high-impact-pom-compound": {
    categoryLabel: "高抗冲 POM",
    metadata: {
      title: "高抗冲 POM 牌号与数据 | 台益",
      description:
        "按冲击性能、低温表现、伸长率、流动性与项目风险比较高抗冲 POM 牌号。",
      imageAlt: "台益本色高抗冲 POM",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "高抗冲 POM",
      description:
        "根据流动性、伸长率、强度与热性能，比较六个面向更高冲击和低温要求的 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先从已列牌号中进行初筛，再打开牌号页，审核已发布的性能数据、应用说明和资料状态。",
    },
    navigation: {
      aria: "高抗冲 POM 页面分区导航",
      title: "高抗冲 POM",
      subtitle: "比较冲击、伸长率、流动性与低温要求",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较高抗冲 POM 牌号",
      body: "6 个高抗冲 POM 牌号均已发布完整中文详情页。数据用于技术初筛，最终认可仍需结合客户模具和实际应用完成。",
      summaries: {
        "edr100-high-impact-pom": "用于提高功能注塑件韧性的高抗冲 POM。",
        "edr180-high-impact-pom":
          "面向低温方向并具有高断裂伸长率的高抗冲 POM。",
        "ehi100st-high-impact-pom": "为注塑件提供刚性与韧性的平衡。",
        "ehi202t-high-impact-pom":
          "面向汽车、电气、卫浴和工业零部件的高抗冲 POM。",
        "ehi402t-high-impact-pom": "提高韧性并兼顾加工性能。",
        "ehi602t-high-impact-pom":
          "为受载注塑件提供更高的冲击性能与伸长率方向。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "抗冲改性相关问题",
      items: [
        {
          question: "如何初步选择高抗冲 POM 牌号？",
          answer:
            "应综合评估载荷工况、缺口、壁厚、使用温度、目标伸长率、刚性和流长。单一冲击数据不足以作为认可依据。",
        },
        {
          question: "高抗冲是否代表一定适合低温？",
          answer:
            "不是。牌号面向冲击与低温性能方向，但实际温度、载荷持续时间、几何和测试条件仍需按项目确认。",
        },
        {
          question: "六个牌号都完成中文发布了吗？",
          answer:
            "是。六个牌号均可打开完整中文详情页；最终选择仍需结合项目数据、样品和实际零部件验证。",
        },
      ],
    },
    inquiry: {
      eyebrow: "项目评估",
      title: "缩小高抗冲 POM 牌号范围",
      body: "请提供载荷工况、使用温度、零部件几何、壁厚、当前材料、失效现象、目标性能、颜色和资料需求。我们将据此准备候选牌号与样品路径。",
      steps: ["载荷与温度", "几何与失效风险", "资料与样品"],
    },
  },
} satisfies ProductFunnelMessages["categoryProfiles"];

const grade = {
  metadata: {
    title: "XT-100 低密度高抗冲 POM | 台益",
    description:
      "根据密度、MFI、拉伸、冲击和热性能数据评估 XT-100 POM，并申请技术资料或样品用于技术验证。",
    imageAlt: "台益本色 XT-100 POM 粒子",
  },
  breadcrumb: "XT-100",
  eyebrow: "低密度高抗冲方向 POM · 注塑",
  summary:
    "XT-100 可作为精密与通用注塑件的候选材料，用于同时评估密度、冲击性能和均衡流动表现。已发布数据支持前期选型；最终适用性需结合实际零部件几何、模具、工艺窗口和使用条件确认。",
  documentSupport: "资料支持",
  documentNote: "可用性根据牌号、目标市场与项目确认。",
  sampleAction: "申请 XT-100 样品",
  evaluationAction: "申请牌号评估",
  independentNote: "Taiyi 独立牌号 · 建议进行样品验证",
  snapshot: {
    aria: "XT-100 关键数据概览",
    title: "XT-100 选型概览",
    body: "用于初步比较牌号的已发布参考数据和测试方法。",
    mfi: "MFI",
    tensile: "拉伸强度",
    hdt: "HDT",
    color: "颜色",
    flowNote: "低密度与高抗冲方向",
    colorValue: "本色",
  },
  sectionNav: {
    aria: "XT-100 产品页分区",
    properties: "性能数据",
    fit: "材料特点",
    evaluation: "评估路径",
    notes: "注意事项",
  },
  properties: {
    kicker: "技术依据",
    title: "用于初筛的参考数据",
    body: "数值、单位、标准与测试条件必须结合阅读，不能替代样品验证或客户认可。",
    property: "性能",
    value: "数值",
    unit: "单位",
    method: "测试方法",
    requestAction: "申请最新资料",
    labels: {
      Density: "密度",
      "Melt Flow Rate (MFI)": "熔体质量流动速率（MFI）",
      "Molding Shrinkage": "注塑收缩率",
      "Water Absorption": "吸水率",
      "Tensile Strength": "拉伸强度",
      "Tensile Strain at Break": "断裂拉伸应变",
      "Flexural Strength": "弯曲强度",
      "Flexural Modulus": "弯曲模量",
      "Charpy Notched Impact Strength": "简支梁缺口冲击强度",
      "Izod Notched Impact Strength": "悬臂梁缺口冲击强度",
      "Melting Temperature": "熔融温度",
      "Heat Deflection Temperature": "热变形温度",
      "Coefficient of Linear Thermal Expansion, CLTE": "线性热膨胀系数（CLTE）",
      "Volume Resistivity": "体积电阻率",
      "Surface Resistivity": "表面电阻率",
      "Dielectric Strength": "介电强度",
    },
    internalMethod: "内部方法",
    injectionMolding: "注塑",
  },
  featuresTitle: "选型特点",
  features: ["低密度方向", "高抗冲方向", "适用于注塑", "本色"],
  applicationsTitle: "典型评估方向",
  applications: [
    "精密工程塑料零部件",
    "汽车零部件",
    "电气与电子零部件",
    "工业注塑件",
  ],
  evaluation: {
    kicker: "技术评估路径",
    title: "从数据审核到零部件决策",
    body: "XT-100 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成验证。",
    steps: [
      {
        title: "说明应用",
        body: "提供零部件几何、工艺、当前材料和目标性能。",
      },
      {
        title: "审核数据与样品",
        body: "确认资料、颜色、样品数量和相关测试计划。",
      },
      {
        title: "在实际工艺中验证",
        body: "用真实零部件评估填充、尺寸、表面和最终应用表现。",
      },
    ],
  },
  notes: {
    title: "材料评估注意事项",
    body: "本页用于 XT-100 的初步选型。零部件设计、模具、加工、目标性能与客户具体要求都可能影响结果。请申请最新资料，并通过样品和应用测试确认牌号。",
  },
  inquiry: {
    eyebrow: "XT-100 项目评估",
    title: "评估 XT-100 是否适用于您的注塑件？",
    body: "请提供应用、加工方法、当前材料、目标性能、颜色、预估用量和所需资料。我们将据此准备牌号与样品评估。",
    action: "申请 XT-100 评估",
  },
} satisfies ProductFunnelMessages["grade"];

const gradeProfiles = {
  "etm450-base-pom-resin": {
    metadata: {
      title: "精密零件用 ETM450 高流动 POM | 台益",
      description:
        "根据 MFI、拉伸、冲击和热性能数据评估 ETM450 精密注塑用高流动 POM，并申请样品。",
      imageAlt: "台益本色 ETM450 POM 粒子",
    },
    breadcrumb: "ETM450",
    eyebrow: "高流动 POM · 注塑",
    summary:
      "ETM450 可作为精密注塑件的候选材料，用于同时评估良好充模能力和可靠的力学性能。已发布数据支持前期选型；最终适用性需结合实际零部件几何、模具、工艺窗口和使用条件确认。",
    sampleAction: "申请 ETM450 样品",
    snapshot: {
      aria: "ETM450 关键数据概览",
      title: "ETM450 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "面向精密注塑的高流动特性",
    },
    sectionNavAria: "ETM450 产品页分区",
    features: ["高流动性", "面向精密注塑", "适用于注塑", "本色"],
    applications: ["精密注塑件", "汽车零部件", "电气与电子零部件", "卫浴配件"],
    evaluationBody:
      "ETM450 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成验证。",
    notesBody:
      "本页用于 ETM450 的初步选型。零部件设计、模具、加工、目标性能与客户具体要求都可能影响结果。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "ETM450 项目评估",
      title: "评估 ETM450 是否适用于您的注塑件？",
      body: "请提供应用、加工方法、当前材料、目标性能、颜色、预估用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 ETM450 评估",
    },
  },
  "etm750-base-pom-resin": {
    metadata: {
      title: "薄壁零件用 ETM750 高流动 POM | 台益",
      description:
        "评估 ETM750 极高流动 POM 是否适用于薄壁和填充困难的注塑件，并申请数据或样品。",
      imageAlt: "台益本色 ETM750 POM 粒子",
    },
    breadcrumb: "ETM750",
    eyebrow: "极高流动 POM · 注塑",
    summary:
      "ETM750 可作为薄壁和填充困难注塑件的候选材料，用于同时评估长流长与力学性能。已发布数据支持前期选型；最终适用性需结合实际零部件几何、模具、工艺窗口和使用条件确认。",
    sampleAction: "申请 ETM750 样品",
    snapshot: {
      aria: "ETM750 关键数据概览",
      title: "ETM750 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "面向薄壁注塑件的极高流动特性",
    },
    sectionNavAria: "ETM750 产品页分区",
    features: ["极高流动性", "面向薄壁注塑件", "适用于注塑", "本色"],
    applications: [
      "薄壁注塑件",
      "汽车零部件",
      "电气与电子零部件",
      "工业注塑件",
    ],
    evaluationBody:
      "ETM750 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成充模与零部件验证。",
    notesBody:
      "本页用于 ETM750 的初步选型。流长、壁厚、浇口、模具、加工和目标性能都可能影响结果。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "ETM750 项目评估",
      title: "评估 ETM750 是否适用于您的薄壁注塑件？",
      body: "请提供壁厚、流长、浇口、模具阶段、当前材料、目标性能、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 ETM750 评估",
    },
  },
  "egb25-glass-bead-pom": {
    categoryLabel: "玻璃微珠填充 POM",
    metadata: {
      title: "含 25% 玻璃微珠的 EGB25 POM | 台益",
      description:
        "根据收缩、热性能和力学数据评估含 25% 玻璃微珠的 EGB25 POM，并申请资料或样品。",
      imageAlt: "台益本色 EGB25 POM 粒子",
    },
    breadcrumb: "EGB25",
    eyebrow: "含 25% 玻璃微珠的 POM · 注塑",
    summary:
      "EGB25 可作为需要同时评估纵向与横向收缩及热性能的注塑件候选材料。已发布数据支持前期选型；最终适用性需结合实际零部件几何、模具、工艺窗口和使用条件确认。",
    sampleAction: "申请 EGB25 样品",
    snapshot: {
      aria: "EGB25 关键数据概览",
      title: "EGB25 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "MFI 8.5 g/10 min，195°C / 2.16 kg",
    },
    sectionNavAria: "EGB25 产品页分区",
    features: [
      "25% 玻璃微珠含量",
      "较均衡的纵向与横向收缩方向",
      "1.8 MPa 下热变形温度 110°C",
      "本色",
    ],
    applications: [
      "汽车零部件",
      "电气与电子零部件",
      "卫浴零部件",
      "工业注塑件",
    ],
    evaluationBody:
      "EGB25 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成收缩、尺寸与性能验证。",
    notesBody:
      "本页用于 EGB25 的初步选型。零部件几何、壁厚、浇口、模具、加工和测试条件都可能影响结果。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "EGB25 项目评估",
      title: "评估 EGB25 是否适用于您的注塑件？",
      body: "请提供零部件几何、收缩目标、模具阶段、当前材料、目标性能、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 EGB25 评估",
    },
  },
  "egh502h-glass-fiber-pom": {
    categoryLabel: "玻璃纤维增强 POM",
    metadata: {
      title: "含 25% 玻璃纤维的 EGH502H POM | 台益",
      description:
        "根据刚性、收缩、热性能和力学数据评估含 25% 玻璃纤维的 EGH502H POM，并申请样品。",
      imageAlt: "台益本色 EGH502H POM 粒子",
    },
    breadcrumb: "EGH502H",
    eyebrow: "含 25% 玻璃纤维的 POM · 高刚性",
    summary:
      "EGH502H 可作为需要同时评估高刚性、低收缩与热性能的注塑件候选材料。已发布数据支持前期选型；最终适用性需结合实际零部件几何、纤维取向、模具、工艺窗口和使用条件确认。",
    sampleAction: "申请 EGH502H 样品",
    snapshot: {
      aria: "EGH502H 关键数据概览",
      title: "EGH502H 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "MFI 8.5 g/10 min，195°C / 2.16 kg",
    },
    sectionNavAria: "EGH502H 产品页分区",
    features: ["25% 玻璃纤维含量", "高刚性", "面向抗蠕变", "低注塑收缩"],
    applications: ["汽车零部件", "电气零部件", "电子零部件", "工业注塑件"],
    evaluationBody:
      "EGH502H 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成纤维取向、尺寸与性能验证。",
    notesBody:
      "本页用于 EGH502H 的初步选型。流向、浇口、熔接线、壁厚、模具和测试条件都可能改变刚性、收缩和零部件表现。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "EGH502H 项目评估",
      title: "评估 EGH502H 是否适用于您的高刚性注塑件？",
      body: "请提供零部件几何、载荷与刚性目标、浇口、模具阶段、当前材料、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 EGH502H 评估",
    },
  },
  "ehi402t-high-impact-pom": {
    categoryLabel: "高抗冲 POM",
    metadata: {
      title: "EHI402T 高抗冲 POM | 台益",
      description:
        "根据冲击性能、低温方向、伸长率、流动性、拉伸与热性能数据评估 EHI402T，并申请样品。",
      imageAlt: "台益本色 EHI402T POM 粒子",
    },
    breadcrumb: "EHI402T",
    eyebrow: "高抗冲 POM · 均衡加工",
    summary:
      "EHI402T 可作为需要同时评估更高韧性、低温表现与均衡加工性能的功能注塑件候选材料。已发布数据支持前期选型；最终适用性需结合实际几何、缺口、载荷工况、模具、工艺窗口和使用温度确认。",
    sampleAction: "申请 EHI402T 样品",
    snapshot: {
      aria: "EHI402T 关键数据概览",
      title: "EHI402T 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "兼顾加工性能的高抗冲方向",
    },
    sectionNavAria: "EHI402T 产品页分区",
    features: ["高抗冲方向", "低温性能方向", "均衡加工性能", "本色"],
    applications: [
      "汽车零部件",
      "电气与电子零部件",
      "卫浴零部件",
      "工业注塑件",
    ],
    evaluationBody:
      "EHI402T 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成零部件、冲击与低温验证。",
    notesBody:
      "本页用于 EHI402T 的初步选型。缺口、壁厚、流向、熔接线、载荷持续时间、温度、模具和测试条件都可能改变实际冲击表现。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "EHI402T 项目评估",
      title: "评估 EHI402T 是否适用于您的受冲击注塑件？",
      body: "请提供载荷工况、使用温度、零部件几何、壁厚、当前材料、失效现象、目标性能、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 EHI402T 评估",
    },
  },
  "edr180-high-impact-pom": {
    categoryLabel: "高抗冲 POM",
    metadata: {
      title: "高伸长率 EDR180 高抗冲 POM | 台益",
      description:
        "根据冲击性能、低温方向、高断裂伸长率、流动性、拉伸与热性能数据评估 EDR180。",
      imageAlt: "台益本色 EDR180 POM 粒子",
    },
    breadcrumb: "EDR180",
    eyebrow: "高抗冲 POM · 高断裂伸长率",
    summary:
      "EDR180 可作为需要同时评估冲击性能、低温表现与高伸长余量的功能注塑件候选材料。已发布数据支持前期选型；最终适用性需结合实际几何、缺口、载荷工况、模具、工艺窗口和使用温度确认。",
    sampleAction: "申请 EDR180 样品",
    snapshot: {
      aria: "EDR180 关键数据概览",
      title: "EDR180 选型概览",
      body: "用于初步比较牌号的已发布参考数据和测试方法。",
      flowNote: "高伸长率方向的高抗冲特性",
    },
    sectionNavAria: "EDR180 产品页分区",
    features: ["高抗冲方向", "低温性能方向", "高断裂伸长率", "本色"],
    applications: [
      "汽车零部件",
      "电气与电子零部件",
      "卫浴零部件",
      "工业注塑件",
    ],
    evaluationBody:
      "EDR180 作为技术评估候选材料提供。最终认可需在客户模具和实际应用中完成零部件、冲击、伸长与低温验证。",
    notesBody:
      "本页用于 EDR180 的初步选型。缺口、壁厚、流向、熔接线、载荷持续时间、温度、模具和测试条件都可能改变伸长与冲击表现。请申请最新资料，并通过样品和应用测试确认牌号。",
    inquiry: {
      eyebrow: "EDR180 项目评估",
      title: "评估 EDR180 是否适用于您的受冲击注塑件？",
      body: "请提供载荷工况、使用温度、零部件几何、壁厚、当前材料、失效现象、伸长率目标、颜色、用量和所需资料。我们将据此准备牌号与样品评估。",
      action: "申请 EDR180 评估",
    },
  },
} satisfies ProductFunnelMessages["gradeProfiles"];

const technicalData = {
  metadata: {
    title: "POM 技术数据与 TDS | 台益",
    description:
      "查看包含单位、标准与测试条件的已审核 POM 牌号数据，并申请最新 TDS 和项目资料。",
    imageAlt: "台益 POM 技术数据与 TDS 审核",
  },
  eyebrow: "数据与依据",
  title: "用于材料评估的技术数据",
  description:
    "本语言版本只发布已完成技术页和说明文案审核的牌号。每项数值都应结合单位、标准和测试条件阅读。",
  evidenceTitle: "已发布牌号数据",
  evidenceBody:
    "POM 目录中的 40 个牌号均已发布完整中文数据页，可按材料家族、关键性能与应用方向进行初筛。",
  gradeLabel: "牌号",
  materialLabel: "材料",
  statusLabel: "数据状态",
  statusValue: "网页数据可用 · PDF 需按申请确认",
  viewAction: "打开牌号数据",
  requestAction: "申请最新 TDS",
  scopeTitle: "认可前需要审核",
  scopeItems: [
    "每项数据的标准、单位和测试条件",
    "零部件几何、模具与实际工艺窗口",
    "资料版本、目标市场与客户具体要求",
  ],
  inquiryEyebrow: "资料审核",
  inquiryTitle: "需要 TDS、SDS、COA、REACH 或 RoHS 资料？",
  inquiryBody:
    "请提供牌号、目标市场、应用、项目阶段和所需资料。资料可用性与最新版本将根据项目确认。",
  inquiryAction: "申请资料",
} satisfies ProductFunnelMessages["technicalData"];

const messages = {
  common,
  category,
  categoryProfiles,
  grade,
  gradeProfiles,
  technicalData,
} satisfies ProductFunnelMessages;

export default messages;
