import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { serializeJsonLd } from "@/lib/jsonLd";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import {
  getContactContextLabel,
  getContactContextMessage,
  parseContactContext,
  type ContactContextSearchParams,
} from "@/lib/contactContext";
import {
  contactEmail,
  companyName,
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
  siteUrl,
} from "@/lib/seo";
import styles from "./ContactPage.module.css";

const contactTitle = "Discuss a Material Requirement | Taiyi Polymer";
const contactDescription =
  "Contact Jiangsu Taiyi Nano Technology Co., Ltd. for modified POM, engineering plastic compounds, POM resin, material recommendations, documents, samples, and project evaluation.";

export const metadata: Metadata = createPageMetadata({
  title: contactTitle,
  description: contactDescription,
  path: "/contact",
  image: "/factory-extrusion.webp",
});

const contactJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  createWebPageJsonLd({
    title: contactTitle,
    description: contactDescription,
    path: "/contact",
    image: "/factory-extrusion.webp",
  }),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contactTitle,
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: companyName,
      url: siteUrl,
      email: contactEmail,
      telephone: "+86-18796418919",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contactEmail,
          telephone: "+86-18796418919",
          availableLanguage: ["en", "zh"],
        },
      ],
    },
  },
];

type ContactPageProps = {
  searchParams: Promise<ContactContextSearchParams>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const contactContext = parseContactContext(await searchParams);
  const contextLabel = getContactContextLabel(contactContext);
  const initialMessage = getContactContextMessage(contactContext);
  const directEmailBody = [
    "Dear Ethan,",
    "",
    `Application or part: ${contactContext.application ?? ""}`,
    `Material or current grade: ${[
      contactContext.material,
      contactContext.grade,
    ]
      .filter(Boolean)
      .join(" / ")}`,
    "Key requirements:",
    "Document needs:",
    "",
    "Regards,",
  ].join("\r\n");
  const directEmailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Material Requirement Request"
  )}&body=${encodeURIComponent(directEmailBody)}`;

  return (
    <main className={`${styles.page} contact-page min-h-screen text-slate-900`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(contactJsonLd),
        }}
      />
      <section
        className={`${styles.shell} mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8`}
      >
        <PageHero
          variant="editorial"
          className={`${styles.hero} inner-hero reveal-up mb-12 max-w-4xl`}
          title="Request a Material Review"
          description="Tell us the part function, operating conditions and target requirements. We will identify relevant material families, confirm available documents and outline the next sample or evaluation step."
        />

        <div className={`${styles.workspace} contact-split stagger-list`}>
          <Card asChild variant="soft">
            <section
              className={styles.formPanel}
              style={{ "--item-index": 0 } as CSSProperties}
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                Start with the essentials
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700">
                Company, email, and application are enough to start. Add
                technical details only if you already have them.
              </p>
              <p className="contact-required-note">
                Fields marked <span className="contact-required-marker">*</span>{" "}
                are required.
              </p>

              <ContactInquiryForm
                key={[
                  contextLabel,
                  contactContext.application,
                  contactContext.material,
                  initialMessage,
                ].join("|")}
                contextLabel={contextLabel}
                initialApplication={contactContext.application}
                initialMaterial={contactContext.material}
                initialMessage={initialMessage}
              />
            </section>
          </Card>

          <aside
            className={`${styles.identity} contact-identity`}
            style={{ "--item-index": 1 } as CSSProperties}
          >
            <div className="contact-details">
              <h2 className="text-xl font-semibold text-slate-950">
                Sales Contact
              </h2>

              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">Contact Person</p>
                  <p>Ethan Xia</p>
                  <p>Sales Manager</p>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">Company</p>
                  <p>Jiangsu Taiyi Nano Technology Co., Ltd.</p>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">Email</p>
                  <a href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">WhatsApp</p>
                  <a
                    href="https://wa.me/8618796418919"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +86 18796418919
                  </a>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">Location</p>
                  <p>Yancheng, Jiangsu, China</p>
                </div>
              </div>
            </div>

            <div className="contact-response-box">
              <p className="font-semibold text-slate-950">
                What We Can Review
              </p>
              <ul>
                <li>Relevant material families and candidate grades</li>
                <li>Available technical documents and sample needs</li>
              </ul>
            </div>

            <div className="contact-direct-links">
              <a
                href={directEmailHref}
                className="cta-secondary px-6 py-3 text-sm"
              >
                Email Directly
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
