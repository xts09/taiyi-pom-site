import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";
import { getEngineeringGfLandingPageData } from "@/data/engineeringGfLandingPages";
import { getEngineeringGfLandingPath } from "@/data/engineeringGfLandingRegistry";
import {
  getLanguageAlternatesForPath,
  isSourceReleaseIndexable,
} from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const sourcePath = getEngineeringGfLandingPath("PA66");
const page = getEngineeringGfLandingPageData("PA66");

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: sourcePath,
  image: "/generated/landing/home-dark-satin-wave-v1.webp",
  imageAlt: "PLATFORM glass-fiber-reinforced PA66 grade selection",
  indexable: isSourceReleaseIndexable(sourcePath),
  languageAlternates: getLanguageAlternatesForPath(sourcePath),
});

export default function GlassFiberReinforcedPa66Page() {
  if (!isSourceReleaseIndexable(sourcePath)) {
    notFound();
  }

  return <EngineeringGfLandingPage polymer="PA66" />;
}
