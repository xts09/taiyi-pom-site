import {
  getEngineeringGfLandingPageData,
  type EngineeringGfLandingPageData,
  type EngineeringGfPolymer,
} from "@/data/engineeringGfLandingPages";
import type { LocalizedUrlSegment } from "@/i18n/config";

type LocalizedEngineeringGfPageCopy = Pick<
  EngineeringGfLandingPageData,
  | "parentLabel"
  | "title"
  | "metaTitle"
  | "metaDescription"
  | "heroEyebrow"
  | "heroDescription"
  | "navSubtitle"
  | "comparisonIntro"
  | "tradeoffs"
  | "applicationsIntro"
  | "applications"
  | "validationIntro"
  | "validationSteps"
  | "contactMaterial"
>;

export type EngineeringGfComparisonUi = {
  actionLabel: string;
  glassFiberLabel: string;
  densityLabel: string;
  tensileStressLabel: string;
  hdtLabel: string;
  flammabilityLabel: string;
  notPublishedLabel: string;
  disclosureLabel: string;
  scrollHint: string;
  regionAria: string;
  caption: string;
  gradeTdsLabel: string;
  flexuralStrengthLabel: string;
  flexuralModulusLabel: string;
  notchedImpactLabel: string;
  waterAbsorptionLabel: string;
  requestTdsAriaTemplate: string;
};

export type EngineeringGfLandingUi = {
  homeBreadcrumb: string;
  productsBreadcrumb: string;
  heroImageAlt: string;
  discussApplicationAction: string;
  technicalDataAction: string;
  navigationAriaTemplate: string;
  navTitleTemplate: string;
  compareTab: string;
  tradeoffsTab: string;
  applicationsTab: string;
  validationTab: string;
  gradeDirectoryEyebrow: string;
  gradeTitleTemplate: string;
  listedGradesTemplate: string;
  comparisonMethods: string;
  tradeoffsEyebrow: string;
  tradeoffsTitle: string;
  tradeoffsDescriptionTemplate: string;
  guideLinksAria: string;
  compareOtherTemplate: string;
  pa6Pa66Guide: string;
  reinforcementGuide: string;
  applicationsEyebrow: string;
  applicationsTitle: string;
  validationEyebrow: string;
  validationTitle: string;
  validationCaption: string;
  validationImageAlt: string;
  inquiryEyebrow: string;
  inquiryTitleTemplate: string;
  inquirySteps: readonly [string, string, string];
  inquiryBody: string;
  comparison: EngineeringGfComparisonUi;
};

const englishUi: EngineeringGfLandingUi = {
  homeBreadcrumb: "Home",
  productsBreadcrumb: "Products",
  heroImageAlt: "Taiyi Polymer twin-screw extrusion production line",
  discussApplicationAction: "Discuss Your Application",
  technicalDataAction: "Open Technical Data",
  navigationAriaTemplate: "{polymer} glass-fiber page navigation",
  navTitleTemplate: "{polymer} GF Compounds",
  compareTab: "Compare",
  tradeoffsTab: "Trade-offs",
  applicationsTab: "Applications",
  validationTab: "Validation",
  gradeDirectoryEyebrow: "Grade directory",
  gradeTitleTemplate: "{polymer} glass-fiber grades",
  listedGradesTemplate: "{count} listed grades",
  comparisonMethods:
    "Comparison basis: GF content ISO 1172; tensile stress ISO 527; flexural properties ISO 178; notched Charpy impact at 23 °C ISO 179/1eA; HDT at 1.8 MPa ISO 75; water absorption at 23 °C and 50% RH ISO 62. These are typical web reference values. The catalog does not specify the dry or conditioned state of the mechanical data; confirm it in the grade-specific TDS before final selection.",
  tradeoffsEyebrow: "Engineering Trade-offs",
  tradeoffsTitle: "Reinforcement changes more than stiffness",
  tradeoffsDescriptionTemplate:
    "Use GF content to narrow the {polymer} range, then evaluate the complete molded system. Higher listed reinforcement does not automatically produce the better part.",
  guideLinksAria: "PA material selection guides",
  compareOtherTemplate: "Compare {otherPolymer} GF grades →",
  pa6Pa66Guide: "PA6 or PA66? Selection guide →",
  reinforcementGuide: "Glass-fiber reinforcement guide →",
  applicationsEyebrow: "Application Context",
  applicationsTitle: "Connect the grade to the part architecture",
  validationEyebrow: "Before Final Selection",
  validationTitle: "Validate moisture, molding and the actual part",
  validationCaption:
    "In-house tensile-test specimen setup. Confirm the grade-specific test basis and moisture state before final selection.",
  validationImageAlt:
    "Taiyi Polymer tensile-test specimen clamped in laboratory testing equipment",
  inquiryEyebrow: "Project Inquiry",
  inquiryTitleTemplate:
    "Move from {polymer} GF screening to a molding decision",
  inquirySteps: [
    "Part & operating conditions",
    "Grade data & documents",
    "Molded-part validation",
  ],
  inquiryBody:
    "Share the part, current material, load, temperature, moisture state, mold stage, target properties and document requirements. Taiyi Polymer can help narrow the listed grades for project evaluation.",
  comparison: {
    actionLabel: "View grade data",
    glassFiberLabel: "Glass fiber",
    densityLabel: "Density",
    tensileStressLabel: "Tensile stress",
    hdtLabel: "HDT (1.8 MPa)",
    flammabilityLabel: "Flammability",
    notPublishedLabel: "Not published",
    disclosureLabel: "Full parameters & test methods",
    scrollHint: "Scroll sideways to compare all properties →",
    regionAria: "Glass-fiber grade comparison",
    caption: "Grades ordered by glass-fiber content",
    gradeTdsLabel: "Grade / TDS",
    flexuralStrengthLabel: "Flexural strength",
    flexuralModulusLabel: "Flexural modulus",
    notchedImpactLabel: "Notched impact",
    waterAbsorptionLabel: "Water absorption",
    requestTdsAriaTemplate: "Request Full TDS for {grade}",
  },
};

