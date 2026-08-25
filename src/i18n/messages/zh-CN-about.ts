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
    title: "改性工程塑料制造商",
    summary:
      "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌。依托盐城制造基地，我们生产以改性 POM 为核心的改性工程塑料，并提供材料测试与批次文件支持。",
    materialsAction: "查看材料范围",
    manufacturingAction: "查看制造能力",
    location: "盐城",
  },
  identity: {
    eyebrow: "制造基础",
    title: "自 2003 年扎根盐城制造",
    body: "配方开发、改性造粒、材料检测和批次文件由同一基地团队协同完成。",
  },
  focus: {
    eyebrow: "材料重点",
    title: "以改性 POM 为核心的材料体系",
    areas: [
      {
        index: "01",
        label: "核心材料",
        title: "改性 POM",
        description:
          "提供面向注塑零部件的耐磨、低摩擦、增强、导电等功能型改性 POM。",
      href: "/modified-pom-compounds",
      },
      {
        index: "02",
        label: "补充材料",
        title: "改性工程塑料",
        description:
          "补充提供 PA6、PA66 与 PPA 改性材料，覆盖不同的耐热、刚性与韧性需求。",
        href: "/products#product-families",
      },
    ],
  },
  manufacturing: {
    eyebrow: "制造依据",
    title: "支撑试制与重复供货的制造体系",
    description: "盐城基地承担改性造粒、试制安排与重复生产。",
    action: "讨论生产与供货要求",
    facilityLabel: "盐城生产基地",
  },
  people: {
    eyebrow: "工程支持",
    title: "技术沟通直达实验室与生产",
    description: "项目需求由技术、实验室、生产和质量团队共同响应。",
    roles: ["技术对接", "实验室测试", "生产协调", "质量文件"],
  },
  credentials: {
    eyebrow: "质量与合规",
    title: "项目审核所需的资质与文件",
    description: "企业资质、管理体系证书和材料文件可按项目要求提供。",
    documentsAria: "可提供的材料资料",
    systemsCategory: "管理体系",
    systemsTitle: "已认证的管理体系",
  },
  global: {
    eyebrow: "全球合作",
    title: "与全球客户开展材料合作",
    description: "现有合作覆盖中亚、欧洲、东亚和美洲多个市场。",
  },
  finalCta: {
    eyebrow: "联系台益",
    title: "谈谈您的零部件与材料要求",
    body: "请提供应用、工况、目标性能或所需文件，我们会安排相应团队跟进。",
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
  { label: "制造业务始于", value: "2003", note: "盐城工程塑料制造" },
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
