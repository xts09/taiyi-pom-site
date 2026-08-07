import type { Metadata } from "next";
import {
  ConductiveAntistaticCompoundsContent,
  conductiveAntistaticCompoundsDescription,
  conductiveAntistaticCompoundsHeroImage,
  conductiveAntistaticCompoundsTitle,
} from "@/app/conductive-antistatic-compounds/page";
import { createPageMetadata } from "@/lib/seo";

const path = "/products/conductive-antistatic-compounds";

export const metadata: Metadata = createPageMetadata({
  title: conductiveAntistaticCompoundsTitle,
  description: conductiveAntistaticCompoundsDescription,
  path,
  image: conductiveAntistaticCompoundsHeroImage,
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
