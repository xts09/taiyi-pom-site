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
        title: "介质、压力、运动与密封关系",
        visualDescription:
          "阀芯、阀筒、壳体和叶轮面对的介质、压力与运动方式不同。水温、压力、添加剂、启闭循环、配合间隙和密封位置，影响低摩擦、耐磨或增强材料的适用性。",
        basicDescription:
          "POM 水路部件的选型需兼顾介质、温度、压力、运动、密封和尺寸目标。",
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
          "介质、压力、启闭方式、密封界面和装配尺寸，决定了水路部件对摩擦、磨损、刚性和尺寸控制的不同要求。",
        cardLabel: "水路部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按水路工况缩小材料范围",
        description:
          "先按主导失效选择配方，再用下列基准牌号建立首轮对比；完整物性与成型条件见对应 TDS。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "获取候选牌号与试模要点",
        description:
          "提交零件图或用途、当前失效现象和现用牌号，附已知工况。我们将提供候选牌号对比建议、TDS 资料与试模样品支持，并列出该零件的验证重点。",
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
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "耐磨 POM — 面向重复启闭与旋转接触",
        keyUse:
          "重复启闭磨耗先从 EPTL402 的 PTFE 润滑体系切入，并与 MoS₂ 改性的 EMS102／EMS162 对比。重点检查目标水温、介质接触后的间隙与密封，饮用水项目另核对应牌号资料。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "增强 POM — 面向压力变形、壳体刚性与尺寸控制",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
        shortLabel: "玻璃纤维增强 POM",
      },
    ],
    images: [
      {
        alt: "注塑聚合物阀芯与阀筒总成的 CAD 示意图",
        label: "阀芯与阀筒",
        description:
          "行程、压差、配合间隙和启闭次数，是评估摩擦、磨损与尺寸保持的重要条件。",
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
          "阀芯偏磨会改变间隙并增加启闭阻力。先平衡启动摩擦与密封配合，重点检查压差下的卡滞和循环磨耗。",
        imageAlt: "阀体与阀芯总成部件",
      },
      {
        label: "阀筒",
        description:
          "内孔失圆或温度引起的配合变化容易导致阀芯卡滞和泄漏。先控制圆度与尺寸保持，再核对密封接触区的变形。",
        imageAlt: "卫浴阀筒部件",
      },
      {
        label: "阀门内部部件",
        description:
          "薄壁流路充模不足会破坏配合面，局部收缩又可能引起翘曲。先权衡流动性与尺寸一致性，再检查熔接线和密封台阶。",
        imageAlt: "多种注塑阀门内部部件",
      },
      {
        label: "阀门功能部件",
        description:
          "滑动接触磨损会改变执行行程，热水与介质接触还可能影响尺寸。先比较摩擦与间隙保持，再复测暴露后的启闭力。",
        imageAlt: "阀杆与注塑阀门部件",
      },
      {
        label: "恒温阀体",
        description:
          "冷热循环引起的尺寸变化可能压缩滑动间隙。先平衡热尺寸保持与执行摩擦，再检查密封压缩量和阀芯回位。",
        imageAlt: "恒温阀体总成",
      },
      {
        label: "导向轮",
        description:
          "轴孔磨损会使导向轮偏摆，水中颗粒可能加重接触磨耗。先比较轴孔耐磨与启动阻力，再检查圆度和径向间隙。",
        imageAlt: "注塑水路控制导向轮",
      },
      {
        label: "阀门壳体部件",
        description:
          "持续压力可能使壳体蠕变，螺纹或压配处易集中装配应力。先权衡刚性与韧性，再检查承压后的密封位置和翘曲。",
        imageAlt: "水路控制阀门壳体与阀筒部件",
      },
      {
        label: "泵叶轮",
        description:
          "叶片变形会改变流量与动平衡，轴孔偏磨会增加振动。先比较弯曲刚性与尺寸保持，再检查介质暴露后的叶形和轴配合。",
        imageAlt: "注塑 POM 离心泵叶轮",
      },
    ],
    engineeringFit: [
      {
        title: "水路与运动条件",
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
          "齿轮、传动轮、导水管和排水阀承担的任务不同。材料要求随洗涤或脱水阶段、载荷、速度、振动、水温、洗涤剂接触、密封和装配条件而变化。",
        basicDescription:
          "部件功能、洗涤循环、载荷、介质、密封和尺寸目标，决定了候选 POM 牌号需要满足的条件。",
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
          "洗衣机内部同时存在传动、旋转、水路和启闭部件，各类部件对磨损、摩擦、刚性、介质适用性和装配尺寸的要求不同。",
        cardLabel: "洗衣机部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按洗涤循环与部件任务缩小材料范围",
        description:
          "先按主导失效选择配方，再用下列基准牌号建立首轮对比；完整物性与成型条件见对应 TDS。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "获取候选牌号与试模要点",
        description:
          "提交零件图或用途、当前失效现象和现用牌号，附已知工况。我们将提供候选牌号对比建议、TDS 资料与试模样品支持，并列出该零件的验证重点。",
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
          "没有突出的磨损、电气或冲击缺口时，先以基础 POM 建立成型与尺寸基准。出现卡滞、齿面磨耗或承载变形后，再分别转入润滑或增强配方对比。",
        shortLabel: "基础 POM 树脂",
      },
      {
        label: "耐磨 POM — 面向齿轮、轴套与重复运动界面",
        keyUse:
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向启动阻力、噪声与顺畅运动",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "增强 POM — 面向刚性、载荷变形与尺寸保持",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "洗涤工况定制方向 — 协调介质、运动与尺寸要求",
        keyUse:
          "当标准牌号无法同时满足摩擦、尺寸、颜色或介质接触要求时，提交未达标项目与现用牌号，获取配方调整建议和试模验证重点。",
        shortLabel: "洗涤工况定制配方",
      },
    ],
    images: [
      {
        alt: "用于洗衣机滚筒传动的注塑聚合物齿轮与保持件",
        label: "滚筒传动齿轮",
        description:
          "扭矩、转速、启停和振动循环会影响齿面磨损、噪声与尺寸表现。",
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
          "脱水启停会叠加冲击和循环载荷，齿面磨损又会增加传动噪声。先权衡齿根承载与耐磨，再核对振动后的装配间隙。",
        imageAlt: "注塑洗衣机滚筒传动齿轮与保持件",
      },
      {
        label: "导水管",
        description:
          "多接口收缩不一致会偏移密封位置，热水循环还会改变配合。先平衡充模与翘曲控制，再检查洗涤剂暴露后的泄漏。",
        imageAlt: "带四耳安装法兰的白色注塑洗衣机导水管",
      },
      {
        label: "传动轮",
        description:
          "花键和轴孔承受交变扭矩，冲击与应力集中易引起开裂。先比较扭转载荷保持与韧性，再检查同心度和配合松动。",
        imageAlt: "带径向加强筋、花键轮毂与传动轴的注塑洗衣机传动轮",
      },
      {
        label: "减速齿轮总成",
        description:
          "轮毂偏心和齿面磨损会累积为侧隙与异响。先权衡齿形精度与耐磨，再检查轴孔压配区的开裂风险。",
        imageAlt: "带双轮级与花键轴的注塑洗衣机减速齿轮总成",
      },
      {
        label: "排水泵壳体",
        description:
          "泵腔和法兰翘曲会破坏密封接触，热水与洗涤剂接触会增加尺寸控制难度。先比较刚性与韧性，再检查压差下的密封。",
        imageAlt: "带凸起进水颈与下部出水腔的注塑洗衣机排水泵壳体",
      },
      {
        label: "进水阀连接管",
        description:
          "倒钩和法兰处容易集中装配应力，温度循环可能松动接头。先平衡卡接韧性与尺寸保持，再复测压力循环后的拔脱力和泄漏。",
        imageAlt: "带弯曲管体、密封法兰与倒刺软管端的注塑洗衣机进水阀连接管",
      },
      {
        label: "排水控制阀",
        description:
          "阀芯摩擦或磨损会改变启闭行程，颗粒可能引起卡滞。先控制启动阻力与间隙增长，再检查不同水温下的关闭密封。",
        imageAlt: "带圆形阀体、出水口与执行器连杆的注塑洗衣机排水控制阀",
      },
      {
        label: "排水阀总成",
        description:
          "重复关闭会磨损配合面，密封座变形则可能造成渗漏。先平衡耐磨与尺寸保持，再核对洗涤剂暴露后的回位和泄漏。",
        imageAlt: "带螺纹盖、密封阀体与执行连杆的注塑洗衣机排水阀总成",
      },
    ],
    engineeringFit: [
      {
        title: "部件任务与洗涤循环",
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
        title: "暴露环境、温度范围与机械载荷",
        visualDescription:
          "喷头、割草机齿轮、线盘和壳体卡扣承受的日照、温差、水尘、冲击与重复运动不同。抗冲、耐候、耐磨或定制材料的评估需结合安装位置、暴露时长、温度范围、载荷、介质和寿命目标。",
        basicDescription:
          "户外暴露、温度、载荷、水尘介质与寿命目标，是户外 POM 部件选型的主要条件。",
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
          "户外部件的失效风险与暴露位置、温度循环、冲击载荷、水尘介质、运动方式和尺寸要求有关。以下部件示例对应不同的材料评估重点。",
        cardLabel: "户外设备部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按户外工况缩小材料范围",
        description:
          "先按主导失效选择配方，再用下列基准牌号建立首轮对比；完整物性与成型条件见对应 TDS。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "获取候选牌号与试模要点",
        description:
          "提交零件图或用途、当前失效现象和现用牌号，附已知工况。我们将提供候选牌号对比建议、TDS 资料与试模样品支持，并列出该零件的验证重点。",
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
          "装配冲击、突然载荷或低温开裂优先从增韧 POM EHI402T 切入；重点平衡缺口冲击与刚性，并复测卡扣保持力或传动间隙。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "耐紫外线 POM — 面向明确的日照与耐候要求",
        keyUse:
          "外露部件先以 ETM090U 耐候 POM 建立基准；同时要求冲击韧性与哑光外观时，将 EDR180U 纳入对比。重点检查光照后的颜色、开裂和低温装配保持。",
        shortLabel: "耐紫外线 POM",
      },
      {
        label: "耐磨 POM — 面向重复运动与接触磨损",
        keyUse:
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "户外工况定制方向 — 面向多因素同时约束",
        keyUse:
          "当标准牌号无法同时满足摩擦、尺寸、颜色或介质接触要求时，提交未达标项目与现用牌号，获取配方调整建议和试模验证重点。",
        shortLabel: "户外工况定制配方",
      },
    ],
    images: [
      {
        alt: "塑料农业喷头部件",
        label: "喷头",
        description:
          "磨损、尺寸保持与耐候表现需结合水压、旋转方式、水质、日照和温度范围评估。",
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
          "砂粒可能加重喷头转动界面磨损，光照和温差会影响外露结构。先平衡低转矩与耐磨，再检查流道尺寸和喷洒稳定性。",
        imageAlt: "农业喷头部件",
      },
      {
        label: "割草机齿轮",
        description:
          "突然堵转或撞击会抬高齿根应力，砂尘又会加重齿面磨损。先权衡冲击韧性与承载，再比较受污染工况下的磨耗。",
        imageAlt: "注塑户外设备割草机齿轮",
      },
      {
        label: "打草机线盘",
        description:
          "线材拉扯和碰撞会冲击轮缘，出线区域磨损会影响送线。先比较冲击韧性与表面耐磨，再检查高速旋转的尺寸和平衡。",
        imageAlt: "黑色注塑 POM 打草机线盘",
      },
      {
        label: "手拉启动器总成",
        description:
          "拉绳冲击集中于棘爪和绳槽，回弹循环会累积疲劳。先权衡低温韧性与耐磨，再核对回位顺畅性和棘爪保持。",
        imageAlt: "带拉手的注塑户外设备手拉启动器总成",
      },
      {
        label: "灌溉连接件",
        description:
          "插拔磨损会降低接头保持力，密封槽变形会引起泄漏。先平衡卡接韧性与尺寸保持，再检查压力和光照循环后的密封。",
        imageAlt: "用于灌溉设备的注塑快速管路连接件",
      },
      {
        label: "灌溉脉冲轮",
        description:
          "水中颗粒易磨损叶片与支撑界面，叶形变化会影响转矩。先比较耐磨与叶片刚性，再检查轴孔间隙和输出稳定性。",
        imageAlt: "带弧形驱动叶片的米白色注塑灌溉脉冲轮",
      },
      {
        label: "打草机驱动头",
        description:
          "碰撞会冲击锁止结构，出线口磨损会扰乱送线。先权衡抗冲击与耐磨，再核对线盘保持力和旋转间隙。",
        imageAlt: "带绿色尼龙线的黑色注塑户外打草机驱动头",
      },
      {
        label: "耐候壳体卡扣",
        description:
          "卡臂根部承受装配应变，光照老化后更需关注开裂与褪色。先比较耐候配方的韧性保持与外观，再复测低温拆装。",
        imageAlt: "带卡扣结构的注塑户外设备壳体卡扣",
      },
    ],
    engineeringFit: [
      {
        title: "暴露条件与部件任务",
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
        title: "纱线接触、运行速度与表面要求",
        visualDescription:
          "导纱器、综丝、导向轮和滑块接触的纤维、张力与运动方式不同。纱线或织物、速度、张力、接触路径、表面要求和清洁环境，影响耐磨、低摩擦、增强或定制材料的选择。",
        basicDescription:
          "纺织工序、接触材料、速度、张力、表面与尺寸目标，构成这类部件的 POM 选型要求。",
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
          "纤维接触、张力、速度、表面状态和尺寸精度，决定了纺织部件对磨损、毛羽、摩擦和收缩控制的不同要求。",
        cardLabel: "纺织部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按纺织工况缩小材料范围",
        description:
          "先按主导失效选择配方，再用下列基准牌号建立首轮对比；完整物性与成型条件见对应 TDS。",
        keyUseLabel: "何时考虑",
        imageAltSuffix: "材料颗粒",
      },
      evaluation: {
        eyebrow: "下一步",
        title: "获取候选牌号与试模要点",
        description:
          "提交零件图或用途、当前失效现象和现用牌号，附已知工况。我们将提供候选牌号对比建议、TDS 资料与试模样品支持，并列出该零件的验证重点。",
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
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向纱线顺滑通过与运动阻力",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "增强 POM — 面向刚性、收缩与重复对位要求",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
        shortLabel: "玻璃纤维增强 POM",
      },
      {
        label: "纺织工况定制方向 — 协调硬度、收缩、磨损与表面要求",
        keyUse:
          "当标准牌号无法同时满足摩擦、尺寸、颜色或介质接触要求时，提交未达标项目与现用牌号，获取配方调整建议和试模验证重点。",
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
          "接触面沟槽或毛刺会增加毛羽和断纱。先平衡表面耐磨与低摩擦，再按实际纱线检查张力波动和表面损伤。",
        imageAlt: "注塑纺织机械导向部件",
      },
      {
        label: "综丝束",
        description:
          "导槽磨损会改变分纱位置，反复摆动可能使细长结构疲劳。先比较槽面耐磨与结构韧性，再检查直线度和分纱稳定性。",
        imageAlt: "带重复椭圆综眼的浅黄色纺织综丝束",
      },
      {
        label: "提综器",
        description:
          "摆动轴孔易偏磨，启停冲击会使拨动端疲劳。先权衡冲击韧性与轴孔耐磨，再检查动作行程和回位精度。",
        imageAlt: "带黑色转轴底座与弧形灰色提升臂的纺织提综器",
      },
      {
        label: "气流纺导向件",
        description:
          "窄通道磨损或积尘会提高纤维通过阻力。先比较表面保持与摩擦阻力，再检查通道磨耗和纤维擦伤。",
        imageAlt: "带收窄纤维通道的米白色注塑气流纺导向件",
      },
      {
        label: "纺织导向轮",
        description:
          "齿形磨损和轮毂偏心会改变送纱节奏，夹纱面过粗又会损伤纱线。先权衡齿形保持与接触摩擦，再追踪张力波动。",
        imageAlt: "带中央轴承的黑色注塑纺织导向轮",
      },
      {
        label: "筒管座",
        description:
          "反复装卸会磨损卡接面，转速升高会放大轴孔偏心。先平衡夹持韧性与孔径保持，再检查筒管定位和振动。",
        imageAlt: "黑色注塑 POM 筒管座转接件",
      },
      {
        label: "纺锭支撑件",
        description:
          "支撑件变形会改变锭筒定位，转轴接触磨耗又会增加振动。先比较支撑刚性与接触耐磨，再核对旋转后的装配间隙。",
        imageAlt: "带法兰底座与倾斜空心套筒的象牙色注塑纺锭支撑件",
      },
      {
        label: "纺织滑块",
        description:
          "低速往复易产生粘滑，纤维粉尘会改变摩擦并加快间隙增长。先按导轨材质匹配润滑体系，再比较启动阻力和磨耗。",
        imageAlt: "黑色注塑 POM 纺织导向滑块",
      },
    ],
    engineeringFit: [
      {
        title: "纺织工序与接触条件",
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
