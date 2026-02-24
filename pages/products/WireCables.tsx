import React from 'react';
import { Link } from 'react-router-dom';

/* ========================================================================
   WIRE & CABLES — Category Hub (Brand Showcase)
   ======================================================================== */

const CABLE_CATEGORIES = [
  {
    id: 'lv-power',
    title: 'Power Cables (Low Voltage)',
    icon: 'electrical_services',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format&fit=crop',
    description: 'Single core and multi-core LT cables up to 1.1 kV — PVC & XLPE insulated, armoured and unarmoured configurations.',
    standards: ['IS 1554', 'IS 7098', 'IEC 60502-1'],
    products: ['LT Single Core Unarmoured', 'LT Multi-Core Armoured', 'LT XLPE Power Cables'],
  },
  {
    id: 'hv-power',
    title: 'Power Cables (HV / EHV)',
    icon: 'bolt',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop',
    description: 'Medium to extra-high voltage cables from 3.3 kV to 220 kV — XLPE insulated with copper or aluminium conductors.',
    standards: ['IS 7098 (Part 2)', 'IEC 60502-2', 'IEC 60840'],
    products: ['HT XLPE Power Cables', 'EHV XLPE Cables (66-220 kV)'],
  },
  {
    id: 'control',
    title: 'Control & Automation',
    icon: 'settings_input_component',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop',
    description: 'Multi-core control cables and instrumentation cables for process automation, PLC integration, and SCADA systems.',
    standards: ['IS 1554 (Part 1)', 'IEC 60227'],
    products: ['Multi-Core Control Cables', 'Instrumentation Cables'],
  },
  {
    id: 'specialty',
    title: 'Specialty & Renewables',
    icon: 'solar_power',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop',
    description: 'Solar DC cables, flexible welding cables, and rubber-sheathed cables for renewable energy and industrial applications.',
    standards: ['EN 50618', 'IS 9968', 'IEC 60245'],
    products: ['Solar DC Cables', 'Welding Cables', 'Rubber Sheathed Flexible Cables'],
  },
  {
    id: 'safety',
    title: 'Fire Safety & Mining',
    icon: 'local_fire_department',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop',
    description: 'Fire survival (LSZH) cables and heavy-duty mining cables engineered for the most demanding and hazardous environments.',
    standards: ['BS 7846', 'IS 15419', 'IS 14494'],
    products: ['FRLS / LSZH Fire Survival Cables', 'Heavy Duty Mining Cables'],
  },
  {
    id: 'infrastructure',
    title: 'Overhead & Rail',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop',
    description: 'Aerial bunched cables for overhead distribution networks and OHE catenary cables for railway electrification.',
    standards: ['IS 14255', 'IRS Spec', 'RDSO Approved'],
    products: ['Aerial Bunched Cables (ABC)', 'Railway OHE Catenary Cables'],
  },
];

const CABLE_CAPABILITIES = [
  { icon: 'verified', label: 'BIS Certified', desc: 'CM/L marked — Bureau of Indian Standards' },
  { icon: 'thermostat', label: 'Wide Temp Range', desc: '70C PVC to 250C rated specialty cables' },
  { icon: 'straighten', label: 'Custom Lengths', desc: 'Cut-to-length supply for project requirements' },
  { icon: 'local_shipping', label: 'Pan-India Delivery', desc: 'Warehouse stock + direct mill dispatch' },
];

const CABLE_INDUSTRIES = [
  { icon: 'bolt', name: 'Power Generation' },
  { icon: 'solar_power', name: 'Renewables' },
  { icon: 'oil_barrel', name: 'Oil & Gas' },
  { icon: 'apartment', name: 'Infrastructure' },
  { icon: 'train', name: 'Railways' },
  { icon: 'precision_manufacturing', name: 'Mining' },
];

const WireCables: React.FC = () => {
  return (
    <div className="font-sans text-metallo-navy">
      {/*  HERO  */}
      <section className="relative bg-metallo-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80&auto=format&fit=crop"
            alt="Wire cables"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-metallo-navy via-metallo-navy/95 to-metallo-navy/70" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-metallo-gold text-3xl">cable</span>
              <span className="text-xs font-bold text-metallo-gold uppercase tracking-widest font-sans">Wire & Cables Division</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
              Wire & Cables<br />
              <span className="text-metallo-gold">Powering Every Project</span>
            </h1>
            <p className="text-lg text-gray-300 font-sans leading-relaxed mb-10 max-w-xl">
              From low-voltage building wires to 220 kV EHV power cables — BIS certified, fire-rated, and engineered for India's most critical infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-metallo-gold hover:bg-metallo-gold-hover text-metallo-navy font-bold text-sm uppercase tracking-wide transition-colors rounded-sm"
              >
                Request a Quote
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide transition-colors rounded-sm"
              >
                Explore Range
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  CAPABILITIES STRIP  */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CABLE_CAPABILITIES.map((cap) => (
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
              Cable Categories
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto font-sans">
              15+ cable types across LV, HV, control, specialty, and infrastructure segments — all BIS certified and backed by comprehensive test reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CABLE_CATEGORIES.map((cat) => (
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
            {CABLE_INDUSTRIES.map((ind) => (
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
            Need a Custom Cable Solution?
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto mb-10">
            Our engineering team can assist with cable sizing, fire-rating selection, and project-specific requirements. Get a response within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-metallo-gold hover:bg-metallo-gold-hover text-metallo-navy font-bold text-sm uppercase tracking-wide transition-colors rounded-sm"
            >
              Contact Our Cable Team
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

export default WireCables;
