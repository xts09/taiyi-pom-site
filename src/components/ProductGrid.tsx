"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";
import { ValueText, ValueWithUnit } from "@/components/UnitText";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  }, [products]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const readProperty = (product: Product, label: string) =>
    product.properties.find((item) => item.label === label);

  return (
    <div>
      <div className="stagger-list mb-8 flex gap-3 overflow-x-auto pb-2 md:flex-wrap">
        {categories.map((category, index) => {
          const href =
            category === "All"
              ? "/products"
              : `/products?category=${encodeURIComponent(category)}`;

          const isActive = selectedCategory === category;

          return (
            <Link
              key={category}
              href={href}
              className={`shrink-0 rounded-md border px-4 py-2 text-sm font-extrabold transition ${
                isActive
                  ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                  : "border-slate-300 bg-white/80 text-slate-700 backdrop-blur hover:border-cyan-400 hover:text-blue-700"
              }`}
              style={{ "--item-index": index } as CSSProperties}
            >
              {category}
            </Link>
          );
        })}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="premium-card rounded-2xl p-8 text-sm text-slate-600">
          No products found under this category. Please contact us with your
          application and target requirements for material recommendation.
        </div>
      ) : (
        <div className="stagger-list grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => {
            const tensile = readProperty(product, "Tensile Strength");
            const hdt = readProperty(product, "Heat Deflection Temperature");
            const specs: Array<[string, ReactNode]> = [
              ["Grade", product.grade],
              ["MFI", product.mfi],
              [
                "Tensile",
                tensile ? (
                  <ValueWithUnit value={tensile.value} unit="MPa" />
                ) : (
                  product.color
                ),
              ],
              [
                "HDT",
                hdt ? (
                  <ValueWithUnit value={hdt.value} unit="degC" />
                ) : (
                  "Project-based"
                ),
              ],
            ];

            return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="premium-card lift-card flex min-h-[19rem] flex-col rounded-[1.1rem] p-6"
              style={{ "--item-index": index } as CSSProperties}
            >
              <div className="mb-5 border-b border-slate-200/70 pb-4">
                <p className="section-kicker">{product.category}</p>
                <h2 className="mt-3 text-lg font-black leading-snug text-slate-950">
                  {product.title}
                </h2>
              </div>

              <dl className="spec-grid grid-cols-2 text-sm">
                {specs.map(([label, value]) => (
                  <div key={label} className="spec-tile rounded-xl">
                    <dt className="spec-label">{label}</dt>
                    <dd className="spec-value">
                      {typeof value === "string" ? (
                        <ValueText value={value} />
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-auto pt-5 text-sm leading-6 text-slate-600">
                {product.description}
              </p>
            </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
