"use client";

import { Children, useState, type ReactNode } from "react";

type ApplicationExpandableGridProps = {
  children: ReactNode;
  className: string;
  id: string;
  initialVisibleCount: 3 | 4;
  showMoreLabel: string;
};

export function ApplicationExpandableGrid({
  children,
  className,
  id,
  initialVisibleCount,
  showMoreLabel,
}: ApplicationExpandableGridProps) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hasMoreItems = items.length > initialVisibleCount;

  return (
    <div
      className={`${className} application-expandable-grid${expanded ? " is-expanded" : ""}`}
      id={id}
    >
      {items.slice(0, initialVisibleCount)}

      {hasMoreItems && !expanded ? (
        <button
          aria-controls={id}
          aria-expanded="false"
          className="application-expandable-toggle"
          onClick={() => setExpanded(true)}
          type="button"
        >
          <span>{showMoreLabel}</span>
          <span aria-hidden="true">+</span>
        </button>
      ) : null}

      {items.slice(initialVisibleCount)}
    </div>
  );
}
