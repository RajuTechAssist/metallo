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
} from "../../components/product";
import {
  CATALOGUE_DOWNLOAD,
  CATEGORIES,
  CERT_BADGE,
  CTA,
  HERO,
  POWER_CONTROL_GROUPS,
  PRODUCTS,
  QA_BANNER,
  type CategoryKey,
  type PowerControlGroupKey,
} from "./data/wireCablesData";
import type { WireCableProduct } from "./data/wireCablesTypes";

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
  className = "px-6 md:px-8 pb-4",
}) => (
  <div className={className}>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
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
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const SpecificationTable: React.FC<{
  items: WireCableProduct["technicalSpecifications"];
}> = ({ items }) => (
  <div className="overflow-x-auto pb-4">
    <table className="w-full border-collapse text-sm">
      <tbody>
        {items.map((item, itemIndex) => (
          <tr
            key={item.label}
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
);

const ChipRow: React.FC<{
  title: string;
  icon: string;
  items?: string[];
  tone: "emerald" | "yellow" | "slate";
}> = ({ title, icon, items, tone }) => {
  if (!items || items.length === 0) return null;

  const toneClasses =
    tone === "emerald"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
      : tone === "yellow"
        ? "bg-yellow-50 border-yellow-200 text-yellow-800"
        : "bg-slate-50 border-slate-200 text-slate-700";

  return (
    <div className="mb-6">
      <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-yellow-500">
          {icon}
        </span>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={`${title}-${item}`}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 border text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm ${toneClasses}`}
          >
            <span className="material-symbols-outlined text-xs">
              check_circle
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const WireCableProductCard: React.FC<{
  product: WireCableProduct;
  groupLabel: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ product, groupLabel, index, isOpen, onToggle }) => {
  const [technicalOpen, setTechnicalOpen] = useState(false);
  const [constructionOpen, setConstructionOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);
  const detailsOpen = isOpen;

  // Reset inner accordions when card closes
  React.useEffect(() => {
    if (!isOpen) {
      setTechnicalOpen(false);
      setConstructionOpen(false);
      setRangeOpen(false);
    }
  }, [isOpen]);

  return (
    <motion.div
      variants={DETAIL_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={detailsOpen}
        className={`w-full flex items-center gap-4 md:gap-5 px-4 md:px-6 py-4 md:py-5 text-left transition-all duration-300 ${detailsOpen ? "bg-slate-50 border-b border-slate-200" : ""}`}
      >
        {!detailsOpen && (
          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-sm border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
            <img
              src={product.panelImage || product.thumbnail}
              alt={product["Product Name"]}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className={`font-heading font-bold text-slate-900 leading-snug transition-all duration-300 ${detailsOpen ? "text-sm md:text-base" : "text-base md:text-xl"}`}>
            {product["Product Name"]}
          </h3>
        </div>

        <span
          className={`material-symbols-outlined text-2xl text-slate-400 transition-transform duration-200 ${detailsOpen ? "rotate-180 text-slate-700" : ""}`}
        >
          expand_more
        </span>
      </button>

      <AnimatePresence initial={false}>
        {detailsOpen && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-200">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 h-[220px] md:h-auto overflow-hidden bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 group">
                  <img
                    src={product.panelImage || product.thumbnail}
                    alt={product["Product Name"]}
                    className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                      {product["Sub-Category"]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border text-blue-700 bg-blue-50 border-blue-200">
                      {groupLabel}
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

                  <ChipRow
                    title="Applicable Standards"
                    icon="rule"
                    items={product.applicableStandards}
                    tone="slate"
                  />
                  <ChipRow
                    title="Insulated Material"
                    icon="layers"
                    items={product.insulatedMaterials}
                    tone="slate"
                  />
                  <ChipRow
                    title="Certifications & Compliance"
                    icon="shield"
                    items={product.certifications}
                    tone="emerald"
                  />
                  <ChipRow
                    title="Key Industries & Applications"
                    icon="factory"
                    items={product.industries}
                    tone="yellow"
                  />
                </div>
              </div>

              {product.technicalSpecifications.length > 0 && (
                <AccordionSection
                  title="Technical Specifications"
                  icon="engineering"
                  open={technicalOpen}
                  onToggle={() => setTechnicalOpen((open) => !open)}
                >
                  <SpecificationTable items={product.technicalSpecifications} />
                </AccordionSection>
              )}

              {product.constructionSpecifications.length > 0 && (
                <AccordionSection
                  title="Construction Details"
                  icon="account_tree"
                  open={constructionOpen}
                  onToggle={() => setConstructionOpen((open) => !open)}
                >
                  <SpecificationTable
                    items={product.constructionSpecifications}
                  />
                </AccordionSection>
              )}

              {product.rangeNotes && product.rangeNotes.length > 0 && (
                <AccordionSection
                  title="Range & Selection Notes"
                  icon="table_chart"
                  open={rangeOpen}
                  onToggle={() => setRangeOpen((open) => !open)}
                  className="px-6 md:px-8 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2">
                    {product.rangeNotes.map((item) => (
                      <div
                        key={`${product.id}-${item}`}
                        className="px-4 py-3 rounded-sm border border-slate-200 bg-slate-50 text-sm text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </AccordionSection>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WireCables: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const activeCategoryKey: CategoryKey = "power-control";
  const activeCategory = CATEGORIES[0];

  const activeGroupKey: PowerControlGroupKey = useMemo(() => {
    const group = searchParams.get("group");
    if (group === "ht") return "ht";
    return "lt";
  }, [searchParams]);

  const activeGroup =
    POWER_CONTROL_GROUPS.find((item) => item.key === activeGroupKey) ||
    POWER_CONTROL_GROUPS[0];

  const groupCounts = useMemo(
    () =>
      Object.fromEntries(
        POWER_CONTROL_GROUPS.map((group) => [
          group.key,
          PRODUCTS.filter((product) => product.Category === group.match).length,
        ]),
      ) as Record<PowerControlGroupKey, number>,
    [],
  );

  const displayedProducts = useMemo(
    () => PRODUCTS.filter((product) => product.Category === activeGroup.match),
    [activeGroup],
  );

  function selectGroup(key: PowerControlGroupKey) {
    setSearchParams({ group: key });
    setMobileGroupOpen(false);
    setOpenCardId(null);
  }

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero {...HERO} />

      <ProductCategoryNav
        categories={CATEGORIES}
        activeKey={activeCategoryKey}
        onSelect={() => setSearchParams({ group: activeGroupKey })}
        certBadge={CERT_BADGE}
      />

      <section className="bg-white border-b border-slate-100">
        <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileGroupOpen((open) => !open)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">
                  menu
                </span>
                {activeGroup.label}
              </span>
              <span
                className={`material-symbols-outlined text-lg transition-transform ${mobileGroupOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>
            {mobileGroupOpen && (
              <div className="border border-slate-200 border-t-0 bg-white">
                {POWER_CONTROL_GROUPS.map((group) => {
                  const isActive = activeGroupKey === group.key;
                  return (
                    <button
                      key={group.key}
                      onClick={() => selectGroup(group.key)}
                      className={`w-full text-left px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider border-b border-slate-50 flex items-center gap-3 transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {group.label}
                      <span
                        className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-yellow-500 text-slate-900"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {groupCounts[group.key]}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
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
                  {POWER_CONTROL_GROUPS.map((group) => {
                    const isActive = activeGroupKey === group.key;
                    return (
                      <button
                        key={group.key}
                        onClick={() => selectGroup(group.key)}
                        className={`w-full text-left px-4 py-3.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
                          isActive
                            ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                        }`}
                      >
                        <span className="text-[13px] font-heading font-bold leading-tight">
                          {group.label}
                        </span>
                        <span
                          className={`ml-auto text-[10px] font-bold font-heading px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-yellow-500 text-slate-900"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {groupCounts[group.key]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                    {activeGroup.label}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 font-heading uppercase tracking-wider">
                    {displayedProducts.length} product
                    {displayedProducts.length !== 1 ? "s" : ""} available
                  </p>
                  <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
                </div>
                <a
                  href={CATALOGUE_DOWNLOAD}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 group shrink-0"
                >
                  <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                    download
                  </span>
                  Download Technical Catalog
                </a>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategoryKey}-${activeGroupKey}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  className="flex flex-col gap-4"
                >
                  {displayedProducts.map((product, index) => (
                    <WireCableProductCard
                      key={product.id}
                      product={product}
                      groupLabel={activeGroup.label}
                      index={index}
                      isOpen={openCardId === product.id}
                      onToggle={() =>
                        setOpenCardId((prev) =>
                          prev === product.id ? null : product.id
                        )
                      }
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
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

export default WireCables;
