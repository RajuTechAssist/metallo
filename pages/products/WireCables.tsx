import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   WIRE & CABLES — MASTER-DETAIL INTERFACE
   Same layout structure as Steel page
   Left: Vertical Product Menu  |  Right: Detailed Specifications
   ═══════════════════════════════════════════════════════════════ */

/* ── Product Data ─────────────────────────────────────────────── */

interface CableProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  Conductor: string;
  Insulation: string;
  VoltageRating: string;
  Standards: string;
  Cores: string;
  CrossSection: string;
  Sheathing: string;
  Armouring: string;
  TempRating: string;
  Application: string;
  thumbnail: string;
  /* Optional */
  CurrentRating?: string;
  BendingRadius?: string;
  Testing?: string;
  Applications?: string[];
  applicationImage?: string;
}

const PRODUCTS: CableProduct[] = [
  /* ── Power Cables (Low Voltage) ─────────────────────────── */
  {
    Category: "Power Cables",
    "Sub-Category": "PVC Insulated",
    "Product Name": "LT PVC Power Cable (Armoured)",
    Description:
      "Heavy-duty PVC insulated and sheathed power cables with galvanised steel wire/strip armouring. Designed for underground and direct-burial installations in industrial and infrastructure projects up to 1.1 kV.",
    Conductor: "Annealed Copper / EC Grade Aluminium",
    Insulation: "PVC Type A (HR PVC on request)",
    VoltageRating: "1.1 kV (1100V)",
    Standards: "IS 1554 (Part 1), IEC 60502-1",
    Cores: "1C, 2C, 3C, 3½C, 4C",
    CrossSection: "1.5 sq mm – 400 sq mm",
    Sheathing: "PVC Type ST1 (Black/Grey)",
    Armouring: "GI Wire Armoured (Round) / GI Strip Armoured (Flat)",
    TempRating: "70°C (conductor), 160°C (short-circuit)",
    Application: "Underground LT distribution, industrial plants, power substations, building risers",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=120&q=80&auto=format&fit=crop",
    CurrentRating: "Per IS 3961 / IEC 60364 (derated per installation)",
    BendingRadius: "12× OD (armoured), 8× OD (unarmoured)",
    Testing: "HV Test (3.5 kV/5 min), IR Test, Conductor Resistance, Spark Test",
    Applications: ["Underground Distribution", "Industrial Plants", "Substations", "Building Risers"],
    applicationImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Power Cables",
    "Sub-Category": "XLPE Insulated",
    "Product Name": "LT XLPE Power Cable (Armoured)",
    Description:
      "Cross-linked polyethylene insulated cables offering higher current-carrying capacity and superior thermal performance compared to PVC. Ideal for industrial feeders and motor connections up to 1.1 kV.",
    Conductor: "Annealed Copper / EC Grade Aluminium",
    Insulation: "XLPE (Cross-Linked Polyethylene)",
    VoltageRating: "1.1 kV (1100V)",
    Standards: "IS 7098 (Part 1), IEC 60502-1",
    Cores: "1C, 2C, 3C, 3½C, 4C",
    CrossSection: "1.5 sq mm – 400 sq mm",
    Sheathing: "PVC Type ST2",
    Armouring: "GI Wire / Strip Armoured",
    TempRating: "90°C (conductor), 250°C (short-circuit)",
    Application: "Industrial feeders, motor connections, power distribution, panel wiring",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop",
    CurrentRating: "20-25% higher than PVC equivalent",
    BendingRadius: "12× OD (armoured)",
    Testing: "HV Test, IR Test, Hot Set Test, Conductor Resistance",
    Applications: ["Industrial Feeders", "Motor Connections", "Panel Wiring", "Power Distribution"],
    applicationImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Power Cables",
    "Sub-Category": "Unarmoured",
    "Product Name": "LT Power Cable (Unarmoured)",
    Description:
      "Unarmoured LT cables for indoor installations — cable trays, conduits, and panel wiring. Available in PVC and XLPE insulation variants for flexible and cost-effective wiring.",
    Conductor: "Annealed Copper / Aluminium",
    Insulation: "PVC / XLPE",
    VoltageRating: "1.1 kV",
    Standards: "IS 1554, IS 7098, IEC 60502-1",
    Cores: "1C, 2C, 3C, 4C",
    CrossSection: "1.5 sq mm – 300 sq mm",
    Sheathing: "PVC Type ST1",
    Armouring: "None (Unarmoured)",
    TempRating: "70°C (PVC) / 90°C (XLPE)",
    Application: "Cable tray installations, indoor wiring, panel connections, conduit runs",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&q=80&auto=format&fit=crop",
    Testing: "HV Test, IR Test, Conductor Resistance",
    Applications: ["Cable Trays", "Indoor Wiring", "Panel Connections", "Conduits"],
    applicationImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=85&auto=format&fit=crop",
  },

  /* ── Power Cables (HV / EHV) ────────────────────────────── */
  {
    Category: "Power Cables",
    "Sub-Category": "HT XLPE",
    "Product Name": "HT XLPE Power Cable (3.3–33 kV)",
    Description:
      "Medium-voltage XLPE insulated cables for primary distribution networks, industrial HT feeders, and substation interconnections. Available with copper wire screen and aluminium wire armour.",
    Conductor: "Stranded Copper / Aluminium (Compacted)",
    Insulation: "XLPE (Triple Extruded)",
    VoltageRating: "3.3 kV / 6.6 kV / 11 kV / 22 kV / 33 kV",
    Standards: "IS 7098 (Part 2), IEC 60502-2",
    Cores: "1C, 3C",
    CrossSection: "25 sq mm – 630 sq mm",
    Sheathing: "PVC / PE Outer Sheath",
    Armouring: "Aluminium Wire Armoured / GI Wire Armoured",
    TempRating: "90°C (continuous), 250°C (short-circuit)",
    Application: "HT distribution, substation interconnections, industrial HT feeders, wind farms",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop",
    CurrentRating: "Per IS 3961 / IEC 60287",
    BendingRadius: "15× OD (single core), 12× OD (3 core)",
    Testing: "Partial Discharge Test, HV Test, Tan Delta, Hot Set, VLF Test",
    Applications: ["HT Distribution", "Substations", "Wind Farms", "Industrial Feeders"],
    applicationImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Power Cables",
    "Sub-Category": "EHV XLPE",
    "Product Name": "EHV XLPE Cable (66–220 kV)",
    Description:
      "Extra-high voltage cables for transmission-grade applications. Triple-extruded XLPE insulation with copper wire screen, metallic sheath, and PE outer jacket for underground power transmission.",
    Conductor: "Milliken / Segmental Stranded Copper",
    Insulation: "Super-clean XLPE (Triple Extruded)",
    VoltageRating: "66 kV / 110 kV / 132 kV / 220 kV",
    Standards: "IEC 60840, IEC 62067, IS 7098 (Part 3)",
    Cores: "1C (Single Core)",
    CrossSection: "240 sq mm – 2500 sq mm",
    Sheathing: "PE / HDPE Outer Jacket",
    Armouring: "Non-magnetic (Stainless Steel Wire / Aluminium)",
    TempRating: "90°C (continuous), 250°C (short-circuit)",
    Application: "Underground power transmission, grid interconnections, urban cable tunnels, metro power",
    thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=120&q=80&auto=format&fit=crop",
    CurrentRating: "Per IEC 60287 (project-specific thermal design)",
    BendingRadius: "20× OD minimum",
    Testing: "Type Test (IEC 62067), Partial Discharge, Bending, Imp. Voltage, Load Cycle",
    Applications: ["Power Transmission", "Grid Interconnection", "Metro Power", "Cable Tunnels"],
    applicationImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=85&auto=format&fit=crop",
  },

  /* ── Control & Automation ───────────────────────────────── */
  {
    Category: "Control & Automation",
    "Sub-Category": "Control Cables",
    "Product Name": "Multi-Core Control Cable",
    Description:
      "PVC insulated and sheathed multi-core control cables for process automation, relay circuits, and PLC/DCS interconnections. Available in armoured and unarmoured variants with optional screening.",
    Conductor: "Annealed Copper",
    Insulation: "PVC Type A",
    VoltageRating: "1.1 kV",
    Standards: "IS 1554 (Part 1), IEC 60227",
    Cores: "2C, 4C, 7C, 10C, 12C, 19C, 24C, 27C, 37C, 61C",
    CrossSection: "0.5 sq mm – 6 sq mm",
    Sheathing: "PVC Type ST1",
    Armouring: "GI Strip Armoured / Unarmoured",
    TempRating: "70°C (conductor)",
    Application: "Process automation, relay circuits, PLC/DCS, SCADA systems, control panels",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=120&q=80&auto=format&fit=crop",
    Testing: "HV Test, IR Test, Conductor Resistance, Spark Test",
    Applications: ["Process Automation", "PLC/DCS", "SCADA Systems", "Control Panels"],
    applicationImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Control & Automation",
    "Sub-Category": "Instrumentation",
    "Product Name": "Instrumentation Cable (Screened)",
    Description:
      "Twisted pair and multi-pair instrumentation cables with individual and overall screening (Al-Mylar / Braid) for signal integrity. Designed for 4-20mA, thermocouple, and RTD circuits.",
    Conductor: "Annealed Copper (Tinned optional)",
    Insulation: "PE / PVC / XLPE",
    VoltageRating: "300/500V, 600/1000V",
    Standards: "IS 1554, IEC 60502, BS 5308",
    Cores: "1 Pair, 2 Pair, 4 Pair, 8 Pair, 12 Pair, 24 Pair",
    CrossSection: "0.5 sq mm – 2.5 sq mm (per conductor)",
    Sheathing: "PVC / LSZH Outer Sheath",
    Armouring: "GI Strip / Unarmoured",
    TempRating: "70°C – 105°C (per insulation type)",
    Application: "4-20mA signal loops, thermocouple/RTD wiring, DCS marshalling, analytical instruments",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&q=80&auto=format&fit=crop",
    Testing: "IR Test, Conductor Resistance, Capacitance Unbalance, Cross-talk, Shield Coverage",
    Applications: ["Signal Loops", "Thermocouple Wiring", "DCS Systems", "Analytical Instruments"],
    applicationImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&auto=format&fit=crop",
  },

  /* ── Specialty & Renewables ─────────────────────────────── */
  {
    Category: "Specialty & Renewables",
    "Sub-Category": "Solar Cables",
    "Product Name": "Solar DC Cable (1.5 kV)",
    Description:
      "UV-resistant, double-insulated single-core cables for photovoltaic string connections. Designed for extreme outdoor conditions with electron-beam cross-linked insulation for 25+ year service life.",
    Conductor: "Tinned Annealed Copper (Flexible)",
    Insulation: "Electron-beam XLPE (Double Insulated)",
    VoltageRating: "1.5 kV DC (1000V AC)",
    Standards: "EN 50618, TÜV 2PfG 1169, IEC 62930",
    Cores: "1C (Single Core)",
    CrossSection: "2.5 sq mm – 120 sq mm",
    Sheathing: "XLPO / LSZH Outer Jacket",
    Armouring: "None (Flexible)",
    TempRating: "-40°C to +90°C (120°C short-circuit)",
    Application: "Solar PV string connections, rooftop solar, solar farms, inverter wiring",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=120&q=80&auto=format&fit=crop",
    BendingRadius: "5× OD",
    Testing: "UV Resistance (720 hrs), Ozone, Acid/Alkali, Hot Set, 1.5kV HV Test",
    Applications: ["Solar Farms", "Rooftop Solar", "Inverter Wiring", "PV String Connections"],
    applicationImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Specialty & Renewables",
    "Sub-Category": "Welding Cables",
    "Product Name": "Flexible Welding Cable",
    Description:
      "Heavy-duty, extra-flexible rubber-sheathed cables for electric arc welding machines. High strand-count copper conductor for extreme flexibility and current handling.",
    Conductor: "Extra-fine Stranded Annealed Copper",
    Insulation: "EPR (Ethylene Propylene Rubber)",
    VoltageRating: "100V AC",
    Standards: "IS 9968 (Part 1), IEC 60245",
    Cores: "1C (Single Core)",
    CrossSection: "16 sq mm – 185 sq mm",
    Sheathing: "Tough Rubber Sheath (TRS)",
    Armouring: "None (Highly Flexible)",
    TempRating: "85°C (continuous)",
    Application: "Arc welding machines, electrode holders, portable welding sets, shipyard welding",
    thumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop",
    BendingRadius: "4× OD",
    Testing: "Flexibility Test, Conductor Resistance, Voltage Withstand, Ageing",
    Applications: ["Arc Welding", "Electrode Holders", "Shipyard Welding", "Portable Sets"],
    applicationImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Specialty & Renewables",
    "Sub-Category": "Rubber Cables",
    "Product Name": "Rubber Sheathed Flexible Cable",
    Description:
      "Heavy-duty flexible cables with rubber insulation and sheath for portable equipment, trailing cables, and temporary power supply in construction and mining.",
    Conductor: "Fine Stranded Annealed Copper",
    Insulation: "EPR / Silicone Rubber",
    VoltageRating: "450/750V, 0.6/1 kV",
    Standards: "IS 9968, IEC 60245",
    Cores: "1C, 2C, 3C, 4C, 5C",
    CrossSection: "1.5 sq mm – 300 sq mm",
    Sheathing: "Polychloroprene (PCP) / CSP Rubber",
    Armouring: "None / Braided Screen",
    TempRating: "90°C (EPR), 180°C (Silicone)",
    Application: "Portable equipment, trailing cables, temporary power, construction sites, cranes",
    thumbnail: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=120&q=80&auto=format&fit=crop",
    Testing: "Flexibility, Abrasion Resistance, Ozone, Cold Bend, Voltage Withstand",
    Applications: ["Portable Equipment", "Construction Sites", "Cranes", "Trailing Cables"],
    applicationImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85&auto=format&fit=crop",
  },

  /* ── Fire Safety & Mining ───────────────────────────────── */
  {
    Category: "Fire Safety & Mining",
    "Sub-Category": "FRLS / LSZH",
    "Product Name": "FRLS / LSZH Fire Survival Cable",
    Description:
      "Low Smoke Zero Halogen cables that maintain circuit integrity during fire. Emit minimal smoke and toxic fumes. Essential for high-occupancy buildings, hospitals, tunnels, and metro systems.",
    Conductor: "Annealed Copper",
    Insulation: "XLPE (Fire-rated) / Silicone",
    VoltageRating: "1.1 kV",
    Standards: "BS 7846, IS 15419, IEC 60332-3, IEC 60754",
    Cores: "1C, 2C, 3C, 4C",
    CrossSection: "1.5 sq mm – 400 sq mm",
    Sheathing: "LSZH (Low Smoke Zero Halogen)",
    Armouring: "GI Wire / Strip (on request)",
    TempRating: "90°C (continuous), 250°C (fire survival for 3 hrs)",
    Application: "High-rise buildings, hospitals, metro tunnels, airports, shopping malls",
    thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=120&q=80&auto=format&fit=crop",
    Testing: "Fire Survival (BS 6387), Smoke Density, Halogen Content, Flame Propagation",
    Applications: ["High-Rise Buildings", "Metro Tunnels", "Hospitals", "Airports"],
    applicationImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Fire Safety & Mining",
    "Sub-Category": "Mining Cables",
    "Product Name": "Heavy Duty Mining Cable",
    Description:
      "Robust, flame-retardant reeling and trailing cables designed for underground coal mines and surface mining equipment. Built to withstand mechanical abuse, moisture, and chemical exposure.",
    Conductor: "Tinned Copper (Flexible stranding)",
    Insulation: "EPR (Ethylene Propylene Rubber)",
    VoltageRating: "1.1 kV / 3.3 kV / 6.6 kV / 11 kV",
    Standards: "IS 14494, IEC 60502, DGMS Approved",
    Cores: "3C + Earth (3½C), 4C",
    CrossSection: "16 sq mm – 185 sq mm",
    Sheathing: "PCP (Flame Retardant Rubber)",
    Armouring: "Double Galvanised Steel Wire (on request)",
    TempRating: "90°C (EPR rated)",
    Application: "Underground mining, surface mining draglines, coal handling plants, open-cast mines",
    thumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=120&q=80&auto=format&fit=crop",
    Testing: "Flame Retardance (IS 10810), Crush, Impact, Abrasion, DGMS Type Test",
    Applications: ["Underground Mining", "Surface Mining", "Coal Handling", "Open-Cast Mines"],
    applicationImage: "https://images.unsplash.com/photo-1611273426858-450d8e80e916?w=900&q=85&auto=format&fit=crop",
  },

  /* ── Overhead & Rail ────────────────────────────────────── */
  {
    Category: "Overhead & Rail",
    "Sub-Category": "Aerial Bunched",
    "Product Name": "Aerial Bunched Cable (ABC)",
    Description:
      "Insulated overhead distribution cables bundled together with a bare messenger/neutral wire. Eliminates the need for cross-arms and reduces power theft, faults, and right-of-way issues.",
    Conductor: "AAC / AAAC (Aluminium Alloy)",
    Insulation: "XLPE (Weather-resistant Black)",
    VoltageRating: "1.1 kV (LT ABC)",
    Standards: "IS 14255, IEC 60502-1",
    Cores: "2C, 3C, 4C (with messenger)",
    CrossSection: "16 sq mm – 120 sq mm",
    Sheathing: "Weather-resistant XLPE",
    Armouring: "N/A (Aerial installation)",
    TempRating: "90°C (XLPE)",
    Application: "Overhead LT distribution, rural electrification, smart grid, urban networks",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=80&auto=format&fit=crop",
    Testing: "HV Test, IR Test, UV Resistance, Tensile Strength",
    Applications: ["LT Distribution", "Rural Electrification", "Smart Grid", "Urban Networks"],
    applicationImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop",
  },
  {
    Category: "Overhead & Rail",
    "Sub-Category": "Railway OHE",
    "Product Name": "Railway OHE Catenary Cable",
    Description:
      "Copper and copper-alloy catenary/contact wires for railway electrification (25 kV AC). RDSO approved for Indian Railways mainline and metro rail overhead electrification systems.",
    Conductor: "ETP Copper / Copper-Cadmium / Copper-Magnesium",
    Insulation: "N/A (Bare conductor)",
    VoltageRating: "25 kV AC (Railway Traction)",
    Standards: "IRS Spec, RDSO Approved, EN 50149",
    Cores: "Single Conductor (Grooved / Solid)",
    CrossSection: "65 sq mm, 107 sq mm, 150 sq mm (Standard profiles)",
    Sheathing: "N/A (Bare conductor)",
    Armouring: "N/A",
    TempRating: "Per RDSO specification",
    Application: "Railway mainline electrification, metro OHE, high-speed rail, depot wiring",
    thumbnail: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=120&q=80&auto=format&fit=crop",
    Testing: "Tensile, Elongation, Resistivity, Dimensional, RDSO Type Test",
    Applications: ["Railway Electrification", "Metro OHE", "High-Speed Rail", "Depot Wiring"],
    applicationImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=85&auto=format&fit=crop",
  },
];

