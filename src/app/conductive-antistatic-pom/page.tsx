import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { createPageMetadata } from "@/lib/seo";

const page = pomLandingPages.conductiveAntistaticPom;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: page.heroImage?.src,
  imageAlt: page.heroImage?.alt,
});

export default function ConductiveAntistaticPomPage() {
  return <PomLandingPage page={page} />;
}
