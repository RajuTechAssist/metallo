import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   INDUSTRIAL TECH — MASTER-DETAIL INTERFACE
   Left: Product Sidebar  |  Right: Detailed Specs & Applications
   ═══════════════════════════════════════════════════════════════ */

interface TechProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  thumbnail: string;
  Specs: Record<string, string>;
  Applications: string[];
}

const PRODUCTS: TechProduct[] = [
  /* ── PLC & SCADA ───────────────────────────────────────────── */
  {
    Category: "PLC & SCADA", "Sub-Category": "PLC CPU Modules",
    "Product Name": "Programmable Logic Controller — CPU Module",
    Description: "Compact and modular PLC CPU modules for process automation, machine control, and plant-wide integration. Support for Modbus, Profinet, EtherNet/IP, and OPC-UA protocols.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Brands": "Siemens / Allen-Bradley / Schneider", "Series": "S7-1200 / S7-1500 / M340", "I/O Points": "16 – 1024+", "Communication": "Profinet / Modbus TCP / EtherNet/IP", "Programming": "Ladder / FBD / ST / SFC", "Memory": "Up to 4 MB Work Memory" },
    Applications: ["Plant Process Automation", "Machine Control", "Batch Processing", "Water Treatment SCADA"],
  },
  {
    Category: "PLC & SCADA", "Sub-Category": "I/O Expansion Modules",
    "Product Name": "PLC I/O Expansion Modules",
    Description: "Digital and analog I/O expansion modules for PLC systems. Modular design enables flexible scaling of input/output points for field instruments, actuators, and sensors.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Types": "DI / DO / AI / AO / RTD / TC", "Resolution": "12-bit / 16-bit Analog", "Voltage": "24V DC / 230V AC", "Protection": "IP20 (Panel Mount)", "Communication": "Backplane / Profibus / Modbus", "Certification": "CE / UL / ATEX (select)" },
    Applications: ["Sensor Integration", "Valve & Motor Control", "Temperature Monitoring", "Remote I/O Racks"],
  },
  {
    Category: "PLC & SCADA", "Sub-Category": "HMI Touch Panels",
    "Product Name": "HMI Touch Panel Displays",
    Description: "Industrial-grade HMI touch panels from 4\" to 22\" with colour TFT, alarm management, recipe handling, and connectivity to all major PLC brands via standard protocols.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Screen Size": "4\" / 7\" / 10\" / 15\" / 22\"", "Resolution": "Up to 1920 × 1080 (Full HD)", "Touch": "Resistive / Capacitive", "Communication": "RS-232 / RS-485 / Ethernet", "Protection": "IP65 Front Panel", "Storage": "SD Card / USB" },
    Applications: ["Machine Operator Interface", "Plant Overview Dashboards", "Alarm Management", "Recipe Management"],
  },
  {
    Category: "PLC & SCADA", "Sub-Category": "SCADA Software",
    "Product Name": "SCADA Software & Licences",
    Description: "Enterprise SCADA platforms for real-time monitoring, data logging, trend analysis, and remote access. Scalable from standalone to multi-server distributed architectures.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Platforms": "WinCC / Citect / FactoryTalk", "Tags": "128 to Unlimited", "Connectivity": "OPC-DA / OPC-UA / Modbus", "Historian": "Integrated / SQL Database", "Redundancy": "Server / Client / Network", "Web Access": "HTML5 / Thin Client" },
    Applications: ["Remote Plant Monitoring", "Central Control Rooms", "Data Historian & Trending", "Multi-Site Management"],
  },

  /* ── VFD Drives & Motors ───────────────────────────────────── */
  {
    Category: "VFD & Motors", "Sub-Category": "AC Variable Frequency Drives",
    "Product Name": "AC Variable Frequency Drives (VFD)",
    Description: "Energy-efficient VFDs for 3-phase AC motor speed control. V/f, sensorless vector, and closed-loop vector modes. Built-in PID, EMC filter, and brake chopper options.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Power Range": "0.75 kW – 500 kW", "Voltage": "230V / 415V / 690V", "Control": "V/f, SVC, FVC (Closed Loop)", "IP Rating": "IP20 / IP55", "Features": "Built-in PID, PLC Macro, EMC Filter", "Communication": "Modbus / Profibus / Profinet" },
    Applications: ["Pump & Fan Speed Control", "Conveyor Drives", "Compressor Control", "HVAC Systems"],
  },
  {
    Category: "VFD & Motors", "Sub-Category": "Servo Drives",
    "Product Name": "Servo Motors & Drives",
    Description: "High-precision servo systems with absolute encoders for positioning, interpolation, and motion control in CNC, robotics, and packaging machinery.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Power Range": "100 W – 15 kW", "Encoder": "Absolute 17-bit / 23-bit", "Control Modes": "Position / Speed / Torque", "Communication": "EtherCAT / Profinet / CANopen", "Response": "< 0.1 ms Current Loop", "Certification": "CE / UL" },
    Applications: ["CNC Machine Axes", "Pick & Place Robots", "Packaging Machines", "Labelling & Winding"],
  },
  {
    Category: "VFD & Motors", "Sub-Category": "Soft Starters",
    "Product Name": "Motor Soft Starters",
    Description: "Thyristor-based soft starters for smooth motor ramp-up, reducing mechanical stress and inrush current. Built-in motor protection, bypass contactor, and communication options.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Power Range": "5.5 kW – 800 kW", "Voltage": "230V / 415V", "Starting Torque": "Adjustable 30–100%", "Ramp Time": "1–60 sec", "Protection": "Overload / Phase Loss / Stall", "Communication": "Modbus RS-485" },
    Applications: ["Centrifugal Pumps", "Compressors", "Fans & Blowers", "Conveyor Drives"],
  },

  /* ── Sensors & Instrumentation ─────────────────────────────── */
  {
    Category: "Sensors", "Sub-Category": "Proximity Sensors",
    "Product Name": "Inductive & Capacitive Proximity Sensors",
    Description: "Non-contact proximity sensors for metal and non-metal object detection in factory automation, packaging, and assembly lines. Flush and non-flush mounting options.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Types": "Inductive / Capacitive / Magnetic", "Sensing Range": "1 – 40 mm", "Output": "PNP / NPN, NO / NC", "Protection": "IP67 / IP68", "Supply": "10–30V DC", "Certification": "CE / ATEX (select)" },
    Applications: ["Object Detection", "End-of-Travel Sensing", "Counting & Positioning", "Metal Part Detection"],
  },
  {
    Category: "Sensors", "Sub-Category": "Temperature Transmitters",
    "Product Name": "PT100 / Thermocouple Temperature Transmitters",
    Description: "2-wire and 4-wire temperature transmitters with 4–20mA / HART output. Head-mount and DIN-rail options for process temperature measurement from -200°C to +1800°C.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Input": "PT100 / PT1000 / TC (J/K/T/R/S)", "Output": "4–20 mA / HART / RS-485", "Accuracy": "±0.1% of span", "Range": "-200°C to +1800°C", "Mounting": "Head-Mount / DIN-Rail", "Protection": "IP67 / Exd (Flameproof)" },
    Applications: ["Furnace & Kiln Monitoring", "Chemical Reactor Control", "HVAC Temperature", "Food & Pharma Processing"],
  },
  {
    Category: "Sensors", "Sub-Category": "Pressure Transmitters",
    "Product Name": "Pressure Transmitters & Gauges",
    Description: "Piezoresistive and capacitive pressure transmitters for gauge, absolute, and differential pressure measurement. Stainless steel wetted parts and 4–20mA / HART output.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Range": "0–100 mbar to 0–600 bar", "Output": "4–20 mA / HART", "Accuracy": "±0.1% FS", "Process Connection": "1/2\" NPT / G1/2\"", "Material": "SS 316L Wetted Parts", "Protection": "IP65 / IP67" },
    Applications: ["Pipeline Pressure Monitoring", "Pump Discharge Pressure", "Tank Level (Hydrostatic)", "Compressor Systems"],
  },
  {
    Category: "Sensors", "Sub-Category": "Level Sensors",
    "Product Name": "Ultrasonic & Radar Level Sensors",
    Description: "Non-contact ultrasonic and radar level sensors for liquid and solid level measurement in tanks, silos, and open channels. 4–20mA, HART, and Modbus outputs.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Technology": "Ultrasonic / Radar (FMCW)", "Range": "Up to 30 m", "Output": "4–20 mA / HART / Modbus", "Accuracy": "±2 mm (Radar)", "Process Temp": "-40°C to +200°C", "Protection": "IP67 / IP68" },
    Applications: ["Tank Level Measurement", "Silo Inventory", "Open Channel Flow", "Chemical Storage"],
  },

  /* ── Switchgear & Protection ───────────────────────────────── */
  {
    Category: "Switchgear", "Sub-Category": "MCCB",
    "Product Name": "Moulded Case Circuit Breakers (MCCB)",
    Description: "MCCBs from 16A to 1600A with adjustable thermal-magnetic and electronic trip units. Breaking capacity up to 100kA for LV power distribution and motor protection.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Current Range": "16A – 1600A", "Voltage": "415V AC / 500V AC", "Breaking Capacity": "25 – 100 kA @ 415V", "Trip Unit": "Thermal-Magnetic / Electronic", "Poles": "3P / 4P", "Standard": "IEC 60947-2" },
    Applications: ["Main Incoming Breaker", "Sub-Distribution Boards", "Motor Feeder Protection", "Generator Protection"],
  },
  {
    Category: "Switchgear", "Sub-Category": "ACB",
    "Product Name": "Air Circuit Breakers (ACB)",
    Description: "Draw-out and fixed-type ACBs from 800A to 6300A with microprocessor-based trip units. Communication-ready for smart switchboard integration.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Current Range": "800A – 6300A", "Voltage": "690V AC", "Breaking Capacity": "50 – 100 kA", "Trip Unit": "Microprocessor (LSI / LSIG)", "Type": "Fixed / Draw-Out", "Communication": "Modbus / Profibus" },
    Applications: ["Main LV Switchboard", "Bus Coupler", "Generator Incomer", "Large Motor Feeder"],
  },
  {
    Category: "Switchgear", "Sub-Category": "Contactors & Relays",
    "Product Name": "Contactors & Overload Relays",
    Description: "AC and DC contactors from 9A to 800A with matching thermal and electronic overload relays. Suitable for motor starting, capacitor switching, and lighting loads.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Contactor Range": "9A – 800A (AC-3)", "Coil Voltage": "24V–415V AC / 24V–110V DC", "Overload Range": "0.1A – 630A", "Type": "Thermal / Electronic / Solid-State", "Auxiliary": "Front / Side Mount Add-On", "Standard": "IEC 60947-4" },
    Applications: ["DOL Motor Starting", "Star-Delta Starting", "Capacitor Bank Switching", "Lighting Contactors"],
  },
  {
    Category: "Switchgear", "Sub-Category": "Protection Relays",
    "Product Name": "Numerical Protection Relays",
    Description: "Microprocessor-based numerical relays for overcurrent, earth fault, differential, and distance protection. IEC 61850 communication for smart grid and substation automation.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Functions": "OC / EF / Differential / Distance", "CT Input": "1A / 5A", "Communication": "IEC 61850 / Modbus / DNP3", "Disturbance Recorder": "Built-in (8 channels)", "Display": "Colour LCD + LEDs", "Standard": "IEC 60255" },
    Applications: ["Transformer Protection", "Feeder Protection", "Motor Protection", "Generator Protection"],
  },

  /* ── IoT & Smart Monitoring ────────────────────────────────── */
  {
    Category: "IoT & Monitoring", "Sub-Category": "IoT Gateways",
    "Product Name": "IoT Edge Gateways",
    Description: "Industrial IoT gateways for edge data collection, protocol conversion, and cloud connectivity. Support MQTT, OPC-UA, Modbus, and 4G/Wi-Fi/LoRa communication.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Protocols": "MQTT / OPC-UA / Modbus / BACnet", "Connectivity": "4G LTE / Wi-Fi / Ethernet / LoRa", "Edge Computing": "Linux / Docker Containers", "I/O": "4 DI / 2 DO / 2 AI / RS-485", "Storage": "8 GB eMMC + SD Card", "Protection": "IP40 / DIN-Rail Mount" },
    Applications: ["Remote Asset Monitoring", "Predictive Maintenance", "Energy Management", "Environmental Monitoring"],
  },
  {
    Category: "IoT & Monitoring", "Sub-Category": "Smart Energy Meters",
    "Product Name": "Smart Energy Meters & Analysers",
    Description: "Multi-function energy meters and power quality analysers with THD, demand, data logging, and Modbus/BACnet communication. BIS-certified for revenue-grade metering.",
    thumbnail: "/industrialTech/Automation-Technologies.jpg",
    Specs: { "Measurement": "V / I / kW / kVA / kVAr / PF / kWh", "Accuracy": "Class 0.5S / 1.0", "Communication": "Modbus RS-485 / BACnet / Ethernet", "Data Logging": "Built-in (30-day rolling)", "THD Analysis": "Up to 31st Harmonic", "Certification": "BIS / IEC 62053" },
    Applications: ["Energy Monitoring & Billing", "Power Quality Analysis", "Demand Management", "Sub-Metering"],
  },
  {
    Category: "IoT & Monitoring", "Sub-Category": "Predictive Maintenance",
    "Product Name": "Predictive Maintenance Platform",
    Description: "Cloud-based predictive maintenance solution combining vibration sensors, temperature monitoring, and AI/ML analytics to predict equipment failures before they happen.",
    thumbnail: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
    Specs: { "Sensors": "Vibration / Temperature / Current", "Analytics": "AI/ML Anomaly Detection", "Dashboard": "Cloud Web Portal + Mobile App", "Alerts": "Email / SMS / Push Notification", "Integration": "REST API / MQTT", "Subscription": "Annual SaaS Licence" },
    Applications: ["Rotating Equipment Health", "Motor Condition Monitoring", "Bearing Failure Prediction", "Pump Cavitation Detection"],
  },
];

