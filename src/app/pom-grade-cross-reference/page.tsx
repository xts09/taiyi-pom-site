import type { Metadata } from "next";
import { PomLandingPage } from "@/components/PomLandingPage";
import { pomLandingPages } from "@/data/pomLandingPages";
import { createPageMetadata } from "@/lib/seo";

const page = pomLandingPages.pomGradeCrossReference;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function PomGradeCrossReferencePage() {
  return <PomLandingPage page={page} />;
}
