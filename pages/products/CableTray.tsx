import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   CABLE TRAY — MASTER-DETAIL INTERFACE
   Left: Vertical Product Menu  |  Right: Detailed Specifications
   ═══════════════════════════════════════════════════════════════ */

interface TrayProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  Material: string;
  Standards: string;
  Application: string;
  thumbnail: string;
  Finish?: string;
  Width?: string;
  Height?: string;
  Thickness?: string;
  Length?: string;
  LoadCapacity?: string;
  Coating?: string;
  Type?: string;
  Applications?: string[];
  applicationImage?: string;
}

const PRODUCTS: TrayProduct[] = [
  /* ── Ladder Type ───────────────────────────────────────────── */
  {
    Category: "Ladder Trays", "Sub-Category": "GI Ladder Tray",
    "Product Name": "GI Ladder Type Cable Tray",
    Description: "Heavy-duty hot-dip galvanised ladder trays with side rails and rungs. Ideal for long straight runs carrying heavy power cables. Excellent ventilation and heat dissipation for high-current applications.",
    Material: "Galvanised Iron (GI), MS Hot-Dip Galvanised",
    Standards: "IEC 61537, IS 16230, NEMA VE-1",
    Application: "Power plants, petrochemical, heavy industrial cable routing",
    thumbnail: "/cable Trays/Cable_Trays.jpg",
    Width: "50mm to 900mm",
    Height: "25mm to 150mm",
    Thickness: "1.2mm to 3.0mm (Sheet Metal)",
    Length: "2.4m / 3.0m standard, custom lengths",
    LoadCapacity: "Up to 150 kg/m (based on span & width)",
    Coating: "Hot-Dip Galvanised (HDG) per IS 2629 / ISO 1461",
    Applications: ["Power Plants", "Oil & Gas", "Heavy Industry", "Substations"],
    applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp",
  },
  {
    Category: "Ladder Trays", "Sub-Category": "SS Ladder Tray",
    "Product Name": "SS 304/316 Ladder Tray",
    Description: "Stainless steel ladder trays for corrosive environments — chemical plants, marine installations, and food processing areas. Grade 316 provides superior chloride resistance.",
    Material: "SS 304 / SS 316 / SS 316L",
    Standards: "IEC 61537, IS 16230, NEMA VE-1",
    Application: "Chemical plants, marine/offshore, food processing, pharma clean rooms",
    thumbnail: "/cable Trays/Cable_Trays.jpg",
    Width: "50mm to 600mm",
    Height: "25mm to 100mm",
    Thickness: "1.2mm to 2.0mm",
    Length: "2.4m / 3.0m standard",
    Coating: "Mill Finish / Electropolished",
    Applications: ["Chemical Plants", "Marine & Offshore", "Food Processing", "Pharma"],
    applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp",
  },
  {
    Category: "Ladder Trays", "Sub-Category": "Aluminium Ladder Tray",
    "Product Name": "Aluminium Ladder Tray",
    Description: "Lightweight aluminium ladder trays for environments requiring light weight and corrosion resistance — petrochemical, data centres, and commercial buildings.",
    Material: "Aluminium Alloy 6063 / 6061",
    Standards: "IEC 61537, NEMA VE-1",
    Application: "Petrochemical, data centres, commercial buildings, marine",
    thumbnail: "/cable Trays/Cable_Trays.jpg",
    Width: "100mm to 600mm",
    Height: "25mm to 100mm",
    Thickness: "1.5mm to 2.5mm",
    Length: "3.0m standard",
    Coating: "Anodised / Mill Finish",
    Applications: ["Data Centres", "Petrochemical", "Commercial Buildings", "Marine"],
    applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp",
  },

  /* ── Perforated ────────────────────────────────────────────── */
  {
    Category: "Perforated Trays", "Sub-Category": "GI Perforated",
    "Product Name": "GI Perforated Cable Tray",
    Description: "Ventilated trough-style trays with perforated bottom providing continuous cable support with adequate airflow. Perfect for control and instrumentation cable routing.",
    Material: "Galvanised Iron (GI)",
    Standards: "IEC 61537, IS 16230, UL 2533",
    Application: "Control cable routing, instrumentation, commercial buildings, panel rooms",
    thumbnail: "/cable Trays/Cable-Tray-Perforated.jpg",
    Width: "50mm to 900mm",
    Height: "25mm to 100mm",
    Thickness: "1.2mm to 2.0mm",
    Length: "2.4m / 3.0m standard",
    Coating: "Hot-Dip Galvanised / Pre-Galvanised / Powder Coated",
    Applications: ["Panel Rooms", "Instrumentation", "Commercial Buildings", "IT Infrastructure"],
    applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp",
  },
  {
    Category: "Perforated Trays", "Sub-Category": "SS Perforated",
    "Product Name": "SS Perforated Cable Tray",
    Description: "Stainless steel perforated trays for clean environments. Offers cable support with ventilation in pharmaceutical, food, and chemical processing facilities.",
    Material: "SS 304 / SS 316",
    Standards: "IEC 61537, IS 16230",
    Application: "Pharma, food processing, chemical plants, clean rooms",
    thumbnail: "/cable Trays/Cable-Tray-Perforated.jpg",
    Width: "50mm to 600mm",
    Height: "25mm to 75mm",
    Thickness: "1.2mm to 2.0mm",
    Length: "2.4m / 3.0m",
    Coating: "Mill Finish / Electropolished",
    Applications: ["Pharma", "Food Processing", "Chemical Plants", "Clean Rooms"],
    applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp",
  },

  /* ── Wire Mesh ─────────────────────────────────────────────── */
  {
    Category: "Wire Mesh Trays", "Sub-Category": "Mesh Tray",
    "Product Name": "Wire Mesh Cable Tray",
    Description: "Lightweight, open-weave mesh trays for data centres, commercial buildings, and telecom applications. Easy cable drop-outs and rapid installation with snap-on accessories.",
    Material: "Electro-Zinc / SS 304 / Epoxy Coated Steel",
    Standards: "IEC 61537, NEMA VE-1, UL 2533",
    Application: "Data centres, telecom, commercial offices, server rooms",
    thumbnail: "/cable Trays/cableTrays1.jpg",
    Width: "50mm to 600mm",
    Height: "25mm to 100mm",
    Thickness: "4mm / 5mm / 6mm wire diameter",
    Length: "3.0m standard",
    Coating: "Electro-Zinc / Hot-Dip Galvanised / Epoxy Coated",
    Type: "Basket Tray / Wire Mesh",
    Applications: ["Data Centres", "Telecom", "Commercial Offices", "Server Rooms"],
    applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp",
  },

  /* ── Solid / Channel ───────────────────────────────────────── */
  {
    Category: "Solid & Channel Trays", "Sub-Category": "Solid Bottom",
    "Product Name": "Solid Bottom Cable Tray",
    Description: "Fully enclosed solid-bottom trays for sensitive cables requiring EMI/RFI shielding. Used in pharmaceutical plants, data centres, and clean-room environments.",
    Material: "Galvanised Iron (GI) / SS 304",
    Standards: "IEC 61537, IS 16230, NEMA VE-1",
    Application: "Pharma clean rooms, data centres, EMI/RFI sensitive areas, control rooms",
    thumbnail: "/cable Trays/cableTrays2.jpg",
    Width: "50mm to 600mm",
    Height: "25mm to 100mm",
    Thickness: "1.2mm to 2.0mm",
    Length: "2.4m / 3.0m standard",
    Coating: "Hot-Dip Galvanised / Powder Coated",
    Applications: ["Clean Rooms", "Data Centres", "Control Rooms", "Pharma"],
    applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp",
  },

  /* ── Fittings & Accessories ────────────────────────────────── */
  {
    Category: "Fittings & Accessories", "Sub-Category": "Horizontal Bends",
    "Product Name": "Cable Tray Bends (30°/45°/60°/90°)",
    Description: "Pre-fabricated horizontal and vertical bends for direction changes in cable tray runs. Available in all tray types — ladder, perforated, and solid bottom.",
    Material: "GI / SS 304 / Aluminium (matching tray material)",
    Standards: "IEC 61537, IS 16230",
    Application: "Direction changes in cable routing, riser connections",
    thumbnail: "/cable Trays/cableTrays1.jpg",
    Width: "Matching tray width (50mm to 900mm)",
    Type: "Horizontal Bend, Vertical Bend (Inside/Outside), Riser",
    Coating: "Matching tray finish (HDG / SS / Powder Coated)",
    Applications: ["Cable Routing", "Direction Changes", "Riser Connections"],
    applicationImage: "/cable Trays/Cabletrays.jpeg",
  },
  {
    Category: "Fittings & Accessories", "Sub-Category": "Tees & Crosses",
    "Product Name": "Tee & Cross Fittings",
    Description: "Branch-off fittings for splitting cable tray runs. Available in equal and unequal configurations for all tray types.",
    Material: "GI / SS 304 / Aluminium",
    Standards: "IEC 61537, IS 16230",
    Application: "Branch connections, distribution points",
    thumbnail: "/cable Trays/cableTrays1.jpg",
    Width: "Matching tray width",
    Type: "Equal Tee, Unequal Tee, Cross",
    Coating: "Matching tray finish",
    Applications: ["Branch Connections", "Distribution Points", "Junction Points"],
    applicationImage: "/cable Trays/Cabletrays.jpeg",
  },
  {
    Category: "Fittings & Accessories", "Sub-Category": "Reducers & Couplers",
    "Product Name": "Reducers, Couplers & Covers",
    Description: "Reducers for transitioning between tray widths, couplers for joining tray sections, and covers for protection from dust and debris.",
    Material: "GI / SS 304 / Aluminium",
    Standards: "IEC 61537, IS 16230",
    Application: "Tray width transitions, section joining, cable protection",
    thumbnail: "/cable Trays/cableTrays2.jpg",
    Type: "Centre Reducer, Left/Right Reducer, Coupler, Tray Cover",
    Coating: "Matching tray finish",
    Applications: ["Width Transitions", "Section Joining", "Cable Protection"],
    applicationImage: "/cable Trays/Cabletrays.jpeg",
  },
  {
    Category: "Fittings & Accessories", "Sub-Category": "Supports & Brackets",
    "Product Name": "Support Brackets & Clamps",
    Description: "Wall brackets, cantilever arms, ceiling hangers, channel supports (Unistrut), and tray clamps for secure cable tray installation.",
    Material: "MS Hot-Dip Galvanised / SS 304",
    Standards: "IEC 61537, IS 16230",
    Application: "Wall mounting, ceiling suspension, channel support systems",
    thumbnail: "/cable Trays/cableTrays2.jpg",
    Type: "Wall Bracket, Cantilever Arm, Ceiling Hanger, Channel (Unistrut), Tray Clamp",
    Coating: "Hot-Dip Galvanised / Powder Coated",
    Applications: ["Wall Mounting", "Ceiling Suspension", "Channel Support"],
    applicationImage: "/cable Trays/Cabletrays.jpeg",
  },

  /* ── Raceways & Ducts ──────────────────────────────────────── */
  {
    Category: "Raceways & Ducts", "Sub-Category": "Cable Raceways",
    "Product Name": "Cable Raceways & Trunking",
    Description: "Slotted and solid wall cable raceways for clean, concealed cable routing in commercial interiors, control panels, and industrial switchgear rooms.",
    Material: "PVC / GI / Aluminium",
    Standards: "UL 5A, IEC 61084, IS 16230",
    Application: "Control panels, switchgear rooms, commercial interiors",
    thumbnail: "/cable Trays/galvanized-earthing-strips-and-flats.webp",
    Width: "25mm to 150mm",
    Height: "25mm to 100mm",
    Length: "2.0m standard",
    Type: "Slotted Duct, Solid Duct, Wire Duct, Perforated Raceway",
    Coating: "UV Resistant (PVC), Galvanised (GI), Anodised (Al)",
    Applications: ["Control Panels", "Switchgear Rooms", "Commercial Interiors", "IT Wiring"],
    applicationImage: "/cable Trays/cable-trays-data-centres-IT-infrastructure.webp",
  },
  {
    Category: "Raceways & Ducts", "Sub-Category": "Earthing Strips",
    "Product Name": "GI Earthing Strips & Flats",
    Description: "Galvanised iron earthing strips and flats for grounding and bonding of cable tray systems. Essential for electrical safety and lightning protection.",
    Material: "GI Flat / GI Strip / Copper Bonded",
    Standards: "IS 3043, IEC 62305, IEEE 80",
    Application: "Earthing, grounding, bonding, lightning protection",
    thumbnail: "/cable Trays/galvanized-earthing-strips-and-flats.webp",
    Width: "12mm to 75mm",
    Thickness: "3mm to 10mm",
    Length: "3.0m / 6.0m standard",
    Coating: "Hot-Dip Galvanised",
    Applications: ["Earthing", "Grounding", "Bonding", "Lightning Protection"],
    applicationImage: "/cable Trays/cable-trays-power-plants-energy-facilities.webp",
  },
];

