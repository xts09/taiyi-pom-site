"use client";

import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { applications } from "@/data/applications";
import { resourcePages } from "@/data/resources";
import { getCategoryPath } from "@/lib/productCategories";

const applicationLinks = applications.map((application) => ({
  label: application.title,
  href: `/applications/${application.slug}`,
}));

const resourceLinks = [
  ...resourcePages.map((page) => ({
    label: page.navLabel,
    href: `/resources/${page.slug}`,
  })),
  {
    label: "Technical Data Sheets",
    href: "/technical-data-sheets",
  },
];

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
    description: "Wear / friction / reinforced / functional",
  },
  {
    label: "PA6 / PA66",
    href: "/contact",
    eyebrow: "Extended review",
    description: "Modified nylon compounds",
  },
  {
    label: "PPA / PPS",
    href: "/contact",
    eyebrow: "Extended review",
    description: "Heat and stiffness review",
  },
  {
    label: "POM Resin",
    href: getCategoryPath("Base POM Resin"),
    eyebrow: "Supplement",
    description: "Selected base resin sourcing",
  },
];

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

type MegaValue = "" | "products" | "applications" | "resources";

const isMegaValue = (value: string): value is Exclude<MegaValue, ""> =>
  value === "products" || value === "applications" || value === "resources";

const isNodeTarget = (target: EventTarget | null): target is Node =>
  target instanceof Node;

const headerSurfaceStyle: CSSProperties = {
  backdropFilter: "none",
  WebkitBackdropFilter: "none",
};

const headerGlassFilterStyle: CSSProperties = {
  backdropFilter: "blur(44px) saturate(144%) brightness(72%) contrast(114%)",
  WebkitBackdropFilter:
    "blur(44px) saturate(144%) brightness(72%) contrast(114%)",
};

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [megaValue, setMegaValue] = useState<MegaValue>("");
  const activeMega = megaValue || null;

  const closeMega = () => {
    setMegaValue("");
  };

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

  const updateMegaValue = (value: string) => {
    if (isMegaValue(value)) {
      setMegaValue(value);
      return;
    }

    closeMega();
  };

  const closeMegaOnPointerLeave = (event: PointerEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;

    if (!isNodeTarget(nextTarget) || !event.currentTarget.contains(nextTarget)) {
      closeMega();
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
      className={[
        "site-header site-header--over-hero sticky top-0 z-50 text-slate-950",
        isHome ? "site-header--home" : "",
        activeMega ? "site-header--mega-open" : "",
        activeMega === "products" ? "site-header--products-open" : "",
        activeMega === "applications" ? "site-header--applications-open" : "",
        activeMega === "resources" ? "site-header--resources-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onBlur={closeMegaOnBlur}
      onKeyDown={closeMegaOnEscape}
      onPointerLeave={closeMegaOnPointerLeave}
      style={headerSurfaceStyle}
    >
      <span
        className="site-header-glass"
        aria-hidden="true"
        style={headerGlassFilterStyle}
      />
      <div className="site-container flex items-center justify-between py-3">
        <Link
          href="/"
          prefetch={false}
          className="brand-mark group inline-flex"
          aria-label="Taiyi Nano home"
        >
          <span className="brand-logo w-[clamp(9.35rem,11.4vw,10.65rem)] max-w-[46vw]">
            <Image
              src="/platform-wordmark-white.png"
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
                >
                  Products
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content product-menu">
                  {activeMega === "products" ? (
                    <div className="mega-menu-inner mega-menu-inner-products">
                      <div className="mega-menu-panel-head">
                        <span>Product Categories</span>
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
                            <span className="mega-category-title">
                              {item.label}
                            </span>
                            <span className="mega-category-description">
                              {item.description}
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
                >
                  Applications
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content application-menu">
                  {activeMega === "applications" ? (
                    <div className="mega-menu-inner mega-menu-inner-simple">
                      <div className="mega-menu-panel-head">
                        <span>Application Areas</span>
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
                            <span className="mega-simple-title">{item.label}</span>
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
                >
                  Resources
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="mega-menu mega-menu-content resource-menu">
                  {activeMega === "resources" ? (
                    <div className="mega-menu-inner mega-menu-inner-simple mega-menu-inner-compact">
                      <div className="mega-menu-panel-head">
                        <span>Technical Resources</span>
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
                        {resourceLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            prefetch={false}
                            className="mega-simple-link"
                            onClick={closeMega}
                          >
                            <span className="mega-simple-title">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={item.href}
                      prefetch={false}
                      className="nav-link nav-trigger transition"
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
          >
            <Search aria-hidden="true" size={18} strokeWidth={2.1} />
          </Link>
        </div>

        <details className="mobile-menu relative z-50 lg:hidden">
          <summary className="nav-pill inline-flex cursor-pointer list-none items-center justify-center gap-2 px-3 py-2 text-sm">
            <span>Menu</span>
            <span className="grid gap-1" aria-hidden="true">
              <span className="block h-0.5 w-4 rounded-full bg-cyan-100" />
              <span className="block h-0.5 w-4 rounded-full bg-cyan-100" />
            </span>
          </summary>

          <nav className="animate-menu-down absolute right-0 top-[calc(100%+0.8rem)] flex w-[min(20rem,calc(100vw-2.5rem))] flex-col rounded-2xl border border-cyan-100/15 bg-slate-950/98 p-4 text-sm font-semibold text-slate-200 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <details className="mobile-product-group border-b border-white/10 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-white hover:text-cyan-200">
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
                  >
                    {item.label}
                  </Link>
                ))}

                {productCategoryLinks.map((category) => (
                  <Link
                    key={`${category.label}-${category.href}`}
                    href={category.href}
                    prefetch={false}
                    className="block py-2 text-slate-400 hover:text-cyan-200"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group border-b border-white/10 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-white hover:text-cyan-200">
                <span>Applications</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href="/applications"
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                >
                  All Applications
                </Link>

                {applicationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className="block py-2 text-slate-400 hover:text-cyan-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="mobile-product-group border-b border-white/10 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-white hover:text-cyan-200">
                <span>Resources</span>
                <span aria-hidden="true">+</span>
              </summary>

              <div className="mt-3 space-y-1 pl-4">
                <Link
                  href="/resources"
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                >
                  All Resources
                </Link>

                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className="block py-2 text-slate-400 hover:text-cyan-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="border-b border-white/10 py-3 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              prefetch={false}
              className="cta-primary mt-4 px-4 py-3 text-center text-sm"
            >
              Request Quote
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
