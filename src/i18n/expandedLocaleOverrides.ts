import type { LocalizedUrlSegment } from "./config.ts";
import { applicationNarrativeLocaleOverrides } from "./applicationNarrativeLocaleOverrides.ts";
import { aboutLocaleOverrides } from "./aboutLocaleOverrides.ts";
import { automotiveExpandedLocaleOverrides } from "./automotiveExpandedLocaleOverrides.ts";
import { componentDetailLocaleOverrides } from "./componentDetailLocaleOverrides.ts";
import { categoryLocaleOverrides } from "./categoryLocaleOverrides.ts";

type TranslationOverrides = Readonly<Record<string, string>>;

export const expandedLocaleOverrides: Partial<
  Record<LocalizedUrlSegment, TranslationOverrides>
> = {
  de: {
    ...categoryLocaleOverrides.de,
    ...aboutLocaleOverrides.de,
    ...automotiveExpandedLocaleOverrides.de,
    ...applicationNarrativeLocaleOverrides.de,
    ...componentDetailLocaleOverrides.de,
    "IC 周转托盘": "IC-Handling-Trays",
    精密塑料齿轮: "Präzisionszahnräder aus Kunststoff",
    "聚焦改性 POM 的工程塑料制造商":
      "Hersteller für modifiziertes POM",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "Taiyi Polymer ist die internationale Marke von Jiangsu Taiyi Nano Technology Co., Ltd. Seit 2003 entwickeln und fertigen wir in Yancheng modifiziertes POM sowie ausgewählte PA6-, PA66- und PPA-Compounds. Werkstoffprüfung, stabile Produktion und Chargendokumentation sind dabei in einem Fertigungssystem gebündelt.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "Die Werkstoffauswahl beginnt beim Spritzgussteil und seinen Einsatzbedingungen. Bewegungsart, Belastung, Umgebung, Abmessungen, Werkzeugstand und benötigte Unterlagen bestimmen, welche modifizierten POM-Typen verglichen werden. Liegt das Zielprofil außerhalb des sinnvollen POM-Bereichs, werden PA6, PA66 und PPA separat bewertet.",
    查看材料范围: "Werkstoffe entdecken",
    查看制造能力: "Fertigung ansehen",
    从零部件需求到候选牌号评估:
      "Von Bauteilanforderungen zur Bewertung von Kandidatenwerkstofftypen",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Klar abgegrenztes Werkstoffportfolio mit durchgängiger Entscheidungsunterstützung",
    支撑试制批次与重复订单的生产规模:
      "Produktionskapazität für Versuchschargen und wiederholte Aufträge",
    从零部件需求到重复供货:
      "Vom Bauteil zur Serienbelieferung",
    "申请 POM 牌号评估": "Bewertung eines POM-Werkstofftyps anfragen",
    供应商准入: "Lieferantenqualifizierung",
    查看供应商准入依据:
      "Nachweise zur Lieferantenqualifizierung prüfen",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Bleibt ein gelisteter Werkstofftyp nach der Vorauswahl ein geeigneter Kandidat, wird er anhand von TDS-Daten, Spritzgießbedingungen, Mustern und Versuchen mit repräsentativen Bauteilen validiert, bevor die wiederholte Belieferung besprochen wird. Andernfalls werden eine Formulierungsanpassung oder ein kundenspezifischer Werkstofftyp nur bei klaren technischen Zielwerten, Validierungsbedingungen und erwartetem Produktionsvolumen geprüft.",
    工程沟通始终与生产保持连接:
      "Technische Abstimmung bleibt mit der Produktion verbunden",
    用于供应商准入的关键证据:
      "Zentrale Nachweise für die Lieferantenqualifizierung",
    为国际项目提供材料支持:
      "Werkstoffunterstützung für internationale Projekte",
    与台益沟通: "Mit Taiyi Polymer sprechen",
    相关零部件方案: "Zugehörige Bauteillösungen",
    相关零部件: "Relevante Bauteile",
    查看零部件方案: "Bauteillösung anzeigen",
    下一步: "Nächster Schritt",
    运动与耐久: "Bewegung und Dauerhaltbarkeit",
    "摩擦、冲击与环境暴露": "Reibung, Schlagbeanspruchung und Umweltexposition",
    刚度与尺寸控制: "Steifigkeit und Maßhaltigkeit",
    "增强、收缩与成型稳定性": "Verstärkung, Schwindung und Formstabilität",
    功能与成型基准: "Funktion und Verarbeitungsbasis",
    "电气表现、基础树脂与流动窗口":
      "Elektrisches Verhalten, Basisharz und Fließfenster",
    "POM 牌号目录与改性材料家族 | 台益":
      "POM-Typenkatalog und modifizierte Werkstofffamilien | Taiyi Polymer",
    "台益 POM 材料家族与牌号目录":
      "Taiyi Polymer POM-Werkstofffamilien und Typenkatalog",
    "POM 材料组合": "POM-Werkstoffauswahl",
    "POM 材料家族与牌号目录": "POM-Werkstofffamilien und Typenkatalog",
    "先确认零件的主导性能缺口，再从耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动或基础树脂等 PLATFORM POM 家族中筛选方向。":
      "Bestimmen Sie zuerst die maßgebliche Leistungsanforderung des Bauteils und wählen Sie dann die passende Richtung aus PLATFORM POM-Werkstofffamilien für Verschleiß und geringe Reibung, Schlagzähigkeit, Witterungsbeständigkeit, Verstärkung, leitfähige und antistatische Eigenschaften, hohe Fließfähigkeit oder Basisharz.",
    "浏览全部 POM 材料家族": "Alle POM-Werkstofffamilien ansehen",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "Vergleichen Sie ausgehend von der Bauteilanforderung POM-Werkstofffamilien für Verschleiß, Schlagzähigkeit, Witterungsbeständigkeit, Verstärkung, Funktion, Fließverhalten und Basisharz.",
    提交应用要求: "Werkstoffempfehlung anfordern",
    "查找牌号数据与 TDS": "Werkstoffdaten und TDS durchsuchen",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Für alle 33 gelisteten PA6-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, im definierten Konditionierungszustand und am realen Bauteil erfolgen.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Gehen Sie von der maßgeblichen Leistungslücke aus und bewerten Sie anschließend die Kandidatenwerkstofftypen unter Berücksichtigung von Feuchtigkeitsaufnahme, Werkzeug, Verarbeitungsfenster und tatsächlichen Einsatzbedingungen.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Für alle 37 gelisteten PA66-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, im definierten Konditionierungszustand und am realen Bauteil erfolgen.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Für alle 5 gelisteten PPA-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, unter realen Temperaturzyklen und am Bauteil erfolgen.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Diese Seite unterstützt die technische Vorauswahl anhand von Werkstoffrichtungen und Kerndaten. Für jeden Typ stehen außerdem eine vollständige Detailseite, Leistungsdaten und ein Pfad zur Projektbewertung zur Verfügung.",
    查看中文牌号数据: "Werkstoffdaten anzeigen",
    查看中文牌号页: "Detailseite anzeigen",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 33 gelisteten PA6-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 37 gelisteten PA66-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 5 gelisteten PPA-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "PA6 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PA6-Typen verfügbar?",
    "PA66 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PA66-Typen verfügbar?",
    "PPA 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PPA-Typen verfügbar?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Sobald ein Kandidatenwerkstofftyp feststeht, sind vor einer wiederholten Belieferung die verfügbaren TDS, die Spritzgießbedingungen und Versuche mit repräsentativen Bauteilen zu bestätigen. Eine kundenspezifische Formulierungsprüfung setzt klar definierte technische Ziele, Validierungsbedingungen und erwartete Mengen voraus.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Für Bauteile, die durch carbonfaserverstärktes POM eine höhere Steifigkeit oder elektrische Funktion erreichen sollen.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Für Bauteile zur Kontrolle elektrostatischer Ladung; Widerstandsbereich, Prüfmethode und Einsatzumgebung bestimmen die Auswahl des Werkstofftyps.",
    定义电性能目标: "Ziel für das elektrische Verhalten definieren",
    "先明确所需的电性能以及测量方式。抗静电、静电耗散和导电目标应以范围和测试方法定义，而不能只依赖标签。":
      "Zunächst sind das geforderte elektrische Verhalten und die Messmethode festzulegen. Antistatische, statisch ableitende und leitfähige Ziele müssen durch Bereiche und Prüfmethoden definiert werden, nicht nur durch Bezeichnungen.",
    表面或体积电阻率: "Oberflächen- oder Volumenwiderstand",
    "所需的抗静电、静电耗散或导电性能":
      "Gefordertes antistatisches, statisch ableitendes oder leitfähiges Verhalten",
    定义零件条件: "Bauteilbedingungen definieren",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Ergänzen Sie die Bauteil- und Projektbedingungen, die die Eignung des Werkstofftyps und den Erhalt der mechanischen Eigenschaften beeinflussen können.",
    颜色要求: "Farbanforderungen",
    "TDS、文件与样品需求": "TDS-, Dokumenten- und Musterbedarf",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "Das endgültige elektrische Verhalten ist am spritzgegossenen Bauteil nach der vereinbarten Prüfmethode und unter der vorgesehenen Einsatzumgebung zu bestätigen.",
    汽车结构件: "Strukturbauteile für den Automobilbau",
    "工业壳体、支架与精密注塑件":
      "Industriegehäuse, Halterungen und Präzisionsspritzgussteile",
    中文工程塑料分类页: "Deutsche Kategorieseite für technische Kunststoffe",
    中文工程塑料牌号页: "Deutsche Detailseite für technische Kunststoffe",
    中文跨材料导电与抗静电目录:
      "Deutscher materialübergreifender Leitfähigkeits- und Antistatik-Katalog",
  },
  fr: {
    ...categoryLocaleOverrides.fr,
    ...aboutLocaleOverrides.fr,
    ...automotiveExpandedLocaleOverrides.fr,
    ...applicationNarrativeLocaleOverrides.fr,
    ...componentDetailLocaleOverrides.fr,
    "IC 周转托盘": "Plateaux de manutention pour circuits intégrés",
    "EAI210 PA66 抗冲改性牌号 | 台益":
      "EAI210 PA66 modifié choc | Taiyi Polymer",
    "EAI210 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI210 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EAI220 PA66 抗冲改性牌号 | 台益":
      "EAI220 PA66 modifié choc | Taiyi Polymer",
    "EAI220 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI220 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EAI250 PA66 抗冲改性牌号 | 台益":
      "EAI250 PA66 modifié choc | Taiyi Polymer",
    "EAI250 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI250 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EHI602T 高冲击高伸长方向 POM | 台益":
      "EHI602T POM à haute résistance aux chocs et à fort allongement | Taiyi Polymer",
    "准备 EAG108U 牌号评估": "Préparer l’évaluation du grade EAG108U",
    "准备 EAG130H 牌号评估": "Préparer l’évaluation du grade EAG130H",
    "准备 EAG140U 牌号评估": "Préparer l’évaluation du grade EAG140U",
    "准备 EAG230 牌号评估": "Préparer l’évaluation du grade EAG230",
    "准备 EAI120 牌号评估": "Préparer l’évaluation du grade EAI120",
    "准备 EAM140A 牌号评估": "Préparer l’évaluation du grade EAM140A",
    "聚焦改性 POM 的工程塑料制造商":
      "Fabricant de POM modifiés",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "Taiyi Polymer est la marque internationale de Jiangsu Taiyi Nano Technology Co., Ltd. Depuis 2003, notre site de Yancheng développe et fabrique des POM modifiés ainsi qu’une sélection de compounds PA6, PA66 et PPA. Les essais matière, la production récurrente et la documentation des lots sont coordonnés au sein du même système industriel.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "Le choix du matériau part de la pièce injectée et de ses conditions d’utilisation. Mouvement, charge, environnement, dimensions, avancement de l’outillage et documents requis déterminent les grades de POM modifié à comparer. Si le profil visé sort du domaine pertinent du POM, le PA6, le PA66 et le PPA sont évalués séparément.",
    查看材料范围: "Découvrir nos matériaux",
    查看制造能力: "Voir notre production",
    从零部件需求到候选牌号评估:
      "Des exigences de la pièce à l’évaluation des grades candidats",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Un portefeuille de matériaux mieux ciblé, relié à l’ensemble du processus de décision",
    支撑试制批次与重复订单的生产规模:
      "Des capacités de production pour les lots d’essai et les commandes récurrentes",
    从零部件需求到重复供货:
      "Des exigences de la pièce à la série",
    "申请 POM 牌号评估": "Demander une étude de grade POM",
    供应商准入: "Qualification fournisseur",
    查看供应商准入依据:
      "Consulter les justificatifs de qualification fournisseur",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Lorsqu’un grade répertorié reste candidat après la présélection, il est validé à partir des données TDS, des conditions de moulage, des échantillons et d’essais sur des pièces représentatives avant d’aborder l’approvisionnement récurrent. Dans le cas contraire, un ajustement de formulation ou un grade sur mesure n’est envisagé qu’avec des objectifs techniques, des conditions de validation et un volume de production prévu clairement définis.",
    工程沟通始终与生产保持连接:
      "Les échanges techniques restent reliés à la production",
    用于供应商准入的关键证据:
      "Les preuves essentielles pour la qualification fournisseur",
    为国际项目提供材料支持:
      "Un support matériaux pour les projets internationaux",
    与台益沟通: "Échanger avec Taiyi Polymer",
    相关零部件方案: "Solutions de composants associées",
    相关零部件: "Pièces concernées",
    查看零部件方案: "Voir la solution pour ce composant",
    下一步: "Étape suivante",
    运动与耐久: "Mouvement et durabilité",
    "摩擦、冲击与环境暴露": "Frottement, impact et exposition environnementale",
    刚度与尺寸控制: "Rigidité et maîtrise dimensionnelle",
    "增强、收缩与成型稳定性": "Renforcement, retrait et stabilité au moulage",
    功能与成型基准: "Fonctions et base de transformation",
    "电气表现、基础树脂与流动窗口":
      "Comportement électrique, résine de base et fenêtre d’écoulement",
    "先确认零件的主导性能缺口，再从耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动或基础树脂等 PLATFORM POM 家族中筛选方向。":
      "Identifiez d’abord l’exigence de performance déterminante de la pièce, puis choisissez l’orientation adaptée parmi les familles de POM PLATFORM pour l’usure et le faible frottement, la résistance au choc, la tenue aux intempéries, le renforcement, les propriétés conductrices et antistatiques, la haute fluidité ou la résine de base.",
    "浏览全部 POM 材料家族": "Voir toutes les familles de POM",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "À partir des exigences de la pièce, comparez les familles de POM pour l’usure, l’impact, la tenue aux intempéries, le renforcement, les fonctions, la fluidité et la résine de base.",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Les 33 grades PA6 répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, l’état de conditionnement défini et la pièce réelle.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Partez de l’écart de performance dominant, puis évaluez les grades candidats en tenant compte de l’absorption d’humidité, du moule, de la fenêtre de transformation et des conditions réelles d’utilisation.",
    "当短射、熔接痕或压力问题可能来自浇口、流道、排气、温控或设备能力时，应先确认模具与工艺根因，再判断是否需要更高流动牌号。":
      "Lorsque des manques de matière, des marques de soudure ou des problèmes de pression peuvent provenir du point d’injection, des canaux d’alimentation, des évents, de la régulation de température ou des capacités de la presse, il faut d’abord confirmer les causes liées au moule et au procédé avant de déterminer si un grade plus fluide est nécessaire.",
    "本页用于 ECF200 的初步选型。碳纤增强材料具有方向性；浇口、流向、熔接线、壁厚、表面状态和测量位置都会影响力学与电性能。":
      "Cette page sert à la présélection de l’ECF200. Les matériaux renforcés de fibres de carbone sont anisotropes ; le point d’injection, le sens d’écoulement, les lignes de soudure, l’épaisseur de paroi, l’état de surface et la position de mesure influencent les propriétés mécaniques et électriques.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Les 37 grades PA66 répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, l’état de conditionnement défini et la pièce réelle.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Les 5 grades PPA répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, les cycles de température réels et la pièce.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Cette page permet une présélection technique à partir des orientations matériau et des données clés. Chaque grade donne également accès à une page détaillée, aux données de performance et au parcours d’évaluation du projet.",
    查看中文牌号数据: "Voir les données du grade",
    查看中文牌号页: "Voir la fiche du grade",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 33 grades PA6 répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 37 grades PA66 répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 5 grades PPA répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "PA6 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PA6 ?",
    "PA66 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PA66 ?",
    "PPA 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PPA ?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Une fois un grade candidat identifié, confirmer avant tout approvisionnement récurrent les TDS disponibles, les conditions de moulage et les essais sur des pièces représentatives. L’étude d’une formulation sur mesure exige des objectifs techniques, des conditions de validation et des volumes prévisionnels clairement définis.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Pour les pièces qui doivent obtenir une rigidité supérieure ou une fonction électrique grâce à un POM renforcé de fibres de carbone.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Pour les pièces nécessitant un contrôle électrostatique ; la plage de résistance, la méthode d’essai et l’environnement d’utilisation déterminent le choix du grade.",
    定义电性能目标: "Définir l’objectif de performance électrique",
    "先明确所需的电性能以及测量方式。抗静电、静电耗散和导电目标应以范围和测试方法定义，而不能只依赖标签。":
      "Définir d’abord la performance électrique requise et la méthode de mesure. Les objectifs antistatiques, dissipatifs électrostatiques et conducteurs doivent être exprimés par des plages et des méthodes d’essai, et non par de simples désignations.",
    表面或体积电阻率: "Résistivité surfacique ou volumique",
    "所需的抗静电、静电耗散或导电性能":
      "Performance antistatique, dissipative électrostatique ou conductrice requise",
    定义零件条件: "Définir les conditions de la pièce",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Préciser les conditions de la pièce et du projet susceptibles d’influencer l’aptitude du grade et le maintien des propriétés mécaniques.",
    颜色要求: "Exigences de couleur",
    "TDS、文件与样品需求": "Besoins en TDS, documents et échantillons",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "La performance électrique finale doit être confirmée sur la pièce injectée, selon la méthode d’essai convenue et dans l’environnement d’utilisation prévu.",
    汽车结构件: "Pièces structurelles automobiles",
    "工业壳体、支架与精密注塑件":
      "Boîtiers industriels, supports et pièces moulées par injection de précision",
    中文工程塑料分类页: "Page française de catégorie des plastiques techniques",
    中文工程塑料牌号页: "Page française de grade des plastiques techniques",
    中文跨材料导电与抗静电目录:
      "Catalogue français multimatériaux conducteurs et antistatiques",
  },
  "pt-br": {
    ...categoryLocaleOverrides["pt-br"],
    ...aboutLocaleOverrides["pt-br"],
    ...automotiveExpandedLocaleOverrides["pt-br"],
    ...applicationNarrativeLocaleOverrides["pt-br"],
    ...componentDetailLocaleOverrides["pt-br"],
    "IC 周转托盘": "Bandejas para manuseio de CIs",
    "EAI210 PA66 抗冲改性牌号 | 台益":
      "EAI210 PA66 modificado para impacto | Taiyi Polymer",
    "EAI210 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI210 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EAI220 PA66 抗冲改性牌号 | 台益":
      "EAI220 PA66 modificado para impacto | Taiyi Polymer",
    "EAI220 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI220 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EAI250 PA66 抗冲改性牌号 | 台益":
      "EAI250 PA66 modificado para impacto | Taiyi Polymer",
    "EAI250 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI250 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EHI602T 高冲击高伸长方向 POM | 台益":
      "EHI602T POM de alto impacto e alto alongamento | Taiyi Polymer",
    "准备 EAI250 牌号评估": "Preparar a avaliação do grau EAI250",
    "准备 EAR210 牌号评估": "Preparar a avaliação do grau EAR210",
    "聚焦改性 POM 的工程塑料制造商":
      "Fabricante de POM modificado",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "A Taiyi Polymer é a marca internacional da Jiangsu Taiyi Nano Technology Co., Ltd. Desde 2003, nossa unidade em Yancheng desenvolve e fabrica POM modificado e compostos selecionados de PA6, PA66 e PPA. Testes de materiais, produção recorrente e documentação de lotes são coordenados no mesmo sistema de fabricação.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "A seleção do material começa pela peça moldada e por suas condições de uso. Movimento, carga, ambiente, dimensões, estágio do ferramental e documentação determinam quais graus de POM modificado devem ser comparados. Quando o perfil desejado fica fora da faixa prática do POM, PA6, PA66 e PPA são avaliados separadamente.",
    查看材料范围: "Conheça nossos materiais",
    查看制造能力: "Ver nossa produção",
    从零部件需求到候选牌号评估:
      "Dos requisitos da peça à avaliação de graus candidatos",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Um portfólio de materiais mais definido, conectado a todo o processo decisório",
    支撑试制批次与重复订单的生产规模:
      "Capacidade de produção para lotes piloto e pedidos recorrentes",
    从零部件需求到重复供货: "Dos requisitos da peça ao fornecimento recorrente",
    "申请 POM 牌号评估": "Solicitar avaliação de grau POM",
    供应商准入: "Qualificação de fornecedores",
    查看供应商准入依据:
      "Consultar evidências para qualificação de fornecedores",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Quando um grau listado permanece como candidato após a triagem inicial, ele é validado com dados TDS, condições de moldagem, amostras e ensaios em peças representativas antes da discussão sobre fornecimento recorrente. Caso contrário, o ajuste da formulação ou um grau personalizado só é avaliado com objetivos técnicos, condições de validação e volume de produção previsto claramente definidos.",
    工程沟通始终与生产保持连接:
      "A comunicação de engenharia permanece conectada à produção",
    用于供应商准入的关键证据:
      "Evidências essenciais para a qualificação de fornecedores",
    为国际项目提供材料支持: "Suporte de materiais para projetos internacionais",
    与台益沟通: "Fale com a Taiyi Polymer",
    相关零部件方案: "Soluções relacionadas para componentes",
    相关零部件: "Peças relacionadas",
    查看零部件方案: "Ver solução para o componente",
    下一步: "Próxima etapa",
    运动与耐久: "Movimento e durabilidade",
    "摩擦、冲击与环境暴露": "Atrito, impacto e exposição ambiental",
    刚度与尺寸控制: "Rigidez e controle dimensional",
    "增强、收缩与成型稳定性": "Reforço, contração e estabilidade de moldagem",
    功能与成型基准: "Funções e base de processamento",
    "电气表现、基础树脂与流动窗口":
      "Comportamento elétrico, resina base e janela de fluxo",
    "先确认零件的主导性能缺口，再从耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动或基础树脂等 PLATFORM POM 家族中筛选方向。":
      "Primeiro, identifique o requisito de desempenho determinante da peça e depois escolha a direção adequada entre as famílias de POM PLATFORM para desgaste e baixo atrito, resistência ao impacto, intempéries, reforço, propriedades condutivas e antiestáticas, alta fluidez ou resina base.",
    "浏览全部 POM 材料家族": "Ver todas as famílias de POM",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "A partir dos requisitos da peça, compare famílias de POM para desgaste, impacto, resistência às intempéries, reforço, função, fluxo e resina base.",
    "按材料选型、加工与问题排查、牌号数据与验证任务浏览台益技术资料。":
      "Explore os recursos técnicos da Taiyi Polymer por seleção de materiais, processamento e solução de problemas, dados de graus e tarefas de validação.",
    "材料选型、加工与验证资料":
      "Seleção de materiais, processamento e recursos de validação",
    "浏览材料选型、POM 注塑加工与问题排查、牌号数据以及替代牌号验证等实用资料。":
      "Explore recursos práticos sobre seleção de materiais, processamento e solução de problemas de moldagem por injeção de POM, dados de graus e validação de graus alternativos.",
    "查找牌号数据与 TDS": "Encontrar dados de graus e TDS",
    条资料: "artigos",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Todos os 33 graus PA6 listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, a condição de umidade definida e a peça real.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Comece pela principal lacuna de desempenho e, em seguida, avalie os graus candidatos considerando a absorção de umidade, o molde, a janela de processamento e as condições reais de uso.",
    "当短射、熔接痕或压力问题可能来自浇口、流道、排气、温控或设备能力时，应先确认模具与工艺根因，再判断是否需要更高流动牌号。":
      "Quando falhas de preenchimento, marcas de solda ou problemas de pressão puderem decorrer do ponto de injeção, dos canais de alimentação, da ventilação do molde, do controle de temperatura ou da capacidade da injetora, é preciso primeiro confirmar as causas relacionadas ao molde e ao processo antes de avaliar se é necessário um grau de maior fluidez.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Todos os 37 graus PA66 listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, a condição de umidade definida e a peça real.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Todos os 5 graus PPA listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, os ciclos reais de temperatura e a peça.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Esta página permite a pré-seleção técnica por direção de material e dados principais. Cada grau também dá acesso a uma página detalhada, aos dados de desempenho e ao caminho de avaliação do projeto.",
    查看中文牌号数据: "Ver dados do grau",
    查看中文牌号页: "Ver página do grau",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 33 graus PA6 listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 37 graus PA66 listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 5 graus PPA listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "PA6 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PA6?",
    "PA66 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PA66?",
    "PPA 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PPA?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Após identificar um grau candidato, confirme antes do fornecimento recorrente os TDS disponíveis, as condições de moldagem e os ensaios com peças representativas. A avaliação de uma formulação personalizada exige metas técnicas, condições de validação e volume previsto claramente definidos.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Para peças que precisam obter maior rigidez ou função elétrica com POM reforçado com fibra de carbono.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Para peças que exigem controle eletrostático; a faixa de resistência, o método de ensaio e o ambiente de uso determinam a seleção do grau.",
    定义电性能目标: "Definir a meta de desempenho elétrico",
    "先明确所需的电性能以及测量方式。抗静电、静电耗散和导电目标应以范围和测试方法定义，而不能只依赖标签。":
      "Primeiro, defina o desempenho elétrico necessário e o método de medição. As metas antiestáticas, dissipativas eletrostáticas e condutivas devem ser definidas por faixas e métodos de ensaio, não apenas por rótulos.",
    表面或体积电阻率: "Resistividade superficial ou volumétrica",
    "所需的抗静电、静电耗散或导电性能":
      "Desempenho antiestático, dissipativo eletrostático ou condutivo necessário",
    定义零件条件: "Definir as condições da peça",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Informe as condições da peça e do projeto que podem influenciar a adequação do grau e a retenção das propriedades mecânicas.",
    颜色要求: "Requisitos de cor",
    "TDS、文件与样品需求": "Necessidades de TDS, documentos e amostras",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "O desempenho elétrico final deve ser confirmado na peça moldada por injeção, conforme o método de ensaio acordado e no ambiente de uso previsto.",
    汽车结构件: "Peças estruturais automotivas",
    "工业壳体、支架与精密注塑件":
      "Caixas industriais, suportes e peças moldadas por injeção de precisão",
    中文工程塑料分类页:
      "Página brasileira de categoria de plásticos de engenharia",
    中文工程塑料牌号页: "Página brasileira de grau de plástico de engenharia",
    中文跨材料导电与抗静电目录:
      "Catálogo brasileiro multimaterial de compostos condutivos e antiestáticos",
  },
};
