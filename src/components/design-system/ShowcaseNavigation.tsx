"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Select } from "@/components/ui/select";
import { previewLanguages, resolvePreviewConfig, type PreviewLanguage } from "./showcase-config";
import styles from "./ComponentShowcase.module.css";

type ShowcaseNavigationProps = {
  sections: readonly { id: string; label: string }[];
  language: PreviewLanguage;
  pathname: "/design-system" | "/design-system/home";
};

export function ShowcaseNavigation({ sections, language, pathname }: ShowcaseNavigationProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const restoreSelectFocus = useRef(false);
  const previousLanguage = useRef(language);
  const selectId = useId();
  const categoryId = useId();

  useEffect(() => {
    if (pending || !restoreSelectFocus.current) return;
    if (document.activeElement === document.body) selectRef.current?.focus({ preventScroll: true });
    restoreSelectFocus.current = false;
  }, [pending, language]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Streaming and language navigation can replace the specimen nodes.
      const targets = sections.flatMap(({ id }) => {
        const element = document.getElementById(id);
        return element ? [element] : [];
      });
      const boundary = (navRef.current?.getBoundingClientRect().bottom ?? 0) + 24;
      const current = targets.findLast(element => element.getBoundingClientRect().top <= boundary + 2) ?? targets[0];
      if (current) setActiveId(current.id);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const hash = window.location.hash.slice(1);
    if (previousLanguage.current !== language && sections.some(section => section.id === hash)) {
      document.getElementById(hash)?.scrollIntoView({ block: "start", behavior: "instant" });
    }
    previousLanguage.current = language;
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("load", schedule);
    };
  }, [sections, language]);

  useEffect(() => {
    const track = trackRef.current;
    const link = track?.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`);
    if (!track || !link) return;
    const left = link.offsetLeft - track.offsetLeft;
    if (left < track.scrollLeft || left + link.offsetWidth > track.scrollLeft + track.clientWidth) {
      track.scrollTo({ left: left - (track.clientWidth - link.offsetWidth) / 2, behavior: "instant" });
    }
  }, [activeId]);

  return (
    <nav ref={navRef} className={styles.categoryNav} aria-label="组件分类与样例语言" aria-busy={pending} lang="zh-CN">
      <div className={`site-container ${styles.categoryNavInner}`}>
        <div ref={trackRef} className={styles.categoryTrack}>
          {sections.map(({ id, label }) => (
            <a key={id} className={styles.categoryLink} href={`#${id}`} aria-current={activeId === id ? "location" : undefined}>
              {label}
            </a>
          ))}
        </div>
        <FieldGroup className={styles.categoryControl}>
          <Field orientation="horizontal">
            <FieldLabel className="sr-only" htmlFor={categoryId}>浏览分类</FieldLabel>
            <Select
              id={categoryId}
              value={activeId}
              disabled={pending}
              onChange={event => {
                const id = event.target.value;
                if (!sections.some(section => section.id === id)) return;
                setActiveId(id);
                window.location.hash = id;
              }}
            >
              {sections.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
            </Select>
          </Field>
        </FieldGroup>
        <FieldGroup className={styles.localeControl}>
          <Field orientation="horizontal">
            <FieldLabel className={styles.localeLabel} htmlFor={selectId}>样例语言</FieldLabel>
            <Select
              ref={selectRef}
              id={selectId}
              className={styles.localeSelect}
              value={language}
              disabled={pending}
              aria-describedby={`${selectId}-description`}
              onChange={event => {
                const value = event.target.value;
                if (!previewLanguages.some(option => option.value === value)) return;
                restoreSelectFocus.current = document.activeElement === event.currentTarget;
                const hash = window.location.hash;
                const suffix = sections.some(section => `#${section.id}` === hash) ? hash : "";
                startTransition(() => router.replace(`${pathname}?lang=${value}${suffix}`, { scroll: false }));
              }}
            >
              {previewLanguages.map(({ value, label }) => <option key={value} value={value} lang={resolvePreviewConfig(value)?.htmlLang}>{label}</option>)}
            </Select>
          </Field>
        </FieldGroup>
        <span id={`${selectId}-description`} className="sr-only">样例内容使用所选语言</span>
        <span className="sr-only" role="status">{pending ? "正在切换样例语言" : ""}</span>
      </div>
    </nav>
  );
}
