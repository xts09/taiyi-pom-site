import Link from "next/link";

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbsProps = {
  className?: string;
  items: BreadcrumbItem[];
  variant?: "default" | "hero" | "resource";
};

export function Breadcrumbs({
  className,
  items,
  variant = "default",
}: BreadcrumbsProps) {
  const classes = [
    "site-breadcrumb",
    `site-breadcrumb--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav
      className={classes}
      aria-label="Breadcrumb"
      data-slot="breadcrumb"
      data-variant={variant}
    >
      <ol data-slot="breadcrumb-list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              data-slot="breadcrumb-item"
              data-current={isCurrent ? "true" : undefined}
            >
              {index > 0 ? (
                <span
                  className="site-breadcrumb__separator"
                  data-slot="breadcrumb-separator"
                  aria-hidden="true"
                >
                  /
                </span>
              ) : null}

              {item.href && !isCurrent ? (
                <Link href={item.href} data-slot="breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  data-slot={
                    isCurrent ? "breadcrumb-current" : "breadcrumb-label"
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
