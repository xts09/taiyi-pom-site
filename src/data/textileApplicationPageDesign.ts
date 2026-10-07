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
        intro: "Yarn type, tension, speed and surface contact affect wear, yarn fuzz and the consistency of guidance.",
      },
      "textile-shedding-heddle-motion": {
        title: "Shedding & heddle motion", compactTitle: "Heddle motion",
        scope: "Heddle wire bundles and heddle lifters.",
        intro: "Contact at the heddle eye and repeated lifting involve different loads. Straightness, pivot fit and arm stiffness affect reliable warp separation.",
      },
      "textile-linear-guidance": {
        title: "Linear guidance", compactTitle: "Linear guidance",
        scope: "Sliding blocks in textile mechanisms.",
        intro: "Guide clearance, dust and lubrication affect sliding resistance, stick-slip and dimensional wear during repeated travel.",
      },
      "textile-package-spindle-support": {
        title: "Bobbin & spindle support", compactTitle: "Spindle support",
        scope: "Bobbin holders and spindle supports.",
        intro: "Loading cycles, retention geometry, shaft fit and rotational speed shape support stiffness and assembly alignment.",
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
        intro: "Garnart, Spannung, Geschwindigkeit und Oberflächenkontakt beeinflussen Verschleiß, Garnhaarigkeit und gleichmäßige Führung.",
      },
      "textile-shedding-heddle-motion": {
        title: "Fachbildung und Litzenbewegung", compactTitle: "Litzenbewegung",
        scope: "Litzenbündel und Litzenheber.",
        intro: "Kontakt am Litzenauge und wiederholtes Heben bringen unterschiedliche Lasten mit sich. Geradheit, Gelenkpassung und Armsteifigkeit beeinflussen die zuverlässige Trennung der Kettfäden.",
      },
      "textile-linear-guidance": {
        title: "Linearführung", compactTitle: "Linearführung",
        scope: "Gleitblöcke in Textilmechanismen.",
        intro: "Führungsspiel, Staub und Schmierung beeinflussen Gleitwiderstand, Stick-Slip und Maßänderungen durch Verschleiß bei wiederholten Bewegungen.",
      },
      "textile-package-spindle-support": {
        title: "Spulen- und Spindellagerung", compactTitle: "Spindellagerung",
        scope: "Spulenhalter und Spindelstützen.",
        intro: "Belastungszyklen, Haltegeometrie, Wellenpassung und Drehzahl bestimmen die Anforderungen an Steifigkeit und Montageausrichtung.",
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
        intro: "Le type de fil, la tension, la vitesse et le contact de surface influencent l’usure, la pilosité du fil et la régularité du guidage.",
      },
      "textile-shedding-heddle-motion": {
        title: "Formation de la foule et mouvement des lisses", compactTitle: "Mouvement des lisses",
        scope: "Faisceaux de lisses et lève-lisses.",
        intro: "Le contact dans l’œil des lisses et les levées répétées sollicitent les pièces différemment. La rectitude, l’ajustement du pivot et la rigidité du bras influencent la séparation des fils de chaîne.",
      },
      "textile-linear-guidance": {
        title: "Guidage linéaire", compactTitle: "Guidage linéaire",
        scope: "Blocs coulissants des mécanismes textiles.",
        intro: "Le jeu, la poussière et la lubrification influencent la résistance au glissement, le stick-slip et l’usure dimensionnelle pendant les déplacements répétés.",
      },
      "textile-package-spindle-support": {
        title: "Support de bobines et de broches", compactTitle: "Support des broches",
        scope: "Porte-bobines et supports de broches.",
        intro: "Les cycles de chargement, la géométrie de maintien, l’ajustement de l’arbre et la vitesse de rotation déterminent les exigences de rigidité et d’alignement.",
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
        intro: "O tipo de fio, a tensão, a velocidade e o contato de superfície influenciam o desgaste, a formação de fiapos e a regularidade do guiamento.",
      },
      "textile-shedding-heddle-motion": {
        title: "Abertura da cala e movimento dos liços", compactTitle: "Movimento dos liços",
        scope: "Feixes de liços e levantadores de liços.",
        intro: "O contato no olhal dos liços e as elevações repetidas envolvem cargas distintas. A retidão, o ajuste do pivô e a rigidez do braço influenciam a separação dos fios de urdume.",
      },
      "textile-linear-guidance": {
        title: "Guiamento linear", compactTitle: "Guiamento linear",
        scope: "Blocos deslizantes dos mecanismos têxteis.",
        intro: "A folga, a poeira e a lubrificação influenciam a resistência ao deslizamento, o stick-slip e o desgaste dimensional durante os movimentos repetidos.",
      },
      "textile-package-spindle-support": {
        title: "Apoio de bobinas e fusos", compactTitle: "Apoio dos fusos",
        scope: "Suportes de bobinas e de fusos.",
        intro: "Os ciclos de carregamento, a geometria de retenção, o ajuste do eixo e a rotação definem os requisitos de rigidez do apoio e alinhamento da montagem.",
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
        intro: "纱线类型、张力、速度与表面接触，影响接触面的磨损、毛羽和导向稳定性。",
      },
      "textile-shedding-heddle-motion": {
        title: "开口与综丝运动", compactTitle: "综丝运动",
        scope: "综丝束与提综器。",
        intro: "综眼接触与反复提综承担的载荷不同，直线度、转轴配合与提综臂的刚度影响经纱分隔和动作稳定性。",
      },
      "textile-linear-guidance": {
        title: "直线导向", compactTitle: "直线导向",
        scope: "纺织机构中的滑块。",
        intro: "导向间隙、粉尘与润滑状态，影响反复行程中的滑动阻力、粘滑和尺寸磨耗。",
      },
      "textile-package-spindle-support": {
        title: "筒管与锭轴支撑", compactTitle: "锭轴支撑",
        scope: "筒管座与纺锭支撑件。",
        intro: "装卸循环、夹持结构、轴配合与转速，决定支撑刚度和装配对位的关注点。",
      },
    },
  },
};
