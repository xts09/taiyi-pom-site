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
        intro: "Stroke, guide clearance and actuation fit affect valve movement. Media, pressure and temperature cycles also influence dimensions and the interfaces near seals.",
      },
      "water-rolling-guidance": {
        title: "Rolling guidance", compactTitle: "Rolling guidance",
        scope: "Guide wheels in water control mechanisms.",
        intro: "Shaft fit, radial load and clearance affect starting resistance and rolling stability. Repeated movement makes wear at the contact surfaces relevant to the running gap.",
      },
      "water-valve-housing": {
        title: "Valve housings", compactTitle: "Valve housings",
        scope: "Housings and supporting parts around valve assemblies.",
        intro: "Wall thickness, shrinkage and warpage affect housing stiffness and assembly position. Pressure, temperature and media are part of the operating conditions for the assembled valve.",
      },
      "water-pumping": {
        title: "Pumping", compactTitle: "Pumping",
        scope: "Pump impellers.",
        intro: "Blade geometry, rotational balance and shaft fit shape the impeller’s dimensional requirements. Stiffness and deformation under load matter alongside the fluid and rotational duty.",
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
        intro: "Hub, Führungsspiel und Betätigungspassung beeinflussen die Ventilbewegung. Medien, Druck und Temperaturzyklen wirken sich auch auf Maße und dichtungsnahe Schnittstellen aus.",
      },
      "water-rolling-guidance": {
        title: "Rollende Führung", compactTitle: "Rollende Führung",
        scope: "Führungsrollen in wassertechnischen Mechanismen.",
        intro: "Wellenpassung, Radiallast und Spiel beeinflussen Anlaufwiderstand und gleichmäßiges Rollen. Bei wiederholter Bewegung wirkt sich der Verschleiß der Kontaktflächen auf das Laufspiel aus.",
      },
      "water-valve-housing": {
        title: "Ventilgehäuse", compactTitle: "Ventilgehäuse",
        scope: "Gehäuse und Stützteile von Ventilbaugruppen.",
        intro: "Wanddicke, Schwindung und Verzug beeinflussen Gehäusesteifigkeit und Montageposition. Druck, Temperatur und Medien gehören zu den Betriebsbedingungen des montierten Ventils.",
      },
      "water-pumping": {
        title: "Pumpen", compactTitle: "Pumpen",
        scope: "Pumpenlaufräder.",
        intro: "Schaufelgeometrie, Wuchtung und Wellenpassung bestimmen die Maßanforderungen an das Laufrad. Steifigkeit und Verformung unter Last sind zusammen mit Medium und Drehbetrieb relevant.",
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
        intro: "La course, le jeu de guidage et l’ajustement de l’actionnement influencent le mouvement de la vanne. Fluide, pression et cycles thermiques affectent aussi les dimensions et les interfaces proches des joints.",
      },
      "water-rolling-guidance": {
        title: "Guidage roulant", compactTitle: "Guidage roulant",
        scope: "Galets de guidage des mécanismes de gestion de l’eau.",
        intro: "L’ajustement de l’axe, la charge radiale et le jeu influencent la résistance au démarrage et la régularité du roulement. L’usure des surfaces de contact agit sur le jeu de fonctionnement.",
      },
      "water-valve-housing": {
        title: "Corps de vanne", compactTitle: "Corps de vanne",
        scope: "Corps et pièces de support des ensembles de vanne.",
        intro: "Épaisseur de paroi, retrait et gauchissement influencent la rigidité du corps et la position d’assemblage. Pression, température et fluide font partie des conditions de fonctionnement de la vanne montée.",
      },
      "water-pumping": {
        title: "Pompage", compactTitle: "Pompage",
        scope: "Roues de pompe.",
        intro: "Géométrie des pales, équilibrage et ajustement sur l’arbre déterminent les exigences dimensionnelles de la roue. Rigidité et déformation sous charge sont à considérer avec le fluide et le régime de rotation.",
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
        intro: "Curso, folga de guiamento e ajuste do acionamento afetam o movimento da válvula. Fluido, pressão e ciclos de temperatura também influenciam as dimensões e as interfaces próximas às vedações.",
      },
      "water-rolling-guidance": {
        title: "Guiamento por roletes", compactTitle: "Guiamento",
        scope: "Roletes de guia em mecanismos de controle de água.",
        intro: "Ajuste do eixo, carga radial e folga afetam a resistência inicial e a estabilidade de rotação. O desgaste nas superfícies de contato influencia a folga ao longo dos movimentos repetidos.",
      },
      "water-valve-housing": {
        title: "Carcaças de válvulas", compactTitle: "Carcaças",
        scope: "Carcaças e peças de apoio de conjuntos de válvula.",
        intro: "Espessura de parede, contração e empenamento afetam a rigidez da carcaça e a posição de montagem. Pressão, temperatura e fluido fazem parte das condições de operação da válvula montada.",
      },
      "water-pumping": {
        title: "Bombeamento", compactTitle: "Bombeamento",
        scope: "Rodas de bomba.",
        intro: "Geometria das pás, balanceamento e ajuste do eixo definem os requisitos dimensionais da roda. Rigidez e deformação sob carga importam junto com o fluido e o regime de rotação.",
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
        intro: "行程、导向间隙与执行配合影响阀门动作，介质、压力和温度循环也会影响尺寸及密封附近的配合界面。",
      },
      "water-rolling-guidance": {
        title: "滚动导向", compactTitle: "滚动导向",
        scope: "水路机构中的导向轮。",
        intro: "轴配合、径向载荷与间隙影响启动阻力和滚动稳定性，反复运动中接触面的磨损会改变运行间隙。",
      },
      "water-valve-housing": {
        title: "阀门壳体", compactTitle: "阀门壳体",
        scope: "阀门总成的壳体与支撑部件。",
        intro: "壁厚、收缩与翘曲影响壳体刚度和装配位置，压力、温度与介质则是阀门总成的实际使用条件。",
      },
      "water-pumping": {
        title: "泵送", compactTitle: "泵送",
        scope: "泵叶轮。",
        intro: "叶片结构、旋转平衡与轴配合决定叶轮的尺寸要求，刚度和载荷下的变形也与流体、旋转工况有关。",
      },
    },
  },
};
