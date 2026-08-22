import type {
  ChineseOnlyProductCategorySlug,
  LocalizedCategoryProfileMessages,
} from "@/i18n/productFunnelTypes";

export const chinesePomCategoryExpansion = {
  "wear-resistant-low-friction-pom-compound": {
    categoryLabel: "耐磨与低摩擦 POM",
    metadata: {
      title: "耐磨与低摩擦 POM 牌号目录 | Taiyi Polymer",
      description:
        "按摩擦副、运动方式、MFI、强度、热性能与项目条件，比较 Taiyi Polymer 耐磨与低摩擦 POM 牌号。",
      imageAlt: "Taiyi Polymer 耐磨与低摩擦 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "耐磨与低摩擦 POM",
      description:
        "面向齿轮、轴套、滚轮、导轨和反复运动零件，根据摩擦副、载荷、速度、润滑、MFI 与热性能比较六个耐磨方向牌号。",
      overviewLabel: "选型路径",
      overview:
        "先定义接触材料、运动方式、载荷、速度、温度和润滑条件，再比较 PTFE、MoS2、芳纶纤维或其他耐磨添加剂方向。",
    },
    navigation: {
      aria: "耐磨与低摩擦 POM 页面分区导航",
      title: "耐磨与低摩擦 POM",
      subtitle: "比较摩擦副、载荷、速度、润滑与热性能",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较耐磨与低摩擦 POM 牌号",
      body:
        "六个已列牌号采用不同耐磨方向。数据用于初筛；具体摩擦系数、磨耗和寿命需在目标摩擦副与工况中验证。",
      summaries: {
        "etm270h-wear-resistant-pom":
          "耐磨方向 POM，兼顾较高的拉伸与弯曲表现。",
        "epaf100a-high-wear-resistant-pom":
          "芳纶纤维改性高耐磨 POM，用于评估刚度、耐磨和耐热表现。",
        "eptl402-high-wear-resistant-pom":
          "PTFE 填充高耐磨 POM，用于滑动件和低摩擦磨损场景。",
        "enm1040-high-wear-resistant-pom":
          "采用特殊耐磨添加剂体系的 POM，用于滑动与功能零件。",
        "edm-111-high-wear-resistant-pom":
          "面向汽车、电气、卫浴和工业注塑应用的高耐磨方向 POM。",
        "ems162-high-wear-resistant-pom":
          "MoS2 填充黑色高耐磨 POM，兼顾耐磨与稳定力学表现。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "耐磨与低摩擦选型问题",
      items: [
        {
          question: "如何区分耐磨与低摩擦需求？",
          answer:
            "低摩擦关注接触界面的摩擦与启停表现，耐磨更关注材料损失和寿命。两者相关但不能互相替代，应同时定义摩擦副、载荷、速度、温度与润滑条件。",
        },
        {
          question: "填料方向能否直接决定最终寿命？",
          answer:
            "不能。PTFE、MoS2、芳纶纤维或其他添加剂只能作为初筛方向；实际寿命还受对偶材料、表面状态、几何、载荷、速度、温度和污染影响。",
        },
        {
          question: "目录数据是否包含统一摩擦系数？",
          answer:
            "当前目录展示可核实的通用牌号数据。摩擦系数和磨耗必须对应具体测试方法与摩擦副，需按项目申请数据或安排验证。",
        },
      ],
    },
    inquiry: {
      eyebrow: "运动部件评估",
      title: "缩小耐磨与低摩擦 POM 牌号范围",
      body:
        "请提供零件功能、摩擦副材料、载荷、速度、温度、润滑、当前失效现象、模具阶段和资料需求。我们将据此准备候选牌号与样品验证路径。",
      steps: ["摩擦副与运动", "载荷、速度与温度", "失效与验证"],
    },
  },
  "uv-resistant-pom-compound": {
    categoryLabel: "耐候 POM",
    metadata: {
      title: "耐候 POM 牌号与数据 | Taiyi Polymer",
      description:
        "根据颜色、光照环境、冲击方向、流动性与项目验证要求，比较 Taiyi Polymer 耐候 POM 牌号。",
      imageAlt: "Taiyi Polymer 耐候 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "耐候 POM",
      description:
        "面向户外或光照环境下的注塑零件，根据颜色、暴露条件、流动性、冲击方向与资料要求比较四个耐候 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先定义光源、暴露时间、温度、湿度、颜色与外观目标，再结合零件载荷、壁厚和验证标准比较候选牌号。",
    },
    navigation: {
      aria: "耐候 POM 页面分区导航",
      title: "耐候 POM",
      subtitle: "比较光照条件、颜色、冲击方向与验证要求",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较耐候 POM 牌号",
      body:
        "四个已列牌号覆盖不同流动、冲击和外观方向。耐候表现必须结合目标光源、暴露周期、颜色变化与实际工况确认。",
      summaries: {
        "etm090u-uv-resistant-pom":
          "中等流动耐候 POM，用于汽车、电气、卫浴和精密零件。",
        "etm100pu-uv-resistant-pom":
          "高流动耐候 POM，用于填充要求更高的注塑零件。",
        "edr180u-uv-resistant-pom":
          "高抗冲哑光耐候 POM，用于同时评估冲击、哑光外观和耐候方向。",
        "edr2000zd-uv-resistant-pom":
          "高抗冲、耐紫外与耐老化方向 POM，用于光照环境下的项目评估。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "耐候材料评估问题",
      items: [
        {
          question: "耐候 POM 是否等同于所有户外环境适用？",
          answer:
            "不是。户外条件包含不同光谱、温度、湿度、雨水、污染和机械载荷。耐候方向用于缩小候选范围，最终仍需按目标环境和测试标准验证。",
        },
        {
          question: "为什么颜色必须在项目初期确认？",
          answer:
            "颜色体系会影响外观目标、光照后的变化和配方选择。请提供目标颜色、允许色差和暴露条件，以便确认可评估的牌号方向。",
        },
        {
          question: "目录数据能否代替老化测试？",
          answer:
            "不能。目录数据用于材料初筛，老化后的颜色、力学和尺寸表现需采用与目标应用相关的条件和周期验证。",
        },
      ],
    },
    inquiry: {
      eyebrow: "耐候项目评估",
      title: "根据暴露条件筛选耐候 POM",
      body:
        "请提供零件用途、光照来源、暴露周期、温湿度、目标颜色、允许外观变化、载荷、当前材料和所需文件。我们将据此准备候选牌号与验证路径。",
      steps: ["暴露与环境", "颜色与外观", "载荷与验证"],
    },
  },
  "carbon-fiber-reinforced-pom-compound": {
    categoryLabel: "碳纤维增强 POM",
    metadata: {
      title: "碳纤维增强 POM 牌号与数据 | Taiyi Polymer",
      description:
        "按碳纤维含量、刚度、收缩、热性能、导电方向与项目要求比较 Taiyi Polymer 碳纤维增强 POM。",
      imageAlt: "Taiyi Polymer 黑色碳纤维增强 POM 粒子",
    },
    hero: {
      eyebrow: "POM 改性材料系列",
      title: "碳纤维增强 POM",
      description:
        "根据刚度、收缩、尺寸稳定、热性能和受控导电要求，比较含 20%、30% 与 40% 碳纤维的三个 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先定义载荷、刚度、尺寸与电阻率目标，再结合壁厚、浇口、纤维取向、表面要求和验证方法比较候选牌号。",
    },
    navigation: {
      aria: "碳纤维增强 POM 页面分区导航",
      title: "碳纤维增强 POM",
      subtitle: "比较碳纤含量、刚度、收缩与电性能目标",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较碳纤维增强 POM 牌号",
      body:
        "三个牌号覆盖 20% 至 40% 碳纤维方向。更高填充量并非对所有零件都更合适，需同时评估流动、纤维取向、表面和电性能。",
      summaries: {
        "ecf200-carbon-fiber-pom":
          "20% 碳纤维增强 POM，用于评估刚度、低收缩、尺寸稳定和导电表现。",
        "ecf300-carbon-fiber-pom":
          "30% 碳纤维增强 POM，用于高刚度、低收缩和稳定导电方向。",
        "ecf400-carbon-fiber-pom":
          "40% 碳纤维增强 POM，用于更高刚度、尺寸稳定和导电黑色材料方向。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "碳纤维增强相关问题",
      items: [
        {
          question: "如何选择碳纤维含量？",
          answer:
            "应综合评估刚度、载荷、壁厚、流长、收缩、翘曲、表面和电阻率目标。填充量提高会同时改变加工与零件各向异性。",
        },
        {
          question: "碳纤增强 POM 是否一定满足导电要求？",
          answer:
            "不一定。导电表现取决于牌号、纤维网络、零件几何、流动取向、测试位置和方法，应先定义表面或体积电阻率目标再验证。",
        },
        {
          question: "为什么必须关注浇口和纤维取向？",
          answer:
            "纤维会沿熔体流动方向取向，从而影响刚度、收缩、翘曲和电性能。目标模具中的取向与测量位置必须纳入验证。",
        },
      ],
    },
    inquiry: {
      eyebrow: "增强材料评估",
      title: "缩小碳纤维增强 POM 牌号范围",
      body:
        "请提供载荷与刚度目标、零件几何、壁厚、浇口、模具阶段、尺寸风险、电阻率目标、测试方法、颜色和资料需求。我们将据此准备候选牌号与样品路径。",
      steps: ["载荷与刚度", "流动与尺寸", "电性能与验证"],
    },
  },
  "conductive-antistatic-pom-compound": {
    categoryLabel: "导电与抗静电 POM",
    metadata: {
      title: "导电与抗静电 POM 牌号目录 | Taiyi Polymer",
      description:
        "按表面与体积电阻率目标、测试方法、颜色、零件几何与工况比较 Taiyi Polymer 导电与抗静电 POM。",
      imageAlt: "Taiyi Polymer 黑色导电与抗静电 POM 粒子",
    },
    hero: {
      eyebrow: "POM 功能材料系列",
      title: "导电与抗静电 POM",
      description:
        "面向需要电荷控制的注塑零件，根据表面与体积电阻率目标、测试方法、环境、颜色和零件几何比较两个黑色 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先明确静电耗散、抗静电或导电功能，以及电阻率范围、测试电压、调湿状态和测量位置，再比较候选牌号。",
    },
    navigation: {
      aria: "导电与抗静电 POM 页面分区导航",
      title: "导电与抗静电 POM",
      subtitle: "比较电阻率目标、测试方法、环境与零件几何",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较导电与抗静电 POM 牌号",
      body:
        "两个已列黑色牌号提供不同电阻率方向。目录数据用于初筛；零件级电性能必须按约定方法、环境与测量位置验证。",
      summaries: {
        "egh25cn-conductive-antistatic-pom":
          "黑色 POM，用于汽车、电子电气、卫浴和工业零件的受控电阻率评估。",
        "ecn1003b-conductive-pom":
          "黑色导电 POM，用于需要较低表面与体积电阻率的特定注塑零件。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "电荷控制材料问题",
      items: [
        {
          question: "导电、静电耗散和抗静电是否可以混用？",
          answer:
            "不应混用。三者对应的功能与目标电阻率范围不同，应先定义零件要实现的电荷控制功能、测试方法和使用环境。",
        },
        {
          question: "为什么测试方法和调湿状态很重要？",
          answer:
            "测试电压、试样几何、测量位置、温湿度与调湿状态都可能改变结果。供应商数据与客户验收必须采用可比较的条件。",
        },
        {
          question: "目录电阻率能否保证复杂零件各处相同？",
          answer:
            "不能。流动、壁厚、浇口、取向和测量位置会影响零件级结果，应在目标模具和实际零件上验证。",
        },
      ],
    },
    inquiry: {
      eyebrow: "电性能项目评估",
      title: "根据电荷控制目标筛选 POM 牌号",
      body:
        "请提供目标表面与体积电阻率、测试方法、电压、温湿度、零件几何、壁厚、浇口、颜色、当前材料和所需文件。我们将据此准备候选牌号与验证步骤。",
      steps: ["功能与电阻率", "测试与环境", "几何与验证"],
    },
  },
  "ultra-high-flow-pom": {
    categoryLabel: "极高流动 POM",
    metadata: {
      title: "极高流动 POM 牌号与数据 | Taiyi Polymer",
      description:
        "按 MFI、薄壁、流长、浇口、模穴与力学性能要求，比较 Taiyi Polymer 极高流动 POM 牌号。",
      imageAlt: "Taiyi Polymer 本色极高流动 POM 粒子",
    },
    hero: {
      eyebrow: "POM 加工方向",
      title: "极高流动 POM",
      description:
        "面向薄壁、长流长和填充敏感模具，根据 MFI、零件几何、浇口、模穴数、工艺窗口与性能目标比较两个极高流动 POM 牌号。",
      overviewLabel: "选型路径",
      overview:
        "先确认填充问题是否来自材料流动性，再结合壁厚、流长、浇口、排气、模穴与目标力学性能比较候选牌号。",
    },
    navigation: {
      aria: "极高流动 POM 页面分区导航",
      title: "极高流动 POM",
      subtitle: "比较 MFI、壁厚、流长、浇口与性能目标",
    },
    directory: {
      kicker: "牌号选择",
      title: "比较极高流动 POM 牌号",
      body:
        "ETM1500 与 ETM1800 用于流动敏感项目的初步比较。更高 MFI 不代表最终零件性能更好，仍需审核强度、尺寸和成型窗口。",
      summaries: {
        "etm1500-base-pom-resin":
          "超高流动基础 POM，用于需要更易填充和稳定加工的注塑零件。",
        "etm1800-base-pom-resin":
          "更高流动方向基础 POM，用于长流长或填充要求更高的注塑项目。",
      },
    },
    faq: {
      kicker: "常见问题",
      title: "高流动成型问题",
      items: [
        {
          question: "MFI 越高是否越容易得到合格零件？",
          answer:
            "不一定。MFI 有助于判断流动方向，但实际填充还受壁厚、流长、浇口、排气、模具温度、注塑机和工艺窗口影响。",
        },
        {
          question: "什么时候应先检查模具而不是更换材料？",
          answer:
            "当短射、熔接痕或压力问题可能来自浇口、流道、排气、温控或设备能力时，应先确认模具与工艺根因，再判断是否需要更高流动牌号。",
        },
        {
          question: "极高流动牌号可以直接替换常规 POM 吗？",
          answer:
            "不可以直接认定。流动性变化会同时影响力学、尺寸和工艺表现，应在目标模具中比较填充、尺寸与零件性能。",
        },
      ],
    },
    inquiry: {
      eyebrow: "填充问题评估",
      title: "根据模具与流长筛选高流动 POM",
      body:
        "请提供零件壁厚、流长、浇口与流道、模穴数、排气、注塑机、当前材料、短射或外观问题、目标性能和资料需求。我们将据此判断材料与模具的下一步验证。",
      steps: ["壁厚与流长", "浇口、排气与设备", "性能与验证"],
    },
  },
} as const satisfies Record<
  ChineseOnlyProductCategorySlug,
  LocalizedCategoryProfileMessages
>;
