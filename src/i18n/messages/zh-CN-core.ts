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
      eyebrowDesktop: "台益 · PLATFORM® 工程塑料",
      eyebrowMobile: "台益 · PLATFORM®",
      title: "面向精密注塑零部件的改性 POM 制造商",
      body: "台益开发面向耐磨、低摩擦、增强、导电与抗静电精密零部件的改性 POM，并为精选 PA6、PA66 与 PPA 项目提供从牌号初筛到量产的材料支持。",
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
      coreDirections: ["耐磨", "低摩擦", "增强", "导电", "抗静电"],
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
      eyebrow: "应用评估",
      title: "告诉我们零部件需求",
      body: "提供以下信息，我们会据此筛选材料方向，并说明可提供的牌号数据、文件和样品。",
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
        eyebrow: "选材入口",
        title: "从零件需求出发，找到合适材料",
        body: "齿轮关注摩擦副、磨损和噪音，结构件关注刚性、收缩和尺寸稳定，电气部件先看电阻范围与使用环境。",
        ariaLabel: "按当前选材任务进入相关页面",
        items: [
          {
            label: "零部件",
            title: "我正在为零部件选材",
            description:
              "从零部件功能、运动方式、负载、装配环境和模具阶段开始。",
            action: "浏览零部件路径",
          },
          {
            label: "性能问题",
            title: "我需要解决性能问题",
            description:
              "从性能缺口开始：磨损、低摩擦、增强、冲击、耐候、导电或抗静电性能。",
            action: "查看材料方向",
          },
          {
            label: "牌号与资料",
            title: "我已经有参考牌号",
            description:
              "从参考牌号、材料类型或性能关键词开始，查找已列牌号、TDS 和技术文件。",
            action: "查找牌号数据与 TDS",
          },
        ],
      },
      core: {
        eyebrow: "产品",
        title: "改性 POM，面向精密零部件的核心材料",
        body: "POM 兼具均衡的机械性能、耐磨性、自润滑性与尺寸稳定性。它最早被商业化用于替代齿轮、螺钉和轴承等原本由金属制造的机械部件。今天，它的应用已从拉链、牙刷等日常用品，延伸至车门锁与锁扣、安全带锁止机构和燃油系统部件等汽车组件。PLATFORM® 通过改性把这款成熟材料继续向前推进——面向那些不容许性能波动的零件，也面向那些希望从首次试模到规模量产始终保持精度与稳定的制造者。",
        productAction: "浏览改性 POM 产品系列",
        materialImageAlt: "用于工程注塑件的黑色碳纤维增强 POM 颗粒。",
        materialImageCaption: "碳纤维增强 POM",
        directionsAria: "改性 POM 材料方向与具体材料族",
        panelLabel: "选材重点",
        technicalTitle: "POM 技术资料",
        technicalLinks: [
          {
            title: "标准成型条件",
            description: "查看材料处理、试模准备和具体牌号的加工要点。",
          },
          {
            title: "成型技术",
            description: "进入注塑、工艺控制与问题排查资料。",
          },
          {
            title: "牌号组成与目录",
            description: "查看 POM 材料族与当前已收录牌号。",
          },
        ],
        gradeNote: "查询当前牌号数据，或与我们讨论零部件要求。",
        contactAction: "讨论您的应用",
        reviewLabel: "先确认",
        materialsLabel: "材料入口",
        groups: [
          {
            title: "耐磨与低摩擦",
            summary: "滑动、噪音与摩擦副",
            panelTitle: "让运动部件更耐磨、更安静",
            description: "",
            reviewInputs: [
              "配对材料与表面状态",
              "载荷、速度与润滑条件",
              "寿命、磨损量与噪音目标",
            ],
            componentsNote: "常见零部件：齿轮、轴套、滑块、导轨与输送链组件",
            action: "耐磨与低摩擦 POM",
            relatedLinks: [],
          },
          {
            title: "增强与尺寸控制",
            summary: "刚性、收缩与翘曲",
            panelTitle: "提升刚性与尺寸稳定性",
            description: "",
            reviewInputs: [
              "受力方向与刚性目标",
              "壁厚、浇口与纤维取向",
              "收缩率与关键尺寸公差",
            ],
            componentsNote: "常见零部件：支架、壳体、精密结构件与承载组件",
            action: "玻纤增强 POM",
            relatedLinks: ["碳纤增强 POM", "微珠填充 POM"],
          },
          {
            title: "抗冲击与耐候",
            summary: "韧性、装配应力与光照",
            panelTitle: "提升韧性，应对装配与户外环境",
            description: "",
            reviewInputs: [
              "冲击温度与缺口条件",
              "装配应变与反复载荷",
              "光照、颜色与暴露周期",
            ],
            componentsNote: "常见零部件：卡扣、锁止件、装配结构与户外运动部件",
            action: "高抗冲 POM",
            relatedLinks: ["耐候 POM"],
          },
          {
            title: "导电与抗静电",
            summary: "电阻范围、接地与环境",
            panelTitle: "按目标电阻选择导电与抗静电材料",
            description: "",
            reviewInputs: [
              "表面或体积电阻范围",
              "测试方法、接地与湿度",
              "颜色、洁净度与使用环境",
            ],
            componentsNote:
              "常见零部件：IC 托盘、输送治具、电气结构件与静电控制部件",
            action: "导电与抗静电 POM",
            relatedLinks: ["跨基材静电控制"],
          },
        ],
        supportingTitle: "不止 POM，更多工程塑料选择",
        supportingBody: "还可比较其他材料在刚性、耐热、吸湿和加工方面的差异。",
        supportingLinks: ["基础 POM 树脂", "PA6", "PA66", "PPA"],
        allFamiliesAction: "查看材料范围",
      },
      components: {
        eyebrow: "零部件解决方案",
        title: "为每个零部件找到合适材料",
        body: "按零部件查看关键工况和选材重点。",
        action: "查看全部部件",
        items: [
          {
            title: "精密塑料齿轮",
            description: "按扭矩、齿形、转速、配对材料、润滑和精度目标筛选。",
            imageAlt: "用于材料筛选说明的精密塑料齿轮和运动部件。",
          },
          {
            title: "衬套与轴套",
            description:
              "按载荷、滑动速度、轴与壳体材料、间隙、润滑和工作环境筛选。",
            imageAlt: "用于材料筛选说明的工程塑料衬套、轴套和滑动导向件。",
          },
          {
            title: "输送链部件",
            description:
              "检查链条拉力、铰接磨损、导轨摩擦、节距、静电控制目标和工作环境。",
            imageAlt: "用于材料筛选说明的塑料输送链板、链节和自动化组件。",
          },
          {
            title: "阀芯与阀筒",
            description:
              "定义压力、介质、密封条件、阀芯间隙、运动循环和流量功能。",
            imageAlt: "用于材料筛选说明的注塑阀芯、阀筒和流体控制内部件。",
          },
          {
            title: "纺织导向部件",
            description:
              "检查纱线、速度、张力、接触几何、表面质量、磨损和静电行为。",
            imageAlt: "用于材料筛选说明的纺织机械纱线导向部件。",
          },
          {
            title: "IC 周转托盘",
            description:
              "定义 ESD 等级、工艺温度、平面度、槽位几何、洁净度和搬运条件。",
            imageAlt: "用于材料筛选说明的 IC 周转托盘和精密槽位。",
          },
        ],
      },
      applications: {
        eyebrow: "应用领域",
        title: "按应用场景查看材料方向",
        body: "按使用场景查看材料方向和选材重点。",
        action: "查看全部应用",
        items: [
          {
            title: "汽车",
            description:
              "面向车门、座椅、燃油系统、雨刮器、控制盒及车内机构的功能性注塑零部件。",
            imageAlt: "包含汽车功能模块的整车装配线",
          },
          {
            title: "电子电气",
            description:
              "面向电气连接、绝缘、控制与执行机构的精密注塑零部件。",
            imageAlt: "包含功能性电气模块的电子装配工位",
          },
          {
            title: "输送与自动化",
            description:
              "用于洁净自动化输送的塑料链板、输送导轨、滚轮及搬运部件。",
            imageAlt: "采用模块化链板的洁净自动化输送线",
          },
          {
            title: "运动",
            description:
              "用于传动、导向与低摩擦运动的齿轮、滚轮、轴套、套筒及滑动部件。",
            imageAlt: "包含齿轮和注塑运动部件的工业运动模块",
          },
          {
            title: "水路控制",
            description:
              "用于阀门、卫浴、泵及水路控制系统的注塑部件。",
            imageAlt: "包含阀门与流路模块的洁净水路控制装配线",
          },
          {
            title: "洗衣机零部件",
            shortTitle: "洗衣机",
            description:
              "用于洗衣机滚筒传动、水路、排水、阀门及低摩擦运动机构的功能性注塑部件。",
            imageAlt: "包含注塑传动、排水与门锁部件的滚筒洗衣机机构",
          },
          {
            title: "户外设备",
            description:
              "用于园林设备、喷灌装置、户外机构及耐用设备总成的户外暴露注塑部件。",
            imageAlt: "包含园林机械模块的户外设备装配线",
          },
          {
            title: "纺织机械",
            description:
              "用于纺织机械以及纱线或织物输送系统的耐磨导向、运动与低收缩注塑部件。",
            imageAlt: "包含纱线输送与导向部件的纺织机械生产线",
          },
        ],
      },
      process: {
        stepsAria: "明确应用需求、筛选候选牌号、验证并准备放量",
        steps: [
          {
            title: "明确应用需求",
            description: "梳理零件功能、使用工况与加工约束。",
          },
          {
            title: "筛选候选牌号",
            description: "结合应用要求与试验范围筛选材料。",
          },
          {
            title: "验证并准备放量",
            description: "完成试验、复盘结果，并准备材料放量。",
          },
        ],
      },
      collaboration: {
        eyebrow: "以应用为导向的项目支持",
        title: "每一个材料决策，都从零件出发",
        body: "将零件要求、候选材料、试验依据与量产路径衔接起来。",
        itemsAria: "台益的三种项目协作方式",
        items: [
          {
            title: "跨团队联合评估",
            description:
              "商务、技术与生产团队共同评估性能目标、加工条件与供货需求。",
          },
          {
            title: "放量前充分验证",
            description:
              "通过样品、小批试料和试模反馈，在作出量产决策前比较候选材料。",
          },
          {
            title: "务实的配方评估",
            description:
              "如果现有牌号不匹配，我们会评估配方调整在技术上是否合适，并确认其生产可行性。",
          },
        ],
        action: "沟通应用需求",
      },
      proof: {
        eyebrow: "制造与验证",
        body:
          "改性材料由自有双螺杆产线生产，并通过内部检测设备进行评估。可提供的技术、批次与合规资料按具体牌号和项目确认。",
        factoryImageAlt: "台益盐城生产基地内的双螺杆挤出生产线。",
        factoryImageCaption: "盐城生产基地 · 双螺杆挤出车间",
        metricsAria: "台益制造与检测数据",
        metricLabels: ["年改性材料产能", "自有双螺杆生产线", "厂内检测设备"],
        metricNotes: ["吨/年", "条", "台"],
        documentsTitle: "项目资料",
        documentsBody: "TDS、SDS、COA、REACH、RoHS 的可用性按牌号与项目确认。",
        documentsAria: "可按牌号与项目确认的资料类型",
        documentsAction: "索取项目资料",
        documentTypeDescriptions: [
          "技术数据",
          "安全与操作",
          "批次检测结果",
          "物质合规",
          "限用物质",
        ],
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
