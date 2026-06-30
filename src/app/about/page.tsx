import type { Metadata } from "next";
import {
  AboutHero,
  AboutSnapshot,
  CredentialSupport,
  FactoryProofRows,
} from "@/app/about/AboutSections";
import {
  availableDocuments,
  certifications,
  companyCapabilities,
  companyFigures,
  factoryImages,
  factoryProofRows,
  honors,
} from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Taiyi Nano | Modified Engineering Plastic Compounds",
  description:
    "Learn about Jiangsu Taiyi Nano Technology Co., Ltd., a factory-based manufacturer focused on modified POM and selected engineering plastic compound solutions.",
  path: "/about",
  image: "/company-profile.webp",
});

const heroIntro =
  "Jiangsu Taiyi Nano Technology Co., Ltd. is a factory-based manufacturer in Yancheng, Jiangsu, China, focused on modified POM compounds and selected engineering plastic compounds for industrial applications.";

const heroImage =
  factoryImages.find((image) => image.placement === "hero") ?? factoryImages[0];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <AboutHero
          heroImage={heroImage}
          intro={heroIntro}
          title="Factory-Based Modified Material Manufacturer"
        />

        <AboutSnapshot
          capabilities={companyCapabilities}
          figures={companyFigures}
        />

        <FactoryProofRows rows={factoryProofRows} />

        <CredentialSupport
          availableDocuments={availableDocuments}
          certifications={certifications}
          honors={honors}
        />
      </section>
    </main>
  );
}
