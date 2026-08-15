import type { CSSProperties } from "react";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import type { ContactMessages } from "@/i18n/types";
import {
  getContactContextLabel,
  getContactContextMessage,
  parseContactContext,
  type ContactContextSearchParams,
} from "@/lib/contactContext";
import { selectionWorkspaceContactSource } from "@/lib/contactRequirementStorage";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  absoluteUrl,
  contactEmail,
  companyName,
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
  siteUrl,
} from "@/lib/seo";
import styles from "@/app/(en)/contact/ContactPage.module.css";

type ContactPageProps = {
  messages: ContactMessages;
  pagePath: string;
  inLanguage: string;
  searchParams: Promise<ContactContextSearchParams>;
};

export async function ContactPage({
  messages,
  pagePath,
  inLanguage,
  searchParams,
}: ContactPageProps) {
  const contactContext = parseContactContext(await searchParams);
  const contextLabel = getContactContextLabel(contactContext);
  const initialMessage = getContactContextMessage(
    contactContext,
    messages.context,
  );
  const directEmailBody = [
    messages.directEmail.greeting,
    "",
    `${messages.directEmail.application}: ${contactContext.application ?? ""}`,
    `${messages.directEmail.material}: ${[
      contactContext.material,
      contactContext.grade,
    ]
      .filter(Boolean)
      .join(" / ")}`,
    contactContext.reference
      ? `${messages.directEmail.reference}: ${contactContext.reference}`
      : undefined,
    contactContext.candidates
      ? `${messages.directEmail.candidates}: ${contactContext.candidates}`
      : undefined,
    messages.directEmail.keyRequirements,
    messages.directEmail.documentNeeds,
    "",
    messages.directEmail.closing,
  ]
    .filter((value): value is string => value !== undefined)
    .join("\r\n");
  const directEmailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    messages.directEmail.subject,
  )}&body=${encodeURIComponent(directEmailBody)}`;
  const contactJsonLd = [
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: pagePath.replace(/\/contact$/, "") || "/" },
      { name: messages.breadcrumbContact, path: pagePath },
    ]),
    createWebPageJsonLd({
      title: messages.metadata.title,
      description: messages.metadata.description,
      path: pagePath,
      image: "/factory-extrusion.webp",
      inLanguage,
    }),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: messages.metadata.title,
      url: absoluteUrl(pagePath),
      inLanguage,
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

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(contactJsonLd),
        }}
      />
      <section className={styles.shell}>
        <PageHero
          variant="editorial"
          className={`${styles.hero} reveal-up`}
          title={messages.hero.title}
          description={messages.hero.description}
        />

        <div className={`${styles.workspace} stagger-list`}>
          <Card asChild variant="soft">
            <section
              className={styles.formPanel}
              style={{ "--item-index": 0 } as CSSProperties}
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {messages.formPanel.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700">
                {messages.formPanel.body}
              </p>
              <p className="contact-required-note">
                {messages.formPanel.requiredBefore}{" "}
                <span className="contact-required-marker">*</span>{" "}
                {messages.formPanel.requiredAfter}
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
                loadStoredRequirement={
                  contactContext.source === selectionWorkspaceContactSource
                }
                messages={messages.form}
                requirementLabel={messages.context.requirement}
              />
            </section>
          </Card>

          <aside
            className={styles.identity}
            style={{ "--item-index": 1 } as CSSProperties}
          >
            <div className="contact-details">
              <h2 className="text-xl font-semibold text-slate-950">
                {messages.sales.title}
              </h2>

              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">
                    {messages.sales.contactPerson}
                  </p>
                  <p>Ethan Xia</p>
                  <p>{messages.sales.role}</p>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">
                    {messages.sales.company}
                  </p>
                  <p>Jiangsu Taiyi Nano Technology Co., Ltd.</p>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">
                    {messages.sales.email}
                  </p>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">
                    {messages.sales.whatsapp}
                  </p>
                  <a
                    href="https://wa.me/8618796418919"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +86 18796418919
                  </a>
                </div>

                <div className="contact-detail-item">
                  <p className="font-semibold text-slate-950">
                    {messages.sales.location}
                  </p>
                  <p>{messages.sales.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="contact-response-box">
              <p className="font-semibold text-slate-950">
                {messages.sales.reviewTitle}
              </p>
              <ul>
                {messages.sales.reviewItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="contact-direct-links">
              <a
                href={directEmailHref}
                className="cta-secondary px-6 py-3 text-sm"
              >
                {messages.sales.emailDirectly}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
