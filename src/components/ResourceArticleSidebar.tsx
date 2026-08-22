"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ResourceArticleSidebarProps = {
  sections: Array<{
    id: string;
    title: string;
  }>;
  label?: string;
  sidebarAria?: string;
  tableOfContentsAria?: string;
};

export function ResourceArticleSidebar({
  sections,
  label = "On this page",
  sidebarAria = "Article sections",
  tableOfContentsAria = "Article table of contents",
}: ResourceArticleSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileTocValue, setMobileTocValue] = useState("");

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));
    const articleEnd = document.getElementById("resource-article-end");

    if (articleEnd) {
      elements.push(articleEnd);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)[0];

        if (!visibleEntry) {
          return;
        }

        if (visibleEntry.target.id === "resource-article-end") {
          setActiveIndex(sections.length - 1);
          return;
        }

        const nextIndex = sections.findIndex(
          (section) => section.id === visibleEntry.target.id,
        );

        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      {
        rootMargin: "-8% 0px -72% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const sectionLinks = (mobile = false) => (
    <ul className={mobile ? "grid gap-1" : "grid gap-1.5"}>
      {sections.map((section, index) => {
        const isActive = index === activeIndex;

        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`block rounded-md border-l px-3 text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 ${
                mobile ? "min-h-11 py-3" : "py-2"
              } ${
                isActive
                  ? "border-sky-600 bg-sky-50 font-semibold text-sky-800"
                  : "border-transparent text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-950"
              }`}
              onClick={() => {
                setActiveIndex(index);
                if (mobile) {
                  setMobileTocValue("");
                }
              }}
            >
              {section.title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className="h-full" aria-label={sidebarAria}>
      <div className="hidden lg:sticky lg:top-[calc(var(--site-header-height)+2rem)] lg:block">
        <p className="mb-4 text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">
          {label}
        </p>
        <nav aria-label={tableOfContentsAria}>{sectionLinks()}</nav>
      </div>

      <div className="border-b border-slate-200 bg-white px-5 py-3 sm:px-8 lg:hidden">
        <Accordion
          type="single"
          collapsible
          value={mobileTocValue}
          onValueChange={setMobileTocValue}
        >
          <AccordionItem value="article-sections" className="border-0">
            <AccordionTrigger className="min-h-11 py-2 text-sm font-semibold text-slate-800 hover:no-underline">
              {label}
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-2">
              <nav aria-label={tableOfContentsAria}>
                {sectionLinks(true)}
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
