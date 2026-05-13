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
    title: 'Structural Consumables',
    icon: 'construction',
    useCases: 'Heavy structural profiles, versatile field repairs, massive steel building skeletons.',
    assurance: 'AWS/ASME-certified MIG wires, TIG rods, and Stick electrodes with exceptional arc stability.',
    image: SITE_IMAGES.welding.generalFabrication.products.structural,
  },
  {
    title: 'Site Services & Calibration',
    icon: 'engineering',
    useCases: 'Fabrication yard setups, bridge decking sites, remote structural field welding.',
    assurance: 'CP7 gas equipment testing, machine calibration, and PAT testing to prevent mid-project downtime.',
    image: SITE_IMAGES.welding.generalFabrication.products.siteServices,
  },
  {
    title: 'Mobile Fume Extraction (LEV)',
    icon: 'air',
    useCases: 'Enclosed fabrication shops, bridge decking habitats, confined space structural joins.',
    assurance: 'Mobile Kemper extraction systems and Tecmen PAPR helmets for strict operator safety compliance.',
    image: SITE_IMAGES.welding.generalFabrication.products.fumeExtraction,
  },
  {
    title: 'High-Yield Automation',
    icon: 'precision_manufacturing',
    useCases: 'Flawless, continuous structural welds on heavy bridge girders and massive portal frames.',
    assurance: 'Mechanized welding tractors and automated rail systems designed for high-deposition rates.',
    image: SITE_IMAGES.welding.generalFabrication.products.automation,
  },
  {
    title: 'Flux-Cored High-Deposition Wires',
    icon: 'layers',
    useCases: 'Out-of-position structural welding, thick-plate joining, high-wind outdoor environments.',
    assurance: 'Seamless flux-cored wires meeting IS:2062 / EN 1090 standards with Charpy impact toughness.',
    image: SITE_IMAGES.welding.generalFabrication.products.fluxCored,
  },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
  { title: 'Project Scope Assessment', desc: 'Metallo analyzes your structural steel designs, expected tonnage, and applicable IS:2062/EN 1090 standards.', icon: 'troubleshoot' },
  { title: 'Consumable & Fleet Mapping', desc: 'Unified sourcing of structural MIG/FCAW wires, mechanized tractors, and LEV extraction units tailored to the site.', icon: 'map' },
  { title: 'Site Calibration Deployment', desc: 'WB Alloys technicians mobilize to the fabrication yard for CP7 gas checks and welding machine PAT calibration.', icon: 'tune' },
  { title: 'NDT & Quality Validation', desc: 'Implementation of continuous Weld Procedure Specifications (WPS) tracking and macro/micro examination protocols.', icon: 'verified' },
  { title: 'JIT Supply & Scaling', desc: 'Continuous Just-In-Time delivery of bulk structural consumables alongside on-demand equipment scaling as the project ramps.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
  { title: 'Eliminate NDT Failures', desc: 'Consistent wire cast and controlled chemistries drastically reduce porosity and radiographic (RT) weld failures.', icon: 'shield' },
  { title: 'Maximum Deposition', desc: 'Mechanized tractors and high-yield FCAW wires accelerate timeline delivery on heavy girder fabrication.', icon: 'speed' },
  { title: 'Audit-Ready Sites', desc: 'Up-to-date machine calibration logs and CP7 gas testing certificates ensure immediate compliance for municipal inspectors.', icon: 'fact_check' },
  { title: 'Workforce Protection', desc: 'BOHS P601-compliant mobile extraction keeps enclosed fabrication bays legally compliant and safe.', icon: 'health_and_safety' },
  { title: 'Unified Procurement', desc: 'Stop juggling fragmented vendors. Consumables, safety gear, and site services all managed through one platform.', icon: 'hub' },
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
   WELDING - GENERAL FABRICATION PAGE
   ═══════════════════════════════════════════════════════════════ */
const WeldingGeneralFabrication: React.FC = () => {
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
          src={SITE_IMAGES.welding.generalFabrication.hero}
          alt="Structural steel welding fabrication"
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
              <span className="text-yellow-500 font-medium">General Fabrication & Infrastructure</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Versatile Precision.<br />
              <span className="text-yellow-500">Structural Integrity.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-sans leading-relaxed">
              High-performance welding consumables, site equipment, and compliance testing for structural steelwork, bridges, and architectural assemblies.
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
              Metallo × WB Alloys for General Fabrication
            </h2>

            <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
              <p>
                The global infrastructure boom demands rapid, reliable structural steel fabrication, where tight margins and aggressive project timelines meet strict IS:2062 and EN 1090 standards. Metallo × WB Alloys acts as the unified supply engine for structural integrity, delivering a centralized welding ecosystem for general fabrication. We empower structural fabricators, bridge builders, and architectural engineering firms by deploying high-deposition structural consumables, mechanized welding tractors for continuous seams, and deployable site calibration services. Our integrated approach eliminates supplier fragmentation, prevents NDT failures, and ensures absolute structural compliance for heavy steelwork from the fabrication yard to the final erection site.
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
                  'Aggressive global infrastructure timelines require rapid throughput of structural columns, trusses, and beams.',
                  'Stricter municipal building codes demand full traceability to AWS D1.1 and EN 1090 structural standards.',
                  'Labor shortages in skilled welding are forcing structural shops to adopt mechanized tractors and automation.',
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
                  'Juggling fragmented suppliers for varied processes (MIG, TIG, MMA) leads to inconsistent consumable quality.',
                  'Uncalibrated site equipment and leaky gas regulators cause unseen weld defects and failed NDT inspections.',
                  'Mobile field welding presents massive fume extraction and confined-space safety challenges.',
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
                  { label: 'Unified Structural Supply', desc: 'Centralized procurement of AWS/ASME-certified structural filler metals designed for deep penetration.' },
                  { label: 'Site Calibration', desc: 'Deployable technicians for CP7 gas testing and electrical PAT testing to ensure field machinery operates flawlessly.' },
                  { label: 'Mobile LEV Control', desc: 'Portable fume extractors and PAPR helmets supplied to protect structural welders working in difficult out-of-position environments.' },
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
              The ultimate supply engine<br className="hidden sm:block" /> for structural fabrication
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'layers', title: 'High-Deposition Assurance', desc: 'Premium flux-cored (FCAW) wires designed for rapid out-of-position structural joints with excellent slag release.' },
              { icon: 'fact_check', title: 'Calibration Continuity', desc: 'Ongoing maintenance programs for machine PAT testing and CP7 gas integrity, removing liability from EPCs.' },
              { icon: 'precision_manufacturing', title: 'Mechanized Scaling', desc: 'Introduction of welding tractors for long seams on girders, reducing manual fatigue and increasing arc-on time.' },
              { icon: 'shield', title: 'Certified Compliance', desc: 'Total traceability through material MTCs, batch IDs, and WPS documentation required for EN 1090 structures.' },
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
              Welding solutions tailored for infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'factory',
                title: 'Heavy Structural Fabricators',
                focus: 'Building Skeletons, Portal Frames, Base Plates',
                copy: 'Fabricators operating on tight margins need maximum deposition rates. We supply premium flux-cored wires (FCAW) designed for massive steel skeletons, alongside mobile fume extraction to keep shop floors compliant during heavy, continuous welding cycles.',
                assurances: 'IS:2062 Consumables · FCAW High-Deposition Wires · Mobile LEV',
                cta: 'Upgrade Shop Floor Supply',
              },
              {
                icon: 'architecture',
                title: 'Bridge & Highway EPCs',
                focus: 'Girders, Field Repairs, Viaducts',
                copy: 'Infrastructure contractors building long-span bridges require perfect long seams and reliable field equipment. We deploy mechanized welding tractors for girders and provide on-site machine calibration and CP7 gas testing to ensure field generators perform under extreme conditions.',
                assurances: 'Mechanized Welding Tractors · CP7 Gas Testing · PAT Calibration',
                cta: 'Equip Your Field Site',
              },
              {
                icon: 'foundation',
                title: 'Architectural Engineering Firms',
                focus: 'Aesthetic Structures, Stainless Balustrades, Transit Hubs',
                copy: 'For public-facing architectural steel and stainless structures, aesthetics matter as much as strength. We deliver ultra-clean TIG rods and zero-spatter MIG wires that require minimal post-weld grinding, ensuring a flawless finish for transit stations and public arenas.',
                assurances: 'Clean TIG/MIG Alloys · EN 1090 Alignment · Spatter-Free Output',
                cta: 'Request Premium Consumables',
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
              Structural welding & site services
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
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">construction</span>
              <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Mobilize Your<br />Fabrication Yard?</h3>
              <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Need to restock AWS/ASME consumables, rent mechanized tractors, or schedule a mass PAT calibration? We handle it all.</p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                Contact Engineering Services
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
              From scope assessment to site calibration
            </h2>
            <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
              A 5-step integration process designed for heavy infrastructure contractors requiring uninterrupted consumables, mechanized efficiency, and audit-ready site equipment.
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
              Structural-grade assurance and safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'menu_book',
                title: 'Standards & Certifications',
                items: ['AWS D1.1 — Structural Welding Code (Steel)', 'EN 1090 — Execution of Steel Structures', 'IS:2062 — Hot Rolled Structural Steel', 'ASME Section IX — Welding Qualifications', 'ISO 9001 / 14001 / 45001 Compliance', 'BOHS P601 — LEV Compliance Standard'],
              },
              {
                icon: 'science',
                title: 'Testing & Validation',
                items: ['Weld deposit chemistry and mechanical testing', 'Charpy impact testing at sub-zero temps', 'Macro and micro examination of weld profiles', 'Radiographic (RT) and ultrasonic (UT) checks', 'Wire feed speed and arc stability logs', 'CP7 gas equipment pressure testing'],
              },
              {
                icon: 'qr_code_2',
                title: 'Traceability',
                items: ['Material Testing Certificates (MTCs) per batch', 'Weld Procedure Specifications (WPS/PQR)', 'Serialized consumable batch tracking', 'Digital QC reports mapped to project', 'Machine calibration logs and PAT certificates', 'LEV commissioning and COSHH assessments'],
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
              Measurable impact on project timelines
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
            src={SITE_IMAGES.welding.generalFabrication.cta}
            alt="Structural welding field site"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-metallo-navy/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Ready to elevate your<br />fabrication operations?
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
            From high-deposition structural MIG wires and mechanized tractors to site calibration and portable fume extraction — Metallo delivers the complete ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">foundation</span>
              Equip Your Site
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">fact_check</span>
              Schedule Calibration
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WeldingGeneralFabrication;