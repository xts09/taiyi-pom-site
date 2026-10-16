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
        title: "部件功能与实际工况",
        visualDescription:
          "同一辆车上的齿轮、卡扣、导向件和壳体承担的任务不同。机构、载荷、运动、尺寸与环境条件决定了各类部件的 POM 材料需求。",
        basicDescription:
          "汽车零部件的 POM 选型需兼顾功能、工况、尺寸目标与资料需求。",
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
          "不同部件面对的载荷、运动、装配和环境条件并不相同。以下部件示例说明这些差异对应的材料性能要求。",
        cardLabel: "汽车部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按零部件要求缩小材料范围",
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
      "零部件功能、机构位置与主要失效现象",
      "载荷、速度、循环次数、摩擦副与噪声目标",
      "关键尺寸、配合间隙、收缩、翘曲与装配方式",
      "温度、介质、光照、颜色、文件与样品需求",
    ],
    showSelectionInputs: false,
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
          "装配冲击、突然载荷或低温开裂优先从增韧 POM EHI402T 切入；重点平衡缺口冲击与刚性，并复测卡扣保持力或传动间隙。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "耐磨 POM — 面向重复啮合与滑动接触",
        keyUse: "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向运动顺畅性与噪声控制",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "玻璃纤维增强 POM — 面向刚性与尺寸控制",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
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
          "滑动界面磨损会影响泵内运动，燃油接触后的尺寸变化会改变配合。先权衡耐磨与尺寸保持，介质验证按燃油类型和客户项目要求展开。",
        imageAlt: "汽车塑料燃油泵总成",
      },
      {
        label: "车窗升降器",
        description:
          "反复升降会磨损齿面和导向面，侧隙增加后易产生异响。先比较耐磨与低启动阻力，再检查换向冲击下的齿根表现。",
        imageAlt: "汽车塑料车窗升降器部件",
      },
      {
        label: "汽车卡扣与紧固件",
        description:
          "卡臂根部在装配时易产生应力集中，长期夹持又可能降低保持力。先平衡缺口韧性与蠕变，再复测低温拆装。",
        imageAlt: "汽车注塑卡扣与紧固件",
      },
      {
        label: "安全锁扣",
        description:
          "锁扣释放机构需避免卡滞，卡臂和配合面还要保持重复动作后的尺寸。先比较韧性与摩擦，再按客户规范核对释放行程和保持力。",
        imageAlt: "汽车注塑安全锁扣部件",
      },
      {
        label: "雨刮电机齿轮",
        description:
          "启停和堵转会抬高齿根载荷，长时间啮合则累积齿面磨损。先平衡承载与耐磨，再检查侧隙和调节噪声。",
        imageAlt: "带注塑聚合物齿轮的汽车雨刮电机总成",
      },
      {
        label: "座椅导向环",
        description:
          "偏载易造成单侧磨耗，间隙扩大后会降低导向精度。先比较低摩擦与耐磨，再检查重复调节后的配合。",
        imageAlt: "汽车内饰注塑座椅导向环部件",
      },
      {
        label: "换挡座",
        description:
          "频繁启闭易出现粘滑异响，配合面磨损又会改变手感。先平衡低启动阻力与尺寸保持，再比较循环后的操作力。",
        imageAlt: "汽车换挡座与连杆部件",
      },
      {
        label: "内后视镜底座",
        description:
          "卡接根部和薄壁区容易集中装配应力，长期受力会影响定位。先平衡韧性与刚性，再核对温度循环后的保持力。",
        imageAlt: "汽车注塑内后视镜底座部件",
      },
      {
        label: "雨刮臂部件",
        description:
          "重复折叠带来弯曲疲劳和冲击，户外暴露又会影响外观。先比较结构韧性与尺寸保持，再检查光照和温度循环后的连接。",
        imageAlt: "汽车注塑挡风玻璃雨刮臂部件",
      },
      {
        label: "燃油滤芯",
        description:
          "密封配合区磨损或燃油接触后的尺寸变化可能导致启闭异常。先平衡摩擦与尺寸保持，按燃油类型核对介质相容性。",
        imageAlt: "汽车燃油滤芯",
      },
      {
        label: "加油口盖总成",
        description:
          "锁止卡扣磨损会降低保持力，密封座变形会增加泄漏风险。先比较卡接韧性与尺寸保持，再核对启闭循环和燃油接触后的配合。",
        imageAlt: "汽车加油口盖总成部件",
      },
      {
        label: "电动车制动执行器部件",
        description:
          "高扭矩启停会叠加齿根受力与冲击，侧隙变化影响执行一致性。先平衡承载与耐磨，再按客户规范复测堵转和循环后的功能。",
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
        title: "电气功能、电阻目标与测试方法",
        visualDescription:
          "连接器、托盘、传动齿轮和抗静电精密件承担的电气与机械任务不同。材料选型需同时考虑绝缘、耗散或导电功能，以及电阻范围、测试条件、接地路径、尺寸和运动要求。",
        basicDescription:
          "电气功能、电阻与测试条件、机械载荷、尺寸和环境构成这类部件的 POM 选型要求。",
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
          "电子电气部件可能以绝缘、静电控制、尺寸保持或运动耐久为主。以下部件示例呈现电性能与刚性、摩擦和加工条件之间的选型关系。",
        cardLabel: "电子电气部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按电气功能与机械要求缩小材料范围",
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
          "先定义表面或体积电阻与接地路径，以 ECN1003B 导电 POM 作为电阻对比起点；需要抗静电配方时，按目标区间筛选 CNT 体系，并复测成型件电阻。",
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "碳纤维增强 POM — 协调刚性、尺寸与导电性能",
        keyUse:
          "需要兼顾结构刚性与导电功能时，从 ECF300（30% 碳纤维 POM）切入。分别核对流动与横向尺寸、电阻及接地点，避免只凭碳纤维标签确定电性能。",
        shortLabel: "碳纤维增强 POM",
      },
      {
        label: "耐磨 POM — 面向齿轮、滚轮与执行机构",
        keyUse:
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向运动阻力、噪声与顺畅执行",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "项目定制或替代材料判断 — 面向复合要求",
        keyUse:
          "复合电气与结构要求超出现有配方时，提交电阻、阻燃、绝缘与温度目标，获取材料体系和候选牌号建议；涉及阻燃或绝缘要求时同时筛选 PA6、PA66 或 PPA。",
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
          "薄壁缺料和熔接线会削弱插接结构，温湿变化又会影响端子定位。先平衡充模流动性与卡扣韧性，再核对电气间距和尺寸。",
        imageAlt: "六位注塑电气连接器壳体",
      },
      {
        label: "端子壳体",
        description:
          "保持结构易在装配时开裂，长期受力可能降低锁紧力。先权衡装配韧性与蠕变保持，再复测插拔后的间隙。",
        imageAlt: "两位注塑电气端子壳体",
      },
      {
        label: "复印机传动齿轮",
        description:
          "高速啮合与碳粉接触会加重齿面磨耗，侧隙变化则放大异响。先比较耐磨与齿形保持，再检查连续运行温升。",
        imageAlt: "带注塑聚合物传动齿轮的复印机驱动总成",
      },
      {
        label: "碳粉盒传动部件",
        description:
          "支撑孔偏磨会使传动轴偏心，粉尘下干摩擦容易产生卡滞。先平衡摩擦与孔径保持，再复测补粉循环后的转矩。",
        imageAlt: "带注塑传动支撑部件的碳粉盒总成",
      },
      {
        label: "IC 搬运托盘",
        description:
          "托盘翘曲会影响堆叠定位，电阻漂移可能破坏静电保护。先定义成型件电阻范围，再平衡平面度与冲击韧性。",
        imageAlt: "带重复元件穴位与手持开口的注塑 IC 搬运托盘",
      },
      {
        label: "面板安装式信号连接器",
        description:
          "插拔和线缆弯折会将应力集中到锁扣与出线口。先平衡卡扣韧性与夹持保持力，再检查安装后的电气间距。",
        imageAlt: "带注塑插头与线缆应力释放结构的面板安装式信号连接器",
      },
      {
        label: "机器人关节齿轮箱",
        description:
          "反复换向会叠加齿根疲劳和支撑间隙，影响回位精度。先平衡传动刚性与冲击韧性，再追踪齿面和支撑孔磨耗。",
        imageAlt: "带注塑齿轮与轴承支撑部件的机器人关节齿轮箱",
      },
      {
        label: "抗静电精密部件",
        description:
          "接地不连续和成型取向可能造成局部电阻偏差。先锁定表面或体积电阻的测试方法，再比较尺寸一致性与磨损后的电性能。",
        imageAlt: "精密注塑电子电气部件",
      },
    ],
    engineeringFit: [
      {
        title: "电气功能与测试条件",
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
        title: "输送负载、运动界面与现场条件",
        visualDescription:
          "链板、链节、滚轮和导轨承担的负载与接触方式不同。输送物、线速、启停、积放、销轴配合、清洁环境和静电目标共同影响候选材料的选择。",
        basicDescription:
          "输送任务、负载、节拍、接触界面和现场环境，是比较 POM 材料与牌号的依据。",
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
          "链节啮合、销轴配合、载荷分布、线速和现场环境，决定了输送部件对磨损、摩擦、刚性或静电控制的不同要求。",
        cardLabel: "输送部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按输送任务缩小材料范围",
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
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向积放阻力与运行顺畅性",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "导电 / 抗静电 POM — 面向有明确静电控制目标的输送线",
        keyUse:
          "先定义表面或体积电阻与接地路径，以 ECN1003B 导电 POM 作为电阻对比起点；需要抗静电配方时，按目标区间筛选 CNT 体系，并复测成型件电阻。",
        shortLabel: "导电 / 抗静电 POM",
      },
      {
        label: "增强 POM — 面向承载变形与重复对位要求",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
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
          "销孔磨损会累积为节距增长，转弯处滑移会增加驱动力。先比较销孔耐磨与导轨摩擦，再检查整链节距变化。",
        imageAlt: "注塑模块化输送链板部件",
      },
      {
        label: "高载荷输送链",
        description:
          "载荷集中于链板与销孔，持续受力易形成蠕变，启停又带来疲劳。先平衡刚性与冲击韧性，再对比销孔磨耗。",
        imageAlt: "黑色注塑输送链节部件",
      },
      {
        label: "输送带分段模块",
        description:
          "模块翘曲和热胀会扰乱拼接间隙，边缘擦碰又会加快磨损。先控制平面度与收缩方向，再核对转弯和温度循环后的间隙。",
        imageAlt: "注塑分段式输送带部件",
      },
      {
        label: "抗静电防滑输送链板",
        description:
          "夹持区磨损既影响抓取定位，也可能改变静电泄放路径。先定义电阻范围与接地方式，再平衡表面耐磨和尺寸保持。",
        imageAlt: "带静电耗散防滑条的抗静电模块化输送链板",
      },
      {
        label: "输送面板",
        description:
          "长跨距托盘容易弯曲并产生永久变形，接点则可能疲劳开裂。先比较弯曲刚性与蠕变，再检查载荷集中处的韧性。",
        imageAlt: "棕色注塑输送面板总成",
      },
      {
        label: "输送滚轮",
        description:
          "轴孔磨耗会增加滚轮跳动，偏心又会放大运行阻力。先平衡孔径保持与低启动扭矩，再检查负载旋转后的圆度。",
        imageAlt: "带注塑低摩擦滚轮的输送滚轮组",
      },
      {
        label: "输送链板支架",
        description:
          "悬臂支架的根部易变形，挡停接触面承受重复冲击。先权衡弯曲刚性与冲击韧性，再比较接触面的磨耗。",
        imageAlt: "注塑输送链板支架与支撑部件",
      },
      {
        label: "导电输送链板",
        description:
          "链节磨损或接地点松动可能中断电荷泄放。以成型件电阻与整链接地连续性为核心，同时检查销孔磨损后的电性能。",
        imageAlt: "用于静电敏感搬运线的黑色导电输送链板部件",
      },
    ],
    engineeringFit: [
      {
        title: "输送任务与现场条件",
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
        title: "运动副、载荷与失效现象",
        visualDescription:
          "齿轮、轴套、滚轮和滑块的运动方式与接触条件不同。摩擦副、载荷、速度、润滑、寿命和噪声目标，影响耐磨、低摩擦、增韧或增强 POM 的适用性。",
        basicDescription:
          "运动形式、接触条件、载荷、寿命和尺寸目标，共同构成运动部件的材料要求。",
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
          "接触形式、载荷、速度、间隙和寿命会影响运动部件的摩擦、磨损与尺寸表现。以下示例说明不同部件的选型重点。",
        cardLabel: "运动部件",
        componentEyebrow: "零部件指南",
        componentTitle: "以下部件可继续查看专项选材指南",
      },
      materials: {
        eyebrow: "材料方向",
        title: "按运动条件缩小材料范围",
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
          "反复啮合或滑移导致磨耗和间隙增长时，优先将 MoS₂ 改性的 EMS102／EMS162 纳入对比；充模敏感先看 EMS102，拉伸受力优先先看 EMS162。",
        shortLabel: "耐磨 POM",
      },
      {
        label: "低摩擦 POM — 面向启动阻力、噪声与运动顺畅性",
        keyUse:
          "低速启停、干摩擦或粘滑异响优先从 PTFE 润滑改性的 EPTL402 切入。钢对塑与塑对塑分别对比启动阻力、运行转矩和磨耗。",
        shortLabel: "低摩擦 POM",
      },
      {
        label: "高抗冲 POM — 面向冲击载荷与低温韧性要求",
        keyUse:
          "装配冲击、突然载荷或低温开裂优先从增韧 POM EHI402T 切入；重点平衡缺口冲击与刚性，并复测卡扣保持力或传动间隙。",
        shortLabel: "高抗冲 POM",
      },
      {
        label: "增强 POM — 面向载荷变形与尺寸控制",
        keyUse:
          "承载变形或定位偏移优先比较 EGH302H（15% 玻纤）与 EGH602H（30% 玻纤）。提高刚性时同步检查取向翘曲、装配韧性和对偶面磨损。",
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
          "齿根疲劳与齿面磨损是两个重点。高速连续啮合先控制温升与啸叫，大扭矩启停先核对齿根承载和冲击表现。",
        imageAlt: "注塑精密齿轮部件组",
      },
      {
        label: "蜗轮",
        description:
          "蜗杆与蜗轮的持续滑移容易积聚摩擦热。先平衡滑动磨耗与齿形保持，再按润滑状态核对温升。",
        imageAlt: "注塑蜗轮轴部件",
      },
      {
        label: "滚轮",
        description:
          "轴孔磨损会放大径向跳动，轮面滑移则影响运行阻力。分别核对轴孔间隙保持与轮面耐磨性，避免只按静态刚性选材。",
        imageAlt: "绿色注塑滚轮部件",
      },
      {
        label: "轴套",
        description:
          "干摩擦启动容易出现粘滑，持续旋转则可能因发热加速磨损。先按钢轴或塑轴匹配润滑体系，再比较启动扭矩与间隙增长。",
        imageAlt: "注塑 POM 轴套部件组",
      },
      {
        label: "套筒",
        description:
          "压配量过大会提高开裂风险，滑移磨损又会削弱配合。先平衡装配韧性与尺寸保持，并分别核对压装后的同心度和滑动力。",
        imageAlt: "注塑套筒与轴套部件组",
      },
      {
        label: "导向环",
        description:
          "偏载会使局部接触升温并加快单侧磨损。先控制接触面的摩擦与耐磨，再核对往复后的导向间隙和偏磨。",
        imageAlt: "注塑导向环部件",
      },
      {
        label: "滑块",
        description:
          "低速或频繁启停容易暴露粘滑异响，长期往复磨损则会放大导轨间隙。先区分钢轨或塑轨，再结合粉尘条件匹配润滑改性体系。",
        imageAlt: "带黄铜嵌件的注塑滑块部件",
      },
      {
        label: "凸轮",
        description:
          "轮廓接触区同时承受滑移与周期冲击，磨损后会改变执行行程。先平衡表面耐磨与冲击韧性，再复测轮廓和动作重复性。",
        imageAlt: "米白色注塑凸轮齿轮部件",
      },
    ],
    engineeringFit: [
      {
        title: "运动与接触条件",
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
