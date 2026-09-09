import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./GlassFiberGradeCards.module.css";

export type GlassFiberGradeCard = {
  grade: string;
  href: string;
  eyebrow: string;
  metrics: { label: string; value: ReactNode }[];
};

export function GlassFiberGradeHeading({ eyebrow, title, description, count, titleId }: {
  eyebrow: string;
  title: string;
  description: string;
  count: string;
  titleId?: string;
}) {
  return <div className={styles.heading}>
    <div><p className={styles.eyebrow}>{eyebrow}</p><h2 id={titleId}>{title}</h2><p>{description}</p></div>
    <span className={styles.count}>{count}</span>
  </div>;
}

export function GlassFiberGradeCards({ grades, actionLabel }: {
  grades: GlassFiberGradeCard[];
  actionLabel: string;
}) {
  return <div className={styles.directory}>
    {grades.map((grade, index) => <Link key={grade.grade} href={grade.href} className={styles.card} data-grade={grade.grade}>
      <div className={styles.identity}>
        <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
        <div><p className={styles.family}>{grade.eyebrow}</p><h3>{grade.grade}</h3></div>
      </div>
      <span className={styles.action}>{actionLabel}<span aria-hidden="true"> →</span></span>
      <dl className={styles.metrics}>{grade.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
    </Link>)}
  </div>;
}
