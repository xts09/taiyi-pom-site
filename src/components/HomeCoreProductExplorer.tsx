"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import type { HomeTaskFirstMessages } from "@/i18n/types";

type HomeCoreProductExplorerProps = {
  messages: HomeTaskFirstMessages["core"];
  pomHref: string;
  productsHref: string;
  groupHrefs: ReadonlyArray<{
    href: string;
    related: readonly string[];
  }>;
  supportingHrefs: readonly string[];
};

export function HomeCoreProductExplorer({
  messages,
  pomHref,
  productsHref,
  groupHrefs,
  supportingHrefs,
}: HomeCoreProductExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = messages.groups[activeIndex];
  const activeRoutes = groupHrefs[activeIndex];

  if (!activeGroup || !activeRoutes) {
    return null;
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % messages.groups.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + messages.groups.length) % messages.groups.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = messages.groups.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    document.getElementById(`home-core-tab-${nextIndex}`)?.focus();
  }

  return (
    <section id="core-products" className="home-core-line home-task-section">
      <div className="site-container">
        <header className="home-core-intro">
          <div className="home-core-intro-copy">
            <p className="home-task-eyebrow">{messages.eyebrow}</p>
            <h2>{messages.title}</h2>
            <p>{messages.body}</p>
            <Button asChild className="home-core-action h-auto">
              <Link href={pomHref}>
                {messages.action}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Button>
          </div>

          <div
            className="home-core-material-plate"
            aria-label={messages.directionsAria}
          >
            <div className="home-core-plate-head" aria-hidden="true">
              <span>PLATFORM / POM</span>
              <span>POLYOXYMETHYLENE</span>
            </div>
            <strong aria-hidden="true">POM</strong>
            <div className="home-core-plate-directions">
              {messages.groups.map((group) => (
                <span key={group.title}>{group.title}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="home-core-explorer">
          <div
            className="home-core-direction-tabs"
            role="tablist"
            aria-label={messages.directionsAria}
          >
            {messages.groups.map((group, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={group.title}
                  id={`home-core-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`home-core-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "is-active" : undefined}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span>
                    <strong>{group.title}</strong>
                    <small>{group.summary}</small>
                  </span>
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              );
            })}
          </div>

          <article
            key={activeGroup.title}
            id={`home-core-panel-${activeIndex}`}
            className="home-core-direction-panel"
            role="tabpanel"
            aria-labelledby={`home-core-tab-${activeIndex}`}
          >
            <div className="home-core-panel-heading">
              <p>{messages.panelLabel}</p>
              <h3>{activeGroup.panelTitle}</h3>
              {activeGroup.description ? (
                <div className="home-core-panel-description">
                  {activeGroup.description}
                </div>
              ) : null}
            </div>
            <div className="home-core-panel-body">
              <div className="home-core-review-inputs">
                <h4>{messages.reviewLabel}</h4>
                <ul>
                  {activeGroup.reviewInputs.map((input) => (
                    <li key={input}>{input}</li>
                  ))}
                </ul>
              </div>
              <div className="home-core-material-routes">
                <h4>{messages.materialsLabel}</h4>
                <div>
                  <Link href={activeRoutes.href}>
                    {activeGroup.action}
                    <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                  {activeRoutes.related.length > 0
                    ? activeGroup.relatedLinks.map((label, linkIndex) => (
                        <Link
                          key={label}
                          href={activeRoutes.related[linkIndex]}
                        >
                          {label}
                          <ArrowRight aria-hidden="true" size={14} />
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <p className="home-core-components-note">
              {activeGroup.componentsNote}
            </p>
          </article>
        </div>

        <aside className="home-supporting-materials">
          <div>
            <h3>{messages.supportingTitle}</h3>
            <p>{messages.supportingBody}</p>
          </div>
          <div className="home-supporting-links">
            {messages.supportingLinks.map((label, index) => (
              <Link key={label} href={supportingHrefs[index]}>
                {label}
              </Link>
            ))}
            <Link className="home-supporting-all" href={productsHref}>
              {messages.allFamiliesAction}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
