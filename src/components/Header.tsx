"use client";

import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { applications } from "@/data/applications";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import {
  stripLocalizedPrefix,
  type LocalizedUrlSegment,
} from "@/i18n/config";
import {
  getLocalizedHref,
  getLanguageOptions,
  isEnglishFallbackHref,
  type LanguageOption,
} from "@/i18n/releaseManifest";
import type {
  HeaderMessages,
  ProductEyebrowKey,
  ProductTaxonomyKey,
  ResourceTaxonomyKey,
  TaxonomyMessages,
} from "@/i18n/types";
import {
  createContactHref,
  parseContactContext,
} from "@/lib/contactContext";
import { getCategoryPath } from "@/lib/productCategories";

const productCategoryLinks = [
  {
    labelKey: "pom",
    href: getCategoryPath("POM"),
    eyebrowKey: "coreLine",
  },
  {
    labelKey: "pa6",
    href: getCategoryPath("PA6 Compound"),
    eyebrowKey: "additionalFamily",
  },
  {
    labelKey: "pa66",
    href: getCategoryPath("PA66 Compound"),
    eyebrowKey: "additionalFamily",
  },
  {
    labelKey: "ppa",
    href: getCategoryPath("PPA Compound"),
    eyebrowKey: "higherTemperature",
  },
  {
    labelKey: "pomResin",
    href: getCategoryPath("Base POM Resin"),
    eyebrowKey: "supplement",
  },
  {
    labelKey: "conductiveAntistatic",
    href: "/products/conductive-antistatic-compounds",
    eyebrowKey: "crossMaterial",
  },
] satisfies ReadonlyArray<{
  labelKey: ProductTaxonomyKey;
  href: string;
  eyebrowKey: ProductEyebrowKey;
}>;

type MegaValue = "" | "products" | "applications" | "resources";

const HEADER_SURFACE_HYSTERESIS = 8;

const isMegaValue = (value: string): value is Exclude<MegaValue, ""> =>
  value === "products" ||
  value === "applications" ||
  value === "resources";

const isNodeTarget = (target: EventTarget | null): target is Node =>
  target instanceof Node;

type LanguageSwitcherProps = {
  label: string;
  options: ReadonlyArray<LanguageOption>;
  currentLocaleKey: LanguageOption["localeKey"];
  preserveContactContext?: boolean;
  variant: "desktop" | "mobile";
};

function LanguageSwitcherLinks({
  label,
  options,
  currentLocaleKey,
  variant,
}: LanguageSwitcherProps) {
  return (
    <div
      className={`language-switcher language-switcher--${variant}`}
      role="group"
      aria-label={label}
    >
      {variant === "mobile" ? (
        <span className="language-switcher-label">{label}</span>
      ) : null}
      <div className="language-switcher-options">
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
          >
            {variant === "desktop"
              ? option.shortLabel
              : option.nativeLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ContextualLanguageSwitcher({
  preserveContactContext = false,
  ...props
}: LanguageSwitcherProps) {
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
      const nextContactContext = preserveContactContext
        ? parseContactContext(
            Object.fromEntries(new URLSearchParams(searchParamString)),
          )
        : {};

      if (Object.keys(nextContactContext).length > 0) {
        setPreservedContactContext(nextContactContext);
      } else if (!preserveContactContext) {
        setPreservedContactContext({});
      }
    });
  }, [preserveContactContext, searchParamString]);

  const contactContext = hasCurrentContactContext
    ? currentContactContext
    : preservedContactContext;
  const options = Object.keys(contactContext).length > 0
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
  taxonomy: TaxonomyMessages;
  localeSegment?: LocalizedUrlSegment;
};

