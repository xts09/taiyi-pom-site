import { headerPomMenuMessages } from "../headerPomMenuMessages.ts";
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
      additionalFamily: "聚酰胺系列",
      higherTemperature: "高温聚酰胺",
      supplement: "基础树脂",
      crossMaterial: "导电与抗静电",
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
    pomMenu: headerPomMenuMessages["zh"],
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
    resourceDescription: "查找材料选型、加工排障与数据验证所需的实用指南。",
    allResources: "全部资料",
    news: "新闻",
    aboutUs: "关于我们",
    contact: "联系我们",
    searchLabel: "搜索技术数据表与资料",
    languageSwitcherLabel: "语言",
    englishDestinationLabel: "英文内容",
    menu: "菜单",
    close: "关闭",
    findGradeData: "查找牌号数据与 TDS",
    findTds: "查找 TDS",
    discussApplication: "讨论您的应用",
  },
  Footer: {
    brandRelation: "台益 · PLATFORM® 工程材料",
    logoAlt: "PLATFORM 注册商标",
    products: "产品",
    applications: "应用",
    allApplications: "全部应用",
    resources: "资料",
    technicalData: "牌号数据与 TDS",
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
    triggerLabel: "讨论您的应用",
  },
  Analytics: {
    title: "您的隐私选择",
    descriptionBeforeLink: "我们使用 Google Analytics 和 Google Ads 的可选 Cookie，了解网站使用情况并衡量广告带来的询盘。点击“全部接受”将同时启用这两项功能。请查看我们的",
    privacyPolicy: "隐私政策",
    preferenceNotice: "您可以通过页脚的 Cookie 设置更改或撤回选择。广告个性化保持关闭。",
    acceptAll: "全部接受",
    rejectOptional: "不使用可选 Cookie",
    dismiss: "关闭并保留当前选择",
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
      title: "材料与牌号",
      body:
        "PLATFORM® 改性 POM 具有耐磨、低摩擦及良好的尺寸稳定性，适用于齿轮、轴承和精密配合零件。台益提供润滑、增强、增韧等改性系列，以及 PA6、PA66、PPA 和导电、抗静电材料，面向汽车、电子电气与工业机械应用。",
      startAction: "按零部件需求选材",
      dataSheetsAction: "查找牌号数据与 TDS",
    },
    selection: {
      kicker: "从需求开始",
      title: "零部件需要实现什么？",
      body: "按零部件的主要失效风险比较改性体系，明确需要核对的性能指标。",
      navigationAria: "按零部件需求划分的选材路径",
      paths: [
        {
          label: "耐磨 / 摩擦",
          title: "运动或滑动零部件",
          description: "粘滑与操作力优先比较 PTFE 或硅油润滑体系；间隙增长优先比较磨耗与力学保持。",
        },
        {
          label: "刚性 / 尺寸",
          title: "载荷下的精度",
          description: "支架挠曲先比较弯曲模量与蠕变，精密配合再核对取向收缩和翘曲。",
        },
        {
          label: "冲击 / 装配",
          title: "卡扣或冲击载荷",
          description:
            "卡臂开裂先看缺口韧性与装配应变，持续夹持再比较蠕变后的保持力。",
        },
        {
          label: "静电控制",
          title: "导电或抗静电功能",
          description:
            "先锁定电阻测试方法与接地路径，再按温度、刚性和尺寸要求选择基材及 CNT／碳纤维体系。",
        },
      ],
    },
    families: {
      kicker: "完整材料范围",
      title: "查看全部产品系列",
      body: "比较六个产品系列的已列牌号与应用方向，再进入具体材料页继续筛选。",
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
          label: "基础树脂",
          description:
            "作为成型、尺寸与力学基准，按流动等级选择通用、复杂流道或薄壁件的首轮牌号。",
          metricLabel: "个基础牌号",
        },
        {
          title: "PA6 改性材料",
          label: "聚酰胺系列",
          description:
            "覆盖玻纤增强、增韧、阻燃、耐磨与矿物填充 PA6；按刚性、装配韧性和成型流动性筛选配方。",
          metricLabel: "个已列牌号",
        },
        {
          title: "PA66 改性材料",
          label: "聚酰胺系列",
          description:
            "覆盖玻纤增强、阻燃与耐磨 PA66；高温受载件优先核对刚性保持，并分别比较干态与调湿态尺寸。",
          metricLabel: "个已列牌号",
        },
        {
          title: "PPA 改性材料",
          label: "较高温应用",
          description:
            "PA66 高温刚性或湿度下尺寸成为限制时，以 PPA 具体牌号建立对比，并核对干燥、模温与设备能力。",
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
      body: "提交零件用途、当前材料与未达标项目，附已有图纸或工况。我们将提供候选牌号对比建议、TDS 与试模样品支持，并说明关键验证项目。",
      contactSource: "产品目录",
    },
  },
} satisfies SiteMessages;

export default messages;
