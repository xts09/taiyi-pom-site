type CopyAuditResourceLocale = "de" | "fr" | "pt-br";

const copy: Record<string, Record<CopyAuditResourceLocale, string>> = {
  "POM 耐磨测试记录": {
    de: "POM-Verschleißprüfberichte",
    fr: "Rapports d’essais d’usure du POM",
    "pt-br": "Registros de ensaios de desgaste do POM",
  },
  "台益 PA6／PA66 GF30 典型数据对比": {
    de: "Taiyi Polymer: typische Daten von PA6 GF30 und PA66 GF30 im Vergleich",
    fr: "Taiyi Polymer : comparaison des valeurs typiques du PA6 GF30 et du PA66 GF30",
    "pt-br": "Taiyi Polymer: comparação de dados típicos de PA6 GF30 e PA66 GF30",
  },
  "PA66 零件在高温受载或调湿后尺寸上未达标时，以 EAG230 PA66 GF30 为基准，将 EAG630H PPA GF30 纳入首轮对比。本指南说明如何复测性能缺口、比较牌号数据，并确认 PPA 对干燥、模具与设备的要求。": {
    de: "Wenn PA66-Bauteile die Anforderungen unter Last bei erhöhter Temperatur oder an konditionierte Maße verfehlen, dient EAG230 PA66 GF30 als Referenz für einen ersten Vergleich mit EAG630H PPA GF30. Dieser Leitfaden zeigt, wie Sie die verfehlten Anforderungen erneut prüfen, Werkstoffdaten vergleichen und die Trocknungs-, Werkzeug- und Maschinenanforderungen von PPA klären.",
    fr: "Lorsque des pièces en PA66 ne satisfont pas aux exigences sous charge à chaud ou de dimensions après conditionnement, prenez l’EAG230 PA66 GF30 comme référence et intégrez l’EAG630H PPA GF30 à une première comparaison. Ce guide explique comment reprendre les essais concernés, comparer les données des grades et vérifier les exigences du PPA en matière de séchage, de moule et d’équipement.",
    "pt-br": "Quando peças de PA66 não atingem as metas sob carga em alta temperatura ou de dimensões após condicionamento, use o EAG230 PA66 GF30 como referência e inclua o EAG630H PPA GF30 na primeira comparação. Este guia explica como repetir os ensaios com desempenho insuficiente, comparar os dados dos grades e verificar os requisitos de secagem, molde e equipamento do PPA.",
  },
  "初筛 PPA 前，记录现用 PA66 牌号、颜色、状态、模具、工艺和测得的失效。缺口可能涉及高温载荷下的刚性、蠕变、湿度引起的尺寸变化、化学品、水解、电气表现、热加工或耐久。": {
    de: "Erfassen Sie vor der PPA-Auswahl den derzeit verwendeten PA66-Typ, Farbe, Zustand, Werkzeug, Prozess und gemessene Ausfälle. Die Defizite können Steifigkeit unter Last bei erhöhter Temperatur, Kriechen, feuchtebedingte Maßänderungen, Chemikalien, Hydrolyse, elektrische Eigenschaften, thermische Verarbeitung oder Dauerbeständigkeit betreffen.",
    fr: "Avant de présélectionner un PPA, relevez le grade de PA66 utilisé, sa couleur et son état, le moule, le procédé et la défaillance mesurée. L’écart peut concerner la rigidité sous charge à chaud, le fluage, les variations dimensionnelles liées à l’humidité, les produits chimiques, l’hydrolyse, les performances électriques, la mise en œuvre à chaud ou la durabilité.",
    "pt-br": "Antes de selecionar um PPA, registre o grade de PA66 atual, a cor, o estado, o molde, o processo e a falha medida. A deficiência pode envolver rigidez sob carga em alta temperatura, fluência, variação dimensional por umidade, produtos químicos, hidrólise, desempenho elétrico, processamento térmico ou durabilidade.",
  },
  "先对照基准、目标值、测试方法和验收限值排查缺口。若失效来自几何、纤维取向、熔接线、冷却、水分或工艺波动，应先修正设计与成型问题，再决定是否更换材料体系。": {
    de: "Untersuchen Sie das Defizit anhand von Referenz, Zielwerten, Prüfverfahren und Abnahmegrenzen. Geht der Ausfall auf Geometrie, Faserorientierung, Bindenähte, Kühlung, Feuchtigkeit oder Prozessschwankungen zurück, korrigieren Sie zunächst Konstruktion und Spritzgießprozess. Entscheiden Sie anschließend über einen Wechsel des Werkstoffsystems.",
    fr: "Analysez l’écart à partir de la référence, des objectifs, de la méthode d’essai et des limites d’acceptation. Si la défaillance provient de la géométrie, de l’orientation des fibres, des lignes de soudure, du refroidissement, de l’humidité ou des variations du procédé, corrigez d’abord la conception et le moulage avant de décider de changer de système de matériau.",
    "pt-br": "Investigue a deficiência com base na referência, nas metas, no método de ensaio e nos limites de aceitação. Se a falha decorrer da geometria, da orientação das fibras, das linhas de solda, do resfriamento, da umidade ou de variações de processo, corrija primeiro o projeto e a moldagem antes de decidir pela troca do sistema de material.",
  },
  "现用 PA66 牌号、调湿状态与当前 TDS 版本": {
    de: "Derzeit verwendeter PA66-Typ, Konditionierungszustand und aktuelle TDS-Version",
    fr: "Grade de PA66 utilisé, état de conditionnement et version actuelle de la fiche technique",
    "pt-br": "Grade de PA66 atual, estado de condicionamento e versão atual da ficha técnica",
  },
  "化学与电气适用性取决于具体牌号和测试。列出所有冷却液、油、燃油、盐溶液、清洗剂或其他介质，并注明浓度、温度和暴露方式。对于电气零部件，定义电压、电阻或介电要求、湿度、壁厚、阻燃等级、耐电痕或其他适用测试与所需批准。不能从 PPA 系列名称推断合规。": {
    de: "Die chemische und elektrische Eignung hängt vom konkreten Werkstofftyp und den Prüfungen ab. Listen Sie Kühlmittel, Öle, Kraftstoffe, Salzlösungen, Reinigungsmittel und andere Medien mit Konzentration, Temperatur und Expositionsart auf. Definieren Sie für elektrische Bauteile Spannung, Widerstands- oder dielektrische Anforderungen, Feuchtigkeit, Wanddicke, Flammschutzklasse, Kriechstromfestigkeit sowie weitere erforderliche Prüfungen und Freigaben. Aus der Bezeichnung PPA lässt sich keine Konformität ableiten.",
    fr: "L’aptitude chimique et électrique dépend du grade et des essais. Recensez les liquides de refroidissement, huiles, carburants, solutions salines, nettoyants et autres milieux, avec leur concentration, leur température et leur mode d’exposition. Pour les pièces électriques, définissez les exigences de tension, de résistance ou de propriétés diélectriques, l’humidité, l’épaisseur, le classement au feu, la résistance au cheminement et les autres essais et homologations nécessaires. Le nom de famille PPA ne permet pas de conclure à la conformité.",
    "pt-br": "A adequação química e elétrica depende do grade específico e dos ensaios. Liste todos os fluidos de arrefecimento, óleos, combustíveis, soluções salinas, agentes de limpeza e outros meios, com concentração, temperatura e modo de exposição. Para peças elétricas, defina tensão, resistência ou requisitos dielétricos, umidade, espessura, classe de inflamabilidade, resistência ao trilhamento e demais ensaios e aprovações necessários. A denominação PPA não comprova conformidade.",
  },
  "根据具体牌号与包装记录确认干燥要求和粒子含水率": {
    de: "Trocknungsanforderungen und Granulatfeuchte anhand des konkreten Typs und der Verpackungshistorie bestätigen",
    fr: "Confirmer les exigences de séchage et l’humidité des granulés selon le grade et l’historique d’emballage",
    "pt-br": "Confirmar os requisitos de secagem e a umidade dos grânulos conforme o grade e o histórico da embalagem",
  },
  "以 EAG230（PA66 GF30）为基准，将 EAG630H（PPA GF30）纳入高温受载与刚性不足项目的首轮对比。两者均为 30% 玻纤增强配方；EAG630H 的目录 HDT 和弯曲模量更高，热态刚性与蠕变保持则通过对应测试确认。": {
    de: "Nutzen Sie EAG230 (PA66 GF30) als Referenz und nehmen Sie EAG630H (PPA GF30) bei Lasten unter erhöhter Temperatur oder unzureichender Steifigkeit in den ersten Vergleich auf. Beide Rezepturen enthalten 30 % Glasfasern. EAG630H weist im Katalog die höhere HDT und den höheren Biegemodul auf; Steifigkeit bei erhöhter Temperatur und Kriechbeständigkeit werden mit den entsprechenden Prüfungen ermittelt.",
    fr: "Prenez l’EAG230 (PA66 GF30) comme référence et intégrez l’EAG630H (PPA GF30) à la première comparaison pour les projets soumis à une charge à chaud ou présentant une rigidité insuffisante. Les deux formulations contiennent 30 % de fibres de verre. L’EAG630H présente une HDT et un module en flexion plus élevés au catalogue ; la rigidité à chaud et la résistance au fluage se vérifient par les essais correspondants.",
    "pt-br": "Use o EAG230 (PA66 GF30) como referência e inclua o EAG630H (PPA GF30) na primeira comparação de projetos sob carga em alta temperatura ou com rigidez insuficiente. Ambas as formulações contêm 30% de fibra de vidro. O EAG630H apresenta HDT e módulo de flexão mais altos no catálogo; a rigidez a quente e a resistência à fluência são verificadas pelos ensaios correspondentes.",
  },
  "下表为目录典型值，测试方法随各项数据列出。HDT 用于比较规定载荷下的热变形表现；长期使用温度、热老化与耐化学性分别查阅相应牌号数据。": {
    de: "Die Tabelle enthält typische Katalogwerte mit den jeweiligen Prüfverfahren. Die HDT dient dem Vergleich der Wärmeformbeständigkeit unter festgelegter Last. Für Dauergebrauchstemperatur, Wärmealterung und Chemikalienbeständigkeit gelten die entsprechenden werkstoffspezifischen Daten.",
    fr: "Le tableau présente les valeurs typiques du catalogue, avec la méthode d’essai de chaque propriété. La HDT sert à comparer la tenue à la déformation thermique sous une charge définie ; consultez les données propres au grade pour la température d’utilisation continue, le vieillissement thermique et la résistance chimique.",
    "pt-br": "A tabela apresenta valores típicos de catálogo, com o método de ensaio de cada propriedade. A HDT permite comparar a deformação térmica sob carga especificada; consulte os dados correspondentes de cada grade para temperatura de uso contínuo, envelhecimento térmico e resistência química.",
  },
  "复测 PA66 未达标项目并确认生产条件": {
    de: "Nicht erfüllte PA66-Anforderungen erneut prüfen und Produktionsbedingungen klären",
    fr: "Reprendre les essais non conformes du PA66 et confirmer les conditions de production",
    "pt-br": "Repetir os ensaios reprovados do PA66 e confirmar as condições de produção",
  },
  "在原先未达标的载荷、温度、湿度、化学或电气条件下复测，并核对装配、冲击、疲劳、蠕变、对偶面、后加工及所需资料。以性能改善和生产可行性作为放行依据。提交现用牌号与未达标测试项，获取针对性的 PPA／PA66 候选牌号对比、TDS 资料和试模样品支持。": {
    de: "Wiederholen Sie die Prüfung unter den Last-, Temperatur-, Feuchte-, chemischen oder elektrischen Bedingungen, bei denen das bisherige Bauteil die Anforderungen verfehlte. Prüfen Sie außerdem Montage, Schlagbeanspruchung, Ermüdung, Kriechen, Gegenflächen, Nachbearbeitung und erforderliche Unterlagen. Stützen Sie die Freigabe auf nachgewiesene Verbesserungen und die Fertigungsfähigkeit. Nennen Sie den aktuellen Werkstofftyp und die nicht bestandenen Prüfungen, um einen gezielten Vergleich von PPA-/PA66-Kandidaten, technische Datenblätter und Unterstützung mit Mustern für Werkzeugversuche zu erhalten.",
    fr: "Reprenez les essais dans les conditions de charge, de température, d’humidité, chimiques ou électriques initialement non conformes. Vérifiez aussi l’assemblage, les chocs, la fatigue, le fluage, les surfaces en contact, les opérations après moulage et les documents requis. Fondez la validation sur l’amélioration mesurée et la faisabilité en production. Indiquez le grade actuel et les essais non conformes pour obtenir une comparaison ciblée de grades PPA/PA66, des fiches techniques et un accompagnement avec des échantillons pour les essais de moulage.",
    "pt-br": "Repita os ensaios nas condições de carga, temperatura, umidade, exposição química ou elétrica que não foram atendidas. Verifique também montagem, impacto, fadiga, fluência, superfícies de contato, pós-processamento e documentos necessários. Baseie a aprovação na melhoria de desempenho e na viabilidade de produção. Envie o grade atual e os ensaios reprovados para obter uma comparação direcionada de candidatos em PPA/PA66, fichas técnicas e suporte com amostras para testes de moldagem.",
  },
  "列明当前 PA66 牌号未达标的高温、调湿、尺寸、化学、电气或耐久测试项。": {
    de: "Benennen Sie die nicht bestandenen Prüfungen des aktuellen PA66-Typs bei erhöhter Temperatur, nach Konditionierung sowie hinsichtlich Maßen, Chemikalien, Elektrik oder Dauerbeständigkeit.",
    fr: "Précisez les essais non conformes du PA66 actuel concernant la température élevée, le conditionnement, les dimensions, les propriétés chimiques ou électriques et la durabilité.",
    "pt-br": "Liste os ensaios não atendidos pelo PA66 atual quanto a alta temperatura, condicionamento, dimensões, desempenho químico ou elétrico e durabilidade.",
  },
  "复测性能改善，落实 PPA 生产条件": {
    de: "Leistungsverbesserung nachprüfen und PPA-Produktionsbedingungen umsetzen",
    fr: "Confirmer les gains par les essais et mettre en place les conditions de production du PPA",
    "pt-br": "Confirmar a melhoria nos ensaios e atender às condições de produção do PPA",
  },
  "用实际零件复测 PA66 未达标的项目，并确认 PPA 对干燥、温控、设备与模具的新增要求。": {
    de: "Wiederholen Sie die nicht bestandenen PA66-Prüfungen am realen Bauteil und klären Sie die zusätzlichen PPA-Anforderungen an Trocknung, Temperaturführung, Maschine und Werkzeug.",
    fr: "Reprenez sur les pièces réelles les essais non conformes du PA66 et vérifiez les exigences supplémentaires du PPA en matière de séchage, de régulation thermique, d’équipement et de moule.",
    "pt-br": "Repita nas peças reais os ensaios não atendidos pelo PA66 e confirme os requisitos adicionais do PPA quanto a secagem, controle de temperatura, equipamento e molde.",
  },
  "台益 PA66／PPA GF30 典型数据对比": {
    de: "Taiyi Polymer: typische Daten von PA66 GF30 und PPA GF30 im Vergleich",
    fr: "Taiyi Polymer : comparaison des valeurs typiques du PA66 GF30 et du PPA GF30",
    "pt-br": "Taiyi Polymer: comparação de dados típicos de PA66 GF30 e PPA GF30",
  },
  "列明 PA66 基准未达标的高温、调湿、尺寸、化学或电气测试项。": {
    de: "Benennen Sie die nicht bestandenen Prüfungen der PA66-Referenz bei erhöhter Temperatur, nach Konditionierung sowie hinsichtlich Maßen, Chemikalien oder Elektrik.",
    fr: "Précisez les essais non conformes de la référence PA66 concernant la température élevée, le conditionnement, les dimensions et les propriétés chimiques ou électriques.",
    "pt-br": "Liste os ensaios não atendidos pela referência em PA66 quanto a alta temperatura, condicionamento, dimensões e desempenho químico ou elétrico.",
  },
  "在目标注塑件上，按温度、湿度、化学、电气、装配和耐久要求验证具体 PPA 牌号。": {
    de: "Prüfen Sie den konkreten PPA-Typ am vorgesehenen Spritzgussteil anhand der Anforderungen an Temperatur, Feuchte, Chemikalien, Elektrik, Montage und Dauerbeständigkeit.",
    fr: "Validez le grade PPA sur la pièce injectée cible selon les exigences de température, d’humidité, de comportement chimique et électrique, d’assemblage et de durabilité.",
    "pt-br": "Valide o grade específico de PPA na peça injetada alvo conforme os requisitos de temperatura, umidade, desempenho químico e elétrico, montagem e durabilidade.",
  },
  "性能缺口": {
    de: "Leistungsdefizit",
    fr: "Écart de performance",
    "pt-br": "Deficiência de desempenho",
  },
};

const dictionaryFor = (locale: CopyAuditResourceLocale): Record<string, string> =>
  Object.fromEntries(Object.entries(copy).map(([source, translations]) => [source, translations[locale]]));

export const copyAuditResourceLocaleOverrides: Record<CopyAuditResourceLocale, Record<string, string>> = {
  de: dictionaryFor("de"),
  fr: dictionaryFor("fr"),
  "pt-br": dictionaryFor("pt-br"),
};
