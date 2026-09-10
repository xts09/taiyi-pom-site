import type { Metadata } from "next";
import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";
import { getEngineeringGfLandingPageData } from "@/data/engineeringGfLandingPages";
import { getLanguageAlternatesForPath } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const page = getEngineeringGfLandingPageData("PPA");

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: "/generated/landing/home-dark-satin-wave-v1.webp",
  imageAlt: "PLATFORM glass-fiber-reinforced PPA grade selection",
  indexable: true,
  languageAlternates: getLanguageAlternatesForPath(page.path),
});

export default function GlassFiberReinforcedPpaPage() {
  return <EngineeringGfLandingPage polymer="PPA" />;
}
