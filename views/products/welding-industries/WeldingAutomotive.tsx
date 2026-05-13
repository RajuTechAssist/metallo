"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { SITE_IMAGES } from '@/config/images';

/* ─── SECTION NAV ───────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Overview', id: 'overview' },
  { label: 'Why Metallo', id: 'why-metallo' },
  { label: 'Audiences', id: 'audiences' },
  { label: 'Products', id: 'products' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Technical', id: 'technical' },
  { label: 'Benefits', id: 'benefits' },
];

/* ─── PRODUCT DATA (Welding Focus) ───────────────────────────── */
const PRODUCTS = [
  {
    title: 'High-Integrity Consumables',
    icon: 'whatshot',
    useCases: 'Thin-gauge steel, AHSS joining, EV battery aluminum trays, CuSi brazing for galvanized parts.',
    assurance: 'AWS A5.18 / A5.10 certified, zero-spatter copper-coated MIG wires, exact cast and helix tolerances.',
    image: SITE_IMAGES.welding.automotive.products.consumables,
  },
  {
    title: 'Robotic & Collaborative Automation',
    icon: 'smart_toy',
    useCases: 'High-volume chassis fabrication, repetitive exhaust welding, precision spot welding cells.',
    assurance: 'ISO 10218-1/2 compliant, A3 integrator certified, integrated laser seam tracking.',
    image: SITE_IMAGES.welding.automotive.products.roboticAuto,
  },
  {
    title: 'Optimized Wire Delivery',
    icon: 'speed',
    useCases: 'Uninterrupted robotic feeding from 500kg bulk drums across massive assembly floors.',
    assurance: 'Low-friction polymer conduits, mechanized wire straighteners, elimination of micro-stops.',
    image: SITE_IMAGES.welding.automotive.products.wireDelivery,
  },
  {
    title: 'Factory-Scale Extraction',
    icon: 'air',
    useCases: 'Capture of toxic aluminum and galvanized fumes on high-density automotive manufacturing floors.',
    assurance: 'BOHS P601 compliant, robotic line hoods, centralized Kemper high-vacuum source extraction.',
    image: SITE_IMAGES.welding.automotive.products.extraction,
  },
  {
    title: 'Weld Data & Monitoring',
    icon: 'query_stats',
    useCases: 'Real-time OEE tracking, arc stability analysis, defect prediction on JIT assembly lines.',
    assurance: 'ISO/IEC 27001 data security, integration with factory MES, automated WPS parameter logging.',
    image: SITE_IMAGES.welding.automotive.products.weldData,
  },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
  { title: 'Line Assessment', desc: 'Metallo engineers analyze your assembly line, robotic payload capacity, and material combinations (AHSS, Aluminum).', icon: 'troubleshoot' },
  { title: 'Consumable & Automation Matching', desc: 'Precise matching of filler metals, bulk wire delivery systems, and localized fume extraction hoods for the specific cell.', icon: 'tune' },
  { title: 'Pilot & Parameter Optimization', desc: 'On-site pilot runs to dial in wire feed speeds, voltage, and gas mixtures to achieve zero-spatter, IATF-aligned welds.', icon: 'science' },
  { title: 'Monitoring Deployment', desc: 'Integration of real-time arc sensors and data logging to track OEE and predict maintenance needs before failure.', icon: 'query_stats' },
  { title: 'JIT Supply & Maintenance', desc: 'Continuous Just-In-Time delivery of bulk consumables and scheduled PAT/calibration maintenance by Metallo technicians.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
  { title: 'Zero Unplanned Downtime', desc: 'Perfectly wound bulk drums and low-friction conduits eliminate wire feed errors and robotic micro-stops.', icon: 'bolt' },
  { title: 'Eliminate Rework', desc: 'Zero-spatter consumables and dialed-in parameters remove the need for post-weld grinding and cleaning.', icon: 'task_alt' },
  { title: 'IATF 16949 Alignment', desc: 'Full digital traceability of weld parameters and consumable batch MTCs for strict OEM compliance.', icon: 'verified' },
  { title: 'Workforce Safety', desc: 'BOHS-compliant extraction systems protect operators from hazardous galvanized and aluminum fumes.', icon: 'health_and_safety' },
  { title: 'Multi-Material Readiness', desc: 'Advanced alloys and CuSi brazing wires prepared for EV lightweighting and dissimilar metal joining.', icon: 'ev_station' },
];

/* ─── ANIMATION VARIANTS ────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

/* ─── ANIMATED SECTION WRAPPER ──────────────────────────────── */
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const MotionImage = motion(Image);

/* ═══════════════════════════════════════════════════════════════
   WELDING - AUTOMOTIVE & MOBILITY PAGE
   ═══════════════════════════════════════════════════════════════ */
const WeldingAutomotive: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white global-justify-wrapper">

      {/* ═══ 1. HERO ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        <MotionImage
          src={SITE_IMAGES.welding.automotive.hero}
          alt="Automotive robotic welding assembly line"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{ y: heroY }}
        />

        <motion.div
          className="relative z-10 flex flex-col justify-center h-full container"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl inset-0 bg-slate-900/60 p-8 rounded-xl backdrop-blur-sm">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8 font-sans">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link href="/welding" className="hover:text-white transition-colors">Welding & Allied</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Automotive &amp; Mobility</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              High-Volume Precision.<br />
              <span className="text-yellow-500">Zero-Defect Assembly.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-sans leading-relaxed">
              Deploying high-integrity welding consumables, advanced robotic automation, and real-time process monitoring for global automotive OEMs, Tier-1 suppliers, and next-generation EV manufacturers.
            </p>


          </div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY SECTION NAV ══════════════════════════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative whitespace-nowrap px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${activeSection === item.id
                    ? 'text-yellow-600'
                    : 'text-slate-500 hover:text-metallo-navy'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-500 rounded-t" />
                  )}
                </button>
              ))}
            </div>

            <Link
              href="/products/welding"
              className="hidden md:flex items-center gap-1 text-sm font-bold font-heading text-metallo-navy hover:text-yellow-600 transition-colors uppercase tracking-wider whitespace-nowrap px-4"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Overview
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══ 2. OVERVIEW ═══════════════════════════════════════════ */}
      <AnimatedSection id="overview" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container">
          <div className="w-full">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">Overview</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
              Metallo × WB Alloys for Automotive & Mobility
            </h2>

            <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
              <p>
                The global automotive landscape is undergoing a massive transformation, driven by the rapid shift toward electric vehicles (EVs) and stringent lightweighting requirements. Metallo × WB Alloys serves as the critical link in this evolution, providing a unified, data-driven welding ecosystem. We empower global OEMs, Tier-1 suppliers, and next-generation EV manufacturers by deploying high-integrity welding consumables engineered for advanced alloys, seamless robotic automation for high-volume precision, and real-time process monitoring. Our integrated approach eliminates supply chain bottlenecks, minimizes costly rework, and ensures zero-defect assembly on the modern production line.
              </p>
            </div>
          </div>

          {/* Market Context + Challenges + Solutions grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Market Context */}
            <div className="bg-slate-50 rounded-xl p-7 border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-2xl text-yellow-600">trending_up</span>
                <h3 className="text-lg font-heading font-bold text-metallo-navy">Market Context</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Transition to EVs requires welding dissimilar metals and high-strength aluminum battery enclosures.',
                  'Push for vehicle lightweighting forces the use of Advanced High-Strength Steels (AHSS).',
                  'Cycle times are compressed; OEMs demand thousands of precise welds per minute.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-sans leading-relaxed">
                    <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Challenges */}
            <div className="bg-slate-50 rounded-xl p-7 border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-2xl text-red-500">warning</span>
                <h3 className="text-lg font-heading font-bold text-metallo-navy">Key Challenges</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Fragmented procurement across wire, robots, and extraction causes supply chain bottlenecks.',
                  'Poor wire feedability and excessive spatter leads to robotic micro-stops and costly rework.',
                  'High volumes of toxic galvanized and aluminum fumes threaten workforce safety and compliance.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-sans leading-relaxed">
                    <span className="material-symbols-outlined text-sm text-red-400 mt-0.5 shrink-0">close</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How Metallo Solves */}
            <div className="bg-metallo-navy rounded-xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-2xl text-yellow-500">check_circle</span>
                <h3 className="text-lg font-heading font-bold text-white">How Metallo Solves This</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Unified Ecosystem', desc: 'Centralized sourcing for zero-spatter wire, robotic integration, and localized fume extraction.' },
                  { label: 'Optimized Feeding', desc: 'Bulk 500kg drums with low-friction conduits eliminate tangles and robotic micro-stops.' },
                  { label: 'Real-Time Data', desc: 'Integrated sensors track arc performance and OEE to predict maintenance before failure.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-sans leading-relaxed">
                    <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">check</span>
                    <span><strong className="text-white font-semibold">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 3. VALUE PROPOSITION ══════════════════════════════════ */}
      <AnimatedSection id="why-metallo" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo Welding</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              The ultimate operating system<br className="hidden sm:block" /> for high-volume assembly
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'whatshot', title: 'Metallurgical Precision', desc: 'Tightly toleranced alloys engineered specifically for thin-gauge steel and complex aluminum chassis.' },
              { icon: 'smart_toy', title: 'Robotic Optimization', desc: 'Seamless integration of Cobots and fixed-table cells to maximize JIT line speed without human error.' },
              { icon: 'query_stats', title: 'Data-Driven QA', desc: 'Sensors monitor deposition rates and gas flow in real-time, providing actionable OEE data.' },
              { icon: 'health_and_safety', title: 'Complete Compliance', desc: 'From IATF 16949 digital traceability to BOHS P601 LEV extraction compliance across the factory floor.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-metallo-navy/5 flex items-center justify-center mb-5 group-hover:bg-yellow-500/10 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-metallo-navy group-hover:text-yellow-600 transition-colors">{item.icon}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-metallo-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 3b. AUDIENCE SEGMENTS ══════════════════════════════════ */}
      <AnimatedSection id="audiences" className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container">
          <div className="mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              Welding solutions tailored for mobility
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'directions_car',
                title: 'Global Automotive OEMs',
                focus: 'Body-in-White, Chassis Assembly, Fume Extraction',
                copy: 'OEM assembly plants require uninterrupted wire feeding and a massive reduction in spatter. We deliver bulk copper-coated MIG wires via specialized conduits, integrated directly with centralized high-vacuum extraction systems to maintain a clean, zero-downtime factory floor.',
                assurances: 'AWS D8.1M Compliance · Bulk 500kg Drums · BOHS P601 Extraction',
                cta: 'Optimize Assembly Line',
              },
              {
                icon: 'ev_station',
                title: 'EV Battery & Platform Makers',
                focus: 'Aluminum Enclosures, Lightweighting, Dissimilar Metals',
                copy: 'The EV shift demands highly specialized filler metals. Metallo supplies ultra-clean 4000/5000-series aluminum spools for battery trays and CuSi brazing wires to join ultra-high-strength steel without heat distortion, paired with automated Cobot cells for precision.',
                assurances: 'Aluminum TIG/MIG · CuSi Brazing · Laser Seam Tracking',
                cta: 'Explore EV Solutions',
              },
              {
                icon: 'settings',
                title: 'Tier-1 Component Suppliers',
                focus: 'Exhaust Systems, Seat Frames, Axles',
                copy: 'Tier-1 suppliers operate on aggressive JIT schedules. We deploy fixed-table robotic cells, high-deposition metal-cored wires, and provide scheduled machine calibration/PAT testing to ensure they pass strict OEM quality audits without bottlenecks.',
                assurances: 'Metal-Cored High-Deposition Wires · IATF 16949 Alignment · PAT Testing',
                cta: 'Upgrade Supplier QA',
              },
            ].map((a, i) => (
              <motion.div
                key={a.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-metallo-navy p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-yellow-500 text-3xl">{a.icon}</span>
                    <h3 className="text-xl font-heading font-bold text-white">{a.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-sans">{a.focus}</p>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">{a.copy}</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-heading font-bold text-yellow-600 uppercase tracking-widest mb-1">Assurances</p>
                    <p className="text-xs text-slate-500 font-sans">{a.assurances}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-bold text-yellow-600 hover:text-metallo-navy transition-colors">
                    {a.cta}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 4. PRODUCT BLOCKS ══════════════════════════════════════ */}
      <AnimatedSection id="products" className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Welding Ecosystem</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              Automotive welding & automation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="group relative rounded-xl overflow-hidden bg-metallo-navy shadow-lg h-[360px] cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-metallo-navy via-metallo-navy/60 to-transparent" />

                <div className="relative z-10 flex flex-col justify-end h-full p-7">
                  <div className="mb-auto pt-1">
                    <span className="material-symbols-outlined text-3xl text-yellow-500">{product.icon}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2">{product.title}</h3>

                  <div className="space-y-2">
                    <div>
                      <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500 mb-1">Use Cases</p>
                      <p className="text-sm text-slate-300 font-sans leading-snug">{product.useCases}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500 mb-1">Assurance</p>
                      <p className="text-sm text-slate-300 font-sans leading-snug">{product.assurance}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Tile */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="group rounded-xl overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg h-[360px] flex flex-col items-center justify-center text-center p-8 cursor-pointer hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">precision_manufacturing</span>
              <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Cell<br />Integration?</h3>
              <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Need to optimize a robotic cell or outfit a new EV assembly line? Share your parameters and we will design the ecosystem.</p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                Request Engineering Consult
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 5. PROCESS TIMELINE ═════════════════════════════════════ */}
      <AnimatedSection id="how-it-works" className="py-20 lg:py-28 bg-metallo-navy">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-500 mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              From assessment to continuous supply
            </h2>
            <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
              A 5-step integration process designed for high-volume automotive plants requiring data-driven optimization and seamless JIT logistics.
            </p>
          </div>

          {/* Desktop horizontal stepper */}
          <div className="hidden md:grid md:grid-cols-5 gap-0 relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-700" />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-yellow-500/30 flex items-center justify-center mb-5 relative z-10">
                  <span className="material-symbols-outlined text-2xl text-yellow-500">{step.icon}</span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500 mb-2">Phase {i + 1}</span>
                <h4 className="text-sm font-heading font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-[180px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical stepper */}
          <div className="md:hidden space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-yellow-500/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-yellow-500">{step.icon}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && <div className="w-0.5 flex-1 bg-slate-700 mt-2" />}
                </div>
                <div className="pb-4">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500">Phase {i + 1}</span>
                  <h4 className="text-base font-heading font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 6. TECHNICAL HIGHLIGHTS ═════════════════════════════════ */}
      <AnimatedSection id="technical" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Technical &amp; Compliance</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              Automotive-grade weld assurance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'menu_book',
                title: 'Standards & Certifications',
                items: ['IATF 16949 — Automotive QMS Alignment', 'AWS D8.1M / D8.14M — Auto Weld Quality', 'AWS A5.18 / A5.36 — Carbon & Alloy Steels', 'AWS A5.10 — Aluminum Filler Metals', 'ISO 3834-2 — Fusion Welding Quality', 'BOHS P601 — LEV Compliance'],
              },
              {
                icon: 'science',
                title: 'Testing & Validation',
                items: ['Chemical composition & trace element control', 'Tensile, yield, and elongation verification', 'Dynamic spatter and high-speed arc analysis', 'Wire cast and helix dimensional checks', 'Destructive peel and cross-sectional testing', 'LEV capture velocity validation'],
              },
              {
                icon: 'qr_code_2',
                title: 'Traceability',
                items: ['Serialized batch IDs for spools and drums', 'MTCs (EN 10204 Type 3.1) per heat', 'Digital WPS parameter logging', 'OEE and real-time production exports', 'Machine calibration logs (ISO 17662)', 'COSHH and Safety Data Sheets (SDS)'],
              },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-2xl text-yellow-600">{block.icon}</span>
                  <h3 className="text-lg font-heading font-bold text-metallo-navy">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 font-sans">
                      <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 7. BENEFITS & ROI ═══════════════════════════════════════ */}
      <AnimatedSection id="benefits" className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Benefits &amp; ROI</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              Measurable impact on the assembly line
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-yellow-600">{benefit.icon}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-metallo-navy mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 8. FINAL CTA ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={SITE_IMAGES.welding.automotive.cta}
            alt="Automotive robotic welding"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-metallo-navy/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Ready to optimize your<br />automotive welding line?
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
            From high-feed automated wires and robotic integration to factory-wide fume extraction and real-time arc monitoring — Metallo delivers the complete ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">smart_toy</span>
              Optimize Robotic Line
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">ev_station</span>
              EV Welding Solutions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WeldingAutomotive;