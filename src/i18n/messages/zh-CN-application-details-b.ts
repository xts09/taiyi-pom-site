import type { LocalizedApplicationDetailSliceBMessages } from "@/i18n/applicationTypes";
import applicationIndexMessages from "./zh-CN-applications.ts";

const messages = {
  "water-control": {
    title: applicationIndexMessages.cards["water-control"].title,
    description: applicationIndexMessages.cards["water-control"].description,
    heroImageAlt: applicationIndexMessages.cards["water-control"].imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "水路控制选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "水路控制部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先明确介质、压力、运动与密封关系",
        visualDescription:
          "阀芯、阀筒、壳体和叶轮面对的介质、压力与运动方式不同。先明确水温、压力、添加剂、启闭循环、配合间隙和密封位置，再判断低摩擦、耐磨或增强方向。",
        basicDescription:
          "先明确介质、温度、压力、运动、密封和尺寸目标，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "水路控制选材场景",
        keywordsAria: "水路控制选材关键输入",
        galleryAria: "典型水路控制部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["介质与温度", "压力与循环", "运动与密封", "尺寸与装配"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "水路部件的材料方向由介质、压力、启闭方式、密封界面和装配尺寸共同决定。先找到接近的部件，再明确摩擦、磨损、刚性和尺寸控制的重点。",
        cardLabel: "水路部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按水路工况缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有水路介质和压力条件通用适用。具体牌号仍需结合介质、温度、密封、尺寸和样件结果确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的水路条件开始",
        description:
          "提供介质、水温、压力、启闭或旋转方式、循环次数、密封位置、关键尺寸和当前泄漏或磨损现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "水、混合介质或添加剂类型，工作与峰值温度",
      "工作压力、压差、启闭或旋转方式、循环次数与载荷",
      "阀芯和阀筒配合、密封位置、间隙、摩擦与泄漏现象",
      "关键尺寸、收缩、翘曲、螺纹或压配结构与模具阶段",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "低摩擦 POM — 面向阀芯、阀筒与导向界面的顺畅运动",
        keyUse:
          "滑动或旋转水路部件以启动阻力、粘滑、噪声或执行稳定性为主要问题时进入候选。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "耐磨 POM — 面向重复启闭与旋转接触",
        keyUse:
          "阀门、导向轮或叶轮支撑界面以重复运动磨损和间隙保持为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "增强 POM — 面向压力变形、壳体刚性与尺寸控制",
        keyUse:
          "壳体、支撑或叶轮部件需要控制载荷变形、收缩和装配位置时进入候选，并评估纤维取向影响。",
        shortLabel: "玻璃纤维增强 POM",
      },
    ],
    images: [
      {
        alt: "注塑聚合物阀芯与阀筒总成的 CAD 示意图",
        label: "阀芯与阀筒",
        description:
          "先明确行程、压差、配合间隙和启闭次数，再判断摩擦、磨损与尺寸重点。",
      },
      {
        alt: "水路控制阀体内部注塑聚合物功能部件的 CAD 示意图",
        label: "阀体总成",
        description:
          "结合压力、接口、密封位置、介质和装配方式确定刚性与配合要求。",
      },
      {
        alt: "注塑聚合物离心泵叶轮的 CAD 示意图",
        label: "泵叶轮",
        description:
          "根据转速、水力载荷、介质、动平衡和轮廓尺寸确定材料优先级。",
      },
      {
        alt: "恒温控制阀内部注塑聚合物部件的 CAD 示意图",
        label: "恒温控制阀",
        description:
          "温度范围、执行行程、启闭循环和密封配合共同决定运动与装配稳定性。",
      },
    ],
    parts: [
      {
        label: "阀芯总成",
        description:
          "行程、压差、配合间隙、密封邻近位置和启闭次数决定运动阻力、磨损与尺寸稳定性。",
        imageAlt: "阀体与阀芯总成部件",
      },
      {
        label: "阀筒",
        description:
          "内孔尺寸、圆度、装配方式、密封面关系和温度变化决定阀芯运动与泄漏风险。",
        imageAlt: "卫浴阀筒部件",
      },
      {
        label: "阀门内部部件",
        description:
          "复杂流路、薄壁、配合面和重复运动决定成型精度、翘曲与装配一致性要求。",
        imageAlt: "多种注塑阀门内部部件",
      },
      {
        label: "阀门功能部件",
        description:
          "执行方式、滑动结构、介质、水温和载荷决定摩擦、磨损与长期尺寸保持要求。",
        imageAlt: "阀杆与注塑阀门部件",
      },
      {
        label: "恒温阀体",
        description:
          "冷热循环、执行行程、装配公差和密封位置决定温度变化下的运动与配合稳定性。",
        imageAlt: "恒温阀体总成",
      },
      {
        label: "导向轮",
        description:
          "轴材、径向载荷、转速、介质和间隙决定滚动阻力、磨损与圆度保持。",
        imageAlt: "注塑水路控制导向轮",
      },
      {
        label: "阀门壳体部件",
        description:
          "壁厚、压力、螺纹或压配结构、收缩和翘曲决定壳体刚性与密封装配位置。",
        imageAlt: "水路控制阀门壳体与阀筒部件",
      },
      {
        label: "泵叶轮",
        description:
          "转速、介质、叶片几何、轴配合和平衡要求决定刚性、尺寸与旋转稳定性。",
        imageAlt: "注塑 POM 离心泵叶轮",
      },
    ],
    engineeringFit: [
      {
        title: "先确认水路与运动条件",
        items: [
          "介质成分、水温、工作压力、峰值压力与温度循环",
          "滑动、旋转或启闭方式，行程、载荷、速度和循环次数",
          "密封位置、配合间隙、泄漏、卡滞、磨损或噪声现象",
          "关键尺寸、螺纹或压配、收缩、翘曲和模具阶段",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "摩擦与磨损需要和介质、温度、压力及尺寸稳定性一起比较",
          "低摩擦方向不能替代实际阀芯、阀筒和密封结构验证",
          "增强方向会改变收缩、翘曲、表面和各向异性表现",
          "材料数据不能单独证明特定水路总成的密封或寿命",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用实际介质、温度、压力、行程和循环定义样件测试条件",
          "比较候选牌号的 TDS、尺寸数据、样品与文件可用性",
          "在实际密封、配合、模具和装配条件下观察启闭与泄漏",
          "根据尺寸、运动和循环结果收窄牌号并记录待确认条件",
        ],
      },
    ],
  },
  "washing-machine-components": {
    title: "洗衣机零部件",
    shortTitle:
      applicationIndexMessages.cards["washing-machine-components"].title,
    description:
      applicationIndexMessages.cards["washing-machine-components"].description,
    heroImageAlt:
      applicationIndexMessages.cards["washing-machine-components"].imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "洗衣机部件选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "洗衣机部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先区分传动、水路与排水部件的工况",
        visualDescription:
          "齿轮、传动轮、导水管和排水阀承担的任务不同。先明确洗涤或脱水阶段、载荷、速度、振动、水温、洗涤剂接触、密封和装配要求，再判断材料方向。",
        basicDescription:
          "先明确部件功能、洗涤循环、载荷、介质、密封和尺寸目标，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "洗衣机部件选材场景",
        keywordsAria: "洗衣机部件选材关键输入",
        galleryAria: "典型洗衣机部件",
        reviewPointFallback: "选材输入",
        reviewTitles: [
          "部件与循环",
          "载荷与振动",
          "水温与洗涤剂",
          "密封与装配",
        ],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "洗衣机内部同时存在传动、旋转、水路和启闭部件。先找到接近的部件，再明确磨损、摩擦、刚性、介质和装配尺寸的主次。",
        cardLabel: "洗衣机部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按洗涤循环与部件任务缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有洗衣机部件通用适用。具体牌号仍需结合载荷、振动、水温、洗涤剂、密封和样件结果确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的洗涤循环和部件要求开始",
        description:
          "提供部件功能、洗涤或脱水阶段、载荷、速度、振动、水温、洗涤剂、密封位置、关键尺寸和当前失效现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "部件功能，所在洗涤、漂洗、排水或脱水阶段",
      "扭矩或载荷、速度、振动、启停与循环次数",
      "水温、洗涤剂或清洁剂接触时间与当前介质现象",
      "密封位置、关键尺寸、配合、翘曲、模具阶段与装配方式",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "基础 POM — 面向一般结构与成型要求的起始比较",
        keyUse:
          "部件没有明确的增强、耐磨或低摩擦主导需求时，可先作为基础性能和加工方向比较。",
        shortLabel: "基础 POM 树脂",
      },
      {
        label: "耐磨 POM — 面向齿轮、轴套与重复运动界面",
        keyUse:
          "传动、旋转或启闭部件以磨损寿命、齿面保持或间隙变化为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向启动阻力、噪声与顺畅运动",
        keyUse:
          "轴套、导向件、阀门或其他配合界面需要降低摩擦、噪声或粘滑时进入候选。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "增强 POM — 面向刚性、载荷变形与尺寸保持",
        keyUse:
          "传动轮、壳体或支撑结构需要提高刚性、控制翘曲和保持装配位置时进入候选。",
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "洗涤工况定制方向 — 协调介质、运动与尺寸要求",
        keyUse:
          "标准方向无法同时满足洗涤剂接触、载荷、颜色、摩擦或尺寸目标时，再结合明确循环条件讨论配方调整。",
        shortLabel: "洗涤工况定制配方",
      },
    ],
    images: [
      {
        alt: "用于洗衣机滚筒传动的注塑聚合物齿轮与保持件",
        label: "滚筒传动齿轮",
        description:
          "先明确扭矩、转速、启停和振动循环，再判断齿面磨损、噪声与尺寸重点。",
      },
      {
        alt: "注塑聚合物滚筒轴承保持件与轴套总成",
        label: "滚筒轴承保持件",
        description:
          "结合载荷、振动、轴套配合和润滑条件确定摩擦、磨损与支撑要求。",
      },
      {
        alt: "用于洗衣机的注塑聚合物排水泵叶轮",
        label: "排水泵叶轮",
        description:
          "根据转速、水力载荷、洗涤剂、水温和轮廓尺寸确定刚性与平衡重点。",
      },
      {
        alt: "用于洗衣机悬挂机构的注塑聚合物导向与耐磨部件",
        label: "悬挂导向件",
        description:
          "振动幅度、循环次数、接触载荷和配合间隙共同决定滑动与导向表现。",
      },
    ],
    parts: [
      {
        label: "滚筒传动齿轮",
        description:
          "扭矩、转速、启停、循环次数和振动决定齿面磨损、噪声与齿轮尺寸保持要求。",
        imageAlt: "注塑洗衣机滚筒传动齿轮与保持件",
      },
      {
        label: "导水管",
        description:
          "接口对位、密封座、壁厚、水温、洗涤剂和重复装配决定尺寸与密封稳定性。",
        imageAlt: "带四耳安装法兰的白色注塑洗衣机导水管",
      },
      {
        label: "传动轮",
        description:
          "轮毂同心度、轴啮合、径向刚性、扭矩和脱水振动决定变形与传动稳定性。",
        imageAlt: "带径向加强筋、花键轮毂与传动轴的注塑洗衣机传动轮",
      },
      {
        label: "减速齿轮总成",
        description:
          "齿轮级对位、轮毂同心度、轴啮合、载荷和循环次数决定磨损、噪声与稳定减速。",
        imageAlt: "带双轮级与花键轴的注塑洗衣机减速齿轮总成",
      },
      {
        label: "排水泵壳体",
        description:
          "进出口配合、泵腔压力、密封座、水温、洗涤剂和壁厚决定刚性与排水装配稳定性。",
        imageAlt: "带凸起进水颈与下部出水腔的注塑洗衣机排水泵壳体",
      },
      {
        label: "进水阀连接管",
        description:
          "倒刺接头保持力、接口对位、弯曲间隙、水压和温度循环决定连接与密封稳定性。",
        imageAlt: "带弯曲管体、密封法兰与倒刺软管端的注塑洗衣机进水阀连接管",
      },
      {
        label: "排水控制阀",
        description:
          "阀座配合、执行器行程、排水介质、温度和启闭次数决定运动、磨损与关闭稳定性。",
        imageAlt: "带圆形阀体、出水口与执行器连杆的注塑洗衣机排水控制阀",
      },
      {
        label: "排水阀总成",
        description:
          "密封啮合、螺纹配合、执行器行程、洗涤剂残留和重复关闭决定泄漏与装配表现。",
        imageAlt: "带螺纹盖、密封阀体与执行连杆的注塑洗衣机排水阀总成",
      },
    ],
    engineeringFit: [
      {
        title: "先确认部件任务与洗涤循环",
        items: [
          "部件位于洗涤、漂洗、排水或脱水阶段，以及承担的功能",
          "扭矩、载荷、转速、启停、振动、冲击和循环次数",
          "水温、洗涤剂或清洁剂、接触时间与清洗后的残留环境",
          "密封、接口、关键尺寸、收缩、翘曲和装配方式",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "传动磨损、摩擦和噪声需要与刚性、韧性和尺寸保持一起比较",
          "水温与洗涤剂接触需要按实际浓度、时间和循环条件验证",
          "增强方向会改变收缩、翘曲、表面和装配间隙",
          "基础或定制方向不能替代实际模具、密封和整机循环测试",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用目标洗涤循环、载荷、速度、振动和介质定义样件测试条件",
          "比较候选牌号的 TDS、尺寸数据、样品与文件可用性",
          "在实际模具、装配、密封和水路条件下观察运行与泄漏",
          "根据整机循环、磨损、尺寸和介质结果收窄牌号或调整方向",
        ],
      },
    ],
  },
  "outdoor-equipment": {
    title: applicationIndexMessages.cards["outdoor-equipment"].title,
    description:
      applicationIndexMessages.cards["outdoor-equipment"].description,
    heroImageAlt: applicationIndexMessages.cards["outdoor-equipment"].imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "户外设备选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "户外设备部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先明确暴露环境、温度范围与机械载荷",
        visualDescription:
          "喷头、割草机齿轮、线盘和壳体卡扣承受的日照、温差、水尘、冲击与重复运动不同。先明确安装位置、暴露时长、温度范围、载荷、介质和寿命目标，再判断抗冲、耐候、耐磨或定制方向。",
        basicDescription:
          "先明确户外暴露、温度、载荷、水尘介质与寿命目标，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "户外设备选材场景",
        keywordsAria: "户外设备选材关键输入",
        galleryAria: "典型户外设备部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["暴露与寿命", "温度与冲击", "水尘与介质", "尺寸与颜色"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "户外部件的材料方向由暴露位置、温度循环、冲击载荷、水尘介质、运动方式和尺寸要求共同决定。先找到接近的部件，再明确需要优先控制的失效现象。",
        cardLabel: "户外设备部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按户外工况缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有户外设备部件通用适用。具体牌号仍需结合暴露周期、温度、载荷、介质、颜色与样件结果确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的户外工况开始",
        description:
          "提供安装位置、日照与暴露时长、温度范围、载荷或冲击、水尘介质、关键尺寸、颜色要求和当前失效现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "安装位置、室外暴露时长、季节性与预期使用寿命",
      "最高与最低温度、温度循环、冲击、载荷和重复运动方式",
      "雨水、湿气、灰尘、泥沙、清洁剂或其他接触介质",
      "颜色与外观、关键尺寸、装配方式和当前开裂、磨损或变色现象",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "高抗冲 POM — 面向冲击、低温与装配应力",
        keyUse:
          "部件在低温、跌落、碰撞、启动冲击或卡扣装配中需要更高韧性时进入候选。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "耐紫外线 POM — 面向明确的日照与耐候要求",
        keyUse:
          "部件存在持续或周期性日照，并已明确暴露时长、颜色、外观或性能保持目标时进入候选，仍需按牌号与测试条件确认。",
        shortLabel: "耐紫外线 POM",
      },
      {
        label: "耐磨 POM — 面向重复运动与接触磨损",
        keyUse:
          "齿轮、线盘、喷头或导向件以重复旋转、滑动、磨粒进入或寿命为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "户外工况定制方向 — 面向多因素同时约束",
        keyUse:
          "当暴露、颜色、冲击、磨损、介质和尺寸要求同时存在时，根据明确的优先级建立定制方向；若阻燃或高温是主导条件，应先判断是否仍适合 POM。",
        shortLabel: "户外工况定制配方",
      },
    ],
    images: [
      {
        alt: "塑料农业喷头部件",
        label: "喷头",
        description:
          "先明确水压、旋转方式、水质、日照与温度范围，再判断磨损、尺寸与耐候重点。",
      },
      {
        alt: "塑料草坪设备部件",
        label: "草坪设备部件",
        description:
          "结合冲击、振动、启停、泥沙、水分与温度循环确定材料优先级。",
      },
      {
        alt: "用于耐用户外装配的塑料管夹部件",
        label: "管夹",
        description:
          "根据夹持载荷、装配应变、日照、温度和介质确定韧性与尺寸要求。",
      },
    ],
    parts: [
      {
        label: "喷头",
        description:
          "水压、旋转方式、水质、日照、温度和流路尺寸决定磨损、转动与喷洒稳定性。",
        imageAlt: "农业喷头部件",
      },
      {
        label: "割草机齿轮",
        description:
          "扭矩、转速、启停冲击、泥沙、温度和循环次数决定齿面磨损、噪声与尺寸保持要求。",
        imageAlt: "注塑户外设备割草机齿轮",
      },
      {
        label: "打草机线盘",
        description:
          "转速、线材拉力、碰撞、动平衡和轮廓尺寸决定冲击韧性、磨损与送线稳定性。",
        imageAlt: "黑色注塑 POM 打草机线盘",
      },
      {
        label: "手拉启动器总成",
        description:
          "拉绳路径、启动载荷、回弹循环、壳体刚性、低温和安装尺寸决定重复启动表现。",
        imageAlt: "带拉手的注塑户外设备手拉启动器总成",
      },
      {
        label: "灌溉连接件",
        description:
          "水压、接头保持力、密封面、重复装配、日照与水质决定连接和密封稳定性。",
        imageAlt: "用于灌溉设备的注塑快速管路连接件",
      },
      {
        label: "灌溉脉冲轮",
        description:
          "水流载荷、叶片轮廓、转速、水质和灌溉循环决定扭矩传递、磨损与转动稳定性。",
        imageAlt: "带弧形驱动叶片的米白色注塑灌溉脉冲轮",
      },
      {
        label: "打草机驱动头",
        description:
          "驱动啮合、紧固保持、送线间隙、转速、碰撞和温度决定传动、冲击与尺寸要求。",
        imageAlt: "带绿色尼龙线的黑色注塑户外打草机驱动头",
      },
      {
        label: "耐候壳体卡扣",
        description:
          "装配应变、保持力、壁厚、日照、温度循环与颜色要求决定韧性和长期卡接表现。",
        imageAlt: "带卡扣结构的注塑户外设备壳体卡扣",
      },
    ],
    engineeringFit: [
      {
        title: "先确认暴露与部件任务",
        items: [
          "安装位置、直射或间接日照、室外暴露时长与预期寿命",
          "最高与最低温度、温度循环、冲击、载荷和运动方式",
          "雨水、湿气、灰尘、泥沙、清洁剂、水质或其他介质",
          "关键尺寸、装配应变、颜色与外观以及当前失效现象",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "耐候不能只看材料名称，需要明确暴露周期、颜色与性能保持目标",
          "低温冲击、装配应力和长期载荷需要与刚性、蠕变和尺寸保持一起比较",
          "水尘或磨粒进入会改变摩擦副、磨损和运动稳定性",
          "定制方向不能替代实际颜色、样件、户外暴露与整机循环验证",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用目标暴露、温度、载荷、介质、颜色和寿命定义样件测试条件",
          "比较候选牌号的 TDS、耐候或冲击数据、样品与文件可用性",
          "在实际模具、装配、运动和户外环境中观察尺寸、磨损、开裂与变色",
          "根据暴露和整机循环结果收窄牌号，或判断是否需要调整材料体系",
        ],
      },
    ],
  },
  "textile-machinery": {
    title: applicationIndexMessages.cards["textile-machinery"].title,
    description:
      applicationIndexMessages.cards["textile-machinery"].description,
    heroImageAlt: applicationIndexMessages.cards["textile-machinery"].imageAlt,
    detailUi: {
      navigation: {
        ariaLabel: "纺织机械选材页面章节",
        tabsAriaLabel: "页面章节",
        mobileMenuLabel: "本页内容",
        scene: "选材起点",
        parts: "部件关注点",
        materials: "材料方向",
        evaluation: "下一步",
      },
      hero: {
        eyebrow: "纺织机械部件选材",
        primaryAction: "讨论您的应用",
        secondaryAction: "查找牌号数据与 TDS",
      },
      scene: {
        eyebrow: "选材起点",
        title: "先明确纱线接触、运行速度与表面要求",
        visualDescription:
          "导纱器、综丝、导向轮和滑块接触的纤维、张力与运动方式不同。先明确纱线或织物、速度、张力、接触路径、表面要求和清洁环境，再判断耐磨、低摩擦、增强或定制方向。",
        basicDescription:
          "先明确纺织工序、接触材料、速度、张力、表面与尺寸目标，再比较 POM 材料方向与具体牌号。",
        imageAltSuffix: "纺织机械选材场景",
        keywordsAria: "纺织机械选材关键输入",
        galleryAria: "典型纺织机械部件",
        reviewPointFallback: "选材输入",
        reviewTitles: ["纱线与工序", "速度与张力", "表面与磨损", "尺寸与环境"],
      },
      parts: {
        eyebrow: "典型部件",
        titleSuffix: "部件的材料关注点",
        description:
          "纺织部件的材料方向由纤维接触、张力、速度、表面状态和尺寸精度共同决定。先找到接近的部件，再明确磨损、毛羽、摩擦和收缩控制的重点。",
        cardLabel: "纺织部件",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按纺织工况缩小材料范围",
        description:
          "以下方向用于建立初步候选，不代表对所有纺织机械部件通用适用。具体牌号仍需结合纤维、张力、速度、表面和样件结果确认。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
        showMorePrefix: "查看更多",
        showMoreSuffix: "个材料方向",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "从已知的纺织工况开始",
        description:
          "提供纱线或纤维类型、工序、速度、张力、接触路径、表面要求、关键尺寸和当前磨损现象。我们可据此整理候选材料范围、待确认条件，以及牌号资料或样品安排。",
        action: "讨论您的应用",
      },
    },
    selectionItems: [
      "纱线、纤维或织物类型，工序位置与接触路径",
      "运行速度、张力、往复或旋转方式、循环时间与载荷",
      "表面粗糙度、毛羽或断丝现象、磨损、温升与静电情况",
      "关键尺寸、收缩、清洁介质、油剂、温湿度与装配方式",
    ],
    showSelectionInputs: true,
    materialDirections: [
      {
        label: "耐磨 POM — 面向连续纤维接触与重复运动",
        keyUse:
          "导纱、滑动或旋转部件以表面磨耗、轮廓保持或寿命为主要问题时进入候选。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向纱线顺滑通过与运动阻力",
        keyUse:
          "导向件、滚轮或滑块需要降低摩擦、张力波动、噪声或粘滑时进入候选。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "增强 POM — 面向刚性、收缩与重复对位要求",
        keyUse:
          "支撑件或执行部件需要提高刚性、降低变形或控制装配尺寸时进入候选，并评估纤维取向与表面影响。",
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "纺织工况定制方向 — 协调硬度、收缩、磨损与表面要求",
        keyUse:
          "现有标准方向无法同时满足表面接触、硬度、收缩、颜色或磨损目标时，再结合明确工况讨论配方调整。",
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
        description:
          "纤维类型、张力、速度、接触角和表面粗糙度决定纱线顺滑性、毛羽与导向面磨损。",
        imageAlt: "注塑纺织机械导向部件",
      },
      {
        label: "综丝束",
        description:
          "综眼尺寸、直线度、经纱张力和往复频率决定接触磨损、分纱稳定性与尺寸一致性。",
        imageAlt: "带重复椭圆综眼的浅黄色纺织综丝束",
      },
      {
        label: "提综器",
        description:
          "转轴配合、提升载荷、臂长、启停冲击和循环次数决定刚性、磨损与执行位置重复性。",
        imageAlt: "带黑色转轴底座与弧形灰色提升臂的纺织提综器",
      },
      {
        label: "气流纺导向件",
        description:
          "纤维通道、气流、粉尘、速度和表面状态决定纤维通过、积尘与通道磨耗表现。",
        imageAlt: "带收窄纤维通道的米白色注塑气流纺导向件",
      },
      {
        label: "纺织导向轮",
        description:
          "槽形轮廓、轴承配合、线速度、张力和连续运行温升决定纱线接触与旋转稳定性。",
        imageAlt: "带中央轴承的黑色注塑纺织导向轮",
      },
      {
        label: "筒管座",
        description:
          "筒管重量、装卸频率、转速、轴配合和冲击决定保持力、同心度与支撑耐久性。",
        imageAlt: "黑色注塑 POM 筒管座转接件",
      },
      {
        label: "纺锭支撑件",
        description:
          "法兰就位、套筒对位、轴间隙、转速和振动决定支撑刚性与重复旋转稳定性。",
        imageAlt: "带法兰底座与倾斜空心套筒的象牙色注塑纺锭支撑件",
      },
      {
        label: "纺织滑块",
        description:
          "导向间隙、载荷、行程、频率、粉尘和润滑状态决定粘滑、磨损与装配精度保持。",
        imageAlt: "黑色注塑 POM 纺织导向滑块",
      },
    ],
    engineeringFit: [
      {
        title: "先确认纺织工序与接触条件",
        items: [
          "纱线、纤维或织物类型，工序位置、接触角与导向路径",
          "速度、张力、载荷、往复或旋转方式与连续运行时间",
          "表面粗糙度、毛羽、断丝、积尘、磨损和温升现象",
          "关键尺寸、收缩、清洁介质、油剂、温湿度和装配方式",
        ],
      },
      {
        title: "比较材料时关注",
        items: [
          "纱线接触面的摩擦与磨损需要与刚性、硬度和表面状态一起比较",
          "收缩、翘曲和纤维取向会改变通道、综眼、轮廓和装配间隙",
          "低摩擦方向仍需在实际纤维、张力和速度下观察毛羽与温升",
          "定制方向需要先有明确目标，不能替代实际部件和工序验证",
        ],
      },
      {
        title: "形成候选后的下一步",
        items: [
          "用目标纤维、张力、速度、行程和寿命定义样件测试条件",
          "比较候选牌号的 TDS、收缩数据、表面状态与样品可用性",
          "在实际纱线、导向路径、清洁环境和装配条件下观察运行表现",
          "根据毛羽、磨损、温升和尺寸结果收窄牌号或讨论配方调整",
        ],
      },
    ],
  },
} satisfies LocalizedApplicationDetailSliceBMessages;

export default messages;
