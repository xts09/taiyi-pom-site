"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type MaterialDirection = {
  title: string;
  description: string;
  href: string;
  action: string;
  specs: string[][];
};

type MaterialRangeAccordionProps = {
  directions: MaterialDirection[];
  ariaLabel: string;
};

export function MaterialRangeAccordion({
  directions,
  ariaLabel,
}: MaterialRangeAccordionProps) {
  const defaultValue = directions[0]?.title;

  if (!defaultValue) {
    return null;
  }

  return (
    <Accordion
      type="single"
      defaultValue={defaultValue}
      collapsible={false}
      className="product-stream"
      aria-label={ariaLabel}
    >
      {directions.map((direction, index) => (
        <AccordionItem
          key={direction.title}
          value={direction.title}
          className="product-disclosure"
          style={{ "--item-index": index } as CSSProperties}
        >
          <AccordionTrigger
            className="product-disclosure-summary"
            indicator={
              <span className="product-arrow" aria-hidden="true">
                +
              </span>
            }
          >
            <span className="product-index">0{index + 2}</span>
            <span className="product-line-main">
              <span className="product-line-title">{direction.title}</span>
              <span>{direction.specs[0][1]}</span>
            </span>
          </AccordionTrigger>

          <AccordionContent className="product-disclosure-body">
            <div>
              <p>{direction.description}</p>
              <dl className="product-specs">
                {direction.specs.slice(1).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <Link href={direction.href} className="text-link">
                {direction.action} &rarr;
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
