import type { Metadata } from "next";
import {
  ConductiveAntistaticCompoundsContent,
  conductiveAntistaticCompoundsDescription,
  conductiveAntistaticCompoundsHeroImage,
  conductiveAntistaticCompoundsTitle,
} from "@/components/ConductiveAntistaticCompoundsPage";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";

const path = "/products/conductive-antistatic-compounds";

export const metadata: Metadata = createPageMetadata({
  title: conductiveAntistaticCompoundsTitle,
  description: conductiveAntistaticCompoundsDescription,
  path,
  image: conductiveAntistaticCompoundsHeroImage,
  languageAlternates: getLanguageAlternates(path),
});

export default function ProductConductiveAntistaticCompoundsPage() {
  return (
    <ConductiveAntistaticCompoundsContent
      groupByMatrix
      pagePath={path}
      showAllByDefault
    />
  );
}
