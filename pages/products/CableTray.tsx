import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CONTAINER,
  DETAIL_VARIANTS,
  ProductCategoryNav,
  ProductCTA,
  ProductHero,
  ProductQABanner,
  matchesCategory,
} from "../../components/product";
import {
  CATEGORIES,
  CERT_BADGE,
  CTA,
  HERO,
  PRODUCTS,
  QA_BANNER,
  type CategoryKey,
} from "./data/cableTrayData";
import type {
  CableTrayRangeTable,
  TrayProduct,
} from "./data/cableTrayTypes";

interface AccordionSectionProps {
  title: string;
  icon: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  icon,
  open,
  onToggle,
  children,
  className = "px-6 md:px-8 pb-2",
}) => (
  <div className={className}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 border-t border-slate-200 cursor-pointer group"
    >
      <h4 className="text-[13px] font-heading font-bold uppercase tracking-[0.15em] text-slate-900 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-yellow-500">
          {icon}
        </span>
        {title}
      </h4>
      <span
        className={`material-symbols-outlined text-lg text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      >
        expand_more
      </span>
    </button>
    {open && children}
  </div>
);

const RangeTableSection: React.FC<{ table: CableTrayRangeTable }> = ({
  table,
}) => (
  <div className="space-y-4 pb-4">
    <div>
      <h5 className="text-sm font-heading font-bold uppercase tracking-[0.14em] text-slate-700">
        {table.title}
      </h5>
      {table.notes && table.notes.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {table.notes.map((note) => (
            <span
              key={`${table.title}-${note}`}
              className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-slate-500"
            >
              {note}
            </span>
          ))}
        </div>
      )}
    </div>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-900">
            {table.columns.map((column) => (
              <th
                key={`${table.title}-${column}`}
                className="px-4 py-3 text-left font-heading font-bold uppercase text-[11px] tracking-wider text-white border border-slate-800 whitespace-nowrap"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={`${table.title}-${row.join("-")}`}
              className={rowIndex % 2 === 0 ? "bg-slate-50" : "bg-white"}
            >
              {row.map((value, columnIndex) => (
                <td
                  key={`${table.title}-${rowIndex}-${columnIndex}`}
                  className="px-4 py-3 text-slate-700 font-medium font-sans border border-slate-200 whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const TrayProductCard: React.FC<{ product: TrayProduct; index: number }> = ({
  product,
  index,
}) => {
  const [specsOpen, setSpecsOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);
  const [typesOpen, setTypesOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);

  return (
    <motion.div
      variants={DETAIL_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 h-[220px] md:h-auto overflow-hidden group bg-slate-100">
          <img
            src={product.applicationImage || product.thumbnail}
            alt={product["Product Name"]}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
        </div>

        <div className="flex-1 min-w-0 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
              {product["Sub-Category"]}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight mb-3">
            {product["Product Name"]}
          </h3>
          <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4" />

          <div className="mb-6 space-y-4">
            {product.descriptionParagraphs.map((paragraph) => (
              <p
                key={`${product.id}-${paragraph}`}
                className="text-base text-slate-600 font-sans leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {product.certifications && product.certifications.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-yellow-500">
                  shield
                </span>
                Certifications & Compliance
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={`${product.id}-cert-${cert}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm"
                  >
                    <span className="material-symbols-outlined text-xs">
                      verified
                    </span>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.industries && product.industries.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-yellow-500">
                  factory
                </span>
                Key Industries & Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={`${product.id}-ind-${industry}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-yellow-500">
                  bolt
                </span>
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={`${product.id}-${feature}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {product.technicalSpecifications.length > 0 && (
        <AccordionSection
          title="Technical Specifications"
          icon="engineering"
          open={specsOpen}
          onToggle={() => setSpecsOpen((open) => !open)}
        >
          <div className="overflow-x-auto pb-4">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {product.technicalSpecifications.map((item, itemIndex) => (
                  <tr
                    key={`${product.id}-${item.label}`}
                    className={itemIndex % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-heading font-bold text-slate-500 uppercase text-[11px] tracking-wider w-[220px] border border-slate-200 whitespace-nowrap">
                      {item.label}
                    </td>
                    <td className="px-4 py-3 text-slate-800 font-medium font-sans border border-slate-200">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionSection>
      )}

      {product.typeGallery && product.typeGallery.items.length > 0 && (
        <AccordionSection
          title={product.typeGallery.title}
          icon="grid_view"
          open={typesOpen}
          onToggle={() => setTypesOpen((open) => !open)}
          className="px-6 md:px-8 pb-6"
        >
          <div className="pb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-[11px] font-heading font-bold uppercase tracking-[0.18em]">
              Gallery
            </span>
            <p className="mt-4 text-sm md:text-base text-slate-600 font-sans leading-relaxed text-justify max-w-4xl">
              {product.typeGallery.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-2">
            {product.typeGallery.items.map((item) => (
              <div
                key={`${product.id}-${item.name}`}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-4 py-4 border-t border-slate-200">
                  <p className="text-sm font-heading font-bold text-slate-900 text-center leading-snug">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-xs text-slate-500 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>
      )}

      {product.accessoryGallery && product.accessoryGallery.items.length > 0 && (
        <AccordionSection
          title={product.accessoryGallery.title}
          icon="extension"
          open={accessoriesOpen}
          onToggle={() => setAccessoriesOpen((open) => !open)}
          className="px-6 md:px-8 pb-6"
        >
          <div className="pb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] font-heading font-bold uppercase tracking-[0.18em]">
              Accessories
            </span>
            <p className="mt-4 text-sm md:text-base text-slate-600 font-sans leading-relaxed text-justify max-w-4xl">
              {product.accessoryGallery.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-2">
            {product.accessoryGallery.items.map((item) => (
              <div
                key={`${product.id}-acc-${item.name}`}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-4 py-4 border-t border-slate-200">
                  <p className="text-sm font-heading font-bold text-slate-900 text-center leading-snug">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-xs text-slate-500 text-center leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>
      )}

      {product.rangeTables && product.rangeTables.length > 0 && (
        <AccordionSection
          title="Product Range"
          icon="table_chart"
          open={rangeOpen}
          onToggle={() => setRangeOpen((open) => !open)}
          className="px-6 md:px-8 pb-4"
        >
          <div className="space-y-8">
            {product.rangeTables.map((table) => (
              <RangeTableSection
                key={`${product.id}-${table.title}`}
                table={table}
              />
            ))}
          </div>
        </AccordionSection>
      )}
    </motion.div>
  );
};

const CableTray: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const category = searchParams.get("category");
    if (category) {
      const found = CATEGORIES.find((item) => item.key === category);
      if (found) return found.key as CategoryKey;
    }
    return "perforated";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((item) => item.key === activeCategoryKey)!;

  const displayedProducts = useMemo(
    () =>
      PRODUCTS.filter((product) =>
        matchesCategory(activeCategory.match, product.Category),
      ),
    [activeCategory],
  );

  function selectCategory(key: string) {
    setSearchParams({ category: key });
  }

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero {...HERO} />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge={CERT_BADGE}
      />

      <section className="bg-white border-b border-slate-100">
        <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                {activeCategory.label}
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider bg-white">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Download Catalogue
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              className="flex flex-col gap-8"
            >
              {displayedProducts.map((product, index) => (
                <TrayProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ProductQABanner title={QA_BANNER.title} items={QA_BANNER.items} />
      <ProductCTA
        title={CTA.title}
        description={CTA.description}
        ctaLabel={CTA.ctaLabel}
        ctaIcon={CTA.ctaIcon}
        ctaLink={CTA.ctaLink}
      />
    </div>
  );
};

export default CableTray;