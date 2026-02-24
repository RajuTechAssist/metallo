import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   STEEL — TECHNICAL BLUEPRINT PAGE
   Tier-1 Industrial Manufacturer's Technical Hub
   Dynamic Tabbed Interface with Enterprise Data Tables
   ═══════════════════════════════════════════════════════════════ */

/* ── Tab Configuration ──────────────────────────────────────── */

type CategoryKey = 'pipes' | 'plates' | 'fittings' | 'bars';

const NAV_ITEMS: { id: CategoryKey; label: string }[] = [
  { id: 'pipes', label: 'Pipes & Tubes' },
  { id: 'plates', label: 'Sheets & Plates' },
  { id: 'fittings', label: 'Fittings & Flanges' },
  { id: 'bars', label: 'Bars & Rods' },
];

/* ── Product Data for Each Tab ──────────────────────────────── */

/* Tab A: Pipes & Tubes */
const PIPES_COLUMNS = ['Product Name', 'Description', 'Grades', 'Standards'];
const PIPES_ROWS = [
  ['SS Seamless Pipe', 'Solid round billet, pushed over a form. No weld seam.', '304, 304L, 316, 316L, 904L', 'ASTM A312'],
  ['SS Welded / ERW Pipe', 'Rolled steel plate/sheet welded at the seam.', '304, 316, 202', 'ASTM A312, ASTM A358'],
  ['SS Instrumentation Tube', 'Smaller, precise tubes for high-pressure hydraulics.', '304, 316L, 6Mo', 'ASTM A269'],
  ['Heat Exchanger U-Tube', 'U-shaped tubes for boilers and condensers.', '304H, 316H, 321', 'ASTM A213'],
  ['Carbon Seamless Pipe', 'Extruded solid billet for high-pressure/temp gas.', 'ASTM A106 (Gr. B/C), A53, API 5L', 'ASTM A106, A53, API 5L'],
  ['Carbon Welded Pipe', 'Rolled plates for general pipelines and piling.', 'ASTM A53, API 5L Gr. B to X70', 'ASTM A53, API 5L'],
];

/* Tab B: Sheets & Plates */
const PLATES_COLUMNS = ['Product Name', 'Description', 'Grades', 'Thickness / Standard'];
const PLATES_ROWS = [
  ['SS HR Plate (Hot Rolled)', 'Thick plates for tanks, vessels, and heavy structures.', '304, 316L, 310S', '5mm – 100mm'],
  ['SS CR Sheet (Cold Rolled)', 'Thinner, smoother sheets for cladding and equipment.', '304, 430, 202', '0.5mm – 6mm'],
  ['SS Coil / Strip', 'Long continuous rolls for mass part production.', '304, 316L', 'ASTM A240'],
];

/* Tab C: Fittings, Flanges & Seals */
const FITTINGS_COLUMNS = ['Product Name', 'Type / Material', 'Pressure Class', 'Standards'];
const FITTINGS_ROWS = [
  // — Flanges
  ['Weld Neck Flange', 'Long tapered hub. Welded directly.', '150# – 2500#', 'ASME B16.5'],
  ['Slip-On Flange', 'Slips over pipe, welded inside and out.', '150# – 300#', 'ASME B16.5'],
  ['Blind Flange', 'Solid disk to block off piping ends.', '150# – 2500#', 'ASME B16.5'],
  // — Fittings
  ['90° / 45° Elbow', 'Seamless / Welded', '—', 'ASME B16.9'],
  ['Equal / Reducing Tee', 'Seamless / Welded', '—', 'ASME B16.9'],
  ['Concentric / Eccentric Reducer', 'Seamless / Welded', '—', 'ASME B16.9'],
  // — Seals & Gaskets
  ['Spiral Wound Gasket', 'SS 304/316 + Graphite', '—', 'ASME B16.20'],
  ['Ring Joint Gasket (RTJ)', 'Soft Iron, SS 304, SS 316', '—', 'API 6A'],
  ['O-Ring Seal', 'Viton, Nitrile, Metal Encapsulated', 'Pumps / Valves', '—'],
];

