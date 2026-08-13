import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import "../../tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found | Taiyi Polymer",
  description: "The requested Taiyi Polymer page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="page-aura min-h-full text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-5xl items-center px-5 py-16 sm:px-6 lg:px-8">
          <section className="mesh-surface w-full rounded-2xl p-8 sm:p-12">
            <p className="section-kicker mb-4">404</p>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              The requested page may have moved. Browse material grades or
              contact us for a material recommendation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="cta-primary px-6 py-3 text-sm">
                Browse Materials
              </Link>
              <Link href="/contact" className="cta-secondary px-6 py-3 text-sm">
                Discuss Your Application
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
