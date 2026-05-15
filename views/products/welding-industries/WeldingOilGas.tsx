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
    title: 'High-Alloy Consumables',
    icon: 'science',
    useCases: 'Duplex, Super Duplex, Inconel, and SS 316 piping in harsh chemical and subsea environments.',
    assurance: 'AWS A5.4 / A5.9 certified, exact Ferrite Number (FN) control, NACE MR0175 compliant.',
    image: SITE_IMAGES.welding.oilGas.products.highAlloy,
  },
  {
    title: 'Orbital Welding Systems',
    icon: 'all_inclusive',
    useCases: 'High-purity process piping, heavy-wall tube welding, confined-space tie-ins.',
    assurance: 'Perfect repeatability for ASME Section IX joints, continuous parameter logging.',
    image: SITE_IMAGES.welding.oilGas.products.orbital,
  },
  {
    title: 'Confined-Space Extraction & PPE',
    icon: 'masks',
    useCases: 'Welding inside pressure vessels, offshore platform modules, and refinery pipe racks.',
    assurance: 'Tecmen PAPR respiratory systems, Kemper localized extraction, BOHS P601 compliance.',
    image: SITE_IMAGES.welding.oilGas.products.confinedSpace,
  },
  {
    title: 'NDT & Site Engineering',
    icon: 'troubleshoot',
    useCases: 'On-site turnaround maintenance, pipeline joint inspection, pre/post-weld heat treatment.',
    assurance: 'Radiographic (RT), Ultrasonic Phased Array (PAUT), and certified orbital technicians deployed.',
    image: SITE_IMAGES.welding.oilGas.products.ndtSite,
  },
  {
    title: 'Equipment Calibration Services',
    icon: 'tune',
    useCases: 'Ensuring welding power sources and gas lines meet strict plant safety tolerances.',
    assurance: 'On-site CP7 gas testing, hose integrity checks, and machine PAT/calibration to ISO 17662.',
    image: SITE_IMAGES.welding.oilGas.products.calibration,
  },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
  { title: 'Metallurgical Assessment', desc: 'Metallo engineers analyze the base materials, sour gas (H2S) presence, and ASME Section IX requirements.', icon: 'science' },
  { title: 'Consumable & Equipment Mobilization', desc: 'Deployment of batch-certified high-alloy wires, orbital systems, and ATEX-rated extraction units.', icon: 'local_shipping' },
  { title: 'Site Engineering Deployment', desc: 'WB Alloys specialists mobilize to the plant for orbital setup, induction heating, and machinery calibration.', icon: 'engineering' },
  { title: 'NDT & QA Validation', desc: 'Continuous testing of joints using Phased Array UT and RT to guarantee zero weld defects.', icon: 'troubleshoot' },
  { title: 'Handover & Certification', desc: 'Delivery of complete documentation packages including MTCs per heat, NDT reports, and equipment calibration logs.', icon: 'verified' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
  { title: 'Zero RT Fails', desc: 'Premium exotic alloys and controlled orbital parameters eliminate porosity and inclusions, ensuring 100% X-ray pass rates.', icon: 'task_alt' },
  { title: 'Accelerated Commissioning', desc: 'Avoiding weld rework on critical path pipeline joints shaves weeks off massive turnaround schedules.', icon: 'speed' },
  { title: 'Absolute Traceability', desc: 'Digital tracking of every consumable heat batch to satisfy strict PED and ASME Section IX audits.', icon: 'qr_code_2' },
  { title: 'Extreme Environment Safety', desc: 'PAPR helmets and heavy-duty extraction protect welders from toxic hexavalent chromium in confined spaces.', icon: 'health_and_safety' },
  { title: 'Turnkey Site Management', desc: 'One vendor for consumables, orbital technicians, NDT inspection, and machine calibration.', icon: 'hub' },
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
   WELDING - OIL & GAS / PROCESS INDUSTRIES PAGE
   ═══════════════════════════════════════════════════════════════ */
const WeldingOilGas: React.FC = () => {
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
          src={SITE_IMAGES.welding.oilGas.hero}
          alt="Welding pipeline in oil refinery"
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
              <span className="text-yellow-500 font-medium">Oil, Gas &amp; Process Industries</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Critical Integrity.<br />
              <span className="text-yellow-500">Extreme Environments.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-sans leading-relaxed">
              Delivering ASME/API-certified welding consumables, specialized orbital technicians, and absolute NDT assurance for global refineries, pipelines, and offshore platforms.
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
              Metallo × WB Alloys for Oil & Gas
            </h2>

            <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
              <p>
                The global oil, gas, and process industries operate under the most extreme pressure and corrosive environments on the planet. Metallo × WB Alloys serves as the critical link in this high-stakes sector, providing a unified, metallurgical assurance ecosystem. We empower EPCs, refinery operators, and pipeline contractors by deploying ASME-certified high-alloy consumables, specialized orbital welding technicians, and comprehensive NDT validation. Our integrated approach eliminates supply chain fragmentation, prevents catastrophic weld failures, and ensures absolute integrity for mission-critical pressure vessels, LNG terminals, and offshore platforms.
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
                  'Deepwater offshore drilling and LNG transport demand complex Duplex, Super Duplex, and Nickel-alloy piping.',
                  'Regulatory frameworks (ASME Section IX, API 1104, NACE) mandate absolute zero-defect tolerances.',
                  'Turnaround maintenance schedules are heavily compressed, allowing zero time for weld rework.',
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
                  'Sourcing unvetted filler wires leads to failed Radiographic Testing (RT) and catastrophic project delays.',
                  'Extreme confined-space welding hazards expose workers to toxic fumes and hexavalent chromium.',
                  'Fragmented sourcing between consumable suppliers, NDT inspectors, and equipment calibration causes site chaos.',
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
                  { label: 'Exotic Alloy Supply', desc: 'Direct-manufactured premium TIG, MIG, and SAW wires engineered for harsh chemical resistance.' },
                  { label: 'Deployable Site Techs', desc: 'Mobilizing orbital welding specialists and NDT engineers directly to your refinery or offshore rig.' },
                  { label: 'Confined Space Safety', desc: 'Supplying advanced PAPR respiratory systems and Kemper localized extraction for hazardous zones.' },
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
              Absolute metallurgical assurance<br className="hidden sm:block" /> for high-pressure execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'science', title: 'High-Alloy Control', desc: 'Exact Ferrite Number (FN) and chemical composition control for Duplex and exotic alloys.' },
              { icon: 'all_inclusive', title: 'Orbital Precision', desc: 'Deployable automated orbital welding systems ensuring perfect repeatability on heavy-wall pipe.' },
              { icon: 'troubleshoot', title: 'NDT Validation', desc: 'In-house mobilization of Phased Array UT and Radiography engineers to validate every joint.' },
              { icon: 'qr_code_2', title: 'Total Traceability', desc: 'Material Testing Certificates (MTCs) and WPS tracking to satisfy severe ASME and API audits.' },
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
              Welding solutions for mission-critical energy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'water',
                title: 'Offshore & Subsea EPCs',
                focus: 'Platforms, Risers, Subsea Manifolds',
                copy: 'Offshore welding requires extreme resistance to saltwater corrosion and massive pressure. We supply Super Duplex TIG rods and high-deposition SAW wires, alongside specialized confined-space fume extraction systems to protect welders inside deepwater platform modules.',
                assurances: 'Duplex/Super Duplex Wires · NACE MR0175 Compliant · Confined Space PPE',
                cta: 'Explore Subsea Solutions',
              },
              {
                icon: 'route',
                title: 'Midstream Pipeline Contractors',
                focus: 'Cross-Country Gas Lines, Compressor Stations',
                copy: 'Pipeline contractors face the challenge of executing thousands of identical joints rapidly across brutal terrain. We provide API 1104-certified cellulosic stick electrodes, automated orbital buggies, and mobile NDT teams to ensure continuous laying without radiography failures.',
                assurances: 'API 1104 Cellulosic Electrodes · Orbital Welding Buggies · Mobile NDT',
                cta: 'Equip Your Pipeline Spread',
              },
              {
                icon: 'factory',
                title: 'Downstream Refineries',
                focus: 'Turnaround Maintenance, Process Piping, Pressure Vessels',
                copy: 'During refinery turnarounds, downtime costs millions. Metallo rapid-deploys high-alloy filler metals, induction heating equipment for PWHT, and certified orbital technicians to execute critical high-temperature tie-ins flawlessly on the first attempt.',
                assurances: 'ASME Section IX Wires · Induction PWHT Setup · CP7 Gas Testing',
                cta: 'Plan Turnaround Support',
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
              Process industry tools & services
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
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">settings_applications</span>
              <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Critical Turnaround<br />Approaching?</h3>
              <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Need to secure exotic alloy wires, rent orbital systems, or deploy NDT inspectors for a refinery shutdown? Let us manage the execution.</p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                Engage WB Alloys Engineering
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
              From metallurgical review to NDT sign-off
            </h2>
            <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
              A rigorous 5-step integration process designed for high-pressure process industries requiring absolute integrity and strict ASME/API code compliance.
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
              Exacting codes for extreme environments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'menu_book',
                title: 'Standards & Certifications',
                items: ['ASME Section IX — Welding Qualifications', 'API 1104 — Pipeline Welding Standard', 'AWS A5.4 / A5.9 — Stainless Consumables', 'NACE MR0175 — Sulfide Stress Cracking', 'PED 2014/68/EU — Pressure Equipment', 'BOHS P601 — LEV Compliance Standard'],
              },
              {
                icon: 'science',
                title: 'Testing & Validation',
                items: ['Radiographic Testing (RT) per ASME V', 'Phased Array Ultrasonic Testing (PAUT)', 'Ferrite Number (FN) measurement', 'Intergranular corrosion tests (ASTM A262)', 'Charpy impact testing for cryogenics', 'CP7 gas pressure testing & hose integrity'],
              },
              {
                icon: 'qr_code_2',
                title: 'Traceability',
                items: ['Material Testing Certificates (MTCs) per heat', 'Weld Procedure Specifications (WPS/PQR)', 'Welder qualification records tracking', 'NDT reports with radiograph/scan archives', 'Machine calibration logs (ISO 17662)', 'COSHH and Safety Data Sheets (SDS)'],
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
              Measurable impact on turnaround execution
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
            src={SITE_IMAGES.welding.oilGas.cta}
            alt="Process industry pipe welding"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-metallo-navy/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Ready to secure your<br />process plant integrity?
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
            From high-alloy consumables and orbital welding specialists to confined-space extraction and Phased Array NDT — Metallo delivers absolute metallurgical assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">science</span>
              Access High-Alloy Specs
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-xl">engineering</span>
              Mobilize Site Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WeldingOilGas;