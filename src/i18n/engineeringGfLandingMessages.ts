import {
  getEngineeringGfLandingPageData,
  type EngineeringGfLandingPageData,
} from "@/data/engineeringGfLandingPages";
import type {
  EngineeringGfGuideId,
  EngineeringGfPolymer,
} from "@/data/engineeringGfLandingRegistry";
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
  englishDestinationLabel: string;
  glassFiberLabel: string;
  allGlassFiberLabel: string;
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
  ppaVsPa66Guide: string;
  applicationsEyebrow: string;
  applicationsTitle: string;
  validationEyebrow: string;
  validationTitle: string;
  validationCaption: string;
  validationImageAlt: string;
  inquiryEyebrow: string;
  inquiryTitleTemplate: string;
  inquiryBody: string;
  comparison: EngineeringGfComparisonUi;
};

const engineeringGfGuideLabelKeys = {
  "pa6-vs-pa66-reinforced-parts": "pa6Pa66Guide",
  "glass-fiber-reinforced-pa6-pa66-selection-guide": "reinforcementGuide",
  "ppa-vs-pa66-material-selection": "ppaVsPa66Guide",
} as const satisfies Record<
  EngineeringGfGuideId,
  "pa6Pa66Guide" | "reinforcementGuide" | "ppaVsPa66Guide"
>;

