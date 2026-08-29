import { notFound, permanentRedirect } from "next/navigation";
import { getLocalizedLocale } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";

type LocalizedModifiedPomRouteProps = {
  params: Promise<{ locale: string }>;
};

const destinationPath = "/products/categories/pom" as const;

const resolveLocale = async (
  params: LocalizedModifiedPomRouteProps["params"],
) => {
  const { locale } = await params;
  const localeConfig = getLocalizedLocale(locale);

  if (
    !localeConfig ||
    localeConfig.urlSegment !== locale
  ) {
    notFound();
  }

  return localeConfig;
};

export default async function LocalizedModifiedPomRoute({
  params,
}: LocalizedModifiedPomRouteProps) {
  const localeConfig = await resolveLocale(params);
  permanentRedirect(
    `${getLocalizedHref(destinationPath, localeConfig.urlSegment)}#material-families`,
  );
}
