import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { applications } from "@/data/applications";
import { resourcePages } from "@/data/resources";
import {
  getCategoryPath,
  pomSubcategoryLabels,
  productCategoryOrder,
} from "@/lib/productCategories";

const pomMaterialLinks = productCategoryOrder.map((category) => ({
  label: pomSubcategoryLabels[category] ?? category,
  href: getCategoryPath(category),
}));

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

const productMegaLinks = [
  {
    label: "All Products",
    href: "/products",
  },
  {
    label: "POM Material Grades",
    href: getCategoryPath("POM"),
  },
  ...pomMaterialLinks,
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

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 text-slate-950">
      <div className="mx-auto flex w-full max-w-[82rem] items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          prefetch={false}
          className="brand-mark group inline-flex items-center"
          aria-label="Taiyi Nano home"
        >
          <span className="brand-logo w-[clamp(10rem,12.5vw,11.8rem)] max-w-[46vw]">
            <Image
              src="/platform-wordmark.png"
              alt="PLATFORM"
              width={1400}
              height={217}
              priority
              className="block h-auto w-full"
            />
          </span>
        </Link>

        <div className="hidden items-center justify-end gap-8 lg:flex xl:gap-9">
          <nav className="flex items-center justify-end gap-7 text-[0.95rem] font-semibold text-slate-200 xl:gap-8">
            <div className="product-nav group relative">
              <button
                type="button"
                className="nav-link nav-trigger transition"
                aria-haspopup="true"
              >
                Products
              </button>

              <div className="product-menu mega-menu">
                <div className="mega-menu-inner">
                  <div className="product-menu-head">
                    <span>Product Categories</span>
                  </div>

                  <div className="mega-link-grid mega-link-grid-products">
                    {productMegaLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className="product-menu-link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mega-menu-footer">
                    <Link
                      href="/products"
                      prefetch={false}
                      className="mega-menu-view-all"
                    >
                      View All Products <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="application-nav group relative">
              <button
                type="button"
                className="nav-link nav-trigger transition"
                aria-haspopup="true"
              >
                Applications
              </button>

              <div className="application-menu mega-menu">
                <div className="mega-menu-inner">
                  <div className="product-menu-head">
                    <span>Application Areas</span>
                  </div>

                  <div className="mega-link-grid mega-link-grid-applications">
                    {applicationLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className="product-menu-link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mega-menu-footer">
                    <Link
                      href="/applications"
                      prefetch={false}
                      className="mega-menu-view-all"
                    >
                      View All Applications{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="resource-nav group relative">
              <button
                type="button"
                className="nav-link nav-trigger transition"
                aria-haspopup="true"
              >
                Resources
              </button>

              <div className="resource-menu mega-menu">
                <div className="mega-menu-inner mega-menu-inner-compact">
                  <div className="product-menu-head">
                    <span>Technical Resources</span>
                  </div>

                  <div className="mega-link-grid mega-link-grid-resources">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className="product-menu-link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mega-menu-footer">
                    <Link
                      href="/resources"
                      prefetch={false}
                      className="mega-menu-view-all"
                    >
                      View All Resources <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="nav-link transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/technical-data-sheets"
            prefetch={false}
            className="nav-search-button inline-flex items-center justify-center"
            aria-label="Search technical data sheets and resources"
          >
            <Search aria-hidden="true" size={20} strokeWidth={2.25} />
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
                <Link
                  href="/products"
                  prefetch={false}
                  className="mobile-product-list mb-2 block py-1"
                >
                  All Products
                </Link>

                <Link
                  href={getCategoryPath("POM")}
                  prefetch={false}
                  className="block py-2 text-white hover:text-cyan-200"
                >
                  POM Material Grades
                </Link>

                {pomMaterialLinks.map((category) => (
                  <Link
                    key={category.href}
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
