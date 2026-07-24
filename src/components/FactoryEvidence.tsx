"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FactoryEvidenceItem = {
  label: string;
  title: string;
  detail: string;
};

type FactoryEvidenceProps = {
  items: ReadonlyArray<FactoryEvidenceItem>;
};

export function FactoryEvidence({ items }: FactoryEvidenceProps) {
  const defaultValue = items[0]?.title;

  if (!defaultValue) {
    return null;
  }

  return (
    <>
      <div
        className="factory-evidence factory-evidence-desktop"
        aria-label="Factory evidence"
      >
        {items.map((item, index) => (
          <article key={item.title}>
            <span>
              0{index + 1} / {item.label}
            </span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <Accordion
        type="single"
        defaultValue={defaultValue}
        collapsible={false}
        className="factory-evidence-mobile"
        aria-label="Factory evidence"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.title}
            value={item.title}
            className="border-white/15"
          >
            <AccordionTrigger className="factory-evidence-mobile-trigger items-center px-5 py-5 text-left hover:no-underline [&>svg]:size-5">
              <span className="factory-evidence-mobile-copy grid min-w-0 flex-1 gap-2 pr-4">
                <span className="factory-evidence-mobile-label">
                  0{index + 1} / {item.label}
                </span>
                <span className="factory-evidence-mobile-title">
                  {item.title}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <p className="factory-evidence-mobile-detail m-0 px-5 pb-5 pr-12 text-sm leading-6">
                {item.detail}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
