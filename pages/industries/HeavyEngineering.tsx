import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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
        title: 'Large Structural Fabrications',
        icon: 'foundation',
        useCases: 'Bridge girders, portal frames, heavy trusses, steel bridges, industrial building frames.',
        assurance: 'ASTM/IS:2062 steel; certified welding SOPs; dimensional inspection; MTCs per heat lot.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Pressure Equipment & Vessels',
        icon: 'propane_tank',
        useCases: 'Boilers, heat exchangers, storage tanks, process vessels, reactors for cement and steel plants.',
        assurance: 'ASME Section VIII; NDT (RT/UT/MT/PT); PMI testing; third‑party lab certification; MTCs.',
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Industrial Machinery Assemblies',
        icon: 'precision_manufacturing',
        useCases: 'Gear housings, base frames, heavy skids, crusher assemblies for mining, cement, and steel.',
        assurance: 'CNC machining; alignment services; pre‑assembly; PMI; traceable material certificates.',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Modular Plant Modules & Skids',
        icon: 'grid_view',
        useCases: 'Pre‑assembled modules for rapid on‑site erection, reducing field welding and delays.',
        assurance: 'Coordinated multi‑site fabrication; unified BOM; serialized batch IDs; load‑out planning.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80&auto=format&fit=crop',
    },
    {
        title: 'Heavy Plate & Section Work',
        icon: 'layers',
        useCases: 'Rolled plates, welded sections, machined mating surfaces for heavy structural applications.',
        assurance: 'SS/carbon steel grades; traceable MTCs; surface finish per spec; hydrostatic testing.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    },
];

/* ─── PROCESS STEPS ─────────────────────────────────────────── */
const PROCESS_STEPS = [
    { title: 'Project Intake & BOM Mapping', desc: 'Upload drawings and BOM; Metallo maps capacity across audited heavy‑fabrication partners, pipe mills, and machining units.', icon: 'upload_file' },
    { title: 'Capability Validation & Pilot', desc: 'Capability study, pilot fabrication, and sample NDT/fit checks to qualify partner plants for the project.', icon: 'science' },
    { title: 'SOP Deployment & Material Staging', desc: 'Standardized welding, heat‑treatment, and finishing SOPs deployed; centralized raw‑material procurement with grade control.', icon: 'rule' },
    { title: 'Production Tracking & QC', desc: 'Digital production tracking; Central QC Hub performs NDT, PMI, tensile and chemical tests; MTCs issued per batch.', icon: 'verified' },
    { title: 'Pre‑Assembly & Logistics', desc: 'Coordinated multi‑site pre‑assembly, load‑out planning, and JIT delivery to project site.', icon: 'local_shipping' },
];

/* ─── BENEFITS ──────────────────────────────────────────────── */
const BENEFITS = [
    { title: 'Predictable Compliance', desc: 'Consistent MTCs, NDT reports, and third‑party validation reduce audit rework and project hold‑ups.', icon: 'verified_user' },
    { title: 'Elastic Capacity', desc: 'Scale heavy fabrication capacity on demand without new CAPEX — parallelize across audited MSME partners.', icon: 'hub' },
    { title: 'Faster Delivery', desc: 'Parallelized, audited production across multiple locations shortens lead times for large assemblies.', icon: 'speed' },
    { title: 'Cost & Material Control', desc: 'Centralized procurement of critical steels and alloys reduces grade variance and eliminates rework.', icon: 'savings' },
    { title: 'Export Readiness', desc: 'Compliance and documentation aligned to global standards for Middle East, Africa, and ASEAN markets.', icon: 'public' },
];

