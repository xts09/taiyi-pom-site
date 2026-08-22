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
    documentsBody: string;
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
        "比较台益 PA6 玻纤增强、抗冲、阻燃、碳纤维增强、矿物填充与易脱模牌号及关键数据。",
      imageAlt: "台益 PA6 改性材料",
    },
    hero: {
      eyebrow: "工程塑料材料系列",
      title: "PA6 改性材料",
      description:
        "根据增强、韧性、阻燃、耐热、尺寸稳定和加工要求，比较已列 PA6 改性牌号并确定下一步验证路径。",
      overviewLabel: "选型边界",
      overview:
        "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。",
      documentsTitle: "按牌号与项目确认资料",
      documentsBody:
        "TDS、SDS、COA、REACH 和 RoHS 的可用性根据牌号、目标市场与项目阶段确认。",
      contactAction: "讨论 PA6 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PA6 改性材料页面分区导航",
      title: "PA6 改性材料",
      subtitle: "按增强、韧性、阻燃、耐热与尺寸要求初筛",
      directions: "改性方向",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "改性方向",
      title: "先按零部件要求缩小 PA6 范围",
      body: "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。",
    },
    directory: {
      kicker: "牌号目录",
      title: "比较 PA6 已列牌号",
      body: "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。",
      ...commonDirectory,
    },
    applications: {
      kicker: "应用入口",
      title: "从实际零部件工况继续评估",
      body: "应用页面帮助整理载荷、环境、尺寸和加工输入，再回到牌号层面完成验证。",
      items: [
        ...commonApplications,
        { label: "运动部件", href: "/applications/motion-components" },
      ],
    },
    faq: {
      kicker: "常见问题",
      title: "PA6 初步选型问题",
      items: [
        {
          question: "PA6 牌号应先看增强比例还是使用环境？",
          answer:
            "应先明确零部件功能、载荷、温度、湿度和尺寸目标，再确定增强、抗冲或阻燃方向。仅凭填充比例不能完成选型。",
        },
        {
          question: "为什么 PA6 需要重点审核吸湿与调湿状态？",
          answer:
            "水分会影响加工稳定性、尺寸和力学性能。数据比较、试模和最终测试必须说明干燥、调湿与测试条件。",
        },
        {
          question: "PA6 牌号详情是否已有中文？",
          answer:
            "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。",
        },
      ],
    },
    inquiry: {
      eyebrow: "项目评估",
      title: "准备 PA6 候选牌号清单",
      body: "请提供零部件功能、载荷、温湿度、壁厚、模具阶段、阻燃或增强要求、当前材料、资料需求和预估用量。",
      action: "提交 PA6 项目信息",
      steps: ["工况与环境", "模具与加工", "资料与样品"],
    },
  },
  "pa66-compound": {
    sourceCategory: "PA66 Compound",
    categoryLabel: "PA66 改性材料",
    metadata: {
      title: "PA66 改性材料牌号与技术数据 | 台益",
      description:
        "比较台益 PA66 玻纤增强、阻燃、耐磨、碳纤维增强、矿物填充与抗冲牌号及关键数据。",
      imageAlt: "台益 PA66 改性材料",
    },
    hero: {
      eyebrow: "工程塑料材料系列",
      title: "PA66 改性材料",
      description:
        "根据刚性、耐热、阻燃、耐磨、尺寸稳定和加工要求，比较已列 PA66 改性牌号并确定验证路径。",
      overviewLabel: "选型边界",
      overview:
        "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。",
      documentsTitle: "按牌号与项目确认资料",
      documentsBody:
        "TDS、SDS、COA、REACH 和 RoHS 的可用性根据牌号、目标市场与项目阶段确认。",
      contactAction: "讨论 PA66 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PA66 改性材料页面分区导航",
      title: "PA66 改性材料",
      subtitle: "按刚性、耐热、阻燃、耐磨与尺寸要求初筛",
      directions: "改性方向",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "改性方向",
      title: "先按主导性能要求筛选 PA66",
      body: "将耐热、刚性、阻燃、摩擦磨损与尺寸目标放在同一评估框架中，避免只看单一数据。",
    },
    directory: {
      kicker: "牌号目录",
      title: "比较 PA66 已列牌号",
      body: "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。",
      ...commonDirectory,
    },
    applications: {
      kicker: "应用入口",
      title: "从实际零部件工况继续评估",
      body: "应用页面帮助整理载荷、环境、尺寸和加工输入，再回到牌号层面完成验证。",
      items: [
        ...commonApplications,
        { label: "运动部件", href: "/applications/motion-components" },
      ],
    },
    faq: {
      kicker: "常见问题",
      title: "PA66 初步选型问题",
      items: [
        {
          question: "PA66 与 PA6 应如何初步区分？",
          answer:
            "应比较温度、吸湿、刚性、冲击、尺寸、加工窗口和成本目标。材料家族只能确定方向，最终仍需落实到具体牌号与零部件验证。",
        },
        {
          question: "阻燃与增强可以只按等级选择吗？",
          answer:
            "不可以。阻燃等级、试样厚度、颜色、玻纤含量、流动性和实际零部件结构都需要同时审核。",
        },
        {
          question: "PA66 牌号详情是否已有中文？",
          answer:
            "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。",
        },
      ],
    },
    inquiry: {
      eyebrow: "项目评估",
      title: "准备 PA66 候选牌号清单",
      body: "请提供零部件功能、载荷、温湿度、壁厚、模具阶段、阻燃或耐磨要求、当前材料、资料需求和预估用量。",
      action: "提交 PA66 项目信息",
      steps: ["工况与温度", "模具与尺寸", "资料与样品"],
    },
  },
  "ppa-compound": {
    sourceCategory: "PPA Compound",
    categoryLabel: "PPA 改性材料",
    metadata: {
      title: "PPA 改性材料牌号与技术数据 | 台益",
      description:
        "比较台益 PPA 玻纤增强、玻纤矿物复合增强及耐磨低摩擦牌号与关键数据。",
      imageAlt: "台益 PPA 改性材料",
    },
    hero: {
      eyebrow: "高温工程塑料系列",
      title: "PPA 改性材料",
      description:
        "面向更高温度、刚性与尺寸稳定要求，比较已列 PPA 增强及耐磨方向，并确定牌号验证路径。",
      overviewLabel: "选型边界",
      overview:
        "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。",
      documentsTitle: "按牌号与项目确认资料",
      documentsBody:
        "TDS、SDS、COA、REACH 和 RoHS 的可用性根据牌号、目标市场与项目阶段确认。",
      contactAction: "讨论 PPA 应用",
      technicalDataAction: "打开英文 TDS 数据库",
    },
    navigation: {
      aria: "PPA 改性材料页面分区导航",
      title: "PPA 改性材料",
      subtitle: "按温度、增强、尺寸稳定与耐磨要求初筛",
      directions: "改性方向",
      grades: "牌号",
      applications: "应用",
      faq: "常见问题",
    },
    directions: {
      kicker: "改性方向",
      title: "围绕高温零部件要求筛选 PPA",
      body: "先明确长期温度、热循环、尺寸、载荷和吸湿条件，再比较增强体系与耐磨方向。",
    },
    directory: {
      kicker: "牌号目录",
      title: "比较 PPA 已列牌号",
      body: "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。",
      ...commonDirectory,
    },
    applications: {
      kicker: "应用入口",
      title: "从高温零部件工况继续评估",
      body: "应用页面帮助整理温度、载荷、尺寸和电气输入，再回到牌号层面完成验证。",
      items: commonApplications,
    },
    faq: {
      kicker: "常见问题",
      title: "PPA 初步选型问题",
      items: [
        {
          question: "何时应从 PA66 转向 PPA 方向？",
          answer:
            "当长期温度、热循环、尺寸保持或高温刚性超过现有 PA66 方案能力时，可评估 PPA；仍需比较吸湿、加工和成本边界。",
        },
        {
          question: "PPA 的增强比例越高越好吗？",
          answer:
            "不是。更高增强比例会改变流动、翘曲、表面、冲击与模具磨损，需要结合零部件几何和浇口方案平衡。",
        },
        {
          question: "PPA 牌号详情是否已有中文？",
          answer:
            "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。",
        },
      ],
    },
    inquiry: {
      eyebrow: "项目评估",
      title: "准备 PPA 候选牌号清单",
      body: "请提供长期与峰值温度、热循环、载荷、零部件几何、壁厚、模具阶段、当前材料、尺寸目标和资料需求。",
      action: "提交 PPA 项目信息",
      steps: ["温度与载荷", "尺寸与模具", "资料与样品"],
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
