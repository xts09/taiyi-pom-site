import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "../styles/products.css";

const page = pomLandingPages.wearLowFrictionPom;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: "/generated/pom-wear-natural-pellets-hero-wide.webp",
  imageAlt: "Taiyi Polymer wear-resistant and low-friction POM materials",
  languageAlternates: getLanguageAlternates("/wear-resistant-low-friction-pom"),
});

export default function WearResistantLowFrictionPomPage() {
  return <PomLandingPage page={page} />;
}
