type PomSelectionLocale = "de" | "fr" | "pt-br";

const copy: Record<string, Record<PomSelectionLocale, string>> = {
  "应用页列出典型零件、材料选项与选材重点。候选牌号需按实际工况和项目要求验证。": {
    de: "Die Anwendungsseiten beschreiben typische Bauteile, Werkstoffoptionen und Auswahlkriterien. Kandidatentypen müssen unter den tatsächlichen Einsatzbedingungen und gemäß den Projektanforderungen validiert werden.",
    fr: "Les pages d’application présentent les pièces typiques, les options de matériaux et les critères de sélection. Les grades candidats doivent être validés dans les conditions réelles d’utilisation et selon les exigences du projet.",
    "pt-br": "As páginas de aplicação apresentam peças típicas, opções de materiais e critérios de seleção. Os grades candidatos devem ser validados nas condições reais de operação e conforme os requisitos do projeto.",
  },
  "MoS2 改性黑色耐磨 POM。复杂流道或充模流动性敏感的零件，首轮优先评估 EMS102（MFI 8 g/10 min，拉伸强度 60 MPa）。": {
    de: "Schwarzes, mit MoS2 modifiziertes verschleißfestes POM. Bei komplexen Fließwegen oder fließkritischen Bauteilen EMS102 in die erste Bemusterung aufnehmen (MFI 8 g/10 min, Zugfestigkeit 60 MPa).",
    fr: "POM noir anti-usure modifié au MoS2. Pour les parcours d’écoulement complexes ou les pièces sensibles au remplissage, retenir EMS102 pour les premiers essais (MFI 8 g/10 min, résistance à la traction 60 MPa).",
    "pt-br": "POM preto resistente ao desgaste, modificado com MoS2. Para percursos de fluxo complexos ou peças sensíveis ao preenchimento, priorize EMS102 na primeira avaliação (MFI 8 g/10 min, resistência à tração 60 MPa).",
  },
  "MoS2 改性黑色耐磨 POM。滑动与传动件以拉伸强度为主要筛选指标时，从 EMS162 切入对比（65 MPa，MFI 7 g/10 min）。": {
    de: "Schwarzes, mit MoS2 modifiziertes verschleißfestes POM. Bei Gleit- und Antriebsbauteilen, für die Zugfestigkeit das Hauptkriterium ist, den Vergleich mit EMS162 beginnen (65 MPa, MFI 7 g/10 min).",
    fr: "POM noir anti-usure modifié au MoS2. Pour les pièces de glissement et de transmission dont le critère principal est la résistance à la traction, commencer la comparaison par EMS162 (65 MPa, MFI 7 g/10 min).",
    "pt-br": "POM preto resistente ao desgaste, modificado com MoS2. Para peças de deslizamento e transmissão em que a resistência à tração é o principal critério, inicie a comparação por EMS162 (65 MPa, MFI 7 g/10 min).",
  },
  "MoS2 填充 · 拉伸强度优先": {
    de: "MoS2-Füllung · Schwerpunkt Zugfestigkeit",
    fr: "Charge MoS2 · priorité à la résistance en traction",
    "pt-br": "Carga de MoS2 · prioridade à resistência à tração",
  },
  "MoS2 填充 · 充模流动性优先": {
    de: "MoS2-Füllung · Schwerpunkt Fließfähigkeit",
    fr: "Charge MoS2 · priorité au remplissage",
    "pt-br": "Carga de MoS2 · prioridade ao preenchimento",
  },
  "充模流动性优先": { de: "Schwerpunkt Fließfähigkeit", fr: "Priorité au remplissage", "pt-br": "Prioridade ao preenchimento" },
  "目录 MFI 8 g/10 min": { de: "Katalog-MFI 8 g/10 min", fr: "MFI catalogue 8 g/10 min", "pt-br": "MFI de catálogo 8 g/10 min" },
  "拉伸强度优先": { de: "Schwerpunkt Zugfestigkeit", fr: "Priorité à la résistance en traction", "pt-br": "Prioridade à resistência à tração" },
  "目录拉伸强度 65 MPa": { de: "Katalog-Zugfestigkeit 65 MPa", fr: "Résistance en traction catalogue 65 MPa", "pt-br": "Resistência à tração de catálogo 65 MPa" },
  "充模敏感的零件优先将 EMS102 纳入首轮试模，记录填充完整性与熔接线，再按实际对偶面比较启动阻力、磨耗和间隙变化。": {
    de: "EMS102 für fließkritische Bauteile in die erste Werkzeugbemusterung aufnehmen. Vollständige Formfüllung und Bindenähte dokumentieren; anschließend Anfahrwiderstand, Verschleiß und Spieländerung mit der vorgesehenen Gegenfläche vergleichen.",
    fr: "Retenir EMS102 pour les premiers essais des pièces sensibles au remplissage. Relever le remplissage complet et les lignes de soudure, puis comparer l’effort de démarrage, l’usure et l’évolution du jeu avec la surface antagoniste prévue.",
    "pt-br": "Inclua EMS102 no primeiro teste de molde de peças sensíveis ao preenchimento. Registre a completude do preenchimento e as linhas de solda; depois compare a resistência de partida, o desgaste e a variação de folga com a contraface prevista.",
  },
  "以拉伸受力为主要要求的滑动与传动件，从 EMS162 切入试模。用现用材料作基准，比较受力变形、接触磨耗与间隙保持。": {
    de: "Die Werkzeugbemusterung von Gleit- und Antriebsbauteilen mit Schwerpunkt Zugbelastung mit EMS162 beginnen. Den bisherigen Werkstoff als Referenz verwenden und Verformung unter Last, Kontaktverschleiß und Spielhaltung vergleichen.",
    fr: "Commencer les essais de moulage par EMS162 pour les pièces de glissement et de transmission principalement sollicitées en traction. Prendre le matériau actuel comme référence pour comparer la déformation sous charge, l’usure de contact et le maintien du jeu.",
    "pt-br": "Inicie os testes de molde com EMS162 para peças de deslizamento e transmissão cuja principal exigência é a tração. Use o material atual como referência para comparar deformação sob carga, desgaste de contato e manutenção da folga.",
  },
  "目录典型值；拉伸强度：ISO 527；MFI：ISO 1133，195 °C／2.16 kg。牌号放行以目标摩擦副下的磨耗、间隙和寿命验收结果为准。": {
    de: "Typische Katalogwerte; Zugfestigkeit: ISO 527; MFI: ISO 1133, 195 °C/2,16 kg. Die Werkstofffreigabe erfolgt anhand der Abnahmeergebnisse für Verschleiß, Spiel und Lebensdauer mit der vorgesehenen Reibpaarung.",
    fr: "Valeurs typiques du catalogue ; traction : ISO 527 ; MFI : ISO 1133, 195 °C/2,16 kg. La validation du grade repose sur les résultats d’acceptation en usure, jeu et durée de vie avec le couple de frottement prévu.",
    "pt-br": "Valores típicos do catálogo; resistência à tração: ISO 527; MFI: ISO 1133, 195 °C/2,16 kg. A liberação do grade se baseia nos resultados de aceitação de desgaste, folga e vida útil com o par de atrito previsto.",
  },
  "EMS102 选型与试模资料": { de: "EMS102: Auswahl und Werkzeugbemusterung", fr: "EMS102 : sélection et essais de moulage", "pt-br": "EMS102: seleção e testes de molde" },
  "EMS162 选型与试模资料": { de: "EMS162: Auswahl und Werkzeugbemusterung", fr: "EMS162 : sélection et essais de moulage", "pt-br": "EMS162: seleção e testes de molde" },
  "说明零件结构、现用材料和磨损问题，获取 EMS102 与 EMS162 的物性对比、TDS 和试模样品支持。": {
    de: "Beschreiben Sie Bauteilgeometrie, bisherigen Werkstoff und Verschleißproblem. Sie erhalten einen Eigenschaftsvergleich von EMS102 und EMS162, TDS und Unterstützung mit Mustern zur Werkzeugbemusterung.",
    fr: "Décrivez la géométrie, le matériau actuel et le problème d’usure pour obtenir une comparaison des propriétés d’EMS102 et d’EMS162, les TDS et un accompagnement avec des échantillons pour les essais de moulage.",
    "pt-br": "Descreva a geometria da peça, o material atual e o problema de desgaste para receber a comparação de propriedades de EMS102 e EMS162, TDS e suporte com amostras para testes de molde.",
  },
  "说明零件受力、对偶件和当前磨损问题，获取 EMS162 与 EMS102 的物性对比、TDS 和试模样品支持。": {
    de: "Beschreiben Sie Bauteilbelastung, Gegenkörper und aktuelles Verschleißproblem. Sie erhalten einen Eigenschaftsvergleich von EMS162 und EMS102, TDS und Unterstützung mit Mustern zur Werkzeugbemusterung.",
    fr: "Précisez les efforts, la pièce antagoniste et le problème d’usure pour obtenir une comparaison des propriétés d’EMS162 et d’EMS102, les TDS et un accompagnement avec des échantillons pour les essais de moulage.",
    "pt-br": "Informe os esforços na peça, a contrapeça e o problema atual de desgaste para receber a comparação de propriedades de EMS162 e EMS102, TDS e suporte com amostras para testes de molde.",
  },
};

const dictionaryFor = (locale: PomSelectionLocale) =>
  Object.fromEntries(Object.entries(copy).map(([source, translations]) => [source, translations[locale]]));

export const pomSelectionLocaleOverrides = {
  de: dictionaryFor("de"),
  fr: dictionaryFor("fr"),
  "pt-br": dictionaryFor("pt-br"),
};
