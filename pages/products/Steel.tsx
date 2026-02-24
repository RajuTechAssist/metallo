import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   STEEL — MASTER-DETAIL INTERFACE
   Inspired by Hindustan Inox product pages
   Left: Vertical Product Menu  |  Right: Detailed Specifications
   ═══════════════════════════════════════════════════════════════ */

/* ── Product Data (from client Excel) ───────────────────────── */

interface SteelProduct {
  Category: string;
  'Sub-Category': string;
  'Product Name': string;
  Description: string;
  Grades: string;
  Standards: string;
  Thickness: string;
  'Pressure Class': string;
  Type: string;
  Material: string;
  Application: string;
  thumbnail: string;
}

const PRODUCTS: SteelProduct[] = [
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Seamless Pipes',
    'Product Name': 'SS Seamless Pipe',
    Description: 'Made from a solid round steel \'billet\' which is heated and pushed or pulled over a form until the steel is shaped into a hollow tube. No weld seam.',
    Grades: '304, 304L, 316, 316L, 904L',
    Standards: 'ASTM A312',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Welded Pipes',
    'Product Name': 'SS Welded / ERW Pipe',
    Description: 'Made by rolling a steel plate/sheet into a cylinder and welding the seam. Cheaper than seamless.',
    Grades: '304, 316, 202',
    Standards: 'ASTM A312, ASTM A358',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Tubes',
    'Product Name': 'SS Instrumentation Tube',
    Description: 'Smaller, thinner, and more precise than pipes. Used for high-pressure hydraulic lines.',
    Grades: '304, 316L, 6Mo',
    Standards: 'ASTM A269',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Tubes',
    'Product Name': 'Heat Exchanger U-Tube',
    Description: 'U-shaped tubes used in boilers and heat exchangers to cool or heat fluids.',
    Grades: '304H, 316H, 321',
    Standards: 'ASTM A213',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Seamless Pipes',
    'Product Name': 'Carbon Seamless Steel Pipe',
    Description: 'Extruded from a solid carbon steel billet with no weld seam. Ideal for high-pressure and high-temperature fluid/gas transport.',
    Grades: 'ASTM A106 (Gr. B/C), ASTM A53, API 5L, ASTM A333 (Low Temp)',
    Standards: 'ASTM A106, ASTM A53, API 5L',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Welded Pipes',
    'Product Name': 'Carbon Welded Steel Pipe',
    Description: 'Formed from rolled carbon steel plates with a welded longitudinal seam. Used for general pipelines, structural setups, and piling.',
    Grades: 'ASTM A53 (Gr. A/B), API 5L Gr. B to X70',
    Standards: 'ASTM A53, API 5L',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'ERW Pipes',
    'Product Name': 'ERW / Mild Steel (MS) Pipe',
    Description: 'Low-carbon Electric Resistance Welded pipes. Highly economical and extensively used for water lines, fire-fighting, and structural purposes.',
    Grades: 'Class A (Light), Class B (Medium), Class C (Heavy), Fe 330, Fe 410',
    Standards: 'IS 1239, IS 3589, BS 1387',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Galvanised Pipes',
    'Product Name': 'Galvanised Iron (GI) Pipe',
    Description: 'Mild steel pipes hot-dip coated with a protective layer of zinc to prevent rust and corrosion. Widely used for water supply, agriculture, and fencing.',
    Grades: 'Class A (Light), Class B (Medium), Class C (Heavy)',
    Standards: 'IS 1239, IS 4736, ASTM A53',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Spiral Welded Pipes',
    'Product Name': 'Spiral Welded Steel Pipe (HSAW)',
    Description: 'Manufactured by helically welding steel strips (HSAW). Allows for very large diameters; used in municipal waterworks, structural piling, and oil/gas pipelines.',
    Grades: 'API 5L (Gr. B to X80), ASTM A252 (Piling), S355',
    Standards: 'API 5L, ASTM A252, EN 10219',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Pipes & Tubes',
    'Sub-Category': 'Custom Pipes',
    'Product Name': 'Customised Steel Pipe',
    Description: 'Pipes manufactured to specific client requirements, including non-standard outer diameters (OD), specific wall thicknesses, or special coatings (3LPE, Epoxy).',
    Grades: 'As per Customer Requirement',
    Standards: 'Client Specifications',
    Thickness: '', 'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sheets & Plates',
    'Sub-Category': 'Plates',
    'Product Name': 'SS HR Plate (Hot Rolled)',
    Description: 'Thick steel plates used for making tanks, vessel bodies, and heavy structures.',
    Grades: '304, 316L, 310S',
    Standards: '',
    Thickness: '5mm - 100mm',
    'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sheets & Plates',
    'Sub-Category': 'Sheets',
    'Product Name': 'SS CR Sheet (Cold Rolled)',
    Description: 'Thinner, smoother, and shinier sheets used for kitchen equipment, cladding, and elevators.',
    Grades: '304, 430, 202',
    Standards: '',
    Thickness: '0.5mm - 6mm',
    'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sheets & Plates',
    'Sub-Category': 'Coils',
    'Product Name': 'SS Coil / Strip',
    Description: 'Long continuous rolls of thin steel. Used for mass production of parts.',
    Grades: '304, 316L',
    Standards: 'ASTM A240',
    Thickness: '',
    'Pressure Class': '', Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Flanges',
    'Sub-Category': 'Weld Neck',
    'Product Name': 'Weld Neck Flange',
    Description: 'Has a long tapered hub. Welded directly to the pipe. Best for high pressure.',
    Grades: '',
    Standards: 'ASME B16.5',
    Thickness: '',
    'Pressure Class': '150# - 2500#',
    Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Flanges',
    'Sub-Category': 'Slip On',
    'Product Name': 'Slip-On Flange',
    Description: 'Slips over the pipe and is welded inside and out. Easier to align but weaker than Weld Neck.',
    Grades: '',
    Standards: 'ASME B16.5',
    Thickness: '',
    'Pressure Class': '150# - 300#',
    Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Flanges',
    'Sub-Category': 'Blind',
    'Product Name': 'Blind Flange',
    Description: 'A solid disk used to block off the end of a piping system.',
    Grades: '',
    Standards: 'ASME B16.5',
    Thickness: '',
    'Pressure Class': '150# - 2500#',
    Type: '', Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Buttweld Fittings',
    'Sub-Category': 'Elbows',
    'Product Name': '90° / 45° Elbow',
    Description: 'Used to change the direction of flow.',
    Grades: '',
    Standards: 'ASME B16.9',
    Thickness: '',
    'Pressure Class': '',
    Type: 'Seamless / Welded',
    Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Buttweld Fittings',
    'Sub-Category': 'Tees',
    'Product Name': 'Equal / Reducing Tee',
    Description: 'Used to split the flow into two directions.',
    Grades: '',
    Standards: 'ASME B16.9',
    Thickness: '',
    'Pressure Class': '',
    Type: 'Seamless / Welded',
    Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Buttweld Fittings',
    'Sub-Category': 'Reducers',
    'Product Name': 'Concentric / Eccentric Reducer',
    Description: 'Connects a large pipe to a smaller pipe.',
    Grades: '',
    Standards: 'ASME B16.9',
    Thickness: '',
    'Pressure Class': '',
    Type: 'Seamless / Welded',
    Material: '', Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sealing & Gaskets',
    'Sub-Category': 'Gaskets',
    'Product Name': 'Spiral Wound Gasket',
    Description: 'A mix of metal wire and filler (graphite/teflon). Placed between two flanges to prevent leakage.',
    Grades: '',
    Standards: 'ASME B16.20',
    Thickness: '',
    'Pressure Class': '',
    Type: '',
    Material: 'SS 304/316 + Graphite',
    Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sealing & Gaskets',
    'Sub-Category': 'Gaskets',
    'Product Name': 'Ring Joint Gasket (RTJ)',
    Description: 'Solid metal oval/octagonal ring used in very high-pressure oil & gas flanges.',
    Grades: '',
    Standards: 'API 6A',
    Thickness: '',
    'Pressure Class': '',
    Type: '',
    Material: 'Soft Iron, SS 304, SS 316',
    Application: '',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop',
  },
  {
    Category: 'Sealing & Gaskets',
    'Sub-Category': 'O-Rings',
    'Product Name': 'O-Ring Seal',
    Description: 'A simple rubber or metal loop sitting in a groove to seal a connection.',
    Grades: '',
    Standards: '',
    Thickness: '',
    'Pressure Class': '',
    Type: '',
    Material: 'Viton, Nitrile, or Metal Encapsulated',
    Application: 'Pumps, Valves, Cylinders',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&q=80&auto=format&fit=crop',
  },
];

