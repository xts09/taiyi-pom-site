import type { CSSProperties } from "react";
import Link from "next/link";

export type SecondarySectionNavTab = {
  href: string;
  label: string;
};

type SecondarySectionNavAction = {
  href: string;
  label: string;
};

type SecondarySectionNavProps = {
  actions?: SecondarySectionNavAction[];
  ariaLabel: string;
  style?: CSSProperties;
  subtitle: string;
  tabs: SecondarySectionNavTab[];
  title: string;
  variant: "application" | "product";
};

const defaultActions: SecondarySectionNavAction[] = [
  { href: "/contact", label: "Discuss Requirement" },
  { href: "/technical-data-sheets", label: "Find a TDS" },
];

export function SecondarySectionNav({
  actions = defaultActions,
  ariaLabel,
  style,
  subtitle,
  tabs,
  title,
  variant,
}: SecondarySectionNavProps) {
  const prefix = variant === "product" ? "product" : "application";

  return (
    <section
      className={`${prefix}-section-nav`}
      aria-label={ariaLabel}
      style={style}
    >
      <div className={`${prefix}-section-nav-top`}>
        <div className={`${prefix}-section-identity`}>
          <p>{title}</p>
          <span className={`${prefix}-section-subtitle`}>{subtitle}</span>
        </div>

        <div className={`${prefix}-section-actions`}>
          {actions.map((action) => (
            <Link key={action.href} href={action.href}>
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      <nav className={`${prefix}-section-tabs`} aria-label="Page sections">
        {tabs.map((tab) => (
          <a key={tab.href} href={tab.href}>
            {tab.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
