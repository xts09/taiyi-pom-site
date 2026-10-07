type FunctionalPomLocale = "de" | "fr" | "pt-br";

const copy: Readonly<Record<string, Readonly<Record<FunctionalPomLocale, string>>>> = {
  "目录牌号": {
    de: "Werkstofftypen im Katalog",
    fr: "Grades du catalogue",
    "pt-br": "Grades do catálogo",
  },
  "配方 / 系列": {
    de: "Rezeptur / Serie",
    fr: "Formulation / série",
    "pt-br": "Formulação / série",
  },
  "目录电性能分类": {
    de: "Elektrische Klassifizierung",
    fr: "Classification électrique",
    "pt-br": "Classificação elétrica",
  },
  "可选 POM 电荷控制牌号": {
    de: "POM-Werkstofftypen zur elektrostatischen Kontrolle",
    fr: "Grades POM pour le contrôle des charges électrostatiques",
    "pt-br": "Grades de POM para controle de cargas eletrostáticas",
  },
  "面向齿轮、衬套、滚轮和滑动件的耐磨与低摩擦 POM，包含 PTFE、MoS2、芳纶和硅油改性配方，以及不同流动性和增强选项。": {
    de: "Verschleißarmes und reibungsarmes POM für Zahnräder, Buchsen, Rollen und Gleitteile. Das Sortiment umfasst Rezepturen mit PTFE, MoS2, Aramid und Silikonöl sowie unterschiedliche Fließ- und Verstärkungsvarianten.",
    fr: "POM résistant à l’usure et à faible frottement pour engrenages, bagues, rouleaux et pièces coulissantes. La gamme comprend des formulations au PTFE, au MoS2, à l’aramide et à l’huile de silicone, avec différentes options de fluidité et de renfort.",
    "pt-br": "POM resistente ao desgaste e de baixo atrito para engrenagens, buchas, roletes e peças deslizantes. A linha inclui formulações com PTFE, MoS2, aramida e óleo de silicone, com diferentes opções de fluidez e reforço.",
  },
  "磨损、摩擦与表面寿命": {
    de: "Verschleiß, Reibung und Oberflächenlebensdauer",
    fr: "Usure, frottement et durée de vie des surfaces",
    "pt-br": "Desgaste, atrito e vida útil da superfície",
  },
  "耐磨性关注反复接触中的材料损耗；摩擦关系到滑动阻力、启动力和黏滑表现。两者都受对偶材料和工作条件影响。": {
    de: "Verschleißfestigkeit beschreibt den Materialverlust bei wiederholtem Kontakt. Reibung beeinflusst Gleitwiderstand, Anlaufkraft und Stick-Slip-Verhalten. Beides hängt vom Gegenwerkstoff und den Betriebsbedingungen ab.",
    fr: "La résistance à l’usure concerne la perte de matière lors de contacts répétés. Le frottement influe sur la résistance au glissement, la force de démarrage et le comportement de stick-slip. Ces deux aspects dépendent du matériau en contact et des conditions de fonctionnement.",
    "pt-br": "A resistência ao desgaste se refere à perda de material durante contatos repetidos. O atrito influencia a resistência ao deslizamento, a força de partida e o comportamento de stick-slip. Ambos dependem do material de contato e das condições de operação.",
  },
  "磨损量与表面状态变化": {
    de: "Materialverlust und Veränderungen der Oberfläche",
    fr: "Perte de matière et évolution de l’état de surface",
    "pt-br": "Perda de material e alterações na superfície",
  },
  "滑动阻力与启动力": {
    de: "Gleitwiderstand und Anlaufkraft",
    fr: "Résistance au glissement et force de démarrage",
    "pt-br": "Resistência ao deslizamento e força de partida",
  },
  "黏滑现象与运行噪声": {
    de: "Stick-Slip-Verhalten und Betriebsgeräusche",
    fr: "Comportement de stick-slip et bruit en fonctionnement",
    "pt-br": "Comportamento de stick-slip e ruído durante a operação",
  },
  "反复运动后的尺寸变化": {
    de: "Maßänderungen nach wiederholter Bewegung",
    fr: "Variations dimensionnelles après des mouvements répétés",
    "pt-br": "Variações dimensionais após movimentos repetidos",
  },
  "齿轮、衬套、滚轮和导向件的接触表面、运动方式与使用寿命要求各不相同。": {
    de: "Zahnräder, Buchsen, Rollen und Führungen unterscheiden sich in Kontaktflächen, Bewegungsabläufen und Anforderungen an die Lebensdauer.",
    fr: "Engrenages, bagues, rouleaux et guides présentent des surfaces de contact, des mouvements et des exigences de durée de vie différents.",
    "pt-br": "Engrenagens, buchas, roletes e guias têm superfícies de contato, movimentos e requisitos de vida útil distintos.",
  },
  "齿轮、蜗轮与凸轮": {
    de: "Zahnräder, Schneckenräder und Nocken",
    fr: "Engrenages, roues à vis sans fin et cames",
    "pt-br": "Engrenagens, coroas para rosca sem-fim e cames",
  },
  "衬套、套筒与滚轮": {
    de: "Buchsen, Hülsen und Rollen",
    fr: "Bagues, manchons et rouleaux",
    "pt-br": "Buchas, luvas e roletes",
  },
  "滑块、导向件与输送部件": {
    de: "Gleiter, Führungen und Förderkomponenten",
    fr: "Coulisseaux, guides et composants de convoyage",
    "pt-br": "Elementos deslizantes, guias e componentes de transporte",
  },
  "纺织机械零件及其他运动组件": {
    de: "Textilmaschinenbauteile und andere bewegliche Baugruppen",
    fr: "Pièces de machines textiles et autres ensembles mobiles",
    "pt-br": "Peças de máquinas têxteis e outros conjuntos móveis",
  },
  "耐磨配方与牌号": {
    de: "Verschleißarme Rezepturen und Werkstofftypen",
    fr: "Formulations et grades résistants à l’usure",
    "pt-br": "Formulações e grades resistentes ao desgaste",
  },
  "典型运动部件": {
    de: "Typische bewegliche Bauteile",
    fr: "Composants mobiles courants",
    "pt-br": "Componentes móveis típicos",
  },
  "各配方采用不同填料和添加剂。牌号链接提供现有性能数据，具体磨损与摩擦表现取决于对偶表面和测试条件。": {
    de: "Die Rezepturen verwenden unterschiedliche Füllstoffe und Additive. Die verlinkten Werkstoffseiten enthalten die verfügbaren Eigenschaftsdaten. Verschleiß und Reibung hängen von der Gegenfläche und den Prüfbedingungen ab.",
    fr: "Ces formulations utilisent différents renforts et additifs. Les pages de grades liées présentent les données disponibles. L’usure et le frottement dépendent de la surface en contact et des conditions d’essai.",
    "pt-br": "As formulações usam diferentes cargas e aditivos. As páginas de grades vinculadas apresentam os dados disponíveis. O desgaste e o atrito dependem da superfície de contato e das condições de ensaio.",
  },
  "PTFE 填充 POM；MFI 7.5 g/10 min；本色。": {
    de: "POM mit PTFE-Füllung; MFI 7.5 g/10 min; naturfarben.",
    fr: "POM chargé de PTFE ; MFI 7.5 g/10 min ; couleur naturelle.",
    "pt-br": "POM com PTFE; MFI 7.5 g/10 min; cor natural.",
  },
  "硅油改性 POM。": {
    de: "POM mit Silikonöl-Modifizierung.",
    fr: "POM modifié à l’huile de silicone.",
    "pt-br": "POM modificado com óleo de silicone.",
  },
  "高流动耐磨 POM。": {
    de: "Leichtfließendes, verschleißarmes POM.",
    fr: "POM résistant à l’usure à haute fluidité.",
    "pt-br": "POM de alta fluidez e resistente ao desgaste.",
  },
  "了解台益的碳纳米管和碳纤维 POM 配方，查看导电与抗静电牌号、电性能范围及选型所需的测试条件。": {
    de: "POM-Rezepturen von Taiyi Polymer mit Kohlenstoffnanoröhren und Kohlenstofffasern. Elektrisch leitfähige und antistatische Werkstofftypen, elektrische Bereiche und Prüfbedingungen für die Werkstoffauswahl.",
    fr: "Découvrez les formulations POM de Taiyi Polymer à nanotubes et fibres de carbone, les grades conducteurs et antistatiques, leurs plages électriques et les conditions d’essai utiles à la sélection.",
    "pt-br": "Conheça as formulações de POM da Taiyi Polymer com nanotubos e fibras de carbono, os grades condutivos e antiestáticos, as faixas elétricas e as condições de ensaio para seleção do material.",
  },
  "用于电荷控制零件的 POM 配混料，包含碳纳米管和碳纤维配方。目录中的电性能范围可结合机械性能、颜色及成品要求进行比较。": {
    de: "POM-Compounds für Bauteile mit Anforderungen an die elektrostatische Kontrolle, mit Kohlenstoffnanoröhren- und Kohlenstofffaser-Rezepturen. Die elektrischen Katalogbereiche lassen sich zusammen mit mechanischen Eigenschaften, Farbe und Anforderungen an das Fertigteil vergleichen.",
    fr: "Compounds POM pour les pièces nécessitant un contrôle des charges électrostatiques, avec des formulations à nanotubes et fibres de carbone. Les plages électriques du catalogue se comparent avec les propriétés mécaniques, la couleur et les exigences de la pièce finie.",
    "pt-br": "Compostos de POM para peças que exigem controle de cargas eletrostáticas, com formulações de nanotubos e fibras de carbono. As faixas elétricas do catálogo podem ser comparadas com as propriedades mecânicas, a cor e os requisitos da peça acabada.",
  },
  "讨论导电 POM 应用": {
    de: "Leitfähiges POM besprechen",
    fr: "Parler de votre application",
    "pt-br": "Conversar sobre POM condutivo",
  },
  "查看导电 POM 牌号数据": {
    de: "Daten zu leitfähigem POM",
    fr: "Données du POM conducteur",
    "pt-br": "Dados do POM condutivo",
  },
  "表中电性能范围用于目录分类。牌号的具体电阻率数据还需注明表面或体积测量、单位及测试条件。": {
    de: "Die elektrischen Bereiche dienen der Katalogklassifizierung. Werkstoffspezifische Widerstandsdaten benötigen Angaben zu Oberflächen- oder Volumenmessung, Einheiten und Prüfbedingungen.",
    fr: "Les plages électriques servent au classement du catalogue. Les données de résistivité propres à un grade doivent préciser la mesure en surface ou en volume, les unités et les conditions d’essai.",
    "pt-br": "As faixas elétricas organizam as opções do catálogo. Os dados de resistividade de cada grade devem indicar medição superficial ou volumétrica, unidades e condições de ensaio.",
  },
  "电荷控制零件的电性能数据": {
    de: "Elektrische Daten für Bauteile zur elektrostatischen Kontrolle",
    fr: "Données électriques pour les pièces de contrôle des charges",
    "pt-br": "Dados elétricos para peças de controle de cargas",
  },
  "抗静电、静电耗散和导电零件的电性能目标各有不同。用于比较牌号的数据需要把目标范围、测量类型和测试条件对应起来。": {
    de: "Antistatische, ableitfähige und elektrisch leitfähige Bauteile haben unterschiedliche elektrische Zielwerte. Vergleichbare Werkstoffdaten verbinden den Zielbereich mit der Messgröße und den Prüfbedingungen.",
    fr: "Les pièces antistatiques, dissipatives et conductrices répondent à des objectifs électriques différents. Pour comparer les grades, les données doivent associer la plage visée au type de mesure et aux conditions d’essai.",
    "pt-br": "Peças antiestáticas, dissipativas e condutivas têm objetivos elétricos diferentes. A comparação entre grades exige dados que relacionem a faixa desejada ao tipo de medição e às condições de ensaio.",
  },
  "目标范围与测量单位": {
    de: "Zielbereich und Messeinheiten",
    fr: "Plage visée et unités de mesure",
    "pt-br": "Faixa desejada e unidades de medição",
  },
  "测试方法与试样调节条件": {
    de: "Prüfmethode und Probenkonditionierung",
    fr: "Méthode d’essai et conditionnement des éprouvettes",
    "pt-br": "Método de ensaio e condicionamento dos corpos de prova",
  },
  "成品零件的电性能要求": {
    de: "Elektrische Anforderungen an das Fertigteil",
    fr: "Exigences électriques de la pièce finie",
    "pt-br": "Requisitos elétricos da peça acabada",
  },
  "电性能与机械性能的平衡": {
    de: "Abstimmung elektrischer und mechanischer Eigenschaften",
    fr: "Équilibre des propriétés électriques et mécaniques",
    "pt-br": "Equilíbrio entre propriedades elétricas e mecânicas",
  },
  "填料体系可能影响流动性、冲击强度、刚性、磨损和表面质量。精密注塑件的选材需要同时考虑这些性能与电性能目标。": {
    de: "Das Füllstoffsystem kann Fließverhalten, Schlagzähigkeit, Steifigkeit, Verschleiß und Oberflächenqualität beeinflussen. Bei Präzisionsspritzgussteilen zählen diese Eigenschaften ebenso wie die elektrischen Zielwerte.",
    fr: "Le système de charges peut modifier la fluidité, la résistance au choc, la rigidité, l’usure et la qualité de surface. Ces propriétés comptent autant que les objectifs électriques pour une pièce de précision moulée par injection.",
    "pt-br": "O sistema de cargas pode influenciar a fluidez, a resistência ao impacto, a rigidez, o desgaste e a qualidade da superfície. Essas propriedades também devem ser consideradas com as metas elétricas em peças de precisão moldadas por injeção.",
  },
  "强度、冲击与尺寸要求": {
    de: "Festigkeits-, Schlagzähigkeits- und Maßanforderungen",
    fr: "Exigences de résistance, de tenue au choc et de dimensions",
    "pt-br": "Requisitos de resistência, impacto e dimensões",
  },
  "颜色与表面质量": {
    de: "Farbe und Oberflächenqualität",
    fr: "Couleur et qualité de surface",
    "pt-br": "Cor e qualidade da superfície",
  },
  "TDS 与注塑样件数据": {
    de: "TDS und Daten von Spritzgussmustern",
    fr: "TDS et données des échantillons moulés par injection",
    "pt-br": "TDS e dados de amostras moldadas por injeção",
  },
  "查看 EPTL402 PTFE 填充耐磨 POM 的流动性、力学与热性能，以及滑动件、轴套和齿轮应用参考。可申请 TDS 和样品。": {
    de: "Fließ-, mechanische und thermische Daten für das PTFE-gefüllte, verschleißarme POM EPTL402 sowie Anwendungshinweise für Gleitteile, Buchsen und Zahnräder. TDS und Muster können angefragt werden.",
    fr: "Données de fluidité, mécaniques et thermiques du POM EPTL402 chargé de PTFE, avec des applications en pièces coulissantes, bagues et engrenages. TDS et échantillons sur demande.",
    "pt-br": "Dados de fluidez, mecânicos e térmicos do POM EPTL402 com PTFE, com aplicações em peças deslizantes, buchas e engrenagens. TDS e amostras podem ser solicitadas.",
  },
  "PTFE 填充耐磨 POM": {
    de: "Verschleißarmes POM mit PTFE-Füllung",
    fr: "POM résistant à l’usure chargé de PTFE",
    "pt-br": "POM com PTFE resistente ao desgaste",
  },
  "EPTL402 是 PTFE 填充耐磨 POM，面向滑动件、轴套、齿轮和运动组件。现有数据表列有流动性、力学和热性能，供牌号比较与样件选材参考。": {
    de: "EPTL402 ist ein verschleißarmes POM mit PTFE-Füllung für Gleitteile, Buchsen, Zahnräder und bewegliche Baugruppen. Das vorhandene Datenblatt enthält Fließ-, mechanische und thermische Eigenschaften für den Werkstoffvergleich und die Musterauswahl.",
    fr: "EPTL402 est un POM résistant à l’usure chargé de PTFE pour pièces coulissantes, bagues, engrenages et ensembles mobiles. La fiche existante présente les propriétés de fluidité, mécaniques et thermiques pour comparer les grades et choisir des échantillons.",
    "pt-br": "EPTL402 é um POM resistente ao desgaste com PTFE para peças deslizantes, buchas, engrenagens e conjuntos móveis. A ficha existente apresenta propriedades de fluidez, mecânicas e térmicas para comparação entre grades e seleção de amostras.",
  },
  "PTFE 填充配方": {
    de: "Rezeptur mit PTFE-Füllung",
    fr: "Formulation chargée de PTFE",
    "pt-br": "Formulação com PTFE",
  },
  "耐磨 POM": {
    de: "Verschleißarmes POM",
    fr: "POM résistant à l’usure",
    "pt-br": "POM resistente ao desgaste",
  },
  "面向滑动组件": {
    de: "Für Gleitkomponenten",
    fr: "Pour composants coulissants",
    "pt-br": "Para componentes deslizantes",
  },
  "样件评估关注实际摩擦副中的磨耗、噪声、尺寸变化和使用寿命，测试条件包括载荷、速度、润滑与温度。": {
    de: "Die Musterbewertung betrachtet Verschleiß, Geräusche, Maßänderungen und Lebensdauer in der tatsächlichen Reibpaarung. Zu den Prüfbedingungen gehören Belastung, Geschwindigkeit, Schmierung und Temperatur.",
    fr: "L’évaluation des échantillons porte sur l’usure, le bruit, les variations dimensionnelles et la durée de vie du couple de frottement réel. Les conditions d’essai comprennent la charge, la vitesse, la lubrification et la température.",
    "pt-br": "A avaliação de amostras considera desgaste, ruído, variações dimensionais e vida útil no par de atrito real. As condições de ensaio incluem carga, velocidade, lubrificação e temperatura.",
  },
  "数据表中的性能值用于初步选材。摩擦与磨耗表现需结合对偶材料、表面粗糙度及实际工况确认。": {
    de: "Die Datenblattwerte dienen der Vorauswahl. Reibung und Verschleiß müssen mit dem jeweiligen Gegenwerkstoff, der Oberflächenrauheit und den tatsächlichen Betriebsbedingungen bewertet werden.",
    fr: "Les valeurs de la fiche servent à la présélection. Le frottement et l’usure doivent être évalués avec le matériau en contact, la rugosité de surface et les conditions réelles de fonctionnement.",
    "pt-br": "Os valores da ficha servem à seleção preliminar. O atrito e o desgaste devem ser avaliados com o material de contato, a rugosidade da superfície e as condições reais de operação.",
  },
  "EPTL402 数据与样品": {
    de: "EPTL402: Daten und Muster",
    fr: "EPTL402 : données et échantillons",
    "pt-br": "EPTL402: dados e amostras",
  },
  "提供对偶材料、载荷、速度和润滑情况，可帮助判断 EPTL402 是否适合您的零件。也可注明颜色、用量及所需技术资料。": {
    de: "Angaben zu Gegenwerkstoff, Belastung, Geschwindigkeit und Schmierung helfen bei der Bewertung von EPTL402 für Ihr Bauteil. Nennen Sie auch Farbe, Bedarf und benötigte technische Unterlagen.",
    fr: "Le matériau en contact, la charge, la vitesse et la lubrification aident à évaluer EPTL402 pour votre pièce. Vous pouvez aussi préciser la couleur, le volume et les documents techniques souhaités.",
    "pt-br": "Informações sobre material de contato, carga, velocidade e lubrificação ajudam a avaliar o EPTL402 para sua peça. Informe também a cor, o volume e os documentos técnicos necessários.",
  },
};

const dictionaryFor = (locale: FunctionalPomLocale): Readonly<Record<string, string>> =>
  Object.fromEntries(Object.entries(copy).map(([source, translations]) => [source, translations[locale]]));

export const functionalPomLocaleOverrides = {
  de: dictionaryFor("de"),
  fr: dictionaryFor("fr"),
  "pt-br": dictionaryFor("pt-br"),
};
