"use client";

import { useMemo, useState } from "react";
import { ResourceFaqAccordion } from "@/components/ResourceFaqAccordion";
import type { ResourceModule } from "@/data/resources";

type ResourceFaqExplorerProps = {
  modules: ResourceModule[];
};

const toSectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalize = (value: string) => value.trim().toLowerCase();

export function ResourceFaqExplorer({ modules }: ResourceFaqExplorerProps) {
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
    <section className="resource-faq-explorer" aria-label="FAQ explorer">
      <div className="resource-faq-finder">
        <div className="resource-faq-finder-copy">
          <strong>Search Technical FAQ</strong>
          <p>
            Search material comparison, modification direction, TDS
            interpretation, documents, and validation inputs.
          </p>
        </div>

        <label
          className="resource-faq-search-label"
          htmlFor="resource-faq-search"
        >
          <span>Search questions</span>
          <span className="resource-faq-search-control">
            <span aria-hidden="true" className="resource-search-mark" />
            <input
              id="resource-faq-search"
              name="faq-search"
              type="search"
              autoComplete="off"
              value={query}
              placeholder="Try: shrinkage, HDT, conductive, TDS..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </span>
        </label>

        <section className="resource-faq-topic-panel" aria-label="FAQ topics">
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
            className="resource-faq-section"
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
            />
          </section>
        ) : (
          <div className="resource-faq-empty" role="status">
            <strong>No matching questions</strong>
            <p>
              Try a broader term such as POM, wear, shrinkage, document, or
              grade selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
