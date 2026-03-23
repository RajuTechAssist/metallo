import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SteelHero,
  ProductCategoryNav,
  ProductQABanner,
  ProductCTA,
  CONTAINER,
  DETAIL_VARIANTS,
} from "../../components/product";
import {
  PRODUCTS,
  CATEGORIES,
  SPEC_FIELDS,
  QA_ITEMS,
  MAT_LABEL,
  MAT_COLOR,
  MAT_ORDER,
  STEEL_CORE_CERTIFICATIONS,
  type SteelProduct,
  type CategoryKey,
} from "./data/steelData";

/* ═══════════════════════════════════════════════════════════════
   STEEL PAGE — Category + Material-Group → Product Cards Layout
   Left:  Material-group labels (Pipes & Tubes only)
   Right: All products of selected group as stacked cards
   ═══════════════════════════════════════════════════════════════ */

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

const Steel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);

  /* ── Active category from URL ────────────────────────────── */
  const activeCategoryKey: CategoryKey = useMemo(() => {
    const catKey = searchParams.get("category");
    if (catKey) {
      const valid = CATEGORIES.find((c) => c.key === catKey);
      if (valid) return valid.key;
    }
    const catName = searchParams.get("cat");
    if (catName) {
      const found = CATEGORIES.find((c) =>
        (c.match as readonly string[]).some((m) => m === catName),
      );
      if (found) return found.key;
    }
    return "pipes";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;

  /* ── Products in active category ─────────────────────────── */
  const categoryProducts = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        (activeCategory.match as readonly string[]).includes(p.Category),
      ),
    [activeCategory],
  );

  /* ── Active material group (pipes only) ──────────────────── */
  const activeGroup = searchParams.get("group") || MAT_ORDER[0];

  /* ── Grouped products for Pipes & Tubes ──────────────────── */
  const groupedProducts = useMemo(() => {
    if (activeCategoryKey !== "pipes") return null;
    const groups: Record<string, SteelProduct[]> = {};
    for (const p of categoryProducts) {
      const g = p.materialGroup || "other";
      if (!groups[g]) groups[g] = [];
      groups[g].push(p);
    }
    return groups;
  }, [categoryProducts, activeCategoryKey]);

  /* ── Displayed products ──────────────────────────────────── */
  const displayedProducts = useMemo(() => {
    if (activeCategoryKey === "pipes" && groupedProducts) {
      return groupedProducts[activeGroup] || [];
    }
    return categoryProducts;
  }, [activeCategoryKey, groupedProducts, activeGroup, categoryProducts]);

  /* ── Helpers ─────────────────────────────────────────────── */
  function selectCategory(key: CategoryKey) {
    setSearchParams({ category: key });
    setMobileGroupOpen(false);
  }

  function selectGroup(group: string) {
    setSearchParams({ category: "pipes", group });
    setMobileGroupOpen(false);
  }

  /* ── Active specs for a product (non-empty fields only) ──── */
  function getProductSpecs(product: SteelProduct) {
    return SPEC_FIELDS.filter((f) => {
      const val = product[f.key];
      return typeof val === "string" && val.trim().length > 0;
    });
  }

  /* ─────────────────────────────────────────────────────────── */
  /*  PRODUCT CARD — Full-width card with image, table, actions  */
  /* ─────────────────────────────────────────────────────────── */
  const ProductCard: React.FC<{ product: SteelProduct; index: number }> = ({
    product,
    index,
  }) => {
    const specs = getProductSpecs(product);
    const [specsOpen, setSpecsOpen] = useState(false);
    const [typesOpen, setTypesOpen] = useState(false);
    const certifications =
      product.Certification && product.Certification.length > 0
        ? product.Certification
        : STEEL_CORE_CERTIFICATIONS;
    const descriptionParagraphs =
      product.descriptionParagraphs && product.descriptionParagraphs.length > 0
        ? product.descriptionParagraphs
        : [product.Description];
    const typeGallery = product.typeGallery;
    return (
      <motion.div
        variants={DETAIL_VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: index * 0.05 }}
        className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Image + Header */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 h-[200px] md:h-auto overflow-hidden group">
            <img
              src={product.applicationImage || product.thumbnail}
              alt={product["Product Name"]}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 p-6 md:p-8">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                {product["Sub-Category"]}
              </span>
              {product.materialGroup && (
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${product.materialGroup === "ss"
                    ? "text-blue-700 bg-blue-50 border-blue-200"
                    : product.materialGroup === "gi"
                      ? "text-teal-700 bg-teal-50 border-teal-200"
                      : product.materialGroup === "ms"
                        ? "text-amber-700 bg-amber-50 border-amber-200"
                        : "text-violet-700 bg-violet-50 border-violet-200"
                    }`}
                >
                  {MAT_LABEL[product.materialGroup]}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight mb-3">
              {product["Product Name"]}
            </h3>
            <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4" />

            {/* Description */}
            <div className="mb-6 space-y-4">
              {descriptionParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base text-slate-600 font-sans leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Certification Badges */}
            {certifications.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-yellow-500">
                    shield
                  </span>
                  Certifications & Compliance
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, idx) => (
                    <span
                      key={idx}
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

            {/* Key Industries & Applications */}
            {product.Applications && product.Applications.length > 0 && (
              <div>
                <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-yellow-500">
                    factory
                  </span>
                  Key Industries & Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.Applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specifications — Collapsible */}
        {specs.length > 0 && (
          <AccordionSection
            title="Technical Specifications"
            icon="engineering"
            open={specsOpen}
            onToggle={() => setSpecsOpen((open) => !open)}
          >
            <div className="overflow-x-auto pb-4">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {specs.map((spec, idx) => (
                    <tr
                      key={spec.key}
                      className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-heading font-bold text-slate-500 uppercase text-[11px] tracking-wider w-[200px] border border-slate-200 whitespace-nowrap">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 text-slate-800 font-medium font-sans border border-slate-200">
                        {product[spec.key] as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionSection>
        )}

        {typeGallery && typeGallery.items.length > 0 && (
          <AccordionSection
            title={typeGallery.title}
            icon="grid_view"
            open={typesOpen}
            onToggle={() => setTypesOpen((open) => !open)}
            className="px-6 md:px-8 pb-6"
          >
            <div className="pb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-[11px] font-heading font-bold uppercase tracking-[0.18em]">
                Types
              </span>
              <p className="mt-4 text-sm md:text-base text-slate-600 font-sans leading-relaxed text-justify max-w-4xl">
                {typeGallery.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pb-2">
              {typeGallery.items.map((item) => (
                <div
                  key={`${product["Product Name"]}-${item.name}`}
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
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {/* Action Buttons */}
        {/* <div className="px-6 md:px-8 pb-8">
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Download Datasheet
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"
            >
              <span className="material-symbols-outlined text-lg">
                request_quote
              </span>
              Get Quote
            </Link>
          </div>
        </div> */}
      </motion.div>
    );
  };

  /* ─────────────────────────────────────────────────────────── */
  /*  RENDER                                                     */
  /* ─────────────────────────────────────────────────────────── */
  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <SteelHero
        title="High-Performance"
        subtitle="Industrial Steel."
        description="IS / BIS / ISI Marked / ASTM / MTC EN compliant Stainless, Carbon, Mild & Alloy Steel — engineered for critical infrastructure, oil & gas, and heavy engineering across 8 product families."
        breadcrumbLabel="Steel Products"
      />
      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={selectCategory}
        certBadge={STEEL_CORE_CERTIFICATIONS.join(" / ")}
      />

      {/* ═══ BODY ═══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-100">
        <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
          {/* Mobile group selector (pipes only) */}
          {activeCategoryKey === "pipes" && (
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setMobileGroupOpen(!mobileGroupOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-yellow-500">
                    menu
                  </span>
                  {MAT_LABEL[activeGroup] || "Select Material"}
                </span>
                <span
                  className={`material-symbols-outlined text-lg transition-transform ${mobileGroupOpen ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {mobileGroupOpen && (
                <div className="border border-slate-200 border-t-0 bg-white">
                  {MAT_ORDER.map((gKey) => {
                    const items = groupedProducts?.[gKey];
                    if (!items?.length) return null;
                    const isActive = activeGroup === gKey;
                    return (
                      <button
                        key={gKey}
                        onClick={() => selectGroup(gKey)}
                        className={`w-full text-left px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider border-b border-slate-50 flex items-center gap-3 transition-colors ${isActive
                          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500"
                          : "text-slate-600 hover:bg-slate-50"
                          }`}
                      >

                        {MAT_LABEL[gKey]}
                        <span
                          className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive
                            ? "bg-yellow-500 text-slate-900"
                            : "bg-slate-200 text-slate-500"
                            }`}
                        >
                          {items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* ── LEFT: GROUP MENU (Pipes & Tubes only) ── */}
            {activeCategoryKey === "pipes" && (
              <aside className="hidden lg:block w-[260px] xl:w-[280px] shrink-0">
                <div className="sticky" style={{ top: "64px" }}>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                    <span className="material-symbols-outlined text-lg text-yellow-500">
                      {activeCategory.icon}
                    </span>
                    <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">
                      {activeCategory.label}
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-1">
                    {MAT_ORDER.map((gKey) => {
                      const items = groupedProducts?.[gKey];
                      if (!items?.length) return null;
                      const isActive = activeGroup === gKey;
                      return (
                        <button
                          key={gKey}
                          onClick={() => selectGroup(gKey)}
                          className={`w-full text-left px-4 py-3.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${isActive
                            ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                            }`}
                        >

                          <span className="text-[13px] font-heading font-bold leading-tight">
                            {MAT_LABEL[gKey]}
                          </span>
                          <span
                            className={`ml-auto text-[10px] font-bold font-heading px-1.5 py-0.5 rounded-full ${isActive
                              ? "bg-yellow-500 text-slate-900"
                              : "bg-slate-200 text-slate-500"
                              }`}
                          >
                            {items.length}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>
            )}

            {/* ── RIGHT: PRODUCT CARDS ── */}
            <div className="flex-1 min-w-0">
              {/* Category/group heading */}
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                    {activeCategoryKey === "pipes"
                      ? MAT_LABEL[activeGroup]
                      : activeCategory.label}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 font-heading uppercase tracking-wider">
                    {displayedProducts.length} product
                    {displayedProducts.length !== 1 ? "s" : ""} available
                  </p>
                  <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 group shrink-0">
                  <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                    download
                  </span>
                  Download Technical Catalog
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategoryKey}-${activeGroup}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  className="flex flex-col gap-8"
                >
                  {displayedProducts.map((product, idx) => (
                    <ProductCard
                      key={product["Product Name"]}
                      product={product}
                      index={idx}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ProductQABanner
        title="Certified to the Highest Standards"
        items={QA_ITEMS}
      />
      <ProductCTA
        title="Procuring for a major project?"
        description="Submit your Bill of Materials (BOM) for a comprehensive supply schedule. Our engineering team will provide grade-specific availability, lead times, and project pricing within 24 hours."
        ctaLabel="Upload BOQ / Request Supply Quote"
        ctaIcon="upload_file"
      />
    </div>
  );
};

export default Steel;
