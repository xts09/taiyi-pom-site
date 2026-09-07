import type { Metadata } from "next";
import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";
import { getEngineeringGfLandingPageData } from "@/data/engineeringGfLandingPages";
import { createPageMetadata } from "@/lib/seo";

const page = getEngineeringGfLandingPageData("PA6");

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: "/generated/landing/home-dark-satin-wave-v1.webp",
  imageAlt: "PLATFORM glass-fiber-reinforced PA6 grade selection",
  indexable: false,
});

export default function GlassFiberReinforcedPa6Page() {
  return <EngineeringGfLandingPage polymer="PA6" />;
}
