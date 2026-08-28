export const chineseEngineeringProductCategorySlugs = [
  "pa6-compound",
  "pa66-compound",
  "ppa-compound",
] as const;

export type ChineseEngineeringProductCategorySlug =
  (typeof chineseEngineeringProductCategorySlugs)[number];

type EngineeringCategoryProfile = {
  sourceCategory: "PA6 Compound" | "PA66 Compound" | "PPA Compound";
  categoryLabel: string;
  metadata: {
    title: string;
    description: string;
    imageAlt: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    overviewLabel: string;
    overview: string;
    documentsTitle: string;
    contactAction: string;
    technicalDataAction: string;
  };
  navigation: {
    aria: string;
    title: string;
    subtitle: string;
    directions: string;
    grades: string;
    applications: string;
    faq: string;
  };
  directions: {
    kicker: string;
    title: string;
    body: string;
  };
  directory: {
    kicker: string;
    title: string;
    body: string;
    countSuffix: string;
    grade: string;
    keyData: string;
    route: string;
    density: string;
    tensile: string;
    hdt: string;
    flammability: string;
    detailAction: string;
  };
  applications: {
    kicker: string;
    title: string;
    body: string;
    items: ReadonlyArray<{ label: string; href: string }>;
  };
  faq: {
    kicker: string;
    title: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  inquiry: {
    eyebrow: string;
    title: string;
    body: string;
    action: string;
    steps: readonly string[];
  };
};

export const chineseEngineeringDirectionCopy: Record<
  string,
  { label: string; summary: string }
> = {
  "Carbon Fiber Reinforced": {
    label: "碳纤维增强",
    summary: "用于评估更高刚性、强度、导电方向与尺寸稳定性。",
  },
  "Flame Retardant": {
    label: "阻燃",
    summary: "用于需要审核阻燃等级、电气性能与结构性能的零部件。",
  },
  "GF Mineral Reinforced": {
    label: "玻纤／矿物复合增强",
    summary: "用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。",
  },
  "Glass Bead Filled": {
    label: "玻璃微珠填充",
    summary: "用于评估尺寸稳定性、收缩均衡与较低各向异性。",
  },
  "Glass Fiber Reinforced": {
    label: "玻璃纤维增强",
    summary: "用于需要更高刚性、强度、耐热和承载能力的结构件。",
  },
  "Impact Modified": {
    label: "抗冲改性",
    summary: "用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。",
  },
  "Mineral Filled": {
    label: "矿物填充",
    summary: "用于审核尺寸控制、收缩、翘曲与表面要求。",
  },
  "Mold Release": {
    label: "易脱模",
    summary: "用于复杂注塑件的脱模、表面和稳定生产评估。",
  },
  "V0 Flame Retardant": {
    label: "V-0 阻燃",
    summary: "用于需要 V-0 阻燃方向并兼顾结构性能的电气零部件。",
  },
  "Wear Low Friction": {
    label: "耐磨／低摩擦",
    summary: "用于滑动、旋转或往复运动零部件的摩擦与磨损评估。",
  },
};

const commonDirectory = {
  countSuffix: "个已列牌号",
  grade: "牌号",
  keyData: "关键数据",
  route: "详情语言",
  density: "密度",
  tensile: "拉伸强度",
  hdt: "HDT（1.8 MPa）",
  flammability: "阻燃等级",
  detailAction: "查看中文牌号数据",
} as const;

const commonApplications = [
  { label: "汽车零部件", href: "/applications/automotive" },
  { label: "电气与电子零部件", href: "/applications/electronics" },
] as const;

export const chineseEngineeringCategoryProfiles = {
  "pa6-compound": {
    sourceCategory: "PA6 Compound",
    categoryLabel: "PA6 改性材料",
    metadata: {
      title: "PA6 改性材料牌号与技术数据 | 台益",
      description:
        "PLATFORM® PA6 改性材料覆盖纤维增强、高抗冲、阻燃、耐磨、矿物填充及加工改性。",
      imageAlt: "台益 PA6 改性材料",
    },
    hero: {
      eyebrow: "工程塑料材料系列",
      title: "PA6 改性材料",
      description:
        "PLATFORM® PA6 改性材料覆盖纤维增强、高抗冲、阻燃、耐磨、矿物填充及加工改性，面向汽车、电子电气和工业零件对韧性、强度与加工性能的不同要求。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有中文详情和关键性能数据；技术文件与样品按具体牌号和项目确认。",
      documentsTitle: "技术与合规资料",
      contactAction: "讨论 PA6 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PA6 改性材料页面分区导航",
      title: "PA6 改性材料",
      subtitle: "覆盖增强、韧性、阻燃、耐磨与加工改性",
      directions: "材料类型",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "材料类型",
      title: "PA6 改性类别",
      body: "系列包括纤维增强、高抗冲、阻燃、耐磨、矿物填充及加工改性，可按零件要求比较不同的力学、热性能与加工表现。",
    },
    directory: {
      kicker: "牌号目录",
      title: "PA6 改性牌号",
      body: "目录集中呈现各牌号的改性体系、机械性能、热性能、流动与颜色信息。",
      ...commonDirectory,
    },
    applications: {
      kicker: "相关应用",
      title: "PA6 面向的零部件场景",
      body: "覆盖汽车、电子电气与运动部件中的结构、壳体、连接和运动零件应用。",
      items: [
        ...commonApplications,
        { label: "运动部件", href: "/applications/motion-components" },
      ],
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "PA6 改性材料面向哪些零件？",
          answer:
            "主要面向汽车、电子电气与工业领域中的壳体、连接件、结构件和运动零件，覆盖对韧性、强度、耐磨或加工表现有不同侧重的项目。",
        },
        {
          question: "PA6 系列包含哪些改性类别？",
          answer:
            "系列包含玻璃纤维与碳纤维增强、高抗冲、阻燃、耐磨、矿物填充、脱模及其他加工改性。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "可查看各牌号的中文详情与关键数据，技术文件和样品按项目确认，并可结合加工条件安排试模。",
        },
      ],
    },
    inquiry: {
      eyebrow: "PA6 项目",
      title: "比较韧性、强度与加工表现",
      body: "根据零部件功能、载荷、环境和加工要求比较 PA6 候选牌号，并提供技术数据与样品，用于试模和项目验证。",
      action: "联系材料团队",
      steps: ["零部件与工况", "模具与加工", "数据与样品"],
    },
  },
  "pa66-compound": {
    sourceCategory: "PA66 Compound",
    categoryLabel: "PA66 改性材料",
    metadata: {
      title: "PA66 改性材料牌号与技术数据 | 台益",
      description:
        "PLATFORM® PA66 改性材料覆盖增强、阻燃、耐磨、高抗冲、矿物填充与尺寸控制。",
      imageAlt: "台益 PA66 改性材料",
    },
    hero: {
      eyebrow: "工程塑料材料系列",
      title: "PA66 改性材料",
      description:
        "PLATFORM® PA66 改性材料覆盖纤维增强、阻燃、耐磨、高抗冲、矿物填充及其他功能改性，面向汽车、电子电气和工业零件对刚度、耐热与尺寸控制的不同要求。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有中文详情和关键性能数据；技术文件与样品按具体牌号和项目确认。",
      documentsTitle: "技术与合规资料",
      contactAction: "讨论 PA66 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PA66 改性材料页面分区导航",
      title: "PA66 改性材料",
      subtitle: "覆盖增强、耐热、阻燃、耐磨与尺寸稳定",
      directions: "材料类型",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "材料类型",
      title: "PA66 改性类别",
      body: "系列包括纤维增强、阻燃、耐磨、高抗冲、矿物填充与玻璃微珠填充，可按零件要求比较刚度、耐热、尺寸和加工表现。",
    },
    directory: {
      kicker: "牌号目录",
      title: "PA66 改性牌号",
      body: "目录集中呈现各牌号的改性体系、机械性能、热性能、流动与颜色信息。",
      ...commonDirectory,
    },
    applications: {
      kicker: "相关应用",
      title: "PA66 面向的零部件场景",
      body: "覆盖汽车、电子电气与运动部件中的结构、壳体、连接和耐热零件应用。",
      items: [
        ...commonApplications,
        { label: "运动部件", href: "/applications/motion-components" },
      ],
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "PA66 改性材料面向哪些零件？",
          answer:
            "主要面向汽车、电子电气与工业领域中的结构件、壳体、连接件和运动零件，覆盖对刚度、耐热、阻燃或尺寸控制有不同侧重的项目。",
        },
        {
          question: "PA66 系列包含哪些改性类别？",
          answer:
            "系列包含纤维增强、阻燃、耐磨、高抗冲、矿物填充、玻璃微珠填充及其他功能改性。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "可查看各牌号的中文详情与关键数据，技术文件和样品按项目确认，并可结合加工条件安排试模。",
        },
      ],
    },
    inquiry: {
      eyebrow: "PA66 项目",
      title: "比较刚度、耐热与尺寸表现",
      body: "根据零部件功能、温度、载荷和加工要求比较 PA66 候选牌号，并提供技术数据与样品，用于试模和项目验证。",
      action: "联系材料团队",
      steps: ["零部件与工况", "模具与加工", "数据与样品"],
    },
  },
  "ppa-compound": {
    sourceCategory: "PPA Compound",
    categoryLabel: "PPA 改性材料",
    metadata: {
      title: "PPA 改性材料牌号与技术数据 | 台益",
      description:
        "PLATFORM® PPA 改性材料覆盖玻璃纤维增强、玻纤矿物复合增强及耐磨低摩擦改性，面向较高温度应用。",
      imageAlt: "台益 PPA 改性材料",
    },
    hero: {
      eyebrow: "高温工程塑料系列",
      title: "PPA 改性材料",
      description:
        "PLATFORM® PPA 改性材料包括玻璃纤维增强、玻纤矿物复合增强及耐磨低摩擦配方，面向较高温度、热循环与尺寸敏感的零件。",
      overviewLabel: "材料概览",
      overview:
        "各牌号均有中文详情和关键性能数据；技术文件与样品按具体牌号和项目确认。",
      documentsTitle: "技术与合规资料",
      contactAction: "讨论 PPA 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PPA 改性材料页面分区导航",
      title: "PPA 改性材料",
      subtitle: "覆盖高温增强、尺寸稳定与耐磨改性",
      directions: "材料类型",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "材料类型",
      title: "PPA 改性类别",
      body: "系列包括玻璃纤维增强、玻纤矿物复合增强及耐磨低摩擦配方，可按零件要求比较刚度、尺寸、流动与滑动性能。",
    },
    directory: {
      kicker: "牌号目录",
      title: "PPA 改性牌号",
      body: "目录集中呈现各牌号的改性体系、机械性能、热性能、流动与颜色信息。",
      ...commonDirectory,
    },
    applications: {
      kicker: "相关应用",
      title: "PPA 面向的高温零部件场景",
      body: "覆盖汽车与电子电气领域中对较高温度、刚度和尺寸控制有要求的精密零件应用。",
      items: commonApplications,
    },
    faq: {
      kicker: "常见问题",
      title: "产品与应用信息",
      items: [
        {
          question: "PPA 改性材料面向哪些零件？",
          answer:
            "主要面向汽车与电子电气领域中对较高温度、热循环、刚度或尺寸控制有要求的精密结构和功能零件。",
        },
        {
          question: "PPA 系列包含哪些改性类别？",
          answer:
            "系列包含玻璃纤维增强、玻纤矿物复合增强与耐磨低摩擦改性，提供不同的刚度、尺寸、流动和滑动性能组合。",
        },
        {
          question: "可查看哪些资料？",
          answer:
            "可查看各牌号的中文详情与关键数据，技术文件和样品按项目确认，并可结合加工条件安排试模。",
        },
      ],
    },
    inquiry: {
      eyebrow: "PPA 项目",
      title: "比较耐热、刚度与尺寸表现",
      body: "根据零部件温度、载荷、尺寸和加工要求比较 PPA 候选牌号，并提供技术数据与样品，用于试模和项目验证。",
      action: "联系材料团队",
      steps: ["温度与载荷", "模具与加工", "数据与样品"],
    },
  },
} as const satisfies Record<
  ChineseEngineeringProductCategorySlug,
  EngineeringCategoryProfile
>;

export const isChineseEngineeringProductCategorySlug = (
  slug: string,
): slug is ChineseEngineeringProductCategorySlug =>
  chineseEngineeringProductCategorySlugs.includes(
    slug as ChineseEngineeringProductCategorySlug,
  );
