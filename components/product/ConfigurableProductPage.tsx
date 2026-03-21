import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductHero from "./ProductHero";
import ProductCategoryNav from "./ProductCategoryNav";
import ProductCatalogCards from "./ProductCatalogCards";
import ProductQABanner from "./ProductQABanner";
import ProductCTA from "./ProductCTA";
import { matchesCategory } from "./productLayout";
import type {
  ConfigurableProductPageData,
  ProductCatalogItem,
} from "./productTypes";

interface ConfigurableProductPageProps {
  config: ConfigurableProductPageData;
}

const renderHighlights = (product: ProductCatalogItem) => {
  if (!product.highlights || product.highlights.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-yellow-500">
          checklist
        </span>
        Key Highlights
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {product.highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-start gap-3 p-3 bg-slate-50 rounded-sm border border-slate-100"
          >
            <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-sm font-sans text-slate-700 leading-relaxed text-justify">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConfigurableProductPage: React.FC<ConfigurableProductPageProps> = ({
  config,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = config.categories.find((item) => item.key === category);
      if (found) {
        return found.key;
      }
    }

    return config.defaultCategoryKey;
  }, [config.categories, config.defaultCategoryKey, searchParams]);

  const activeCategory =
    config.categories.find((item) => item.key === activeCategoryKey) ??
    config.categories[0];

  const categoryProducts = useMemo(
    () =>
      config.items.filter((item) =>
        matchesCategory(activeCategory.match, item.category),
      ),
    [activeCategory, config.items],
  );

  function selectCategory(key: string) {
    setSearchParams({ category: key });
  }

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero {...config.hero} />

      <ProductCategoryNav
        categories={config.categories}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge={config.certBadge}
      />

      <ProductCatalogCards
        animationKey={activeCategoryKey}
        sectionHeading={activeCategory.label}
        products={categoryProducts}
        getProductKey={(product) => product.id}
        getProductName={(product) => product.name}
        getSubCategory={(product) => product.subCategory}
        getDescription={(product) => product.description}
        getImage={(product) => product.image}
        getSpecifications={(product) => product.specifications || []}
        getApplications={(product) => product.applications}
        getBadges={(product) => product.badges}
        renderExtraSection={renderHighlights}
        ctaLabel={config.catalogCtaLabel}
        ctaIcon={config.catalogCtaIcon}
      />

      <ProductQABanner
        sectionLabel={config.qaBanner.sectionLabel}
        title={config.qaBanner.title}
        items={config.qaBanner.items}
      />

      <ProductCTA
        title={config.cta.title}
        description={config.cta.description}
        ctaLabel={config.cta.ctaLabel}
        ctaIcon={config.cta.ctaIcon}
        ctaLink={config.cta.ctaLink}
      />
    </div>
  );
};

export default ConfigurableProductPage;
