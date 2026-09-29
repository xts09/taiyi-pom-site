"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LocalizedUrlSegment } from "@/i18n/config";
import styles from "./PaginationNav.module.css";

export type PaginationLocale = LocalizedUrlSegment | "en";

type PaginationKind = "grades" | "results";

const copy: Record<PaginationLocale, {
  gradesLabel: string;
  resultsLabel: string;
  previous: string;
  next: string;
  page: string;
  showing: (first: number, last: number, total: number, kind: PaginationKind) => string;
}> = {
  en: {
    gradesLabel: "Grade directory pages",
    resultsLabel: "Search result pages",
    previous: "Previous",
    next: "Next",
    page: "Page",
    showing: (first, last, total, kind) => `Showing ${first}–${last} of ${total} ${kind}`,
  },
  de: {
    gradesLabel: "Seiten des Werkstofftypverzeichnisses",
    resultsLabel: "Suchergebnisseiten",
    previous: "Zurück",
    next: "Weiter",
    page: "Seite",
    showing: (first, last, total, kind) => `${first}–${last} von ${total} ${kind === "grades" ? "Werkstofftypen" : "Ergebnissen"}`,
  },
  fr: {
    gradesLabel: "Pages du répertoire des grades",
    resultsLabel: "Pages de résultats",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    showing: (first, last, total, kind) => `${first}–${last} sur ${total} ${kind === "grades" ? "grades" : "résultats"}`,
  },
  "pt-br": {
    gradesLabel: "Páginas do catálogo de grades",
    resultsLabel: "Páginas de resultados",
    previous: "Anterior",
    next: "Próxima",
    page: "Página",
    showing: (first, last, total, kind) => `${first}–${last} de ${total} ${kind === "grades" ? "grades" : "resultados"}`,
  },
  zh: {
    gradesLabel: "牌号目录分页",
    resultsLabel: "搜索结果分页",
    previous: "上一页",
    next: "下一页",
    page: "第",
    showing: (first, last, total, kind) => `显示第 ${first}–${last} 个，共 ${total} 个${kind === "grades" ? "牌号" : "结果"}`,
  },
};

type Props = {
  page: number;
  totalPages: number;
  first: number;
  last: number;
  total: number;
  kind: PaginationKind;
  locale?: PaginationLocale;
  anchor?: string;
} & (
  | { onPageChange: (page: number) => void; hrefBase?: never }
  | { hrefBase: string; onPageChange?: never }
);

type PageToken = number | "start-ellipsis" | "end-ellipsis";

function getPageTokens(page: number, totalPages: number): PageToken[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (page <= 2) return [1, 2, 3, "end-ellipsis", totalPages];
  if (page >= totalPages - 1) return [1, "start-ellipsis", totalPages - 2, totalPages - 1, totalPages];
  return [1, "start-ellipsis", page, "end-ellipsis", totalPages];
}

export function PaginationNav({
  page,
  totalPages,
  first,
  last,
  total,
  kind,
  locale = "en",
  anchor,
  hrefBase,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const labels = copy[locale];
  const href = (number: number) =>
    `${hrefBase}${hrefBase?.includes("?") ? "&" : "?"}page=${number}${anchor ? `#${anchor}` : ""}`;
  const control = (number: number, label: string, content: ReactNode, className?: string) => {
    const disabled = number < 1 || number > totalPages;
    if (disabled) return <button key={label} className={className} type="button" aria-label={label} disabled>{content}</button>;
    if (hrefBase !== undefined) return <Link key={label} className={className} href={href(number)} prefetch={false} aria-label={label} aria-current={number === page ? "page" : undefined}>{content}</Link>;
    return <button key={label} className={className} type="button" aria-label={label} aria-current={number === page ? "page" : undefined} onClick={() => onPageChange?.(number)}>{content}</button>;
  };

  return (
    <nav className={styles.pager} aria-label={kind === "grades" ? labels.gradesLabel : labels.resultsLabel}>
      <p className={styles.range} role="status" aria-live="polite">
        {labels.showing(first, last, total, kind)}
      </p>
      <div className={styles.controls}>
        {control(page - 1, labels.previous, <><span className={styles.edgeText}>{labels.previous}</span><span className={styles.edgeArrow} aria-hidden="true">‹</span></>, styles.edge)}
        {getPageTokens(page, totalPages).map((token) => typeof token === "number"
          ? control(token, locale === "zh" ? `第 ${token} 页` : `${labels.page} ${token}`, token)
          : <span key={token} className={styles.ellipsis} aria-hidden="true">…</span>)}
        {control(page + 1, labels.next, <><span className={styles.edgeText}>{labels.next}</span><span className={styles.edgeArrow} aria-hidden="true">›</span></>, styles.edge)}
      </div>
    </nav>
  );
}
