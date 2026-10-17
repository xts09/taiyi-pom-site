import { selectionEditorialLocaleOverrides } from "./selectionEditorialLocaleOverrides.ts";
import type { LocalizedUrlSegment } from "./config.ts";
import { applicationNarrativeLocaleOverrides } from "./applicationNarrativeLocaleOverrides.ts";
import { aboutLocaleOverrides } from "./aboutLocaleOverrides.ts";
import { automotiveExpandedLocaleOverrides } from "./automotiveExpandedLocaleOverrides.ts";
import { componentDetailLocaleOverrides } from "./componentDetailLocaleOverrides.ts";
import { categoryLocaleOverrides } from "./categoryLocaleOverrides.ts";
import { ems102LocaleOverrides } from "./ems102LocaleOverrides.ts";
import { functionalPomLocaleOverrides } from "./functionalPomLocaleOverrides.ts";
import { pomSelectionLocaleOverrides } from "./pomSelectionLocaleOverrides.ts";
import { copyAuditResourceLocaleOverrides } from "./copyAuditResourceLocaleOverrides.ts";

type TranslationOverrides = Readonly<Record<string, string>>;

export const expandedLocaleOverrides: Partial<
  Record<LocalizedUrlSegment, TranslationOverrides>
> = {
  de: {
    "提交零件功能、现用材料及载荷、运动方式等关键工况，获取针对性的候选牌号建议、物性对比资料与试模样品支持。已有模具、关键尺寸或文件要求可一并提供。": "Senden Sie Bauteilfunktion, bisherigen Werkstoff und die wichtigsten Einsatzbedingungen wie Last und Bewegungsart. Sie erhalten passende Typenvorschläge, vergleichende Werkstoffdaten und Unterstützung mit Material für Spritzgießversuche. Ergänzen Sie vorhandene Werkzeugdaten, kritische Maße und Dokumentenanforderungen.",
    ...selectionEditorialLocaleOverrides['de'],
    "碳纤维增强": "Kohlenstofffaserverstärkt",
    "{{grade}} 是 PA6 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} ist ein PA6-Typ mit Glasfaserverstärkung. Für Strukturteile mit höheren Anforderungen an Steifigkeit, Festigkeit, Wärmeverhalten und Tragfähigkeit.",
    "{{grade}} 是 PA6 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} ist ein mineralgefüllter PA6-Typ. Maßkontrolle, Schwindung, Verzug und Oberflächenqualität gehören zu den Auswahlkriterien.",
    "{{grade}} 是 PA6 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} ist ein PA6-Typ mit Kohlenstofffaserverstärkung. Die Auswahl berücksichtigt Steifigkeit, Festigkeit, Maßhaltigkeit und elektrisches Verhalten.",
    "{{grade}} 是 PA6 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} ist ein PA6-Typ für Entformungsanforderungen. Bei komplexen Spritzgussteilen zählen Entformung, Oberfläche und Verarbeitungsstabilität zur Werkstoffauswahl.",
    "{{grade}} 是 PA6 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} ist ein schlagzähmodifizierter PA6-Typ. Für Bauteile mit höheren Anforderungen an Zähigkeit, Kerbempfindlichkeit und Schlagverhalten bei niedrigen Temperaturen.",
    "{{grade}} 是 PA6 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} ist ein flammschutzmodifizierter PA6-Typ. Die Auswahl betrifft Flammverhalten, elektrische Eigenschaften und mechanische Bauteilanforderungen.",
    "{{grade}} 是 PA6 V-0 阻燃牌号。用于需要 V-0 阻燃方向并兼顾结构性能的电气零部件。": "{{grade}} ist ein PA6-Typ für V-0-Flammschutzanforderungen. Die Werkstoffauswahl für elektrische Bauteile berücksichtigt auch deren mechanische Anforderungen.",
    "{{grade}} 是 PA66 玻璃微珠填充牌号。用于评估尺寸稳定性、收缩均衡与较低各向异性。": "{{grade}} ist ein PA66-Typ mit Glaskugelfüllung. Die Werkstoffauswahl betrifft Maßhaltigkeit, ausgewogene Schwindung und geringere Anisotropie.",
    "{{grade}} 是 PA66 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} ist ein PA66-Typ mit Glasfaser- und Mineralverstärkung. Für Bauteile, bei denen Steifigkeit, Wärmeverhalten, Maßkontrolle und Verzug gemeinsam betrachtet werden.",
    "{{grade}} 是 PA66 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} ist ein PA66-Typ mit Glasfaserverstärkung. Für Strukturteile mit höheren Anforderungen an Steifigkeit, Festigkeit, Wärmeverhalten und Tragfähigkeit.",
    "{{grade}} 是 PA66 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} ist ein mineralgefüllter PA66-Typ. Maßkontrolle, Schwindung, Verzug und Oberflächenqualität gehören zu den Auswahlkriterien.",
    "{{grade}} 是 PA66 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} ist ein PA66-Typ für Verschleiß- und Reibungsanforderungen. Für gleitende, rotierende und hin- und herbewegte Bauteile.",
    "{{grade}} 是 PA66 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} ist ein PA66-Typ mit Kohlenstofffaserverstärkung. Die Auswahl berücksichtigt Steifigkeit, Festigkeit, Maßhaltigkeit und elektrisches Verhalten.",
    "{{grade}} 是 PA66 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} ist ein PA66-Typ für Entformungsanforderungen. Bei komplexen Spritzgussteilen zählen Entformung, Oberfläche und Verarbeitungsstabilität zur Werkstoffauswahl.",
    "{{grade}} 是 PA66 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} ist ein schlagzähmodifizierter PA66-Typ. Für Bauteile mit höheren Anforderungen an Zähigkeit, Kerbempfindlichkeit und Schlagverhalten bei niedrigen Temperaturen.",
    "{{grade}} 是 PA66 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} ist ein flammschutzmodifizierter PA66-Typ. Die Auswahl betrifft Flammverhalten, elektrische Eigenschaften und mechanische Bauteilanforderungen.",
    "{{grade}} 是 PPA 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} ist ein PPA-Typ mit Glasfaser- und Mineralverstärkung. Für Bauteile, bei denen Steifigkeit, Wärmeverhalten, Maßkontrolle und Verzug gemeinsam betrachtet werden.",
    "{{grade}} 是 PPA 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} ist ein PPA-Typ mit Glasfaserverstärkung. Für Strukturteile mit höheren Anforderungen an Steifigkeit, Festigkeit, Wärmeverhalten und Tragfähigkeit.",
    "{{grade}} 是 PPA 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} ist ein PPA-Typ für Verschleiß- und Reibungsanforderungen. Für gleitende, rotierende und hin- und herbewegte Bauteile.",
    "零部件表现": "Bauteilverhalten",
    "排查重点": "Prüfpunkte",
    "询盘资料": "Angaben zur Anfrage",
    "讨论零部件的材料需求": "Werkstoffanforderungen für Ihr Bauteil besprechen",
    "可附图纸、现用材料和使用条件，便于我们提供相关牌号资料。": "Fügen Sie eine Zeichnung, den derzeitigen Werkstoff und die Einsatzbedingungen bei, damit wir passende Typdaten bereitstellen können.",
    "可提供的资料与建议": "Werkstoffdaten und Bewertungsmöglichkeiten",
    "使用条件与测试参考": "Einsatzbedingungen und Prüfreferenzen",
    "相关技术资料": "Zugehörige technische Unterlagen",
    "从齿轮、轴套、阀芯等零部件查看结构特点、使用工况和相关材料。": "Entdecken Sie Geometrie, Betriebsbedingungen und relevante Werkstoffe für Zahnräder, Buchsen, Ventilschieber und weitere Spritzgussteile.",
    "选材依据": "Grundlagen der Werkstoffauswahl",
    "载荷、运动、环境与尺寸要求影响材料选择；模具方案和加工条件则关系到零件成型表现。": "Last, Bewegung, Umgebung und Maße beeinflussen die Werkstoffauswahl. Werkzeugkonzept und Verarbeitungsbedingungen bestimmen das Formverhalten des Bauteils mit.",
    "获取相关牌号资料": "Passende Werkstoffdaten anfordern",
    "告诉我们零部件用途、使用工况和当前材料，获取相关牌号资料，并讨论材料与样品需求。": "Nennen Sie uns die Bauteilfunktion, Betriebsbedingungen und den derzeitigen Werkstoff, um passende Typdaten anzufordern und Ihren Werkstoff- und Musterbedarf zu besprechen.",
    "牌号资料": "Werkstoffdaten",
    "应用与材料": "Anwendungen und Werkstoffe",
    "部件功能与使用工况": "Bauteilfunktion und Betriebsbedingungen",
    "机构、运动方式、装配配合与尺寸要求共同影响材料选择。": "Mechanik, Bewegung, Passungen und Maßanforderungen beeinflussen gemeinsam die Werkstoffauswahl.",
    "了解典型部件的结构、载荷、运动方式及使用环境。": "Entdecken Sie Geometrie, Last, Bewegung und Einsatzumgebung typischer Bauteile.",
    "相关零部件选材指南": "Leitfäden zur Werkstoffauswahl für ähnliche Bauteile",
    "相关材料": "Relevante Werkstoffe",
    "比较相关 POM 材料的性能特点和典型用途。": "Vergleichen Sie Eigenschaften und typische Einsatzgebiete relevanter POM-Werkstoffe.",
    "选材要点": "Auswahlkriterien",
    "提供零部件用途、使用工况和材料要求，获取相关牌号资料，并讨论样品需求。": "Teilen Sie uns die Bauteilfunktion, Betriebsbedingungen und Werkstoffanforderungen mit, um passende Typdaten anzufordern und Ihren Musterbedarf zu besprechen.",
    "注塑零部件的材料选择": "Werkstoffauswahl für Spritzgussteile",
    "改性 POM 及精选工程塑料，面向汽车、电子电气和工业设备中的功能性注塑件。按行业或零部件浏览材料特点、牌号数据与相关技术资料。": "Modifiziertes POM und ausgewählte technische Kunststoffe für funktionale Spritzgussteile in Fahrzeugen, Elektrogeräten und Industrieanlagen. Entdecken Sie Werkstoffeigenschaften, Typdaten und technische Leitfäden nach Branche oder Bauteil.",
    "查看各应用中的典型部件、主要工况和相关材料特点。": "Entdecken Sie typische Bauteile, Betriebsbedingungen und Werkstoffeigenschaften für die jeweilige Anwendung.",
    "ETM090U 是中等流动耐候 POM 牌号，面向汽车、电子电气、卫浴和精密注塑件的选材。": "ETM090U ist ein witterungsmodifizierter POM-Typ mit mittlerer Fließfähigkeit für Fahrzeug-, Elektro-, Elektronik-, Sanitär- und Präzisionsspritzgussteile.",
    "ETM100PU 是高流动耐候 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的充模与光照环境需求。": "ETM100PU ist ein hochfließender, witterungsmodifizierter POM-Typ für Fahrzeug-, Elektro-, Elektronik-, Sanitär- und Industriespritzgussteile mit Anforderungen an Formfüllung und Lichtexposition.",
    "EDR180U 是耐候方向的 POM 牌号，面向同时需要冲击韧性与哑光外观的零件。": "EDR180U ist ein POM-Typ für Witterungsanforderungen an Bauteile, bei denen Schlagzähigkeit und eine matte Oberfläche zusammen gefragt sind.",
    "EDR2000ZD-UV 是高抗冲、耐紫外与耐老化方向的 POM 牌号，选材关注光照环境下的外观与性能保持。": "EDR2000ZD-UV ist ein POM-Typ für Anforderungen an Schlagzähigkeit, UV- und Alterungsverhalten. Die Auswahl berücksichtigt den Erhalt von Aussehen und Eigenschaften bei Lichtexposition.",
    "EGH202H 含 10% 玻璃纤维，面向汽车、电子电气、卫浴和工业注塑件的刚度、强度、收缩与热性能需求。": "EGH202H ist ein POM-Typ mit 10 % Glasfaser für Fahrzeug-, Elektro-, Elektronik-, Sanitär- und Industriespritzgussteile. Die Auswahl betrifft Steifigkeit, Festigkeit, Schwindung und thermische Eigenschaften.",
    "EGH302H 含 15% 玻璃纤维，提供介于标准和更高增强方向之间的强度、刚度、收缩及加工选材数据。": "EGH302H ist ein POM-Typ mit 15 % Glasfaser. Seine Daten zu Festigkeit, Steifigkeit, Schwindung und Verarbeitung unterstützen den Vergleich zwischen Standard- und stärker verstärkten Typen.",
    "EGH402H 含 20% 玻璃纤维，面向功能与结构件的较高刚度、较低收缩及耐热需求。": "EGH402H ist ein POM-Typ mit 20 % Glasfaser für Funktions- und Strukturteile mit Anforderungen an höhere Steifigkeit, geringere Schwindung und thermisches Verhalten.",
    "EGH402T 含 20% 玻璃纤维，兼顾注塑流动、刚度与尺寸控制的选材需求。": "EGH402T ist ein POM-Typ mit 20 % Glasfaser für die gemeinsame Betrachtung von Spritzgussfließfähigkeit, Steifigkeit und Maßkontrolle.",
    "EGH502T 含 25% 玻璃纤维，面向较高刚度、较低收缩与受控流动性的注塑需求。": "EGH502T ist ein POM-Typ mit 25 % Glasfaser für Spritzgussanforderungen an höhere Steifigkeit, geringere Schwindung und kontrollierte Fließfähigkeit.",
    "EGH580H 含 25% 玻璃纤维，面向零部件的弯曲性能、刚度与尺寸控制需求。": "EGH580H ist ein POM-Typ mit 25 % Glasfaser für Bauteile mit Anforderungen an Biegeeigenschaften, Steifigkeit und Maßkontrolle.",
    "EGH580T 含 25% 玻璃纤维，选材兼顾高刚度、冲击性能与加工流动性。": "EGH580T ist ein POM-Typ mit 25 % Glasfaser für die gemeinsame Betrachtung von hoher Steifigkeit, Schlagzähigkeit und Verarbeitungsfließfähigkeit.",
    "EGH602H 含 30% 玻璃纤维，面向功能与精密零件的较高刚度、尺寸稳定和较低收缩需求。": "EGH602H ist ein POM-Typ mit 30 % Glasfaser für Funktions- und Präzisionsteile mit Anforderungen an höhere Steifigkeit, Maßhaltigkeit und geringere Schwindung.",
    "EGH602T 含 30% 玻璃纤维，面向较低注塑收缩、增强刚度与稳定加工的零部件需求。": "EGH602T ist ein POM-Typ mit 30 % Glasfaser für Bauteile mit Anforderungen an geringere Spritzgussschwindung, erhöhte Steifigkeit und stabile Verarbeitung.",
    "ECF200 是含 20% 碳纤维的黑色 POM 牌号，选材关注刚度、低收缩、尺寸稳定与导电方向。": "ECF200 ist ein schwarzer POM-Typ mit 20 % Kohlenstofffaser. Die Auswahl berücksichtigt Steifigkeit, geringe Schwindung, Maßhaltigkeit und Anforderungen an die elektrische Leitfähigkeit.",
    "ECF300 是含 30% 碳纤维的黑色 POM 牌号，面向高刚度、低收缩、尺寸稳定及导电方向的选材。": "ECF300 ist ein schwarzer POM-Typ mit 30 % Kohlenstofffaser für Anforderungen an hohe Steifigkeit, geringe Schwindung, Maßhaltigkeit und elektrische Leitfähigkeit.",
    "ECF400 是含 40% 碳纤维的黑色 POM 牌号，面向更高刚度、尺寸稳定及导电方向的选材。": "ECF400 ist ein schwarzer POM-Typ mit 40 % Kohlenstofffaser für Anforderungen an höhere Steifigkeit, Maßhaltigkeit und elektrische Leitfähigkeit.",
    "EGH25CN 是黑色 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的受控电阻率需求。": "EGH25CN ist ein schwarzer POM-Typ für Fahrzeug-, Elektro-, Elektronik-, Sanitär- und Industriespritzgussteile mit Anforderungen an einen definierten elektrischen Widerstand.",
    "ECN1003B 是黑色导电 POM 牌号，面向电子零件、抗静电注塑件和功能塑料零件的较低电阻率需求。": "ECN1003B ist ein schwarzer, elektrisch leitfähiger POM-Typ für Elektronikteile, antistatische Spritzgussteile und funktionale Kunststoffteile mit Anforderungen an einen geringeren spezifischen Widerstand.",
    "EDR100 是高抗冲、耐低温 POM 牌号，面向比标准 POM 更注重韧性的功能注塑件。": "EDR100 ist ein schlagzäher POM-Typ für niedrige Temperaturen und funktionale Spritzgussteile mit höheren Zähigkeitsanforderungen als bei Standard-POM.",
    "EHI100ST 是高抗冲、耐低温 POM 牌号，面向需要平衡刚性与韧性的注塑件。": "EHI100ST ist ein schlagzäher POM-Typ für niedrige Temperaturen und Spritzgussteile mit Anforderungen an das Verhältnis von Steifigkeit und Zähigkeit.",
    "EHI202T 是高抗冲、耐低温 POM 牌号，面向汽车、电气、卫浴和工业注塑件的韧性、流动与力学性能需求。": "EHI202T ist ein schlagzäher POM-Typ für niedrige Temperaturen in Fahrzeug-, Elektro-, Sanitär- und Industriespritzgussteilen. Zähigkeit, Fließfähigkeit und mechanische Eigenschaften bestimmen die Auswahl.",
    "EHI602T 是高抗冲、耐低温 POM 牌号，面向对冲击韧性与伸长率有更高要求的注塑件。": "EHI602T ist ein schlagzäher POM-Typ für niedrige Temperaturen und Spritzgussteile mit höheren Anforderungen an Schlagzähigkeit und Dehnung.",
    "ETM270H 是耐磨 POM 牌号，面向齿轮、滑动件、轴套和功能注塑件的充模、拉伸及弯曲性能需求。": "ETM270H ist ein verschleißmodifizierter POM-Typ für Zahnräder, Gleitteile, Buchsen und funktionale Spritzgussteile mit Anforderungen an Formfüllung, Zug- und Biegeeigenschaften.",
    "EPAF100A 是芳纶纤维改性的高耐磨 POM 牌号，选材关注刚度、磨耗、尺寸与耐热表现。": "EPAF100A ist ein aramidfasermodifizierter POM-Typ für Verschleißanwendungen. Die Werkstoffauswahl berücksichtigt Steifigkeit, Verschleiß, Maße und thermisches Verhalten.",
    "ENM1040 采用耐磨添加剂体系，面向滑动件、齿轮和功能注塑件的耐磨与加工需求。": "ENM1040 ist ein POM-Typ mit Verschleißadditiven für Gleitteile, Zahnräder und funktionale Spritzgussteile. Verschleißverhalten und Verarbeitung gehören zur Auswahl.",
    "EDM-111 是高耐磨 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的耐磨与稳定加工需求。": "EDM-111 ist ein verschleißmodifizierter POM-Typ für Fahrzeug-, Elektro-, Elektronik-, Sanitär- und Industriespritzgussteile mit Anforderungen an Verschleißverhalten und stabile Verarbeitung.",
    "EMS162 是 MoS2 填充的黑色高耐磨 POM 牌号，面向滑动件、汽车功能件和工业注塑件的耐磨与力学性能需求。": "EMS162 ist ein schwarzer, mit MoS2 gefüllter POM-Typ für Gleitteile, Fahrzeugfunktionsteile und industrielle Spritzgussteile mit Anforderungen an Verschleißverhalten und mechanische Eigenschaften.",
    "ETM090NC 是标准基础 POM 牌号，面向汽车、电气、卫浴和工业注塑件的强度、尺寸稳定与充模需求。": "ETM090NC ist ein Standard-POM-Typ für Spritzgussteile in Fahrzeugen, Elektrogeräten, Sanitäranwendungen und Industrie. Die Auswahl betrifft Festigkeit, Maßhaltigkeit und Formfüllung.",
    "ETM130 是中等流动基础 POM 牌号，兼顾加工稳定性和力学性能，用于汽车、电气电子及卫浴注塑件的选材。": "ETM130 ist ein Basis-POM-Typ mit mittlerer Fließfähigkeit für Fahrzeug-, Elektro-, Elektronik- und Sanitärteile. Er verbindet Verarbeitungsstabilität mit ausgewogenen mechanischen Eigenschaften.",
    "ETM270 是高流动基础 POM 牌号，面向薄壁、精密与通用注塑件的充模、力学和尺寸需求。": "ETM270 ist ein hochfließender Basis-POM-Typ für dünnwandige, präzise und allgemeine Spritzgussteile mit Anforderungen an Formfüllung, mechanische Eigenschaften und Maße.",
    "ETM1500 是超高流动基础 POM 牌号，面向几何复杂、充模敏感的注塑件，兼顾充模与零件力学性能需求。": "ETM1500 ist ein Basis-POM-Typ mit sehr hoher Fließfähigkeit für komplexe, füllkritische Spritzgussteile. Formfüllung und mechanische Bauteileigenschaften gehören zur Werkstoffauswahl.",
    "ETM1800 是超高流动基础 POM 牌号，面向较长流路的复杂注塑件及其零件性能需求。": "ETM1800 ist ein Basis-POM-Typ mit sehr hoher Fließfähigkeit für komplexe Spritzgussteile mit langen Fließwegen und bauteilspezifischen Leistungsanforderungen.",
    "POM 耐磨测试 Benchmark": "POM-Verschleißtest-Benchmark",
    "报告记录按工况分组，附测量值、过程曲线和现有试样照片。":
      "Prüfberichte nach Prüfbedingungen gruppiert, mit Messwerten, Verlaufskurven und vorhandenen Probenfotos.",
    "SPUN-9200 PA66 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Werkstoffdaten für SPUN-9200 PA66 mit Glasfaserverstärkung, einschließlich Dichte, Zugfestigkeit, Wärmeformbeständigkeit und vollständiger Eigenschaftstabelle.",
    "SPUN-4500 PPA 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Werkstoffdaten für SPUN-4500 PPA mit Glasfaserverstärkung, einschließlich Dichte, Zugfestigkeit, Wärmeformbeständigkeit und vollständiger Eigenschaftstabelle.",
    "阻燃等级按牌号与项目确认": "Flammverhalten für den Werkstofftyp und das Projekt bestätigen",
    吸水率: "Wasseraufnahme",
    注塑收缩率: "Formschwindung",
    熔融温度: "Schmelztemperatur",
    简支梁缺口冲击强度: "Kerbschlagzähigkeit nach Charpy",
    ...categoryLocaleOverrides.de,
    ...ems102LocaleOverrides.de,
    ...functionalPomLocaleOverrides.de,
    ...aboutLocaleOverrides.de,
    ...automotiveExpandedLocaleOverrides.de,
    ...applicationNarrativeLocaleOverrides.de,
    ...componentDetailLocaleOverrides.de,
    ...pomSelectionLocaleOverrides.de,
    ...copyAuditResourceLocaleOverrides.de,
    "IC 周转托盘": "IC-Handling-Trays",
    精密塑料齿轮: "Präzisionszahnräder aus Kunststoff",
    "聚焦改性 POM 的工程塑料制造商":
      "Hersteller für modifiziertes POM",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "Taiyi Polymer ist die internationale Marke von Jiangsu Taiyi Nano Technology Co., Ltd. Seit 2003 entwickeln und fertigen wir in Yancheng modifiziertes POM sowie ausgewählte PA6-, PA66- und PPA-Compounds. Werkstoffprüfung, stabile Produktion und Chargendokumentation sind dabei in einem Fertigungssystem gebündelt.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "Die Werkstoffauswahl beginnt beim Spritzgussteil und seinen Einsatzbedingungen. Bewegungsart, Belastung, Umgebung, Abmessungen, Werkzeugstand und benötigte Unterlagen bestimmen, welche modifizierten POM-Typen verglichen werden. Liegt das Zielprofil außerhalb des sinnvollen POM-Bereichs, werden PA6, PA66 und PPA separat bewertet.",
    查看材料范围: "Werkstoffe entdecken",
    查看制造能力: "Fertigung ansehen",
    从零部件需求到候选牌号评估:
      "Von Bauteilanforderungen zur Bewertung von Kandidatenwerkstofftypen",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Klar abgegrenztes Werkstoffportfolio mit durchgängiger Entscheidungsunterstützung",
    支撑试制批次与重复订单的生产规模:
      "Produktionskapazität für Versuchschargen und wiederholte Aufträge",
    从零部件需求到重复供货:
      "Vom Bauteil zur Serienbelieferung",
    "申请 POM 牌号评估": "Bewertung eines POM-Werkstofftyps anfragen",
    供应商准入: "Lieferantenqualifizierung",
    查看供应商准入依据:
      "Nachweise zur Lieferantenqualifizierung prüfen",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Bleibt ein gelisteter Werkstofftyp nach der Vorauswahl ein geeigneter Kandidat, wird er anhand von TDS-Daten, Spritzgießbedingungen, Mustern und Versuchen mit repräsentativen Bauteilen validiert, bevor die wiederholte Belieferung besprochen wird. Andernfalls werden eine Formulierungsanpassung oder ein kundenspezifischer Werkstofftyp nur bei klaren technischen Zielwerten, Validierungsbedingungen und erwartetem Produktionsvolumen geprüft.",
    工程沟通始终与生产保持连接:
      "Technische Abstimmung bleibt mit der Produktion verbunden",
    用于供应商准入的关键证据:
      "Zentrale Nachweise für die Lieferantenqualifizierung",
    为国际项目提供材料支持:
      "Werkstoffunterstützung für internationale Projekte",
    与台益沟通: "Mit Taiyi Polymer sprechen",
    相关零部件方案: "Zugehörige Bauteillösungen",
    相关零部件: "Relevante Bauteile",
    查看零部件方案: "Bauteillösung anzeigen",
    下一步: "Nächster Schritt",
    运动与耐久: "Bewegung und Dauerhaltbarkeit",
    "摩擦、冲击与环境暴露": "Reibung, Schlagbeanspruchung und Umweltexposition",
    刚度与尺寸控制: "Steifigkeit und Maßhaltigkeit",
    "增强、收缩与成型稳定性": "Verstärkung, Schwindung und Formstabilität",
    功能与成型基准: "Funktion und Verarbeitungsbasis",
    "电气表现、基础树脂与流动窗口":
      "Elektrisches Verhalten, Basisharz und Fließfenster",
    "POM 牌号目录与改性材料家族 | 台益":
      "POM-Typenkatalog und modifizierte Werkstofffamilien | Taiyi Polymer",
    "台益 POM 材料家族与牌号目录":
      "Taiyi Polymer POM-Werkstofffamilien und Typenkatalog",
    "POM 材料组合": "POM-Werkstoffauswahl",
    "POM 材料家族与牌号目录": "POM-Werkstofffamilien und Typenkatalog",
    "PLATFORM POM 涵盖耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动及基础树脂等家族，对应不同零件的性能需求。":
      "PLATFORM POM umfasst verschleißfeste und reibungsarme, schlagzähe, witterungsbeständige, verstärkte, leitfähige und antistatische, hochfließfähige sowie Standard-Familien für unterschiedliche Bauteilanforderungen.",
    "浏览全部 POM 材料家族": "Alle POM-Werkstofffamilien ansehen",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "Vergleichen Sie ausgehend von der Bauteilanforderung POM-Werkstofffamilien für Verschleiß, Schlagzähigkeit, Witterungsbeständigkeit, Verstärkung, Funktion, Fließverhalten und Basisharz.",
    提交应用要求: "Werkstoffempfehlung anfordern",
    "查找牌号数据与 TDS": "Werkstoffdaten und TDS durchsuchen",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Für alle 33 gelisteten PA6-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, im definierten Konditionierungszustand und am realen Bauteil erfolgen.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Gehen Sie von der maßgeblichen Leistungslücke aus und bewerten Sie anschließend die Kandidatenwerkstofftypen unter Berücksichtigung von Feuchtigkeitsaufnahme, Werkzeug, Verarbeitungsfenster und tatsächlichen Einsatzbedingungen.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Für alle 37 gelisteten PA66-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, im definierten Konditionierungszustand und am realen Bauteil erfolgen.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Für alle 5 gelisteten PPA-Typen stehen vollständige Detailseiten und Leistungsdaten zur Verfügung. Die endgültige Freigabe muss weiterhin am Kundenwerkzeug, unter realen Temperaturzyklen und am Bauteil erfolgen.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Diese Seite unterstützt die technische Vorauswahl anhand von Werkstoffrichtungen und Kerndaten. Für jeden Typ stehen außerdem eine vollständige Detailseite, Leistungsdaten und ein Pfad zur Projektbewertung zur Verfügung.",
    查看中文牌号数据: "Werkstoffdaten anzeigen",
    查看中文牌号页: "Detailseite anzeigen",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 33 gelisteten PA6-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 37 gelisteten PA66-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Ja. Für alle 5 gelisteten PPA-Typen steht eine vollständige Detailseite zur Verfügung. Typbezeichnungen, technische Werte, Einheiten und Prüfmethoden werden zentral aus den Katalogdaten gepflegt.",
    "PA6 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PA6-Typen verfügbar?",
    "PA66 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PA66-Typen verfügbar?",
    "PPA 牌号详情是否已有中文？":
      "Sind Detailseiten für alle PPA-Typen verfügbar?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Sobald ein Kandidatenwerkstofftyp feststeht, sind vor einer wiederholten Belieferung die verfügbaren TDS, die Spritzgießbedingungen und Versuche mit repräsentativen Bauteilen zu bestätigen. Eine kundenspezifische Formulierungsprüfung setzt klar definierte technische Ziele, Validierungsbedingungen und erwartete Mengen voraus.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Für Bauteile, die durch carbonfaserverstärktes POM eine höhere Steifigkeit oder elektrische Funktion erreichen sollen.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Für Bauteile zur Kontrolle elektrostatischer Ladung; Widerstandsbereich, Prüfmethode und Einsatzumgebung bestimmen die Auswahl des Werkstofftyps.",
    定义电性能目标: "Ziel für das elektrische Verhalten definieren",
    "抗静电、静电耗散和导电材料的选型依据是目标电性能范围与测试方法，单凭材料标签不足以判断适用性。":
      "Antistatische, statisch ableitfähige und leitfähige Werkstoffe werden anhand des elektrischen Zielbereichs und Prüfverfahrens ausgewählt. Eine Materialbezeichnung allein belegt die Eignung nicht.",
    表面或体积电阻率: "Oberflächen- oder Volumenwiderstand",
    "所需的抗静电、静电耗散或导电性能":
      "Gefordertes antistatisches, statisch ableitendes oder leitfähiges Verhalten",
    定义零件条件: "Bauteilbedingungen definieren",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Ergänzen Sie die Bauteil- und Projektbedingungen, die die Eignung des Werkstofftyps und den Erhalt der mechanischen Eigenschaften beeinflussen können.",
    颜色要求: "Farbanforderungen",
    "TDS、文件与样品需求": "TDS-, Dokumenten- und Musterbedarf",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "Das endgültige elektrische Verhalten ist am spritzgegossenen Bauteil nach der vereinbarten Prüfmethode und unter der vorgesehenen Einsatzumgebung zu bestätigen.",
    汽车结构件: "Strukturbauteile für den Automobilbau",
    "工业壳体、支架与精密注塑件":
      "Industriegehäuse, Halterungen und Präzisionsspritzgussteile",
    中文工程塑料分类页: "Deutsche Kategorieseite für technische Kunststoffe",
    中文工程塑料牌号页: "Deutsche Detailseite für technische Kunststoffe",
    中文跨材料导电与抗静电目录:
      "Deutscher materialübergreifender Leitfähigkeits- und Antistatik-Katalog",
  },
  fr: {
    "提交零件功能、现用材料及载荷、运动方式等关键工况，获取针对性的候选牌号建议、物性对比资料与试模样品支持。已有模具、关键尺寸或文件要求可一并提供。": "Indiquez la fonction de la pièce, le matériau actuel et les conditions clés, notamment la charge et le mouvement. Vous recevrez des recommandations de grades, des données comparatives et un accompagnement pour les échantillons d’essai de moulage. Joignez les informations disponibles sur le moule, les dimensions critiques et les documents requis.",
    ...selectionEditorialLocaleOverrides['fr'],
    "碳纤维增强": "Renforcé de fibres de carbone",
    "{{grade}} 是 PA6 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} est un grade de PA6 renforcé de fibres de verre. Pour les pièces structurelles exigeant davantage de rigidité, de résistance, de tenue thermique et de capacité de charge.",
    "{{grade}} 是 PA6 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} est un grade de PA6 chargé en minéraux. La maîtrise dimensionnelle, le retrait, le gauchissement et la qualité de surface orientent le choix.",
    "{{grade}} 是 PA6 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} est un grade de PA6 renforcé de fibres de carbone. Le choix tient compte de la rigidité, de la résistance, de la stabilité dimensionnelle et du comportement électrique.",
    "{{grade}} 是 PA6 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} est un grade de PA6 destiné aux besoins de démoulage. Pour les pièces injectées complexes, le choix tient compte du démoulage, de la surface et de la stabilité de transformation.",
    "{{grade}} 是 PA6 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} est un grade de PA6 modifié pour la résistance au choc. Pour les pièces exigeantes en ténacité, sensibilité à l’entaille et comportement au choc à basse température.",
    "{{grade}} 是 PA6 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} est un grade de PA6 ignifugé. Le choix porte sur le comportement au feu, les propriétés électriques et les exigences mécaniques de la pièce.",
    "{{grade}} 是 PA6 V-0 阻燃牌号。用于需要 V-0 阻燃方向并兼顾结构性能的电气零部件。": "{{grade}} est un grade de PA6 pour les exigences d’ignifugation V-0. Le choix pour les composants électriques tient également compte de leurs exigences mécaniques.",
    "{{grade}} 是 PA66 玻璃微珠填充牌号。用于评估尺寸稳定性、收缩均衡与较低各向异性。": "{{grade}} est un grade de PA66 chargé de billes de verre. Le choix porte sur la stabilité dimensionnelle, l’équilibre du retrait et une anisotropie réduite.",
    "{{grade}} 是 PA66 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} est un grade de PA66 renforcé de fibres de verre et de charges minérales. Pour les pièces dont le choix du matériau associe rigidité, tenue thermique, maîtrise dimensionnelle et gauchissement.",
    "{{grade}} 是 PA66 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} est un grade de PA66 renforcé de fibres de verre. Pour les pièces structurelles exigeant davantage de rigidité, de résistance, de tenue thermique et de capacité de charge.",
    "{{grade}} 是 PA66 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} est un grade de PA66 chargé en minéraux. La maîtrise dimensionnelle, le retrait, le gauchissement et la qualité de surface orientent le choix.",
    "{{grade}} 是 PA66 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} est un grade de PA66 pour les besoins de tenue à l’usure et de frottement. Pour les pièces en glissement, en rotation ou en mouvement alternatif.",
    "{{grade}} 是 PA66 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} est un grade de PA66 renforcé de fibres de carbone. Le choix tient compte de la rigidité, de la résistance, de la stabilité dimensionnelle et du comportement électrique.",
    "{{grade}} 是 PA66 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} est un grade de PA66 destiné aux besoins de démoulage. Pour les pièces injectées complexes, le choix tient compte du démoulage, de la surface et de la stabilité de transformation.",
    "{{grade}} 是 PA66 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} est un grade de PA66 modifié pour la résistance au choc. Pour les pièces exigeantes en ténacité, sensibilité à l’entaille et comportement au choc à basse température.",
    "{{grade}} 是 PA66 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} est un grade de PA66 ignifugé. Le choix porte sur le comportement au feu, les propriétés électriques et les exigences mécaniques de la pièce.",
    "{{grade}} 是 PPA 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} est un grade de PPA renforcé de fibres de verre et de charges minérales. Pour les pièces dont le choix du matériau associe rigidité, tenue thermique, maîtrise dimensionnelle et gauchissement.",
    "{{grade}} 是 PPA 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} est un grade de PPA renforcé de fibres de verre. Pour les pièces structurelles exigeant davantage de rigidité, de résistance, de tenue thermique et de capacité de charge.",
    "{{grade}} 是 PPA 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} est un grade de PPA pour les besoins de tenue à l’usure et de frottement. Pour les pièces en glissement, en rotation ou en mouvement alternatif.",
    "零部件表现": "Comportement de la pièce",
    "排查重点": "Points de contrôle",
    "询盘资料": "Informations pour la demande",
    "讨论零部件的材料需求": "Discuter des exigences du matériau pour votre pièce",
    "可附图纸、现用材料和使用条件，便于我们提供相关牌号资料。": "Joignez un plan, le matériau actuel et les conditions d’utilisation pour nous aider à fournir les données des grades pertinents.",
    "可提供的资料与建议": "Données des matériaux et possibilités d’évaluation",
    "使用条件与测试参考": "Conditions d’utilisation et références d’essai",
    "相关技术资料": "Documentation technique associée",
    "从齿轮、轴套、阀芯等零部件查看结构特点、使用工况和相关材料。": "Découvrez la géométrie, les conditions de fonctionnement et les matériaux associés aux engrenages, bagues, tiroirs de vanne et autres composants injectés.",
    "选材依据": "Critères de choix du matériau",
    "载荷、运动、环境与尺寸要求影响材料选择；模具方案和加工条件则关系到零件成型表现。": "La charge, le mouvement, l’environnement et les dimensions influencent le choix du matériau. La conception du moule et les conditions de transformation influent sur le moulage de la pièce.",
    "获取相关牌号资料": "Demander les données des grades",
    "告诉我们零部件用途、使用工况和当前材料，获取相关牌号资料，并讨论材料与样品需求。": "Indiquez la fonction de la pièce, les conditions de fonctionnement et le matériau actuel pour obtenir les données des grades pertinents et discuter de vos besoins en matériaux et en échantillons.",
    "牌号资料": "Données des grades",
    "应用与材料": "Applications et matériaux",
    "部件功能与使用工况": "Fonction de la pièce et conditions de fonctionnement",
    "机构、运动方式、装配配合与尺寸要求共同影响材料选择。": "Le mécanisme, le mouvement, les ajustements d’assemblage et les exigences dimensionnelles influencent le choix du matériau.",
    "了解典型部件的结构、载荷、运动方式及使用环境。": "Découvrez la géométrie, les charges, les mouvements et l’environnement d’utilisation des composants courants.",
    "相关零部件选材指南": "Guides de choix des matériaux pour les composants associés",
    "相关材料": "Matériaux associés",
    "比较相关 POM 材料的性能特点和典型用途。": "Comparez les propriétés et les usages courants des matériaux POM associés.",
    "选材要点": "Critères de choix",
    "提供零部件用途、使用工况和材料要求，获取相关牌号资料，并讨论样品需求。": "Présentez la fonction de la pièce, les conditions de fonctionnement et les exigences du matériau pour obtenir les données des grades pertinents et discuter de vos besoins en échantillons.",
    "注塑零部件的材料选择": "Choix des matériaux pour les pièces injectées",
    "改性 POM 及精选工程塑料，面向汽车、电子电气和工业设备中的功能性注塑件。按行业或零部件浏览材料特点、牌号数据与相关技术资料。": "POM modifié et sélection de plastiques techniques pour les pièces injectées fonctionnelles des équipements automobiles, électriques et industriels. Parcourez les propriétés des matériaux, les données des grades et les guides techniques par secteur ou par composant.",
    "查看各应用中的典型部件、主要工况和相关材料特点。": "Découvrez les composants courants, les conditions de fonctionnement et les propriétés des matériaux pour chaque application.",
    "ETM090U 是中等流动耐候 POM 牌号，面向汽车、电子电气、卫浴和精密注塑件的选材。": "ETM090U est un grade POM modifié pour les besoins de tenue aux intempéries, à fluidité moyenne, pour les pièces injectées automobiles, électriques, électroniques, sanitaires et de précision.",
    "ETM100PU 是高流动耐候 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的充模与光照环境需求。": "ETM100PU est un grade POM à haute fluidité, modifié pour les besoins de tenue aux intempéries des pièces injectées automobiles, électriques, électroniques, sanitaires et industrielles exposées à la lumière.",
    "EDR180U 是耐候方向的 POM 牌号，面向同时需要冲击韧性与哑光外观的零件。": "EDR180U est un grade POM pour les besoins de tenue aux intempéries des pièces recherchant à la fois résistance au choc et aspect mat.",
    "EDR2000ZD-UV 是高抗冲、耐紫外与耐老化方向的 POM 牌号，选材关注光照环境下的外观与性能保持。": "EDR2000ZD-UV est un grade POM pour les besoins de résistance au choc, de tenue aux UV et de vieillissement. Le choix tient compte du maintien de l’aspect et des propriétés sous exposition à la lumière.",
    "EGH202H 含 10% 玻璃纤维，面向汽车、电子电气、卫浴和工业注塑件的刚度、强度、收缩与热性能需求。": "EGH202H est un grade POM à 10 % de fibres de verre pour les pièces injectées automobiles, électriques, électroniques, sanitaires et industrielles. Le choix porte sur la rigidité, la résistance, le retrait et les propriétés thermiques.",
    "EGH302H 含 15% 玻璃纤维，提供介于标准和更高增强方向之间的强度、刚度、收缩及加工选材数据。": "EGH302H est un grade POM à 15 % de fibres de verre. Ses données de résistance, rigidité, retrait et transformation permettent une comparaison entre les grades standard et plus fortement renforcés.",
    "EGH402H 含 20% 玻璃纤维，面向功能与结构件的较高刚度、较低收缩及耐热需求。": "EGH402H est un grade POM à 20 % de fibres de verre pour les pièces fonctionnelles et structurelles recherchant davantage de rigidité, un retrait réduit et des propriétés thermiques.",
    "EGH402T 含 20% 玻璃纤维，兼顾注塑流动、刚度与尺寸控制的选材需求。": "EGH402T est un grade POM à 20 % de fibres de verre pour les besoins de fluidité en injection, de rigidité et de contrôle dimensionnel.",
    "EGH502T 含 25% 玻璃纤维，面向较高刚度、较低收缩与受控流动性的注塑需求。": "EGH502T est un grade POM à 25 % de fibres de verre pour les besoins d’injection recherchant davantage de rigidité, un retrait réduit et une fluidité contrôlée.",
    "EGH580H 含 25% 玻璃纤维，面向零部件的弯曲性能、刚度与尺寸控制需求。": "EGH580H est un grade POM à 25 % de fibres de verre pour les pièces recherchant des propriétés en flexion, de la rigidité et un contrôle dimensionnel.",
    "EGH580T 含 25% 玻璃纤维，选材兼顾高刚度、冲击性能与加工流动性。": "EGH580T est un grade POM à 25 % de fibres de verre pour les besoins de rigidité élevée, de résistance au choc et de fluidité en transformation.",
    "EGH602H 含 30% 玻璃纤维，面向功能与精密零件的较高刚度、尺寸稳定和较低收缩需求。": "EGH602H est un grade POM à 30 % de fibres de verre pour les pièces fonctionnelles et de précision recherchant davantage de rigidité, de stabilité dimensionnelle et un retrait réduit.",
    "EGH602T 含 30% 玻璃纤维，面向较低注塑收缩、增强刚度与稳定加工的零部件需求。": "EGH602T est un grade POM à 30 % de fibres de verre pour les pièces recherchant un retrait d’injection réduit, une rigidité accrue et une transformation stable.",
    "ECF200 是含 20% 碳纤维的黑色 POM 牌号，选材关注刚度、低收缩、尺寸稳定与导电方向。": "ECF200 est un grade POM noir à 20 % de fibres de carbone. Le choix tient compte de la rigidité, du faible retrait, de la stabilité dimensionnelle et des besoins de conductivité.",
    "ECF300 是含 30% 碳纤维的黑色 POM 牌号，面向高刚度、低收缩、尺寸稳定及导电方向的选材。": "ECF300 est un grade POM noir à 30 % de fibres de carbone pour les besoins de rigidité élevée, de faible retrait, de stabilité dimensionnelle et de conductivité.",
    "ECF400 是含 40% 碳纤维的黑色 POM 牌号，面向更高刚度、尺寸稳定及导电方向的选材。": "ECF400 est un grade POM noir à 40 % de fibres de carbone pour les besoins de rigidité accrue, de stabilité dimensionnelle et de conductivité.",
    "EGH25CN 是黑色 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的受控电阻率需求。": "EGH25CN est un grade POM noir pour les pièces injectées automobiles, électriques, électroniques, sanitaires et industrielles ayant des exigences de résistivité contrôlée.",
    "ECN1003B 是黑色导电 POM 牌号，面向电子零件、抗静电注塑件和功能塑料零件的较低电阻率需求。": "ECN1003B est un grade POM noir conducteur pour les pièces électroniques, injectées antistatiques et plastiques fonctionnelles recherchant une résistivité plus faible.",
    "EDR100 是高抗冲、耐低温 POM 牌号，面向比标准 POM 更注重韧性的功能注塑件。": "EDR100 est un grade POM à haute résistance au choc et adapté aux besoins à basse température, pour les pièces fonctionnelles recherchant davantage de ténacité qu’un POM standard.",
    "EHI100ST 是高抗冲、耐低温 POM 牌号，面向需要平衡刚性与韧性的注塑件。": "EHI100ST est un grade POM à haute résistance au choc pour les besoins à basse température et les pièces injectées recherchant un équilibre entre rigidité et ténacité.",
    "EHI202T 是高抗冲、耐低温 POM 牌号，面向汽车、电气、卫浴和工业注塑件的韧性、流动与力学性能需求。": "EHI202T est un grade POM à haute résistance au choc pour les besoins à basse température des pièces injectées automobiles, électriques, sanitaires et industrielles. Le choix porte sur la ténacité, la fluidité et les propriétés mécaniques.",
    "EHI602T 是高抗冲、耐低温 POM 牌号，面向对冲击韧性与伸长率有更高要求的注塑件。": "EHI602T est un grade POM à haute résistance au choc pour les besoins à basse température et les pièces injectées exigeant davantage de ténacité et d’allongement.",
    "ETM270H 是耐磨 POM 牌号，面向齿轮、滑动件、轴套和功能注塑件的充模、拉伸及弯曲性能需求。": "ETM270H est un grade POM modifié pour l’usure, destiné au choix des engrenages, pièces de glissement, bagues et pièces injectées fonctionnelles selon le remplissage, la traction et la flexion.",
    "EPAF100A 是芳纶纤维改性的高耐磨 POM 牌号，选材关注刚度、磨耗、尺寸与耐热表现。": "EPAF100A est un grade POM modifié par fibres d’aramide pour les applications d’usure. Le choix tient compte de la rigidité, de l’usure, des dimensions et du comportement thermique.",
    "ENM1040 采用耐磨添加剂体系，面向滑动件、齿轮和功能注塑件的耐磨与加工需求。": "ENM1040 est un grade POM avec des additifs d’usure pour les pièces de glissement, engrenages et pièces injectées fonctionnelles. Le choix tient compte du comportement à l’usure et de la transformation.",
    "EDM-111 是高耐磨 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的耐磨与稳定加工需求。": "EDM-111 est un grade POM modifié pour l’usure des pièces injectées automobiles, électriques, électroniques, sanitaires et industrielles, avec des exigences de transformation stable.",
    "EMS162 是 MoS2 填充的黑色高耐磨 POM 牌号，面向滑动件、汽车功能件和工业注塑件的耐磨与力学性能需求。": "EMS162 est un grade POM noir chargé de MoS2 pour les pièces de glissement, pièces fonctionnelles automobiles et pièces injectées industrielles, selon les besoins d’usure et de propriétés mécaniques.",
    "ETM090NC 是标准基础 POM 牌号，面向汽车、电气、卫浴和工业注塑件的强度、尺寸稳定与充模需求。": "ETM090NC est un grade POM de base pour les pièces injectées automobiles, électriques, sanitaires et industrielles. Le choix porte sur la résistance mécanique, la stabilité dimensionnelle et le remplissage.",
    "ETM130 是中等流动基础 POM 牌号，兼顾加工稳定性和力学性能，用于汽车、电气电子及卫浴注塑件的选材。": "ETM130 est un grade POM de base à fluidité moyenne pour les pièces automobiles, électriques, électroniques et sanitaires. Il associe stabilité de transformation et propriétés mécaniques équilibrées.",
    "ETM270 是高流动基础 POM 牌号，面向薄壁、精密与通用注塑件的充模、力学和尺寸需求。": "ETM270 est un grade POM de base à haute fluidité pour les pièces injectées à parois fines, de précision ou d’usage général, avec des exigences de remplissage, de propriétés mécaniques et de dimensions.",
    "ETM1500 是超高流动基础 POM 牌号，面向几何复杂、充模敏感的注塑件，兼顾充模与零件力学性能需求。": "ETM1500 est un grade POM de base à très haute fluidité pour les pièces injectées complexes ou sensibles au remplissage. Le choix tient compte du remplissage et des propriétés mécaniques de la pièce.",
    "ETM1800 是超高流动基础 POM 牌号，面向较长流路的复杂注塑件及其零件性能需求。": "ETM1800 est un grade POM de base à très haute fluidité pour les pièces injectées complexes à longs parcours d’écoulement et leurs exigences de performance.",
    "牌号特点": "Caractéristiques du grade",
    "POM 耐磨测试 Benchmark": "Benchmark des essais d'usure POM",
    "报告记录按工况分组，附测量值、过程曲线和现有试样照片。":
      "Rapports d'essai regroupés par conditions, avec mesures, courbes et photos d'éprouvettes disponibles.",
    "SPUN-9200 PA66 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Données du grade SPUN-9200 en PA66 renforcé de fibres de verre, comprenant la densité, la résistance en traction, la température de fléchissement sous charge et le tableau complet des propriétés.",
    "SPUN-4500 PPA 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Données du grade SPUN-4500 en PPA renforcé de fibres de verre, comprenant la densité, la résistance en traction, la température de fléchissement sous charge et le tableau complet des propriétés.",
    "阻燃等级按牌号与项目确认": "Classement de réaction au feu à confirmer pour le grade et le projet",
    吸水率: "Absorption d’eau",
    注塑收缩率: "Retrait au moulage",
    熔融温度: "Température de fusion",
    简支梁缺口冲击强度: "Résistance au choc Charpy entaillé",
    ...categoryLocaleOverrides.fr,
    ...ems102LocaleOverrides.fr,
    ...functionalPomLocaleOverrides.fr,
    ...aboutLocaleOverrides.fr,
    ...automotiveExpandedLocaleOverrides.fr,
    ...applicationNarrativeLocaleOverrides.fr,
    ...componentDetailLocaleOverrides.fr,
    ...pomSelectionLocaleOverrides.fr,
    ...copyAuditResourceLocaleOverrides.fr,
    "IC 周转托盘": "Plateaux de manutention pour circuits intégrés",
    "EAI210 PA66 抗冲改性牌号 | 台益":
      "EAI210 PA66 modifié choc | Taiyi Polymer",
    "EAI210 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI210 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EAI220 PA66 抗冲改性牌号 | 台益":
      "EAI220 PA66 modifié choc | Taiyi Polymer",
    "EAI220 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI220 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EAI250 PA66 抗冲改性牌号 | 台益":
      "EAI250 PA66 modifié choc | Taiyi Polymer",
    "EAI250 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Les données du grade EAI250 en PA66 modifié choc comprennent la densité, la résistance à la traction, la température de fléchissement sous charge, le classement de réaction au feu et le tableau complet des propriétés.",
    "EHI602T 高冲击高伸长方向 POM | 台益":
      "EHI602T POM à haute résistance aux chocs et à fort allongement | Taiyi Polymer",
    "准备 EAG108U 牌号评估": "Préparer l’évaluation du grade EAG108U",
    "准备 EAG130H 牌号评估": "Préparer l’évaluation du grade EAG130H",
    "准备 EAG140U 牌号评估": "Préparer l’évaluation du grade EAG140U",
    "准备 EAG230 牌号评估": "Préparer l’évaluation du grade EAG230",
    "准备 EAI120 牌号评估": "Préparer l’évaluation du grade EAI120",
    "准备 EAM140A 牌号评估": "Préparer l’évaluation du grade EAM140A",
    "聚焦改性 POM 的工程塑料制造商":
      "Fabricant de POM modifiés",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "Taiyi Polymer est la marque internationale de Jiangsu Taiyi Nano Technology Co., Ltd. Depuis 2003, notre site de Yancheng développe et fabrique des POM modifiés ainsi qu’une sélection de compounds PA6, PA66 et PPA. Les essais matière, la production récurrente et la documentation des lots sont coordonnés au sein du même système industriel.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "Le choix du matériau part de la pièce injectée et de ses conditions d’utilisation. Mouvement, charge, environnement, dimensions, avancement de l’outillage et documents requis déterminent les grades de POM modifié à comparer. Si le profil visé sort du domaine pertinent du POM, le PA6, le PA66 et le PPA sont évalués séparément.",
    查看材料范围: "Découvrir nos matériaux",
    查看制造能力: "Voir notre production",
    从零部件需求到候选牌号评估:
      "Des exigences de la pièce à l’évaluation des grades candidats",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Un portefeuille de matériaux mieux ciblé, relié à l’ensemble du processus de décision",
    支撑试制批次与重复订单的生产规模:
      "Des capacités de production pour les lots d’essai et les commandes récurrentes",
    从零部件需求到重复供货:
      "Des exigences de la pièce à la série",
    "申请 POM 牌号评估": "Demander une étude de grade POM",
    供应商准入: "Qualification fournisseur",
    查看供应商准入依据:
      "Consulter les justificatifs de qualification fournisseur",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Lorsqu’un grade répertorié reste candidat après la présélection, il est validé à partir des données TDS, des conditions de moulage, des échantillons et d’essais sur des pièces représentatives avant d’aborder l’approvisionnement récurrent. Dans le cas contraire, un ajustement de formulation ou un grade sur mesure n’est envisagé qu’avec des objectifs techniques, des conditions de validation et un volume de production prévu clairement définis.",
    工程沟通始终与生产保持连接:
      "Les échanges techniques restent reliés à la production",
    用于供应商准入的关键证据:
      "Les preuves essentielles pour la qualification fournisseur",
    为国际项目提供材料支持:
      "Un support matériaux pour les projets internationaux",
    与台益沟通: "Échanger avec Taiyi Polymer",
    相关零部件方案: "Solutions de composants associées",
    相关零部件: "Pièces concernées",
    查看零部件方案: "Voir la solution pour ce composant",
    下一步: "Étape suivante",
    运动与耐久: "Mouvement et durabilité",
    "摩擦、冲击与环境暴露": "Frottement, impact et exposition environnementale",
    刚度与尺寸控制: "Rigidité et maîtrise dimensionnelle",
    "增强、收缩与成型稳定性": "Renforcement, retrait et stabilité au moulage",
    功能与成型基准: "Fonctions et base de transformation",
    "电气表现、基础树脂与流动窗口":
      "Comportement électrique, résine de base et fenêtre d’écoulement",
    "PLATFORM POM 涵盖耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动及基础树脂等家族，对应不同零件的性能需求。":
      "PLATFORM POM comprend des familles résistantes à l’usure et à faible frottement, modifiées au choc, résistantes aux intempéries, renforcées, conductrices et antistatiques, à haute fluidité et standards pour différents besoins de pièces.",
    "浏览全部 POM 材料家族": "Voir toutes les familles de POM",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "À partir des exigences de la pièce, comparez les familles de POM pour l’usure, l’impact, la tenue aux intempéries, le renforcement, les fonctions, la fluidité et la résine de base.",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Les 33 grades PA6 répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, l’état de conditionnement défini et la pièce réelle.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Partez de l’écart de performance dominant, puis évaluez les grades candidats en tenant compte de l’absorption d’humidité, du moule, de la fenêtre de transformation et des conditions réelles d’utilisation.",
    "当短射、熔接痕或压力问题可能来自浇口、流道、排气、温控或设备能力时，应先确认模具与工艺根因，再判断是否需要更高流动牌号。":
      "Lorsque des manques de matière, des marques de soudure ou des problèmes de pression peuvent provenir du point d’injection, des canaux d’alimentation, des évents, de la régulation de température ou des capacités de la presse, il faut d’abord confirmer les causes liées au moule et au procédé avant de déterminer si un grade plus fluide est nécessaire.",
    "本页用于 ECF200 的初步选型。碳纤增强材料具有方向性；浇口、流向、熔接线、壁厚、表面状态和测量位置都会影响力学与电性能。":
      "Cette page sert à la présélection de l’ECF200. Les matériaux renforcés de fibres de carbone sont anisotropes ; le point d’injection, le sens d’écoulement, les lignes de soudure, l’épaisseur de paroi, l’état de surface et la position de mesure influencent les propriétés mécaniques et électriques.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Les 37 grades PA66 répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, l’état de conditionnement défini et la pièce réelle.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Les 5 grades PPA répertoriés disposent de pages détaillées complètes et de données de performance. La validation finale doit néanmoins être réalisée avec l’outillage client, les cycles de température réels et la pièce.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Cette page permet une présélection technique à partir des orientations matériau et des données clés. Chaque grade donne également accès à une page détaillée, aux données de performance et au parcours d’évaluation du projet.",
    查看中文牌号数据: "Voir les données du grade",
    查看中文牌号页: "Voir la fiche du grade",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 33 grades PA6 répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 37 grades PA66 répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Oui. Les 5 grades PPA répertoriés disposent chacun d’une page détaillée complète. Les désignations, valeurs techniques, unités et méthodes d’essai restent gérées de manière centralisée à partir des données du catalogue.",
    "PA6 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PA6 ?",
    "PA66 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PA66 ?",
    "PPA 牌号详情是否已有中文？":
      "Des pages détaillées sont-elles disponibles pour tous les grades PPA ?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Une fois un grade candidat identifié, confirmer avant tout approvisionnement récurrent les TDS disponibles, les conditions de moulage et les essais sur des pièces représentatives. L’étude d’une formulation sur mesure exige des objectifs techniques, des conditions de validation et des volumes prévisionnels clairement définis.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Pour les pièces qui doivent obtenir une rigidité supérieure ou une fonction électrique grâce à un POM renforcé de fibres de carbone.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Pour les pièces nécessitant un contrôle électrostatique ; la plage de résistance, la méthode d’essai et l’environnement d’utilisation déterminent le choix du grade.",
    定义电性能目标: "Définir l’objectif de performance électrique",
    "抗静电、静电耗散和导电材料的选型依据是目标电性能范围与测试方法，单凭材料标签不足以判断适用性。":
      "Le choix des matériaux antistatiques, dissipatifs et conducteurs repose sur la plage électrique visée et la méthode d’essai. Une désignation seule ne suffit pas à établir leur adéquation.",
    表面或体积电阻率: "Résistivité surfacique ou volumique",
    "所需的抗静电、静电耗散或导电性能":
      "Performance antistatique, dissipative électrostatique ou conductrice requise",
    定义零件条件: "Définir les conditions de la pièce",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Préciser les conditions de la pièce et du projet susceptibles d’influencer l’aptitude du grade et le maintien des propriétés mécaniques.",
    颜色要求: "Exigences de couleur",
    "TDS、文件与样品需求": "Besoins en TDS, documents et échantillons",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "La performance électrique finale doit être confirmée sur la pièce injectée, selon la méthode d’essai convenue et dans l’environnement d’utilisation prévu.",
    汽车结构件: "Pièces structurelles automobiles",
    "工业壳体、支架与精密注塑件":
      "Boîtiers industriels, supports et pièces moulées par injection de précision",
    中文工程塑料分类页: "Page française de catégorie des plastiques techniques",
    中文工程塑料牌号页: "Page française de grade des plastiques techniques",
    中文跨材料导电与抗静电目录:
      "Catalogue français multimatériaux conducteurs et antistatiques",
  },
  "pt-br": {
    "提交零件功能、现用材料及载荷、运动方式等关键工况，获取针对性的候选牌号建议、物性对比资料与试模样品支持。已有模具、关键尺寸或文件要求可一并提供。": "Informe a função da peça, o material atual e as condições principais, como carga e tipo de movimento. Receba recomendações de grades, dados comparativos de propriedades e suporte com amostras para testes de injeção. Inclua as informações disponíveis sobre o molde, as dimensões críticas e os documentos necessários.",
    ...selectionEditorialLocaleOverrides['pt-br'],
    "碳纤维增强": "Reforçado com fibra de carbono",
    "{{grade}} 是 PA6 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} é um grau de PA6 reforçado com fibra de vidro. Para peças estruturais com maiores requisitos de rigidez, resistência, comportamento térmico e capacidade de carga.",
    "{{grade}} 是 PA6 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} é um grau de PA6 com carga mineral. Controle dimensional, contração, empenamento e qualidade de superfície orientam a seleção.",
    "{{grade}} 是 PA6 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} é um grau de PA6 reforçado com fibra de carbono. A seleção considera rigidez, resistência, estabilidade dimensional e comportamento elétrico.",
    "{{grade}} 是 PA6 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} é um grau de PA6 para requisitos de desmoldagem. Nas peças injetadas complexas, a seleção considera desmoldagem, superfície e estabilidade de processamento.",
    "{{grade}} 是 PA6 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} é um grau de PA6 modificado para resistência ao impacto. Para peças com maiores requisitos de tenacidade, sensibilidade ao entalhe e comportamento ao impacto em baixas temperaturas.",
    "{{grade}} 是 PA6 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} é um grau de PA6 retardante de chama. A seleção considera comportamento à chama, propriedades elétricas e requisitos mecânicos da peça.",
    "{{grade}} 是 PA6 V-0 阻燃牌号。用于需要 V-0 阻燃方向并兼顾结构性能的电气零部件。": "{{grade}} é um grau de PA6 para requisitos de retardância de chama V-0. A seleção para componentes elétricos também considera seus requisitos mecânicos.",
    "{{grade}} 是 PA66 玻璃微珠填充牌号。用于评估尺寸稳定性、收缩均衡与较低各向异性。": "{{grade}} é um grau de PA66 com carga de microesferas de vidro. A seleção considera estabilidade dimensional, equilíbrio de contração e menor anisotropia.",
    "{{grade}} 是 PA66 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} é um grau de PA66 reforçado com fibra de vidro e carga mineral. Para peças cuja seleção de material considera rigidez, comportamento térmico, controle dimensional e empenamento.",
    "{{grade}} 是 PA66 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} é um grau de PA66 reforçado com fibra de vidro. Para peças estruturais com maiores requisitos de rigidez, resistência, comportamento térmico e capacidade de carga.",
    "{{grade}} 是 PA66 矿物填充牌号。用于审核尺寸控制、收缩、翘曲与表面要求。": "{{grade}} é um grau de PA66 com carga mineral. Controle dimensional, contração, empenamento e qualidade de superfície orientam a seleção.",
    "{{grade}} 是 PA66 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} é um grau de PA66 para requisitos de desgaste e atrito. Para peças em movimento de deslizamento, rotação ou movimento alternado.",
    "{{grade}} 是 PA66 碳纤维增强牌号。用于评估更高刚性、强度、导电方向与尺寸稳定性。": "{{grade}} é um grau de PA66 reforçado com fibra de carbono. A seleção considera rigidez, resistência, estabilidade dimensional e comportamento elétrico.",
    "{{grade}} 是 PA66 易脱模牌号。用于复杂注塑件的脱模、表面和稳定生产评估。": "{{grade}} é um grau de PA66 para requisitos de desmoldagem. Nas peças injetadas complexas, a seleção considera desmoldagem, superfície e estabilidade de processamento.",
    "{{grade}} 是 PA66 抗冲改性牌号。用于对韧性、缺口敏感性或低温冲击有更高要求的零部件。": "{{grade}} é um grau de PA66 modificado para resistência ao impacto. Para peças com maiores requisitos de tenacidade, sensibilidade ao entalhe e comportamento ao impacto em baixas temperaturas.",
    "{{grade}} 是 PA66 阻燃牌号。用于需要审核阻燃等级、电气性能与结构性能的零部件。": "{{grade}} é um grau de PA66 retardante de chama. A seleção considera comportamento à chama, propriedades elétricas e requisitos mecânicos da peça.",
    "{{grade}} 是 PPA 玻纤／矿物复合增强牌号。用于兼顾刚性、耐热、尺寸控制和降低翘曲的零部件。": "{{grade}} é um grau de PPA reforçado com fibra de vidro e carga mineral. Para peças cuja seleção de material considera rigidez, comportamento térmico, controle dimensional e empenamento.",
    "{{grade}} 是 PPA 玻璃纤维增强牌号。用于需要更高刚性、强度、耐热和承载能力的结构件。": "{{grade}} é um grau de PPA reforçado com fibra de vidro. Para peças estruturais com maiores requisitos de rigidez, resistência, comportamento térmico e capacidade de carga.",
    "{{grade}} 是 PPA 耐磨／低摩擦牌号。用于滑动、旋转或往复运动零部件的摩擦与磨损评估。": "{{grade}} é um grau de PPA para requisitos de desgaste e atrito. Para peças em movimento de deslizamento, rotação ou movimento alternado.",
    "零部件表现": "Comportamento da peça",
    "排查重点": "Pontos de verificação",
    "询盘资料": "Informações para a consulta",
    "讨论零部件的材料需求": "Discutir os requisitos do material para sua peça",
    "可附图纸、现用材料和使用条件，便于我们提供相关牌号资料。": "Inclua um desenho, o material atual e as condições de uso para nos ajudar a fornecer dados dos graus relevantes.",
    "可提供的资料与建议": "Dados dos materiais e opções de avaliação",
    "使用条件与测试参考": "Condições de uso e referências de ensaio",
    "相关技术资料": "Documentação técnica relacionada",
    "从齿轮、轴套、阀芯等零部件查看结构特点、使用工况和相关材料。": "Conheça a geometria, as condições de operação e os materiais relacionados a engrenagens, buchas, carretéis de válvula e outros componentes injetados.",
    "选材依据": "Critérios de seleção do material",
    "载荷、运动、环境与尺寸要求影响材料选择；模具方案和加工条件则关系到零件成型表现。": "Carga, movimento, ambiente e dimensões influenciam a seleção do material. O projeto do molde e as condições de processamento afetam a moldagem da peça.",
    "获取相关牌号资料": "Solicitar dados dos graus",
    "告诉我们零部件用途、使用工况和当前材料，获取相关牌号资料，并讨论材料与样品需求。": "Informe a função da peça, as condições de operação e o material atual para solicitar dados dos graus relevantes e discutir suas necessidades de materiais e amostras.",
    "牌号资料": "Dados dos graus",
    "应用与材料": "Aplicações e materiais",
    "部件功能与使用工况": "Função da peça e condições de operação",
    "机构、运动方式、装配配合与尺寸要求共同影响材料选择。": "Mecanismo, movimento, ajustes de montagem e requisitos dimensionais influenciam a seleção do material.",
    "了解典型部件的结构、载荷、运动方式及使用环境。": "Conheça a geometria, a carga, o movimento e o ambiente de uso dos componentes típicos.",
    "相关零部件选材指南": "Guias de seleção de materiais para componentes relacionados",
    "相关材料": "Materiais relacionados",
    "比较相关 POM 材料的性能特点和典型用途。": "Compare as propriedades e os usos típicos dos materiais de POM relacionados.",
    "选材要点": "Critérios de seleção",
    "提供零部件用途、使用工况和材料要求，获取相关牌号资料，并讨论样品需求。": "Informe a função da peça, as condições de operação e os requisitos do material para solicitar dados dos graus relevantes e discutir suas necessidades de amostras.",
    "注塑零部件的材料选择": "Seleção de materiais para peças injetadas",
    "改性 POM 及精选工程塑料，面向汽车、电子电气和工业设备中的功能性注塑件。按行业或零部件浏览材料特点、牌号数据与相关技术资料。": "POM modificado e uma seleção de plásticos de engenharia para peças injetadas funcionais em equipamentos automotivos, elétricos e industriais. Explore propriedades dos materiais, dados dos graus e guias técnicos por setor ou componente.",
    "查看各应用中的典型部件、主要工况和相关材料特点。": "Conheça os componentes típicos, as condições de operação e as propriedades dos materiais de cada aplicação.",
    "ETM090U 是中等流动耐候 POM 牌号，面向汽车、电子电气、卫浴和精密注塑件的选材。": "ETM090U é um grau de POM modificado para requisitos de intemperismo, de fluidez média, para peças injetadas automotivas, elétricas, eletrônicas, sanitárias e de precisão.",
    "ETM100PU 是高流动耐候 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的充模与光照环境需求。": "ETM100PU é um grau de POM de alta fluidez, modificado para requisitos de intemperismo de peças injetadas automotivas, elétricas, eletrônicas, sanitárias e industriais expostas à luz.",
    "EDR180U 是耐候方向的 POM 牌号，面向同时需要冲击韧性与哑光外观的零件。": "EDR180U é um grau de POM para requisitos de intemperismo de peças que precisam de resistência ao impacto e aparência fosca.",
    "EDR2000ZD-UV 是高抗冲、耐紫外与耐老化方向的 POM 牌号，选材关注光照环境下的外观与性能保持。": "EDR2000ZD-UV é um grau de POM para requisitos de impacto, UV e envelhecimento. A seleção considera a manutenção da aparência e das propriedades sob exposição à luz.",
    "EGH202H 含 10% 玻璃纤维，面向汽车、电子电气、卫浴和工业注塑件的刚度、强度、收缩与热性能需求。": "EGH202H é um grau de POM com 10% de fibra de vidro para peças injetadas automotivas, elétricas, eletrônicas, sanitárias e industriais. A seleção considera rigidez, resistência, contração e propriedades térmicas.",
    "EGH302H 含 15% 玻璃纤维，提供介于标准和更高增强方向之间的强度、刚度、收缩及加工选材数据。": "EGH302H é um grau de POM com 15% de fibra de vidro. Seus dados de resistência, rigidez, contração e processamento apoiam a comparação entre graus padrão e de maior reforço.",
    "EGH402H 含 20% 玻璃纤维，面向功能与结构件的较高刚度、较低收缩及耐热需求。": "EGH402H é um grau de POM com 20% de fibra de vidro para peças funcionais e estruturais com requisitos de maior rigidez, menor contração e comportamento térmico.",
    "EGH402T 含 20% 玻璃纤维，兼顾注塑流动、刚度与尺寸控制的选材需求。": "EGH402T é um grau de POM com 20% de fibra de vidro para requisitos de fluidez na injeção, rigidez e controle dimensional.",
    "EGH502T 含 25% 玻璃纤维，面向较高刚度、较低收缩与受控流动性的注塑需求。": "EGH502T é um grau de POM com 25% de fibra de vidro para requisitos de injeção com maior rigidez, menor contração e fluidez controlada.",
    "EGH580H 含 25% 玻璃纤维，面向零部件的弯曲性能、刚度与尺寸控制需求。": "EGH580H é um grau de POM com 25% de fibra de vidro para peças com requisitos de flexão, rigidez e controle dimensional.",
    "EGH580T 含 25% 玻璃纤维，选材兼顾高刚度、冲击性能与加工流动性。": "EGH580T é um grau de POM com 25% de fibra de vidro para requisitos de alta rigidez, resistência ao impacto e fluidez no processamento.",
    "EGH602H 含 30% 玻璃纤维，面向功能与精密零件的较高刚度、尺寸稳定和较低收缩需求。": "EGH602H é um grau de POM com 30% de fibra de vidro para peças funcionais e de precisão com requisitos de maior rigidez, estabilidade dimensional e menor contração.",
    "EGH602T 含 30% 玻璃纤维，面向较低注塑收缩、增强刚度与稳定加工的零部件需求。": "EGH602T é um grau de POM com 30% de fibra de vidro para peças com requisitos de menor contração na injeção, maior rigidez e processamento estável.",
    "ECF200 是含 20% 碳纤维的黑色 POM 牌号，选材关注刚度、低收缩、尺寸稳定与导电方向。": "ECF200 é um grau de POM preto com 20% de fibra de carbono. A seleção considera rigidez, baixa contração, estabilidade dimensional e requisitos de condutividade.",
    "ECF300 是含 30% 碳纤维的黑色 POM 牌号，面向高刚度、低收缩、尺寸稳定及导电方向的选材。": "ECF300 é um grau de POM preto com 30% de fibra de carbono para requisitos de alta rigidez, baixa contração, estabilidade dimensional e condutividade.",
    "ECF400 是含 40% 碳纤维的黑色 POM 牌号，面向更高刚度、尺寸稳定及导电方向的选材。": "ECF400 é um grau de POM preto com 40% de fibra de carbono para requisitos de maior rigidez, estabilidade dimensional e condutividade.",
    "EGH25CN 是黑色 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的受控电阻率需求。": "EGH25CN é um grau de POM preto para peças injetadas automotivas, elétricas, eletrônicas, sanitárias e industriais com requisitos de resistividade controlada.",
    "ECN1003B 是黑色导电 POM 牌号，面向电子零件、抗静电注塑件和功能塑料零件的较低电阻率需求。": "ECN1003B é um grau de POM preto condutivo para peças eletrônicas, injetadas antiestáticas e plásticas funcionais com requisitos de menor resistividade.",
    "EDR100 是高抗冲、耐低温 POM 牌号，面向比标准 POM 更注重韧性的功能注塑件。": "EDR100 é um grau de POM de alta resistência ao impacto para requisitos em baixa temperatura e peças funcionais que exigem mais tenacidade que o POM padrão.",
    "EHI100ST 是高抗冲、耐低温 POM 牌号，面向需要平衡刚性与韧性的注塑件。": "EHI100ST é um grau de POM de alta resistência ao impacto para requisitos em baixa temperatura e peças injetadas que precisam equilibrar rigidez e tenacidade.",
    "EHI202T 是高抗冲、耐低温 POM 牌号，面向汽车、电气、卫浴和工业注塑件的韧性、流动与力学性能需求。": "EHI202T é um grau de POM de alta resistência ao impacto para requisitos em baixa temperatura de peças injetadas automotivas, elétricas, sanitárias e industriais. A seleção considera tenacidade, fluidez e propriedades mecânicas.",
    "EHI602T 是高抗冲、耐低温 POM 牌号，面向对冲击韧性与伸长率有更高要求的注塑件。": "EHI602T é um grau de POM de alta resistência ao impacto para requisitos em baixa temperatura e peças injetadas com maior exigência de tenacidade e alongamento.",
    "ETM270H 是耐磨 POM 牌号，面向齿轮、滑动件、轴套和功能注塑件的充模、拉伸及弯曲性能需求。": "ETM270H é um grau de POM modificado para desgaste, para a seleção de engrenagens, peças deslizantes, buchas e peças injetadas funcionais conforme preenchimento, tração e flexão.",
    "EPAF100A 是芳纶纤维改性的高耐磨 POM 牌号，选材关注刚度、磨耗、尺寸与耐热表现。": "EPAF100A é um grau de POM modificado com fibra de aramida para aplicações de desgaste. A seleção considera rigidez, desgaste, dimensões e comportamento térmico.",
    "ENM1040 采用耐磨添加剂体系，面向滑动件、齿轮和功能注塑件的耐磨与加工需求。": "ENM1040 é um grau de POM com aditivos para desgaste, para peças deslizantes, engrenagens e peças injetadas funcionais. A seleção considera comportamento ao desgaste e processamento.",
    "EDM-111 是高耐磨 POM 牌号，面向汽车、电子电气、卫浴和工业注塑件的耐磨与稳定加工需求。": "EDM-111 é um grau de POM modificado para desgaste de peças injetadas automotivas, elétricas, eletrônicas, sanitárias e industriais, com requisitos de processamento estável.",
    "EMS162 是 MoS2 填充的黑色高耐磨 POM 牌号，面向滑动件、汽车功能件和工业注塑件的耐磨与力学性能需求。": "EMS162 é um grau de POM preto preenchido com MoS2 para peças deslizantes, componentes funcionais automotivos e peças injetadas industriais, conforme requisitos de desgaste e propriedades mecânicas.",
    "ETM090NC 是标准基础 POM 牌号，面向汽车、电气、卫浴和工业注塑件的强度、尺寸稳定与充模需求。": "ETM090NC é um grau básico de POM para peças injetadas automotivas, elétricas, sanitárias e industriais. A seleção considera resistência mecânica, estabilidade dimensional e preenchimento.",
    "ETM130 是中等流动基础 POM 牌号，兼顾加工稳定性和力学性能，用于汽车、电气电子及卫浴注塑件的选材。": "ETM130 é um grau básico de POM de fluidez média para peças automotivas, elétricas, eletrônicas e sanitárias. Combina estabilidade de processamento e propriedades mecânicas equilibradas.",
    "ETM270 是高流动基础 POM 牌号，面向薄壁、精密与通用注塑件的充模、力学和尺寸需求。": "ETM270 é um grau básico de POM de alta fluidez para peças injetadas de parede fina, de precisão ou de uso geral, com requisitos de preenchimento, propriedades mecânicas e dimensões.",
    "ETM1500 是超高流动基础 POM 牌号，面向几何复杂、充模敏感的注塑件，兼顾充模与零件力学性能需求。": "ETM1500 é um grau básico de POM de fluidez muito alta para peças injetadas complexas ou sensíveis ao preenchimento. A seleção considera o preenchimento e as propriedades mecânicas da peça.",
    "ETM1800 是超高流动基础 POM 牌号，面向较长流路的复杂注塑件及其零件性能需求。": "ETM1800 é um grau básico de POM de fluidez muito alta para peças injetadas complexas com longos percursos de fluxo e requisitos de desempenho da peça.",
    "牌号特点": "Características do grau",
    "比较相关 PA6 牌号": "Comparar graus de PA6",
    "比较相关 PA66 牌号": "Comparar graus de PA66",
    "比较相关 PPA 牌号": "Comparar graus de PPA",
    "POM 耐磨测试 Benchmark": "Benchmark de ensaios de desgaste de POM",
    "报告记录按工况分组，附测量值、过程曲线和现有试样照片。":
      "Relatórios agrupados por condição de ensaio, com medições, curvas de processo e fotos disponíveis dos corpos de prova.",
    "SPUN-9200 PA66 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Dados do grau SPUN-9200 em PA66 reforçado com fibra de vidro, incluindo densidade, resistência à tração, temperatura de deflexão térmica e tabela completa de propriedades.",
    "SPUN-4500 PPA 玻璃纤维增强牌号数据，包括密度、拉伸强度、热变形温度及完整性能表。":
      "Dados do grau SPUN-4500 em PPA reforçado com fibra de vidro, incluindo densidade, resistência à tração, temperatura de deflexão térmica e tabela completa de propriedades.",
    "阻燃等级按牌号与项目确认": "Classificação de inflamabilidade a confirmar para o grau e o projeto",
    吸水率: "Absorção de água",
    注塑收缩率: "Contração de moldagem",
    熔融温度: "Temperatura de fusão",
    简支梁缺口冲击强度: "Resistência ao impacto Charpy com entalhe",
    ...categoryLocaleOverrides["pt-br"],
    ...ems102LocaleOverrides["pt-br"],
    ...functionalPomLocaleOverrides["pt-br"],
    ...aboutLocaleOverrides["pt-br"],
    ...automotiveExpandedLocaleOverrides["pt-br"],
    ...applicationNarrativeLocaleOverrides["pt-br"],
    ...componentDetailLocaleOverrides["pt-br"],
    ...pomSelectionLocaleOverrides["pt-br"],
    ...copyAuditResourceLocaleOverrides["pt-br"],
    "IC 周转托盘": "Bandejas para manuseio de CIs",
    "EAI210 PA66 抗冲改性牌号 | 台益":
      "EAI210 PA66 modificado para impacto | Taiyi Polymer",
    "EAI210 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI210 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EAI220 PA66 抗冲改性牌号 | 台益":
      "EAI220 PA66 modificado para impacto | Taiyi Polymer",
    "EAI220 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI220 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EAI250 PA66 抗冲改性牌号 | 台益":
      "EAI250 PA66 modificado para impacto | Taiyi Polymer",
    "EAI250 PA66 抗冲改性牌号数据，包括密度、拉伸强度、热变形温度、阻燃等级及完整性能表。":
      "Os dados do grau EAI250 em PA66 modificado para impacto incluem densidade, resistência à tração, temperatura de deflexão térmica, classificação de flamabilidade e a tabela completa de propriedades.",
    "EHI602T 高冲击高伸长方向 POM | 台益":
      "EHI602T POM de alto impacto e alto alongamento | Taiyi Polymer",
    "准备 EAI250 牌号评估": "Preparar a avaliação do grau EAI250",
    "准备 EAR210 牌号评估": "Preparar a avaliação do grau EAR210",
    "聚焦改性 POM 的工程塑料制造商":
      "Fabricante de POM modificado",
    "台益是江苏台益纳米科技有限公司的国际品牌。自 2003 年起，我们在盐城开发和制造改性 POM 及精选 PA6、PA66 和 PPA 改性材料，并将材料测试、稳定生产与批次文件纳入同一制造体系。":
      "A Taiyi Polymer é a marca internacional da Jiangsu Taiyi Nano Technology Co., Ltd. Desde 2003, nossa unidade em Yancheng desenvolve e fabrica POM modificado e compostos selecionados de PA6, PA66 e PPA. Testes de materiais, produção recorrente e documentação de lotes são coordenados no mesmo sistema de fabricação.",
    "材料选择从注塑零部件及其工况出发。运动方式、载荷、环境、尺寸、模具阶段和资料需求共同决定需要比较的改性 POM 候选牌号；当目标性能超出 POM 的实际适用范围时，再分别评估 PA6、PA66 与 PPA。":
      "A seleção do material começa pela peça moldada e por suas condições de uso. Movimento, carga, ambiente, dimensões, estágio do ferramental e documentação determinam quais graus de POM modificado devem ser comparados. Quando o perfil desejado fica fora da faixa prática do POM, PA6, PA66 e PPA são avaliados separadamente.",
    查看材料范围: "Conheça nossos materiais",
    查看制造能力: "Ver nossa produção",
    从零部件需求到候选牌号评估:
      "Dos requisitos da peça à avaliação de graus candidatos",
    "聚焦更明确的材料范围，同时连接完整决策过程":
      "Um portfólio de materiais mais definido, conectado a todo o processo decisório",
    支撑试制批次与重复订单的生产规模:
      "Capacidade de produção para lotes piloto e pedidos recorrentes",
    从零部件需求到重复供货: "Dos requisitos da peça ao fornecimento recorrente",
    "申请 POM 牌号评估": "Solicitar avaliação de grau POM",
    供应商准入: "Qualificação de fornecedores",
    查看供应商准入依据:
      "Consultar evidências para qualificação de fornecedores",
    "现有牌号符合初筛方向时，结合 TDS、成型条件、样品和代表性零件试模完成验证，再讨论重复供货。若均不符合，仅在技术目标、验证条件和预期生产用量明确时，评估配方调整或定制牌号开发。":
      "Quando um grau listado permanece como candidato após a triagem inicial, ele é validado com dados TDS, condições de moldagem, amostras e ensaios em peças representativas antes da discussão sobre fornecimento recorrente. Caso contrário, o ajuste da formulação ou um grau personalizado só é avaliado com objetivos técnicos, condições de validação e volume de produção previsto claramente definidos.",
    工程沟通始终与生产保持连接:
      "A comunicação de engenharia permanece conectada à produção",
    用于供应商准入的关键证据:
      "Evidências essenciais para a qualificação de fornecedores",
    为国际项目提供材料支持: "Suporte de materiais para projetos internacionais",
    与台益沟通: "Fale com a Taiyi Polymer",
    相关零部件方案: "Soluções relacionadas para componentes",
    相关零部件: "Peças relacionadas",
    查看零部件方案: "Ver solução para o componente",
    下一步: "Próxima etapa",
    运动与耐久: "Movimento e durabilidade",
    "摩擦、冲击与环境暴露": "Atrito, impacto e exposição ambiental",
    刚度与尺寸控制: "Rigidez e controle dimensional",
    "增强、收缩与成型稳定性": "Reforço, contração e estabilidade de moldagem",
    功能与成型基准: "Funções e base de processamento",
    "电气表现、基础树脂与流动窗口":
      "Comportamento elétrico, resina base e janela de fluxo",
    "PLATFORM POM 涵盖耐磨低摩擦、增韧、耐候、增强、导电与抗静电、高流动及基础树脂等家族，对应不同零件的性能需求。":
      "PLATFORM POM inclui famílias resistentes ao desgaste e de baixo atrito, modificadas para impacto, resistentes às intempéries, reforçadas, condutivas e antiestáticas, de alta fluidez e resinas padrão para diferentes requisitos de peças.",
    "浏览全部 POM 材料家族": "Ver todas as famílias de POM",
    "从零件要求出发，对比耐磨、抗冲、耐候、增强、功能、流动和基础 POM 材料家族。":
      "A partir dos requisitos da peça, compare famílias de POM para desgaste, impacto, resistência às intempéries, reforço, função, fluxo e resina base.",
    "按材料选型、加工与问题排查、牌号数据与验证任务浏览台益技术资料。":
      "Explore os recursos técnicos da Taiyi Polymer por seleção de materiais, processamento e solução de problemas, dados de graus e tarefas de validação.",
    "材料选型、加工与验证资料":
      "Seleção de materiais, processamento e recursos de validação",
    "浏览材料选型、POM 注塑加工与问题排查、牌号数据以及替代牌号验证等实用资料。":
      "Explore recursos práticos sobre seleção de materiais, processamento e solução de problemas de moldagem por injeção de POM, dados de graus e validação de graus alternativos.",
    "查找牌号数据与 TDS": "Encontrar dados de graus e TDS",
    条资料: "artigos",
    "33 个 PA6 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Todos os 33 graus PA6 listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, a condição de umidade definida e a peça real.",
    "从主导性能缺口出发，再结合吸湿、模具、加工窗口和实际工况审核候选牌号。":
      "Comece pela principal lacuna de desempenho e, em seguida, avalie os graus candidatos considerando a absorção de umidade, o molde, a janela de processamento e as condições reais de uso.",
    "当短射、熔接痕或压力问题可能来自浇口、流道、排气、温控或设备能力时，应先确认模具与工艺根因，再判断是否需要更高流动牌号。":
      "Quando falhas de preenchimento, marcas de solda ou problemas de pressão puderem decorrer do ponto de injeção, dos canais de alimentação, da ventilação do molde, do controle de temperatura ou da capacidade da injetora, é preciso primeiro confirmar as causas relacionadas ao molde e ao processo antes de avaliar se é necessário um grau de maior fluidez.",
    "37 个 PA66 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、调湿状态与实际零部件验证。":
      "Todos os 37 graus PA66 listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, a condição de umidade definida e a peça real.",
    "5 个 PPA 牌号均可打开完整中文详情与性能数据。最终认可仍需结合客户模具、实际温度循环与零部件验证。":
      "Todos os 5 graus PPA listados têm páginas detalhadas completas e dados de desempenho. A aprovação final ainda deve ser realizada com o ferramental do cliente, os ciclos reais de temperatura e a peça.",
    "本页提供中文材料方向与关键数据初筛，并可继续打开每个牌号的完整中文详情、性能数据和项目评估路径。":
      "Esta página permite a pré-seleção técnica por direção de material e dados principais. Cada grau também dá acesso a uma página detalhada, aos dados de desempenho e ao caminho de avaliação do projeto.",
    查看中文牌号数据: "Ver dados do grau",
    查看中文牌号页: "Ver página do grau",
    "是。33 个已列 PA6 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 33 graus PA6 listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "是。37 个已列 PA66 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 37 graus PA66 listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "是。5 个已列 PPA 牌号均有完整中文详情页，牌号名称、技术数值、单位和测试方法继续由目录数据统一维护。":
      "Sim. Todos os 5 graus PPA listados têm uma página detalhada completa. As designações, os valores técnicos, as unidades e os métodos de ensaio continuam sendo mantidos de forma centralizada a partir dos dados do catálogo.",
    "PA6 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PA6?",
    "PA66 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PA66?",
    "PPA 牌号详情是否已有中文？":
      "Há páginas detalhadas para todos os graus PPA?",
    "确定候选牌号后，在重复供货前确认可提供的 TDS、成型条件和代表性零件试模。定制配方评估需具备明确的技术目标、验证条件和预计用量。":
      "Após identificar um grau candidato, confirme antes do fornecimento recorrente os TDS disponíveis, as condições de moldagem e os ensaios com peças representativas. A avaliação de uma formulação personalizada exige metas técnicas, condições de validação e volume previsto claramente definidos.",
    "适用于需要通过碳纤维增强 POM 获得更高刚性或电功能的零件。":
      "Para peças que precisam obter maior rigidez ou função elétrica com POM reforçado com fibra de carbono.",
    "适用于电荷控制零件，其电阻范围、测试方法和工作环境决定牌号选择。":
      "Para peças que exigem controle eletrostático; a faixa de resistência, o método de ensaio e o ambiente de uso determinam a seleção do grau.",
    定义电性能目标: "Definir a meta de desempenho elétrico",
    "抗静电、静电耗散和导电材料的选型依据是目标电性能范围与测试方法，单凭材料标签不足以判断适用性。":
      "A seleção de materiais antiestáticos, dissipativos e condutivos depende da faixa elétrica desejada e do método de ensaio. A designação do material, por si só, não comprova sua adequação.",
    表面或体积电阻率: "Resistividade superficial ou volumétrica",
    "所需的抗静电、静电耗散或导电性能":
      "Desempenho antiestático, dissipativo eletrostático ou condutivo necessário",
    定义零件条件: "Definir as condições da peça",
    "补充可能影响牌号适用性及机械性能保留的零件与项目条件。":
      "Informe as condições da peça e do projeto que podem influenciar a adequação do grau e a retenção das propriedades mecânicas.",
    颜色要求: "Requisitos de cor",
    "TDS、文件与样品需求": "Necessidades de TDS, documentos e amostras",
    "最终电性能应在约定测试方法和工作环境下，于注塑成品上确认。":
      "O desempenho elétrico final deve ser confirmado na peça moldada por injeção, conforme o método de ensaio acordado e no ambiente de uso previsto.",
    汽车结构件: "Peças estruturais automotivas",
    "工业壳体、支架与精密注塑件":
      "Caixas industriais, suportes e peças moldadas por injeção de precisão",
    中文工程塑料分类页:
      "Página brasileira de categoria de plásticos de engenharia",
    中文工程塑料牌号页: "Página brasileira de grau de plástico de engenharia",
    中文跨材料导电与抗静电目录:
      "Catálogo brasileiro multimaterial de compostos condutivos e antiestáticos",
  },
};
