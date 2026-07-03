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
    title: 'Architectural Consumables',
    icon: 'palette',
    useCases: 'Stainless steel balustrades, sleek transit hub structures, and public-facing street furniture.',
    assurance: 'AWS D1.6 certified clean-running TIG rods and MIG wires ensuring zero spatter and perfect aesthetic finish.',
    image: SITE_IMAGES.welding.smartCities.products.architectural,
  },
  {
    title: 'Modular Prefab Infrastructure',
    icon: 'grid_view',
    useCases: 'EV charging hubs, telecom enclosures, and smart-grid substations prefabricated off-site.',
    assurance: 'High-efficiency filler metals designed for rapid off-site modular assembly and easy on-site erection.',
    image: SITE_IMAGES.welding.smartCities.products.modularPrefab,
  },
  {
    title: 'Urban-Safe Extraction',
    icon: 'eco',
    useCases: 'Welding inside active subway stations, dense pedestrian zones, and enclosed architectural spaces.',
    assurance: 'BOHS P601-compliant mobile Kemper SmartFil systems and localized capture arms to eliminate hazardous fumes.',
    image: SITE_IMAGES.welding.smartCities.products.urbanExtraction,
  },
  {
    title: 'On-Site Safety & Calibration',
    icon: 'health_and_safety',
    useCases: 'Ensuring temporary urban welding sites comply with strict municipal health and environmental regulations.',
    assurance: 'Mobile deployment for HAVS assessments, LEV testing, PAT electrical checks, and CP7 gas calibration.',
    image: SITE_IMAGES.welding.smartCities.products.safetyCalib,
  },
  {
    title: 'Non-Destructive Validation',
    icon: 'troubleshoot',
    useCases: 'Verifying structural integrity for pedestrian bridges, elevated walkways, and structural glass supports.',
    assurance: 'Dye penetrant testing (DPI) and visual inspection (VT) to guarantee flawless, safe public infrastructure.',
    image: SITE_IMAGES.welding.smartCities.products.ndtValidation,
  },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
  { title: 'Urban Site Evaluation', desc: 'Metallo evaluates the municipal restrictions, noise limits, and aesthetic finish requirements of your city project.', icon: 'troubleshoot' },
  { title: 'Clean Consumable Selection', desc: 'Supply of specialized, ultra-clean TIG/MIG alloys to eliminate post-weld grinding in public-facing zones.', icon: 'palette' },
  { title: 'Environmental Setup', desc: 'Deployment of localized fume extraction (LEV) to ensure welding fumes do not impact pedestrians or enclosed environments.', icon: 'eco' },
  { title: 'Site Calibration Execution', desc: 'WB Alloys engineers arrive on-site to conduct PAT testing and equipment calibration for strict municipal compliance.', icon: 'tune' },
  { title: 'Aesthetic & NDT Sign-Off', desc: 'Final dye penetrant and visual inspection to guarantee the public structure is both flawlessly beautiful and structurally sound.', icon: 'verified' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
  { title: 'Flawless Aesthetics', desc: 'Zero-spatter consumables drastically reduce grinding, leaving a clean, architectural-grade finish on stainless structures.', icon: 'brush' },
  { title: 'Public Safety Compliance', desc: 'Urban-safe extraction systems capture toxic particulates before they enter the public pedestrian environment.', icon: 'health_and_safety' },
  { title: 'Pass Municipal Audits', desc: 'Fully documented PAT testing, LEV commissioning, and equipment calibration guarantee compliance with city building codes.', icon: 'fact_check' },
  { title: 'Accelerated Prefab', desc: 'High-speed modular consumables allow EPCs to build off-site, reducing disruptive on-site welding time in busy city centers.', icon: 'speed' },
  { title: 'Acoustic & Fume Control', desc: 'Advanced equipment and processes designed to minimize noise and smoke footprint in active metropolitan hubs.', icon: 'volume_off' },
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
   WELDING - SMART CITIES PAGE
   ═══════════════════════════════════════════════════════════════ */
const WeldingSmartCities: React.FC = () => {
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
          src={SITE_IMAGES.welding.smartCities.hero}
          alt="Smart city infrastructure construction"
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
              <span className="text-yellow-500 font-medium">Smart Cities &amp; Urban Development</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Rapid Urbanization.<br />
              <span className="text-yellow-500">Uncompromising Safety.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-sans leading-relaxed">
              Deploying architectural-grade welding consumables, urban-safe fume extraction, and site compliance testing for global smart city infrastructure.
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
              Metallo × WB Alloys for Smart Cities
            </h2>

            <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
              <p>
                The rapid expansion of global smart cities demands a delicate balance between structural integrity, public safety, and aesthetic architectural design. Constructing smart infrastructure—from sleek metro stations and pedestrian bridges to modular EV charging hubs—requires EPCs to execute rapid welds in the public eye. Metallo × WB Alloys provides a unified, environmentally compliant welding ecosystem tailored for dense urban development. We deliver ultra-clean, zero-spatter stainless consumables for flawless architectural finishes, paired with mobile, BOHS P601-compliant fume extraction systems to protect both welders and pedestrians. We ensure your urban projects are built safely, rapidly, and to the highest aesthetic standards without disrupting the city around them.
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
                  'Transit hubs, street furniture, and modern stadiums heavily utilize exposed stainless steel and aluminum structural elements.',
                  'Municipalities enforce strict environmental codes regarding noise, air quality, and hazardous fume emissions in city centers.',
                  'Modular prefabrication is accelerating to minimize on-site disruption, requiring fast, high-quality off-site welding.',
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
                  'Relying on sub-standard consumables leads to excessive spatter, demanding immense post-weld grinding that ruins architectural finishes.',
                  'Inadequate fume control during welding violates strict municipal regulations and endangers pedestrian health.',
                  'Failing municipal safety audits due to uncalibrated site equipment or expired PAT testing causes immediate project shutdowns.',
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
                  { label: 'Architectural Alloys', desc: 'Providing ultra-clean TIG/MIG wires designed to lay down flawlessly on exposed stainless steel.' },
                  { label: 'Urban Extraction', desc: 'Deploying high-efficiency, localized Kemper extraction to capture fumes instantly at the source.' },
                  { label: 'Audit-Ready Compliance', desc: 'Dispatching WB Alloys technicians to conduct mandatory on-site PAT testing and LEV commissioning.' },
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
              Clean, compliant, and architectural-grade<br className="hidden sm:block" /> execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'palette', title: 'Flawless Finishes', desc: 'Premium stainless consumables that eliminate spatter, preserving the architectural aesthetics of urban infrastructure.' },
              { icon: 'eco', title: 'Environmental Control', desc: 'State-of-the-art mobile fume extraction systems preventing hazardous emissions in densely populated areas.' },
              { icon: 'grid_view', title: 'Modular Efficiency', desc: 'High-speed filler wires optimized for the off-site prefabrication of smart-grid and telecom enclosures.' },
              { icon: 'fact_check', title: 'Municipal Compliance', desc: 'On-site execution of HAVS assessments, LEV testing, and equipment calibration to pass every city audit.' },
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
              Welding ecosystems for city builders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'train',
                title: 'Civil Transit EPCs',
                focus: 'Metro Stations, Pedestrian Bridges, Walkways',
                copy: 'Building in active city centers requires a microscopic safety footprint. We supply localized, mobile fume extractors to capture welding smoke inside subterranean stations, alongside the aesthetic stainless TIG/MIG wires needed for exposed architectural steelwork.',
                assurances: 'AWS D1.6 Stainless Specs · Mobile LEV Extraction · NDT Validation',
                cta: 'Equip Transit Projects',
              },
              {
                icon: 'ev_station',
                title: 'Smart-Grid & EV Fabricators',
                focus: 'EV Charging Hubs, Modular Substations',
                copy: 'The rapid rollout of EV infrastructure relies on off-site modular prefabrication. We deliver bulk, high-feed consumables for fabrication shops building smart-grid enclosures, ensuring rapid production and easy on-site integration.',
                assurances: 'High-Deposition Consumables · Modular Welder Support · Calibration',
                cta: 'Optimize Prefab Output',
              },
              {
                icon: 'park',
                title: 'Architectural Contractors',
                focus: 'Street Furniture, Stadiums, Public Art',
                copy: 'Public realm architecture demands perfect visual aesthetics. We provide premium TIG alloys and specialized welding gases that ensure spatter-free, highly polished finishes on stainless steel seating, artistic installations, and stadium cladding.',
                assurances: 'Clean TIG/MIG Alloys · Spatter-Free Finish · Passivation Support',
                cta: 'Source Architectural Alloys',
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
              Urban fabrication & safety
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
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">gavel</span>
              <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Facing a Municipal<br />Safety Audit?</h3>
              <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Need to rapidly deploy LEV extraction or schedule a site-wide machine PAT calibration to avoid city shutdown? We mobilize instantly.</p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                Request Compliance Check
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
              From aesthetic assessment to city handover
            </h2>
            <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
              A highly coordinated 5-step process designed for urban development projects requiring strict environmental compliance, public safety, and flawless architectural finishing.
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
              Meeting strict municipal standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'menu_book',
                title: 'Standards & Certifications',
                items: ['EN 1090 — Execution of Steel & Aluminium', 'AWS D1.1 / D1.6 — Structural & Stainless Codes', 'IS:2062 — Hot Rolled Structural Steel', 'ISO 9001 / 14001 / 45001 Compliance', 'BOHS P601 — LEV Compliance Standard', 'Local municipal noise and environmental codes'],
              },
              {
                icon: 'science',
                title: 'Testing & Validation',
                items: ['Visual weld inspection (VT) for aesthetic finish', 'Dye penetrant testing (DPI) for surface cracks', 'Stainless steel passivation and finish testing', 'Spatter analysis and feed performance', 'LEV airflow and capture velocity measurement', 'HAVS exposure monitoring & PAT testing'],
              },
              {
                icon: 'qr_code_2',
                title: 'Traceability',
                items: ['Material Testing Certificates (MTCs) per batch', 'EN 1090 execution class documentation', 'Weld Procedure Specifications (WPS/PQR)', 'LEV commissioning reports & COSHH', 'PAT testing and calibration certificates', 'Environmental compliance audit trails'],
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
              Protecting the public and the project
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
            src={SITE_IMAGES.welding.smartCities.cta}
            alt="Smart city urban welding execution"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-metallo-navy/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Ready to build smarter,<br />cleaner, and faster?
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mb-10">
            From architectural-grade stainless consumables and urban-safe extraction to full municipal site compliance — Metallo delivers the complete ecosystem for smart city excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">palette</span>
              Architectural Alloys
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">eco</span>
              Urban Safe Extraction
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WeldingSmartCities;