type TranslationRow = readonly [
  source: string,
  german: string,
  french: string,
  portuguese: string,
];

const componentDetailTranslationRows = [
  [
    "比较材料应对方向，而不只是树脂名称",
    "Werkstoffrichtungen vergleichen, nicht nur Harznamen",
    "Comparer les orientations matériaux, pas seulement les noms de résine",
    "Compare direções de materiais, não apenas nomes de resinas",
  ],
  [
    "先提供已知信息，并标注尚未确认的内容",
    "Zuerst bekannte Angaben bereitstellen und offene Punkte kennzeichnen",
    "Fournir d’abord les informations connues et signaler les points à confirmer",
    "Comece pelas informações conhecidas e sinalize o que ainda precisa ser confirmado",
  ],
  [
    "明确首次反馈应形成什么结果",
    "Das erwartete Ergebnis der ersten Rückmeldung festlegen",
    "Définir le résultat attendu du premier retour",
    "Defina o resultado esperado do primeiro retorno",
  ],
  [
    "项目需要时再展开详细内容",
    "Details nur bei Bedarf des Projekts vertiefen",
    "Approfondir les détails lorsque le projet l’exige",
    "Aprofunde os detalhes quando o projeto exigir",
  ],
  [
    "打开下一项技术参考",
    "Nächste technische Referenz öffnen",
    "Ouvrir la référence technique suivante",
    "Abrir a próxima referência técnica",
  ],
  [
    "先从齿轮问题开始",
    "Mit dem Problem des Zahnrads beginnen",
    "Commencer par le problème de l’engrenage",
    "Comece pelo problema da engrenagem",
  ],
  [
    "定义可信齿轮材料比较的六类使用条件",
    "Die sechs Einsatzbedingungen für einen belastbaren Vergleich von Zahnradwerkstoffen",
    "Six conditions d’utilisation définissant une comparaison fiable des matériaux d’engrenage",
    "Seis condições de operação que definem uma comparação confiável de materiais para engrenagens",
  ],
  [
    "可能主导注塑齿轮精度的几何与工艺检查",
    "Geometrie- und Prozessprüfungen, die die Genauigkeit von Spritzgusszahnrädern bestimmen können",
    "Contrôles de géométrie et de procédé susceptibles de déterminer la précision d’un engrenage moulé",
    "Verificações de geometria e processo que podem determinar a precisão da engrenagem moldada",
  ],
  [
    "完成数据表初筛后所需的零部件与总成检查",
    "Bauteil- und Baugruppenprüfungen nach der Datenblatt-Vorauswahl",
    "Contrôles de la pièce et de l’assemblage requis après la présélection sur fiche technique",
    "Verificações da peça e do conjunto necessárias após a triagem das fichas técnicas",
  ],
  [
    "用于材料比较与零部件验证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und Bauteilvalidierung",
    "Ensemble complet des données projet pour comparer les matériaux et valider la pièce",
    "Conjunto completo de dados do projeto para comparação de materiais e validação da peça",
  ],
  [
    "申请样品前先建立齿轮候选清单",
    "Vor der Bemusterung eine Kandidatenauswahl für das Zahnrad erstellen",
    "Établir une liste restreinte pour l’engrenage avant l’échantillonnage",
    "Monte uma lista de candidatos para a engrenagem antes de solicitar amostras",
  ],
  [
    "先从滑动系统的问题开始",
    "Mit dem Problem des Gleitsystems beginnen",
    "Commencer par le problème du système coulissant",
    "Comece pelo problema do sistema deslizante",
  ],
  [
    "定义可信衬套比较的使用变量",
    "Die Einsatzgrößen für einen belastbaren Vergleich von Gleitlagern",
    "Variables d’utilisation définissant une comparaison fiable des bagues",
    "Variáveis de operação que definem uma comparação confiável de buchas",
  ],
  [
    "决定功能性装配后孔径的几何与工艺控制",
    "Geometrie- und Prozesskontrollen, die die funktionsfähige Bohrung nach der Montage bestimmen",
    "Contrôles de géométrie et de procédé déterminant l’alésage fonctionnel après assemblage",
    "Controles de geometria e processo que determinam o diâmetro interno funcional após a montagem",
  ],
  [
    "把材料初筛连接到接近量产总成的检查",
    "Prüfungen, die die Werkstoffvorauswahl mit der seriennahen Baugruppe verbinden",
    "Contrôles reliant la présélection des matériaux à un assemblage représentatif de la série",
    "Verificações que conectam a triagem de materiais ao conjunto representativo da produção",
  ],
  [
    "用于材料比较与衬套验证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und Gleitlagervalidierung",
    "Ensemble complet des données projet pour comparer les matériaux et valider la bague",
    "Conjunto completo de dados do projeto para comparação de materiais e validação da bucha",
  ],
  [
    "评估完整滑动界面",
    "Die vollständige Gleitpaarung bewerten",
    "Évaluer l’interface coulissante complète",
    "Avalie toda a interface deslizante",
  ],
  [
    "先从输送系统的问题开始",
    "Mit dem Problem des Fördersystems beginnen",
    "Commencer par le problème du système de convoyage",
    "Comece pelo problema do sistema de transporte",
  ],
  [
    "定义可信链条材料比较的系统变量",
    "Die Systemgrößen für einen belastbaren Vergleich von Kettenwerkstoffen",
    "Variables système définissant une comparaison fiable des matériaux de chaîne",
    "Variáveis do sistema que definem uma comparação confiável de materiais para correntes",
  ],
  [
    "保护节距、铰接、平面度和转动功能的几何与工艺控制",
    "Geometrie- und Prozesskontrollen zum Schutz von Teilung, Gelenken, Ebenheit und Beweglichkeit",
    "Contrôles de géométrie et de procédé préservant le pas, les articulations, la planéité et le mouvement",
    "Controles de geometria e processo que preservam passo, articulações, planicidade e movimento",
  ],
  [
    "把注塑链节数据连接到完整输送系统表现的检查",
    "Prüfungen, die Daten des Spritzguss-Kettenglieds mit der Leistung des gesamten Fördersystems verbinden",
    "Contrôles reliant les données du maillon moulé aux performances du convoyeur complet",
    "Verificações que conectam os dados do elo moldado ao desempenho do sistema de transporte completo",
  ],
  [
    "用于材料比较与输送系统验证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und Validierung des Fördersystems",
    "Ensemble complet des données projet pour comparer les matériaux et valider le système de convoyage",
    "Conjunto completo de dados do projeto para comparação de materiais e validação do sistema de transporte",
  ],
  [
    "把链条作为完整输送系统评估",
    "Die Kette als vollständiges Fördersystem bewerten",
    "Évaluer la chaîne comme un système de convoyage complet",
    "Avalie a corrente como um sistema de transporte completo",
  ],
  [
    "先从阀门功能问题开始",
    "Mit dem Problem der Ventilfunktion beginnen",
    "Commencer par le problème de fonctionnement de la vanne",
    "Comece pelo problema funcional da válvula",
  ],
  [
    "定义材料适用性的压力、流体、间隙和执行输入",
    "Druck-, Fluid-, Spiel- und Betätigungsdaten, die die Werkstoffeignung bestimmen",
    "Données de pression, de fluide, de jeu et d’actionnement qui déterminent l’adéquation du matériau",
    "Dados de pressão, fluido, folga e acionamento que definem a adequação do material",
  ],
  [
    "保护圆柱台肩、孔、阀口、密封和计量结构的控制",
    "Kontrollen zum Schutz zylindrischer Steuerkanten, Bohrungen, Anschlüsse, Dichtungen und Dosiergeometrien",
    "Contrôles préservant les portées cylindriques, alésages, orifices, joints et éléments de dosage",
    "Controles que preservam ressaltos cilíndricos, furos, portas, vedações e recursos de dosagem",
  ],
  [
    "把注塑件数据连接到切换、密封和计量表现的检查",
    "Prüfungen, die Daten des Formteils mit Schalt-, Dicht- und Dosierleistung verbinden",
    "Contrôles reliant les données de la pièce moulée aux performances de commutation, d’étanchéité et de dosage",
    "Verificações que conectam os dados da peça moldada ao desempenho de comutação, vedação e dosagem",
  ],
  [
    "用于材料比较与阀门认证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und Ventilqualifizierung",
    "Ensemble complet des données projet pour comparer les matériaux et qualifier la vanne",
    "Conjunto completo de dados do projeto para comparação de materiais e qualificação da válvula",
  ],
  [
    "选择聚合物之前先定义流体系统",
    "Das Fluidsystem definieren, bevor das Polymer ausgewählt wird",
    "Définir le circuit de fluide avant de sélectionner le polymère",
    "Defina o sistema de fluido antes de selecionar o polímero",
  ],
  [
    "先从纱线路径的问题开始",
    "Mit dem Problem des Garnlaufs beginnen",
    "Commencer par le problème du chemin du fil",
    "Comece pelo problema do percurso do fio",
  ],
  [
    "主导导向件表现的纱线、运动、几何、表面和环境输入",
    "Garn-, Bewegungs-, Geometrie-, Oberflächen- und Umgebungsdaten, die die Leistung der Führung bestimmen",
    "Données sur le fil, le mouvement, la géométrie, la surface et l’environnement qui déterminent les performances du guide",
    "Dados do fio, movimento, geometria, superfície e ambiente que determinam o desempenho do guia",
  ],
  [
    "保护纱线接触面、半径、槽、对中及模穴一致性的控制",
    "Kontrollen zum Schutz von Garnkontaktflächen, Radien, Schlitzen, Ausrichtung und Kavitätenkonstanz",
    "Contrôles protégeant les surfaces de contact avec le fil, les rayons, les rainures, l’alignement et l’homogénéité des empreintes",
    "Controles que preservam superfícies de contato com o fio, raios, ranhuras, alinhamento e consistência entre cavidades",
  ],
  [
    "把注塑表面连接到稳定纱线质量和设备运行的检查",
    "Prüfungen, die Formteiloberflächen mit stabiler Garnqualität und Maschinenbetrieb verbinden",
    "Contrôles reliant les surfaces moulées à la stabilité de la qualité du fil et du fonctionnement de la machine",
    "Verificações que conectam superfícies moldadas à estabilidade da qualidade do fio e da operação da máquina",
  ],
  [
    "用于材料比较与纺织设备验证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und Validierung der Textilmaschine",
    "Ensemble complet des données projet pour comparer les matériaux et valider l’équipement textile",
    "Conjunto completo de dados do projeto para comparação de materiais e validação do equipamento têxtil",
  ],
  [
    "让导向材料匹配纱线与设备",
    "Den Führungswerkstoff auf Garn und Maschine abstimmen",
    "Adapter le matériau du guide au fil et à la machine",
    "Combine o material do guia com o fio e a máquina",
  ],
  [
    "先从周转工艺的问题开始",
    "Mit dem Problem des Handhabungsprozesses beginnen",
    "Commencer par le problème du processus de manutention",
    "Comece pelo problema do processo de manuseio",
  ],
  [
    "主导托盘适用性的电气、热、尺寸、洁净度和搬运输入",
    "Elektrische, thermische, maßliche, reinheitsbezogene und Handhabungsdaten, die die Eignung des Trays bestimmen",
    "Données électriques, thermiques, dimensionnelles, de propreté et de manutention qui déterminent l’adéquation du plateau",
    "Dados elétricos, térmicos, dimensionais, de limpeza e de manuseio que determinam a adequação da bandeja",
  ],
  [
    "保护平面度、槽位位置、ESD 表现、洁净度和堆叠的控制",
    "Kontrollen zum Schutz von Ebenheit, Taschenposition, ESD-Verhalten, Sauberkeit und Stapelbarkeit",
    "Contrôles préservant la planéité, la position des logements, le comportement ESD, la propreté et l’empilage",
    "Controles que preservam planicidade, posição dos alojamentos, comportamento ESD, limpeza e empilhamento",
  ],
  [
    "把材料数据连接到器件保护和自动周转的检查",
    "Prüfungen, die Werkstoffdaten mit Bauteilschutz und automatisierter Handhabung verbinden",
    "Contrôles reliant les données matériau à la protection des composants et à la manutention automatisée",
    "Verificações que conectam dados do material à proteção dos componentes e ao manuseio automatizado",
  ],
  [
    "用于材料比较与 IC 托盘认证的完整项目输入",
    "Vollständige Projektdaten für Werkstoffvergleich und IC-Tray-Qualifizierung",
    "Ensemble complet des données projet pour comparer les matériaux et qualifier le plateau IC",
    "Conjunto completo de dados do projeto para comparação de materiais e qualificação da bandeja de IC",
  ],
  [
    "选择托盘材料之前先定义周转工艺",
    "Den Handhabungsprozess definieren, bevor der Tray-Werkstoff ausgewählt wird",
    "Définir le processus de manutention avant de sélectionner le matériau du plateau",
    "Defina o processo de manuseio antes de selecionar o material da bandeja",
  ],
] as const satisfies readonly TranslationRow[];

const createOverrides = (translationIndex: 1 | 2 | 3) =>
  Object.fromEntries(
    componentDetailTranslationRows.map((row) => [
      row[0],
      row[translationIndex],
    ]),
  ) as Readonly<Record<string, string>>;

export const componentDetailLocaleOverrides = {
  de: createOverrides(1),
  fr: createOverrides(2),
  "pt-br": createOverrides(3),
} as const;