/* ── Category Configuration ──────────────────────────────────── */

const CATEGORIES = [
  {
    key: "power",
    label: "Power Cables",
    icon: "electrical_services",
    match: ["Power Cables"],
  },
  {
    key: "control",
    label: "Control & Automation",
    icon: "settings_input_component",
    match: ["Control & Automation"],
  },
  {
    key: "specialty",
    label: "Specialty & Renewables",
    icon: "solar_power",
    match: ["Specialty & Renewables"],
  },
  {
    key: "safety",
    label: "Fire Safety & Mining",
    icon: "local_fire_department",
    match: ["Fire Safety & Mining"],
  },
  {
    key: "overhead",
    label: "Overhead & Rail",
    icon: "train",
    match: ["Overhead & Rail"],
  },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec fields to display (label → key mapping) ──────────── */
const SPEC_FIELDS: { key: keyof CableProduct; label: string; icon: string }[] =
  [
    { key: "Sub-Category", label: "Sub-Category", icon: "category" },
    { key: "Conductor", label: "Conductor", icon: "power" },
    { key: "Insulation", label: "Insulation", icon: "layers" },
    { key: "VoltageRating", label: "Voltage Rating", icon: "bolt" },
    { key: "Standards", label: "Standards", icon: "verified" },
    { key: "Cores", label: "Cores", icon: "hub" },
    { key: "CrossSection", label: "Cross Section", icon: "straighten" },
    { key: "Sheathing", label: "Sheathing", icon: "shield" },
    { key: "Armouring", label: "Armouring", icon: "security" },
    { key: "TempRating", label: "Temperature Rating", icon: "thermostat" },
    { key: "CurrentRating", label: "Current Rating", icon: "speed" },
    { key: "BendingRadius", label: "Bending Radius", icon: "radio_button_checked" },
    { key: "Testing", label: "Testing & QC", icon: "biotech" },
    { key: "Application", label: "Application", icon: "factory" },
  ];

/* ── QA Items ────────────────────────────────────────────────── */

const QA_ITEMS = [
  {
    icon: "verified",
    title: "BIS Certified (CM/L)",
    desc: "Bureau of Indian Standards certified with CM/L mark across all power cable ranges.",
  },
  {
    icon: "thermostat",
    title: "High Voltage Testing",
    desc: "Every drum undergoes HV withstand, IR, and conductor resistance tests per IS/IEC.",
  },
  {
    icon: "local_fire_department",
    title: "Fire Performance",
    desc: "FRLS / LSZH cables tested per BS 6387, IEC 60332-3, and IS 15419 for fire survival.",
  },
  {
    icon: "radar",
    title: "Partial Discharge (HV)",
    desc: "HT/EHV cables undergo Tan Delta and Partial Discharge tests for insulation integrity.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN WIRE & CABLES PAGE — MASTER-DETAIL LAYOUT
   ═══════════════════════════════════════════════════════════════ */

const WireCables: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ── Derive active category from URL or default ── */
  const activeCategoryKey: CategoryKey = useMemo(() => {
    const catKey = searchParams.get("category");
    if (catKey) {
      const valid = CATEGORIES.find((c) => c.key === catKey);
      if (valid) return valid.key;
    }
    const catName = searchParams.get("cat");
    if (catName) {
      const found = CATEGORIES.find((c) =>
        (c.match as readonly string[]).some((m) => m === catName),
      );
      if (found) return found.key;
    }
    return "power";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;

  /* ── Products in active category ── */
  const categoryProducts = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        (activeCategory.match as readonly string[]).includes(p.Category),
      ),
    [activeCategory],
  );

  /* ── Active product from URL or default to first ── */
  const activeProductIdx = useMemo(() => {
    const param = searchParams.get("product");
    if (param) {
      const idx = categoryProducts.findIndex(
        (p) => slugify(p["Product Name"]) === param,
      );
      if (idx >= 0) return idx;
    }
    return 0;
  }, [searchParams, categoryProducts]);

  const activeProduct =
    categoryProducts[activeProductIdx] || categoryProducts[0];

  /* ── Helpers ── */
  function slugify(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function selectCategory(key: CategoryKey) {
    setSearchParams({ category: key });
    setMobileMenuOpen(false);
  }

  function selectProduct(product: CableProduct) {
    setSearchParams({
      category: activeCategoryKey,
      product: slugify(product["Product Name"]),
    });
    setMobileMenuOpen(false);
  }

  /* ── Active specs (only non-empty fields) ── */
  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter((f) => activeProduct[f.key]?.trim());
  }, [activeProduct]);

  /* ── Animation ── */
  const detailVariants = {
    initial: { opacity: 0, x: 16 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -12, transition: { duration: 0.15 } },
  };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80&auto=format&fit=crop"
          alt="Wire & Cable manufacturing"
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
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span className="text-yellow-500 font-medium">
                Wire & Cables
              </span>
            </nav>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Wire & Cables
              <br />
              <span className="text-yellow-500">Powering Every Project.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-sans leading-relaxed">
              From low-voltage building wires to 220 kV EHV power cables —
              BIS certified, fire-rated, and engineered for India&apos;s most
              critical infrastructure.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">
                download
              </span>
              Download Complete Cable Catalog
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY CATEGORY NAV ═══════════════════════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-1 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => selectCategory(cat.key)}
                className={`relative whitespace-nowrap px-4 lg:px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 ${activeCategoryKey === cat.key
                  ? "text-yellow-600 border-b-2 border-yellow-500"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                <span className="material-symbols-outlined text-base hidden sm:inline">
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}

            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-6">
              <span className="material-symbols-outlined text-sm text-yellow-500">
                verified
              </span>
              BIS &amp; IEC Certified
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MASTER-DETAIL BODY ═══════════════════════════════ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          {/* Mobile: product selector toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">
                  menu
                </span>
                {activeProduct
                  ? activeProduct["Product Name"]
                  : "Select Product"}
              </span>
              <span
                className={`material-symbols-outlined text-lg transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>

            {/* Mobile dropdown */}
            {mobileMenuOpen && (
              <div className="border border-slate-200 border-t-0 bg-white max-h-72 overflow-y-auto">
                {categoryProducts.map((product, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectProduct(product)}
                    className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 flex items-center gap-3 ${activeProductIdx === idx
                      ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500"
                      : "text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden border ${activeProductIdx === idx
                        ? "border-yellow-500/40"
                        : "border-slate-200"
                        }`}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product["Product Name"]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-heading font-semibold truncate">
                        {product["Product Name"]}
                      </span>
                      <span className="block text-xs opacity-60 mt-0.5">
                        {product["Sub-Category"]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* ── LEFT: MASTER MENU (Vertical Product List) ── */}
            <aside className="hidden md:block w-[280px] lg:w-[320px] shrink-0">
              <div className="sticky" style={{ top: "64px" }}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <span className="material-symbols-outlined text-lg text-yellow-500">
                    {activeCategory.icon}
                  </span>
                  <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">
                    {activeCategory.label}
                  </h3>
                  <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">
                    {categoryProducts.length} items
                  </span>
                </div>

                <div className="flex flex-col space-y-1.5">
                  {categoryProducts.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectProduct(product)}
                      className={`text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${activeProductIdx === idx
                        ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
                        }`}
                    >
                      {/* Product Thumbnail */}
                      <div
                        className={`w-12 h-12 shrink-0 rounded-sm overflow-hidden border ${activeProductIdx === idx
                          ? "border-yellow-500/40"
                          : "border-slate-200"
                          }`}
                      >
                        <img
                          src={product.thumbnail}
                          alt={product["Product Name"]}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-heading leading-tight truncate ${activeProductIdx === idx
                            ? "font-bold"
                            : "font-semibold"
                            }`}
                        >
                          {product["Product Name"]}
                        </span>
                        <span
                          className={`block text-[11px] mt-0.5 ${activeProductIdx === idx
                            ? "text-slate-300"
                            : "text-slate-400"
                            }`}
                        >
                          {product["Sub-Category"]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── RIGHT: DETAIL VIEW ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div
                    key={activeProduct["Product Name"]}
                    variants={detailVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Product Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                          {activeProduct["Sub-Category"]}
                        </span>
                        <span className="text-xs font-sans text-slate-400">
                          {activeProduct.Category}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                        {activeProduct["Product Name"]}
                      </h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-sm mb-8 h-[280px] lg:h-[340px] group">
                      <img
                        src={activeProduct.thumbnail
                          .replace("w=120", "w=900")
                          .replace("q=80", "q=85")}
                        alt={activeProduct["Product Name"]}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/80">
                          {activeProduct["Product Name"]}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">
                        {activeProduct.Description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    {activeSpecs.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">
                            engineering
                          </span>
                          Technical Specifications
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSpecs.map((spec) => (
                            <div
                              key={spec.key}
                              className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group"
                            >
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">
                                  {spec.icon}
                                </span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">
                                  {spec.label}
                                </span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">
                                {activeProduct[spec.key]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Application Tags ── */}
                    {activeProduct.Applications && activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">
                            factory
                          </span>
                          Key Industries & Applications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">check_circle</span>
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Action Buttons ── */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Download Datasheet
                      </button>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                        <span className="material-symbols-outlined text-lg">description</span>
                        Request Test Report
                      </button>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all"
                      >
                        <span className="material-symbols-outlined text-lg">request_quote</span>
                        Get Quote
                      </Link>
                    </div>

                    {/* ── Application Image ── */}
                    {activeProduct.applicationImage ? (
                      <div className="mb-4">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">
                            image
                          </span>
                          Application in Action
                        </h3>
                        <div className="relative overflow-hidden rounded-sm h-[260px] lg:h-[340px] group">
                          <img
                            src={activeProduct.applicationImage}
                            alt={`${activeProduct["Product Name"]} application`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-white/90 bg-slate-900/50 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                              <span className="material-symbols-outlined text-sm text-yellow-500">factory</span>
                              {activeProduct.Application?.split(",")[0]?.trim() || "Industrial Application"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-slate-200 rounded-sm h-[260px] flex flex-col items-center justify-center text-slate-300 group hover:border-slate-300 transition-colors">
                        <span className="material-symbols-outlined text-6xl mb-4 group-hover:text-yellow-500/40 transition-colors">
                          cable
                        </span>
                        <p className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400">
                          Application Image
                        </p>
                        <p className="text-xs font-sans text-slate-400 mt-1">
                          {activeProduct["Product Name"]}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUALITY ASSURANCE BANNER ═════════════════════════ */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-yellow-500" />
              <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">
                Quality Assurance
              </span>
              <span className="block w-10 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
              Certified to the Highest Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {QA_ITEMS.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl text-yellow-500">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-[250px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENTERPRISE CTA ══════════════════════════════════ */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-sm p-10 md:p-14 border-l-4 border-l-yellow-500 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-yellow-600">
                  assignment
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">
                  Need a Custom Cable Solution?
                </h3>
                <p className="text-base text-slate-500 font-sans leading-relaxed">
                  Our engineering team can assist with cable sizing, fire-rating
                  selection, and project-specific requirements. Submit your BOQ
                  for a comprehensive supply schedule within 24 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-xl">
                  upload_file
                </span>
                Upload BOQ / Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WireCables;
