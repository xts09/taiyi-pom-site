import type { LocalizedApplicationDetailSliceAMessages } from "@/i18n/applicationTypes";
import applicationIndexMessages from "./zh-CN-applications.ts";

const commonDirectionUses = {
  wear: "用于重复运动工况下的耐磨审核。",
  lowFriction: "用于滑动或配合表面的低摩擦审核。",
  highImpact: "用于存在冲击或较低温使用条件的韧性审核。",
  glassFiber: "当项目需要增强时，用于审核更高刚性与尺寸稳定性。",
  chargeControl: "用于需要导电或抗静电性能的静电控制审核。",
} as const;

const messages = {
  automotive: {
    title: applicationIndexMessages.cards.automotive.title,
    description: applicationIndexMessages.cards.automotive.description,
    heroImageAlt: applicationIndexMessages.cards.automotive.imageAlt,
    materialDirections: [
      {
        label: "高抗冲 POM — 用于增韧和低温要求",
        keyUse: commonDirectionUses.highImpact,
        shortLabel: "高抗冲 POM",
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
        label: "玻璃纤维增强 POM — 用于需要更高刚性或更低收缩的场景",
        keyUse: commonDirectionUses.glassFiber,
        shortLabel: "玻璃纤维增强 POM",
      },
    ],
    images: [
      {
        alt: "汽车塑料燃油泵总成",
        label: "燃油泵总成",
      },
      {
        alt: "汽车塑料车窗升降器部件",
        label: "车窗升降器",
      },
      {
        alt: "汽车注塑卡扣与紧固件",
        label: "卡扣与紧固件",
      },
    ],
    parts: [
      {
        label: "燃油泵总成",
        description: "审核尺寸配合、燃油系统内的运动状态及重复装配条件。",
        imageAlt: "汽车塑料燃油泵总成",
      },
      {
        label: "车窗升降器",
        description: "筛查低摩擦运动、齿轮磨损与导轨啮合稳定性。",
        imageAlt: "汽车塑料车窗升降器部件",
      },
      {
        label: "汽车卡扣与紧固件",
        description: "审核保持力、卡扣配合一致性与低翘曲装配配合。",
        imageAlt: "汽车注塑卡扣与紧固件",
      },
      {
        label: "安全锁扣",
        description: "审核释放结构、保持力与重复装配配合。",
        imageAlt: "汽车注塑安全锁扣部件",
      },
      {
        label: "雨刮电机齿轮",
        description: "筛查齿面磨损、扭矩传递与重复运动顺畅性。",
        imageAlt: "带注塑聚合物齿轮的汽车雨刮电机总成",
      },
      {
        label: "座椅导向环",
        description: "评估滑动接触、导向精度与重复磨损下的耐久表现。",
        imageAlt: "汽车内饰注塑座椅导向环部件",
      },
      {
        label: "换挡座",
        description: "审核受控运动、装配配合与低噪声运行。",
        imageAlt: "汽车换挡座与连杆部件",
      },
      {
        label: "内后视镜底座",
        description: "审核内后视镜周边的注塑配合、安装结构与支撑稳定性。",
        imageAlt: "汽车注塑内后视镜底座部件",
      },
      {
        label: "雨刮臂部件",
        description: "审核挡风玻璃雨刮臂周边的连接配合、保持结构与重复装配。",
        imageAlt: "汽车注塑挡风玻璃雨刮臂部件",
      },
      {
        label: "燃油滤芯",
        description: "审核燃油过滤模块周边的密封配合、保持结构与重复装配。",
        imageAlt: "汽车燃油滤芯",
      },
      {
        label: "加油口盖总成",
        description: "审核加油口盖周边的密封配合、螺纹啮合与重复装配。",
        imageAlt: "汽车加油口盖总成部件",
      },
      {
        label: "电动车制动执行器部件",
        description: "审核电动制动执行器总成的齿轮啮合、扭矩传递与尺寸稳定性。",
        imageAlt: "带注塑齿轮的电动车制动部件",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "车门模块、锁扣、管夹、导向件与后视镜相关部件",
          "燃油泵总成与燃油系统功能部件",
          "雨刮齿轮、雨刮套筒、换挡座与摇臂",
          "控制盒部件、紧固件、限位件、扬声器壳体与座椅导向环",
        ],
      },
      {
        title: "性能需求",
        items: [
          "尺寸稳定性与重复装配配合",
          "运动总成所需的耐磨与低摩擦性能",
          "按项目要求审核强度、刚性与抗冲击性能",
          "支架、壳体与内饰部件的低翘曲要求",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "耐磨与低摩擦 POM 方向",
          "面向韧性目标的高抗冲 POM",
          "当刚性或更低收缩优先时评估增强 POM",
          "依据磨损、收缩、强度与加工需求筛选牌号",
        ],
      },
    ],
  },
  electronics: {
    title: applicationIndexMessages.cards.electronics.title,
    description: applicationIndexMessages.cards.electronics.description,
    heroImageAlt: applicationIndexMessages.cards.electronics.imageAlt,
    materialDirections: [
      {
        label: "导电 / 抗静电 POM — 用于需要明确电阻范围或电荷耗散功能的场景",
        keyUse: commonDirectionUses.chargeControl,
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "碳纤维增强 POM — 同时评估刚性、尺寸稳定性与导电性能",
        keyUse: "用于同时需要刚性与受控导电性能的项目审核。",
        shortLabel: "碳纤维增强 POM",
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
        label: "依据项目要求定制配方",
        keyUse: "结合机械配合、电气功能与加工要求进行项目专属配方审核。",
        shortLabel: "项目定制配方",
      },
    ],
    images: [
      {
        alt: "塑料快速连接与管路连接部件",
        label: "快速连接件",
      },
      {
        alt: "塑料转子与电剪部件",
        label: "转子部件",
      },
      {
        alt: "精密塑料电子电气部件",
        label: "电子电气部件",
      },
    ],
    parts: [
      {
        label: "连接器壳体",
        description: "审核端子对位、精细结构充模与连接器重复配合。",
        imageAlt: "六位注塑电气连接器壳体",
      },
      {
        label: "端子壳体",
        description: "审核保持结构、尺寸一致性与装配间隙稳定性。",
        imageAlt: "两位注塑电气端子壳体",
      },
      {
        label: "复印机传动齿轮",
        description: "审核复印机传动总成中的齿轮啮合、旋转精度与重复动力传递。",
        imageAlt: "带注塑聚合物传动齿轮的复印机驱动总成",
      },
      {
        label: "碳粉盒传动部件",
        description: "审核碳粉盒传动总成内部的齿轮支撑、轴系对位与重复运动。",
        imageAlt: "带注塑传动支撑部件的碳粉盒总成",
      },
      {
        label: "IC 搬运托盘",
        description:
          "审核托盘平整度、穴位结构、搬运耐久性，以及目标 ESD 指标与测试方法。",
        imageAlt: "带重复元件穴位与手持开口的注塑 IC 搬运托盘",
      },
      {
        label: "面板安装式信号连接器",
        description: "审核设备接口处的连接保持、应力释放与线缆走向稳定性。",
        imageAlt: "带注塑插头与线缆应力释放结构的面板安装式信号连接器",
      },
      {
        label: "机器人关节齿轮箱",
        description:
          "审核机器人关节总成中的注塑齿轮啮合、轴承支撑、磨损与尺寸稳定性。",
        imageAlt: "带注塑齿轮与轴承支撑部件的机器人关节齿轮箱",
      },
      {
        label: "抗静电精密部件",
        description: "结合尺寸与加工要求，明确目标电阻范围及测试方法。",
        imageAlt: "精密注塑电子电气部件",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "连接器与端子壳体、控制盒盖及绝缘支撑件",
          "静电控制载具、治具与精密注塑部件",
          "小型电机转子、执行器齿轮、滚轮与运动电气部件",
          "线束卡扣、扣件与功能性电子壳体",
        ],
      },
      {
        title: "性能需求",
        items: [
          "功能装配所需的尺寸稳定性",
          "精密注塑件所需的加工一致性",
          "需要静电控制时明确表面或体积电阻目标与测试方法",
          "面向 ESD 敏感部件审核接地路径、湿度、调节条件与装配结构",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "面向项目专属电阻目标的导电与抗静电 POM 方向",
          "同时评估刚性与导电性能时采用碳纤维增强 POM 方向",
          "执行器、齿轮与滚轮可评估低摩擦或耐磨 POM",
          "依据零部件结构与加工条件筛查定制配方",
        ],
      },
    ],
  },
  "conveyor-automation": {
    title: applicationIndexMessages.cards["conveyor-automation"].title,
    description:
      applicationIndexMessages.cards["conveyor-automation"].description,
    heroImageAlt:
      applicationIndexMessages.cards["conveyor-automation"].imageAlt,
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
        label: "导电 / 抗静电 POM — 用于需要静电控制的场景",
        keyUse: commonDirectionUses.chargeControl,
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "需要更高刚性时评估增强 POM",
        keyUse: "用于审核承载部件与装配结构所需的更高刚性。",
        shortLabel: "增强 POM",
      },
    ],
    images: [
      {
        alt: "用于高强度耐磨运动的塑料输送部件",
        label: "输送部件",
      },
      {
        alt: "带防滑条的模块化输送链板",
        label: "抗静电防滑输送链板",
      },
      {
        alt: "用于低摩擦运动的塑料滚轮部件",
        label: "滚轮",
      },
    ],
    parts: [
      {
        label: "小型输送链板",
        description: "审核链节配合、重复转动与运动链面磨损。",
        imageAlt: "注塑模块化输送链板部件",
      },
      {
        label: "高载荷输送链",
        description: "审核销轴配合、重复转动与链节间载荷传递。",
        imageAlt: "黑色注塑输送链节部件",
      },
      {
        label: "输送带分段模块",
        description: "筛查分段结构、边缘啮合与输送运动重复性。",
        imageAlt: "注塑分段式输送带部件",
      },
      {
        label: "抗静电防滑输送链板",
        description:
          "审核自动化输送线中的表面抓持、静电耗散性能与链节重复啮合。",
        imageAlt: "带静电耗散防滑条的抗静电模块化输送链板",
      },
      {
        label: "输送面板",
        description: "审核面板对位、载荷分布与尺寸一致性。",
        imageAlt: "棕色注塑输送面板总成",
      },
      {
        label: "输送滚轮",
        description: "审核重复输送运动下的滚轮直径、轴配合、滚动接触与磨损。",
        imageAlt: "带注塑低摩擦滚轮的输送滚轮组",
      },
      {
        label: "输送链板支架",
        description: "审核链板接口处的紧固结构、支撑刚性与重复对位。",
        imageAlt: "注塑输送链板支架与支撑部件",
      },
      {
        label: "导电输送链板",
        description:
          "审核静电敏感输送线中的静电耗散材料方向、链节啮合与重复运动。",
        imageAlt: "用于静电敏感搬运线的黑色导电输送链板部件",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "模块化链板与输送链轮",
          "耐磨条、导轨与滑动接触支撑件",
          "轴承保持架、轴套与旋转支撑部件",
          "输送机壳体与紧固支架",
        ],
      },
      {
        title: "性能需求",
        items: [
          "重复运动条件下的耐磨性能",
          "与配合表面接触时的低摩擦性能",
          "尺寸稳定性与重复装配配合",
          "按项目要求审核抗静电或导电性能",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "重复滑动接触可评估耐磨 POM",
          "平稳运动可评估低摩擦 POM",
          "静电控制可评估导电或抗静电 POM",
          "需要刚性时评估增强 POM",
        ],
      },
    ],
  },
  "motion-components": {
    title: applicationIndexMessages.cards["motion-components"].title,
    description:
      applicationIndexMessages.cards["motion-components"].description,
    heroImageAlt: applicationIndexMessages.cards["motion-components"].imageAlt,
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
        label: "高抗冲 POM — 用于需要低温韧性的场景",
        keyUse: commonDirectionUses.highImpact,
        shortLabel: "高抗冲 POM",
      },
      {
        label: "玻璃纤维增强 POM — 用于需要更高刚性的场景",
        keyUse: commonDirectionUses.glassFiber,
        shortLabel: "玻璃纤维增强 POM",
      },
    ],
    images: [
      {
        alt: "汽车雨刮电机塑料齿轮",
        label: "雨刮电机齿轮",
      },
      {
        alt: "塑料主框架导向环",
        label: "导向环",
      },
      {
        alt: "用于高强度运动的塑料洗衣机底座齿轮",
        label: "洗衣机底座齿轮",
      },
    ],
    parts: [
      {
        label: "精密齿轮",
        description: "审核齿形精度、扭矩传递与重复尺寸控制。",
        imageAlt: "注塑精密齿轮部件组",
      },
      {
        label: "蜗轮",
        description: "筛查齿面滑动接触、磨损与减速运动顺畅性。",
        imageAlt: "注塑蜗轮轴部件",
      },
      {
        label: "滚轮",
        description: "评估重复循环下的滚动接触、轴配合与运行稳定性。",
        imageAlt: "绿色注塑滚轮部件",
      },
      {
        label: "轴套",
        description: "审核旋转支撑界面的间隙、摩擦与磨损。",
        imageAlt: "注塑 POM 轴套部件组",
      },
      {
        label: "套筒",
        description: "审核同心度、表面接触与重复压配或滑动配合。",
        imageAlt: "注塑套筒与轴套部件组",
      },
      {
        label: "导向环",
        description: "筛查导向精度、低摩擦运动与尺寸稳定性。",
        imageAlt: "注塑导向环部件",
      },
      {
        label: "滑块",
        description: "审核载荷分布、导向间隙与重复滑动磨损。",
        imageAlt: "带黄铜嵌件的注塑滑块部件",
      },
      {
        label: "凸轮",
        description: "评估轮廓精度、接触应力与受控执行运动。",
        imageAlt: "米白色注塑凸轮齿轮部件",
      },
    ],
    engineeringFit: [
      {
        title: "典型部件",
        items: [
          "齿轮、齿轮组、换挡座与洗衣机底座齿轮",
          "滚轮、导向环、雨刮套筒与轴套",
          "滑块、低摩擦导向件与运动支撑件",
          "用于重复运动的紧凑型传动部件",
        ],
      },
      {
        title: "性能需求",
        items: [
          "降低重复运动条件下的摩擦与磨损",
          "配合部件所需的尺寸稳定性",
          "噪声控制与平稳运动",
          "传动或导向结构所需的强度与刚性",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "平稳运动可评估低摩擦 POM",
          "重复接触可评估耐磨 POM",
          "面向韧性目标的高抗冲 POM",
          "需要刚性时评估增强 POM",
        ],
      },
    ],
  },
} satisfies LocalizedApplicationDetailSliceAMessages;

export default messages;
