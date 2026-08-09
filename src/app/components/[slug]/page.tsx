import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { serializeJsonLd } from "@/lib/jsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  componentSolutions,
  getComponentSolutionBySlug,
} from "@/data/componentSolutions";
import { getComponentSolutionDetailBySlug } from "@/data/componentSolutionDetails";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";
import { DetailedComponentSolution } from "./DetailedComponentSolution";
import styles from "../ComponentSolutions.module.css";

type ComponentSolutionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return componentSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: ComponentSolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getComponentSolutionBySlug(slug);
  const detail = getComponentSolutionDetailBySlug(slug);

  if (!solution) {
    return {};
  }

  return createPageMetadata({
    title: detail?.seo.title ?? `${solution.title} Material Review | Taiyi Polymer`,
    description: detail?.seo.description ?? solution.summary,
    path: `/components/${solution.slug}`,
    image: detail?.seo.image,
    imageAlt: detail?.seo.imageAlt,
    indexable: Boolean(detail),
  });
}

export default async function ComponentSolutionPage({
  params,
}: ComponentSolutionPageProps) {
  const { slug } = await params;
  const solution = getComponentSolutionBySlug(slug);
  const detail = getComponentSolutionDetailBySlug(slug);

  if (!solution) {
    notFound();
  }

  if (detail) {
    const pagePath = `/components/${solution.slug}`;
    const detailJsonLd = [
      createBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Applications", path: "/applications" },
        { name: "Component Solutions", path: "/components" },
        { name: solution.title, path: pagePath },
      ]),
      createWebPageJsonLd({
        title: solution.title,
        description: detail.seo.description,
        path: pagePath,
        image: detail.seo.image,
      }),
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(detailJsonLd),
          }}
        />
        <DetailedComponentSolution detail={detail} solution={solution} />
      </>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.rail}>
          <Breadcrumbs
            className={styles.breadcrumbs}
            items={[
              { label: "Applications", href: "/applications" },
              { label: "Component Solutions", href: "/components" },
              { label: solution.title },
            ]}
          />

          <section className={styles.detailHero}>
            <div className={styles.detailHeroCopy}>
              <p className={styles.cardMeta}>{solution.category}</p>
              <h1>{solution.title}</h1>
              <p>{solution.summary}</p>
            </div>

            <aside className={styles.statusPanel} aria-label="Page content status">
              <span className={styles.statusLabel}>Content status</span>
              <h2>Engineering page scaffold</h2>
              <p>
                The route and content structure are ready. Verified material data,
                processing notes, imagery, and case evidence will be added before
                this page is opened to search indexing.
              </p>
            </aside>
          </section>

          <div className={styles.detailGrid}>
            <Card asChild variant="standard">
              <section className={styles.detailPanel}>
                <CardContent className={styles.detailPanelContent}>
                  <div>
                    <span className={styles.listLabel}>Component scope</span>
                    <h2>Typical parts in this family</h2>
                  </div>
                  <ul className={styles.detailList}>
                    {solution.typicalParts.map((part) => (
                      <li key={part}>{part}</li>
                    ))}
                  </ul>
                </CardContent>
              </section>
            </Card>

            <Card asChild variant="standard">
              <section className={styles.detailPanel}>
                <CardContent className={styles.detailPanelContent}>
                  <div>
                    <span className={styles.listLabel}>Review framework</span>
                    <h2>Inputs to define before grade review</h2>
                  </div>
                  <ul className={styles.detailList}>
                    {solution.reviewAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </CardContent>
              </section>
            </Card>

            <Card asChild variant="soft">
              <section className={styles.detailPanel}>
                <CardContent className={styles.detailPanelContent}>
                  <div>
                    <span className={styles.listLabel}>Industry context</span>
                    <h2>Related application pages</h2>
                  </div>
                  <div className={styles.relatedLinks}>
                    {solution.relatedApplications.map((application) => (
                      <Link key={application.href} href={application.href}>
                        {application.label}
                        <ArrowRight aria-hidden="true" size={17} />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </section>
            </Card>

            <Card asChild variant="evidence">
              <section className={styles.detailPanel}>
                <CardContent className={styles.detailPanelContent}>
                  <div>
                    <span className={styles.listLabel}>Next step</span>
                    <h2>Prepare a component-specific review</h2>
                  </div>
                  <p>
                    Share the part drawing, current material, operating conditions,
                    target properties, and tooling stage. Taiyi Polymer can use
                    those inputs to begin a practical material shortlist.
                  </p>
                  <div className={styles.detailActions}>
                    <Button asChild size="form" variant="inverse">
                      <Link href="/contact">Discuss Your Application</Link>
                    </Button>
                    <Button asChild size="form" variant="secondary">
                      <Link href="/components">All Component Solutions</Link>
                    </Button>
                  </div>
                </CardContent>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
