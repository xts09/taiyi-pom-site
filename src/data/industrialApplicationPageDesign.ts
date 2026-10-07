import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type IndustrialApplicationCopy = ApplicationPartGroupsCopy & { driveMaterialTitle: string };

export const motionPageDesign: Record<MessageLocale, IndustrialApplicationCopy> = {
  en: {
    sectionTitle: "Material requirements for moving parts",
    tabsLabel: "Moving-part applications", partsLabel: "Part requirements",
    imageLabel: "Part illustration", materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "motion-transmission-actuation": {
        title: "Transmission & actuation", compactTitle: "Transmission",
        scope: "Precision gears, worm gears and cams.",
        intro: "Tooth or profile contact, torque and repeated cycles affect wear, noise and dimensional requirements in transmission parts.",
      },
      "motion-rotary-support": {
        title: "Rotary support", compactTitle: "Rotary support",
        scope: "Rollers, bushings and sleeves.",
        intro: "Shaft fit, clearance, radial load and mating surfaces shape friction, wear and rotational stability.",
      },
      "motion-linear-guidance": {
        title: "Linear guidance", compactTitle: "Linear guidance",
        scope: "Guide rings and sliding blocks.",
        intro: "Contact load, travel, guide clearance and lubrication affect sliding resistance and wear along the guide path.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Bewegungsbauteile",
    tabsLabel: "Anwendungen für Bewegungsbauteile", partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "motion-transmission-actuation": {
        title: "Kraftübertragung und Betätigung", compactTitle: "Antrieb",
        scope: "Präzisionszahnräder, Schneckenräder und Nocken.",
        intro: "Zahn- oder Profilkontakt, Drehmoment und wiederholte Zyklen bestimmen die Anforderungen an Verschleiß, Geräusch und Maßhaltigkeit im Antrieb.",
      },
      "motion-rotary-support": {
        title: "Rotierende Lagerung", compactTitle: "Lagerung",
        scope: "Rollen, Buchsen und Hülsen.",
        intro: "Wellenpassung, Spiel, Radiallast und Gegenflächen beeinflussen Reibung, Verschleiß und die Stabilität der Drehbewegung.",
      },
      "motion-linear-guidance": {
        title: "Linearführung", compactTitle: "Führung",
        scope: "Führungsringe und Gleitblöcke.",
        intro: "Kontaktlast, Verfahrweg, Führungsspiel und Schmierung beeinflussen Gleitwiderstand und Verschleiß entlang der Führung.",
      },
    },
  },
  fr: {
    sectionTitle: "Matériaux pour les pièces en mouvement",
    tabsLabel: "Applications des pièces en mouvement", partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de la pièce", materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l’usure et à faible friction",
    groups: {
      "motion-transmission-actuation": {
        title: "Transmission et actionnement", compactTitle: "Transmission",
        scope: "Engrenages de précision, roues tangentes et cames.",
        intro: "Le contact des dents ou du profil, le couple et les cycles répétés déterminent les exigences d’usure, de bruit et de stabilité dimensionnelle.",
      },
      "motion-rotary-support": {
        title: "Support rotatif", compactTitle: "Rotation",
        scope: "Galets, bagues et douilles.",
        intro: "L’ajustement de l’arbre, le jeu, la charge radiale et les surfaces en contact influencent la friction, l’usure et la stabilité en rotation.",
      },
      "motion-linear-guidance": {
        title: "Guidage linéaire", compactTitle: "Guidage",
        scope: "Anneaux de guidage et patins coulissants.",
        intro: "La charge de contact, la course, le jeu et la lubrification influencent la résistance au glissement et l’usure du guidage.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para peças em movimento",
    tabsLabel: "Aplicações de peças em movimento", partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "motion-transmission-actuation": {
        title: "Transmissão e acionamento", compactTitle: "Transmissão",
        scope: "Engrenagens de precisão, coroas e cames.",
        intro: "O contato dos dentes ou do perfil, o torque e os ciclos repetidos definem os requisitos de desgaste, ruído e estabilidade dimensional.",
      },
      "motion-rotary-support": {
        title: "Apoio rotativo", compactTitle: "Apoio rotativo",
        scope: "Roletes, buchas e luvas.",
        intro: "O ajuste do eixo, a folga, a carga radial e as superfícies de contato influenciam o atrito, o desgaste e a estabilidade da rotação.",
      },
      "motion-linear-guidance": {
        title: "Guiamento linear", compactTitle: "Guiamento",
        scope: "Anéis-guia e blocos deslizantes.",
        intro: "A carga de contato, o curso, a folga da guia e a lubrificação influenciam a resistência ao deslizamento e o desgaste ao longo da guia.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "运动部件的材料关注点",
    tabsLabel: "运动部件应用分类", partsLabel: "部件要求",
    imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "motion-transmission-actuation": {
        title: "传动与执行", compactTitle: "传动与执行",
        scope: "精密齿轮、蜗轮与凸轮。",
        intro: "齿面或轮廓接触、扭矩与循环次数，影响传动件的磨损、噪声和尺寸保持。",
      },
      "motion-rotary-support": {
        title: "旋转支撑", compactTitle: "旋转支撑",
        scope: "滚轮、轴套与套筒。",
        intro: "轴配合、间隙、径向载荷与摩擦副表面，决定摩擦、磨损和旋转稳定性的关注点。",
      },
      "motion-linear-guidance": {
        title: "直线导向", compactTitle: "直线导向",
        scope: "导向环与滑块。",
        intro: "接触载荷、行程、导向间隙和润滑状态，影响滑动阻力与导向面的磨损。",
      },
    },
  },
};

export const conveyorPageDesign: Record<MessageLocale, IndustrialApplicationCopy> = {
  en: {
    sectionTitle: "Material requirements for conveyor parts",
    tabsLabel: "Conveyor applications", partsLabel: "Part requirements",
    imageLabel: "Part illustration", materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "conveyor-surface-chain-path": {
        title: "Conveying surfaces & chain path", compactTitle: "Surface & chain",
        scope: "Chain plates, links, segments and conveyor panels.",
        intro: "Load, line speed, articulation and contact with guides affect fit, wear and drive resistance. Charge-sensitive lines also need defined electrical targets.",
      },
      "conveyor-rolling-support": {
        title: "Rolling & structural support", compactTitle: "Rollers & support",
        scope: "Conveyor rollers and chain-plate brackets.",
        intro: "Roller-to-shaft fit and bracket stiffness affect support and alignment under conveyor load.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Fördertechnik-Bauteile",
    tabsLabel: "Anwendungen in der Fördertechnik", partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "conveyor-surface-chain-path": {
        title: "Förderflächen und Kettenführung", compactTitle: "Flächen und Ketten",
        scope: "Kettenplatten, Kettenglieder, Segmente und Förderplatten.",
        intro: "Last, Geschwindigkeit, Gelenkbewegung und Führungskontakt beeinflussen Passung, Verschleiß und Antriebswiderstand. Ladungsempfindliche Linien benötigen zusätzlich definierte elektrische Ziele.",
      },
      "conveyor-rolling-support": {
        title: "Rollen und Strukturstützen", compactTitle: "Rollen und Stützen",
        scope: "Förderrollen und Halterungen für Kettenplatten.",
        intro: "Die Passung zwischen Rolle und Welle sowie die Steifigkeit der Halterung beeinflussen Abstützung und Ausrichtung unter Förderlast.",
      },
    },
  },
  fr: {
    sectionTitle: "Matériaux pour les pièces de convoyage",
    tabsLabel: "Applications de convoyage", partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de la pièce", materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l’usure et à faible friction",
    groups: {
      "conveyor-surface-chain-path": {
        title: "Surfaces de convoyage et chaîne", compactTitle: "Surfaces et chaîne",
        scope: "Plaques de chaîne, maillons, segments et panneaux de convoyeur.",
        intro: "La charge, la vitesse, l’articulation et le contact avec les guides influencent l’ajustement, l’usure et la résistance à l’entraînement. Les lignes sensibles aux charges nécessitent aussi des objectifs électriques définis.",
      },
      "conveyor-rolling-support": {
        title: "Roulement et support structurel", compactTitle: "Galets et supports",
        scope: "Galets de convoyeur et supports de plaques de chaîne.",
        intro: "L’ajustement entre galet et arbre et la rigidité du support influencent le maintien et l’alignement sous charge.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para peças de transportadores",
    tabsLabel: "Aplicações em transportadores", partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "conveyor-surface-chain-path": {
        title: "Superfícies de transporte e corrente", compactTitle: "Superfícies e corrente",
        scope: "Placas de corrente, elos, segmentos e painéis de transportadores.",
        intro: "A carga, a velocidade, a articulação e o contato com as guias influenciam o ajuste, o desgaste e a resistência ao acionamento. Linhas sensíveis à carga eletrostática também precisam de metas elétricas definidas.",
      },
      "conveyor-rolling-support": {
        title: "Rolamento e apoio estrutural", compactTitle: "Roletes e apoios",
        scope: "Roletes de transportadores e suportes de placas de corrente.",
        intro: "O ajuste entre rolete e eixo e a rigidez do suporte influenciam o apoio e o alinhamento sob a carga do transportador.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "输送与自动化部件的材料关注点",
    tabsLabel: "输送自动化应用分类", partsLabel: "部件要求",
    imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "conveyor-surface-chain-path": {
        title: "输送表面与链路", compactTitle: "表面与链路",
        scope: "链板、链节、分段模块与输送面板。",
        intro: "负载、线速、链节转动和导轨接触，影响配合、磨损与驱动阻力。静电敏感的输送线还需要明确电性能目标。",
      },
      "conveyor-rolling-support": {
        title: "滚动与结构支撑", compactTitle: "滚轮与支撑",
        scope: "输送滚轮与链板支架。",
        intro: "滚轮与轴的配合、支架的刚度，影响输送负载下的支撑与对位。",
      },
    },
  },
};
