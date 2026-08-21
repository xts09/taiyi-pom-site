export const localizedLocales = [
  {
    locale: "de",
    urlSegment: "de",
    htmlLang: "de",
    openGraphLocale: "de_DE",
  },
  {
    locale: "fr",
    urlSegment: "fr",
    htmlLang: "fr",
    openGraphLocale: "fr_FR",
  },
  {
    locale: "pt-BR",
    urlSegment: "pt-br",
    htmlLang: "pt-BR",
    openGraphLocale: "pt_BR",
  },
  {
    locale: "zh-CN",
    urlSegment: "zh",
    htmlLang: "zh-CN",
    openGraphLocale: "zh_CN",
  },
] as const;

export type LocalizedLocale = (typeof localizedLocales)[number];
export type LocalizedUrlSegment = LocalizedLocale["urlSegment"];
export type MessageLocale = "en" | LocalizedLocale["locale"];

export const localizedUrlSegments = localizedLocales.map(
  ({ urlSegment }) => urlSegment,
);

export const getLocalizedLocale = (value: string) =>
  localizedLocales.find(
    ({ locale, urlSegment, htmlLang }) =>
      value === locale || value === urlSegment || value === htmlLang,
  );

export const isLocalizedUrlSegment = (
  value: string,
): value is LocalizedUrlSegment =>
  localizedLocales.some(({ urlSegment }) => urlSegment === value);

export const stripLocalizedPrefix = (
  pathname: string,
  localeSegment?: LocalizedUrlSegment,
) => {
  if (!localeSegment) {
    return pathname;
  }

  const prefix = `/${localeSegment}`;
  if (pathname !== prefix && !pathname.startsWith(`${prefix}/`)) {
    return pathname;
  }

  return pathname.slice(prefix.length) || "/";
};
