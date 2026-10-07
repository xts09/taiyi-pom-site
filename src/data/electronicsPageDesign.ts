import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

export type ElectronicsPageCopy = ApplicationPartGroupsCopy & {
  electricalTitle: string;
  electricalNote: string;
  driveMaterialTitle: string;
};

export const electronicsPageDesign: Record<MessageLocale, ElectronicsPageCopy> = {
  en: {
    sectionTitle: "Material requirements for electronics parts",
    tabsLabel: "Electronics applications",
    partsLabel: "Part requirements",
    imageLabel: "Part illustration",
    materialsAction: "View materials & grades",
    electricalTitle: "Electrical requirements & grade data",
    electricalNote: "When flame retardancy, high temperature or regulatory requirements take priority, POM's suitability as a candidate needs separate review.",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "electronics-interconnects": {
        title: "Connectors & terminals", compactTitle: "Connectors",
        scope: "Connector housings, terminal housings and signal interfaces.",
        intro: "Terminal retention, assembly dimensions and electrical requirements influence material selection.",
      },
      "electronics-drive-motion": {
        title: "Drive & motion", compactTitle: "Drive",
        scope: "Moving parts in copiers, toner cartridges and robotic joints.",
        intro: "Wear, friction, clearance and assembly conditions vary across parts in repeated motion.",
      },
      "electronics-esd-handling": {
        title: "Static control", compactTitle: "Static control",
        scope: "IC handling trays and antistatic precision parts.",
        intro: "Resistance definitions and test conditions sit alongside mechanical and dimensional requirements.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffwahl für Elektronikbauteile",
    tabsLabel: "Anwendungen in der Elektronik",
    partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung",
    materialsAction: "Werkstoffe und Typen ansehen",
    electricalTitle: "Elektrische Anforderungen und Typendaten",
    electricalNote: "Stehen Flammschutz, hohe Temperaturen oder gesetzliche Anforderungen im Vordergrund, muss POM als möglicher Werkstoff gesondert geprüft werden.",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "electronics-interconnects": {
        title: "Steckverbinder und Klemmen", compactTitle: "Verbinder",
        scope: "Steckergehäuse, Klemmengehäuse und Signalschnittstellen.",
        intro: "Klemmenhalt, Montagemaße und elektrische Anforderungen beeinflussen die Werkstoffauswahl.",
      },
      "electronics-drive-motion": {
        title: "Antrieb und Bewegung", compactTitle: "Antrieb",
        scope: "Bewegte Teile in Kopierern, Tonerkartuschen und Robotergelenken.",
        intro: "Verschleiß, Reibung, Spiel und Montagebedingungen unterscheiden sich je nach bewegtem Bauteil.",
      },
      "electronics-esd-handling": {
        title: "ESD-Schutz", compactTitle: "ESD-Schutz",
        scope: "IC-Transporttrays und antistatische Präzisionsbauteile.",
        intro: "Widerstandsdefinition und Prüfbedingungen werden zusammen mit mechanischen und maßlichen Anforderungen betrachtet.",
      },
    },
  },
  fr: {
    sectionTitle: "Choix des matériaux pour les pièces électroniques",
    tabsLabel: "Applications électroniques",
    partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de pièce",
    materialsAction: "Voir les matériaux et grades",
    electricalTitle: "Exigences électriques et données des grades",
    electricalNote: "Lorsque la tenue au feu, les températures élevées ou les exigences réglementaires prédominent, l'adéquation du POM doit être examinée séparément.",
    driveMaterialTitle: "POM résistant à l'usure et à faible frottement",
    groups: {
      "electronics-interconnects": {
        title: "Connecteurs et bornes", compactTitle: "Connecteurs",
        scope: "Boîtiers de connecteurs, boîtiers de bornes et interfaces de signal.",
        intro: "La rétention des bornes, les dimensions d'assemblage et les exigences électriques influencent le choix du matériau.",
      },
      "electronics-drive-motion": {
        title: "Entraînement et mouvement", compactTitle: "Entraînement",
        scope: "Pièces mobiles de copieurs, cartouches de toner et articulations robotiques.",
        intro: "L'usure, le frottement, les jeux et les conditions d'assemblage varient selon les pièces en mouvement répété.",
      },
      "electronics-esd-handling": {
        title: "Protection ESD", compactTitle: "ESD",
        scope: "Plateaux de manutention de circuits intégrés et pièces antistatiques de précision.",
        intro: "La définition de la résistance et les conditions d'essai accompagnent les exigences mécaniques et dimensionnelles.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para componentes eletrônicos",
    tabsLabel: "Aplicações em eletrônica",
    partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça",
    materialsAction: "Ver materiais e grades",
    electricalTitle: "Requisitos elétricos e dados dos grades",
    electricalNote: "Quando retardância à chama, altas temperaturas ou requisitos regulatórios são prioritários, a adequação do POM precisa de uma avaliação específica.",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "electronics-interconnects": {
        title: "Conectores e terminais", compactTitle: "Conectores",
        scope: "Carcaças de conectores, carcaças de terminais e interfaces de sinal.",
        intro: "A retenção dos terminais, as dimensões de montagem e os requisitos elétricos influenciam a escolha do material.",
      },
      "electronics-drive-motion": {
        title: "Acionamento e movimento", compactTitle: "Acionamento",
        scope: "Peças móveis de copiadoras, cartuchos de toner e juntas robóticas.",
        intro: "Desgaste, atrito, folgas e condições de montagem variam entre peças com movimentos repetidos.",
      },
      "electronics-esd-handling": {
        title: "Controle de estática", compactTitle: "Estática",
        scope: "Bandejas para manuseio de circuitos integrados e peças antiestáticas de precisão.",
        intro: "A definição da resistência e as condições de ensaio acompanham os requisitos mecânicos e dimensionais.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "电子电气部件的材料关注点",
    tabsLabel: "电子电气应用小分类",
    partsLabel: "部件要求",
    imageLabel: "部件示意",
    materialsAction: "查看材料与牌号",
    electricalTitle: "电气要求与牌号资料",
    electricalNote: "若阻燃、高温或法规要求主导，POM 能否作为候选材料需单独确认。",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "electronics-interconnects": {
        title: "连接器与端子", compactTitle: "连接器",
        scope: "连接器壳体、端子壳体与信号连接接口。",
        intro: "端子保持、装配尺寸和电气要求共同影响材料选择。",
      },
      "electronics-drive-motion": {
        title: "驱动与运动", compactTitle: "传动",
        scope: "复印机、碳粉盒与机器人关节的运动部件。",
        intro: "重复运动中的磨损、摩擦、间隙和装配条件各有侧重。",
      },
      "electronics-esd-handling": {
        title: "静电控制", compactTitle: "静电控制",
        scope: "IC 搬运托盘与抗静电精密部件。",
        intro: "电阻定义和测试条件与机械、尺寸要求一起考虑。",
      },
    },
  },
};
