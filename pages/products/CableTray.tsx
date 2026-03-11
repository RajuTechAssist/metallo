import React from 'react';
import { Link } from 'react-router-dom';

/* ========================================================================
   CABLE TRAY — Product Hub (Category Showcase)
   ======================================================================== */

const TRAY_CATEGORIES = [
  {
    id: 'ladder',
    title: 'Ladder Type Cable Tray',
    icon: 'grid_view',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop',
    description:
      'Heavy-duty ladder trays with side rails and rungs, ideal for long straight runs carrying heavy power cables. Excellent ventilation and heat dissipation for high-current applications.',
    standards: ['IEC 61537', 'IS 16230', 'NEMA VE-1'],
    products: ['GI Ladder Tray', 'SS 304/316 Ladder Tray', 'Aluminium Ladder Tray', 'HDG Ladder Tray'],
  },
  {
    id: 'perforated',
    title: 'Perforated Cable Tray',
    icon: 'view_comfy',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop',
    description:
      'Ventilated trough-style trays with perforated bottom, providing continuous cable support with adequate airflow. Perfect for control and instrumentation cable routing.',
    standards: ['IEC 61537', 'IS 16230', 'UL 2533'],
    products: ['GI Perforated Tray', 'SS Perforated Tray', 'Powder Coated Perforated Tray'],
  },
  {
    id: 'mesh',
    title: 'Wire Mesh Cable Tray',
    icon: 'grid_on',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop',
    description:
      'Lightweight, open-weave mesh trays for data centres, commercial buildings, and telecom applications. Easy cable drop-outs and rapid installation with snap-on accessories.',
    standards: ['IEC 61537', 'NEMA VE-1', 'UL 2533'],
    products: ['Stainless Steel Mesh Tray', 'Electro-Zinc Mesh Tray', 'Epoxy Coated Mesh Tray'],
  },
  {
    id: 'channel',
    title: 'Solid / Channel Cable Tray',
    icon: 'view_stream',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop',
    description:
      'Fully enclosed solid-bottom trays for sensitive cables requiring EMI/RFI shielding. Used in pharmaceutical plants, data centres, and clean-room environments.',
    standards: ['IEC 61537', 'IS 16230', 'NEMA VE-1'],
    products: ['GI Solid Bottom Tray', 'SS Channel Tray', 'Painted Solid Tray'],
  },
  {
    id: 'accessories',
    title: 'Tray Fittings & Accessories',
    icon: 'settings',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop',
    description:
      'Comprehensive range of bends, tees, crosses, reducers, risers, covers, and support brackets — pre-fabricated for quick site assembly and exact fitment.',
    standards: ['IEC 61537', 'IS 16230'],
    products: ['Horizontal Bends (30°/45°/60°/90°)', 'Tee & Cross Fittings', 'Reducers & Couplers', 'Tray Covers & Clamps'],
  },
  {
    id: 'raceways',
    title: 'Cable Raceways & Ducts',
    icon: 'route',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop',
    description:
      'Slotted and solid wall cable raceways for clean, concealed cable routing in commercial interiors, control panels, and industrial switchgear rooms.',
    standards: ['UL 5A', 'IEC 61084', 'IS 16230'],
    products: ['PVC Cable Duct', 'GI Raceway', 'Slotted Cable Trunking'],
  },
];

const TRAY_CAPABILITIES = [
  { icon: 'verified', label: 'IS / IEC Certified', desc: 'Compliant with IS 16230 & IEC 61537' },
  { icon: 'shield', label: 'Corrosion Resistant', desc: 'Hot-dip galvanized, SS & powder-coated options' },
  { icon: 'straighten', label: 'Custom Fabrication', desc: 'Bespoke sizes, widths, and finishes to order' },
  { icon: 'local_shipping', label: 'Pan-India Supply', desc: 'Warehouse stock + project-direct dispatch' },
];

const TRAY_INDUSTRIES = [
  { icon: 'bolt', name: 'Power Plants' },
  { icon: 'oil_barrel', name: 'Oil & Gas' },
  { icon: 'apartment', name: 'Commercial Buildings' },
  { icon: 'factory', name: 'Manufacturing' },
  { icon: 'dns', name: 'Data Centres' },
  { icon: 'local_pharmacy', name: 'Pharmaceuticals' },
];

const CableTray: React.FC = () => {
  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80&auto=format&fit=crop"
          alt="Cable tray manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span className="text-yellow-500 font-medium">
                Cable Tray
              </span>
            </nav>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Cable Tray Systems
              <br />
              <span className="text-yellow-500">Engineered Cable Management.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
              From ladder trays to wire mesh systems — GI, SS &amp; aluminium
              cable trays designed for power plants, data centres, and
              industrial installations. IS/IEC certified and custom fabricated.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">
                download
              </span>
              Download Cable Tray Catalog
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/*  CAPABILITIES STRIP  */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRAY_CAPABILITIES.map((cap) => (
              <div key={cap.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-metallo-gold/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-metallo-gold text-xl">{cap.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-metallo-navy font-heading">{cap.label}</h3>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  PRODUCT CATEGORIES GRID  */}
      <section id="categories" className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-metallo-gold uppercase tracking-widest font-sans">Our Range</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-metallo-navy mt-3">
              Cable Tray Categories
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto font-sans">
              Complete range of cable management systems — ladder, perforated, mesh, solid bottom, and raceways — with all fittings and accessories for turnkey installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-metallo-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-metallo-gold text-2xl">{cat.icon}</span>
                    <h3 className="text-lg font-heading font-bold text-white">{cat.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.standards.map((std) => (
                      <span
                        key={std}
                        className="text-[10px] font-bold text-metallo-navy bg-metallo-gold/10 px-2.5 py-1 rounded font-sans tracking-wide"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    {cat.products.map((product) => (
                      <div key={product} className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <span className="material-symbols-outlined text-metallo-gold text-xs">check_circle</span>
                        {product}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider font-sans transition-colors group/link"
                  >
                    Enquire Now
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  INDUSTRIES  */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-metallo-gold uppercase tracking-widest font-sans">Trusted Across</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-metallo-navy mt-3">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRAY_INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 hover:bg-metallo-gold/5 border border-gray-100 hover:border-metallo-gold/20 transition-all group"
              >
                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-metallo-gold transition-colors">
                  {ind.icon}
                </span>
                <span className="text-xs font-bold text-metallo-navy uppercase tracking-wider text-center font-heading">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA BANNER  */}
      <section className="bg-metallo-navy py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
            Need a Custom Cable Tray Solution?
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto mb-10">
            Our engineering team can assist with tray sizing, material selection, load calculations, and project-specific configurations. Get a response within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-metallo-gold hover:bg-metallo-gold-hover text-metallo-navy font-bold text-sm uppercase tracking-wide transition-colors rounded-sm"
            >
              Contact Our Cable Tray Team
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide transition-colors rounded-sm"
            >
              About Metallo
              <span className="material-symbols-outlined text-lg">info</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CableTray;
