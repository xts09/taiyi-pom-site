import Link from "next/link";
import { catalogProducts, isCatalogRecordIndexable } from "@/data/catalog";
import type { LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import styles from "./ApplicationGradeText.module.css";

const gradePaths = new Map(
  catalogProducts
    .filter(isCatalogRecordIndexable)
    .map((product) => [product.grade, `/products/${product.slug}`]),
);
const gradePattern = new RegExp(
  `(?<![A-Za-z0-9-])(${[...gradePaths.keys()]
    .sort((left, right) => right.length - left.length)
    .map((grade) => grade.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})(?![A-Za-z0-9-])`,
  "g",
);

/** Link exact POM catalog names without changing the surrounding selection conditions. */
export function ApplicationGradeText({ text, localeSegment }: {
  text: string;
  localeSegment?: LocalizedUrlSegment;
}) {
  const linkedGrades = new Set<string>();
  return text.split(gradePattern).map((part, index) => {
    const path = gradePaths.get(part);
    if (!path || linkedGrades.has(part)) return part;
    linkedGrades.add(part);
    return (
      <Link
        key={index}
        className={styles.gradeLink}
        href={getLocalizedHref(path, localeSegment)}
        prefetch={false}
      >
        {part}
      </Link>
    );
  });
}
