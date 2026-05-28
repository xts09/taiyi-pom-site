import Link from "next/link";

const productCategories = [
  {
    label: "All Products",
    href: "/products",
  },
  {
    label: "Natural POM Resin",
    href: "/products?category=Natural%20POM%20Resin",
  },
  {
    label: "Wear-resistant POM Compound",
    href: "/products?category=Wear-resistant%20POM%20Compound",
  },
  {
    label: "Low-friction POM Compound",
    href: "/products?category=Low-friction%20POM%20Compound",
  },
  {
    label: "Glass Fiber Reinforced POM Compound",
    href: "/products?category=Glass%20Fiber%20Reinforced%20POM%20Compound",
  },
  {
    label: "Conductive / Antistatic POM Compound",
    href: "/products?category=Conductive%20%2F%20Antistatic%20POM%20Compound",
  },
];

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Applications",
    href: "/applications",
  },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 text-white shadow-[0_18px_60px_rgba(2,7,17,0.2)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-white"
        >
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-cyan-300/30 bg-cyan-300/10">
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-emerald-300 opacity-80 transition group-hover:rotate-45" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.9)]" />
          </span>
          Taiyi Nano
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-200 lg:flex">
          <Link href="/" className="nav-link transition hover:text-cyan-200">
            Home
          </Link>

          <div className="group relative">
            <Link href="/products" className="nav-link transition hover:text-cyan-200">
              Products
            </Link>

            <div className="invisible absolute left-0 top-full w-80 translate-y-3 rounded-2xl border border-cyan-200/15 bg-slate-950/96 p-3 opacity-0 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {productCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-white"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="nav-pill inline-flex items-center justify-center px-4 py-2 text-sm"
          >
            Inquiry
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
            <Link
              href="/"
              className="border-b border-white/10 py-3 hover:text-cyan-200"
            >
              Home
            </Link>

            <div className="border-b border-white/10 py-3">
              <p className="mb-2 font-semibold text-white">Products</p>

              <div className="space-y-1 pl-4">
                {productCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block py-2 text-slate-400 hover:text-cyan-200"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-3 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact" className="cta-primary mt-4 px-4 py-3 text-center text-sm">
              Send Inquiry
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
