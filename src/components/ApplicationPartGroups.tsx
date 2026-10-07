"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ApplicationPart } from "@/data/applications";
import type { ApplicationPartGroupsCopy } from "@/data/applicationPartGroupPresentation";
import { publicPath } from "@/lib/paths";
import { Button } from "./ui/button";
import styles from "./ApplicationPartGroups.module.css";

export type ApplicationPartGroup = {
  id: string;
  parts: (ApplicationPart & { guide?: { href: string; label: string; badge?: string } })[];
  materials: { title: string; conditions: string[]; href?: string; action: string; badge?: string }[];
};

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function currentHash() { return window.location.hash; }
function serverHash() { return ""; }

function TextLink({ href, label, badge }: { href: string; label: string; badge?: string }) {
  return <Link href={href} className={styles.textLink}>
    <span className={styles.linkLabel}>{label}</span>
    {badge ? <small>{badge}</small> : null}
    <span aria-hidden="true">↗</span>
  </Link>;
}

export function ApplicationPartGroups({ groups, ui, technicalData, inquiry, idPrefix, defaultGroupId }: {
  groups: ApplicationPartGroup[];
  ui: ApplicationPartGroupsCopy;
  technicalData: { href: string; label: string };
  inquiry: { href: string; label: string };
  idPrefix: string;
  defaultGroupId: string;
}) {
  const defaultIndex = Math.max(0, groups.findIndex(group => group.id === defaultGroupId));
  const hash = useSyncExternalStore(subscribeToHashChange, currentHash, serverHash);
  const hashIndex = groups.findIndex(group => hash === `#application-system-${group.id}`);
  const [selection, setSelection] = useState({ hash: "", index: defaultIndex });
  const [images, setImages] = useState<Record<string, string>>({});
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = selection.hash === hash ? selection.index : hashIndex >= 0 ? hashIndex : defaultIndex;

  // Preserve the existing group bookmarks after their panels become interactive.
  useEffect(() => {
    if (hashIndex < 0) return;
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ block: "start" });
  }, [hash, hashIndex]);

  return <div className={styles.groups} id="application-part-examples">
    <div className={styles.tabs} data-group-count={groups.length} role="tablist" aria-label={ui.tabsLabel}>
      {groups.map((group, index) => {
        const copy = ui.groups[group.id];
        return <button
          key={group.id} type="button" role="tab"
          id={`${idPrefix}-tab-${group.id}`}
          aria-controls={`application-system-${group.id}`}
          aria-selected={activeIndex === index}
          tabIndex={activeIndex === index ? 0 : -1}
          ref={element => { buttons.current[index] = element; }}
          onClick={() => setSelection({ hash, index })}
          onKeyDown={event => {
            const next = event.key === "ArrowRight" ? (index + 1) % groups.length
              : event.key === "ArrowLeft" ? (index + groups.length - 1) % groups.length
              : event.key === "Home" ? 0 : event.key === "End" ? groups.length - 1 : undefined;
            if (next === undefined) return;
            event.preventDefault();
            setSelection({ hash, index: next });
            buttons.current[next]?.focus();
          }}
        >
          <span className={styles.desktopName}>{copy.title}</span>
          <span className={styles.compactName}>{copy.compactTitle}</span>
          <span className={styles.tabCaption}>{copy.scope}</span>
        </button>;
      })}
    </div>

    {groups.map((group, index) => {
      const copy = ui.groups[group.id];
      const illustratedParts = group.parts.filter(part => part.image);
      const picturedPart = illustratedParts.find(part => part.id === images[group.id]) ?? illustratedParts[0];
      return <section key={group.id} className={styles.panel}
        id={`application-system-${group.id}`} role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${group.id}`}
        tabIndex={0} hidden={activeIndex !== index}
      >
        <div className={styles.groupHead}>
          <h3>{copy.title}</h3><p>{copy.intro}</p>
        </div>
        <div className={styles.split}>
          {picturedPart?.image ? <figure className={styles.figure}>
            <div className={styles.featuredImage} id={`${idPrefix}-featured-${group.id}`}>
              <Image src={publicPath(picturedPart.image.src)} alt={picturedPart.image.alt}
                fill sizes="(min-width: 1600px) 650px, (min-width: 768px) 45vw, 85vw" />
            </div>
            <figcaption>{picturedPart.label} · {ui.imageLabel}</figcaption>
            {illustratedParts.length > 1 ? <div className={styles.imageOptions} data-multirow={illustratedParts.length > 3 || undefined}>
              {illustratedParts.map(part => <button key={part.id} type="button"
                aria-label={part.label} aria-pressed={part.id === picturedPart.id}
                aria-controls={`${idPrefix}-featured-${group.id}`}
                onClick={() => setImages(previous => ({ ...previous, [group.id]: part.id }))}
              >
                <Image src={publicPath(part.image!.src)} alt="" width={64} height={52} sizes="64px" />
                <span>{part.label}</span>
              </button>)}
            </div> : null}
          </figure> : null}
          <div className={styles.requirements}>
            <p className={styles.listLabel}>{ui.partsLabel}</p>
            <ul className={styles.partList}>
              {group.parts.map(part => <li key={part.id} data-application-part={part.id}>
                <h4>{part.label}</h4><p>{part.description}</p>
                {part.guide ? <TextLink {...part.guide} /> : null}
              </li>)}
            </ul>
            <div className={styles.materials}>
              {group.materials.map(material => <div key={material.title}>
                <h4>{material.title}</h4>
                {material.conditions.map(condition => <p key={condition}>{condition}</p>)}
                {material.href ? <TextLink href={material.href} label={material.action} badge={material.badge} /> : null}
              </div>)}
            </div>
          </div>
        </div>
        <div className={styles.groupFooter}>
          <TextLink {...technicalData} />
          <Button asChild variant="primary" size="form"><Link href={inquiry.href}>{inquiry.label}<span aria-hidden="true">↗</span></Link></Button>
        </div>
      </section>;
    })}
  </div>;
}
