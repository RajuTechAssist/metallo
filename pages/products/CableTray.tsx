import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ProductHero, ProductCategoryNav, ProductSidebar, ProductMobileMenu,
  ProductQABanner, ProductCTA, CONTAINER, DETAIL_VARIANTS, slugify,
} from "../../components/product";

/* ═══════════════════════════════════════════════════════════════
   CABLE TRAY — PRODUCT DATA
   ═══════════════════════════════════════════════════════════════ */

interface TrayProduct {
  Category: string; "Sub-Category": string; "Product Name": string; Description: string;
  Material: string; Standards: string; Application: string; thumbnail: string;
  Finish?: string; Width?: string; Height?: string; Thickness?: string; Length?: string;
  LoadCapacity?: string; Coating?: string; Type?: string;
  Applications?: string[]; applicationImage?: string;
}

const PRODUCTS: TrayProduct[] = [
  { Category: "Ladder Trays", "Sub-Category": "GI Ladder Tray", "Product Name": "GI Ladder Type Cable Tray", Description: "Heavy-duty hot-dip galvanised ladder trays with side rails and rungs. Ideal for long straight runs carrying heavy power cables. Excellent ventilation and heat dissipation for high-current applications.", Material: "Galvanised Iron (GI), MS Hot-Dip Galvanised", Standards: "IEC 61537, IS 16230, NEMA VE-1", Application: "Power plants, petrochemical, heavy industrial cable routing", thumbnail: "/cable Trays/Cable_Trays.jpg", Width: "50mm to 900mm", Height: "25mm to 150mm", Thickness: "1.2mm to 3.0mm (Sheet Metal)", Length: "2.4m / 3.0m standard, custom lengths", LoadCapacity: "Up to 150 kg/m (based on span & width)", Coating: "Hot-Dip Galvanised (HDG) per IS 2629 / ISO 1461", Applications: ["Power Plants", "Oil & Gas", "Heavy Industry", "Substations"], applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp" },
  { Category: "Ladder Trays", "Sub-Category": "SS Ladder Tray", "Product Name": "SS 304/316 Ladder Tray", Description: "Stainless steel ladder trays for corrosive environments — chemical plants, marine installations, and food processing areas. Grade 316 provides superior chloride resistance.", Material: "SS 304 / SS 316 / SS 316L", Standards: "IEC 61537, IS 16230, NEMA VE-1", Application: "Chemical plants, marine/offshore, food processing, pharma clean rooms", thumbnail: "/cable Trays/Cable_Trays.jpg", Width: "50mm to 600mm", Height: "25mm to 100mm", Thickness: "1.2mm to 2.0mm", Length: "2.4m / 3.0m standard", Coating: "Mill Finish / Electropolished", Applications: ["Chemical Plants", "Marine & Offshore", "Food Processing", "Pharma"], applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp" },
  { Category: "Ladder Trays", "Sub-Category": "Aluminium Ladder Tray", "Product Name": "Aluminium Ladder Tray", Description: "Lightweight aluminium ladder trays for environments requiring light weight and corrosion resistance — petrochemical, data centres, and commercial buildings.", Material: "Aluminium Alloy 6063 / 6061", Standards: "IEC 61537, NEMA VE-1", Application: "Petrochemical, data centres, commercial buildings, marine", thumbnail: "/cable Trays/Cable_Trays.jpg", Width: "100mm to 600mm", Height: "25mm to 100mm", Thickness: "1.5mm to 2.5mm", Length: "3.0m standard", Coating: "Anodised / Mill Finish", Applications: ["Data Centres", "Petrochemical", "Commercial Buildings", "Marine"], applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp" },
  { Category: "Perforated Trays", "Sub-Category": "GI Perforated", "Product Name": "GI Perforated Cable Tray", Description: "Ventilated trough-style trays with perforated bottom providing continuous cable support with adequate airflow. Perfect for control and instrumentation cable routing.", Material: "Galvanised Iron (GI)", Standards: "IEC 61537, IS 16230, UL 2533", Application: "Control cable routing, instrumentation, commercial buildings, panel rooms", thumbnail: "/cable Trays/Cable-Tray-Perforated.jpg", Width: "50mm to 900mm", Height: "25mm to 100mm", Thickness: "1.2mm to 2.0mm", Length: "2.4m / 3.0m standard", Coating: "Hot-Dip Galvanised / Pre-Galvanised / Powder Coated", Applications: ["Panel Rooms", "Instrumentation", "Commercial Buildings", "IT Infrastructure"], applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp" },
  { Category: "Perforated Trays", "Sub-Category": "SS Perforated", "Product Name": "SS Perforated Cable Tray", Description: "Stainless steel perforated trays for clean environments. Offers cable support with ventilation in pharmaceutical, food, and chemical processing facilities.", Material: "SS 304 / SS 316", Standards: "IEC 61537, IS 16230", Application: "Pharma, food processing, chemical plants, clean rooms", thumbnail: "/cable Trays/Cable-Tray-Perforated.jpg", Width: "50mm to 600mm", Height: "25mm to 75mm", Thickness: "1.2mm to 2.0mm", Length: "2.4m / 3.0m", Coating: "Mill Finish / Electropolished", Applications: ["Pharma", "Food Processing", "Chemical Plants", "Clean Rooms"], applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp" },
  { Category: "Wire Mesh Trays", "Sub-Category": "Mesh Tray", "Product Name": "Wire Mesh Cable Tray", Description: "Lightweight, open-weave mesh trays for data centres, commercial buildings, and telecom applications. Easy cable drop-outs and rapid installation with snap-on accessories.", Material: "Electro-Zinc / SS 304 / Epoxy Coated Steel", Standards: "IEC 61537, NEMA VE-1, UL 2533", Application: "Data centres, telecom, commercial offices, server rooms", thumbnail: "/cable Trays/cableTrays1.jpg", Width: "50mm to 600mm", Height: "25mm to 100mm", Thickness: "4mm / 5mm / 6mm wire diameter", Length: "3.0m standard", Coating: "Electro-Zinc / Hot-Dip Galvanised / Epoxy Coated", Type: "Basket Tray / Wire Mesh", Applications: ["Data Centres", "Telecom", "Commercial Offices", "Server Rooms"], applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp" },
  { Category: "Solid & Channel Trays", "Sub-Category": "Solid Bottom", "Product Name": "Solid Bottom Cable Tray", Description: "Fully enclosed solid-bottom trays for sensitive cables requiring EMI/RFI shielding. Used in pharmaceutical plants, data centres, and clean-room environments.", Material: "Galvanised Iron (GI) / SS 304", Standards: "IEC 61537, IS 16230, NEMA VE-1", Application: "Pharma clean rooms, data centres, EMI/RFI sensitive areas, control rooms", thumbnail: "/cable Trays/cableTrays2.jpg", Width: "50mm to 600mm", Height: "25mm to 100mm", Thickness: "1.2mm to 2.0mm", Length: "2.4m / 3.0m standard", Coating: "Hot-Dip Galvanised / Powder Coated", Applications: ["Clean Rooms", "Data Centres", "Control Rooms", "Pharma"], applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp" },
  { Category: "Fittings & Accessories", "Sub-Category": "Horizontal Bends", "Product Name": "Cable Tray Bends (30°/45°/60°/90°)", Description: "Pre-fabricated horizontal and vertical bends for direction changes in cable tray runs. Available in all tray types — ladder, perforated, and solid bottom.", Material: "GI / SS 304 / Aluminium (matching tray material)", Standards: "IEC 61537, IS 16230", Application: "Direction changes in cable routing, riser connections", thumbnail: "/cable Trays/cableTrays1.jpg", Width: "Matching tray width (50mm to 900mm)", Type: "Horizontal Bend, Vertical Bend (Inside/Outside), Riser", Coating: "Matching tray finish (HDG / SS / Powder Coated)", Applications: ["Cable Routing", "Direction Changes", "Riser Connections"], applicationImage: "/cable Trays/Cabletrays.jpeg" },
  { Category: "Fittings & Accessories", "Sub-Category": "Tees & Crosses", "Product Name": "Tee & Cross Fittings", Description: "Branch-off fittings for splitting cable tray runs. Available in equal and unequal configurations for all tray types.", Material: "GI / SS 304 / Aluminium", Standards: "IEC 61537, IS 16230", Application: "Branch connections, distribution points", thumbnail: "/cable Trays/cableTrays1.jpg", Width: "Matching tray width", Type: "Equal Tee, Unequal Tee, Cross", Coating: "Matching tray finish", Applications: ["Branch Connections", "Distribution Points", "Junction Points"], applicationImage: "/cable Trays/Cabletrays.jpeg" },
  { Category: "Fittings & Accessories", "Sub-Category": "Reducers & Couplers", "Product Name": "Reducers, Couplers & Covers", Description: "Reducers for transitioning between tray widths, couplers for joining tray sections, and covers for protection from dust and debris.", Material: "GI / SS 304 / Aluminium", Standards: "IEC 61537, IS 16230", Application: "Tray width transitions, section joining, cable protection", thumbnail: "/cable Trays/cableTrays2.jpg", Type: "Centre Reducer, Left/Right Reducer, Coupler, Tray Cover", Coating: "Matching tray finish", Applications: ["Width Transitions", "Section Joining", "Cable Protection"], applicationImage: "/cable Trays/Cabletrays.jpeg" },
  { Category: "Fittings & Accessories", "Sub-Category": "Supports & Brackets", "Product Name": "Support Brackets & Clamps", Description: "Wall brackets, cantilever arms, ceiling hangers, channel supports (Unistrut), and tray clamps for secure cable tray installation.", Material: "MS Hot-Dip Galvanised / SS 304", Standards: "IEC 61537, IS 16230", Application: "Wall mounting, ceiling suspension, channel support systems", thumbnail: "/cable Trays/cableTrays2.jpg", Type: "Wall Bracket, Cantilever Arm, Ceiling Hanger, Channel (Unistrut), Tray Clamp", Coating: "Hot-Dip Galvanised / Powder Coated", Applications: ["Wall Mounting", "Ceiling Suspension", "Channel Support"], applicationImage: "/cable Trays/Cabletrays.jpeg" },
  { Category: "Raceways & Ducts", "Sub-Category": "Cable Raceways", "Product Name": "Cable Raceways & Trunking", Description: "Slotted and solid wall cable raceways for clean, concealed cable routing in commercial interiors, control panels, and industrial switchgear rooms.", Material: "PVC / GI / Aluminium", Standards: "UL 5A, IEC 61084, IS 16230", Application: "Control panels, switchgear rooms, commercial interiors", thumbnail: "/cable Trays/galvanized-earthing-strips-and-flats.webp", Width: "25mm to 150mm", Height: "25mm to 100mm", Length: "2.0m standard", Type: "Slotted Duct, Solid Duct, Wire Duct, Perforated Raceway", Coating: "UV Resistant (PVC), Galvanised (GI), Anodised (Al)", Applications: ["Control Panels", "Switchgear Rooms", "Commercial Interiors", "IT Wiring"], applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp" },
  { Category: "Raceways & Ducts", "Sub-Category": "Earthing Strips", "Product Name": "GI Earthing Strips & Flats", Description: "Galvanised iron earthing strips and flats for grounding and bonding of cable tray systems. Essential for electrical safety and lightning protection.", Material: "GI Flat / GI Strip / Copper Bonded", Standards: "IS 3043, IEC 62305, IEEE 80", Application: "Earthing, grounding, bonding, lightning protection", thumbnail: "/cable Trays/galvanized-earthing-strips-and-flats.webp", Width: "12mm to 75mm", Thickness: "3mm to 10mm", Length: "3.0m / 6.0m standard", Coating: "Hot-Dip Galvanised", Applications: ["Earthing", "Grounding", "Bonding", "Lightning Protection"], applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp" },
];

const CATEGORIES = [
  { key: "ladder", label: "Ladder Trays", icon: "grid_view", match: "Ladder Trays" },
  { key: "perforated", label: "Perforated Trays", icon: "view_comfy", match: "Perforated Trays" },
  { key: "mesh", label: "Wire Mesh Trays", icon: "grid_on", match: "Wire Mesh Trays" },
  { key: "solid", label: "Solid & Channel", icon: "view_stream", match: "Solid & Channel Trays" },
  { key: "fittings", label: "Fittings & Accessories", icon: "settings", match: "Fittings & Accessories" },
  { key: "raceways", label: "Raceways & Ducts", icon: "route", match: "Raceways & Ducts" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

const SPEC_FIELDS: { key: keyof TrayProduct; label: string; icon: string }[] = [
  { key: "Sub-Category", label: "Sub-Category", icon: "category" },
  { key: "Material", label: "Material", icon: "diamond" },
  { key: "Standards", label: "Standards", icon: "verified" },
  { key: "Width", label: "Width", icon: "swap_horiz" },
  { key: "Height", label: "Height", icon: "height" },
  { key: "Thickness", label: "Thickness", icon: "straighten" },
  { key: "Length", label: "Length", icon: "straighten" },
  { key: "LoadCapacity", label: "Load Capacity", icon: "fitness_center" },
  { key: "Coating", label: "Coating / Finish", icon: "auto_awesome" },
  { key: "Type", label: "Type / Variant", icon: "build" },
  { key: "Application", label: "Application", icon: "factory" },
];

const QA_ITEMS = [
  { icon: "verified", title: "IS / IEC Certified", desc: "Compliant with IS 16230, IEC 61537, and NEMA VE-1." },
  { icon: "shield", title: "Corrosion Resistant", desc: "Hot-dip galvanised, SS, and powder-coated options." },
  { icon: "straighten", title: "Custom Fabrication", desc: "Bespoke sizes, widths, and finishes to order." },
  { icon: "local_shipping", title: "Pan-India Supply", desc: "Warehouse stock + project-direct dispatch." },
];

const CableTray: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const c = searchParams.get("category");
    if (c) { const found = CATEGORIES.find((cat) => cat.key === c); if (found) return found.key; }
    return "ladder";
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

  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter((f) => { const v = activeProduct[f.key]; return typeof v === "string" && v.trim().length > 0; });
  }, [activeProduct]);

  const sidebarProducts = useMemo(() => categoryProducts.map((p) => ({
    name: p["Product Name"], subLabel: p["Sub-Category"], thumbnail: p.thumbnail,
  })), [categoryProducts]);

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <ProductHero
        backgroundImage="/cable Trays/Cabletrays.jpeg"
        title="Cable Tray Systems"
        subtitle="Engineered Cable Management."
        description="GI, stainless steel & aluminium cable trays — ladder, perforated, mesh & solid bottom — IS / IEC certified, custom fabricated for power plants, data centres & industrial installations."
        breadcrumbLabel="Cable Tray Systems"
        ctaLabel="Download Cable Tray Catalog"
      />
      <ProductCategoryNav categories={CATEGORIES} activeKey={activeCategoryKey} onSelect={selectCategory} certBadge="IS / IEC / NEMA Certified" />

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

                    <div className="relative overflow-hidden rounded-sm mb-8 h-[200px] md:h-[240px] lg:h-[280px] xl:h-[340px] group">
                      <img src={activeProduct.applicationImage || activeProduct.thumbnail} alt={activeProduct["Product Name"]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5"><span className="text-xs font-heading font-bold uppercase tracking-widest text-white/80">{activeProduct["Product Name"]}</span></div>
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
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2"><span className="material-symbols-outlined text-sm text-yellow-500">factory</span>Key Industries & Applications</h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Applications.map((app, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"><span className="material-symbols-outlined text-sm">check_circle</span>{app}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm"><span className="material-symbols-outlined text-lg">download</span>Download Datasheet</button>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"><span className="material-symbols-outlined text-lg">request_quote</span>Get Quote</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ProductQABanner title="Certified Cable Management Systems" items={QA_ITEMS} />
      <ProductCTA title="Need a Custom Cable Tray Solution?" description="Our engineering team can assist with tray sizing, material selection, load calculations, and project-specific configurations. Get a response within 24 hours." ctaLabel="Request Quote" />
    </div>
  );
};

export default CableTray;
