import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { UnitText, ValueText } from "@/components/UnitText";
import { products } from "@/data/products";
import { availableDocuments } from "@/data/company";
import {
  createBreadcrumbJsonLd,
  createProductJsonLd,
  defaultOgImage,
  siteName,
} from "@/lib/seo";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Taiyi Nano",
    };
  }

  return {
    title: `${product.title} | Taiyi Nano`,
    description: `${product.title}, ${product.category}, MFI ${product.mfi}, ${product.color} color. ${product.description}`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Taiyi Nano`,
      description: `${product.title}, ${product.category}, MFI ${product.mfi}, ${product.color} color. ${product.description}`,
      url: `/products/${product.slug}`,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${product.title} from Taiyi Nano`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Taiyi Nano`,
      description: `${product.title}, ${product.category}, MFI ${product.mfi}, ${product.color} color. ${product.description}`,
      images: [defaultOgImage],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const categoryUrl = `/products?category=${encodeURIComponent(
    product.category
  )}`;

  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== product.slug && item.category === product.category
    )
    .slice(0, 3);

  const fallbackProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const productsToShow =
    relatedProducts.length > 0 ? relatedProducts : fallbackProducts;

  const productJsonLd = createProductJsonLd(product);
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.category, path: categoryUrl },
    { name: product.title, path: `/products/${product.slug}` },
  ]);

  return (
    <main className="min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productJsonLd, breadcrumbJsonLd]),
        }}
      />
      <section className="mesh-surface mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-700">
            Products
          </Link>
          <span>/</span>
          <Link href={categoryUrl} className="hover:text-blue-700">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-900">{product.grade}</span>
        </nav>

        <div className="mb-6 flex flex-wrap items-center gap-4">
          <Link href="/products" className="text-sm font-extrabold text-blue-700">
            &larr; Back to All Products
          </Link>

          <Link
            href={categoryUrl}
            className="text-sm font-extrabold text-slate-600 hover:text-blue-700"
          >
            View more {product.category} &rarr;
          </Link>
        </div>

        <div className="premium-card reveal-up rounded-[1.2rem] p-7 sm:p-8">
          <p className="section-kicker mb-3">{product.category}</p>

          <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {product.title}
          </h1>

          <p className="mb-7 max-w-3xl text-sm leading-7 text-slate-600">
            {product.description} Final suitability should be confirmed against
            part design, processing conditions, target performance, and document
            requirements.
          </p>

          <div className="stagger-list mb-8 grid gap-4 md:grid-cols-3">
            {[
              ["Grade", product.grade],
              ["MFI", product.mfi],
              ["Color", product.color],
            ].map(([label, value], index) => (
              <div
                key={label}
                className="lift-card rounded-[1.1rem] border border-slate-200/80 bg-white/70 p-4"
                style={{ "--item-index": index } as CSSProperties}
              >
                <p className="text-xs font-black uppercase text-slate-500">
                  {label}
                </p>
                <p className="mt-1 font-black text-slate-950">
                  <ValueText value={value} />
                </p>
              </div>
            ))}
          </div>

          <p className="mb-8 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-slate-700">
            Available material documents:{" "}
            <span className="text-blue-700">
              {availableDocuments.join(" / ")}
            </span>
            .
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Key Features
              </h2>

              <ul className="space-y-3 text-slate-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-black text-slate-950">
                Typical Applications
              </h2>

              <ul className="space-y-3 text-slate-700">
                {product.applications.map((application) => (
                  <li key={application} className="flex gap-3">
                    <span className="signal-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.properties.length > 0 ? (
            <section className="reveal-up reveal-delay-1 mt-10 overflow-hidden rounded-[1.1rem] border border-slate-200/80 bg-white/80">
              <div className="border-b border-slate-200/80 px-5 py-4">
                <p className="section-kicker mb-2">Typical property data</p>
                <h2 className="text-xl font-black text-slate-950">
                  Typical Physical Properties
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[42rem] w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      {["Property", "Value", "Unit", "Test Method"].map(
                        (label) => (
                          <th key={label} className="px-5 py-3 font-black">
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    {product.properties.map((property) => (
                      <tr key={property.label} className="hover:bg-cyan-50/60">
                        <td className="px-5 py-3 font-bold text-slate-950">
                          {property.label}
                        </td>
                        <td className="px-5 py-3 font-black text-blue-700">
                          {property.value}
                        </td>
                        <td className="px-5 py-3 text-slate-700">
                          <UnitText unit={property.unit} />
                        </td>
                        <td className="px-5 py-3 text-slate-600">
                          {property.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          <section className="reveal-up reveal-delay-1 mt-10 rounded-[1.1rem] border border-slate-200/80 bg-white/70 p-6">
            <h2 className="mb-3 text-xl font-black text-slate-950">
              Material Evaluation Notes
            </h2>

            <p className="text-sm leading-6 text-slate-700">
              This product page is for preliminary material selection. For
              project evaluation, please confirm the application, processing
              method, target performance requirements, current reference grade,
              document requirements, and estimated volume.
            </p>
          </section>

          <section className="dark-panel reveal-up reveal-delay-2 mt-10 rounded-[1.1rem] p-6 text-white">
            <h2 className="mb-2 text-lg font-black">
              Need a recommendation for this grade?
            </h2>

            <p className="mb-4 text-sm leading-6 text-slate-300">
              Contact us with your application, key performance requirements,
              current material or reference grade, and estimated volume. We can
              recommend a suitable POM material direction for review.
            </p>

            <Link href="/contact" className="cta-primary px-5 py-3 text-sm">
              Contact Sales
            </Link>
          </section>
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-2">Related Products</p>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                More POM Material Options
              </h2>
            </div>

            <Link
              href={categoryUrl}
              className="hidden text-sm font-extrabold text-blue-700 hover:text-blue-800 md:block"
            >
              View category &rarr;
            </Link>
          </div>

          <div className="stagger-list grid gap-5 md:grid-cols-3">
            {productsToShow.map((item, index) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="premium-card lift-card rounded-[1.1rem] p-6"
                style={{ "--item-index": index } as CSSProperties}
              >
                <p className="section-kicker mb-2">{item.category}</p>

                <h3 className="mb-3 text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <div className="text-sm leading-6 text-slate-700">
                  <p>
                    <span className="font-bold text-slate-950">Grade:</span>{" "}
                    {item.grade}
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">MFI:</span>{" "}
                    <ValueText value={item.mfi} />
                  </p>
                  <p>
                    <span className="font-bold text-slate-950">Color:</span>{" "}
                    {item.color}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
