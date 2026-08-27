import type { Metadata } from "next";
import { AboutPageContent } from "@/app/(en)/about/AboutSections";
import {
  availableDocuments,
  certifications,
  companyFigures,
  companyQualifications,
  factoryImages,
} from "@/data/company";
import { exportRoutes } from "@/data/exportRoutes";
import { getLanguageAlternates } from "@/i18n/releaseManifest";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
  organizationJsonLd,
  siteName,
} from "@/lib/seo";
import styles from "./AboutPage.module.css";

const aboutDescription =
  "Taiyi Polymer is the international materials brand of Jiangsu Taiyi Nano Technology Co., Ltd., focused on modified POM and selected engineering compounds.";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Plastic Compound Manufacturer | Taiyi Polymer",
  description: aboutDescription,
  path: "/about",
  image: "/factory-exterior.webp",
  imageAlt: "Taiyi Polymer factory in Yancheng, Jiangsu, China",
  languageAlternates: getLanguageAlternates("/about"),
});

const aboutJsonLd = [
  {
    ...createWebPageJsonLd({
      title: "Engineering Plastic Compound Manufacturer | Taiyi Polymer",
      description: aboutDescription,
      path: "/about",
      image: "/factory-exterior.webp",
    }),
    "@type": "AboutPage",
    about: {
      "@type": organizationJsonLd["@type"],
      name: companyName,
      legalName: companyName,
      alternateName: siteName,
      url: organizationJsonLd.url,
      logo: organizationJsonLd.logo,
      brand: organizationJsonLd.brand,
      address: organizationJsonLd.address,
      email: organizationJsonLd.email,
      contactPoint: organizationJsonLd.contactPoint,
      knowsAbout: organizationJsonLd.knowsAbout,
      sameAs: ["https://www.linkedin.com/company/taiyi-nano-technology/"],
    },
  },
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ]),
];

function imageFor(placement: "hero" | "story" | "gallery" | "testing") {
  return factoryImages.find((image) => image.placement === placement);
}

export default function AboutPage() {
  const heroImage = imageFor("hero") ?? factoryImages[0];
  const storyImage = imageFor("story") ?? heroImage;
  const manufacturingImage = imageFor("gallery") ?? storyImage;
  const laboratoryImage = imageFor("testing") ?? manufacturingImage;

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(aboutJsonLd) }}
      />
      <AboutPageContent
        availableDocuments={availableDocuments}
        certifications={certifications}
        exportRoutes={exportRoutes}
        figures={companyFigures}
        heroImage={heroImage}
        laboratoryImage={laboratoryImage}
        manufacturingImage={manufacturingImage}
        qualifications={companyQualifications}
        storyImage={storyImage}
      />
    </main>
  );
}
