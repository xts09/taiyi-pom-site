import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DirectoryRow } from "@/components/DirectoryRow";
import { SectionIntro } from "@/components/SectionIntro";
import { getCaseStudyNavigation } from "@/data/caseStudyNavigation";
import { getRelatedCaseStudies } from "@/data/caseStudies";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { cn } from "@/lib/utils";
import styles from "./RelatedCaseStudies.module.css";

type RelatedCaseStudiesProps = {
  className?: string;
  grade?: string;
  localeSegment?: LocalizedUrlSegment;
  sourcePath?: string;
};

export function RelatedCaseStudies({
  className,
  grade,
  localeSegment,
  sourcePath,
}: RelatedCaseStudiesProps) {
  const navigation = getCaseStudyNavigation(localeSegment);
  const studies = getRelatedCaseStudies({ grade, localeSegment, sourcePath });

  if (!navigation || studies.length === 0) return null;

  const zh = localeSegment === "zh";
  const title = grade
    ? zh
      ? `${grade} 客户应用案例`
      : `Customer applications for ${grade}`
    : sourcePath === "/products/categories/glass-fiber-reinforced-pom-compound"
      ? zh
        ? "玻纤 POM 客户应用案例"
        : "Glass-fiber POM customer applications"
      : zh
        ? "相关客户应用案例"
        : "Related customer applications";
  const description = grade
    ? zh
      ? "了解客户如何围绕具体零件要求试模、评估该牌号，并记录当前项目阶段。"
      : "See how customers evaluated this grade against specific part requirements and molding trials."
    : zh
      ? "查看相近零件的材料选择、试模重点与当前项目进展。"
      : "Review material choices, molding priorities and reported project stages for similar parts.";
  const headingId = `related-cases-${grade?.toLowerCase() ?? sourcePath?.split("/").at(-1) ?? "page"}`;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(styles.root, className)}
      data-case-study-backlinks
    >
      <SectionIntro
        className={styles.intro}
        description={description}
        layout="split"
        title={title}
        titleId={headingId}
      />

      <ul className={styles.list}>
        {studies.map((study) => (
          <li key={study.id}>
            <DirectoryRow
              description={study.description}
              eyebrow={`${study.grade} · ${study.label}`}
              href={getLocalizedHref(`${study.path}#top`, localeSegment)}
              label={study.title}
              variant="compact"
            />
          </li>
        ))}
      </ul>

      <Link
        className={styles.allCases}
        href={getLocalizedHref(navigation.href, localeSegment)}
      >
        {zh ? "查看全部客户案例" : "View all customer cases"}
        <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </section>
  );
}
