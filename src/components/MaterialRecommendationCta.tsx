import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type MaterialRecommendationCtaProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "children" | "title"
> & {
  kicker: string;
  title: string;
  children: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  actionClassName?: string;
  aside?: ReactNode;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MaterialRecommendationCta({
  kicker,
  title,
  children,
  actionLabel = "Contact Sales",
  actionHref = "/contact",
  actionClassName = "px-7",
  aside,
  className,
  ...sectionProps
}: MaterialRecommendationCtaProps) {
  return (
    <section {...sectionProps} className={cx("material-cta", className)}>
      <div className="material-cta-copy">
        <p className="section-kicker mb-3">{kicker}</p>
        <h2>{title}</h2>
        <div className="material-cta-body">
          {typeof children === "string" ? <p>{children}</p> : children}
        </div>
      </div>

      {aside ? <div className="material-cta-aside">{aside}</div> : null}

      <Link
        href={actionHref}
        className={cx(
          "cta-primary material-cta-action shrink-0 py-3 text-sm",
          actionClassName
        )}
      >
        {actionLabel}
      </Link>
    </section>
  );
}
