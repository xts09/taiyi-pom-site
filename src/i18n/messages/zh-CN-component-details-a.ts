import type { ComponentSolutionDetail } from "@/data/componentSolutionDetails";

export const chineseBushingsAndSleevesDetail = {
  slug: "bushings-and-sleeves",
  seo: {
    title: "塑料衬套与轴套 | POM 材料选型",
    description:
      "比较 POM 改性材料塑料衬套与轴承轴套的载荷、速度、轴、间隙、磨损、注塑及验证要求。",
    image: "/applications/parts/industrial-linear-guide-cad.webp",
    imageAlt: "由轴支撑的滑动导向总成 CAD 可视化图",
  },
  hero: {
    eyebrow: "滑动部件方案",
    title: "衬套与轴套",
    summary:
      "比较适用于磨损、卡滞、间隙漂移或壳体保持问题的注塑衬套 POM 改性材料。应将聚合物、轴、壳体、配合、运动、润滑剂和环境视为一个完整滑动系统。",
    scope: "适用于圆柱、法兰、枢轴、连杆、导向及执行器轴承轴套。",
    image: "/applications/parts/industrial-linear-guide-cad.webp",
    imageAlt: "线性导向总成中聚合物衬套支撑轴的 CAD 可视化图",
    mobileImagePosition: "90% center",
    reviewInputs: [
      { label: "载荷", value: "压力与轴承长度" },
      { label: "运动", value: "速度、行程与工作循环" },
      { label: "轴", value: "材料、表面质量与硬度" },
      { label: "配合", value: "壳体与装配后间隙" },
      { label: "环境", value: "温度、碎屑与润滑剂" },
      { label: "目标", value: "寿命、磨损与驱动扭矩" },
    ],
  },
  copy: {
    reviewInputsLabel: "衬套材料比较所需输入",
    problemTitle: "先从滑动系统的问题开始。",
    problemSummary:
      "磨损、噪声、卡滞或间隙变化可能来自材料、轴、配合、对中、污染或工作循环。更换材料前，应先诊断完整接触界面。",
    materialSummary:
      "应结合装配配合、轴状态、载荷、速度、润滑、环境和目标寿命比较以下方向。",
    processSummary:
      "首次反馈应缩小材料候选范围，并明确装配后孔径、摩擦、磨损和耐久测试。生产批准仍取决于完整滑动总成。",
  },
  decisionRows: [
    {
      symptom: "内孔快速磨损或间隙增大",
      review:
        "检查轴承压力、速度、轴表面质量、对中、温度、污染、润滑及实际磨损形态。",
      direction:
        "只有在轴与衬套界面仍是限制因素时，才筛选耐磨或低摩擦 POM。",
    },
    {
      symptom: "装配后尖叫、卡滞或发热",
      review:
        "测量装配后孔径、壳体过盈、轴对中、启动扭矩、工作温度及实际运行间隙。",
      direction:
        "先区分配合、变形和热间隙与材料表现，再考虑摩擦改性配方。",
    },
    {
      symptom: "单侧磨损、划伤或碎屑",
      review:
        "检查接触印迹、内孔锥度、轴直线度与损伤、壳体变形、密封及颗粒来源。",
      direction:
        "控制边缘载荷、粗糙对偶面和磨粒污染后，再比较摩擦学改性材料。",
    },
    {
      symptom: "转动、窜动或安装开裂",
      review:
        "审核壳体公差、过盈量、导入几何、压入力、保持结构、壁厚平衡及使用温度。",
      direction:
        "只有在装配应变和保持结构均合理时，才比较平衡型或增强型 POM。",
    },
  ],
  materialDirections: [
    {
      title: "平衡型 / 未填充 POM",
      summary:
        "适用于需要尺寸稳定、成型性、适当刚韧平衡和稳定滑动表现的精密注塑轴套，可作为基准 POM 方向。",
      caution:
        "仍需将量产轴、装配间隙、载荷、速度、温度、润滑剂和目标寿命一起验证。",
    },
    {
      title: "耐磨或低摩擦 POM",
      summary:
        "当实测磨损、启动摩擦、粘滑、噪声或界面温度限制了其他方面合理的衬套系统时可考虑。",
      caution:
        "较低的公开摩擦系数不等于较低磨损。应在实际运动与污染条件下同时检查衬套和轴。",
    },
    {
      title: "增强型 POM",
      summary:
        "当刚性、蠕变、壳体支撑或载荷引起的变形比降低摩擦学复杂性更重要时可考虑。",
      caution:
        "纤维取向可能改变内孔几何、翘曲、收缩和对偶件磨损，尤其需要关注小型精密轴套。",
    },
  ],
  materialNote:
    "如果持续温度、严重磨粒污染、接触压力或对偶面要求超出经验证的 POM 窗口，应比较项目专用 PA、PPA、金属背衬或专用轴承结构，而不是强行采用 POM 方案。",
  inquiryGroups: [
    {
      title: "零部件几何",
      items: ["图纸、衬套类型、壁厚与法兰几何", "内孔、外径、轴承长度和关键公差"],
    },
    {
      title: "轴与对偶面",
      items: [
        "轴或销的材料、硬度、涂层和表面质量",
        "轴径、公差、腐蚀、划伤或已知磨损",
      ],
    },
    {
      title: "载荷与运动",
      items: [
        "径向或侧向载荷及载荷方向",
        "旋转、摆动或直线运动，以及速度、行程和工作循环",
      ],
    },
    {
      title: "壳体与配合",
      items: [
        "壳体材料、孔径、公差及安装方式",
        "所需装配后间隙及保持方式",
      ],
    },
    {
      title: "环境",
      items: [
        "工作温度，以及干摩擦、初始涂脂或持续润滑条件",
        "粉尘、纺织纤维、水、油、清洁剂或化学品接触",
      ],
    },
    {
      title: "目标与状态",
      items: [
        "当前材料、模具阶段、用量和失效现象",
        "目标寿命、允许磨损、驱动扭矩、噪声和所需资料",
      ],
    },
  ],
  processSteps: [
    {
      title: "定义装配后的接触界面",
      body:
        "分别梳理载荷、运动、轴、壳体配合、环境和验收目标，并标记仍需确认的输入。",
    },
    {
      title: "比较候选材料",
      body:
        "围绕主导失效模式，比较相关 POM 方向和可核实的牌号数据。",
    },
    {
      title: "规划零部件验证",
      body:
        "生产批准前，定义装配后孔径、摩擦、磨损、温度、轴状态、保持及耐久检查。",
    },
  ],
  processOutcome:
    "形成材料候选清单、可用牌号数据或资料路径，以及建议的装配后衬套评估计划。",
  technicalDetails: [
    {
      value: "sliding-system",
      title: "滑动系统判据",
      summary: "定义可信衬套比较的使用变量。",
      groups: [
        {
          title: "载荷、速度与运动",
          items: [
            "结合滑动速度与散热，综合审核载荷、轴径和有效轴承长度形成的压力。",
            "再现旋转、摆动或直线运动，包括换向、停留、启动及间歇工作。",
          ],
        },
        {
          title: "轴与环境",
          items: [
            "比较磨损表现时，使用量产对偶面、表面质量、润滑剂及代表性污染。",
            "审核温度、流体接触、碎屑、对中，以及衬套与轴两侧的磨损状态。",
          ],
        },
      ],
    },
    {
      value: "fit-tooling",
      title: "配合、模具与注塑",
      summary: "决定功能性装配后孔径的几何与工艺控制。",
      groups: [
        {
          title: "装配后尺寸",
          items: [
            "将轴、壳体孔、过盈量和所需运行间隙定义为一个公差系统。",
            "在安装前、压装后及相关调湿后测量孔径、圆度和同心度。",
          ],
        },
        {
          title: "注塑几何",
          items: [
            "平衡壁厚与法兰截面，保护型芯，并审核精密内孔周围的浇口位置。",
            "使用所选量产材料控制保压、冷却、收缩补偿及模穴间差异。",
          ],
        },
      ],
    },
    {
      value: "bushing-validation",
      title: "注塑衬套验证",
      summary: "把材料初筛连接到接近量产总成的检查。",
      groups: [
        {
          title: "零部件与总成检查",
          items: [
            "检查关键尺寸、表面状态、压入力、装配后内径、保持效果和接触印迹。",
            "使用实际轴与壳体，在代表性载荷、速度、运动、温度、润滑和污染条件下运行。",
          ],
        },
        {
          title: "耐久证据",
          items: [
            "在要求周期内跟踪间隙、摩擦或驱动扭矩、温度、磨损、噪声、窜动和尺寸变化。",
            "同时检查聚合物和对偶面，不能以损伤轴为代价接受更低的衬套磨损。",
          ],
        },
      ],
    },
    {
      value: "bushing-checklist",
      title: "完整项目清单",
      summary: "用于材料比较与衬套验证的完整项目输入。",
      groups: [
        {
          title: "零部件与界面",
          items: [
            "2D 图纸，以及可提供时的 3D 模型、衬套类型、壳体、安装方式、轴规格和当前材料",
            "关键自由状态与装配后尺寸、公差、间隙、保持结构、模具阶段和模穴数",
          ],
        },
        {
          title: "使用与验收条件",
          items: [
            "载荷、运动、速度、工作循环、润滑剂、温度、碎屑、水分、流体和清洁介质接触",
            "目标寿命、允许磨损、扭矩、噪声、轴状态、当前失效现象和所需资料路径",
          ],
        },
      ],
    },
  ],
  related: [
    {
      label: "耐磨与低摩擦 POM",
      description: "了解摩擦学改性何时有用，以及实际对偶件测试必须包含什么。",
      href: "/resources/wear-resistant-low-friction-pom-selection-guide",
    },
    {
      label: "材料选型指南",
      description: "将使用条件与失效模式转化为有依据的材料候选清单。",
      href: "/resources/material-selection-guide",
    },
    {
      label: "加工指南",
      description: "审核收缩、内孔几何、翘曲、尺寸漂移及试模输入。",
      href: "/resources/processing-guide",
    },
  ],
  finalCta: {
    eyebrow: "项目信息",
    title: "评估完整滑动界面。",
    body:
      "请提供衬套图纸，以及现有轴、载荷、运动、壳体配合、间隙、润滑、环境、目标寿命和失效信息。Taiyi Polymer 可比较相关 PLATFORM POM 方向，确认可用牌号数据或资料路径，并提出装配后衬套评估计划。",
  },
} as const satisfies ComponentSolutionDetail;
