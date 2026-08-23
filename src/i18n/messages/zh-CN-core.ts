import type { SiteMessages } from "@/i18n/types";

const messages = {
  Home: {
    metadata: {
      title: "工业零部件用 POM 改性材料 | 台益",
      description:
        "台益生产适用于耐磨、低摩擦、增强、导电及抗静电精密注塑件的 POM 改性材料，并提供精选 PA6、PA66 与 PPA 改性材料。",
      imageAlt: "台益 POM 改性材料生产现场",
    },
    hero: {
      eyebrowDesktop: "POM COMPOUNDING · MATERIAL SUPPORT",
      eyebrowMobile: "POM COMPOUNDING",
      title: "面向精密注塑零部件的改性 POM 制造商",
      body: "台益是一家位于中国盐城的工程塑料改性材料制造商，以改性 POM 为核心材料线。我们根据零部件工况协助缩小材料范围，并进一步确认牌号数据、样品与试模评估条件。",
      exploreAction: "按零部件找材料",
      contactAction: "查找牌号与 TDS",
    },
    metrics: [
      { label: "年改性材料产能", note: "吨/年" },
      { label: "制造积累", note: "工程塑料制造经验" },
      { label: "双螺杆生产线", note: "自有挤出生产线" },
      { label: "工厂面积", note: "平方米" },
      { label: "检测设备", note: "厂内设备数量" },
    ],
    materials: {
      title: "材料范围",
      body: "建议先从我们的核心产品 POM 改性材料开始。当零部件需要不同的刚性、耐热性或加工性能平衡时，我们也可评估精选 PA6、PA66 与 PPA 改性材料。",
      documentSupport: "按牌号与项目提供资料支持",
      dataSheetsAction: "查找牌号数据与 TDS",
      coreLabel: "核心产品线",
      coreDirectionsAria: "POM 改性材料方向",
      coreDirections: ["耐磨", "低摩擦", "增强", "导电 / 抗静电"],
      allFamiliesAction: "查看全部材料系列",
      additionalFamiliesAria: "其他材料系列",
      items: [
        {
          title: "POM 改性材料",
          description:
            "面向耐磨、低摩擦、增强、导电或抗静电注塑件的核心产品线。",
          action: "查看 POM 改性材料",
          specs: [
            ["定位", "核心产品线"],
            ["方向", "耐磨 / 低摩擦 / 增强"],
            ["适用", "精密注塑件"],
            ["数据", "牌号级 TDS"],
          ],
        },
        {
          title: "PA6 改性材料",
          description:
            "用于增强、增韧、阻燃、耐磨及矿物填充注塑件的精选 PA6 改性材料。",
          action: "查看 PA6 改性材料",
          specs: [
            ["定位", "其他材料系列"],
            ["材料", "PA6"],
            ["适用", "增强件 / 抗冲击件"],
            ["范围", "按项目确认"],
          ],
        },
        {
          title: "PA66 改性材料",
          description:
            "用于增强、阻燃、耐磨及尺寸稳定注塑件的精选 PA66 改性材料。",
          action: "查看 PA66 改性材料",
          specs: [
            ["定位", "其他材料系列"],
            ["材料", "PA66"],
            ["适用", "高刚性 / 耐热零件"],
            ["范围", "按项目确认"],
          ],
        },
        {
          title: "PPA 改性材料",
          description:
            "为需要刚性与尺寸稳定性的较高温注塑件提供按项目评估的 PPA 改性材料支持。",
          action: "查看 PPA 改性材料",
          specs: [
            ["定位", "其他材料系列"],
            ["材料", "PPA"],
            ["适用", "较高温零部件"],
            ["范围", "按项目确认"],
          ],
        },
        {
          title: "基础 POM 树脂",
          description:
            "当客户需要在改性材料支持之外采购精选 POM 基础树脂时，可作为补充供应产品线。",
          action: "查看树脂牌号",
          specs: [
            ["定位", "补充产品线"],
            ["用途", "精选供应"],
            ["适用", "基础树脂需求"],
            ["颜色", "本色"],
          ],
        },
      ],
    },
    qualification: {
      title: "我们如何筛选候选牌号",
      intro:
        "我们结合零部件、模具、使用条件和资料需求，缩小候选范围，以便进一步审核 TDS、申请样品并进行试模。",
      applicationAction: "查看应用路径",
      figureAlt: "实验皿中的黑色工程塑料粒子。",
      figureLabel: "审核依据",
      figureCaption: "依据零部件、加工及资料条件审核候选材料。",
      stepsAria: "牌号筛选阶段",
      steps: [
        {
          stage: "输入",
          title: "零部件与模具",
          description: "零件类型、模具阶段、模穴数、浇口、运动方式及装配环境。",
        },
        {
          stage: "加工",
          title: "加工与尺寸控制",
          description: "流动性、多模穴填充、收缩、翘曲、尺寸稳定性及颜色要求。",
        },
        {
          stage: "性能",
          title: "目标性能",
          description: "耐磨、摩擦、刚性、冲击、导电、抗静电性能及工作温度。",
        },
        {
          stage: "决策",
          title: "候选牌号清单",
          description: "先比较候选牌号，再确认资料可用性以及样品和试模需求。",
        },
      ],
    },
    quality: {
      title: "供应商准入所需资质",
      body: "江苏台益纳米科技有限公司的企业资质、管理体系证书及按材料提供的资料，可支持采购方开展供应商审核。",
      panelAria: "企业资质与材料资料",
      qualifications: [
        { category: "企业资质", title: "国家高新技术企业" },
        { category: "省级资质", title: "江苏省专精特新中小企业" },
        { category: "知识产权", title: "29 项授权专利" },
      ],
      documentSupportTitle: "资料支持",
      documentSupportBody: "可用性按牌号与项目确认。",
      documentListAria: "按牌号与项目提供的材料资料",
      documentNames: {
        TDS: "技术数据表",
        SDS: "安全数据表",
        COA: "分析证书",
        REACH: "化学品注册、评估、许可和限制",
        RoHS: "有害物质限制",
      },
      certifications: [
        {
          system: "汽车行业质量管理",
          scope: "塑料粒子制造，不包括第 8.3 条产品设计和开发。",
        },
        {
          system: "质量管理",
          scope: "纳米高分子材料（塑料粒子）的制造。",
        },
        {
          system: "环境管理",
          scope: "纳米高分子材料（塑料粒子）销售相关场所的环境管理。",
        },
        {
          system: "职业健康安全管理",
          scope: "纳米高分子材料（塑料粒子）销售相关场所的职业健康安全管理。",
        },
      ],
      featuredDescription: "汽车行业质量管理体系",
      certificateAvailable: "可查看 PDF 证书",
      certifiedScope: "认证范围",
      openCertificate: "打开证书 PDF",
      openCertificateAria: "打开 {standard} 证书 PDF",
      scopePrefix: "范围：",
      openPdf: "打开 PDF",
    },
    exportNetwork: {
      eyebrow: "供应网络",
      title: "出口路线",
      description:
        "项目路线从盐城生产基地连接至中亚、欧洲、东亚和美洲的目的地。",
      mapAlt: "显示 Taiyi 生产基地及中亚、欧洲、东亚和美洲出口区域的世界地图。",
      legendAria: "地图图例",
      productionBase: "生产基地",
      exportRegion: "出口区域",
      regionsTitle: "项目区域",
      regionsBody: "选择区域可在地图上突出显示相应路线。",
      factsAria: "出口网络信息",
      productionBaseValue: "中国江苏盐城",
      listedDestinations: "所列目的地",
      listedDestinationsValue: "展示 9 个目的地",
      routes: [
        { region: "中亚", coverage: "乌兹别克斯坦、哈萨克斯坦" },
        { region: "欧洲", coverage: "波兰、土耳其" },
        { region: "东亚", coverage: "韩国、日本" },
        { region: "美洲", coverage: "墨西哥、巴西、阿根廷" },
      ],
    },
    inquiry: {
      eyebrow: "从现有信息开始",
      title: "从已知的零部件要求开始，逐步缩小材料范围",
      body: "无需先准备完整规格。提供已知的零部件功能、使用条件、当前材料或失效现象即可；不确定项可以标注待确认。",
      checklistLabel: "可先提供",
      checklist: [
        "零部件功能与运动方式",
        "模具阶段与加工限制",
        "优先性能目标",
        "当前材料、失效现象与项目时间",
      ],
      action: "讨论您的应用",
    },
    taskFirst: {
      entry: {
        eyebrow: "从您的任务开始",
        title: "材料选择，通常从零部件工况开始",
        body: "齿轮关注摩擦副、磨损与噪音；结构件关注刚性、收缩与尺寸稳定；电气零部件则需要先明确电阻范围与使用环境。材料名称或单一参数可以帮助初筛，但通常不足以判断实际适用性。",
        ariaLabel: "按当前选材任务进入相关页面",
        items: [
          {
            label: "零部件",
            title: "我正在为零部件选材",
            description:
              "从零部件功能、运动方式、负载、装配环境和模具阶段进入相应的材料筛选路径。",
            action: "浏览零部件路径",
          },
          {
            label: "性能问题",
            title: "我需要解决性能问题",
            description:
              "从耐磨、低摩擦、增强、抗冲击、耐候、导电或抗静电要求进入材料方向。",
            action: "查看材料方向",
          },
          {
            label: "牌号与资料",
            title: "我已经有参考牌号",
            description:
              "通过材料类型、牌号或性能关键词，查找现有数据和可用于进一步审核的技术资料。",
            action: "查找牌号与 TDS",
          },
        ],
      },
      core: {
        eyebrow: "核心产品",
        title: "改性 POM，是我们的核心材料线",
        body: "面向齿轮、轴套、滑动件、结构件和电气功能零部件，提供基础与高流动、耐磨低摩擦、增强、抗冲击、耐候以及导电与抗静电等材料方向。",
        action: "查看 POM 材料族",
        materialImageAlt: "用于改性 POM 配混与牌号开发的本色 POM 原料颗粒。",
        materialImageCaption: "POM 原料颗粒",
        directionsAria: "改性 POM 材料方向与具体材料族",
        groups: [
          {
            title: "耐磨与低摩擦",
            description:
              "结合摩擦副、载荷、速度、润滑与目标磨损表现筛选滑动材料方向。",
            action: "耐磨与低摩擦 POM",
            relatedLinks: [],
          },
          {
            title: "增强与尺寸控制",
            description:
              "根据刚性、收缩、翘曲、纤维取向与尺寸要求比较增强和填充方向。",
            action: "玻纤增强 POM",
            relatedLinks: ["碳纤增强 POM", "微珠填充 POM"],
          },
          {
            title: "抗冲击与耐候",
            description: "围绕冲击、低温韧性、装配应力或光照条件审核具体牌号。",
            action: "高抗冲 POM",
            relatedLinks: ["耐候 POM"],
          },
          {
            title: "导电与抗静电",
            description:
              "先定义电阻范围、测试方法、接地、颜色和使用环境，再比较材料方向。",
            action: "导电与抗静电 POM",
            relatedLinks: ["跨基材静电控制"],
          },
        ],
        supportingTitle: "当 POM 不是唯一答案",
        supportingBody:
          "当零部件需要不同的刚性、耐热性、吸湿或加工性能平衡时，也可进一步评估基础 POM 树脂及精选 PA6、PA66 与 PPA 材料。",
        supportingLinks: ["基础 POM 树脂", "PA6", "PA66", "PPA"],
        allFamiliesAction: "查看全部材料系列",
      },
      applications: {
        eyebrow: "零部件方案",
        title: "不同零部件，关注点不同",
        body: "从真实零部件进入，先明确主导工况，再连接到相应的材料方向、牌号数据和验证条件。",
        action: "查看全部零部件路径",
        items: [
          {
            title: "精密塑料齿轮",
            description:
              "扭矩、齿形、转速、配对材料、润滑和精度目标共同决定候选范围。",
            imageAlt: "用于材料筛选说明的精密塑料齿轮和运动部件。",
          },
          {
            title: "衬套与轴套",
            description:
              "载荷、滑动速度、轴与壳体、间隙配合、润滑和环境共同决定候选方向。",
            imageAlt: "用于材料筛选说明的工程塑料衬套、轴套和滑动导向件。",
          },
          {
            title: "输送链部件",
            description:
              "链条拉力、铰接磨损、导轨摩擦、节距、静电目标和环境需要一并评估。",
            imageAlt: "用于材料筛选说明的塑料输送链板、链节和自动化组件。",
          },
          {
            title: "阀芯与阀筒",
            description:
              "压力、介质、密封、阀芯间隙、运动循环和流量功能先定义应用边界。",
            imageAlt: "用于材料筛选说明的注塑阀芯、阀筒和流体控制内部件。",
          },
          {
            title: "纺织导向部件",
            description:
              "纱线、速度、张力、接触几何、表面质量、磨损和静电行为共同影响选材。",
            imageAlt: "用于材料筛选说明的纺织机械纱线导向部件。",
          },
          {
            title: "IC 周转托盘",
            description:
              "ESD 等级、工艺温度、平面度、槽位几何、洁净度和搬运条件需要同时定义。",
            imageAlt: "用于材料筛选说明的 IC 周转托盘和精密槽位。",
          },
        ],
      },
      process: {
        eyebrow: "合作流程",
        title: "从零部件要求到候选牌号，三步开始",
        body: "先从已有信息形成初步材料范围，再逐步确认数据、资料和项目验证条件。",
        stepsAria: "从零部件要求到候选牌号的三个步骤",
        steps: [
          {
            title: "说明零部件",
            description: "提供功能、工况、模具阶段和当前最重要的性能目标。",
          },
          {
            title: "缩小材料范围",
            description:
              "结合材料方向和现有牌号数据，形成可进一步审核的候选清单。",
          },
          {
            title: "进入项目验证",
            description: "确认 TDS、资料可用性，以及样品和试模的后续安排。",
          },
        ],
      },
      collaboration: {
        eyebrow: "项目协作",
        title: "让材料验证更容易开始",
        body: "不必等到所有材料规格都已经确定。可以从零部件工况、当前失效现象或参考牌号开始，逐步缩小材料范围。",
        itemsAria: "台益的三种项目协作方式",
        items: [
          {
            title: "响应与沟通更直接",
            description:
              "从零部件工况和材料目标开始，让商务、材料技术和生产团队围绕同一项目要求协同。",
          },
          {
            title: "小批量验证更灵活",
            description:
              "支持样品、小批量验证和试模阶段的材料评估，再根据实际结果讨论稳定供货。",
          },
          {
            title: "项目型配方定制",
            description:
              "对于技术目标、验证条件和合理量产需求明确的项目，可进一步评估配方调整与定制开发。",
          },
        ],
      },
      proof: {
        eyebrow: "制造与验证依据",
        title: "让工程评估和采购审核都有依据",
        body: "自有生产、厂内检测和按牌号确认的材料资料，为候选材料审核与后续供应沟通提供基础。",
        factoryImageAlt: "台益盐城生产基地内的双螺杆挤出生产线。",
        factoryImageCaption: "盐城生产基地 · 双螺杆挤出车间",
        metricsAria: "台益制造与检测数据",
        metricLabels: ["年改性材料产能", "自有双螺杆生产线", "厂内检测设备"],
        metricNotes: ["吨/年", "条", "台"],
        documentsTitle: "项目资料",
        documentsBody: "TDS、SDS、COA、REACH、RoHS 的可用性按牌号与项目确认。",
        documentsAria: "可按牌号与项目确认的资料类型",
        certificatesTitle: "质量管理体系证书",
        certificateAction: "查看全部证书与认证范围",
        certificateOpenAction: "查看证书",
        internationalLabel: "国际项目支持",
        internationalBody: "可为国际项目提供材料资料与出口交付协同。",
      },
    },
  },
  Contact: {
    metadata: {
      title: "提交材料需求 | 台益",
      description:
        "联系江苏台益纳米科技有限公司，咨询 POM 改性材料、工程塑料改性材料、POM 树脂、材料建议、技术资料、样品及项目评估。",
      imageAlt: "台益工程塑料生产线",
    },
    breadcrumbHome: "首页",
    breadcrumbContact: "联系我们",
    hero: {
      title: "申请材料评估",
      description:
        "请说明零部件功能、使用条件与目标要求。我们将识别相关材料系列、确认可提供的资料，并说明下一步样品或评估安排。",
    },
    formPanel: {
      title: "先提供基本信息",
      body: "公司、邮箱和应用信息即可开始。如已有技术细节，可继续补充。",
      requiredBefore: "标有",
      requiredAfter: "的字段为必填项。",
    },
    sales: {
      title: "销售联系",
      contactPerson: "联系人",
      role: "销售经理",
      company: "公司",
      email: "邮箱",
      whatsapp: "WhatsApp",
      location: "地址",
      locationValue: "中国江苏盐城",
      reviewTitle: "我们可以评估",
      reviewItems: ["相关材料系列与候选牌号", "可提供的技术资料与样品需求"],
      emailDirectly: "直接发送邮件",
    },
    directEmail: {
      greeting: "Ethan，您好：",
      application: "应用或零部件",
      material: "材料或当前牌号",
      reference: "参考牌号",
      candidates: "候选牌号清单",
      requirement: "优先要求",
      keyRequirements: "关键要求：",
      documentNeeds: "资料需求：",
      closing: "此致",
      subject: "材料需求咨询",
    },
    context: {
      grade: "关注牌号",
      reference: "参考牌号",
      candidates: "候选牌号清单",
      requirement: "优先要求",
      intent: "咨询目的",
      sampleIntent: "样品申请",
      evaluationIntent: "牌号评估",
      tdsIntent: "TDS 或技术资料",
      quoteSupplyIntent: "报价或供货沟通",
    },
    form: {
      contextFrom: "来源",
      contextPrefilled: "以下信息已预填，您可以修改任意字段。",
      clearContext: "清除预填信息",
      inquiryTypeLabel: "您需要什么？",
      inquiryTypePlaceholder: "请选择需求类型",
      inquiryTypeOptions: {
        "grade-evaluation": "牌号建议",
        tds: "TDS 或技术资料",
        sample: "样品",
        "quote-supply": "报价或供货沟通",
      },
      companyLabel: "公司",
      companyPlaceholder: "公司名称",
      emailLabel: "邮箱",
      materialLabel: "材料系列（选填）",
      materialPlaceholder: "请选择材料系列",
      materialOptionLabels: {
        "Modified POM Compounds": "POM 改性材料",
        "Wear-Resistant & Low-Friction POM": "耐磨与低摩擦 POM",
        "High-Impact POM": "高抗冲 POM",
        "UV-Resistant POM": "耐候 POM",
        "Glass Fiber Reinforced POM": "玻璃纤维增强 POM",
        "Glass Bead Filled POM": "玻璃微珠填充 POM",
        "Carbon Fiber Reinforced POM Compound": "碳纤维增强 POM 改性材料",
        "Conductive / Antistatic POM": "导电 / 抗静电 POM",
        "Base POM Resin": "基础 POM 树脂",
        "Ultra-High Flow POM": "超高流动 POM",
        "PA6 Compounds": "PA6 改性材料",
        "PA66 Compounds": "PA66 改性材料",
        "PPA Compounds": "PPA 改性材料",
        "Conductive & Antistatic Compounds": "导电与抗静电改性材料",
        "Other Engineering Plastic Compound": "其他工程塑料改性材料",
      },
      applicationLabel: "应用 / 零部件",
      applicationPlaceholder: "齿轮、卡扣、外壳……",
      detailsLabel: "需求详情（选填）",
      detailsPlaceholder: "当前牌号、使用条件、目标性能、年用量或资料需求。",
      sending: "正在提交……",
      submit: "提交项目需求",
      fallbackNote: "如果无法直接提交，系统将打开邮件草稿。",
      sentStatus: "已提交。我们会评估您的需求并通过邮件回复。",
      fallbackStatus: "已准备邮件草稿，并在可能的情况下复制了咨询内容。",
      emailDraft: {
        notSpecified: "未填写",
        greeting: "Ethan，您好：",
        intro: "请评估以下材料需求：",
        company: "公司",
        email: "邮箱",
        material: "关注材料",
        application: "应用 / 零部件",
        inquiryType: "需求类型",
        grade: "牌号",
        source: "来源",
        details: "需求详情：",
        closing: "此致",
        subjectPrefix: "材料需求咨询",
      },
    },
  },
} satisfies Pick<SiteMessages, "Home" | "Contact">;

export default messages;
