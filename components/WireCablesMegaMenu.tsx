"use client";

import React from "react";
import Link from "next/link";

const groupPath = (group: string) =>
  `/products/wire-cables?group=${encodeURIComponent(group)}`;

const LT_PATH = groupPath("lt");
const HT_PATH = groupPath("ht");

const WireCablesMegaMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-40 transition-all duration-300 ease-out overflow-hidden ${
        isOpen
          ? "opacity-100 max-h-[540px] pointer-events-auto"
          : "opacity-0 max-h-0 pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.9fr] gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-metallo-gold text-xl">
                bolt
              </span>
              <h4 className="text-sm font-heading font-bold text-metallo-navy uppercase tracking-wider">
                LT Power & Control Cable
              </h4>
            </div>

            <div className="space-y-0">
              {[
                ["0.6/1 kV Single & Multicore", "Power feeders"],
                ["0.6/1 kV Control Cables", "1.5 / 2.5 sq mm"],
                ["1.8/3.0 (3.6) kV", "Armoured builds"],
              ].map(([name, spec]) => (
                <Link
                  key={name}
                  href={LT_PATH}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 group border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-sm text-gray-600 group-hover:text-metallo-navy transition-colors font-sans">
                    {name}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded font-sans tracking-wide">
                    {spec}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href={LT_PATH}
              onClick={onClose}
              className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider font-sans transition-colors"
            >
              View LT Range
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-metallo-gold text-xl">
                offline_bolt
              </span>
              <h4 className="text-sm font-heading font-bold text-metallo-navy uppercase tracking-wider">
                HT Power Cable
              </h4>
            </div>

            <div className="space-y-0">
              {[
                ["3.6/6.0 (7.2) kV", "Single & three core"],
                ["6/10 (12) kV", "Screened XLPE"],
                ["8.7/15 to 18/30 (36) kV", "Industrial distribution"],
              ].map(([name, spec]) => (
                <Link
                  key={name}
                  href={HT_PATH}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 group border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-sm text-gray-600 group-hover:text-metallo-navy transition-colors font-sans">
                    {name}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded font-sans tracking-wide">
                    {spec}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href={HT_PATH}
              onClick={onClose}
              className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider font-sans transition-colors"
            >
              View HT Range
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="border-l border-gray-100 pl-8">
            <div className="bg-metallo-gold/5 border border-metallo-gold/20 rounded-xl p-5 mb-6">
              <div className="w-11 h-11 rounded-lg bg-metallo-gold/15 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-metallo-gold text-2xl">
                  electrical_services
                </span>
              </div>
              <h4 className="font-heading text-base font-bold text-metallo-navy mb-2">
                Metallo Wire & Cable
              </h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                Metallo's wire and cable range is organized around LT Power &
                Control Cable and HT Power Cable selections for industrial
                distribution, control circuits, and medium-voltage networks.
              </p>
              <Link
                href="/products/wire-cables"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-metallo-navy hover:text-metallo-gold uppercase tracking-wider font-sans transition-colors"
              >
                OPEN CATALOGUE
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="mb-6">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-heading mb-4">
                Selection Lens
              </h5>
              <div className="space-y-3">
                {[
                  "Exact LT and HT catalogue-aligned naming",
                  "Applicable standards and insulated material visible",
                  "Key industries and compliance surfaced per card",
                  "Industrial power and control scope for project supply",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600 font-sans"
                  >
                    <span className="material-symbols-outlined text-lg text-metallo-gold">
                      check_circle
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/products/wire-cables"
                onClick={onClose}
                className="flex items-center justify-between text-sm font-bold text-metallo-navy hover:text-metallo-gold transition-colors font-sans"
              >
                View Wire & Cable Page
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireCablesMegaMenu;
