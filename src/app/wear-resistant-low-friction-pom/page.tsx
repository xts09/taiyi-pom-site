import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { createPageMetadata } from "@/lib/seo";

const page = pomLandingPages.wearLowFrictionPom;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: "/generated/pom-wear-natural-pellets-hero-wide.webp",
  imageAlt: "Taiyi Polymer wear-resistant and low-friction POM materials",
});

export default function WearResistantLowFrictionPomPage() {
  return <PomLandingPage page={page} />;
}