/* ─── ANIMATION VARIANTS ────────────────────────────────────── */
const fadeUp = {
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
   HEAVY ENGINEERING PAGE
   ═══════════════════════════════════════════════════════════════ */
const HeavyEngineering: React.FC = () => {
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
        <div className="w-full bg-white">

            {/* ═══ 1. HERO ═══════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative w-full overflow-hidden" style={{ height: '85vh', minHeight: '600px' }}>
                <motion.img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&auto=format&fit=crop"
                    alt="Heavy engineering fabrication in an industrial workshop"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ y: heroY }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-metallo-navy/90 via-metallo-navy/70 to-transparent" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
                    }}
                />

                <motion.div
                    className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link to="/" className="hover:text-white transition-colors">Industries</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Heavy Engineering</span>
                        </nav>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Heavy Engineering Fabrication,<br />
                            <span className="text-yellow-500">Delivered at Scale.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-sans leading-relaxed">
                            Audited MSME capacity, certified heavy‑fabrication SOPs, and Central QC for pressure vessels, large structural works, and industrial assemblies — with NDT, PMI, and MTC traceability for every shipment.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">description</span>
                                Request a Project Quote
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-xl">fact_check</span>
                                Schedule Vendor Audit
                            </button>
                        </div>

                        {/* Microcopy */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                            <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
                            Pooled capacity across audited fabricators · NDT, PMI, and MTC traceability
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
            </section>

            {/* ═══ STICKY SECTION NAV ══════════════════════════════════ */}
            <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">Overview</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
                            Metallo for Heavy Engineering
                        </h2>

                        <div className="text-base text-slate-700 font-sans leading-relaxed space-y-5 mb-12">
                            <p>
                                Metallo applies its <strong className="text-metallo-navy">Distributed Manufacturing OS</strong> to the heavy engineering and capital goods sector — aggregating MSME capacity across pipe mills, heavy fabricators, CNC machining units, and assembly shops. By deploying standardized SOPs and centralizing quality control through its Central QC Hub, Metallo ensures EPCs, integrators, and industrial plants receive certified, traceable, and project‑ready heavy fabrications without building new facilities.
                            </p>
                            <p>
                                India's heavy engineering sector is recovering strongly, with engineering exports above <strong className="text-metallo-navy">US$100 billion</strong> and record government CAPEX driving demand for large‑format fabrications, pressure vessels, and heavy assemblies. Despite growth, the sector faces technology and scale gaps — many MSME shops have relevant capability but inconsistent SOPs, testing, and traceability. Metallo bridges this gap by standardizing quality across distributed capacity and providing <strong className="text-metallo-navy">NDT, PMI, and MTC traceability</strong> for every shipment.
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
                                    'Engineering exports above US$100B — strong government CAPEX driving demand.',
                                    'Record infrastructure spend on highways, ports, and industrial corridors.',
                                    'Growing demand for pressure vessels, heat exchangers, and heavy assemblies.',
                                    'Sector still relies on imports for some high‑end machinery — opening for local aggregators.',
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
                                    'Fragmented supplier base — many MSME shops have capability but inconsistent SOPs and testing.',
                                    'Pressure vessels and boilers require strict NDT, material certification, and third‑party validation.',
                                    'Large projects need burst capacity for heavy fabrications that single plants cannot always meet.',
                                    'Heavy subassemblies require coordinated multi‑site fabrication and JIT delivery.',
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
                                    { label: 'Network aggregation', desc: 'Onboard and audit SS pipe mills, fabricators, CNC and heavy fabrication units into a pooled capacity network.' },
                                    { label: 'SOP deployment', desc: 'Roll out welding standards, dimensional tolerances, heat‑treatment protocols, and surface‑finish rules across all partners.' },
                                    { label: 'Central procurement', desc: 'Bulk sourcing of critical steels and alloys with mill test certificates for grade control on pressure‑bearing components.' },
                                    { label: 'Central QC Hub', desc: 'NDT (RT/UT/MT/PT), PMI, tensile and chemical analysis, and third‑party lab validation; MTCs issued per batch.' },
                                    { label: 'Distributed Manufacturing OS', desc: 'Digital production tracking, vendor certification, and unified BOM management for real‑time visibility.' },
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Why Metallo for Heavy Engineering</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Scale large fabrications across<br className="hidden sm:block" /> audited MSME partners
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: 'hub', title: 'Elastic Heavy Capacity', desc: 'Parallelize large fabrications across multiple audited sites to meet project surges without new CAPEX.' },
                            { icon: 'verified_user', title: 'Certified Compliance', desc: 'NDT, PMI, tensile and chemical testing, and third‑party validation for statutory and EPC audits.' },
                            { icon: 'inventory_2', title: 'Single Partner for Complex BOMs', desc: 'Centralized procurement, unified BOM management, and coordinated logistics for multi‑site assemblies.' },
                            { icon: 'speed', title: 'Faster Project Delivery', desc: 'Parallelized production across audited partners shortens lead times for large assemblies.' },
                            { icon: 'savings', title: 'Cost & Material Control', desc: 'Centralized procurement of critical alloys reduces grade variance, eliminates rework, and provides transparent pricing.' },
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Who We Serve</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Tailored solutions for heavy engineering buyers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'engineering',
                                title: 'EPC Contractors & Integrators',
                                focus: 'Pressure vessels, structural fabrications, modular skids, piping',
                                copy: 'EPCs rely on Metallo for certified heavy fabrications — from bridge girders and pressure vessels to modular plant skids. Our audited MSME network delivers parallelized production with NDT, PMI, and MTCs for every batch, reducing audit rework and project hold‑ups.',
                                assurances: 'ASME/IS/EN compliance · NDT per batch · Serialized MTCs · Multi‑site pre‑assembly',
                                cta: 'Request a Project Quote',
                            },
                            {
                                icon: 'factory',
                                title: 'Steel, Cement & Mining Plants',
                                focus: 'Crusher assemblies, base frames, gear housings, heavy skids',
                                copy: 'Industrial plants source heavy machinery assemblies — gear housings, crusher components, base frames, and skids — through Metallo\'s pooled MSME capacity with CNC machining, alignment services, and certified material traceability.',
                                assurances: 'CNC machining · PMI testing · Traceable material certs · Pre‑assembly & alignment',
                                cta: 'Get Capability Study',
                            },
                            {
                                icon: 'apartment',
                                title: 'Infrastructure Developers',
                                focus: 'Bridge girders, portal frames, heavy trusses, structural steelwork',
                                copy: 'Developers of highways, ports, and industrial corridors source large structural steel fabrications through Metallo — with certified welding SOPs, dimensional inspection, and coordinated multi‑site production for project‑timeline delivery.',
                                assurances: 'IS:2062/ASTM steel · Certified weld SOPs · Dimensional reports · JIT logistics',
                                cta: 'Start Structural Quote',
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
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-bold text-yellow-600 hover:text-metallo-navy transition-colors">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">What We Supply</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Heavy engineering product categories
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
                            <h3 className="text-2xl font-heading font-extrabold text-metallo-navy mb-3">Custom Heavy<br />Fabrication?</h3>
                            <p className="text-sm text-metallo-navy/70 font-sans mb-6 max-w-md">Upload drawings and BOM — we'll map capacity across audited heavy‑fabrication partners and deliver a project‑ready quote.</p>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-500 mb-3">How It Works</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
                            From project intake to site delivery
                        </h2>
                        <p className="text-slate-400 font-sans mt-4 max-w-2xl mx-auto">
                            A 5‑step process designed for EPCs, integrators, and industrial plants who need certified heavy fabrications with NDT reports, MTCs, and coordinated multi‑site delivery.
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Technical &amp; Compliance</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Heavy engineering‑grade quality and traceability
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'menu_book',
                                title: 'Standards Supported',
                                items: ['ASME Section VIII — Pressure vessels', 'ASME Section IX — Welding qualification', 'IS:2062 / ASTM — Structural steel', 'EN 1090 — Structural fabrication', 'API 650/620 — Storage tanks', 'IS/IBR — Boiler regulations'],
                            },
                            {
                                icon: 'science',
                                title: 'Testing & Validation',
                                items: ['Radiographic testing (RT)', 'Ultrasonic testing (UT)', 'Magnetic particle testing (MT)', 'Dye penetrant testing (PT)', 'PMI / chemical analysis per batch', 'Tensile, hardness, and impact tests', 'Third‑party lab certification'],
                            },
                            {
                                icon: 'qr_code_2',
                                title: 'Traceability',
                                items: ['Serialized batch IDs & part genealogy', 'Digital QC reports per batch', 'Material Testing Certificates (MTCs)', 'NDT reports linked to weld maps', 'Statutory documentation packages', 'Export documentation for global markets'],
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">Benefits &amp; ROI</p>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
                            Measurable impact for heavy engineering projects
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
                            <h3 className="text-2xl font-heading font-bold text-metallo-navy mb-3">EPC Pressure Vessel Program — Multi‑Site Fabrication</h3>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                Metallo coordinated 7 audited MSME partners to fabricate 24 pressure vessels and heat exchangers for a cement plant expansion. Standardized welding SOPs (ASME IX), NDT on every weld, and PMI verification achieved 98.5% first‑pass NDT acceptance. Full MTC documentation and statutory package delivered 3 weeks ahead of project timeline.
                            </p>
                            <div className="flex gap-8 flex-wrap">
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">24</p>
                                    <p className="text-xs text-slate-500 font-sans">Vessels Fabricated</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-yellow-600">98.5%</p>
                                    <p className="text-xs text-slate-500 font-sans">First‑Pass NDT</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">7</p>
                                    <p className="text-xs text-slate-500 font-sans">MSME Partners</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-heading font-extrabold text-metallo-navy">3 wk</p>
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
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop"
                    alt="Heavy engineering fabrication"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-metallo-navy/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                        Ready to scale your<br />heavy engineering project?
                    </h2>
                    <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
                        From pressure vessels and bridge girders to modular plant modules — Metallo delivers certified heavy fabrications from India's audited MSME network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">description</span>
                            Request a Project Quote
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

export default HeavyEngineering;
