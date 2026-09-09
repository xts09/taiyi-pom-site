import type { MessageLocale } from "../i18n/config.ts";

// Candidate families for the named POM subparts, not approval of an assembly.
// Indices refer to the automotive profile's impact, wear, friction and GF families.
export const automotivePartMaterials: Record<string, readonly number[]> = {
  "fuel-pump-assembly": [],
  "fuel-filter-element": [],
  "fuel-cap-assembly": [],
  "window-regulator": [1, 2],
  "wiper-motor-gear": [1, 2],
  "interior-rearview-mirror-base": [0, 3],
  "wiper-arm-components": [0],
  "seat-guide-ring": [1, 2],
  "gear-shift-seat": [1, 2],
  "ev-brake-component": [1, 2],
  "automotive-clips-and-fasteners": [0],
  "safety-latch": [0],
};

export const automotiveWindowCases = [
  "egh402h-window-regulator-carrier",
  "egh602h-wiper-motor-gearbox",
] as const;

export const automotiveSelectionLabels = {
  "zh-CN": {
    sceneTitle: "传动、导向与结构支撑",
    sceneDescription: "车窗升降器和雨刮机构中，齿轮与导向件关注磨损、摩擦和噪声；承载板与壳体关注受载后的变形和尺寸保持。下方从这些部件出发，连接材料系列、项目实例和牌号资料。",
    materialLink: "查看材料系列",
    materialTitle: "材料性能与选用重点",
    candidate: "候选材料", guide: "选材资料", inquiry: "讨论这个部件",
    cases: "承载板与壳体的项目实例", feedback: "客户反馈", stage: "验证阶段", caseLink: "查看完整案例", grade: "查看牌号数据",
    scope: "案例对象为承载板和壳体，需与齿轮及滑动件分别选材。",
    image: "部件示意", moving: "关注齿轮与滑动接触件", fuel: "关注塑料内部件；介质适用性需另行验证",
    specific: "按实际温度、介质和零件要求确认材料", shared: "同一材料分类，分别关注磨损寿命与摩擦表现。",
    plate: "车窗升降器承载板", housing: "雨刮电机齿轮箱壳体", english: "英文",
  },
  en: {
    sceneTitle: "Gears, guides and structural supports",
    sceneDescription: "In window and wiper mechanisms, gears and guides need attention to wear, friction and noise. Carrier plates and housings need stiffness and dimensional stability under load. Explore these components below, with links to material families, project examples and grade data.",
    materialLink: "Explore material family",
    materialTitle: "Choose a POM material family",
    candidate: "Candidate materials", guide: "Selection guide", inquiry: "Discuss this component",
    cases: "Carrier plate and housing projects", feedback: "Customer feedback", stage: "Validation stage", caseLink: "Read case study", grade: "View grade data",
    scope: "These cases concern carrier plates and housings; gears and sliding parts need separate material selection.",
    image: "Component illustration", moving: "Focus: gears and sliding contacts", fuel: "Focus: internal plastic parts; fuel compatibility needs validation",
    specific: "Confirm materials against temperature, media and part requirements", shared: "One material family, with distinct wear-life and friction priorities.",
    plate: "Window regulator carrier plate", housing: "Wiper motor gearbox housing", english: "English",
  },
  de: {
    sceneTitle: "Zahnräder, Führungen und Tragstrukturen",
    sceneDescription: "Bei Fensterhebern und Wischerantrieben stehen für Zahnräder und Führungen Verschleiß, Reibung und Geräusche im Vordergrund. Trägerplatten und Gehäuse benötigen Steifigkeit und Maßhaltigkeit unter Last. Die folgenden Bauteile führen zu Werkstofffamilien, Projektbeispielen und Typendaten.",
    materialLink: "Werkstofffamilie ansehen",
    materialTitle: "POM nach Anforderungen auswählen",
    candidate: "Werkstoffkandidaten", guide: "Auswahlleitfaden", inquiry: "Dieses Bauteil besprechen",
    cases: "Projekte mit Trägerplatten und Gehäusen", feedback: "Kundenrückmeldung", stage: "Validierungsstand", caseLink: "Fallstudie lesen", grade: "Typendaten ansehen",
    scope: "Die Fallstudien betreffen Trägerplatten und Gehäuse. Zahnräder und Gleitteile erfordern eine separate Werkstoffauswahl.",
    image: "Bauteilabbildung", moving: "Fokus: Zahnräder und Gleitkontakte", fuel: "Fokus: Kunststoff-Innenteile; Kraftstoffverträglichkeit separat prüfen",
    specific: "Werkstoffe anhand von Temperatur, Medien und Bauteilanforderungen prüfen", shared: "Eine Werkstofffamilie mit unterschiedlichen Schwerpunkten bei Verschleiß und Reibung.",
    plate: "Fensterheber-Trägerplatte", housing: "Getriebegehäuse eines Wischermotors", english: "Englisch",
  },
  fr: {
    sceneTitle: "Engrenages, guides et supports",
    sceneDescription: "Dans les mécanismes de vitres et d’essuie-glaces, les engrenages et guides demandent une attention à l’usure, au frottement et au bruit. Les platines et boîtiers nécessitent rigidité et stabilité dimensionnelle sous charge. Les composants ci-dessous donnent accès aux familles de matières, cas clients et données des grades.",
    materialLink: "Voir la famille de matières",
    materialTitle: "Choisir une famille de POM",
    candidate: "Matières candidates", guide: "Guide de sélection", inquiry: "Discuter de cette pièce",
    cases: "Projets de platines et de boîtiers", feedback: "Retour client", stage: "Étape de validation", caseLink: "Lire le cas client", grade: "Voir les données du grade",
    scope: "Ces cas concernent des platines et des boîtiers. Les engrenages et pièces coulissantes nécessitent une sélection distincte.",
    image: "Illustration du composant", moving: "Pièces visées : engrenages et contacts glissants", fuel: "Pièces visées : éléments internes en plastique ; compatibilité carburant à valider",
    specific: "Confirmer la matière selon la température, les fluides et les exigences de la pièce", shared: "Une même famille, avec des priorités distinctes de durée de vie à l’usure et de frottement.",
    plate: "Platine de lève-vitre", housing: "Boîtier de réducteur d’essuie-glace", english: "Anglais",
  },
  "pt-BR": {
    sceneTitle: "Engrenagens, guias e estruturas de suporte",
    sceneDescription: "Nos mecanismos de vidros e limpadores, engrenagens e guias exigem atenção ao desgaste, ao atrito e ao ruído. Placas de suporte e carcaças precisam de rigidez e estabilidade dimensional sob carga. Os componentes abaixo levam a famílias de materiais, exemplos de projetos e dados dos graus.",
    materialLink: "Ver família de materiais",
    materialTitle: "Escolha uma família de POM",
    candidate: "Materiais candidatos", guide: "Guia de seleção", inquiry: "Discutir este componente",
    cases: "Projetos de placas de suporte e carcaças", feedback: "Relato do cliente", stage: "Etapa de validação", caseLink: "Ler estudo de caso", grade: "Ver dados do grau",
    scope: "Estes casos tratam de placas de suporte e carcaças. Engrenagens e peças deslizantes exigem uma seleção de material própria.",
    image: "Ilustração do componente", moving: "Foco: engrenagens e contatos deslizantes", fuel: "Foco: peças plásticas internas; compatibilidade com combustível a validar",
    specific: "Confirmar o material conforme temperatura, meios e requisitos da peça", shared: "Uma família de materiais, com prioridades distintas de vida em desgaste e atrito.",
    plate: "Placa de suporte do elevador de vidro", housing: "Carcaça do redutor do limpador", english: "Inglês",
  },
} satisfies Record<MessageLocale, Record<string, string>>;
