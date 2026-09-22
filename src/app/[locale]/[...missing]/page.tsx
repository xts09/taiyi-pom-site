import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNotFoundTitle } from "@/components/NotFoundContent";
import { getLocalizedLocale } from "@/i18n/config";

type MissingLocalizedPageProps = {
  params: Promise<{ locale: string; missing: string[] }>;
};

export async function generateMetadata({
  params,
}: MissingLocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  return {
    title: `${getNotFoundTitle(localeConfig?.locale)} | Taiyi Polymer`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function MissingLocalizedPage() {
  notFound();
}
