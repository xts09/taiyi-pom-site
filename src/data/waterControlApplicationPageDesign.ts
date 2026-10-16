import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type WaterControlPageCopy = ApplicationPartGroupsCopy & { driveMaterialTitle: string };

export const waterControlPageDesign: Record<MessageLocale, WaterControlPageCopy> = {
  en: {
    sectionTitle: "Material requirements for water control parts",
    tabsLabel: "Water control applications", partsLabel: "Part requirements",
    imageLabel: "Part illustration", materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "water-valve-internals-actuation": {
        title: "Valve internals & actuation", compactTitle: "Valve internals",
        scope: "Spool assemblies, cartridges and valve operating parts.",
        intro: "Uneven spool wear and thermal changes can close motion clearance. Compare starting force and clearance retention, then return and sealing after thermal cycles.",
      },
      "water-rolling-guidance": {
        title: "Rolling guidance", compactTitle: "Rolling guidance",
        scope: "Guide wheels in water control mechanisms.",
        intro: "Bore wear widens radial clearance; eccentric load and heat accelerate failure. Compare starting torque and bore retention, then temperature rise under loaded rotation.",
      },
      "water-valve-housing": {
        title: "Valve housings", compactTitle: "Valve housings",
        scope: "Housings and supporting parts around valve assemblies.",
        intro: "Pressure deformation shifts seal locations; threads and press fits concentrate stress. Balance stiffness and toughness, then dimensions after pressure and thermal cycles.",
      },
      "water-pumping": {
        title: "Pumping", compactTitle: "Pumping",
        scope: "Pump impellers.",
        intro: "Blade deformation changes flow and balance; uneven bore wear adds vibration. Compare flexural stiffness and dimensional retention, then blade shape and clearance after fluid exposure.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Bauteile der Wassertechnik",
    tabsLabel: "Anwendungen in der Wassertechnik", partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung", materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "water-valve-internals-actuation": {
        title: "Ventilinnenteile und Betätigung", compactTitle: "Ventilinnenteile",
        scope: "Schieberbaugruppen, Kartuschen und Betätigungsteile.",
        intro: "Schieberverschleiß und Wärmeänderungen können Bewegungsspiel schließen. Vergleichen Sie Anlaufkraft und Spielhaltung sowie Rückstellung und Dichtheit nach Temperaturzyklen.",
      },
      "water-rolling-guidance": {
        title: "Rollende Führung", compactTitle: "Rollende Führung",
        scope: "Führungsrollen in wassertechnischen Mechanismen.",
        intro: "Bohrungsverschleiß erhöht Radialspiel; Schieflast und Wärme beschleunigen Ausfälle. Vergleichen Sie Anlaufmoment, Bohrungsmaßhaltung und Wärme unter Drehbelastung.",
      },
      "water-valve-housing": {
        title: "Ventilgehäuse", compactTitle: "Ventilgehäuse",
        scope: "Gehäuse und Stützteile von Ventilbaugruppen.",
        intro: "Druckverformung verschiebt Dichtlagen; Gewinde und Presssitze konzentrieren Spannung. Wägen Sie Steifigkeit und Zähigkeit ab; prüfen Sie Maße nach Druck- und Temperaturzyklen.",
      },
      "water-pumping": {
        title: "Pumpen", compactTitle: "Pumpen",
        scope: "Pumpenlaufräder.",
        intro: "Schaufelverformung verändert Durchfluss und Wucht; Bohrungsverschleiß erhöht Vibration. Vergleichen Sie Biegesteifigkeit und Maßhaltung sowie Schaufelform und Spiel nach Medienkontakt.",
      },
    },
  },
  fr: {
    sectionTitle: "Exigences des pièces de gestion de l’eau",
    tabsLabel: "Applications de gestion de l’eau", partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de la pièce", materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l’usure et à faible frottement",
    groups: {
      "water-valve-internals-actuation": {
        title: "Organes internes et actionnement", compactTitle: "Organes internes",
        scope: "Ensembles de tiroir, cartouches et pièces d’actionnement de vanne.",
        intro: "Usure du tiroir et variations thermiques peuvent fermer le jeu. Comparez effort initial et maintien du jeu, puis retour et étanchéité après cycles thermiques.",
      },
      "water-rolling-guidance": {
        title: "Guidage roulant", compactTitle: "Guidage roulant",
        scope: "Galets de guidage des mécanismes de gestion de l’eau.",
        intro: "L’usure élargit le jeu radial ; charge excentrée et chaleur accélèrent la défaillance. Comparez couple initial, alésage et échauffement en rotation chargée.",
      },
      "water-valve-housing": {
        title: "Corps de vanne", compactTitle: "Corps de vanne",
        scope: "Corps et pièces de support des ensembles de vanne.",
        intro: "La déformation sous pression déplace les joints ; filetages et serrages concentrent les contraintes. Équilibrez rigidité et ténacité, puis dimensions après cycles.",
      },
      "water-pumping": {
        title: "Pompage", compactTitle: "Pompage",
        scope: "Roues de pompe.",
        intro: "La déformation des pales change débit et équilibre ; l’usure ajoute des vibrations. Comparez rigidité en flexion et dimensions, puis profil et jeu après exposition.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Requisitos de materiais para peças de controle de água",
    tabsLabel: "Aplicações de controle de água", partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça", materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "water-valve-internals-actuation": {
        title: "Partes internas e acionamento", compactTitle: "Partes internas",
        scope: "Conjuntos de carretel, cartuchos e peças de acionamento de válvula.",
        intro: "Desgaste do carretel e mudanças térmicas podem fechar folga. Compare força inicial e retenção de folga, depois retorno e vedação após ciclos térmicos.",
      },
      "water-rolling-guidance": {
        title: "Guiamento por roletes", compactTitle: "Guiamento",
        scope: "Roletes de guia em mecanismos de controle de água.",
        intro: "Desgaste amplia folga radial; carga excêntrica e calor aceleram falha. Compare torque inicial, retenção do furo e aquecimento sob rotação carregada.",
      },
      "water-valve-housing": {
        title: "Carcaças de válvulas", compactTitle: "Carcaças",
        scope: "Carcaças e peças de apoio de conjuntos de válvula.",
        intro: "Deformação sob pressão desloca vedações; roscas e interferências concentram tensão. Equilibre rigidez e tenacidade, depois dimensões após ciclos.",
      },
      "water-pumping": {
        title: "Bombeamento", compactTitle: "Bombeamento",
        scope: "Rodas de bomba.",
        intro: "Deformação das pás altera vazão e equilíbrio; desgaste aumenta vibração. Compare rigidez e dimensões, depois perfil e folga após exposição.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "水路控制部件的材料关注点",
    tabsLabel: "水路控制应用", partsLabel: "部件要求",
    imageLabel: "部件示意", materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "water-valve-internals-actuation": {
        title: "阀门内部件与执行", compactTitle: "阀门内部件",
        scope: "阀芯总成、阀筒与阀门执行部件。",
        intro: "阀芯偏磨与热尺寸变化都会压缩运动间隙。先比较启动阻力和间隙保持，再核对冷热循环后的回位与密封。",
      },
      "water-rolling-guidance": {
        title: "滚动导向", compactTitle: "滚动导向",
        scope: "水路机构中的导向轮。",
        intro: "轴孔磨损会放大径向间隙，偏载和摩擦热会加快失效。先比较低启动转矩与孔径保持，再检查负载旋转的温升。",
      },
      "water-valve-housing": {
        title: "阀门壳体", compactTitle: "阀门壳体",
        scope: "阀门总成的壳体与支撑部件。",
        intro: "承压变形会移动密封位置，螺纹和压配处易集中装配应力。先平衡刚性与韧性，再核对压力、温度循环后的尺寸。",
      },
      "water-pumping": {
        title: "泵送", compactTitle: "泵送",
        scope: "泵叶轮。",
        intro: "叶片变形影响流量与动平衡，轴孔偏磨增加振动。先比较弯曲刚性与尺寸保持，再检查介质接触后的叶形和间隙。",
      },
    },
  },
};
