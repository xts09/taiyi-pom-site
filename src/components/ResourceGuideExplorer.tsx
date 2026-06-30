"use client";

import { useMemo, useState } from "react";
import type { ResourceModule } from "@/data/resources";

type ResourceGuideExplorerProps = {
  modules: ResourceModule[];
  pageTitle: string;
};

const toSectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalize = (value: string) => value.trim().toLowerCase();

export function ResourceGuideExplorer({
  modules,
  pageTitle,
}: ResourceGuideExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeTitle, setActiveTitle] = useState(modules[0]?.title ?? "");
  const normalizedQuery = normalize(query);
  const inputId = `resource-guide-search-${toSectionId(pageTitle)}`;

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
      className="resource-faq-explorer"
      aria-label={`${pageTitle} explorer`}
    >
      <div className="resource-faq-finder">
        <div className="resource-faq-finder-copy">
          <strong>Search {pageTitle}</strong>
          <p>
            Search the guide topics, review points, material direction notes,
            and validation inputs.
          </p>
        </div>

        <label className="resource-faq-search-label" htmlFor={inputId}>
          <span>Search guide</span>
          <span className="resource-faq-search-control">
            <span aria-hidden="true" className="resource-search-mark" />
            <input
              id={inputId}
              name="resource-guide-search"
              type="search"
              autoComplete="off"
              value={query}
              placeholder="Try: shrinkage, warpage, drying, wear..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </span>
        </label>

        <section
          className="resource-faq-topic-panel"
          aria-label={`${pageTitle} topics`}
        >
          <div className="resource-faq-topic-list">
            {topicModules.map((module) => (
              <button
                key={module.title}
                type="button"
                aria-pressed={module.title === activeModule?.title}
                aria-controls={`panel-${toSectionId(module.title)}`}
                onClick={() => setActiveTitle(module.title)}
              >
                <span>{module.navLabel ?? module.title}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="resource-faq-content">
        {activeModule ? (
          <section
            id={`panel-${toSectionId(activeModule.title)}`}
            className="resource-faq-section resource-guide-section"
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
            <strong>No matching guide topics</strong>
            <p>
              Try a broader term such as POM, shrinkage, wear, document, or
              trial.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
