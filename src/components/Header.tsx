"use client";

import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight, Check, ChevronDown, FileSearch, Globe } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { BrandDescriptor } from "@/components/BrandDescriptor";
import { HeaderMobileMenu } from "@/components/HeaderMobileMenu";
import { isCaseStudyPath } from "@/data/caseStudyNavigation";
import { stripLocalizedPrefix, type LocalizedUrlSegment } from "@/i18n/config";
import { getLocalizedHref, getLanguageOptions, type LanguageOption } from "@/i18n/releaseManifest";
import type { HeaderMessages } from "@/i18n/types";
import { createContactHref, parseContactContext, parseContactContextHash } from "@/lib/contactContext";
import type { HeaderNavigationModel, HeaderNavigationSection, HeaderNavigationGroup, HeaderNavigationItem } from "@/lib/headerNavigation";

const newsHref = "/news/chinaplas-2026";
type MegaValue = "" | "products" | "applications" | "resources";
const isMegaValue = (value: string): value is Exclude<MegaValue, ""> => value === "products" || value === "applications" || value === "resources";
const isNodeTarget = (target: EventTarget | null): target is Node => target instanceof Node;

type LanguageSwitcherProps = {
  label: string;
  options: ReadonlyArray<LanguageOption>;
  currentLocaleKey: LanguageOption["localeKey"];
  preserveContactContext?: boolean;
  variant: "desktop" | "mobile" | "panel";
  onOpen?: () => void;
};

