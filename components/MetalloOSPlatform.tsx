"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper components for inline SVGs
const CapacityMatchingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M7 10v4a3 3 0 0 0 3 3h4" />
  </svg>
);

const PredictiveQualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 12h4l2 6 4-14 2 8h6" />
  </svg>
);

const AutomatedSopsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const DemandForecastingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" />
  </svg>
);

const LogisticsOptimizationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
  </svg>
);

const DigitalTraceabilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

const UnifiedBomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h4" />
  </svg>
);

const AiRoutingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M6 8.5v3a3 3 0 0 0 3 3h6" />
  </svg>
);

const CentralQcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3l7 3v6c0 5-3 7-7 9-4-2-7-4-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const JitDeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="7" width="12" height="9" rx="1" />
    <path d="M14 10h4l3 3v3h-7z" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

// Count-up helper for numerical statistics on Slide 3
const AnimatedCounter: React.FC<{ to: number; label: string; suffix?: string }> = ({ to, label, suffix = "" }) => {
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
    <div className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex flex-col justify-center text-center">
      <div className="font-heading font-extrabold text-2xl md:text-3xl text-metallo-gold mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-[9px] md:text-[10px] font-heading font-bold tracking-wider uppercase text-slate-400">
        {label}
      </div>
    </div>
  );
};

const TABS = [
  { id: "01", name: "Core Platform Overview", label: "Metallo OS" },
  { id: "02", name: "Value Chain AI Capabilities", label: "Capabilities" },
  { id: "03", name: "Order Flow Lifecycle", label: "Order Flow" },
];

const MetalloOSPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 w-full overflow-hidden border-t border-slate-200" id="metallo-os">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">
            Metallo AI Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">
            Intelligent Tech Behind Every Transaction
          </h2>
          <p className="text-gray-600 text-base max-w-3xl">
            Our proprietary Manufacturing OS standardizes distributed industrial assets, enabling Tier-1 procurement with real-time tracking, quality assurance, and direct transparency.
          </p>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex border-b border-slate-200 mb-12 overflow-x-auto no-scrollbar justify-start md:justify-center px-2 md:px-0">
          <div className="flex space-x-6 md:space-x-12 pb-0.5 min-w-max">
            {TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`pb-4 text-xs md:text-sm font-heading font-bold uppercase tracking-wider relative transition-all duration-300 cursor-pointer ${
                  activeTab === idx ? "text-metallo-navy" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.id} &middot; {tab.label}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-metallo-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="tab-overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Left side text and cards */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* METALLO OS Tag */}
                  <div className="self-start bg-yellow-500/10 text-metallo-gold-hover font-heading font-bold tracking-wider uppercase text-[10px] px-3 py-1 rounded-full border border-metallo-gold/30 mb-6 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-metallo-gold animate-pulse" />
                    Metallo OS
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-6 leading-tight">
                    One intelligent platform <span className="text-metallo-gold-hover">behind every order.</span>
                  </h3>

                  <p className="text-slate-600 text-base mb-8 leading-relaxed">
                    Metallo OS is the software brain of our model. It connects the entire manufacturer network into a single system &mdash; matching demand to capacity, enforcing quality, and orchestrating delivery with AI at every step. The result: the reliability of an owned factory with the scale of a global network.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Intelligent Card */}
                    <div className="bg-metallo-navy text-white p-5 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-metallo-gold/50 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <h4 className="font-heading font-bold text-base text-white mb-2">Intelligent</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        AI matches each order to the best-fit, best-priced certified facility.
                      </p>
                    </div>

                    {/* Standardized Card */}
                    <div className="bg-metallo-navy text-white p-5 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-metallo-gold/50 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <h4 className="font-heading font-bold text-base text-white mb-2">Standardized</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        SOPs & QC enforced and monitored automatically.
                      </p>
                    </div>

                    {/* Transparent Card */}
                    <div className="bg-metallo-navy text-white p-5 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-metallo-gold/50 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <h4 className="font-heading font-bold text-base text-white mb-2">Transparent</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Live status, digital MTCs, full traceability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side Image Pane */}
                <div className="lg:col-span-5 relative h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 group">
                  <img
                    src="https://metallo-profile.vercel.app/assets/img2/tech.jpg"
                    alt="AI-Driven Orchestration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 bg-metallo-navy/90 backdrop-blur-md border border-white/20 text-white font-heading text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full z-10 shadow-lg">
                    AI-driven orchestration
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="tab-capabilities"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
              >
                <div className="text-center mb-8 max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold font-heading text-metallo-navy mb-4" style={{ textAlign: 'center' }}>
                    AI across <span className="text-metallo-gold-hover">the value chain.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Capacity Matching */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <CapacityMatchingIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Capacity Matching</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      AI routes every order to the optimal certified facility by capability, cost and lead time.
                    </p>
                  </div>

                  {/* Predictive Quality */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <PredictiveQualityIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Predictive Quality</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Models flag defect risk before production, lifting first-pass yield and consistency.
                    </p>
                  </div>

                  {/* Automated SOPs */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <AutomatedSopsIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Automated SOPs</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Process standards & QC checkpoints enforced and logged automatically at each site.
                    </p>
                  </div>

                  {/* Demand Forecasting */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <DemandForecastingIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Demand Forecasting</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Predicts order pipelines so capacity and inventory are pre-positioned, not chased.
                    </p>
                  </div>

                  {/* Logistics Optimization */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <LogisticsOptimizationIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Logistics Optimization</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      AI plans routes and consolidates shipments for synchronized, Just-in-Time arrival.
                    </p>
                  </div>

                  {/* Digital Traceability */}
                  <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-metallo-gold/30 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-5 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300 transform group-hover:rotate-[-6deg]">
                      <DigitalTraceabilityIcon />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-metallo-navy mb-2">Digital Traceability</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Every batch carries a digital Mill Test Certificate &mdash; auditable from order to site.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="tab-orderflow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col"
              >
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold font-heading text-metallo-navy mb-3" style={{ textAlign: 'center' }}>
                    How an order flows <span className="text-metallo-gold-hover">through Metallo OS.</span>
                  </h3>
                  <p className="text-slate-500 text-sm" style={{ textAlign: 'center' }}>
                    From a single unified BOM to certified delivery &mdash; AI augments every stage.
                  </p>
                </div>

                {/* Pipeline Flow Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 items-center">
                  {/* Step 1 */}
                  <div className="lg:col-span-1 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:border-metallo-gold/30 transition-all duration-300 h-full justify-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-3 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300">
                      <UnifiedBomIcon />
                    </div>
                    <div className="text-[9px] font-heading font-bold tracking-wider text-metallo-gold-hover mb-1">STEP 01</div>
                    <div className="font-heading font-bold text-sm text-metallo-navy mb-1">Unified BOM</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">One order across all 8 verticals, captured digitally.</div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="lg:col-span-1 flex items-center justify-center text-metallo-gold transform rotate-90 lg:rotate-0 my-2 lg:my-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 animate-[nudge_1.8s_ease-in-out_infinite]">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>

                  {/* Step 2 */}
                  <div className="lg:col-span-1 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:border-metallo-gold/30 transition-all duration-300 h-full justify-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-3 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300">
                      <AiRoutingIcon />
                    </div>
                    <div className="text-[9px] font-heading font-bold tracking-wider text-metallo-gold-hover mb-1">STEP 02</div>
                    <div className="font-heading font-bold text-sm text-metallo-navy mb-1">AI Routing</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mb-2">Best-fit certified facilities selected automatically.</div>
                    <span className="inline-flex items-center gap-1 bg-amber-500/10 text-metallo-gold-hover font-heading font-bold text-[8px] tracking-wide uppercase px-2 py-0.5 rounded-full border border-metallo-gold/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-metallo-gold animate-pulse" />
                      AI-Driven
                    </span>
                  </div>

                  {/* Arrow 2 */}
                  <div className="lg:col-span-1 flex items-center justify-center text-metallo-gold transform rotate-90 lg:rotate-0 my-2 lg:my-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 animate-[nudge_1.8s_ease-in-out_infinite]">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>

                  {/* Step 3 */}
                  <div className="lg:col-span-1 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:border-metallo-gold/30 transition-all duration-300 h-full justify-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-3 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300">
                      <PredictiveQualityIcon />
                    </div>
                    <div className="text-[9px] font-heading font-bold tracking-wider text-metallo-gold-hover mb-1">STEP 03</div>
                    <div className="font-heading font-bold text-sm text-metallo-navy mb-1">Monitored Build</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mb-2">SOPs & QC enforced; defect risk predicted live.</div>
                    <span className="inline-flex items-center gap-1 bg-amber-500/10 text-metallo-gold-hover font-heading font-bold text-[8px] tracking-wide uppercase px-2 py-0.5 rounded-full border border-metallo-gold/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-metallo-gold animate-pulse" />
                      Predictive
                    </span>
                  </div>

                  {/* Arrow 3 */}
                  <div className="lg:col-span-1 flex items-center justify-center text-metallo-gold transform rotate-90 lg:rotate-0 my-2 lg:my-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 animate-[nudge_1.8s_ease-in-out_infinite]">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>

                  {/* Step 4 */}
                  <div className="lg:col-span-1 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:border-metallo-gold/30 transition-all duration-300 h-full justify-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-3 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300">
                      <CentralQcIcon />
                    </div>
                    <div className="text-[9px] font-heading font-bold tracking-wider text-metallo-gold-hover mb-1">STEP 04</div>
                    <div className="font-heading font-bold text-sm text-metallo-navy mb-1">Central QC</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">100% batch-tested; digital MTC issued.</div>
                  </div>

                  {/* Arrow 4 */}
                  <div className="lg:col-span-1 flex items-center justify-center text-metallo-gold transform rotate-90 lg:rotate-0 my-2 lg:my-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 animate-[nudge_1.8s_ease-in-out_infinite]">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>

                  {/* Step 5 */}
                  <div className="lg:col-span-1 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:border-metallo-gold/30 transition-all duration-300 h-full justify-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-metallo-gold-hover flex items-center justify-center mb-3 group-hover:bg-metallo-gold group-hover:text-metallo-navy transition-all duration-300">
                      <JitDeliveryIcon />
                    </div>
                    <div className="text-[9px] font-heading font-bold tracking-wider text-metallo-gold-hover mb-1">STEP 05</div>
                    <div className="font-heading font-bold text-sm text-metallo-navy mb-1">JIT Delivery</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mb-2">Optimized, synchronized, on-site on time.</div>
                    <span className="inline-flex items-center gap-1 bg-amber-500/10 text-metallo-gold-hover font-heading font-bold text-[8px] tracking-wide uppercase px-2 py-0.5 rounded-full border border-metallo-gold/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-metallo-gold animate-pulse" />
                      Optimized
                    </span>
                  </div>
                </div>

                {/* Bottom Stats Banner */}
                <div className="bg-metallo-navy text-white rounded-2xl p-6 mt-12 shadow-xl border border-slate-850 relative overflow-hidden group hover:border-metallo-gold/25 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-metallo-gold to-metallo-gold-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5 flex flex-col">
                      <h4 className="font-heading font-bold text-lg text-white mb-2 leading-tight">
                        The platform you never see &mdash; but always feel.
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        Your team places one order and tracks it live. Metallo OS orchestrates the rest.
                      </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-3 gap-3 md:gap-5">
                      <AnimatedCounter to={1} label="Unified PO In" />
                      <AnimatedCounter to={100} suffix="%" label="Certified Out" />
                      {/* Special textual/state counter for 'Live' */}
                      <div className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl flex flex-col justify-center text-center">
                        <div className="font-heading font-extrabold text-2xl md:text-3xl text-metallo-gold mb-1 animate-pulse">
                          Live
                        </div>
                        <div className="text-[9px] md:text-[10px] font-heading font-bold tracking-wider uppercase text-slate-400">
                          Order Tracking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        @keyframes nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
      `}</style>
    </section>
  );
};

export default MetalloOSPlatform;
