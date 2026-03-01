import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-6 leading-tight">
              The Distributed Manufacturing OS for <span className="text-metallo-gold-hover">Industrial India</span>.
            </h2>
            <h3 className="text-xl font-medium text-gray-500 mb-8 uppercase tracking-wide font-sans">
              We don't just build factories. We aggregate, standardize, and scale the nation's idle industrial capacity.
            </h3>
            <div className="prose prose-lg text-gray-600 mb-10 space-y-4">
              <p>
                The Indian manufacturing sector is massive but highly fragmented. Metallo acts as the central orchestrator—aggregating idle capacity across MSME facilities, from stainless steel pipe mills to cable tray fabricators. We upgrade them to global standards and integrate them into one seamless production ecosystem.
              </p>
              <p>
                By operating an asset-light model, we offer EPC contractors infinite scaling flexibility. Every product—whether a structural steel beam or an industrial assembly—undergoes rigorous testing at our Central QC Hub, ensuring Tier-1 quality without the heavy CAPEX overhead.
              </p>
              <p>
                We don't just supply products; we engineer certainty. Whether you are building a mega-factory, a smart city, or a port, Metallo provides the standardized quality and manufacturing velocity you need to deliver on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {/* Pillar 1 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">account_tree</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Asset-Light Scaling</h4>
                <p className="text-sm text-gray-600">Infinite manufacturing capacity across our audited MSME network.</p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">fact_check</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Central QC Hub</h4>
                <p className="text-sm text-gray-600">100% batch-tested with strict SOPs & Material Testing Certificates (MTC).</p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">inventory_2</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Unified Procurement</h4>
                <p className="text-sm text-gray-600">One integrated platform for your entire infrastructure Bill of Materials (BOM).</p>
              </div>
            </div>
          </div>
          {/* Image Cards — Zetwerk-style */}
          <div className="order-2 flex flex-col gap-6">

            {/* Card 1 — India Entry for Global Manufacturers */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <img
                alt="India Entry for Global Manufacturers"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  Your Single Gateway<br />Into Indian Manufacturing
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover mt-2 tracking-wide">
                  Audited local capacity, global standards, faster market entry.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  Skip the complexity of India's fragmented supply base. Metallo's Manufacturing OS connects you to 500+ audited MSME facilities with standardized SOPs, Central QC Hub testing, and full MTC traceability—production-ready from day one.
                </p>
              </div>
            </div>

            {/* Card 2 — Global Expansion for Indian Manufacturers */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <img
                alt="Global Expansion for Indian Manufacturers"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  From India to the World,<br />Built to Spec
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover overlay-black mt-2 tracking-wide">
                  Export‑grade processes, unified QA, faster go‑to‑market.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  Metallo converts your idle capacity into export‑grade output. We handle unified BOMs, procurement, and quality traceability across your MSME network—so you win international tenders in the Middle East, Africa, and beyond without adding CAPEX.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;