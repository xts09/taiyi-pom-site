import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";
import { getEngineeringGfLandingPath } from "@/data/engineeringGfLandingRegistry";
import { getEngineeringGfLandingMessages } from "@/i18n/engineeringGfLandingMessages";
import {
  getLanguageAlternatesForPath,
  isSourceReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = getEngineeringGfLandingPath("PA6");
const { page, ui } = getEngineeringGfLandingMessages("PA6");

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: sourcePath,
  image: "/factory-extrusion.webp",
  imageAlt: ui.heroImageAlt,
  indexable: isSourceReleaseIndexable(sourcePath),
  languageAlternates: getLanguageAlternatesForPath(sourcePath),
});

export default function GlassFiberReinforcedPa6Page() {
  if (!isSourceReleaseIndexable(sourcePath)) {
    notFound();
  }

  return <EngineeringGfLandingPage polymer="PA6" />;
}