/* ── Category Configuration (matches mega menu 4-column layout) ── */

const CATEGORIES = [
  { key: 'pipes', label: 'Pipes & Tubes', icon: 'plumbing', match: ['Pipes & Tubes'] },
  { key: 'fittings', label: 'Buttweld Fittings', icon: 'hub', match: ['Buttweld Fittings'] },
  { key: 'flanges', label: 'Industrial Flanges', icon: 'radio_button_checked', match: ['Flanges'] },
  { key: 'plates', label: 'Plates & Gaskets', icon: 'layers', match: ['Sheets & Plates', 'Sealing & Gaskets'] },
] as const;

type CategoryKey = typeof CATEGORIES[number]['key'];

/* ── Category icons for the detail placeholder ─────────────── */
const CATEGORY_DETAIL_ICON: Record<string, string> = {
  'Pipes & Tubes': 'valve',
  'Sheets & Plates': 'layers',
  'Flanges': 'radio_button_checked',
  'Buttweld Fittings': 'hub',
  'Sealing & Gaskets': 'radio_button_unchecked',
};

/* ── Spec fields to display (label → key mapping) ──────────── */
const SPEC_FIELDS: { key: keyof SteelProduct; label: string; icon: string }[] = [
  { key: 'Sub-Category', label: 'Sub-Category', icon: 'category' },
  { key: 'Grades', label: 'Grades', icon: 'science' },
  { key: 'Standards', label: 'Standards', icon: 'verified' },
  { key: 'Thickness', label: 'Thickness', icon: 'straighten' },
  { key: 'Pressure Class', label: 'Pressure Class', icon: 'speed' },
  { key: 'Type', label: 'Type', icon: 'build' },
  { key: 'Material', label: 'Material', icon: 'diamond' },
  { key: 'Application', label: 'Application', icon: 'factory' },
];

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  { icon: 'biotech', title: '100% PMI Testing', desc: 'Positive Material Identification on every heat lot using XRF analyzers.' },
  { icon: 'water_drop', title: 'Hydrostatic Testing', desc: 'Pressure-tested per ASTM standards to ensure zero-leak integrity.' },
  { icon: 'radar', title: 'NDT Inspection', desc: 'Non-Destructive Testing — UT, RT, and Eddy Current per ASME Section V.' },
  { icon: 'verified', title: 'ISO 9001:2015', desc: 'Certified Quality Management System across all manufacturing facilities.' },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN STEEL PAGE — MASTER-DETAIL LAYOUT
   ═══════════════════════════════════════════════════════════════ */

