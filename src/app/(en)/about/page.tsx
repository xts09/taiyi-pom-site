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
  "Taiyi Polymer is the international-facing brand of Jiangsu Taiyi Nano Technology Co., Ltd., a Yancheng manufacturer focused on modified POM and selected engineering plastic compounds.";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Plastic Compound Manufacturer | Taiyi Polymer",
  description: aboutDescription,
  path: "/about",
  image: "/factory-exterior.webp",
  imageAlt: "Taiyi Polymer factory in Yancheng, Jiangsu, China",
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
      name: siteName,
      legalName: companyName,
      alternateName: companyName,
      url: organizationJsonLd.url,
      logo: organizationJsonLd.logo,
      brand: organizationJsonLd.brand,
      foundingDate: organizationJsonLd.foundingDate,
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
