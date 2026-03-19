import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CONTAINER, DETAIL_VARIANTS } from "./productLayout";

export interface ProductSpecItem {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductBadgeItem {
  label: string;
  tone?: "accent" | "neutral";
}

interface ProductCatalogCardsProps<T> {
  animationKey: string;
  sectionHeading: string;
  products: T[];
  getProductKey: (product: T, index: number) => string;
  getProductName: (product: T) => string;
  getSubCategory?: (product: T) => string | undefined;
  getDescription: (product: T) => string;
  getImage: (product: T) => string;
  getSpecifications: (product: T) => ProductSpecItem[];
  getApplications?: (product: T) => string[] | undefined;
  getBadges?: (product: T) => ProductBadgeItem[];
  renderExtraSection?: (product: T) => React.ReactNode;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
  ctaLabel?: string;
  ctaIcon?: string;
}

const BADGE_TONE: Record<NonNullable<ProductBadgeItem["tone"]>, string> = {
  accent:
    "text-yellow-700 bg-yellow-50 border-yellow-200",
  neutral:
    "text-slate-700 bg-slate-100 border-slate-200",
};

interface CatalogCardProps<T> {
  product: T;
  index: number;
  getProductName: (product: T) => string;
  getSubCategory?: (product: T) => string | undefined;
  getDescription: (product: T) => string;
  getImage: (product: T) => string;
  getSpecifications: (product: T) => ProductSpecItem[];
  getApplications?: (product: T) => string[] | undefined;
  getBadges?: (product: T) => ProductBadgeItem[];
  renderExtraSection?: (product: T) => React.ReactNode;
}

function ProductCatalogCard<T>({
  product,
  index,
  getProductName,
  getSubCategory,
  getDescription,
  getImage,
  getSpecifications,
  getApplications,
  getBadges,
  renderExtraSection,
}: CatalogCardProps<T>) {
  const [specsOpen, setSpecsOpen] = useState(false);
  const specs = getSpecifications(product);
  const applications = getApplications?.(product) || [];
  const badges = getBadges?.(product) || [];
  const subCategory = getSubCategory?.(product);

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
        <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 h-[220px] md:h-auto overflow-hidden group">
          <img
            src={getImage(product)}
            alt={getProductName(product)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
        </div>

        <div className="flex-1 min-w-0 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {subCategory && (
              <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                {subCategory}
              </span>
            )}

            {badges.map((badge) => {
              const tone = badge.tone || "neutral";
              return (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${BADGE_TONE[tone]}`}
                >
                  {badge.label}
                </span>
              );
            })}
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight mb-3">
            {getProductName(product)}
          </h3>
          <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4" />

          <p className="text-base text-slate-600 font-sans leading-relaxed mb-6 text-justify">
            {getDescription(product)}
          </p>

          {renderExtraSection?.(product)}

          {applications.length > 0 && (
            <div>
              <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-yellow-500">
                  factory
                </span>
                Key Industries & Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {applications.map((application) => (
                  <span
                    key={application}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                    {application}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {specs.length > 0 && (
        <div className="px-6 md:px-8 pb-2">
          <button
            onClick={() => setSpecsOpen((open) => !open)}
            className="w-full flex items-center justify-between py-4 border-t border-slate-200 cursor-pointer group"
          >
            <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-yellow-500">
                engineering
              </span>
              Technical Specifications
            </h4>
            <span
              className={`material-symbols-outlined text-lg text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${specsOpen ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>

          {specsOpen && (
            <div className="overflow-x-auto pb-4">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {specs.map((spec, specIndex) => (
                    <tr
                      key={`${spec.label}-${specIndex}`}
                      className={specIndex % 2 === 0 ? "bg-slate-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-heading font-bold text-slate-500 uppercase text-[11px] tracking-wider w-[220px] border border-slate-200 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5">
                          {spec.icon && (
                            <span className="material-symbols-outlined text-sm text-yellow-500">
                              {spec.icon}
                            </span>
                          )}
                          {spec.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-800 font-medium font-sans border border-slate-200 text-justify">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <div className="px-6 md:px-8 pb-8">
        <div className="flex flex-wrap gap-3 pt-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span>
            Download Datasheet
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"
          >
            <span className="material-symbols-outlined text-lg">request_quote</span>
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCatalogCards<T>({
  animationKey,
  sectionHeading,
  products,
  getProductKey,
  getProductName,
  getSubCategory,
  getDescription,
  getImage,
  getSpecifications,
  getApplications,
  getBadges,
  renderExtraSection,
  emptyStateTitle = "No products available",
  emptyStateDescription =
    "Please select a different category to view available products.",
  ctaLabel,
  ctaIcon = "download",
}: ProductCatalogCardsProps<T>) {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
        <div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
              {sectionHeading}
            </h2>
            <p className="text-sm text-slate-400 mt-1 font-heading uppercase tracking-wider">
              {products.length} product{products.length !== 1 ? "s" : ""} available
            </p>
            <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
          </div>
          {ctaLabel && (
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 group shrink-0">
              <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                {ctaIcon}
              </span>
              {ctaLabel}
            </button>
          )}
        </div>

        {products.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-sm px-6 py-8 text-center">
            <h3 className="text-lg font-heading font-bold text-slate-800 mb-2">
              {emptyStateTitle}
            </h3>
            <p className="text-sm text-slate-500 font-sans">
              {emptyStateDescription}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              className="flex flex-col gap-8"
            >
              {products.map((product, index) => (
                <ProductCatalogCard
                  key={getProductKey(product, index)}
                  product={product}
                  index={index}
                  getProductName={getProductName}
                  getSubCategory={getSubCategory}
                  getDescription={getDescription}
                  getImage={getImage}
                  getSpecifications={getSpecifications}
                  getApplications={getApplications}
                  getBadges={getBadges}
                  renderExtraSection={renderExtraSection}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

export default ProductCatalogCards;