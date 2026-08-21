import type { ApplicationIndexMessages } from "@/i18n/applicationTypes";

const messages = {
  metadata: {
    title: "工程塑料应用与材料选型 | Taiyi Polymer",
    description:
      "浏览改性 POM 及精选工程塑料改性材料在汽车、电子电气、输送自动化、运动部件、水路控制、洗衣机、户外设备与纺织机械中的材料评估路径。",
    imageAlt: "Taiyi Polymer 洗衣机部件应用工程评估",
  },
  breadcrumb: {
    home: "首页",
    applications: "应用",
  },
  contactSource: "应用目录",
  hero: {
    eyebrow: "应用工程",
    title: "面向注塑零部件的应用工程",
    description:
      "选材应从注塑零部件出发，而不是从泛化材料名称出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定哪些改性 POM 候选牌号值得比较。当所需性能平衡超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。",
    primaryAction: "讨论您的应用",
    secondaryAction: "浏览 POM 改性材料",
    guideAria: "应用浏览路径",
    guideKicker: "选择起点",
    industryTitle: "按行业浏览",
    industryCountSuffix: "个应用场景",
    componentTitle: "按零部件浏览",
    componentCountSuffix: "类注塑零部件",
    guideNote:
      "改性 POM 是核心产品线；当需求超出 POM 的实际适用范围时，可进一步评估精选 PA6、PA66 与 PPA 改性材料。",
  },
  directory: {
    eyebrow: "按行业浏览",
    title: "应用领域",
    description:
      "选择与您的零部件最接近的使用场景。每条路径都会把典型部件和工况连接到需要优先审核的材料性能。",
    viewAction: "查看应用路径",
  },
  componentSolutions: {
    eyebrow: "按零部件浏览",
    title: "零部件解决方案路径",
    description:
      "选择与设计最接近的注塑零部件系列，比较其工况输入、主要失效模式与验证需求。",
    allAction: "查看全部零部件解决方案",
    englishDestinationLabel: "EN — 英文内容",
    labels: {
      "precision-plastic-gears": "精密塑料齿轮",
      "bushings-and-sleeves": "轴套与套筒",
      "conveyor-chain-components": "输送链部件",
      "valve-spools-and-cartridges": "阀芯与阀筒",
      "textile-guide-components": "纺织导向部件",
      "ic-handling-trays": "IC 搬运托盘",
    },
  },
  selection: {
    eyebrow: "选型依据",
    title: "我们如何建立候选牌号清单",
    description:
      "我们先审核注塑零部件、模具方案、多腔一致性、收缩目标、使用工况与性能目标，再建立可用于后续比较的候选牌号清单。",
    items: [
      "模具开发阶段与模具方案",
      "模穴数量、流动路径与穴间一致性",
      "目标成型收缩、翘曲与尺寸稳定性",
      "零部件运动、载荷、磨损、摩擦、颜色与资料需求",
    ],
  },
  inquiry: {
    eyebrow: "询盘准备",
    title: "需要协助筛选候选牌号？",
    description:
      "请提供应用、模具阶段、模穴数量、收缩或翘曲关注点、当前材料参考、颜色、资料要求与预计用量。我们将据此准备改性材料候选清单，并确认下一步资料或样品安排。",
    action: "讨论您的应用",
  },
  cards: {
    automotive: {
      title: "汽车",
      description:
        "面向车门、座椅、燃油系统、雨刮器、控制盒及车内机构的功能性注塑零部件。",
      imageAlt: "包含汽车功能模块的整车装配线",
    },
    electronics: {
      title: "电子电气",
      description:
        "面向电气连接、绝缘、控制与执行机构的精密注塑零部件；当项目需要静电控制时，可进一步评估导电或抗静电材料方向。",
      imageAlt: "包含功能性电气模块的电子装配工位",
    },
    "conveyor-automation": {
      title: "输送与自动化",
      description: "用于洁净自动化输送的塑料链板、输送导轨、滚轮及搬运部件。",
      imageAlt: "采用模块化链板的洁净自动化输送线",
    },
    "motion-components": {
      title: "运动部件",
      description:
        "用于传动、导向与低摩擦运动的齿轮、滚轮、轴套、套筒及滑动部件。",
      imageAlt: "包含齿轮和注塑运动部件的工业运动模块",
    },
    "water-control": {
      title: "水路控制",
      description:
        "用于阀门、卫浴、泵及水路控制系统的注塑部件，重点评估运动顺畅性与装配稳定性。",
      imageAlt: "包含阀门与流路模块的洁净水路控制装配线",
    },
    "washing-machine-components": {
      title: "洗衣机部件",
      description:
        "用于洗衣机滚筒传动、水路、排水、阀门及低摩擦运动机构的功能性注塑部件。",
      imageAlt: "包含注塑传动、排水与门锁部件的滚筒洗衣机机构",
    },
    "outdoor-equipment": {
      title: "户外设备",
      description:
        "用于园林设备、喷灌装置、户外机构及耐用设备总成的户外暴露注塑部件。",
      imageAlt: "包含园林机械模块的户外设备装配线",
    },
    "textile-machinery": {
      title: "纺织机械",
      description:
        "用于纺织机械以及纱线或织物输送系统的耐磨导向、运动与低收缩注塑部件。",
      imageAlt: "包含纱线输送与导向部件的纺织机械生产线",
    },
  },
} satisfies ApplicationIndexMessages;

export default messages;
