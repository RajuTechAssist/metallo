import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ProductHero, ProductCategoryNav,
  ProductQABanner, ProductCTA, CONTAINER, DETAIL_VARIANTS, slugify,
} from "../../components/product";

/* ═══════════════════════════════════════════════════════════════
   STEEL — ENHANCED MASTER-DETAIL INTERFACE
   Data enriched from:
     • Metallo_Steel_Product_Master_v2.json (curated master catalogue)
     • theamericanstainless.com (scraped specs & standards)
     • hindustaninox.com (seamless/welded tube specs & certifications)
     • triloksteel.com (grade-level pipe/tube specifications)

   6-Category Layout with Material-Family Grouping for Pipes
   Left: Grouped Vertical Product Menu | Right: Enriched Detail View
   ═══════════════════════════════════════════════════════════════ */

/* ── Interfaces ─────────────────────────────────────────────── */

interface SteelProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  Grades: string;
  Standards: string;
  Application: string;
  thumbnail: string;
  materialGroup?: string;
  Thickness?: string;
  "Pressure Class"?: string;
  Type?: string;
  Material?: string;
  OD?: string;
  WallThickness?: string;
  Length?: string;
  EndFinish?: string;
  SurfaceFinish?: string;
  TensileStrength?: string;
  YieldStrength?: string;
  Elongation?: string;
  Hardness?: string;
  Certification?: string[];
  Testing?: string;
  Applications?: string[];
  applicationImage?: string;
}

/* ── Material Group Config (for Pipes & Tubes sidebar) ─────── */

const MATERIAL_GROUPS = [
  { key: "ms",      label: "Mild Steel (MS)",    color: "bg-amber-500",  ring: "ring-amber-500" },
  { key: "ss",      label: "Stainless Steel",    color: "bg-blue-500",   ring: "ring-blue-500" },
  { key: "cs",      label: "Carbon Steel",       color: "bg-slate-500",  ring: "ring-slate-500" },
  { key: "special", label: "Specialty / Custom",  color: "bg-violet-500", ring: "ring-violet-500" },
] as const;

const MAT_LABEL: Record<string, string> = { ms: "Mild Steel (MS)", ss: "Stainless Steel", cs: "Carbon Steel", special: "Specialty / Custom" };
const MAT_COLOR: Record<string, string> = { ms: "bg-amber-500", ss: "bg-blue-500", cs: "bg-slate-500", special: "bg-violet-500" };
const MAT_ORDER = ["ms", "ss", "cs", "special"];

/* ═══════════════════════════════════════════════════════════════
   PRODUCT DATA — Enriched from Master JSON + Scraped Sources
   ═══════════════════════════════════════════════════════════════ */

