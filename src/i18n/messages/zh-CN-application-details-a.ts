import type { LocalizedApplicationDetailSliceAMessages } from "@/i18n/applicationTypes";
import applicationIndexMessages from "./zh-CN-applications.ts";

const messages = {
  automotive: {
    title: applicationIndexMessages.cards.automotive.title,
    description: applicationIndexMessages.cards.automotive.description,
    heroImageAlt: applicationIndexMessages.cards.automotive.imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "汽车零部件选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "汽车零部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先明确部件功能和实际工况",
        visualDescription:
          "同一辆车上的齿轮、卡扣、导向件和壳体承担的任务不同。先明确机构、载荷、运动、尺寸与环境，再判断哪些 POM 材料方向值得进入候选。",
        basicDescription:
          "先明确汽车零部件的功能、工况、尺寸目标与资料需求，再进入 POM 材料方向和具体牌号的比较。",
        imageAltSuffix: "汽车零部件选材场景",
        keywordsAria: "汽车零部件选材关键输入",
        galleryAria: "典型汽车零部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["部件功能", "运动与载荷", "尺寸与装配", "环境与资料"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "不同部件面对的载荷、运动、装配和环境条件并不相同。先找到与项目接近的部件，再看哪些材料性能会影响实际使用。",
        cardLabel: "汽车部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按零部件要求缩小材料范围",
        description:
          "以下方向用于建立初步候选范围，不代表对所有汽车部件通用适用。具体牌号仍需结合实际工况、数据与样件确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的汽车零部件要求开始",
        description:
          "提供部件功能、载荷、运动方式、使用环境、当前材料和模具阶段。我们可据此整理候选材料范围、待确认条件，以及可提供的牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "零部件功能、机构位置与主要失效现象",
      "载荷、速度、循环次数、摩擦副与噪声目标",
      "关键尺寸、配合间隙、收缩、翘曲与装配方式",
      "温度、介质、光照、颜色、文件与样品需求",
    ],
    showSelectionInputs: true,
    qualityEvidence: {
      standard: "IATF 16949:2016",
      system: "汽车行业质量管理体系",
      scope: "适用于塑料粒子制造",
      action: "查看证书",
      href: "/certificates/iatf-16949-certificate.pdf",
    },
    materialDirections: [
      {
        label: "高抗冲 POM — 面向装配冲击与低温韧性要求",
        keyUse:
          "卡扣、紧固件或受冲击部件需要更高韧性时进入候选；仍需结合缺口、温度、载荷和实际部件确认。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "耐磨 POM — 面向重复啮合与滑动接触",
        keyUse: "齿轮、导向件和重复运动界面以磨损寿命为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向运动顺畅性与噪声控制",
        keyUse:
          "启动阻力、粘滑、摩擦噪声或配合表面顺畅性影响机构表现时进入候选。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "玻璃纤维增强 POM — 面向刚性与尺寸控制",
        keyUse:
          "支架、壳体或承载件优先关注刚性、收缩和翘曲时进入候选；需同时检查纤维取向和韧性影响。",
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
        description:
          "先明确内部运动方式、装配配合、尺寸目标和实际介质条件；介质适用性必须按具体牌号与项目要求确认。",
        imageAlt: "汽车塑料燃油泵总成",
      },
      {
        label: "车窗升降器",
        description:
          "齿轮与导轨的摩擦副、载荷、循环次数和噪声目标，决定是否优先比较耐磨或低摩擦 POM。",
        imageAlt: "汽车塑料车窗升降器部件",
      },
      {
        label: "汽车卡扣与紧固件",
        description:
          "装配应变、保持力、反复拆装和翘曲要求，决定需要重点比较韧性与尺寸稳定性。",
        imageAlt: "汽车注塑卡扣与紧固件",
      },
      {
        label: "安全锁扣",
        description:
          "释放行程、保持力、装配应变和循环次数共同决定韧性与尺寸保持要求。",
        imageAlt: "汽车注塑安全锁扣部件",
      },
      {
        label: "雨刮电机齿轮",
        description:
          "扭矩、齿面接触、转速和目标寿命决定耐磨、低摩擦与尺寸稳定性的优先级。",
        imageAlt: "带注塑聚合物齿轮的汽车雨刮电机总成",
      },
      {
        label: "座椅导向环",
        description:
          "接触副、面压、运动频率和间隙要求决定摩擦、磨损与导向精度的平衡。",
        imageAlt: "汽车内饰注塑座椅导向环部件",
      },
      {
        label: "换挡座",
        description:
          "配合间隙、操纵频率、载荷和噪声目标决定低摩擦、耐磨与尺寸稳定性要求。",
        imageAlt: "汽车换挡座与连杆部件",
      },
      {
        label: "内后视镜底座",
        description:
          "安装方式、调节载荷、保持力和环境温度决定刚性、韧性与尺寸保持要求。",
        imageAlt: "汽车注塑内后视镜底座部件",
      },
      {
        label: "雨刮臂部件",
        description:
          "连接方式、保持力、循环载荷和外部环境决定韧性、尺寸稳定性与耐候要求。",
        imageAlt: "汽车注塑挡风玻璃雨刮臂部件",
      },
      {
        label: "燃油滤芯",
        description:
          "密封界面、保持结构、装配方式和实际介质条件决定尺寸与材料相容性要求；需按具体牌号验证。",
        imageAlt: "汽车燃油滤芯",
      },
      {
        label: "加油口盖总成",
        description:
          "螺纹啮合、密封配合、反复启闭和实际介质条件决定磨损、尺寸与相容性要求。",
        imageAlt: "汽车加油口盖总成部件",
      },
      {
        label: "电动车制动执行器部件",
        description:
          "齿轮级载荷、扭矩、循环次数和装配公差决定耐磨、刚性与尺寸稳定性的重点。",
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
          "按实际载荷与温度明确强度、刚性和抗冲击要求",
          "支架、壳体与内饰部件的低翘曲要求",
        ],
      },
      {
        title: "PLATFORM 材料方向",
        items: [
          "磨损或运动顺畅性优先时，比较耐磨与低摩擦 POM",
          "装配冲击或低温韧性优先时，比较高抗冲 POM",
          "刚性、收缩或翘曲优先时，比较增强 POM",
          "结合具体牌号数据、样品和试模结果确认最终适用性",
        ],
      },
    ],
  },
  electronics: {
    title: applicationIndexMessages.cards.electronics.title,
    description: applicationIndexMessages.cards.electronics.description,
    heroImageAlt: applicationIndexMessages.cards.electronics.imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "电子电气部件选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "电子电气部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先定义电气功能、电阻目标与测试方法",
        visualDescription:
          "连接器、托盘、传动齿轮和抗静电精密件承担的电气与机械任务不同。先明确绝缘、耗散或导电功能，电阻范围、测试条件、接地路径、尺寸和运动要求，再判断材料方向。",
        basicDescription:
          "先明确电气功能、电阻与测试条件、机械载荷、尺寸和环境，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "电子电气部件选材场景",
        keywordsAria: "电子电气部件选材关键输入",
        galleryAria: "典型电子电气部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["电气功能", "电阻与测试", "尺寸与装配", "环境与加工"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "电子电气部件可能以绝缘、静电控制、尺寸保持或运动耐久为主。先找到接近的部件，再确认电性能是否需要与刚性、摩擦和加工条件共同比较。",
        cardLabel: "电子电气部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按电气功能与机械要求缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有电子电气部件通用适用。电阻、接地、湿度、测试方法、尺寸和实际装配需要一起确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的电气与零部件要求开始",
        description:
          "提供部件功能、目标电阻、测试电压与调节条件、接地方式、机械载荷、关键尺寸、使用环境和当前材料。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "部件功能，以及绝缘、静电耗散或导电的目标状态",
      "表面或体积电阻范围、测试电压、调节条件与接地路径",
      "端子保持、机械载荷、运动方式、关键尺寸与装配间隙",
      "温湿度、颜色、清洁环境、加工条件及适用的法规或测试要求",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "导电 / 抗静电 POM — 面向已定义电阻范围的静电控制",
        keyUse:
          "部件已明确表面或体积电阻范围、测试电压、调节条件、接地方式和使用环境时进入候选。",
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "碳纤维增强 POM — 协调刚性、尺寸与导电性能",
        keyUse:
          "承载或精密部件同时需要更高刚性、尺寸保持和导电方向时进入候选，并评估纤维取向与各向异性。",
        shortLabel: "碳纤维增强 POM",
      },
      {
        label: "耐磨 POM — 面向齿轮、滚轮与执行机构",
        keyUse:
          "电气设备中的传动或执行部件以重复接触磨损和寿命为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向运动阻力、噪声与顺畅执行",
        keyUse:
          "滑动、旋转或配合界面需要降低摩擦、噪声或粘滑时进入候选，并结合电气要求判断。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "项目定制或替代材料判断 — 面向复合要求",
        keyUse:
          "现有方向无法同时满足电气、机械、颜色或加工目标时再讨论调整；若阻燃、高温或法规要求主导，应先确认 POM 是否仍适合作为候选。",
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
        description:
          "端子间距、保持力、薄壁充模、插拔次数和电气要求决定尺寸、加工与材料方向。",
        imageAlt: "六位注塑电气连接器壳体",
      },
      {
        label: "端子壳体",
        description:
          "保持结构、爬电或间隔设计、尺寸一致性和装配间隙决定材料与成型控制重点。",
        imageAlt: "两位注塑电气端子壳体",
      },
      {
        label: "复印机传动齿轮",
        description:
          "齿轮啮合、转速、循环次数、噪声和碳粉环境决定磨损、旋转精度与尺寸保持。",
        imageAlt: "带注塑聚合物传动齿轮的复印机驱动总成",
      },
      {
        label: "碳粉盒传动部件",
        description:
          "齿轮支撑、轴系对位、粉尘、载荷和更换循环决定摩擦、磨损与装配稳定性。",
        imageAlt: "带注塑传动支撑部件的碳粉盒总成",
      },
      {
        label: "IC 搬运托盘",
        description:
          "托盘平整度、穴位尺寸、堆叠、搬运耐久性、目标电阻和测试条件需要共同确认。",
        imageAlt: "带重复元件穴位与手持开口的注塑 IC 搬运托盘",
      },
      {
        label: "面板安装式信号连接器",
        description:
          "连接保持、应力释放、线缆走向、面板配合和环境条件决定结构与尺寸要求。",
        imageAlt: "带注塑插头与线缆应力释放结构的面板安装式信号连接器",
      },
      {
        label: "机器人关节齿轮箱",
        description:
          "齿轮啮合、轴承支撑、载荷、速度、定位精度和循环次数决定磨损、刚性与尺寸稳定性。",
        imageAlt: "带注塑齿轮与轴承支撑部件的机器人关节齿轮箱",
      },
      {
        label: "抗静电精密部件",
        description:
          "目标电阻、测试电压、调节湿度、接地方式、尺寸和颜色决定配方与验证条件。",
        imageAlt: "精密注塑电子电气部件",
      },
    ],
    engineeringFit: [
      {
        title: "先确认电气功能与测试边界",
        items: [
          "部件需要绝缘、静电耗散或导电，以及对应的系统接地方式",
          "表面或体积电阻范围、测试电压、调节时间、温湿度与测试方法",
          "端子保持、机械载荷、运动、关键尺寸、配合和加工限制",
          "颜色、清洁环境、工作温度及适用的阻燃或法规要求",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "电阻数据只有在测试方法、样件状态和环境一致时才可比较",
          "导电填料会同时改变刚性、收缩、表面、颜色和加工表现",
          "运动部件的摩擦与磨损仍需结合实际摩擦副和载荷验证",
          "阻燃、高温或电气法规主导时应先判断其他材料体系是否更合适",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "按目标电阻、测试电压、湿度、接地和部件状态定义测试条件",
          "比较候选牌号的 TDS、电阻数据、尺寸数据与样品可用性",
          "在实际模具、装配、摩擦副和使用环境下验证机械与电气表现",
          "根据测试结果收窄牌号，或明确转向其他材料体系的条件",
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
    detailUi: {
      navigation: {
        ariaLabel: "输送与自动化选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "输送与自动化选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先明确输送负载、运动界面与现场条件",
        visualDescription:
          "链板、链节、滚轮和导轨承担的负载与接触方式不同。先明确输送物、线速、启停、积放、销轴配合、清洁环境和静电目标，再判断哪些材料方向值得进入候选。",
        basicDescription:
          "先明确输送任务、负载、节拍、接触界面和现场环境，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "输送与自动化选材场景",
        keywordsAria: "输送与自动化选材关键输入",
        galleryAria: "典型输送与自动化部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["输送任务", "负载与节拍", "接触与磨损", "环境与静电"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "输送部件的材料方向取决于链节啮合、销轴配合、载荷分布、线速和现场环境。先找到接近的部件，再明确磨损、摩擦、刚性或静电控制的主次。",
        cardLabel: "输送部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按输送任务缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有输送线通用适用。具体牌号仍需结合负载、节拍、配合、清洁环境和静电目标确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的输送条件开始",
        description:
          "提供输送物、单件或累计负载、线速、启停频率、接触材料、清洁环境、静电目标和当前失效现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "输送物类型、单件与累计负载、冲击和积放方式",
      "线速、启停频率、循环次数、链节啮合与销轴配合",
      "导轨、销轴和滚轮材料，润滑状态、磨损与噪声现象",
      "温度、清洁介质、粉尘、颜色、静电范围与测试方法",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "耐磨 POM — 面向链节、销轴与导轨的重复磨损",
        keyUse:
          "链板、链节、滚轮或导轨以磨损寿命和间隙保持为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向积放阻力与运行顺畅性",
        keyUse:
          "链板与导轨、滚轮与轴或其他滑动界面需要降低驱动阻力、噪声或粘滑时进入候选。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "导电 / 抗静电 POM — 面向有明确静电控制目标的输送线",
        keyUse:
          "电子装配或静电敏感搬运线已定义电阻范围、接地方式、测试方法和使用环境时进入候选。",
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "增强 POM — 面向承载变形与重复对位要求",
        keyUse:
          "支架、面板或承载结构需要提高刚性、控制变形和保持装配位置时进入候选。",
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
        description:
          "链节节距、销轴配合、转弯半径、线速和积放状态决定啮合磨损与运行阻力。",
        imageAlt: "注塑模块化输送链板部件",
      },
      {
        label: "高载荷输送链",
        description:
          "累计负载、冲击、销轴受力和启停频率决定链节刚性、孔位磨损与疲劳风险。",
        imageAlt: "黑色注塑输送链节部件",
      },
      {
        label: "输送带分段模块",
        description:
          "模块拼接、边缘啮合、平面度和温度变化决定输送面连续性与重复运动稳定性。",
        imageAlt: "注塑分段式输送带部件",
      },
      {
        label: "抗静电防滑输送链板",
        description:
          "表面抓持、目标电阻、接地方式、颜色和链节磨损需要在同一使用环境下共同确认。",
        imageAlt: "带静电耗散防滑条的抗静电模块化输送链板",
      },
      {
        label: "输送面板",
        description:
          "面板跨度、支撑位置、载荷分布和连接方式决定刚性、平面度与尺寸一致性要求。",
        imageAlt: "棕色注塑输送面板总成",
      },
      {
        label: "输送滚轮",
        description:
          "滚轮直径、轴材、配合间隙、径向载荷和线速决定启动阻力、圆度与磨损表现。",
        imageAlt: "带注塑低摩擦滚轮的输送滚轮组",
      },
      {
        label: "输送链板支架",
        description:
          "紧固结构、悬臂长度、冲击载荷和重复对位决定支撑刚性与连接处耐久性。",
        imageAlt: "注塑输送链板支架与支撑部件",
      },
      {
        label: "导电输送链板",
        description:
          "目标电阻范围、测试电压、接地路径、湿度和磨损后的电性能决定材料与验证方式。",
        imageAlt: "用于静电敏感搬运线的黑色导电输送链板部件",
      },
    ],
    engineeringFit: [
      {
        title: "先确认输送任务与现场条件",
        items: [
          "输送物、单件与累计负载、冲击、积放和定位方式",
          "线速、启停频率、转弯半径、循环次数与维护周期",
          "链板、销轴、导轨和滚轮的材料、配合与润滑状态",
          "温度、清洁介质、粉尘、湿度、颜色和静电控制目标",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "磨损、摩擦和驱动阻力需要与刚性、韧性和尺寸保持一起比较",
          "链节孔位、节距、翘曲和收缩会直接改变啮合与运行稳定性",
          "静电材料需要以目标电阻、测试方法和实际环境为前提",
          "清洁介质、温湿度和长期磨损可能改变表面与电性能",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用目标负载、线速、积放和维护周期定义样件测试条件",
          "比较候选牌号的 TDS、尺寸数据、电阻数据与样品状态",
          "在实际链节、销轴、导轨和清洁环境下观察运行与磨损",
          "根据试装和运行结果收窄牌号，并保留待确认的现场变量",
        ],
      },
    ],
  },
  "motion-components": {
    title: applicationIndexMessages.cards["motion-components"].title,
    description:
      applicationIndexMessages.cards["motion-components"].description,
    heroImageAlt: applicationIndexMessages.cards["motion-components"].imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "运动部件选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "运动部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先定义运动副、载荷和失效现象",
        visualDescription:
          "齿轮、轴套、滚轮和滑块的运动方式与接触条件不同。先明确摩擦副、载荷、速度、润滑、寿命和噪声目标，再判断耐磨、低摩擦、增韧或增强方向是否值得进入候选。",
        basicDescription:
          "先明确运动形式、接触条件、载荷、寿命和尺寸目标，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "运动部件选材场景",
        keywordsAria: "运动部件选材关键输入",
        galleryAria: "典型运动部件",
        reviewPointFallback: "选材输入",
        reviewTitles: [
          "运动副与功能",
          "载荷与速度",
          "寿命与噪声",
          "尺寸与环境",
        ],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "运动部件的材料方向由接触形式、载荷、速度、间隙和寿命共同决定。先找到接近的部件，再看哪些条件会改变摩擦、磨损和尺寸表现。",
        cardLabel: "运动部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按运动条件缩小材料范围",
        description:
          "以下方向用于形成初步候选，不代表对所有运动部件通用适用。具体牌号仍需结合摩擦副、载荷、速度、环境和样件结果确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的运动条件开始",
        description:
          "提供部件功能、摩擦副、载荷、速度、循环次数、润滑状态、关键尺寸和当前失效现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "运动形式、摩擦副材料、接触方式与润滑状态",
      "扭矩或载荷、速度、循环次数与接触压力",
      "磨损寿命、噪声、启动阻力、间隙变化与失效现象",
      "关键尺寸、温度、介质、粉尘、模具阶段与装配方式",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "耐磨 POM — 面向重复接触与磨损寿命要求",
        keyUse:
          "齿轮、凸轮或滚轮在重复接触中以磨损量、寿命或间隙保持为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向启动阻力、噪声与运动顺畅性",
        keyUse:
          "轴套、导向环、套筒或滑块需要降低摩擦、噪声或粘滑时进入候选，并结合摩擦副与润滑状态比较。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "高抗冲 POM — 面向冲击载荷与低温韧性要求",
        keyUse:
          "运动机构同时承受装配冲击、突然载荷或较低温使用条件时进入候选，并核对刚性与尺寸要求。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "增强 POM — 面向载荷变形与尺寸控制",
        keyUse:
          "承载部件需要降低变形、提高刚性或改善尺寸保持时进入候选，同时评估纤维取向、摩擦副和磨损影响。",
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
        description:
          "齿面载荷、模数、转速、循环次数和噪声目标共同决定耐磨、低摩擦与尺寸稳定性的优先级。",
        imageAlt: "注塑精密齿轮部件组",
      },
      {
        label: "蜗轮",
        description:
          "持续滑动接触、减速比、温升与润滑条件决定摩擦、磨损和齿形保持的比较重点。",
        imageAlt: "注塑蜗轮轴部件",
      },
      {
        label: "滚轮",
        description:
          "径向载荷、轴孔配合、滚动或伴随滑动的接触状态决定磨损、圆度和运行稳定性要求。",
        imageAlt: "绿色注塑滚轮部件",
      },
      {
        label: "轴套",
        description:
          "轴材、表面状态、载荷、速度、间隙和润滑方式决定启动摩擦、磨损寿命与温升表现。",
        imageAlt: "注塑 POM 轴套部件组",
      },
      {
        label: "套筒",
        description:
          "同心度、压配量、滑动行程与拆装循环决定尺寸保持、表面接触和开裂风险。",
        imageAlt: "注塑套筒与轴套部件组",
      },
      {
        label: "导向环",
        description:
          "导向间隙、偏载、往复速度和表面接触决定运动顺畅性、磨耗和导向精度。",
        imageAlt: "注塑导向环部件",
      },
      {
        label: "滑块",
        description:
          "接触面积、载荷分布、行程、启动频率与粉尘环境决定粘滑、磨损和间隙变化。",
        imageAlt: "带黄铜嵌件的注塑滑块部件",
      },
      {
        label: "凸轮",
        description:
          "轮廓精度、接触应力、冲击载荷和循环次数决定表面耐久性与执行运动的一致性。",
        imageAlt: "米白色注塑凸轮齿轮部件",
      },
    ],
    engineeringFit: [
      {
        title: "先确认运动与接触条件",
        items: [
          "旋转、往复、滚动或滑动，以及摩擦副材料与表面状态",
          "扭矩、径向或轴向载荷、速度、循环次数与接触压力",
          "干摩擦、初始润滑或持续润滑，以及粉尘和介质影响",
          "当前磨损、噪声、粘滑、温升、开裂或间隙变化现象",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "摩擦与磨损表现需要与刚性、韧性和尺寸稳定性一起比较",
          "收缩、翘曲、同心度和纤维取向会改变实际配合与接触状态",
          "低摩擦方向不等于所有摩擦副都能获得相同结果",
          "增强或增韧方向仍需核对表面磨耗、噪声和加工条件",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用目标载荷、速度、间隙和寿命条件定义样件测试方式",
          "比较候选牌号的 TDS、尺寸数据与可提供的样品状态",
          "在实际摩擦副、模具和装配条件下观察磨损与运动表现",
          "根据测试结果收窄牌号，而不是仅凭单一摩擦系数判断",
        ],
      },
    ],
  },
} satisfies LocalizedApplicationDetailSliceAMessages;

export default messages;
