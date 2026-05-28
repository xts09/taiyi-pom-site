import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { products } from "@/data/products";
import { availableDocuments } from "@/data/company";
import { ProductGrid } from "@/components/ProductGrid";
import { publicPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Natural POM Resin & Modified POM Compounds | Taiyi Nano",
  description:
    "Browse Taiyi Nano Natural POM Resin and Modified POM Compounds, including Wear-resistant POM Compound, Low-friction POM Compound, Glass Fiber Reinforced POM Compound, and Conductive / Antistatic POM Compound materials.",
  path: "/products",
  image: "/factory-machine.png",
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mesh-surface mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="inner-hero reveal-up mb-12">
          <Link href="/" className="text-sm font-extrabold text-cyan-100">
            &larr; Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white">
            Natural POM Resin &amp; Modified POM Compounds
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Filter material directions by purchasing category, then review grade
            data, physical properties, color, and typical application fit.
          </p>
        </div>

        <section className="reveal-up reveal-delay-1 mb-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-card overflow-hidden rounded-[1.2rem]">
            <div className="relative aspect-[16/9]">
              <Image
                src={publicPath("/factory-machine.png")}
                alt="Taiyi Nano extruder and production equipment"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="premium-card rounded-[1.2rem] p-7">
            <p className="section-kicker mb-3">Property data</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Grade cards include typical test values
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Key POM grades include density, MFI, tensile strength, flexural
              modulus, impact, HDT, and resistivity where applicable.
            </p>
            <p className="mt-5 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-slate-700">
              Available material documents:{" "}
              <span className="text-blue-700">
                {availableDocuments.join(" / ")}
              </span>
              .
            </p>
          </div>
        </section>

        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid products={products} />
        </Suspense>

        <section className="dark-panel reveal-up reveal-delay-1 mt-12 rounded-[1.2rem] p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="section-kicker mb-3">Selection support</p>
              <h2 className="text-2xl font-black tracking-tight">
                Need help selecting a POM material?
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                If you are evaluating POM materials for a specific application,
                share the working condition, current grade, performance targets,
                and estimated volume.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Application", "Requirement", "Document need"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm font-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="cta-primary mt-7 px-6 py-3 text-sm">
            Contact Sales
          </Link>
        </section>
      </section>
    </main>
  );
}
