import type {
  CompanyFigure,
  CompanyQualification,
  FactoryImage,
} from "@/data/company";
import type { ExportRoute } from "@/data/exportRoutes";

export const chineseAboutMessages = {
  metadata: {
    title: "工程塑料改性材料制造商 | Taiyi Polymer",
    description:
      "Taiyi Polymer 是江苏泰亿纳米科技有限公司面向国际市场的材料品牌，专注于 POM 改性材料及精选工程塑料改性材料。",
    imageAlt: "位于中国江苏盐城的 Taiyi Polymer 工厂",
  },
  hero: {
    eyebrow: "关于 Taiyi Polymer",
    title: "专注于工程塑料改性材料的制造商。",
    summary:
      "Taiyi Polymer 是江苏泰亿纳米科技有限公司面向国际市场的品牌，依托盐城制造基地，专注于 POM 改性材料及精选工程塑料改性材料。",
    materialsAction: "查看材料范围",
    manufacturingAction: "查看制造能力",
    location: "盐城",
  },
  identity: {
    eyebrow: "我们是谁",
    title: "从零部件需求到候选牌号评估。",
    body: "我们从零部件功能、加工条件和目标性能出发，缩小材料方向，审核牌号数据，并支持以样品为基础的验证。",
  },
  story: {
    eyebrow: "发展历程",
    title: "服务工业材料项目，而不是追求宽泛目录。",
    description:
      "我们的发展脉络保持清晰：制造业务始于 2003 年，今天继续围绕明确的材料方向开展工作。",
    entries: [
      {
        date: "2003",
        title: "制造业务起步",
        body: "公司的制造业务于 2003 年在江苏盐城起步。",
      },
      {
        date: "至今",
        title: "POM 改性材料仍是核心",
        body: "Taiyi Polymer 面向国际项目呈现公司的 POM 改性材料重点及精选工程塑料改性材料。",
      },
    ],
  },
  focus: {
    eyebrow: "我们的重点",
    title: "聚焦更明确的材料范围，同时连接完整决策过程。",
    areas: [
      {
        index: "01",
        label: "核心材料系列",
        title: "POM 改性材料",
        description:
          "面向注塑零部件的耐磨、低摩擦、增强、导电及其他功能型 POM 改性材料。",
        href: "/products",
      },
      {
        index: "02",
        label: "精选补充材料系列",
        title: "工程塑料改性材料",
        description:
          "当零部件需要不同的耐热性、刚性或韧性平衡时，评估精选 PA6、PA66 与 PPA 改性材料。",
        href: "/products#product-families",
      },
      {
        index: "03",
        label: "材料确定之前",
        title: "材料评估",
        description:
          "候选牌号筛选从零部件功能、使用条件、加工限制及可供审核的证据开始。",
        href: "/resources/material-selection",
      },
      {
        index: "04",
        label: "牌号确认之后",
        title: "生产与重复供货",
        description:
          "试制改性、厂内检测、批次资料和工业化重复生产均在盐城基地协调。",
        href: "#manufacturing",
      },
    ],
  },
  manufacturing: {
    eyebrow: "制造依据",
    title: "支撑试制批次与重复订单的生产规模。",
    description: "改性造粒、材料检测和批次资料均在盐城基地协调。",
    action: "讨论生产要求",
    facilityLabel: "盐城制造基地",
  },
  workflow: {
    eyebrow: "我们的工作方式",
    title: "从零部件需求到重复供货。",
    description: "整个过程围绕应用要求，以及批准材料所需的证据展开。",
    steps: [
      [
        "01",
        "了解零部件",
        "我们首先确认功能、载荷、环境、加工方式以及当前材料问题。",
      ],
      [
        "02",
        "筛选候选材料",
        "根据材料系列、改性方向及应用关键性能缩小候选牌号范围。",
      ],
      [
        "03",
        "验证候选牌号",
        "在材料获准用于零部件之前，对齐样品、测试条件和可用资料。",
      ],
      [
        "04",
        "支持重复供货",
        "牌号确认后，协调生产与批次资料，支持工业订单重复供货。",
      ],
    ],
  },
  people: {
    eyebrow: "工程支持",
    title: "工程沟通始终与生产保持连接。",
    description:
      "材料决策会经过技术沟通、实验室审核、生产协调和质量资料确认，而不是停留在孤立的销售表单中。",
    roles: ["技术沟通", "实验室审核", "生产协调", "质量资料"],
  },
  credentials: {
    eyebrow: "质量与合规",
    title: "用于供应商准入的关键证据。",
    description:
      "企业资质、管理体系证书及材料资料可用于项目审核和供应商准入。",
    documentsAria: "可提供的材料资料",
    systemsCategory: "管理体系",
    systemsTitle: "已认证的运营体系",
  },
  global: {
    eyebrow: "全球合作",
    title: "为国际项目提供材料支持。",
    description: "国际项目与市场合作将盐城制造基地连接至下列区域。",
  },
  finalCta: {
    eyebrow: "开始技术沟通",
    title: "与 Taiyi Polymer 沟通。",
    body: "请提供零部件、使用条件、目标性能或当前牌号。我们将协助明确下一项可执行工作。",
    situations: [
      "供应商准入",
      "替代牌号评估",
      "新零部件开发",
      "样品或 TDS 申请",
    ],
    primaryAction: "讨论材料需求",
    secondaryAction: "联系销售",
  },
} as const;

export const chineseCompanyFigures: CompanyFigure[] = [
  { label: "年改性材料产能", value: "60,000", note: "吨/年" },
  { label: "制造积累", value: "2003", note: "工程塑料制造经验" },
  { label: "双螺杆生产线", value: "15", note: "自有挤出生产线" },
  { label: "工厂面积", value: "25,000 m2", note: "平方米" },
  { label: "检测设备", value: "32", note: "厂内设备数量" },
];

export const chineseCompanyQualifications: CompanyQualification[] = [
  { category: "企业资质", title: "国家高新技术企业" },
  { category: "省级资质", title: "江苏省专精特新中小企业" },
  { category: "知识产权", title: "29 项授权专利" },
];

export const chineseExportRoutes: ExportRoute[] = [
  { id: "central-asia", region: "中亚", coverage: "乌兹别克斯坦、哈萨克斯坦" },
  { id: "europe", region: "欧洲", coverage: "波兰、土耳其" },
  { id: "east-asia", region: "东亚", coverage: "韩国、日本" },
  { id: "americas", region: "美洲", coverage: "墨西哥、巴西、阿根廷" },
];

export const chineseFactoryImages: FactoryImage[] = [
  {
    src: "/factory-exterior.webp",
    alt: "位于中国江苏盐城的 Taiyi Polymer 工厂外景",
    label: "工厂外景",
    placement: "hero",
  },
  {
    src: "/factory-warehouse.webp",
    alt: "Taiyi Polymer 生产与仓储区域",
    label: "改性生产车间",
    placement: "story",
  },
  {
    src: "/factory-extrusion.webp",
    alt: "Taiyi Polymer 双螺杆挤出生产线",
    label: "挤出生产线",
    placement: "gallery",
  },
  {
    src: "/factory-machine.webp",
    alt: "Taiyi Polymer 挤出机及生产设备",
    label: "生产设备",
    placement: "gallery",
  },
  {
    src: "/factory-laboratory-testing-documentary-v4.webp",
    alt: "Taiyi Polymer 材料检测实验室及评估设备",
    label: "材料检测实验室",
    placement: "testing",
  },
];
