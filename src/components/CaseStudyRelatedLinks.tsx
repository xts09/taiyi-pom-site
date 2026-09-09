import Link from "next/link";
import { caseReadingGuides, caseStudyDiscovery } from "@/data/caseStudyDiscovery";
import { getResourcePage } from "@/data/resources";
import { getChineseResourcePage } from "@/i18n/resourceMessages";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import { createContactHref } from "@/lib/contactContext";
import styles from "./CaseStudyRelatedLinks.module.css";

type Props = { caseId: string; grade: string; gradePath?: string; localeSegment?: "zh" };

export function CaseStudyRelatedLinks({ caseId, grade, gradePath, localeSegment }: Props) {
  const zh = localeSegment === "zh";
  const gradeHref = gradePath ? getLocalizedHref(gradePath, localeSegment)
    : createContactHref({ grade, intent: "grade-evaluation", source: caseId }, getLocalizedHref("/contact", localeSegment));
  return <section className={styles.related} aria-labelledby="case-related-reading">
    <h2 id="case-related-reading">{zh ? "相关牌号与技术文章" : "Material data and related reading"}</h2>
    <div>
      <Link className={styles.grade} href={gradeHref}>
        <span>{gradePath ? (zh ? "查看牌号数据" : "View grade data") : (zh ? "咨询案例牌号" : "Ask about this grade")}</span>
        <strong>{grade}</strong><span aria-hidden="true">↗</span>
      </Link>
      <ul className={styles.links}>
        {caseStudyDiscovery[caseId].articles.map((key) => {
          const guide = caseReadingGuides[key];
          const article = zh ? getChineseResourcePage(guide.slug) : getResourcePage(guide.slug)!;
          return <li key={key}><Link href={getLocalizedHref(`/resources/${guide.slug}`, localeSegment)}>
            <span className={styles.title}>{article.title}<span aria-hidden="true">↗</span></span>
            <span className={styles.reason}>{guide.reason[localeSegment ?? "en"]}</span>
          </Link></li>;
        })}
      </ul>
    </div>
  </section>;
}
