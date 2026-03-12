import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ProductHero, ProductCategoryNav, ProductSidebar, ProductMobileMenu,
  ProductQABanner, ProductCTA, CONTAINER, DETAIL_VARIANTS, slugify,
} from "../../components/product";
import { PRODUCTS, CATEGORIES, SPEC_FIELDS, QA_ITEMS, type CategoryKey } from "./data/wireCablesData";

const WireCables: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const c = searchParams.get("category");
    if (c) { const found = CATEGORIES.find((cat) => cat.key === c); if (found) return found.key; }
    return "power";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;
  const categoryProducts = useMemo(() =>
    PRODUCTS.filter((p) => (activeCategory.match as readonly string[]).includes(p.Category)),
    [activeCategory]
  );

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

  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter((f) => { const v = activeProduct[f.key]; return typeof v === "string" && v.trim().length > 0; });
  }, [activeProduct]);

  const sidebarProducts = useMemo(() => categoryProducts.map((p) => ({ name: p["Product Name"], subLabel: p["Sub-Category"], thumbnail: p.thumbnail })), [categoryProducts]);

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero backgroundImage="/wire&cable/wireCables.jpg" title="Wire & Cables" subtitle="Powering Every Project." description="From low-voltage building wires to 220 kV EHV power cables — BIS certified, fire-rated, and engineered for India's most critical infrastructure." breadcrumbLabel="Wire & Cables" ctaLabel="Download Complete Cable Catalog" />
      <ProductCategoryNav categories={CATEGORIES} activeKey={activeCategoryKey} onSelect={selectCategory} certBadge="BIS / IEC Certified" />

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
                      <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">{activeProduct["Sub-Category"]}</span>
                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight mt-3">{activeProduct["Product Name"]}</h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    <div className="mb-10"><p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p></div>

                    {activeSpecs.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>Technical Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSpecs.map((spec) => (
                            <div key={spec.key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5"><span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">{spec.icon}</span><span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{spec.label}</span></div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">{activeProduct[spec.key] as string}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeProduct.Applications && activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">factory</span>Key Applications</h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Applications.map((app, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"><span className="material-symbols-outlined text-sm">check_circle</span>{app}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm"><span className="material-symbols-outlined text-lg">download</span>Download Datasheet</button>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"><span className="material-symbols-outlined text-lg">description</span>Request Test Report</button>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"><span className="material-symbols-outlined text-lg">request_quote</span>Get Quote</Link>
                    </div>

                    {activeProduct.applicationImage ? (
                      <div className="mb-4">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">image</span>Application in Action</h3>
                        <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[220px] lg:h-[260px] xl:h-[340px] group">
                          <img src={activeProduct.applicationImage} alt={`${activeProduct["Product Name"]} application`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-white/90 bg-slate-900/50 backdrop-blur-sm px-3 py-1.5 rounded-sm"><span className="material-symbols-outlined text-sm text-yellow-500">factory</span>{activeProduct.Application?.split(",")[0]?.trim() || "Industrial Application"}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-slate-200 rounded-sm h-[200px] md:h-[220px] lg:h-[260px] flex flex-col items-center justify-center text-slate-300 group hover:border-slate-300 transition-colors">
                        <span className="material-symbols-outlined text-6xl mb-4 group-hover:text-yellow-500/40 transition-colors">cable</span>
                        <p className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400">Application Image</p>
                        <p className="text-xs font-sans text-slate-400 mt-1">{activeProduct["Product Name"]}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ProductQABanner title="Certified to the Highest Standards" items={QA_ITEMS} />
      <ProductCTA title="Need a Custom Cable Solution?" description="Our engineering team can assist with cable sizing, fire-rating selection, and project-specific requirements. Submit your BOQ for a comprehensive supply schedule within 24 hours." ctaLabel="Upload BOQ / Request Quote" ctaIcon="upload_file" />
    </div>
  );
};

export default WireCables;
