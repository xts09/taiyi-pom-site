import type { LocalizedApplicationDetailSliceBMessages } from "@/i18n/applicationTypes";
import applicationIndexMessages from "./zh-CN-applications.ts";

const commonDirectionUses = {
  base: "用于通用注塑件的基础 POM 性能与加工审核。",
  wear: "用于重复运动工况下的耐磨审核。",
  lowFriction: "用于滑动或配合表面的低摩擦审核。",
  highImpact: "用于存在冲击或较低温使用条件的韧性审核。",
  glassFiber: "当项目需要增强时，用于审核更高刚性与尺寸稳定性。",
  uv: "用于需要耐紫外线性能的户外暴露工况审核。",
} as const;

const messages = {
  "water-control": {
    title: applicationIndexMessages.cards["water-control"].title,
    description: applicationIndexMessages.cards["water-control"].description,
    heroImageAlt: applicationIndexMessages.cards["water-control"].imageAlt,
    materialDirections: [
      {
        label: "低摩擦 POM",
        keyUse: commonDirectionUses.lowFriction,
        shortLabel: "低摩擦 POM",
      },
      {
        label: "耐磨 POM",
        keyUse: commonDirectionUses.wear,
        shortLabel: "耐磨 POM",
      },
      {
        label: "玻璃纤维增强 POM — 用于需要更高刚性的场景",
        keyUse: commonDirectionUses.glassFiber,
        shortLabel: "玻璃纤维增强 POM",
      },
    ],
    images: [
      {
        alt: "注塑聚合物阀芯与阀筒总成的 CAD 示意图",
        label: "阀芯与阀筒",
        description: "面向重复阀门运动的尺寸、摩擦及密封邻近区域审核。",
      },
      {
        alt: "水路控制阀体内部注塑聚合物功能部件的 CAD 示意图",
        label: "阀体总成",
        description: "面向注塑阀门机构的强度、配合与介质耐受性审核。",
      },
      {
        alt: "注塑聚合物离心泵叶轮的 CAD 示意图",
        label: "泵叶轮",
        description: "面向旋转泵部件的刚性、平衡与尺寸审核。",
      },
      {
        alt: "恒温控制阀内部注塑聚合物部件的 CAD 示意图",
        label: "恒温控制阀",
        description: "审核温度控制机构的装配稳定性与重复运动。",
      },
    ],
    parts: [
      {
        label: "阀芯总成",
        description: "审核滑动间隙、尺寸稳定性与阀门重复运动。",
        imageAlt: "阀体与阀芯总成部件",
      },
      {
        label: "阀筒",
        description: "筛查装配配合、内部运动与邻近密封面的结构。",
        imageAlt: "卫浴阀筒部件",
      },
      {
        label: "阀门内部部件",
        description: "审核注塑精度、配合状态与内部重复运动。",
        imageAlt: "多种注塑阀门内部部件",
      },
      {
        label: "阀门功能部件",
        description: "审核结构配合、滑动结构及其与项目介质的相容性。",
        imageAlt: "阀杆与注塑阀门部件",
      },
      {
        label: "恒温阀体",
        description: "评估执行稳定性、装配公差与温度循环条件。",
        imageAlt: "恒温阀体总成",
      },
      {
        label: "导向轮",
        description: "筛查滚动接触、尺寸一致性与低摩擦运动。",
        imageAlt: "注塑水路控制导向轮",
      },
      {
        label: "阀门壳体部件",
        description: "审核刚性、收缩控制与壳体装配配合稳定性。",
        imageAlt: "水路控制阀门壳体与阀筒部件",
      },
      {
        label: "泵叶轮",
        description: "审核重复旋转过程中的平衡、刚性与尺寸控制。",
        imageAlt: "注塑 POM 离心泵叶轮",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "阀体与阀芯总成",
          "阀筒、执行器套筒与卫浴机构",
          "泵叶轮与旋转水路控制部件",
          "恒温阀体与控制机构",
        ],
      },
      {
        title: "性能需求",
        items: [
          "较高强度与较低收缩",
          "耐磨性能与噪声控制",
          "阀门装配所需的尺寸稳定性",
          "重复水路控制机构中的运动稳定性",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "更安静的运动可评估低摩擦 POM",
          "阀门与导向轮接触可评估耐磨 POM",
          "需要刚性时评估玻璃纤维增强 POM",
          "依据收缩、强度与加工需求筛选牌号",
        ],
      },
    ],
  },
  "washing-machine-components": {
    title: applicationIndexMessages.cards["washing-machine-components"].title,
    description:
      applicationIndexMessages.cards["washing-machine-components"].description,
    heroImageAlt:
      applicationIndexMessages.cards["washing-machine-components"].imageAlt,
    materialDirections: [
      {
        label: "基础 POM 树脂",
        keyUse: commonDirectionUses.base,
        shortLabel: "基础 POM 树脂",
      },
      {
        label: "耐磨 POM",
        keyUse: commonDirectionUses.wear,
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM",
        keyUse: commonDirectionUses.lowFriction,
        shortLabel: "低摩擦 POM",
      },
      {
        label: "玻璃纤维增强 POM — 用于需要刚性与尺寸保持的场景",
        keyUse: commonDirectionUses.glassFiber,
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "依据洗涤循环条件定制配方",
        keyUse: "结合洗涤剂接触、运动、载荷与零部件条件进行项目专属配方审核。",
        shortLabel: "洗涤工况定制配方",
      },
    ],
    images: [
      {
        alt: "用于洗衣机滚筒传动的注塑聚合物齿轮与保持件",
        label: "滚筒传动齿轮",
        description: "审核重复洗涤循环中的齿面磨损、扭矩传递与滚筒旋转可靠性。",
      },
      {
        alt: "注塑聚合物滚筒轴承保持件与轴套总成",
        label: "滚筒轴承保持件",
        description: "审核振动条件下的低摩擦支撑、磨损控制与轴承结构稳定性。",
      },
      {
        alt: "用于洗衣机的注塑聚合物排水泵叶轮",
        label: "排水泵叶轮",
        description: "审核含洗涤剂水流中的旋转平衡、刚性与尺寸稳定性。",
      },
      {
        alt: "用于洗衣机悬挂机构的注塑聚合物导向与耐磨部件",
        label: "悬挂导向件",
        description: "审核重复振动循环中的受控滑动、导向稳定性与配合。",
      },
    ],
    parts: [
      {
        label: "滚筒传动齿轮",
        description: "审核滚筒重复旋转所需的扭矩传递、齿面磨损与尺寸一致性。",
        imageAlt: "注塑洗衣机滚筒传动齿轮与保持件",
      },
      {
        label: "导水管",
        description: "审核接口对位、密封座结构、排水间隙与重复装配配合。",
        imageAlt: "带四耳安装法兰的白色注塑洗衣机导水管",
      },
      {
        label: "传动轮",
        description:
          "审核滚筒传动中的轮毂同心度、轴啮合、径向刚性与重复扭矩传递。",
        imageAlt: "带径向加强筋、花键轮毂与传动轴的注塑洗衣机传动轮",
      },
      {
        label: "减速齿轮总成",
        description:
          "审核滚筒传动中的齿轮级对位、轮毂同心度、轴啮合与稳定减速。",
        imageAlt: "带双轮级与花键轴的注塑洗衣机减速齿轮总成",
      },
      {
        label: "排水泵壳体",
        description:
          "审核进出口配合、密封座结构、泵腔刚性与排水路径装配稳定性。",
        imageAlt: "带凸起进水颈与下部出水腔的注塑洗衣机排水泵壳体",
      },
      {
        label: "进水阀连接管",
        description:
          "审核进水阀处的倒刺接头保持力、接口对位、弯曲间隙与水路密封稳定性。",
        imageAlt: "带弯曲管体、密封法兰与倒刺软管端的注塑洗衣机进水阀连接管",
      },
      {
        label: "排水控制阀",
        description:
          "审核排水路径中的阀座配合、执行器行程、接口对位与重复启闭。",
        imageAlt: "带圆形阀体、出水口与执行器连杆的注塑洗衣机排水控制阀",
      },
      {
        label: "排水阀总成",
        description:
          "审核洗衣机排水路径中的密封啮合、螺纹配合、执行器行程与重复关闭。",
        imageAlt: "带螺纹盖、密封阀体与执行连杆的注塑洗衣机排水阀总成",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "滚筒传动齿轮、联轴器嵌件与轴承保持件",
          "脱水桶轴套、止推垫圈与旋转支撑件",
          "排水泵叶轮与水路部件",
          "排水阀、泵壳与导水部件",
        ],
      },
      {
        title: "性能需求",
        items: [
          "重复旋转与振动条件下的尺寸一致性",
          "运动界面的低摩擦与可控磨损",
          "装配配合所需的刚性与低翘曲",
          "针对洗涤剂水接触和洗涤循环温度进行适用性筛查",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "功能性家电部件可从基础与改性 POM 开始筛查",
          "运动界面可评估耐磨与低摩擦方向",
          "当刚性或更低收缩优先时评估增强 POM",
          "依据洗涤循环条件审核定制配方",
        ],
      },
    ],
  },
  "outdoor-equipment": {
    title: applicationIndexMessages.cards["outdoor-equipment"].title,
    description:
      applicationIndexMessages.cards["outdoor-equipment"].description,
    heroImageAlt: applicationIndexMessages.cards["outdoor-equipment"].imageAlt,
    materialDirections: [
      {
        label: "高抗冲 POM",
        keyUse: commonDirectionUses.highImpact,
        shortLabel: "高抗冲 POM",
      },
      {
        label: "耐紫外线 POM",
        keyUse: commonDirectionUses.uv,
        shortLabel: "耐紫外线 POM",
      },
      {
        label: "耐磨 POM",
        keyUse: commonDirectionUses.wear,
        shortLabel: "耐磨 POM",
      },
      {
        label: "依据户外暴露与载荷定制配方",
        keyUse: "结合户外暴露与载荷条件进行项目专属配方审核。",
        shortLabel: "户外工况定制配方",
      },
    ],
    images: [
      {
        alt: "塑料农业喷头部件",
        label: "喷头",
      },
      {
        alt: "塑料草坪设备部件",
        label: "草坪设备部件",
      },
      {
        alt: "用于耐用户外装配的塑料管夹部件",
        label: "管夹",
      },
    ],
    parts: [
      {
        label: "喷头",
        description: "审核重复旋转、户外暴露与流路结构稳定性。",
        imageAlt: "农业喷头部件",
      },
      {
        label: "割草机齿轮",
        description: "筛查重复户外使用条件下的齿面磨损、扭矩传递与冲击响应。",
        imageAlt: "注塑户外设备割草机齿轮",
      },
      {
        label: "打草机线盘",
        description: "评估旋转平衡、冲击条件与尺寸稳定性。",
        imageAlt: "黑色注塑 POM 打草机线盘",
      },
      {
        label: "手拉启动器总成",
        description: "审核拉绳走向、弹簧壳体刚性、安装结构与重复启动可靠性。",
        imageAlt: "带拉手的注塑户外设备手拉启动器总成",
      },
      {
        label: "灌溉连接件",
        description: "审核连接结构、重复装配与户外介质暴露条件。",
        imageAlt: "用于灌溉设备的注塑快速管路连接件",
      },
      {
        label: "灌溉脉冲轮",
        description:
          "审核重复灌溉循环中的驱动叶片结构、扭矩传递、水接触与磨损。",
        imageAlt: "带弧形驱动叶片的米白色注塑灌溉脉冲轮",
      },
      {
        label: "打草机驱动头",
        description:
          "审核重复修剪中的驱动啮合、紧固件保持力、送线间隙与抗冲击性能。",
        imageAlt: "带绿色尼龙线的黑色注塑户外打草机驱动头",
      },
      {
        label: "耐候壳体卡扣",
        description: "审核卡扣保持、尺寸稳定性与项目专属户外暴露条件。",
        imageAlt: "带卡扣结构的注塑户外设备壳体卡扣",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "喷头与园林设备机构",
          "户外壳体、支架、盖板与卡扣",
          "户外暴露的管路、导向与紧固部件",
          "用于重复户外使用的耐用注塑部件",
        ],
      },
      {
        title: "性能需求",
        items: [
          "按项目要求审核韧性与耐低温性能",
          "紫外线暴露与户外耐久性",
          "重复运动条件下的耐磨性能",
          "设备总成中的尺寸稳定性",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "户外或低温要求可评估高抗冲 POM",
          "重视气候暴露时评估耐紫外线 POM 方向",
          "重复接触可评估耐磨 POM",
          "依据工作环境审核定制牌号",
        ],
      },
    ],
  },
  "textile-machinery": {
    title: applicationIndexMessages.cards["textile-machinery"].title,
    description:
      applicationIndexMessages.cards["textile-machinery"].description,
    heroImageAlt: applicationIndexMessages.cards["textile-machinery"].imageAlt,
    materialDirections: [
      {
        label: "耐磨 POM",
        keyUse: commonDirectionUses.wear,
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM",
        keyUse: commonDirectionUses.lowFriction,
        shortLabel: "低摩擦 POM",
      },
      {
        label: "玻璃纤维增强 POM — 用于需要更高刚性或更低收缩的场景",
        keyUse: commonDirectionUses.glassFiber,
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "依据硬度、收缩与磨损需求定制配方",
        keyUse: "结合硬度、收缩与磨损目标进行项目专属配方审核。",
        shortLabel: "纺织工况定制配方",
      },
    ],
    images: [
      {
        alt: "塑料纺织机械部件",
        label: "纺织部件",
      },
      {
        alt: "用于低摩擦运动的塑料滚轮部件",
        label: "滚轮",
      },
      {
        alt: "塑料导向环部件",
        label: "导向环",
      },
    ],
    parts: [
      {
        label: "导纱器",
        description: "审核与运动纱线接触时的表面顺滑性、导向精度与磨损。",
        imageAlt: "注塑纺织机械导向部件",
      },
      {
        label: "综丝束",
        description: "审核综眼一致性、直线度、耐磨性能与经纱分离可靠性。",
        imageAlt: "带重复椭圆综眼的浅黄色纺织综丝束",
      },
      {
        label: "提综器",
        description: "审核转轴配合、提升臂刚性、重复执行与综框运动可靠性。",
        imageAlt: "带黑色转轴底座与弧形灰色提升臂的纺织提综器",
      },
      {
        label: "气流纺导向件",
        description: "审核纤维通道结构、气流适配、表面顺滑性与纱线重复导向。",
        imageAlt: "带收窄纤维通道的米白色注塑气流纺导向件",
      },
      {
        label: "纺织导向轮",
        description:
          "审核连续运行中的槽形轮廓、轴承配合、纱线平滑接触与旋转稳定性。",
        imageAlt: "带中央轴承的黑色注塑纺织导向轮",
      },
      {
        label: "筒管座",
        description: "筛查保持结构、重复装载与旋转支撑稳定性。",
        imageAlt: "黑色注塑 POM 筒管座转接件",
      },
      {
        label: "纺锭支撑件",
        description: "审核法兰就位、套筒对位、轴间隙与重复旋转下的支撑稳定性。",
        imageAlt: "带法兰底座与倾斜空心套筒的象牙色注塑纺锭支撑件",
      },
      {
        label: "纺织滑块",
        description: "审核导向间隙、重复滑动磨损与装配精度。",
        imageAlt: "黑色注塑 POM 纺织导向滑块",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "纺织机械导向部件",
          "滚轮、套筒、轴套与低摩擦支撑件",
          "耐磨滑动及纱线或织物输送部件",
          "高硬度、低收缩注塑部件",
        ],
      },
      {
        title: "性能需求",
        items: [
          "重复运动条件下的耐磨性能",
          "用于顺畅导向的低摩擦性能",
          "低收缩与尺寸一致性",
          "纺织机械总成所需的硬度与稳定性",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "纺织接触部件可评估耐磨 POM",
          "导向件与滚轮运动可评估低摩擦 POM",
          "重视刚性或收缩控制时评估增强 POM",
          "依据纺织机械要求审核定制配方",
        ],
      },
    ],
  },
} satisfies LocalizedApplicationDetailSliceBMessages;

export default messages;
