"use client";

import { useMemo, useState } from "react";
import type { ResourceFaqItem } from "@/data/resources";

type ResourceFaqAccordionProps = {
  moduleIndex: number;
  moduleTitle: string;
  items: ResourceFaqItem[];
};

const toAnchorId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function ResourceFaqAccordion({
  moduleIndex,
  moduleTitle,
  items,
}: ResourceFaqAccordionProps) {
  const itemIds = useMemo(
    () =>
      items.map((item, index) => {
        const questionSlug = toAnchorId(item.question);
        return `faq-${moduleIndex + 1}-${questionSlug || index + 1}`;
      }),
    [items, moduleIndex],
  );
  const [openItems, setOpenItems] = useState<Set<string>>(
    () => new Set(itemIds.slice(0, 1)),
  );

  const toggleItem = (id: string) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="resource-faq-list" aria-label={`${moduleTitle} questions`}>
      {items.map((item, index) => {
        const itemId = itemIds[index];
        const buttonId = `${itemId}-button`;
        const panelId = `${itemId}-answer`;
        const isOpen = openItems.has(itemId);

        return (
          <div className="resource-faq-item" key={item.question}>
            <button
              id={buttonId}
              type="button"
              className="resource-faq-question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(itemId)}
            >
              <span className="resource-faq-question-text">{item.question}</span>
              <span aria-hidden="true" className="resource-faq-icon" />
            </button>
            <div
              id={panelId}
              className="resource-faq-answer"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
