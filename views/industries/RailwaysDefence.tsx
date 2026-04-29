"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

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
        title: 'Structural Steel & Coach Fabrications',
        icon: 'train',
        useCases: 'Coach underframes, bogie components, couplers, mounting brackets, defence chassis and structural frames.',
        assurance: 'IS:2062/ASTM grades; RDSO‑aligned welding SOPs; dimensional inspection; MTCs per heat lot.',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Signal & Power Cables',
        icon: 'cable',
        useCases: 'Signaling cables, LV/HV train power cables, control & instrumentation cables, fire‑rated FRLS/LSZH coach wiring.',
        assurance: 'BIS/RDSO certified; IS/IEC compliant; hi‑pot & continuity tested; fire‑rated (FRLS/LSZH) options.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Cable Trays & Routing Systems',
        icon: 'account_tree',
        useCases: 'Under‑coach cable routing, depot infrastructure, signal equipment housing, defence shelter cable management.',
        assurance: 'IEC 61537/IS 16230; hot‑dip GI/SS/powder‑coated; fire‑rated; custom sizes for coach profiles.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Welding Consumables & Electrodes',
        icon: 'whatshot',
        useCases: 'Coach body assembly welding, bogie frame joining, structural fabrication for rail/defence platforms.',
        assurance: 'AWS/ASME certified; flux‑cored & solid wires; RDSO‑approved grades; standardized SOPs across MSME network.',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Precision Die‑Cast & CNC Components',
        icon: 'precision_manufacturing',
        useCases: 'Rail fittings, sensor brackets, latch housings, defence equipment mounts, CNC‑machined brackets and assemblies.',
        assurance: 'Al/Zn die‑cast; CNC finishing ±0.05 mm; X‑ray porosity checks; serialized part IDs; PPAP packs.',
        image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&q=80&auto=format&fit=crop',
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Project Intake & BOM Mapping', desc: 'Upload drawings and BOM; Metallo maps capacity across audited rail/defence‑capable MSME partners.', icon: 'upload_file' },
    { title: 'Capability Validation & Pilot', desc: 'Capability study, pilot fabrication, and sample NDT/functional checks to qualify partner plants.', icon: 'science' },
    { title: 'SOP Deployment & Material Staging', desc: 'Standardized welding, assembly, and finishing SOPs aligned to RDSO/DRDO standards; centralized material procurement.', icon: 'rule' },
    { title: 'Production Tracking & QC', desc: 'Digital production tracking; Central QC Hub performs NDT, PMI, tensile and chemical tests; MTCs issued per batch.', icon: 'verified' },
    { title: 'Pre‑Assembly & Logistics', desc: 'Coordinated multi‑site pre‑assembly, sequencing, and JIT delivery to depots, yards, or defence facilities.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Lower Compliance Risk', desc: 'Consistent MTCs, NDT reports, and RDSO/DRDO‑grade documentation reduce audit rework and project hold‑ups.', icon: 'verified_user' },
    { title: 'Elastic Program Capacity', desc: 'Parallelize production across multiple audited sites to meet large rolling‑stock orders or defence program ramps.', icon: 'hub' },
    { title: 'Faster Delivery', desc: 'Parallelized, audited production across locations shortens lead times for large coach and defence assemblies.', icon: 'speed' },
    { title: 'Cost & Material Control', desc: 'Centralized procurement of critical steels, alloys, and cables reduces grade variance and eliminates rework.', icon: 'savings' },
    { title: 'Export Readiness', desc: 'Compliance and documentation aligned to global standards for international rail and defence export opportunities.', icon: 'public' },
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

/* ═══════════════════════════════════════════════════════════════
   RAILWAYS & DEFENCE PAGE
   ═══════════════════════════════════════════════════════════════ */
