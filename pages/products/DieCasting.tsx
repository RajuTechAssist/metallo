import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   DIE CASTING — MASTER-DETAIL INTERFACE
   Left: Product Sidebar  |  Right: Detailed Specs & Capabilities
   ═══════════════════════════════════════════════════════════════ */

interface CastingProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  thumbnail: string;
  Material: string;
  Process: string;
  Tolerance: string;
  Applications: string[];
  Specs: Record<string, string>;
  applicationImage?: string;
}

const PRODUCTS: CastingProduct[] = [
  /* ── Aluminium HPDC ────────────────────────────────────────── */
  {
    Category: "Aluminium HPDC", "Sub-Category": "Motor Housings",
    "Product Name": "Aluminium Motor Housing — HPDC",
    Description: "High-pressure die cast aluminium motor housings in ADC12 / A380 alloy. Tight tolerances ±0.05mm, suitable for electric motor frames, end shields, and fan covers in automotive and industrial drives.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "ADC12 / A380 Aluminium",
    Process: "High Pressure Die Casting (Cold Chamber)",
    Tolerance: "±0.05 mm",
    Applications: ["Electric Motor Frames", "End Shields", "Fan Covers", "Pump Housings"],
    Specs: { "Alloy": "ADC12 / A380", "Machine Tonnage": "400T – 1600T", "Tolerance": "±0.05 mm", "Surface Finish": "As-Cast / Shot Blasted", "Weight Range": "0.2 – 12 kg", "Annual Capacity": "500,000+ pcs" },
  },
  {
    Category: "Aluminium HPDC", "Sub-Category": "Electrical Enclosures",
    "Product Name": "Aluminium Electrical Enclosure — HPDC",
    Description: "IP-rated aluminium enclosures and junction boxes for electrical, telecom, and LED lighting applications. EMI/RFI shielding with precision-machined mating surfaces.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "ADC12 Aluminium",
    Process: "High Pressure Die Casting",
    Tolerance: "±0.08 mm",
    Applications: ["Junction Boxes", "LED Heat Sinks", "Telecom Housings", "Switch Enclosures"],
    Specs: { "Alloy": "ADC12", "Machine Tonnage": "250T – 800T", "Wall Thickness": "1.5–4.0 mm", "IP Rating": "IP65 / IP66", "Finish": "Powder Coated / Anodized", "EMI Shielding": "Yes" },
  },
  {
    Category: "Aluminium HPDC", "Sub-Category": "Automotive Components",
    "Product Name": "Automotive HPDC Components",
    Description: "Complex aluminium HPDC parts for the automotive sector — gear box covers, bracket assemblies, EV battery trays, and structural components with IATF 16949-ready quality systems.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "A380 / AlSi9Cu3 Aluminium",
    Process: "High Pressure Die Casting (Cold Chamber)",
    Tolerance: "±0.05 mm",
    Applications: ["Gear Box Covers", "Bracket Assemblies", "EV Battery Trays", "Structural Nodes"],
    Specs: { "Alloy": "A380 / AlSi9Cu3", "Machine Tonnage": "800T – 1600T", "Tolerance": "±0.05 mm", "Quality System": "IATF 16949 Ready", "X-Ray": "100% on critical parts", "Heat Treatment": "T5 / T6 available" },
  },

  /* ── Aluminium Gravity ─────────────────────────────────────── */
  {
    Category: "Aluminium Gravity", "Sub-Category": "Valve Bodies",
    "Product Name": "Gravity Cast Valve Bodies",
    Description: "A356 / LM25 gravity-cast valve bodies with T6 heat treatment for superior mechanical properties. Pressure-tight to 15 bar for hydraulic, pneumatic, and water applications.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "A356 / LM25 Aluminium",
    Process: "Gravity Die Casting (Permanent Mould)",
    Tolerance: "±0.15 mm",
    Applications: ["Hydraulic Valve Bodies", "Gate Valves", "Ball Valve Housings", "Control Valve Manifolds"],
    Specs: { "Alloy": "A356 / LM25", "Heat Treatment": "T6", "Pressure Rating": "15 bar", "Radiography": "Level 2 (ASTM E155)", "Surface Finish": "Ra 3.2 – 6.3 µm", "Weight Range": "0.5 – 25 kg" },
  },
  {
    Category: "Aluminium Gravity", "Sub-Category": "Pump Housings",
    "Product Name": "Gravity Cast Pump Housings",
    Description: "Heavy-duty pump housings and impeller covers gravity-cast in LM25 alloy. Designed for centrifugal, submersible, and process pump applications needing pressure tightness.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "LM25 (A356) Aluminium",
    Process: "Gravity Die Casting",
    Tolerance: "±0.2 mm",
    Applications: ["Centrifugal Pump Bodies", "Impeller Covers", "Submersible Motor Housings", "Process Pump Casings"],
    Specs: { "Alloy": "LM25", "Heat Treatment": "T6", "Pressure Test": "Hydro Test @ 15 bar", "Machining": "CNC Finish Machined", "Weight Range": "1 – 35 kg", "Annual Volume": "10,000 – 100,000 pcs" },
  },
  {
    Category: "Aluminium Gravity", "Sub-Category": "Structural Brackets",
    "Product Name": "Gravity Cast Structural Brackets",
    Description: "High-strength gravity-cast structural brackets and mounting plates for automotive chassis, industrial machinery, and heavy equipment applications.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "A356 Aluminium",
    Process: "Gravity Die Casting",
    Tolerance: "±0.15 mm",
    Applications: ["Chassis Brackets", "Engine Mounts", "Machine Feet", "Mounting Plates"],
    Specs: { "Alloy": "A356", "UTS": "≥ 260 MPa (T6)", "Elongation": "≥ 5%", "Heat Treatment": "T6", "NDT": "Dye Penetrant / X-Ray", "Machining": "CNC 3/4 Axis" },
  },

  /* ── Zinc Die Casting ──────────────────────────────────────── */
  {
    Category: "Zinc Die Casting", "Sub-Category": "Lock Mechanisms",
    "Product Name": "Zinc Lock Mechanism Castings",
    Description: "Hot-chamber zinc die cast lock bodies, cam assemblies, and latch mechanisms in Zamak 3. Ultra-thin walls ≥ 0.5mm with excellent surface finish for plating.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "Zamak 3",
    Process: "Hot Chamber Die Casting",
    Tolerance: "±0.03 mm",
    Applications: ["Cylindrical Lock Bodies", "Mortise Cam Assemblies", "Padlock Components", "Furniture Locks"],
    Specs: { "Alloy": "Zamak 3", "Process": "Hot Chamber", "Min Wall": "0.5 mm", "Tolerance": "±0.03 mm", "Finish": "Chrome / Nickel Plating", "Cycle Time": "8–15 sec" },
  },
  {
    Category: "Zinc Die Casting", "Sub-Category": "Decorative Hardware",
    "Product Name": "Zinc Decorative Hardware Castings",
    Description: "High-surface-quality zinc castings for architectural hardware, cabinet knobs, handles, and decorative trim. Chrome, satin nickel, and antique brass finishes.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "Zamak 5",
    Process: "Hot Chamber Die Casting",
    Tolerance: "±0.05 mm",
    Applications: ["Cabinet Handles & Knobs", "Door Levers", "Architectural Trim", "Furniture Fittings"],
    Specs: { "Alloy": "Zamak 5", "Min Wall": "0.6 mm", "Surface Finish": "Mirror Polish possible", "Plating": "Cr / Ni / Brass / PVD", "Shot Weight": "5 – 300 g", "Cavity": "Multi-cavity (2–8)" },
  },
  {
    Category: "Zinc Die Casting", "Sub-Category": "Connectors",
    "Product Name": "Zinc Miniature Connectors",
    Description: "Precision zinc die cast miniature connectors and electronic housings for telecom, automotive ECU, and consumer electronics. EMI shielding and tight dimensional control.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "Zamak 3 / ZA-8",
    Process: "Hot Chamber Die Casting",
    Tolerance: "±0.02 mm",
    Applications: ["D-Sub Connector Shells", "USB/RJ45 Shields", "ECU Housings", "RF Shielding Cans"],
    Specs: { "Alloy": "Zamak 3 / ZA-8", "Tolerance": "±0.02 mm", "Min Wall": "0.4 mm", "EMI Shielding": "Yes", "Plating": "Tin / Nickel", "Annual Volume": "1M+ pcs" },
  },

  /* ── CNC Machining ─────────────────────────────────────────── */
  {
    Category: "CNC Machining", "Sub-Category": "Milling & Drilling",
    "Product Name": "CNC Milling & Drilling Services",
    Description: "In-house 3-axis and 4-axis CNC milling, drilling, and tapping of die-cast components. VMC and HMC machines with Ra 0.8 µm capability for precision-machined mating surfaces.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "Aluminium / Zinc Alloys",
    Process: "CNC Machining (VMC / HMC)",
    Tolerance: "±0.01 mm",
    Applications: ["Bore Finishing", "Face Milling", "Thread Tapping", "Precision Dowel Holes"],
    Specs: { "Machines": "3-Axis & 4-Axis VMC / HMC", "Tolerance": "±0.01 mm", "Surface Finish": "Ra 0.8 – 3.2 µm", "Max Part Size": "600 × 500 × 400 mm", "Capacity": "50+ CNC Machines", "Inspection": "CMM (Zeiss / Mitutoyo)" },
  },
  {
    Category: "CNC Machining", "Sub-Category": "Surface Treatment",
    "Product Name": "Surface Finishing & Treatment",
    Description: "Complete range of post-casting surface treatments — shot blasting, vibratory deburring, powder coating, wet painting, anodizing, and electroplating for corrosion protection and aesthetics.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "All Cast Alloys",
    Process: "Surface Finishing",
    Tolerance: "Per coating spec",
    Applications: ["Powder Coating (RAL colours)", "Anodizing (Clear / Colour)", "Chrome / Nickel Plating", "Shot Blasting & Tumbling"],
    Specs: { "Powder Coat": "60–120 µm, Salt Spray 500+ hrs", "Anodizing": "15–25 µm (Hard Anodize available)", "Plating": "Cr / Ni / Zn (5–25 µm)", "Shot Blast": "Steel Shot / Glass Bead", "Paint Line": "Automated Conveyor", "Quality": "Cross-Cut / Adhesion / Salt Spray" },
  },

  /* ── Tool & Die Design ─────────────────────────────────────── */
  {
    Category: "Tool & Die Design", "Sub-Category": "Die Design",
    "Product Name": "Die Design & Flow Simulation",
    Description: "In-house die design using MAGMA/ProCast flow simulation, 3D CAD modelling, and DFM analysis. Optimised gating, runner, and overflow design for zero-porosity castings.",
    thumbnail: "/diecasting/die-casting-process-foundry.jpg",
    Material: "H13 (1.2344) Tool Steel",
    Process: "CAD/CAM Die Design",
    Tolerance: "±0.01 mm (die)",
    Applications: ["New Die Design", "DFM Analysis", "Flow & Thermal Simulation", "Prototype Tooling"],
    Specs: { "Software": "MAGMA / ProCast / SolidWorks", "Die Steel": "H13 (HRC 44–48)", "Hardening": "Vacuum + Nitride", "Die Life": "100,000 – 500,000 shots", "Lead Time": "6–10 weeks", "Cavity": "Single / Multi-cavity" },
  },
  {
    Category: "Tool & Die Design", "Sub-Category": "Die Manufacturing",
    "Product Name": "Die Manufacturing & Maintenance",
    Description: "Full die manufacturing capability including CNC machining, wire-cut EDM, sinker EDM, and precision grinding. Preventive maintenance programs for extended die life.",
    thumbnail: "/diecasting/Die-casting-technology-in-action.webp",
    Material: "H13 / DIN 1.2344",
    Process: "CNC + EDM Manufacturing",
    Tolerance: "±0.005 mm (EDM)",
    Applications: ["New Die Manufacturing", "Die Repair & Modification", "Electrode Manufacturing", "Preventive Maintenance"],
    Specs: { "CNC": "High-Speed CNC Milling", "Wire EDM": "±0.005 mm accuracy", "Sinker EDM": "Complex cavity machining", "Grinding": "Surface & Cylindrical", "Heat Treatment": "Vacuum Hardening + Nitride", "CMM Inspection": "100% die dimension report" },
  },
];

