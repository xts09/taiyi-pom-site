type PrivacyConsentLocale = "de" | "fr" | "pt-br";

export const privacyConsentLocaleOverrides: Record<
  PrivacyConsentLocale,
  Readonly<Record<string, string>>
> = {
  de: {
    "如果您同意广告衡量，Google Ads 可能使用广告 Cookie、广告点击标识符和转化事件数据，将广告互动与本网站的后续询盘关联。":
      "Wenn Sie der Werbemessung zustimmen, kann Google Ads Werbe-Cookies, Anzeigenklick-Kennungen und Conversion-Ereignisdaten verwenden, um Anzeigeninteraktionen mit späteren Anfragen auf dieser Website zu verknüpfen.",
    "在您同意广告衡量后，了解哪些广告互动带来了询盘，并评估广告投放表现。":
      "Nach Ihrer Zustimmung zur Werbemessung ermitteln wir, welche Anzeigeninteraktionen zu Anfragen führen, und bewerten die Anzeigenleistung.",
    "Cookie、分析与广告衡量": "Cookies, Website-Analyse und Werbemessung",
    "点击“全部接受”将启用网站分析和广告衡量。Google Analytics 可能使用第一方 Cookie，并收集设备、浏览器、大致位置和网站交互数据。":
      "Mit „Alle akzeptieren“ aktivieren Sie Website-Analyse und Werbemessung. Google Analytics kann First-Party-Cookies verwenden und Daten zu Gerät, Browser, ungefährem Standort und Website-Nutzung erfassen.",
    "Google Ads 广告衡量在您点击“全部接受”后启用。它可能使用广告 Cookie、广告点击标识符和转化事件数据，衡量广告互动与后续询盘的关联。广告个性化保持关闭。":
      "Die Werbemessung von Google Ads wird aktiviert, wenn Sie „Alle akzeptieren“ wählen. Sie kann Werbe-Cookies, Anzeigenklick-Kennungen und Conversion-Ereignisdaten verwenden, um den Zusammenhang zwischen Anzeigeninteraktionen und späteren Anfragen zu messen. Personalisierte Werbung bleibt deaktiviert.",
    "我们会在浏览器中保存您的选择。您可以通过页脚中的“Cookie 设置”接受或拒绝可选 Cookie，随时更改或撤回同意。关闭选择面板不会更改现有选择。您也可以通过浏览器设置阻止或删除 Cookie。":
      "Wir speichern Ihre Auswahl in Ihrem Browser. Über die Cookie-Einstellungen in der Fußzeile können Sie optionale Cookies akzeptieren oder ablehnen und Ihre Zustimmung jederzeit ändern oder widerrufen. Beim Schließen bleibt die bisherige Auswahl unverändert. Sie können Cookies auch über die Browsereinstellungen blockieren oder löschen.",
    "有关 Google 处理数据的更多信息，请参阅其":
      "Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der",
  },
  fr: {
    "如果您同意广告衡量，Google Ads 可能使用广告 Cookie、广告点击标识符和转化事件数据，将广告互动与本网站的后续询盘关联。":
      "Si vous autorisez la mesure publicitaire, Google Ads peut utiliser des cookies publicitaires, des identifiants de clic publicitaire et des données d’événements de conversion pour associer les interactions publicitaires aux demandes ultérieures sur ce site.",
    "在您同意广告衡量后，了解哪些广告互动带来了询盘，并评估广告投放表现。":
      "Après votre accord pour la mesure publicitaire, déterminer quelles interactions publicitaires génèrent des demandes et évaluer les performances des annonces.",
    "Cookie、分析与广告衡量": "Cookies, analyse du site et mesure publicitaire",
    "点击“全部接受”将启用网站分析和广告衡量。Google Analytics 可能使用第一方 Cookie，并收集设备、浏览器、大致位置和网站交互数据。":
      "En sélectionnant « Tout accepter », vous activez l’analyse du site et la mesure publicitaire. Google Analytics peut utiliser des cookies internes et recueillir des données sur l’appareil, le navigateur, la localisation approximative et l’utilisation du site.",
    "Google Ads 广告衡量在您点击“全部接受”后启用。它可能使用广告 Cookie、广告点击标识符和转化事件数据，衡量广告互动与后续询盘的关联。广告个性化保持关闭。":
      "La mesure publicitaire de Google Ads est activée lorsque vous sélectionnez « Tout accepter ». Elle peut utiliser des cookies publicitaires, des identifiants de clic et des données d’événements de conversion pour mesurer le lien entre les interactions publicitaires et les demandes ultérieures. La publicité personnalisée reste désactivée.",
    "我们会在浏览器中保存您的选择。您可以通过页脚中的“Cookie 设置”接受或拒绝可选 Cookie，随时更改或撤回同意。关闭选择面板不会更改现有选择。您也可以通过浏览器设置阻止或删除 Cookie。":
      "Nous enregistrons votre choix dans votre navigateur. Les paramètres des cookies en pied de page vous permettent d’accepter ou de refuser les cookies facultatifs, et de modifier ou retirer votre accord à tout moment. Fermer le panneau ne modifie pas votre choix actuel. Vous pouvez aussi bloquer ou supprimer les cookies dans les paramètres de votre navigateur.",
    "有关 Google 处理数据的更多信息，请参阅其":
      "Pour en savoir plus sur le traitement des données par Google, consultez sa",
  },
  "pt-br": {
    "如果您同意广告衡量，Google Ads 可能使用广告 Cookie、广告点击标识符和转化事件数据，将广告互动与本网站的后续询盘关联。":
      "Se você permitir a medição de publicidade, o Google Ads poderá usar cookies de publicidade, identificadores de cliques em anúncios e dados de eventos de conversão para associar interações com anúncios a consultas posteriores neste site.",
    "在您同意广告衡量后，了解哪些广告互动带来了询盘，并评估广告投放表现。":
      "Com sua permissão para a medição de publicidade, identificar quais interações com anúncios geram consultas e avaliar o desempenho dos anúncios.",
    "Cookie、分析与广告衡量": "Cookies, análise do site e medição de publicidade",
    "点击“全部接受”将启用网站分析和广告衡量。Google Analytics 可能使用第一方 Cookie，并收集设备、浏览器、大致位置和网站交互数据。":
      "Ao selecionar “Aceitar todos”, você ativa a análise do site e a medição de publicidade. O Google Analytics pode usar cookies próprios e coletar dados do dispositivo, navegador, localização aproximada e uso do site.",
    "Google Ads 广告衡量在您点击“全部接受”后启用。它可能使用广告 Cookie、广告点击标识符和转化事件数据，衡量广告互动与后续询盘的关联。广告个性化保持关闭。":
      "A medição de publicidade do Google Ads é ativada quando você seleciona “Aceitar todos”. Ela pode usar cookies de publicidade, identificadores de cliques em anúncios e dados de eventos de conversão para medir a relação entre interações com anúncios e consultas posteriores. A publicidade personalizada permanece desativada.",
    "我们会在浏览器中保存您的选择。您可以通过页脚中的“Cookie 设置”接受或拒绝可选 Cookie，随时更改或撤回同意。关闭选择面板不会更改现有选择。您也可以通过浏览器设置阻止或删除 Cookie。":
      "Salvamos sua escolha no navegador. Nas Configurações de cookies no rodapé, você pode aceitar ou rejeitar cookies opcionais e alterar ou retirar sua permissão a qualquer momento. Fechar o painel não altera sua escolha atual. Você também pode bloquear ou excluir cookies nas configurações do navegador.",
    "有关 Google 处理数据的更多信息，请参阅其":
      "Para saber mais sobre como o Google trata os dados, consulte a",
  },
};
