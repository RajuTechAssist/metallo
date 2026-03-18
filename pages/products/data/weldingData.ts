/* Extracted product data for this page. */

export interface WeldingProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  Material: string;
  Standards: string;
  Application: string;
  thumbnail: string;
  Classification?: string;
  Diameter?: string;
  Length?: string;
  Packaging?: string;
  Current?: string;
  Position?: string;
  ShieldingGas?: string;
  Coating?: string;
  Composition?: string;
  Applications?: string[];
  applicationImage?: string;
}

export const PRODUCTS: WeldingProduct[] = [
  /* ── SMAW Electrodes ───────────────────────────────────────── */
  {
    Category: "SMAW Electrodes", "Sub-Category": "E6013 Mild Steel",
    "Product Name": "E6013 General Purpose Electrode",
    Description: "All-position, rutile-coated mild steel electrode for general fabrication, maintenance, and repair work. Easy arc striking, smooth bead profile, and moderate penetration make it ideal for thin-to-medium gauge steel.",
    Material: "Mild Steel Core Wire, Rutile Coating",
    Standards: "AWS A5.1, IS 814, EN ISO 2560",
    Application: "General fabrication, maintenance & repair, structural steel, sheet metal work",
    thumbnail: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
    Classification: "E6013 (AWS) / E4113 (IS 814)",
    Diameter: "2.5mm, 3.15mm, 4.0mm, 5.0mm",
    Length: "350mm / 450mm",
    Packaging: "5 kg / 20 kg hermetically sealed",
    Current: "AC / DC ±",
    Position: "All positions (F, V, OH, H)",
    Coating: "Rutile (High Titania)",
    Applications: ["General Fabrication", "Maintenance & Repair", "Structural Steel", "Sheet Metal"],
    applicationImage: "/Welding Consumables/welding-consumables-and-material-handling-ikp.webp",
  },
  {
    Category: "SMAW Electrodes", "Sub-Category": "E7018 Low Hydrogen",
    "Product Name": "E7018 Low Hydrogen Electrode",
    Description: "Low-hydrogen, iron-powder coated electrode for critical structural joints, pressure vessels, and heavy plate fabrication. Superior crack resistance and excellent X-ray quality welds on medium-to-high carbon steels.",
    Material: "Mild Steel Core Wire, Low Hydrogen Iron Powder Coating",
    Standards: "AWS A5.1, IS 814, EN ISO 2560",
    Application: "Pressure vessels, structural steel, bridges, heavy plate fabrication",
    thumbnail: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
    Classification: "E7018 (AWS) / E5118 (IS 814)",
    Diameter: "2.5mm, 3.15mm, 4.0mm, 5.0mm",
    Length: "350mm / 450mm",
    Packaging: "5 kg / 20 kg vacuum sealed",
    Current: "AC / DC +",
    Position: "All positions (F, V, OH, H)",
    Coating: "Basic Low Hydrogen (Iron Powder)",
    Applications: ["Pressure Vessels", "Bridges", "Structural Steel", "Heavy Fabrication"],
    applicationImage: "/Welding Consumables/pipeline.jpg",
  },
  {
    Category: "SMAW Electrodes", "Sub-Category": "E309L / E316L SS",
    "Product Name": "Stainless Steel Coated Electrode",
    Description: "Austenitic stainless steel electrodes for welding SS 304, 316, and dissimilar joints. Low carbon variants prevent intergranular corrosion in service. Smooth arc with minimal spatter.",
    Material: "Stainless Steel Core Wire (309L / 316L)",
    Standards: "AWS A5.4, IS 5206, EN ISO 3581",
    Application: "SS fabrication, food processing equipment, chemical plant piping, pharma vessels",
    thumbnail: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
    Classification: "E309L-16 / E316L-16 (AWS)",
    Diameter: "2.5mm, 3.15mm, 4.0mm",
    Length: "350mm",
    Packaging: "5 kg vacuum sealed packs",
    Current: "AC / DC +",
    Position: "All positions",
    Coating: "Rutile-Basic",
    Composition: "Cr 23% / Ni 12% (309L) | Cr 18% / Ni 12% / Mo 2.5% (316L)",
    Applications: ["SS Fabrication", "Food Processing", "Chemical Plants", "Pharma"],
    applicationImage: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
  },

  /* ── MIG / MAG Wire ────────────────────────────────────────── */
  {
    Category: "MIG / MAG Wire", "Sub-Category": "ER70S-6 Mild Steel",
    "Product Name": "ER70S-6 Copper Coated MIG Wire",
    Description: "Premium copper-coated mild steel MIG wire with excellent feedability and consistent arc performance. High deoxidiser content produces clean, porosity-free welds on semi-auto and robotic welding systems.",
    Material: "Mild Steel, Copper Coated",
    Standards: "AWS A5.18, IS 6419, EN ISO 14341",
    Application: "Semi-automatic & robotic welding, structural fabrication, automotive",
    thumbnail: "/Welding Consumables/other-welding-wire.jpg",
    Classification: "ER70S-6 (AWS) / S3 (IS 6419)",
    Diameter: "0.8mm, 1.0mm, 1.2mm, 1.6mm",
    Packaging: "5 kg / 15 kg spools, 250 kg drums",
    ShieldingGas: "CO₂ or Ar + CO₂ (80/20)",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Composition: "C 0.06–0.15%, Mn 1.4–1.85%, Si 0.8–1.15%",
    Applications: ["Structural Fabrication", "Automotive", "Robotic Welding", "Shipbuilding"],
    applicationImage: "/Welding Consumables/welding-consumables-and-material-handling-ikp.webp",
  },
  {
    Category: "MIG / MAG Wire", "Sub-Category": "E71T-1 Flux Cored",
    "Product Name": "E71T-1 Flux Cored Arc Wire (FCAW)",
    Description: "All-position flux-cored wire for high deposition rate welding. Self-shielding or gas-shielded versions available. Excellent for thick section welding in construction and shipbuilding.",
    Material: "Mild Steel Sheath, Flux Core",
    Standards: "AWS A5.20, IS 12444, EN ISO 17632",
    Application: "Heavy fabrication, shipbuilding, structural steel, bridge construction",
    thumbnail: "/Welding Consumables/duplex--super-duplex-steel-flux-core.jpg",
    Classification: "E71T-1C / E71T-1M (AWS)",
    Diameter: "1.2mm, 1.6mm",
    Packaging: "15 kg spools, 200 kg drums",
    ShieldingGas: "CO₂ or Ar + CO₂ (75/25)",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Applications: ["Heavy Fabrication", "Shipbuilding", "Bridge Construction", "Offshore"],
    applicationImage: "/Welding Consumables/duplex--super-duplex-steel-flux-core.jpg",
  },
  {
    Category: "MIG / MAG Wire", "Sub-Category": "SS MIG Wire",
    "Product Name": "ER308L / ER316L SS MIG Wire",
    Description: "Stainless steel MIG wire for welding austenitic SS grades. Low carbon versions prevent carbide precipitation. Smooth arc, low spatter, and excellent corrosion resistance in the weld deposit.",
    Material: "Stainless Steel 308L / 316L",
    Standards: "AWS A5.9, IS 6419, EN ISO 14343",
    Application: "SS fabrication, food & beverage, pharma, chemical processing",
    thumbnail: "/Welding Consumables/other-welding-wire.jpg",
    Classification: "ER308L / ER316L (AWS)",
    Diameter: "0.8mm, 1.0mm, 1.2mm",
    Packaging: "5 kg / 12.5 kg spools",
    ShieldingGas: "Ar + 2% CO₂ or Pure Argon",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Applications: ["SS Fabrication", "Food & Beverage", "Pharma", "Chemical Processing"],
    applicationImage: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
  },
  {
    Category: "MIG / MAG Wire", "Sub-Category": "Aluminium MIG Wire",
    "Product Name": "ER4043 / ER5356 Aluminium MIG Wire",
    Description: "Aluminium MIG filler wire for joining aluminium alloys in automotive, marine, and structural applications. ER4043 for 6xxx series; ER5356 for 5xxx series and marine grades.",
    Material: "Aluminium Alloy 4043 / 5356",
    Standards: "AWS A5.10, EN ISO 18273",
    Application: "Automotive, marine, structural aluminium, HVAC ducting",
    thumbnail: "/Welding Consumables/aluminum-mig-tig.jpg",
    Classification: "ER4043 / ER5356 (AWS)",
    Diameter: "0.8mm, 1.0mm, 1.2mm, 1.6mm",
    Packaging: "2 kg / 7 kg spools",
    ShieldingGas: "Pure Argon (99.99%)",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Applications: ["Automotive", "Marine", "Structural Aluminium", "HVAC"],
    applicationImage: "/Welding Consumables/aluminum-mig-tig.jpg",
  },

  /* ── TIG Filler Rods ───────────────────────────────────────── */
  {
    Category: "TIG Filler Rods", "Sub-Category": "SS TIG Rod",
    "Product Name": "ER308L / ER316L TIG Filler Rod",
    Description: "Precision TIG filler rods for critical stainless steel joints in pharma, food processing, and chemical industries. Controlled chemistry ensures low ferrite and superior corrosion resistance.",
    Material: "Stainless Steel 308L / 316L",
    Standards: "AWS A5.9, IS 6419, EN ISO 14343",
    Application: "Pharma piping, food processing, chemical vessels, architectural SS",
    thumbnail: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
    Classification: "ER308L / ER316L (AWS)",
    Diameter: "1.6mm, 2.0mm, 2.4mm, 3.15mm",
    Length: "1000mm straight rods",
    Packaging: "5 kg packs",
    ShieldingGas: "Pure Argon",
    Current: "DC − (DCEN)",
    Position: "All positions",
    Applications: ["Pharma Piping", "Food Processing", "Chemical Vessels", "Architectural SS"],
    applicationImage: "/Welding Consumables/stainless-steel-coated-electrodes.jpg",
  },
  {
    Category: "TIG Filler Rods", "Sub-Category": "Aluminium TIG Rod",
    "Product Name": "ER4043 / ER5356 Aluminium TIG Rod",
    Description: "High-purity aluminium TIG filler rods for precision welding of aluminium components. ER5356 offers higher strength and better colour match after anodising.",
    Material: "Aluminium Alloy 4043 / 5356",
    Standards: "AWS A5.10, EN ISO 18273",
    Application: "Aerospace, automotive, marine, architectural aluminium",
    thumbnail: "/Welding Consumables/aluminum-mig-tig.jpg",
    Classification: "ER4043 / ER5356 (AWS)",
    Diameter: "1.6mm, 2.4mm, 3.15mm",
    Length: "1000mm straight rods",
    Packaging: "2.5 kg / 5 kg packs",
    ShieldingGas: "Pure Argon",
    Current: "AC (for Al) / DC − (DCEN)",
    Position: "All positions",
    Applications: ["Aerospace", "Automotive", "Marine", "Architectural"],
    applicationImage: "/Welding Consumables/aluminum-mig-tig.jpg",
  },
  {
    Category: "TIG Filler Rods", "Sub-Category": "SAW Wire & Flux",
    "Product Name": "Submerged Arc Wire & Flux (SAW)",
    Description: "Wire-flux combinations for high-productivity submerged arc welding of thick plates. Used in pressure vessel longitudinal seams, pipe mills, and heavy structural fabrication.",
    Material: "Mild Steel / Low Alloy Steel Wire + Agglomerated Flux",
    Standards: "AWS A5.17, IS 7280, EN ISO 14171",
    Application: "Pressure vessel seams, pipe mills, heavy structural, wind tower fabrication",
    thumbnail: "/Welding Consumables/pipeline.jpg",
    Classification: "EL12 / EM12K Wire + F7A2 Flux (AWS)",
    Diameter: "2.0mm, 2.4mm, 3.15mm, 4.0mm wire",
    Packaging: "25 kg coils (wire) / 25 kg bags (flux)",
    Current: "DC + (DCEP) / AC",
    Position: "Flat & Horizontal fillet",
    Applications: ["Pressure Vessels", "Pipe Mills", "Wind Towers", "Heavy Structural"],
    applicationImage: "/Welding Consumables/pipeline.jpg",
  },

  /* ── Brazing & Soldering ───────────────────────────────────── */
  {
    Category: "Brazing & Soldering", "Sub-Category": "Silver Brazing Alloy",
    "Product Name": "Silver Brazing Alloy (BAg Series)",
    Description: "Cadmium-free silver brazing alloys for joining copper, brass, steel, and dissimilar metals. Low melting point ensures minimal base metal distortion. Used in HVAC, electrical, and precision assemblies.",
    Material: "Silver-Copper-Zinc-Tin Alloy",
    Standards: "AWS A5.8, IS 3557, EN ISO 17672",
    Application: "HVAC, electrical contacts, precision assemblies, plumbing",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "BAg-5 / BAg-7 / BAg-34 (AWS)",
    Composition: "Ag 30–56%, Cu 20–40%, Zn 15–30%",
    Diameter: "1.0mm, 1.5mm, 2.0mm rod; 0.1mm–0.5mm strip",
    Packaging: "100g / 500g / 1 kg packs",
    Applications: ["HVAC", "Electrical Contacts", "Precision Assemblies", "Plumbing"],
    applicationImage: "/Welding Consumables/welding_consumables.jpg",
  },
  {
    Category: "Brazing & Soldering", "Sub-Category": "CuP Rod",
    "Product Name": "Copper-Phosphorus Brazing Rod (BCuP)",
    Description: "Self-fluxing brazing alloy for copper-to-copper joints. No flux required on copper, making it the preferred choice for refrigeration, air conditioning, and plumbing connections.",
    Material: "Copper-Phosphorus Alloy (with/without Silver)",
    Standards: "AWS A5.8, IS 3557, EN ISO 17672",
    Application: "Refrigeration, air conditioning, copper plumbing, heat exchangers",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "BCuP-2 / BCuP-5 / BCuP-6 (AWS)",
    Composition: "Cu 80–93%, P 5–7.5%, Ag 0–15%",
    Diameter: "1.5mm, 2.0mm, 3.0mm rod",
    Packaging: "500g / 1 kg packs",
    Applications: ["Refrigeration", "Air Conditioning", "Copper Plumbing", "Heat Exchangers"],
    applicationImage: "/Welding Consumables/welding_consumables.jpg",
  },
  {
    Category: "Brazing & Soldering", "Sub-Category": "Lead-Free Solder",
    "Product Name": "Lead-Free Solder Wire & Bar",
    Description: "RoHS-compliant lead-free solder for electronics, PCB assembly, and electrical connections. Tin-silver-copper (SAC) alloys provide excellent wetting and reliability.",
    Material: "Sn-Ag-Cu (SAC305 / SAC387)",
    Standards: "IPC J-STD-006, EN ISO 9453, RoHS Compliant",
    Application: "Electronics assembly, PCB soldering, electrical connections, instrumentation",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "SAC305 / SAC387 / Sn99.3Cu0.7",
    Composition: "Sn 96–99%, Ag 0–3.5%, Cu 0.5–0.7%",
    Diameter: "0.5mm, 0.8mm, 1.0mm, 1.5mm wire; bar/stick",
    Packaging: "100g / 250g / 500g / 1 kg spools",
    Applications: ["Electronics", "PCB Assembly", "Electrical Connections", "Instrumentation"],
    applicationImage: "/Welding Consumables/Welding-Consumables-Advantages.webp",
  },

  /* ── Accessories ───────────────────────────────────────────── */
  {
    Category: "Welding Accessories", "Sub-Category": "Electrode Holders",
    "Product Name": "Electrode Holders & Ground Clamps",
    Description: "Heavy-duty electrode holders (200A–600A) and brass ground clamps for SMAW welding. Fully insulated, spring-loaded jaw design for secure electrode grip and quick change.",
    Material: "Brass Jaw, Fibreglass / Nylon Handle",
    Standards: "IS 9968, EN 60974-11",
    Application: "SMAW welding, all fabrication workshops",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "200A / 300A / 400A / 600A rated",
    Applications: ["SMAW Welding", "Fabrication Workshops", "Site Welding", "Maintenance"],
    applicationImage: "/Welding Consumables/welding-consumables-and-material-handling-ikp.webp",
  },
  {
    Category: "Welding Accessories", "Sub-Category": "MIG Torch Consumables",
    "Product Name": "MIG Torch Contact Tips & Nozzles",
    Description: "Precision-machined copper contact tips, gas nozzles, diffusers, and liners for all major MIG torch brands. Available for MB15, MB25, MB36, and Binzel-type torches.",
    Material: "Copper (Contact Tips), Brass (Nozzles), Steel (Liners)",
    Standards: "EN 60974",
    Application: "MIG/MAG welding torch maintenance and consumable replacement",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "Contact Tips: 0.8mm, 1.0mm, 1.2mm, 1.6mm",
    Applications: ["MIG Welding", "Robotic Welding", "Workshop", "Production Lines"],
    applicationImage: "/Welding Consumables/welding-consumables-and-material-handling-ikp.webp",
  },
  {
    Category: "Welding Accessories", "Sub-Category": "Gas Regulators",
    "Product Name": "Gas Regulators & Flow Meters",
    Description: "Single and dual-stage gas regulators for Argon, CO₂, and mixed shielding gases. Pre-set and adjustable flow meters for precise gas control in MIG/TIG welding.",
    Material: "Brass Body, Stainless Steel Internals",
    Standards: "IS 6901, EN ISO 2503",
    Application: "Gas supply regulation for MIG/TIG welding, gas cutting, brazing",
    thumbnail: "/Welding Consumables/welding_consumables.jpg",
    Classification: "Argon / CO₂ / Mixed Gas Regulators",
    Applications: ["MIG Welding", "TIG Welding", "Gas Cutting", "Brazing"],
    applicationImage: "/Welding Consumables/Welding-Consumables-Advantages.webp",
  },
];

