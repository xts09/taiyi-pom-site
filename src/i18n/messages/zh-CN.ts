import type { SiteMessages } from "@/i18n/types";
import coreMessages from "./zh-CN-core.ts";

const messages = {
  ...coreMessages,
  Taxonomy: {
    products: {
      pom: "POM 改性材料",
      pa6: "PA6 改性材料",
      pa66: "PA66 改性材料",
      ppa: "PPA 改性材料",
      pomResin: "基础 POM 树脂",
      conductiveAntistatic: "导电与抗静电改性材料",
    },
    productEyebrows: {
      coreLine: "核心产品线",
      additionalFamily: "其他材料系列",
      higherTemperature: "较高温应用",
      supplement: "补充产品线",
      crossMaterial: "跨基材",
    },
    applications: {
      automotive: "汽车",
      electronics: "电子电气",
      "conveyor-automation": "输送与自动化",
      "motion-components": "运动部件",
      "water-control": "水路控制",
      "washing-machine-components": "洗衣机",
      "outdoor-equipment": "户外设备",
      "textile-machinery": "纺织机械",
    },
    componentSolutions: "零部件解决方案",
    resources: {
      "material-selection": {
        title: "材料选型",
        navigationLabel: "选择材料",
      },
      "processing-troubleshooting": {
        title: "加工与问题排查",
        navigationLabel: "加工与排查",
      },
      "data-validation": {
        title: "数据与验证",
        navigationLabel: "查找数据并验证",
      },
    },
  },
  Header: {
    brandHomeLabel: "台益首页",
    navigationAria: "主导航",
    products: "产品",
    productCategories: "产品分类",
    productDescription: "从材料系列开始选择，或跨基材比较导电与抗静电牌号。",
    allProducts: "全部产品",
    applications: "应用",
    applicationAreas: "应用领域",
    applicationDescription: "按使用条件和材料要求查看常见注塑零部件应用。",
    allApplications: "全部应用",
    resources: "资料",
    technicalResources: "技术资料",
    allResources: "全部资料",
    aboutUs: "关于我们",
    contact: "联系我们",
    searchLabel: "搜索技术数据表与资料",
    languageSwitcherLabel: "语言",
    englishDestinationLabel: "英文内容",
    menu: "菜单",
    close: "关闭",
    findGradeData: "查找牌号数据与 TDS",
    discussApplication: "讨论您的应用",
  },
  Footer: {
    brandRelation: "台益 · PLATFORM® 工程材料",
    logoAlt: "PLATFORM 注册商标",
    pitchTitle: "从零部件需求出发，做材料决策",
    pitchCopy:
      "请告诉我们零部件、使用条件和目标性能。我们将协助缩小候选牌号范围，并确认可用于评估的样品和技术资料。",
    discussApplication: "讨论您的应用",
    products: "产品",
    applications: "应用",
    allApplications: "全部应用",
    resources: "资料",
    company: "公司",
    aboutUs: "关于我们",
    contactSales: "联系销售",
    qualityCompliance: "质量与合规",
    manufacturing: "生产制造",
    email: "邮箱",
    call: "电话",
    emailAria: "向台益发送邮件",
    callAria: "致电台益",
    whatsappAria: "通过 WhatsApp 联系台益",
    contactActionsAria: "页脚联系选项",
    navigationAria: "页脚导航",
    location: "中国江苏盐城",
    rightsReserved: "保留所有权利。",
    privacyPolicy: "隐私政策",
  },
  FloatingContact: {
    mailSubject: "材料需求咨询",
    email: "邮件",
    whatsapp: "WhatsApp",
    call: "电话",
    closeOptions: "关闭联系选项",
    openOptions: "打开联系选项",
    salesContact: "销售联系",
    title: "讨论您的应用",
    description: "向我们的材料团队说明零部件、目标性能和资料需求。",
    directOptionsAria: "直接联系选项",
    triggerLabel: "联系",
  },
  Analytics: {
    title: "您的隐私选择",
    descriptionBeforeLink:
      "我们使用可选的分析 Cookie 了解访客如何使用本网站，并持续改进材料信息。除非您主动接受，否则分析功能不会启用。您可以随时通过“Cookie 设置”更改选择。请查看我们的",
    privacyPolicy: "隐私政策",
    currentChoice: "当前选择：",
    accepted: "已同意",
    notAccepted: "未同意",
    accept: "接受分析 Cookie",
    continueWithout: "不启用分析并继续",
    settings: "Cookie 设置",
  },
  Products: {
    metadata: {
      title: "工程塑料改性材料 | 台益",
      description:
        "查看台益的 POM 改性材料、基础 POM 树脂、精选 PA6、PA66 与 PPA 系列，以及导电和抗静电改性材料。",
      imageAlt: "台益 POM 材料与工程塑料产品目录",
    },
    breadcrumbHome: "首页",
    breadcrumbProducts: "产品",
    hero: {
      eyebrow: "产品目录",
      title: "工程塑料改性材料",
      subtitle: "以 POM 改性材料为核心产品线",
      body: "以 POM 改性材料为核心，同时提供基础 POM 树脂及精选 PA6、PA66、PPA、导电与抗静电材料，满足不同的性能平衡需求。",
      startAction: "按零部件需求选材",
      dataSheetsAction: "查找牌号数据与 TDS",
    },
    selection: {
      kicker: "从需求开始",
      title: "零部件需要实现什么？",
      body: "选择最接近的初筛路径。在比较具体牌号之前，先了解各项性能之间需要权衡的因素。",
      note: "需要更高的耐热性或其他聚合物系列？可继续查看下方完整材料范围。",
      navigationAria: "按零部件需求划分的选材路径",
      paths: [
        {
          label: "耐磨 / 摩擦",
          title: "运动或滑动零部件",
          description: "比较载荷、速度、对偶件、润滑、噪音和目标磨损寿命。",
        },
        {
          label: "刚性 / 尺寸",
          title: "载荷下的精度",
          description: "比较刚性、蠕变、收缩行为、翘曲及注塑流动取向。",
        },
        {
          label: "冲击 / 装配",
          title: "卡扣或冲击载荷",
          description:
            "选择韧性方向前，应检查冲击载荷、温度、熔接线和装配应力。",
        },
        {
          label: "静电控制",
          title: "导电或抗静电功能",
          description:
            "选择基材前，应明确目标电阻范围、接地、几何、颜色和测试方法。",
        },
      ],
    },
    families: {
      kicker: "完整材料范围",
      title: "查看全部产品系列",
      body: "POM 改性材料是核心产品线。当应用需要其他性能平衡时，还可评估基础树脂、精选 PA6、PA66、PPA 以及跨基材静电控制材料。",
      items: [
        {
          title: "POM 改性材料",
          label: "核心产品线",
          description:
            "面向精密注塑件的耐磨、低摩擦、增强、导电、抗静电及高抗冲 POM 选项。",
          metricLabel: "个改性牌号",
        },
        {
          title: "基础 POM 树脂",
          label: "精选供应",
          description:
            "用于基础 POM 对比、技术资料审核和项目样品评估的精选基础树脂。",
          metricLabel: "个基础牌号",
        },
        {
          title: "PA6 改性材料",
          label: "其他材料系列",
          description:
            "用于增强、增韧、阻燃、耐磨及矿物填充注塑件的精选 PA6 改性材料。",
          metricLabel: "个已列牌号",
        },
        {
          title: "PA66 改性材料",
          label: "其他材料系列",
          description:
            "用于增强、阻燃、耐磨及尺寸稳定注塑件的精选 PA66 改性材料。",
          metricLabel: "个已列牌号",
        },
        {
          title: "PPA 改性材料",
          label: "较高温应用",
          description:
            "面向需要刚性与尺寸稳定性的较高温注塑件的 PPA 改性材料。",
          metricLabel: "个已列牌号",
        },
        {
          title: "导电与抗静电改性材料",
          label: "跨基材",
          description:
            "比较 POM、ABS、PC、PA6、PA66、PPS、TPU 等基材中的 CNT 抗静电和碳纤维导电方案。",
          metricLabel: "个已列牌号",
        },
      ],
    },
    inquiry: {
      title: "准备候选材料清单",
      eyebrow: "准备咨询",
      action: "讨论您的应用",
      body: "请提供应用、模具阶段、模穴数、收缩或翘曲问题、关键性能要求、当前参考材料、颜色、资料需求及预估用量。这些信息可帮助确定相关材料系列，并明确牌号数据、资料和样品的后续安排。",
      contactSource: "产品目录",
    },
  },
} satisfies SiteMessages;

export default messages;