/* ── Categories ──────────────────────────────────────────────── */

const CATEGORIES = [
  { key: "plc",        label: "PLC & SCADA",        icon: "developer_board",  match: "PLC & SCADA" },
  { key: "drives",     label: "VFD & Motors",        icon: "speed",            match: "VFD & Motors" },
  { key: "sensors",    label: "Sensors",             icon: "sensors",          match: "Sensors" },
  { key: "switchgear", label: "Switchgear",          icon: "electric_bolt",    match: "Switchgear" },
  { key: "iot",        label: "IoT & Monitoring",    icon: "cloud_sync",       match: "IoT & Monitoring" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  { icon: "engineering",    title: "Solutions Engineering",   desc: "Application-specific system design and integration." },
  { icon: "inventory_2",    title: "Authorised Distributor",  desc: "Siemens, Schneider, ABB, Omron & more." },
  { icon: "support_agent",  title: "Technical Support",       desc: "Commissioning, programming & field service." },
  { icon: "local_shipping", title: "Fast Dispatch",           desc: "Ex-stock availability + project delivery." },
];

/* ═══════════════════════════════════════════════════════════════ */

const IndustrialTech: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategoryKey: CategoryKey = useMemo(() => {
    const c = searchParams.get("category");
    if (c) { const found = CATEGORIES.find((cat) => cat.key === c); if (found) return found.key; }
    return "plc";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;
  const categoryProducts = useMemo(() => PRODUCTS.filter((p) => p.Category === activeCategory.match), [activeCategory]);

  const activeProductIdx = useMemo(() => {
    const param = searchParams.get("product");
    if (param) { const idx = categoryProducts.findIndex((p) => slugify(p["Product Name"]) === param); if (idx >= 0) return idx; }
    return 0;
  }, [searchParams, categoryProducts]);

  const activeProduct = categoryProducts[activeProductIdx] || categoryProducts[0];

  function slugify(n: string) { return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  function selectCategory(key: CategoryKey) { setSearchParams({ category: key }); setMobileMenuOpen(false); }
  function selectProduct(p: TechProduct) { setSearchParams({ category: activeCategoryKey, product: slugify(p["Product Name"]) }); setMobileMenuOpen(false); }

  const specEntries = useMemo(() => {
    if (!activeProduct) return [];
    return Object.entries(activeProduct.Specs);
  }, [activeProduct]);

  const detailVariants = { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, x: -12, transition: { duration: 0.15 } } };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        <img src="/industrialTech/Automation-Technologies.jpg" alt="Industrial technology" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Industrial Tech</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-4 md:mb-6">
              Industrial Tech<br /><span className="text-yellow-500">Smart Automation Solutions.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 lg:mb-12 font-sans leading-relaxed">
              PLC systems, VFD drives, sensors, switchgear, and IoT platforms — complete automation and power distribution solutions for Industry 4.0.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
              Download Product Guide
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY CATEGORY NAV ═══ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat.key} onClick={() => selectCategory(cat.key)}
                className={`relative whitespace-nowrap px-3 lg:px-5 py-4 text-[13px] font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                  activeCategoryKey === cat.key ? "text-yellow-600 border-b-2 border-yellow-500" : "text-slate-500 hover:text-slate-900"
                }`}>
                <span className="material-symbols-outlined text-base hidden sm:inline">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-4">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              Authorised Partner
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MASTER-DETAIL BODY ═══ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          {/* Mobile */}
          <div className="lg:hidden mb-6">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">menu</span>
                {activeProduct ? activeProduct["Product Name"] : "Select Product"}
              </span>
              <span className={`material-symbols-outlined text-lg transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            {mobileMenuOpen && (
              <div className="border border-slate-200 border-t-0 bg-white max-h-80 overflow-y-auto">
                {categoryProducts.map((product, idx) => (
                  <button key={idx} onClick={() => selectProduct(product)}
                    className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 ${
                      activeProductIdx === idx ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500" : "text-slate-600 hover:bg-slate-50"
                    }`}>
                    <span className="block font-heading font-semibold truncate">{product["Product Name"]}</span>
                    <span className="block text-xs opacity-60 mt-0.5">{product["Sub-Category"]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* LEFT: SIDEBAR */}
            <aside className="hidden lg:block w-[260px] xl:w-[300px] shrink-0">
              <div className="sticky" style={{ top: "64px" }}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <span className="material-symbols-outlined text-lg text-yellow-500">{activeCategory.icon}</span>
                  <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">{activeCategory.label}</h3>
                  <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">{categoryProducts.length} items</span>
                </div>
                <div className="flex flex-col space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                  {categoryProducts.map((product, idx) => (
                    <button key={idx} onClick={() => selectProduct(product)}
                      className={`w-full text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
                        activeProductIdx === idx
                          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                      }`}>
                      <div className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden ${activeProductIdx === idx ? "ring-2 ring-yellow-500" : ""}`}>
                        <img src={product.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`block text-[13px] font-heading leading-tight truncate ${activeProductIdx === idx ? "font-bold" : "font-semibold"}`}>{product["Product Name"]}</span>
                        <span className={`block text-[10px] mt-0.5 ${activeProductIdx === idx ? "text-slate-300" : "text-slate-400"}`}>{product["Sub-Category"]}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT: DETAIL */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div key={activeProduct["Product Name"]} variants={detailVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">{activeProduct.Category}</span>
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">{activeProduct["Sub-Category"]}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">{activeProduct["Product Name"]}</h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    <div className="mb-10">
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p>
                    </div>

                    {/* Specs */}
                    {specEntries.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>
                          Technical Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {specEntries.map(([key, val]) => (
                            <div key={key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">settings</span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{key}</span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Applications */}
                    {activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">apps</span>
                          Applications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProduct.Applications.map((app, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-sm border border-slate-100">
                              <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">check_circle</span>
                              <span className="text-sm font-sans text-slate-700 leading-relaxed">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-lg">download</span>Download Datasheet
                      </button>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all">
                        <span className="material-symbols-outlined text-lg">request_quote</span>Get Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QA BANNER ═══ */}
      <section className="bg-slate-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-yellow-500" /><span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">Why Choose Us</span><span className="block w-10 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">Your Automation Partner</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {QA_ITEMS.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl text-yellow-500">{item.icon}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 md:p-10 lg:p-14 border-l-4 border-l-yellow-500 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-yellow-600">assignment</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">Need an Automation Solution?</h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">
                  Share your requirements for a customised automation proposal with system architecture and BOM.
                </p>
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
};

export default IndustrialTech;
