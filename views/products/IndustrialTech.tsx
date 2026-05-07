"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParamsState as useSearchParams } from "@/lib/useSearchParamsState";
import { motion, AnimatePresence } from "framer-motion";
import {
  ProductHero, ProductCategoryNav, ProductSidebar, ProductMobileMenu,
  ProductQABanner, ProductCTA, CONTAINER, DETAIL_VARIANTS, slugify,
} from "../../components/product";
import { PRODUCTS, CATEGORIES, QA_ITEMS, type CategoryKey } from "@/data/industrialTechData";

const IndustrialTech: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const c = searchParams.get("category");
    if (c) { const found = CATEGORIES.find((cat) => cat.key === c); if (found) return found.key; }
    return "plc";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;
  const categoryProducts = useMemo(() => PRODUCTS.filter((p) => p.Category === activeCategory.match), [activeCategory]);

  const activeProductIdx = useMemo(() => {
    const param = searchParams.get("product");
    if (param) { const idx = categoryProducts.findIndex((p) => slugify(p["Product Name"]) === param); if (idx >= 0) return idx; }
    return 0;
  }, [searchParams, categoryProducts]);

  const activeProduct = categoryProducts[activeProductIdx] || categoryProducts[0];

  function selectCategory(key: string) { setSearchParams({ category: key }); setMobileMenuOpen(false); }
  function selectProduct(idx: number) {
    const p = categoryProducts[idx];
    if (p) setSearchParams({ category: activeCategoryKey, product: slugify(p["Product Name"]) });
    setMobileMenuOpen(false);
  }

  const specEntries = useMemo(() => activeProduct ? Object.entries(activeProduct.Specs) : [], [activeProduct]);
  const sidebarProducts = useMemo(() => categoryProducts.map((p) => ({ name: p["Product Name"], subLabel: p["Sub-Category"], thumbnail: p.thumbnail })), [categoryProducts]);

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero backgroundImage="/industrialTech/Automation-Technologies.jpg" title="Industrial Tech" subtitle="Smart Automation Solutions." description="PLC systems, VFD drives, sensors, switchgear, and IoT platforms — complete automation and power distribution solutions for Industry 4.0." breadcrumbLabel="Industrial Tech" />
      <ProductCategoryNav categories={CATEGORIES} activeKey={activeCategoryKey} onSelect={selectCategory} certBadge="Authorised Partner" />

      <section className="bg-white border-b border-slate-100">
        <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
          <ProductMobileMenu open={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)} activeLabel={activeProduct ? activeProduct["Product Name"] : "Select Product"} products={sidebarProducts} activeIdx={activeProductIdx} onSelect={selectProduct} />
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar activeCategory={activeCategory} products={sidebarProducts} activeIdx={activeProductIdx} onSelect={selectProduct} />
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div key={activeProduct["Product Name"]} variants={DETAIL_VARIANTS} initial="initial" animate="animate" exit="exit">
                    <div className="mb-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">{activeProduct.Category}</span>
                            <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">{activeProduct["Sub-Category"]}</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">{activeProduct["Product Name"]}</h2>
                          <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                        </div>
                        <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all duration-300 group shrink-0">
                          <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">
                            download
                          </span>
                          Download Product Guide
                        </button>
                      </div>
                    </div>

                    <div className="mb-10"><p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p></div>

                    {specEntries.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>Technical Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {specEntries.map(([key, val]) => (
                            <div key={key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5"><span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">settings</span><span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{key}</span></div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">apps</span>Applications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProduct.Applications.map((app, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-sm border border-slate-100"><span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">check_circle</span><span className="text-sm font-sans text-slate-700 leading-relaxed">{app}</span></div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm"><span className="material-symbols-outlined text-lg">download</span>Download Datasheet</button>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"><span className="material-symbols-outlined text-lg">request_quote</span>Get Quote</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ProductQABanner title="Your Automation Partner" items={QA_ITEMS} />
      <ProductCTA title="Need an Automation Solution?" description="Share your requirements for a customised automation proposal with system architecture and BOM." ctaLabel="Request Quote" />
    </div>
  );
};

export default IndustrialTech;
