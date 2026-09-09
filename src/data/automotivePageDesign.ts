import type { MessageLocale } from "../i18n/config";

type PageCopy = {
  browse: string;
  selection: string;
  intro: string;
  materialTitle: string;
  materialIntro: string;
  direction: string;
  typical: string;
  focus: string;
  uses: readonly [string, string, string, string];
  priorities: readonly [string, string, string, string];
  partTitles: readonly [string, string];
  motionLabels: readonly [string, string];
  motionTitles: readonly [string, string];
  caseTitles: readonly [string, string];
  figureCaption: string;
  validationGuide: string;
  nextTitle: string;
};

export const automotivePageDesign = {
  "zh-CN": {
    browse: "按部件查看材料", selection: "部件与选材",
    intro: "运动件关注摩擦与磨损。支撑件关注受载后的变形与尺寸保持。",
    materialTitle: "按零件问题比较材料", materialIntro: "先建立候选范围，再结合牌号数据与样件验证。",
    direction: "材料方向", typical: "典型部位", focus: "选择重点",
    uses: ["卡扣、紧固件、受冲击部件", "齿轮、导向件、重复运动界面", "滑动配合件、需要顺畅运动的机构", "承载板、支架、壳体"],
    priorities: ["关注韧性，结合缺口、温度与载荷确认。", "以磨损寿命为主要问题，关注摩擦副与循环工况。", "关注启动阻力、粘滑与摩擦噪声。", "关注刚性、收缩与翘曲，同时检查纤维取向和韧性影响。"],
    partTitles: ["车窗升降器", "雨刮机构"], motionLabels: ["齿轮与导向件", "雨刮电机齿轮"],
    motionTitles: ["磨损寿命、升降阻力与噪声", "齿面磨损、摩擦与传动噪声"],
    caseTitles: ["高温受载后的安装孔位稳定性", "电机发热后的齿轮中心距稳定性"],
    figureCaption: "总成示意 · 运动件与承载结构分别选材",
    validationGuide: "POM 替代材料验证资料",
    nextTitle: "带着部件问题，进入下一步选材。",
  },
  en: {
    browse: "Explore parts and materials", selection: "Parts and material selection",
    intro: "Moving parts need wear and friction control. Support structures need dimensional stability under load.",
    materialTitle: "Compare materials by part requirements", materialIntro: "Build a shortlist, then review grade data and validate molded parts.",
    direction: "Material direction", typical: "Typical parts", focus: "Selection priorities",
    uses: ["Clips, fasteners and impact-loaded parts", "Gears, guides and repeated-motion interfaces", "Sliding fits and smooth-running mechanisms", "Carrier plates, brackets and housings"],
    priorities: ["Review toughness against notches, temperature and load.", "Prioritize wear life and assess mating materials and cycling conditions.", "Review starting resistance, stick-slip and friction noise.", "Review stiffness, shrinkage and warpage alongside fiber orientation and toughness."],
    partTitles: ["Window regulator", "Wiper mechanism"], motionLabels: ["Gears and guides", "Wiper motor gears"],
    motionTitles: ["Wear life, operating resistance and noise", "Tooth wear, friction and drive noise"],
    caseTitles: ["Mounting-hole stability under heat and load", "Gear center-distance stability as the motor heats up"],
    figureCaption: "Assembly illustration · Select moving parts and support structures separately",
    validationGuide: "Alternative POM grade validation",
    nextTitle: "Take your part requirements into material selection",
  },
  de: {
    browse: "Bauteile und Werkstoffe ansehen", selection: "Bauteile und Werkstoffauswahl",
    intro: "Bewegte Teile erfordern Verschleiß- und Reibungskontrolle. Tragstrukturen benötigen Maßhaltigkeit unter Last.",
    materialTitle: "Werkstoffe nach Bauteilanforderungen vergleichen", materialIntro: "Kandidaten eingrenzen, Typendaten prüfen und Formteile validieren.",
    direction: "Werkstoffrichtung", typical: "Typische Bauteile", focus: "Auswahlschwerpunkte",
    uses: ["Clips, Befestigungen und schlagbeanspruchte Teile", "Zahnräder, Führungen und wiederholt bewegte Kontaktflächen", "Gleitpassungen und leichtgängige Mechanismen", "Trägerplatten, Halterungen und Gehäuse"],
    priorities: ["Zähigkeit unter Berücksichtigung von Kerben, Temperatur und Last prüfen.", "Verschleißlebensdauer, Reibpartner und zyklische Beanspruchung bewerten.", "Anlaufwiderstand, Stick-Slip und Reibungsgeräusche prüfen.", "Steifigkeit, Schwindung und Verzug sowie Faserorientierung und Zähigkeit prüfen."],
    partTitles: ["Fensterheber", "Wischermechanismus"], motionLabels: ["Zahnräder und Führungen", "Wischermotor-Zahnräder"],
    motionTitles: ["Verschleißlebensdauer, Betätigungskraft und Geräusch", "Zahnverschleiß, Reibung und Antriebsgeräusch"],
    caseTitles: ["Stabile Bohrungspositionen bei Wärme und Last", "Stabiler Zahnradachsabstand bei Motorerwärmung"],
    figureCaption: "Baugruppenabbildung · Bewegte Teile und Tragstrukturen separat auswählen",
    validationGuide: "Validierung alternativer POM-Typen",
    nextTitle: "Mit Ihren Bauteilanforderungen zur Werkstoffauswahl",
  },
  fr: {
    browse: "Voir les pièces et matières", selection: "Pièces et choix matière",
    intro: "Les pièces mobiles nécessitent une maîtrise de l’usure et du frottement. Les supports doivent rester stables sous charge.",
    materialTitle: "Comparer selon les exigences de la pièce", materialIntro: "Présélectionner les matières, consulter les données des grades, puis valider les pièces moulées.",
    direction: "Famille de matière", typical: "Pièces types", focus: "Critères de sélection",
    uses: ["Clips, fixations et pièces soumises aux chocs", "Engrenages, guides et contacts à mouvement répété", "Ajustements glissants et mécanismes à mouvement fluide", "Platines, supports et boîtiers"],
    priorities: ["Évaluer la ténacité selon les entailles, la température et la charge.", "Privilégier la durée de vie à l’usure et vérifier les contacts et les cycles.", "Évaluer la résistance au démarrage, le stick-slip et le bruit de frottement.", "Vérifier rigidité, retrait, gauchissement, orientation des fibres et ténacité."],
    partTitles: ["Lève-vitre", "Mécanisme d’essuie-glace"], motionLabels: ["Engrenages et guides", "Engrenages du moteur d’essuie-glace"],
    motionTitles: ["Durée de vie à l’usure, résistance et bruit", "Usure des dents, frottement et bruit de transmission"],
    caseTitles: ["Stabilité des fixations sous chaleur et charge", "Stabilité de l’entraxe lorsque le moteur chauffe"],
    figureCaption: "Illustration d’ensemble · Sélection distincte pour les pièces mobiles et les supports",
    validationGuide: "Validation d’un grade POM alternatif",
    nextTitle: "Partir des exigences de votre pièce pour choisir la matière",
  },
  "pt-BR": {
    browse: "Ver peças e materiais", selection: "Peças e seleção de materiais",
    intro: "Peças móveis exigem controle de desgaste e atrito. Estruturas de suporte precisam de estabilidade dimensional sob carga.",
    materialTitle: "Compare materiais pelas exigências da peça", materialIntro: "Defina os candidatos, consulte os dados dos graus e valide as peças moldadas.",
    direction: "Família de materiais", typical: "Peças típicas", focus: "Prioridades de seleção",
    uses: ["Clipes, fixadores e peças sujeitas a impacto", "Engrenagens, guias e interfaces de movimento repetido", "Encaixes deslizantes e mecanismos de movimento suave", "Placas de suporte, suportes e carcaças"],
    priorities: ["Avaliar a tenacidade considerando entalhes, temperatura e carga.", "Priorizar a vida em desgaste e avaliar os pares de contato e os ciclos.", "Avaliar resistência inicial, stick-slip e ruído de atrito.", "Avaliar rigidez, contração, empenamento, orientação das fibras e tenacidade."],
    partTitles: ["Elevador de vidro", "Mecanismo do limpador"], motionLabels: ["Engrenagens e guias", "Engrenagens do motor do limpador"],
    motionTitles: ["Vida em desgaste, resistência ao movimento e ruído", "Desgaste dos dentes, atrito e ruído de transmissão"],
    caseTitles: ["Estabilidade dos furos sob calor e carga", "Estabilidade da distância entre centros com o aquecimento do motor"],
    figureCaption: "Ilustração do conjunto · Selecione peças móveis e estruturas de suporte separadamente",
    validationGuide: "Validação de graus alternativos de POM",
    nextTitle: "Leve as exigências da sua peça à seleção de materiais",
  },
} satisfies Record<MessageLocale, PageCopy>;
