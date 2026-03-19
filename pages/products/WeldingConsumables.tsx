import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ProductHero,
  ProductCategoryNav,
  ProductCatalogCards,
  ProductQABanner,
  ProductCTA,
  matchesCategory,
} from "../../components/product";
import {
  PRODUCTS,
  CATEGORIES,
  SPEC_FIELDS,
  QA_ITEMS,
  type CategoryKey,
  type WeldingProduct,
} from "./data/weldingData";

const WeldingConsumables: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = CATEGORIES.find((item) => item.key === category);
      if (found) return found.key;
    }
    return "consumables";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((item) => item.key === activeCategoryKey)!;

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((product) => matchesCategory(activeCategory.match, product.Category)),
    [activeCategory],
  );

  const getProductSpecs = (product: WeldingProduct) =>
    SPEC_FIELDS.flatMap((field) => {
      const value = product[field.key];
      if (typeof value !== "string" || !value.trim()) return [];
      return [{ label: field.label, value, icon: field.icon }];
    });

  function selectCategory(key: string) {
    setSearchParams({ category: key });
  }

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero
        backgroundImage="/Welding Consumables/welding_consumables.jpg"
        title="Welding & Allied"
        subtitle="Precision Joins. Every Time."
        description="AWS and IS certified electrodes, MIG/TIG wires, brazing alloys, and accessories engineered for structural fabrication, pressure vessels, and critical industrial applications."
        breadcrumbLabel="Welding & Allied"
      />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge="AWS / IS / EN Certified"
      />

      <ProductCatalogCards
        animationKey={activeCategoryKey}
        sectionHeading={activeCategory.label}
        products={categoryProducts}
        getProductKey={(product) => product["Product Name"]}
        getProductName={(product) => product["Product Name"]}
        getSubCategory={(product) => product["Sub-Category"]}
        getDescription={(product) => product.Description}
        getImage={(product) => product.applicationImage || product.thumbnail}
        getSpecifications={getProductSpecs}
        getApplications={(product) => product.Applications}
        ctaLabel="Download Welding Catalog"
        getBadges={(product) =>
          product.Classification
            ? [{ label: product.Classification, tone: "neutral" }]
            : []
        }
      />

      <ProductQABanner title="Certified Welding Consumables" items={QA_ITEMS} />

      <ProductCTA
        title="Need Bulk Welding & Allied Supplies?"
        description="Submit your project requirements for competitive pricing on bulk orders. Our team provides grade-specific availability and delivery timelines within 24 hours."
        ctaLabel="Request Quote"
      />
    </div>
  );
};

export default WeldingConsumables;
