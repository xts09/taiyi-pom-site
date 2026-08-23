import type { LocalizedUrlSegment } from "./config.ts";
import { applicationNarrativeLocaleOverrides } from "./applicationNarrativeLocaleOverrides.ts";
import { automotiveExpandedLocaleOverrides } from "./automotiveExpandedLocaleOverrides.ts";
import { componentDetailLocaleOverrides } from "./componentDetailLocaleOverrides.ts";

type TranslationOverrides = Readonly<Record<string, string>>;

export const expandedLocaleOverrides: Partial<
  Record<LocalizedUrlSegment, TranslationOverrides>
> = {
  de: {
    ...automotiveExpandedLocaleOverrides.de,
    ...applicationNarrativeLocaleOverrides.de,
    ...componentDetailLocaleOverrides.de,
    "IC 周转托盘": "IC-Handling-Trays",
    精密塑料齿轮: "Präzisionszahnräder aus Kunststoff",
    专注于工程塑料改性材料的制造商:
      "Hersteller für modifizierte technische Kunststoffe",
    从零部件需求到候选牌号评估:
      "Von Bauteilanforderungen zur Bewertung von Kandidatenwerkstofftypen",
    "服务工业材料项目，而不是追求宽泛目录":
      "Fokus auf industrielle Werkstoffprojekte statt auf einen möglichst breiten Katalog",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Klar abgegrenztes Werkstoffportfolio mit durchgängiger Entscheidungsunterstützung",
    支撑试制批次与重复订单的生产规模:
      "Produktionskapazität für Versuchschargen und wiederholte Aufträge",
    从零部件需求到重复供货:
      "Von Bauteilanforderungen zur wiederholten Lieferung",
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
    "从零件的运动方式、载荷、环境、尺寸控制和成型条件出发，先确定材料家族，再比较候选牌号、已发布数据与可提供的技术文件。":
      "Ausgangspunkt sind Bewegungsart, Last, Umgebung, Maßhaltigkeit und Formbedingungen des Bauteils. Wählen Sie zuerst die passende Werkstofffamilie und vergleichen Sie anschließend Werkstofftypen, veröffentlichte Daten und verfügbare technische Dokumente.",
    筛选路径: "Auswahlpfad",
    "先选择最接近零件要求的材料家族，再进入对应目录比较牌号。最终适用性仍需结合具体牌号、工况、模具和验证要求确认。":
      "Wählen Sie zunächst die Werkstofffamilie, die den Bauteilanforderungen am nächsten kommt, und vergleichen Sie anschließend die zugehörigen Typen. Die endgültige Eignung ist für den konkreten Werkstofftyp, die Einsatzbedingungen, das Werkzeug und die Validierungsanforderungen zu bestätigen.",
    按牌号与项目确认文件: "Dokumente nach Werkstofftyp und Projekt bestätigen",
    提交应用要求: "Werkstoffempfehlung anfordern",
    "查找牌号数据与 TDS": "Werkstoffdaten und TDS durchsuchen",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Für alle 33 gelisteten PA6-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, im definierten Konditionierungszustand und am realen Bauteil erfolgen.",
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
    中文工程塑料分类页: "Deutsche Kategorieseite für technische Kunststoffe",
    中文工程塑料牌号页: "Deutsche Detailseite für technische Kunststoffe",
    中文跨材料导电与抗静电目录:
      "Deutscher materialübergreifender Leitfähigkeits- und Antistatik-Katalog",
  },
  fr: {
    ...automotiveExpandedLocaleOverrides.fr,
    ...applicationNarrativeLocaleOverrides.fr,
    ...componentDetailLocaleOverrides.fr,
    "IC 周转托盘": "Plateaux de manutention pour circuits intégrés",
    专注于工程塑料改性材料的制造商:
      "Fabricant spécialisé dans la modification des plastiques techniques",
    从零部件需求到候选牌号评估:
      "Des exigences de la pièce à l’évaluation des grades candidats",
    "服务工业材料项目，而不是追求宽泛目录":
      "Servir des projets de matériaux industriels sans élargir inutilement le catalogue",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Un portefeuille de matériaux mieux ciblé, relié à l’ensemble du processus de décision",
    支撑试制批次与重复订单的生产规模:
      "Des capacités de production pour les lots d’essai et les commandes récurrentes",
    从零部件需求到重复供货:
      "Des exigences de la pièce à l’approvisionnement récurrent",
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
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Les 33 grades PA6 répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, l’état de conditionnement défini et la pièce réelle.",
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
    中文工程塑料分类页: "Page française de catégorie des plastiques techniques",
    中文工程塑料牌号页: "Page française de grade des plastiques techniques",
    中文跨材料导电与抗静电目录:
      "Catalogue français multimatériaux conducteurs et antistatiques",
  },
  "pt-br": {
    ...automotiveExpandedLocaleOverrides["pt-br"],
    ...applicationNarrativeLocaleOverrides["pt-br"],
    ...componentDetailLocaleOverrides["pt-br"],
    "IC 周转托盘": "Bandejas para manuseio de CIs",
    专注于工程塑料改性材料的制造商:
      "Fabricante especializado em compostos de plásticos de engenharia",
    从零部件需求到候选牌号评估:
      "Dos requisitos da peça à avaliação de graus candidatos",
    "服务工业材料项目，而不是追求宽泛目录":
      "Atender projetos de materiais industriais sem buscar um catálogo excessivamente amplo",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Um portfólio de materiais mais definido, conectado a todo o processo decisório",
    支撑试制批次与重复订单的生产规模:
      "Capacidade de produção para lotes piloto e pedidos recorrentes",
    从零部件需求到重复供货: "Dos requisitos da peça ao fornecimento recorrente",
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
    中文工程塑料分类页:
      "Página brasileira de categoria de plásticos de engenharia",
    中文工程塑料牌号页: "Página brasileira de grau de plástico de engenharia",
    中文跨材料导电与抗静电目录:
      "Catálogo brasileiro multimaterial de compostos condutivos e antiestáticos",
  },
};