const localizedUi: Record<LocalizedUrlSegment, EngineeringGfLandingUi> = {
  de: {
    homeBreadcrumb: "Startseite",
    productsBreadcrumb: "Produkte",
    heroImageAlt: "Doppelschnecken-Extrusionslinie von Taiyi Polymer",
    discussApplicationAction: "Anwendung besprechen",
    technicalDataAction: "Technische Daten öffnen",
    navigationAriaTemplate: "Seitennavigation für {polymer}-Glasfaserwerkstoffe",
    navTitleTemplate: "{polymer}-GF-Compounds",
    compareTab: "Vergleich",
    tradeoffsTab: "Abwägungen",
    applicationsTab: "Anwendungen",
    validationTab: "Validierung",
    gradeDirectoryEyebrow: "Werkstofftypen-Verzeichnis",
    gradeTitleTemplate: "Glasfaserverstärkte {polymer}-Werkstofftypen",
    listedGradesTemplate: "{count} gelistete Werkstofftypen",
    comparisonMethods:
      "Vergleichsbasis: Glasfasergehalt nach ISO 1172; Zugspannung nach ISO 527; Biegeeigenschaften nach ISO 178; Charpy-Kerbschlagzähigkeit bei 23 °C nach ISO 179/1eA; HDT bei 1,8 MPa nach ISO 75; Wasseraufnahme bei 23 °C und 50 % relativer Luftfeuchte nach ISO 62. Dies sind typische Web-Referenzwerte. Der Katalog nennt für die mechanischen Daten keinen trockenen oder konditionierten Zustand; prüfen Sie diesen vor der endgültigen Auswahl im werkstofftypspezifischen TDS.",
    tradeoffsEyebrow: "Technische Abwägungen",
    tradeoffsTitle: "Verstärkung verändert mehr als nur die Steifigkeit",
    tradeoffsDescriptionTemplate:
      "Grenzen Sie die {polymer}-Auswahl anhand des Glasfaseranteils ein und bewerten Sie anschließend das vollständige Formteilsystem. Ein höherer gelisteter Verstärkungsanteil ergibt nicht automatisch das bessere Bauteil.",
    guideLinksAria: "Leitfäden zur PA-Werkstoffauswahl",
    compareOtherTemplate:
      "GF-Werkstofftypen aus {otherPolymer} vergleichen →",
    pa6Pa66Guide: "PA6 oder PA66? Auswahlleitfaden →",
    reinforcementGuide: "Leitfaden zur Glasfaserverstärkung →",
    applicationsEyebrow: "Anwendungskontext",
    applicationsTitle: "Werkstofftyp und Bauteilarchitektur zusammenführen",
    validationEyebrow: "Vor der endgültigen Auswahl",
    validationTitle: "Feuchte, Verarbeitung und reales Bauteil validieren",
    validationCaption:
      "Interner Aufbau für Zugprüfkörper. Prüfen Sie vor der endgültigen Auswahl die werkstofftypspezifische Prüfgrundlage und den Feuchtezustand.",
    validationImageAlt:
      "In einer Laborprüfmaschine eingespannter Zugprüfkörper von Taiyi Polymer",
    inquiryEyebrow: "Projektanfrage",
    inquiryTitleTemplate:
      "Von der {polymer}-GF-Vorauswahl zur Formteilentscheidung",
    inquirySteps: [
      "Bauteil und Einsatzbedingungen",
      "Werkstoffdaten und Dokumente",
      "Validierung des Formteils",
    ],
    inquiryBody:
      "Teilen Sie uns Bauteil, aktuellen Werkstoff, Last, Temperatur, Feuchtezustand, Werkzeugphase, Zielwerte und Dokumentanforderungen mit. Taiyi Polymer kann die gelisteten Werkstofftypen für die Projektbewertung eingrenzen.",
    comparison: {
      actionLabel: "Werkstoffdaten ansehen",
      glassFiberLabel: "Glasfaser",
      densityLabel: "Dichte",
      tensileStressLabel: "Zugspannung",
      hdtLabel: "HDT (1,8 MPa)",
      flammabilityLabel: "Entflammbarkeit",
      notPublishedLabel: "Nicht veröffentlicht",
      disclosureLabel: "Vollständige Parameter und Prüfmethoden",
      scrollHint: "Für alle Eigenschaften seitlich scrollen →",
      regionAria: "Vergleich glasfaserverstärkter Werkstofftypen",
      caption: "Werkstofftypen nach Glasfasergehalt sortiert",
      gradeTdsLabel: "Werkstofftyp / TDS",
      flexuralStrengthLabel: "Biegefestigkeit",
      flexuralModulusLabel: "Biegemodul",
      notchedImpactLabel: "Kerbschlagzähigkeit",
      waterAbsorptionLabel: "Wasseraufnahme",
      requestTdsAriaTemplate: "Vollständiges TDS für {grade} anfordern",
    },
  },
  fr: {
    homeBreadcrumb: "Accueil",
    productsBreadcrumb: "Produits",
    heroImageAlt: "Ligne d’extrusion bivis de Taiyi Polymer",
    discussApplicationAction: "Échanger sur votre application",
    technicalDataAction: "Ouvrir les données techniques",
    navigationAriaTemplate:
      "Navigation de la page des matériaux {polymer} renforcés de fibres de verre",
    navTitleTemplate: "Compounds {polymer} GF",
    compareTab: "Comparaison",
    tradeoffsTab: "Compromis",
    applicationsTab: "Applications",
    validationTab: "Validation",
    gradeDirectoryEyebrow: "Répertoire des grades",
    gradeTitleTemplate: "Grades {polymer} renforcés de fibres de verre",
    listedGradesTemplate: "{count} grades répertoriés",
    comparisonMethods:
      "Base de comparaison : teneur en fibres de verre selon ISO 1172 ; contrainte de traction selon ISO 527 ; propriétés en flexion selon ISO 178 ; résistance au choc Charpy entaillé à 23 °C selon ISO 179/1eA ; HDT sous 1,8 MPa selon ISO 75 ; absorption d’eau à 23 °C et 50 % HR selon ISO 62. Il s’agit de valeurs indicatives publiées sur le site. Le catalogue ne précise pas si les données mécaniques correspondent à l’état sec ou conditionné ; vérifiez ce point dans la TDS du grade avant la sélection finale.",
    tradeoffsEyebrow: "Compromis techniques",
    tradeoffsTitle: "Le renforcement ne modifie pas seulement la rigidité",
    tradeoffsDescriptionTemplate:
      "Utilisez la teneur en fibres de verre pour réduire la sélection {polymer}, puis évaluez l’ensemble du système moulé. Un taux de renforcement publié plus élevé ne produit pas automatiquement une meilleure pièce.",
    guideLinksAria: "Guides de sélection des matériaux PA",
    compareOtherTemplate:
      "Comparer les grades GF en {otherPolymer} →",
    pa6Pa66Guide: "PA6 ou PA66 ? Guide de sélection →",
    reinforcementGuide: "Guide du renforcement par fibres de verre →",
    applicationsEyebrow: "Contexte d’application",
    applicationsTitle: "Relier le grade à l’architecture de la pièce",
    validationEyebrow: "Avant la sélection finale",
    validationTitle: "Valider l’humidité, le moulage et la pièce réelle",
    validationCaption:
      "Montage interne d’une éprouvette de traction. Avant la sélection finale, confirmez la base d’essai et l’état d’humidité propres au grade.",
    validationImageAlt:
      "Éprouvette de traction Taiyi Polymer serrée dans un équipement d’essai de laboratoire",
    inquiryEyebrow: "Demande projet",
    inquiryTitleTemplate:
      "Passer de la présélection {polymer} GF à une décision de moulage",
    inquirySteps: [
      "Pièce et conditions de service",
      "Données de grade et documents",
      "Validation de la pièce moulée",
    ],
    inquiryBody:
      "Indiquez la pièce, le matériau actuel, la charge, la température, l’état d’humidité, la phase d’outillage, les propriétés cibles et les documents requis. Taiyi Polymer peut ainsi réduire la sélection de grades répertoriés pour l’évaluation du projet.",
    comparison: {
      actionLabel: "Voir les données du grade",
      glassFiberLabel: "Fibres de verre",
      densityLabel: "Masse volumique",
      tensileStressLabel: "Contrainte de traction",
      hdtLabel: "HDT (1,8 MPa)",
      flammabilityLabel: "Inflammabilité",
      notPublishedLabel: "Non publié",
      disclosureLabel: "Paramètres complets et méthodes d’essai",
      scrollHint: "Faites défiler horizontalement pour tout comparer →",
      regionAria: "Comparaison des grades renforcés de fibres de verre",
      caption: "Grades classés par teneur en fibres de verre",
      gradeTdsLabel: "Grade / TDS",
      flexuralStrengthLabel: "Résistance à la flexion",
      flexuralModulusLabel: "Module de flexion",
      notchedImpactLabel: "Choc entaillé",
      waterAbsorptionLabel: "Absorption d’eau",
      requestTdsAriaTemplate: "Demander la TDS complète de {grade}",
    },
  },
  "pt-br": {
    homeBreadcrumb: "Início",
    productsBreadcrumb: "Produtos",
    heroImageAlt: "Linha de extrusão de dupla rosca da Taiyi Polymer",
    discussApplicationAction: "Discutir sua aplicação",
    technicalDataAction: "Abrir dados técnicos",
    navigationAriaTemplate:
      "Navegação da página de materiais {polymer} reforçados com fibra de vidro",
    navTitleTemplate: "Compostos {polymer} GF",
    compareTab: "Comparação",
    tradeoffsTab: "Contrapartidas",
    applicationsTab: "Aplicações",
    validationTab: "Validação",
    gradeDirectoryEyebrow: "Diretório de graus",
    gradeTitleTemplate: "Graus de {polymer} reforçados com fibra de vidro",
    listedGradesTemplate: "{count} graus listados",
    comparisonMethods:
      "Base de comparação: teor de fibra de vidro segundo ISO 1172; tensão de tração segundo ISO 527; propriedades de flexão segundo ISO 178; impacto Charpy com entalhe a 23 °C segundo ISO 179/1eA; HDT sob 1,8 MPa segundo ISO 75; absorção de água a 23 °C e 50% de UR segundo ISO 62. Estes são valores típicos de referência publicados na web. O catálogo não informa se os dados mecânicos correspondem ao estado seco ou condicionado; confirme esse ponto na TDS específica do grau antes da seleção final.",
    tradeoffsEyebrow: "Contrapartidas de engenharia",
    tradeoffsTitle: "O reforço altera mais do que a rigidez",
    tradeoffsDescriptionTemplate:
      "Use o teor de fibra de vidro para reduzir a faixa de {polymer} e depois avalie o sistema moldado completo. Um teor de reforço listado mais alto não produz automaticamente a melhor peça.",
    guideLinksAria: "Guias de seleção de materiais PA",
    compareOtherTemplate: "Comparar graus GF de {otherPolymer} →",
    pa6Pa66Guide: "PA6 ou PA66? Guia de seleção →",
    reinforcementGuide: "Guia de reforço com fibra de vidro →",
    applicationsEyebrow: "Contexto da aplicação",
    applicationsTitle: "Relacionar o grau à arquitetura da peça",
    validationEyebrow: "Antes da seleção final",
    validationTitle: "Validar umidade, moldagem e a peça real",
    validationCaption:
      "Configuração interna de corpo de prova de tração. Antes da seleção final, confirme a base de ensaio e o estado de umidade específicos do grau.",
    validationImageAlt:
      "Corpo de prova de tração da Taiyi Polymer preso em equipamento de laboratório",
    inquiryEyebrow: "Consulta de projeto",
    inquiryTitleTemplate:
      "Avançar da triagem de {polymer} GF para a decisão de moldagem",
    inquirySteps: [
      "Peça e condições de operação",
      "Dados do grau e documentos",
      "Validação da peça moldada",
    ],
    inquiryBody:
      "Informe a peça, o material atual, a carga, a temperatura, o estado de umidade, a fase do molde, as propriedades-alvo e os documentos necessários. A Taiyi Polymer pode ajudar a reduzir os graus listados para a avaliação do projeto.",
    comparison: {
      actionLabel: "Ver dados do grau",
      glassFiberLabel: "Fibra de vidro",
      densityLabel: "Densidade",
      tensileStressLabel: "Tensão de tração",
      hdtLabel: "HDT (1,8 MPa)",
      flammabilityLabel: "Flamabilidade",
      notPublishedLabel: "Não publicado",
      disclosureLabel: "Parâmetros completos e métodos de ensaio",
      scrollHint: "Role horizontalmente para comparar todas as propriedades →",
      regionAria: "Comparação de graus reforçados com fibra de vidro",
      caption: "Graus ordenados pelo teor de fibra de vidro",
      gradeTdsLabel: "Grau / TDS",
      flexuralStrengthLabel: "Resistência à flexão",
      flexuralModulusLabel: "Módulo de flexão",
      notchedImpactLabel: "Impacto com entalhe",
      waterAbsorptionLabel: "Absorção de água",
      requestTdsAriaTemplate: "Solicitar TDS completa de {grade}",
    },
  },
  zh: {
    homeBreadcrumb: "首页",
    productsBreadcrumb: "产品",
    heroImageAlt: "Taiyi Polymer 双螺杆挤出生产线",
    discussApplicationAction: "讨论应用需求",
    technicalDataAction: "打开技术数据",
    navigationAriaTemplate: "{polymer} 玻纤增强材料页面导航",
    navTitleTemplate: "{polymer} 玻纤增强材料",
    compareTab: "牌号对比",
    tradeoffsTab: "工程权衡",
    applicationsTab: "应用场景",
    validationTab: "项目验证",
    gradeDirectoryEyebrow: "牌号目录",
    gradeTitleTemplate: "{polymer} 玻纤增强牌号",
    listedGradesTemplate: "共列出 {count} 个牌号",
    comparisonMethods:
      "对比依据：玻纤含量 ISO 1172；拉伸应力 ISO 527；弯曲性能 ISO 178；23 °C 缺口夏比冲击强度 ISO 179/1eA；1.8 MPa 负载下的热变形温度 ISO 75；23 °C、50% RH 条件下的吸水率 ISO 62。以上为典型网页参考值。目录未说明机械性能数据对应干态还是调湿态；最终选型前请在具体牌号 TDS 中确认。",
    tradeoffsEyebrow: "工程权衡",
    tradeoffsTitle: "增强改性的影响不止于刚性",
    tradeoffsDescriptionTemplate:
      "可先按玻纤含量缩小 {polymer} 牌号范围，再评估完整的注塑系统。目录中较高的增强比例并不自动意味着更适合零件。",
    guideLinksAria: "PA 材料选型指南",
    compareOtherTemplate: "对比 {otherPolymer} 玻纤增强牌号 →",
    pa6Pa66Guide: "PA6 还是 PA66？查看选型指南 →",
    reinforcementGuide: "查看玻纤增强选型指南 →",
    applicationsEyebrow: "应用场景",
    applicationsTitle: "将牌号选择与零件结构对应起来",
    validationEyebrow: "最终选型前",
    validationTitle: "验证水分、成型条件与实际零件",
    validationCaption:
      "厂内拉伸试样测试。最终选型前，请确认具体牌号的测试依据与水分状态。",
    validationImageAlt: "Taiyi Polymer 实验室设备夹持的拉伸测试试样",
    inquiryEyebrow: "项目询盘",
    inquiryTitleTemplate: "从 {polymer} 玻纤牌号初筛推进到成型决策",
    inquirySteps: ["零件与工况", "牌号数据与文件", "注塑零件验证"],
    inquiryBody:
      "请提供零件、当前材料、载荷、温度、水分状态、模具阶段、目标性能和文件要求。Taiyi Polymer 可据此缩小已列牌号范围，用于项目评估。",
    comparison: {
      actionLabel: "查看牌号数据",
      glassFiberLabel: "玻纤含量",
      densityLabel: "密度",
      tensileStressLabel: "拉伸应力",
      hdtLabel: "HDT（1.8 MPa）",
      flammabilityLabel: "阻燃等级",
      notPublishedLabel: "未发布",
      disclosureLabel: "完整参数与测试方法",
      scrollHint: "横向滚动可对比全部性能 →",
      regionAria: "玻纤增强牌号对比",
      caption: "牌号按玻纤含量排序",
      gradeTdsLabel: "牌号 / TDS",
      flexuralStrengthLabel: "弯曲强度",
      flexuralModulusLabel: "弯曲模量",
      notchedImpactLabel: "缺口冲击强度",
      waterAbsorptionLabel: "吸水率",
      requestTdsAriaTemplate: "申请 {grade} 完整 TDS",
    },
  },
};

