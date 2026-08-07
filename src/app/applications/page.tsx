import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { Button } from "@/components/ui/button";
import { applications, selectionBasis } from "@/data/applications";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const applicationsTitle = "Engineering Plastic Applications | Taiyi Polymer";
const applicationsDescription =
  "Explore application areas for modified POM and selected engineering plastic compounds, including automotive, electronics, automation, motion components, water control, washing-machine components, outdoor equipment, and textile machinery.";

export const metadata: Metadata = createPageMetadata({
  title: applicationsTitle,
  description: applicationsDescription,
  path: "/applications",
  image: "/applications/parts/washing-machine-components-hero.png",
  imageAlt: "Taiyi Polymer application engineering for washing machine components",
});

const featuredApplications = applications
  .filter((application) => application.heroImage)
  .slice(0, 3);

const applicationsJsonLd = [
  createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Applications", path: "/applications" },
  ]),
  createCollectionPageJsonLd({
    title: applicationsTitle,
    description: applicationsDescription,
    path: "/applications",
    items: applications.map((application) => ({
      name: application.title,
      path: `/applications/${application.slug}`,
    })),
  }),
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(applicationsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="application-index-shell mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="inner-hero application-index-hero reveal-up mb-8">
          <div className="application-index-hero-copy stagger-list">
            <p
              className="application-index-kicker"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Application Engineering
            </p>
            <h1
              className="text-4xl font-black tracking-tight text-white md:text-5xl"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              Application Engineering for Molded Parts
            </h1>

            <p
              className="mt-5 max-w-3xl text-lg leading-8 text-slate-200"
              style={{ "--item-index": 2 } as CSSProperties}
            >
              Start with the molded part, not a generic material name. Taiyi Polymer
              reviews motion, load, environment, dimensional targets, tooling
              stage, and document needs to shortlist modified POM candidates.
              For PA6, PA66, or PPA projects, use the inquiry path for a
              separate, focused grade review.
            </p>

            <div
              className="application-index-actions stagger-list"
              style={{ "--item-index": 3 } as CSSProperties}
            >
              <Button
                asChild
                variant="primary"
                className="h-auto px-6 py-3 text-sm font-[var(--ds-button-font-weight)]"
                style={{ "--item-index": 0 } as CSSProperties}
              >
                <Link href="/contact">Discuss Your Application</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-auto px-6 py-3 text-sm"
                style={{ "--item-index": 1 } as CSSProperties}
              >
                <Link href="/products/categories/pom">
                  Browse POM Compounds
                </Link>
              </Button>
            </div>
          </div>

          <div
            className="application-index-hero-media stagger-list"
            aria-label="Featured application areas"
          >
            {featuredApplications.map((application, index) => (
              <Link
                key={application.slug}
                href={`/applications/${application.slug}`}
                className={`application-index-visual application-index-visual-${index + 1}`}
                style={{ "--item-index": index } as CSSProperties}
              >
                {application.heroImage ? (
                  <Image
                    src={application.heroImage.src}
                    alt={application.heroImage.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 64rem) 24vw, 100vw"
                  />
                ) : null}
                <span>{application.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="application-directory-grid stagger-list">
          {applications.map((application, index) => (
            <Link
              key={application.title}
              href={`/applications/${application.slug}`}
              className="application-directory-card"
              aria-label={`View ${application.title} application details`}
              style={{ "--item-index": index } as CSSProperties}
            >
              <span className="application-directory-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{application.title}</h2>

              <p>{application.description}</p>

              <span className="application-directory-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        <section className="application-basis-strip stagger-list reveal-up reveal-delay-1 mb-10">
          <div className="stagger-list" style={{ "--item-index": 0 } as CSSProperties}>
            <p
              className="section-kicker mb-3"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              Application Review
            </p>
            <h2 style={{ "--item-index": 1 } as CSSProperties}>
              How We Build a Grade Shortlist
            </h2>
            <p style={{ "--item-index": 2 } as CSSProperties}>
              We start from the molded part, tooling plan, multi-cavity
              consistency, shrinkage target, working condition, and performance
              target before building a practical grade shortlist.
            </p>
          </div>

          <ol
            className="basis-rail stagger-list"
            style={{ "--item-index": 1 } as CSSProperties}
          >
            {selectionBasis.map((item, index) => (
              <li
                key={item}
                style={{ "--item-index": index } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <ActionPanel
          footerAdjacent
          variant="recommendation"
          title="Need Help Shortlisting a Grade?"
          className="application-cta cta-ribbon mt-10"
          eyebrow="Inquiry Preparation"
          eyebrowClassName="section-kicker mb-3"
          action={
            <Button
              asChild
              variant="inverse"
              className="h-auto px-7 py-3 text-sm"
            >
              <Link href="/contact">Discuss Your Application</Link>
            </Button>
          }
        >
          <p>
            Share the application, mold stage, cavity count, shrinkage or
            warpage concern, current material reference, color, document
            requirements, and estimated volume. We will use those inputs to
            prepare a modified-material shortlist and confirm the next document
            or sample step.
          </p>
        </ActionPanel>
      </section>
    </main>
  );
}
