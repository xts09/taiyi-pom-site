import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { GradeDirectoryPagination } from "@/components/GradeDirectoryPagination";
import type { PaginationLocale } from "@/components/PaginationNav";
import { ValueText } from "@/components/UnitText";

type GradeDirectoryProps = {
  children: ReactNode;
  enabled?: boolean;
  labels: readonly [string, string, string];
  locale?: PaginationLocale;
};

export function GradeDirectory({
  children,
  enabled = true,
  labels,
  locale = "en",
}: GradeDirectoryProps) {
  return (
    <div className="product-directory">
      <div className="product-directory-labels" aria-hidden="true">
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
        <span>{labels[2]}</span>
      </div>
      <GradeDirectoryPagination enabled={enabled} locale={locale}>
        {children}
      </GradeDirectoryPagination>
    </div>
  );
}

export type GradeDirectorySpec = readonly [label: string, value: ReactNode];

type GradeDirectoryRowProps = {
  action: ReactNode;
  description: ReactNode;
  eyebrow: ReactNode;
  href: string;
  index: number;
  specs: readonly GradeDirectorySpec[];
  title: ReactNode;
};

export function GradeDirectoryRow({
  action,
  description,
  eyebrow,
  href,
  index,
  specs,
  title,
}: GradeDirectoryRowProps) {
  return (
    <Link
      href={href}
      className="product-directory-row products-motion-row"
      style={{ "--item-index": index } as CSSProperties}
    >
      <div className="product-directory-main">
        <span className="product-directory-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="section-kicker">{eyebrow}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <dl className="product-directory-specs">
        {specs.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{typeof value === "string" ? <ValueText value={value} /> : value}</dd>
          </div>
        ))}
      </dl>

      <span className="product-directory-action">{action}</span>
    </Link>
  );
}
