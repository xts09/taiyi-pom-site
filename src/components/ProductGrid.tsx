"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ProductAnimeMotion } from "@/components/ProductAnimeMotion";
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
  getCategoryTitle,
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
  const [activePomCategory, setActivePomCategory] = useState("POM");

  useEffect(() => {
    if (selectedCategory !== "POM") {
      return;
    }

    const syncCategoryFromUrl = () => {
      const categoryParam = new URLSearchParams(window.location.search).get(
        "type",
      );
      const matchingCategory = productCategoryOrder.find(
        (category) => createCategorySlug(category) === categoryParam,
      );

      setActivePomCategory(matchingCategory ?? "POM");
    };

    syncCategoryFromUrl();
    window.addEventListener("popstate", syncCategoryFromUrl);

    return () => {
      window.removeEventListener("popstate", syncCategoryFromUrl);
    };
  }, [selectedCategory]);

  const selectPomCategory = useCallback((category: string) => {
    setActivePomCategory(category);

    const nextUrl = new URL(window.location.href);

    if (category === "POM") {
      nextUrl.searchParams.delete("type");
    } else {
      nextUrl.searchParams.set("type", createCategorySlug(category));
    }

    window.history.replaceState(
      null,
      "",
      `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`,
    );
  }, []);

  const effectiveCategory =
    selectedCategory === "POM" ? activePomCategory : selectedCategory;
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
  const pomFilterItems = [
    {
      category: "POM",
      label: "All POM Grades",
      applications: ["Compare every listed POM material direction"],
      count: getProductsByCategory(products, "POM").length,
      number: "00",
    },
    ...familyItems,
  ];
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
          "Project-based compound direction for material review.",
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
      {showPomSubcategories ? <ProductAnimeMotion /> : null}
      {showPomSubcategories ? (
        <div id="material-families" className="product-filter-bar products-motion-filter">
          <div className="product-filter-intro">
            <span className="product-filter-label">Choose a Material Direction</span>
            <p>
              Choose the requirement closest to the part, then compare the
              matching grades by processing fit and property data.
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
              {engineeringDirectionItems[0]?.family} Directions
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
                  {item.count} Reference Grade{item.count === 1 ? "" : "s"}
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {hideGrades ? null : (
        <>
      {selectedCategory === "POM" ? (
        <div className="product-directory-filter" aria-label="Filter POM grade data">
          <span className="product-directory-filter-label">Filter Grade Data</span>
          <div className="product-directory-filter-options">
            {pomFilterItems.map((item) => (
              <button
                key={item.category}
                type="button"
                className={`product-directory-filter-button ${
                  activePomCategory === item.category ? "is-active" : ""
                }`}
                aria-pressed={activePomCategory === item.category}
                onClick={() => selectPomCategory(item.category)}
              >
                <span>{item.label}</span>
                <b>{item.count}</b>
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <div id="pom-grades" className="product-directory-head products-motion-head">
        <div>
          <h2>
            {isProjectBasedCategory
              ? "Project-Based Material Review"
              : isEngineeringCategory
              ? `${engineeringGrades[0]?.family} Grades`
              : selectedCategory === "POM"
              ? effectiveCategory === "POM"
                ? "All POM Grade Data"
                : `${getCategoryTitle(effectiveCategory)} Grades`
              : `${filteredProducts.length} Available Grade${
                  filteredProducts.length === 1 ? "" : "s"
                }`}
          </h2>
          <p>
            {isProjectBasedCategory
              ? "Share the part requirement, working condition, target property, and document needs so a suitable material direction can be reviewed."
              : isEngineeringCategory
              ? "Compare reference grade data from selected engineering plastic compound directions before requesting material review."
              : selectedCategory === "POM"
              ? effectiveCategory === "POM"
                ? "Compare all listed POM directions, then narrow the directory by material function."
                : "Compare the matching grades here, or open the dedicated category page for its technical overview."
              : "Shortlist by properties, tooling fit, shrinkage behavior, then open the grade detail page."}
          </p>
          {selectedCategory === "POM" ? (
            <p className="product-directory-guidance">
              {effectiveCategory === "POM" ? (
                <>
                  Not sure which direction fits?{" "}
                  <Link href="/contact">Request a grade recommendation.</Link>
                </>
              ) : (
                <Link href={getCategoryPath(effectiveCategory)}>
                  Open the {getCategoryTitle(effectiveCategory)} category page.
                </Link>
              )}
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
            <span>Review</span>
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
          This material direction is reviewed by project rather than displayed
          as a fixed grade list. Contact us with your application, mold stage,
          cavity count, shrinkage target, and performance requirements for a
          practical material recommendation.
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
