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
  type CableProduct,
} from "./data/wireCablesData";

const WireCables: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = CATEGORIES.find((item) => item.key === category);
      if (found) return found.key;
    }
    return "power";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((item) => item.key === activeCategoryKey)!;

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((product) => matchesCategory(activeCategory.match, product.Category)),
    [activeCategory],
  );

  const getProductSpecs = (product: CableProduct) =>
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
        backgroundImage="/wire&cable/wireCables.jpg"
        title="Wire & Cables"
        subtitle="Powering Every Project."
        description="From LT and screened MV power cables to solar, control, fire-survival, and overhead bundled systems, Metallo supports utilities, process plants, buildings, and infrastructure with source-backed industrial cable families."
        breadcrumbLabel="Wire & Cables"
      />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge="BIS / IEC Certified"
      />

      <ProductCatalogCards
        animationKey={activeCategoryKey}
        sectionHeading={activeCategory.label}
        products={categoryProducts}
        getProductKey={(product) => product["Product Name"]}
        getProductName={(product) => product["Product Name"]}
        getSubCategory={(product) => product["Sub-Category"]}
        getDescription={(product) => product.Description}
        getDescriptionParagraphs={(product) => product.descriptionParagraphs}
        getImage={(product) => product.applicationImage || product.thumbnail}
        getSpecifications={getProductSpecs}
        getApplications={(product) => product.Applications}
        ctaLabel="Download Cable Catalog"
      />

      <ProductQABanner
        title="Certified to the Highest Standards"
        items={QA_ITEMS}
      />

      <ProductCTA
        title="Need a Custom Cable Solution?"
        description="Our engineering team can assist with cable sizing, fire-rating selection, and project-specific requirements. Submit your BOQ for a comprehensive supply schedule within 24 hours."
        ctaLabel="Upload BOQ / Request Quote"
        ctaIcon="upload_file"
      />
    </div>
  );
};

export default WireCables;
