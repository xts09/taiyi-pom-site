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
      "告知牌号或零件用途及所需资料，获取对应 TDS、候选牌号对比建议和试模样品支持。",
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
        "围绕零部件功能、失效风险和使用工况，介绍材料与牌号的选择依据及所需验证资料。",
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
        "/resources/pom-wear-benchmark",
        "/technical-data-sheets",
        "/products/categories/pom",
        "/resources/faq",
      ],
    },
  },
  entries: {
    "/resources/pom-wear-benchmark": {
      label: "POM 耐磨测试记录",
      type: "technicalNote",
      description: "报告记录按工况分组，附测量值、过程曲线和现有试样照片。",
    },
    "/resources/material-selection-guide": {
      label: "POM 材料选型指南",
      type: "guide",
      description:
        "从磨损、开裂或变形等主导失效切入，找到润滑、增韧或增强 POM 的首轮候选牌号。",
    },
    "/resources/wear-resistant-low-friction-pom-selection-guide": {
      label: "耐磨 / 低摩擦 POM 选型指南",
      type: "guide",
      description:
        "区分低启动阻力与长期磨耗，按摩擦副选择 PTFE、MoS₂、硅油或芳纶改性 POM。",
    },
    "/resources/pom-gear-material-selection": {
      label: "POM 齿轮材料选型",
      type: "guide",
      description:
        "齿面磨损、齿根疲劳与蠕变分别怎样影响 POM 选择？结合已有牌号与齿轮案例确定首轮验证重点。",
    },
    "/resources/pa6-vs-pa66-reinforced-parts": {
      label: "PA6 与 PA66 选型指南",
      type: "guide",
      description:
        "以 EAG130 与 EAG230 GF30 为对比起点，分清基材、吸湿状态与温度对刚性和尺寸的影响。",
    },
    "/resources/glass-fiber-reinforced-pa6-pa66-selection-guide": {
      label: "玻纤增强 PA6 / PA66 指南",
      type: "guide",
      description:
        "先以相同玻纤比例比较 PA6 与 PA66，再沿目录阶梯调整刚性，并控制取向翘曲和装配韧性。",
    },
    "/resources/ppa-vs-pa66-material-selection": {
      label: "PPA 与 PA66 选型指南",
      type: "guide",
      description:
        "PA66 高温刚性或湿度下尺寸未达标时，用 EAG230／EAG630H GF30 数据确定 PPA 对比与试模重点。",
    },
    "/resources/conductive-antistatic-pa6-pa66-ppa-selection-guide": {
      label: "导电 PA6 / PA66 / PPA 指南",
      type: "guide",
      description:
        "从目标电阻与接地路径切入，选择 CNT 或碳纤维配方，明确成型后应复测的电气指标。",
    },
    "/resources/application-notes": {
      label: "应用说明",
      type: "technicalNote",
      description:
        "把零件失效转化为选材指标：齿轮看疲劳与磨损，阀芯看启动阻力与密封，支架看刚性与蠕变。",
    },
    "/resources/reinforcement-materials-overview": {
      label: "增强材料概览",
      type: "guide",
      description:
        "刚性不足时如何选玻纤，需要导电时如何选碳纤维？同时识别取向、翘曲与对偶件磨损的代价。",
    },
    "/resources/processing-guide": {
      label: "POM 加工指南",
      type: "technicalNote",
      description:
        "先稳定材料处理与充填保压，再按缺陷定位收缩、翘曲和尺寸漂移的排查顺序。",
    },
    "/resources/pom-warpage-troubleshooting": {
      label: "POM 翘曲问题排查",
      type: "technicalNote",
      description:
        "把翘曲形状与模穴、流向和测量时间对应起来，优先定位冷却、保压或取向差异。",
    },
    "/resources/pa6-pa66-moisture-drying-conditioning-guide": {
      label: "PA6 / PA66 水分与调湿指南",
      type: "technicalNote",
      description:
        "区分成型前干燥与成型后调湿，建立可重复的水分状态，减少尺寸与装配测量误判。",
    },
    "/resources/alternative-pom-grade-validation": {
      label: "替代 POM 牌号验证",
      type: "guide",
      description:
        "更换 POM 供应来源时，建立尺寸、成型与功能对比基准，形成试模和生产放行清单。",
    },
    "/technical-data-sheets": {
      label: "数据 / TDS 搜索",
      type: "dataTool",
      description: "搜索牌号数据、TDS 获取路径、选型指南与相关技术资料。",
    },
    "/products/categories/pom": {
      label: "POM 材料族",
      type: "directory",
      description: "浏览 POM 材料族及当前可用的牌号数据与技术资料。",
    },
    "/resources/faq": {
      label: "改性 POM 常见问题",
      type: "faq",
      description:
        "快速厘清 POM 与 PA、低摩擦与耐磨的区别，并找到 TDS、收缩和翘曲问题的下一步处理方式。",
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
      "提交当前材料、零件用途与未达标项目，获取候选牌号对比建议、TDS 和试模样品支持；已有测试记录可用于确定首轮验证重点。",
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
      "提交当前材料、零件用途与未达标项目，获取候选牌号对比建议、TDS 和试模样品支持；已有测试记录可用于确定首轮验证重点。",
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
