import type { ApplicationIndexMessages } from "@/i18n/applicationTypes";

const messages = {
  metadata: {
    title: "工程塑料应用与材料选型 | 台益",
    description:
      "浏览改性 POM 及精选工程塑料改性材料在汽车、电子电气、输送自动化、运动部件、水路控制、洗衣机、户外设备与纺织机械中的材料评估路径。",
    imageAlt: "台益洗衣机部件应用工程评估",
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
      "从零件失效切入选材：运动件平衡摩擦与磨耗，卡扣平衡韧性与保持力，承载件平衡刚性与尺寸。按行业或零部件找到候选配方、牌号数据和试模重点。",
    primaryAction: "讨论您的应用",
    secondaryAction: "浏览 POM 改性材料",
    guideAria: "应用浏览路径",
    guideKicker: "选择起点",
    industryTitle: "按行业浏览",
    industryCountSuffix: "个应用场景",
    componentTitle: "按零部件浏览",
    componentCountSuffix: "类注塑零部件",
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
    relatedTitle: "相关零部件方案",
    relevantPartsLabel: "相关零部件",
    viewAction: "查看零部件方案",
    englishDestinationLabel: "英文内容",
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
      "我们根据注塑零部件、模具方案、多腔一致性、收缩目标、使用工况与性能目标，提供候选牌号清单。",
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
      "提交当前材料、零件用途与未达标项目，获取候选牌号对比建议、TDS 和试模样品支持；已有测试记录可用于确定首轮验证重点。",
    action: "讨论您的应用",
  },
  detail: {
    metadata: {
      titleSuffix: "工程塑料选型 | 台益",
      descriptionSuffix: "查看候选材料方向、典型部件与应用选型因素。",
    },
    breadcrumb: {
      home: "首页",
      applications: "应用",
    },
    contactSource: "应用详情",
    navigation: {
      ariaLabel: "应用页面章节",
      tabsAriaLabel: "页面章节",
      mobileMenuLabel: "本页内容",
      scene: "部件与工况",
      parts: "典型部件",
      materials: "候选材料",
      evaluation: "材料评估",
    },
    hero: {
      eyebrow: "应用与部件审核",
      primaryAction: "讨论您的应用",
      secondaryAction: "查找牌号数据与 TDS",
    },
    scene: {
      eyebrow: "部件与工况",
      title: "从部件与实际工况开始",
      visualDescription:
        "筛选牌号前，应先审核实际机构、运动方式、装配配合与尺寸目标。",
      basicDescription:
        "部件功能、使用工况、尺寸目标与资料需求，是比较改性 POM 牌号的重要依据。",
      imageAltSuffix: "应用场景，用于工程塑料材料审核",
      keywordsAria: "工程审核关键词",
      galleryAria: "典型部件",
      reviewPointFallback: "审核要点",
      reviewTitles: ["模具阶段", "流动一致性", "尺寸目标", "运动与资料"],
    },
    parts: {
      eyebrow: "典型部件",
      titleSuffix: "的代表性部件",
      description:
        "以部件几何、载荷、运动方式与使用环境为起点；最终材料选择仍需结合具体牌号和项目验证。",
      cardLabel: "典型部件",
      componentEyebrow: "零部件指南",
      componentTitle: "以下部件可进一步查看专项审核指南",
    },
    materials: {
      eyebrow: "候选材料",
      title: "适用于上述部件审核的材料方向",
      description:
        "结合上述部件功能与工况，比较通常进入初筛的 POM 候选材料方向。",
      keyUseLabel: "主要审核方向",
      imageAltSuffix: "材料颗粒",
    },
    evaluation: {
      eyebrow: "材料评估",
      title: "准备建立候选牌号清单？",
      description:
        "提交当前材料、零件用途与未达标项目，获取候选牌号对比建议、TDS 和试模样品支持；已有测试记录可用于确定首轮验证重点。",
      action: "讨论您的应用",
    },
  },
  cards: {
    automotive: {
      title: "汽车",
      description:
        "传动齿轮关注齿根受力与齿面磨损，卡扣关注装配开裂与保持力，燃油和水路件关注介质接触后的尺寸与密封。按零件失效建立首轮牌号对比。",
      imageAlt: "包含汽车功能模块的整车装配线",
    },
    electronics: {
      title: "电子电气",
      description:
        "连接器先权衡卡扣保持力与薄壁充模，传动件先控制磨耗与异响。静电搬运件从目标电阻和接地路径切入，分别筛选 CNT 或碳纤维配方。",
      imageAlt: "包含功能性电气模块的电子装配工位",
    },
    "conveyor-automation": {
      title: "输送与自动化",
      description: "链节销孔磨损会拉长节距，导轨粘滑会抬高驱动负荷。先区分承载变形与接触磨耗，再为链板、滚轮和导轨匹配增强或润滑改性 POM。",
      imageAlt: "采用模块化链板的洁净自动化输送线",
    },
    "motion-components": {
      title: "运动部件",
      description:
        "连续啮合先控制齿面磨损与温升，频繁启停先处理粘滑与冲击。按主导风险选择润滑、增韧或增强 POM，并从已有牌号切入试模。",
      imageAlt: "包含齿轮和注塑运动部件的工业运动模块",
    },
    "water-control": {
      title: "水路控制",
      description:
        "阀芯卡滞与密封泄漏常从配合间隙变化开始。运动界面优先处理启动摩擦和磨损，承压壳体优先控制蠕变与翘曲，并按介质和水温筛选配方。",
      imageAlt: "包含阀门与流路模块的洁净水路控制装配线",
    },
    "washing-machine-components": {
      title: "洗衣机",
      description:
        "传动部件重点防止启停冲击与啮合磨损，排水和阀门部件重点控制热水、洗涤剂接触后的配合与密封。按干湿工况分别建立候选牌号。",
      imageAlt: "包含注塑传动、排水与门锁部件的滚筒洗衣机机构",
    },
    "outdoor-equipment": {
      title: "户外设备",
      description:
        "户外卡扣先平衡低温韧性与光照老化，齿轮和线盘先处理冲击与粉尘磨损。以耐候、增韧或润滑配方分别建立对比基准。",
      imageAlt: "包含园林机械模块的户外设备装配线",
    },
    "textile-machinery": {
      title: "纺织机械",
      description:
        "导纱接触面磨损会增加毛羽与断纱，粉尘下的往复运动易产生粘滑。先权衡表面保持与摩擦阻力，再为承载支架补充刚性和尺寸对比。",
      imageAlt: "包含纱线输送与导向部件的纺织机械生产线",
    },
  },
} satisfies ApplicationIndexMessages;

export default messages;
