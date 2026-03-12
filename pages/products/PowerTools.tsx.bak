import React from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════
   POWER TOOLS — Product Hub
   ═══════════════════════════════════════════════════════════════ */

const TOOL_CATEGORIES = [
    {
        id: "grinders",
        title: "Angle Grinders",
        icon: "rotate_right",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop",
        description:
            "Heavy-duty angle grinders from 4\" to 9\" for cutting, grinding, and polishing metal, stone, and concrete. Variable speed and paddle-switch safety models available.",
        specs: ["100mm – 230mm Disc", "720W – 2600W", "M10 / M14 Spindle"],
        products: ["4\" Mini Grinder (720W)", "5\" Industrial Grinder (1400W)", "7\" Heavy Duty Grinder (2200W)", "9\" Large Grinder (2600W)"],
    },
    {
        id: "drills",
        title: "Drills & Impact Drivers",
        icon: "home_repair_service",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80&auto=format&fit=crop",
        description:
            "Rotary drills, impact drills, and hammer drills for steel, wood, masonry, and concrete. Keyless chuck systems with variable speed and reversible operation.",
        specs: ["10mm – 26mm Chuck", "500W – 1500W", "Corded & Cordless"],
        products: ["Impact Drill (13mm)", "Rotary Hammer Drill (26mm)", "Cordless Drill Driver (18V)", "Magnetic Drill Press"],
    },
    {
        id: "cutting",
        title: "Cutting Tools",
        icon: "content_cut",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop",
        description:
            "Chop saws, circular saws, jigsaw machines, and cut-off wheels for precise metal and material cutting in fabrication shops and construction sites.",
        specs: ["355mm – 400mm Blade", "1800W – 2400W", "Dry / Wet Cut"],
        products: ["14\" Chop Saw / Cut-Off Machine", "7\" Circular Saw", "Jigsaw Machine (Variable Speed)", "Metal Cutting Bandsaw"],
    },
    {
        id: "abrasives",
        title: "Abrasives & Consumables",
        icon: "blur_circular",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
        description:
            "Cutting discs, grinding wheels, flap discs, wire brushes, and polishing pads. Bonded and coated abrasives for metalworking, deburring, and surface finishing.",
        specs: ["4\" – 14\" Discs", "EN 12413", "Type 27 / Type 41"],
        products: ["Thin Cut-Off Disc (1mm / 1.6mm)", "Grinding Disc (6mm)", "Flap Disc (40–120 Grit)", "Wire Cup & Wheel Brush"],
    },
    {
        id: "hand-tools",
        title: "Hand Tools & Measuring",
        icon: "architecture",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
        description:
            "Professional-grade hand tools — spanners, pliers, hammers, wrenches, and precision measuring instruments for industrial maintenance and assembly.",
        specs: ["Chrome Vanadium Steel", "ISO 1711 / DIN 3110", "Insulated Options"],
        products: ["Combination Spanner Set", "Adjustable Wrench", "Vernier Caliper (Digital)", "Torque Wrench"],
    },
];

const TOOL_CAPABILITIES = [
    { icon: "verified", label: "ISI / CE Marked", desc: "Power tools certified to IS & CE safety standards" },
    { icon: "battery_charging_full", label: "Corded & Cordless", desc: "18V / 36V Li-Ion and corded industrial models" },
    { icon: "build", label: "Spare Parts Support", desc: "OEM spare parts and service centre network" },
    { icon: "local_shipping", label: "Pan-India Delivery", desc: "Direct dispatch from authorised distributors" },
];

const TOOL_INDUSTRIES = [
    { icon: "factory", name: "Manufacturing" },
    { icon: "apartment", name: "Construction" },
    { icon: "directions_boat", name: "Shipyards" },
    { icon: "oil_barrel", name: "Oil & Gas" },
    { icon: "precision_manufacturing", name: "Fabrication" },
    { icon: "engineering", name: "Maintenance" },
];

const PowerTools: React.FC = () => {
    return (
        <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
            {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
            <section
                className="relative w-full overflow-hidden"
                style={{ height: "70vh", minHeight: "500px" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&q=80&auto=format&fit=crop"
                    alt="Power tools"
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
                            <span className="text-yellow-500 font-medium">Power Tools</span>
                        </nav>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                            Power Tools
                            <br />
                            <span className="text-yellow-500">Built for Performance.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
                            Industrial-grade grinders, drills, cutting tools, and abrasives
                            from leading global brands — CE certified and backed by
                            comprehensive spare parts support.
                        </p>

                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                            <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
                            Download Power Tools Catalog
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
            </section>

            {/* ═══ CAPABILITIES STRIP ════════════════════════════════ */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {TOOL_CAPABILITIES.map((cap) => (
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
                        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">Power Tool Categories</h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto font-sans">
                            Complete range of power tools and abrasives — grinders, drills, cutting machines, and hand tools — for heavy industrial and professional use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TOOL_CATEGORIES.map((cat) => (
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
                                        {cat.specs.map((spec) => (
                                            <span key={spec} className="text-[10px] font-bold text-slate-700 bg-yellow-50 px-2.5 py-1 rounded font-sans tracking-wide">{spec}</span>
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
                        {TOOL_INDUSTRIES.map((ind) => (
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
                                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3">Need Bulk Power Tool Orders?</h3>
                                <p className="text-base text-slate-400 font-sans leading-relaxed">
                                    Contact us for project-specific tool kits, bulk pricing, and after-sales service agreements. Response within 24 hours.
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

export default PowerTools;
