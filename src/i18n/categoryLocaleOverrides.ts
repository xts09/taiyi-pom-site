import deCategoryCopy from "./messages/de-category-copy.ts";
import frCategoryCopy from "./messages/fr-category-copy.ts";
import ptBRCategoryCopy from "./messages/pt-BR-category-copy.ts";

export const categoryLocaleOverrides = {
  de: {
    ...deCategoryCopy,
    材料概览: "Portfolio im Überblick",
    牌号范围: "Werkstoffportfolio",
    相关应用: "Relevante Anwendungen",
    联系材料团队: "Werkstoffteam kontaktieren",
    零部件与工况: "Bauteil und Einsatzbedingungen",
    模具与加工: "Werkzeug und Verarbeitung",
    数据与样品: "Daten und Muster",
    "PLATFORM® 耐磨与低摩擦 POM 提供 6 个牌号，面向齿轮、轴套、滚轮、导轨及其他运动零件，覆盖 PTFE、MoS2、芳纶纤维等改性体系。":
      "PLATFORM® bietet sechs verschleiß- und reibungsoptimierte POM-Typen für Zahnräder, Buchsen, Rollen, Führungen und weitere bewegte Bauteile. Das Portfolio umfasst Modifikationen mit PTFE, MoS2, Aramidfasern und weiteren Systemen.",
    "PLATFORM® 耐磨与低摩擦 POM 采用 PTFE、MoS2、芳纶纤维及其他耐磨改性体系，面向齿轮、轴套、滚轮、导轨等持续滑动或转动的零件。不同牌号在摩擦、磨损、强度与加工性能之间各有侧重。":
      "Die verschleiß- und reibungsoptimierten PLATFORM® POM-Typen nutzen PTFE, MoS2, Aramidfasern und weitere Verschleißschutzsysteme. Sie sind für dauerhaft gleitende oder rotierende Bauteile wie Zahnräder, Buchsen, Rollen und Führungen ausgelegt und setzen unterschiedliche Schwerpunkte bei Reibung, Verschleiß, Festigkeit und Verarbeitung.",
    "6 个牌号均有关键力学与热性能数据，可进一步获取技术文件和样品，用于运动零件的材料比较与零件试验。":
      "Für alle sechs Typen stehen zentrale mechanische und thermische Daten bereit. Technische Unterlagen und Muster können für Werkstoffvergleiche und Bauteilversuche angefragt werden.",
    "6 个牌号，面向齿轮、轴套、滚轮与导轨等运动部件":
      "Sechs Typen für Zahnräder, Buchsen, Rollen, Führungen und weitere bewegte Bauteile",
    "耐磨与低摩擦 POM 牌号": "Verschleißarme und reibungsreduzierte POM-Typen",
    "从 PTFE、MoS2、芳纶纤维到其他耐磨添加体系，6 个牌号提供不同的摩擦、耐磨、强度与加工性能组合，并配套关键力学与热性能数据。":
      "Von PTFE und MoS2 über Aramidfasern bis zu weiteren Verschleißschutzadditiven bieten sechs Typen unterschiedliche Kombinationen aus Reibung, Verschleiß, Festigkeit und Verarbeitbarkeit sowie zentrale mechanische und thermische Daten.",
    "耐磨 POM 项目支持": "Projektunterstützung für verschleißarmes POM",
    "为运动部件匹配合适的性能组合":
      "Das passende Leistungsprofil für bewegte Bauteile",
    "提供 6 个牌号的技术数据、文件与样品，供齿轮、轴套、滚轮和导轨等运动部件开展材料比较与零件试验。":
      "Technische Daten, Unterlagen und Muster der sechs Typen stehen für Werkstoffvergleiche und Bauteilversuche an Zahnrädern, Buchsen, Rollen und Führungen bereit.",
    零件与运动方式: "Bauteil und Bewegungsart",
    目标性能: "Zielleistung",
    "数据、样品与验证": "Daten, Muster und Validierung",
    产品与应用信息: "Produkt- und Anwendungsinformationen",
    "这组材料适合哪些零件？":
      "Für welche Bauteile sind diese Werkstoffe vorgesehen?",
    "主要面向齿轮、轴套、滚轮、导轨及其他持续运动或滑动的注塑零件，覆盖汽车、电气、卫浴、输送与工业设备等应用。":
      "Die Werkstoffe sind vor allem für Zahnräder, Buchsen, Rollen, Führungen und weitere dauerhaft bewegte oder gleitende Spritzgussteile in Automobil-, Elektro-, Sanitär-, Förder- und Industrieanwendungen vorgesehen.",
    "6 个牌号有哪些改性方向？":
      "Welche Modifikationen decken die sechs Typen ab?",
    "系列包含 PTFE 填充、MoS2 填充、芳纶纤维增强及其他耐磨添加体系，可提供不同的低摩擦、耐磨、强度与加工性能组合。":
      "Das Portfolio umfasst PTFE- und MoS2-gefüllte Typen, Aramidfaserverstärkung und weitere Verschleißschutzsysteme mit unterschiedlichen Profilen für Reibung, Verschleiß, Festigkeit und Verarbeitung.",
    "可以获得哪些项目支持？": "Welche Projektunterstützung ist verfügbar?",
    "可查看牌号数据并申请技术文件和样品；试模与零件验证可围绕实际摩擦副和工况展开。":
      "Typendaten, technische Unterlagen und Muster können angefragt werden. Werkzeug- und Bauteilversuche lassen sich auf die tatsächlichen Kontaktpartner und Einsatzbedingungen abstimmen.",
    "台益耐候 POM 系列覆盖 4 个不同流动、冲击与外观方向的牌号，适用于户外或光照环境下的注塑零件。":
      "Das witterungsbeständige POM von Taiyi Polymer umfasst vier Typen mit unterschiedlichen Fließ-, Schlagzähigkeits- und Oberflächenprofilen für Spritzgussteile im Außenbereich oder unter Lichteinwirkung.",
    "4 个耐候 POM 牌号覆盖不同流动性、冲击性能、颜色与外观方向，为户外及光照环境下的注塑零件提供更完整的材料选择。":
      "Vier witterungsbeständige POM-Typen decken unterschiedliche Fließfähigkeit, Schlagzähigkeit, Farben und Oberflächen ab und erweitern die Werkstoffauswahl für Spritzgussteile im Außenbereich und unter Lichteinwirkung.",
    "牌号组合兼顾耐候方向与基础力学、流动和外观表现，并可根据目标颜色、暴露环境与测试标准提供项目支持。":
      "Das Portfolio verbindet Witterungsbeständigkeit mit mechanischen, Fließ- und Oberflächeneigenschaften; die Projektunterstützung richtet sich nach Zielfarbe, Expositionsumgebung und Prüfnorm.",
    "4 个牌号覆盖光照、颜色、冲击与外观需求":
      "Vier Typen für Licht-, Farb-, Schlagzähigkeits- und Oberflächenanforderungen",
    "耐候 POM 牌号": "Witterungsbeständige POM-Typen",
    "4 个牌号覆盖不同流动、冲击和外观方向；实际耐候表现需结合目标光源、暴露周期、颜色变化与使用环境确认。":
      "Vier Typen decken unterschiedliche Fließ-, Schlagzähigkeits- und Oberflächenprofile ab. Die tatsächliche Witterungsbeständigkeit ist anhand von Lichtquelle, Expositionsdauer, Farbänderung und Einsatzumgebung zu bestätigen.",
    耐候材料支持: "Werkstoffunterstützung für Witterungsbeständigkeit",
    "获取耐候 POM 推荐与样品": "Witterungsbeständiges POM und Muster anfragen",
    "告诉我们零部件的光照环境、颜色与外观目标，我们将结合流动和冲击要求提供牌号、数据与样品建议。":
      "Nennen Sie uns Lichtumgebung, Zielfarbe und Oberflächenanforderung des Bauteils. Wir empfehlen passende Typen, Daten und Muster unter Berücksichtigung von Fließfähigkeit und Schlagzähigkeit.",
    "台益碳纤维增强 POM 覆盖 20% 至 40% 碳纤含量，兼顾高刚度、低收缩、尺寸稳定与受控导电表现。":
      "Das carbonfaserverstärkte POM von Taiyi Polymer umfasst 20 bis 40 % Carbonfaser und verbindet hohe Steifigkeit, geringe Schwindung, Maßstabilität und kontrollierte Leitfähigkeit.",
    "3 个碳纤维增强 POM 牌号覆盖 20%、30% 与 40% 碳纤含量，为高刚度、低收缩、尺寸稳定及受控导电零件提供不同性能层级。":
      "Drei carbonfaserverstärkte POM-Typen mit 20, 30 und 40 % Carbonfaser bieten abgestufte Leistungen für hohe Steifigkeit, geringe Schwindung, Maßstabilität und kontrollierte Leitfähigkeit.",
    "牌号组合将结构增强与电性能方向纳入同一材料系列，并提供关键力学、热性能和电阻率数据支持。":
      "Das Portfolio vereint strukturelle Verstärkung und elektrische Funktion in einer Werkstofffamilie und stellt zentrale mechanische, thermische und spezifische Widerstandsdaten bereit.",
    "20% 至 40% 碳纤增强，兼顾结构与电性能需求":
      "20 bis 40 % Carbonfaser für strukturelle und elektrische Anforderungen",
    "碳纤维增强 POM 牌号": "Carbonfaserverstärkte POM-Typen",
    "3 个牌号覆盖 20% 至 40% 碳纤含量与不同性能层级；实际表现需结合流动、纤维取向、表面和电性能要求确认。":
      "Drei Typen decken 20 bis 40 % Carbonfaser und unterschiedliche Leistungsstufen ab. Das reale Verhalten ist anhand von Fließverhalten, Faserorientierung, Oberfläche und elektrischen Anforderungen zu bestätigen.",
    碳纤增强材料支持: "Werkstoffunterstützung für Carbonfaserverstärkung",
    "获取碳纤增强 POM 推荐与样品": "Carbonfaser-POM und Muster anfragen",
    "告诉我们零部件的刚度、尺寸与电阻率目标，我们将结合碳纤含量和加工条件提供牌号、数据与样品建议。":
      "Nennen Sie uns Steifigkeits-, Maß- und Widerstandsziele des Bauteils. Wir empfehlen passende Typen, Daten und Muster unter Berücksichtigung von Carbonfasergehalt und Verarbeitung.",
    "台益导电与抗静电 POM 提供 2 个黑色牌号，为需要受控电阻率与电荷管理的注塑零件提供材料方案。":
      "Taiyi Polymer bietet zwei schwarze leitfähige beziehungsweise antistatische POM-Typen für Spritzgussteile mit definiertem Widerstand und Ladungskontrolle.",
    "2 个黑色 POM 牌号覆盖不同电阻率方向，为电子电气、输送与自动化等需要导电或抗静电表现的注塑零件提供材料选择。":
      "Zwei schwarze POM-Typen decken unterschiedliche Widerstandsbereiche ab und bieten Werkstoffoptionen für leitfähige oder antistatische Spritzgussteile in Elektrik, Elektronik, Fördertechnik und Automation.",
    "牌号详情提供表面与体积电阻率、关键力学和热性能数据，项目支持可结合测试方法、环境与零件几何展开。":
      "Die Typendetails enthalten Oberflächen- und Volumenwiderstand sowie zentrale mechanische und thermische Daten. Die Projektunterstützung berücksichtigt Prüfmethode, Umgebung und Bauteilgeometrie.",
    "2 个黑色牌号覆盖不同电阻率与电荷管理方向":
      "Zwei schwarze Typen für unterschiedliche Widerstands- und Ladungskontrollbereiche",
    "导电与抗静电 POM 牌号": "Leitfähige und antistatische POM-Typen",
    "2 个黑色牌号提供不同电阻率方向与关键性能数据；零件级电性能需按约定测试方法、环境与测量位置确认。":
      "Zwei schwarze Typen bieten unterschiedliche Widerstandsbereiche und zentrale Leistungsdaten. Die elektrische Bauteilleistung ist mit der vereinbarten Prüfmethode, Umgebung und Messposition zu bestätigen.",
    电性能材料支持: "Werkstoffunterstützung für elektrische Funktionen",
    "获取导电与抗静电 POM 推荐": "Leitfähiges oder antistatisches POM anfragen",
    "告诉我们目标电阻率、测试方法和零部件工况，我们将提供相关牌号、数据、资料与样品建议。":
      "Nennen Sie uns Zielwiderstand, Prüfmethode und Einsatzbedingungen. Wir empfehlen dazu passende Typen, Daten, Unterlagen und Muster.",
    "ETM1500 与 ETM1800 将台益 POM 系列延伸至极高流动范围，适用于薄壁、长流长与填充敏感的注塑模具。":
      "ETM1500 und ETM1800 erweitern das POM-Portfolio von Taiyi Polymer in den ultrahochfließenden Bereich für dünnwandige Teile, lange Fließwege und füllkritische Werkzeuge.",
    "ETM1500 与 ETM1800 面向薄壁、长流长和填充敏感模具，以极高流动性能拓展复杂精密注塑件的成型空间。":
      "ETM1500 und ETM1800 sind für dünne Wände, lange Fließwege und füllkritische Werkzeuge ausgelegt und erweitern mit ultrahoher Fließfähigkeit die Formgebungsmöglichkeiten komplexer Präzisionsteile.",
    "两个牌号提供不同的极高流动层级，并保留完整的力学、热性能和收缩数据，支持材料与模具方案协同评估。":
      "Die beiden Typen bieten unterschiedliche Stufen ultrahoher Fließfähigkeit sowie vollständige mechanische, thermische und Schwindungsdaten für die gemeinsame Bewertung von Werkstoff und Werkzeugkonzept.",
    "2 个极高流动牌号，面向薄壁、长流长与复杂填充":
      "Zwei ultrahochfließende Typen für dünne Wände, lange Fließwege und anspruchsvolle Füllung",
    "极高流动 POM 牌号": "Ultrahochfließende POM-Typen",
    "ETM1500 与 ETM1800 提供两个极高流动层级；目标零部件仍需在流动、强度、尺寸和成型窗口之间取得平衡。":
      "ETM1500 und ETM1800 bieten zwei Stufen ultrahoher Fließfähigkeit. Für das Zielbauteil bleibt ein ausgewogenes Verhältnis von Fließfähigkeit, Festigkeit, Abmessungen und Prozessfenster erforderlich.",
    高流动材料支持: "Werkstoffunterstützung für hohe Fließfähigkeit",
    "获取极高流动 POM 数据与样品": "Daten und Muster für ultrahochfließendes POM anfragen",
    "告诉我们壁厚、流长、浇口和当前填充表现，我们将结合目标性能提供牌号、数据与样品建议。":
      "Nennen Sie uns Wanddicke, Fließweg, Anschnitt und aktuelles Füllverhalten. Wir empfehlen dazu passende Typen, Daten und Muster unter Berücksichtigung der Zielwerte.",
    "台益 PA6 改性材料覆盖 33 个牌号，包括玻纤与碳纤增强、抗冲、阻燃、耐磨、矿物填充及加工改性方向。":
      "Das PA6-Portfolio von Taiyi Polymer umfasst 33 Typen mit Glas- und Carbonfaserverstärkung, Schlagzähmodifizierung, Flammschutz, Verschleißschutz, Mineralfüllung und verarbeitungsorientierten Modifikationen.",
    "33 个 PA6 改性牌号覆盖增强、抗冲、阻燃、耐磨、矿物填充与加工优化方向，为汽车、电子电气和工业注塑件提供多元性能组合。":
      "33 modifizierte PA6-Typen decken Verstärkung, Schlagzähigkeit, Flammschutz, Verschleiß, Mineralfüllung und Prozessoptimierung ab und bieten vielfältige Eigenschaftsprofile für Automobil-, Elektro- und Industriegussteile.",
    "完整牌号目录汇集改性方向、关键性能数据与中文详情，并提供按项目确认的技术资料和样品支持。":
      "Das vollständige Typenverzeichnis bündelt Modifikationsrichtungen und zentrale Leistungsdaten; technische Unterlagen und Muster werden projektbezogen bereitgestellt.",
    "33 个牌号覆盖增强、韧性、阻燃、耐磨与加工改性":
      "33 Typen für Verstärkung, Zähigkeit, Flammschutz, Verschleiß und Verarbeitung",
    "PA6 改性方向": "PA6-Modifikationsrichtungen",
    "从结构增强、抗冲、阻燃到耐磨与矿物填充，不同配方方向对应不同的性能与加工平衡。":
      "Von struktureller Verstärkung über Schlagzähigkeit und Flammschutz bis zu Verschleißschutz und Mineralfüllung bietet jede Formulierungsrichtung ein eigenes Leistungs- und Verarbeitungsprofil.",
    "PA6 改性牌号": "Modifizierte PA6-Typen",
    "33 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Für alle 33 Typen stehen vollständige Details und zentrale Leistungsdaten zur Verfügung. Die reale Eignung ist anhand von Zielwerkzeug, Konditionierung und Bauteilbedingungen zu bestätigen.",
    "PA6 面向的零部件场景": "Bauteilanwendungen für PA6",
    "查看 PA6 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Entdecken Sie typische Werkstoffanforderungen und Lösungen für PA6 in Automobil-, Elektro- und Bewegungsteilen.",
    "PA6 材料支持": "PA6-Werkstoffunterstützung",
    "获取 PA6 牌号、数据与样品支持": "PA6-Typen, Daten und Muster anfragen",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA6 牌号提供数据、资料与样品建议。":
      "Nennen Sie uns Bauteilanwendung und zentrale Leistungsanforderungen. Wir empfehlen passende PA6-Typen, Daten, Unterlagen und Muster.",
    "台益 PA66 改性材料覆盖 37 个牌号，包括增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向。":
      "Das PA66-Portfolio von Taiyi Polymer umfasst 37 Typen für Verstärkung, Flammschutz, Verschleißschutz, Schlagzähigkeit, Mineralfüllung und Maßstabilität.",
    "37 个 PA66 改性牌号覆盖增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向，为汽车、电子电气和工业零部件提供兼顾刚性与耐热的材料组合。":
      "37 modifizierte PA66-Typen decken Verstärkung, Flammschutz, Verschleiß, Schlagzähigkeit, Mineralfüllung und Maßstabilität ab und bieten für Automobil-, Elektro- und Industriebauteile eine ausgewogene Kombination aus Steifigkeit und Wärmebeständigkeit.",
    "37 个牌号覆盖增强、耐热、阻燃、耐磨与尺寸稳定":
      "37 Typen für Verstärkung, Wärmebeständigkeit, Flammschutz, Verschleiß und Maßstabilität",
    "PA66 改性方向": "PA66-Modifikationsrichtungen",
    "从结构增强、阻燃与耐磨到抗冲和矿物填充，不同配方方向对应不同的耐热、刚性与加工平衡。":
      "Von struktureller Verstärkung, Flammschutz und Verschleißschutz bis zu Schlagzähigkeit und Mineralfüllung bietet jede Formulierungsrichtung ein eigenes Verhältnis von Wärmebeständigkeit, Steifigkeit und Verarbeitung.",
    "PA66 改性牌号": "Modifizierte PA66-Typen",
    "37 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Für alle 37 Typen stehen vollständige Details und zentrale Leistungsdaten zur Verfügung. Die reale Eignung ist anhand von Zielwerkzeug, Konditionierung und Bauteilbedingungen zu bestätigen.",
    "PA66 面向的零部件场景": "Bauteilanwendungen für PA66",
    "查看 PA66 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Entdecken Sie typische Werkstoffanforderungen und Lösungen für PA66 in Automobil-, Elektro- und Bewegungsteilen.",
    "PA66 材料支持": "PA66-Werkstoffunterstützung",
    "获取 PA66 牌号、数据与样品支持": "PA66-Typen, Daten und Muster anfragen",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA66 牌号提供数据、资料与样品建议。":
      "Nennen Sie uns Bauteilanwendung und zentrale Leistungsanforderungen. Wir empfehlen passende PA66-Typen, Daten, Unterlagen und Muster.",
    "台益 PPA 改性材料覆盖 5 个玻纤增强、玻纤矿物复合增强及耐磨低摩擦牌号，面向更高温度应用。":
      "Das PPA-Portfolio von Taiyi Polymer umfasst fünf glasfaserverstärkte, glasfaser-mineralverstärkte sowie verschleißarme und reibungsreduzierte Typen für höhere Einsatztemperaturen.",
    "5 个 PPA 改性牌号面向更高温度、刚性与尺寸稳定要求，覆盖玻纤增强、玻纤矿物复合增强及耐磨低摩擦方向。":
      "Fünf modifizierte PPA-Typen für höhere Temperatur-, Steifigkeits- und Maßstabilitätsanforderungen decken Glasfaserverstärkung, Glasfaser-Mineral-Verstärkung sowie Verschleiß- und Reibungsmodifikation ab.",
    "5 个牌号覆盖高温增强、尺寸稳定与耐磨方向":
      "Fünf Typen für Hochtemperaturverstärkung, Maßstabilität und Verschleißschutz",
    "PPA 改性方向": "PPA-Modifikationsrichtungen",
    "玻纤增强、玻纤矿物复合增强与耐磨低摩擦配方，为高温零部件提供不同的结构与功能平衡。":
      "Glasfaserverstärkte, Glasfaser-Mineral-verstärkte sowie verschleißarme und reibungsreduzierte Formulierungen bieten unterschiedliche strukturelle und funktionale Profile für Hochtemperaturbauteile.",
    "PPA 改性牌号": "Modifizierte PPA-Typen",
    "5 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、温度循环与零部件工况确认。":
      "Für alle fünf Typen stehen vollständige Details und zentrale Leistungsdaten zur Verfügung. Die reale Eignung ist anhand von Zielwerkzeug, Temperaturzyklen und Bauteilbedingungen zu bestätigen.",
    "PPA 面向的高温零部件场景": "Hochtemperatur-Bauteilanwendungen für PPA",
    "查看 PPA 在汽车与电子电气零部件中的典型材料需求与解决方案。":
      "Entdecken Sie typische Werkstoffanforderungen und Lösungen für PPA in Automobil-, Elektro- und Elektronikbauteilen.",
    "PPA 材料支持": "PPA-Werkstoffunterstützung",
    "获取 PPA 牌号、数据与样品支持": "PPA-Typen, Daten und Muster anfragen",
    "告诉我们零部件的温度、载荷与尺寸要求，我们将结合现有 PPA 牌号提供数据、资料与样品建议。":
      "Nennen Sie uns Temperatur-, Last- und Maßanforderungen des Bauteils. Wir empfehlen passende PPA-Typen, Daten, Unterlagen und Muster.",
  },
  fr: {
    ...frCategoryCopy,
    材料概览: "Aperçu de la gamme",
    牌号范围: "Gamme de grades",
    相关应用: "Applications associées",
    联系材料团队: "Contacter l’équipe matériaux",
    零部件与工况: "Pièce et conditions d’usage",
    模具与加工: "Moule et transformation",
    数据与样品: "Données et échantillons",
    "PLATFORM® 耐磨与低摩擦 POM 提供 6 个牌号，面向齿轮、轴套、滚轮、导轨及其他运动零件，覆盖 PTFE、MoS2、芳纶纤维等改性体系。":
      "PLATFORM® propose six grades de POM résistant à l’usure et à faible frottement pour engrenages, bagues, rouleaux, guides et autres pièces en mouvement, avec des formulations au PTFE, au MoS2, aux fibres d’aramide et d’autres systèmes.",
    "PLATFORM® 耐磨与低摩擦 POM 采用 PTFE、MoS2、芳纶纤维及其他耐磨改性体系，面向齿轮、轴套、滚轮、导轨等持续滑动或转动的零件。不同牌号在摩擦、磨损、强度与加工性能之间各有侧重。":
      "Les POM PLATFORM® résistant à l’usure et à faible frottement utilisent du PTFE, du MoS2, des fibres d’aramide et d’autres systèmes anti-usure. Ils sont destinés aux engrenages, bagues, rouleaux et guides soumis à un glissement ou une rotation continus, avec des profils distincts de frottement, d’usure, de résistance et de transformation.",
    "6 个牌号均有关键力学与热性能数据，可进一步获取技术文件和样品，用于运动零件的材料比较与零件试验。":
      "Les six grades disposent de données mécaniques et thermiques essentielles. Les documents techniques et les échantillons peuvent être demandés pour comparer les matériaux et réaliser des essais sur pièce.",
    "6 个牌号，面向齿轮、轴套、滚轮与导轨等运动部件":
      "Six grades pour engrenages, bagues, rouleaux, guides et autres pièces en mouvement",
    "耐磨与低摩擦 POM 牌号": "Grades de POM anti-usure et à faible frottement",
    "从 PTFE、MoS2、芳纶纤维到其他耐磨添加体系，6 个牌号提供不同的摩擦、耐磨、强度与加工性能组合，并配套关键力学与热性能数据。":
      "Du PTFE et du MoS2 aux fibres d’aramide et autres additifs anti-usure, six grades offrent différents équilibres entre frottement, usure, résistance et transformation, avec les principales données mécaniques et thermiques.",
    "耐磨 POM 项目支持": "Support projet pour POM anti-usure",
    "为运动部件匹配合适的性能组合":
      "Le bon équilibre de performances pour les pièces en mouvement",
    "提供 6 个牌号的技术数据、文件与样品，供齿轮、轴套、滚轮和导轨等运动部件开展材料比较与零件试验。":
      "Les données techniques, les documents et les échantillons des six grades sont disponibles pour comparer les matériaux et réaliser des essais sur engrenages, bagues, rouleaux ou guides.",
    零件与运动方式: "Pièce et type de mouvement",
    目标性能: "Performances visées",
    "数据、样品与验证": "Données, échantillons et validation",
    产品与应用信息: "Informations produit et applications",
    "这组材料适合哪些零件？":
      "À quelles pièces ces matériaux sont-ils destinés ?",
    "主要面向齿轮、轴套、滚轮、导轨及其他持续运动或滑动的注塑零件，覆盖汽车、电气、卫浴、输送与工业设备等应用。":
      "Ils sont principalement destinés aux engrenages, bagues, rouleaux, guides et autres pièces injectées en mouvement ou en glissement continu, dans l’automobile, l’électrique, le sanitaire, le convoyage et les équipements industriels.",
    "6 个牌号有哪些改性方向？":
      "Quelles modifications couvrent les six grades ?",
    "系列包含 PTFE 填充、MoS2 填充、芳纶纤维增强及其他耐磨添加体系，可提供不同的低摩擦、耐磨、强度与加工性能组合。":
      "La gamme comprend des grades chargés de PTFE ou de MoS2, renforcés de fibres d’aramide et d’autres systèmes anti-usure, avec différents équilibres entre frottement, usure, résistance et transformation.",
    "可以获得哪些项目支持？":
      "Quel accompagnement projet est disponible ?",
    "可查看牌号数据并申请技术文件和样品；试模与零件验证可围绕实际摩擦副和工况展开。":
      "Les données de grade, les documents techniques et les échantillons peuvent être demandés. Les essais de moulage et sur pièce sont définis selon les surfaces en contact et les conditions d’usage réelles.",
    "台益耐候 POM 系列覆盖 4 个不同流动、冲击与外观方向的牌号，适用于户外或光照环境下的注塑零件。":
      "La gamme de POM résistants aux intempéries de Taiyi Polymer comprend quatre grades offrant différents profils d’écoulement, de résistance aux chocs et d’aspect pour les pièces moulées exposées à la lumière ou à l’extérieur.",
    "4 个耐候 POM 牌号覆盖不同流动性、冲击性能、颜色与外观方向，为户外及光照环境下的注塑零件提供更完整的材料选择。":
      "Quatre grades de POM résistants aux intempéries couvrent différents niveaux d’écoulement, de résistance aux chocs, de couleur et d’aspect pour élargir le choix des pièces moulées exposées à la lumière ou à l’extérieur.",
    "牌号组合兼顾耐候方向与基础力学、流动和外观表现，并可根据目标颜色、暴露环境与测试标准提供项目支持。":
      "La gamme associe résistance aux intempéries, propriétés mécaniques, écoulement et aspect, avec un accompagnement adapté à la couleur, à l’environnement d’exposition et à la norme d’essai visés.",
    "4 个牌号覆盖光照、颜色、冲击与外观需求":
      "Quatre grades pour les exigences de lumière, couleur, choc et aspect",
    "耐候 POM 牌号": "Grades de POM résistants aux intempéries",
    "4 个牌号覆盖不同流动、冲击和外观方向；实际耐候表现需结合目标光源、暴露周期、颜色变化与使用环境确认。":
      "Quatre grades couvrent différents profils d’écoulement, de choc et d’aspect. La tenue réelle aux intempéries doit être confirmée selon la source lumineuse, la durée d’exposition, la variation de couleur et l’environnement d’usage visés.",
    耐候材料支持: "Support matériaux pour la tenue aux intempéries",
    "获取耐候 POM 推荐与样品": "Demander une recommandation et des échantillons de POM résistant aux intempéries",
    "告诉我们零部件的光照环境、颜色与外观目标，我们将结合流动和冲击要求提供牌号、数据与样品建议。":
      "Indiquez-nous l’environnement lumineux, la couleur et l’aspect recherchés. Nous proposerons des grades, données et échantillons adaptés aux exigences d’écoulement et de choc.",
    "台益碳纤维增强 POM 覆盖 20% 至 40% 碳纤含量，兼顾高刚度、低收缩、尺寸稳定与受控导电表现。":
      "Les POM renforcés de fibres de carbone de Taiyi Polymer couvrent 20 à 40 % de fibres et associent rigidité élevée, faible retrait, stabilité dimensionnelle et conductivité maîtrisée.",
    "3 个碳纤维增强 POM 牌号覆盖 20%、30% 与 40% 碳纤含量，为高刚度、低收缩、尺寸稳定及受控导电零件提供不同性能层级。":
      "Trois grades de POM renforcés de 20, 30 et 40 % de fibres de carbone offrent plusieurs niveaux de performance pour les pièces exigeant rigidité élevée, faible retrait, stabilité dimensionnelle et conductivité maîtrisée.",
    "牌号组合将结构增强与电性能方向纳入同一材料系列，并提供关键力学、热性能和电阻率数据支持。":
      "La gamme réunit renforcement structurel et fonction électrique dans une même famille, avec les principales données mécaniques, thermiques et de résistivité.",
    "20% 至 40% 碳纤增强，兼顾结构与电性能需求":
      "20 à 40 % de fibres de carbone pour les besoins structurels et électriques",
    "碳纤维增强 POM 牌号": "Grades de POM renforcés de fibres de carbone",
    "3 个牌号覆盖 20% 至 40% 碳纤含量与不同性能层级；实际表现需结合流动、纤维取向、表面和电性能要求确认。":
      "Trois grades couvrent 20 à 40 % de fibres de carbone et différents niveaux de performance. Le comportement réel doit être confirmé selon l’écoulement, l’orientation des fibres, l’aspect de surface et les exigences électriques.",
    碳纤增强材料支持: "Support matériaux renforcés de fibres de carbone",
    "获取碳纤增强 POM 推荐与样品": "Demander une recommandation et des échantillons de POM carbone",
    "告诉我们零部件的刚度、尺寸与电阻率目标，我们将结合碳纤含量和加工条件提供牌号、数据与样品建议。":
      "Indiquez-nous les objectifs de rigidité, de dimensions et de résistivité. Nous proposerons des grades, données et échantillons adaptés au taux de fibres et aux conditions de transformation.",
    "台益导电与抗静电 POM 提供 2 个黑色牌号，为需要受控电阻率与电荷管理的注塑零件提供材料方案。":
      "Taiyi Polymer propose deux grades noirs de POM conducteur ou antistatique pour les pièces moulées exigeant une résistivité maîtrisée et une gestion des charges.",
    "2 个黑色 POM 牌号覆盖不同电阻率方向，为电子电气、输送与自动化等需要导电或抗静电表现的注塑零件提供材料选择。":
      "Deux grades noirs de POM couvrent différents niveaux de résistivité pour les pièces moulées conductrices ou antistatiques destinées à l’électrique, l’électronique, la manutention et l’automatisation.",
    "牌号详情提供表面与体积电阻率、关键力学和热性能数据，项目支持可结合测试方法、环境与零件几何展开。":
      "Les fiches de grade présentent la résistivité de surface et de volume ainsi que les principales données mécaniques et thermiques. L’accompagnement tient compte de la méthode d’essai, de l’environnement et de la géométrie de la pièce.",
    "2 个黑色牌号覆盖不同电阻率与电荷管理方向":
      "Deux grades noirs pour différents niveaux de résistivité et de gestion des charges",
    "导电与抗静电 POM 牌号": "Grades de POM conducteurs et antistatiques",
    "2 个黑色牌号提供不同电阻率方向与关键性能数据；零件级电性能需按约定测试方法、环境与测量位置确认。":
      "Deux grades noirs offrent différents niveaux de résistivité et les principales données de performance. Les propriétés électriques de la pièce doivent être confirmées selon la méthode, l’environnement et la position de mesure convenus.",
    电性能材料支持: "Support matériaux pour fonctions électriques",
    "获取导电与抗静电 POM 推荐": "Demander un POM conducteur ou antistatique",
    "告诉我们目标电阻率、测试方法和零部件工况，我们将提供相关牌号、数据、资料与样品建议。":
      "Indiquez-nous la résistivité cible, la méthode d’essai et les conditions d’usage. Nous proposerons les grades, données, documents et échantillons correspondants.",
    "ETM1500 与 ETM1800 将台益 POM 系列延伸至极高流动范围，适用于薄壁、长流长与填充敏感的注塑模具。":
      "ETM1500 et ETM1800 étendent la gamme POM de Taiyi Polymer vers l’ultra-haut débit pour les parois minces, les longs chemins d’écoulement et les moules sensibles au remplissage.",
    "ETM1500 与 ETM1800 面向薄壁、长流长和填充敏感模具，以极高流动性能拓展复杂精密注塑件的成型空间。":
      "ETM1500 et ETM1800 visent les parois minces, les longs chemins d’écoulement et les moules sensibles au remplissage, en élargissant les possibilités de moulage de pièces de précision complexes grâce à leur très haute fluidité.",
    "两个牌号提供不同的极高流动层级，并保留完整的力学、热性能和收缩数据，支持材料与模具方案协同评估。":
      "Les deux grades offrent différents niveaux de très haute fluidité avec des données mécaniques, thermiques et de retrait complètes pour évaluer conjointement le matériau et le moule.",
    "2 个极高流动牌号，面向薄壁、长流长与复杂填充":
      "Deux grades à très haute fluidité pour parois minces, longs écoulements et remplissages complexes",
    "极高流动 POM 牌号": "Grades de POM à très haute fluidité",
    "ETM1500 与 ETM1800 提供两个极高流动层级；目标零部件仍需在流动、强度、尺寸和成型窗口之间取得平衡。":
      "ETM1500 et ETM1800 offrent deux niveaux de très haute fluidité. La pièce visée doit néanmoins équilibrer écoulement, résistance, dimensions et fenêtre de moulage.",
    高流动材料支持: "Support matériaux à haute fluidité",
    "获取极高流动 POM 数据与样品": "Demander données et échantillons de POM à très haute fluidité",
    "告诉我们壁厚、流长、浇口和当前填充表现，我们将结合目标性能提供牌号、数据与样品建议。":
      "Indiquez-nous l’épaisseur, le chemin d’écoulement, le point d’injection et le remplissage actuel. Nous proposerons des grades, données et échantillons adaptés aux performances visées.",
    "台益 PA6 改性材料覆盖 33 个牌号，包括玻纤与碳纤增强、抗冲、阻燃、耐磨、矿物填充及加工改性方向。":
      "La gamme PA6 de Taiyi Polymer comprend 33 grades renforcés de fibres de verre ou de carbone, modifiés choc, ignifugés, anti-usure, chargés minéraux ou optimisés pour la transformation.",
    "33 个 PA6 改性牌号覆盖增强、抗冲、阻燃、耐磨、矿物填充与加工优化方向，为汽车、电子电气和工业注塑件提供多元性能组合。":
      "Trente-trois grades de PA6 modifié couvrent le renforcement, la résistance aux chocs, l’ignifugation, l’usure, les charges minérales et l’optimisation du procédé pour les pièces automobiles, électriques et industrielles.",
    "完整牌号目录汇集改性方向、关键性能数据与中文详情，并提供按项目确认的技术资料和样品支持。":
      "Le répertoire complet réunit les axes de modification et les principales données de performance; les documents techniques et échantillons sont confirmés selon le projet.",
    "33 个牌号覆盖增强、韧性、阻燃、耐磨与加工改性":
      "33 grades couvrant renforcement, ténacité, ignifugation, usure et transformation",
    "PA6 改性方向": "Axes de modification du PA6",
    "从结构增强、抗冲、阻燃到耐磨与矿物填充，不同配方方向对应不同的性能与加工平衡。":
      "Du renforcement structurel à la résistance aux chocs et à l’ignifugation, jusqu’à l’anti-usure et aux charges minérales, chaque formulation offre un équilibre distinct entre performance et transformation.",
    "PA6 改性牌号": "Grades de PA6 modifié",
    "33 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Les 33 grades disposent de détails complets et des principales données de performance. L’aptitude réelle doit être confirmée selon le moule, le conditionnement et les conditions de la pièce.",
    "PA6 面向的零部件场景": "Applications pièces pour le PA6",
    "查看 PA6 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Découvrez les besoins matière et les solutions typiques du PA6 pour les pièces automobiles, électriques et en mouvement.",
    "PA6 材料支持": "Support matériaux PA6",
    "获取 PA6 牌号、数据与样品支持": "Demander grades, données et échantillons PA6",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA6 牌号提供数据、资料与样品建议。":
      "Indiquez-nous l’usage de la pièce et ses exigences essentielles. Nous proposerons les grades PA6, données, documents et échantillons adaptés.",
    "台益 PA66 改性材料覆盖 37 个牌号，包括增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向。":
      "La gamme PA66 de Taiyi Polymer comprend 37 grades renforcés, ignifugés, anti-usure, modifiés choc, chargés minéraux ou orientés stabilité dimensionnelle.",
    "37 个 PA66 改性牌号覆盖增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向，为汽车、电子电气和工业零部件提供兼顾刚性与耐热的材料组合。":
      "Trente-sept grades de PA66 modifié couvrent renforcement, ignifugation, usure, choc, charges minérales et stabilité dimensionnelle, avec des équilibres de rigidité et de tenue thermique pour les pièces automobiles, électriques et industrielles.",
    "37 个牌号覆盖增强、耐热、阻燃、耐磨与尺寸稳定":
      "37 grades couvrant renforcement, tenue thermique, ignifugation, usure et stabilité dimensionnelle",
    "PA66 改性方向": "Axes de modification du PA66",
    "从结构增强、阻燃与耐磨到抗冲和矿物填充，不同配方方向对应不同的耐热、刚性与加工平衡。":
      "Du renforcement structurel, de l’ignifugation et de l’anti-usure jusqu’à la résistance aux chocs et aux charges minérales, chaque formulation offre un équilibre distinct entre chaleur, rigidité et transformation.",
    "PA66 改性牌号": "Grades de PA66 modifié",
    "37 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Les 37 grades disposent de détails complets et des principales données de performance. L’aptitude réelle doit être confirmée selon le moule, le conditionnement et les conditions de la pièce.",
    "PA66 面向的零部件场景": "Applications pièces pour le PA66",
    "查看 PA66 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Découvrez les besoins matière et les solutions typiques du PA66 pour les pièces automobiles, électriques et en mouvement.",
    "PA66 材料支持": "Support matériaux PA66",
    "获取 PA66 牌号、数据与样品支持": "Demander grades, données et échantillons PA66",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA66 牌号提供数据、资料与样品建议。":
      "Indiquez-nous l’usage de la pièce et ses exigences essentielles. Nous proposerons les grades PA66, données, documents et échantillons adaptés.",
    "台益 PPA 改性材料覆盖 5 个玻纤增强、玻纤矿物复合增强及耐磨低摩擦牌号，面向更高温度应用。":
      "La gamme PPA de Taiyi Polymer comprend cinq grades renforcés de fibres de verre, renforcés fibres-minéraux ou anti-usure à faible frottement pour les applications à plus haute température.",
    "5 个 PPA 改性牌号面向更高温度、刚性与尺寸稳定要求，覆盖玻纤增强、玻纤矿物复合增强及耐磨低摩擦方向。":
      "Cinq grades de PPA modifié répondent à des exigences supérieures de température, de rigidité et de stabilité dimensionnelle, avec des options renforcées de fibres de verre, fibres-minéraux et anti-usure à faible frottement.",
    "5 个牌号覆盖高温增强、尺寸稳定与耐磨方向":
      "Cinq grades pour renforcement à haute température, stabilité dimensionnelle et usure",
    "PPA 改性方向": "Axes de modification du PPA",
    "玻纤增强、玻纤矿物复合增强与耐磨低摩擦配方，为高温零部件提供不同的结构与功能平衡。":
      "Les formulations renforcées de fibres de verre, fibres-minéraux et anti-usure à faible frottement offrent différents équilibres structurels et fonctionnels aux pièces à haute température.",
    "PPA 改性牌号": "Grades de PPA modifié",
    "5 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、温度循环与零部件工况确认。":
      "Les cinq grades disposent de détails complets et des principales données de performance. L’aptitude réelle doit être confirmée selon le moule, les cycles thermiques et les conditions de la pièce.",
    "PPA 面向的高温零部件场景": "Applications de pièces PPA à haute température",
    "查看 PPA 在汽车与电子电气零部件中的典型材料需求与解决方案。":
      "Découvrez les besoins matière et les solutions typiques du PPA pour les pièces automobiles, électriques et électroniques.",
    "PPA 材料支持": "Support matériaux PPA",
    "获取 PPA 牌号、数据与样品支持": "Demander grades, données et échantillons PPA",
    "告诉我们零部件的温度、载荷与尺寸要求，我们将结合现有 PPA 牌号提供数据、资料与样品建议。":
      "Indiquez-nous les exigences de température, de charge et de dimensions. Nous proposerons les grades PPA, données, documents et échantillons adaptés.",
  },
  "pt-br": {
    ...ptBRCategoryCopy,
    材料概览: "Visão geral do portfólio",
    牌号范围: "Portfólio de graus",
    相关应用: "Aplicações relacionadas",
    联系材料团队: "Falar com a equipe de materiais",
    零部件与工况: "Peça e condições de uso",
    模具与加工: "Molde e processamento",
    数据与样品: "Dados e amostras",
    "PLATFORM® 耐磨与低摩擦 POM 提供 6 个牌号，面向齿轮、轴套、滚轮、导轨及其他运动零件，覆盖 PTFE、MoS2、芳纶纤维等改性体系。":
      "PLATFORM® oferece seis graus de POM resistente ao desgaste e de baixo atrito para engrenagens, buchas, roletes, guias e outros componentes móveis, com modificações de PTFE, MoS2, fibra de aramida e outros sistemas.",
    "PLATFORM® 耐磨与低摩擦 POM 采用 PTFE、MoS2、芳纶纤维及其他耐磨改性体系，面向齿轮、轴套、滚轮、导轨等持续滑动或转动的零件。不同牌号在摩擦、磨损、强度与加工性能之间各有侧重。":
      "Os compostos PLATFORM® de POM resistente ao desgaste e de baixo atrito usam PTFE, MoS2, fibra de aramida e outros sistemas antidesgaste. São destinados a engrenagens, buchas, roletes e guias em deslizamento ou rotação contínuos, com diferentes perfis de atrito, desgaste, resistência e processamento.",
    "6 个牌号均有关键力学与热性能数据，可进一步获取技术文件和样品，用于运动零件的材料比较与零件试验。":
      "Os seis graus têm dados mecânicos e térmicos essenciais. Documentos técnicos e amostras podem ser solicitados para comparação dos materiais e ensaios na peça.",
    "6 个牌号，面向齿轮、轴套、滚轮与导轨等运动部件":
      "Seis graus para engrenagens, buchas, roletes, guias e outros componentes móveis",
    "耐磨与低摩擦 POM 牌号": "Graus de POM resistente ao desgaste e de baixo atrito",
    "从 PTFE、MoS2、芳纶纤维到其他耐磨添加体系，6 个牌号提供不同的摩擦、耐磨、强度与加工性能组合，并配套关键力学与热性能数据。":
      "De PTFE e MoS2 a fibra de aramida e outros aditivos antidesgaste, seis graus oferecem diferentes combinações de atrito, desgaste, resistência e processamento, com os principais dados mecânicos e térmicos.",
    "耐磨 POM 项目支持": "Suporte de projeto para POM antidesgaste",
    "为运动部件匹配合适的性能组合":
      "O equilíbrio de desempenho certo para componentes móveis",
    "提供 6 个牌号的技术数据、文件与样品，供齿轮、轴套、滚轮和导轨等运动部件开展材料比较与零件试验。":
      "Os dados técnicos, documentos e amostras dos seis graus estão disponíveis para comparação dos materiais e ensaios em engrenagens, buchas, roletes ou guias.",
    零件与运动方式: "Peça e tipo de movimento",
    目标性能: "Desempenho desejado",
    "数据、样品与验证": "Dados, amostras e validação",
    产品与应用信息: "Informações de produto e aplicação",
    "这组材料适合哪些零件？":
      "Para quais peças estes materiais são indicados?",
    "主要面向齿轮、轴套、滚轮、导轨及其他持续运动或滑动的注塑零件，覆盖汽车、电气、卫浴、输送与工业设备等应用。":
      "São voltados principalmente para engrenagens, buchas, roletes, guias e outras peças injetadas em movimento ou deslizamento contínuo, em aplicações automotivas, elétricas, sanitárias, de transporte e equipamentos industriais.",
    "6 个牌号有哪些改性方向？":
      "Quais modificações os seis graus abrangem?",
    "系列包含 PTFE 填充、MoS2 填充、芳纶纤维增强及其他耐磨添加体系，可提供不同的低摩擦、耐磨、强度与加工性能组合。":
      "A linha inclui graus com PTFE, MoS2, reforço de fibra de aramida e outros sistemas antidesgaste, oferecendo diferentes combinações de baixo atrito, desgaste, resistência e processamento.",
    "可以获得哪些项目支持？": "Que suporte de projeto está disponível?",
    "可查看牌号数据并申请技术文件和样品；试模与零件验证可围绕实际摩擦副和工况展开。":
      "Dados dos graus, documentos técnicos e amostras podem ser solicitados. Os ensaios de moldagem e da peça são definidos conforme as superfícies em contato e as condições reais de uso.",
    "台益耐候 POM 系列覆盖 4 个不同流动、冲击与外观方向的牌号，适用于户外或光照环境下的注塑零件。":
      "A linha de POM resistente às intempéries da Taiyi Polymer inclui quatro graus com diferentes perfis de fluxo, impacto e aparência para peças moldadas expostas à luz ou ao ambiente externo.",
    "4 个耐候 POM 牌号覆盖不同流动性、冲击性能、颜色与外观方向，为户外及光照环境下的注塑零件提供更完整的材料选择。":
      "Quatro graus de POM resistente às intempéries abrangem diferentes níveis de fluxo, impacto, cor e aparência, ampliando as opções para peças moldadas expostas à luz ou ao ambiente externo.",
    "牌号组合兼顾耐候方向与基础力学、流动和外观表现，并可根据目标颜色、暴露环境与测试标准提供项目支持。":
      "O portfólio combina resistência às intempéries com propriedades mecânicas, fluxo e aparência, com suporte conforme a cor, o ambiente de exposição e a norma de ensaio desejados.",
    "4 个牌号覆盖光照、颜色、冲击与外观需求":
      "Quatro graus para requisitos de luz, cor, impacto e aparência",
    "耐候 POM 牌号": "Graus de POM resistente às intempéries",
    "4 个牌号覆盖不同流动、冲击和外观方向；实际耐候表现需结合目标光源、暴露周期、颜色变化与使用环境确认。":
      "Quatro graus abrangem diferentes perfis de fluxo, impacto e aparência. O desempenho real deve ser confirmado conforme a fonte de luz, o período de exposição, a alteração de cor e o ambiente de uso.",
    耐候材料支持: "Suporte de materiais resistentes às intempéries",
    "获取耐候 POM 推荐与样品": "Solicitar recomendação e amostras de POM resistente às intempéries",
    "告诉我们零部件的光照环境、颜色与外观目标，我们将结合流动和冲击要求提供牌号、数据与样品建议。":
      "Informe o ambiente de luz, a cor e a aparência desejados. Recomendaremos graus, dados e amostras considerando os requisitos de fluxo e impacto.",
    "台益碳纤维增强 POM 覆盖 20% 至 40% 碳纤含量，兼顾高刚度、低收缩、尺寸稳定与受控导电表现。":
      "Os compostos de POM reforçado com fibra de carbono da Taiyi Polymer abrangem 20% a 40% de fibra e combinam alta rigidez, baixa contração, estabilidade dimensional e condutividade controlada.",
    "3 个碳纤维增强 POM 牌号覆盖 20%、30% 与 40% 碳纤含量，为高刚度、低收缩、尺寸稳定及受控导电零件提供不同性能层级。":
      "Três graus de POM reforçado com 20%, 30% e 40% de fibra de carbono oferecem diferentes níveis de desempenho para peças que exigem alta rigidez, baixa contração, estabilidade dimensional e condutividade controlada.",
    "牌号组合将结构增强与电性能方向纳入同一材料系列，并提供关键力学、热性能和电阻率数据支持。":
      "O portfólio reúne reforço estrutural e função elétrica na mesma família, com dados mecânicos, térmicos e de resistividade essenciais.",
    "20% 至 40% 碳纤增强，兼顾结构与电性能需求":
      "20% a 40% de fibra de carbono para requisitos estruturais e elétricos",
    "碳纤维增强 POM 牌号": "Graus de POM reforçado com fibra de carbono",
    "3 个牌号覆盖 20% 至 40% 碳纤含量与不同性能层级；实际表现需结合流动、纤维取向、表面和电性能要求确认。":
      "Três graus abrangem 20% a 40% de fibra de carbono e diferentes níveis de desempenho. O comportamento real deve ser confirmado conforme fluxo, orientação das fibras, superfície e requisitos elétricos.",
    碳纤增强材料支持: "Suporte de materiais reforçados com fibra de carbono",
    "获取碳纤增强 POM 推荐与样品": "Solicitar recomendação e amostras de POM com fibra de carbono",
    "告诉我们零部件的刚度、尺寸与电阻率目标，我们将结合碳纤含量和加工条件提供牌号、数据与样品建议。":
      "Informe as metas de rigidez, dimensão e resistividade. Recomendaremos graus, dados e amostras conforme o teor de fibra e as condições de processamento.",
    "台益导电与抗静电 POM 提供 2 个黑色牌号，为需要受控电阻率与电荷管理的注塑零件提供材料方案。":
      "A Taiyi Polymer oferece dois graus pretos de POM condutivo ou antiestático para peças moldadas que exigem resistividade controlada e gerenciamento de carga.",
    "2 个黑色 POM 牌号覆盖不同电阻率方向，为电子电气、输送与自动化等需要导电或抗静电表现的注塑零件提供材料选择。":
      "Dois graus pretos de POM abrangem diferentes níveis de resistividade para peças moldadas condutivas ou antiestáticas em aplicações elétricas, eletrônicas, de transporte e automação.",
    "牌号详情提供表面与体积电阻率、关键力学和热性能数据，项目支持可结合测试方法、环境与零件几何展开。":
      "Os detalhes dos graus apresentam resistividade superficial e volumétrica, além dos principais dados mecânicos e térmicos. O suporte considera o método de ensaio, o ambiente e a geometria da peça.",
    "2 个黑色牌号覆盖不同电阻率与电荷管理方向":
      "Dois graus pretos para diferentes níveis de resistividade e gerenciamento de carga",
    "导电与抗静电 POM 牌号": "Graus de POM condutivo e antiestático",
    "2 个黑色牌号提供不同电阻率方向与关键性能数据；零件级电性能需按约定测试方法、环境与测量位置确认。":
      "Dois graus pretos oferecem diferentes níveis de resistividade e dados de desempenho essenciais. O desempenho elétrico da peça deve ser confirmado conforme método, ambiente e posição de medição acordados.",
    电性能材料支持: "Suporte de materiais para funções elétricas",
    "获取导电与抗静电 POM 推荐": "Solicitar POM condutivo ou antiestático",
    "告诉我们目标电阻率、测试方法和零部件工况，我们将提供相关牌号、数据、资料与样品建议。":
      "Informe a resistividade desejada, o método de ensaio e as condições de uso. Recomendaremos os graus, dados, documentos e amostras correspondentes.",
    "ETM1500 与 ETM1800 将台益 POM 系列延伸至极高流动范围，适用于薄壁、长流长与填充敏感的注塑模具。":
      "ETM1500 e ETM1800 ampliam o portfólio de POM da Taiyi Polymer para fluxo ultra-alto, atendendo paredes finas, trajetos longos e moldes sensíveis ao preenchimento.",
    "ETM1500 与 ETM1800 面向薄壁、长流长和填充敏感模具，以极高流动性能拓展复杂精密注塑件的成型空间。":
      "ETM1500 e ETM1800 são voltados a paredes finas, trajetos longos e moldes sensíveis ao preenchimento, ampliando as possibilidades de moldagem de peças de precisão complexas com fluxo ultra-alto.",
    "两个牌号提供不同的极高流动层级，并保留完整的力学、热性能和收缩数据，支持材料与模具方案协同评估。":
      "Os dois graus oferecem diferentes níveis de fluxo ultra-alto, com dados mecânicos, térmicos e de contração completos para avaliar conjuntamente material e molde.",
    "2 个极高流动牌号，面向薄壁、长流长与复杂填充":
      "Dois graus de fluxo ultra-alto para paredes finas, trajetos longos e preenchimento complexo",
    "极高流动 POM 牌号": "Graus de POM de fluxo ultra-alto",
    "ETM1500 与 ETM1800 提供两个极高流动层级；目标零部件仍需在流动、强度、尺寸和成型窗口之间取得平衡。":
      "ETM1500 e ETM1800 oferecem dois níveis de fluxo ultra-alto. A peça final ainda deve equilibrar fluxo, resistência, dimensões e janela de moldagem.",
    高流动材料支持: "Suporte de materiais de alto fluxo",
    "获取极高流动 POM 数据与样品": "Solicitar dados e amostras de POM de fluxo ultra-alto",
    "告诉我们壁厚、流长、浇口和当前填充表现，我们将结合目标性能提供牌号、数据与样品建议。":
      "Informe espessura, trajeto de fluxo, ponto de injeção e preenchimento atual. Recomendaremos graus, dados e amostras conforme o desempenho desejado.",
    "台益 PA6 改性材料覆盖 33 个牌号，包括玻纤与碳纤增强、抗冲、阻燃、耐磨、矿物填充及加工改性方向。":
      "O portfólio de PA6 da Taiyi Polymer inclui 33 graus com reforço de fibra de vidro ou carbono, modificação de impacto, retardância à chama, resistência ao desgaste, carga mineral e otimização de processamento.",
    "33 个 PA6 改性牌号覆盖增强、抗冲、阻燃、耐磨、矿物填充与加工优化方向，为汽车、电子电气和工业注塑件提供多元性能组合。":
      "Trinta e três graus de PA6 modificado abrangem reforço, impacto, retardância à chama, desgaste, carga mineral e otimização de processo para peças automotivas, elétricas e industriais.",
    "完整牌号目录汇集改性方向、关键性能数据与中文详情，并提供按项目确认的技术资料和样品支持。":
      "O diretório completo reúne as direções de modificação e os principais dados de desempenho; documentos técnicos e amostras são confirmados conforme o projeto.",
    "33 个牌号覆盖增强、韧性、阻燃、耐磨与加工改性":
      "33 graus para reforço, tenacidade, retardância à chama, desgaste e processamento",
    "PA6 改性方向": "Direções de modificação do PA6",
    "从结构增强、抗冲、阻燃到耐磨与矿物填充，不同配方方向对应不同的性能与加工平衡。":
      "Do reforço estrutural e impacto à retardância à chama, resistência ao desgaste e carga mineral, cada formulação oferece um equilíbrio próprio entre desempenho e processamento.",
    "PA6 改性牌号": "Graus de PA6 modificado",
    "33 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Os 33 graus apresentam detalhes completos e os principais dados de desempenho. A adequação real deve ser confirmada conforme o molde, o condicionamento e as condições da peça.",
    "PA6 面向的零部件场景": "Aplicações de peças em PA6",
    "查看 PA6 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Veja requisitos de materiais e soluções típicas de PA6 para peças automotivas, elétricas e móveis.",
    "PA6 材料支持": "Suporte de materiais PA6",
    "获取 PA6 牌号、数据与样品支持": "Solicitar graus, dados e amostras de PA6",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA6 牌号提供数据、资料与样品建议。":
      "Informe a aplicação da peça e os requisitos essenciais. Recomendaremos graus de PA6, dados, documentos e amostras adequados.",
    "台益 PA66 改性材料覆盖 37 个牌号，包括增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向。":
      "O portfólio de PA66 da Taiyi Polymer inclui 37 graus para reforço, retardância à chama, resistência ao desgaste, impacto, carga mineral e estabilidade dimensional.",
    "37 个 PA66 改性牌号覆盖增强、阻燃、耐磨、抗冲、矿物填充与尺寸稳定方向，为汽车、电子电气和工业零部件提供兼顾刚性与耐热的材料组合。":
      "Trinta e sete graus de PA66 modificado abrangem reforço, retardância à chama, desgaste, impacto, carga mineral e estabilidade dimensional, oferecendo equilíbrio entre rigidez e resistência térmica para peças automotivas, elétricas e industriais.",
    "37 个牌号覆盖增强、耐热、阻燃、耐磨与尺寸稳定":
      "37 graus para reforço, resistência térmica, retardância à chama, desgaste e estabilidade dimensional",
    "PA66 改性方向": "Direções de modificação do PA66",
    "从结构增强、阻燃与耐磨到抗冲和矿物填充，不同配方方向对应不同的耐热、刚性与加工平衡。":
      "Do reforço estrutural, retardância à chama e resistência ao desgaste até impacto e carga mineral, cada formulação oferece um equilíbrio próprio entre calor, rigidez e processamento.",
    "PA66 改性牌号": "Graus de PA66 modificado",
    "37 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、调湿状态与零部件工况确认。":
      "Os 37 graus apresentam detalhes completos e os principais dados de desempenho. A adequação real deve ser confirmada conforme o molde, o condicionamento e as condições da peça.",
    "PA66 面向的零部件场景": "Aplicações de peças em PA66",
    "查看 PA66 在汽车、电子电气及运动部件中的典型材料需求与解决方案。":
      "Veja requisitos de materiais e soluções típicas de PA66 para peças automotivas, elétricas e móveis.",
    "PA66 材料支持": "Suporte de materiais PA66",
    "获取 PA66 牌号、数据与样品支持": "Solicitar graus, dados e amostras de PA66",
    "告诉我们零部件用途和关键性能要求，我们将结合现有 PA66 牌号提供数据、资料与样品建议。":
      "Informe a aplicação da peça e os requisitos essenciais. Recomendaremos graus de PA66, dados, documentos e amostras adequados.",
    "台益 PPA 改性材料覆盖 5 个玻纤增强、玻纤矿物复合增强及耐磨低摩擦牌号，面向更高温度应用。":
      "O portfólio de PPA da Taiyi Polymer inclui cinco graus reforçados com fibra de vidro, fibra e mineral, além de opções antidesgaste e de baixo atrito para aplicações de temperatura mais alta.",
    "5 个 PPA 改性牌号面向更高温度、刚性与尺寸稳定要求，覆盖玻纤增强、玻纤矿物复合增强及耐磨低摩擦方向。":
      "Cinco graus de PPA modificado atendem requisitos mais altos de temperatura, rigidez e estabilidade dimensional, com opções reforçadas com fibra de vidro, fibra e mineral, além de antidesgaste e baixo atrito.",
    "5 个牌号覆盖高温增强、尺寸稳定与耐磨方向":
      "Cinco graus para reforço em alta temperatura, estabilidade dimensional e desgaste",
    "PPA 改性方向": "Direções de modificação do PPA",
    "玻纤增强、玻纤矿物复合增强与耐磨低摩擦配方，为高温零部件提供不同的结构与功能平衡。":
      "Formulações com fibra de vidro, fibra e mineral, além de antidesgaste e baixo atrito, oferecem diferentes equilíbrios estruturais e funcionais para peças de alta temperatura.",
    "PPA 改性牌号": "Graus de PPA modificado",
    "5 个牌号均提供完整中文详情与关键性能数据；实际适用性需结合目标模具、温度循环与零部件工况确认。":
      "Os cinco graus apresentam detalhes completos e os principais dados de desempenho. A adequação real deve ser confirmada conforme o molde, os ciclos térmicos e as condições da peça.",
    "PPA 面向的高温零部件场景": "Aplicações de peças de PPA em alta temperatura",
    "查看 PPA 在汽车与电子电气零部件中的典型材料需求与解决方案。":
      "Veja requisitos de materiais e soluções típicas de PPA para peças automotivas, elétricas e eletrônicas.",
    "PPA 材料支持": "Suporte de materiais PPA",
    "获取 PPA 牌号、数据与样品支持": "Solicitar graus, dados e amostras de PPA",
    "告诉我们零部件的温度、载荷与尺寸要求，我们将结合现有 PPA 牌号提供数据、资料与样品建议。":
      "Informe os requisitos de temperatura, carga e dimensão da peça. Recomendaremos graus de PPA, dados, documentos e amostras adequados.",
  },
} as const;
