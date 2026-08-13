import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getLocalizedLocale } from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const requestedLocale = locale ?? (await requestLocale);
  const localeConfig = requestedLocale
    ? getLocalizedLocale(requestedLocale)
    : undefined;

  if (!localeConfig) {
    notFound();
  }

  return {
    locale: localeConfig.htmlLang,
    messages: await loadMessages(localeConfig.locale),
  };
});
