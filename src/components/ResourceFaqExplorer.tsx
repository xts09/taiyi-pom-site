"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ResourceFaqAccordion } from "@/components/ResourceFaqAccordion";
import { Input } from "@/components/ui/input";
import type { ResourceModule } from "@/data/resources";
import type { ResourceIndexMessages } from "@/i18n/resourceTypes";
import { toResourceSectionId } from "@/lib/resource-page";

type ResourceFaqExplorerProps = {
  modules: ResourceModule[];
  messages?: ResourceIndexMessages["faqExplorer"];
};

const defaultMessages = {
  ariaLabel: "FAQ explorer",
  searchTitle: "Search Technical FAQ",
  searchDescription:
    "Search material comparison, modification direction, TDS interpretation, documents, and validation inputs.",
  searchLabel: "Search questions",
  searchPlaceholder: "Try: shrinkage, HDT, conductive, TDS…",
  topicsAria: "FAQ topics",
  emptyTitle: "No matching questions",
  emptyDescription:
    "Try a broader term such as POM, wear, shrinkage, document, or grade selection.",
  questionsAriaSuffix: "questions",
};

const normalize = (value: string) => value.trim().toLowerCase();

export function ResourceFaqExplorer({
  modules,
  messages,
}: ResourceFaqExplorerProps) {
  const copy = messages ?? defaultMessages;
  const [query, setQuery] = useState("");
  const [activeTitle, setActiveTitle] = useState(modules[0]?.title ?? "");
  const normalizedQuery = normalize(query);

  const filteredModules = useMemo(() => {
    if (!normalizedQuery) {
      return modules;
    }

    return modules
      .map((module) => {
        const faqItems =
          module.faqItems?.filter((item) => {
            const searchable = normalize(`${item.question} ${item.answer}`);
            return searchable.includes(normalizedQuery);
          }) ?? [];

        return {
          ...module,
          faqItems,
        };
      })
      .filter((module) => (module.faqItems?.length ?? 0) > 0);
  }, [modules, normalizedQuery]);

  const topicModules = normalizedQuery ? filteredModules : modules;
  const activeModule =
    topicModules.find((module) => module.title === activeTitle) ??
    topicModules[0];

  return (
    <section
      className="resource-faq-explorer stagger-list"
      aria-label={copy.ariaLabel}
    >
      <div className="resource-faq-finder stagger-list">
        <div className="resource-faq-finder-copy stagger-list">
          <strong>{copy.searchTitle}</strong>
          <p>{copy.searchDescription}</p>
        </div>

        <label
          className="resource-faq-search-label"
          htmlFor="resource-faq-search"
        >
          <span>{copy.searchLabel}</span>
          <span className="resource-faq-search-control">
            <Search
              aria-hidden="true"
              className="resource-search-mark"
              strokeWidth={2.25}
            />
            <Input
              id="resource-faq-search"
              name="faq-search"
              type="search"
              autoComplete="off"
              value={query}
              placeholder={copy.searchPlaceholder}
              onChange={(event) => setQuery(event.target.value)}
              className="resource-faq-search-input"
            />
          </span>
        </label>

        <section
          className="resource-faq-topic-panel"
          aria-label={copy.topicsAria}
        >
          <div className="resource-faq-topic-list stagger-list">
            {topicModules.map((module) => (
              <button
                key={module.title}
                type="button"
                aria-pressed={module.title === activeModule?.title}
                aria-controls={`panel-${toResourceSectionId(module.title)}`}
                onClick={() => setActiveTitle(module.title)}
              >
                <span>{module.navLabel ?? module.title}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="resource-faq-content stagger-list">
        {activeModule ? (
          <section
            id={`panel-${toResourceSectionId(activeModule.title)}`}
            className="resource-faq-section stagger-list"
          >
            <div className="resource-faq-section-head">
              <h2>{activeModule.title}</h2>
            </div>
            <p>{activeModule.description}</p>
            <ResourceFaqAccordion
              key={activeModule.title}
              moduleIndex={modules.findIndex(
                (source) => source.title === activeModule.title,
              )}
              moduleTitle={activeModule.title}
              items={activeModule.faqItems ?? []}
              questionsAriaSuffix={copy.questionsAriaSuffix}
            />
          </section>
        ) : (
          <div className="resource-faq-empty" role="status">
            <strong>{copy.emptyTitle}</strong>
            <p>{copy.emptyDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
}
