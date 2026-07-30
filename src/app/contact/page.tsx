import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Taiyi Plastic | Material Requirement Request",
  description:
    "Contact Jiangsu Taiyi Nano Technology Co., Ltd. for modified POM, engineering plastic compounds, POM resin, material recommendations, documents, samples, and project evaluation.",
  path: "/contact",
  image: "/factory-extrusion.webp",
});

export default function ContactPage() {
  return (
    <main className={`${styles.page} contact-page min-h-screen text-slate-900`}>
      <section
        className={`${styles.shell} mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8`}
      >
        <PageHero
          variant="editorial"
          className={`${styles.hero} inner-hero reveal-up mb-12 max-w-4xl`}
          title="Request a Material Review"
          description="Tell us what the part does and what you need from the material. We will reply with a practical starting point."
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

              <ContactInquiryForm />
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
                  <a href="mailto:sales@taiyiplastic.com">
                    sales@taiyiplastic.com
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
                Response and Support
              </p>
              <ul>
                <li>Material direction and grade discussion</li>
                <li>Technical documents confirmed by grade and project</li>
              </ul>
            </div>

            <div className="contact-direct-links">
              <a
                href="mailto:sales@taiyiplastic.com?subject=Material%20Requirement%20Request&body=Dear%20Ethan%2C%0D%0A%0D%0AApplication%20or%20part%3A%0D%0AMaterial%20or%20current%20grade%3A%0D%0AKey%20requirements%3A%0D%0ADocument%20needs%3A%0D%0A%0D%0ARegards%2C"
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
