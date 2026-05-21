"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  CONSUMABLE_CATEGORIES,
  AUTOMATION_CATEGORIES,
  SAFETY_CATEGORIES,
  ACCESSORIES_CATEGORIES,
  type WeldingMainCategory,
} from "@/data/weldingCategoryData";

/* ── OLD IMPORTS — kept for future re-enable ──────────────────
import { FILLER_METAL_CATEGORIES, type FillerMetalProduct, type FillerMetalCategory } from "@/data/fillerMetalsData";
──────────────────────────────────────────────────────────────── */

interface WeldingProductCatalogProps {
  categoryKey: string;
}

/* ── Sub-Category Dropdown Component ────────────────────────── */
const AccordionSection: React.FC<{
  title: string; icon: string; open: boolean; onToggle: () => void; children: React.ReactNode;
}> = ({ title, icon, open, onToggle, children }) => (
  <div className="px-6 md:px-8 pb-2 border-t border-slate-200 bg-slate-50/50">
    <button onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className="w-full flex items-center justify-between py-4 cursor-pointer group">
      <h4 className="text-[13px] font-heading font-bold uppercase tracking-[0.15em] text-slate-900 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-yellow-500">{icon}</span>
        {title}
      </h4>
      <span className={`material-symbols-outlined text-lg text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
        expand_more
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div key="acc" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
          <div className="pt-2 pb-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ── Category Card with description, features & industries ──── */
const CategoryCard: React.FC<{
  category: WeldingMainCategory;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ category, index, isOpen, onToggle }) => {
  const [subCatOpen, setSubCatOpen] = useState(false);
  const [standardsOpen, setStandardsOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) { setSubCatOpen(false); setStandardsOpen(false); setUseCasesOpen(false); }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header Row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-center gap-4 md:gap-5 px-4 md:px-6 py-4 md:py-5 text-left transition-all duration-300 cursor-pointer ${
          isOpen ? "bg-slate-50 border-b border-slate-200" : ""
        }`}
      >
        {!isOpen && (
          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-sm border border-slate-200 bg-slate-50 overflow-hidden relative">
            <Image src={category.image} alt={category.label} fill className="object-cover" sizes="96px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3
            className={`font-heading font-bold text-slate-900 leading-snug transition-all duration-300 ${
              isOpen ? "text-sm md:text-base" : "text-base md:text-xl"
            }`}
          >
            {category.label}
          </h3>
          {!isOpen && (
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
              {category.description.substring(0, 100)}…
            </p>
          )}
        </div>
        <span
          className={`material-symbols-outlined text-2xl text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-slate-700" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      {/* Expanded Detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
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
                <div className="relative w-full md:w-[320px] lg:w-[380px] shrink-0 h-[200px] md:h-auto overflow-hidden group">
                  <Image src={category.image} alt={category.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 380px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
                <div className="flex-1 min-w-0 p-6 md:p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-yellow-500">
                        description
                      </span>
                      Description
                    </h4>
                    <p className="text-base text-slate-600 font-sans leading-relaxed text-justify">
                      {category.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {category.features && category.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-yellow-500">
                          star
                        </span>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category.features.map((f, i) => (
                          <span
                            key={i}
                            className="inline-flex items-start gap-1.5 px-3 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm"
                          >
                            <span className="material-symbols-outlined text-xs mt-0.5 shrink-0">
                              check_circle
                            </span>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Industries & Applications */}
                  {category.industries && category.industries.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-yellow-500">
                          factory
                        </span>
                        Key Industries & Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.industries.map((app, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm"
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

                  {/* Sub-Categories Dropdown (Moved Outside) */}
                </div>
              </div>
              
              {/* Full Width Sub-Categories Dropdown (only when no useCases — avoids redundancy) */}
              {category.subCategories && category.subCategories.length > 0 && !(category.useCases && category.useCases.length > 0) && (
                <AccordionSection 
                  title="Explore Products" 
                  icon="list" 
                  open={subCatOpen} 
                  onToggle={() => setSubCatOpen(!subCatOpen)}
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6">
                    {category.subCategories.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              )}

              {/* Full Width Applicable Standards Dropdown */}
              {category.standards && category.standards.length > 0 && (
                <AccordionSection 
                  title="Applicable Standards" 
                  icon="verified_user" 
                  open={standardsOpen} 
                  onToggle={() => setStandardsOpen(!standardsOpen)}
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                    {category.standards.map((std, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                        {std}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              )}

              {/* Full Width Use Cases & Standards Dropdown */}
              {category.useCases && category.useCases.length > 0 && (
                <AccordionSection 
                  title="Product Specifications & Standards" 
                  icon="verified_user" 
                  open={useCasesOpen} 
                  onToggle={() => setUseCasesOpen(!useCasesOpen)}
                >
                  <div className={`grid grid-cols-1 gap-4 ${category.useCases.length > 1 ? 'md:grid-cols-2' : ''}`}>
                    {category.useCases.map((uc, i) => (
                      <div key={i} className="border border-slate-200 rounded-sm bg-white overflow-hidden hover:shadow-sm transition-shadow">
                        {/* Use Case Header */}
                        <div className="flex items-center gap-2.5 px-4 py-3 bg-slate-800">
                          <span className="material-symbols-outlined text-sm text-yellow-400">category</span>
                          <h5 className="text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-white">
                            {uc.name}
                          </h5>
                        </div>

                        <div className="p-4 space-y-3">
                          {/* Product Types */}
                          {uc.products && uc.products.length > 0 && (
                            <div>
                              <p className="text-[10px] font-heading font-bold uppercase tracking-[0.12em] text-slate-400 mb-2 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-xs text-slate-400">inventory_2</span>
                                Product Types
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {uc.products.map((p, j) => (
                                  <span key={j} className="inline-flex items-center px-2.5 py-1 bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-sans rounded-sm">
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Standards & Certifications */}
                          {uc.standards && uc.standards.length > 0 && (
                            <div>
                              <p className="text-[10px] font-heading font-bold uppercase tracking-[0.12em] text-slate-400 mb-2 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-xs text-emerald-500">verified</span>
                                Certifications
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-1.5">
                                {uc.standards.map((std, j) => {
                                  const isObj = typeof std === 'object' && std !== null && 'label' in std;
                                  const label = isObj ? (std as { label: string; datasheetUrl: string }).label : (std as string);
                                  const url = isObj ? (std as { label: string; datasheetUrl: string }).datasheetUrl : null;
                                  return (
                                    <div key={j} className="flex items-start gap-2 text-[12px] leading-snug group/cert">
                                      <span className="material-symbols-outlined text-xs text-emerald-400 mt-0.5 shrink-0">
                                        check_circle
                                      </span>
                                      {url ? (
                                        <a
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-2 transition-colors duration-200 cursor-pointer inline-flex items-center gap-1"
                                          title={`View datasheet: ${label}`}
                                        >
                                          {label}
                                          <span className="material-symbols-outlined text-[10px] text-blue-500 opacity-0 group-hover/cert:opacity-100 transition-opacity">open_in_new</span>
                                        </a>
                                      ) : (
                                        <span className="text-slate-600">{label}</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* No Standards Note */}
                          {(!uc.standards || uc.standards.length === 0) && (
                            <p className="text-[11px] text-slate-400 italic flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-xs">info</span>
                              General purpose — no specific certification required
                            </p>
                          )}
                        </div>
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

/* ── Helper: resolve label and categories ─────────────────────── */
function getCategoryConfig(categoryKey: string): {
  label: string;
  categories: WeldingMainCategory[];
} {
  switch (categoryKey) {
    case "consumables":
      return { label: "Consumables", categories: CONSUMABLE_CATEGORIES };
    case "automation":
      return { label: "Automation", categories: AUTOMATION_CATEGORIES };
    case "safety":
      return { label: "Safety & PPE", categories: SAFETY_CATEGORIES };
    case "accessories":
      return { label: "Accessories & Tools", categories: ACCESSORIES_CATEGORIES };
    default:
      return { label: "Products", categories: [] };
  }
}

/* ── Main Catalog Component ──────────────────────────────────── */
const WeldingProductCatalog: React.FC<WeldingProductCatalogProps> = ({ categoryKey }) => {
  const { label, categories } = getCategoryConfig(categoryKey);
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  useEffect(() => {
    setOpenCardId(null);
  }, [categoryKey]);

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container py-6 md:py-8 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
              {label}
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
            <span className="text-sm text-slate-500 font-sans mt-3 block">
              {categories.length} {categories.length === 1 ? "category" : "categories"}
            </span>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 group shrink-0">
            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
              download
            </span>
            Download Technical Catalog
          </button>
        </div>

        {/* Vertical list of expandable category cards */}
        <div className="flex flex-col gap-4">
          {categories.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-slate-50">
              <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">
                inventory_2
              </span>
              <p className="text-gray-500 font-sans">Products coming soon.</p>
            </div>
          ) : (
            categories.map((cat, idx) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                index={idx}
                isOpen={openCardId === cat.id}
                onToggle={() =>
                  setOpenCardId((prev) => (prev === cat.id ? null : cat.id))
                }
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default WeldingProductCatalog;

/* ═══════════════════════════════════════════════════════════════
   COMMENTED OUT: Original Consumables Product List Implementation
   
   The following code rendered individual filler metal products
   with expandable cards showing conformance tables, mechanical
   properties, wire composition, and operating procedures.
   
   To re-enable, uncomment the imports at the top and restore
   the ProductCard and AccordionSection components below.
   ═══════════════════════════════════════════════════════════════

// AccordionSection component for expandable product details
const AccordionSection: React.FC<{
  title: string; icon: string; open: boolean; onToggle: () => void; children: React.ReactNode;
}> = ({ title, icon, open, onToggle, children }) => (
  <div className="px-6 md:px-8 pb-2">
    <button onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className="w-full flex items-center justify-between py-4 border-t border-slate-200 cursor-pointer group">
      <h4 className="text-[13px] font-heading font-bold uppercase tracking-[0.15em] text-slate-900 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-yellow-500">{icon}</span>
        {title}
      </h4>
      <span className={`material-symbols-outlined text-lg text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
        expand_more
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div key="acc" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ProductCard component for individual filler metal products
const ProductCard: React.FC<{ product: FillerMetalProduct; index: number; isOpen: boolean; onToggle: () => void }> = ({ product, index, isOpen, onToggle }) => {
  // ... full product card implementation with conformance, mechanical properties,
  // wire composition, and operating procedures accordions
};

// Original catalog rendering with product lists:
// const products = activeCategory
//   ? activeCategory.subCategories.flatMap(sub => sub.products)
//   : [];
// 
// products.map((product, idx) => (
//   <ProductCard key={product.id} product={product} index={idx}
//     isOpen={openCardId === product.id}
//     onToggle={() => setOpenCardId(prev => prev === product.id ? null : product.id)} />
// ))

═══════════════════════════════════════════════════════════════ */
