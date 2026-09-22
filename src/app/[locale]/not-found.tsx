import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { NotFoundContent } from "@/components/NotFoundContent";
import { getLocalizedLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "404 | Taiyi Polymer",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LocalizedNotFound() {
  const locale = await getLocale();
  const localeConfig = getLocalizedLocale(locale);

  return (
    <NotFoundContent
      locale={localeConfig?.locale}
      localeSegment={localeConfig?.urlSegment}
    />
  );
}
