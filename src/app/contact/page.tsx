import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Taiyi Nano | Material Requirement Request",
  description:
    "Contact Jiangsu Taiyi Nano Technology Co., Ltd. for modified POM, engineering plastic compounds, POM resin, material recommendations, documents, samples, and project evaluation.",
  path: "/contact",
  image: "/factory-extrusion.webp",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up mb-12 max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Send Us Your Material Requirements
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            For faster material review, send the application, current material
            reference, mold development stage, cavity count, shrinkage or
            warpage concern, key requirements, document needs, color, and
            estimated volume in one message.
          </p>
        </div>

        <div className="contact-preflight reveal-up">
          <div className="contact-preflight-head">
            <div>
              <p className="section-kicker">Before You Send</p>
              <h2>Prepare These Details</h2>
            </div>
            <p>
              These details reduce back-and-forth and help us recommend a better
              material direction from the first reply.
            </p>
          </div>

          <ol className="contact-checklist contact-checklist-compact">
            {[
              "Application / Part Type",
              "Mold Stage / Cavities",
              "Shrinkage / Warpage",
              "Current Material",
              "MFI / Processing",
              "Color / Documents",
              "Estimated Volume",
            ].map((item, index) => (
              <li key={item} style={{ "--item-index": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="contact-split stagger-list">
          <section
            className="contact-form-panel"
            style={{ "--item-index": 0 } as CSSProperties}
          >
            <p className="section-kicker mb-3">Inquiry Form</p>
            <h2 className="text-2xl font-semibold text-slate-950">
              Request Material Review
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700">
              Share the application, mold stage, cavity count, shrinkage or
              warpage concern, material direction, annual volume, and required
              documents. The form submits a structured requirement when server
              email is configured, with an email draft fallback.
            </p>

            <ContactInquiryForm />
          </section>

          <aside
            className="contact-identity"
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
                  <a href="mailto:xiatianshi@jstynm.com">
                    xiatianshi@jstynm.com
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
                <li>Tooling and shrinkage-aware material direction review</li>
                <li>TDS / SDS / COA / REACH / RoHS support</li>
                <li>Sample and grade recommendation discussion</li>
                <li>Typical response within 1 business day</li>
              </ul>
            </div>

            <div className="contact-direct-links">
              <a
                href="mailto:xiatianshi@jstynm.com?subject=Material%20Requirement%20Request&body=Dear%20Ethan%2C%0D%0A%0D%0AWe%20would%20like%20to%20review%20a%20modified%20material%20requirement.%0D%0A%0D%0AApplication%3A%0D%0AMold%20stage%20and%20cavity%20count%3A%0D%0AShrinkage%20or%20warpage%20concern%3A%0D%0ACurrent%20material%20or%20reference%20grade%3A%0D%0AKey%20requirements%3A%0D%0AEstimated%20volume%3A%0D%0ADestination%20country%3A%0D%0A%0D%0ARegards%2C"
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
