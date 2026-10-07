import type { MessageLocale } from "../i18n/config";
import type { ApplicationPartGroupsCopy } from "./applicationPartGroupPresentation";

type WashingMachinePageCopy = ApplicationPartGroupsCopy & {
  driveMaterialTitle: string;
};

export const washingMachinePageDesign: Record<MessageLocale, WashingMachinePageCopy> = {
  en: {
    sectionTitle: "Material requirements for washing machine parts",
    tabsLabel: "Washing machine applications",
    partsLabel: "Part requirements",
    imageLabel: "Part illustration",
    materialsAction: "View materials & grades",
    driveMaterialTitle: "Wear-resistant & low-friction POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Water inlet & distribution", compactTitle: "Water inlet",
        scope: "Water guide pipes and inlet valve connections.",
        intro: "Water temperature, detergent exposure, ports and sealing surfaces shape the material and assembly requirements for inlet parts.",
      },
      "washing-machine-drum-drive": {
        title: "Drum drive", compactTitle: "Drum drive",
        scope: "Drive gears, transmission wheels and reduction gear assemblies.",
        intro: "Tooth contact, shaft alignment and repeated torque transfer are central to drive-part requirements.",
      },
      "washing-machine-drainage": {
        title: "Drainage", compactTitle: "Drainage",
        scope: "Pump housings, control valves and valve assemblies.",
        intro: "Pump housings need stiffness and sealing; moving valves also involve friction. Water temperature and detergent exposure matter for both.",
      },
    },
  },
  de: {
    sectionTitle: "Werkstoffe für Waschmaschinen",
    tabsLabel: "Anwendungen in Waschmaschinen",
    partsLabel: "Bauteilanforderungen",
    imageLabel: "Bauteilabbildung",
    materialsAction: "Werkstoffe und Typen ansehen",
    driveMaterialTitle: "Verschleißfestes und reibungsarmes POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Wasserzulauf und Verteilung", compactTitle: "Zulauf",
        scope: "Wasserführungsrohre und Anschlüsse am Zulaufventil.",
        intro: "Wassertemperatur, Waschmittelkontakt, Anschlüsse und Dichtflächen bestimmen die Werkstoff- und Montageanforderungen im Zulauf.",
      },
      "washing-machine-drum-drive": {
        title: "Trommelantrieb", compactTitle: "Antrieb",
        scope: "Antriebszahnräder, Antriebsräder und Untersetzungsgetriebe.",
        intro: "Zahnkontakt, Wellenausrichtung und wiederholte Drehmomentübertragung prägen die Anforderungen an Antriebsbauteile.",
      },
      "washing-machine-drainage": {
        title: "Wasserablauf", compactTitle: "Ablauf",
        scope: "Pumpengehäuse, Steuerventile und Ablaufventilbaugruppen.",
        intro: "Pumpengehäuse benötigen Steifigkeit und Dichtheit; bei bewegten Ventilen kommt Reibung hinzu. Wassertemperatur und Waschmittelkontakt sind für beide relevant.",
      },
    },
  },
  fr: {
    sectionTitle: "Matériaux pour les pièces de lave-linge",
    tabsLabel: "Applications dans les lave-linge",
    partsLabel: "Exigences des pièces",
    imageLabel: "Illustration de pièce",
    materialsAction: "Voir les matériaux et grades",
    driveMaterialTitle: "POM résistant à l'usure et à faible frottement",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Arrivée et distribution d'eau", compactTitle: "Arrivée",
        scope: "Conduits d'eau et raccords de vanne d'arrivée.",
        intro: "La température de l'eau, le contact avec les détergents, les raccords et les surfaces d'étanchéité déterminent les exigences de matériau et d'assemblage.",
      },
      "washing-machine-drum-drive": {
        title: "Entraînement du tambour", compactTitle: "Tambour",
        scope: "Engrenages d'entraînement, roues de transmission et réducteurs.",
        intro: "Le contact des dents, l'alignement des arbres et la transmission répétée du couple sont essentiels pour les pièces d'entraînement.",
      },
      "washing-machine-drainage": {
        title: "Vidange", compactTitle: "Vidange",
        scope: "Corps de pompe, vannes de commande et ensembles de vanne de vidange.",
        intro: "Les corps de pompe exigent rigidité et étanchéité ; les vannes mobiles impliquent aussi le frottement. La température de l'eau et les détergents concernent les deux.",
      },
    },
  },
  "pt-BR": {
    sectionTitle: "Materiais para peças de lavadoras",
    tabsLabel: "Aplicações em lavadoras",
    partsLabel: "Requisitos das peças",
    imageLabel: "Ilustração da peça",
    materialsAction: "Ver materiais e grades",
    driveMaterialTitle: "POM resistente ao desgaste e de baixo atrito",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "Entrada e distribuição de água", compactTitle: "Entrada",
        scope: "Tubos de água e conexões da válvula de entrada.",
        intro: "Temperatura da água, contato com detergentes, conexões e superfícies de vedação definem os requisitos de material e montagem na entrada.",
      },
      "washing-machine-drum-drive": {
        title: "Acionamento do tambor", compactTitle: "Acionamento",
        scope: "Engrenagens de acionamento, rodas de transmissão e conjuntos redutores.",
        intro: "Contato dos dentes, alinhamento dos eixos e transmissão repetida de torque orientam os requisitos das peças de acionamento.",
      },
      "washing-machine-drainage": {
        title: "Drenagem", compactTitle: "Drenagem",
        scope: "Carcaças de bomba, válvulas de controle e conjuntos de válvula de drenagem.",
        intro: "Carcaças de bomba exigem rigidez e vedação; válvulas móveis também envolvem atrito. Temperatura da água e contato com detergentes importam para ambas.",
      },
    },
  },
  "zh-CN": {
    sectionTitle: "洗衣机零部件的材料关注点",
    tabsLabel: "洗衣机应用小分类",
    partsLabel: "部件要求",
    imageLabel: "部件示意",
    materialsAction: "查看材料与牌号",
    driveMaterialTitle: "耐磨与低摩擦 POM",
    groups: {
      "washing-machine-fill-and-distribution": {
        title: "进水与分配", compactTitle: "进水",
        scope: "导水管与进水阀连接管。",
        intro: "水温、洗涤剂接触、管口和密封位置决定进水部件的材料与装配要求。",
      },
      "washing-machine-drum-drive": {
        title: "滚筒驱动", compactTitle: "传动",
        scope: "滚筒传动齿轮、传动轮与减速齿轮总成。",
        intro: "齿面接触、轴系对位和重复扭矩传递是驱动部件的主要关注点。",
      },
      "washing-machine-drainage": {
        title: "排水", compactTitle: "排水",
        scope: "排水泵壳体、控制阀与阀门总成。",
        intro: "泵壳体侧重刚性和密封，阀门还需考虑启闭摩擦；两者都需核对水温和洗涤剂接触条件。",
      },
    },
  },
};
