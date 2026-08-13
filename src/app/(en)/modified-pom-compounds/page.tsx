import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { createPageMetadata } from "@/lib/seo";
import "../styles/products.css";

const page = pomLandingPages.modifiedPomCompounds;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: "/generated/pom-material-hero.webp",
  imageAlt: "Taiyi Polymer modified POM material overview",
});

export default function ModifiedPomCompoundsPage() {
  return <PomLandingPage page={page} />;
}