export function Header({ messages, taxonomy, localeSegment }: HeaderProps) {
  const pathname = usePathname();
  const logicalPathname = stripLocalizedPrefix(pathname, localeSegment);
  const languageOptions = getLanguageOptions(logicalPathname);
  const currentLocaleKey = localeSegment ?? "en";
  const localizedHref = (href: string) =>
    getLocalizedHref(href, localeSegment);
  const englishDestinationBadge = (href: string) =>
    isEnglishFallbackHref(href, localeSegment) ? (
      <EnglishDestinationBadge label={messages.englishDestinationLabel} />
    ) : null;
  const isHome = logicalPathname === "/";
  const isAbout =
    logicalPathname === "/about" || logicalPathname.startsWith("/about/");
  const hasHeroHeaderSurface = isHome || isAbout;
  const isCurrentSection = (href: string) =>
    logicalPathname === href || logicalPathname.startsWith(`${href}/`);
  const applicationLinks = [
    ...applications.map((application) => ({
      label:
        taxonomy.applications[
          application.slug as keyof typeof taxonomy.applications
        ] ?? application.title,
      href: `/applications/${application.slug}`,
    })),
    {
      label: taxonomy.componentSolutions,
      href: "/components",
    },
  ];
  const navItems = [{ label: messages.contact, href: "/contact" }];
  const [isOverHomeHero, setIsOverHomeHero] = useState(true);
  const [megaValue, setMegaValue] = useState<MegaValue>("");
  const closeTimerRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const isOverHomeHeroRef = useRef(true);
  const megaResizeObserverRef = useRef<ResizeObserver | null>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);
  const activeMega = megaValue || null;
  const useHeroHeader = isAbout || (isHome && isOverHomeHero);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const closeMega = () => {
    cancelScheduledClose();
    setMegaValue((currentValue) => (currentValue ? "" : currentValue));
  };

  const scheduleCloseMega = () => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setMegaValue((currentValue) => (currentValue ? "" : currentValue));
    }, 90);
  };

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  const closeMobileMenuOnLinkClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target;

    if (target instanceof Element && target.closest("a")) {
      closeMobileMenu();
    }
  };

  const syncActiveMegaHeight = useCallback((node: HTMLDivElement | null) => {
    megaResizeObserverRef.current?.disconnect();
    megaResizeObserverRef.current = null;

    const header = headerRef.current;
    if (!header) {
      return;
    }

    if (!node) {
      header.style.removeProperty("--active-mega-height");
      return;
    }

    const updateHeight = () => {
      header.style.setProperty(
        "--active-mega-height",
        `${node.getBoundingClientRect().height}px`,
      );
    };

    updateHeight();
    if (typeof ResizeObserver !== "undefined") {
      megaResizeObserverRef.current = new ResizeObserver(updateHeight);
      megaResizeObserverRef.current.observe(node);
    }
  }, []);

  useEffect(() => {
    if (!activeMega) {
      return;
    }

    const closeMegaOnDocumentEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaValue("");
      }
    };

    document.addEventListener("keydown", closeMegaOnDocumentEscape);

    return () => {
      document.removeEventListener("keydown", closeMegaOnDocumentEscape);
    };
  }, [activeMega]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
      megaResizeObserverRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    let frame: number | null = null;

    const updateHeaderSurface = () => {
      frame = null;
      const heroSurface = document.querySelector(".home-hero");
      const heroBottom = heroSurface?.getBoundingClientRect().bottom;
      const headerHeight =
        document
          .querySelector(".site-header > .site-container")
          ?.getBoundingClientRect().height ?? 64;

      const distanceFromBoundary =
        heroBottom === undefined
          ? Number.POSITIVE_INFINITY
          : heroBottom - headerHeight;
      const nextIsOverHomeHero = isOverHomeHeroRef.current
        ? distanceFromBoundary > -HEADER_SURFACE_HYSTERESIS
        : distanceFromBoundary > HEADER_SURFACE_HYSTERESIS;

      if (nextIsOverHomeHero !== isOverHomeHeroRef.current) {
        isOverHomeHeroRef.current = nextIsOverHomeHero;
        setIsOverHomeHero(nextIsOverHomeHero);
      }
    };

    const scheduleHeaderSurfaceUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateHeaderSurface);
      }
    };

    scheduleHeaderSurfaceUpdate();
    window.addEventListener("scroll", scheduleHeaderSurfaceUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleHeaderSurfaceUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleHeaderSurfaceUpdate);
      window.removeEventListener("resize", scheduleHeaderSurfaceUpdate);
    };
  }, [isHome]);

  const updateMegaValue = (value: string) => {
    if (value === "") {
      cancelScheduledClose();
      setMegaValue("");
      return;
    }

    if (!isMegaValue(value)) {
      return;
    }

    cancelScheduledClose();
    setMegaValue((currentValue) =>
      currentValue === value ? currentValue : value,
    );
  };

  const closeMegaOnPointerLeave = (event: PointerEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;

    if (!isNodeTarget(nextTarget) || !event.currentTarget.contains(nextTarget)) {
      scheduleCloseMega();
    }
  };

  const closeMegaOnBlur = (event: FocusEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;
    if (!isNodeTarget(nextTarget) || !event.currentTarget.contains(nextTarget)) {
      closeMega();
    }
  };

  const closeMegaOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      closeMega();
    }
  };

  return (
    <header
      ref={headerRef}
      className={[
        "site-header sticky top-0 z-50 text-slate-950",
        hasHeroHeaderSurface ? "site-header--hero-route" : "",
        isHome ? "site-header--home" : "",
        useHeroHeader ? "site-header--over-hero" : "site-header--solid",
        activeMega ? "site-header--mega-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onBlur={closeMegaOnBlur}
      onKeyDown={closeMegaOnEscape}
      onPointerEnter={cancelScheduledClose}
      onPointerLeave={closeMegaOnPointerLeave}
    >
      <span
        className="site-header-glass"
        aria-hidden="true"
      />
      <div className="site-container flex items-center justify-between py-3">
        <Link
          href={localizedHref("/")}
          prefetch={false}
          className="brand-mark group inline-flex"
          aria-label={messages.brandHomeLabel}
          aria-current={isHome ? "page" : undefined}
        >
          <span className="brand-logo w-[clamp(9.35rem,11.4vw,10.65rem)] max-w-[46vw]">
            <Image
              src={
                useHeroHeader
                  ? "/platform-wordmark-white.png"
                  : "/platform-wordmark.png"
              }
              alt="PLATFORM"
              width={1400}
              height={217}
              priority
              className="block h-auto w-full"
            />
          </span>
        </Link>

        <div className="hidden items-center justify-end gap-7 lg:flex xl:gap-8">
          <NavigationMenu.Root
            aria-label={messages.navigationAria}
            value={megaValue}
            onValueChange={updateMegaValue}
            delayDuration={110}
            skipDelayDuration={260}
            className="desktop-navigation-menu"
          >
            <NavigationMenu.List className="desktop-navigation-list">
              <NavigationMenu.Item value="products">
                <NavigationMenu.Trigger
                  className="nav-link nav-trigger transition"
                  onPointerEnter={() => updateMegaValue("products")}
                  onFocus={() => updateMegaValue("products")}
                  aria-current={
                    isCurrentSection("/products") ? "page" : undefined
                  }
                >
                  {messages.products}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content product-menu">
                  {activeMega === "products" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-products"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>{messages.productCategories}</span>
                          <p>{messages.productDescription}</p>
                        </div>
                        <Link
                          href={localizedHref("/products")}
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          {messages.allProducts}{" "}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-category-grid">
                        {productCategoryLinks.map((item) => (
                          <Link
                            key={`${item.labelKey}-${item.href}`}
                            href={localizedHref(item.href)}
                            prefetch={false}
                            className="mega-category-link"
                            onClick={closeMega}
                          >
                            <span className="mega-category-eyebrow">
                              {taxonomy.productEyebrows[item.eyebrowKey]}
                            </span>
                            <span className="flex min-w-0 items-center gap-2">
                              <span className="mega-category-title mega-nav-label">
                                {taxonomy.products[item.labelKey]}
                              </span>
                              {englishDestinationBadge(item.href)}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item value="applications">
                <NavigationMenu.Trigger
                  className="nav-link nav-trigger transition"
                  onPointerEnter={() => updateMegaValue("applications")}
                  onFocus={() => updateMegaValue("applications")}
                  aria-current={
                    isCurrentSection("/applications") ||
                    isCurrentSection("/components")
                      ? "page"
                      : undefined
                  }
                >
                  {messages.applications}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content application-menu">
                  {activeMega === "applications" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-simple"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>{messages.applicationAreas}</span>
                          <p>{messages.applicationDescription}</p>
                        </div>
                        <Link
                          href={localizedHref("/applications")}
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          {messages.allApplications}{" "}
                          {englishDestinationBadge("/applications")}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-simple-grid mega-simple-grid-applications">
                        {applicationLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={localizedHref(item.href)}
                            prefetch={false}
                            className="mega-simple-link"
                            onClick={closeMega}
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <span className="mega-simple-title mega-nav-label">
                                {item.label}
                              </span>
                              {englishDestinationBadge(item.href)}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item value="resources">
                <NavigationMenu.Trigger
                  className="nav-link nav-trigger transition"
                  onPointerEnter={() => updateMegaValue("resources")}
                  onFocus={() => updateMegaValue("resources")}
                  aria-current={
                    isCurrentSection("/resources") ? "page" : undefined
                  }
                >
                  {messages.resources}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content resource-menu">
                  {activeMega === "resources" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-simple mega-menu-inner-compact"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>{messages.technicalResources}</span>
                        </div>
                        <Link
                          href={localizedHref("/resources")}
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          {messages.allResources}{" "}
                          {englishDestinationBadge("/resources")}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-simple-grid mega-simple-grid-resources">
                        {resourceNavigationGroups.map((group) => (
                          <Link
                            key={group.id}
                            href={localizedHref(
                              getResourceNavigationGroupPath(group),
                            )}
                            prefetch={false}
                            className="mega-simple-link"
                            onClick={closeMega}
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <span className="mega-simple-title mega-nav-label">
                                {
                                  taxonomy.resources[
                                    group.id as ResourceTaxonomyKey
                                  ].title
                                }
                              </span>
                              {englishDestinationBadge(
                                getResourceNavigationGroupPath(group),
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link
                    href={localizedHref("/about")}
                    prefetch={false}
                    className="nav-link transition"
                    aria-current={isCurrentSection("/about") ? "page" : undefined}
                    onClick={closeMega}
                  >
                    <span>{messages.aboutUs}</span>
                    {englishDestinationBadge("/about")}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={localizedHref(item.href)}
                      prefetch={false}
                      className="nav-link nav-trigger transition"
                      aria-current={
                        isCurrentSection(item.href) ? "page" : undefined
                      }
                    >
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="header-utility-group">
            {languageOptions.length > 0 ? (
              <LanguageSwitcher
                label={messages.languageSwitcherLabel}
                options={languageOptions}
                currentLocaleKey={currentLocaleKey}
                preserveContactContext={logicalPathname === "/contact"}
                variant="desktop"
              />
            ) : null}

            <Link
              href={localizedHref("/technical-data-sheets")}
              prefetch={false}
              className="nav-search-button inline-flex items-center justify-center"
              aria-label={messages.searchLabel}
              aria-current={
                isCurrentSection("/technical-data-sheets")
                  ? "page"
                  : undefined
              }
            >
              <Search aria-hidden="true" size={18} strokeWidth={2.1} />
            </Link>
          </div>
        </div>

        <details
          key={pathname}
          ref={mobileMenuRef}
          className="mobile-menu relative z-50 lg:hidden"
        >
          <summary className="nav-pill inline-flex cursor-pointer list-none items-center justify-center gap-2 px-3 py-2 text-sm">
            <span className="mobile-menu-label mobile-menu-label-open">
              {messages.menu}
            </span>
            <span className="mobile-menu-label mobile-menu-label-close">
              {messages.close}
            </span>
            <span className="mobile-menu-icon" aria-hidden="true">
              <span className="mobile-menu-icon-bar mobile-menu-icon-bar-first" />
              <span className="mobile-menu-icon-bar mobile-menu-icon-bar-second" />
            </span>
          </summary>

          <nav
            className="mobile-menu-panel animate-menu-down absolute right-0 top-[calc(100%+0.8rem)] flex w-[min(20rem,calc(100vw-2.5rem))] flex-col p-4 text-sm font-semibold"
            onClick={closeMobileMenuOnLinkClick}
          >
            {languageOptions.length > 0 ? (
              <LanguageSwitcher
                label={messages.languageSwitcherLabel}
                options={languageOptions}
                currentLocaleKey={currentLocaleKey}
                preserveContactContext={logicalPathname === "/contact"}
                variant="mobile"
              />
            ) : null}

            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>{messages.products}</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href={localizedHref("/products")}
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                  aria-current={
                    isCurrentSection("/products") ? "page" : undefined
                  }
                >
                  {messages.allProducts}
                </Link>

                {productCategoryLinks.map((category) => (
                  <Link
                    key={`${category.labelKey}-${category.href}`}
                    href={localizedHref(category.href)}
                    prefetch={false}
                    className="mobile-menu-sub-link flex items-center justify-between gap-3 py-2"
                    aria-current={
                      logicalPathname === category.href ? "page" : undefined
                    }
                  >
                    <span>{taxonomy.products[category.labelKey]}</span>
                    {englishDestinationBadge(category.href)}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>{messages.applications}</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href={localizedHref("/applications")}
                  prefetch={false}
                  className="mobile-product-list mb-2 flex items-center justify-between gap-3 py-1"
                  aria-current={
                    logicalPathname === "/applications" ? "page" : undefined
                  }
                >
                  <span>{messages.allApplications}</span>
                  {englishDestinationBadge("/applications")}
                </Link>

                {applicationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={localizedHref(item.href)}
                    prefetch={false}
                    className="mobile-menu-sub-link flex items-center justify-between gap-3 py-2"
                    aria-current={
                      logicalPathname === item.href ? "page" : undefined
                    }
                  >
                    <span>{item.label}</span>
                    {englishDestinationBadge(item.href)}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>{messages.resources}</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href={localizedHref("/resources")}
                  prefetch={false}
                  className="mobile-product-list mb-2 flex items-center justify-between gap-3 py-1"
                  aria-current={
                    logicalPathname === "/resources" ? "page" : undefined
                  }
                >
                  <span>{messages.allResources}</span>
                  {englishDestinationBadge("/resources")}
                </Link>

                {resourceNavigationGroups.map((group) => (
                  <div className="mobile-resource-group" key={group.id}>
                    <span className="mobile-resource-group-title">
                      {
                        taxonomy.resources[group.id as ResourceTaxonomyKey]
                          .navigationLabel
                      }
                    </span>
                    <Link
                      href={localizedHref(
                        getResourceNavigationGroupPath(group),
                      )}
                      prefetch={false}
                      className="mobile-menu-sub-link flex items-center justify-between gap-3 py-2"
                      aria-current={
                        logicalPathname === getResourceNavigationGroupPath(group)
                          ? "page"
                          : undefined
                      }
                    >
                      <span>
                        {
                          taxonomy.resources[group.id as ResourceTaxonomyKey]
                            .title
                        }
                      </span>
                      {englishDestinationBadge(
                        getResourceNavigationGroupPath(group),
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </details>

            <Link
              href={localizedHref("/about")}
              prefetch={false}
              className="mobile-menu-primary-link flex items-center justify-between gap-3 py-3"
              aria-current={isCurrentSection("/about") ? "page" : undefined}
            >
              <span>{messages.aboutUs}</span>
              {englishDestinationBadge("/about")}
            </Link>

            <Link
              href={localizedHref("/technical-data-sheets")}
              prefetch={false}
              className="mobile-menu-primary-link mobile-menu-search-link py-3"
              aria-current={
                isCurrentSection("/technical-data-sheets") ? "page" : undefined
              }
            >
              <Search aria-hidden="true" size={16} strokeWidth={2.1} />
              <span>{messages.findGradeData}</span>
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href)}
                prefetch={false}
                className="mobile-menu-primary-link py-3"
                aria-current={
                  isCurrentSection(item.href) ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={localizedHref("/contact")}
              prefetch={false}
              className="cta-primary mt-4 px-4 py-3 text-center text-sm"
            >
              {messages.discussApplication}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