/* Tab D: Bars, Rods & Wires */
const BARS_COLUMNS = ['Product Name', 'Description', 'Grades', 'Size / Condition'];
const BARS_ROWS = [
  ['SS Round Bar', 'Hot rolled and cold drawn rounds for machined components.', '304, 316, 303, 410, 17-4PH', '3mm – 300mm Dia'],
  ['SS Hex Bar', 'Hexagonal cross-section for bolts, nuts, and fasteners.', '304, 316, 303', '6mm – 75mm A/F'],
  ['SS Square Bar', 'Square profile for structural and fabrication use.', '304, 316, 410', '6mm – 100mm'],
  ['SS Angle', 'L-profile for frames, supports, and structural assemblies.', '304, 316', '20×20mm – 200×200mm'],
  ['SS Channel', 'U-profile for structural framing and support systems.', '304, 316', '50mm – 400mm'],
  ['SS Wire Rod', 'Drawn wire for springs, fasteners, and mesh production.', '304, 316, 302', '0.5mm – 16mm Dia'],
];

/* ── Section metadata (title, description, image per tab) ──── */

const SECTION_META: Record<CategoryKey, {
  title: string;
  description: string;
  image: string;
  columns: string[];
  rows: string[][];
  subgroups?: { label: string; startIdx: number }[];
}> = {
  pipes: {
    title: 'Pipes & Tubes',
    description: 'Precision-manufactured piping solutions for high-pressure, high-temperature, and corrosive service environments. Seamless and welded options across all major industrial grades.',
    image: 'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=1200&q=80&auto=format&fit=crop',
    columns: PIPES_COLUMNS,
    rows: PIPES_ROWS,
  },
  plates: {
    title: 'Sheets, Plates & Coils',
    description: 'Industrial flat products for pressure vessels, structural fabrication, food processing, and architectural cladding. Full spectrum of finishes and thicknesses.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80&auto=format&fit=crop',
    columns: PLATES_COLUMNS,
    rows: PLATES_ROWS,
  },
  fittings: {
    title: 'Fittings, Flanges & Seals',
    description: 'Complete piping connectivity solutions — from standard buttweld elbows to high-pressure forged fittings. All flanges available in Class 150 through 2500.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80&auto=format&fit=crop',
    columns: FITTINGS_COLUMNS,
    rows: FITTINGS_ROWS,
    subgroups: [
      { label: 'Flanges', startIdx: 0 },
      { label: 'Fittings', startIdx: 3 },
      { label: 'Seals & Gaskets', startIdx: 6 },
    ],
  },
  bars: {
    title: 'Bars, Rods & Wires',
    description: 'Solid long products for machining, construction, and precision manufacturing. Multiple profiles and metallurgical conditions for exacting application requirements.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format&fit=crop',
    columns: BARS_COLUMNS,
    rows: BARS_ROWS,
  },
};

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  { icon: 'biotech', title: '100% PMI Testing', desc: 'Positive Material Identification on every heat lot using XRF analyzers.' },
  { icon: 'water_drop', title: 'Hydrostatic Testing', desc: 'Pressure-tested per ASTM standards to ensure zero-leak integrity.' },
  { icon: 'radar', title: 'NDT Inspection', desc: 'Non-Destructive Testing — UT, RT, and Eddy Current per ASME Section V.' },
  { icon: 'verified', title: 'ISO 9001:2015', desc: 'Certified Quality Management System across all manufacturing facilities.' },
];

