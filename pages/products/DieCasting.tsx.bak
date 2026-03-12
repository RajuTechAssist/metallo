import React from "react";
import { Link } from "react-router-dom";

const CASTING_CATEGORIES = [
    {
        id: "aluminium-hpdc",
        title: "Aluminium HPDC",
        icon: "precision_manufacturing",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop",
        description: "High-pressure die cast aluminium components with tight tolerances. Ideal for automotive, electrical, and industrial housing applications.",
        specs: ["ADC12 / A380 Alloy", "50T – 1600T Machines", "±0.05mm Tolerance"],
        products: ["Motor Housings", "Gear Box Covers", "LED Heat Sinks", "Electrical Enclosures"],
    },
    {
        id: "aluminium-gravity",
        title: "Aluminium Gravity Casting",
        icon: "water_drop",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop",
        description: "Gravity-fed permanent mould casting for superior mechanical properties and pressure-tight components.",
        specs: ["A356 / LM25 Alloy", "T6 Heat Treatable", "Pressure Tight"],
        products: ["Valve Bodies", "Pump Housings", "Structural Brackets", "Cylinder Heads"],
    },
    {
        id: "zinc",
        title: "Zinc Die Casting",
        icon: "hexagon",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
        description: "Hot-chamber zinc die casting for miniature, thin-wall, and precision components with excellent surface quality.",
        specs: ["Zamak 3 / Zamak 5", "Hot Chamber Process", "Wall ≥ 0.5mm"],
        products: ["Lock Mechanisms", "Zipper Components", "Decorative Hardware", "Miniature Connectors"],
    },
    {
        id: "machining",
        title: "CNC Machining & Finishing",
        icon: "settings",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
        description: "In-house CNC machining and finishing — drilling, tapping, milling, shot blasting, powder coating, and anodizing.",
        specs: ["3-Axis & 4-Axis CNC", "VMC & HMC", "Ra 0.8 – 3.2 µm"],
        products: ["CNC Milling & Drilling", "Shot Blasting", "Powder Coating", "Anodizing & Plating"],
    },
    {
        id: "tooling",
        title: "Tool & Die Design",
        icon: "draw",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop",
        description: "In-house tool room with CAD/CAM die design, CNC machining, EDM, and wire-cut capabilities.",
        specs: ["H13 Tool Steel", "CAD/CAM Design", "Flow Simulation"],
        products: ["Die Design & Simulation", "Die Manufacturing", "Die Maintenance", "Prototype Tooling"],
    },
];

const CAPS = [
    { icon: "verified", label: "IATF 16949 Ready", desc: "Automotive quality management compliant" },
    { icon: "precision_manufacturing", label: "50T – 1600T Machines", desc: "Cold & hot chamber range" },
    { icon: "science", label: "In-House Testing", desc: "Spectrometer, CMM, X-Ray" },
    { icon: "local_shipping", label: "Global Supply", desc: "JIT delivery capability" },
];

const INDS = [
    { icon: "directions_car", name: "Automotive" },
    { icon: "bolt", name: "Electrical" },
    { icon: "plumbing", name: "Plumbing" },
    { icon: "lightbulb", name: "Lighting" },
    { icon: "factory", name: "Industrial" },
    { icon: "router", name: "Telecom" },
];

const DieCasting: React.FC = () => (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
        {/* HERO */}
        <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: "500px" }}>
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=80&auto=format&fit=crop" alt="Die casting" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/80" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px)" }} />
            <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-yellow-500 font-medium">Die Casting</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                        Die Casting<br /><span className="text-yellow-500">Precision Engineered Components.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
                        Aluminium and zinc die cast components with in-house tooling, CNC machining, and surface finishing — from prototype to mass production.
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                        <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
                        Download Brochure
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
        </section>

        {/* CAPABILITIES */}
        <section className="bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {CAPS.map(c => (
                        <div key={c.label} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-yellow-500 text-xl">{c.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 font-heading">{c.label}</h3>
                                <p className="text-xs text-slate-500 font-sans mt-0.5">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="bg-slate-50 py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-sans">Our Capabilities</span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">Die Casting Solutions</h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto font-sans">End-to-end die casting — from die design through casting, machining, and surface finishing.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CASTING_CATEGORIES.map(cat => (
                        <div key={cat.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                            <div className="relative h-52 overflow-hidden">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-yellow-500 text-2xl">{cat.icon}</span>
                                    <h3 className="text-lg font-heading font-bold text-white">{cat.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">{cat.description}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {cat.specs.map(s => <span key={s} className="text-[10px] font-bold text-slate-700 bg-yellow-50 px-2.5 py-1 rounded font-sans tracking-wide">{s}</span>)}
                                </div>
                                <div className="space-y-2 mb-6">
                                    {cat.products.map(p => (
                                        <div key={p} className="flex items-center gap-2 text-sm text-slate-500 font-sans">
                                            <span className="material-symbols-outlined text-yellow-500 text-xs">check_circle</span>{p}
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 hover:text-yellow-500 uppercase tracking-wider font-sans transition-colors group/link">
                                    Enquire Now <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-sans">Trusted Across</span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">Industries We Serve</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {INDS.map(i => (
                        <div key={i.name} className="flex flex-col items-center gap-3 p-6 rounded-sm bg-slate-50 hover:bg-yellow-50 border border-slate-200 hover:border-yellow-200 transition-all group">
                            <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-yellow-500 transition-colors">{i.icon}</span>
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider text-center font-heading">{i.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-800 border border-slate-700 rounded-sm p-10 md:p-14 border-l-4 border-l-yellow-500 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl text-yellow-500">assignment</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3">Have a Die Casting Project?</h3>
                            <p className="text-base text-slate-400 font-sans leading-relaxed">Share your 3D CAD file for a feasibility study, die quotation, and per-piece pricing.</p>
                        </div>
                        <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined text-xl">upload_file</span>Upload Drawing
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default DieCasting;
