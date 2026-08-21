"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { ResourceModule } from "@/data/resources";
import type { ResourceIndexMessages } from "@/i18n/resourceTypes";
import { toResourceSectionId } from "@/lib/resource-page";

type ResourceGuideExplorerProps = {
  modules: ResourceModule[];
  pageTitle: string;
  messages?: ResourceIndexMessages["guideExplorer"];
};

const defaultMessages = {
  explorerAriaSuffix: "explorer",
  searchTitlePrefix: "Search",
  searchDescription:
    "Search guide topics, review points, material selection notes, and validation inputs.",
  searchLabel: "Search guide",
  searchPlaceholder: "Try: shrinkage, warpage, drying, wear…",
  topicsAriaSuffix: "topics",
  emptyTitle: "No matching guide topics",
  emptyDescription:
    "Try a broader term such as POM, shrinkage, wear, document, or trial.",
};

const normalize = (value: string) => value.trim().toLowerCase();

export function ResourceGuideExplorer({
  modules,
  pageTitle,
  messages,
}: ResourceGuideExplorerProps) {
  const copy = messages ?? defaultMessages;
  const [query, setQuery] = useState("");
  const [activeTitle, setActiveTitle] = useState(modules[0]?.title ?? "");
  const normalizedQuery = normalize(query);
  const inputId = `resource-guide-search-${toResourceSectionId(pageTitle)}`;

  const filteredModules = useMemo(() => {
    if (!normalizedQuery) {
      return modules;
    }

    return modules.filter((module) => {
      const searchable = normalize(
        `${module.title} ${module.navLabel ?? ""} ${module.description} ${(module.points ?? []).join(" ")}`,
      );
      return searchable.includes(normalizedQuery);
    });
  }, [modules, normalizedQuery]);

  const topicModules = normalizedQuery ? filteredModules : modules;
  const activeModule =
    topicModules.find((module) => module.title === activeTitle) ??
    topicModules[0];

  return (
    <section
      className="resource-faq-explorer stagger-list"
      aria-label={`${pageTitle} ${copy.explorerAriaSuffix}`}
    >
      <div className="resource-faq-finder stagger-list">
        <div className="resource-faq-finder-copy stagger-list">
          <strong>
            {copy.searchTitlePrefix} {pageTitle}
          </strong>
          <p>{copy.searchDescription}</p>
        </div>

        <label className="resource-faq-search-label" htmlFor={inputId}>
          <span>{copy.searchLabel}</span>
          <span className="resource-faq-search-control">
            <Search
              aria-hidden="true"
              className="resource-search-mark"
              strokeWidth={2.25}
            />
            <Input
              id={inputId}
              name="resource-guide-search"
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
          aria-label={`${pageTitle} ${copy.topicsAriaSuffix}`}
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
            className="resource-faq-section resource-guide-section stagger-list"
          >
            <div className="resource-faq-section-head">
              <h2>{activeModule.title}</h2>
            </div>
            <p>{activeModule.description}</p>
            <ul className="resource-guide-point-list">
              {(activeModule.points ?? []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
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
