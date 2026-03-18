/* ═══════════════════════════════════════════════════════════════
   STEEL DATA — Centralised product catalogue, categories, specs
   Imported by Steel.tsx
   ═══════════════════════════════════════════════════════════════ */

/* ── Interfaces ─────────────────────────────────────────────── */

export interface SteelProduct {
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

/* ── Material Group Config ──────────────────────────────────── */

export const MATERIAL_GROUPS = [
  { key: "ss",      label: "Stainless Steel (SS Pipe)", color: "bg-blue-500",   ring: "ring-blue-500"   },
  { key: "gi",      label: "Galvanized (GI) Pipe",     color: "bg-teal-500",   ring: "ring-teal-500"   },
  { key: "ms",      label: "Carbon Steel / Mild Steel (MS)", color: "bg-amber-500",  ring: "ring-amber-500"  },
  { key: "special", label: "Specialty / Custom",        color: "bg-violet-500", ring: "ring-violet-500" },
] as const;

export const MAT_LABEL: Record<string, string> = Object.fromEntries(
  MATERIAL_GROUPS.map((g) => [g.key, g.label]),
);
export const MAT_COLOR: Record<string, string> = Object.fromEntries(
  MATERIAL_GROUPS.map((g) => [g.key, g.color]),
);
export const MAT_ORDER = MATERIAL_GROUPS.map((g) => g.key);

/** Required certification labels shown across Steel page UI */
export const STEEL_CORE_CERTIFICATIONS = [
  "IS",
  "BIS",
  "ISI Marked",
  "ASTM",
  "MTC EN",
] as const;

/* ═══════════════════════════════════════════════════════════════
   PRODUCT DATA
   ═══════════════════════════════════════════════════════════════ */

export const PRODUCTS: SteelProduct[] = [
  /* ──────────── PIPES & TUBES: STAINLESS STEEL (ss) ───────── */
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Welded Pipes",
    materialGroup: "ss",
    "Product Name": "SS 304/316 Welded / ERW Pipe",
    Description:
      "Austenitic stainless steel ERW/welded pipes with excellent corrosion resistance and formability. Grade 304 is the most widely used stainless steel; 316 adds molybdenum for superior chloride & marine resistance.",
    Grades: "SS 304, 304L, 304H, 316, 316L, 316H, 316Ti",
    Standards: "ASTM A312, ASTM A358, ASTM A249, EN 10217-7",
    Application:
      "Chemical Processing, Food & Beverage, Pharmaceutical, Dairy, Water Treatment, Marine",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '6.0mm to 609.6mm OD (⅛" to 24" NB)',
    WallThickness: "0.5mm to 6.0mm (Welded), SCH5S to SCH80S (Pipe)",
    Length: "Up to 30m (Welded), Single/Double Random",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "2B, No.4, Mirror, Polished",
    TensileStrength: "≥ 515 MPa (75,000 PSI)",
    YieldStrength: "≥ 205 MPa (30,000 PSI)",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB / ≤ 92 HRB (304), ≤ 217 HB / ≤ 95 HRB (316)",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE MR0175", "ASTM", "EN"],
    Testing: "PMI, Hydrostatic, Eddy Current, IGC",
    Applications: [
      "Chemical Processing",
      "Food & Dairy",
      "Pharmaceutical",
      "Marine",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Seamless Pipes",
    materialGroup: "ss",
    "Product Name": "SS 304/316 Seamless Pipe",
    Description:
      "Seamless stainless steel pipes/tubes made by extrusion with no weld seam. Superior for high-pressure and high-temperature applications. Available in a wide range of grades including 321, 347, and 904L.",
    Grades: "SS 304, 304L, 316, 316L, 321, 347, 904L",
    Standards: "ASTM A312, ASTM A213, ASTM A269, EN 10216-5",
    Application:
      "High Pressure, Process Piping, Heat Exchangers, Instrumentation, Oil & Gas",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '¼" NB to 24" NB (13.7mm to 609.6mm OD)',
    WallThickness: "SCH5S, 10S, 40S, 80S, SCH160, SCH XXS",
    Length: "Up to 15m, Single/Double Random",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "2B, BA, Pickled & Annealed",
    TensileStrength: "≥ 515 MPa (75,000 PSI)",
    YieldStrength: "≥ 205 MPa (30,000 PSI)",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB / ≤ 92 HRB",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE", "IBR", "ASTM", "EN"],
    Testing: "PMI, Hydrostatic, Eddy Current, UT, Spectrometer",
    Applications: [
      "Oil & Gas",
      "Chemical Processing",
      "Power Plants",
      "Boilers & Heat Exchangers",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Instrumentation Tubes",
    materialGroup: "ss",
    "Product Name": "SS Instrumentation Tube",
    Description:
      "Smaller, thinner, and more precise than pipes. Used for high-pressure hydraulic lines, analytical instruments, and chromatography. Available in bright annealed and electropolished finishes.",
    Grades: "304, 316L, 6Mo",
    Standards: "ASTM A269, EN 10216-5",
    Application:
      "High-pressure hydraulic lines, instrumentation, analytical instruments, chromatography",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '3.18mm to 25.40mm (⅛" to 1")',
    WallThickness: "0.5mm to 3.05mm",
    Length: "Up to 24m (coiled or straight)",
    EndFinish: "Plain End",
    SurfaceFinish: "Bright Annealed (BA), Electropolished",
    TensileStrength: "≥ 515 MPa",
    YieldStrength: "≥ 205 MPa",
    Elongation: "≥ 35%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "PED", "ASTM", "EN"],
    Testing: "PMI, Hydrostatic, Eddy Current, Flaring",
    Applications: [
      "Instrumentation",
      "Hydraulic Systems",
      "Analytical Equipment",
      "Offshore",
    ],
    applicationImage: "/Steel/oil_industry1.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "U-Bend Tubes",
    materialGroup: "ss",
    "Product Name": "Heat Exchanger U-Tube",
    Description:
      "U-shaped tubes used in boilers and heat exchangers to cool or heat fluids. Precisely formed to client bend-radius specifications with stringent dimensional tolerances.",
    Grades: "304H, 316H, 321, 316L",
    Standards: "ASTM A213, EN 10216-5",
    Application:
      "Shell & tube heat exchangers, boilers, superheaters, condensers",
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
    Certification: ["MTC EN 10204 3.1", "PED", "IBR", "ASTM", "EN"],
    Testing: "PMI, Hydrostatic, Eddy Current, Flattening, Spectrometer",
    Applications: [
      "Heat Exchangers",
      "Boilers",
      "Condensers",
      "Power Generation",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Ferritic Tubes",
    materialGroup: "ss",
    "Product Name": "SS Ferritic 409/430 Tubes",
    Description:
      "Ferritic stainless steel tubes with good corrosion resistance at lower cost than austenitic grades. Magnetic and not hardenable by heat treatment. Ideal for automotive exhaust, heat exchangers, and architectural uses.",
    Grades: "SS 409, 409L, 410, 430, 439, 441",
    Standards: "ASTM A268, ASTM A803, EN 10217-7",
    Application:
      "Automotive Exhaust, Heat Exchangers, Kitchen Equipment, Architectural",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 168.3mm OD",
    WallThickness: "0.5mm to 4.0mm",
    Length: "Up to 12m",
    EndFinish: "Plain End",
    TensileStrength: "≥ 380 MPa (409), ≥ 450 MPa (430)",
    YieldStrength: "≥ 170 MPa (409), ≥ 205 MPa (430)",
    Elongation: "≥ 20%",
    Hardness: "≤ 179 HB (409), ≤ 183 HB (430)",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Eddy Current, Hydrostatic, Flaring",
    Applications: [
      "Automotive Exhaust",
      "Heat Exchangers",
      "Kitchen Equipment",
      "Architectural",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Duplex Tubes",
    materialGroup: "ss",
    "Product Name": "SS Duplex 2205 / Super Duplex 2507",
    Description:
      "Duplex stainless steel with a mixed austenitic-ferritic microstructure providing high strength and excellent resistance to stress corrosion cracking and pitting. Super Duplex 2507 for extreme environments.",
    Grades: "SS 2205 (UNS S31803/S32205), 2507 (UNS S32750)",
    Standards: "ASTM A789, ASTM A790, ASTM A928, EN 10217-7",
    Application:
      "Oil & Gas (Subsea), Chemical Tankers, Desalination, Pulp & Paper, Marine",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "6.0mm to 323.9mm OD",
    WallThickness: "SCH5S to SCH160",
    Length: "Up to 12m",
    EndFinish: "Plain End, Beveled",
    TensileStrength: "≥ 620 MPa (2205), ≥ 795 MPa (2507)",
    YieldStrength: "≥ 450 MPa (2205), ≥ 550 MPa (2507)",
    Elongation: "≥ 25% (2205), ≥ 15% (2507)",
    Hardness: "≤ 293 HB (2205), ≤ 310 HB (2507)",
    Certification: ["MTC EN 10204 3.1", "NACE MR0175", "PED", "ASTM", "EN"],
    Testing: "PMI, Hydrostatic, UT, Impact, Ferrite Content, IGC",
    Applications: [
      "Oil & Gas Subsea",
      "Chemical Tankers",
      "Desalination",
      "Marine & Offshore",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ──────────── PIPES & TUBES: GALVANIZED (gi) ────────────── */
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Galvanised Pipes",
    materialGroup: "gi",
    "Product Name": "Galvanised Iron (GI) Pipe",
    Description:
      "Mild steel pipes hot-dip coated with a protective layer of zinc to prevent rust and corrosion. Widely used for water supply, agriculture, and fencing.",
    Grades: "Class A (Light), Class B (Medium), Class C (Heavy)",
    Standards: "IS 1239, IS 4736, ASTM A53, EN 10255",
    Application:
      "Water supply, irrigation, fencing, fire fighting, agriculture",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "15mm to 150mm NB",
    WallThickness: "Light / Medium / Heavy",
    Length: "6m standard",
    EndFinish: "Threaded & Coupled / Plain End",
    SurfaceFinish: "Hot-dip Galvanised (Zinc Coated)",
    Certification: ["ISI", "BIS", "ASTM", "EN"],
    Testing: "Hydrostatic, Zinc Coating Weight, Bend",
    Applications: ["Water Supply", "Irrigation", "Fencing", "Fire Fighting"],
    applicationImage: "/Steel/industry.jpg",
  },

  /* ──────────── PIPES & TUBES: CARBON STEEL / MILD STEEL (ms) */
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "ERW Pipes",
    materialGroup: "ms",
    "Product Name": "ERW / Mild Steel (MS) Pipe",
    Description:
      "Low-carbon Electric Resistance Welded pipes. Highly economical and extensively used for water lines, fire-fighting, and structural purposes. Available in Light (A), Medium (B), and Heavy (C) classes per IS 1239.",
    Grades:
      "IS 1239 Class A (Light), Class B (Medium), Class C (Heavy), Fe 330, Fe 410",
    Standards: "IS 1239, IS 3589, BS 1387, ASTM A53, EN 10255",
    Application:
      "Water Supply, Fire Fighting, Structural, Scaffolding, Fencing, Agriculture",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "15mm to 150mm NB (21.3mm to 168.3mm OD)",
    WallThickness: "Class A: 2.0–3.6mm, Class B: 2.3–4.5mm, Class C: 2.6–5.0mm",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled, Threaded & Coupled",
    TensileStrength: "≥ 330 MPa (Fe 330), ≥ 410 MPa (Fe 410)",
    YieldStrength: "≥ 210 MPa (Fe 330), ≥ 250 MPa (Fe 410)",
    Elongation: "≥ 20%",
    Certification: ["IS", "BIS", "ISI Marked", "ASTM", "EN"],
    Testing: "Hydrostatic, Bend, Flattening",
    Applications: [
      "Water Supply",
      "Fire Fighting",
      "Scaffolding",
      "Agriculture",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Seamless Pipes",
    materialGroup: "ms",
    "Product Name": "MS Seamless (SMLS) Pipe",
    Description:
      "Made from a solid round steel billet which is heated and pushed or pulled over a form until the steel is shaped into a hollow tube. No weld seam — ideal for high-pressure and high-temperature service.",
    Grades: "ASTM A106 Gr. A/B, ASTM A53 Gr. A/B, IS 1239",
    Standards: "ASTM A106, ASTM A53, IS 1239, EN 10216-1",
    Application:
      "High Pressure, High Temperature, Boiler, Heat Exchanger, Oil & Gas",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '½" to 24" NB (21.3mm to 609.6mm OD)',
    WallThickness: "SCH 40, SCH 80, SCH 160, SCH XXS",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled",
    TensileStrength: "≥ 330 MPa",
    YieldStrength: "≥ 205 MPa",
    Elongation: "≥ 25%",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "Hydrostatic, Flattening, Tensile, Hardness",
    Applications: [
      "Boilers",
      "Heat Exchangers",
      "Oil & Gas",
      "High-Pressure Lines",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Hollow Sections",
    materialGroup: "ms",
    "Product Name": "MS Hollow Sections (SHS / RHS / CHS)",
    Description:
      "Square (SHS), Rectangular (RHS), and Circular (CHS) hollow structural sections for load-bearing and architectural applications. Manufactured by forming and welding steel strip/plate.",
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
    Certification: ["ISI", "Mill TC", "ASTM", "EN"],
    Testing: "Tensile, Bend, Flattening, UT (for thicker wall)",
    Applications: [
      "Structural Framework",
      "Construction",
      "Columns & Beams",
      "Trusses",
    ],
    applicationImage: "/Steel/Steel-structure-3.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Spiral Welded Pipes",
    materialGroup: "ms",
    "Product Name": "LSAW / Spiral Welded Steel Pipe (HSAW)",
    Description:
      "Large-diameter pipes manufactured by LSAW (Longitudinal Submerged Arc Welding) or HSAW (Helical/Spiral) welding of steel strips. Allows for very large diameters for municipal and oil/gas infrastructure.",
    Grades: "API 5L Gr. B to X70, ASTM A252, S355",
    Standards: "API 5L, ASTM A252, EN 10219",
    Application:
      "Municipal Waterworks, Oil & Gas Pipelines, Structural Piling, Infrastructure",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '16" to 120" OD (406mm to 3048mm)',
    WallThickness: "6mm to 25mm",
    Length: "6m to 18m",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "Black, 3LPE, FBE, Epoxy",
    TensileStrength: "≥ 415 MPa (Gr. B), ≥ 570 MPa (X70)",
    YieldStrength: "≥ 245 MPa (Gr. B), ≥ 485 MPa (X70)",
    Elongation: "≥ 21%",
    Certification: ["API Monogram", "ISO 3183", "MTC", "ASTM", "EN"],
    Testing: "UT, RT, Hydrostatic, Impact",
    Applications: [
      "Municipal Water",
      "Oil & Gas Pipelines",
      "Piling",
      "Large Infrastructure",
    ],
    applicationImage: "/Steel/oil_industry1.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Seamless Pipes",
    materialGroup: "ms",
    "Product Name": "CS Seamless Pipe (ASTM A106)",
    Description:
      "Carbon steel seamless pipe for high-temperature service. Intended for bending, flanging, and similar forming operations. The workhorse pipe grade for refineries and power plants.",
    Grades: "ASTM A106 Gr. A/B/C",
    Standards: "ASTM A106, ASME SA106, EN 10216-2",
    Application:
      "Boilers, Superheaters, Heat Exchangers, High Temperature Service, Refineries",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '½" to 24" NB (21.3mm to 609.6mm OD)',
    WallThickness: "SCH 40, SCH 80, SCH 120, SCH 160, SCH XXS",
    Length: "Single Random (5–7m), Double Random (10–12m)",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "Black, Oiled, Varnished",
    TensileStrength: "≥ 415 MPa (Gr. B)",
    YieldStrength: "≥ 240 MPa (Gr. B)",
    Elongation: "≥ 30%",
    Certification: ["MTC EN 10204 3.1", "IBR Approved", "ASTM", "EN"],
    Testing: "Hydrostatic, Flattening, Tensile, Hardness",
    Applications: ["Boilers", "Refineries", "Steam Lines", "Power Plants"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Welded Pipes",
    materialGroup: "ms",
    "Product Name": "CS Welded Pipe (ASTM A53)",
    Description:
      "Black and hot-dipped zinc-coated welded and seamless carbon steel pipe for general structural and pressure applications. Available in ERW and EFW types.",
    Grades: "ASTM A53 Gr. A/B",
    Standards: "ASTM A53, ASME SA53, EN 10217-1",
    Application:
      "General Purpose Piping, Mechanical, Pressure, Steam, Water, Gas, Air Lines",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '½" to 26" NB',
    WallThickness: "SCH STD, SCH 40, SCH 80",
    Length: "Single/Double Random",
    EndFinish: "Plain End, Beveled, Threaded & Coupled",
    SurfaceFinish: "Black, Galvanised",
    TensileStrength: "≥ 330 MPa (Gr. A), ≥ 415 MPa (Gr. B)",
    YieldStrength: "≥ 205 MPa (Gr. A), ≥ 240 MPa (Gr. B)",
    Elongation: "Varies by wall thickness",
    Certification: ["MTC", "Hydrostatic Tested", "ASTM", "EN"],
    Testing: "Hydrostatic, Tensile, Flattening",
    Applications: [
      "General Piping",
      "Structural",
      "Steam Lines",
      "Water & Gas",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Line Pipes",
    materialGroup: "ms",
    "Product Name": "CS Line Pipe (API 5L)",
    Description:
      "Carbon steel line pipes for conveying gas, water, and oil in the petroleum and natural gas industries. Available from Gr. B to X70 for cross-country and offshore pipelines.",
    Grades: "API 5L Gr. B, X42, X46, X52, X56, X60, X65, X70",
    Standards: "API 5L, ISO 3183, EN 10208-2",
    Application:
      "Oil & Gas Transport, Cross-Country Pipelines, Offshore, Upstream/Downstream",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: '½" to 48" NB (21.3mm to 1219mm OD)',
    WallThickness: "SCH 20 to SCH XXS, Custom WT",
    Length: "Single/Double Random, Cut to Length",
    EndFinish: "Plain End, Beveled",
    SurfaceFinish: "3LPE, FBE, Bare",
    TensileStrength: "≥ 415 MPa (Gr. B) to ≥ 570 MPa (X70)",
    YieldStrength: "≥ 245 MPa (Gr. B) to ≥ 485 MPa (X70)",
    Elongation: "Varies by grade",
    Certification: [
      "API Monogram",
      "ISO 3183",
      "MTC",
      "NACE",
      "HIC/SSC Tested",
      "ASTM",
      "EN",
    ],
    Testing: "UT, RT, Hydrostatic, Impact, HIC, SSC, DWTT",
    Applications: [
      "Oil & Gas Pipelines",
      "Cross-Country",
      "Offshore",
      "Upstream/Downstream",
    ],
    applicationImage: "/Steel/oil_industry1.jpg",
  },

  /* ──────────── PIPES & TUBES: SPECIALTY / CUSTOM ──────────── */
  {
    Category: "Pipes & Tubes",
    "Sub-Category": "Custom Pipes",
    materialGroup: "special",
    "Product Name": "Customised Steel Pipe / Fabricated Spools",
    Description:
      "Tailor-made piping solutions engineered to exact client schematics. We provide non-standard outside diameters, heavy-wall thicknesses, pre-fabricated pipe spools, and specialty coatings to drastically reduce on-site welding time.",
    Grades: "As per Customer Requirement",
    Standards: "Client Specifications, ASME B31.1/B31.3",
    Application:
      "Modular Process Skids, Offshore Platforms, Custom Heat Exchangers, Heavy Infrastructure",
    thumbnail: "/Steel/seamless-pipe.png",
    OD: "Non-Standard OD & Custom Wall Thickness",
    WallThickness: "Custom (Non-Standard SCH)",
    Length: "As per drawing",
    EndFinish: "As per spec (Plain, Beveled, Threaded, Grooved)",
    SurfaceFinish: "3LPE, Fusion Bonded Epoxy (FBE), Hot-Dip Galvanizing, PTFE",
    Certification: ["MTC", "IBR", "PED", "NACE", "Weld Radiography", "ASTM", "EN"],
    Testing: "Per client specification, PWHT, Hydro Test",
    Applications: [
      "EPC Projects",
      "Offshore Platforms",
      "Modular Skids",
      "Custom Infrastructure",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ──────────── SHEETS & PLATES ────────────────────────────── */
  {
    Category: "Sheets & Plates",
    "Sub-Category": "Hot Rolled Plates",
    "Product Name": "SS HR Plate (Hot Rolled)",
    Description:
      "Thick steel plates used for making tanks, vessel bodies, and heavy structures. Produced by hot-rolling slabs to desired thickness with No.1 / 2D finish.",
    Grades: "304, 316L, 310S, 321, 904L",
    Standards: "ASTM A240, ASME SA240, EN 10028-7",
    Application:
      "Pressure Vessels, Tanks, Structural Fabrication, Chemical Equipment",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "1000×2000mm to 2000×6000mm",
    Thickness: "5mm – 100mm",
    SurfaceFinish: "No.1, 2D, Pickled",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, UT, Tensile, Bend",
    Applications: [
      "Pressure Vessels",
      "Tank Bodies",
      "Structural",
      "Shipbuilding",
    ],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },
  {
    Category: "Sheets & Plates",
    "Sub-Category": "Cold Rolled Sheets",
    "Product Name": "SS CR Sheet (Cold Rolled)",
    Description:
      "Thinner, smoother, and shinier sheets used for kitchen equipment, cladding, and elevators. Available in a wide range of decorative finishes.",
    Grades: "304, 430, 202, 316L",
    Standards: "ASTM A240, ASME SA240, EN 10088-2",
    Application:
      "Kitchen Equipment, Elevator Panels, Cladding, Decorative, Automotive",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "1000×2000mm to 1500×3000mm",
    Thickness: "0.5mm – 6mm",
    SurfaceFinish: "2B, BA, No.4, Mirror (8K), Hairline, Sand Blast",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Tensile, Hardness, Bend",
    Applications: ["Kitchen Equipment", "Elevators", "Cladding", "Signage"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Sheets & Plates",
    "Sub-Category": "Coils & Strips",
    "Product Name": "SS Coil / Strip",
    Description:
      "Long continuous rolls of thin steel. Used for mass production of parts, pipe manufacturing, and precision stamping operations.",
    Grades: "304, 316L, 430, 202",
    Standards: "ASTM A240, ASME SA240, EN 10088-2",
    Application:
      "Stamping, Banding, Springs, Precision Parts, Mass Production Components",
    thumbnail: "/Steel/Steel-structure-3.jpg",
    OD: "Width: 10mm to 2000mm",
    Thickness: "0.3mm – 6mm",
    Length: "Coil (continuous)",
    SurfaceFinish: "2B, BA, No.4",
    TensileStrength: "≥ 515 MPa (304)",
    YieldStrength: "≥ 205 MPa (304)",
    Elongation: "≥ 40%",
    Hardness: "≤ 201 HB",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Tensile, Width Tolerance",
    Applications: [
      "Pipe Manufacturing",
      "Auto Components",
      "Stamping",
      "Appliances",
    ],
    applicationImage: "/Steel/industry.jpg",
  },

  /* ──────────── FLANGES ────────────────────────────────────── */
  {
    Category: "Flanges",
    "Sub-Category": "Weld Neck",
    "Product Name": "Weld Neck Flange",
    Description:
      "Has a long tapered hub. Welded directly to the pipe. Best for high pressure, high temperature, and critical piping systems. Available from 150# to 2500#.",
    Grades: "SS F304/F316/F316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.5, ASME B16.47, EN 1092-1",
    "Pressure Class": "150# to 2500#",
    Material: "Forged Stainless / Carbon Steel / Alloy Steel",
    Application:
      "High Pressure Piping, Oil & Gas, Chemical Plants, Power Plants",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 48" NB',
    EndFinish: "Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)",
    Certification: ["MTC EN 10204 3.1", "PED", "NACE", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Hardness, UT",
    Applications: [
      "Refineries",
      "Offshore",
      "Power Stations",
      "High-Pressure Piping",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Flanges",
    "Sub-Category": "Slip On",
    "Product Name": "Slip-On Flange",
    Description:
      "Slips over the pipe and is welded inside and out. Easier to align than Weld Neck. Cost-effective for low to medium pressure applications.",
    Grades: "SS F304/F316, CS A105",
    Standards: "ASME B16.5, EN 1092-1",
    "Pressure Class": "150# to 300#",
    Material: "Forged Stainless / Carbon Steel",
    Application: "Low/Medium Pressure Piping, Water Treatment, General Utility",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 24" NB',
    EndFinish: "Raised Face (RF), Flat Face (FF)",
    Certification: ["MTC", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Hardness",
    Applications: ["Low-Pressure Piping", "HVAC", "Water Systems", "Utility"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Flanges",
    "Sub-Category": "Blind",
    "Product Name": "Blind Flange",
    Description:
      "A solid disk used to block off the end of a piping system. Essential for dead-end closures, isolation, and pressure testing points.",
    Grades: "SS F304/F316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.5, ASME B16.47, EN 1092-1",
    "Pressure Class": "150# to 2500#",
    Material: "Forged Stainless / Carbon Steel / Alloy Steel",
    Application: "Dead-end closure, pipeline isolation, pressure testing",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 48" NB',
    EndFinish: "Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Hardness, UT",
    Applications: [
      "Pipeline Isolation",
      "Pressure Testing",
      "Dead-End Closure",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ──────────── PIPE FITTINGS ──────────────────────────────── */
  {
    Category: "Pipe Fittings",
    "Sub-Category": "Buttweld Elbows",
    "Product Name": "90° / 45° Elbow",
    Description:
      "Used to change the direction of flow in a piping system. Available in Long Radius (LR) and Short Radius (SR), seamless and welded.",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9, EN 10253-2",
    Type: "Seamless / Welded, Long Radius (LR) / Short Radius (SR)",
    Application:
      "Direction change in process piping, oil & gas, chemical plants",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 48" NB',
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Visual",
    Applications: ["Process Piping", "Oil & Gas", "Chemical Plants", "Power"],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Pipe Fittings",
    "Sub-Category": "Buttweld Tees",
    "Product Name": "Equal / Reducing Tee",
    Description:
      "Used to split the flow into two directions or combine two flows. Available in equal and reducing configurations.",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9, EN 10253-2",
    Type: "Seamless / Welded, Equal / Reducing",
    Application: "Branch connections in piping, distribution systems",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 48" NB',
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Visual",
    Applications: [
      "Branch Connections",
      "Distribution Systems",
      "Process Piping",
    ],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipe Fittings",
    "Sub-Category": "Buttweld Reducers",
    "Product Name": "Concentric / Eccentric Reducer",
    Description:
      "Connects a larger pipe to a smaller pipe. Concentric for vertical lines, eccentric for horizontal lines (prevents air pockets).",
    Grades: "SS 304/316L, CS ASTM A234 WPB, Alloy WP11/WP22",
    Standards: "ASME B16.9, EN 10253-2",
    Type: "Seamless / Welded, Concentric / Eccentric",
    Application: "Pipe size transitions, pump connections, process lines",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '1" × ½" to 48" × 46" NB',
    WallThickness: "SCH5S to SCH XXS",
    EndFinish: "Beveled",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Visual",
    Applications: ["Pipe Transitions", "Pump Connections", "Process Lines"],
    applicationImage: "/Steel/industry.jpg",
  },
  {
    Category: "Pipe Fittings",
    "Sub-Category": "Forged Fittings",
    "Product Name": "Socket Weld & Threaded Fittings",
    Description:
      "Forged fittings for small-bore, high-pressure piping systems. Includes socket weld elbows, tees, unions, couplings, and threaded variants. Available in Class 3000, 6000, and 9000.",
    Grades: "SS 304/316L, CS A105, Alloy F11/F22",
    Standards: "ASME B16.11, EN 10253-2",
    "Pressure Class": "3000# / 6000# / 9000#",
    Application:
      "Small-bore piping, high-pressure systems, instrumentation, hydraulic lines",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '⅛" to 4" NB',
    Type: "Socket Weld Elbow, Tee, Union, Coupling / Threaded Elbow, Tee, Cross, Bushing",
    Material: "Forged Stainless / Carbon / Alloy Steel",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Dimensional, Hardness",
    Applications: [
      "High-Pressure Piping",
      "Instrumentation",
      "Hydraulic",
      "Oil & Gas",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },

  /* ──────────── FASTENERS & BARS ───────────────────────────── */
  {
    Category: "Fasteners & Bars",
    "Sub-Category": "Industrial Fasteners",
    "Product Name": "Hex Bolts, Stud Bolts, Nuts & Washers",
    Description:
      "High-tensile industrial fasteners in SS, CS, and alloy steel. Hex bolts, stud bolts (fully/partially threaded), hex nuts, washers, and threaded rods for critical bolting applications.",
    Grades:
      "SS 304/316 (A2-70/A4-80), CS Gr. 8.8/10.9/12.9, ASTM A193 B7/B8, ASTM A194 2H/Gr.8",
    Standards: "ASTM A193, ASTM A194, ASTM A320, IS 1367, DIN 931/933, EN ISO 4014",
    Application:
      "Flange bolting, structural assembly, pressure vessels, equipment mounting",
    thumbnail: "/Steel/structural-steel-product-range.jpg",
    OD: 'M5 to M100 / ¼" to 4"',
    Length: "20mm to 3000mm",
    Material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloy",
    SurfaceFinish:
      "Plain, Zinc Plated, Hot-Dip Galvanised, PTFE Coated, Cadmium",
    Certification: ["MTC EN 10204 3.1", "ISO 9001", "ASTM", "EN"],
    Testing: "Tensile, Proof Load, Hardness, Wedge Test",
    Applications: [
      "Flange Bolting",
      "Structural Assembly",
      "Pressure Vessels",
      "Construction",
    ],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },
  {
    Category: "Fasteners & Bars",
    "Sub-Category": "Round & Structural Bars",
    "Product Name": "Round Bar / Flat Bar / Hex Bar",
    Description:
      "Bright and black finish bars in round, flat, hex, and square profiles. Used for machining, shafts, fastener manufacturing, and general engineering applications.",
    Grades: "SS 304, 316, 410, 431 / CS EN8, EN24, C45 / Alloy EN19, EN36",
    Standards: "ASTM A276, ASTM A479, IS 2062, EN 10060",
    Application:
      "Machining, Shafts, Fastener Manufacturing, General Engineering, Structural",
    thumbnail: "/Steel/structural-steel-product-range.jpg",
    OD: "2mm to 500mm diameter (Round), various (Flat/Hex/Square)",
    Length: "3m to 6m standard, cut-to-length available",
    SurfaceFinish: "Bright, Black, Polished, Peeled, Ground",
    TensileStrength: "≥ 515 MPa (SS 304)",
    YieldStrength: "≥ 205 MPa (SS 304)",
    Certification: ["MTC EN 10204 3.1", "ASTM", "EN"],
    Testing: "PMI, Tensile, Hardness, Ultrasonic",
    Applications: [
      "Machining",
      "Shafts & Axles",
      "Fastener Manufacturing",
      "Structural",
    ],
    applicationImage: "/Steel/structural_steel_beam.jpg",
  },

  /* ──────────── SEALING & GASKETS ──────────────────────────── */
  {
    Category: "Sealing & Gaskets",
    "Sub-Category": "Spiral Wound",
    "Product Name": "Spiral Wound Gasket",
    Description:
      "A mix of V-shaped metal wire and filler material (graphite/PTFE). Placed between two flanges to prevent leakage under high pressure and temperature cycling.",
    Grades: "",
    Standards: "ASME B16.20, ASME B16.21, EN 1514-2",
    "Pressure Class": "150# to 2500#",
    Material: "SS 304/316 + Graphite/PTFE, Inner/Outer Ring: CS/SS",
    Application:
      "Flange Joints, Pressure Vessels, Heat Exchangers, Piping Systems",
    thumbnail: "/Steel/image-18.jpeg",
    OD: '½" to 48" NB',
    Certification: ["ASME Certified", "EN"],
    Testing: "Dimensional, Compression Recovery",
    Applications: [
      "Refineries",
      "Petrochemical",
      "Process Piping",
      "Power Plants",
    ],
    applicationImage: "/Steel/oil_industry.jpg",
  },
  {
    Category: "Sealing & Gaskets",
    "Sub-Category": "Ring Joint (RTJ)",
    "Product Name": "Ring Joint Gasket (RTJ)",
    Description:
      "Solid metal oval/octagonal ring used in very high-pressure oil & gas flanges and wellhead equipment. Designed for API 6A and ASME rated joints.",
    Grades: "R, RX, BX Types",
    Standards: "API 6A, ASME B16.20",
    "Pressure Class": "2000# to 20000#",
    Type: "Oval / Octagonal",
    Material: "Soft Iron, SS 304, SS 316, Inconel 625, Monel 400",
    Application:
      "Wellhead, Christmas tree, high-pressure oil & gas flanges, BOP",
    thumbnail: "/Steel/image-18.jpeg",
    OD: "Per API Ring Number (R11 to R105)",
    Certification: ["API 6A Certified", "ASTM"],
    Testing: "Dimensional, Hardness, Surface Finish",
    Applications: [
      "Oil & Gas Wellheads",
      "High-Pressure Flanges",
      "Subsea",
      "BOP Equipment",
    ],
    applicationImage: "/Steel/oil_industry1.jpg",
  },
  {
    Category: "Sealing & Gaskets",
    "Sub-Category": "O-Rings",
    "Product Name": "O-Ring Seal",
    Description:
      "A simple rubber or metal loop sitting in a groove to seal a connection. Available in Viton, Nitrile, EPDM, Silicone, PTFE, and metal-encapsulated variants.",
    Grades: "",
    Standards: "AS 568, ISO 3601",
    Material: "Viton, Nitrile (NBR), EPDM, Silicone, PTFE, Metal Encapsulated",
    Application:
      "Pumps, valves, cylinders, hydraulic systems, pneumatic systems",
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

export const CATEGORIES = [
  {
    key: "pipes",
    label: "Pipes & Tubes",
    icon: "plumbing",
    match: ["Pipes & Tubes"],
  },
  {
    key: "sheets",
    label: "Sheets & Plates",
    icon: "layers",
    match: ["Sheets & Plates"],
  },
  {
    key: "flanges",
    label: "Flanges",
    icon: "radio_button_checked",
    match: ["Flanges"],
  },
  {
    key: "fittings",
    label: "Pipe Fittings",
    icon: "hub",
    match: ["Pipe Fittings"],
  },
  {
    key: "fasteners",
    label: "Fasteners & Bars",
    icon: "hardware",
    match: ["Fasteners & Bars"],
  },
  {
    key: "gaskets",
    label: "Sealing & Gaskets",
    icon: "trip_origin",
    match: ["Sealing & Gaskets"],
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec fields to display (table rows) ────────────────────── */

export const SPEC_FIELDS: { key: keyof SteelProduct; label: string }[] = [
  { key: "Grades",          label: "Grades" },
  { key: "Standards",       label: "Standards" },
  { key: "OD",              label: "Size / Outer Diameter" },
  { key: "WallThickness",   label: "Wall Thickness / Schedule" },
  { key: "Length",           label: "Length" },
  { key: "Thickness",       label: "Thickness" },
  { key: "EndFinish",       label: "End Finish" },
  { key: "SurfaceFinish",   label: "Surface Finish" },
  { key: "Pressure Class",  label: "Pressure Class" },
  { key: "Type",            label: "Type" },
  { key: "Material",        label: "Material" },
  { key: "TensileStrength", label: "Tensile Strength" },
  { key: "YieldStrength",   label: "Yield Strength" },
  { key: "Elongation",      label: "Elongation" },
  { key: "Hardness",        label: "Hardness" },
  { key: "Testing",         label: "Testing & QC" },
];

/* ── Quality Assurance Items ────────────────────────────────── */

export const QA_ITEMS = [
  {
    icon: "biotech",
    title: "100% PMI Testing",
    desc: "Positive Material Identification on every heat lot using XRF analyzers.",
  },
  {
    icon: "water_drop",
    title: "Hydrostatic Testing",
    desc: "Pressure-tested per ASTM standards to ensure zero-leak integrity.",
  },
  {
    icon: "radar",
    title: "NDT Inspection",
    desc: "Non-Destructive Testing — UT, RT, and Eddy Current per ASME Section V.",
  },
  {
    icon: "verified",
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System across all manufacturing facilities.",
  },
];
