import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type TextilePageCopy = ApplicationPartGroupsCopy & { driveMaterialTitle: string };

export const textilePageDesign: Record<MessageLocale, TextilePageCopy> = {
  en: {
    sectionTitle: "Material requirements for textile machinery parts",
    tabsLabel: "Textile machinery applications", partsLabel: "Part requirements",
    imageLabel: "Part illustration", materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "textile-yarn-path-guidance": {
        title: "Yarn path & guidance", compactTitle: "Yarn guidance",
        scope: "Yarn guides, spinning guides and guide wheels.",
        intro: "Grooves and burrs increase yarn fuzz and breaks. Compare surface wear and low friction, then track tension with the actual yarn.",
      },
      "textile-shedding-heddle-motion": {
        title: "Shedding & heddle motion", compactTitle: "Heddle motion",
        scope: "Heddle wire bundles and heddle lifters.",
        intro: "Heddle-eye wear disrupts yarn separation; arms and pivots face oscillating fatigue. Balance contact wear and toughness, then separation position and travel.",
      },
      "textile-linear-guidance": {
        title: "Linear guidance", compactTitle: "Linear guidance",
        scope: "Sliding blocks in textile mechanisms.",
        intro: "For frequent starts, address stick-slip noise; for long reciprocation, clearance growth. Compare starting force and wear by steel/plastic rail and dust exposure.",
      },
      "textile-package-spindle-support": {
        title: "Bobbin & spindle support", compactTitle: "Spindle support",
        scope: "Bobbin holders and spindle supports.",
        intro: "For load-bearing supports, control deflection and creep; for rotary supports, bore wear. Alongside reinforcement stiffness, compare orientation warpage and assembly toughness.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Textilmaschinenbauteile",
    tabsLabel: "Anwendungen in Textilmaschinen", partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "textile-yarn-path-guidance": {
        title: "Fadenlauf und Führung", compactTitle: "Fadenführung",
        scope: "Fadenführer, Spinnführungen und Führungsrollen.",
        intro: "Rillen und Grate erhöhen Faserflug und Fadenbruch. Vergleichen Sie Verschleiß und Reibung und verfolgen Sie Spannung mit dem tatsächlichen Garn.",
      },
      "textile-shedding-heddle-motion": {
        title: "Fachbildung und Litzenbewegung", compactTitle: "Litzenbewegung",
        scope: "Litzenbündel und Litzenheber.",
        intro: "Litzenaugenverschleiß stört Trennung, Arme und Gelenke ermüden durch Schwingen. Wägen Sie Kontaktverschleiß und Zähigkeit ab; prüfen Sie Trennlage und Hub.",
      },
      "textile-linear-guidance": {
        title: "Linearführung", compactTitle: "Linearführung",
        scope: "Gleitblöcke in Textilmechanismen.",
        intro: "Bei häufigen Starts adressieren Sie Stick-Slip, bei langem Hub Spielzunahme. Vergleichen Sie Anlaufkraft und Verschleiß nach Stahl-/Kunststoffschiene und Staub.",
      },
      "textile-package-spindle-support": {
        title: "Spulen- und Spindellagerung", compactTitle: "Spindellagerung",
        scope: "Spulenhalter und Spindelstützen.",
        intro: "Kontrollieren Sie bei tragenden Haltern Durchbiegung und Kriechen, bei Drehlagern Bohrungsverschleiß. Vergleichen Sie neben Verstärkungssteifigkeit Verzug und Montagezähigkeit.",
      },
    },
  },
  fr: {
    sectionTitle: "Matériaux pour les pièces de machines textiles",
    tabsLabel: "Applications des machines textiles", partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de la pièce", materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l’usure et à faible friction",
    groups: {
      "textile-yarn-path-guidance": {
        title: "Parcours et guidage du fil", compactTitle: "Guidage du fil",
        scope: "Guide-fils, guides de filature et galets de guidage.",
        intro: "Rainures et bavures augmentent pilosité et ruptures. Comparez usure et faible frottement, puis tension avec le fil réel.",
      },
      "textile-shedding-heddle-motion": {
        title: "Formation de la foule et mouvement des lisses", compactTitle: "Mouvement des lisses",
        scope: "Faisceaux de lisses et lève-lisses.",
        intro: "L’usure de l’œil perturbe la séparation ; bras et pivots fatiguent. Équilibrez usure et ténacité, puis position de séparation et course.",
      },
      "textile-linear-guidance": {
        title: "Guidage linéaire", compactTitle: "Guidage linéaire",
        scope: "Blocs coulissants des mécanismes textiles.",
        intro: "Aux démarrages fréquents, traitez le stick-slip ; en longue course, le jeu. Comparez effort initial et usure selon rail acier/plastique et poussière.",
      },
      "textile-package-spindle-support": {
        title: "Support de bobines et de broches", compactTitle: "Support des broches",
        scope: "Porte-bobines et supports de broches.",
        intro: "Pour les supports porteurs, contrôlez flèche et fluage ; pour les pivots, l’usure d’alésage. Avec le renforcement, comparez gauchissement et ténacité au montage.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para peças de máquinas têxteis",
    tabsLabel: "Aplicações em máquinas têxteis", partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "textile-yarn-path-guidance": {
        title: "Percurso e guiamento do fio", compactTitle: "Guiamento do fio",
        scope: "Guias de fio, guias de fiação e rodas-guia.",
        intro: "Sulcos e rebarbas aumentam pilosidade e rupturas. Compare desgaste e baixo atrito, acompanhando tensão com o fio real.",
      },
      "textile-shedding-heddle-motion": {
        title: "Abertura da cala e movimento dos liços", compactTitle: "Movimento dos liços",
        scope: "Feixes de liços e levantadores de liços.",
        intro: "Desgaste do olhal prejudica separação; braços e pivôs fatigam. Equilibre desgaste e tenacidade, depois posição e curso.",
      },
      "textile-linear-guidance": {
        title: "Guiamento linear", compactTitle: "Guiamento linear",
        scope: "Blocos deslizantes dos mecanismos têxteis.",
        intro: "Em partidas frequentes, trate stick-slip; em cursos longos, aumento de folga. Compare força inicial e desgaste por trilho de aço/plástico e poeira.",
      },
      "textile-package-spindle-support": {
        title: "Apoio de bobinas e fusos", compactTitle: "Apoio dos fusos",
        scope: "Suportes de bobinas e de fusos.",
        intro: "Em suportes carregados, controle flexão e fluência; em rotativos, desgaste do furo. Com reforço, compare empenamento e tenacidade de montagem.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "纺织机械部件的材料关注点",
    tabsLabel: "纺织机械应用分类", partsLabel: "部件要求",
    imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "textile-yarn-path-guidance": {
        title: "纱线路径与导向", compactTitle: "纱线导向",
        scope: "导纱器、气流纺导向件与导向轮。",
        intro: "接触面沟槽和毛刺会增加毛羽与断纱。先比较表面耐磨和低摩擦，再用实际纱线追踪张力波动。",
      },
      "textile-shedding-heddle-motion": {
        title: "开口与综丝运动", compactTitle: "综丝运动",
        scope: "综丝束与提综器。",
        intro: "综眼磨损影响分纱，提综臂和转轴受反复摆动疲劳。先权衡接触耐磨与结构韧性，再检查分纱位置和动作行程。",
      },
      "textile-linear-guidance": {
        title: "直线导向", compactTitle: "直线导向",
        scope: "纺织机构中的滑块。",
        intro: "频繁启停先解决粘滑与异响，长行程往复先控制间隙增长。按钢轨或塑轨和粉尘状态，分别比较润滑配方的启动阻力与磨耗。",
      },
      "textile-package-spindle-support": {
        title: "筒管与锭轴支撑", compactTitle: "锭轴支撑",
        scope: "筒管座与纺锭支撑件。",
        intro: "承载支架先控制挠曲与蠕变，转动支撑先控制孔径磨耗。增强提高刚性的同时，需比较取向翘曲和装配韧性。",
      },
    },
  },
};