const RailwaysDefence: React.FC = () => {
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
                <motion.img
                    src="/industries/railway-defense.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ y: heroY }}
                />
                <div className="absolute" />

                <motion.div
                    className="relative z-10 flex flex-col justify-center h-full container"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="max-w-3xl inset-0 bg-slate-900/60 pt-10 pb-10 pl-10 pr-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link href="/" className="hover:text-white transition-colors">Industries</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Railways &amp; Defence</span>
                        </nav>

                        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Railways &amp; Defence<br />
                            <span className="text-yellow-500">Manufacturing, Certified.</span>
                        </h1>

                        <p className="text-lg md:text-lg text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            RDSO‑ and DRDO‑aligned manufacturing from India's audited MSME network — structural steel, signal cables, cable trays, welding consumables, and precision die‑cast components with Central QC, NDT, and full MTC traceability.
                        </p>

                        {/* CTAs */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">description</span>
                                Request a Rail / Defence Quote
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">fact_check</span>
                                Schedule Vendor Audit
                            </button>
                        </div> */}

                        {/* Microcopy */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                            <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
                            RDSO / DRDO‑aligned SOPs · NDT, PMI, and MTC traceability across every batch
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
                            Metallo for Railways &amp; Defence
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo applies its <strong className="text-metallo-navy">Distributed Manufacturing OS</strong> to the Railways &amp; Defence sectors by aggregating audited MSME capacity — SS pipe mills, heavy fabricators, wire &amp; cable plants, cable tray manufacturers, welding consumable producers, and CNC machining units — and standardizing SOPs, QC, and traceability so rail integrators and defence contractors get certified, scalable production without heavy CAPEX.
                            </p>
                            <p>
                                India's rolling‑stock and metro expansion is driving large, repeatable demand for coach components, bogie parts, structural fabrications, and electrical assemblies. Meanwhile, the <strong className="text-metallo-navy">Make‑in‑Defence</strong> push and rising defence production targets mean more contracts, higher indigenisation quotas, and growing export ambitions — creating demand for certified domestic suppliers. MSMEs already form a critical part of the defence and rail supply chain; with Metallo's certification, SOPs, and centralized QA they can be scaled to meet large program needs.
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
                                    'India\'s rolling‑stock market valued at multi‑billion dollars — strong coach production growth over 5 years.',
                                    'Make‑in‑Defence push: rising defence production targets, higher indigenisation quotas, growing exports.',
                                    'MSMEs form a critical part of rail/defence supply chain — ready for aggregation and certification.',
                                    'Metro expansion across 20+ Indian cities driving repeatable demand for coach assemblies.',
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
                                    'RDSO/IR approval requirements for railways; DRDO/DPSU compliance for defence programs.',
                                    'Fragmented MSME suppliers with variable SOPs, traceability, and third‑party testing.',
                                    'Large rolling‑stock orders and defence ramps need burst capacity across multiple partners.',
                                    'Complex multi‑site fabrication and pre‑assembly for coach and defence subsystems.',
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
                                    { label: 'MSME network for rail/defence', desc: 'Audited SS fabricators, wire & cable plants, cable tray manufacturers, and welding consumable producers mapped to RDSO/DRDO capabilities.' },
                                    { label: 'Steel vertical', desc: 'SS pipes, tubes, sheets, and structural steel (IS:2062/ASTM) for coach frames, bogie parts, and defence chassis.' },
                                    { label: 'Wire & Cable vertical', desc: 'BIS/RDSO‑certified signal cables, power cables, and fire‑rated FRLS/LSZH coach wiring.' },
                                    { label: 'Cable Tray vertical', desc: 'GI/SS cable trays for under‑coach routing, depot infrastructure, and defence shelter management.' },
                                    { label: 'Central QC Hub', desc: 'NDT (RT/UT/MT/PT), PMI, tensile testing, and third‑party validation; MTCs and RDSO/DRDO documentation per batch.' },
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Railways &amp; Defence</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Certified, scalable manufacturing<br className="hidden sm:block" /> for rail and defence programs
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: 'hub', title: 'Elastic Program Capacity', desc: 'Parallelize production across multiple audited MSME sites to meet large rolling‑stock orders or defence production ramps.' },
                            { icon: 'verified_user', title: 'RDSO / DRDO Compliance', desc: 'Central QC Hub produces RDSO/IR documentation for railways and DRDO/DPSU qualification packages for defence.' },
                            { icon: 'inventory_2', title: 'Multi‑Vertical Supply', desc: 'Steel, cables, cable trays, welding consumables, and die‑cast parts — all from one certified MSME ecosystem.' },
                            { icon: 'speed', title: 'Faster Program Delivery', desc: 'Standardized SOPs and digital BOM tracking reduce supplier qualification and production cycle times.' },
                            { icon: 'public', title: 'Export Readiness', desc: 'Documentation aligned to international standards for global rail and defence export markets.' },
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
                            Tailored solutions for rail and defence buyers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'train',
                                title: 'Rail Integrators & Coach Builders',
                                focus: 'Coach frames, cables, cable trays, welding, die‑cast fittings',
                                copy: 'Metallo supplies rolling‑stock integrators with structural steel for coach frames and bogies, RDSO‑certified signal and power cables, cable trays for under‑coach routing, welding consumables for body assembly, and precision die‑cast fittings — all from a single audited MSME ecosystem with Central QC and full MTC traceability.',
                                assurances: 'RDSO‑aligned SOPs · IS:2062 structural steel · BIS signal cables · Fire‑rated FRLS wiring',
                                cta: 'Request a Railway Quote',
                            },
                            {
                                icon: 'shield',
                                title: 'Defence Contractors & DPSUs',
                                focus: 'Structural fabrications, harnesses, machined parts, shelter modules',
                                copy: 'Defence contractors source structural steel fabrications (chassis, mounting frames), control cable harnesses, cable trays for shelter modules, and CNC‑machined precision parts through Metallo\'s audited MSME network — with DRDO/DPSU documentation packages, NDT validation, and serialized batch traceability.',
                                assurances: 'DRDO/DPSU documentation · NDT per batch · Serialized MTCs · Make‑in‑India compliance',
                                cta: 'Get a Defence Capability Pack',
                            },
                            {
                                icon: 'engineering',
                                title: 'Metro & Transit Authorities',
                                focus: 'Station infrastructure, depot cable systems, signaling components',
                                copy: 'Metro authorities and transit EPCs source cable trays for station and depot infrastructure, fire‑rated signal cables, structural steel for platform and viaduct assemblies, and welding consumables — with Metallo coordinating multi‑site fabrication and JIT delivery to depot timelines.',
                                assurances: 'Fire‑rated cable trays · RDSO signal cables · Structural steel MTCs · Depot JIT delivery',
                                cta: 'Start Metro Infrastructure Quote',
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
                            Rail &amp; defence product categories
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
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
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
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Rail / Defence<br />Component?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Upload drawings and BOM — we'll map capacity across audited MSME partners and deliver an RDSO/DRDO‑ready quote.</p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                                Request Project Quote
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
                            From project intake to depot delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for rail integrators, defence contractors, and metro authorities who need certified manufacturing with RDSO/DRDO documentation and coordinated multi‑site delivery.
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
                            Rail &amp; defence‑grade quality and traceability
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['RDSO / Indian Railways standards', 'DRDO / DPSU qualification packages', 'IS:2062 / ASTM — Structural steel', 'BIS — Wire & cable certification', 'IEC 61537 / IS 16230 — Cable trays', 'AWS / ASME — Welding qualification'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Radiographic testing (RT)', 'Ultrasonic testing (UT)', 'Magnetic particle testing (MT)', 'Dye penetrant testing (PT)', 'PMI / chemical analysis per batch', 'Tensile, hardness, and impact tests', 'Hi‑pot & continuity (cables)', 'Third‑party lab certification'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability & Documentation',
                                items: ['Serialized batch IDs & part genealogy', 'Digital QC reports per batch', 'Material Testing Certificates (MTCs)', 'RDSO‑format documentation packages', 'DRDO vendor qualification packs', 'Export‑ready statutory documentation'],
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
                            Measurable impact for rail and defence programs
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
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">Metro Coach Component Program — Multi‑Vertical Supply</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Metallo coordinated 8 audited MSME partners to supply a metro coach integrator with structural steel (IS:2062 underframes), RDSO‑certified signal cables, fire‑rated cable trays for under‑coach routing, AWS‑certified welding consumables, and die‑cast sensor brackets — achieving 97.8% first‑pass NDT acceptance and delivering 2 weeks ahead of the production timeline.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">120+</p>
                                    <p className="text-xs text-slate-500 font-sans">Coach Sets Supplied</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">97.8%</p>
                                    <p className="text-xs text-slate-500 font-sans">First‑Pass NDT</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">8</p>
                                    <p className="text-xs text-slate-500 font-sans">MSME Partners</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">2 wk</p>
                                    <p className="text-xs text-slate-500 font-sans">Ahead of Schedule</p>
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
                <img
                    src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1400&q=80&auto=format&fit=crop"
                    alt="Railway infrastructure manufacturing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to scale your<br />rail or defence program?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
                        From coach assemblies and signal cables to defence structural fabrications — Metallo delivers RDSO/DRDO‑certified manufacturing from India's audited MSME network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">description</span>
                            Request a Rail / Defence Quote
                        </button>
                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">fact_check</span>
                            Schedule Vendor Audit
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RailwaysDefence;
