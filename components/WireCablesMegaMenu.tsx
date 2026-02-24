import React from 'react';
import { Link } from 'react-router-dom';

/* ═══════════════════════════════════════════════════════════════
   WIRE & CABLES — MEGA MENU (Light Theme)
   Matches Steel mega menu: white bg, gold accents, spec badges,
   4-column links + right CTA panel (Ampacity Calculator card
   + Quick Resources + View All).
   Same animation pattern as Steel: max-h transition + opacity.
   ═══════════════════════════════════════════════════════════════ */

/* ── Helper: build Wire & Cables page path with category filter ── */
const cablePath = (categories: string[], productId?: string) => {
  const p = new URLSearchParams();
  categories.forEach(c => p.append('cat', c));
  if (productId) p.append('product', productId);
  return `/products/wire-cables?${p.toString()}`;
};

/* ── Menu Data — 4 link columns ── */
const WIRE_MEGA_COLUMNS = [
  {
    title: 'Power Distribution',
    icon: 'bolt',
    viewAll: 'View All Power Cables',
    viewAllPath: cablePath(['Power Cables (Low Voltage)', 'Power Cables (High Voltage)', 'Power Cables (Extra High Voltage)']),
    links: [
      { name: 'LT Single Core Unarmoured',  spec: 'IS 694',    path: cablePath(['Power Cables (Low Voltage)'], 'c1') },
      { name: 'LT Multi-Core Armoured',     spec: 'IS 1554',   path: cablePath(['Power Cables (Low Voltage)'], 'c2') },
      { name: 'HT XLPE Power Cable',        spec: 'IS 7098',   path: cablePath(['Power Cables (High Voltage)'], 'c4') },
      { name: 'EHV Cables (66–220 kV)',      spec: 'IEC 60840', path: cablePath(['Power Cables (Extra High Voltage)'], 'c10') },
      { name: 'Aerial Bunched Cable',        spec: 'IS 14255',  path: cablePath(['Overhead Distribution'], 'c9') },
    ],
  },
  {
    title: 'Control & Automation',
    icon: 'memory',
    viewAll: 'View All Control Cables',
    viewAllPath: cablePath(['Control & Automation', 'Railway & Infrastructure']),
    links: [
      { name: 'LT Control Cables',          spec: 'IS 1554',   path: cablePath(['Control & Automation'], 'c3') },
      { name: 'Instrumentation (Screened)',  spec: 'IS 1554',   path: cablePath(['Control & Automation'], 'c8') },
      { name: 'Railway Signaling Cable',     spec: 'RDSO Spec', path: cablePath(['Railway & Infrastructure'], 'c12') },
    ],
  },
  {
    title: 'Extreme Environments',
    icon: 'local_fire_department',
    viewAll: 'View All Specialty',
    viewAllPath: cablePath(['Life Safety & Emergency', 'Heavy Duty & Mining']),
    links: [
      { name: 'Fire Survival (950 °C)',      spec: 'BS 6387',   path: cablePath(['Life Safety & Emergency'], 'c6') },
      { name: 'Elastomeric / Rubber Cable',  spec: 'IS 9968',   path: cablePath(['Heavy Duty & Mining'], 'c7') },
      { name: 'Submersible Flat Cable',      spec: 'IS 694',    path: cablePath(['Specialty & Renewables'], 'c11') },
    ],
  },
  {
    title: 'Renewables & Comm',
    icon: 'solar_power',
    viewAll: 'View All Renewables',
    viewAllPath: cablePath(['Specialty & Renewables', 'Communication & Data']),
    links: [
      { name: 'Solar DC Cable',             spec: 'EN 50618',  path: cablePath(['Specialty & Renewables'], 'c5') },
      { name: 'EV Charging Cable',          spec: 'EN 50620',  path: cablePath(['Specialty & Renewables'], 'c13') },
      { name: 'LAN / Ethernet CAT6',        spec: 'TIA-568',   path: cablePath(['Communication & Data'], 'c14') },
      { name: 'Coaxial Cable (RG-6/11)',     spec: 'MIL-C-17',  path: cablePath(['Communication & Data'], 'c15') },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════ */

interface WireCablesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const WireCablesMegaMenu: React.FC<WireCablesMegaMenuProps> = ({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-40 transition-all duration-300 ease-out overflow-hidden ${
        isOpen
          ? 'opacity-100 max-h-[600px] pointer-events-auto'
          : 'opacity-0 max-h-0 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-5 gap-8">

          {/* ── Link Columns (1-4) — same pattern as Steel ── */}
          {WIRE_MEGA_COLUMNS.map(col => (
            <div key={col.title}>
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-metallo-gold text-xl">{col.icon}</span>
                <h4 className="text-sm font-heading font-bold text-metallo-navy uppercase tracking-wider">{col.title}</h4>
              </div>

              {/* Links with spec badges — identical to Steel */}
              <div className="space-y-0">
                {col.links.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 group border-b border-gray-100 last:border-b-0 transition-all"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-metallo-navy group-hover:translate-x-1 transition-all duration-200 font-sans">
                      {link.name}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded font-sans tracking-wide group-hover:text-metallo-navy group-hover:bg-metallo-gold/10 transition-colors">
                      {link.spec}
                    </span>
                  </Link>
                ))}
              </div>

              {/* View All link */}
              <Link
                to={col.viewAllPath}
                onClick={onClose}
                className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider font-sans transition-colors"
              >
                {col.viewAll}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}

          {/* ── Column 5: CTA Panel (Ampacity Calculator + Quick Resources) ── */}
          <div className="border-l border-gray-100 pl-8">
            {/* Ampacity Calculator Card */}
            <div className="bg-metallo-gold/5 border border-metallo-gold/20 rounded-xl p-5 mb-6">
              <div className="w-11 h-11 rounded-lg bg-metallo-gold/15 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-metallo-gold text-2xl">calculate</span>
              </div>
              <h4 className="font-heading text-base font-bold text-metallo-navy mb-2">
                Ampacity Calculator
              </h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                Calculate current carrying capacity for different cable types instantly.
              </p>
              <Link
                to="/products/wire-cables"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-metallo-navy hover:text-metallo-gold uppercase tracking-wider font-sans transition-colors"
              >
                OPEN TOOL
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Quick Resources */}
            <div className="mb-6">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-heading mb-4">
                Quick Resources
              </h5>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-metallo-navy transition-colors font-sans group">
                  <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-metallo-gold transition-colors">description</span>
                  Technical Datasheets
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-metallo-navy transition-colors font-sans group">
                  <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-metallo-gold transition-colors">download</span>
                  Product Catalog 2024
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-metallo-navy transition-colors font-sans group">
                  <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-metallo-gold transition-colors">verified</span>
                  Quality Certificates
                </a>
              </div>
            </div>

            {/* View All Products link */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/products/wire-cables"
                onClick={onClose}
                className="flex items-center justify-between text-sm font-bold text-metallo-navy hover:text-metallo-gold transition-colors font-sans"
              >
                View All Products
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </Link>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400 font-sans">
            <span className="font-bold text-metallo-navy">15+ cable types</span> — IS, IEC & BS certified, factory-direct from approved manufacturers.
          </p>
          <Link
            to="/products/wire-cables"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider font-heading transition-colors"
          >
            View All Wire & Cable Products
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WireCablesMegaMenu;
