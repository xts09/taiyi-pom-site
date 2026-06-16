import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Taiyi Nano",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-5xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up">
          <p className="section-kicker mb-4">404</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
            The requested page may have moved. Browse material grades or contact
            us for a material recommendation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="cta-primary px-6 py-3 text-sm">
              Browse Materials
            </Link>
            <Link href="/contact" className="cta-secondary px-6 py-3 text-sm">
              Request Recommendation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
