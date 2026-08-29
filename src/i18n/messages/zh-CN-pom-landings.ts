import type {
  PomLandingPageData,
} from "@/data/pomLandingPages";
import type { PomLandingPageUi } from "@/components/PomLandingPage";

export const chinesePomLandingUi: PomLandingPageUi = {
  homeBreadcrumb: "首页",
  openFamilyAction: "查看材料家族",
  gradeEvidenceKicker: "牌号依据",
  gradeFamilyLabel: "牌号 / 家族",
  modificationDirectionLabel: "改性方向",
  electricalDirectionLabel: "公开电性能方向",
  materialSelectionSummaryAria: "材料选型摘要",
  defaultSecondaryAction: "查找技术数据",
  comparisonKicker: "牌号对比",
  comparisonTitle: "初步对比表",
  referenceGradeLabel: "参考牌号",
  materialTypeLabel: "材料类型",
  comparisonBasisLabel: "对比依据",
  taiyiPathLabel: "Taiyi 路径",
  openMaterialPathAction: "查看材料路径",
  comparisonNote:
    "交叉参考信息仅用于初步选材。最终适用性应在客户实际加工条件和应用条件下通过测试确认。",
  inquiryKicker: "询盘信息",
  inquiryTitle: "请提供这些信息",
  relatedKicker: "相关路径",
  relatedTitle: "继续选材",
  faqTitle: "常见问题",
  finalTitle: "需要协助筛选牌号？",
  finalEyebrow: "牌号选择",
  finalDescription:
    "请提供当前材料、应用、目标性能、模具阶段、文件要求和预计用量。台益可据此筛选相关牌号，并确认下一步样品或 TDS 路径。",
  englishDestinationLabel: "英文内容",
};

