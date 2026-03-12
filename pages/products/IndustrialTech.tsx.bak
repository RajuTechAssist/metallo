import React from "react";
import { Link } from "react-router-dom";

const TECH_CATEGORIES = [
    {
        id: "plc",
        title: "PLC & SCADA Systems",
        icon: "developer_board",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
        description: "Programmable logic controllers, SCADA panels, and HMI displays for process automation, plant control, and remote monitoring systems.",
        specs: ["Siemens / AB / Schneider", "S7-1200 / S7-1500", "Modbus / Profinet"],
        products: ["PLC CPU Modules", "I/O Expansion Modules", "HMI Touch Panels", "SCADA Software Licences"],
    },
    {
        id: "drives",
        title: "VFD Drives & Motors",
        icon: "speed",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format&fit=crop",
        description: "Variable frequency drives, servo motors, and soft starters for energy-efficient motor control in pumps, fans, conveyors, and CNC machines.",
        specs: ["0.75kW – 500kW", "230V / 415V / 690V", "IP20 – IP55"],
        products: ["AC Variable Frequency Drives", "Servo Motors & Drives", "Soft Starters", "Brake Resistors"],
    },
    {
        id: "sensors",
        title: "Sensors & Instrumentation",
        icon: "sensors",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop",
        description: "Proximity sensors, temperature transmitters, pressure gauges, flow meters, and level sensors for process instrumentation.",
        specs: ["4–20mA / HART", "IP67 / IP68", "ATEX Certified"],
        products: ["Proximity Sensors (Inductive/Capacitive)", "PT100 Temperature Transmitters", "Pressure Transmitters", "Ultrasonic Level Sensors"],
    },
    {
        id: "switchgear",
        title: "Switchgear & Protection",
        icon: "electric_bolt",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
        description: "MCCBs, ACBs, contactors, overload relays, and protection relays for LV & MV power distribution and motor control centres.",
        specs: ["Up to 6300A", "IEC 60947", "kA Rating: 25–100kA"],
        products: ["MCCB (16A – 1600A)", "ACB (800A – 6300A)", "Contactors & Overload Relays", "Numerical Protection Relays"],
    },
    {
        id: "iot",
        title: "IoT & Smart Monitoring",
        icon: "cloud_sync",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80&auto=format&fit=crop",
        description: "IoT gateways, smart energy meters, remote monitoring systems, and cloud-based analytics platforms for Industry 4.0 integration.",
        specs: ["MQTT / OPC-UA", "4G / Wi-Fi / LoRa", "Cloud Dashboard"],
        products: ["IoT Edge Gateways", "Smart Energy Meters", "Remote I/O Modules", "Predictive Maintenance Platform"],
    },
];

const CAPS = [
    { icon: "engineering", label: "Solutions Engineering", desc: "Application-specific system design" },
    { icon: "inventory_2", label: "Authorised Distributor", desc: "Siemens, Schneider, ABB, Omron" },
    { icon: "support_agent", label: "Technical Support", desc: "Commissioning & field service team" },
    { icon: "local_shipping", label: "Fast Dispatch", desc: "Ex-stock + project delivery" },
];

const INDS = [
    { icon: "factory", name: "Manufacturing" },
    { icon: "bolt", name: "Power" },
    { icon: "oil_barrel", name: "Oil & Gas" },
    { icon: "water", name: "Water & Utilities" },
    { icon: "apartment", name: "Buildings" },
    { icon: "precision_manufacturing", name: "OEM" },
];

const IndustrialTech: React.FC = () => (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
        {/* HERO */}
        <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: "500px" }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop" alt="Industrial technology" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/80" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px)" }} />
            <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-yellow-500 font-medium">Industrial Tech</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
                        Industrial Tech<br /><span className="text-yellow-500">Smart Automation Solutions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
                        PLC systems, VFD drives, sensors, switchgear, and IoT platforms from global OEMs — complete automation and power distribution solutions for Industry 4.0.
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                        <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
                        Download Product Guide
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
                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-sans">Our Range</span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3">Industrial Technology Solutions</h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto font-sans">Automation, drives, sensors, switchgear, and IoT — everything for smart industrial operations.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TECH_CATEGORIES.map(cat => (
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
                            <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3">Need an Automation Solution?</h3>
                            <p className="text-base text-slate-400 font-sans leading-relaxed">Share your requirements for a customised automation proposal with system architecture and BOM.</p>
                        </div>
                        <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg">
                            <span className="material-symbols-outlined text-xl">request_quote</span>Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default IndustrialTech;
