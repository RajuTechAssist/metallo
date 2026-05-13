"use client";

import React, { useMemo } from "react";
import { useSearchParamsState as useSearchParams } from "@/lib/useSearchParamsState";
import {
  ProductHero,
  ProductCategoryNav,
  ProductCatalogCards,
  ProductQABanner,
  ProductCTA,
  VerticalCertifications,
  matchesCategory,
} from "../../components/product";
import {
  PRODUCTS,
  CATEGORIES,
  QA_ITEMS,
  type CategoryKey,
  type ToolProduct,
} from "@/data/powerToolsData";
import { SITE_IMAGES } from '@/config/images';

const PowerTools: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = CATEGORIES.find((item) => item.key === category);
      if (found) return found.key;
    }
    return "v20";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((item) => item.key === activeCategoryKey)!;

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((product) => matchesCategory(activeCategory.match, product.Category)),
    [activeCategory],
  );

  const getToolSpecs = (product: ToolProduct) =>
    Object.entries(product.Specs).map(([label, value]) => ({
      label,
      value,
      icon: "settings",
    }));

  function selectCategory(key: string) {
    setSearchParams({ category: key });
  }

  const renderToolExtraSection = (product: ToolProduct) => (
    <>
      {product.Features.length > 0 && (
        <div className="mb-8">
          <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-yellow-500">
              star
            </span>
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.Features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-3 bg-slate-50 rounded-sm border border-slate-100"
              >
                <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">
                  check_circle
                </span>
                <span className="text-sm font-sans text-slate-700 leading-relaxed text-justify">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {product.Variants && product.Variants.length > 0 && (
        <div className="mb-8">
          <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-yellow-500">
              inventory
            </span>
            Available Variants
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-sm">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-[11px] font-heading font-bold uppercase tracking-widest text-slate-500">
                    Product Code
                  </th>
                  <th className="text-left py-3 px-4 text-[11px] font-heading font-bold uppercase tracking-widest text-slate-500">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 text-[11px] font-heading font-bold uppercase tracking-widest text-slate-500">
                    Battery
                  </th>
                  <th className="text-left py-3 px-4 text-[11px] font-heading font-bold uppercase tracking-widest text-slate-500">
                    Storage
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.Variants.map((variant) => (
                  <tr
                    key={variant.code}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <td className="py-3 px-4 font-mono text-xs font-bold text-slate-800">
                      {variant.code}
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-justify">{variant.type}</td>
                    <td className="py-3 px-4 text-slate-700">{variant.battery || "-"}</td>
                    <td className="py-3 px-4 text-slate-700">{variant.storage || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {product.Accessories && product.Accessories.length > 0 && (
        <div className="mb-8">
          <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-yellow-500">
              handyman
            </span>
            Included Accessories
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.Accessories.map((accessory) => (
              <span
                key={accessory}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm"
              >
                <span className="material-symbols-outlined text-sm">check_circle</span>
                {accessory}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero
        backgroundImage={SITE_IMAGES.misc.productHeroes.powerTools}
        title="Power Tools"
        subtitle="Built for the Job Site."
        description="Professional-grade cordless and corded power tools - drills, grinders, hammers, saws, and specialty tools - backed by nationwide service and V20 battery interchangeability."
        breadcrumbLabel="Power Tools"
      />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge="IEC / IS Certified"
      />

      <ProductCatalogCards
        animationKey={activeCategoryKey}
        sectionHeading={activeCategory.label}
        products={categoryProducts}
        getProductKey={(product) => `${product.Model}-${product["Product Name"]}`}
        getProductName={(product) => product["Product Name"]}
        getSubCategory={(product) => product["Sub-Category"]}
        getDescription={(product) => product.Description}
        getImage={(product) => product.thumbnail}
        getSpecifications={getToolSpecs}
        getBadges={(product) => [{ label: product.Model, tone: "neutral" }]}
        renderExtraSection={renderToolExtraSection}
        ctaLabel="Download Power Tools Catalog"
      />

      <VerticalCertifications verticalKey="tools" />
      <ProductQABanner title="Professional Power Tools" items={QA_ITEMS} />
    </div>
  );
};

export default PowerTools;