export const chineseModifiedPomLanding: PomLandingPageData = {
  slug: "modified-pom-compounds",
  title: "按零件需求选择 POM 材料家族",
  metaTitle: "按零件要求选择改性 POM 方向 | 台益",
  metaDescription:
    "先按耐磨、摩擦、冲击、刚性、流动性、耐候性或电性能控制要求判断改性 POM 方向，再对比材料家族与牌号。",
  eyebrow: "",
  intro:
    "先确定主导零件表现的性能缺口，再进入对应的 PLATFORM POM 材料家族，对比已列牌号与公开数据。",
  heroImage: {
    src: "/generated/landing/modified-pom-material-landscape-v1.webp",
    alt: "聚合物粒子与注塑零件组成的深色技术画面",
  },
  primaryActionLabel: "按零件要求选择",
  primaryActionHref: "#part-requirement-map",
  finalActionLabel: "申请 POM 牌号评估",
  finalDescription:
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。",
  supplierEvidence: {
    target: "about-qualification",
    label: "供应商准入",
    actionLabel: "查看供应商准入依据",
  },
  secondaryActionLabel: "浏览 POM 家族与牌号",
  secondaryActionHref: "/products",
  sections: [],
  sectionsVariant: "steps",
  catalogEvidence: {
    variant: "directory",
    position: "afterHero",
    title: "零件需要改善什么？",
    note:
      "从主导性能缺口开始。每条路径会进入对应的材料家族页面，以便审查牌号、应用和文件。",
    items: [
      {
        label: "基础 POM 树脂",
        mobileLabel: "基础 POM",
        detail:
          "当标准 POM 性能能够满足项目，需要先建立基准牌号对比时，从这里开始。",
        href: "/products/categories/base-pom-resin",
      },
      {
        label: "超高流动 POM",
        mobileLabel: "超高流动",
        detail:
          "适用于薄壁或长流动路径的注塑零件，且充模能力是首要筛选因素的项目。",
        href: "/products/categories/ultra-high-flow-pom",
      },
      {
        label: "耐磨 / 低摩擦 POM",
        mobileLabel: "耐磨 / 低摩擦",
        detail:
          "适用于滑动、旋转或反复运动零件，主要性能缺口是摩擦、磨损、噪声或黏滑。",
        href: "/products/categories/wear-resistant-low-friction-pom-compound",
      },
      {
        label: "高抗冲 POM",
        mobileLabel: "高抗冲",
        detail:
          "适用于比标准 POM 需要更高冲击强度、延伸率或低温韧性的零件。",
        href: "/products/categories/high-impact-pom-compound",
      },
      {
        label: "耐 UV POM",
        mobileLabel: "耐 UV",
        detail:
          "适用于户外或受光照零件；耐 UV 能力必须在具体牌号层面筛选并确认。",
        href: "/products/categories/uv-resistant-pom-compound",
      },
      {
        label: "玻璃纤维增强 POM",
        mobileLabel: "玻璃纤维增强",
        detail:
          "适用于选材主要由更高刚性、载荷响应和尺寸控制要求驱动的注塑零件。",
        href: "/products/categories/glass-fiber-reinforced-pom-compound",
      },
      {
        label: "玻璃微珠填充 POM",
        mobileLabel: "玻璃微珠填充",
        detail:
          "当收缩行为、尺寸稳定性或表面要求是项目核心时，优先审查这一方向。",
        href: "/products/categories/glass-bead-filled-pom-compound",
      },
      {
        label: "碳纤维增强 POM",
        mobileLabel: "碳纤维增强",
        detail:
          "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。",
        href: "/products/categories/carbon-fiber-reinforced-pom-compound",
      },
      {
        label: "导电 / 抗静电 POM",
        mobileLabel: "导电 / 抗静电",
        detail:
          "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。",
        href: "/products/categories/conductive-antistatic-pom-compound",
      },
    ],
    groups: [
      {
        id: "processing-flow",
        title: "加工与基础性能",
        description:
          "用于标准 POM 对比、薄壁、长流动路径或充模极限问题。",
        itemLabels: ["基础 POM 树脂", "超高流动 POM"],
      },
      {
        id: "wear-impact-weathering",
        title: "耐久性与使用环境",
        description:
          "用于运动接触面、韧性要求或受光照零件。",
        itemLabels: ["耐磨 / 低摩擦 POM", "高抗冲 POM", "耐 UV POM"],
      },
      {
        id: "reinforcement-dimensional-control",
        title: "刚性与尺寸控制",
        description:
          "用于载荷响应、收缩行为、稳定性或增强零件要求。",
        itemLabels: [
          "玻璃纤维增强 POM",
          "玻璃微珠填充 POM",
          "碳纤维增强 POM",
        ],
      },
      {
        id: "electrical-control",
        title: "电荷控制",
        description:
          "用于按电阻范围和成品测试定义的导电或抗静电零件。",
        itemLabels: ["导电 / 抗静电 POM"],
      },
    ],
  },
  reviewInputs: [
    "当前材料或参考牌号",
    "应用与注塑零件类型",
    "目标性能与失效模式",
    "模具阶段与型腔数",
    "文件与合规要求",
  ],
  relatedLinks: [
    {
      href: "/products",
      label: "POM 材料家族",
      description:
        "对比材料家族选项，再进入相应类别查看已列牌号。",
    },
    {
      href: "/wear-resistant-low-friction-pom",
      label: "耐磨与低摩擦 POM",
      description:
        "对比适用于滑动零件、齿轮、衬套、滚轮和运动部件的 POM 选项。",
    },
    {
      href: "/conductive-antistatic-pom",
      label: "导电与抗静电 POM",
      description:
        "对比适用于电气、ESD 敏感和功能注塑零件的电荷控制 POM 选项。",
    },
  ],
  showReviewSection: false,
  faqs: [
    {
      question: "什么是改性 POM？",
      answer:
        "改性 POM 是通过选定的添加剂、填料、增强材料、润滑剂、增韧剂或电性能改性剂进行调整的 POM 配混料。最终适用性取决于具体牌号和应用条件。",
    },
    {
      question: "本页与 POM 材料家族目录有什么不同？",
      answer:
        "本页从零件要求出发，帮助判断相关改性方向；POM 材料家族目录负责列出可用家族与牌号，技术数据搜索则提供牌号级数据和文件路径。",
    },
    {
      question: "台益能否根据应用要求筛选牌号？",
      answer:
        "可以。请提供零件、当前材料、目标性能、模具信息、文件要求和预计用量，以便筛选相关牌号。",
    },
  ],
};

