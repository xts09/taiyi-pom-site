import type { ComponentSolutionDetail } from "@/data/componentSolutionDetails";
import type { ComponentSolution } from "@/data/componentSolutions";

export const chineseComponentIndexMessages = {
  metadata: {
    title: "POM 改性材料零部件方案 | Taiyi Polymer",
    description:
      "比较齿轮、轴套、输送链部件、阀芯、纺织导向件及 IC 周转托盘的材料选型指南。",
    imageAlt: "雨刮电机齿轮总成 CAD 可视化图",
  },
  hero: {
    eyebrow: "零部件方案",
    title: "从注塑零部件开始",
    description:
      "按零部件功能、使用条件、失效模式、注塑限制与验证要求，比较六条零部件评估路径。",
    directoryAction: "浏览零部件系列",
    applicationsAction: "浏览应用行业",
  },
  directory: {
    eyebrow: "零部件目录",
    title: "选择最接近您零部件的系列",
    description:
      "比较典型零部件与工程重点，再打开最接近您项目的零部件系列。",
    typicalPartsLabel: "典型零部件",
    selectionFocusLabel: "选型重点",
    openAction: "打开零部件指南",
    openAria: "打开{title}材料指南",
  },
  detailUi: {
    breadcrumbs: {
      applications: "应用领域",
      components: "零部件方案",
    },
    primaryAction: "讨论您的应用",
    familyAction: "查看相关 POM 系列",
    problemEyebrow: "先从问题开始",
    observedProblemLabel: "观察到的问题",
    checkFirstLabel: "优先检查",
    materialResponseLabel: "材料应对方向",
    materialsEyebrow: "候选材料",
    materialsTitle: "比较材料应对方向，而不只是树脂名称",
    cautionLabel: "项目注意事项",
    pomBoundaryLabel: "POM 可能不适用的情况",
    materialGuideAction: "打开材料选型指南",
    inquiryEyebrow: "最少项目信息",
    inquiryTitle: "先提供已知信息，并标注尚未确认的内容",
    inquiryDescription:
      "图纸加上现有使用条件即可开始。请将未知项标记为尚未确认，并在首次反馈后补充。",
    processEyebrow: "联系之后",
    processTitle: "明确首次反馈应形成什么结果",
    expectedOutputLabel: "预期输出",
    gradeDataAction: "查找牌号数据与 TDS",
    technicalEyebrow: "技术深度",
    technicalTitle: "项目需要时再展开详细内容",
    technicalDescription:
      "可按需展开使用判据、模具要求、注塑件测试及完整项目清单。",
    relatedEyebrow: "相关指南",
    relatedTitle: "打开下一项技术参考",
    finalAction: "讨论您的应用",
    contactSource: "零部件方案",
  },
} as const;

