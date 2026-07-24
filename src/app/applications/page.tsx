import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MaterialRecommendationCta } from "@/components/MaterialRecommendationCta";
import { applications, selectionBasis } from "@/data/applications";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createPageMetadata,
} from "@/lib/seo";

const applicationsTitle = "Application Areas | Taiyi Nano";
const applicationsDescription =
  "Explore application areas for modified POM and selected engineering plastic compounds, including automotive, electronics, automation, motion components, water control, industrial machinery, outdoor equipment, and textile machinery.";

export const metadata: Metadata = createPageMetadata({
  title: applicationsTitle,
  description: applicationsDescription,
  path: "/applications",
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
          <div className="application-index-hero-copy">
            <p className="application-index-kicker">Application Engineering</p>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Application Engineering for Molded Parts
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Start with the molded part, not a generic material name. Taiyi Nano
              reviews motion, load, environment, dimensional targets, tooling
              stage, and document needs before narrowing modified POM or selected
              PA6, PA66, and PPA directions.
            </p>

            <div className="application-index-actions">
              <Link href="/contact" className="cta-primary px-6 py-3 text-sm">
                Send Requirement
              </Link>
              <Link
                href="/products/categories/pom"
                className="cta-secondary px-6 py-3 text-sm"
              >
                Browse Product Directions
              </Link>
            </div>
          </div>

          <div
            className="application-index-hero-media"
            aria-label="Featured application areas"
          >
            {featuredApplications.map((application, index) => (
              <Link
                key={application.slug}
                href={`/applications/${application.slug}`}
                className={`application-index-visual application-index-visual-${index + 1}`}
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

        <section className="application-basis-strip reveal-up reveal-delay-1 mb-10">
          <div>
            <p className="section-kicker mb-3">Application Review</p>
            <h2>
              How We Narrow the Material Direction
            </h2>
            <p>
              We start from the molded part, tooling plan, multi-cavity
              consistency, shrinkage target, working condition, and performance
              target before discussing a practical compound direction.
            </p>
          </div>

          <ol className="basis-rail stagger-list">
            {selectionBasis.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <MaterialRecommendationCta
          kicker="Inquiry Preparation"
          title="Need a Material Recommendation?"
          className="application-cta cta-ribbon mt-10"
        >
          <p>
            Share the application, mold stage, cavity count, shrinkage or
            warpage concern, current material reference, color, document
            requirements, and estimated volume. We will recommend a suitable
            modified material direction for review.
          </p>
        </MaterialRecommendationCta>
      </section>
    </main>
  );
}
