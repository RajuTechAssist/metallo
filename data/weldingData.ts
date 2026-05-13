import { SITE_IMAGES } from '@/config/images';
/**
 * Welding & Allied — Product Data
 *
 * Five categories: Consumables, Cutting, Accessories, PPE, Welding (Machines).
 * Product specs sourced from ESAB India, IndiaMart, and major Indian industrial suppliers.
 */

/* ── Types ──────────────────────────────────────────────────────── */

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
  /* Extended fields for machines / cutting / PPE */
  Power?: string;
  Capacity?: string;
  Protection?: string;
  Weight?: string;
  Features?: string;
}

/* ── Products ───────────────────────────────────────────────────── */

export const PRODUCTS: WeldingProduct[] = [

  /* ═══════════════════════════════════════════════════════════════
     CONSUMABLES
     ═══════════════════════════════════════════════════════════════ */

  {
    Category: "Consumables",
    "Sub-Category": "E6013 Mild Steel",
    "Product Name": "E6013 General Purpose Electrode",
    Description:
      "All-position, rutile-coated mild steel electrode for general fabrication, maintenance, and repair work. Easy arc striking, smooth bead profile, and moderate penetration make it ideal for thin-to-medium gauge steel.",
    Material: "Mild Steel Core Wire, Rutile Coating",
    Standards: "AWS A5.1, IS 814, EN ISO 2560",
    Application: "General fabrication, maintenance & repair, structural steel, sheet metal",
    thumbnail: SITE_IMAGES.welding.misc.weldingElectrodes,
    Classification: "E6013 (AWS) / E4113 (IS 814)",
    Diameter: "2.5 mm, 3.15 mm, 4.0 mm, 5.0 mm",
    Length: "350 mm / 450 mm",
    Packaging: "5 kg / 20 kg hermetically sealed",
    Current: "AC / DC ±",
    Position: "All positions (F, V, OH, H)",
    Coating: "Rutile (High Titania)",
    Applications: ["General Fabrication", "Maintenance & Repair", "Structural Steel", "Sheet Metal"],
    applicationImage: SITE_IMAGES.welding.misc.weldingElectrodes,
  },
  {
    Category: "Consumables",
    "Sub-Category": "E7018 Low Hydrogen",
    "Product Name": "E7018 Low Hydrogen Electrode",
    Description:
      "Low-hydrogen, iron-powder coated electrode for critical structural joints, pressure vessels, and heavy plate fabrication. Superior crack resistance and excellent X-ray quality welds on medium-to-high carbon steels.",
    Material: "Mild Steel Core Wire, Low Hydrogen Iron Powder Coating",
    Standards: "AWS A5.1, IS 814, EN ISO 2560",
    Application: "Pressure vessels, structural steel, bridges, heavy plate fabrication",
    thumbnail: SITE_IMAGES.welding.misc.weldingElectrodes,
    Classification: "E7018 (AWS) / E5118 (IS 814)",
    Diameter: "2.5 mm, 3.15 mm, 4.0 mm, 5.0 mm",
    Length: "350 mm / 450 mm",
    Packaging: "5 kg / 20 kg vacuum sealed",
    Current: "AC / DC +",
    Position: "All positions (F, V, OH, H)",
    Coating: "Basic Low Hydrogen (Iron Powder)",
    Applications: ["Pressure Vessels", "Bridges", "Structural Steel", "Heavy Fabrication"],
    applicationImage: SITE_IMAGES.welding.misc.weldingElectrodes,
  },
  {
    Category: "Consumables",
    "Sub-Category": "Stainless Steel Electrode",
    "Product Name": "E309L / E316L Stainless Steel Electrode",
    Description:
      "Austenitic stainless steel electrodes for welding SS 304, 316, and dissimilar joints. Low carbon variants prevent intergranular corrosion in service. Smooth arc with minimal spatter.",
    Material: "Stainless Steel Core Wire (309L / 316L)",
    Standards: "AWS A5.4, IS 5206, EN ISO 3581",
    Application: "SS fabrication, food processing, chemical plant piping, pharma vessels",
    thumbnail: SITE_IMAGES.welding.misc.weldingElectrodes,
    Classification: "E309L-16 / E316L-16 (AWS)",
    Diameter: "2.5 mm, 3.15 mm, 4.0 mm",
    Length: "350 mm",
    Packaging: "5 kg vacuum sealed packs",
    Current: "AC / DC +",
    Position: "All positions",
    Coating: "Rutile-Basic",
    Composition: "Cr 23% / Ni 12% (309L) | Cr 18% / Ni 12% / Mo 2.5% (316L)",
    Applications: ["SS Fabrication", "Food Processing", "Chemical Plants", "Pharma"],
    applicationImage: SITE_IMAGES.welding.misc.weldingElectrodes,
  },
  {
    Category: "Consumables",
    "Sub-Category": "ER70S-6 MIG Wire",
    "Product Name": "ER70S-6 Copper Coated MIG Wire",
    Description:
      "Premium copper-coated mild steel MIG wire with excellent feedability and consistent arc performance. High deoxidiser content produces clean, porosity-free welds on semi-auto and robotic systems.",
    Material: "Mild Steel, Copper Coated",
    Standards: "AWS A5.18, IS 6419, EN ISO 14341",
    Application: "Semi-automatic & robotic welding, structural fabrication, automotive",
    thumbnail: SITE_IMAGES.welding.misc.migWireSpool,
    Classification: "ER70S-6 (AWS) / S3 (IS 6419)",
    Diameter: "0.8 mm, 1.0 mm, 1.2 mm, 1.6 mm",
    Packaging: "5 kg / 15 kg spools, 250 kg drums",
    ShieldingGas: "CO₂ or Ar + CO₂ (80/20)",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Composition: "C 0.06–0.15%, Mn 1.4–1.85%, Si 0.8–1.15%",
    Applications: ["Structural Fabrication", "Automotive", "Robotic Welding", "Shipbuilding"],
    applicationImage: SITE_IMAGES.welding.misc.migWireSpool,
  },
  {
    Category: "Consumables",
    "Sub-Category": "Flux Cored Wire",
    "Product Name": "E71T-1 Flux Cored Arc Wire (FCAW)",
    Description:
      "All-position flux-cored wire for high deposition rate welding. Self-shielding or gas-shielded versions available. Excellent for thick section welding in construction and shipbuilding.",
    Material: "Mild Steel Sheath, Flux Core",
    Standards: "AWS A5.20, IS 12444, EN ISO 17632",
    Application: "Heavy fabrication, shipbuilding, structural steel, bridge construction",
    thumbnail: SITE_IMAGES.welding.misc.migWireSpool,
    Classification: "E71T-1C / E71T-1M (AWS)",
    Diameter: "1.2 mm, 1.6 mm",
    Packaging: "15 kg spools, 200 kg drums",
    ShieldingGas: "CO₂ or Ar + CO₂ (75/25)",
    Current: "DC + (DCEP)",
    Position: "All positions",
    Applications: ["Heavy Fabrication", "Shipbuilding", "Bridge Construction", "Offshore"],
    applicationImage: SITE_IMAGES.welding.misc.migWireSpool,
  },
  {
    Category: "Consumables",
    "Sub-Category": "TIG Filler Rod",
    "Product Name": "ER308L / ER316L TIG Filler Rod",
    Description:
      "Precision TIG filler rods for critical stainless steel joints in pharma, food processing, and chemical industries. Controlled chemistry ensures low ferrite and superior corrosion resistance.",
    Material: "Stainless Steel 308L / 316L",
    Standards: "AWS A5.9, IS 6419, EN ISO 14343",
    Application: "Pharma piping, food processing, chemical vessels, architectural SS",
    thumbnail: SITE_IMAGES.welding.misc.weldingElectrodes,
    Classification: "ER308L / ER316L (AWS)",
    Diameter: "1.6 mm, 2.0 mm, 2.4 mm, 3.15 mm",
    Length: "1000 mm straight rods",
    Packaging: "5 kg packs",
    ShieldingGas: "Pure Argon",
    Current: "DC − (DCEN)",
    Position: "All positions",
    Applications: ["Pharma Piping", "Food Processing", "Chemical Vessels", "Architectural SS"],
    applicationImage: SITE_IMAGES.welding.misc.weldingElectrodes,
  },

  /* ═══════════════════════════════════════════════════════════════
     CUTTING
     ═══════════════════════════════════════════════════════════════ */

  {
    Category: "Cutting",
    "Sub-Category": "Metal Cutting Disc",
    "Product Name": "Metal Cutting Disc — 4″ / 7″ / 14″",
    Description:
      "High-performance aluminium oxide cutting discs for fast, clean cuts on mild steel, structural steel, and angle iron. Reinforced with fibreglass mesh for burst resistance. Thin kerf minimises material loss.",
    Material: "Aluminium Oxide, Fibreglass Reinforced",
    Standards: "EN 12413, IS 3073, oSa Certified",
    Application: "Structural steel cutting, metal fabrication, angle grinding, pipe cutting",
    thumbnail: SITE_IMAGES.welding.misc.cuttingDisc,
    Diameter: "4″ (105 mm), 7″ (180 mm), 14″ (355 mm)",
    Capacity: "Max RPM: 12,200 (4″) / 8,500 (7″) / 4,400 (14″)",
    Packaging: "Pack of 25 / 50 / Box of 100",
    Applications: ["Metal Fabrication", "Construction", "Pipe Cutting", "Maintenance"],
    applicationImage: SITE_IMAGES.welding.misc.cuttingDisc,
  },
  {
    Category: "Cutting",
    "Sub-Category": "Grinding Wheel",
    "Product Name": "Depressed Centre Grinding Wheel — 4″ / 7″",
    Description:
      "Heavy-duty grinding wheels with depressed centre design for surface grinding, weld dressing, and deburring. Zirconia alumina grain provides aggressive stock removal with long disc life on steel and SS.",
    Material: "Zirconia Alumina, Resin Bonded",
    Standards: "EN 12413, IS 3073, oSa Certified",
    Application: "Weld dressing, surface grinding, deburring, edge preparation",
    thumbnail: SITE_IMAGES.welding.misc.cuttingDisc,
    Diameter: "4″ (105 × 6 × 16 mm), 7″ (180 × 6 × 22 mm)",
    Capacity: "Max RPM: 12,200 (4″) / 8,500 (7″)",
    Packaging: "Pack of 25",
    Applications: ["Weld Dressing", "Surface Grinding", "Deburring", "Edge Prep"],
    applicationImage: SITE_IMAGES.welding.misc.cuttingDisc,
  },
  {
    Category: "Cutting",
    "Sub-Category": "Gas Cutting Torch",
    "Product Name": "Oxy-Acetylene Gas Cutting Torch Set",
    Description:
      "Complete gas cutting outfit with NM-type cutting torch, oxygen & acetylene regulators, twin-hose assembly, and interchangeable nozzle tips. For manual cutting of MS plates up to 300 mm thick.",
    Material: "Brass Body, Stainless Steel Seat",
    Standards: "IS 7653, EN ISO 5172",
    Application: "Plate cutting, scrap cutting, demolition, gouging",
    thumbnail: SITE_IMAGES.welding.misc.gasCuttingTorch,
    Classification: "NM-250 / NM-300 Type",
    Capacity: "Cutting range: 3 mm – 300 mm MS plate",
    Features: "Anti-flashback valves, interchangeable nozzle tips (ACN 0–5)",
    Packaging: "Complete set with 5 m twin hose & regulators",
    Applications: ["Plate Cutting", "Scrap Processing", "Demolition", "Shipbreaking"],
    applicationImage: SITE_IMAGES.welding.misc.gasCuttingTorch,
  },
  {
    Category: "Cutting",
    "Sub-Category": "Plasma Cutting Torch",
    "Product Name": "Air Plasma Cutting Torch — P80 / PT31",
    Description:
      "Heavy-duty hand-held plasma cutting torches compatible with most Indian and imported plasma machines. Air-cooled design with quick-change consumables — electrodes, nozzles, shield cups, and swirl rings.",
    Material: "Copper Nozzle, Hafnium Electrode, Ceramic Shield",
    Standards: "EN 60974, CE Certified",
    Application: "Sheet metal cutting, plate profiling, stainless steel, aluminium",
    thumbnail: SITE_IMAGES.welding.misc.plasmaCuttingTorch,
    Classification: "P80 (80A) / PT31 (40A)",
    Capacity: "Cutting capacity: up to 30 mm (P80) / 12 mm (PT31)",
    Features: "Air-cooled, pilot arc, quick-disconnect consumables",
    Packaging: "Torch head with 5 electrode + 5 nozzle starter kit",
    Applications: ["Sheet Metal", "Plate Profiling", "SS Cutting", "Aluminium"],
    applicationImage: SITE_IMAGES.welding.misc.plasmaCuttingTorch,
  },
  {
    Category: "Cutting",
    "Sub-Category": "SS Cutting Disc",
    "Product Name": "Stainless Steel Cutting Disc — 4″ / 7″",
    Description:
      "Ultra-thin cutting discs specially formulated for stainless steel. Iron-free, sulphur-free bonding prevents contamination and discolouration of cut surfaces. Clean, burr-free cuts with minimal heat input.",
    Material: "Aluminium Oxide (Iron & Sulphur Free)",
    Standards: "EN 12413, IS 3073, oSa Certified",
    Application: "SS fabrication, food processing equipment, pharma piping, architectural SS",
    thumbnail: SITE_IMAGES.welding.misc.cuttingDisc,
    Diameter: "4″ (105 × 1.0 × 16 mm), 7″ (180 × 1.6 × 22 mm)",
    Capacity: "Max RPM: 12,200 (4″) / 8,500 (7″)",
    Packaging: "Tin of 25 / 50",
    Applications: ["SS Fabrication", "Pharma Piping", "Food Equipment", "Architectural SS"],
    applicationImage: SITE_IMAGES.welding.misc.cuttingDisc,
  },

  /* ═══════════════════════════════════════════════════════════════
     ACCESSORIES
     ═══════════════════════════════════════════════════════════════ */

  {
    Category: "Accessories",
    "Sub-Category": "Electrode Holder",
    "Product Name": "Electrode Holder — 200A / 400A / 600A",
    Description:
      "Heavy-duty electrode holders with spring-loaded jaw for secure electrode grip and quick change. Fully insulated fibreglass/nylon handle with heat-resistant construction for extended welding sessions.",
    Material: "Brass Jaw, Fibreglass / Nylon Handle",
    Standards: "IS 9968, EN 60974-11",
    Application: "SMAW welding, fabrication workshops, site welding",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Classification: "200A / 300A / 400A / 600A rated",
    Features: "Spring-loaded jaw, fully insulated, twist-lock grip",
    Applications: ["SMAW Welding", "Fabrication Workshops", "Site Welding", "Maintenance"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Earth Clamp",
    "Product Name": "Brass Earth Clamp — 300A / 500A / 600A",
    Description:
      "Premium brass earth clamps with heavy-duty spring mechanism for secure workpiece grounding. Large contact area ensures low resistance and consistent arc stability across all welding processes.",
    Material: "Forged Brass Body, Steel Spring",
    Standards: "IS 9968, EN 60974-12",
    Application: "All welding processes — SMAW, MIG, TIG",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Classification: "300A / 500A / 600A rated",
    Features: "Wide jaw opening (up to 60 mm), serrated grip teeth",
    Applications: ["All Welding", "Heavy Fabrication", "Shipbuilding", "Pipeline"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "MIG Torch Consumables",
    "Product Name": "MIG Torch Contact Tips, Nozzles & Liners",
    Description:
      "Precision-machined copper contact tips, brass gas nozzles, diffusers, and wire liners for all major MIG torch brands. Compatible with MB15, MB25, MB36, and Binzel-type torches.",
    Material: "Copper (Tips), Brass (Nozzles), Steel (Liners)",
    Standards: "EN 60974",
    Application: "MIG/MAG torch maintenance and consumable replacement",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Classification: "Contact Tips: 0.8 / 1.0 / 1.2 / 1.6 mm",
    Packaging: "Packs of 10 tips / 5 nozzles",
    Applications: ["MIG Welding", "Robotic Welding", "Workshop", "Production Lines"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Gas Regulator",
    "Product Name": "Gas Regulator & Flow Meter — Argon / CO₂",
    Description:
      "Single and dual-stage gas regulators for Argon, CO₂, and mixed shielding gases. Pre-set and adjustable flow meters with brass body and SS internals for precise gas control in MIG/TIG welding.",
    Material: "Brass Body, Stainless Steel Internals",
    Standards: "IS 6901, EN ISO 2503",
    Application: "Gas supply regulation for MIG/TIG welding, gas cutting, brazing",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Classification: "Argon / CO₂ / Mixed Gas / Oxygen Regulators",
    Features: "Dual gauge (inlet + outlet), safety relief valve",
    Applications: ["MIG Welding", "TIG Welding", "Gas Cutting", "Brazing"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Chipping Hammer",
    "Product Name": "Welding Chipping Hammer — Spring Handle",
    Description:
      "Forged steel chipping hammer with spring-loaded handle to absorb shock and reduce welder fatigue. Double chisel-pointed head for effective slag removal after SMAW and FCAW welding.",
    Material: "Forged Steel Head, Spring Steel Handle",
    Standards: "IS 4506",
    Application: "Slag removal, weld cleaning, fabrication workshops",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Weight: "350 g / 500 g",
    Features: "Spring handle (anti-vibration), double chisel head",
    Applications: ["SMAW Welding", "FCAW Welding", "Workshop", "Maintenance"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Wire Brush",
    "Product Name": "Welding Wire Brush — SS / Carbon Steel",
    Description:
      "Industrial wire brushes with stainless steel or carbon steel bristles for cleaning weld seams, removing scale, and surface preparation. Wooden or plastic ergonomic handle for comfortable grip.",
    Material: "SS / Carbon Steel Bristles, Wooden Handle",
    Standards: "IS 2647",
    Application: "Weld cleaning, surface preparation, rust removal",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Features: "4-row / 6-row bristle configuration, ergonomic handle",
    Packaging: "Pack of 12 / 24",
    Applications: ["Weld Cleaning", "Surface Prep", "Rust Removal", "Maintenance"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Electrode Oven",
    "Product Name": "Electrode Drying & Holding Oven — 50 kg / 100 kg",
    Description:
      "Thermostatically controlled electrode baking and holding oven for removing moisture from low-hydrogen and SS electrodes. Digital temperature controller with uniform heat distribution up to 400 °C.",
    Material: "Mild Steel Body, SS Inner Chamber",
    Standards: "IS 5765, AWS D1.1",
    Application: "Electrode storage, low-hydrogen electrode baking",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Capacity: "50 kg / 100 kg / 200 kg electrode capacity",
    Power: "230 V AC, 1.5 kW / 3 kW",
    Features: "Digital temp controller, uniform heat, adjustable trays",
    Applications: ["Pressure Vessel Fabrication", "Pipeline", "Structural", "Shipbuilding"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },
  {
    Category: "Accessories",
    "Sub-Category": "Cable Lug",
    "Product Name": "Welding Cable Lugs — Copper / Aluminium",
    Description:
      "Heavy-duty copper and aluminium cable lugs for secure, low-resistance cable terminations on welding machines. Available in crimp and bolt-type variants for cable sizes from 16 mm² to 120 mm².",
    Material: "Electrolytic Copper / Aluminium",
    Standards: "IS 8309, IEC 61238",
    Application: "Welding cable termination, machine connections",
    thumbnail: SITE_IMAGES.welding.misc.electrodeHolderClamp,
    Classification: "16 / 25 / 35 / 50 / 70 / 95 / 120 mm²",
    Features: "Tin-plated option, crimp or bolt-type, double-hole variants",
    Packaging: "Pack of 10 / 25 / 50",
    Applications: ["Welding Machines", "Power Distribution", "Industrial Wiring"],
    applicationImage: SITE_IMAGES.welding.misc.electrodeHolderClamp,
  },

  /* ═══════════════════════════════════════════════════════════════
     PPE (Personal Protective Equipment)
     ═══════════════════════════════════════════════════════════════ */

  {
    Category: "PPE",
    "Sub-Category": "Welding Helmet",
    "Product Name": "Auto-Darkening Welding Helmet — DIN 9–13",
    Description:
      "Professional auto-darkening welding helmet with variable shade range DIN 9–13. Electronic sensors darken the lens within 1/25,000 seconds on arc strike. Solar + battery powered with grind mode for versatility.",
    Material: "High-Impact Nylon Shell, LCD Auto-Darkening Lens",
    Standards: "ANSI Z87.1, EN 379, IS 1179",
    Application: "SMAW, MIG, TIG, plasma cutting, grinding",
    thumbnail: SITE_IMAGES.welding.misc.weldingHelmet,
    Protection: "UV/IR DIN 16 permanent protection, Variable shade DIN 9–13",
    Features: "Solar + CR2032 battery, adjustable sensitivity & delay, grind mode",
    Weight: "450 g (approx.)",
    Applications: ["All Welding Processes", "Plasma Cutting", "Grinding", "Gouging"],
    applicationImage: SITE_IMAGES.welding.misc.weldingHelmet,
  },
  {
    Category: "PPE",
    "Sub-Category": "Welding Gloves",
    "Product Name": "Heavy-Duty Leather Welding Gauntlets",
    Description:
      "Premium split leather welding gloves with reinforced palm, thumb, and index finger for maximum heat and spatter resistance. Cotton-lined for comfort during extended welding sessions. 14″ / 16″ gauntlet length.",
    Material: "Split Cowhide Leather, Cotton Lining",
    Standards: "EN 12477, EN 388, EN 407, IS 2573",
    Application: "MIG, SMAW, gas cutting, heavy fabrication",
    thumbnail: SITE_IMAGES.welding.misc.weldingGlovesApron,
    Protection: "Heat resistance up to 250 °C, spark & spatter protection",
    Features: "Reinforced palm & thumb, Kevlar stitching, 14″/16″ gauntlet",
    Applications: ["MIG Welding", "SMAW Welding", "Gas Cutting", "Heavy Fabrication"],
    applicationImage: SITE_IMAGES.welding.misc.weldingGlovesApron,
  },
  {
    Category: "PPE",
    "Sub-Category": "Welding Apron",
    "Product Name": "Full-Length Leather Welding Apron — 24″ × 36″",
    Description:
      "Heavy-duty split leather welding apron with adjustable neck strap and waist ties. Provides torso and upper leg protection from heat, sparks, and molten metal splatter during welding and cutting operations.",
    Material: "Split Cowhide Leather (1.2 mm thick)",
    Standards: "EN ISO 11611, IS 6153",
    Application: "All welding & cutting processes, grinding",
    thumbnail: SITE_IMAGES.welding.misc.weldingGlovesApron,
    Protection: "Heat, spark & spatter protection for torso and legs",
    Features: "Adjustable neck strap, waist ties, reinforced edges",
    Applications: ["Welding", "Cutting", "Grinding", "Fabrication Workshops"],
    applicationImage: SITE_IMAGES.welding.misc.weldingGlovesApron,
  },
  {
    Category: "PPE",
    "Sub-Category": "Safety Goggles",
    "Product Name": "Welding Safety Goggles — DIN 5 / Clear",
    Description:
      "Impact-resistant polycarbonate safety goggles for use under welding helmets or during gas cutting, grinding, and chipping. DIN 5 shade for gas welding; clear lens for grinding and general workshop use.",
    Material: "Polycarbonate Lens, PVC Frame",
    Standards: "ANSI Z87.1, EN 166, IS 5983",
    Application: "Gas welding, grinding, chipping, workshop safety",
    thumbnail: SITE_IMAGES.welding.misc.safetyGogglesShoes,
    Protection: "Impact rated (F / B grade), UV 400 protection",
    Features: "Anti-fog coating, indirect ventilation, flip-up lens option",
    Applications: ["Gas Welding", "Grinding", "Chipping", "Workshop Safety"],
    applicationImage: SITE_IMAGES.welding.misc.safetyGogglesShoes,
  },
  {
    Category: "PPE",
    "Sub-Category": "Safety Shoes",
    "Product Name": "Fire-Resistant Steel Toe Safety Boots",
    Description:
      "Industrial safety boots with steel toe cap (200 J impact), heat-resistant sole (up to 300 °C), and fire-resistant upper. Anti-slip, oil-resistant outsole for workshop and fabrication environments.",
    Material: "Full Grain Leather Upper, PU/Rubber Sole, Steel Toe Cap",
    Standards: "IS 15298 Part 2, EN ISO 20345 S3",
    Application: "Welding workshops, fabrication, construction sites",
    thumbnail: SITE_IMAGES.welding.misc.safetyGogglesShoes,
    Protection: "Steel toe 200 J impact, heat-resistant sole 300 °C, anti-static",
    Features: "Anti-slip outsole, oil & acid resistant, steel midsole",
    Weight: "1.2 kg / pair (approx.)",
    Applications: ["Welding Workshops", "Fabrication", "Construction", "Heavy Industry"],
    applicationImage: SITE_IMAGES.welding.misc.safetyGogglesShoes,
  },
  {
    Category: "PPE",
    "Sub-Category": "Welding Respirator",
    "Product Name": "Half-Face Welding Respirator — P2 / A1 Filters",
    Description:
      "Reusable half-face respirator with dual-cartridge system for protection against welding fumes, metal oxide particles, and organic vapours. Silicone face seal with adjustable head straps for all-day comfort.",
    Material: "Silicone Face Piece, Activated Carbon + HEPA Filters",
    Standards: "EN 140, EN 143 (P2), IS 9473",
    Application: "Welding, cutting, grinding, spray painting, confined spaces",
    thumbnail: SITE_IMAGES.welding.misc.safetyGogglesShoes,
    Protection: "P2 particulate (99% filtration) + A1 organic vapour",
    Features: "Dual cartridge, low breathing resistance, replaceable filters",
    Applications: ["Welding Fumes", "Grinding Dust", "Spray Painting", "Confined Spaces"],
    applicationImage: SITE_IMAGES.welding.misc.safetyGogglesShoes,
  },

  /* ═══════════════════════════════════════════════════════════════
     WELDING (MACHINES)
     ═══════════════════════════════════════════════════════════════ */

  {
    Category: "Welding",
    "Sub-Category": "ARC Welding Machine",
    "Product Name": "Inverter ARC Welding Machine — 200A / 400A",
    Description:
      "IGBT inverter-based ARC (MMA/Stick) welding machine for industrial fabrication and site work. Stable arc with hot-start, anti-stick, and arc-force functions. Compact, portable design with wide input voltage tolerance.",
    Material: "IGBT Inverter Module, Steel Chassis",
    Standards: "IS 9806, EN 60974-1, CE Certified",
    Application: "Structural fabrication, maintenance, repair, construction",
    thumbnail: SITE_IMAGES.welding.misc.arcWeldingMachine,
    Power: "220 V / 415 V AC, Single/Three Phase",
    Capacity: "200A @ 60% duty cycle / 400A @ 60% duty cycle",
    Current: "20 A – 400 A adjustable, DC output",
    Features: "Hot start, anti-stick, arc force, digital display, VRD safety",
    Weight: "8 kg (200A) / 22 kg (400A)",
    Applications: ["Structural Fabrication", "Maintenance & Repair", "Construction", "Shipbuilding"],
    applicationImage: SITE_IMAGES.welding.misc.arcWeldingMachine,
  },
  {
    Category: "Welding",
    "Sub-Category": "MIG Welding Machine",
    "Product Name": "MIG / MAG Welding Machine — 250A / 400A / 500A",
    Description:
      "Industrial IGBT-based MIG/MAG welding machine with built-in wire feeder and synergic control. Supports solid wire, flux-cored wire, and aluminium welding. Dual MIG + MMA functionality for maximum versatility.",
    Material: "IGBT Inverter Module, Steel Chassis",
    Standards: "IS 9806, EN 60974-1, CE Certified",
    Application: "Automotive, sheet metal, structural steel, production welding",
    thumbnail: SITE_IMAGES.welding.misc.migWeldingMachine,
    Power: "415 V AC, Three Phase",
    Capacity: "250A / 400A / 500A models available",
    Current: "30 A – 500 A adjustable, DC output",
    Features: "Synergic control, 2T/4T mode, built-in wire feeder, MIG+MMA dual mode",
    Weight: "45 kg (250A) / 85 kg (500A)",
    Diameter: "Wire: 0.8 – 1.6 mm solid, 0.8 – 2.0 mm flux cored",
    Applications: ["Automotive", "Sheet Metal", "Structural Steel", "Production Lines"],
    applicationImage: SITE_IMAGES.welding.misc.migWeldingMachine,
  },
  {
    Category: "Welding",
    "Sub-Category": "TIG Welding Machine",
    "Product Name": "AC/DC TIG Welding Machine — 200A / 315A / 500A",
    Description:
      "Professional AC/DC TIG (GTAW) welding machine with pulse capability for precision welding of stainless steel, aluminium, and exotic alloys. HF start, pre/post-flow gas control, and programmable weld profiles.",
    Material: "IGBT/MOSFET Inverter, Steel Chassis",
    Standards: "IS 9806, EN 60974-1, CE Certified",
    Application: "Pharma piping, aerospace, automotive, precision fabrication",
    thumbnail: SITE_IMAGES.welding.misc.tigWeldingMachine,
    Power: "220 V / 415 V AC, Single/Three Phase",
    Capacity: "200A / 315A / 500A models available",
    Current: "5 A – 500 A adjustable, AC/DC output",
    Features: "Pulse TIG, HF start, AC balance, pre/post-flow, memory profiles, TIG+MMA",
    Weight: "15 kg (200A) / 55 kg (500A)",
    Applications: ["Pharma Piping", "Aerospace", "Automotive", "Precision Fabrication"],
    applicationImage: SITE_IMAGES.welding.misc.tigWeldingMachine,
  },
  {
    Category: "Welding",
    "Sub-Category": "Multi-Process Machine",
    "Product Name": "Multi-Process Welding Machine — MIG / TIG / MMA",
    Description:
      "All-in-one multi-process welding machine combining MIG, TIG, and MMA (Stick) capabilities in a single compact unit. Ideal for workshops requiring flexibility across processes and materials without multiple machines.",
    Material: "IGBT Inverter Module, Steel Chassis",
    Standards: "IS 9806, EN 60974-1, CE Certified",
    Application: "Multi-material workshops, maintenance, training centres, fabrication",
    thumbnail: SITE_IMAGES.welding.misc.migWeldingMachine,
    Power: "415 V AC, Three Phase",
    Capacity: "200A / 350A / 500A models available",
    Current: "10 A – 500 A adjustable",
    Features: "3-in-1 (MIG + TIG + MMA), synergic wire feed, HF TIG start, digital panel",
    Weight: "50 kg (200A) / 95 kg (500A)",
    Applications: ["Multi-Material Workshops", "Maintenance", "Training Centres", "Fabrication"],
    applicationImage: SITE_IMAGES.welding.misc.migWeldingMachine,
  },
];

/* ── Categories (Vertical Navigation) ───────────────────────────── */

export const CATEGORIES = [
  { key: "consumables", label: "Consumables",  icon: "whatshot",                match: "Consumables" },
  { key: "cutting",     label: "Cutting",      icon: "content_cut",            match: "Cutting" },
  { key: "accessories", label: "Accessories",   icon: "build",                  match: "Accessories" },
  { key: "ppe",         label: "PPE",           icon: "shield",                 match: "PPE" },
  { key: "welding",     label: "Welding",       icon: "precision_manufacturing", match: "Welding" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

/* ── Spec Fields ────────────────────────────────────────────────── */

export const SPEC_FIELDS: { key: keyof WeldingProduct; label: string; icon: string }[] = [
  { key: "Sub-Category",   label: "Sub-Category",    icon: "category" },
  { key: "Material",       label: "Material",        icon: "diamond" },
  { key: "Classification", label: "Classification",  icon: "label" },
  { key: "Standards",      label: "Standards",       icon: "verified" },
  { key: "Diameter",       label: "Diameter / Size", icon: "straighten" },
  { key: "Length",         label: "Length",           icon: "straighten" },
  { key: "Packaging",     label: "Packaging",       icon: "inventory_2" },
  { key: "Current",       label: "Current / Output", icon: "bolt" },
  { key: "Position",      label: "Weld Position",   icon: "swap_vert" },
  { key: "ShieldingGas",  label: "Shielding Gas",   icon: "air" },
  { key: "Coating",       label: "Coating / Flux",  icon: "auto_awesome" },
  { key: "Composition",   label: "Composition",     icon: "science" },
  { key: "Application",   label: "Application",     icon: "factory" },
  { key: "Power",         label: "Power Supply",    icon: "electrical_services" },
  { key: "Capacity",      label: "Capacity",        icon: "speed" },
  { key: "Protection",    label: "Protection",      icon: "security" },
  { key: "Weight",        label: "Weight",          icon: "scale" },
  { key: "Features",      label: "Key Features",    icon: "star" },
];

/* ── QA Items (Quality Assurance Banner) ────────────────────────── */

export const QA_ITEMS = [
  { icon: "verified",       title: "Internationally Certified",       desc: "Full compliance and batch traceability to ASME, AWS, EN, ISO, and BOHS standards." },
  { icon: "precision_manufacturing", title: "Mega-Project Grade",  desc: "High-integrity metallurgy engineered for demanding offshore and heavy fabrication environments." },
  { icon: "local_shipping", title: "Global Deployment",        desc: "Borderless logistics with project-direct dispatch across Europe, Middle East, and Africa." },
  { icon: "support_agent",  title: "Transnational Engineering",         desc: "Deployable NDT/NDE technicians and specialized metallurgical support worldwide." },
];

/* ── Interactive Catalog Data ────────────────────────── */

export type CatalogSubCategory = {
  id: string;
  label: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  image: string;
  description: string;
  specs: Record<string, string>;
};

export type CatalogCategoryData = {
  categoryId: string;
  title: string;
  subCategories: CatalogSubCategory[];
  products: Record<string, CatalogProduct[]>; // Maps subCategoryId to its array of products
};

export const CATALOG_DATA: Record<string, CatalogCategoryData> = {
  consumables: {
    categoryId: "consumables",
    title: "Consumables",
    subCategories: [
      { id: "mig-tig", label: "MIG Wire and TIG Cut Lengths" },
      { id: "stick", label: "Stick Electrodes" },
      { id: "gas-flux", label: "Gas Shielded Flux-Cored" },
      { id: "self-flux", label: "Self Shielded Flux Cored" },
      { id: "sub-arc", label: "Submerged Arc" },
      { id: "stainless", label: "Stainless Alloys" },
    ],
    products: {
      "mig-tig": [
        {
          id: "mig-1",
          name: "Metallo MIG-70S",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
          description: "Premium ER70S-6 solid wire for general fabrication and robotic welding. Offers high deposition efficiency and excellent feedability.",
          specs: { Classification: "AWS A5.18 ER70S-6", Diameter: "0.8mm - 1.6mm", ShieldingGas: "CO2 / Argon Mix" }
        },
        {
          id: "tig-1",
          name: "Metallo TIG-316L",
          image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
          description: "Low carbon, stainless steel TIG rod for maximum corrosion resistance in marine and chemical environments.",
          specs: { Classification: "AWS A5.9 ER316L", Length: "1000mm", Material: "Stainless Steel" }
        }
      ],
      "stick": [
        {
          id: "stick-1",
          name: "Metallo E7018-1 H4R",
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
          description: "Low hydrogen stick electrode for offshore and heavy structural steel. Provides exceptional low-temperature impact toughness.",
          specs: { Classification: "AWS A5.1 E7018-1 H4R", Position: "All Positions", Current: "DC+ / AC" }
        }
      ],
      "gas-flux": [
        {
          id: "gas-flux-1",
          name: "Metallo FluxCore-71T",
          image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
          description: "Rutile flux-cored wire for high-speed single or multi-pass welding with a smooth arc and low spatter.",
          specs: { Classification: "AWS A5.20 E71T-1C", Position: "All Positions", ShieldingGas: "100% CO2" }
        }
      ],
      "self-flux": [],
      "sub-arc": [],
      "stainless": [],
    }
  },
  automation: {
    categoryId: "automation",
    title: "Automation",
    subCategories: [
      { id: "robotic-systems", label: "Robotic Welding Systems" },
      { id: "collab-systems", label: "Collaborative Robotic Systems" },
      { id: "mechanized", label: "Mechanized Automation" },
      { id: "robotic-laser", label: "Robotic Laser Systems" },
      { id: "positioners", label: "Positioners" },
      { id: "auto-cutting", label: "Automated Cutting Systems" },
      { id: "inspection", label: "Part Inspection & Quality Control" },
      { id: "grinding", label: "Robotic Grinding Systems" },
    ],
    products: {
      "robotic-systems": [
        {
          id: "robo-1",
          name: "Metallo AutoCell-600",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
          description: "Turnkey robotic welding cell integrated with advanced pulse tracking and fume extraction.",
          specs: { Payload: "10kg - 25kg", Reach: "1440mm - 2000mm", "Integration": "Plug & Play" }
        }
      ],
      "collab-systems": [],
      "mechanized": [],
      "robotic-laser": [],
      "positioners": [],
      "auto-cutting": [],
      "inspection": [],
      "grinding": [],
    }
  },
  accessories: {
    categoryId: "accessories",
    title: "Accessories & Tools",
    subCategories: [
      { id: "equip-acc", label: "Equipment Accessories" },
      { id: "cutting-acc", label: "Cutting Accessories" },
      { id: "gun-torch", label: "Gun & Torch Accessories" },
      { id: "helmet-acc", label: "Helmet Accessories" },
      { id: "mech-acc", label: "Mechanized Automation Accessories" },
      { id: "robo-acc", label: "Robotic Automation Accessories" },
      { id: "fume-acc", label: "Weld Fume Accessories" },
      { id: "tools", label: "Tools & Wire Delivery" },
    ],
    products: {
      "gun-torch": [
        {
          id: "gun-1",
          name: "Metallo ProGrip MIG Torch",
          image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
          description: "Heavy-duty 400A air-cooled MIG torch with ergonomic handle and premium cable assembly.",
          specs: { Amperage: "400A", Cooling: "Air Cooled", Length: "3m / 4m / 5m" }
        }
      ],
      "equip-acc": [],
      "cutting-acc": [],
      "helmet-acc": [],
      "mech-acc": [],
      "robo-acc": [],
      "fume-acc": [],
      "tools": [],
    }
  },
  safety: {
    categoryId: "safety",
    title: "Safety & PPE",
    subCategories: [
      { id: "hand-body", label: "Hand, Body and Arm" },
      { id: "respiratory", label: "Personal Respiratory Protection" },
      { id: "fume", label: "Weld Fume Control" },
      { id: "head-face", label: "Head, Face and Eye" },
      { id: "bags", label: "Safety Gear Bags" },
      { id: "booths", label: "Weld Booths" },
    ],
    products: {
      "head-face": [
        {
          id: "helmet-1",
          name: "Metallo VisionPro Auto-Darkening",
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
          description: "True-color 4-sensor auto-darkening welding helmet with ultra-fast switching time and panoramic view.",
          specs: { "Optical Class": "1/1/1/1", Shade: "DIN 5-13", "Switch Time": "1/25,000s" }
        }
      ],
      "respiratory": [
        {
          id: "papr-1",
          name: "Metallo PAPR Shield",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80",
          description: "Powered Air Purifying Respirator system integrated into a heavy-duty welding helmet for maximum protection.",
          specs: { Battery: "8-10 Hours", Filtration: "TH3 P R SL", Flow: "170-210 L/min" }
        }
      ],
      "hand-body": [],
      "fume": [],
      "bags": [],
      "booths": [],
    }
  }
};
