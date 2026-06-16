import Image from "next/image";
import Link from "next/link";
import { applications } from "@/data/applications";
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
    <header className="site-header sticky top-0 z-50 text-white backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-5 py-5 sm:px-7 lg:px-10">
        <Link
          href="/"
          className="brand-mark group inline-flex items-center"
          aria-label="Taiyi Nano home"
        >
          <span className="brand-logo">
            <Image
              src="/platform-wordmark-white.png"
              alt="PLATFORM"
              width={1400}
              height={217}
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-[1.08rem] font-semibold text-slate-200 lg:flex xl:gap-12">
          <div className="product-nav group relative">
            <Link href="/products" className="nav-link transition">
              Products
            </Link>

            <div className="product-menu invisible absolute left-1/2 top-[calc(100%+1.55rem)] w-[20rem] rounded-[1.15rem] p-3 opacity-0 backdrop-blur-xl">
              <div className="product-menu-head px-3 pb-2 pt-1">
                <span>Products</span>
                <small>Browse all materials or open a compound family.</small>
              </div>

              <div className="product-menu-list">
                <Link
                  href="/products"
                  className="product-menu-link product-menu-link-feature block rounded-xl px-4 py-3 text-[0.95rem] text-slate-300 transition"
                >
                  <span className="block text-white">All Materials</span>
                  <small className="mt-1 block text-[0.78rem] leading-5 text-slate-400">
                    Full grade directory and property data.
                  </small>
                </Link>

                <div className="product-menu-node">
                  <Link
                    href={getCategoryPath("POM")}
                    className="product-menu-link product-menu-node-trigger flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-[0.95rem] text-slate-300 transition"
                  >
                    <span>
                      <span className="block text-white">POM Material Families</span>
                      <small className="mt-1 block text-[0.78rem] leading-5 text-slate-400">
                        Hover to view subcategories.
                      </small>
                    </span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  <div className="product-submenu invisible absolute left-[calc(100%+0.65rem)] top-0 w-[22rem] rounded-xl p-3 opacity-0">
                    <Link
                      href={getCategoryPath("POM")}
                      className="product-menu-link block rounded-lg px-3 py-2 text-[0.9rem] text-slate-300 transition"
                    >
                      All POM
                    </Link>

                    {pomMaterialLinks.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="product-menu-link block rounded-lg px-3 py-2 text-[0.9rem] text-slate-300 transition"
                    >
                      {category.label}
                    </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="application-nav group relative">
            <Link href="/applications" className="nav-link transition">
              Applications
            </Link>

            <div className="application-menu invisible absolute left-1/2 top-[calc(100%+1.55rem)] w-[23rem] rounded-[1.15rem] p-3 opacity-0 backdrop-blur-xl">
              <div className="product-menu-head px-3 pb-2 pt-1">
                <span>Applications</span>
                <small>Open a part or industry direction directly.</small>
              </div>

              <div className="product-menu-list">
                {applicationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="product-menu-link block rounded-lg px-3 py-2 text-[0.9rem] text-slate-300 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="nav-pill nav-pill-primary inline-flex items-center justify-center px-7 py-3 text-[1rem]"
          >
            Request Quote
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
                  className="mobile-product-list mb-2 block py-1"
                >
                  Browse Materials
                </Link>

                <Link
                  href={getCategoryPath("POM")}
                  className="block py-2 text-white hover:text-cyan-200"
                >
                  POM
                </Link>

                {pomMaterialLinks.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
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
                {applicationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
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
                className="border-b border-white/10 py-3 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact" className="cta-primary mt-4 px-4 py-3 text-center text-sm">
              Request Quote
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
