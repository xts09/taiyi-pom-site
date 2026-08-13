import { localizedLocales } from "@/i18n/config";

const previewCopy = {
  de: {
    title: "Mehrsprachige Routenvorschau | Taiyi Polymer",
    description:
      "Nicht indexierbare Vorschau zur Prüfung der deutschen Sprach- und URL-Konfiguration.",
    heading: "Mehrsprachige Routenvorschau",
    message:
      "Diese nicht indexierbare Seite prüft die deutsche URL-, Sprach- und Metadatenkonfiguration. Sie ist nicht Teil der öffentlichen Navigation.",
  },
  fr: {
    title: "Aperçu du routage multilingue | Taiyi Polymer",
    description:
      "Aperçu non indexable servant à vérifier la configuration linguistique et les URL en français.",
    heading: "Aperçu du routage multilingue",
    message:
      "Cette page non indexable vérifie la configuration française des URL, de la langue et des métadonnées. Elle ne fait pas partie de la navigation publique.",
  },
  "pt-BR": {
    title: "Prévia de roteamento multilíngue | Taiyi Polymer",
    description:
      "Prévia não indexável para verificar a configuração de idioma e URL em português do Brasil.",
    heading: "Prévia de roteamento multilíngue",
    message:
      "Esta página não indexável verifica a configuração brasileira de URL, idioma e metadados. Ela não faz parte da navegação pública.",
  },
} as const;

export const i18nPreviewLocales = localizedLocales.map((locale) => ({
  ...locale,
  ...previewCopy[locale.locale],
}));

export type I18nPreviewLocale = (typeof i18nPreviewLocales)[number];

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export const getI18nPreviewLocale = (urlSegment: string) =>
  i18nPreviewLocales.find((entry) => entry.urlSegment === urlSegment);

export const getI18nPreviewPath = (locale: I18nPreviewLocale) =>
  `/${locale.urlSegment}/i18n-preview`;

export const createI18nPreviewDocument = (
  locale: I18nPreviewLocale,
  canonicalUrl: string,
) => `<!doctype html>
<html lang="${escapeHtml(locale.htmlLang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(locale.title)}</title>
    <meta name="description" content="${escapeHtml(locale.description)}">
    <meta name="robots" content="noindex, follow">
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
  </head>
  <body>
    <main>
      <h1>${escapeHtml(locale.heading)}</h1>
      <p>${escapeHtml(locale.message)}</p>
    </main>
  </body>
</html>`;

export const createI18nPreviewResponse = (
  locale: I18nPreviewLocale,
  canonicalUrl: string,
) =>
  new Response(createI18nPreviewDocument(locale, canonicalUrl), {
    headers: {
      "Content-Language": locale.htmlLang,
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
