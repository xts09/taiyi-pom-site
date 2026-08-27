"use client";

import { Children, useState, type ReactNode } from "react";

type ApplicationExpandableGridProps = {
  children: ReactNode;
  className: string;
  id: string;
  initialVisibleCount: 3 | 4;
  showLessLabel: string;
  showMoreLabel: string;
};

export function ApplicationExpandableGrid({
  children,
  className,
  id,
  initialVisibleCount,
  showLessLabel,
  showMoreLabel,
}: ApplicationExpandableGridProps) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hasMoreItems = items.length > initialVisibleCount;
  const additionalItemsId = `${id}-additional`;

  return (
    <div
      className={`${className} application-expandable-grid${expanded ? " is-expanded" : ""}`}
      id={id}
    >
      {items.slice(0, initialVisibleCount)}

      {hasMoreItems ? (
        <button
          aria-controls={additionalItemsId}
          aria-expanded={expanded}
          className="application-expandable-toggle"
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          <span aria-live="polite">
            {expanded ? showLessLabel : showMoreLabel}
          </span>
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      ) : null}

      {hasMoreItems ? (
        <div
          className="application-expandable-extra"
          id={additionalItemsId}
        >
          {items.slice(initialVisibleCount)}
        </div>
      ) : null}
    </div>
  );
}