/* ═══════════════════════════════════════════════════════════════
   ENTERPRISE DATA TABLE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

interface DataTableProps {
  columns: string[];
  rows: string[][];
  subgroups?: { label: string; startIdx: number }[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows, subgroups }) => {
  // Build a map of row index → subgroup label
  const subgroupMap = new Map<number, string>();
  if (subgroups) {
    subgroups.forEach((sg) => subgroupMap.set(sg.startIdx, sg.label));
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b-2 border-slate-200">
            {columns.map((col) => (
              <th
                key={col}
                className="text-left py-4 px-4 text-xs font-heading font-bold uppercase tracking-widest text-slate-400"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <React.Fragment key={rowIdx}>
              {/* Sub-group header row */}
              {subgroupMap.has(rowIdx) && (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="pt-8 pb-3 px-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="block w-6 h-[2px] bg-yellow-500" />
                      <span className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-yellow-600">
                        {subgroupMap.get(rowIdx)}
                      </span>
                    </div>
                  </td>
                </tr>
              )}
              <tr
                className="border-b border-slate-100 hover:bg-slate-50/70 transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`py-4 px-4 align-top ${cellIdx === 0
                        ? 'font-heading font-bold text-sm text-slate-900 whitespace-nowrap'
                        : 'font-sans text-sm text-slate-600 leading-relaxed'
                      }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN STEEL PAGE
   ═══════════════════════════════════════════════════════════════ */

const Steel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('pipes');
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const meta = SECTION_META[activeCategory];

  /* ── Show sticky nav shadow once hero scrolls out of view ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Animation config ── */
  const tabVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
  };

  return (
    <div className="w-full bg-slate-50 overflow-x-hidden">

      {/* ═══ SECTION 1 : CINEMATIC HERO (70vh) ═══════════════ */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: '70vh', minHeight: '500px' }}
      >
        {/* Background Image */}
        <img
          src="/steelSpark.jpg"
          alt="Steel manufacturing plant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Steel Products</span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              High-Performance<br />
              <span className="text-yellow-500">Industrial Steel.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
              ASTM/ASME compliant Stainless, Carbon, and Alloy Steel engineered
              for critical infrastructure, oil &amp; gas, and heavy engineering.
            </p>

            {/* CTA — Outline, white text */}
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">
                download
              </span>
              Download Complete Technical Catalog
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ SECTION 2 : STICKY TAB NAVIGATION ═══════════════ */}
      <nav
        className={`sticky top-0 z-40 bg-white border-b border-slate-200 transition-all duration-300 ${stickyVisible ? 'shadow-sm' : 'shadow-none'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`relative whitespace-nowrap px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${activeCategory === item.id
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Right-side: subtle context label */}
            <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-6">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              ASTM &amp; ASME Certified
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ SECTION 3 : DYNAMIC CONTENT CANVAS ══════════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Section Header + Image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
                {/* Text */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block w-10 h-[2px] bg-yellow-500" />
                    <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-600">
                      Technical Specifications
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                    {meta.title}
                  </h2>
                  <p className="text-base text-slate-500 font-sans leading-relaxed max-w-2xl">
                    {meta.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-sm h-[240px] lg:h-auto group">
                  <img
                    src={meta.image}
                    alt={meta.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors duration-500" />
                </div>
              </div>

              {/* Enterprise Data Table */}
              <DataTable
                columns={meta.columns}
                rows={meta.rows}
                subgroups={meta.subgroups}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ SECTION 4 : QUALITY ASSURANCE BANNER ════════════ */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-yellow-500" />
              <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">
                Quality Assurance
              </span>
              <span className="block w-10 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
              Certified to the Highest Standards
            </h2>
          </div>

          {/* QA Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {QA_ITEMS.map((item) => (
              <div
                key={item.title}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl text-yellow-500">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-[250px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 : ENTERPRISE CTA ══════════════════════ */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-sm p-10 md:p-14 border-l-4 border-l-yellow-500 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Icon */}
              <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-yellow-600">
                  assignment
                </span>
              </div>

              {/* Copy */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">
                  Procuring for a major project?
                </h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">
                  Submit your Bill of Materials (BOM) for a comprehensive supply
                  schedule. Our engineering team will provide grade-specific
                  availability, lead times, and project pricing within 24 hours.
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-xl">upload_file</span>
                Upload BOQ / Request Supply Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steel;
