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
  type TrayProduct,
} from "./data/cableTrayData";

const CableTray: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = CATEGORIES.find((item) => item.key === category);
      if (found) return found.key;
    }
    return "ladder";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((item) => item.key === activeCategoryKey)!;

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((product) => matchesCategory(activeCategory.match, product.Category)),
    [activeCategory],
  );

  const getProductSpecs = (product: TrayProduct) =>
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
        backgroundImage="/cable Trays/Cabletrays.jpeg"
        title="Cable Tray Systems"
        subtitle="Engineered Cable Management."
        description="GI, stainless steel and aluminium cable trays - ladder, perforated, mesh, and solid bottom - IS/IEC certified and custom fabricated for power plants, data centres, and industrial installations."
        breadcrumbLabel="Cable Tray Systems"
        ctaLabel="Download Cable Tray Catalog"
      />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge="IS / IEC / NEMA Certified"
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
      />

      <ProductQABanner title="Certified Cable Management Systems" items={QA_ITEMS} />

      <ProductCTA
        title="Need a Custom Cable Tray Solution?"
        description="Our engineering team can assist with tray sizing, material selection, load calculations, and project-specific configurations. Get a response within 24 hours."
        ctaLabel="Request Quote"
      />
    </div>
  );
};

export default CableTray;
