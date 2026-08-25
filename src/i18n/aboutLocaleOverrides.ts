import type { LocalizedUrlSegment } from "./config.ts";

type AboutTranslationOverrides = Readonly<Record<string, string>>;

export const aboutLocaleOverrides: Partial<
  Record<LocalizedUrlSegment, AboutTranslationOverrides>
> = {
  de: {
    制造基础: "Fertigungsbasis",
    "自 2003 年扎根盐城制造": "Fertigung in Yancheng seit 2003",
    "配方开发、改性造粒、材料检测和批次文件由同一基地团队协同完成。":
      "Rezepturentwicklung, Compoundierung, Werkstoffprüfung und Chargendokumentation werden von einem Team am selben Standort koordiniert.",
    材料重点: "Werkstoffschwerpunkt",
    "以改性 POM 为核心的材料体系":
      "Werkstoffportfolio mit modifiziertem POM im Mittelpunkt",
    技术沟通直达实验室与生产:
      "Direkte technische Abstimmung mit Labor und Fertigung",
    "项目需求由技术、实验室、生产和质量团队共同响应。":
      "Technik, Labor, Fertigung und Qualität bearbeiten die Projektanforderungen gemeinsam.",
    联系台益: "Taiyi Polymer kontaktieren",
    谈谈您的零部件与材料要求: "Sprechen wir über Ihre Bauteil- und Werkstoffanforderungen",
    "请提供应用、工况、目标性能或所需文件，我们会安排相应团队跟进。":
      "Nennen Sie uns Anwendung, Einsatzbedingungen, Zielwerte oder benötigte Dokumente. Das passende Team übernimmt die weitere Abstimmung.",
    材料与牌号咨询: "Fragen zu Werkstoffen und Werkstofftypen",
    样品与技术文件: "Muster und technische Dokumente",
    生产与供货: "Fertigung und Belieferung",
    "改性工程塑料制造商 | 台益":
      "Hersteller für modifizierte technische Kunststoffe | Taiyi Polymer",
    "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌，专注于改性 POM 及其他精选改性工程塑料。":
      "Taiyi Polymer ist die internationale Werkstoffmarke von Jiangsu Taiyi Nano Technology Co., Ltd. Der Schwerpunkt liegt auf modifiziertem POM und ausgewählten technischen Kunststoffcompounds.",
    替代牌号评估: "Bewertung eines alternativen Werkstofftyps",
    年改性材料产能: "Jährliche Compound-Kapazität",
    "吨/年": "Tonnen pro Jahr",
    制造业务始于: "Fertigung seit",
    盐城工程塑料制造: "Technische Kunststoffe aus Yancheng",
    双螺杆生产线: "Doppelschneckenlinien",
    自有挤出生产线: "Eigene Extrusionslinien",
    工厂面积: "Werksfläche",
    平方米: "Quadratmeter",
    检测设备: "Prüfgeräte",
    厂内设备数量: "Geräte im eigenen Labor",
    企业资质: "Unternehmensauszeichnung",
    国家高新技术企业: "National anerkanntes Hightech-Unternehmen",
    省级资质: "Auszeichnung der Provinz Jiangsu",
    江苏省专精特新中小企业:
      "Spezialisiertes und innovatives KMU der Provinz Jiangsu",
    知识产权: "Geistiges Eigentum",
    "29 项授权专利": "29 erteilte Patente",
    位于中国江苏盐城的台益工厂: "Taiyi Polymer-Werk in Yancheng, Jiangsu, China",
    位于中国江苏盐城的台益工厂外景:
      "Außenansicht des Taiyi Polymer-Werks in Yancheng, Jiangsu, China",
    工厂外景: "Werksansicht",
    台益生产与仓储区域: "Produktions- und Lagerbereich von Taiyi Polymer",
    改性生产车间: "Compoundierhalle",
    台益双螺杆挤出生产线: "Doppelschnecken-Extrusionslinie von Taiyi Polymer",
    挤出生产线: "Extrusionslinie",
    台益挤出机及生产设备: "Extruder und Produktionsanlagen von Taiyi Polymer",
    生产设备: "Produktionsanlagen",
    台益材料检测实验室及评估设备:
      "Werkstoffprüflabor und Prüfgeräte von Taiyi Polymer",
    材料检测实验室: "Werkstoffprüflabor",
    讨论您的项目: "Ihr Projekt besprechen",
    从零部件需求开始: "Beginnen wir mit den Anforderungen Ihres Bauteils",
    "告诉我们零部件功能、使用条件、目标性能或当前牌号，我们会根据现有信息建议下一步。":
      "Nennen Sie uns Bauteilfunktion, Einsatzbedingungen, Zielwerte oder den derzeit verwendeten Werkstofftyp. Auf dieser Grundlage empfehlen wir den nächsten sinnvollen Schritt.",
    新零部件选材: "Werkstoffauswahl für ein neues Bauteil",
    "申请样品或完整 TDS": "Muster oder vollständiges TDS anfordern",
    讨论您的应用: "Ihre Anwendung besprechen",
    查看联系方式: "Kontaktmöglichkeiten anzeigen",
    从零部件需求到重复供货: "Von Bauteilanforderungen zur Serienbelieferung",
    可提供的材料资料: "Verfügbare Werkstoffdokumente",
    管理体系: "Managementsysteme",
    全球合作: "Internationale Zusammenarbeit",
    "我们围绕零部件实际需求推进筛选、验证与供货准备，每一步都有对应的资料或测试依据。":
      "Ausgehend von den realen Bauteilanforderungen führen wir Auswahl, Validierung und Lieferfreigabe Schritt für Schritt zusammen. Jede Phase stützt sich auf passende Daten oder Prüfungen.",
    确认零部件需求: "Bauteilanforderungen klären",
    "先了解零部件功能、载荷、使用环境、加工方式和当前材料问题。":
      "Zunächst klären wir Bauteilfunktion, Lasten, Einsatzumgebung, Verarbeitungsverfahren und das aktuelle Werkstoffproblem.",
    筛选候选牌号: "Kandidaten auswählen",
    "根据材料系列、改性方向和关键性能要求缩小候选范围。":
      "Anhand von Werkstofffamilie, Modifizierungsart und den entscheidenden Leistungsanforderungen grenzen wir geeignete Kandidaten ein.",
    完成样品验证: "Mit Mustern validieren",
    "结合样品、测试条件和可用资料，确认候选牌号是否适合进入零部件验证。":
      "Muster, Prüfbedingungen und verfügbare Unterlagen zeigen, ob ein Kandidat für die Validierung am realen Bauteil geeignet ist.",
    准备重复供货: "Serienbelieferung vorbereiten",
    "牌号确认后，协调生产计划与批次文件，为重复订单做好准备。":
      "Nach der Werkstofffreigabe koordinieren wir Produktionsplanung und Chargendokumente für wiederkehrende Aufträge.",
    让技术沟通直接连接实验室与生产:
      "Technische Abstimmung verbindet Labor und Fertigung direkt",
    "从材料评估到供货准备，技术、实验室、生产和质量团队围绕同一项目协作。":
      "Von der Werkstoffbewertung bis zur Lieferfreigabe arbeiten Technik, Labor, Fertigung und Qualität mit denselben Projektanforderungen.",
    技术对接: "Technische Abstimmung",
    实验室测试: "Laborprüfung",
    质量文件: "Qualitätsdokumentation",
    项目审核所需的资质与文件:
      "Nachweise und Dokumente für die Projektprüfung",
    "企业资质、管理体系证书和材料文件可按项目要求提供。":
      "Unternehmensnachweise, Managementsystem-Zertifikate und Werkstoffdokumente sind projektbezogen verfügbar.",
    已认证的管理体系: "Zertifizierte Managementsysteme",
    与全球客户开展材料合作: "Werkstoffkooperation mit Kunden weltweit",
    "现有合作覆盖中亚、欧洲、东亚和美洲多个市场。":
      "Bestehende Kooperationen reichen über Märkte in Zentralasien, Europa, Ostasien und Amerika.",
    制造依据: "Fertigung",
    "改性 POM": "Modifiziertes POM",
    改性工程塑料: "Technische Kunststoffcompounds",
    材料评估: "Werkstoffbewertung",
    生产与重复供货: "Produktion und Serienbelieferung",
    "围绕材料选择、验证与稳定供货开展工作":
      "Werkstoffauswahl, Validierung und verlässliche Serienbelieferung aus einer Hand",
    核心材料: "Kernwerkstoff",
    "提供面向注塑零部件的耐磨、低摩擦、增强、导电等功能型改性 POM。":
      "Modifiziertes POM für Spritzgussteile, die Verschleißfestigkeit, geringe Reibung, Verstärkung, Leitfähigkeit oder andere funktionale Eigenschaften erfordern.",
    补充材料: "Ergänzende Werkstoffe",
    "补充提供 PA6、PA66 与 PPA 改性材料，覆盖不同的耐热、刚性与韧性需求。":
      "Ergänzend bieten wir modifizierte PA6-, PA66- und PPA-Werkstoffe für unterschiedliche Anforderungen an Wärmebeständigkeit, Steifigkeit und Zähigkeit.",
    选材阶段: "Werkstoffauswahl",
    "候选牌号筛选始于零部件功能、使用条件、加工限制和验证要求。":
      "Die Auswahl geeigneter Kandidaten beginnt mit Bauteilfunktion, Einsatzbedingungen, Verarbeitungsgrenzen und Validierungsanforderungen.",
    量产阶段: "Serienbelieferung",
    "候选牌号确认后，由盐城基地协调试制、检测、批次文件和重复生产。":
      "Nach Bestätigung des Kandidaten koordiniert der Standort Yancheng Versuchsproduktion, Prüfungen, Chargendokumente und wiederkehrende Aufträge.",
    支撑试制与重复供货的制造体系:
      "Fertigung für Versuche und wiederkehrende Belieferung",
    "盐城基地承担改性造粒、试制安排与重复生产。":
      "Der Standort Yancheng übernimmt Compoundierung, Produktionsversuche und wiederkehrende Fertigung.",
    讨论生产与供货要求: "Fertigung und Belieferung besprechen",
    盐城生产基地: "Produktionsstandort Yancheng",
    发展历程: "Unsere Entwicklung",
    制造业务起步: "Beginn der Fertigung",
    至今: "Heute",
    "从零部件需求出发，筛选并验证候选牌号":
      "Vom Bauteil zum geeigneten Werkstofftyp",
    "我们先确认零部件功能、加工条件和目标性能，再筛选材料方向、核对牌号数据，并通过样品和测试推进验证。":
      "Wir klären zunächst Bauteilfunktion, Verarbeitungsbedingungen und Zielwerte. Anschließend grenzen wir geeignete Werkstoffrichtungen ein, prüfen die Daten der Kandidaten und unterstützen die Validierung mit Mustern und Tests.",
    "从盐城制造起步，持续聚焦改性材料":
      "Fertigung in Yancheng seit 2003, mit klarem Fokus auf modifizierte Werkstoffe",
    "公司于 2003 年在江苏盐城开展制造业务，至今仍以改性 POM 和其他精选改性工程塑料为核心。":
      "Das Unternehmen nahm 2003 in Yancheng, Jiangsu, die Fertigung auf. Bis heute stehen modifiziertes POM und ausgewählte technische Kunststoffcompounds im Mittelpunkt.",
    "2003 年，公司在江苏盐城启动制造业务。":
      "2003 nahm das Unternehmen in Yancheng, Jiangsu, die Fertigung auf.",
    "持续聚焦改性 POM": "Modifiziertes POM bleibt der Schwerpunkt",
    "如今，台益面向国际项目提供改性 POM 及其他精选改性工程塑料。":
      "Heute unterstützt Taiyi Polymer internationale Projekte mit modifiziertem POM und ausgewählten technischen Kunststoffcompounds.",
  },
  fr: {
    制造基础: "Base de production",
    "自 2003 年扎根盐城制造": "Production à Yancheng depuis 2003",
    "配方开发、改性造粒、材料检测和批次文件由同一基地团队协同完成。":
      "Le développement des formulations, le compoundage, les essais matière et la documentation des lots sont coordonnés par une même équipe sur le même site.",
    材料重点: "Matériaux",
    "以改性 POM 为核心的材料体系":
      "Un portefeuille centré sur les POM modifiés",
    技术沟通直达实验室与生产:
      "Un échange technique direct avec le laboratoire et la production",
    "项目需求由技术、实验室、生产和质量团队共同响应。":
      "Les équipes techniques, laboratoire, production et qualité répondent ensemble aux exigences du projet.",
    联系台益: "Contacter Taiyi Polymer",
    谈谈您的零部件与材料要求: "Parlons de vos exigences pièce et matière",
    "请提供应用、工况、目标性能或所需文件，我们会安排相应团队跟进。":
      "Indiquez l’application, les conditions d’utilisation, les performances visées ou les documents requis. L’équipe concernée assurera le suivi.",
    材料与牌号咨询: "Questions sur les matériaux et les grades",
    样品与技术文件: "Échantillons et documents techniques",
    生产与供货: "Production et approvisionnement",
    "改性工程塑料制造商 | 台益":
      "Fabricant de plastiques techniques modifiés | Taiyi Polymer",
    "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌，专注于改性 POM 及其他精选改性工程塑料。":
      "Taiyi Polymer est la marque internationale de Jiangsu Taiyi Nano Technology Co., Ltd. Elle se concentre sur les POM modifiés et une sélection de compounds de plastiques techniques.",
    替代牌号评估: "Évaluation d’un grade alternatif",
    年改性材料产能: "Capacité annuelle de compoundage",
    "吨/年": "Tonnes par an",
    制造业务始于: "Production depuis",
    盐城工程塑料制造: "Plastiques techniques produits à Yancheng",
    双螺杆生产线: "Lignes bivis",
    自有挤出生产线: "Lignes d’extrusion intégrées",
    工厂面积: "Surface du site",
    平方米: "Mètres carrés",
    检测设备: "Équipements d’essai",
    厂内设备数量: "Équipements du laboratoire interne",
    企业资质: "Reconnaissance de l’entreprise",
    国家高新技术企业: "Entreprise nationale de haute technologie",
    省级资质: "Reconnaissance de la province du Jiangsu",
    江苏省专精特新中小企业:
      "PME spécialisée et innovante de la province du Jiangsu",
    知识产权: "Propriété intellectuelle",
    "29 项授权专利": "29 brevets délivrés",
    位于中国江苏盐城的台益工厂: "Usine Taiyi Polymer à Yancheng, Jiangsu, Chine",
    位于中国江苏盐城的台益工厂外景:
      "Vue extérieure de l’usine Taiyi Polymer à Yancheng, Jiangsu, Chine",
    工厂外景: "Vue du site",
    台益生产与仓储区域: "Zone de production et de stockage de Taiyi Polymer",
    改性生产车间: "Atelier de compoundage",
    台益双螺杆挤出生产线: "Ligne d’extrusion bivis de Taiyi Polymer",
    挤出生产线: "Ligne d’extrusion",
    台益挤出机及生产设备: "Extrudeuse et équipements de production de Taiyi Polymer",
    生产设备: "Équipements de production",
    台益材料检测实验室及评估设备:
      "Laboratoire d’essais matière et équipements d’évaluation de Taiyi Polymer",
    材料检测实验室: "Laboratoire d’essais matière",
    讨论您的项目: "Échangeons sur votre projet",
    从零部件需求开始: "Commençons par les exigences de votre pièce",
    "告诉我们零部件功能、使用条件、目标性能或当前牌号，我们会根据现有信息建议下一步。":
      "Indiquez-nous la fonction de la pièce, les conditions d’utilisation, les performances visées ou le grade actuel. À partir de ces informations, nous vous proposerons la prochaine étape la plus utile.",
    新零部件选材: "Choix du matériau pour une nouvelle pièce",
    "申请样品或完整 TDS": "Demande d’échantillon ou de TDS complet",
    讨论您的应用: "Discuter de votre application",
    查看联系方式: "Voir les moyens de contact",
    从零部件需求到重复供货:
      "Des exigences de la pièce à l’approvisionnement récurrent",
    可提供的材料资料: "Documents matière disponibles",
    管理体系: "Systèmes de management",
    全球合作: "Coopération internationale",
    "我们围绕零部件实际需求推进筛选、验证与供货准备，每一步都有对应的资料或测试依据。":
      "À partir des besoins réels de la pièce, nous avançons étape par étape de la sélection à la validation puis à la préparation de l’approvisionnement. Chaque phase s’appuie sur les données ou les essais appropriés.",
    确认零部件需求: "Définir les exigences de la pièce",
    "先了解零部件功能、载荷、使用环境、加工方式和当前材料问题。":
      "Nous précisons d’abord la fonction de la pièce, les charges, l’environnement d’utilisation, le procédé de transformation et le problème rencontré avec le matériau actuel.",
    筛选候选牌号: "Sélectionner les grades candidats",
    "根据材料系列、改性方向和关键性能要求缩小候选范围。":
      "Nous réduisons la sélection selon la famille de matériaux, le type de modification et les performances déterminantes pour l’application.",
    完成样品验证: "Valider avec des échantillons",
    "结合样品、测试条件和可用资料，确认候选牌号是否适合进入零部件验证。":
      "Les échantillons, les conditions d’essai et les documents disponibles permettent de déterminer si le candidat peut passer à la validation sur pièce.",
    准备重复供货: "Préparer l’approvisionnement récurrent",
    "牌号确认后，协调生产计划与批次文件，为重复订单做好准备。":
      "Après confirmation du grade, nous coordonnons le planning de production et les documents de lot pour les commandes récurrentes.",
    让技术沟通直接连接实验室与生产:
      "Les échanges techniques relient directement le laboratoire et la production",
    "从材料评估到供货准备，技术、实验室、生产和质量团队围绕同一项目协作。":
      "De l’évaluation du matériau à la préparation de l’approvisionnement, les équipes techniques, laboratoire, production et qualité travaillent à partir des mêmes exigences projet.",
    技术对接: "Coordination technique",
    实验室测试: "Essais en laboratoire",
    质量文件: "Documentation qualité",
    项目审核所需的资质与文件:
      "Qualifications et documents pour la revue de projet",
    "企业资质、管理体系证书和材料文件可按项目要求提供。":
      "Les qualifications de l’entreprise, les certificats de systèmes de management et les documents matière sont disponibles selon les besoins du projet.",
    已认证的管理体系: "Systèmes de management certifiés",
    与全球客户开展材料合作: "Coopérer avec des clients du monde entier",
    "现有合作覆盖中亚、欧洲、东亚和美洲多个市场。":
      "Nos coopérations actuelles couvrent plusieurs marchés d’Asie centrale, d’Europe, d’Asie de l’Est et des Amériques.",
    制造依据: "Production",
    "改性 POM": "POM modifiés",
    改性工程塑料: "Compounds de plastiques techniques",
    材料评估: "Évaluation des matériaux",
    生产与重复供货: "Production et approvisionnement récurrent",
    "围绕材料选择、验证与稳定供货开展工作":
      "Des matériaux ciblés, de la sélection à la série",
    核心材料: "Matériau principal",
    "提供面向注塑零部件的耐磨、低摩擦、增强、导电等功能型改性 POM。":
      "Des POM modifiés pour les pièces injectées qui exigent résistance à l’usure, faible frottement, renforcement, conductivité ou autres propriétés fonctionnelles.",
    补充材料: "Matériaux complémentaires",
    "补充提供 PA6、PA66 与 PPA 改性材料，覆盖不同的耐热、刚性与韧性需求。":
      "Nous proposons également des compounds PA6, PA66 et PPA pour différents besoins de résistance thermique, de rigidité et de ténacité.",
    选材阶段: "Sélection du matériau",
    "候选牌号筛选始于零部件功能、使用条件、加工限制和验证要求。":
      "La sélection des candidats commence par la fonction de la pièce, les conditions d’utilisation, les contraintes de transformation et les exigences de validation.",
    量产阶段: "Approvisionnement série",
    "候选牌号确认后，由盐城基地协调试制、检测、批次文件和重复生产。":
      "Une fois le candidat confirmé, le site de Yancheng coordonne les essais de production, les contrôles, les documents de lot et les commandes récurrentes.",
    支撑试制与重复供货的制造体系:
      "Une production adaptée aux essais et aux commandes récurrentes",
    "盐城基地承担改性造粒、试制安排与重复生产。":
      "Le site de Yancheng prend en charge le compoundage, les essais de production et la production récurrente.",
    讨论生产与供货要求: "Échanger sur la production et l’approvisionnement",
    盐城生产基地: "Site de production de Yancheng",
    发展历程: "Notre parcours",
    制造业务起步: "Début de la production",
    至今: "Aujourd’hui",
    "从零部件需求出发，筛选并验证候选牌号":
      "Des exigences de la pièce à la sélection et à la validation d’un grade candidat",
    "我们先确认零部件功能、加工条件和目标性能，再筛选材料方向、核对牌号数据，并通过样品和测试推进验证。":
      "Nous commençons par préciser la fonction de la pièce, les conditions de transformation et les performances visées. Nous ciblons ensuite les matériaux adaptés, examinons les données des grades candidats et accompagnons la validation par des échantillons et des essais.",
    "从盐城制造起步，持续聚焦改性材料":
      "Une production à Yancheng depuis 2003, centrée sur les matériaux modifiés",
    "公司于 2003 年在江苏盐城开展制造业务，至今仍以改性 POM 和其他精选改性工程塑料为核心。":
      "L’entreprise a démarré sa production à Yancheng, dans le Jiangsu, en 2003. Les POM modifiés et une sélection de compounds de plastiques techniques restent aujourd’hui au cœur de son activité.",
    "2003 年，公司在江苏盐城启动制造业务。":
      "L’entreprise a démarré sa production à Yancheng, dans le Jiangsu, en 2003.",
    "持续聚焦改性 POM": "Les POM modifiés restent notre priorité",
    "如今，台益面向国际项目提供改性 POM 及其他精选改性工程塑料。":
      "Aujourd’hui, Taiyi Polymer accompagne des projets internationaux avec des POM modifiés et une sélection de compounds de plastiques techniques.",
  },
  "pt-br": {
    制造基础: "Base de produção",
    "自 2003 年扎根盐城制造": "Produção em Yancheng desde 2003",
    "配方开发、改性造粒、材料检测和批次文件由同一基地团队协同完成。":
      "Desenvolvimento de formulações, compoundagem, testes de materiais e documentação de lotes são coordenados por uma única equipe na mesma unidade.",
    材料重点: "Materiais",
    "以改性 POM 为核心的材料体系":
      "Portfólio de materiais com foco em POM modificado",
    技术沟通直达实验室与生产:
      "Contato técnico direto com laboratório e produção",
    "项目需求由技术、实验室、生产和质量团队共同响应。":
      "As equipes técnica, de laboratório, produção e qualidade respondem juntas aos requisitos do projeto.",
    联系台益: "Fale com a Taiyi Polymer",
    谈谈您的零部件与材料要求: "Vamos falar sobre os requisitos da sua peça e do material",
    "请提供应用、工况、目标性能或所需文件，我们会安排相应团队跟进。":
      "Informe a aplicação, as condições de uso, o desempenho desejado ou os documentos necessários. A equipe responsável dará continuidade.",
    材料与牌号咨询: "Dúvidas sobre materiais e graus",
    样品与技术文件: "Amostras e documentos técnicos",
    生产与供货: "Produção e fornecimento",
    "改性工程塑料制造商 | 台益":
      "Fabricante de plásticos de engenharia modificados | Taiyi Polymer",
    "台益是江苏台益纳米科技有限公司面向国际市场的材料品牌，专注于改性 POM 及其他精选改性工程塑料。":
      "Taiyi Polymer é a marca internacional da Jiangsu Taiyi Nano Technology Co., Ltd., com foco em POM modificado e compostos selecionados de plásticos de engenharia.",
    替代牌号评估: "Avaliação de grau alternativo",
    年改性材料产能: "Capacidade anual de produção de compostos",
    "吨/年": "Toneladas por ano",
    制造业务始于: "Produção desde",
    盐城工程塑料制造: "Plásticos de engenharia produzidos em Yancheng",
    双螺杆生产线: "Linhas de dupla rosca",
    自有挤出生产线: "Linhas próprias de extrusão",
    工厂面积: "Área da unidade",
    平方米: "Metros quadrados",
    检测设备: "Equipamentos de ensaio",
    厂内设备数量: "Equipamentos do laboratório interno",
    企业资质: "Reconhecimento empresarial",
    国家高新技术企业: "Empresa Nacional de Alta Tecnologia",
    省级资质: "Reconhecimento da província de Jiangsu",
    江苏省专精特新中小企业:
      "PME especializada e inovadora da província de Jiangsu",
    知识产权: "Propriedade intelectual",
    "29 项授权专利": "29 patentes concedidas",
    位于中国江苏盐城的台益工厂: "Fábrica da Taiyi Polymer em Yancheng, Jiangsu, China",
    位于中国江苏盐城的台益工厂外景:
      "Vista externa da fábrica da Taiyi Polymer em Yancheng, Jiangsu, China",
    工厂外景: "Vista da fábrica",
    台益生产与仓储区域: "Área de produção e armazenagem da Taiyi Polymer",
    改性生产车间: "Área de produção de compostos",
    台益双螺杆挤出生产线: "Linha de extrusão de dupla rosca da Taiyi Polymer",
    挤出生产线: "Linha de extrusão",
    台益挤出机及生产设备: "Extrusora e equipamentos de produção da Taiyi Polymer",
    生产设备: "Equipamentos de produção",
    台益材料检测实验室及评估设备:
      "Laboratório de ensaios de materiais e equipamentos de avaliação da Taiyi Polymer",
    材料检测实验室: "Laboratório de ensaios de materiais",
    讨论您的项目: "Vamos conversar sobre seu projeto",
    从零部件需求开始: "Comece pelos requisitos da peça",
    "告诉我们零部件功能、使用条件、目标性能或当前牌号，我们会根据现有信息建议下一步。":
      "Informe a função da peça, as condições de uso, o desempenho esperado ou o grau atual. Com base nessas informações, recomendaremos o próximo passo mais adequado.",
    新零部件选材: "Seleção de material para uma nova peça",
    "申请样品或完整 TDS": "Solicitação de amostra ou TDS completo",
    讨论您的应用: "Conversar sobre sua aplicação",
    查看联系方式: "Ver opções de contato",
    从零部件需求到重复供货:
      "Dos requisitos da peça ao fornecimento recorrente",
    可提供的材料资料: "Documentos de materiais disponíveis",
    管理体系: "Sistemas de gestão",
    全球合作: "Cooperação internacional",
    "我们围绕零部件实际需求推进筛选、验证与供货准备，每一步都有对应的资料或测试依据。":
      "Partimos dos requisitos reais da peça e avançamos, etapa por etapa, da seleção à validação e à preparação do fornecimento. Cada fase é sustentada pelos dados ou ensaios adequados.",
    确认零部件需求: "Definir os requisitos da peça",
    "先了解零部件功能、载荷、使用环境、加工方式和当前材料问题。":
      "Primeiro, entendemos a função da peça, as cargas, o ambiente de uso, o processo de transformação e o problema do material atual.",
    筛选候选牌号: "Selecionar graus candidatos",
    "根据材料系列、改性方向和关键性能要求缩小候选范围。":
      "Reduzimos as opções de acordo com a família de materiais, o tipo de modificação e os requisitos de desempenho mais importantes para a aplicação.",
    完成样品验证: "Validar com amostras",
    "结合样品、测试条件和可用资料，确认候选牌号是否适合进入零部件验证。":
      "Amostras, condições de ensaio e documentos disponíveis indicam se o candidato está pronto para a validação na peça.",
    准备重复供货: "Preparar o fornecimento recorrente",
    "牌号确认后，协调生产计划与批次文件，为重复订单做好准备。":
      "Após a confirmação do grau, coordenamos o planejamento de produção e os documentos de lote para os pedidos recorrentes.",
    让技术沟通直接连接实验室与生产:
      "A coordenação técnica conecta diretamente laboratório e produção",
    "从材料评估到供货准备，技术、实验室、生产和质量团队围绕同一项目协作。":
      "Da avaliação do material à preparação do fornecimento, as equipes técnica, de laboratório, produção e qualidade trabalham com os mesmos requisitos do projeto.",
    技术对接: "Coordenação técnica",
    实验室测试: "Ensaios de laboratório",
    质量文件: "Documentação da qualidade",
    项目审核所需的资质与文件:
      "Qualificações e documentos para análise do projeto",
    "企业资质、管理体系证书和材料文件可按项目要求提供。":
      "Qualificações da empresa, certificados de sistemas de gestão e documentos de materiais estão disponíveis conforme os requisitos do projeto.",
    已认证的管理体系: "Sistemas de gestão certificados",
    与全球客户开展材料合作: "Cooperação com clientes em todo o mundo",
    "现有合作覆盖中亚、欧洲、东亚和美洲多个市场。":
      "As cooperações atuais abrangem mercados na Ásia Central, Europa, Ásia Oriental e Américas.",
    制造依据: "Produção",
    "改性 POM": "POM modificado",
    改性工程塑料: "Compostos de plásticos de engenharia",
    材料评估: "Avaliação de materiais",
    生产与重复供货: "Produção e fornecimento recorrente",
    "围绕材料选择、验证与稳定供货开展工作":
      "Materiais direcionados, da seleção ao fornecimento recorrente",
    核心材料: "Material principal",
    "提供面向注塑零部件的耐磨、低摩擦、增强、导电等功能型改性 POM。":
      "POM modificado para peças injetadas que exigem resistência ao desgaste, baixo atrito, reforço, condutividade ou outras propriedades funcionais.",
    补充材料: "Materiais complementares",
    "补充提供 PA6、PA66 与 PPA 改性材料，覆盖不同的耐热、刚性与韧性需求。":
      "Também oferecemos compostos modificados de PA6, PA66 e PPA para diferentes requisitos de resistência térmica, rigidez e tenacidade.",
    选材阶段: "Seleção do material",
    "候选牌号筛选始于零部件功能、使用条件、加工限制和验证要求。":
      "A seleção dos candidatos começa pela função da peça, pelas condições de uso, pelas restrições de processamento e pelos requisitos de validação.",
    量产阶段: "Fornecimento em série",
    "候选牌号确认后，由盐城基地协调试制、检测、批次文件和重复生产。":
      "Após a confirmação do candidato, a unidade de Yancheng coordena a produção piloto, os ensaios, os documentos de lote e os pedidos recorrentes.",
    支撑试制与重复供货的制造体系:
      "Produção para testes e fornecimento recorrente",
    "盐城基地承担改性造粒、试制安排与重复生产。":
      "A unidade de Yancheng realiza compoundagem, testes de produção e produção recorrente.",
    讨论生产与供货要求: "Conversar sobre produção e fornecimento",
    盐城生产基地: "Unidade de produção de Yancheng",
    发展历程: "Nossa trajetória",
    制造业务起步: "Início da produção",
    至今: "Hoje",
    "从零部件需求出发，筛选并验证候选牌号":
      "Dos requisitos da peça à seleção e validação do grau candidato",
    "我们先确认零部件功能、加工条件和目标性能，再筛选材料方向、核对牌号数据，并通过样品和测试推进验证。":
      "Primeiro, alinhamos a função da peça, as condições de processamento e o desempenho esperado. Depois, direcionamos as opções de material, analisamos os dados dos graus candidatos e apoiamos a validação com amostras e ensaios.",
    "从盐城制造起步，持续聚焦改性材料":
      "Produção em Yancheng desde 2003, com foco em materiais modificados",
    "公司于 2003 年在江苏盐城开展制造业务，至今仍以改性 POM 和其他精选改性工程塑料为核心。":
      "A empresa iniciou a produção em Yancheng, Jiangsu, em 2003. O POM modificado e uma seleção de compostos de plásticos de engenharia continuam no centro da operação.",
    "2003 年，公司在江苏盐城启动制造业务。":
      "A empresa iniciou a produção em Yancheng, Jiangsu, em 2003.",
    "持续聚焦改性 POM": "POM modificado continua sendo o foco",
    "如今，台益面向国际项目提供改性 POM 及其他精选改性工程塑料。":
      "Hoje, a Taiyi Polymer atende projetos internacionais com POM modificado e uma seleção de compostos de plásticos de engenharia.",
  },
};