/* ── Categories ──────────────────────────────────────────────── */

export const CATEGORIES = [
  { key: "smaw",      label: "SMAW Electrodes",     icon: "whatshot",       match: "SMAW Electrodes" },
  { key: "mig",       label: "MIG / MAG Wire",      icon: "cable",          match: "MIG / MAG Wire" },
  { key: "tig",       label: "TIG Filler Rods",     icon: "auto_fix_high",  match: "TIG Filler Rods" },
  { key: "brazing",   label: "Brazing & Soldering",  icon: "science",       match: "Brazing & Soldering" },
  { key: "accessories", label: "Accessories",        icon: "build",          match: "Welding Accessories" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec Fields ─────────────────────────────────────────────── */

export const SPEC_FIELDS: { key: keyof WeldingProduct; label: string; icon: string }[] = [
  { key: "Sub-Category",  label: "Sub-Category",    icon: "category" },
  { key: "Material",      label: "Material",        icon: "diamond" },
  { key: "Classification", label: "Classification", icon: "label" },
  { key: "Standards",     label: "Standards",       icon: "verified" },
  { key: "Diameter",      label: "Diameter / Size",  icon: "straighten" },
  { key: "Length",        label: "Length",           icon: "straighten" },
  { key: "Packaging",     label: "Packaging",       icon: "inventory_2" },
  { key: "Current",       label: "Welding Current", icon: "bolt" },
  { key: "Position",      label: "Weld Position",   icon: "swap_vert" },
  { key: "ShieldingGas",  label: "Shielding Gas",   icon: "air" },
  { key: "Coating",       label: "Coating / Flux",  icon: "auto_awesome" },
  { key: "Composition",   label: "Composition",     icon: "science" },
  { key: "Application",   label: "Application",     icon: "factory" },
];

/* ── QA Items ────────────────────────────────────────────────── */

export const QA_ITEMS = [
  { icon: "verified",      title: "AWS / IS Certified",    desc: "All products comply with AWS, IS, and EN welding standards." },
  { icon: "thermostat",    title: "All-Position Rated",    desc: "Electrodes & wires tested for F, V, OH, H positions." },
  { icon: "science",       title: "Chemistry Controlled",  desc: "Controlled composition with batch-wise test certificates." },
  { icon: "local_shipping", title: "Pan-India Supply",     desc: "Warehouse stock + project-direct despatch." },
];

/* ═══════════════════════════════════════════════════════════════ */


