import type {
  CompanyFigure,
  CompanyQualification,
  FactoryImage,
} from "@/data/company";
import type { ExportRoute } from "@/data/exportRoutes";

export const chineseAboutMessages = {
  metadata: {
    title: "改性工程塑料制造商 | 台益",
    description:
      "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌，专注于改性 POM 及其他精选改性工程塑料。",
    imageAlt: "位于中国江苏盐城的台益工厂",
  },
  hero: {
    eyebrow: "关于台益",
    title: "聚焦改性 POM 的工程塑料制造商",
    summary:
      "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌。自 2003 年起，我们在盐城开发和制造以改性 POM 为核心的工程塑料，并将材料测试、稳定生产与批次文件纳入同一制造体系。",
    materialsAction: "查看材料范围",
    manufacturingAction: "查看制造能力",
    location: "盐城",
  },
  identity: {
    eyebrow: "我们是谁",
    title: "从盐城制造走向国际市场",
    body: "公司从盐城起步，持续围绕注塑零部件所需的耐磨、低摩擦、增强与导电等性能开发改性材料。",
    bodySecondary: "配方开发、改性造粒、材料检测和批次文件由同一基地团队协同，让客户无需在多个外部环节之间反复沟通。",
  },
  focus: {
    eyebrow: "材料重点",
    title: "以改性 POM 为核心的材料体系",
    description: "改性 POM 是台益长期投入的核心材料，覆盖耐磨、低摩擦、增强与导电等功能方向。PA6、PA66 和 PPA 改性材料进一步补充耐热、刚性与韧性需求。",
    areas: [
      {
        index: "01",
        label: "核心材料",
        title: "改性 POM",
        description:
          "围绕耐磨、低摩擦、增强和导电等关键性能，开发面向精密注塑零部件的功能型改性 POM。",
      href: "/modified-pom-compounds",
      },
      {
        index: "02",
        label: "补充材料",
        title: "改性工程塑料",
        description:
          "PA6、PA66 与 PPA 改性材料拓展耐热、刚性与韧性组合，覆盖更广的工业部件需求。",
        href: "/products#product-families",
      },
    ],
  },
  manufacturing: {
    eyebrow: "制造依据",
    title: "把试制成果转化为稳定供货",
    description: "15 条双螺杆生产线、32 台检测设备和 25,000 平方米厂区构成盐城基地的制造基础。从试制批次到重复订单，生产、检测和批次文件在同一体系内推进，帮助客户更清楚地控制供货与质量要求。",
    action: "讨论生产与供货要求",
    facilityLabel: "盐城生产基地",
  },
  people: {
    eyebrow: "工程支持",
    title: "技术沟通直达实验室与生产",
    description: "项目需求不会停留在销售端。技术、实验室、生产和质量团队共同参与材料测试、生产安排和质量文件，让问题直接到达负责验证与制造的人。",
    roles: ["技术对接", "实验室测试", "生产协调", "质量文件"],
  },
  credentials: {
    eyebrow: "质量与合规",
    title: "让项目审核与供应商准入有据可查",
    description: "供应商准入需要的不只是产品数据。台益可按项目提供企业资质、管理体系证书和材料文件，为客户审核提供清晰、可追溯的依据。",
    documentsAria: "可提供的材料资料",
    systemsCategory: "管理体系",
    systemsTitle: "已认证的管理体系",
  },
  global: {
    eyebrow: "全球合作",
    title: "与全球客户开展材料合作",
    description: "台益已与中亚、欧洲、东亚和美洲多个市场的客户开展合作。盐城团队根据不同地区的项目要求衔接材料、文件与供货沟通。",
  },
  finalCta: {
    eyebrow: "联系台益",
    title: "谈谈您的零部件与材料要求",
    body: "把零部件应用、使用环境、目标性能、当前材料或文件要求告诉我们。台益会安排相应的技术、生产或质量团队直接跟进。",
    situations: [
      "材料与牌号咨询",
      "样品与技术文件",
      "生产与供货",
      "供应商准入",
    ],
    primaryAction: "讨论您的应用",
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
    alt: "位于中国江苏盐城的台益工厂外景",
    label: "工厂外景",
    placement: "hero",
  },
  {
    src: "/factory-warehouse.webp",
    alt: "台益生产与仓储区域",
    label: "改性生产车间",
    placement: "story",
  },
  {
    src: "/factory-extrusion.webp",
    alt: "台益双螺杆挤出生产线",
    label: "挤出生产线",
    placement: "gallery",
  },
  {
    src: "/factory-machine.webp",
    alt: "台益挤出机及生产设备",
    label: "生产设备",
    placement: "gallery",
  },
  {
    src: "/factory-laboratory-testing-documentary-v4.webp",
    alt: "台益材料检测实验室及评估设备",
    label: "材料检测实验室",
    placement: "testing",
  },
];
