import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DirectoryRow } from "@/components/DirectoryRow";
import { SectionIntro } from "@/components/SectionIntro";
import { getRelatedCaseStudies } from "@/data/caseStudies";
import type { ApplicationItem } from "@/data/applications";

import styles from "./GlassFiberPomDecisionPaths.module.css";

type GlassFiberPomDecisionPathsProps = {
  applications: Pick<ApplicationItem, "description" | "slug" | "title">[];
};

const categoryPath =
  "/products/categories/glass-fiber-reinforced-pom-compound";

export function GlassFiberPomDecisionPaths({
  applications,
}: GlassFiberPomDecisionPathsProps) {
  const caseStudies = getRelatedCaseStudies({ sourcePath: categoryPath });

  return (
    <section
      id="category-applications"
      aria-labelledby="glass-fiber-pom-paths-title"
      className={styles.root}
    >
      <SectionIntro
        className={styles.intro}
        description="Start with the closest part family, then review how customers evaluated specific glass-fiber POM grades in comparable parts."
        layout="split"
        title="Application paths and customer trials"
        titleId="glass-fiber-pom-paths-title"
      />

      <div className={styles.directories}>
        <div className={styles.directory}>
          <div className={styles.directoryHeading}>
            <h3>Application paths</h3>
            <span>{String(applications.length).padStart(2, "0")}</span>
          </div>
          <ul className={styles.list}>
            {applications.map((application, index) => (
              <li key={application.slug}>
                <DirectoryRow
                  description={application.description}
                  eyebrow={String(index + 1).padStart(2, "0")}
                  href={`/applications/${application.slug}`}
                  label={application.title}
                  variant="compact"
                />
              </li>
            ))}
          </ul>
          <Link className={styles.allLink} href="/applications">
            View all applications
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <div className={styles.directory}>
          <div className={styles.directoryHeading}>
            <h3>Customer trials</h3>
            <span>{String(caseStudies.length).padStart(2, "0")}</span>
          </div>
          <ul className={styles.list}>
            {caseStudies.map((study) => (
              <li key={study.id}>
                <DirectoryRow
                  description={study.description}
                  eyebrow={`${study.grade} · ${study.label}`}
                  href={`${study.path}#top`}
                  label={study.title}
                  variant="compact"
                />
              </li>
            ))}
          </ul>
          <Link className={styles.allLink} href="/case-studies">
            View all customer cases
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