const PRODUCTS: SteelProduct[] = [
  /* ────────────────── PIPES & TUBES: MILD STEEL ────────────── */
  {
    Category: "Pipes & Tubes", "Sub-Category": "ERW Pipes", materialGroup: "ms",
    "Product Name": "ERW / Mild Steel (MS) Pipe",
    Description: "Low-carbon Electric Resistance Welded pipes. Highly economical and extensively used for water lines, fire-fighting, and structural purposes. Available in Light (A), Medium (B), and Heavy (C) classes per IS 1239.",
    Grades: "IS 1239 Class A (Light), Class B (Medium), Class C (Heavy), Fe 330, Fe 410",
    Standards: "IS 1239, IS 3589, BS 1387",
    Application: "Water Supply, Fire Fighting, Structural, Scaffolding, Fencing, Agriculture",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "15mm to 150mm NB (21.3mm to 168.3mm OD)",
    WallThickness: "Class A: 2.0–3.6mm, Class B: 2.3–4.5mm, Class C: 2.6–5.0mm",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled, Threaded & Coupled",
    TensileStrength: "≥ 330 MPa (Fe 330), ≥ 410 MPa (Fe 410)",
    YieldStrength: "≥ 210 MPa (Fe 330), ≥ 250 MPa (Fe 410)",
    Elongation: "≥ 20%",
    Certification: ["IS", "BIS", "ISI Marked"],
    Testing: "Hydrostatic, Bend, Flattening",
    Applications: ["Water Supply", "Fire Fighting", "Scaffolding", "Agriculture"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Seamless Pipes", materialGroup: "ms",
    "Product Name": "MS Seamless (SMLS) Pipe",
    Description: "Made from a solid round steel billet which is heated and pushed or pulled over a form until the steel is shaped into a hollow tube. No weld seam — ideal for high-pressure and high-temperature service.",
    Grades: "ASTM A106 Gr. A/B, ASTM A53 Gr. A/B, IS 1239",
    Standards: "ASTM A106, ASTM A53, IS 1239",
    Application: "High Pressure, High Temperature, Boiler, Heat Exchanger, Oil & Gas",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "½\" to 24\" NB (21.3mm to 609.6mm OD)",
    WallThickness: "SCH 40, SCH 80, SCH 160, SCH XXS",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled",
    TensileStrength: "≥ 330 MPa",
    YieldStrength: "≥ 205 MPa",
    Elongation: "≥ 25%",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "Hydrostatic, Flattening, Tensile, Hardness",
    Applications: ["Boilers", "Heat Exchangers", "Oil & Gas", "High-Pressure Lines"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Hollow Sections", materialGroup: "ms",
    "Product Name": "MS Hollow Sections (SHS / RHS / CHS)",
    Description: "Square (SHS), Rectangular (RHS), and Circular (CHS) hollow structural sections for load-bearing and architectural applications. Manufactured by forming and welding steel strip/plate.",
    Grades: "YSt 210, YSt 240, YSt 310, E250 (Fe 410W)",
    Standards: "IS 4923, EN 10210, EN 10219, ASTM A500",
    Application: "Structural, Construction, Framework, Columns, Beams, Trusses",
    thumbnail: "/Steel/Structural-Steel.png",
    OD: "SHS: 25×25 to 250×250mm, RHS: 40×20 to 300×200mm, CHS: 21.3 to 355.6mm",
    WallThickness: "1.6mm to 12.5mm",
    Length: "6m, 9m, 12m standard",
    EndFinish: "Plain End",
    TensileStrength: "≥ 410 MPa (E250)",
    YieldStrength: "≥ 250 MPa (E250)",
    Elongation: "≥ 23%",
    Certification: ["ISI", "Mill TC"],
    Testing: "Tensile, Bend, Flattening, UT (for thicker wall)",
    Applications: ["Structural Framework", "Construction", "Columns & Beams", "Trusses"],
    applicationImage: "/Steel/Steel-structure-3.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Galvanised Pipes", materialGroup: "ms",
    "Product Name": "Galvanised Iron (GI) Pipe",
    Description: "Mild steel pipes hot-dip coated with a protective layer of zinc to prevent rust and corrosion. Widely used for water supply, agriculture, and fencing.",
    Grades: "Class A (Light), Class B (Medium), Class C (Heavy)",
    Standards: "IS 1239, IS 4736, ASTM A53",
    Application: "Water supply, irrigation, fencing, fire fighting, agriculture",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "15mm to 150mm NB",
    WallThickness: "Light / Medium / Heavy",
    Length: "6m standard",
    EndFinish: "Threaded & Coupled / Plain End",
    SurfaceFinish: "Hot-dip Galvanised (Zinc Coated)",
    Certification: ["ISI", "BIS"],
    Testing: "Hydrostatic, Zinc Coating Weight, Bend",
    Applications: ["Water Supply", "Irrigation", "Fencing", "Fire Fighting"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Spiral Welded Pipes", materialGroup: "ms",
    "Product Name": "LSAW / Spiral Welded Steel Pipe (HSAW)",
    Description: "Large-diameter pipes manufactured by LSAW (Longitudinal Submerged Arc Welding) or HSAW (Helical/Spiral) welding of steel strips. Allows for very large diameters for municipal and oil/gas infrastructure.",
    Grades: "API 5L Gr. B to X70, ASTM A252, S355",
    Standards: "API 5L, ASTM A252, EN 10219",
    Application: "Municipal Waterworks, Oil & Gas Pipelines, Structural Piling, Infrastructure",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "16\" to 120\" OD (406mm to 3048mm)",
    WallThickness: "6mm to 25mm",
    Length: "6m to 18m",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "Black, 3LPE, FBE, Epoxy",
    TensileStrength: "≥ 415 MPa (Gr. B), ≥ 570 MPa (X70)",
    YieldStrength: "≥ 245 MPa (Gr. B), ≥ 485 MPa (X70)",
    Elongation: "≥ 21%",
    Certification: ["API Monogram", "ISO 3183", "MTC"],
    Testing: "UT, RT, Hydrostatic, Impact",
    Applications: ["Municipal Water", "Oil & Gas Pipelines", "Piling", "Large Infrastructure"],
    applicationImage: "/Steel/oil_industry1.jpg",
  },

  /* ────────────────── PIPES & TUBES: STAINLESS STEEL ───────── */
  {
    Category: "Pipes & Tubes", "Sub-Category": "Welded Pipes", materialGroup: "ss",
    "Product Name": "SS 304/316 Welded / ERW Pipe",
    Description: "Austenitic stainless steel ERW/welded pipes with excellent corrosion resistance and formability. Grade 304 is the most widely used stainless steel; 316 adds molybdenum for superior chloride & marine resistance.",
    Grades: "SS 304, 304L, 304H, 316, 316L, 316H, 316Ti",
    Standards: "ASTM A312, ASTM A358, ASTM A249",
    Application: "Chemical Processing, Food & Beverage, Pharmaceutical, Dairy, Water Treatment, Marine",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 609.6mm OD (⅛\" to 24\" NB)",
    WallThickness: "0.5mm to 6.0mm (Welded), SCH5S to SCH80S (Pipe)",
    Length: "Up to 30m (Welded), Single/Double Random",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "2B, No.4, Mirror, Polished",
    TensileStrength: "≥ 515 MPa (75,000 PSI)",
    YieldStrength: "≥ 205 MPa (30,000 PSI)",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB / ≤ 92 HRB (304), ≤ 217 HB / ≤ 95 HRB (316)",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE MR0175"],
    Testing: "PMI, Hydrostatic, Eddy Current, IGC",
    Applications: ["Chemical Processing", "Food & Dairy", "Pharmaceutical", "Marine"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Seamless Pipes", materialGroup: "ss",
    "Product Name": "SS 304/316 Seamless Pipe",
    Description: "Seamless stainless steel pipes/tubes made by extrusion with no weld seam. Superior for high-pressure and high-temperature applications. Available in a wide range of grades including 321, 347, and 904L.",
    Grades: "SS 304, 304L, 316, 316L, 321, 347, 904L",
    Standards: "ASTM A312, ASTM A213, ASTM A269",
    Application: "High Pressure, Process Piping, Heat Exchangers, Instrumentation, Oil & Gas",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "¼\" NB to 24\" NB (13.7mm to 609.6mm OD)",
    WallThickness: "SCH5S, 10S, 40S, 80S, SCH160, SCH XXS",
    Length: "Up to 15m, Single/Double Random",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "2B, BA, Pickled & Annealed",
    TensileStrength: "≥ 515 MPa (75,000 PSI)",
    YieldStrength: "≥ 205 MPa (30,000 PSI)",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB / ≤ 92 HRB",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE", "IBR"],
    Testing: "PMI, Hydrostatic, Eddy Current, UT, Spectrometer",
    Applications: ["Oil & Gas", "Chemical Processing", "Power Plants", "Boilers & Heat Exchangers"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Instrumentation Tubes", materialGroup: "ss",
    "Product Name": "SS Instrumentation Tube",
    Description: "Smaller, thinner, and more precise than pipes. Used for high-pressure hydraulic lines, analytical instruments, and chromatography. Available in bright annealed and electropolished finishes.",
    Grades: "304, 316L, 6Mo",
    Standards: "ASTM A269",
    Application: "High-pressure hydraulic lines, instrumentation, analytical instruments, chromatography",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "3.18mm to 25.40mm (⅛\" to 1\")",
    WallThickness: "0.5mm to 3.05mm",
    Length: "Up to 24m (coiled or straight)",
    EndFinish: "Plain End",
    SurfaceFinish: "Bright Annealed (BA), Electropolished",
    TensileStrength: "≥ 515 MPa",
    YieldStrength: "≥ 205 MPa",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "PED"],
    Testing: "PMI, Hydrostatic, Eddy Current, Flaring",
    Applications: ["Instrumentation", "Hydraulic Systems", "Analytical Equipment", "Offshore"],
    applicationImage: "/Steel/oil_industry1.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "U-Bend Tubes", materialGroup: "ss",
    "Product Name": "Heat Exchanger U-Tube",
    Description: "U-shaped tubes used in boilers and heat exchangers to cool or heat fluids. Precisely formed to client bend-radius specifications with stringent dimensional tolerances.",
    Grades: "304H, 316H, 321, 316L",
    Standards: "ASTM A213",
    Application: "Shell & tube heat exchangers, boilers, superheaters, condensers",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 76.20mm",
    WallThickness: "0.5mm to 4.0mm",
    Length: "Leg length up to 10m",
    EndFinish: "U-bend radius as per spec",
    SurfaceFinish: "Bright Annealed, Pickled",
    TensileStrength: "≥ 515 MPa",
    YieldStrength: "≥ 205 MPa",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "PED", "IBR"],
    Testing: "PMI, Hydrostatic, Eddy Current, Flattening, Spectrometer",
    Applications: ["Heat Exchangers", "Boilers", "Condensers", "Power Generation"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Ferritic Tubes", materialGroup: "ss",
    "Product Name": "SS Ferritic 409/430 Tubes",
    Description: "Ferritic stainless steel tubes with good corrosion resistance at lower cost than austenitic grades. Magnetic and not hardenable by heat treatment. Ideal for automotive exhaust, heat exchangers, and architectural uses.",
    Grades: "SS 409, 409L, 410, 430, 439, 441",
    Standards: "ASTM A268, ASTM A803",
    Application: "Automotive Exhaust, Heat Exchangers, Kitchen Equipment, Architectural",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 168.3mm OD",
    WallThickness: "0.5mm to 4.0mm",
    Length: "Up to 12m",
    EndFinish: "Plain End",
    TensileStrength: "≥ 380 MPa (409), ≥ 450 MPa (430)",
    YieldStrength: "≥ 170 MPa (409), ≥ 205 MPa (430)",
    Elongation: "≥ 20%",
    Hardness: "≤ 179 HB (409), ≤ 183 HB (430)",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Eddy Current, Hydrostatic, Flaring",
    Applications: ["Automotive Exhaust", "Heat Exchangers", "Kitchen Equipment", "Architectural"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Duplex Tubes", materialGroup: "ss",
    "Product Name": "SS Duplex 2205 / Super Duplex 2507",
    Description: "Duplex stainless steel with a mixed austenitic-ferritic microstructure providing high strength and excellent resistance to stress corrosion cracking and pitting. Super Duplex 2507 for extreme environments.",
    Grades: "SS 2205 (UNS S31803/S32205), 2507 (UNS S32750)",
    Standards: "ASTM A789, ASTM A790, ASTM A928",
    Application: "Oil & Gas (Subsea), Chemical Tankers, Desalination, Pulp & Paper, Marine",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 323.9mm OD",
    WallThickness: "SCH5S to SCH160",
    Length: "Up to 12m",
    EndFinish: "Plain End, Beveled",
    TensileStrength: "≥ 620 MPa (2205), ≥ 795 MPa (2507)",
    YieldStrength: "≥ 450 MPa (2205), ≥ 550 MPa (2507)",
    Elongation: "≥ 25% (2205), ≥ 15% (2507)",
    Hardness: "≤ 293 HB (2205), ≤ 310 HB (2507)",
    Certification: ["MTC EN 10204 3.1", "NACE MR0175", "PED"],
    Testing: "PMI, Hydrostatic, UT, Impact, Ferrite Content, IGC",
    Applications: ["Oil & Gas Subsea", "Chemical Tankers", "Desalination", "Marine & Offshore"],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ────────────────── PIPES & TUBES: CARBON STEEL ──────────── */
  {
    Category: "Pipes & Tubes", "Sub-Category": "Seamless Pipes", materialGroup: "cs",
    "Product Name": "CS Seamless Pipe (ASTM A106)",
    Description: "Carbon steel seamless pipe for high-temperature service. Intended for bending, flanging, and similar forming operations. The workhorse pipe grade for refineries and power plants.",
    Grades: "ASTM A106 Gr. A/B/C",
    Standards: "ASTM A106, ASME SA106",
    Application: "Boilers, Superheaters, Heat Exchangers, High Temperature Service, Refineries",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "½\" to 24\" NB (21.3mm to 609.6mm OD)",
    WallThickness: "SCH 40, SCH 80, SCH 120, SCH 160, SCH XXS",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "Black, Oiled, Varnished",
    TensileStrength: "≥ 415 MPa (Gr. B)",
    YieldStrength: "≥ 240 MPa (Gr. B)",
    Elongation: "≥ 30%",
    Certification: ["MTC EN 10204 3.1", "IBR Approved"],
    Testing: "Hydrostatic, Flattening, Tensile, Hardness",
    Applications: ["Boilers", "Refineries", "Steam Lines", "Power Plants"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Welded Pipes", materialGroup: "cs",
    "Product Name": "CS Welded Pipe (ASTM A53)",
    Description: "Black and hot-dipped zinc-coated welded and seamless carbon steel pipe for general structural and pressure applications. Available in ERW and EFW types.",
    Grades: "ASTM A53 Gr. A/B",
    Standards: "ASTM A53, ASME SA53",
    Application: "General Purpose Piping, Mechanical, Pressure, Steam, Water, Gas, Air Lines",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "½\" to 26\" NB",
    WallThickness: "SCH STD, SCH 40, SCH 80",
    Length: "Single/Double Random",
    EndFinish: "Plain End, Beveled, Threaded & Coupled",
    SurfaceFinish: "Black, Galvanised",
    TensileStrength: "≥ 330 MPa (Gr. A), ≥ 415 MPa (Gr. B)",
    YieldStrength: "≥ 205 MPa (Gr. A), ≥ 240 MPa (Gr. B)",
    Elongation: "Varies by wall thickness",
    Certification: ["MTC", "Hydrostatic Tested"],
    Testing: "Hydrostatic, Tensile, Flattening",
    Applications: ["General Piping", "Structural", "Steam Lines", "Water & Gas"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes", "Sub-Category": "Line Pipes", materialGroup: "cs",
    "Product Name": "CS Line Pipe (API 5L)",
    Description: "Carbon steel line pipes for conveying gas, water, and oil in the petroleum and natural gas industries. Available from Gr. B to X70 for cross-country and offshore pipelines.",
    Grades: "API 5L Gr. B, X42, X46, X52, X56, X60, X65, X70",
    Standards: "API 5L, ISO 3183",
    Application: "Oil & Gas Transport, Cross-Country Pipelines, Offshore, Upstream/Downstream",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "½\" to 48\" NB (21.3mm to 1219mm OD)",
    WallThickness: "SCH 20 to SCH XXS, Custom WT",
    Length: "Single/Double Random, Cut to Length",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "3LPE, FBE, Bare",
    TensileStrength: "≥ 415 MPa (Gr. B) to ≥ 570 MPa (X70)",
    YieldStrength: "≥ 245 MPa (Gr. B) to ≥ 485 MPa (X70)",
    Elongation: "Varies by grade",
    Certification: ["API Monogram", "ISO 3183", "MTC", "NACE", "HIC/SSC Tested"],
    Testing: "UT, RT, Hydrostatic, Impact, HIC, SSC, DWTT",
    Applications: ["Oil & Gas Pipelines", "Cross-Country", "Offshore", "Upstream/Downstream"],
    applicationImage: "/Steel/oil_industry1.jpg",
  },

  /* ────────────────── PIPES & TUBES: SPECIAL ───────────────── */
  {
    Category: "Pipes & Tubes", "Sub-Category": "Custom Pipes", materialGroup: "special",
    "Product Name": "Customised Steel Pipe / Fabricated Spools",
    Description: "Tailor-made piping solutions engineered to exact client schematics. We provide non-standard outside diameters, heavy-wall thicknesses, pre-fabricated pipe spools, and specialty coatings to drastically reduce on-site welding time.",
    Grades: "As per Customer Requirement",
    Standards: "Client Specifications, ASME B31.1/B31.3",
    Application: "Modular Process Skids, Offshore Platforms, Custom Heat Exchangers, Heavy Infrastructure",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "Non-Standard OD & Custom Wall Thickness",
    WallThickness: "Custom (Non-Standard SCH)",
    Length: "As per drawing",
    EndFinish: "As per spec (Plain, Beveled, Threaded, Grooved)",
    SurfaceFinish: "3LPE, Fusion Bonded Epoxy (FBE), Hot-Dip Galvanizing, PTFE",
    Certification: ["MTC", "IBR", "PED", "NACE", "Weld Radiography"],
    Testing: "Per client specification, PWHT, Hydro Test",
    Applications: ["EPC Projects", "Offshore Platforms", "Modular Skids", "Custom Infrastructure"],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ────────────────── SHEETS & PLATES ──────────────────────── */
  {
    Category: "Sheets & Plates", "Sub-Category": "Hot Rolled Plates",
    "Product Name": "SS HR Plate (Hot Rolled)",
    Description: "Thick steel plates used for making tanks, vessel bodies, and heavy structures. Produced by hot-rolling slabs to desired thickness with No.1 / 2D finish.",
    Grades: "304, 316L, 310S, 321, 904L",
    Standards: "ASTM A240, ASME SA240",
    Application: "Pressure Vessels, Tanks, Structural Fabrication, Chemical Equipment",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "1000×2000mm to 2000×6000mm",
    Thickness: "5mm – 100mm",
    SurfaceFinish: "No.1, 2D, Pickled",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, UT, Tensile, Bend",
    Applications: ["Pressure Vessels", "Tank Bodies", "Structural", "Shipbuilding"],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },
  {
    Category: "Sheets & Plates", "Sub-Category": "Cold Rolled Sheets",
    "Product Name": "SS CR Sheet (Cold Rolled)",
    Description: "Thinner, smoother, and shinier sheets used for kitchen equipment, cladding, and elevators. Available in a wide range of decorative finishes.",
    Grades: "304, 430, 202, 316L",
    Standards: "ASTM A240, ASME SA240",
    Application: "Kitchen Equipment, Elevator Panels, Cladding, Decorative, Automotive",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "1000×2000mm to 1500×3000mm",
    Thickness: "0.5mm – 6mm",
    SurfaceFinish: "2B, BA, No.4, Mirror (8K), Hairline, Sand Blast",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Tensile, Hardness, Bend",
    Applications: ["Kitchen Equipment", "Elevators", "Cladding", "Signage"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Sheets & Plates", "Sub-Category": "Coils & Strips",
    "Product Name": "SS Coil / Strip",
    Description: "Long continuous rolls of thin steel. Used for mass production of parts, pipe manufacturing, and precision stamping operations.",
    Grades: "304, 316L, 430, 202",
    Standards: "ASTM A240, ASME SA240",
    Application: "Stamping, Banding, Springs, Precision Parts, Mass Production Components",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "Width: 10mm to 2000mm",
    Thickness: "0.3mm – 6mm",
    Length: "Coil (continuous)",
    SurfaceFinish: "2B, BA, No.4",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Tensile, Width Tolerance",
    Applications: ["Pipe Manufacturing", "Auto Components", "Stamping", "Appliances"],
    applicationImage: "/Steel/industry.jpg",
  },

  /* ────────────────── FLANGES ──────────────────────────────── */
  {
    Category: "Flanges", "Sub-Category": "Weld Neck",
    "Product Name": "Weld Neck Flange",
    Description: "Has a long tapered hub. Welded directly to the pipe. Best for high pressure, high temperature, and critical piping systems. Available from 150# to 2500#.",
    Grades: "SS F304/F316/F316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.5, ASME B16.47",
    "Pressure Class": "150# to 2500#",
    Material: "Forged Stainless / Carbon Steel / Alloy Steel",
    Application: "High Pressure Piping, Oil & Gas, Chemical Plants, Power Plants",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 48\" NB",
    EndFinish: "Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE"],
    Testing: "PMI, Dimensional, Hardness, UT",
    Applications: ["Refineries", "Offshore", "Power Stations", "High-Pressure Piping"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Flanges", "Sub-Category": "Slip On",
    "Product Name": "Slip-On Flange",
    Description: "Slips over the pipe and is welded inside and out. Easier to align than Weld Neck. Cost-effective for low to medium pressure applications.",
    Grades: "SS F304/F316, CS A105",
    Standards: "ASME B16.5",
    "Pressure Class": "150# to 300#",
    Material: "Forged Stainless / Carbon Steel",
    Application: "Low/Medium Pressure Piping, Water Treatment, General Utility",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 24\" NB",
    EndFinish: "Raised Face (RF), Flat Face (FF)",
    Certification: ["MTC"],
    Testing: "PMI, Dimensional, Hardness",
    Applications: ["Low-Pressure Piping", "HVAC", "Water Systems", "Utility"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Flanges", "Sub-Category": "Blind",
    "Product Name": "Blind Flange",
    Description: "A solid disk used to block off the end of a piping system. Essential for dead-end closures, isolation, and pressure testing points.",
    Grades: "SS F304/F316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.5, ASME B16.47",
    "Pressure Class": "150# to 2500#",
    Material: "Forged Stainless / Carbon Steel / Alloy Steel",
    Application: "Dead-end closure, pipeline isolation, pressure testing",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 48\" NB",
    EndFinish: "Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Dimensional, Hardness, UT",
    Applications: ["Pipeline Isolation", "Pressure Testing", "Dead-End Closure"],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ────────────────── PIPE FITTINGS (Buttweld + Forged) ────── */
  {
    Category: "Pipe Fittings", "Sub-Category": "Buttweld Elbows",
    "Product Name": "90° / 45° Elbow",
    Description: "Used to change the direction of flow in a piping system. Available in Long Radius (LR) and Short Radius (SR), seamless and welded.",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9",
    Type: "Seamless / Welded, Long Radius (LR) / Short Radius (SR)",
    Application: "Direction change in process piping, oil & gas, chemical plants",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 48\" NB",
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Dimensional, Visual",
    Applications: ["Process Piping", "Oil & Gas", "Chemical Plants", "Power"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipe Fittings", "Sub-Category": "Buttweld Tees",
    "Product Name": "Equal / Reducing Tee",
    Description: "Used to split the flow into two directions or combine two flows. Available in equal and reducing configurations.",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9",
    Type: "Seamless / Welded, Equal / Reducing",
    Application: "Branch connections in piping, distribution systems",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 48\" NB",
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Dimensional, Visual",
    Applications: ["Branch Connections", "Distribution Systems", "Process Piping"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipe Fittings", "Sub-Category": "Buttweld Reducers",
    "Product Name": "Concentric / Eccentric Reducer",
    Description: "Connects a larger pipe to a smaller pipe. Concentric for vertical lines, eccentric for horizontal lines (prevents air pockets).",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9",
    Type: "Seamless / Welded, Concentric / Eccentric",
    Application: "Pipe size transitions, pump connections, process lines",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "1\" × ½\" to 48\" × 46\" NB",
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Dimensional, Visual",
    Applications: ["Pipe Transitions", "Pump Connections", "Process Lines"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipe Fittings", "Sub-Category": "Forged Fittings",
    "Product Name": "Socket Weld & Threaded Fittings",
    Description: "Forged fittings for small-bore, high-pressure piping systems. Includes socket weld elbows, tees, unions, couplings, and threaded variants. Available in Class 3000, 6000, and 9000.",
    Grades: "SS 304/316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.11",
    "Pressure Class": "3000# / 6000# / 9000#",
    Application: "Small-bore piping, high-pressure systems, instrumentation, hydraulic lines",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "⅛\" to 4\" NB",
    Type: "Socket Weld Elbow, Tee, Union, Coupling / Threaded Elbow, Tee, Cross, Bushing",
    Material: "Forged Stainless / Carbon / Alloy Steel",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Dimensional, Hardness",
    Applications: ["High-Pressure Piping", "Instrumentation", "Hydraulic", "Oil & Gas"],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ────────────────── FASTENERS & BARS ─────────────────────── */
  {
    Category: "Fasteners & Bars", "Sub-Category": "Industrial Fasteners",
    "Product Name": "Hex Bolts, Stud Bolts, Nuts & Washers",
    Description: "High-tensile industrial fasteners in SS, CS, and alloy steel. Hex bolts, stud bolts (fully/partially threaded), hex nuts, washers, and threaded rods for critical bolting applications.",
    Grades: "SS 304/316 (A2-70/A4-80), CS Gr. 8.8/10.9/12.9, ASTM A193 B7/B8, ASTM A194 2H/Gr.8",
    Standards: "ASTM A193, ASTM A194, ASTM A320, IS 1367, DIN 931/933",
    Application: "Flange bolting, structural assembly, pressure vessels, equipment mounting",
    thumbnail: "/Steel/structural-steel-product-range.jpg",
    OD: "M5 to M100 / ¼\" to 4\"",
    Length: "20mm to 3000mm",
    Material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloy",
    SurfaceFinish: "Plain, Zinc Plated, Hot-Dip Galvanised, PTFE Coated, Cadmium",
    Certification: ["MTC EN 10204 3.1", "ISO 9001"],
    Testing: "Tensile, Proof Load, Hardness, Wedge Test",
    Applications: ["Flange Bolting", "Structural Assembly", "Pressure Vessels", "Construction"],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },
  {
    Category: "Fasteners & Bars", "Sub-Category": "Round & Structural Bars",
    "Product Name": "Round Bar / Flat Bar / Hex Bar",
    Description: "Bright and black finish bars in round, flat, hex, and square profiles. Used for machining, shafts, fastener manufacturing, and general engineering applications.",
    Grades: "SS 304, 316, 410, 431 / CS EN8, EN24, C45 / Alloy EN19, EN36",
    Standards: "ASTM A276, ASTM A479, IS 2062, EN 10060",
    Application: "Machining, Shafts, Fastener Manufacturing, General Engineering, Structural",
    thumbnail: "/Steel/structural-steel-product-range.jpg",
    OD: "2mm to 500mm diameter (Round), various (Flat/Hex/Square)",
    Length: "3m to 6m standard, cut-to-length available",
    SurfaceFinish: "Bright, Black, Polished, Peeled, Ground",
    TensileStrength: "≥ 515 MPa (SS 304)",
    YieldStrength: "≥ 205 MPa (SS 304)",
    Certification: ["MTC EN 10204 3.1"],
    Testing: "PMI, Tensile, Hardness, Ultrasonic",
    Applications: ["Machining", "Shafts & Axles", "Fastener Manufacturing", "Structural"],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },

  /* ────────────────── SEALING & GASKETS ────────────────────── */
  {
    Category: "Sealing & Gaskets", "Sub-Category": "Spiral Wound",
    "Product Name": "Spiral Wound Gasket",
    Description: "A mix of V-shaped metal wire and filler material (graphite/PTFE). Placed between two flanges to prevent leakage under high pressure and temperature cycling.",
    Grades: "",
    Standards: "ASME B16.20, ASME B16.21",
    "Pressure Class": "150# to 2500#",
    Material: "SS 304/316 + Graphite/PTFE, Inner/Outer Ring: CS/SS",
    Application: "Flange Joints, Pressure Vessels, Heat Exchangers, Piping Systems",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "½\" to 48\" NB",
    Certification: ["ASME Certified"],
    Testing: "Dimensional, Compression Recovery",
    Applications: ["Refineries", "Petrochemical", "Process Piping", "Power Plants"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Sealing & Gaskets", "Sub-Category": "Ring Joint (RTJ)",
    "Product Name": "Ring Joint Gasket (RTJ)",
    Description: "Solid metal oval/octagonal ring used in very high-pressure oil & gas flanges and wellhead equipment. Designed for API 6A and ASME rated joints.",
    Grades: "R, RX, BX Types",
    Standards: "API 6A, ASME B16.20",
    "Pressure Class": "2000# to 20000#",
    Type: "Oval / Octagonal",
    Material: "Soft Iron, SS 304, SS 316, Inconel 625, Monel 400",
    Application: "Wellhead, Christmas tree, high-pressure oil & gas flanges, BOP",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "Per API Ring Number (R11 to R105)",
    Certification: ["API 6A Certified"],
    Testing: "Dimensional, Hardness, Surface Finish",
    Applications: ["Oil & Gas Wellheads", "High-Pressure Flanges", "Subsea", "BOP Equipment"],
    applicationImage: "/Steel/oil_industry1.jpg",
  },
  {
    Category: "Sealing & Gaskets", "Sub-Category": "O-Rings",
    "Product Name": "O-Ring Seal",
    Description: "A simple rubber or metal loop sitting in a groove to seal a connection. Available in Viton, Nitrile, EPDM, Silicone, PTFE, and metal-encapsulated variants.",
    Grades: "",
    Standards: "AS 568, ISO 3601",
    Material: "Viton, Nitrile (NBR), EPDM, Silicone, PTFE, Metal Encapsulated",
    Application: "Pumps, valves, cylinders, hydraulic systems, pneumatic systems",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "2mm to 500mm ID",
    WallThickness: "1.5mm to 7mm cross-section",
    Hardness: "50–90 Shore A (elastomers)",
    Testing: "Shore Hardness, Compression Set, Fluid Compatibility",
    Applications: ["Pumps", "Valves", "Cylinders", "Hydraulic Systems"],
    applicationImage: "/Steel/industry.jpg",
  },
];

/* ── Category Configuration ─────────────────────────────────── */

const CATEGORIES = [
  { key: "pipes",     label: "Pipes & Tubes",      icon: "plumbing",               match: ["Pipes & Tubes"] },
  { key: "sheets",    label: "Sheets & Plates",     icon: "layers",                 match: ["Sheets & Plates"] },
  { key: "flanges",   label: "Flanges",             icon: "radio_button_checked",   match: ["Flanges"] },
  { key: "fittings",  label: "Pipe Fittings",       icon: "hub",                    match: ["Pipe Fittings"] },
  { key: "fasteners", label: "Fasteners & Bars",    icon: "hardware",               match: ["Fasteners & Bars"] },
  { key: "gaskets",   label: "Sealing & Gaskets",   icon: "trip_origin",            match: ["Sealing & Gaskets"] },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec fields to display ─────────────────────────────────── */

const SPEC_FIELDS: { key: keyof SteelProduct; label: string; icon: string }[] = [
  { key: "Sub-Category",   label: "Sub-Category",              icon: "category" },
  { key: "Grades",         label: "Grades",                    icon: "science" },
  { key: "Standards",      label: "Standards",                 icon: "verified" },
  { key: "OD",             label: "Size / Outer Diameter",     icon: "radio_button_checked" },
  { key: "WallThickness",  label: "Wall Thickness / Schedule", icon: "straighten" },
  { key: "Length",          label: "Length",                    icon: "swap_horiz" },
  { key: "Thickness",      label: "Thickness",                 icon: "straighten" },
  { key: "EndFinish",      label: "End Finish",                icon: "carpenter" },
  { key: "SurfaceFinish",  label: "Surface Finish",            icon: "auto_awesome" },
  { key: "Pressure Class", label: "Pressure Class",            icon: "speed" },
  { key: "Type",           label: "Type",                      icon: "build" },
  { key: "Material",       label: "Material",                  icon: "diamond" },
  { key: "Testing",        label: "Testing & QC",              icon: "biotech" },
  { key: "Application",    label: "Application",               icon: "factory" },
];

/* ── Quality Assurance Items ────────────────────────────────── */

const QA_ITEMS = [
  { icon: "biotech",     title: "100% PMI Testing",     desc: "Positive Material Identification on every heat lot using XRF analyzers." },
  { icon: "water_drop",  title: "Hydrostatic Testing",  desc: "Pressure-tested per ASTM standards to ensure zero-leak integrity." },
  { icon: "radar",       title: "NDT Inspection",       desc: "Non-Destructive Testing — UT, RT, and Eddy Current per ASME Section V." },
  { icon: "verified",    title: "ISO 9001:2015",        desc: "Certified Quality Management System across all manufacturing facilities." },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN STEEL PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const Steel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>("ms");

  /* ── Active category from URL ── */
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
    return "pipes";
  }, [searchParams]);

  const activeCategory = CATEGORIES.find((c) => c.key === activeCategoryKey)!;

  /* ── Products in active category ── */
  const categoryProducts = useMemo(
    () => PRODUCTS.filter((p) =>
      (activeCategory.match as readonly string[]).includes(p.Category),
    ),
    [activeCategory],
  );

  /* ── All products in active category (no filter) ── */
  const filteredProducts = categoryProducts;

  /* ── Grouped products for sidebar (Pipes only) ── */
  const groupedProducts = useMemo(() => {
    if (activeCategoryKey !== "pipes") return null;
    const groups: Record<string, SteelProduct[]> = {};
    for (const p of categoryProducts) {
      const g = p.materialGroup || "other";
      if (!groups[g]) groups[g] = [];
      groups[g].push(p);
    }
    return groups;
  }, [categoryProducts, activeCategoryKey]);

  /* ── Active product from URL ── */
  const activeProductIdx = useMemo(() => {
    const param = searchParams.get("product");
    if (param) {
      const idx = filteredProducts.findIndex(
        (p) => slugify(p["Product Name"]) === param,
      );
      if (idx >= 0) return idx;
    }
    return 0;
  }, [searchParams, filteredProducts]);

  const activeProduct = filteredProducts[activeProductIdx] || filteredProducts[0];

  /* ── Helpers ── */
  function selectCategory(key: CategoryKey) {
    setSearchParams({ category: key });
    setMobileMenuOpen(false);
    setOpenAccordion("ms");
  }

  function selectProduct(product: SteelProduct) {
    setSearchParams({
      category: activeCategoryKey,
      product: slugify(product["Product Name"]),
    });
    setMobileMenuOpen(false);
  }

  /* ── Active specs (non-empty fields only) ── */
  const activeSpecs = useMemo(() => {
    if (!activeProduct) return [];
    return SPEC_FIELDS.filter((f) => {
      const val = activeProduct[f.key];
      return typeof val === "string" && val.trim().length > 0;
    });
  }, [activeProduct]);

  /* ── Product Sidebar Button ── */
  const ProductButton: React.FC<{ product: SteelProduct; idx: number; isActive: boolean }> = ({ product, idx, isActive }) => (
    <button
      onClick={() => selectProduct(product)}
      className={`w-full text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
        isActive
          ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
      }`}
    >
      <div className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden border ${
        isActive ? "border-yellow-500/40" : "border-slate-200"
      }`}>
        <img src={product.thumbnail} alt={product["Product Name"]} className="w-full h-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <span className={`block text-[13px] font-heading leading-tight truncate ${isActive ? "font-bold" : "font-semibold"}`}>
          {product["Product Name"]}
        </span>
        <span className={`block text-[10px] mt-0.5 ${isActive ? "text-slate-300" : "text-slate-400"}`}>
          {product["Sub-Category"]}
        </span>
      </div>
    </button>
  );

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      {/* ═══ HERO (70vh) ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 60vh, 700px)" }}>
        <img src="/Steel/oil_industry.jpg" alt="Steel manufacturing plant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50" />

        <div className="relative z-10 flex flex-col justify-center h-full container">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-200 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-yellow-500 font-medium">Steel Products</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-4 md:mb-6">
              High-Performance<br />
              <span className="text-yellow-500">Industrial Steel.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mb-6 lg:mb-8 font-sans leading-relaxed">
              ASTM / ASME / API compliant Stainless, Carbon, Mild &amp; Alloy Steel — engineered for
              critical infrastructure, oil &amp; gas, and heavy engineering across 6 product families.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 lg:mb-10">
              {["Mild Steel", "Stainless Steel", "Carbon Steel", "Alloy Steel", "Duplex", "Nickel Alloys"].map((m) => (
                <span key={m} className="px-3 py-1.5 border border-white/20 text-white/70 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:border-yellow-500/50 hover:text-yellow-500 transition-all cursor-default">
                  {m}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white text-sm font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300 group">
              <span className="material-symbols-outlined text-xl group-hover:translate-y-[1px] transition-transform">download</span>
              Download Complete Technical Catalog
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
      </section>

      {/* ═══ STICKY CATEGORY NAV (6 categories) ═══════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => selectCategory(cat.key)}
                className={`relative whitespace-nowrap px-3 lg:px-4 py-4 text-[13px] font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                  activeCategoryKey === cat.key
                    ? "text-yellow-600 border-b-2 border-yellow-500"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span className="material-symbols-outlined text-base hidden sm:inline">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-4">
              <span className="material-symbols-outlined text-sm text-yellow-500">verified</span>
              ASTM / ASME / API Certified
            </div>
          </div>
        </div>
      </nav>

      {/* ═══ MASTER-DETAIL BODY ═══════════════════════════════ */}
      <section className="bg-white border-b border-slate-100">
        <div className={`${CONTAINER} py-6 md:py-8 lg:py-12`}>
          {/* Mobile product selector */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-yellow-500">menu</span>
                {activeProduct ? activeProduct["Product Name"] : "Select Product"}
              </span>
              <span className={`material-symbols-outlined text-lg transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            {mobileMenuOpen && (
              <div className="border border-slate-200 border-t-0 bg-white max-h-80 overflow-y-auto">
                {activeCategoryKey === "pipes" && groupedProducts ? (
                  MAT_ORDER.map((gKey) => {
                    const items = groupedProducts[gKey];
                    if (!items?.length) return null;
                    return (
                      <div key={gKey}>
                        <button onClick={() => setOpenAccordion(openAccordion === gKey ? "" : gKey)}
                          className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-100 text-xs font-heading font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors">
                          {MAT_LABEL[gKey]}
                          <span className={`material-symbols-outlined text-sm transition-transform ${openAccordion === gKey ? "rotate-180" : ""}`}>expand_more</span>
                        </button>
                        {openAccordion === gKey && items.map((product) => {
                          const idx = filteredProducts.indexOf(product);
                          return (
                            <button key={product["Product Name"]} onClick={() => selectProduct(product)}
                              className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 flex items-center gap-3 ${
                                activeProductIdx === idx ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500" : "text-slate-600 hover:bg-slate-50"
                              }`}>
                              <div className="min-w-0 flex-1">
                                <span className="block font-heading font-semibold truncate">{product["Product Name"]}</span>
                                <span className="block text-xs opacity-60 mt-0.5">{product["Sub-Category"]}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                ) : (
                  filteredProducts.map((product, idx) => (
                    <button key={idx} onClick={() => selectProduct(product)}
                      className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 flex items-center gap-3 ${
                        activeProductIdx === idx ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500" : "text-slate-600 hover:bg-slate-50"
                      }`}>
                      <div className="min-w-0 flex-1">
                        <span className="block font-heading font-semibold truncate">{product["Product Name"]}</span>
                        <span className="block text-xs opacity-60 mt-0.5">{product["Sub-Category"]}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* ── LEFT: MASTER MENU ── */}
            <aside className="hidden lg:block w-[260px] xl:w-[300px] shrink-0">
              <div className="sticky" style={{ top: "64px" }}>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <span className="material-symbols-outlined text-lg text-yellow-500">{activeCategory.icon}</span>
                  <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">{activeCategory.label}</h3>
                  <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">
                    {filteredProducts.length} items
                  </span>
                </div>

                <div className="flex flex-col max-h-[calc(100vh-200px)] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                  {activeCategoryKey === "pipes" && groupedProducts ? (
                    MAT_ORDER.map((gKey) => {
                      const items = groupedProducts[gKey];
                      if (!items?.length) return null;
                      const isOpen = openAccordion === gKey;
                      return (
                        <div key={gKey} className="border-b border-slate-100 last:border-b-0">
                          <button
                            onClick={() => setOpenAccordion(isOpen ? "" : gKey)}
                            className={`w-full flex items-center justify-between px-3 py-3 transition-colors ${
                              isOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            <span className="text-[11px] font-heading font-bold uppercase tracking-widest">{MAT_LABEL[gKey]}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold font-heading px-1.5 py-0.5 rounded-full ${
                                isOpen ? "bg-yellow-500 text-slate-900" : "bg-slate-200 text-slate-500"
                              }`}>{items.length}</span>
                              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>expand_more</span>
                            </div>
                          </button>
                          {isOpen && (
                            <div className="flex flex-col space-y-1 py-1">
                              {items.map((product) => {
                                const idx = filteredProducts.indexOf(product);
                                return <ProductButton key={product["Product Name"]} product={product} idx={idx} isActive={activeProductIdx === idx} />;
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex flex-col space-y-1">
                      {filteredProducts.map((product, idx) => (
                        <ProductButton key={product["Product Name"]} product={product} idx={idx} isActive={activeProductIdx === idx} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* ── RIGHT: DETAIL VIEW ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div
                    key={activeProduct["Product Name"]}
                    variants={DETAIL_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Product Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-bold font-heading uppercase tracking-[0.15em] text-yellow-600 bg-yellow-50 px-3 py-1 rounded-sm">
                          {activeProduct["Sub-Category"]}
                        </span>
                        {activeProduct.materialGroup && (
                          <span className={`inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${
                            activeProduct.materialGroup === "ms" ? "text-amber-700 bg-amber-50 border-amber-200" :
                            activeProduct.materialGroup === "ss" ? "text-blue-700 bg-blue-50 border-blue-200" :
                            activeProduct.materialGroup === "cs" ? "text-slate-700 bg-slate-50 border-slate-200" :
                            "text-violet-700 bg-violet-50 border-violet-200"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${MAT_COLOR[activeProduct.materialGroup]}`} />
                            {MAT_LABEL[activeProduct.materialGroup]}
                          </span>
                        )}
                        <span className="text-xs font-sans text-slate-400">{activeProduct.Category}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                        {activeProduct["Product Name"]}
                      </h2>
                      <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
                    </div>

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-sm mb-8 h-[200px] md:h-[240px] lg:h-[280px] xl:h-[340px] group">
                      <img
                        src={activeProduct.applicationImage || activeProduct.thumbnail}
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
                      <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">{activeProduct.Description}</p>
                    </div>

                    {/* Certification Badges */}
                    {activeProduct.Certification && activeProduct.Certification.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">shield</span>
                          Certifications & Compliance
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Certification.map((cert, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm">
                              <span className="material-symbols-outlined text-xs">verified</span>
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specs Grid */}
                    {activeSpecs.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">engineering</span>
                          Technical Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSpecs.map((spec) => (
                            <div key={spec.key} className="bg-white border border-slate-200 p-5 rounded-sm hover:border-slate-300 hover:shadow-sm transition-all group">
                              <div className="flex items-center gap-2 mb-2.5">
                                <span className="material-symbols-outlined text-base text-yellow-500 group-hover:text-yellow-600 transition-colors">{spec.icon}</span>
                                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">{spec.label}</span>
                              </div>
                              <p className="text-sm font-sans text-slate-800 leading-relaxed font-medium">
                                {activeProduct[spec.key] as string}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Application Tags */}
                    {activeProduct.Applications && activeProduct.Applications.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">factory</span>
                          Key Industries & Applications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.Applications.map((app, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-yellow-100 transition-colors">
                              <span className="material-symbols-outlined text-sm">check_circle</span>
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Download Datasheet
                      </button>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                        <span className="material-symbols-outlined text-lg">description</span>
                        Request MTC
                      </button>
                      <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider hover:border-yellow-500 hover:bg-yellow-50 transition-all">
                        <span className="material-symbols-outlined text-lg">request_quote</span>
                        Get Quote
                      </Link>
                    </div>

                    {/* Application Image */}
                    {activeProduct.applicationImage && (
                      <div className="mb-4">
                        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400 mb-5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-yellow-500">image</span>
                          Application in Action
                        </h3>
                        <div className="relative overflow-hidden rounded-sm h-[200px] md:h-[220px] lg:h-[260px] xl:h-[340px] group">
                          <img src={activeProduct.applicationImage} alt={`${activeProduct["Product Name"]} application`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-white/90 bg-slate-900/50 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                              <span className="material-symbols-outlined text-sm text-yellow-500">factory</span>
                              {activeProduct.Application?.split(",")[0]?.trim() || "Industrial Application"}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MATERIAL GRADE QUICK REFERENCE ═══════════════════ */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-20">
        <div className="mx-auto container px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-yellow-500" />
              <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">Material Grades</span>
              <span className="block w-10 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">Grades We Stock & Supply</h2>
            <p className="text-sm text-slate-500 font-sans mt-3 max-w-2xl mx-auto">
              Manufactured and supplied with full traceability. All grades available with Mill Test Certificates (EN 10204 3.1).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900">Stainless Steel</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["304", "304L", "304H", "316", "316L", "316Ti", "321", "321H", "347", "310S", "410", "430", "904L", "2205", "2507"].map((g) => (
                  <span key={g} className="px-2 py-0.5 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-heading font-bold rounded-sm">{g}</span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-slate-500" />
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900">Carbon Steel</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["A106 Gr.B", "A53 Gr.B", "API 5L Gr.B", "X42", "X52", "X60", "X65", "X70", "A333 Gr.6", "IS 2062"].map((g) => (
                  <span key={g} className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-heading font-bold rounded-sm">{g}</span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900">Alloy Steel</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["P1", "P5", "P9", "P11", "P22", "P91", "F11", "F22", "WP11", "WP22"].map((g) => (
                  <span key={g} className="px-2 py-0.5 bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-heading font-bold rounded-sm">{g}</span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-violet-500" />
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-slate-900">Nickel & Exotic</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Monel 400", "Inconel 600", "Inconel 625", "Incoloy 800", "Incoloy 825", "Hastelloy C276", "Titanium"].map((g) => (
                  <span key={g} className="px-2 py-0.5 bg-violet-50 border border-violet-100 text-violet-700 text-[11px] font-heading font-bold rounded-sm">{g}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductQABanner title="Certified to the Highest Standards" items={QA_ITEMS} />
      <ProductCTA title="Procuring for a major project?" description="Submit your Bill of Materials (BOM) for a comprehensive supply schedule. Our engineering team will provide grade-specific availability, lead times, and project pricing within 24 hours." ctaLabel="Upload BOQ / Request Supply Quote" ctaIcon="upload_file" />
    </div>
  );
};

export default Steel;