function LanguageSwitcherLinks({
  label,
  options,
  currentLocaleKey,
  variant,
  onOpen,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const currentOption = options.find(
    (option) => option.localeKey === currentLocaleKey,
  ) ?? options[0];

  useEffect(() => {
    const closeOutside = (event: Event) => {
      const details = detailsRef.current;
      if (details?.open && isNodeTarget(event.target) && !details.contains(event.target)) {
        details.open = false;
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, []);

  if (variant === "panel") return (
    <label className="header-mobile-language">
      <span><Globe aria-hidden="true" size={18} />{label}</span>
      <select aria-label={label} value={currentOption.href} onChange={event => router.push(event.currentTarget.value)}>
        {options.map(option => <option key={option.localeKey} value={option.href} lang={option.hreflang}>{option.nativeLabel}</option>)}
      </select>
    </label>
  );

  return (
    <details
      ref={detailsRef}
      className={`language-switcher language-switcher--${variant}`}
      onToggle={(event) => {
        if (event.currentTarget.open) onOpen?.();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.preventDefault();
          event.stopPropagation();
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary
        className="language-switcher-trigger"
        aria-label={`${label}: ${currentOption.nativeLabel}`}
      >
        {variant === "desktop" ? <Globe aria-hidden="true" size={18} /> : null}
        <span lang={currentOption.hreflang}>
          {variant === "mobile" ? currentOption.shortLabel : currentOption.nativeLabel}
        </span>
        <ChevronDown aria-hidden="true" size={14} />
      </summary>
      <nav className="language-switcher-options" aria-label={label}>
        {options.map((option) => (
          <Link
            key={option.localeKey}
            href={option.href}
            hrefLang={option.hreflang}
            lang={option.hreflang}
            prefetch={false}
            className="language-switcher-link"
            aria-current={
              option.localeKey === currentLocaleKey ? "page" : undefined
            }
            onClick={() => {
              if (detailsRef.current) detailsRef.current.open = false;
            }}
          >
            {option.nativeLabel}
            {option.localeKey === currentLocaleKey ? (
              <Check aria-hidden="true" size={16} />
            ) : null}
          </Link>
        ))}
      </nav>
    </details>
  );
}

function ContextualLanguageSwitcher({
  preserveContactContext = false,
  ...props
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamString = searchParams.toString();
  const currentContactContext = preserveContactContext
    ? parseContactContext(Object.fromEntries(searchParams.entries()))
    : {};
  const hasCurrentContactContext =
    Object.keys(currentContactContext).length > 0;
  const [preservedContactContext, setPreservedContactContext] = useState(
    currentContactContext,
  );

  useEffect(() => {
    window.queueMicrotask(() => {
      const queryContext = parseContactContext(
        Object.fromEntries(new URLSearchParams(searchParamString)),
      );
      const nextContactContext = preserveContactContext
        ? Object.keys(queryContext).length > 0
          ? queryContext
          : parseContactContextHash(window.location.hash)
        : {};

      if (Object.keys(nextContactContext).length > 0) {
        setPreservedContactContext(nextContactContext);
      } else if (!preserveContactContext) {
        setPreservedContactContext({});
      }
    });
  }, [pathname, preserveContactContext, searchParamString]);

  const contactContext = hasCurrentContactContext
    ? currentContactContext
    : preservedContactContext;
  const options =
    Object.keys(contactContext).length > 0
      ? props.options.map((option) => ({
          ...option,
          href: createContactHref(contactContext, option.href),
        }))
      : props.options;

  return <LanguageSwitcherLinks {...props} options={options} />;
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={<LanguageSwitcherLinks {...props} />}>
      <ContextualLanguageSwitcher {...props} />
    </Suspense>
  );
}

type HeaderProps = {
  messages: HeaderMessages;
  navigation: HeaderNavigationModel;
  localeSegment?: LocalizedUrlSegment;
};

export function Header({ messages, navigation, localeSegment }: HeaderProps) {
  const pathname = usePathname();
  const logicalPathname = stripLocalizedPrefix(pathname, localeSegment);
  const languageOptions = getLanguageOptions(logicalPathname);
  const currentLocaleKey = localeSegment ?? "en";
  const localizedHref = (href: string) => getLocalizedHref(href, localeSegment);
  const isHome = logicalPathname === "/";
  const isAbout = logicalPathname === "/about" || logicalPathname.startsWith("/about/");
  const isCurrentSection = (href: string) => logicalPathname === href || logicalPathname.startsWith(`${href}/`);
  const [isOverHomeHero, setIsOverHomeHero] = useState(true);
  const [megaValue, setMegaValue] = useState<MegaValue>("");
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaObserverRef = useRef<ResizeObserver | null>(null);
  const useHeroHeader = isAbout || (isHome && isOverHomeHero);
  const closeLanguageMenus = () => headerRef.current?.querySelectorAll<HTMLDetailsElement>("details.language-switcher[open]").forEach(menu => { menu.open = false; });
  const cancelScheduledClose = () => {
    if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };
  const closeMega = () => { cancelScheduledClose(); setMegaValue(""); };
  const updateMegaValue = (value: string) => {
    cancelScheduledClose();
    if (value === "") setMegaValue("");
    else if (isMegaValue(value)) { closeLanguageMenus(); setMegaValue(value); }
  };
  const syncActiveMegaHeight = useCallback((node: HTMLDivElement | null) => {
    megaObserverRef.current?.disconnect();
    megaObserverRef.current = null;
    const header = headerRef.current;
    if (!header) return;
    if (!node) { header.style.removeProperty("--active-mega-height"); return; }
    const update = () => header.style.setProperty("--active-mega-height", `${(node.parentElement ?? node).getBoundingClientRect().height}px`);
    update();
    megaObserverRef.current = new ResizeObserver(update);
    megaObserverRef.current.observe(node);
  }, []);
  useEffect(() => {
    if (!isHome) return;
    let frame: number | null = null;
    const measure = () => {
      frame = null;
      const bottom = document.querySelector(".home-hero")?.getBoundingClientRect().bottom ?? -1;
      const height = headerRef.current?.getBoundingClientRect().height ?? 80;
      setIsOverHomeHero(current => current ? bottom > height - 8 : bottom > height + 8);
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(measure); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { if (frame !== null) cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [isHome]);
  useEffect(() => () => { if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current); megaObserverRef.current?.disconnect(); }, []);
  useEffect(() => {
    const media = matchMedia("(max-width: 1199px)");
    const close = () => setMegaValue("");
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  const isSectionCurrent = (section: HeaderNavigationSection) => section.id === "applications"
    ? isCurrentSection("/applications") || isCurrentSection("/components")
    : section.id === "resources" ? isCurrentSection("/resources") || isCaseStudyPath(logicalPathname)
    : isCurrentSection("/products");
  const menuLink = (item: HeaderNavigationItem, className = "header-menu-link") => (
    <Link key={`${item.href}-${item.title}`} href={item.href} prefetch={false} className={className} onClick={closeMega} aria-label={item.accessibleLabel} aria-current={pathname === item.href ? "page" : undefined}>
      <span className="header-menu-link-text"><span className="mega-nav-label">{item.title}</span>{item.englishDestination ? <EnglishDestinationBadge label={messages.englishDestinationLabel} /> : null}</span>
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
  const group = (entry: HeaderNavigationGroup, twoColumns: boolean) => (
    <section className="header-menu-group" key={entry.id}>
      <h2 className="header-menu-heading">{entry.title}</h2>
      {entry.subgroups ? (
        <>
          <div className="header-menu-subgroups">
            {entry.subgroups.map(subgroup => (
              <section className="header-menu-subgroup" key={subgroup.id}>
                <h3 className="header-menu-subheading">{subgroup.title}</h3>
                <ul className="header-menu-list">
                  {subgroup.items.map(item => <li key={item.href}>{menuLink(item)}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <div className="header-menu-supplement">
            {entry.supplementalItems?.map(item => menuLink(item))}
          </div>
        </>
      ) : (
        <ul className={twoColumns ? "header-menu-list header-menu-list--two-up" : "header-menu-list"}>
          {entry.items.map(item => <li key={`${item.href}-${item.title}`}>{menuLink(item)}</li>)}
        </ul>
      )}
    </section>
  );
  const dataLink = (className: string) => (
    <Link href={localizedHref("/technical-data-sheets")} prefetch={false} className={className} aria-label={messages.findGradeData} title={messages.findGradeData} aria-current={isCurrentSection("/technical-data-sheets") ? "page" : undefined}>
      <FileSearch aria-hidden="true" size={18} /><span className="nav-data-label">{messages.findTds}</span>
    </Link>
  );
  const rootLinks = [{ title: messages.news, href: localizedHref(newsHref) }, { title: messages.aboutUs, href: localizedHref("/about") }, { title: messages.contact, href: localizedHref("/contact") }];
  const languages = (variant: "desktop" | "panel") => languageOptions.length > 0 ? <LanguageSwitcher label={messages.languageSwitcherLabel} options={languageOptions} currentLocaleKey={currentLocaleKey} preserveContactContext={logicalPathname === "/contact"} variant={variant} onOpen={closeMega} /> : null;
  return (
    <>
      <header ref={headerRef} className={["site-header", isHome || isAbout ? "site-header--hero-route" : "", isHome ? "site-header--home" : "", useHeroHeader ? "site-header--over-hero" : "site-header--solid", megaValue ? "site-header--mega-open" : ""].filter(Boolean).join(" ")}
        onPointerEnter={cancelScheduledClose}
        onPointerLeave={event => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) { cancelScheduledClose(); closeTimerRef.current = setTimeout(() => setMegaValue(""), 180); } }}
        onBlur={event => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) closeMega(); }}>
        <span className="site-header-glass" aria-hidden="true" />
        <div className="site-container header-grid">
          <Link href={localizedHref("/")} prefetch={false} className="brand-mark" aria-label={messages.brandHomeLabel} aria-current={isHome ? "page" : undefined}>
            <span className="brand-logo"><Image src={useHeroHeader ? "/platform-wordmark-white.png" : "/platform-wordmark.png"} alt="PLATFORM" width={1400} height={217} sizes="(max-width:600px) 150px, (max-width:1279px) 164px, 190px" priority /></span>
            <BrandDescriptor inline />
          </Link>
          <div className="header-desktop-navigation">
            <NavigationMenu.Root aria-label={messages.navigationAria} value={megaValue} onValueChange={updateMegaValue} delayDuration={110} skipDelayDuration={260} className="desktop-navigation-menu">
              <NavigationMenu.List className="desktop-navigation-list">
                {navigation.sections.map(section => (
                  <NavigationMenu.Item value={section.id} key={section.id}>
                    <NavigationMenu.Trigger className="nav-link nav-trigger" aria-current={isSectionCurrent(section) ? "page" : undefined}><span className="nav-link-label">{section.title}</span><ChevronDown className="nav-disclosure-icon" aria-hidden="true" size={12} /></NavigationMenu.Trigger>
                    <NavigationMenu.Content className="mega-menu-content" onPointerEnter={cancelScheduledClose}>
                      {megaValue === section.id ? <div ref={syncActiveMegaHeight} className="site-container mega-menu-inner">
                        <div className={`header-menu-grid header-menu-grid--${section.id}`}>
                          {section.id === "resources" ? <section className="header-resource-lead"><h2 className="header-menu-heading">{messages.findGradeData}</h2><p>{messages.resourceDescription}</p>{menuLink({ title: messages.findGradeData, href: localizedHref("/technical-data-sheets") }, "header-resource-action")}</section> : null}
                          {section.groups.map((entry, index) => group(entry, section.id === "applications" || (section.id === "products" && index === 0)))}
                          {section.id === "applications" ? <div className="header-part-feature"><Image src="/applications/parts/generated/components-directory-gears-cad-transparent-v1.webp" alt="" width={190} height={160} sizes="190px" />{menuLink(navigation.feature)}</div> : null}
                        </div>
                        <div className="header-menu-bottom">{menuLink(section.overview)}{menuLink({ title: messages.discussApplication, href: localizedHref("/contact") })}</div>
                      </div> : null}
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ))}
                <NavigationMenu.Item><NavigationMenu.Link asChild><Link href={localizedHref(newsHref)} prefetch={false} className="nav-link" aria-current={isCurrentSection("/news") ? "page" : undefined} onClick={closeMega}><span className="nav-link-label">{messages.news}</span></Link></NavigationMenu.Link></NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
            <div className="header-business-actions">
              <nav className="header-company-links" aria-label={messages.aboutUs}>
                {rootLinks.slice(1).map(item => <Link key={item.href} href={item.href} prefetch={false} className="nav-link header-utility-link" aria-current={pathname === item.href ? "page" : undefined} onClick={closeMega}><span className="nav-link-label">{item.title}</span></Link>)}
              </nav>
              <div className="header-company-tools">
                {languages("desktop")}
                {dataLink("nav-data-link")}
              </div>
            </div>
          </div>
          <div className="header-mobile-utilities">
            {dataLink("nav-data-link nav-data-link--mobile")}
            <HeaderMobileMenu key={pathname} messages={messages} navigation={navigation} rootLinks={rootLinks} tdsHref={localizedHref("/technical-data-sheets")} languageControl={languages("panel")} onOpen={() => { closeMega(); closeLanguageMenus(); }} />
          </div>
        </div>
      </header>
      {megaValue ? <button type="button" className="header-mega-scrim" tabIndex={-1} aria-label={messages.close} onClick={closeMega} /> : null}
    </>
  );
}
