import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EngineeringGfLandingPage } from "@/components/EngineeringGfLandingPage";

export const metadata: Metadata = {
  title: "Engineering GF component acceptance | Taiyi Polymer",
  alternates: { canonical: "/design-system/engineering-gf" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function EngineeringGfComponentAcceptancePage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return <EngineeringGfLandingPage polymer="PA66" />;
}