export const chineseComponentSolutions = [
  {
    slug: "precision-plastic-gears",
    title: "精密塑料齿轮",
    category: "运动与动力传动",
    summary:
      "面向注塑齿轮的零部件评估路径，综合考虑磨损、噪声、尺寸控制和生产一致性。",
    typicalParts: ["传动齿轮", "蜗轮", "减速齿轮", "复印机齿轮"],
    reviewAreas: ["载荷与转速", "磨损与摩擦", "噪声目标", "齿形精度"],
    relatedApplications: [
      { label: "运动部件", href: "/applications/motion-components" },
      {
        label: "洗衣机部件",
        href: "/applications/washing-machine-components",
      },
    ],
  },
  {
    slug: "bushings-and-sleeves",
    title: "衬套与轴套",
    category: "滑动与轴承部件",
    summary:
      "面向注塑轴承件与导向件的评估框架，重点关注配合稳定性、滑动表现及可行的加工窗口。",
    typicalParts: ["衬套", "轴套", "导向环", "滑块"],
    reviewAreas: ["轴承载荷", "滑动速度", "对偶面", "间隙与配合"],
    relatedApplications: [
      { label: "运动部件", href: "/applications/motion-components" },
      { label: "汽车", href: "/applications/automotive" },
    ],
  },
  {
    slug: "conveyor-chain-components",
    title: "输送链部件",
    category: "输送与自动化系统",
    summary:
      "面向链板、滚轮、支架及相关注塑件的零部件系列，适用于重复运动或静电控制环境。",
    typicalParts: ["链板", "滚轮", "链节", "输送支架"],
    reviewAreas: ["重复载荷", "磨损路径", "表面电阻目标", "清洁环境"],
    relatedApplications: [
      {
        label: "输送与自动化",
        href: "/applications/conveyor-automation",
      },
      { label: "电子电气", href: "/applications/electronics" },
    ],
  },
  {
    slug: "valve-spools-and-cartridges",
    title: "阀芯与阀筒",
    category: "水路控制部件",
    summary:
      "面向阀门内部件的结构化评估起点，综合考虑密封几何、运动、介质接触和注塑尺寸稳定性。",
    typicalParts: ["阀芯", "阀筒", "阀门内部件", "导向轮"],
    reviewAreas: ["流体接触", "密封界面", "运动循环", "尺寸稳定性"],
    relatedApplications: [
      { label: "水路控制", href: "/applications/water-control" },
      {
        label: "洗衣机部件",
        href: "/applications/washing-machine-components",
      },
    ],
  },
  {
    slug: "textile-guide-components",
    title: "纺织导向部件",
    category: "纺织机械",
    summary:
      "面向纱线接触件与导向件的评估路径，重点关注表面状态、摩擦表现、磨损和零部件一致性。",
    typicalParts: ["纱线导向件", "导向轮", "综框提升件", "锭子支撑件"],
    reviewAreas: ["纱线接触", "表面质量", "摩擦表现", "磨损寿命"],
    relatedApplications: [
      { label: "纺织机械", href: "/applications/textile-machinery" },
      { label: "运动部件", href: "/applications/motion-components" },
    ],
  },
  {
    slug: "ic-handling-trays",
    title: "IC 周转托盘",
    category: "导电与静电控制部件",
    summary:
      "面向注塑周转托盘的专项路径，需同时定义电阻目标、尺寸要求、洁净度与加工条件。",
    typicalParts: ["IC 周转托盘", "抗静电托盘", "导电载具", "精密槽位"],
    reviewAreas: ["电阻范围", "测试方法", "平面度目标", "搬运环境"],
    relatedApplications: [
      { label: "电子电气", href: "/applications/electronics" },
      {
        label: "输送与自动化",
        href: "/applications/conveyor-automation",
      },
    ],
  },
] as const satisfies readonly ComponentSolution[];