const Steel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ── Derive active category from URL or default ── */
  /* Supports both ?category=pipes (internal) and ?cat=Buttweld+Fittings (mega menu) */
  const activeCategoryKey: CategoryKey = useMemo(() => {
    // First try internal category key
    const catKey = searchParams.get('category');
    if (catKey) {
      const valid = CATEGORIES.find(c => c.key === catKey);
      if (valid) return valid.key;
    }
    // Then try mega menu's ?cat= param (matches against category data names)
    const catName = searchParams.get('cat');
    if (catName) {
      const found = CATEGORIES.find(c =>
        (c.match as readonly string[]).some(m => m === catName)
      );
      if (found) return found.key;
    }
    return 'pipes';
  }, [searchParams]);

  const activeCategory = CATEGORIES.find(c => c.key === activeCategoryKey)!;

  /* ── Products in active category (match supports multi-category merge) ── */
  const categoryProducts = useMemo(
    () => PRODUCTS.filter(p => (activeCategory.match as readonly string[]).includes(p.Category)),
    [activeCategory]
  );

  /* ── Active product from URL or default to first ── */
  const activeProductIdx = useMemo(() => {
    const param = searchParams.get('product');
    if (param) {
      const idx = categoryProducts.findIndex(
        p => slugify(p['Product Name']) === param
      );
      if (idx >= 0) return idx;
    }
    return 0;
  }, [searchParams, categoryProducts]);

  const activeProduct = categoryProducts[activeProductIdx] || categoryProducts[0];

  /* ── Helpers ── */
  function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function selectCategory(key: CategoryKey) {
    setSearchParams({ category: key });
    setMobileMenuOpen(false);
  }

  function selectProduct(product: SteelProduct) {
    setSearchParams({
      category: activeCategoryKey,
      product: slugify(product['Product Name']),
    });
    setMobileMenuOpen(false);
  }

  /* ── Active specs (only non-empty fields) ── */
  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter(f => activeProduct[f.key]?.trim());
  }, [activeProduct]);

  /* ── Animation ── */
  const detailVariants = {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: -12, transition: { duration: 0.15 } },
  };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: 'clip' }}>

      {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '70vh', minHeight: '500px' }}
      >
        <img
          src="/steelSpark.jpg"
          alt="Steel manufacturing plant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Steel Products</span>
            </nav>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              High-Performance<br />
              <span className="text-yellow-500">Industrial Steel.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
              ASTM/ASME compliant Stainless, Carbon, and Alloy Steel engineered
              for critical infrastructure, oil &amp; gas, and heavy engineering.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">
                download
              </span>
              Download Complete Technical Catalog
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY CATEGORY NAV (5 categories) ═══════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => selectCategory(cat.key)}
                className={`relative whitespace-nowrap px-4 lg:px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 ${activeCategoryKey === cat.key
                  ? 'text-yellow-600 border-b-2 border-yellow-500'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <span className="material-symbols-outlined text-base hidden sm:inline">
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}

            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-6">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              ASTM &amp; ASME Certified
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MASTER-DETAIL BODY ═══════════════════════════════ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

          {/* Mobile: product selector toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">menu</span>
                {activeProduct ? activeProduct['Product Name'] : 'Select Product'}
              </span>
              <span className={`material-symbols-outlined text-lg transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Mobile dropdown */}
            {mobileMenuOpen && (
              <div className="border border-slate-200 border-t-0 bg-white max-h-72 overflow-y-auto">
                {categoryProducts.map((product, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectProduct(product)}
                    className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 flex items-center gap-3 ${activeProductIdx === idx
                      ? 'bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500'
                      : 'text-slate-600 hover:bg-slate-50'
                      }`}
                  >
                    <div className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden border ${activeProductIdx === idx ? 'border-yellow-500/40' : 'border-slate-200'
                      }`}>
                      <img src={product.thumbnail} alt={product['Product Name']} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-heading font-semibold truncate">{product['Product Name']}</span>
                      <span className="block text-xs opacity-60 mt-0.5">{product['Sub-Category']}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">

            {/* ── LEFT: MASTER MENU (Vertical Product List) ── */}
            <aside className="hidden md:block w-[280px] lg:w-[320px] shrink-0">
              <div className="sticky" style={{ top: '64px' }}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <span className="material-symbols-outlined text-lg text-yellow-500">
                    {activeCategory.icon}
                  </span>
                  <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">
                    {activeCategory.label}
                  </h3>
                  <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">
                    {categoryProducts.length} items
                  </span>
                </div>

                <div className="flex flex-col space-y-1.5">
                  {categoryProducts.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectProduct(product)}
                      className={`text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${activeProductIdx === idx
                        ? 'bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer'
                        }`}
                    >
                      {/* Product Thumbnail */}
                      <div className={`w-12 h-12 shrink-0 rounded-sm overflow-hidden border ${activeProductIdx === idx ? 'border-yellow-500/40' : 'border-slate-200'
                        }`}>
                        <img
                          src={product.thumbnail}
                          alt={product['Product Name']}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="min-w-0 flex-1">
                        <span className={`block text-sm font-heading leading-tight truncate ${activeProductIdx === idx ? 'font-bold' : 'font-semibold'
                          }`}>
                          {product['Product Name']}
                        </span>
                        <span className={`block text-[11px] mt-0.5 ${activeProductIdx === idx ? 'text-slate-300' : 'text-slate-400'
                          }`}>
                          {product['Sub-Category']}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── RIGHT: DETAIL VIEW ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div
                    key={activeProduct['Product Name']}
                    variants={detailVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Product Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                          {activeProduct['Sub-Category']}
                        </span>
                        <span className="text-xs font-sans text-slate-400">
                          {activeProduct.Category}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                        {activeProduct['Product Name']}
                      </h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-sm mb-8 h-[280px] lg:h-[340px] group">
                      <img
                        src={activeProduct.thumbnail.replace('w=120', 'w=900').replace('q=80', 'q=85')}
                        alt={activeProduct['Product Name']}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/80">
                          {activeProduct['Product Name']}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">
                        {activeProduct.Description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    {activeSpecs.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>
                          Technical Specifications
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSpecs.map((spec) => (
                            <div
                              key={spec.key}
                              className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group"
                            >
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">
                                  {spec.icon}
                                </span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">
                                  {spec.label}
                                </span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">
                                {activeProduct[spec.key]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Engineering Diagram Placeholder */}
                    <div className="bg-slate-50 border border-slate-200 rounded-sm aspect-video flex flex-col items-center justify-center text-slate-300 group hover:border-slate-300 transition-colors">
                      <span className="material-symbols-outlined text-6xl mb-4 group-hover:text-yellow-500/40 transition-colors">
                        {CATEGORY_DETAIL_ICON[activeProduct.Category] || 'precision_manufacturing'}
                      </span>
                      <p className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400">
                        Engineering Diagram
                      </p>
                      <p className="text-xs font-sans text-slate-400 mt-1">
                        Technical drawing for {activeProduct['Product Name']}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUALITY ASSURANCE BANNER ═════════════════════════ */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {QA_ITEMS.map((item) => (
              <div key={item.title} className="text-center group">
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

      {/* ═══ ENTERPRISE CTA ══════════════════════════════════ */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-sm p-10 md:p-14 border-l-4 border-l-yellow-500 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-yellow-600">assignment</span>
              </div>
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