const localizedPageCopy: Record<
  LocalizedUrlSegment,
  Record<EngineeringGfPolymer, LocalizedEngineeringGfPageCopy>
> = {
  de: {
    PA6: {
      parentLabel: "PA6-Compounds",
      title: "Glasfaserverstärkte PA6-Compounds",
      metaTitle: "Glasfaserverstärkte PA6-Compounds | Taiyi Polymer",
      metaDescription:
        "Vergleichen Sie glasfaserverstärkte PLATFORM PA6-Typen nach GF-Anteil, Zug- und Biegedaten, Kerbschlagzähigkeit, HDT, Wasseraufnahme und Bauteilanforderungen.",
      heroEyebrow: "PA6-Werkstoffauswahl",
      heroDescription:
        "Entdecken Sie 17 PLATFORM® PA6-Werkstofftypen von GF8 bis GF50. Vergleichen Sie Steifigkeit, Schlagzähigkeit und Wärmeformbeständigkeit für Ihr Formteil.",
      navSubtitle:
        "GF8–GF50 für Steifigkeit, Schlagzähigkeit und Wärmeformbeständigkeit",
      comparisonIntro:
        "Die Werkstofftypen sind nach Glasfasergehalt geordnet. Vergleichen Sie die veröffentlichten Eigenschaften und öffnen Sie anschließend einen Werkstofftyp oder fordern Sie das vollständige TDS an.",
      tradeoffs: {
        improvementTitle: "Ein höherer Glasfaseranteil kann unterstützen",
        improvementIntro:
          "Bei geeigneter Formulierung und Prüfgrundlage wird eine Glasfaserverstärkung häufig vorausgewählt, wenn diese Anforderungen die Auswahl bestimmen.",
        improvements: [
          "Höhere Steifigkeit und besseres Lastverhalten",
          "Höhere Zug- und Biegefestigkeit",
          "Höhere Wärmeformbeständigkeit",
          "Verbesserte Kriechbeständigkeit",
          "Maßkontrolle unter Last",
        ],
        reviewTitle: "Dieselbe Vorauswahl muss außerdem prüfen",
        reviewIntro:
          "Mehr Glasfaser entscheidet die Werkstoffauswahl nicht allein. Das Formteilergebnis bleibt von Geometrie, Verarbeitung, Feuchtezustand und vollständigem Lastpfad abhängig.",
        reviewPoints: [
          "Abwägung der Schlagzähigkeit und Versagensart",
          "Faserorientierung und Anisotropie",
          "Richtungsabhängige Schwindung und Verzug",
          "Oberflächenqualität und sichtbare Fasern",
          "Konditionierung und Maßhaltigkeit",
          "Bindenähte, Anschnitte und lokale Spannungen",
        ],
      },
      applicationsIntro:
        "Ordnen Sie Last, Temperatur und Umgebung des Bauteils einem geeigneten Werkstofftyp zu, bevor Formversuche beginnen.",
      applications: [
        {
          eyebrow: "Strukturgehäuse",
          label: "Elektrische und elektronische Gehäuse",
          description:
            "Prüfen Sie Gehäusegeometrie, Montagelast, Isolationsanforderungen, Wärme und Dokumentbedarf, bevor Sie einen Werkstofftyp vorauswählen.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Halterungen und Stützen",
          label: "Stützbauteile für die Automation",
          description:
            "Verbinden Sie Lastpfad, Befestigungspunkte, Vibration und Formgebungsgrenzen mit der Auswahl verstärkter Werkstoffe.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Fahrzeugmechanismen",
          label: "Kunststoffformteile für Fahrzeuge",
          description:
            "Bewerten Sie Temperatur, Last, Feuchte, Bewegung, Maßtoleranzen und projektspezifische Nachweise gemeinsam.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Funktionsgehäuse",
          label: "Bauteile für die Wasserregelung",
          description:
            "Definieren Sie Druck, Temperatur, Medienkontakt, Maße und Validierungsumfang vor der Werkstoffauswahl.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "PA6 nimmt Feuchtigkeit auf; seine Formteileigenschaften hängen von Konditionierung, Geometrie und Verarbeitungshistorie ab. Nutzen Sie Katalogwerte zur Vorauswahl und schließen Sie die Entscheidung am vorgesehenen Werkzeug und Bauteil ab.",
      validationSteps: [
        {
          title: "Feuchtezustand definieren",
          description:
            "Halten Sie fest, ob spritzfrische, trockene oder konditionierte Probekörper verglichen werden. Vermischen Sie diese Zustände nicht in einer Schlussfolgerung.",
        },
        {
          title: "Trocknung und Materialhandhabung kontrollieren",
          description:
            "Befolgen Sie die werkstofftypspezifischen Verarbeitungshinweise und verhindern Sie vor Formversuchen eine unkontrollierte Feuchteaufnahme.",
        },
        {
          title: "Orientierung und Bindenähte prüfen",
          description:
            "Setzen Sie Anschnitt, Fließweg und Bindenahtposition in Beziehung zur realen Lastrichtung und zu kritischen Maßen.",
        },
        {
          title: "Schwindung und Verzug am Bauteil messen",
          description:
            "Die Katalogdaten zur Schwindung sind für diese Reihe nicht vollständig. Messen Sie die vorgesehene Geometrie, anstatt Lücken mit Annahmen zu füllen.",
        },
        {
          title: "Vorgesehenes Werkzeug und Prozessfenster nutzen",
          description:
            "Bestätigen Sie Füllung, Oberfläche, Maße, Wiederholbarkeit und lokale Fehler unter produktionsnahen Formbedingungen.",
        },
        {
          title: "Funktion der Baugruppe validieren",
          description:
            "Schließen Sie vor der Produktionsfreigabe Last-, Umgebungs-, Zyklus-, Montage- und Kundennachweise ab.",
        },
      ],
      contactMaterial: "Glasfaserverstärktes PA6",
    },
    PA66: {
      parentLabel: "PA66-Compounds",
      title: "Glasfaserverstärkte PA66-Compounds",
      metaTitle: "Glasfaserverstärkte PA66-Compounds | Taiyi Polymer",
      metaDescription:
        "Vergleichen Sie glasfaserverstärkte PLATFORM PA66-Typen nach GF-Anteil, Festigkeit, Biegemodul, Kerbschlagzähigkeit, HDT, Feuchtedaten und Bauteilanforderungen.",
      heroEyebrow: "PA66-Werkstoffauswahl",
      heroDescription:
        "Entdecken Sie 15 PLATFORM® PA66-Werkstofftypen von GF15 bis GF50. Vergleichen Sie Festigkeit und Wärmeformbeständigkeit und prüfen Sie Feuchte- und Montageanforderungen.",
      navSubtitle:
        "GF15–GF50 für Festigkeit, Wärmeformbeständigkeit und Feuchte",
      comparisonIntro:
        "Die Werkstofftypen sind nach Glasfasergehalt geordnet. Vergleichen Sie die veröffentlichten Eigenschaften und öffnen Sie anschließend einen Werkstofftyp oder fordern Sie das vollständige TDS an.",
      tradeoffs: {
        improvementTitle: "Ein höherer Glasfaseranteil kann unterstützen",
        improvementIntro:
          "Bei geeigneter PA66-Formulierung und vergleichbarer Prüfgrundlage wird die Verstärkung häufig für diese strukturellen und thermischen Anforderungen vorausgewählt.",
        improvements: [
          "Höhere Steifigkeit und kurzfristiges Lastverhalten",
          "Höhere Zug- und Biegefestigkeit",
          "Höhere Wärmeformbeständigkeit",
          "Verbesserte Kriechbeständigkeit",
          "Maßkontrolle unter Last",
        ],
        reviewTitle: "Die endgültige Vorauswahl hängt weiterhin ab von",
        reviewIntro:
          "Der Faseranteil ist nur ein Eingangswert. Feuchtezustand, Geometrie, Verarbeitungshistorie und lokale Orientierung können das Formteil- und Montageergebnis verändern.",
        reviewPoints: [
          "Anforderung an Schlagzähigkeit und Versagensart",
          "Faserorientierung und richtungsabhängige Eigenschaften",
          "Schwindungsausgleich und Verzug",
          "Oberflächenbild und sichtbare Fasern",
          "Feuchtezustand und Maßkonditionierung",
          "Bindenähte, Anschnittlage und lokale Spannungen",
        ],
      },
      applicationsIntro:
        "Definieren Sie Last, thermische Belastung und Montagebedingungen des Bauteils und anschließend die für die Anwendung erforderlichen Nachweise.",
      applications: [
        {
          eyebrow: "Fahrzeugmechanismen",
          label: "Struktur- und Funktionsbauteile für Fahrzeuge",
          description:
            "Definieren Sie Last, Temperatur, Zyklen, Feuchte, Befestigung und Freigabeanforderungen, bevor Sie Werkstofftypen vergleichen.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Elektrogehäuse",
          label: "Elektrische und elektronische Bauteile",
          description:
            "Prüfen Sie Wärme, mechanischen Halt, Maße, elektrische Nachweise und die genaue Dokumentanforderung gemeinsam.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Halterungen und Stützen",
          label: "Automations- und Fördersysteme",
          description:
            "Beziehen Sie statische und zyklische Lasten, Montagegeometrie, Vibration und Verarbeitungsgrenzen auf die Vorauswahl.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Tragende Gehäuse",
          label: "Kunststoffformteile für Haushaltsgeräte",
          description:
            "Bewerten Sie Temperatur, Feuchte, Montagelast, wiederholte Zyklen und Produktionskonstanz für das reale Gehäuse oder Stützbauteil.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "Die Vorauswahl von PA66-GF muss Feuchtezustand, Wärme, Prozessbedingungen und Orientierung in derselben Nachweiskette halten. Grenzen Sie die Reihe mit veröffentlichten Daten ein und validieren Sie anschließend Formteil und Baugruppe.",
      validationSteps: [
        {
          title: "Probekörper und Feuchtezustand festlegen",
          description:
            "Identifizieren Sie die Konditionierungsgrundlage jedes Wertes und vergleichen Sie trockene und konditionierte Ergebnisse nicht als austauschbar.",
        },
        {
          title: "Trocknung und Schmelzeführung bestätigen",
          description:
            "Befolgen Sie die werkstofftypspezifischen Verarbeitungshinweise und kontrollieren Sie Verweilzeit und Feuchte, bevor Sie einen Formversuch bewerten.",
        },
        {
          title: "Faserorientierung dem Lastpfad zuordnen",
          description:
            "Prüfen Sie Anschnitte, Fließrichtung, Bindenähte, Rippen und Einlegeteile gegenüber der kritischen Strukturrichtung.",
        },
        {
          title: "Maße und Verzug messen",
          description:
            "Nutzen Sie das reale Werkzeug und die vorgesehene Konditionierung. Die vorhandenen Katalogdaten zur Schwindung sind unvollständig und ersetzen keine Bauteilmessung.",
        },
        {
          title: "Thermische und Montagebedingungen prüfen",
          description:
            "HDT ist ein Vorauswahlwert, keine allgemeine Dauergebrauchstemperatur. Validieren Sie Last, Zeit, Zyklen und Montagezwang.",
        },
        {
          title: "Projektspezifische Nachweise abschließen",
          description:
            "Bestätigen Sie Wiederholbarkeit, Funktion, Umgebung, Dokumente und Kundenanforderungen vor der Produktionsfreigabe.",
        },
      ],
      contactMaterial: "Glasfaserverstärktes PA66",
    },
  },
  fr: {
    PA6: {
      parentLabel: "Compounds PA6",
      title: "Compounds PA6 renforcés de fibres de verre",
      metaTitle: "Compounds PA6 renforcés de fibres de verre | Taiyi Polymer",
      metaDescription:
        "Comparez les grades PLATFORM en PA6 renforcé de fibres de verre selon le taux de GF, la traction, la flexion, le choc entaillé, la HDT, l’absorption d’eau et les exigences de la pièce.",
      heroEyebrow: "Sélection de grades PA6",
      heroDescription:
        "Explorez 17 grades PLATFORM® PA6 de GF8 à GF50. Comparez la rigidité, la résistance au choc et la HDT en fonction de votre pièce moulée.",
      navSubtitle: "GF8–GF50 : rigidité, choc et tenue sous charge à chaud",
      comparisonIntro:
        "Les grades sont classés par teneur en fibres de verre. Comparez les propriétés publiées, puis ouvrez la fiche d’un grade ou demandez sa TDS complète.",
      tradeoffs: {
        improvementTitle:
          "Une teneur supérieure en fibres de verre peut favoriser",
        improvementIntro:
          "Avec une formulation et une base d’essai adaptées, le renforcement par fibres de verre est couramment présélectionné lorsque ces exigences gouvernent le choix.",
        improvements: [
          "Une rigidité et une réponse à la charge supérieures",
          "Une résistance à la traction et à la flexion supérieure",
          "Une meilleure tenue sous charge à chaud",
          "Une meilleure résistance au fluage",
          "La maîtrise dimensionnelle sous charge",
        ],
        reviewTitle: "La même présélection doit aussi examiner",
        reviewIntro:
          "Une teneur supérieure en fibres ne suffit pas à décider du matériau. Le résultat moulé dépend encore de la géométrie, du procédé, de l’état d’humidité et du chemin de charge complet.",
        reviewPoints: [
          "Le compromis au choc et le mode de rupture",
          "L’orientation des fibres et l’anisotropie",
          "Le retrait directionnel et le gauchissement",
          "L’aspect de surface et les fibres apparentes",
          "Le conditionnement et la stabilité dimensionnelle",
          "Les lignes de soudure, les seuils et les contraintes locales",
        ],
      },
      applicationsIntro:
        "Reliez la charge, la température et l’environnement de la pièce à un grade candidat avant de lancer les essais de moulage.",
      applications: [
        {
          eyebrow: "Boîtiers structurels",
          label: "Boîtiers électriques et électroniques",
          description:
            "Examinez la géométrie du boîtier, les efforts d’assemblage, l’isolation, la chaleur et les documents requis avant de présélectionner un grade.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Supports et fixations",
          label: "Composants de support pour l’automatisation",
          description:
            "Reliez le chemin de charge, les points de fixation, les vibrations et les contraintes de moulage à la présélection des matériaux renforcés.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Mécanismes automobiles",
          label: "Composants automobiles moulés",
          description:
            "Évaluez ensemble la température, la charge, l’humidité, le mouvement, les tolérances dimensionnelles et les preuves projet.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Boîtiers fonctionnels",
          label: "Composants de régulation de l’eau",
          description:
            "Définissez la pression, la température, le fluide, les dimensions et le périmètre de validation avant de choisir le matériau.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "Le PA6 absorbe l’humidité et les performances de la pièce moulée dépendent du conditionnement, de la géométrie et de l’historique de transformation. Utilisez les valeurs du catalogue pour la présélection, puis concluez sur l’outillage et la pièce prévus.",
      validationSteps: [
        {
          title: "Définir l’état d’humidité",
          description:
            "Consignez si la comparaison porte sur des éprouvettes juste moulées, sèches ou conditionnées. Ne mélangez pas ces états dans une même conclusion.",
        },
        {
          title: "Maîtriser le séchage et la manutention",
          description:
            "Suivez les consignes de transformation propres au grade et évitez toute reprise d’humidité non contrôlée avant les essais de moulage.",
        },
        {
          title: "Examiner l’orientation et les lignes de soudure",
          description:
            "Reliez le seuil, le chemin d’écoulement et la position des lignes de soudure à la direction réelle de charge et aux dimensions critiques.",
        },
        {
          title: "Mesurer le retrait et le gauchissement sur la pièce",
          description:
            "Les données de retrait du catalogue sont incomplètes pour cette gamme. Mesurez la géométrie prévue au lieu de combler les lacunes par des hypothèses.",
        },
        {
          title: "Utiliser l’outillage et la fenêtre de procédé prévus",
          description:
            "Confirmez le remplissage, la surface, les dimensions, la répétabilité et les défauts locaux dans des conditions de moulage proches de la production.",
        },
        {
          title: "Valider la fonction assemblée",
          description:
            "Avant l’approbation de production, clôturez les exigences de charge, d’environnement, de cycles, d’assemblage et de preuves client.",
        },
      ],
      contactMaterial: "PA6 renforcé de fibres de verre",
    },
    PA66: {
      parentLabel: "Compounds PA66",
      title: "Compounds PA66 renforcés de fibres de verre",
      metaTitle: "Compounds PA66 renforcés de fibres de verre | Taiyi Polymer",
      metaDescription:
        "Comparez les grades PLATFORM en PA66 renforcé de fibres de verre selon le taux de GF, la résistance, le module de flexion, le choc entaillé, la HDT, l’humidité et les exigences de la pièce.",
      heroEyebrow: "Sélection de grades PA66",
      heroDescription:
        "Explorez 15 grades PLATFORM® PA66 de GF15 à GF50. Comparez la résistance et la HDT, puis examinez les exigences d’humidité et d’assemblage.",
      navSubtitle: "GF15–GF50 : résistance, tenue sous charge à chaud et humidité",
      comparisonIntro:
        "Les grades sont classés par teneur en fibres de verre. Comparez les propriétés publiées, puis ouvrez la fiche d’un grade ou demandez sa TDS complète.",
      tradeoffs: {
        improvementTitle:
          "Une teneur supérieure en fibres de verre peut favoriser",
        improvementIntro:
          "Avec une formulation PA66 adaptée et une base d’essai comparable, le renforcement est couramment présélectionné pour ces exigences structurelles et thermiques.",
        improvements: [
          "Une rigidité et une réponse à court terme supérieures",
          "Une résistance à la traction et à la flexion supérieure",
          "Une meilleure tenue sous charge à chaud",
          "Une meilleure résistance au fluage",
          "La maîtrise dimensionnelle sous charge",
        ],
        reviewTitle: "La présélection finale dépend encore de",
        reviewIntro:
          "Le taux de fibres n’est qu’une donnée d’entrée. L’état d’humidité, la géométrie, l’historique de transformation et l’orientation locale peuvent modifier le résultat moulé et assemblé.",
        reviewPoints: [
          "L’exigence au choc et le mode de rupture",
          "L’orientation des fibres et les propriétés directionnelles",
          "L’équilibre du retrait et le gauchissement",
          "L’aspect de surface et les fibres apparentes",
          "L’état d’humidité et le conditionnement dimensionnel",
          "Les lignes de soudure, la position des seuils et les contraintes locales",
        ],
      },
      applicationsIntro:
        "Définissez la charge, l’exposition thermique et les conditions d’assemblage de la pièce, puis les preuves requises pour l’application.",
      applications: [
        {
          eyebrow: "Mécanismes automobiles",
          label: "Pièces automobiles structurelles et fonctionnelles",
          description:
            "Définissez la charge, la température, les cycles, l’humidité, la fixation et les exigences d’approbation avant de comparer les grades.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Boîtiers électriques",
          label: "Composants électriques et électroniques",
          description:
            "Examinez ensemble la chaleur, la tenue mécanique, les dimensions, les preuves électriques et les documents précisément requis.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Supports et fixations",
          label: "Systèmes d’automatisation et de convoyage",
          description:
            "Reliez les charges statiques et cycliques, la géométrie de montage, les vibrations et les contraintes de transformation à la présélection.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Boîtiers porteurs",
          label: "Composants moulés pour appareils ménagers",
          description:
            "Évaluez la température, l’humidité, les efforts d’assemblage, les cycles répétés et la régularité de production sur le boîtier ou le support réel.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "La présélection d’un PA66 GF doit réunir l’état d’humidité, la chaleur, les conditions de procédé et l’orientation dans une même chaîne de preuves. Utilisez les données publiées pour réduire la gamme, puis validez la pièce moulée et l’assemblage.",
      validationSteps: [
        {
          title: "Définir l’éprouvette et l’état d’humidité",
          description:
            "Identifiez la base de conditionnement de chaque valeur et ne considérez pas les résultats secs et conditionnés comme interchangeables.",
        },
        {
          title: "Confirmer le séchage et la gestion de la matière fondue",
          description:
            "Suivez les consignes de transformation propres au grade et maîtrisez le temps de séjour et l’humidité avant d’interpréter un essai de moulage.",
        },
        {
          title: "Relier l’orientation des fibres au chemin de charge",
          description:
            "Examinez les seuils, le sens d’écoulement, les lignes de soudure, les nervures et les inserts par rapport à la direction structurelle critique.",
        },
        {
          title: "Mesurer les dimensions et le gauchissement",
          description:
            "Utilisez l’outillage réel et la séquence de conditionnement prévue. Les données de retrait actuellement publiées sont incomplètes et ne remplacent pas la mesure de la pièce.",
        },
        {
          title: "Tester les conditions thermiques et d’assemblage",
          description:
            "La HDT est une mesure de présélection, pas une température universelle d’usage continu. Validez la charge, la durée, les cycles et les contraintes d’assemblage.",
        },
        {
          title: "Clôturer les preuves propres au projet",
          description:
            "Confirmez la répétabilité, la fonction, l’environnement, les documents et les exigences client avant la mise en production.",
        },
      ],
      contactMaterial: "PA66 renforcé de fibres de verre",
    },
  },
  "pt-br": {
    PA6: {
      parentLabel: "Compostos de PA6",
      title: "Compostos de PA6 reforçados com fibra de vidro",
      metaTitle: "PA6 reforçado com fibra de vidro | Taiyi Polymer",
      metaDescription:
        "Compare graus PLATFORM de PA6 reforçado com fibra de vidro por teor de GF, tração, flexão, impacto com entalhe, HDT, absorção de água e requisitos da peça.",
      heroEyebrow: "Seleção de graus PA6",
      heroDescription:
        "Explore 17 graus PLATFORM® de PA6, de GF8 a GF50. Compare rigidez, impacto e HDT de acordo com os requisitos da peça moldada.",
      navSubtitle: "GF8–GF50 em rigidez, impacto e deflexão térmica",
      comparisonIntro:
        "Os graus estão ordenados pelo teor de fibra de vidro. Compare as propriedades publicadas e depois abra um grau ou solicite sua TDS completa.",
      tradeoffs: {
        improvementTitle:
          "Um teor maior de fibra de vidro pode favorecer",
        improvementIntro:
          "Com uma formulação e uma base de ensaio adequadas, o reforço com fibra de vidro costuma entrar na triagem quando estes requisitos determinam a seleção.",
        improvements: [
          "Maior rigidez e resposta à carga",
          "Maior resistência à tração e à flexão",
          "Maior desempenho de deflexão térmica",
          "Melhor resistência à fluência",
          "Controle dimensional sob carga",
        ],
        reviewTitle: "A mesma triagem também deve avaliar",
        reviewIntro:
          "Mais fibra não define sozinha a decisão de material. O resultado moldado continua sensível à geometria, ao processo, ao estado de umidade e ao caminho completo da carga.",
        reviewPoints: [
          "Contrapartida de impacto e modo de falha",
          "Orientação das fibras e anisotropia",
          "Contração direcional e empenamento",
          "Acabamento superficial e fibras expostas",
          "Condicionamento e retenção dimensional",
          "Linhas de solda, pontos de injeção e tensões locais",
        ],
      },
      applicationsIntro:
        "Relacione a carga, a temperatura e o ambiente da peça a um grau candidato antes de iniciar os testes de moldagem.",
      applications: [
        {
          eyebrow: "Carcaças estruturais",
          label: "Carcaças elétricas e eletrônicas",
          description:
            "Avalie a geometria da carcaça, a carga de montagem, o isolamento, o calor e os documentos necessários antes de selecionar um grau.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Suportes e fixações",
          label: "Componentes de suporte para automação",
          description:
            "Relacione o caminho da carga, os pontos de fixação, a vibração e as restrições de moldagem à triagem de materiais reforçados.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Mecanismos automotivos",
          label: "Componentes automotivos moldados",
          description:
            "Avalie em conjunto temperatura, carga, umidade, movimento, tolerância dimensional e evidências do projeto.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Carcaças funcionais",
          label: "Componentes para controle de água",
          description:
            "Defina pressão, temperatura, contato com o fluido, dimensões e escopo de validação antes da seleção do material.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "O PA6 absorve umidade e o desempenho da peça moldada depende do condicionamento, da geometria e do histórico de processo. Use os valores de catálogo para a triagem e conclua a decisão no ferramental e na peça previstos.",
      validationSteps: [
        {
          title: "Definir o estado de umidade",
          description:
            "Registre se a comparação usa corpos de prova recém-moldados, secos ou condicionados. Não misture esses estados em uma única conclusão.",
        },
        {
          title: "Controlar a secagem e o manuseio do material",
          description:
            "Siga as orientações de processo específicas do grau e evite a retomada não controlada de umidade antes dos testes de moldagem.",
        },
        {
          title: "Avaliar a orientação e as linhas de solda",
          description:
            "Relacione o ponto de injeção, o caminho de fluxo e a posição das linhas de solda à direção real da carga e às dimensões críticas.",
        },
        {
          title: "Medir contração e empenamento na peça",
          description:
            "Os dados de contração do catálogo estão incompletos para esta faixa. Meça a geometria pretendida em vez de preencher lacunas com valores presumidos.",
        },
        {
          title: "Usar o ferramental e a janela de processo previstos",
          description:
            "Confirme preenchimento, superfície, dimensões, repetibilidade e defeitos locais em condições de moldagem próximas da produção.",
        },
        {
          title: "Validar a função montada",
          description:
            "Antes da aprovação para produção, conclua os requisitos de carga, ambiente, ciclos, montagem e evidências do cliente.",
        },
      ],
      contactMaterial: "PA6 reforçado com fibra de vidro",
    },
    PA66: {
      parentLabel: "Compostos de PA66",
      title: "Compostos de PA66 reforçados com fibra de vidro",
      metaTitle: "PA66 reforçado com fibra de vidro | Taiyi Polymer",
      metaDescription:
        "Compare graus PLATFORM de PA66 reforçado com fibra de vidro por teor de GF, resistência, módulo de flexão, impacto com entalhe, HDT, umidade e requisitos da peça.",
      heroEyebrow: "Seleção de graus PA66",
      heroDescription:
        "Explore 15 graus PLATFORM® de PA66, de GF15 a GF50. Compare resistência e HDT e depois avalie os requisitos de umidade e montagem.",
      navSubtitle: "GF15–GF50 em resistência, deflexão térmica e umidade",
      comparisonIntro:
        "Os graus estão ordenados pelo teor de fibra de vidro. Compare as propriedades publicadas e depois abra um grau ou solicite sua TDS completa.",
      tradeoffs: {
        improvementTitle:
          "Um teor maior de fibra de vidro pode favorecer",
        improvementIntro:
          "Com uma formulação de PA66 adequada e uma base de ensaio comparável, o reforço costuma entrar na triagem para estes requisitos estruturais e térmicos.",
        improvements: [
          "Maior rigidez e resposta de curto prazo à carga",
          "Maior resistência à tração e à flexão",
          "Maior desempenho de deflexão térmica",
          "Melhor resistência à fluência",
          "Controle dimensional sob carga",
        ],
        reviewTitle: "A seleção final ainda depende de",
        reviewIntro:
          "O percentual de fibra é apenas uma entrada. O estado de umidade, a geometria, o histórico de processo e a orientação local podem alterar o resultado moldado e montado.",
        reviewPoints: [
          "Requisito de impacto e modo de falha",
          "Orientação das fibras e propriedades direcionais",
          "Equilíbrio de contração e empenamento",
          "Aparência superficial e fibras expostas",
          "Estado de umidade e condicionamento dimensional",
          "Linhas de solda, posição dos pontos de injeção e tensões locais",
        ],
      },
      applicationsIntro:
        "Defina a carga, a exposição térmica e as condições de montagem da peça e depois confirme as evidências exigidas pela aplicação.",
      applications: [
        {
          eyebrow: "Mecanismos automotivos",
          label: "Peças automotivas estruturais e funcionais",
          description:
            "Defina carga, temperatura, ciclos, umidade, fixação e requisitos de aprovação antes de comparar os graus.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Carcaças elétricas",
          label: "Componentes elétricos e eletrônicos",
          description:
            "Avalie em conjunto o calor, a retenção mecânica, as dimensões, as evidências elétricas e os documentos específicos necessários.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Suportes e fixações",
          label: "Sistemas de automação e transporte",
          description:
            "Relacione cargas estáticas e cíclicas, geometria de montagem, vibração e restrições de processo à triagem de graus.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Carcaças sob carga",
          label: "Componentes moldados para eletrodomésticos",
          description:
            "Avalie temperatura, umidade, carga de montagem, ciclos repetidos e consistência de produção na carcaça ou no suporte real.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "A triagem de PA66 GF deve manter o estado de umidade, o calor, as condições de processo e a orientação na mesma cadeia de evidências. Use os dados publicados para reduzir a faixa e depois valide a peça moldada e o conjunto.",
      validationSteps: [
        {
          title: "Definir o corpo de prova e o estado de umidade",
          description:
            "Identifique a base de condicionamento de cada valor e não trate resultados secos e condicionados como intercambiáveis.",
        },
        {
          title: "Confirmar a secagem e o manuseio do fundido",
          description:
            "Siga as orientações de processo específicas do grau e controle o tempo de residência e a umidade antes de interpretar um teste de moldagem.",
        },
        {
          title: "Relacionar a orientação das fibras ao caminho da carga",
          description:
            "Avalie pontos de injeção, direção de fluxo, linhas de solda, nervuras e insertos em relação à direção estrutural crítica.",
        },
        {
          title: "Medir dimensões e empenamento",
          description:
            "Use o ferramental real e a sequência de condicionamento prevista. Os dados atuais de contração do catálogo são incompletos e não substituem a medição da peça.",
        },
        {
          title: "Testar as condições térmicas e de montagem",
          description:
            "A HDT é uma medida de triagem, não uma temperatura universal de uso contínuo. Valide carga, tempo, ciclos e restrições de montagem.",
        },
        {
          title: "Concluir as evidências específicas do projeto",
          description:
            "Confirme repetibilidade, função, ambiente, documentos e requisitos do cliente antes da liberação para produção.",
        },
      ],
      contactMaterial: "PA66 reforçado com fibra de vidro",
    },
  },
  zh: {
    PA6: {
      parentLabel: "PA6 改性材料",
      title: "玻璃纤维增强 PA6 材料",
      metaTitle: "玻璃纤维增强 PA6 牌号 | Taiyi Polymer",
      metaDescription:
        "按玻纤含量、拉伸与弯曲数据、缺口冲击强度、热变形温度、吸水率和零件要求，对比 PLATFORM 玻璃纤维增强 PA6 牌号。",
      heroEyebrow: "PA6 牌号选择",
      heroDescription:
        "浏览 17 个 PLATFORM® PA6 牌号，玻纤含量覆盖 GF8 至 GF50。根据注塑零件要求对比刚性、冲击和热变形数据。",
      navSubtitle: "GF8–GF50，覆盖刚性、冲击与热变形性能",
      comparisonIntro:
        "牌号按玻纤含量排序。请先对比已发布性能，再进入具体牌号页面或申请完整 TDS。",
      tradeoffs: {
        improvementTitle: "提高玻纤含量通常用于支持",
        improvementIntro:
          "在配方与测试依据适当的前提下，当以下要求主导初筛时，通常会考虑玻纤增强方向。",
        improvements: [
          "更高的刚性与载荷响应",
          "更高的拉伸与弯曲强度",
          "更高的热变形性能",
          "改善抗蠕变能力",
          "载荷下的尺寸控制",
        ],
        reviewTitle: "同一候选范围还必须审查",
        reviewIntro:
          "玻纤增加并不能单独决定材料。注塑结果仍受零件结构、加工、水分状态和完整载荷路径影响。",
        reviewPoints: [
          "冲击权衡与失效模式",
          "纤维取向与各向异性",
          "方向性收缩与翘曲",
          "表面质量与浮纤",
          "调湿状态与尺寸保持",
          "熔接线、浇口与局部应力",
        ],
      },
      applicationsIntro:
        "先把零件载荷、温度和环境与候选牌号对应起来，再开始试模。",
      applications: [
        {
          eyebrow: "结构壳体",
          label: "电气与电子壳体",
          description:
            "筛选牌号前，请同时审查壳体结构、装配载荷、绝缘要求、温度和文件需求。",
          href: "/applications/electronics",
        },
        {
          eyebrow: "支架与支撑件",
          label: "自动化支撑部件",
          description:
            "将载荷路径、紧固点、振动与成型约束对应到增强材料候选范围。",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "汽车机构",
          label: "汽车注塑部件",
          description:
            "综合筛选温度、载荷、水分、运动、尺寸公差与项目证据要求。",
          href: "/applications/automotive",
        },
        {
          eyebrow: "功能壳体",
          label: "水路控制部件",
          description:
            "选材前先定义压力、温度、介质接触、关键尺寸与验证范围。",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "PA6 会吸收水分，其注塑性能取决于调湿状态、零件结构和加工历史。请将目录数据用于初筛，并在目标模具和实际零件上完成材料决策。",
      validationSteps: [
        {
          title: "定义水分状态",
          description:
            "记录对比采用注塑态、干态还是调湿态试样，不要把不同状态的数据混为同一结论。",
        },
        {
          title: "控制干燥与物料处理",
          description:
            "遵循具体牌号的加工指南，并在试模前防止粒子发生不受控吸湿。",
        },
        {
          title: "审查纤维取向与熔接线",
          description:
            "把浇口、流动路径和熔接线位置与实际载荷方向及关键尺寸联系起来。",
        },
        {
          title: "在零件上测量收缩与翘曲",
          description:
            "当前系列的目录收缩数据并不完整，应测量目标结构，而不是用假设值补齐空缺。",
        },
        {
          title: "使用目标模具和工艺窗口试模",
          description:
            "在接近生产的成型条件下确认充模、表面、尺寸、重复性与局部缺陷。",
        },
        {
          title: "验证装配后的功能",
          description:
            "进入量产批准前，完成载荷、环境、循环、装配和客户证据要求的验证。",
        },
      ],
      contactMaterial: "玻璃纤维增强 PA6",
    },
    PA66: {
      parentLabel: "PA66 改性材料",
      title: "玻璃纤维增强 PA66 材料",
      metaTitle: "玻璃纤维增强 PA66 牌号 | Taiyi Polymer",
      metaDescription:
        "按玻纤含量、强度、弯曲模量、缺口冲击强度、热变形温度、水分数据和零件要求，对比 PLATFORM 玻璃纤维增强 PA66 牌号。",
      heroEyebrow: "PA66 牌号选择",
      heroDescription:
        "浏览 15 个 PLATFORM® PA66 牌号，玻纤含量覆盖 GF15 至 GF50。对比强度和热变形数据，并审查水分与装配要求。",
      navSubtitle: "GF15–GF50，覆盖强度、热变形与水分表现",
      comparisonIntro:
        "牌号按玻纤含量排序。请先对比已发布性能，再进入具体牌号页面或申请完整 TDS。",
      tradeoffs: {
        improvementTitle: "提高玻纤含量通常用于支持",
        improvementIntro:
          "在适当的 PA66 配方和可比测试依据下，通常会围绕以下结构与热性能要求筛选增强方向。",
        improvements: [
          "更高的刚性与短期载荷响应",
          "更高的拉伸与弯曲强度",
          "更高的热变形性能",
          "改善抗蠕变能力",
          "载荷下的尺寸控制",
        ],
        reviewTitle: "最终候选范围仍取决于",
        reviewIntro:
          "玻纤比例只是一个输入。水分状态、零件结构、加工历史和局部取向都可能改变注塑及装配结果。",
        reviewPoints: [
          "冲击要求与失效模式",
          "纤维取向与方向性性能",
          "收缩平衡与翘曲",
          "表面外观与浮纤",
          "水分状态与尺寸调节",
          "熔接线、浇口位置与局部应力",
        ],
      },
      applicationsIntro:
        "先定义零件载荷、热暴露和装配条件，再确认应用所需的验证证据。",
      applications: [
        {
          eyebrow: "汽车机构",
          label: "汽车结构与功能部件",
          description:
            "对比牌号前，请定义载荷、温度、循环、水分、紧固和项目批准要求。",
          href: "/applications/automotive",
        },
        {
          eyebrow: "电气壳体",
          label: "电气与电子部件",
          description:
            "综合审查温度、机械保持、尺寸、电气证据和具体文件要求。",
          href: "/applications/electronics",
        },
        {
          eyebrow: "支架与支撑件",
          label: "自动化与输送系统",
          description:
            "将静态和循环载荷、安装结构、振动与加工约束对应到牌号候选范围。",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "承载壳体",
          label: "家电注塑部件",
          description:
            "针对实际壳体或支撑件筛选温度、水分、装配载荷、重复循环与生产一致性。",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "PA66 玻纤牌号初筛必须把水分状态、温度、加工条件与纤维取向放在同一证据链中。先用已发布数据缩小范围，再验证注塑零件和装配体。",
      validationSteps: [
        {
          title: "确定试样与水分状态",
          description:
            "识别每项数据对应的调湿依据，避免把干态与调湿态结果当成可以直接互换。",
        },
        {
          title: "确认干燥与熔体处理",
          description:
            "遵循具体牌号的加工指南，并在解释试模结果前控制停留时间和水分。",
        },
        {
          title: "将纤维取向对应到载荷路径",
          description:
            "根据关键结构方向审查浇口、流动方向、熔接线、加强筋和嵌件。",
        },
        {
          title: "测量尺寸与翘曲",
          description:
            "使用实际模具和调湿流程。当前目录的收缩数据并不完整，不能替代零件测量。",
        },
        {
          title: "测试热条件与装配状态",
          description:
            "HDT 是初筛指标，不是通用连续使用温度。应验证载荷、时间、循环和装配约束。",
        },
        {
          title: "闭合项目证据",
          description:
            "进入量产前，确认重复性、功能、环境、文件与客户要求。",
        },
      ],
      contactMaterial: "玻璃纤维增强 PA66",
    },
  },
};

export const formatEngineeringGfMessage = (
  template: string,
  values: Readonly<Record<string, string | number>>,
) =>
  Object.entries(values).reduce(
    (message, [key, value]) =>
      message.replaceAll(`{${key}}`, String(value)),
    template,
  );

export const getEngineeringGfLandingMessages = (
  polymer: EngineeringGfPolymer,
  localeSegment?: LocalizedUrlSegment,
) => {
  const sourcePage = getEngineeringGfLandingPageData(polymer);

  if (!localeSegment) {
    return { page: sourcePage, ui: englishUi };
  }

  const pageCopy = localizedPageCopy[localeSegment][polymer];
  const ui = localizedUi[localeSegment];

  if (!pageCopy || !ui) {
    throw new Error(
      `Missing ${localeSegment} engineering GF landing copy for ${polymer}`,
    );
  }

  return {
    page: { ...sourcePage, ...pageCopy },
    ui,
  };
};
