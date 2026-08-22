import type { ResourceIndexMessages } from "@/i18n/resourceTypes";

const messages = {
  metadata: {
    title: "技术资料 | 台益",
    collectionTitle: "材料选型与技术资料 | 台益",
    description:
      "按材料选型、加工与问题排查、牌号数据与验证任务浏览台益技术资料。",
    imageAlt: "台益技术资料与材料选型指南",
  },
  breadcrumb: {
    home: "首页",
    resources: "资料",
  },
  contactSource: "技术资料目录",
  hero: {
    eyebrow: "技术资料",
    title: "材料选型、加工与验证资料",
    description:
      "浏览材料选型、POM 注塑加工与问题排查、牌号数据以及替代牌号验证等实用资料。",
    dataAction: "查找牌号数据与 TDS",
    pathsAria: "按任务划分的技术资料路径",
    pathsLabel: "按工程任务浏览",
    resourceCountSuffix: "条资料",
  },
  directory: {
    title: "浏览技术资料",
    description: "按工程任务查看完整的指南、问题排查、数据工具和常见问题目录。",
    viewAllPrefix: "查看全部",
  },
  inquiry: {
    title: "需要特定牌号的资料？",
    description:
      "请提供牌号、应用、所需资料和项目阶段，以便结合具体需求确认资料是否可提供。",
    action: "讨论您的应用",
  },
  linkTypeLabels: {
    guide: "指南",
    technicalNote: "技术说明",
    faq: "常见问题",
    dataTool: "数据工具",
    directory: "目录",
  },
  groups: {
    "material-selection": {
      title: "材料选型",
      navigationLabel: "选择材料",
      description:
        "先明确零部件功能、主要失效风险、使用工况和所需验证资料，再缩小材料系列或牌号方向。",
      imageAlt: "台益材料选型技术资料",
      entryPaths: [
        "/resources/material-selection-guide",
        "/resources/wear-resistant-low-friction-pom-selection-guide",
        "/resources/pom-gear-material-selection",
        "/resources/pa6-vs-pa66-reinforced-parts",
        "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide",
        "/resources/ppa-vs-pa66-material-selection",
        "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide",
        "/resources/application-notes",
        "/resources/reinforcement-materials-overview",
      ],
    },
    "processing-troubleshooting": {
      title: "加工与问题排查",
      navigationLabel: "加工与排查",
      description:
        "为注塑试模做好准备，控制材料状态，并依据可追溯的数据排查尺寸与加工问题。",
      imageAlt: "台益加工与问题排查技术资料",
      entryPaths: [
        "/resources/processing-guide",
        "/resources/pom-warpage-troubleshooting",
        "/resources/pa6-pa66-moisture-drying-conditioning-guide",
      ],
    },
    "data-validation": {
      title: "数据与验证",
      navigationLabel: "查找数据并验证",
      description:
        "比较牌号依据、查找技术数据、准备替代材料试验，并确认生产放行所需的资料与验证步骤。",
      imageAlt: "台益数据与验证技术资料",
      entryPaths: [
        "/resources/alternative-pom-grade-validation",
        "/technical-data-sheets",
        "/products/categories/pom",
        "/resources/faq",
      ],
    },
  },
  entries: {
    "/resources/material-selection-guide": {
      label: "POM 材料选型指南",
      type: "guide",
      description:
        "以零部件需求为起点，比较耐磨、低摩擦、增强、导电、抗静电、耐候与高抗冲 POM 方向。",
    },
    "/resources/wear-resistant-low-friction-pom-selection-guide": {
      label: "耐磨 / 低摩擦 POM 选型指南",
      type: "guide",
      description:
        "面向齿轮、轴套、滚轮、滑块、导向件与阀门运动部件，比较耐磨和低摩擦 POM 的选型依据。",
    },
    "/resources/pom-gear-material-selection": {
      label: "POM 齿轮材料选型",
      type: "guide",
      description:
        "根据载荷、疲劳、对偶件、润滑、温度、精密注塑与代表性验证要求筛选塑料齿轮用 POM。",
    },
    "/resources/pa6-vs-pa66-reinforced-parts": {
      label: "PA6 与 PA66 选型指南",
      type: "guide",
      description:
        "从调湿状态、温度、力学平衡、尺寸表现、注塑风险与牌号数据等方面比较增强 PA6 和 PA66。",
    },
    "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide": {
      label: "玻纤增强 PA6 / PA66 指南",
      type: "guide",
      description:
        "结合玻纤含量、调湿、载荷、取向、翘曲、注塑可行性与零部件证据筛选玻纤增强 PA6 和 PA66。",
    },
    "/resources/ppa-vs-pa66-material-selection": {
      label: "PPA 与 PA66 选型指南",
      type: "guide",
      description:
        "仅在已明确高温、调湿后性能、尺寸、耐化学或电气性能缺口时，再评估以 PPA 替代 PA66 的方向。",
    },
    "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide": {
      label: "导电 PA6 / PA66 / PPA 指南",
      type: "guide",
      description:
        "依据电气测试方法、目标区间、接地、几何、调湿、注塑与验证要求筛选 CNT 或碳纤维 PA6、PA66 和 PPA。",
    },
    "/resources/application-notes": {
      label: "应用说明",
      type: "technicalNote",
      description:
        "按零部件功能、失效风险和使用工况审核改性 POM，并明确进入牌号筛选前所需的验证依据。",
    },
    "/resources/reinforcement-materials-overview": {
      label: "增强材料概览",
      type: "guide",
      description:
        "从载荷路径、尺寸目标、电气功能、注塑风险和验证范围比较玻璃纤维与碳纤维增强方向。",
    },
    "/resources/processing-guide": {
      label: "POM 加工指南",
      type: "technicalNote",
      description:
        "涵盖材料处理、试模、收缩、翘曲、尺寸漂移、成型缺陷及问题排查输入的实用 POM 注塑指南。",
    },
    "/resources/pom-warpage-troubleshooting": {
      label: "POM 翘曲问题排查",
      type: "technicalNote",
      description:
        "从测量方法、收缩方向、零部件与模具设计、保压、冷却和验证过程排查 POM 翘曲。",
    },
    "/resources/pa6-pa66-moisture-drying-conditioning-guide": {
      label: "PA6 / PA66 水分与调湿指南",
      type: "technicalNote",
      description:
        "区分 PA6 和 PA66 的粒子干燥、成型后干态、调湿、使用环境暴露、测量与验证。",
    },
    "/resources/alternative-pom-grade-validation": {
      label: "替代 POM 牌号验证",
      type: "guide",
      description:
        "通过资料比较、受控成型、尺寸、功能、合规与生产放行依据，对候选替代 POM 牌号进行验证。",
    },
    "/technical-data-sheets": {
      label: "数据 / TDS 搜索",
      type: "dataTool",
      description: "搜索牌号数据、TDS 获取路径、选型指南与相关技术资料。",
    },
    "/products/categories/pom": {
      label: "POM 材料族",
      type: "directory",
      description: "先浏览 POM 材料族，再进入当前可用的牌号级数据与资料。",
    },
    "/resources/faq": {
      label: "改性 POM 常见问题",
      type: "faq",
      description:
        "了解 POM 与 PA、耐磨与摩擦、增强与导电 POM、TDS 性能、收缩、翘曲及材料选型等常见问题。",
    },
  },
  category: {
    context: "技术资料",
    navigationAria: "技术资料分类",
    browseLabel: "浏览资料",
    overview: "总览",
    directoryAriaSuffix: "资料",
    directoryTitle: "本分类中的资料",
    directoryDescription:
      "选择与项目下一项决策最相关的指南、技术说明、数据工具或目录。",
    reviewEyebrow: "技术审核",
    reviewTitle: "不确定应从哪项资料开始？",
    reviewDescription:
      "请提供零部件、当前材料、目标性能、加工方式和资料需求。我们可协助确定适合初步比较的材料系列与所需资料。",
    reviewAction: "讨论您的应用",
  },
  articleUi: {
    breadcrumbHome: "首页",
    breadcrumbResources: "资料",
    faqContext: "技术问答",
    guideContext: "技术指南",
    resourceContext: "技术资料",
    articleKicker: "技术指南",
    modulesAriaSuffix: "内容模块",
    relatedAria: "相关资料",
    relatedEyebrow: "继续浏览",
    relatedTitle: "相关后续步骤",
    relatedDescription: "选择与下一项材料、加工或验证决策相匹配的支持资料。",
    reviewEyebrow: "技术审核",
    reviewTitle: "需要把这些说明用于您的零部件？",
    reviewDescription:
      "请提供零部件、使用工况、目标性能、当前材料、模具阶段和资料需求。我们可协助确定适合比较的材料系列与所需数据。",
    reviewAction: "讨论您的应用",
    contactSourcePrefix: "技术资料",
    sidebarLabel: "本页内容",
    sidebarAria: "文章章节",
    tableOfContentsAria: "文章目录",
    mediaLabelsAria: "摩擦学系统输入",
    comparisonAria: "选型差异",
    englishDestinationLabel: "英文内容",
  },
  faqExplorer: {
    ariaLabel: "常见问题浏览器",
    searchTitle: "搜索技术问答",
    searchDescription: "搜索材料对比、改性方向、TDS 解读、资料要求与验证输入。",
    searchLabel: "搜索问题",
    searchPlaceholder: "例如：收缩、HDT、导电、TDS…",
    topicsAria: "常见问题主题",
    emptyTitle: "没有匹配的问题",
    emptyDescription:
      "请尝试更宽泛的关键词，例如 POM、耐磨、收缩、资料或牌号选型。",
    questionsAriaSuffix: "问题",
  },
  guideExplorer: {
    explorerAriaSuffix: "内容浏览器",
    searchTitlePrefix: "搜索",
    searchDescription: "搜索指南主题、审核要点、材料选型说明与验证输入。",
    searchLabel: "搜索指南",
    searchPlaceholder: "例如：收缩、翘曲、干燥、耐磨…",
    topicsAriaSuffix: "主题",
    emptyTitle: "没有匹配的指南主题",
    emptyDescription:
      "请尝试更宽泛的关键词，例如 POM、收缩、耐磨、资料或试验。",
  },
} satisfies ResourceIndexMessages;

export default messages;
