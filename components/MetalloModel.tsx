"use client";

import React, { useState, useEffect } from "react";

// Count-up helper for numerical statistics below the model
const AnimatedCounter: React.FC<{ to: number; label: string; suffix?: string; prefix?: string }> = ({ to, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const increment = to / (duration / 16); // ~60fps
    let timer: NodeJS.Timeout;

    const run = () => {
      start += increment;
      if (start >= to) {
        setCount(to);
      } else {
        setCount(Math.floor(start));
        timer = setTimeout(run, 16);
      }
    };

    run();
    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center">
      <div className="font-heading font-extrabold text-3xl md:text-4xl text-metallo-gold-hover mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-[10px] md:text-xs font-heading font-bold tracking-wider uppercase text-slate-500">
        {label}
      </div>
    </div>
  );
};

const MetalloModel: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 w-full overflow-hidden border-t border-slate-200" id="metallo-model">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned to match the rest of About page layout */}
        <div className="mb-12 text-left">
          <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">
            The Metallo Model
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-4 leading-tight">
            The Distributed Manufacturing OS
          </h2>
          <p className="text-gray-600 text-base max-w-3xl leading-relaxed">
            We don't build factories &mdash; we orchestrate a borderless network into Tier-1 certified output, on demand.
          </p>
        </div>

        {/* Dynamic Blueprint SVG Diagram */}
        <div className="w-full bg-white border border-slate-200/80 p-4 md:p-8 rounded-3xl shadow-sm mb-12 relative overflow-hidden">
          {/* Subtle grid background to match industrial theme */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ 
                 backgroundImage: "radial-gradient(#000 1px, transparent 1px)", 
                 backgroundSize: "20px 20px" 
               }} 
          />

          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="min-w-[1000px] lg:min-w-full">
              <svg viewBox="0 0 1130 400" preserveAspectRatio="xMidYMid meet" className="w-full h-auto block overflow-visible">
                {/* SVG styles for animations */}
                <style>{`
                  @keyframes spin-clockwise {
                    to { transform: rotate(360deg); }
                  }
                  @keyframes flow-in {
                    to { stroke-dashoffset: -160; }
                  }
                  @keyframes flow-out {
                    to { stroke-dashoffset: 160; }
                  }
                  .flow-line-in {
                    animation: flow-in 3.5s linear infinite;
                  }
                  .flow-line-out {
                    animation: flow-out 3.5s linear infinite;
                  }
                  .logo-spin {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: spin-clockwise 25s linear infinite;
                  }
                `}</style>

                {/* ===== 01 - AGGREGATE SECTION ===== */}
                <g>
                  {/* Section Title */}
                  <text x="82" y="15" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11" letterSpacing="2.5" fill="#EAB308">01 &middot; AGGREGATE</text>
                  
                  {/* Connection Lines (Aggregate to Core - adjusted endpoints to stop at x=496-500) */}
                  <g fill="none" stroke="#E2E8F0" strokeWidth="1.5">
                    <path d="M156,60 Q380,60 496,201" />
                    <path d="M156,128 Q400,128 500,209" />
                    <path d="M156,196 Q420,196 500,215" />
                    <path d="M156,264 Q400,264 500,221" />
                    <path d="M156,332 Q380,332 496,229" />
                  </g>
                  
                  {/* Flow Animation Lines */}
                  <g fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 18" className="flow-line-in">
                    <path d="M156,60 Q380,60 496,201" />
                    <path d="M156,128 Q400,128 500,209" />
                    <path d="M156,196 Q420,196 500,215" />
                    <path d="M156,264 Q400,264 500,221" />
                    <path d="M156,332 Q380,332 496,229" />
                  </g>

                  {/* Input Nodes (ForeignObjects for modern Tailwind cards) */}
                  {/* Node 1: Steel Mills */}
                  <foreignObject x="6" y="38" width="150" height="44" className="overflow-visible">
                    <div className="bg-white border border-slate-200/80 hover:border-metallo-gold/50 shadow-sm hover:shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-2 h-2 rounded-full bg-metallo-gold flex-shrink-0" />
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-metallo-navy font-heading">Steel Mills</div>
                        <div className="text-[9.5px] text-slate-500 font-sans">Heavy structural & pipe</div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Node 2: Wire & Cable Fab */}
                  <foreignObject x="6" y="106" width="150" height="44" className="overflow-visible">
                    <div className="bg-white border border-slate-200/80 hover:border-metallo-gold/50 shadow-sm hover:shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-2 h-2 rounded-full bg-metallo-gold flex-shrink-0" />
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-metallo-navy font-heading">Wire & Cable Fab</div>
                        <div className="text-[9.5px] text-slate-500 font-sans">LT / HT & fire-survival</div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Node 3: Welding & Piping */}
                  <foreignObject x="6" y="174" width="150" height="44" className="overflow-visible">
                    <div className="bg-white border border-slate-200/80 hover:border-metallo-gold/50 shadow-sm hover:shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-2 h-2 rounded-full bg-metallo-gold flex-shrink-0" />
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-metallo-navy font-heading">Welding & Piping</div>
                        <div className="text-[9.5px] text-slate-500 font-sans">Consumables & spools</div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Node 4: Fabrication Units */}
                  <foreignObject x="6" y="242" width="150" height="44" className="overflow-visible">
                    <div className="bg-white border border-slate-200/80 hover:border-metallo-gold/50 shadow-sm hover:shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-2 h-2 rounded-full bg-metallo-gold flex-shrink-0" />
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-metallo-navy font-heading">Fabrication Units</div>
                        <div className="text-[9.5px] text-slate-500 font-sans">PEB & structures</div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Node 5: OEM Partners */}
                  <foreignObject x="6" y="310" width="150" height="44" className="overflow-visible">
                    <div className="bg-white border border-slate-200/80 hover:border-metallo-gold/50 shadow-sm hover:shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-2 h-2 rounded-full bg-metallo-gold flex-shrink-0" />
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-metallo-navy font-heading">OEM Partners</div>
                        <div className="text-[9.5px] text-slate-500 font-sans">Tools & motors</div>
                      </div>
                    </div>
                  </foreignObject>
                </g>

                {/* ===== 02 - STANDARDIZE (CORE) SECTION ===== */}
                <g>
                  {/* Section Title */}
                  <text x="565" y="15" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11" letterSpacing="2.5" fill="#EAB308">02 &middot; STANDARDIZE</text>
                  
                  {/* Core Badges via ForeignObjects */}
                  {/* AI-Enforced SOPs Badge (Perfect 40px gap above globe: y=93, height=26, ends at 119) */}
                  <foreignObject x="495" y="93" width="140" height="30" className="overflow-visible">
                    <div className="bg-amber-50 text-metallo-gold-hover border border-amber-200/60 rounded-full px-3 py-1 text-[9.5px] font-heading font-extrabold uppercase tracking-wider text-center shadow-sm">
                      AI-ENFORCED SOPs
                    </div>
                  </foreignObject>
                  
                  {/* Central Core Spinning Globe Icon (Globe top is 159, bottom is 271) */}
                  <foreignObject x="485" y="135" width="160" height="160" className="overflow-visible">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Animated glowing backdrops */}
                      <div className="absolute w-28 h-28 bg-metallo-gold/5 rounded-full blur-lg animate-pulse" />
                      
                      {/* Spinning Logo Icon (Large, Dark Navy, matches Metallo Symbol exactly) */}
                      <div className="w-[140px] h-[140px] relative z-10 flex items-center justify-center logo-spin">
                        <img
                          src="/logo-icon.svg"
                          alt="Metallo OS Core"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Static Metallo OS Text centered inside the spinning globe logo */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                        <span className="font-heading font-bold text-[10px] uppercase tracking-wider text-metallo-navy leading-none">
                          Metallo
                        </span>
                        <span className="font-heading font-extrabold text-xs md:text-sm uppercase tracking-widest text-metallo-gold-hover mt-0.5 leading-none">
                          OS
                        </span>
                      </div>
                    </div>
                  </foreignObject>
                  
                  {/* Central QC Hub Badge (Perfect 40px gap below globe: starts at y=311) */}
                  <foreignObject x="465" y="311" width="200" height="30" className="overflow-visible">
                    <div className="bg-amber-50 text-metallo-gold-hover border border-amber-200/60 rounded-full px-3 py-1 text-[9.5px] font-heading font-extrabold uppercase tracking-wider text-center shadow-sm">
                      CENTRAL QC HUB &middot; 100% MTC
                    </div>
                  </foreignObject>
                </g>

                {/* ===== 03 - SCALE & DELIVER SECTION ===== */}
                <g>
                  {/* Section Title */}
                  <text x="1036" y="15" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="11" letterSpacing="2.5" fill="#EAB308">03 &middot; SCALE &amp; DELIVER</text>
                  
                  {/* Connection Lines (Core to Output - adjusted start points to 634 to prevent overlaps) */}
                  <g fill="none" stroke="#E2E8F0" strokeWidth="1.5">
                    <path d="M634,203 Q800,150 946,150" />
                    <path d="M634,227 Q800,280 946,280" />
                  </g>
                  
                  {/* Flow Animation Lines */}
                  <g fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 18" className="flow-line-out">
                    <path d="M634,203 Q800,150 946,150" />
                    <path d="M634,227 Q800,280 946,280" />
                  </g>

                  {/* Output Nodes (ForeignObjects for modern Tailwind cards) */}
                  {/* Node 1: Certified Output */}
                  <foreignObject x="938" y="121" width="188" height="60" className="overflow-visible">
                    <div className="bg-white border border-slate-200 hover:border-metallo-gold/50 text-slate-900 rounded-xl p-3 flex items-center transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden shadow-sm hover:shadow-md">
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-metallo-navy" />
                      <div className="leading-tight pl-2">
                        <div className="text-xs font-bold font-heading text-metallo-navy">Certified Output</div>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">Tier-1 &middot; batch-tested &middot; MTC</div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* Node 2: Global EPC Projects */}
                  <foreignObject x="938" y="251" width="188" height="60" className="overflow-visible">
                    <div className="bg-white border border-slate-200 hover:border-metallo-gold/50 text-slate-900 rounded-xl p-3 flex items-center transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden shadow-sm hover:shadow-md">
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-metallo-navy" />
                      <div className="leading-tight pl-2">
                        <div className="text-xs font-bold font-heading text-metallo-navy">Global EPC Projects</div>
                        <div className="text-[10px] text-slate-500 font-sans mt-0.5">Delivered Just-in-Time</div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Numerical Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <AnimatedCounter to={8} label="Integrated Product Verticals" />
          <AnimatedCounter to={100} suffix="%" label="Batch-Tested at Central QC Hub" />
          <AnimatedCounter to={60} prefix="-" suffix="%" label="Procurement Overhead Savings" />
        </div>

        {/* Highlights Banner */}
        <div className="bg-metallo-navy text-white rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl border border-slate-800 relative overflow-hidden group hover:border-metallo-gold/25 transition-all duration-300 text-center">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-metallo-gold via-metallo-gold-hover to-metallo-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-metallo-gold-hover font-heading font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-metallo-gold/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-metallo-gold animate-pulse" />
            Asset-Light OS
          </div>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Infinite on-demand capacity with no heavy CAPEX &mdash; the reliability of an owned factory at the scale of a global network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetalloModel;
