"use client";

import Link from "next/link";
import {
  useEffect,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  createEngineeringTdsSlug,
  getEngineeringTdsByProductCategory,
  type EngineeringTdsDocument,
} from "@/data/engineeringTds";
import type { Product } from "@/data/products";
import { ValueText, ValueWithUnit } from "@/components/UnitText";
import {
  getProductListDescriptor,
  getProductListTitle,
} from "@/lib/productDisplay";
import {
  createCategorySlug,
  getCategoryPath,
  getProductCategoryOrderIndex,
  getProductsByCategory,
  pomProductCategoryData,
  productCategoryGroups,
  productCategoryOrder,
} from "@/lib/productCategories";

type ProductGridProps = {
  products: Product[];
  selectedCategory?: string;
  showFamilies?: boolean;
  hideGrades?: boolean;
};

const engineeringDirectionSummary: Record<string, string> = {
  "Carbon Fiber Reinforced": "High stiffness and dimensional stability.",
  "Flame Retardant": "Electrical parts requiring flame rating review.",
  "GF Mineral Reinforced": "Stiffness, heat resistance and lower warpage.",
  "Glass Bead Filled": "Dimensional stability with lower anisotropy.",
  "Glass Fiber Reinforced": "Higher stiffness, strength and heat resistance.",
  "Impact Modified": "Improved toughness for impact-sensitive molded parts.",
  "Mineral Filled": "Dimensional control and reduced warpage.",
  "Mold Release": "Smoother demolding for complex molded parts.",
  "V0 Flame Retardant": "V-0 review for electrical and structural parts.",
  "Wear Low Friction": "Sliding parts needing wear and friction review.",
};

