export type CaseStoryCopy = {
  title: string;
  industry: string;
  summary: string;
  customer: string;
  challenge: string;
  solution: string[];
  result: string;
  stage: string;
};

export type GlassFiberCaseStudy = {
  id: string;
  slug: string;
  grade: string;
  glassFiber: number;
  copy: { zh: CaseStoryCopy; en: CaseStoryCopy };
};

// Source: anonymous project accounts supplied by the user on 2026-09-08.
// Keep customer feedback and current validation stages distinct from catalog properties.
export const glassFiberCaseStudies: GlassFiberCaseStudy[] = [
  {
    id: "gf-case-01", slug: "egh402h-window-regulator-carrier", grade: "EGH402H", glassFiber: 20,
    copy: {
      zh: {
        title: "汽车玻璃升降器承载板", industry: "汽车门系统",
        summary: "针对高温持续载荷下的安装区变形，采用 EGH402H 20% 玻纤增强 POM，结合试模调整改善孔位稳定性。",
        customer: "客户是一家汽车门系统零部件制造商，生产电动车门玻璃升降器中的承载板。零件用于固定电机、导轨和钢丝绳机构，需要在反复升降过程中保持安装孔及导向结构的位置稳定。",
        challenge: "原先使用的普通未增强 POM 可以通过功能测试，但在夏季高温条件和持续载荷下，电机安装区域出现轻微变形。长时间循环后，部分安装孔位置发生偏移，玻璃升降过程中的噪音随之增加。",
        solution: ["根据提高刚性、同时控制高玻纤比例带来的成型难度这一要求，Taiyi Polymer 推荐 EGH402H 20% 玻纤增强 POM。", "第一次试模后，技术团队分析了加强筋附近的轻微翘曲，并建议调整局部保压和模温，以改善取向与收缩的稳定性。"],
        result: "据客户反馈，第二轮试模后，承载板整体刚性提高，高温放置后的安装孔位置更加稳定。客户完成装配和玻璃升降循环测试后，没有再观察到原方案中的明显变形，项目进入整车进一步验证阶段。",
        stage: "整车项目进一步验证",
      },
      en: {
        title: "Automotive window regulator carrier plate", industry: "Automotive door systems",
        summary: "EGH402H POM with 20% glass fiber and molding adjustments helped improve mounting-hole stability under heat and sustained load.",
        customer: "An automotive door-system component manufacturer produces carrier plates for electric window regulators. The plate locates the motor, guide rails and cable mechanism, keeping mounting holes and guides aligned through repeated window operation.",
        challenge: "The original unfilled POM passed functional testing, but the motor mounting area showed slight deformation under summer heat and sustained load. After extended cycling, some mounting holes shifted and window-operation noise increased.",
        solution: ["Taiyi Polymer recommended EGH402H POM with 20% glass fiber to increase stiffness while limiting the molding difficulty associated with higher reinforcement levels.", "Following the first molding trial, the team reviewed slight warpage near the ribs and recommended adjustments to local packing and mold temperature to improve orientation and shrinkage consistency."],
        result: "The customer reported greater overall stiffness and more stable hole positions after heat exposure in the second molding trial. Assembly and window cycling tests no longer showed the pronounced deformation seen with the original material. The part moved into further vehicle-project validation.",
        stage: "Further vehicle-project validation",
      },
    },
  },
  {
    id: "gf-case-02", slug: "egh602h-wiper-motor-gearbox", grade: "EGH602H", glassFiber: 30,
    copy: {
      zh: {
        title: "汽车雨刮电机齿轮箱壳体", industry: "汽车雨刮系统",
        summary: "采用 EGH602H 30% 玻纤增强 POM，并调整轴孔附近结构与浇口，改善电机发热后的齿轮中心距稳定性。",
        customer: "客户生产汽车雨刮电机内部的小型齿轮箱壳体。壳体需要定位齿轮轴和电机组件，对轴孔间距和长期刚性要求较高。",
        challenge: "原使用普通 POM，室温下尺寸合格，但电机持续运行发热后，轴承支撑区域存在微量变形。长期循环后，齿轮啮合间隙发生变化，噪音升高。",
        solution: ["针对结构刚性不足的问题，Taiyi Polymer 推荐改用 EGH602H 30% 玻纤增强 POM。", "技术团队建议减少轴孔周围的壁厚突变，并调整浇口位置，使玻纤流向尽可能沿主要受力方向排列。"],
        result: "重新试模后，客户反馈轴承支撑区域刚性提高。连续运行测试中，齿轮中心距更加稳定，运行噪音没有出现原材料后期逐渐增加的情况，随后开始小批量生产验证。",
        stage: "小批量生产验证",
      },
      en: {
        title: "Automotive wiper motor gearbox housing", industry: "Automotive wiper systems",
        summary: "EGH602H POM with 30% glass fiber, revised shaft-hole geometry and gate placement helped stabilize gear center distances as the motor heated up.",
        customer: "The customer manufactures compact gearbox housings for automotive wiper motors. The housing locates gear shafts and motor components, requiring accurate shaft-hole spacing and sustained stiffness.",
        challenge: "The original standard POM met dimensional requirements at room temperature, but the bearing supports deformed slightly as the motor generated heat during continuous operation. Extended cycling changed the gear mesh clearance and increased noise.",
        solution: ["Taiyi Polymer recommended EGH602H POM with 30% glass fiber to address insufficient structural stiffness.", "The team also recommended reducing abrupt wall-thickness changes around shaft holes and adjusting gate placement to encourage fiber alignment along the principal load direction."],
        result: "After remolding, the customer reported stiffer bearing supports. Continuous-operation tests showed more stable gear center distances, without the gradual noise increase observed with the original material. The customer then began small-batch production validation.",
        stage: "Small-batch production validation",
      },
    },
  },
  {
    id: "gf-case-03", slug: "egh202h-water-pump-support", grade: "EGH202H", glassFiber: 10,
    copy: {
      zh: {
        title: "精密水泵叶轮支撑座", industry: "家用水泵",
        summary: "以 EGH202H 10% 玻纤增强 POM 配合固定耳圆角优化，兼顾支撑强度、小型卡扣和薄壁结构的成型需求。",
        customer: "客户生产小型家用水泵，POM 零件作为叶轮及转轴的支撑座，需要兼顾尺寸稳定、机械强度以及较复杂的小尺寸结构。",
        challenge: "普通 POM 的流动性和成型外观没有问题，但高负荷运行时，固定耳位置偶尔产生应力变形。改用高比例玻纤材料时，客户又担心小型卡扣和薄壁区域的韧性下降。",
        solution: ["Taiyi Polymer 先选择 EGH202H 10% 玻纤增强 POM，通过较低的玻纤比例提高结构强度，同时兼顾韧性和成型需求。", "试模过程中还优化了固定耳根部的圆角，减少局部应力集中。"],
        result: "试制零件装配时没有出现卡扣断裂，固定耳区域刚性相比原未增强材料有所提高。客户完成水泵连续运行测试后，没有发现明显永久变形，保留该材料作为此结构的候选量产方案。",
        stage: "候选量产方案",
      },
      en: {
        title: "Precision water pump impeller support", industry: "Domestic water pumps",
        summary: "EGH202H POM with 10% glass fiber and revised mounting-lug radii balanced support strength with small snap-fit and thin-wall molding requirements.",
        customer: "A small domestic water pump manufacturer uses the POM component to support the impeller and shaft. The part combines dimensional and mechanical requirements with intricate, small-scale features.",
        challenge: "Standard POM provided acceptable flow and appearance, but the mounting lugs occasionally deformed under high operating loads. Higher glass-fiber levels raised concerns about toughness in small snap-fits and thin walls.",
        solution: ["Taiyi Polymer selected EGH202H POM with 10% glass fiber as the initial trial material, using a lower reinforcement level to improve structural strength while considering toughness and molding requirements.", "The molding trial also included larger radii at the lug roots to reduce local stress concentration."],
        result: "The trial parts assembled without broken snap-fits, and the mounting lugs were stiffer than those made from the original unfilled material. The customer found no obvious permanent deformation after continuous pump operation and retained the material as a production candidate for this design.",
        stage: "Production candidate retained",
      },
    },
  },
  {
    id: "gf-case-04", slug: "egh502h-seat-adjuster-positioning-plate", grade: "EGH502H", glassFiber: 25,
    copy: {
      zh: {
        title: "汽车座椅调节机构定位板", industry: "汽车座椅系统",
        summary: "EGH502H 25% 玻纤增强 POM 用于多筋位定位板，在试模中同时评估充模完整性和反复调节后的孔位稳定性。",
        customer: "客户生产汽车座椅电动调节机构，其中一块注塑定位板用于固定传动轴、齿轮和限位机构。零件有多个加强筋、孔位和薄壁区域，对刚性和充模能力同时有要求。",
        challenge: "之前测试的高玻纤 POM 刚性足够，但复杂筋位偶尔短射。改用流动性更高的普通 POM 后，充模改善，座椅反复调节后的孔位稳定性却不足。",
        solution: ["Taiyi Polymer 推荐 EGH502H 25% 玻纤增强 POM。目录记录的熔体流动速率约为 8.5 g/10 min（ISO 1133，195 °C/2.16 kg），作为该复杂筋位结构的试模选材依据之一。", "试模中同步优化注射速度和模温，避免仅依靠提高料温来解决充模问题。"],
        result: "客户反馈，试模后复杂筋位能够完整充填，没有再发现明显短射。机构循环测试中轴孔位置保持稳定，材料随后进入下一阶段耐久测试和整机认证流程。",
        stage: "耐久测试与整机认证阶段",
      },
      en: {
        title: "Automotive seat adjuster positioning plate", industry: "Automotive seating systems",
        summary: "EGH502H POM with 25% glass fiber was trialed in a ribbed positioning plate to address both filling and hole-position stability during repeated adjustment.",
        customer: "The customer makes electric automotive seat adjustment mechanisms. An injection-molded plate locates the drive shaft, gears and travel-limit mechanism. Multiple ribs, holes and thin walls require both stiffness and adequate filling.",
        challenge: "A previously tested high-glass-fiber POM was sufficiently stiff but occasionally short-shot in complex rib areas. A higher-flow standard POM improved filling, but hole positions lacked stability after repeated seat adjustment.",
        solution: ["Taiyi Polymer recommended EGH502H POM with 25% glass fiber. Its catalog melt flow rate of approximately 8.5 g/10 min (ISO 1133, 195 °C/2.16 kg) was one input to material selection for the molding trial.", "Injection speed and mold temperature were adjusted together, rather than relying solely on a higher melt temperature to improve filling."],
        result: "The customer reported fully filled rib features with no further obvious short shots. Shaft-hole positions remained stable during mechanism cycling, and the material moved to the next stage of durability testing and complete-system certification work.",
        stage: "Durability and system certification stage",
      },
    },
  },
  {
    id: "gf-case-05", slug: "egh302h-vending-machine-drive-gear", grade: "EGH302H", glassFiber: 15,
    copy: {
      zh: {
        title: "自动售货机传动齿轮", industry: "自动售货设备",
        summary: "针对卡料负载下的齿根变形，采用 EGH302H 15% 玻纤增强 POM，并优化齿根圆角，在样机上检查启停与噪声表现。",
        customer: "客户生产自动售货机内部驱动机构，其中较大尺寸的 POM 齿轮负责带动出货机构。工作特点是低速、高频启停，并会受到短时间冲击负荷。",
        challenge: "普通 POM 齿轮正常工作时没有问题，但在高负载卡料情况下，齿根存在变形，长期使用后啮合精度下降。客户又担心过高玻纤比例会增加齿面磨损和噪音。",
        solution: ["Taiyi Polymer 选择 EGH302H 15% 玻纤增强 POM，重点在齿根刚性、韧性和成型稳定性之间取得平衡。", "同时建议适当增加齿根圆角，减少启停冲击产生的局部应力。"],
        result: "据客户反馈，试制齿轮装机后，异常卡料测试中的齿根变形程度降低。连续启停测试中齿形保持较稳定，没有观察到明显异常噪声。",
        stage: "样机卡料与启停测试完成",
      },
      en: {
        title: "Vending machine drive gear", industry: "Vending equipment",
        summary: "EGH302H POM with 15% glass fiber and revised tooth-root radii addressed deformation during jams, with start-stop behavior and noise checked in the machine.",
        customer: "The customer produces drive mechanisms for vending machines. A relatively large POM gear drives the dispensing mechanism at low speed with frequent starts and stops and occasional short impact loads.",
        challenge: "The original standard POM gear worked normally, but its tooth roots deformed under high loads during product jams. Gear mesh accuracy declined over time. The customer was also concerned that higher glass-fiber levels could increase flank wear and noise.",
        solution: ["Taiyi Polymer selected EGH302H POM with 15% glass fiber to balance tooth-root stiffness, toughness and molding consistency.", "The team also recommended increasing tooth-root radii to reduce local stress during start-stop impacts."],
        result: "The customer reported less tooth-root deformation in abnormal-jam testing after installing the trial gears. Tooth profiles remained relatively stable through repeated start-stop testing, with no obvious abnormal noise observed.",
        stage: "Prototype jam and start-stop tests completed",
      },
    },
  },
  {
    id: "gf-case-06", slug: "egh602h-valve-actuator-bracket", grade: "EGH602H", glassFiber: 30,
    copy: {
      zh: {
        title: "工业阀门执行器结构支架", industry: "工业阀门执行器",
        summary: "以 EGH602H 30% 玻纤增强 POM 配合圆角及筋位调整，改善持续静载下的支架变形与传动定位。",
        customer: "客户生产工业电动阀门执行器，其中 POM 支架负责固定微型电机、减速机构和限位开关。零件长期承受静载，需要保持多个安装位置之间的尺寸关系。",
        challenge: "原材料在装配初期可以满足要求，但数周持续加载后出现轻微蠕变，电机轴与减速齿轮位置发生偏差。客户希望继续使用 POM，而不是改成金属支架。",
        solution: ["针对长期结构刚性这一主要需求，Taiyi Polymer 推荐 EGH602H 30% 玻纤增强 POM。", "同时建议增加局部圆角、调整加强筋方向，使主要玻纤取向与支架主要受力方向更加一致。"],
        result: "客户反馈，新材料样件在持续载荷测试中的结构保持能力优于原方案。执行器装配后，齿轮啮合位置保持稳定，项目开始进行长期寿命验证。",
        stage: "长期寿命验证",
      },
      en: {
        title: "Industrial valve actuator support bracket", industry: "Industrial valve actuators",
        summary: "EGH602H POM with 30% glass fiber, revised radii and rib alignment helped limit bracket deformation and maintain drive alignment under sustained load.",
        customer: "The customer manufactures industrial electric valve actuators. A POM bracket holds the small motor, reduction mechanism and limit switches, maintaining the relative positions of several mounting points under long-term static load.",
        challenge: "The original material met initial assembly requirements, but slight creep appeared after several weeks of continuous loading. This shifted the motor shaft relative to the reduction gears. The customer wanted to retain POM rather than adopt a metal bracket.",
        solution: ["Taiyi Polymer recommended EGH602H POM with 30% glass fiber, focusing on sustained structural stiffness as the main requirement.", "The team also suggested larger local radii and revised rib directions to better align the main fiber orientation with the bracket's principal load direction."],
        result: "The customer reported better shape retention than the original design in sustained-load tests. Gear mesh positions remained stable after actuator assembly, and the project entered long-term life validation.",
        stage: "Long-term life validation",
      },
    },
  },
  {
    id: "gf-case-07", slug: "egh402t-thermostatic-valve-positioning", grade: "EGH402T", glassFiber: 20,
    copy: {
      zh: {
        title: "卫浴恒温阀内部定位组件", industry: "卫浴恒温阀",
        summary: "EGH402T 20% 玻纤增强 POM 用于阀芯定位与支撑，结合环形结构的收缩检查，改善冷热循环后的尺寸稳定性。",
        customer: "客户生产淋浴恒温阀，POM 零件用于内部阀芯组件的定位和结构支撑。零件长期接触冷热水循环，要求装配尺寸稳定。",
        challenge: "原使用未增强 POM，在冷热循环和持续装配应力共同作用下，部分薄壁支撑位置出现尺寸漂移，阀芯旋转阻力随之变化。",
        solution: ["根据降低长期结构变形、而非追求极高刚性的需求，Taiyi Polymer 提供 EGH402T 20% 玻纤增强 POM 样品。", "试模重点检查环形结构的收缩方向，并针对模温和保压进行调整。"],
        result: "第二次试模样件的尺寸稳定性改善。客户完成冷热水循环和装配测试后，反馈旋转扭矩变化比原方案更小，材料随后进入客户内部长期耐久测试。",
        stage: "客户内部长期耐久测试",
      },
      en: {
        title: "Thermostatic shower valve positioning component", industry: "Thermostatic shower valves",
        summary: "EGH402T POM with 20% glass fiber and shrinkage review of the annular geometry helped improve cartridge support stability after hot-cold water cycling.",
        customer: "The customer produces thermostatic shower valves. The POM component positions and supports the internal cartridge assembly, with stable assembly dimensions required during repeated hot-cold water exposure.",
        challenge: "With unfilled POM, some thin support features drifted dimensionally under combined thermal cycling and sustained assembly stress. This changed the resistance to cartridge rotation.",
        solution: ["Taiyi Polymer supplied EGH402T POM with 20% glass fiber to address long-term structural deformation without targeting the highest possible stiffness.", "Molding trials focused on directional shrinkage in the annular structure, with adjustments to mold temperature and packing."],
        result: "Dimensional stability improved in the second molding trial. Following hot-cold water cycling and assembly tests, the customer reported smaller changes in rotational torque than with the original design. The material then entered the customer's internal long-term durability testing.",
        stage: "Internal long-term durability testing",
      },
    },
  },
  {
    id: "gf-case-08", slug: "egh502t-solar-tracker-drive-connector", grade: "EGH502T", glassFiber: 25,
    copy: {
      zh: {
        title: "太阳能跟踪器小型传动连接件", industry: "太阳能跟踪系统",
        summary: "采用 EGH502T 25% 玻纤增强 POM，并重新分配连接孔周围的载荷，改善重复加载后的孔形保持。",
        customer: "客户生产太阳能跟踪系统的小型执行机构，POM 连接件负责电机减速组件与调节机构之间的力传递，需要长期承受重复机械负载。",
        challenge: "普通 POM 在短期运行中没有明显问题，但模拟长期载荷后，连接孔出现轻微椭圆化，机构间隙逐渐增加。客户希望提高刚性，同时保留塑料方案的低重量和批量注塑优势。",
        solution: ["Taiyi Polymer 推荐 EGH502T 25% 玻纤增强 POM。", "同时调整连接孔周围的筋位，使载荷从单一孔壁分散到更大的结构区域，避免单纯依靠增加材料厚度解决问题。"],
        result: "客户反馈，新样件重复加载后连接孔的保持情况改善，机构间隙增长速度下降，随后扩大样品数量进行整机寿命验证。",
        stage: "扩大样品量进行整机寿命验证",
      },
      en: {
        title: "Solar tracker actuator drive connector", industry: "Solar tracking systems",
        summary: "EGH502T POM with 25% glass fiber and redistributed loading around the connection hole improved hole-shape retention after repeated loading.",
        customer: "The customer makes compact actuators for solar tracking systems. A POM connector transmits force between the motor reduction assembly and the adjustment mechanism under repeated mechanical loads.",
        challenge: "Standard POM showed no obvious issue in short-term operation, but simulated long-term loading made the connection hole slightly oval and progressively increased mechanism clearance. The customer wanted more stiffness while retaining low weight and injection-molding production.",
        solution: ["Taiyi Polymer recommended EGH502T POM with 25% glass fiber.", "Ribs around the connection hole were revised to distribute load over a larger structural area instead of relying only on a thicker hole wall."],
        result: "The customer reported improved hole-shape retention after repeated loading and a slower increase in mechanism clearance. More samples were then prepared for complete-system life validation.",
        stage: "Expanded-sample system life validation",
      },
    },
  },
  {
    id: "gf-case-09", slug: "egh402h-coffee-grinder-motor-support", grade: "EGH402H", glassFiber: 20,
    copy: {
      zh: {
        title: "咖啡机研磨机构电机支座", industry: "商用咖啡设备",
        summary: "EGH402H 20% 玻纤增强 POM 用于研磨电机支座，在频繁启停与振动条件下改善电机和传动组件的位置保持。",
        customer: "客户生产商用咖啡机，零件作为研磨电机和传动组件的安装支座，需要在设备频繁启停及振动条件下保持位置稳定。",
        challenge: "普通 POM 支座长期工作后发生微量变形，电机与传动机构的同轴度变化，产生额外振动和噪音。客户不希望改用会增加零件数量和装配成本的金属方案。",
        solution: ["Taiyi Polymer 推荐 EGH402H 20% 玻纤增强 POM，以中等玻纤比例提高支座结构刚性。", "首次试模发现局部表面有轻微纤维纹，随后调整模温和注射速度，改善外观并兼顾结构性能。"],
        result: "重新试制后，客户反馈支座装配尺寸稳定，连续运行测试中的电机位置变化减少。研磨机构的振动和异常噪音得到改善，项目继续进行整机寿命测试。",
        stage: "整机寿命测试",
      },
      en: {
        title: "Coffee grinder motor support", industry: "Commercial coffee equipment",
        summary: "EGH402H POM with 20% glass fiber helped maintain motor and drive-component positions in a grinder support exposed to frequent starts and vibration.",
        customer: "The customer produces commercial coffee machines. The component mounts the grinding motor and transmission assembly, maintaining their positions during frequent starts, stops and vibration.",
        challenge: "The original standard POM support deformed slightly over prolonged operation. Motor-to-drive alignment changed, causing additional vibration and noise. A metal design would have increased part count and assembly cost, which the customer wanted to avoid.",
        solution: ["Taiyi Polymer recommended EGH402H POM with 20% glass fiber, using a moderate reinforcement level to increase support stiffness.", "Slight fiber marks appeared on local surfaces in the first trial. Mold temperature and injection speed were adjusted to improve appearance while considering structural performance."],
        result: "After remolding, the customer reported stable assembly dimensions and less movement of the motor position during continuous-operation tests. Grinder vibration and abnormal noise improved, and the project continued into complete-machine life testing.",
        stage: "Complete-machine life testing",
      },
    },
  },
  {
    id: "gf-case-10", slug: "egh502h-conveyor-chain-attachment", grade: "EGH502H", glassFiber: 25,
    copy: {
      zh: {
        title: "物流输送设备链条附件", industry: "输送与包装设备",
        summary: "采用 EGH502H 25% 玻纤增强 POM，配合筋位与壁厚优化，改善悬臂侧向变形，减少继续加厚带来的成型问题。",
        customer: "客户制造食品和包装行业输送设备。注塑连接附件安装在输送链条上，用于固定导向件和产品定位机构，需要承受大量重复机械循环与侧向载荷。",
        challenge: "普通 POM 的摩擦表现满足需要，但较长的悬臂结构在侧向负荷下刚性不足。客户增加壁厚后，又遇到冷却时间增加和局部缩水的问题。",
        solution: ["Taiyi Polymer 建议采用 EGH502H 25% 玻纤增强 POM，通过提高材料刚性减少结构变形。", "同时优化加强筋和局部壁厚，以更薄的结构满足刚性要求。"],
        result: "客户反馈，试模后零件能够正常充模，悬臂区域受力变形比原方案更小，也避免了继续增加壁厚造成的严重缩水。客户完成输送线样机测试后，开始小批量验证。",
        stage: "小批量验证",
      },
      en: {
        title: "Conveyor chain attachment", industry: "Conveying and packaging equipment",
        summary: "EGH502H POM with 25% glass fiber, revised ribs and local wall thickness improved lateral cantilever stiffness without continued wall thickening.",
        customer: "The customer builds conveyors for food and packaging operations. Injection-molded attachments on the chain secure guides and product-positioning mechanisms through many repeated mechanical cycles and lateral loads.",
        challenge: "Standard POM provided acceptable friction behavior, but the long cantilever lacked stiffness under lateral load. Increasing wall thickness led to longer cooling times and local sink marks.",
        solution: ["Taiyi Polymer recommended EGH502H POM with 25% glass fiber to reduce structural deformation through greater material stiffness.", "Ribs and local wall thickness were revised to meet stiffness requirements with a thinner structure."],
        result: "The customer reported normal filling in the molding trial, less loaded deflection of the cantilever and avoidance of the severe sink marks associated with continued wall thickening. Small-batch validation began after testing on a prototype conveyor line.",
        stage: "Small-batch validation",
      },
    },
  },
];

export const getGlassFiberCasePath = (study: GlassFiberCaseStudy) => `/case-studies/${study.slug}` as const;
export const getGlassFiberCaseStudy = (slug: string) => glassFiberCaseStudies.find((study) => study.slug === slug);
