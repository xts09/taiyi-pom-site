import { notFound, permanentRedirect } from "next/navigation";
import { getLocalizedLocale } from "@/i18n/config";
import {
  getLocalizedHref,
  isLocalizedReleaseIndexable,
} from "@/i18n/releaseManifest";

type LocalizedManufacturingCapabilitiesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedManufacturingCapabilitiesPage({
  params,
}: LocalizedManufacturingCapabilitiesPageProps) {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale ||
    !isLocalizedReleaseIndexable("/about", localeConfig.urlSegment)
  ) {
    notFound();
  }

  permanentRedirect(
    `${getLocalizedHref("/about", localeConfig.urlSegment)}#manufacturing`,
  );
}
