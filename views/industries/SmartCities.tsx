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

/* ─── PRODUCT DATA (mapped to Metallo verticals) ─────────────── */
const PRODUCTS = [
    {
        title: 'Structural Steel & Stainless Pipes',
        icon: 'water_pipe',
        useCases: 'Water mains, drainage networks, sewage systems, utility conduits, structural supports for urban transit.',
        assurance: 'IS:2062/ASTM grades; seamless/welded/ERW options; MTCs per heat lot; hydrostatic testing.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Cable Trays, Conduits & Supports',
        icon: 'account_tree',
        useCases: 'Metro stations, smart grid nodes, telecom ducts, IT park infrastructure, underground utility corridors.',
        assurance: 'IEC 61537/IS 16230; hot‑dip GI/SS/powder‑coated; standardized load ratings; fire‑rated options.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Control & Instrumentation Cables',
        icon: 'cable',
        useCases: 'Smart grid wiring, IoT sensor networks, SCADA systems, building management, fire safety circuits.',
        assurance: 'BIS/IS certified; FRLS/LSZH fire‑rated; hi‑pot & continuity tested; shielded options for EMI.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Modular Utility Enclosures & Kiosks',
        icon: 'home_work',
        useCases: 'EV charging shelters, telecom shelters, smart‑city info kiosks, mini substations, water ATMs.',
        assurance: 'Pre‑wired and pre‑tested; powder‑coated/SS finishes; vandal‑resistant; modular bolt‑up assembly.',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Pre‑Assembled MEP Modules',
        icon: 'plumbing',
        useCases: 'Pump skids, water treatment modules, electrical distribution skids, HVAC assemblies for rapid site install.',
        assurance: 'Factory‑tested assemblies; unified BOM; serialized batch IDs; coordinated multi‑site fabrication.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Project Intake & BOM Mapping', desc: 'Upload drawings and BOM; Metallo maps capacity across audited urban‑infrastructure partners.', icon: 'upload_file' },
    { title: 'Design for Manufacture & Pilot', desc: 'Modularization and DfM suggestions to reduce site work and enable parallel production; pilot run with sample QC.', icon: 'design_services' },
    { title: 'SOP Deployment & Material Staging', desc: 'Standardized welding, finishing, and assembly SOPs deployed; centralized raw‑material procurement with grade control.', icon: 'rule' },
    { title: 'Production Tracking & Central QC', desc: 'Real‑time digital visibility; batch testing, MTCs, and third‑party lab validation at Central QC Hub.', icon: 'verified' },
    { title: 'Pre‑Assembly & JIT Delivery', desc: 'Coordinated multi‑site pre‑assembly, on‑site staging, and JIT delivery to project locations.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Faster Project Delivery', desc: 'Parallelized production across audited MSME partners shortens lead times for city‑scale infrastructure rollouts.', icon: 'speed' },
    { title: 'Lower Audit Risk', desc: 'Consistent MTCs, digital QC reports, and third‑party validation reduce compliance rework for municipal projects.', icon: 'verified_user' },
    { title: 'Cost Predictability', desc: 'Centralized procurement of steel, cables, and trays reduces grade variance and provides transparent, locked‑in pricing.', icon: 'savings' },
    { title: 'Elastic City‑Scale Capacity', desc: 'Pool audited MSME capacity for city‑wide rollouts — kiosks, piping, cable trays — without new plant investments.', icon: 'hub' },
    { title: 'Digital Traceability', desc: 'Serialized batch IDs, digital QC certificates, and BOM‑linked part genealogy for warranty and audit trail.', icon: 'qr_code_2' },
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
   SMART CITIES & URBAN DEVELOPMENT PAGE
   ═══════════════════════════════════════════════════════════════ */
const SmartCities: React.FC = () => {
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
                    src="/industries/smartCities1.jpg"
                    alt="Smart cities and urban development"
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
                    <div className="max-w-4xl inset-0 bg-slate-900/70 pb-10 pl-10 pt-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link href="/" className="hover:text-white transition-colors">Industries</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Smart Cities &amp; Urban Dev</span>
                        </nav>

                        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Manufacturing for Smart Cities,<br />
                            <span className="text-yellow-500">Delivered at Scale.</span>
                        </h1>

                        <p className="text-lg md:text-lg text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            Audited MSME capacity, modular components, and traceable QA for smart infrastructure, utilities, and urban systems — SS pipes, cable trays, control cables, modular enclosures, and MEP modules with Central QC and full MTC traceability.
                        </p>

                        {/* CTAs
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">description</span>
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
                            SOP‑driven production · Central QC Hub · Unified procurement for city‑scale BOMs
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
                            Metallo for Smart Cities &amp; Urban Development
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo leverages its <strong className="text-metallo-navy">Distributed Manufacturing OS</strong> to support India's smart city and urban development initiatives. By aggregating idle MSME capacity — SS pipe mills, cable tray manufacturers, wire &amp; cable plants, fabricators, and industrial assembly units — Metallo delivers certified, scalable, and asset‑light manufacturing solutions for infrastructure components, utilities, and modular assemblies.
                            </p>
                            <p>
                                India's <strong className="text-metallo-navy">Smart Cities Mission</strong> and rapid urbanization are driving demand for standardized, modular, and digitally traceable infrastructure components — structural steel, stainless pipes, cable trays, control cables, and pre‑assembled MEP modules — for utilities, transport, and housing. MSMEs already produce much of the required hardware but lack uniform SOPs, traceability, and centralized QA. Metallo upgrades and integrates them into a unified, quality‑controlled production ecosystem.
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
                                    'Smart Cities Mission driving demand for modular, repeatable urban infrastructure across 100+ cities.',
                                    'Metro expansion, smart grids, and IoT‑enabled utilities require digitally traceable components.',
                                    'EV charging infrastructure, telecom shelters, and smart water networks scaling rapidly.',
                                    'MSMEs produce the hardware but lack SOPs and traceability — ripe for aggregation and certification.',
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
                                    'Fragmented supply base — multiple small vendors with inconsistent quality and no unified traceability.',
                                    'Urban projects require certified materials, MTCs, and third‑party validation for municipal audits.',
                                    'City‑scale rollouts need elastic capacity for pipes, trays, enclosures, and assemblies simultaneously.',
                                    'Infrastructure BOMs span multiple categories — making procurement, QA, and logistics fragmented.',
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
                                    { label: 'Steel vertical', desc: 'SS pipes, tubes, sheets, and flanges (IS/ASTM) for water mains, drainage, utility conduits, and structural supports.' },
                                    { label: 'Cable Tray vertical', desc: 'Ladder, perforated, and wire mesh trays (GI/SS/powder‑coated) for metro stations, smart grids, and telecom ducts.' },
                                    { label: 'Wire & Cable vertical', desc: 'Control, instrumentation, and fire‑rated (FRLS/LSZH) cables for smart grids, IoT, SCADA, and building management.' },
                                    { label: 'Unified procurement', desc: 'One platform for multi‑category BOMs — steel, cables, trays — with centralized grade control and cost lock‑in.' },
                                    { label: 'Central QC Hub', desc: 'Batch testing, MTCs, NDT where applicable, and third‑party lab validation; digital QC reports linked to project BOMs.' },
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Smart Cities</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Modular, certified manufacturing<br className="hidden sm:block" /> for urban infrastructure at scale
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: 'hub', title: 'Elastic City‑Scale Capacity', desc: 'Pool audited MSME capacity for city‑wide rollouts — pipes, trays, enclosures, MEP modules — without new CAPEX.' },
                            { icon: 'verified_user', title: 'Certified Quality', desc: 'SOPs, batch testing, MTCs, and third‑party validation for municipal compliance and audit readiness.' },
                            { icon: 'inventory_2', title: 'Unified Multi‑Category Procurement', desc: 'One platform for steel, cables, cable trays, and modular assemblies — simplifying complex urban BOMs.' },
                            { icon: 'qr_code_2', title: 'Digital Traceability', desc: 'Production tracking and QC reports linked to smart city project BOMs — serialized batch IDs for warranty and audit.' },
                            { icon: 'speed', title: 'Faster Deployment', desc: 'Pre‑assembled modules and parallelized production compress project timelines for rapid urban rollouts.' },
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
                            Tailored solutions for smart city buyers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'location_city',
                                title: 'Municipal Authorities & SPVs',
                                focus: 'Pipes, cable trays, modular kiosks, street furniture, MEP modules',
                                copy: 'Smart city SPVs and municipal bodies source standardized infrastructure components — SS pipes for water networks, cable trays for smart grids, modular utility kiosks, and pre‑assembled MEP modules — through Metallo\'s audited MSME network with MTCs, digital traceability, and JIT delivery to project timelines.',
                                assurances: 'IS/ASTM steel · BIS cables · Batch MTCs · Digital QC reports · Municipal audit packages',
                                cta: 'Get a Municipal Quote',
                            },
                            {
                                icon: 'engineering',
                                title: 'EPCs & Smart City Integrators',
                                focus: 'Multi‑category BOMs, modular assemblies, cable routing systems',
                                copy: 'EPCs and system integrators consolidate multi‑category BOMs through Metallo — structural steel, control cables, cable trays, and modular enclosures sourced from a single certified MSME ecosystem with centralized procurement, grade control, and coordinated logistics.',
                                assurances: 'Unified BOM procurement · Centralized grade control · Pre‑assembly · JIT logistics',
                                cta: 'Request Project Capability Pack',
                            },
                            {
                                icon: 'apartment',
                                title: 'Real Estate & Township Developers',
                                focus: 'Plumbing, fire safety cables, cable trays, MEP skids',
                                copy: 'Developers of IT parks, commercial complexes, and smart townships source plumbing piping, fire safety cables, cable tray infrastructure, and pre‑assembled MEP skids through Metallo — with coordinated multi‑site fabrication and installation‑ready delivery.',
                                assurances: 'Fire‑rated FRLS cables · SS/GI plumbing · Cable tray fire ratings · MEP pre‑assembly',
                                cta: 'Start Township Infrastructure Quote',
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
                            Smart city &amp; urban infrastructure products
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
                            <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">domain_add</span>
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Urban<br />Infrastructure?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Upload drawings and BOM — we'll map capacity across audited partners and deliver a project‑ready quote for your smart city program.</p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-metallo-navy/90 transition-colors rounded-sm">
                                Get a Project Quote
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
                            From project intake to site delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for municipal authorities, EPCs, and developers who need certified infrastructure components with modular design, batch MTCs, and coordinated JIT delivery.
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
                            Urban infrastructure‑grade quality and traceability
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['IS:2062 / ASTM — Structural steel & pipes', 'IEC 61537 / IS 16230 — Cable trays', 'BIS — Wire & cable certification', 'IS/IEC — Control & instrumentation cables', 'Municipal & smart city spec compliance', 'Galvanization / powder‑coating standards'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Hydrostatic pressure testing (pipes)', 'Tensile, hardness, and impact tests', 'Hi‑pot & continuity (cables)', 'Fire rating tests (FRLS/LSZH)', 'Load rating validation (cable trays)', 'Third‑party lab certification'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability & Documentation',
                                items: ['Serialized batch IDs & part genealogy', 'Material Testing Certificates (MTCs)', 'Digital QC reports linked to project BOMs', 'Installation & maintenance checklists', 'Warranty documentation packages', 'Municipal audit documentation'],
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
                            Measurable impact for smart city programs
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
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">Smart City Utility Infrastructure — Multi‑Vertical Supply</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Metallo coordinated 6 audited MSME partners to supply a smart city SPV with SS water mains (IS:2062), GI cable trays for smart grid nodes, FRLS control cables for IoT sensor networks, pre‑fabricated EV charging shelters, and MEP pump skids — achieving 100% MTC completeness and delivering installation‑ready modules 10 days ahead of the city deployment schedule.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">3</p>
                                    <p className="text-xs text-slate-500 font-sans">City Zones Covered</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">100%</p>
                                    <p className="text-xs text-slate-500 font-sans">MTC Completeness</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">6</p>
                                    <p className="text-xs text-slate-500 font-sans">MSME Partners</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">10 d</p>
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
                    </motion.div> */}
                </div>
            </AnimatedSection>

            {/* ═══ 8. FINAL CTA ═══════════════════════════════════════════ */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format&fit=crop"
                    alt="Smart city urban infrastructure"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to scale your<br />smart city project?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
                        From utility piping and cable trays to modular enclosures and MEP modules — Metallo delivers certified urban infrastructure from India's audited MSME network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">description</span>
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

export default SmartCities;
