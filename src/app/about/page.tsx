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
  "Jiangsu Taiyi Nano Technology Co., Ltd. operates factory-based compounding production in Yancheng, Jiangsu, China, focused on modified POM compounds with selected PA6, PA66, PPA, and PPS support for industrial molded parts.";

const heroImage =
  factoryImages.find((image) => image.placement === "hero") ?? factoryImages[0];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <AboutHero
        heroImage={heroImage}
        intro={heroIntro}
        title="About Taiyi Nano"
      />

      <section className="site-container about-page-shell">
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