export const chineseWearLowFrictionPomLanding: PomLandingPageData = {
  slug: "wear-resistant-low-friction-pom",
  title: "耐磨与低摩擦 POM",
  metaTitle: "耐磨低摩擦 POM 配混料 | 台益",
  metaDescription:
    "对比台益面向齿轮、衬套、滚轮、滑动零件和运动部件的耐磨与低摩擦 POM 选项。",
  eyebrow: "运动部件",
  intro:
    "针对存在材料损耗、滑动阻力、噪声、黏滑或对偶件磨损的注塑零件，对比耐磨与低摩擦 POM。",
  primaryActionLabel: "讨论磨损或摩擦要求",
  metrics: [
    { label: "典型零件", value: "齿轮 / 衬套" },
    { label: "选型依据", value: "磨损 / 摩擦" },
    { label: "验证方式", value: "应用试验" },
    { label: "技术文件", value: "可按需提供 TDS" },
  ],
  sections: [
    {
      title: "磨损与摩擦是两个不同目标",
      body:
        "低摩擦并不保证较长的耐磨寿命；耐磨牌号也可能仍产生过高摩擦或噪声。",
      points: [
        "明确载荷、速度、循环、温度和对偶材料",
        "检查润滑、表面粗糙度、对中情况和污染物",
        "对比磨损量、摩擦表现、噪声和尺寸变化",
        "通过有代表性的注塑零件测试确认结果",
      ],
    },
    {
      title: "典型运动部件",
      body:
        "齿轮、衬套、滚轮、滑块、导向件和其他反复运动的注塑零件可按这些因素进行初筛。",
      points: [
        "齿轮、蜗轮、凸轮、滚轮、套筒和滑块",
        "导轨、输送部件、纺织机械零件和运动支撑件",
        "需要降低黏滑、改善运动顺畅度或延长表面寿命的应用",
        "申请样品前需要对比改性 POM 的项目",
      ],
    },
  ],
  catalogEvidence: {
    title: "目录中的耐磨与摩擦牌号",
    note:
      "目录标明改性方向及部分已列性能。具体摩擦、磨损量和注塑零件适用性仍需结合牌号数据与代表性试验确认。",
    items: [
      {
        label: "POM EDM-111",
        detail: "MFI 7 g/10 min；本色；已列为高耐磨牌号。",
      },
      {
        label: "POM EGH20-TF",
        detail: "PTFE + 20% 玻璃纤维；已列为高耐磨牌号。",
      },
      {
        label: "POM EMS162",
        detail: "MFI 7 g/10 min；黑色；填充 MoS2，已列为高耐磨牌号。",
      },
      {
        label: "POM ENM1040",
        detail: "MFI 7 g/10 min；本色；已列有专用耐磨添加剂。",
      },
      {
        label: "POM EP-AF100A / EPAF100A / EPAF96A",
        detail: "适用于耐磨零件的芳纶纤维或芳纶粉填充选项。",
      },
      {
        label: "POM EPTL402 / ES0162 / ETM270H",
        detail: "PTFE 填充、硅油改性和高流动耐磨选项。",
      },
    ],
  },
  reviewInputs: [
    "运动方式与对偶材料",
    "载荷、速度、循环和温度",
    "当前磨损、噪声或摩擦问题",
    "润滑与表面粗糙度",
    "目标寿命与测试方法",
  ],
  relatedLinks: [
    {
      href: "/resources/wear-resistant-low-friction-pom-selection-guide",
      label: "耐磨 / 低摩擦 POM 选型指南",
      description:
        "阅读关于运动零件、对偶表面、润滑、噪声和磨损验证的完整技术指南。",
    },
    {
      href: "/products/categories/wear-resistant-low-friction-pom-compound",
      label: "耐磨 / 低摩擦 POM 牌号",
      description: "浏览已列的 POM 牌号，开展磨损与摩擦对比。",
    },
    {
      href: "/applications/motion-components",
      label: "运动部件",
      description: "对比齿轮、衬套、滑块和其他运动零件。",
    },
    {
      href: "/products/categories/pom#material-families",
      label: "浏览全部 POM 材料家族",
      description:
        "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。",
    },
  ],
  faqs: [
    {
      question: "耐磨 POM 与低摩擦 POM 是同一种材料吗？",
      answer:
        "不是。耐磨关注材料损耗与表面寿命；低摩擦关注滑动阻力、启动阻力、黏滑或噪声。部分配方可能兼顾两者，但仍应在实际接触系统中验证。",
    },
    {
      question: "对比磨损或摩擦性能需要哪些信息？",
      answer:
        "请提供零件、运动方式、对偶材料、载荷、速度、温度、润滑、失效模式、当前材料以及目标测试或使用寿命要求。",
    },
  ],
};

