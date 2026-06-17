"use client";

import Link from "next/link";
import { type CSSProperties, type ReactNode } from "react";
import { ProductAnimeMotion } from "@/components/ProductAnimeMotion";
import type { Product } from "@/data/products";
import { ValueText, ValueWithUnit } from "@/components/UnitText";
import {
  getProductListDescriptor,
  getProductListTitle,
} from "@/lib/productDisplay";
import {
  getCategoryPath,
  getProductsByCategory,
  productCategoryData,
  productCategoryGroups,
  productCategoryOrder,
} from "@/lib/productCategories";

type ProductGridProps = {
  products: Product[];
  selectedCategory?: string;
  showFamilies?: boolean;
};

export function ProductGrid({
  products,
  selectedCategory = "POM",
  showFamilies = true,
}: ProductGridProps) {
  const selectedCategoryGroup = productCategoryGroups[selectedCategory];
  const isPomSubcategory = productCategoryOrder.includes(selectedCategory);
  const showPomSubcategories =
    showFamilies && (selectedCategory === "POM" || isPomSubcategory);

  const sourceProducts =
    selectedCategory === "POM"
      ? getProductsByCategory(products, "POM")
      : getProductsByCategory(products, selectedCategory);

  const sortedProducts = [...sourceProducts].sort((first, second) => {
    const firstIndex = productCategoryOrder.indexOf(first.category);
    const secondIndex = productCategoryOrder.indexOf(second.category);
    const firstRank =
      firstIndex === -1 ? productCategoryOrder.length : firstIndex;
    const secondRank =
      secondIndex === -1 ? productCategoryOrder.length : secondIndex;

    return firstRank - secondRank;
  });
  const filteredProducts = sortedProducts;
  const isCategoryFiltered = selectedCategory !== "POM";
  const isGroupedCategory = Boolean(selectedCategoryGroup);
  const gradeCountLabel = `${filteredProducts.length} Grade${
    filteredProducts.length === 1 ? "" : "s"
  }`;
  const directoryCountLabel = gradeCountLabel;

  const readProperty = (product: Product, label: string) =>
    product.properties.find((item) => item.label === label);

  const familyItems = productCategoryData.map((item, index) => ({
    ...item,
    count: getProductsByCategory(products, item.category).length,
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <div className="product-grade-section">
      <ProductAnimeMotion />
      {showPomSubcategories ? (
        <div id="material-families" className="product-filter-bar products-motion-filter">
          <div className="product-filter-intro">
            <span className="product-filter-label">POM Family</span>
            <p>
              Start from the performance direction, then compare grade data
              against mold stage, cavity count, shrinkage behavior, and
              application fit.
            </p>
          </div>
          <div className="product-filter-rail">
            {familyItems.map((item) => (
              <Link
                key={item.category}
                href={getCategoryPath(item.category)}
                className={`product-filter-link ${
                  selectedCategory === item.category ? "is-active" : ""
                }`}
              >
                <span className="product-filter-number">{item.number}</span>
                <span className="product-filter-name">{item.label}</span>
                <span className="product-filter-use">{item.applications[0]}</span>
                <span className="product-filter-count">
                  {item.count} Grade{item.count === 1 ? "" : "s"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div id="pom-grades" className="product-directory-head products-motion-head">
        <div>
          <h2>
            {selectedCategory === "POM"
              ? "POM Grades"
              : `${filteredProducts.length} Available Grade${
                  filteredProducts.length === 1 ? "" : "s"
                }`}
          </h2>
          <p>
            {selectedCategory === "POM"
              ? "Compare key properties, shrinkage range, color, and application fit."
              : "Shortlist by properties, tooling fit, shrinkage behavior, then open the grade detail page."}
          </p>
        </div>

        <span className="product-directory-count">{directoryCountLabel}</span>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="product-empty products-motion-row">
          No matching grades found. Clear the search or contact us with your
          application, mold stage, cavity count, shrinkage target, and
          performance requirements for material recommendation.
        </div>
      ) : (
        <div className="product-directory">
          <div className="product-directory-labels" aria-hidden="true">
            <span>Grade</span>
            <span>Key Data</span>
            <span>Details</span>
          </div>

          {filteredProducts.map((product, index) => {
            const tensile = readProperty(product, "Tensile Strength");
            const hdt = readProperty(product, "Heat Deflection Temperature");
            const specs: Array<[string, ReactNode]> = [
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
                  "Project-Based"
                ),
              ],
              ["Color", product.color],
            ];
            const eyebrow = isCategoryFiltered && !isGroupedCategory
              ? getProductListDescriptor(product)
              : product.category;

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="product-directory-row products-motion-row"
                style={{ "--item-index": index } as CSSProperties}
              >
                <div className="product-directory-main">
                  <span className="product-directory-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="section-kicker">{eyebrow}</p>
                    <h3>{getProductListTitle(product)}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>

                <dl className="product-directory-specs">
                  {specs.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>
                        {typeof value === "string" ? (
                          <ValueText value={value} />
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="product-directory-action">Grade Details</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
