import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { applications, selectionBasis } from "@/data/applications";
import { publicPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Application Areas | Taiyi Nano",
  description:
    "Explore application areas for modified POM and selected engineering plastic compounds, including automotive, electronics, automation, motion components, water control, industrial machinery, outdoor equipment, and textile machinery.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="inner-hero application-hero reveal-up mb-8">
          <nav className="subpage-breadcrumb mb-5">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Applications</span>
          </nav>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Application Areas
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Start from the industry or working scene, then review typical molded
            parts, mold development needs, cavity layout, shrinkage behavior,
            and practical modified material directions. Modified POM remains the
            core line, with selected PA6, PA66, PPA, and PPS solutions reviewed
            by requirement.
          </p>
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

        <div className="application-directory-grid stagger-list">
          {applications.map((application, index) => (
            <Link
              key={application.title}
              href={`/applications/${application.slug}`}
              className="application-directory-card"
              style={{ "--item-index": index } as CSSProperties}
            >
              <span className="application-directory-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{application.title}</h2>

              <p>{application.description}</p>

              <div className="application-image-strip">
                {application.images.map((image) => (
                  <figure key={image.src} className="application-part-frame">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={publicPath(image.src)}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 130px, (min-width: 640px) 160px, 45vw"
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
              </div>

              <span className="text-link mt-5">View Application Page &rarr;</span>
            </Link>
          ))}
        </div>

        <section className="application-cta mt-10">
          <div className="cta-ribbon">
            <div>
              <p className="section-kicker mb-3">Inquiry Preparation</p>
              <h2>Need a Material Recommendation?</h2>
              <p>
                Share the application, mold stage, cavity count, shrinkage or
                warpage concern, current material reference, color, document
                requirements, and estimated volume. We will recommend a suitable
                modified material direction for review.
              </p>
            </div>

            <Link href="/contact" className="cta-primary shrink-0 px-7 py-3 text-sm">
              Contact Sales
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
