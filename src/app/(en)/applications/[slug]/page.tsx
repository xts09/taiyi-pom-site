import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { LocalizedApplicationDetailPage } from "@/components/localized/LocalizedApplicationDetailPage";
import { getApplicationBySlug } from "@/data/applications";
import {
  loadEnglishApplicationProfiles,
  localizeApplication,
} from "@/i18n/applicationMessages";
import {
  isLocalizedApplicationSlug,
  localizedApplicationSlugs,
  type LocalizedApplicationProfileMessages,
} from "@/i18n/applicationTypes";
import {
  englishApplicationComponentMessages,
  englishApplicationDetailMessages,
} from "@/i18n/messages/en-application-detail";
import {
  getLanguageAlternates,
  type ReleasedSourcePath,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

type ApplicationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localizedApplicationSlugs.map((slug) => ({ slug }));
}

const resolveApplication = async (
  params: ApplicationDetailPageProps["params"],
) => {
  const { slug } = await params;
  const sourceApplication = getApplicationBySlug(slug);

  if (!sourceApplication) {
    notFound();
  }

  if (slug !== sourceApplication.slug) {
    permanentRedirect(`/applications/${sourceApplication.slug}`);
  }

  if (!isLocalizedApplicationSlug(sourceApplication.slug)) {
    notFound();
  }

  const profiles = await loadEnglishApplicationProfiles();
  const profile: LocalizedApplicationProfileMessages =
    profiles[sourceApplication.slug];

  if (!profile) {
    notFound();
  }

  return {
    profile,
    sourceApplication,
    sourcePath: `/applications/${sourceApplication.slug}` as ReleasedSourcePath,
  };
};

export async function generateMetadata({
  params,
}: ApplicationDetailPageProps): Promise<Metadata> {
  const { profile, sourceApplication, sourcePath } =
    await resolveApplication(params);

  return createPageMetadata({
    title: `${profile.title} ${englishApplicationDetailMessages.metadata.titleSuffix}`,
    description: `${profile.description} ${englishApplicationDetailMessages.metadata.descriptionSuffix}`,
    path: sourcePath,
    image: sourceApplication.heroImage?.src,
    imageAlt: profile.heroImageAlt,
    languageAlternates: getLanguageAlternates(sourcePath),
  });
}

export default async function ApplicationDetailPage({
  params,
}: ApplicationDetailPageProps) {
  const { profile, sourceApplication, sourcePath } =
    await resolveApplication(params);
  const application = localizeApplication(sourceApplication, profile);
  const detailMessages = {
    ...englishApplicationDetailMessages,
    ...profile.detailUi,
  };

  return (
    <LocalizedApplicationDetailPage
      application={application}
      componentMessages={englishApplicationComponentMessages}
      inLanguage="en"
      messages={detailMessages}
      pagePath={sourcePath}
      qualityEvidence={profile.qualityEvidence}
      selectionItems={
        profile.selectionItems ?? [
          "Part function and current failure mode",
          "Load, motion and cycle conditions",
          "Dimensions, fit and assembly method",
          "Environment, documents and sample needs",
        ]
      }
      showSelectionInputs={profile.showSelectionInputs}
    />
  );
}
