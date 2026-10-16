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
        intro: "Thin-wall filling and latch cracking lead connector selection. Balance flow and assembly toughness, then check terminal location and project electrical requirements.",
      },
      "electronics-drive-motion": {
        title: "Drive & motion", compactTitle: "Drive",
        scope: "Moving parts in copiers, toner cartridges and robotic joints.",
        intro: "For continuous meshing, control tooth heat and wear; for starts or reversals, balance root loading with impact toughness.",
      },
      "electronics-esd-handling": {
        title: "Static control", compactTitle: "Static control",
        scope: "IC handling trays and antistatic precision parts.",
        intro: "Define resistance targets and the full grounding path before choosing CNT or carbon fiber. Recheck resistance for molding orientation, contact wear and humidity changes.",
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
        intro: "Dünnwandfüllung und Rastrisse führen die Steckerauswahl. Wägen Sie Fließen und Montagezähigkeit ab; prüfen Sie Kontaktlage und elektrische Projektvorgaben.",
      },
      "electronics-drive-motion": {
        title: "Antrieb und Bewegung", compactTitle: "Antrieb",
        scope: "Bewegte Teile in Kopierern, Tonerkartuschen und Robotergelenken.",
        intro: "Bei Dauereingriff kontrollieren Sie Zahnwärme und Verschleiß, bei Anfahren und Umkehr Zahnfußlast und Schlagzähigkeit.",
      },
      "electronics-esd-handling": {
        title: "ESD-Schutz", compactTitle: "ESD-Schutz",
        scope: "IC-Transporttrays und antistatische Präzisionsbauteile.",
        intro: "Definieren Sie Zielwiderstand und Erdungspfad vor CNT- oder Kohlenstofffaserauswahl. Prüfen Sie Widerstand nach Orientierung, Kontaktverschleiß und Feuchtewechsel.",
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
        intro: "Remplissage fin et fissuration des clips orientent le choix. Équilibrez fluidité et ténacité, puis position des contacts et exigences électriques.",
      },
      "electronics-drive-motion": {
        title: "Entraînement et mouvement", compactTitle: "Entraînement",
        scope: "Pièces mobiles de copieurs, cartouches de toner et articulations robotiques.",
        intro: "En engrènement continu, contrôlez chaleur et usure ; aux démarrages et inversions, équilibrez charge en pied et ténacité.",
      },
      "electronics-esd-handling": {
        title: "Protection ESD", compactTitle: "ESD",
        scope: "Plateaux de manutention de circuits intégrés et pièces antistatiques de précision.",
        intro: "Définissez résistance et terre avant de choisir CNT ou carbone. Remesurez selon orientation, usure des contacts et variations d’humidité.",
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
        intro: "Preenchimento fino e trincas nas travas orientam a seleção. Equilibre fluidez e tenacidade, depois posição dos terminais e requisitos elétricos.",
      },
      "electronics-drive-motion": {
        title: "Acionamento e movimento", compactTitle: "Acionamento",
        scope: "Peças móveis de copiadoras, cartuchos de toner e juntas robóticas.",
        intro: "Em engrenamento contínuo, controle calor e desgaste; nas partidas e inversões, equilibre carga na raiz e tenacidade.",
      },
      "electronics-esd-handling": {
        title: "Controle de estática", compactTitle: "Estática",
        scope: "Bandejas para manuseio de circuitos integrados e peças antiestáticas de precisão.",
        intro: "Defina resistência e aterramento antes de escolher CNT ou carbono. Meça novamente conforme orientação, desgaste dos contatos e umidade.",
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
        intro: "薄壁充模与卡扣开裂是连接结构的两项重点。先平衡流动性与装配韧性，再核对端子定位及项目电气要求。",
      },
      "electronics-drive-motion": {
        title: "驱动与运动", compactTitle: "传动",
        scope: "复印机、碳粉盒与机器人关节的运动部件。",
        intro: "持续啮合优先控制齿面温升与磨损，启停或换向优先平衡齿根承载与冲击韧性。",
      },
      "electronics-esd-handling": {
        title: "静电控制", compactTitle: "静电控制",
        scope: "IC 搬运托盘与抗静电精密部件。",
        intro: "先定义电阻目标和完整接地路径，再选择 CNT 或碳纤维体系。成型取向、接点磨损与湿度变化分别纳入电阻复测。",
      },
    },
  },
};
