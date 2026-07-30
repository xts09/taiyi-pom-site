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
  subtitle: string;
  tabs: SecondarySectionNavTab[];
  title: string;
  variant: "application" | "product";
};

const defaultActions: SecondarySectionNavAction[] = [
  { href: "/contact", label: "Send Requirement" },
  { href: "/technical-data-sheets", label: "Search Data / TDS" },
];

export function SecondarySectionNav({
  actions = defaultActions,
  ariaLabel,
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
      data-slot="secondary-section-nav"
      data-variant={variant}
    >
      <div
        className={`${prefix}-section-nav-top`}
        data-slot="secondary-section-nav-top"
      >
        <div
          className={`${prefix}-section-identity`}
          data-slot="secondary-section-identity"
        >
          <p data-slot="secondary-section-title">
            <span
              className={`${prefix}-section-title-marker`}
              data-slot="secondary-section-marker"
              aria-hidden="true"
            />
            <span
              className={`${prefix}-section-title-text`}
              data-slot="secondary-section-title-text"
            >
              {title}
            </span>
          </p>
          <span
            className={`${prefix}-section-subtitle`}
            data-slot="secondary-section-subtitle"
          >
            {subtitle}
          </span>
        </div>

        <div
          className={`${prefix}-section-actions`}
          data-slot="secondary-section-actions"
        >
          {actions.map((action, index) => (
            <Link
              key={action.href}
              href={action.href}
              data-slot="secondary-section-action"
              data-priority={index === 0 ? "primary" : "secondary"}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      <nav
        className={`${prefix}-section-tabs`}
        aria-label="Page sections"
        data-slot="secondary-section-tabs"
      >
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            data-slot="secondary-section-tab"
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
