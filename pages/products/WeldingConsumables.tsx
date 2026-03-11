import React from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════
   WELDING CONSUMABLES — Product Hub
   ═══════════════════════════════════════════════════════════════ */

const WELDING_CATEGORIES = [
    {
        id: "smaw",
        title: "SMAW Electrodes (Stick Welding)",
        icon: "whatshot",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop",
        description:
            "General purpose and low-hydrogen stick electrodes for structural steel, pressure vessels, and maintenance welding. Available in E6013, E7018, E7016 and specialty grades.",
        standards: ["AWS A5.1", "IS 814", "EN ISO 2560"],
        products: ["E6013 Mild Steel Electrode", "E7018 Low Hydrogen Electrode", "E7016 High Cellulose Electrode", "E309L / E316L SS Electrode"],
    },
    {
        id: "mig",
        title: "MIG / MAG Welding Wire",
        icon: "cable",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80&auto=format&fit=crop",
        description:
            "Solid and flux-cored MIG wires for semi-automatic and robotic welding. ER70S-6 copper-coated, stainless, and aluminium filler wires available in standard spool sizes.",
        standards: ["AWS A5.18", "AWS A5.9", "IS 6419"],
        products: ["ER70S-6 Mild Steel Wire", "E71T-1 Flux Cored Wire", "ER308L / ER316L SS Wire", "ER4043 Aluminium Wire"],
    },
    {
        id: "tig",
        title: "TIG Filler Rods & Specialty",
        icon: "auto_fix_high",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop",
        description:
            "Precision TIG filler rods for critical joints — stainless steel, aluminium, and nickel alloys. Also includes submerged arc wire/flux combinations for heavy fabrication.",
        standards: ["AWS A5.9", "AWS A5.14", "IS 6419"],
        products: ["ER308L TIG Rod", "ER316L TIG Rod", "ER5356 Aluminium Rod", "Submerged Arc Wire & Flux"],
    },
    {
        id: "brazing",
        title: "Brazing & Soldering Alloys",
        icon: "science",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
        description:
            "Silver brazing alloys, copper-phosphorus rods, and lead-free soldering materials for HVAC, plumbing, electrical, and precision assembly applications.",
        standards: ["AWS A5.8", "IS 3557", "EN ISO 17672"],
        products: ["Silver Brazing Alloy (BAg)", "Copper-Phosphorus Rod (BCuP)", "Lead-Free Solder Wire", "Flux Pastes & Powders"],
    },
    {
        id: "accessories",
        title: "Welding Accessories",
        icon: "build",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
        description:
            "Complete range of welding accessories — electrode holders, ground clamps, welding cables, gas regulators, nozzles, and contact tips for MIG/TIG torches.",
        standards: ["IS 9968", "EN 60974"],
        products: ["Electrode Holders", "Ground Clamps", "MIG Torch Consumables", "Gas Regulators & Flow Meters"],
    },
];

const WELDING_CAPABILITIES = [
    { icon: "verified", label: "AWS / IS Certified", desc: "Compliant with AWS & IS welding standards" },
    { icon: "thermostat", label: "All-Position Welding", desc: "Electrodes rated for all welding positions" },
    { icon: "straighten", label: "Custom Packaging", desc: "5kg, 20kg hermetically sealed packs" },
    { icon: "local_shipping", label: "Pan-India Delivery", desc: "Warehouse stock + direct mill dispatch" },
];

const WELDING_INDUSTRIES = [
    { icon: "factory", name: "Fabrication" },
    { icon: "oil_barrel", name: "Oil & Gas" },
    { icon: "apartment", name: "Construction" },
    { icon: "directions_boat", name: "Shipbuilding" },
    { icon: "bolt", name: "Power Plants" },
    { icon: "precision_manufacturing", name: "Heavy Engineering" },
];

const WeldingConsumables: React.FC = () => {
    return (
        <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
            {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
            <section
                className="relative w-full overflow-hidden"
                style={{ height: "70vh", minHeight: "500px" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80&auto=format&fit=crop"
                    alt="Welding manufacturing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
                    }}
                />

                <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-yellow-500 font-medium">Welding Consumables</span>
                        </nav>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Welding Consumables
                            <br />
                            <span className="text-yellow-500">Precision Joins. Every Time.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
                            AWS &amp; IS certified electrodes, MIG/TIG wires, and brazing alloys
                            engineered for structural fabrication, pressure vessels, and
                            critical industrial applications.
                        </p>

                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                            <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
                            Download Welding Catalog
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
            </section>

            {/* ═══ CAPABILITIES STRIP ════════════════════════════════ */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {WELDING_CAPABILITIES.map((cap) => (
                            <div key={cap.label} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-yellow-500 text-xl">{cap.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 font-heading">{cap.label}</h3>
                                    <p className="text-xs text-slate-500 font-sans mt-0.5">{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PRODUCT CATEGORIES GRID ═══════════════════════════ */}
            <section id="categories" className="bg-slate-50 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-sans">Our Range</span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">
                            Welding Product Categories
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto font-sans">
                            Complete range of welding consumables — electrodes, MIG/TIG wires, brazing alloys, and accessories — all certified and backed by test certificates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WELDING_CATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
                            >
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
                                        {cat.standards.map((std) => (
                                            <span key={std} className="text-[10px] font-bold text-slate-700 bg-yellow-50 px-2.5 py-1 rounded font-sans tracking-wide">{std}</span>
                                        ))}
                                    </div>
                                    <div className="space-y-2 mb-6">
                                        {cat.products.map((product) => (
                                            <div key={product} className="flex items-center gap-2 text-sm text-slate-500 font-sans">
                                                <span className="material-symbols-outlined text-yellow-500 text-xs">check_circle</span>
                                                {product}
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 hover:text-yellow-500 uppercase tracking-wider font-sans transition-colors group/link">
                                        Enquire Now
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ INDUSTRIES ════════════════════════════════════════ */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-sans">Trusted Across</span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">Industries We Serve</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {WELDING_INDUSTRIES.map((ind) => (
                            <div key={ind.name} className="flex flex-col items-center gap-3 p-6 rounded-sm bg-slate-50 hover:bg-yellow-50 border border-slate-200 hover:border-yellow-200 transition-all group">
                                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-yellow-500 transition-colors">{ind.icon}</span>
                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider text-center font-heading">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA BANNER ════════════════════════════════════════ */}
            <section className="bg-slate-900 py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800 border border-slate-700 rounded-sm p-10 md:p-14 border-l-4 border-l-yellow-500 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl text-yellow-500">assignment</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3">Need Bulk Welding Consumables?</h3>
                                <p className="text-base text-slate-400 font-sans leading-relaxed">
                                    Submit your project requirements for competitive pricing on bulk orders. Our team provides grade-specific availability and delivery timelines within 24 hours.
                                </p>
                            </div>
                            <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg">
                                <span className="material-symbols-outlined text-xl">request_quote</span>
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WeldingConsumables;
