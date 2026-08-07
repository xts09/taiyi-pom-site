"use client";

import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import {
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
import {
  getResourceNavigationGroupPath,
  resourceNavigationGroups,
} from "@/data/resourceNavigation";
import { getCategoryPath } from "@/lib/productCategories";

const applicationLinks = applications.map((application) => ({
  label: application.title,
  href: `/applications/${application.slug}`,
}));

const productOverviewLinks = [
  {
    label: "All Products",
    href: "/products",
  },
];

const productCategoryLinks = [
  {
    label: "POM Compounds",
    href: getCategoryPath("POM"),
    eyebrow: "Core line",
  },
  {
    label: "PA6 Compounds",
    href: getCategoryPath("PA6 Compound"),
    eyebrow: "Additional family",
  },
  {
    label: "PA66 Compounds",
    href: getCategoryPath("PA66 Compound"),
    eyebrow: "Additional family",
  },
  {
    label: "PPA Compounds",
    href: getCategoryPath("PPA Compound"),
    eyebrow: "Higher-temperature",
  },
  {
    label: "POM Resin",
    href: getCategoryPath("Base POM Resin"),
    eyebrow: "Supplement",
  },
  {
    label: "Conductive & Antistatic Compounds",
    href: "/products/conductive-antistatic-compounds",
    eyebrow: "Cross-material",
  },
];

const navItems = [
  {
    label: "Contact",
    href: "/contact",
  },
];

type MegaValue = "" | "products" | "applications" | "resources";

const HEADER_SURFACE_HYSTERESIS = 8;

const isMegaValue = (value: string): value is Exclude<MegaValue, ""> =>
  value === "products" ||
  value === "applications" ||
  value === "resources";

const isNodeTarget = (target: EventTarget | null): target is Node =>
  target instanceof Node;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about" || pathname.startsWith("/about/");
  const hasHeroHeaderSurface = isHome || isAbout;
  const isCurrentSection = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
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
          href="/"
          prefetch={false}
          className="brand-mark group inline-flex"
          aria-label="Taiyi Polymer home"
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
                  Products
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content product-menu">
                  {activeMega === "products" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-products"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>Product Categories</span>
                          <p>
                            Start with a material family or compare conductive
                            and antistatic grades across matrices.
                          </p>
                        </div>
                        <Link
                          href="/products"
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          All Products <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-category-grid">
                        {productCategoryLinks.map((item) => (
                          <Link
                            key={`${item.label}-${item.href}`}
                            href={item.href}
                            prefetch={false}
                            className="mega-category-link"
                            onClick={closeMega}
                          >
                            <span className="mega-category-eyebrow">
                              {item.eyebrow}
                            </span>
                            <span className="mega-category-title mega-nav-label">
                              {item.label}
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
                    isCurrentSection("/applications") ? "page" : undefined
                  }
                >
                  Applications
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content application-menu">
                  {activeMega === "applications" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-simple"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>Application Areas</span>
                          <p>
                            Browse common molded-part applications by working
                            condition and material requirement.
                          </p>
                        </div>
                        <Link
                          href="/applications"
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          All Applications <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-simple-grid mega-simple-grid-applications">
                        {applicationLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            prefetch={false}
                            className="mega-simple-link"
                            onClick={closeMega}
                          >
                            <span className="mega-simple-title mega-nav-label">
                              {item.label}
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
                  Resources
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content resource-menu">
                  {activeMega === "resources" ? (
                    <div
                      ref={syncActiveMegaHeight}
                      className="mega-menu-inner mega-menu-inner-simple mega-menu-inner-compact"
                    >
                      <div className="mega-menu-panel-head">
                        <div>
                          <span>Technical Resources</span>
                        </div>
                        <Link
                          href="/resources"
                          prefetch={false}
                          className="mega-menu-all-link"
                          onClick={closeMega}
                        >
                          All Resources <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>

                      <div className="mega-simple-grid mega-simple-grid-resources">
                        {resourceNavigationGroups.map((group) => (
                          <Link
                            key={group.id}
                            href={getResourceNavigationGroupPath(group)}
                            prefetch={false}
                            className="mega-simple-link"
                            onClick={closeMega}
                          >
                            <span className="mega-simple-title mega-nav-label">
                              {group.title}
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
                    href="/about"
                    prefetch={false}
                    className="nav-link transition"
                    aria-current={isCurrentSection("/about") ? "page" : undefined}
                    onClick={closeMega}
                  >
                    About Us
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={item.href}
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

          <Link
            href="/technical-data-sheets"
            prefetch={false}
            className="nav-search-button inline-flex items-center justify-center"
            aria-label="Search technical data sheets and resources"
            aria-current={
              isCurrentSection("/technical-data-sheets") ? "page" : undefined
            }
          >
            <Search aria-hidden="true" size={18} strokeWidth={2.1} />
          </Link>
        </div>

        <details
          key={pathname}
          ref={mobileMenuRef}
          className="mobile-menu relative z-50 lg:hidden"
        >
          <summary className="nav-pill inline-flex cursor-pointer list-none items-center justify-center gap-2 px-3 py-2 text-sm">
            <span className="mobile-menu-label mobile-menu-label-open">Menu</span>
            <span className="mobile-menu-label mobile-menu-label-close">Close</span>
            <span className="mobile-menu-icon" aria-hidden="true">
              <span className="mobile-menu-icon-bar mobile-menu-icon-bar-first" />
              <span className="mobile-menu-icon-bar mobile-menu-icon-bar-second" />
            </span>
          </summary>

          <nav
            className="mobile-menu-panel animate-menu-down absolute right-0 top-[calc(100%+0.8rem)] flex w-[min(20rem,calc(100vw-2.5rem))] flex-col p-4 text-sm font-semibold"
            onClick={closeMobileMenuOnLinkClick}
          >
            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>Products</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                {productOverviewLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className="mobile-product-list mb-2 block py-1"
                    aria-current={
                      isCurrentSection(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}

                {productCategoryLinks.map((category) => (
                  <Link
                    key={`${category.label}-${category.href}`}
                    href={category.href}
                    prefetch={false}
                    className="mobile-menu-sub-link block py-2"
                    aria-current={
                      pathname === category.href ? "page" : undefined
                    }
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>Applications</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href="/applications"
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                  aria-current={
                    pathname === "/applications" ? "page" : undefined
                  }
                >
                  All Applications
                </Link>

                {applicationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className="mobile-menu-sub-link block py-2"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group mobile-menu-section py-3">
              <summary className="mobile-menu-section-summary flex cursor-pointer list-none items-center justify-between gap-3">
                <span>Resources</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href="/resources"
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                  aria-current={pathname === "/resources" ? "page" : undefined}
                >
                  All Resources
                </Link>

                {resourceNavigationGroups.map((group) => (
                  <div className="mobile-resource-group" key={group.id}>
                    <span className="mobile-resource-group-title">
                      {group.navigationLabel}
                    </span>
                    <Link
                      href={getResourceNavigationGroupPath(group)}
                      prefetch={false}
                      className="mobile-menu-sub-link block py-2"
                      aria-current={
                        pathname === getResourceNavigationGroupPath(group)
                          ? "page"
                          : undefined
                      }
                    >
                      {group.title}
                    </Link>
                  </div>
                ))}
              </div>
            </details>

            <Link
              href="/about"
              prefetch={false}
              className="mobile-menu-primary-link py-3"
              aria-current={isCurrentSection("/about") ? "page" : undefined}
            >
              About Us
            </Link>

            <Link
              href="/technical-data-sheets"
              prefetch={false}
              className="mobile-menu-primary-link mobile-menu-search-link py-3"
              aria-current={
                isCurrentSection("/technical-data-sheets") ? "page" : undefined
              }
            >
              <Search aria-hidden="true" size={16} strokeWidth={2.1} />
              <span>Find Grade Data & TDS</span>
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
              href="/contact"
              prefetch={false}
              className="cta-primary mt-4 px-4 py-3 text-center text-sm"
            >
              Discuss Your Application
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
