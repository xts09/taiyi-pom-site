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
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "motion-rotary-support": {
        title: "Rotary support", compactTitle: "Rotary support",
        scope: "Rollers, bushings and sleeves.",
        intro: "Bore wear widens radial clearance; eccentric load and heat accelerate failure. Compare starting torque and bore retention, then temperature rise under loaded rotation.",
      },
      "motion-linear-guidance": {
        title: "Linear guidance", compactTitle: "Linear guidance",
        scope: "Guide rings and sliding blocks.",
        intro: "For frequent starts, address stick-slip noise; for long reciprocation, clearance growth. Compare starting force and wear by steel/plastic rail and dust exposure.",
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
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "motion-rotary-support": {
        title: "Rotierende Lagerung", compactTitle: "Lagerung",
        scope: "Rollen, Buchsen und Hülsen.",
        intro: "Bohrungsverschleiß erhöht Radialspiel; Schieflast und Wärme beschleunigen Ausfälle. Vergleichen Sie Anlaufmoment, Bohrungsmaßhaltung und Wärme unter Drehbelastung.",
      },
      "motion-linear-guidance": {
        title: "Linearführung", compactTitle: "Führung",
        scope: "Führungsringe und Gleitblöcke.",
        intro: "Bei häufigen Starts adressieren Sie Stick-Slip, bei langem Hub Spielzunahme. Vergleichen Sie Anlaufkraft und Verschleiß nach Stahl-/Kunststoffschiene und Staub.",
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
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "motion-rotary-support": {
        title: "Support rotatif", compactTitle: "Rotation",
        scope: "Galets, bagues et douilles.",
        intro: "L’usure élargit le jeu radial ; charge excentrée et chaleur accélèrent la défaillance. Comparez couple initial, alésage et échauffement en rotation chargée.",
      },
      "motion-linear-guidance": {
        title: "Guidage linéaire", compactTitle: "Guidage",
        scope: "Anneaux de guidage et patins coulissants.",
        intro: "Aux démarrages fréquents, traitez le stick-slip ; en longue course, le jeu. Comparez effort initial et usure selon rail acier/plastique et poussière.",
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
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "motion-rotary-support": {
        title: "Apoio rotativo", compactTitle: "Apoio rotativo",
        scope: "Roletes, buchas e luvas.",
        intro: "Desgaste amplia folga radial; carga excêntrica e calor aceleram falha. Compare torque inicial, retenção do furo e aquecimento sob rotação carregada.",
      },
      "motion-linear-guidance": {
        title: "Guiamento linear", compactTitle: "Guiamento",
        scope: "Anéis-guia e blocos deslizantes.",
        intro: "Em partidas frequentes, trate stick-slip; em cursos longos, aumento de folga. Compare força inicial e desgaste por trilho de aço/plástico e poeira.",
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
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "motion-rotary-support": {
        title: "旋转支撑", compactTitle: "旋转支撑",
        scope: "滚轮、轴套与套筒。",
        intro: "轴孔磨损会放大径向间隙，偏载和摩擦热会加快失效。先比较低启动转矩与孔径保持，再检查负载旋转的温升。",
      },
      "motion-linear-guidance": {
        title: "直线导向", compactTitle: "直线导向",
        scope: "导向环与滑块。",
        intro: "频繁启停先解决粘滑与异响，长行程往复先控制间隙增长。按钢轨或塑轨和粉尘状态，分别比较润滑配方的启动阻力与磨耗。",
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
        intro: "Pin-bore wear accumulates as pitch growth; guide friction raises drive load. Check creep in loaded plates and grounding continuity in static-control lines.",
      },
      "conveyor-rolling-support": {
        title: "Rolling & structural support", compactTitle: "Rollers & support",
        scope: "Conveyor rollers and chain-plate brackets.",
        intro: "For load-bearing supports, control deflection and creep; for rotary supports, bore wear. Alongside reinforcement stiffness, compare orientation warpage and assembly toughness.",
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
        intro: "Bolzenverschleiß vergrößert Teilung, Führungsreibung die Antriebslast. Prüfen Sie Kriechen tragender Platten und Erdungsdurchgängigkeit bei ESD-Linien.",
      },
      "conveyor-rolling-support": {
        title: "Rollen und Strukturstützen", compactTitle: "Rollen und Stützen",
        scope: "Förderrollen und Halterungen für Kettenplatten.",
        intro: "Kontrollieren Sie bei tragenden Haltern Durchbiegung und Kriechen, bei Drehlagern Bohrungsverschleiß. Vergleichen Sie neben Verstärkungssteifigkeit Verzug und Montagezähigkeit.",
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
        intro: "L’usure des alésages allonge le pas, le frottement charge l’entraînement. Vérifiez fluage des plaques chargées et continuité de terre en ESD.",
      },
      "conveyor-rolling-support": {
        title: "Roulement et support structurel", compactTitle: "Galets et supports",
        scope: "Galets de convoyeur et supports de plaques de chaîne.",
        intro: "Pour les supports porteurs, contrôlez flèche et fluage ; pour les pivots, l’usure d’alésage. Avec le renforcement, comparez gauchissement et ténacité au montage.",
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
        intro: "Desgaste dos furos amplia passo; atrito carrega o acionamento. Verifique fluência das placas e continuidade de aterramento em linhas ESD.",
      },
      "conveyor-rolling-support": {
        title: "Rolamento e apoio estrutural", compactTitle: "Roletes e apoios",
        scope: "Roletes de transportadores e suportes de placas de corrente.",
        intro: "Em suportes carregados, controle flexão e fluência; em rotativos, desgaste do furo. Com reforço, compare empenamento e tenacidade de montagem.",
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
        intro: "链节销孔磨损会累积为节距增长，导轨摩擦会抬高驱动负荷。承载链板同时检查蠕变；静电输送线另核接地连续性。",
      },
      "conveyor-rolling-support": {
        title: "滚动与结构支撑", compactTitle: "滚轮与支撑",
        scope: "输送滚轮与链板支架。",
        intro: "承载支架先控制挠曲与蠕变，转动支撑先控制孔径磨耗。增强提高刚性的同时，需比较取向翘曲和装配韧性。",
      },
    },
  },
};