/* ── Categories ──────────────────────────────────────────────── */

const CATEGORIES = [
  { key: "hpdc",     label: "Aluminium HPDC",       icon: "precision_manufacturing", match: "Aluminium HPDC" },
  { key: "gravity",  label: "Aluminium Gravity",     icon: "water_drop",              match: "Aluminium Gravity" },
  { key: "zinc",     label: "Zinc Die Casting",      icon: "hexagon",                 match: "Zinc Die Casting" },
  { key: "cnc",      label: "CNC Machining",         icon: "settings",                match: "CNC Machining" },
  { key: "tooling",  label: "Tool & Die Design",     icon: "draw",                    match: "Tool & Die Design" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  { icon: "verified",                 title: "IATF 16949 Ready",         desc: "Automotive-grade quality management systems." },
  { icon: "precision_manufacturing",  title: "50T – 1600T Machines",     desc: "Cold chamber & hot chamber die casting range." },
  { icon: "science",                  title: "In-House Testing",          desc: "Spectrometer, CMM, X-Ray & pressure testing." },
  { icon: "local_shipping",           title: "Global Supply",             desc: "JIT delivery with pan-India & export capability." },
];

/* ═══════════════════════════════════════════════════════════════ */

const DieCasting: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const c = searchParams.get("category");
    if (c) { const found = CATEGORIES.find((cat) => cat.key === c); if (found) return found.key; }
    return "hpdc";
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
  function selectProduct(p: CastingProduct) { setSearchParams({ category: activeCategoryKey, product: slugify(p["Product Name"]) }); setMobileMenuOpen(false); }

  const specEntries = useMemo(() => {
    if (!activeProduct) return [];
    return Object.entries(activeProduct.Specs);
  }, [activeProduct]);

  const detailVariants = { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, x: -12, transition: { duration: 0.15 } } };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        <img src="/diecasting/die-casting-process-foundry.jpg" alt="Die casting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Die Casting</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-4 md:mb-6">
              Die Casting<br /><span className="text-yellow-500">Precision Engineered Components.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 lg:mb-12 font-sans leading-relaxed">
              Aluminium &amp; zinc die cast components with in-house tooling, CNC machining, and surface finishing — from prototype to mass production.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
              Download Brochure
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
                className={`relative whitespace-nowrap px-3 lg:px-5 py-4 text-[13px] font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                  activeCategoryKey === cat.key ? "text-yellow-600 border-b-2 border-yellow-500" : "text-slate-500 hover:text-slate-900"
                }`}>
                <span className="material-symbols-outlined text-base hidden sm:inline">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-4">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              IATF 16949 Ready
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
                    <button key={idx} onClick={() => selectProduct(product)}
                      className={`w-full text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
                        activeProductIdx === idx
                          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                      }`}>
                      <div className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden ${activeProductIdx === idx ? "ring-2 ring-yellow-500" : ""}`}>
                        <img src={product.thumbnail} alt="" className="w-full h-full object-cover" />
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
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">{activeProduct.Category}</span>
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">{activeProduct["Sub-Category"]}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">{activeProduct["Product Name"]}</h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    {/* Thumbnail */}
                    <div className="mb-10 rounded-sm overflow-hidden border border-slate-200 max-w-xl">
                      <img src={activeProduct.thumbnail} alt={activeProduct["Product Name"]} className="w-full h-48 md:h-56 lg:h-64 object-cover" />
                    </div>

                    <div className="mb-10">
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p>
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                      {[
                        { label: "Material", value: activeProduct.Material, icon: "category" },
                        { label: "Process", value: activeProduct.Process, icon: "precision_manufacturing" },
                        { label: "Tolerance", value: activeProduct.Tolerance, icon: "straighten" },
                      ].map((info) => (
                        <div key={info.label} className="bg-slate-900 text-white p-5 rounded-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-base text-yellow-500">{info.icon}</span>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-slate-400">{info.label}</span>
                          </div>
                          <p className="text-sm font-sans font-medium">{info.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Specs */}
                    {specEntries.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>
                          Technical Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {specEntries.map(([key, val]) => (
                            <div key={key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">settings</span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{key}</span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Applications */}
                    {activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">apps</span>
                          Applications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProduct.Applications.map((app, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-sm border border-slate-100">
                              <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">check_circle</span>
                              <span className="text-sm font-sans text-slate-700 leading-relaxed">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-lg">upload_file</span>Upload Drawing
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
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">Manufacturing Excellence</h2>
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
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">Have a Die Casting Project?</h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">
                  Share your 3D CAD file for a feasibility study, die quotation, and per-piece pricing.
                </p>
              </div>
              <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg">
                <span className="material-symbols-outlined text-xl">upload_file</span>Upload Drawing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DieCasting;