export const getEngineeringGfGuideLabel = (
  guideId: EngineeringGfGuideId,
  ui: EngineeringGfLandingUi,
) => ui[engineeringGfGuideLabelKeys[guideId]];

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
  listedGradesTemplate: "{count} total grades",
  comparisonMethods:
    "Comparison basis: GF content ISO 1172; tensile stress ISO 527; flexural properties ISO 178; notched Charpy impact at 23 °C ISO 179/1eA; HDT at 1.8 MPa ISO 75; water absorption at 23 °C and 50% RH ISO 62. These are typical web reference values. The catalog does not specify the dry or conditioned state of the mechanical data; confirm it in the grade-specific TDS before final selection.",
  tradeoffsEyebrow: "Material properties",
  tradeoffsTitle: "Material properties and molding",
  tradeoffsDescriptionTemplate:
    "The properties of glass-fiber-reinforced {polymer} depend on the formulation and molding conditions.",
  guideLinksAria: "PA material selection guides",
  compareOtherTemplate: "Compare {otherPolymer} GF grades →",
  pa6Pa66Guide: "PA6 or PA66? Selection guide →",
  reinforcementGuide: "Glass-fiber reinforcement guide →",
  ppaVsPa66Guide: "PPA vs PA66 selection guide →",
  applicationsEyebrow: "Applications",
  applicationsTitle: "Parts and applications",
  validationEyebrow: "Processing",
  validationTitle: "Molding and part testing",
  validationCaption:
    "Tensile testing in the Taiyi Polymer laboratory.",
  validationImageAlt:
    "Taiyi Polymer tensile-test specimen clamped in laboratory testing equipment",
  inquiryEyebrow: "Project Inquiry",
  inquiryTitleTemplate:
    "{polymer} GF material inquiries",
  inquiryBody:
    "Contact Taiyi Polymer for grade information and TDS requests. Tell us about your part, operating conditions and current material.",
  comparison: {
    actionLabel: "View grade data",
    englishDestinationLabel: "English content",
    glassFiberLabel: "Glass fiber",
    allGlassFiberLabel: "All grades",
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
    listedGradesTemplate: "{count} Typen insgesamt",
    comparisonMethods:
      "Vergleichsbasis: Glasfasergehalt nach ISO 1172; Zugspannung nach ISO 527; Biegeeigenschaften nach ISO 178; Charpy-Kerbschlagzähigkeit bei 23 °C nach ISO 179/1eA; HDT bei 1,8 MPa nach ISO 75; Wasseraufnahme bei 23 °C und 50 % relativer Luftfeuchte nach ISO 62. Dies sind typische Web-Referenzwerte. Der Katalog nennt für die mechanischen Daten keinen trockenen oder konditionierten Zustand; prüfen Sie diesen vor der endgültigen Auswahl im werkstofftypspezifischen TDS.",
    tradeoffsEyebrow: "Materialeigenschaften",
    tradeoffsTitle: "Materialeigenschaften und Verarbeitung",
    tradeoffsDescriptionTemplate:
      "Die Eigenschaften von glasfaserverstärktem {polymer} hängen von der Rezeptur und den Verarbeitungsbedingungen ab.",
    guideLinksAria: "Leitfäden zur PA-Werkstoffauswahl",
    compareOtherTemplate:
      "GF-Werkstofftypen aus {otherPolymer} vergleichen →",
    pa6Pa66Guide: "PA6 oder PA66? Auswahlleitfaden →",
    reinforcementGuide: "Leitfaden zur Glasfaserverstärkung →",
    ppaVsPa66Guide: "Auswahlleitfaden PPA vs. PA66 →",
    applicationsEyebrow: "Anwendungen",
    applicationsTitle: "Bauteile und Anwendungen",
    validationEyebrow: "Verarbeitung",
    validationTitle: "Spritzguss und Bauteilprüfung",
    validationCaption:
      "Zugprüfung im Labor von Taiyi Polymer.",
    validationImageAlt:
      "In einer Laborprüfmaschine eingespannter Zugprüfkörper von Taiyi Polymer",
    inquiryEyebrow: "Projektanfrage",
    inquiryTitleTemplate:
      "Anfragen zu {polymer} GF",
    inquiryBody:
      "Kontaktieren Sie Taiyi Polymer für Informationen zu Typen und technische Datenblätter. Beschreiben Sie Ihr Bauteil, die Einsatzbedingungen und das bisherige Material.",
    comparison: {
      actionLabel: "Werkstoffdaten ansehen",
      englishDestinationLabel: "Inhalt auf Englisch",
      glassFiberLabel: "Glasfaser",
      allGlassFiberLabel: "Alle Typen",
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
    listedGradesTemplate: "{count} grades au total",
    comparisonMethods:
      "Base de comparaison : teneur en fibres de verre selon ISO 1172 ; contrainte de traction selon ISO 527 ; propriétés en flexion selon ISO 178 ; résistance au choc Charpy entaillé à 23 °C selon ISO 179/1eA ; HDT sous 1,8 MPa selon ISO 75 ; absorption d’eau à 23 °C et 50 % HR selon ISO 62. Il s’agit de valeurs indicatives publiées sur le site. Le catalogue ne précise pas si les données mécaniques correspondent à l’état sec ou conditionné ; vérifiez ce point dans la TDS du grade avant la sélection finale.",
    tradeoffsEyebrow: "Propriétés du matériau",
    tradeoffsTitle: "Propriétés et mise en œuvre",
    tradeoffsDescriptionTemplate:
      "Les propriétés du {polymer} renforcé de fibres de verre dépendent de la formulation et des conditions de moulage.",
    guideLinksAria: "Guides de sélection des matériaux PA",
    compareOtherTemplate:
      "Comparer les grades GF en {otherPolymer} →",
    pa6Pa66Guide: "PA6 ou PA66 ? Guide de sélection →",
    reinforcementGuide: "Guide du renforcement par fibres de verre →",
    ppaVsPa66Guide: "Guide de sélection PPA vs PA66 →",
    applicationsEyebrow: "Applications",
    applicationsTitle: "Pièces et applications",
    validationEyebrow: "Mise en œuvre",
    validationTitle: "Moulage et essais sur pièces",
    validationCaption:
      "Essai de traction au laboratoire de Taiyi Polymer.",
    validationImageAlt:
      "Éprouvette de traction Taiyi Polymer serrée dans un équipement d’essai de laboratoire",
    inquiryEyebrow: "Demande projet",
    inquiryTitleTemplate:
      "Demandes sur le {polymer} GF",
    inquiryBody:
      "Contactez Taiyi Polymer pour des informations sur les grades et des fiches techniques. Indiquez votre pièce, ses conditions d’utilisation et le matériau actuel.",
    comparison: {
      actionLabel: "Voir les données du grade",
      englishDestinationLabel: "Contenu en anglais",
      glassFiberLabel: "Fibres de verre",
      allGlassFiberLabel: "Tous les grades",
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
    listedGradesTemplate: "{count} grades no total",
    comparisonMethods:
      "Base de comparação: teor de fibra de vidro segundo ISO 1172; tensão de tração segundo ISO 527; propriedades de flexão segundo ISO 178; impacto Charpy com entalhe a 23 °C segundo ISO 179/1eA; HDT sob 1,8 MPa segundo ISO 75; absorção de água a 23 °C e 50% de UR segundo ISO 62. Estes são valores típicos de referência publicados na web. O catálogo não informa se os dados mecânicos correspondem ao estado seco ou condicionado; confirme esse ponto na TDS específica do grau antes da seleção final.",
    tradeoffsEyebrow: "Propriedades do material",
    tradeoffsTitle: "Propriedades e processamento",
    tradeoffsDescriptionTemplate:
      "As propriedades do {polymer} reforçado com fibra de vidro dependem da formulação e das condições de moldagem.",
    guideLinksAria: "Guias de seleção de materiais PA",
    compareOtherTemplate: "Comparar graus GF de {otherPolymer} →",
    pa6Pa66Guide: "PA6 ou PA66? Guia de seleção →",
    reinforcementGuide: "Guia de reforço com fibra de vidro →",
    ppaVsPa66Guide: "Guia de seleção PPA vs PA66 →",
    applicationsEyebrow: "Aplicações",
    applicationsTitle: "Peças e aplicações",
    validationEyebrow: "Processamento",
    validationTitle: "Moldagem e ensaios de peças",
    validationCaption:
      "Ensaio de tração no laboratório da Taiyi Polymer.",
    validationImageAlt:
      "Corpo de prova de tração da Taiyi Polymer preso em equipamento de laboratório",
    inquiryEyebrow: "Consulta de projeto",
    inquiryTitleTemplate:
      "Consultas sobre {polymer} GF",
    inquiryBody:
      "Entre em contato com a Taiyi Polymer para informações sobre grades e fichas técnicas. Descreva a peça, as condições de uso e o material atual.",
    comparison: {
      actionLabel: "Ver dados do grau",
      englishDestinationLabel: "Conteúdo em inglês",
      glassFiberLabel: "Fibra de vidro",
      allGlassFiberLabel: "Todos os grades",
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
    discussApplicationAction: "讨论您的应用",
    technicalDataAction: "打开技术数据",
    navigationAriaTemplate: "{polymer} 玻纤增强材料页面导航",
    navTitleTemplate: "{polymer} 玻纤增强材料",
    compareTab: "牌号对比",
    tradeoffsTab: "工程权衡",
    applicationsTab: "应用场景",
    validationTab: "项目验证",
    gradeDirectoryEyebrow: "牌号目录",
    gradeTitleTemplate: "{polymer} 玻纤增强牌号",
    listedGradesTemplate: "共 {count} 个牌号",
    comparisonMethods:
      "对比依据：玻纤含量 ISO 1172；拉伸应力 ISO 527；弯曲性能 ISO 178；23 °C 缺口夏比冲击强度 ISO 179/1eA；1.8 MPa 负载下的热变形温度 ISO 75；23 °C、50% RH 条件下的吸水率 ISO 62。以上为典型网页参考值。目录未说明机械性能数据对应干态还是调湿态；最终选型前请在具体牌号 TDS 中确认。",
    tradeoffsEyebrow: "材料性能",
    tradeoffsTitle: "材料性能与成型",
    tradeoffsDescriptionTemplate:
      "玻纤增强 {polymer} 的性能受配方和成型条件影响。",
    guideLinksAria: "PA 材料选型指南",
    compareOtherTemplate: "对比 {otherPolymer} 玻纤增强牌号 →",
    pa6Pa66Guide: "PA6 还是 PA66？查看选型指南 →",
    reinforcementGuide: "查看玻纤增强选型指南 →",
    ppaVsPa66Guide: "查看 PPA 与 PA66 选型指南 →",
    applicationsEyebrow: "应用",
    applicationsTitle: "零件与应用",
    validationEyebrow: "加工",
    validationTitle: "成型与零件测试",
    validationCaption:
      "Taiyi Polymer 实验室拉伸测试。",
    validationImageAlt: "Taiyi Polymer 实验室设备夹持的拉伸测试试样",
    inquiryEyebrow: "项目询盘",
    inquiryTitleTemplate: "咨询 {polymer} 玻纤增强材料",
    inquiryBody:
      "联系 Taiyi Polymer，了解牌号信息或索取 TDS。您可以介绍零件用途、工作条件和目前使用的材料。",
    comparison: {
      actionLabel: "查看牌号数据",
      englishDestinationLabel: "英文内容",
      glassFiberLabel: "玻纤含量",
      allGlassFiberLabel: "全部牌号",
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
  Record<Exclude<EngineeringGfPolymer, "PPA">, LocalizedEngineeringGfPageCopy>
> = {
  de: {
    PA6: {
      parentLabel: "PA6-Compounds",
      title: "Glasfaserverstärkte PA6-Compounds",
      metaTitle: "Glasfaserverstärkte PA6-Compounds | Taiyi Polymer",
      metaDescription:
        "Glasfaserverstärktes PLATFORM PA6 für den Spritzguss. Vergleichen Sie Typeneigenschaften und fordern Sie technische Daten für Ihr Bauteil an.",
      heroEyebrow: "PLATFORM® PA6",
      heroDescription:
        "PLATFORM® PA6-Compounds mit 8–50 % Glasfaserverstärkung für Spritzgussteile.",
      navSubtitle:
        "Glasfaserverstärkte PA6-Typen und ihre Eigenschaften",
      comparisonIntro:
        "Glasfaseranteil und wichtige Eigenschaften je Typ, mit Links zu Typendaten und zur Anforderung technischer Datenblätter.",
      tradeoffs: {
        improvementTitle: "Festigkeit und Maßhaltigkeit",
        improvementIntro:
          "Glasfaserverstärktes PA6 wird für Bauteile eingesetzt, die Steifigkeit und Festigkeit unter Last benötigen. Die Eigenschaften variieren mit dem Typ und den Verarbeitungsbedingungen.",
        improvements: [
          "Höhere Steifigkeit und besseres Lastverhalten",
          "Höhere Zug- und Biegefestigkeit",
          "Höhere Wärmeformbeständigkeit",
          "Verbesserte Kriechbeständigkeit",
          "Maßkontrolle unter Last",
        ],
        reviewTitle: "Feuchtigkeit und Bauteilgeometrie",
        reviewIntro:
          "Feuchtigkeit verändert die mechanischen Eigenschaften und Maße von PA6. Faserorientierung und Bindenähte beeinflussen ebenfalls das Verhalten von Spritzgussteilen.",
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
        "Gehäuse, Halterungen und Funktionsbauteile stellen unterschiedliche Anforderungen an Festigkeit, Temperaturbeständigkeit und Maßhaltigkeit.",
      applications: [
        {
          eyebrow: "Strukturgehäuse",
          label: "Elektrische und elektronische Gehäuse",
          description:
            "Gehäusesteifigkeit, Montagelasten, elektrische Isolation und Wärmebelastung bestimmen die Materialanforderungen.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Halterungen und Stützen",
          label: "Stützbauteile für die Automation",
          description:
            "Halterungen und Stützen übertragen Lasten über Befestigungspunkte und sind häufig Vibrationen ausgesetzt.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Fahrzeugmechanismen",
          label: "Kunststoffformteile für Fahrzeuge",
          description:
            "Automobilformteile verbinden mechanische Belastungen mit Wärme, Feuchtigkeit und engen Maßtoleranzen.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Funktionsgehäuse",
          label: "Bauteile für die Wasserregelung",
          description:
            "Druck, Temperatur sowie Kontakt mit Wasser oder anderen Flüssigkeiten beeinflussen Materialwahl und Maßhaltigkeit.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "PA6 nimmt Feuchtigkeit auf. Trocknung, Konditionierung und Spritzgussbedingungen beeinflussen die Eigenschaften und Maße des fertigen Bauteils.",
      validationSteps: [
        {
          title: "Feuchtezustand",
          description:
            "Trockene, spritzfrische und konditionierte Probekörper können unterschiedliche Eigenschaften haben. Vergleichbare Daten erfordern denselben Feuchtezustand.",
        },
        {
          title: "Trocknung und Handhabung",
          description:
            "Die Trocknungsbedingungen hängen vom Werkstofftyp ab. Lagerung und Handhabung beeinflussen die Feuchteaufnahme vor dem Spritzguss.",
        },
        {
          title: "Faserorientierung",
          description:
            "Anschnittposition, Fließrichtung und Bindenähte beeinflussen die Festigkeit entlang des Lastpfads.",
        },
        {
          title: "Schwindung und Verzug",
          description:
            "Schwindungsdaten sind für diese Reihe unvollständig. Bauteilmessungen erfassen richtungsabhängige Schwindung und Verzug an der vorgesehenen Geometrie.",
        },
        {
          title: "Spritzgussbedingungen",
          description:
            "Werkzeugauslegung und Prozessfenster beeinflussen Füllung, Oberfläche, Maße und Wiederholbarkeit.",
        },
        {
          title: "Bauteilprüfung",
          description:
            "Prüfungen am montierten Bauteil erfassen das Verhalten unter Last, Umwelteinflüsse, zyklische Belastung und Passgenauigkeit unter den vorgesehenen Einsatzbedingungen.",
        },
      ],
      contactMaterial: "Glasfaserverstärktes PA6",
    },
    PA66: {
      parentLabel: "PA66-Compounds",
      title: "Glasfaserverstärkte PA66-Compounds",
      metaTitle: "Glasfaserverstärkte PA66-Compounds | Taiyi Polymer",
      metaDescription:
        "Glasfaserverstärktes PLATFORM PA66 für tragende Spritzgussteile. Festigkeit, Wärmeformbeständigkeit und Feuchtedaten nach Materialtyp vergleichen.",
      heroEyebrow: "PLATFORM® PA66",
      heroDescription:
        "PLATFORM® PA66-Compounds mit 15–50 % Glasfaserverstärkung für tragende Spritzgussteile.",
      navSubtitle:
        "Glasfaserverstärkte PA66-Typen und Eigenschaften",
      comparisonIntro:
        "Glasfaseranteil und wichtige Eigenschaften je Typ, mit Links zu Typendaten und zur Anforderung technischer Datenblätter.",
      tradeoffs: {
        improvementTitle: "Festigkeit unter Last",
        improvementIntro:
          "Glasfaserverstärktes PA66 verbindet Steifigkeit und Festigkeit für Gehäuse, Halterungen und Strukturteile. Rezeptur und Prüfbedingungen beeinflussen das Verhältnis zwischen mechanischen und thermischen Eigenschaften.",
        improvements: [
          "Höhere Steifigkeit und kurzfristiges Lastverhalten",
          "Höhere Zug- und Biegefestigkeit",
          "Höhere Wärmeformbeständigkeit",
          "Verbesserte Kriechbeständigkeit",
          "Maßkontrolle unter Last",
        ],
        reviewTitle: "Feuchte und Bauteilgeometrie",
        reviewIntro:
          "Der Feuchtezustand von PA66 beeinflusst mechanische Eigenschaften und Abmessungen. Faserorientierung, Anschnittposition und Bindenähte wirken sich ebenfalls auf das Spritzgussteil aus.",
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
        "Gehäuse, Halterungen und Strukturteile stellen unterschiedliche Anforderungen an Steifigkeit, Schlagverhalten und Maßhaltigkeit.",
      applications: [
        {
          eyebrow: "Fahrzeugmechanismen",
          label: "Struktur- und Funktionsbauteile für Fahrzeuge",
          description:
            "Fahrzeugbauteile sind Lasten, Temperaturwechseln, Feuchte und Befestigungskräften ausgesetzt. Material- und Bauteilprüfungen berücksichtigen die Freigabeanforderungen des Projekts.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Elektrogehäuse",
          label: "Elektrische und elektronische Bauteile",
          description:
            "Wärmebelastung, Passmaße und mechanischer Halt sind für Elektrogehäuse relevant. Elektrische Eigenschaften und Dokumentanforderungen hängen vom Materialtyp ab.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Halterungen und Stützen",
          label: "Automations- und Fördersysteme",
          description:
            "Statische und zyklische Lasten, Schwingungen und Befestigungsgeometrie bestimmen die Anforderungen an Halterungen und Stützen. Die Verarbeitung beeinflusst das geformte Bauteil.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Tragende Gehäuse",
          label: "Kunststoffformteile für Haushaltsgeräte",
          description:
            "Temperatur, Feuchte, Montagelasten und wiederholte Zyklen wirken auf Gehäuse und Stützen. Konstante Spritzgussbedingungen helfen bei der Beurteilung der Wiederholbarkeit.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "Konditionierung und Spritzgussbedingungen beeinflussen PA66-Prüfwerte und Bauteilabmessungen. Für Materialdaten und Bauteilmessungen müssen diese Bedingungen dokumentiert sein.",
      validationSteps: [
        {
          title: "Konditionierung der Prüfkörper",
          description:
            "Trockene und konditionierte PA66-Werte beschreiben unterschiedliche Materialzustände. Vergleiche benötigen die Konditionierungsbedingungen der jeweiligen Prüfung.",
        },
        {
          title: "Trocknung und Schmelzehandhabung",
          description:
            "Die typspezifischen Vorgaben legen Trocknungs- und Verarbeitungsbedingungen für den Spritzgussversuch fest. Feuchte und Verweilzeit beeinflussen die Interpretation der Ergebnisse.",
        },
        {
          title: "Faserrichtung und Last",
          description:
            "Anschnitt, Fließrichtung, Bindenähte, Rippen und Einlegeteile beeinflussen die Faserorientierung entlang des Lastpfads.",
        },
        {
          title: "Schwindung und Verzug",
          description:
            "Die Schwindungsdaten im Katalog sind für diese Reihe unvollständig. Messungen am Formteil bestimmen Abmessungen und Verzug für das tatsächliche Werkzeug und die Konditionierungsfolge.",
        },
        {
          title: "Wärme und Montagelasten",
          description:
            "Ein HDT-Wert allein bestimmt keine Dauergebrauchstemperatur. Bauteilprüfungen berücksichtigen Lastdauer, Temperaturwechsel und Montagezwänge.",
        },
        {
          title: "Funktion und Wiederholbarkeit",
          description:
            "Bauteilprüfungen erfassen Funktion, Wiederholbarkeit und Umwelteinflüsse. Dokument- und Kundenanforderungen gehören zur Produktionsfreigabe.",
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
        "PA6 PLATFORM renforcé de fibres de verre pour le moulage par injection. Comparez les propriétés des grades et demandez les données techniques pour votre pièce.",
      heroEyebrow: "PLATFORM® PA6",
      heroDescription:
        "Compounds PA6 PLATFORM® renforcés de 8 à 50 % de fibres de verre pour les pièces moulées par injection.",
      navSubtitle: "Grades PA6 renforcés de fibres de verre et propriétés",
      comparisonIntro:
        "Teneur en fibres de verre et principales propriétés de chaque grade, avec accès aux données et aux demandes de fiches techniques.",
      tradeoffs: {
        improvementTitle:
          "Résistance et stabilité dimensionnelle",
        improvementIntro:
          "Le PA6 renforcé de fibres de verre est utilisé pour les pièces qui nécessitent rigidité et résistance sous charge. Ses performances varient selon le grade et les conditions de moulage.",
        improvements: [
          "Une rigidité et une réponse à la charge supérieures",
          "Une résistance à la traction et à la flexion supérieure",
          "Une meilleure tenue sous charge à chaud",
          "Une meilleure résistance au fluage",
          "La maîtrise dimensionnelle sous charge",
        ],
        reviewTitle: "Humidité et géométrie de la pièce",
        reviewIntro:
          "L’humidité modifie les propriétés mécaniques et les dimensions du PA6. L’orientation des fibres et les lignes de soudure influencent aussi le comportement des pièces moulées.",
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
        "Les boîtiers, supports et pièces fonctionnelles ont des exigences différentes en matière de résistance, de tenue thermique et de stabilité dimensionnelle.",
      applications: [
        {
          eyebrow: "Boîtiers structurels",
          label: "Boîtiers électriques et électroniques",
          description:
            "La rigidité du boîtier, les efforts d’assemblage, l’isolation électrique et l’exposition à la chaleur définissent les besoins du matériau.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Supports et fixations",
          label: "Composants de support pour l’automatisation",
          description:
            "Les supports transmettent les charges par leurs points de fixation et sont souvent soumis à des vibrations.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Mécanismes automobiles",
          label: "Composants automobiles moulés",
          description:
            "Les pièces automobiles moulées associent charges mécaniques, chaleur, humidité et tolérances dimensionnelles serrées.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Boîtiers fonctionnels",
          label: "Composants de régulation de l’eau",
          description:
            "La pression, la température et le contact avec l’eau ou d’autres fluides influencent le choix du matériau et sa stabilité dimensionnelle.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "Le PA6 absorbe l’humidité. Le séchage, le conditionnement et les conditions de moulage influencent les propriétés et les dimensions de la pièce finie.",
      validationSteps: [
        {
          title: "État d’humidité",
          description:
            "Les éprouvettes sèches, brutes de moulage et conditionnées peuvent présenter des propriétés différentes. Des données comparables nécessitent le même état d’humidité.",
        },
        {
          title: "Séchage et manutention",
          description:
            "Les conditions de séchage dépendent du grade. Le stockage et la manutention influencent la reprise d’humidité avant le moulage.",
        },
        {
          title: "Orientation des fibres",
          description:
            "La position du seuil, la direction d’écoulement et les lignes de soudure influencent la résistance dans la direction des efforts.",
        },
        {
          title: "Retrait et gauchissement",
          description:
            "Les données de retrait sont incomplètes pour cette gamme. Les mesures sur pièce établissent le retrait directionnel et le gauchissement pour la géométrie prévue.",
        },
        {
          title: "Conditions de moulage",
          description:
            "La conception du moule et la fenêtre de procédé influencent le remplissage, l’état de surface, les dimensions et la répétabilité.",
        },
        {
          title: "Essais sur pièces",
          description:
            "Les essais sur la pièce assemblée évaluent la réponse aux charges, l’exposition à l’environnement, les sollicitations cycliques et l’ajustement dans les conditions de service prévues.",
        },
      ],
      contactMaterial: "PA6 renforcé de fibres de verre",
    },
    PA66: {
      parentLabel: "Compounds PA66",
      title: "Compounds PA66 renforcés de fibres de verre",
      metaTitle: "Compounds PA66 renforcés de fibres de verre | Taiyi Polymer",
      metaDescription:
        "PA66 PLATFORM renforcé de fibres de verre pour pièces structurelles injectées. Comparez résistance, déformation sous charge à chaud et données d'humidité par grade.",
      heroEyebrow: "PLATFORM® PA66",
      heroDescription:
        "Matériaux PA66 PLATFORM® renforcés de 15 à 50 % de fibres de verre, pour pièces structurelles moulées par injection.",
      navSubtitle: "Grades PA66 renforcés de fibres de verre et propriétés",
      comparisonIntro:
        "Teneur en fibres de verre et principales propriétés de chaque grade, avec accès aux données et aux demandes de fiches techniques.",
      tradeoffs: {
        improvementTitle:
          "Résistance sous charge",
        improvementIntro:
          "Le PA66 renforcé de fibres de verre associe rigidité et résistance pour les boîtiers, supports et pièces structurelles. La formulation et les conditions d'essai influencent l'équilibre des propriétés mécaniques et thermiques.",
        improvements: [
          "Une rigidité et une réponse à court terme supérieures",
          "Une résistance à la traction et à la flexion supérieure",
          "Une meilleure tenue sous charge à chaud",
          "Une meilleure résistance au fluage",
          "La maîtrise dimensionnelle sous charge",
        ],
        reviewTitle: "Humidité et géométrie moulée",
        reviewIntro:
          "L'état d'humidité du PA66 influence les propriétés mécaniques et les dimensions. L'orientation des fibres, la position du seuil et les lignes de soudure affectent aussi la pièce injectée.",
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
        "Les boîtiers, supports et pièces structurelles ont des exigences différentes en matière de rigidité, de résistance au choc et de stabilité dimensionnelle.",
      applications: [
        {
          eyebrow: "Mécanismes automobiles",
          label: "Pièces automobiles structurelles et fonctionnelles",
          description:
            "Les composants automobiles subissent charges, cycles thermiques, humidité et efforts de fixation. Les essais matière et pièce tiennent compte des exigences d'approbation du projet.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Boîtiers électriques",
          label: "Composants électriques et électroniques",
          description:
            "L'exposition thermique, l'ajustement dimensionnel et le maintien mécanique comptent pour les boîtiers électriques. Les propriétés électriques et documents requis dépendent du grade.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Supports et fixations",
          label: "Systèmes d’automatisation et de convoyage",
          description:
            "Les charges statiques et cycliques, vibrations et fixations déterminent les exigences des supports. Les conditions de transformation influencent le résultat moulé.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Boîtiers porteurs",
          label: "Composants moulés pour appareils ménagers",
          description:
            "Température, humidité, charges d'assemblage et cycles répétés affectent les boîtiers et supports. Des conditions d'injection constantes facilitent l'évaluation de la répétabilité.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "Le conditionnement et les conditions d'injection influencent les résultats d'essai du PA66 et les dimensions des pièces. Ces conditions doivent être précisées pour les données matière comme pour les mesures sur pièce.",
      validationSteps: [
        {
          title: "Conditionnement des éprouvettes",
          description:
            "Les valeurs de PA66 sec et conditionné correspondent à des états matière différents. La comparaison exige les conditions de préparation propres à chaque essai.",
        },
        {
          title: "Séchage et gestion de la matière fondue",
          description:
            "Les recommandations du grade définissent les conditions de séchage et de transformation de l'essai d'injection. L'humidité et le temps de séjour influencent l'interprétation des résultats.",
        },
        {
          title: "Orientation des fibres et charges",
          description:
            "Le seuil, l'écoulement, les lignes de soudure, nervures et inserts influencent l'orientation des fibres le long du chemin de charge.",
        },
        {
          title: "Retrait et gauchissement",
          description:
            "Les données de retrait du catalogue sont incomplètes pour cette gamme. Les mesures sur pièce établissent les dimensions et le gauchissement avec le moule et le cycle de conditionnement réels.",
        },
        {
          title: "Chaleur et charges d'assemblage",
          description:
            "La HDT seule ne définit pas une température d'utilisation continue. Les essais sur pièce couvrent la durée de charge, les cycles thermiques et les contraintes d'assemblage.",
        },
        {
          title: "Fonction et répétabilité",
          description:
            "Les essais sur pièce évaluent fonction, répétabilité et exposition environnementale. Les documents et exigences du client font partie de l'approbation de production.",
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
        "PA6 PLATFORM reforçado com fibra de vidro para moldagem por injeção. Compare propriedades dos grades e solicite dados técnicos para sua peça.",
      heroEyebrow: "PLATFORM® PA6",
      heroDescription:
        "Compostos PA6 PLATFORM® com 8–50% de reforço de fibra de vidro para peças moldadas por injeção.",
      navSubtitle: "Grades PA6 com fibra de vidro e suas propriedades",
      comparisonIntro:
        "Teor de fibra de vidro e principais propriedades de cada grade, com acesso aos dados e à solicitação de fichas técnicas.",
      tradeoffs: {
        improvementTitle:
          "Resistência e estabilidade dimensional",
        improvementIntro:
          "O PA6 reforçado com fibra de vidro é usado em peças que exigem rigidez e resistência sob carga. O desempenho varia conforme o grade e as condições de moldagem.",
        improvements: [
          "Maior rigidez e resposta à carga",
          "Maior resistência à tração e à flexão",
          "Maior desempenho de deflexão térmica",
          "Melhor resistência à fluência",
          "Controle dimensional sob carga",
        ],
        reviewTitle: "Umidade e geometria da peça",
        reviewIntro:
          "A umidade altera as propriedades mecânicas e as dimensões do PA6. A orientação das fibras e as linhas de solda também influenciam o desempenho das peças moldadas.",
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
        "Carcaças, suportes e componentes funcionais têm diferentes exigências de resistência, desempenho térmico e estabilidade dimensional.",
      applications: [
        {
          eyebrow: "Carcaças estruturais",
          label: "Carcaças elétricas e eletrônicas",
          description:
            "Rigidez da carcaça, cargas de montagem, isolamento elétrico e exposição ao calor definem os requisitos do material.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Suportes e fixações",
          label: "Componentes de suporte para automação",
          description:
            "Suportes transmitem cargas pelos pontos de fixação e frequentemente ficam expostos à vibração.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Mecanismos automotivos",
          label: "Componentes automotivos moldados",
          description:
            "Peças automotivas moldadas combinam cargas mecânicas com calor, umidade e tolerâncias dimensionais estreitas.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Carcaças funcionais",
          label: "Componentes para controle de água",
          description:
            "Pressão, temperatura e contato com água ou outros fluidos influenciam a escolha do material e seu desempenho dimensional.",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "O PA6 absorve umidade. A secagem, o condicionamento e as condições de moldagem influenciam as propriedades e as dimensões da peça acabada.",
      validationSteps: [
        {
          title: "Estado de umidade",
          description:
            "Corpos de prova secos, recém-moldados e condicionados podem apresentar propriedades diferentes. Dados comparáveis exigem o mesmo estado de umidade.",
        },
        {
          title: "Secagem e manuseio",
          description:
            "As condições de secagem dependem do grade. O armazenamento e o manuseio influenciam a absorção de umidade antes da moldagem.",
        },
        {
          title: "Orientação das fibras",
          description:
            "A posição do ponto de injeção, a direção do fluxo e as linhas de solda influenciam a resistência na direção das cargas.",
        },
        {
          title: "Contração e empenamento",
          description:
            "Os dados de contração desta linha estão incompletos. Medições na peça determinam a contração direcional e o empenamento da geometria prevista.",
        },
        {
          title: "Condições de moldagem",
          description:
            "O projeto do molde e a janela de processo influenciam o preenchimento, o acabamento superficial, as dimensões e a repetibilidade.",
        },
        {
          title: "Ensaios de peças",
          description:
            "Ensaios na peça montada avaliam a resposta às cargas, a exposição ao ambiente, os ciclos de uso e o ajuste nas condições de serviço previstas.",
        },
      ],
      contactMaterial: "PA6 reforçado com fibra de vidro",
    },
    PA66: {
      parentLabel: "Compostos de PA66",
      title: "Compostos de PA66 reforçados com fibra de vidro",
      metaTitle: "PA66 reforçado com fibra de vidro | Taiyi Polymer",
      metaDescription:
        "PA66 PLATFORM reforçado com fibra de vidro para peças estruturais injetadas. Compare resistência, deflexão térmica e dados de umidade por grau.",
      heroEyebrow: "PLATFORM® PA66",
      heroDescription:
        "Compostos PA66 PLATFORM® com 15–50% de reforço de fibra de vidro para peças injetadas que suportam carga.",
      navSubtitle: "Graus PA66 com fibra de vidro e suas propriedades",
      comparisonIntro:
        "Teor de fibra de vidro e principais propriedades de cada grade, com acesso aos dados e à solicitação de fichas técnicas.",
      tradeoffs: {
        improvementTitle:
          "Resistência sob carga",
        improvementIntro:
          "O PA66 reforçado com fibra de vidro combina rigidez e resistência para carcaças, suportes e peças estruturais. A formulação e as condições de ensaio influenciam o equilíbrio entre propriedades mecânicas e térmicas.",
        improvements: [
          "Maior rigidez e resposta de curto prazo à carga",
          "Maior resistência à tração e à flexão",
          "Maior desempenho de deflexão térmica",
          "Melhor resistência à fluência",
          "Controle dimensional sob carga",
        ],
        reviewTitle: "Umidade e geometria moldada",
        reviewIntro:
          "O estado de umidade do PA66 influencia as propriedades mecânicas e as dimensões. A orientação das fibras, o ponto de injeção e as linhas de solda também afetam a peça moldada.",
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
        "Carcaças, suportes e peças estruturais têm requisitos distintos de rigidez, resistência ao impacto e estabilidade dimensional.",
      applications: [
        {
          eyebrow: "Mecanismos automotivos",
          label: "Peças automotivas estruturais e funcionais",
          description:
            "Componentes automotivos estão sujeitos a cargas, ciclos térmicos, umidade e esforços de fixação. Os ensaios do material e da peça contemplam os requisitos de aprovação do projeto.",
          href: "/applications/automotive",
        },
        {
          eyebrow: "Carcaças elétricas",
          label: "Componentes elétricos e eletrônicos",
          description:
            "Exposição térmica, ajuste dimensional e retenção mecânica importam para carcaças elétricas. As propriedades elétricas e os documentos exigidos dependem do grau.",
          href: "/applications/electronics",
        },
        {
          eyebrow: "Suportes e fixações",
          label: "Sistemas de automação e transporte",
          description:
            "Cargas estáticas e cíclicas, vibração e geometria de montagem definem os requisitos dos suportes. As condições de processamento influenciam o resultado moldado.",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "Carcaças sob carga",
          label: "Componentes moldados para eletrodomésticos",
          description:
            "Temperatura, umidade, cargas de montagem e ciclos repetidos afetam carcaças e suportes. Condições consistentes de injeção ajudam a avaliar a repetibilidade.",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "O condicionamento e as condições de moldagem afetam os resultados de ensaio do PA66 e as dimensões da peça. Esses fatores precisam estar registrados nos dados do grau e nas medições da peça.",
      validationSteps: [
        {
          title: "Condicionamento dos corpos de prova",
          description:
            "Os valores de PA66 seco e condicionado representam estados distintos do material. A comparação exige a base de condicionamento de cada ensaio.",
        },
        {
          title: "Secagem e manuseio do fundido",
          description:
            "As orientações do grau definem as condições de secagem e processamento do teste de moldagem. Umidade e tempo de residência influenciam a interpretação dos resultados.",
        },
        {
          title: "Direção das fibras e carga",
          description:
            "Ponto de injeção, fluxo, linhas de solda, nervuras e insertos influenciam a orientação das fibras ao longo do caminho de carga.",
        },
        {
          title: "Contração e empenamento",
          description:
            "Os dados de contração do catálogo estão incompletos para esta linha. Medições na peça estabelecem dimensões e empenamento para o molde e a sequência de condicionamento reais.",
        },
        {
          title: "Calor e cargas de montagem",
          description:
            "O valor de HDT sozinho não define uma temperatura de uso contínuo. Os ensaios da peça abrangem duração da carga, ciclos térmicos e restrições de montagem.",
        },
        {
          title: "Função e repetibilidade",
          description:
            "Ensaios na peça cobrem resposta funcional, repetibilidade e exposição ambiental. Documentos e requisitos do cliente fazem parte da aprovação para produção.",
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
        "用于注塑的 PLATFORM 玻纤增强 PA6。对比牌号性能，查看材料数据并索取 TDS。",
      heroEyebrow: "PLATFORM® PA6",
      heroDescription:
        "PLATFORM® 玻纤增强 PA6，玻纤含量为 8–50%，用于注塑零件。",
      navSubtitle: "玻纤增强 PA6 牌号与性能",
      comparisonIntro:
        "各牌号的玻纤含量和主要性能，可查看牌号数据或索取 TDS。",
      tradeoffs: {
        improvementTitle: "强度与尺寸稳定性",
        improvementIntro:
          "玻纤增强 PA6 用于需要刚性和承载强度的零件。具体性能随牌号和成型条件变化。",
        improvements: [
          "更高的刚性与载荷响应",
          "更高的拉伸与弯曲强度",
          "更高的热变形性能",
          "改善抗蠕变能力",
          "载荷下的尺寸控制",
        ],
        reviewTitle: "水分与零件结构",
        reviewIntro:
          "水分会改变 PA6 的机械性能和尺寸。纤维取向、熔接线也会影响注塑零件的表现。",
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
        "壳体、支架和功能部件对强度、耐热性及尺寸稳定性的要求各不相同。",
      applications: [
        {
          eyebrow: "结构壳体",
          label: "电气与电子壳体",
          description:
            "壳体刚性、装配载荷、电气绝缘和受热情况决定材料要求。",
          href: "/applications/electronics",
        },
        {
          eyebrow: "支架与支撑件",
          label: "自动化支撑部件",
          description:
            "支架和支撑件通过紧固点承受载荷，使用中还可能受到振动。",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "汽车机构",
          label: "汽车注塑部件",
          description:
            "汽车注塑件承受机械载荷，也面临温度、水分和尺寸公差要求。",
          href: "/applications/automotive",
        },
        {
          eyebrow: "功能壳体",
          label: "水路控制部件",
          description:
            "压力、温度以及水或其他介质的接触，会影响材料选择和尺寸表现。",
          href: "/applications/water-control",
        },
      ],
      validationIntro:
        "PA6 会吸湿。干燥、调湿和成型条件会影响成品的性能与尺寸。",
      validationSteps: [
        {
          title: "水分状态",
          description:
            "干态、注塑态和调湿态试样的性能可能不同。数据对比需要一致的水分状态。",
        },
        {
          title: "干燥与物料处理",
          description:
            "干燥条件取决于具体牌号。储存和物料处理会影响成型前的吸湿程度。",
        },
        {
          title: "纤维取向",
          description:
            "浇口位置、流动方向和熔接线会影响受力方向上的强度。",
        },
        {
          title: "收缩与翘曲",
          description:
            "当前系列的收缩数据尚不完整。实际零件测量可确定目标结构的方向性收缩与翘曲。",
        },
        {
          title: "成型条件",
          description:
            "模具设计和工艺窗口影响充模、表面、尺寸及重复性。",
        },
        {
          title: "零件测试",
          description:
            "装配后的测试用于了解零件在工作条件下的承载表现、环境影响、循环耐久和配合情况。",
        },
      ],
      contactMaterial: "玻璃纤维增强 PA6",
    },
    PA66: {
      parentLabel: "PA66 改性材料",
      title: "玻璃纤维增强 PA66 材料",
      metaTitle: "玻璃纤维增强 PA66 牌号 | 台益",
      metaDescription:
        "PLATFORM 玻璃纤维增强 PA66，用于承载型注塑零件。可按牌号查看强度、热变形和水分数据，并索取技术资料。",
      heroEyebrow: "PLATFORM® PA66",
      heroDescription:
        "PLATFORM® 玻璃纤维增强 PA66 材料，玻纤含量覆盖 15–50%，面向承载型注塑零件。",
      navSubtitle: "玻纤增强 PA66 牌号与性能",
      comparisonIntro:
        "各牌号的玻纤含量和主要性能，可查看牌号数据或索取 TDS。",
      tradeoffs: {
        improvementTitle: "承载所需的刚性与强度",
        improvementIntro:
          "玻纤增强 PA66 为壳体、支架和结构件提供刚性与强度。不同配方和测试条件下，力学与热性能的表现有所不同。",
        improvements: [
          "更高的刚性与短期载荷响应",
          "更高的拉伸与弯曲强度",
          "更高的热变形性能",
          "改善抗蠕变能力",
          "载荷下的尺寸控制",
        ],
        reviewTitle: "吸湿状态与注塑结构",
        reviewIntro:
          "PA66 的水分状态会影响力学性能和尺寸。纤维取向、浇口位置和熔接线也会影响注塑零件的表现。",
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
        "壳体、支架和结构件对刚性、冲击性能和尺寸稳定性的要求各不相同。",
      applications: [
        {
          eyebrow: "汽车机构",
          label: "汽车结构与功能部件",
          description:
            "汽车部件涉及载荷、温度循环、湿度和紧固应力。牌号及零件试验应覆盖项目的批准要求。",
          href: "/applications/automotive",
        },
        {
          eyebrow: "电气壳体",
          label: "电气与电子部件",
          description:
            "电气壳体需要兼顾热暴露、尺寸配合和机械保持性能。电性能和文件要求需对应到具体牌号。",
          href: "/applications/electronics",
        },
        {
          eyebrow: "支架与支撑件",
          label: "自动化与输送系统",
          description:
            "支架与支撑件的要求与静态及循环载荷、振动和安装结构有关，加工条件也会影响成型结果。",
          href: "/applications/conveyor-automation",
        },
        {
          eyebrow: "承载壳体",
          label: "家电注塑部件",
          description:
            "壳体与支撑件的表现受温度、水分、装配载荷和循环工况影响。一致的注塑条件有助于评估重复性。",
          href: "/applications/washing-machine-components",
        },
      ],
      validationIntro:
        "调湿和成型条件会影响 PA66 的测试结果与零件尺寸。牌号数据和零件测量都需要明确这些条件。",
      validationSteps: [
        {
          title: "试样调节状态",
          description:
            "干态与调湿后的 PA66 数据对应不同材料状态。对比时需要明确各项测试采用的调节条件。",
        },
        {
          title: "干燥与熔体处理",
          description:
            "牌号加工指南给出试模所需的干燥和加工条件。水分和停留时间也会影响试验结果的解读。",
        },
        {
          title: "纤维方向与受力",
          description:
            "浇口、流动方向、熔接线、加强筋和嵌件会影响零件受力路径上的纤维取向。",
        },
        {
          title: "收缩与翘曲",
          description:
            "当前目录的收缩数据尚不完整。采用实际模具和调湿流程测量零件，可确认尺寸与翘曲表现。",
        },
        {
          title: "温度与装配载荷",
          description:
            "HDT 单项数值不能确定连续使用温度。零件试验还需覆盖载荷持续时间、温度循环和装配约束。",
        },
        {
          title: "功能与重复性",
          description:
            "零件试验覆盖功能、重复性和环境暴露。量产批准还需满足文件与客户要求。",
        },
      ],
      contactMaterial: "玻璃纤维增强 PA66",
    },
  },
};

const localizedPpaPageCopy: Record<
  LocalizedUrlSegment,
  LocalizedEngineeringGfPageCopy
> = {
  de: {
    parentLabel: "PPA-Compounds",
    title: "Glasfaserverstärkte PPA-Compounds",
    metaTitle: "Glasfaserverstärkte PPA-Typen | Taiyi Polymer",
    metaDescription:
      "Glasfaserverstärkte PLATFORM PPA-Compounds für den Spritzguss. Mechanische Eigenschaften, Wärmeformbeständigkeit und Wasseraufnahme nach Materialtyp vergleichen.",
    heroEyebrow: "PLATFORM® PPA",
    heroDescription:
      "PLATFORM® PPA-Compounds mit 30 %, 45 % und 50 % Glasfaserverstärkung für Spritzgussteile mit Anforderungen an Wärmebeständigkeit und Steifigkeit.",
    navSubtitle:
      "Glasfaserverstärkte PPA-Typen und thermische Eigenschaften",
    comparisonIntro:
      "Glasfaseranteil und wichtige Eigenschaften je Typ, mit Links zu Typendaten und zur Anforderung technischer Datenblätter.",
    tradeoffs: {
      improvementTitle: "Struktureigenschaften bei erhöhten Temperaturen",
      improvementIntro:
        "Glasfaserverstärktes PPA kommt für wärmebelastete Strukturteile in Betracht. Die Materialdaten umfassen Zug- und Biegeeigenschaften, Wärmeformbeständigkeit und Wasseraufnahme.",
      improvements: [
        "Höhere Steifigkeit und besseres Lastverhalten",
        "Höhere Zug- und Biegefestigkeit",
        "Hohe Wärmeformbeständigkeitswerte zur Vorauswahl",
        "Maßkontrolle unter Last",
        "Für wärmebelastete Strukturteile",
      ],
      reviewTitle: "Wärmebelastung und Bauteilgeometrie",
      reviewIntro:
        "Temperatur, Lastdauer und Umgebungsmedien definieren die Einsatzbedingungen. Faserorientierung, Bindenähte und Montagezwänge beeinflussen zusätzlich Festigkeit und Abmessungen des Formteils.",
      reviewPoints: [
        "Temperatur, Dauer und Last",
        "Feuchtezustand und Umgebungsmedien",
        "Faserorientierung und Anisotropie",
        "Richtungsabhängige Schwindung und Verzug",
        "Bindenähte, Anschnitte und lokale Spannungen",
        "Montagegrenzen und Funktionsnachweise",
      ],
    },
    applicationsIntro:
      "Die PPA-Auswahl verknüpft mechanische und thermische Daten mit Temperatur, Last, Umgebung und Maßanforderungen des Bauteils.",
    applications: [
      {
        eyebrow: "Hochtemperatur-Strukturbauteile",
        label: "Struktur- und Funktionsbauteile für Fahrzeuge",
        description:
          "Wärmebelastete Strukturteile tragen dauerhafte oder zyklische Lasten. Medienkontakt und Montagezwänge gehören zu den Prüfbedingungen.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Elektrische und elektronische Bauteile",
        label: "Thermisch beanspruchte Gehäuse und Stützen",
        description:
          "Wärmebelastung, Passmaße und mechanischer Halt bestimmen die Anforderungen an Gehäuse und Stützen. Elektrische Eigenschaften und Dokumente sind typspezifisch.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Präzise Strukturformteile",
        label: "Industriegehäuse und Halterungen",
        description:
          "Lastpfade, Befestigungspunkte und Temperatur beeinflussen die strukturellen Anforderungen. Faserorientierung und Spritzgussbedingungen wirken sich auf die Abmessungen aus.",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "PPA-Vergleiche benötigen die Prüfbasis, den Materialzustand und die Verarbeitungshistorie. Formteilversuche bewerten Wärmeverhalten, Abmessungen und montierte Funktion unter den vorgesehenen Bedingungen.",
    validationSteps: [
      {
        title: "Temperatur und Lastzyklus",
        description:
          "Temperatur, Dauer, Last, Zyklen und Umgebungsmedien definieren den Einsatz. HDT allein bestimmt keine Dauergebrauchstemperatur.",
      },
      {
        title: "Prüfbasis und Materialzustand",
        description:
          "Das typspezifische TDS liefert die Grundlage für kritische Eigenschaftsvergleiche. Veröffentlichte typische Werte unterstützen die Auswahl; die Produktionsfreigabe benötigt vollständige Projektnachweise.",
      },
      {
        title: "Trocknung und Verarbeitung",
        description:
          "Typspezifische Trocknungs- und Verarbeitungsvorgaben definieren die Versuchsbedingungen. Feuchte und Verweilzeit gehören zum Spritzgussprotokoll.",
      },
      {
        title: "Faserrichtung und lokale Spannung",
        description:
          "Anschnittposition, Fließrichtung, Bindenähte, Rippen und Einlegeteile beeinflussen das Strukturverhalten entlang des Lastpfads.",
      },
      {
        title: "Abmessungen und Verzug",
        description:
          "Veröffentlichte Schwindungsbereiche unterstützen die Vorauswahl. Messungen mit dem vorgesehenen Werkzeug und der Konditionierungsfolge bestimmen Abmessungen und Verzug der tatsächlichen Geometrie.",
      },
      {
        title: "Montierte Funktion",
        description:
          "Bauteil- und Baugruppenprüfungen erfassen thermische, mechanische und umweltbezogene Anforderungen sowie Wiederholbarkeit. Dokumente ergänzen den Nachweis zur Produktionsfreigabe.",
      },
    ],
    contactMaterial: "Glasfaserverstärktes PPA",
  },
  fr: {
    parentLabel: "Composés PPA",
    title: "Composés PPA renforcés de fibres de verre",
    metaTitle: "Grades PPA renforcés de fibres de verre | Taiyi Polymer",
    metaDescription:
      "Matériaux PPA PLATFORM renforcés de fibres de verre pour injection. Comparez propriétés mécaniques, déformation sous charge à chaud et absorption d'eau par grade.",
    heroEyebrow: "PLATFORM® PPA",
    heroDescription:
      "Matériaux PPA PLATFORM® renforcés de 30 %, 45 % et 50 % de fibres de verre, pour pièces injectées avec des exigences de tenue à la chaleur et de rigidité.",
    navSubtitle:
      "Grades PPA renforcés de fibres de verre et propriétés thermiques",
    comparisonIntro:
      "Teneur en fibres de verre et principales propriétés de chaque grade, avec accès aux données et aux demandes de fiches techniques.",
    tradeoffs: {
      improvementTitle: "Performances structurelles à température élevée",
      improvementIntro:
        "Le PPA renforcé de fibres de verre peut être envisagé pour les pièces structurelles exposées à la chaleur. Les données par grade incluent traction, flexion, température de déformation sous charge et absorption d'eau.",
      improvements: [
        "Plus de rigidité et de réponse sous charge",
        "Plus de résistance à la traction et à la flexion",
        "Des valeurs élevées de HDT pour la présélection",
        "Un contrôle dimensionnel sous charge",
        "Pour pièces structurelles exposées à la chaleur",
      ],
      reviewTitle: "Exposition thermique et géométrie de la pièce",
      reviewIntro:
        "Température, durée de charge et milieux environnants définissent les conditions d'utilisation. L'orientation des fibres, les lignes de soudure et les contraintes d'assemblage affectent aussi la résistance et les dimensions de la pièce.",
      reviewPoints: [
        "Température, durée et charge",
        "État d’humidité et milieux environnants",
        "Orientation des fibres et anisotropie",
        "Retrait directionnel et gauchissement",
        "Lignes de soudure, points d’injection et contraintes locales",
        "Contraintes d’assemblage et preuves fonctionnelles",
      ],
    },
    applicationsIntro:
      "La sélection du PPA relie les données mécaniques et thermiques à la température, aux charges, à l'environnement et aux exigences dimensionnelles de la pièce.",
    applications: [
      {
        eyebrow: "Structures à haute température",
        label: "Pièces automobiles structurelles et fonctionnelles",
        description:
          "Les pièces structurelles chaudes subissent des charges durables ou cycliques. Le contact avec les fluides et les contraintes d'assemblage font partie des conditions d'essai.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Pièces électriques et électroniques",
        label: "Boîtiers et supports soumis à la chaleur",
        description:
          "Exposition thermique, ajustement dimensionnel et maintien mécanique déterminent les exigences des boîtiers et supports. Propriétés électriques et documents sont propres au grade.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Structures moulées de précision",
        label: "Boîtiers et supports industriels",
        description:
          "Chemins de charge, points de fixation et température influencent les exigences structurelles. L'orientation des fibres et l'injection affectent les dimensions obtenues.",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "Les comparaisons de PPA nécessitent la base d'essai, l'état matière et l'historique de transformation. Les essais sur pièce évaluent comportement thermique, dimensions et fonction assemblée dans les conditions prévues.",
    validationSteps: [
      {
        title: "Température et cycle de service",
        description:
          "Température, durée, charge, cycles et milieux environnants définissent l'utilisation. La HDT seule ne fixe pas la température d'utilisation continue.",
      },
      {
        title: "Base d'essai et état matière",
        description:
          "La TDS du grade fournit la base de comparaison des propriétés critiques. Les valeurs typiques publiées aident à la sélection ; l'approbation de production exige les preuves complètes du projet.",
      },
      {
        title: "Séchage et transformation",
        description:
          "Les recommandations de séchage et de transformation du grade définissent les conditions d'essai. L'humidité et le temps de séjour font partie du relevé d'injection.",
      },
      {
        title: "Orientation des fibres et contraintes locales",
        description:
          "Position du seuil, écoulement, lignes de soudure, nervures et inserts influencent la réponse structurelle le long du chemin de charge.",
      },
      {
        title: "Dimensions et gauchissement",
        description:
          "Les plages de retrait publiées aident à la présélection. Les mesures avec le moule et le conditionnement prévus établissent dimensions et gauchissement de la géométrie réelle.",
      },
      {
        title: "Fonction assemblée",
        description:
          "Les essais sur pièce et assemblage couvrent les exigences thermiques, mécaniques, environnementales et de répétabilité. Les documents complètent le dossier d'approbation de production.",
      },
    ],
    contactMaterial: "PPA renforcé de fibres de verre",
  },
  "pt-br": {
    parentLabel: "Compostos de PPA",
    title: "Compostos de PPA reforçados com fibra de vidro",
    metaTitle: "Graus de PPA reforçados com fibra de vidro | Taiyi Polymer",
    metaDescription:
      "Compostos PPA PLATFORM reforçados com fibra de vidro para injeção. Compare propriedades mecânicas, deflexão térmica e absorção de água por grau.",
    heroEyebrow: "PLATFORM® PPA",
    heroDescription:
      "Compostos PPA PLATFORM® com 30%, 45% e 50% de reforço de fibra de vidro para peças injetadas com requisitos térmicos e de rigidez.",
    navSubtitle:
      "Graus PPA com fibra de vidro e propriedades térmicas",
    comparisonIntro:
      "Teor de fibra de vidro e principais propriedades de cada grade, com acesso aos dados e à solicitação de fichas técnicas.",
    tradeoffs: {
      improvementTitle: "Desempenho estrutural em temperaturas elevadas",
      improvementIntro:
        "O PPA reforçado com fibra de vidro pode ser considerado para peças estruturais expostas ao calor. Os dados por grau incluem tração, flexão, temperatura de deflexão térmica e absorção de água.",
      improvements: [
        "Maior rigidez e resposta à carga",
        "Maior resistência à tração e à flexão",
        "Valores elevados de HDT para a triagem",
        "Controle dimensional sob carga",
        "Para peças estruturais expostas ao calor",
      ],
      reviewTitle: "Exposição térmica e geometria da peça",
      reviewIntro:
        "Temperatura, duração da carga e meios ambientais definem as condições de uso. Orientação das fibras, linhas de solda e restrições de montagem também afetam resistência e dimensões da peça moldada.",
      reviewPoints: [
        "Temperatura, duração e carga",
        "Estado de umidade e meios do ambiente",
        "Orientação das fibras e anisotropia",
        "Contração direcional e empenamento",
        "Linhas de solda, pontos de injeção e tensões locais",
        "Restrições de montagem e evidências funcionais",
      ],
    },
    applicationsIntro:
      "A seleção de PPA relaciona os dados mecânicos e térmicos à temperatura, carga, ambiente e requisitos dimensionais da peça.",
    applications: [
      {
        eyebrow: "Estruturas de alta temperatura",
        label: "Peças automotivas estruturais e funcionais",
        description:
          "Peças estruturais aquecidas combinam exposição térmica com cargas contínuas ou cíclicas. Contato com fluidos e restrições de montagem integram as condições de ensaio.",
        href: "/applications/automotive",
      },
      {
        eyebrow: "Peças elétricas e eletrônicas",
        label: "Carcaças e suportes sob exigência térmica",
        description:
          "Exposição térmica, ajuste dimensional e retenção mecânica definem os requisitos de carcaças e suportes. Propriedades elétricas e documentos são específicos de cada grau.",
        href: "/applications/electronics",
      },
      {
        eyebrow: "Estruturas moldadas de precisão",
        label: "Carcaças e suportes industriais",
        description:
          "Caminhos de carga, pontos de fixação e temperatura influenciam os requisitos estruturais. A orientação das fibras e a moldagem afetam as dimensões resultantes.",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "A comparação de PPA depende da base de ensaio, do estado do material e do histórico de processamento. Ensaios na peça avaliam resposta térmica, dimensões e função montada nas condições previstas.",
    validationSteps: [
      {
        title: "Temperatura e ciclo de serviço",
        description:
          "Temperatura, duração, carga, ciclos e meios ambientais definem as condições de serviço. HDT sozinho não estabelece a temperatura de uso contínuo.",
      },
      {
        title: "Base de ensaio e estado do material",
        description:
          "A TDS do grau fornece a base de comparação das propriedades críticas. Valores típicos publicados ajudam na seleção; a aprovação para produção exige as evidências completas do projeto.",
      },
      {
        title: "Secagem e processamento",
        description:
          "As orientações de secagem e processamento do grau definem as condições do ensaio. Umidade e tempo de residência integram o registro de moldagem.",
      },
      {
        title: "Direção das fibras e tensão local",
        description:
          "Ponto de injeção, fluxo, linhas de solda, nervuras e insertos influenciam a resposta estrutural ao longo do caminho de carga.",
      },
      {
        title: "Dimensões e empenamento",
        description:
          "As faixas de contração publicadas ajudam na seleção inicial. Medições com o molde e o condicionamento previstos estabelecem dimensões e empenamento da geometria real.",
      },
      {
        title: "Função montada",
        description:
          "Ensaios na peça e no conjunto abrangem requisitos térmicos, mecânicos, ambientais e de repetibilidade. Os documentos completam o registro de aprovação para produção.",
      },
    ],
    contactMaterial: "PPA reforçado com fibra de vidro",
  },
  zh: {
    parentLabel: "PPA 改性材料",
    title: "玻璃纤维增强 PPA 材料",
    metaTitle: "玻璃纤维增强 PPA 牌号 | 台益",
    metaDescription:
      "PLATFORM 玻璃纤维增强 PPA 注塑材料，可按牌号查看力学性能、热变形温度和吸水率，并索取技术资料。",
    heroEyebrow: "PLATFORM® PPA",
    heroDescription:
      "PLATFORM® 玻璃纤维增强 PPA 材料，玻纤含量包括 30%、45% 和 50%，面向有耐热与刚性要求的注塑零件。",
    navSubtitle: "玻纤增强 PPA 牌号与热性能",
    comparisonIntro:
      "各牌号的玻纤含量和主要性能，可查看牌号数据或索取 TDS。",
    tradeoffs: {
      improvementTitle: "高温结构件的性能要求",
      improvementIntro:
        "玻纤增强 PPA 可纳入受热结构件的选材范围。牌号数据包含拉伸与弯曲性能、热变形温度和吸水率。",
      improvements: [
        "更高的刚性与承载响应",
        "更高的拉伸与弯曲强度",
        "较高的热变形初筛数据",
        "载荷下的尺寸控制",
        "受热结构件的材料选择",
      ],
      reviewTitle: "热暴露与零件结构",
      reviewIntro:
        "温度、载荷持续时间和环境介质构成使用工况。纤维取向、熔接线和装配约束也会影响注塑零件的强度与尺寸。",
      reviewPoints: [
        "温度、持续时间与载荷",
        "水分状态与环境介质",
        "纤维取向与各向异性",
        "方向性收缩与翘曲",
        "熔接线、浇口和局部应力",
        "装配约束与功能验证证据",
      ],
    },
    applicationsIntro:
      "PPA 选材需要把力学与热性能数据对应到零件的温度、载荷、环境和尺寸要求。",
    applications: [
      {
        eyebrow: "高温结构件",
        label: "汽车结构与功能部件",
        description:
          "受热结构件同时承受持续或循环载荷。介质接触和装配约束也是试验条件的一部分。",
        href: "/applications/automotive",
      },
      {
        eyebrow: "电气与电子部件",
        label: "耐热壳体与支撑件",
        description:
          "热暴露、尺寸配合和机械保持性能构成壳体与支撑件的要求，电性能及相关文件需对应到具体牌号。",
        href: "/applications/electronics",
      },
      {
        eyebrow: "精密结构注塑件",
        label: "工业壳体与支架",
        description:
          "受力路径、紧固位置和温度影响结构要求；纤维取向和成型条件影响最终尺寸。",
        href: "/applications/conveyor-automation",
      },
    ],
    validationIntro:
      "PPA 数据对比需要明确测试依据、材料状态和加工历史。实际零件试验用于评估目标工况下的热响应、尺寸与装配功能。",
    validationSteps: [
      {
        title: "温度与工作循环",
        description:
          "使用工况包括温度、持续时间、载荷、循环和环境介质。HDT 单项数值不能确定连续使用温度。",
      },
      {
        title: "测试依据与材料状态",
        description:
          "对应牌号的 TDS 提供关键性能的对比依据。网页典型值可用于选材，量产批准需要完整的项目证据。",
      },
      {
        title: "干燥与加工",
        description:
          "对应牌号的干燥和加工指南给出试模条件。水分与停留时间应纳入成型记录。",
      },
      {
        title: "纤维方向与局部应力",
        description:
          "浇口位置、流动方向、熔接线、加强筋和嵌件会影响零件受力路径上的结构表现。",
      },
      {
        title: "尺寸与翘曲",
        description:
          "已发布收缩范围可用于初步选材。采用目标模具和调湿流程测量零件，可确认实际结构的尺寸与翘曲。",
      },
      {
        title: "装配功能",
        description:
          "零件与装配试验覆盖热、力学、环境及重复性要求；相关文件构成量产批准记录。",
      },
    ],
    contactMaterial: "玻璃纤维增强 PPA",
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

  const pageCopy =
    polymer === "PPA"
      ? localizedPpaPageCopy[localeSegment]
      : localizedPageCopy[localeSegment][polymer];
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
