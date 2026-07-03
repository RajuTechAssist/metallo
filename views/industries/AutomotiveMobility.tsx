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
    { label: 'Products', id: 'products' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Technical', id: 'technical' },
    { label: 'Benefits', id: 'benefits' },
];

/* ─── PRODUCT DATA (mapped to Metallo verticals) ─────────────── */
const PRODUCTS = [
    {
        title: 'Precision Die‑Cast Components',
        icon: 'precision_manufacturing',
        useCases: 'Motor housings, sensor brackets, gearbox covers, EV connector shells, structural die‑cast nodes.',
        assurance: 'CNC‑integrated finishing, micro‑tolerance (±0.05 mm), X‑ray porosity checks, PPAP packs.',
        image: SITE_IMAGES.industries.automotive.products.evBattery,
    },
    {
        title: 'SS Pipes, Tubes & Fittings',
        icon: 'valve',
        useCases: 'Exhaust systems, hydraulic circuits, fuel/brake lines, coolant loops, EV thermal management piping.',
        assurance: 'ASTM A312/A269 grades, 100% PMI tested, hydrostatic pressure validated, MTCs per heat.',
        image: SITE_IMAGES.industries.automotive.products.steelSourcing,
    },
    {
        title: 'Automotive‑Grade Cables',
        icon: 'cable',
        useCases: 'Battery interconnect cables, control harnesses, EV charging station cables, fire‑rated wiring.',
        assurance: 'BIS certified, IS/IEC compliant, hi‑pot & continuity tested, FRLS/LSZH fire‑rated options.',
        image: SITE_IMAGES.industries.automotive.products.precisionWiring,
    },
    {
        title: 'Cable Trays & Routing Systems',
        icon: 'account_tree',
        useCases: 'Assembly plant cable management, paint‑shop routing, EV charging hub infrastructure.',
        assurance: 'IEC 61537/IS 16230, hot‑dip GI/SS/powder‑coated, custom sizes, fire‑rated.',
        image: SITE_IMAGES.industries.automotive.products.roboticAssembly,
    },
    {
        title: 'Welding Consumables',
        icon: 'whatshot',
        useCases: 'Body‑in‑white assembly, chassis joining, structural welding, exhaust fabrication.',
        assurance: 'AWS/ASME certified, flux‑cored & solid wires, standardized SOPs across Small and Medium Enterprise network.',
        image: SITE_IMAGES.industries.automotive.products.weldIntegrity,
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Program Intake', desc: 'Upload drawings, BOM, and PPAP requirements; Metallo maps capacity and capability across audited Small and Medium Enterprise partners.', icon: 'upload_file' },
    { title: 'Pilot Run & PPAP Pack', desc: 'Small pilot production with dimensional and functional validation. PPAP documentation prepared for OEM submission.', icon: 'science' },
    { title: 'SOP & Training', desc: 'Standardized SOPs for welding, assembly, and inspection deployed. Remote and on‑site training for partner units.', icon: 'rule' },
    { title: 'Central QC & Traceability', desc: 'Batch testing, MTCs, serialized part IDs, and digital QC reports linked to BOM and part genealogy.', icon: 'verified' },
    { title: 'Scale & Logistics', desc: 'Pooled capacity scheduling, centralized procurement, and coordinated deliveries to OEM lines or distribution hubs.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Faster Qualification', desc: 'Standardized SOPs and PPAP packs reduce supplier qualification time by up to 40% vs. traditional vetting.', icon: 'speed' },
    { title: 'Zero CAPEX', desc: 'Pooled Small and Medium Enterprise capacity for program ramps, recalls, and surge production — no factory buildout needed.', icon: 'hub' },
    { title: 'Full Traceability', desc: 'Serialized part IDs, MTCs, and digital QC linked to BOM for warranty and recall management.', icon: 'shield' },
    { title: 'EV Program Ready', desc: 'Upgraded Small and Medium Enterprise partners for battery enclosures, thermal assemblies, and powertrain components with material grade control.', icon: 'ev_station' },
    { title: 'Export Readiness', desc: 'Documentation and QA aligned to Middle East, Africa, and Southeast Asian OEM expectations.', icon: 'public' },
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

const MotionImage = motion.create(Image);

/* ═══════════════════════════════════════════════════════════════
   AUTOMOTIVE & MOBILITY PAGE
   ═══════════════════════════════════════════════════════════════ */
const AutomotiveMobility: React.FC = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    /* ─── Sticky nav active section tracking ──── */
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
                    src={SITE_IMAGES.industries.automotive.hero}
                    alt="Automotive manufacturing assembly line"
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
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link href="/" className="hover:text-white transition-colors">Industries</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Automotive &amp; Mobility</span>
                        </nav>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Program‑Grade Capacity,<br />
                            <span className="text-yellow-500">OEM‑Ready.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            IATF‑aligned chassis, battery enclosures, powertrain assemblies, and harnesses from an audited Small and Medium Enterprise network — with PPAP packs, serialized traceability, and Central QC.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">description</span>
                                Start Program Qualification
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">ev_station</span>
                                Request EV Capability Pack
                            </button>
                        </div>

                        {/* Microcopy */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                            <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
                            IATF 16949 aligned · PPAP packs · Central QC Hub · MTC traceability
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
            </section>

            {/* ═══ STICKY SECTION NAV ══════════════════════════════════ */}
            <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="container">
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
                </div>
            </nav>

            {/* ═══ 2. OVERVIEW ═══════════════════════════════════════════ */}
            <AnimatedSection id="overview" className="py-20 lg:py-24 bg-white border-b border-slate-100">
                <div className="container">
                    <div className="w-full">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
                            Metallo for Automotive &amp; Mobility
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo applies its <strong className="text-metallo-navy">Distributed Manufacturing OS</strong> to the automotive and mobility sector — aggregating Small and Medium Enterprise capacity across fabricators, CNC machining units, sheet‑metal shops, wire &amp; cable plants, and assembly lines. By deploying standardized SOPs and centralizing quality control through its Central QC Hub, Metallo ensures OEMs, Tier‑1 suppliers, and fleet operators receive IATF‑aligned, traceable, and program‑ready components without heavy CAPEX investments.
                            </p>
                            <p>
                                India's auto‑component industry reached <strong className="text-metallo-navy">US$80.2 billion in FY25</strong> — growing at a 14% CAGR over five years. Small and Medium Enterprises account for over 70% of total production. Simultaneously, EV adoption is accelerating — <strong className="text-metallo-navy">1.5 million EVs sold in 2025</strong>, a 25% jump from 2024, with the EV component market valued at US$8–10 billion. Auto‑component exports hit <strong className="text-metallo-navy">US$22.9 billion</strong>, targeting US$70–100 billion by FY30. Traditional Small and Medium Enterprise suppliers often struggle with IATF certification, PPAP documentation, surge capacity, and consistent traceability — Metallo bridges exactly this gap.
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
                                    'US$80.2B auto‑component turnover in FY25 — targeting US$200B by 2030.',
                                    '1.5 million EVs sold in 2025; EV component market US$8–10B.',
                                    'Auto‑component exports: US$22.9B in FY25, targeting US$70–100B by FY30.',
                                    'Small and Medium Enterprises produce 70%+ of all auto components — central to EV transition.',
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
                                    'Fragmented suppliers with variable IATF 16949 / ISO certification.',
                                    'Rapid architecture changes driven by EV platforms = new tooling & validation.',
                                    'Surge / short‑lead needs for program ramps, recalls, or Tier‑1 deliveries.',
                                    'OEM traceability demands — part genealogy, PPAP, and batch testing.',
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
                                    { label: 'Audited Small and Medium Enterprise network', desc: 'Die‑cast units, pipe mills, cable manufacturers, tray fabricators, and welding consumable producers — vetted and SOP‑deployed.' },
                                    { label: 'Die Casting vertical', desc: 'Precision Al/Zn die‑cast motor housings, sensor brackets, and gearbox covers with CNC finishing and PPAP documentation.' },
                                    { label: 'Steel vertical', desc: 'SS pipes, tubes, fittings, and sheets (ASTM A312/A269) for exhaust, fluid, and thermal management systems.' },
                                    { label: 'Wire & Cable vertical', desc: 'BIS‑certified automotive cables, control harnesses, and EV charging cables with hi‑pot & continuity testing.' },
                                    { label: 'Central QC Hub', desc: 'PMI testing, X‑ray porosity checks, hydrostatic validation, and MTCs issued per batch — full digital traceability.' },
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Automotive</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            One certified partner for your<br className="hidden sm:block" /> entire automotive supply chain
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: 'hub', title: 'Multi‑Vertical Supply', desc: 'Die‑cast components, SS piping, cables, cable trays, and welding consumables — all from one audited ecosystem.' },
                            { icon: 'workspace_premium', title: 'Central QC Hub', desc: 'X‑ray porosity, PMI, hydrostatic testing, and material certifications on every batch across all verticals.' },
                            { icon: 'speed', title: 'Faster Qualification', desc: 'Standardized SOPs and PPAP‑ready documentation reduce supplier qualification cycles by up to 40%.' },
                            { icon: 'ev_station', title: 'EV Ready', desc: 'HV/LV cables, fire‑rated wiring, die‑cast connector shells, and SS thermal piping for EV infrastructure.' },
                            { icon: 'public', title: 'Export Readiness', desc: 'Centralized procurement and QA aligned to global OEM expectations for Middle East, Africa, and ASEAN markets.' },
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
                            Tailored solutions for every automotive buyer
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'factory',
                                title: 'Auto Manufacturers & OEMs',
                                focus: 'Assembly plant supply, die‑cast parts, piping, cable infrastructure',
                                copy: 'Metallo supplies OEM assembly plants with precision die‑cast components (motor housings, brackets, sensor mounts), SS piping for fluid & exhaust systems, cable trays for plant‑wide routing, and AWS‑certified welding consumables for body‑in‑white and chassis assembly — all from a single audited Small and Medium Enterprise ecosystem.',
                                assurances: 'Die‑cast Al/Zn components · SS ASTM A312 piping · AWS/ASME welding wires · Cable tray infrastructure',
                                cta: 'Request OEM Supply Quote',
                            },
                            {
                                icon: 'ev_station',
                                title: 'EV Charging & Infrastructure',
                                focus: 'HV/LV cables, charging station infrastructure, thermal piping',
                                copy: 'For EV charging networks, battery plants, and grid‑connection projects, Metallo delivers BIS‑certified HV/LV power cables, fire‑rated FRLS wiring, cable trays for outdoor and indoor charging hubs, and SS piping for thermal management — with full traceability and batch testing.',
                                assurances: 'BIS‑certified HV cables · IEC 61537 cable trays · Fire‑rated FRLS/LSZH · PMI‑tested SS piping',
                                cta: 'Get an EV Infrastructure Quote',
                            },
                            {
                                icon: 'settings',
                                title: 'Tier‑1 Auto Component Suppliers',
                                focus: 'Die‑cast housings, machined fittings, control cables, welding alloys',
                                copy: 'Tier‑1 suppliers rely on Metallo for micro‑tolerance die‑cast components (gearbox covers, connector shells), CNC‑finished SS fittings for fluid circuits, control & instrumentation cables, and welding consumables — enabling faster product qualification with PPAP‑ready documentation and serialized traceability.',
                                assurances: 'CNC die‑cast ±0.05 mm · PPAP documentation · Digital QC certificates · Serialized batch IDs',
                                cta: 'Start Supplier Qualification',
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">What We Supply</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Automotive product categories
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
                            <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">build</span>
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Industrial<br />Supply?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Need die‑cast parts, SS piping, cables, or welding consumables for your automotive project? Share your BOM and we’ll map capacity.</p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                                Request Custom Quote
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
                            From program intake to scaled delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for OEMs, Tier‑1 suppliers, and fleet operators who need IATF‑aligned components with PPAP packs and serialized traceability.
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
                                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500 mb-2">Step {i + 1}</span>
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
                                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-yellow-500">Step {i + 1}</span>
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
                            Automotive‑grade quality and traceability
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['IATF 16949 — Automotive QMS alignment', 'ISO 9001:2015 — Quality management', 'PPAP / APQP — Part approval & planning', 'IS/ASTM — Material standards for metals', 'IEC/IS — Cable & harness compliance', 'OEM‑specific requirements & SORs'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Dimensional inspection (CMM, gauges)', 'PMI / chemical analysis per batch', 'Weld quality inspection & NDE', 'Functional testing & leak testing', 'Surface finish & coating verification', 'Hi‑pot & continuity for harnesses', 'Sample PPAP packs for OEM submission'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability',
                                items: ['Serialized batch IDs & part genealogy', 'Digital QC reports per batch', 'Material Testing Certificates (MTCs)', 'PPAP documentation packs', 'Warranty & recall management trails', 'Export documentation for global markets'],
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
                            Measurable impact for automotive programs
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

                    {/* Case study */}
                    {/*<motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="bg-slate-50 rounded-xl border border-slate-200 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center"
                    >
                        <div className="flex-1">
                            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Case Study</p>
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">OEM Assembly Plant Supply — Die‑Cast & SS Piping</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Metallo coordinated 5 audited Small and Medium Enterprise partners to supply precision die‑cast motor housings (Al), SS 304 coolant piping, cable trays for the paint‑shop, and AWS‑certified welding wires for body‑in‑white assembly — delivered with PPAP documentation and serialized batch IDs across a 12‑month OEM contract.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">8,000+</p>
                                    <p className="text-xs text-slate-500 font-sans">Die‑Cast Parts</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">99.2%</p>
                                    <p className="text-xs text-slate-500 font-sans">First‑Pass Yield</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">5</p>
                                    <p className="text-xs text-slate-500 font-sans">Small and Medium Enterprise Partners</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">12 mo</p>
                                    <p className="text-xs text-slate-500 font-sans">Contract Duration</p>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <button className="inline-flex items-center gap-2 px-6 py-3 border border-metallo-navy text-metallo-navy text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy hover:text-white transition-all duration-300 rounded-sm">
                                Download Case Study PDF
                                <span className="material-symbols-outlined text-sm">download</span>
                            </button>
                        </div>
                    </motion.div>*/}
                </div>
            </AnimatedSection>

            {/* ═══ 8. FINAL CTA ═══════════════════════════════════════════ */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={SITE_IMAGES.industries.automotive.cta}
                    alt="Automotive manufacturing"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to scale your<br />automotive program?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mb-10">
                        From PPAP packs and battery enclosures to fleet electrification kits — Metallo delivers program‑grade capacity from India's audited Small and Medium Enterprise network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">description</span>
                            Start Program Qualification
                        </button>
                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">ev_station</span>
                            Request EV Capability Pack
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AutomotiveMobility;
