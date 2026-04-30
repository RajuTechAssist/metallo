"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import Image from 'next/image';

/* ─── SECTION NAV ───────────────────────────────────────────── */
const NAV_ITEMS = [
    { label: 'Overview', id: 'overview' },
    { label: 'Why Metallo', id: 'why-metallo' },
    { label: 'Products', id: 'products' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Technical', id: 'technical' },
    { label: 'Benefits', id: 'benefits' },
];

/* ─── PRODUCT DATA ──────────────────────────────────────────── */
const PRODUCTS = [
    {
        title: 'Pipelines & Fittings',
        icon: 'valve',
        useCases: 'Oil & gas pipelines, chemical process lines, refineries, LNG terminals.',
        assurance: 'Stainless steel, duplex, and alloy pipes; ASME B31.3 certified welding SOPs; MTCs per heat.',
        image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Modular Skids & Assemblies',
        icon: 'precision_manufacturing',
        useCases: 'Process plants, refineries, LNG terminals, fertilizer units.',
        assurance: 'Pre‑fabricated modules; CNC machining; API 6D / API 600 compliant; traceable BOMs.',
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Valves & Supports',
        icon: 'settings_input_component',
        useCases: 'Pipeline networks, process plants, offshore platforms.',
        assurance: 'API 600/602 standards; third‑party validation; corrosion‑resistant coatings; PMI tested.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Industrial Fabrications',
        icon: 'engineering',
        useCases: 'Refinery structures, chemical plant assemblies, pressure vessel supports.',
        assurance: 'Audited partners; SOPs for dimensional tolerances; PMI testing; ASME Section VIII compliance.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Cable Trays & Instrumentation',
        icon: 'cable',
        useCases: 'Refinery cable routing, instrumentation support, control systems.',
        assurance: 'Galvanized/SS/Aluminium; standardized perforation; fire‑resistant ratings; hazardous area compliance.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop',
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Project Intake', desc: 'Upload P&IDs, isometric drawings, or BOM; Metallo maps capacity across audited pipe mills, fabricators, and machining partners.', icon: 'upload_file' },
    { title: 'Vendor & SOP Deployment', desc: 'Certified MSME partners onboarded with SOPs for welding (ASME IX), finishing, dimensional tolerances, and corrosion‑resistance protocols.', icon: 'rule' },
    { title: 'Central Procurement', desc: 'Bulk sourcing of stainless steel grades (304, 316, duplex, super duplex alloys) with mill test certificates and grade control.', icon: 'shopping_cart' },
    { title: 'QC & Testing', desc: 'Central QC Hub performs PMI, hydro‑testing, radiography, tensile & chemical analysis; third‑party lab validation and MTC issuance.', icon: 'verified' },
    { title: 'Delivery & Support', desc: 'Coordinated logistics with project‑timed deliveries, packing lists, and installation support for site mobilization.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Eliminate Compliance Risk', desc: 'ASME/API/ASTM certified products with full MTCs, radiography reports, and third‑party lab validation on every batch.', icon: 'verified_user' },
    { title: 'Corrosion‑Resistant Assurance', desc: 'Controlled stainless steel grades (304, 316, duplex) with PMI testing ensure materials survive harsh refinery and pipeline environments.', icon: 'shield' },
    { title: 'Scale Without CAPEX', desc: 'Pooled MSME capacity across pipe mills, fabricators, and machining partners for surge demand during refinery expansions or pipeline rollouts.', icon: 'speed' },
    { title: 'Cost Predictability', desc: 'Centralized procurement with bulk alloy sourcing reduces variance, eliminates rework, and provides transparent pricing per MT.', icon: 'savings' },
    { title: 'Export Readiness', desc: 'Compliance with global standards for Middle East, Africa, and Southeast Asian refinery and pipeline projects.', icon: 'public' },
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
   OIL & GAS / PROCESS INDUSTRIES PAGE
   ═══════════════════════════════════════════════════════════════ */
const OilGasProcessIndustries: React.FC = () => {
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
                    src="/industries/oil-gas2.png"
                    alt="Oil and gas process industries"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                    style={{ y: heroY }}
                />
                <div className="absolute" />

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
                            <span className="text-yellow-500 font-medium">Oil & Gas / Process Industries</span>
                        </nav>

                        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Process‑Grade Supply,<br />
                            <span className="text-yellow-500">Certified & Traceable.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            ASME/API/ASTM‑compliant pipelines, fittings, skids, and assemblies from an audited MSME network — corrosion‑resistant, export‑ready, and delivered with full traceability.
                        </p>

                        {/* CTAs */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">request_quote</span>
                                Get a Project Quote
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">fact_check</span>
                                Request Vendor Audit
                            </button>
                        </div> */}

                        {/* Microcopy */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                            <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
                            ASME/API/ASTM certified · PMI tested · Central QC Hub · MTC traceability
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
                            Metallo for Oil & Gas / Process Industries
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo applies its <strong className="text-metallo-navy">Distributed Manufacturing OS</strong> to the oil, gas, and process industries — aggregating MSME capacity across stainless steel pipe mills, fabrication shops, CNC machining units, and industrial assembly lines. By standardizing SOPs and centralizing quality control through its Central QC Hub, Metallo ensures EPC contractors, refineries, and process plants receive certified, corrosion‑resistant, and export‑ready components without heavy CAPEX investments.
                            </p>
                            <p>
                                India's oil & gas sector is expanding rapidly — new refineries under the National Refinery Expansion Programme, LNG terminal additions along the western coast, and the ₹1.18 lakh crore city gas distribution rollout are creating unprecedented demand. Simultaneously, process industries (chemicals, fertilizers, food, and pharma) require stainless steel and alloy piping, modular skids, and fabricated assemblies that meet <strong className="text-metallo-navy">ASME, ASTM, and API standards</strong>. Traditional MSME suppliers often face challenges with fragmented quality systems, inconsistent traceability, and an inability to scale during project surges — Metallo bridges exactly this gap.
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
                                    'India\'s petroleum refining capacity targeted to reach 450 MTPA by 2030 — driving massive demand for piping, fittings, and process equipment.',
                                    'City gas distribution expanding to 630+ geographical areas, requiring certified pipelines and modular assemblies at unprecedented scale.',
                                    'Process industries (chemicals, fertilizers, pharma) need ASME/API-compliant SS piping and skids with full heat‑wise traceability.',
                                    'MSMEs hold ~40% of India\'s manufacturing capacity but lack standardized quality systems to serve Tier‑1 EPC projects.',
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
                                    'Stringent compliance requirements — ASME B31.3, API 5L, ASTM A312, and ISO 9001 — that many MSME shops cannot independently certify.',
                                    'Corrosion resistance and material grade control (304, 316, duplex, super duplex) are critical for pipelines and chemical plants.',
                                    'Complex BOMs covering pipes, valves, trays, skids, and modular assemblies — often 500+ line items per project.',
                                    'Surge demand during refinery turnarounds or pipeline rollouts that outstrip single-site MSME capacity.',
                                    'Traceability & audit risk when suppliers cannot provide heat‑wise MTCs, radiography reports, or third‑party test certificates.',
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
                                    { label: 'Audited MSME network', desc: 'Pipe mills, fabricators, CNC machining units, and assembly shops vetted for ASME/API readiness.' },
                                    { label: 'Standardized SOPs', desc: 'Welding procedures (ASME IX), finishing, dimensional tolerances, and corrosion‑resistance protocols deployed across all partners.' },
                                    { label: 'Central procurement', desc: 'Bulk sourcing of SS grades (304, 316, duplex, super duplex) with mill test certificates and grade control.' },
                                    { label: 'Central QC Hub', desc: 'PMI, hydro‑testing, radiography, tensile & chemical analysis; third‑party lab validation and MTC issuance per batch.' },
                                    { label: 'Digital production tracking', desc: 'Real‑time visibility into production progress, QC reports, and batch traceability linked to P&IDs and project BOMs.' },
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Oil & Gas</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            One certified partner for your<br className="hidden sm:block" /> entire process supply chain
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                icon: 'hub',
                                title: 'Unified Procurement',
                                desc: 'One platform for pipes, fittings, skids, valves, and assemblies. Single BOM, consolidated invoicing, one quality standard.',
                            },
                            {
                                icon: 'workspace_premium',
                                title: 'Certified Quality',
                                desc: 'ASME/API/ASTM standards, PMI testing, radiography, tensile & chemical analysis on every batch.',
                            },
                            {
                                icon: 'shield',
                                title: 'Corrosion Resistance',
                                desc: 'Controlled grades (304, 316, duplex, super duplex) with PMI verification for harsh refinery and pipeline environments.',
                            },
                            {
                                icon: 'bolt',
                                title: 'Flexible Scaling',
                                desc: 'Pooled MSME capacity to handle surge demand during refinery turnarounds and pipeline rollouts.',
                            },
                            {
                                icon: 'public',
                                title: 'Export Readiness',
                                desc: 'Global standard compliance for Middle East, Africa, and Southeast Asian refinery and pipeline projects.',
                            },
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

            {/* ═══ 4. PRODUCT BLOCKS ══════════════════════════════════════ */}
            <AnimatedSection id="products" className="py-20 lg:py-28 bg-white">
                <div className="container">
                    <div className="mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">What We Supply</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Oil & gas product categories
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
                            <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">oil_barrel</span>
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Process<br />Equipment?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Upload your P&ID, isometric drawings, or BOM and we'll map capacity across our audited pipe mills, fabricators, and machining partners.</p>
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
                            From P&ID to site delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for EPC contractors and process plant procurement teams who need ASME/API‑certified components with complete traceability.
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Technical & Compliance</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Built to process‑industry standards
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['ASME B31.3 — Process Piping', 'API 5L — Line Pipe', 'ASTM A312/A269 — SS Pipes', 'ASME Section VIII — Pressure Vessels', 'API 6D / API 600 — Valves', 'ISO 9001 / ISO 14001 — Management Systems'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Positive Material Identification (PMI)', 'Hydrostatic pressure testing', 'Radiographic testing (RT)', 'Tensile & impact testing', 'Chemical analysis', 'Intergranular corrosion testing', 'Third‑party lab validation', 'MTC issuance per heat/lot'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability',
                                items: ['Heat‑wise batch identification', 'Digital QC reports', 'P&ID and BOM linkage', 'End‑to‑end audit trail', 'Downloadable MTCs and test certificates', 'Weld map and WPS/PQR documentation'],
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Benefits & ROI</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            What EPCs & process plants gain
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

                    {/* Case study placeholder */}
                    {/* <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="bg-slate-50 rounded-xl border border-slate-200 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center"
                    >
                        <div className="flex-1">
                            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Case Study</p>
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">Petrochemical Complex — Gujarat Refinery Expansion</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Supplied 2,400 MT of SS 316 process piping, duplex fittings, modular skids, and cable trays across 8 audited MSME partners. Full ASME B31.3 compliance, heat‑wise MTCs, PMI testing, and radiography on 100% of critical welds — delivered on schedule across a 16‑month EPC timeline.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">2,400 MT</p>
                                    <p className="text-xs text-slate-500 font-sans">Material Supplied</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">100%</p>
                                    <p className="text-xs text-slate-500 font-sans">ASME Compliance</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">8</p>
                                    <p className="text-xs text-slate-500 font-sans">MSME Partners</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">16 mo</p>
                                    <p className="text-xs text-slate-500 font-sans">On‑Time Delivery</p>
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
                    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&q=80&auto=format&fit=crop"
                    alt="Oil refinery at night"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to streamline your<br />process‑industry procurement?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
                        From P&ID to site delivery — ASME/API certified pipelines, fittings, skids, and assemblies from one audited manufacturing ecosystem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">request_quote</span>
                            Get a Project Quote
                        </button>
                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">fact_check</span>
                            Request Vendor Audit
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OilGasProcessIndustries;