/* ── Categories ──────────────────────────────────────────────── */

const CATEGORIES = [
  { key: "ladder",      label: "Ladder Trays",          icon: "grid_view",     match: "Ladder Trays" },
  { key: "perforated",  label: "Perforated Trays",      icon: "view_comfy",    match: "Perforated Trays" },
  { key: "mesh",        label: "Wire Mesh Trays",       icon: "grid_on",       match: "Wire Mesh Trays" },
  { key: "solid",       label: "Solid & Channel",       icon: "view_stream",   match: "Solid & Channel Trays" },
  { key: "fittings",    label: "Fittings & Accessories", icon: "settings",     match: "Fittings & Accessories" },
  { key: "raceways",    label: "Raceways & Ducts",      icon: "route",         match: "Raceways & Ducts" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec Fields ─────────────────────────────────────────────── */

const SPEC_FIELDS: { key: keyof TrayProduct; label: string; icon: string }[] = [
  { key: "Sub-Category",  label: "Sub-Category",    icon: "category" },
  { key: "Material",      label: "Material",        icon: "diamond" },
  { key: "Standards",     label: "Standards",       icon: "verified" },
  { key: "Width",         label: "Width",           icon: "swap_horiz" },
  { key: "Height",        label: "Height",          icon: "height" },
  { key: "Thickness",     label: "Thickness",       icon: "straighten" },
  { key: "Length",        label: "Length",           icon: "straighten" },
  { key: "LoadCapacity",  label: "Load Capacity",   icon: "fitness_center" },
  { key: "Coating",       label: "Coating / Finish", icon: "auto_awesome" },
  { key: "Type",          label: "Type / Variant",  icon: "build" },
  { key: "Application",   label: "Application",     icon: "factory" },
];

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  { icon: "verified",    title: "IS / IEC Certified",      desc: "Compliant with IS 16230, IEC 61537, and NEMA VE-1." },
  { icon: "shield",      title: "Corrosion Resistant",     desc: "Hot-dip galvanised, SS, and powder-coated options." },
  { icon: "straighten",  title: "Custom Fabrication",      desc: "Bespoke sizes, widths, and finishes to order." },
  { icon: "local_shipping", title: "Pan-India Supply",     desc: "Warehouse stock + project-direct dispatch." },
];

/* ═══════════════════════════════════════════════════════════════ */

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

  function slugify(n: string) { return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  function selectCategory(key: CategoryKey) { setSearchParams({ category: key }); setMobileMenuOpen(false); }
  function selectProduct(p: TrayProduct) { setSearchParams({ category: activeCategoryKey, product: slugify(p["Product Name"]) }); setMobileMenuOpen(false); }

  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter((f) => { const v = activeProduct[f.key]; return typeof v === "string" && v.trim().length > 0; });
  }, [activeProduct]);

  const detailVariants = { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, x: -12, transition: { duration: 0.15 } } };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        <img src="/cable Trays/Cabletrays.jpeg" alt="Cable tray systems" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Cable Tray Systems</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-4 md:mb-6">
              Cable Tray Systems<br /><span className="text-yellow-500">Engineered Cable Management.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 lg:mb-12 font-sans leading-relaxed">
              GI, stainless steel &amp; aluminium cable trays — ladder, perforated, mesh &amp; solid bottom — IS / IEC certified, custom fabricated for power plants, data centres &amp; industrial installations.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
              Download Cable Tray Catalog
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY CATEGORY NAV ═══ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat.key} onClick={() => selectCategory(cat.key)}
                className={`relative whitespace-nowrap px-3 lg:px-4 py-4 text-[13px] font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                  activeCategoryKey === cat.key ? "text-yellow-600 border-b-2 border-yellow-500" : "text-slate-500 hover:text-slate-900"
                }`}>
                <span className="material-symbols-outlined text-base hidden sm:inline">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-4">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              IS / IEC / NEMA Certified
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MASTER-DETAIL BODY ═══ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          {/* Mobile */}
          <div className="lg:hidden mb-6">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">menu</span>
                {activeProduct ? activeProduct["Product Name"] : "Select Product"}
              </span>
              <span className={`material-symbols-outlined text-lg transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            {mobileMenuOpen && (
              <div className="border border-slate-200 border-t-0 bg-white max-h-80 overflow-y-auto">
                {categoryProducts.map((product, idx) => (
                  <button key={idx} onClick={() => selectProduct(product)}
                    className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 ${
                      activeProductIdx === idx ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500" : "text-slate-600 hover:bg-slate-50"
                    }`}>
                    <span className="block font-heading font-semibold truncate">{product["Product Name"]}</span>
                    <span className="block text-xs opacity-60 mt-0.5">{product["Sub-Category"]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* LEFT: SIDEBAR */}
            <aside className="hidden lg:block w-[260px] xl:w-[300px] shrink-0">
              <div className="sticky" style={{ top: "64px" }}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <span className="material-symbols-outlined text-lg text-yellow-500">{activeCategory.icon}</span>
                  <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">{activeCategory.label}</h3>
                  <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">{categoryProducts.length} items</span>
                </div>
                <div className="flex flex-col space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                  {categoryProducts.map((product, idx) => (
                    <button key={product["Product Name"]} onClick={() => selectProduct(product)}
                      className={`w-full text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
                        activeProductIdx === idx
                          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                      }`}>
                      <div className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden border ${activeProductIdx === idx ? "border-yellow-500/40" : "border-slate-200"}`}>
                        <img src={product.thumbnail} alt={product["Product Name"]} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`block text-[13px] font-heading leading-tight truncate ${activeProductIdx === idx ? "font-bold" : "font-semibold"}`}>{product["Product Name"]}</span>
                        <span className={`block text-[10px] mt-0.5 ${activeProductIdx === idx ? "text-slate-300" : "text-slate-400"}`}>{product["Sub-Category"]}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT: DETAIL */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div key={activeProduct["Product Name"]} variants={detailVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-8">
                      <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">{activeProduct["Sub-Category"]}</span>
                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight mt-3">{activeProduct["Product Name"]}</h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    <div className="relative overflow-hidden rounded-sm mb-8 h-[200px] md:h-[240px] lg:h-[280px] xl:h-[340px] group">
                      <img src={activeProduct.applicationImage || activeProduct.thumbnail} alt={activeProduct["Product Name"]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/80">{activeProduct["Product Name"]}</span>
                      </div>
                    </div>

                    <div className="mb-10">
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p>
                    </div>

                    {activeSpecs.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>
                          Technical Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSpecs.map((spec) => (
                            <div key={spec.key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">{spec.icon}</span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{spec.label}</span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">{activeProduct[spec.key] as string}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeProduct.Applications && activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">factory</span>
                          Key Industries & Applications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Applications.map((app, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors">
                              <span className="material-symbols-outlined text-sm">check_circle</span>{app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-lg">download</span>Download Datasheet
                      </button>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all">
                        <span className="material-symbols-outlined text-lg">request_quote</span>Get Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QA BANNER ═══ */}
      <section className="bg-slate-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-yellow-500" /><span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">Quality Assurance</span><span className="block w-10 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">Certified Cable Management Systems</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {QA_ITEMS.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl text-yellow-500">{item.icon}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 md:p-10 lg:p-14 border-l-4 border-l-yellow-500 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-yellow-600">assignment</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">Need a Custom Cable Tray Solution?</h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">
                  Our engineering team can assist with tray sizing, material selection, load calculations, and project-specific configurations. Get a response within 24 hours.
                </p>
              </div>
              <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg">
                <span className="material-symbols-outlined text-xl">request_quote</span>Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CableTray;