export function ProductGrid({
  products,
  selectedCategory = "POM",
  showFamilies = true,
  hideGrades = false,
}: ProductGridProps) {
  useEffect(() => {
    if (selectedCategory !== "POM") {
      return;
    }

    const categoryParam = new URLSearchParams(window.location.search).get(
      "type",
    );
    const matchingCategory = productCategoryOrder.find(
      (category) => createCategorySlug(category) === categoryParam,
    );

    if (matchingCategory && matchingCategory !== "POM") {
      window.location.replace(getCategoryPath(matchingCategory));
    }
  }, [selectedCategory]);

  const effectiveCategory = selectedCategory;
  const selectedCategoryGroup = productCategoryGroups[effectiveCategory];
  const isPomSubcategory = productCategoryOrder.includes(selectedCategory);
  const showPomSubcategories =
    showFamilies && (selectedCategory === "POM" || isPomSubcategory);

  const sourceProducts =
    effectiveCategory === "POM"
      ? getProductsByCategory(products, "POM")
      : getProductsByCategory(products, effectiveCategory);

  const sortedProducts = [...sourceProducts].sort((first, second) => {
    const firstIndex = getProductCategoryOrderIndex(first.category);
    const secondIndex = getProductCategoryOrderIndex(second.category);
    const firstRank =
      firstIndex === -1 ? productCategoryOrder.length : firstIndex;
    const secondRank =
      secondIndex === -1 ? productCategoryOrder.length : secondIndex;

    return firstRank - secondRank;
  });
  const filteredProducts = sortedProducts;
  const engineeringGrades = getEngineeringTdsByProductCategory(effectiveCategory);
  const isCategoryFiltered = effectiveCategory !== "POM";
  const isGroupedCategory = Boolean(selectedCategoryGroup);
  const isEngineeringCategory = engineeringGrades.length > 0;
  const visibleGradeCount = isEngineeringCategory
    ? engineeringGrades.length
    : filteredProducts.length;
  const isProjectBasedCategory =
    isCategoryFiltered && filteredProducts.length === 0 && !isEngineeringCategory;
  const gradeCountLabel = `${visibleGradeCount} Grade${
    visibleGradeCount === 1 ? "" : "s"
  }`;
  const directoryCountLabel = isProjectBasedCategory
    ? "Project-Based"
    : gradeCountLabel;

  const readProperty = (product: Product, label: string) =>
    product.properties.find((item) => item.label === label);

  const familyItems = pomProductCategoryData.map((item, index) => ({
    ...item,
    count: getProductsByCategory(products, item.category).length,
    number: String(index + 1).padStart(2, "0"),
  }));
  const engineeringDirectionItems = engineeringGrades.map((document) => document.category)
    .filter((category, index, list) => list.indexOf(category) === index)
    .map((category, index) => {
      const matchingGrades = engineeringGrades.filter(
        (document) => document.category === category,
      );
      const exampleGrade = matchingGrades[0];

      return {
        category,
        count: matchingGrades.length,
        description:
          engineeringDirectionSummary[category] ??
          "Review the compound option against part function, processing fit, and target properties.",
        family: exampleGrade?.family ?? engineeringGrades[0]?.family,
        number: String(index + 1).padStart(2, "0"),
      };
    });

  const getEngineeringSpecs = (document: EngineeringTdsDocument) => [
    ["Specific gravity", document.density],
    ["Tensile stress", document.tensile ? `${document.tensile} MPa` : "-"],
    ["HDT 1.8 MPa", document.hdt ? `${document.hdt} degC` : "-"],
    ["Flammability", document.flammability || "-"],
  ];

  return (
    <div className="product-grade-section">
      {showPomSubcategories ? (
        <div id="material-families" className="product-filter-bar products-motion-filter">
          <div className="product-filter-intro">
            <span className="product-filter-label">Choose a POM Material Family</span>
            <p>
              Choose the performance family closest to the part. Its category
              page provides the related grade data, processing fit, and property
              context.
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

      {!showPomSubcategories && engineeringDirectionItems.length > 0 ? (
        <div id="material-families" className="product-filter-bar products-motion-filter">
          <div className="product-filter-intro">
            <span className="product-filter-label">
              {engineeringDirectionItems[0]?.family} Options
            </span>
            <p>
              Start from reinforcement, toughness, flame rating, wear,
              dimensional control, or processing needs.
            </p>
          </div>

          <div className="product-filter-rail">
            {engineeringDirectionItems.map((item) => (
              <a
                key={item.category}
                href="#pom-grades"
                className="product-filter-link"
              >
                <span className="product-filter-number">{item.number}</span>
                <span className="product-filter-name">{item.category}</span>
                <span className="product-filter-use">{item.description}</span>
                <span className="product-filter-count">
                  {item.count} Listed Grade{item.count === 1 ? "" : "s"}
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {hideGrades ? null : (
        <>
      <div id="pom-grades" className="product-directory-head products-motion-head">
        <div>
          <h2>
            {isProjectBasedCategory
              ? "Project-Based Material Review"
              : isEngineeringCategory
              ? `${engineeringGrades[0]?.family} Grades`
              : selectedCategory === "POM"
              ? "All POM Grade Data"
              : `${filteredProducts.length} Available Grade${
                  filteredProducts.length === 1 ? "" : "s"
                }`}
          </h2>
          <p>
            {isProjectBasedCategory
              ? "Share the part requirement, working condition, target property, and document needs so relevant material families can be shortlisted."
              : isEngineeringCategory
              ? "Compare listed grade data from selected engineering plastic compound families before discussing the application."
              : selectedCategory === "POM"
              ? "Compare all listed POM grades here, or open a material family above for a focused category view."
              : "Shortlist by properties, tooling fit, shrinkage behavior, then open the grade detail page."}
          </p>
          {selectedCategory === "POM" ? (
            <p className="product-directory-guidance">
              Not sure which material family fits?{" "}
              <Link href="/contact">Send project inputs.</Link>
            </p>
          ) : null}
        </div>

        <span className="product-directory-count">{directoryCountLabel}</span>
      </div>

      {isEngineeringCategory ? (
        <div className="product-directory">
          <div className="product-directory-labels" aria-hidden="true">
            <span>Grade</span>
            <span>Key Data</span>
              <span>Details</span>
          </div>

          {engineeringGrades.map((document, index) => (
            <Link
              key={`${document.family}-${document.grade}`}
              href={`/products/${createEngineeringTdsSlug(document)}`}
              className="product-directory-row products-motion-row"
              style={{ "--item-index": index } as CSSProperties}
            >
              <div className="product-directory-main">
                <span className="product-directory-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="section-kicker">
                    {document.family} {document.category}
                  </p>
                  <h3>{document.grade}</h3>
                  <p>{document.description}</p>
                </div>
              </div>

              <dl className="product-directory-specs">
                {getEngineeringSpecs(document).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>
                      <ValueText value={value} />
                    </dd>
                  </div>
                ))}
              </dl>

              <span className="product-directory-action">Grade Details</span>
            </Link>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="product-empty products-motion-row">
          This material family is reviewed by project rather than displayed as
          a fixed grade list. Share the application, mold stage, cavity count,
          shrinkage target, and performance requirements so we can shortlist
          relevant options.
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
        </>
      )}
    </div>
  );
}