export const chinesePrecisionPlasticGearsDetail = {
  slug: "precision-plastic-gears",
  seo: {
    title: "精密塑料齿轮 | POM 材料选型指南",
    description:
      "比较 POM 改性材料精密塑料齿轮的载荷、转速、齿形、磨损、公差、注塑及验证要求。",
    image: "/applications/parts/motion-components-detail-cad-hero.webp",
    imageAlt: "精密注塑齿轮传动系统 CAD 可视化图",
  },
  hero: {
    eyebrow: "齿轮材料方案",
    title: "精密塑料齿轮",
    summary:
      "比较适用于磨损、噪声、断齿或尺寸波动问题的 POM 改性材料。扭矩、齿形、转速、配对材料、润滑和精度目标共同决定候选范围。",
    scope:
      "适用于直齿轮、斜齿轮、小齿轮、行星齿轮、内齿轮、复合齿轮、蜗轮及扇形齿轮。",
    image: "/applications/parts/motion-components-detail-cad-hero.webp",
    imageAlt: "装配传动系统内精密注塑齿轮的 CAD 可视化图",
    reviewInputs: [
      { label: "载荷", value: "扭矩与齿形" },
      { label: "运动", value: "转速与工作循环" },
      { label: "接触", value: "配对件与润滑" },
      { label: "精度", value: "齿隙与跳动" },
      { label: "环境", value: "温度、湿度与介质" },
      { label: "目标", value: "寿命、磨损与噪声" },
    ],
  },
  copy: {
    reviewInputsLabel: "齿轮材料比较所需输入",
    problemTitle: "先从齿轮问题开始",
    problemSummary:
      "同一现象可能来自材料、几何、模具、装配或使用条件。比较材料之前，应先从实际观察到的问题出发。",
    materialSummary:
      "应结合主导失效模式、齿形、载荷、转速、配对件、润滑和精度目标比较以下方向。",
    processSummary:
      "首次反馈应缩小材料候选范围，并明确注塑齿轮及总成测试。生产批准仍取决于完整传动系统。",
  },
  decisionRows: [
    {
      symptom: "磨损或碎屑",
      review:
        "检查实际扭矩与转速、齿面温度、接触印迹、对中、对偶面质量及润滑。",
      direction:
        "只有在接触表现仍是限制因素时，才筛选耐磨或低摩擦 POM。",
    },
    {
      symptom: "噪声、发热、粘滑或卡滞",
      review:
        "检查齿隙、跳动、中心距、轴与壳体对中、冷热尺寸及工作循环。",
      direction:
        "先区分几何、装配波动和热间隙与材料表现，再考虑摩擦改性配方。",
    },
    {
      symptom: "齿根开裂或断齿",
      review:
        "检查裂纹起点、峰值与堵转载荷、冲击历史、齿根几何、浇口与熔接线位置及注塑缺陷。",
      direction:
        "确认疲劳、刚性和过载是主导限制后，再比较平衡型或增强型 POM。",
    },
    {
      symptom: "孔、轮毂或尺寸波动",
      review:
        "检查过盈量、轮毂—轮辐—齿圈平衡、冷却、保压、浇口、工艺历史及分模穴测量。",
      direction:
        "先修正模具或工艺波动；增强材料还可能增加各向异性收缩和翘曲风险。",
    },
  ],
  materialDirections: [
    {
      title: "平衡型 / 未填充 POM",
      summary:
        "适用于刚性、疲劳能力、尺寸控制、成型性和滑动表现都需要兼顾的平衡型 POM 方向。",
      caution:
        "仍需在实际扭矩、转速、温度、润滑条件和目标寿命下验证。",
    },
    {
      title: "耐磨或低摩擦 POM",
      summary:
        "当干摩擦、齿面磨损、粘滑、摩擦发热或噪声已确认是限制机制时适用。",
      caution:
        "通用摩擦测试不能预测齿轮箱寿命；应使用实际配对齿轮和润滑剂筛选。",
    },
    {
      title: "增强型 POM",
      summary:
        "当齿部或轮毂挠曲、蠕变或结构刚性比表面磨损更受限制时可考虑。",
      caution:
        "纤维取向可能改变收缩、翘曲、齿面表现和对偶件磨损。",
    },
  ],
  materialNote:
    "高温、高湿、化学介质或明确的电气要求，可能使项目超出 POM 的实际适用窗口。此时应比较其他聚合物系列，而不是强行将 POM 用于该应用。",
  inquiryGroups: [
    {
      title: "载荷",
      items: ["连续、峰值、启动和堵转扭矩", "齿轮类型、模数或节距、齿数和齿宽"],
    },
    {
      title: "运动",
      items: ["输入与输出转速", "工作循环、换向频率、目标寿命和噪声目标"],
    },
    {
      title: "对偶件与润滑",
      items: ["配对齿轮材料与表面状态", "干摩擦、润滑脂、润滑油及已知润滑剂规格"],
    },
    {
      title: "精度",
      items: ["图纸、齿隙、跳动及齿形公差", "轴、轴承、孔及中心距要求"],
    },
    {
      title: "环境",
      items: ["工作与储存温度范围", "湿度、水、油、润滑脂、清洁剂或化学品"],
    },
    {
      title: "目标与当前状态",
      items: ["当前材料、失效现象及验收目标", "模具阶段、预计用量及所需资料"],
    },
  ],
  processSteps: [
    {
      title: "梳理需求",
      body:
        "识别可能的主导失效模式，分离系统与模具影响，并标记仍需确认的输入。",
    },
    {
      title: "比较候选材料",
      body:
        "围绕主导失效模式，比较相关 POM 方向及可核实的牌号数据或 TDS。",
    },
    {
      title: "定义验证步骤",
      body:
        "明确候选材料获准用于生产前所需的注塑件与总成检查。",
    },
  ],
  processOutcome:
    "形成材料候选清单、可用牌号数据或资料路径，以及建议的注塑齿轮评估计划。",
  technicalDetails: [
    {
      value: "material-review",
      title: "材料选型判据",
      summary: "定义可信齿轮材料比较的六类使用条件",
      groups: [
        {
          title: "载荷与疲劳",
          items: [
            "结合齿根几何，综合审核连续、峰值、启动、堵转、换向及冲击载荷。",
            "采用接近量产的几何、工作循环、温度和预期寿命进行验证。",
          ],
        },
        {
          title: "转速与摩擦发热",
          items: [
            "审核转速、连续或间歇工作、封闭空间、冷却和齿面温度。",
            "在代表性运行测试中跟踪齿面磨损与温度。",
          ],
        },
        {
          title: "接触系统",
          items: [
            "审核配对材料、硬度与表面质量、接触印迹、间隙及润滑。",
            "比较磨损表现时使用量产对偶件与润滑剂。",
          ],
        },
        {
          title: "精度、环境与寿命",
          items: [
            "综合审核齿隙、跳动、齿形精度、温度、湿度、流体、使用寿命和噪声。",
            "在调湿后的完整总成中确认表现，而不是只测试单个松散齿轮。",
          ],
        },
      ],
    },
    {
      value: "tooling-molding",
      title: "模具与注塑",
      summary: "可能主导注塑齿轮精度的几何与工艺检查",
      groups: [
        {
          title: "注塑结构",
          items: [
            "平衡轮毂、轮辐、加强筋、齿圈和齿部截面，减少冷却与收缩不均。",
            "结合齿轮几何审核孔、轴、过盈配合、花键、滚花及嵌件应力。",
          ],
        },
        {
          title: "流动与尺寸",
          items: [
            "模具冻结之前审核浇口与熔接线位置。",
            "根据所选材料和试模件测量结果确定收缩补偿、保压、冷却及检验时间。",
            "对于增强材料，评估纤维取向和不同模穴的尺寸波动。",
          ],
        },
      ],
    },
    {
      value: "validation",
      title: "注塑齿轮验证",
      summary: "完成数据表初筛后所需的零部件与总成检查",
      groups: [
        {
          title: "注塑件检查",
          items: [
            "在约定调湿时间后测量齿形、节距、跳动、孔位、齿隙及模穴间差异。",
            "检查工作齿面、齿根、浇口、熔接线区域、飞边、错位及顶出损伤。",
          ],
        },
        {
          title: "总成检查",
          items: [
            "使用实际配对齿轮，在代表性扭矩、转速、温度、润滑和工作循环下运行。",
            "在要求周期内跟踪磨损、温度、噪声、齿隙变化、对偶件状态和失效位置。",
          ],
        },
      ],
    },
    {
      value: "project-checklist",
      title: "完整项目清单",
      summary: "用于材料比较与零部件验证的完整项目输入",
      groups: [
        {
          title: "零部件与机构",
          items: [
            "2D 图纸，以及可提供时的 3D 模型",
            "齿轮类型、齿形、主动或从动位置，以及轴、轴承和壳体环境",
            "当前材料、已知牌号、模具阶段、模穴数和产量",
          ],
        },
        {
          title: "使用与验收条件",
          items: [
            "扭矩、转速、工作循环、对偶件、润滑、温度、湿度及化学介质接触",
            "齿隙、跳动、尺寸公差、使用寿命、噪声及当前失效现象",
            "所需 TDS、SDS、COA、REACH、RoHS 或其他牌号级资料路径",
          ],
        },
      ],
    },
  ],
  related: [
    {
      label: "POM 齿轮材料选型",
      description: "定义齿轮工况、比较 POM 方向并建立代表性验证计划。",
      href: "/resources/pom-gear-material-selection",
    },
    {
      label: "加工指南",
      description: "审核 POM 试模、收缩、翘曲、尺寸漂移及问题排查输入。",
      href: "/resources/processing-guide",
    },
    {
      label: "POM 替代牌号验证",
      description: "比较资料、注塑表现、尺寸、功能及量产放行证据。",
      href: "/resources/alternative-pom-grade-validation",
    },
  ],
  finalCta: {
    eyebrow: "项目信息",
    title: "申请样品前先建立齿轮候选清单",
    body:
      "请提供齿轮图纸，以及现有载荷、转速、配对件、润滑、精度、环境、目标寿命和失效信息。Taiyi Polymer 可比较相关 PLATFORM POM 方向，确认可用牌号数据或资料路径，并提出注塑齿轮评估计划。",
  },
} as const satisfies ComponentSolutionDetail;