export const chineseConductiveAntistaticPomLanding: PomLandingPageData = {
  slug: "conductive-antistatic-pom",
  title: "导电与抗静电 POM",
  metaTitle: "导电与抗静电 POM 配混料 | 台益",
  metaDescription:
    "按目标电阻率、填料体系和零件要求对比导电与抗静电 POM 牌号，并审查牌号数据、文件和样品选项。",
  eyebrow: "电荷控制 POM",
  intro:
    "根据所需电性能测量、零件功能、颜色、保留的机械性能和成品测试方法选择导电或抗静电 POM。",
  primaryActionLabel: "申请导电 POM 牌号审查",
  secondaryActionLabel: "查看导电 POM 牌号数据",
  heroImage: {
    src: "/generated/landing/conductive-antistatic-pom-functional-components.png",
    alt: "黑色精密注塑功能零件形态示意",
  },
  metrics: [
    { label: "目标", value: "电荷控制" },
    { label: "典型颜色", value: "黑色" },
    { label: "选型数据", value: "电阻率" },
    { label: "适用方向", value: "功能零件" },
  ],
  gradeEvidence: {
    title: "可选 POM 电荷控制牌号",
    items: [
      {
        grade: "POM-CNT-R610 / POM-CNT-R35",
        modification: "CNT 抗静电",
        electricalDirection: "10⁶–10¹⁰ / 10³–10⁵",
      },
      {
        grade: "POM GP8 / POM GP3",
        modification: "碳纤维导电",
        electricalDirection: "10⁶–10⁸ / 10³–10⁵",
      },
      {
        grade: "POM EGH25CN",
        modification: "导电 / 抗静电 POM 配混料",
        electricalDirection: "受控电阻率",
      },
      {
        grade: "POM ECN1003B",
        modification: "导电 / 抗静电 POM 配混料",
        electricalDirection: "导电牌号",
      },
    ],
  },
  sections: [
    {
      title: "定义电性能目标",
      body:
        "先明确所需的电性能以及测量方式。抗静电、静电耗散和导电目标应以范围和测试方法定义，而不能只依赖标签。",
      points: [
        "所需电阻率范围",
        "表面或体积电阻率",
        "测试方法",
        "所需的抗静电、静电耗散或导电性能",
      ],
    },
    {
      title: "定义零件条件",
      body:
        "补充可能影响牌号适用性及机械性能保留的零件与项目条件。",
      points: [
        "零件功能与工作环境",
        "机械与尺寸要求",
        "颜色要求",
        "TDS、文件与样品需求",
      ],
    },
  ],
  sectionsNote:
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。",
  reviewInputs: [],
  relatedLinks: [
    {
      href: "/products/conductive-antistatic-compounds",
      label: "跨材料导电与抗静电配混料",
      description:
        "跨多种聚合物基材，对比碳纳米管抗静电和碳纤维导电选项。",
    },
    {
      href: "/products/categories/conductive-antistatic-pom-compound",
      label: "导电 / 抗静电 POM 牌号",
      description: "浏览已列的电荷控制 POM 牌号。",
    },
    {
      href: "/applications/electronics",
      label: "电子电气应用",
      description: "查看电气与电子注塑部件要求。",
    },
  ],
  faqs: [
    {
      question: "导电 POM 与抗静电 POM 是同一种材料吗？",
      answer:
        "不是。导电、静电耗散和抗静电通常对应不同的电性能范围和性能目标。每个项目都应确认具体目标与测试方法。",
    },
    {
      question: "电性能会影响机械性能吗？",
      answer:
        "会。用于电荷控制的填料或改性剂可能影响颜色、流动性、冲击、刚性、磨损和表面质量。批准前应对比完整的性能平衡。",
    },
  ],
};

export const chinesePomLandingPages = {
  "wear-resistant-low-friction-pom": chineseWearLowFrictionPomLanding,
  "conductive-antistatic-pom": chineseConductiveAntistaticPomLanding,
} satisfies Record<string, PomLandingPageData>;

export type ChinesePomLandingSlug = keyof typeof chinesePomLandingPages;
