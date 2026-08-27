import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "../styles/products.css";

const page = pomLandingPages.conductiveAntistaticPom;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: page.heroImage?.src,
  imageAlt: page.heroImage?.alt,
  languageAlternates: getLanguageAlternates("/conductive-antistatic-pom"),
});

export default function ConductiveAntistaticPomPage() {
  return <PomLandingPage page={page} />;
}
