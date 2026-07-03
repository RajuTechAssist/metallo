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

/* ─── PRODUCT DATA ──────────────────────────────────────────── */
const PRODUCTS = [
    {
        title: 'HT/LT Cables & Conductors',
        icon: 'cable',
        useCases: 'Transmission lines, substations, industrial plants.',
        assurance: 'IEC/IS compliance, dielectric testing, MTCs.',
        image: SITE_IMAGES.industries.powerTransmission.products.solarField,
    },
    {
        title: 'Transformers (Distribution & Power)',
        icon: 'electrical_services',
        useCases: 'Grid expansion, industrial plants, renewable integration.',
        assurance: 'SOP‑driven assembly, third‑party lab validation, traceability protocols.',
        image: SITE_IMAGES.industries.powerTransmission.products.windTurbines,
    },
    {
        title: 'Substation Assemblies',
        icon: 'settings_input_component',
        useCases: 'Modular fabrication for rapid deployment at substations.',
        assurance: 'CNC and sheet‑metal partners audited to SOPs, standardized BOMs.',
        image: SITE_IMAGES.industries.powerTransmission.products.highVoltage,
    },
    {
        title: 'Cable Trays & Supports',
        icon: 'grid_view',
        useCases: 'Utility projects, substations, industrial facilities.',
        assurance: 'Standardized load ratings, galvanization, corrosion resistance.',
        image: SITE_IMAGES.industries.powerTransmission.products.substation,
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Project Intake', desc: 'Upload drawings or BOM; Metallo maps capacity across audited cable, conductor, and transformer partners.', icon: 'upload_file' },
    { title: 'SOP Deployment', desc: 'Certified global manufacturing partners onboarded with strict SOPs for conductor manufacturing, insulation, and transformer assembly.', icon: 'rule' },
    { title: 'Central Procurement', desc: 'Bulk sourcing of copper, aluminium, and steel grades for cost control and compliance.', icon: 'shopping_cart' },
    { title: 'QC & Testing', desc: 'Central QC Hub performs dielectric tests, batch validation, and third‑party lab certification.', icon: 'verified' },
    { title: 'Delivery & Support', desc: 'Coordinated logistics with project‑timed deliveries and installation support.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Reduce Compliance Risk', desc: 'IEC/IS certified products with traceable MTCs and third‑party lab validation on every batch.', icon: 'verified_user' },
    { title: 'Scale Faster', desc: 'Pooled borderless network capacity across cable, conductor, and transformer partners for surge demand during grid expansion.', icon: 'speed' },
    { title: 'Cost Predictability', desc: 'Centralized procurement of copper and aluminium reduces variance and procurement overhead.', icon: 'savings' },
    { title: 'Globally-Compliant', desc: 'Meet international buyer expectations with standardized QA built for global mega-projects.', icon: 'public' },
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
   POWER & TRANSMISSION PAGE
   ═══════════════════════════════════════════════════════════════ */
const PowerTransmission: React.FC = () => {
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
                    src={SITE_IMAGES.industries.powerTransmission.hero}
                    alt="Power transmission infrastructure"
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
                    <div className="max-w-3xl inset-0 bg-slate-900/55 pb-10 pt-10 pl-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link href="/" className="hover:text-white transition-colors">Industries</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Power & Transmission</span>
                        </nav>

                        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Powering the Global Grid,<br />
                            <span className="text-yellow-500">Certified at Scale.</span>
                        </h1>

                        <p className="text-lg md:text-lg text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            IEC/IS‑compliant cables, conductors, transformers, and substation assemblies from an audited, global manufacturing network with centralized QA, ready for international deployment.
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
                            IEC/IS certified · Central QC Hub · Dielectric testing · MTC traceability
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
                            Metallo for Power & Transmission
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo extends its distributed Manufacturing OS to the power and transmission sector, aggregating global manufacturing capacity for cables, conductors, transformers, and substation assemblies. Operating on a model of Centralized Control, Distributed Execution, Metallo ensures that Tier-1 EPC contractors, utilities, and industrial plants receive globally-compliant products without the heavy CAPEX of building new facilities.
                            </p>
                            <p>
                                The global power sector is undergoing rapid expansion with transnational investments in high‑voltage transmission lines, substations, and renewable integration. Tier-1 EPCs and utilities require suppliers who can deliver <strong className="text-metallo-navy">IEC/IS‑compliant</strong> cables, transformers, and assemblies with full MTC traceability and testing. Traditional suppliers often struggle with surge capacity and fragmented quality systems — Metallo bridges that gap.
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
                                    'Massive transnational infrastructure expansions in HV transmission lines, substations, and renewable energy integration worldwide.',
                                    'EPCs and utilities need IEC/IS‑compliant cables, transformers, and assemblies with full traceability.',
                                    'Traditional suppliers struggle with surge capacity and fragmented quality systems during grid expansion phases.',
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
                                    'Fragmented supply base for HT/LT cables, conductors, and transformers.',
                                    'Compliance risk with IEC/IS standards and utility audits.',
                                    'Surge demand during grid expansion and renewable integration phases.',
                                    'Procurement complexity across cables, conductors, transformers, and assemblies.',
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
                                    { label: 'Audited partners', desc: 'Cable, conductor, and transformer global manufacturing partners onboarded with strict SOPs and inspection checklists.' },
                                    { label: 'Standardized processes', desc: 'SOPs for conductor manufacturing, insulation, and transformer assembly.' },
                                    { label: 'Central QC Hub', desc: 'Dielectric tests, batch validation, and third‑party lab certification on every lot.' },
                                    { label: 'Digital tracking', desc: 'Real‑time production visibility and traceability linked to project BOM.' },
                                    { label: 'Central procurement', desc: 'Bulk copper, aluminium, and steel sourcing for cost control and grade consistency.' },
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
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Power & Transmission</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            One certified partner for your<br className="hidden sm:block" /> entire power supply chain
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: 'hub',
                                title: 'Unified Procurement',
                                desc: 'One platform for HT/LT cables, conductors, transformers, and assemblies. Single BOM, single quality standard, unified invoicing.',
                            },
                            {
                                icon: 'workspace_premium',
                                title: 'Certified Quality',
                                desc: 'IEC/IS standards, batch testing, dielectric tests, and Material Testing Certificates across all product categories.',
                            },
                            {
                                icon: 'bolt',
                                title: 'Flexible Scaling',
                                desc: 'Pooled global network capacity to meet surge demand during transnational grid expansion — no investment in new facilities required.',
                            },
                            {
                                icon: 'public',
                                title: 'Globally-Compliant',
                                desc: 'Compliance with global standards built for global mega-projects. Standardized QA meets international buyer expectations.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={fadeUp}
                                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-lg bg-metallo-navy/5 flex items-center justify-center mb-6 group-hover:bg-yellow-500/10 transition-colors">
                                    <span className="material-symbols-outlined text-2xl text-metallo-navy group-hover:text-yellow-600 transition-colors">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-metallo-navy mb-3">{item.title}</h3>
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
                            Power & transmission product categories
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={fadeUp}
                            className="group rounded-xl overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg h-[360px] flex flex-col items-center justify-center text-center p-8 cursor-pointer hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 md:col-span-2"
                        >
                            <span className="material-symbols-outlined text-5xl text-metallo-navy mb-4">bolt</span>
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Need a Custom<br />Power Solution?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Upload your BOM, single‑line diagram, or spec sheet and we'll map capacity across our audited cable, transformer, and assembly partners.</p>
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
                            From spec to site — certified delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for EPC contractors and utilities who need IEC/IS‑certified products with traceable quality at every stage.
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
                            Certified to power‑sector standards
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['IEC 60502 — Power Cables', 'IS 7098 — XLPE Cables', 'IEC 60076 — Transformers', 'ASTM B231 — Aluminium Conductors', 'IS 398 — ACSR Conductors'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Dielectric strength testing', 'Insulation resistance testing', 'Tensile & elongation tests', 'Chemical analysis', 'Third‑party lab validation', 'MTC issuance per batch'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability',
                                items: ['Unique batch IDs per heat/lot', 'Digital QC reports', 'Centralized BOM linkage', 'End‑to‑end audit trail', 'Downloadable test certificates'],
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
                            What EPCs & utilities gain
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-5">
                                    <span className="material-symbols-outlined text-3xl text-yellow-600">{benefit.icon}</span>
                                </div>
                                <h3 className="text-lg font-heading font-bold text-metallo-navy mb-3">{benefit.title}</h3>
                                <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-sm mx-auto">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Case study placeholder */}
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
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">400kV Substation Expansion — Western Grid</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Supplied 850 km of HT/LT cables, 24 distribution transformers, and modular substation assemblies across 4 audited global manufacturing partners. Full IEC compliance, dielectric test reports, and MTCs delivered on schedule across a 10‑month project.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">850 km</p>
                                    <p className="text-xs text-slate-500 font-sans">Cable Supplied</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">24</p>
                                    <p className="text-xs text-slate-500 font-sans">Transformers</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">100%</p>
                                    <p className="text-xs text-slate-500 font-sans">IEC Compliance</p>
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
                    src={SITE_IMAGES.industries.powerTransmission.cta}
                    alt="Power transmission lines"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to power your next<br />project with certified supply?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mb-10">
                        From spec sheet to site delivery — IEC/IS certified cables, transformers, and assemblies from one audited manufacturing ecosystem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
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

export default PowerTransmission;
