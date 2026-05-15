/* ═══════════════════════════════════════════════════════════════
   METALLO FILLER METALS CATALOG DATA
   Comprehensive product data for Welding Consumables
   ═══════════════════════════════════════════════════════════════ */

import { GAS_SHIELDED_PRODUCTS, SUBMERGED_ARC_PRODUCTS, STAINLESS_PRODUCTS, NICKEL_PRODUCTS } from "./fillerMetalsBatch2";
import { HARDFACING_PRODUCTS, ALUMINUM_PRODUCTS, CHROME_MOLY_PRODUCTS } from "./fillerMetalsBatch3";

export interface ConformanceEntry {
  org: string;
  standard: string;
  classification: string;
}

export interface MechPropEntry {
  condition: string;
  yieldStrength: string;
  tensileStrength: string;
  elongation: string;
  cvn?: string;
}

export interface OperatingProcEntry {
  diameter: string;
  transferMode?: string;
  shieldingGas?: string;
  wireSpeed?: string;
  voltage: string;
  current: string;
  polarity?: string;
}

export interface FillerMetalProduct {
  id: string;
  name: string;
  classification: string;
  description: string;
  features?: string[];
  image: string;
  conformance: ConformanceEntry[];
  mechanicalProperties: MechPropEntry[];
  wireComposition: Record<string, string>;
  operatingProcedures: OperatingProcEntry[];
  applications?: string[];
}

export interface FillerMetalSubCategory {
  id: string;
  label: string;
  products: FillerMetalProduct[];
}

export interface FillerMetalCategory {
  id: string;
  label: string;
  subCategories: FillerMetalSubCategory[];
}

/* ── CATEGORY 1: MIG Wires & TIG Cut Lengths ──────────────────── */

const MIG_TIG_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-mig-70s6",
    name: "Metallo MIG-70S6",
    classification: "AWS A5.18: ER70S-6",
    description: "Premium copper-coated MIG wire engineered for high-integrity general fabrication and robotic welding. Delivers superior feedability, minimal spatter, and excellent bead profile on medium to heavy mill scale plate.",
    features: ["Excellent arc stability in CO2 and mixed gas", "Low spatter for reduced post-weld cleanup", "High deposition efficiency"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA, 3YSA H5" },
      { org: "CWB", standard: "CSA W48", classification: "B-G 49A 3 C1 S6" },
      { org: "DNV", standard: "Rules Pt.2 Ch.4", classification: "III YMS" },
      { org: "LR", standard: "Rules Pt.5 Ch.6", classification: "3YS" },
    ],
    mechanicalProperties: [
      { condition: "100% CO₂", yieldStrength: "420 MPa (61 ksi)", tensileStrength: "530 MPa (77 ksi)", elongation: "27%", cvn: "43 J @ -30°C" },
      { condition: "75/25 Ar/CO₂", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "550 MPa (80 ksi)", elongation: "29%", cvn: "121 J @ -30°C" },
    ],
    wireComposition: { C: "0.07-0.10", Mn: "1.41-1.58", Si: "0.80-0.98", P: "0.010", S: "0.012", Cu: "0.18" },
    operatingProcedures: [
      { diameter: "0.8 mm", transferMode: "Short Circuit", shieldingGas: "100% CO₂", wireSpeed: "2.5-10.2 m/min", voltage: "16-22V", current: "40-180A" },
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "100% CO₂", wireSpeed: "2.5-10.2 m/min", voltage: "18-22V", current: "65-190A" },
      { diameter: "1.0 mm", transferMode: "Short Circuit", shieldingGas: "100% CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "18-21V", current: "80-200A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-16.5 m/min", voltage: "25-33V", current: "200-400A" },
    ],
    applications: ["Structural Steel", "Shipbuilding", "Heavy Equipment", "General Fabrication"],
  },
  {
    id: "metallo-mig-75",
    name: "Metallo MIG-75",
    classification: "AWS A5.28: ER80S-Ni1",
    description: "Low alloy MIG wire with 1% Nickel for enhanced low-temperature impact toughness. Designed for pressure vessel, offshore, and structural applications requiring -40°C service.",
    features: ["Superior -40°C impact properties", "Excellent weldability in all positions", "Low hydrogen deposit"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y40 H5" },
      { org: "CWB", standard: "CSA W48", classification: "B-G 55A 1 U N1" },
      { org: "DNV", standard: "Rules", classification: "III Y40MS" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "475 MPa (69 ksi)", tensileStrength: "570 MPa (83 ksi)", elongation: "26%", cvn: "88 J @ -40°C" },
    ],
    wireComposition: { C: "0.07", Mn: "1.30", Si: "0.50", Ni: "0.88", P: "0.008", S: "0.010" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "18-21V", current: "65-175A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-14.0 m/min", voltage: "25-32V", current: "200-380A" },
    ],
    applications: ["Offshore Structures", "Pressure Vessels", "Low-Temperature Service", "Shipbuilding"],
  },
  {
    id: "metallo-mig-90",
    name: "Metallo MIG-90",
    classification: "AWS A5.28: ER90S-D2",
    description: "High-strength low alloy MIG wire for 620 MPa (90 ksi) tensile class joints. Provides excellent mechanical properties for heavy construction and mining equipment.",
    features: ["90 ksi tensile strength deposits", "All position capability", "Low hydrogen H4 designation"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "4YH5" },
      { org: "DNV", standard: "Rules", classification: "IV Y50MS H5" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/CO₂", yieldStrength: "560 MPa (81 ksi)", tensileStrength: "640 MPa (93 ksi)", elongation: "22%", cvn: "47 J @ -51°C" },
    ],
    wireComposition: { C: "0.08", Mn: "1.70", Si: "0.60", Mo: "0.45", P: "0.010", S: "0.010" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "95/5 Ar/CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "18-21V", current: "60-180A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "95/5 Ar/CO₂", wireSpeed: "5.1-14.0 m/min", voltage: "24-32V", current: "200-380A" },
    ],
    applications: ["Heavy Construction", "Mining Equipment", "High-Strength Structural", "Bridge Fabrication"],
  },
  {
    id: "metallo-mig-100",
    name: "Metallo MIG-100",
    classification: "AWS A5.28: ER100S-G",
    description: "Ultra-high-strength MIG wire for 690 MPa (100 ksi) tensile applications. Engineered for critical military, aerospace, and high-performance structural joints.",
    features: ["100 ksi minimum tensile", "Exceptional notch toughness", "Low diffusible hydrogen"],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "MIL", standard: "MIL-E-23765/2E", classification: "MIL-100S-1" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/CO₂", yieldStrength: "640 MPa (93 ksi)", tensileStrength: "720 MPa (104 ksi)", elongation: "19%", cvn: "61 J @ -51°C" },
    ],
    wireComposition: { C: "0.08", Mn: "1.65", Si: "0.55", Ni: "1.50", Cr: "0.10", Mo: "0.35" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/CO₂", wireSpeed: "3.0-7.6 m/min", voltage: "18-21V", current: "60-175A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/CO₂", wireSpeed: "5.1-12.7 m/min", voltage: "25-31V", current: "200-370A" },
    ],
    applications: ["Military Vehicles", "Aerospace", "High-Performance Structural", "Armor Plate"],
  },
  {
    id: "metallo-glide-s6",
    name: "Metallo Glide S6",
    classification: "AWS A5.18: ER70S-6",
    description: "Surface-engineered copper-free MIG wire with proprietary surface treatment for ultra-smooth feeding. Eliminates copper flaking in robotic and high-speed automated systems.",
    features: ["Copper-free surface technology", "Superior feedability in long conduits", "Reduced tip wear"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA" },
      { org: "CWB", standard: "CSA W48", classification: "B-G 49A 3 C1 S6" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "540 MPa (78 ksi)", elongation: "29%", cvn: "100 J @ -29°C" },
    ],
    wireComposition: { C: "0.08", Mn: "1.48", Si: "0.85", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "17-21V", current: "60-180A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-16.5 m/min", voltage: "25-33V", current: "200-400A" },
    ],
    applications: ["Robotic Welding", "Automated Systems", "High-Speed Production", "Automotive"],
  },
  {
    id: "metallo-hd-c",
    name: "Metallo UltraCore HD-C",
    classification: "AWS A5.18: E70C-6M H4",
    description: "High-deposition metal-cored wire optimized for 100% CO₂ shielding gas. Delivers spray-like transfer characteristics and high travel speeds in CO₂ environments.",
    features: ["Optimized for 100% CO₂", "High deposition rates", "Minimal spatter", "All position capability"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA H5" },
      { org: "DNV", standard: "Rules", classification: "III YMS H10" },
    ],
    mechanicalProperties: [
      { condition: "100% CO₂", yieldStrength: "440 MPa (64 ksi)", tensileStrength: "530 MPa (77 ksi)", elongation: "28%", cvn: "80 J @ -30°C" },
    ],
    wireComposition: { C: "0.05", Mn: "1.45", Si: "0.70", P: "0.012", S: "0.008" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% CO₂", wireSpeed: "7.6-16.5 m/min", voltage: "26-34V", current: "220-450A" },
      { diameter: "1.4 mm", transferMode: "Spray", shieldingGas: "100% CO₂", wireSpeed: "5.1-14.0 m/min", voltage: "26-34V", current: "250-500A" },
    ],
    applications: ["Shipbuilding", "Heavy Fabrication", "Structural Steel", "Bridge Construction"],
  },
  {
    id: "metallo-mig-59",
    name: "Metallo MIG-59",
    classification: "AWS A5.18: ER70S-6",
    description: "Economy-grade copper-coated solid MIG wire for light to medium fabrication. Provides reliable performance at competitive pricing for non-critical applications.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [],
    mechanicalProperties: [
      { condition: "100% CO₂", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "510 MPa (74 ksi)", elongation: "25%" },
    ],
    wireComposition: { C: "0.08", Mn: "1.50", Si: "0.88", P: "0.015", S: "0.015" },
    operatingProcedures: [
      { diameter: "0.8 mm", transferMode: "Short Circuit", shieldingGas: "100% CO₂", wireSpeed: "2.5-10.2 m/min", voltage: "16-22V", current: "40-180A" },
      { diameter: "1.0 mm", transferMode: "Short Circuit", shieldingGas: "100% CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "18-22V", current: "80-220A" },
    ],
    applications: ["General Fabrication", "Light Structural", "Maintenance", "Training"],
  },
  {
    id: "metallo-copperglide",
    name: "Metallo CopperGlide",
    classification: "AWS A5.18: ER70S-6",
    description: "Premium copper-coated solid wire with micro-polished surface for exceptional arc stability and ultra-low spatter. Ideal for precision robotic cells and high-quality visual welds.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA" },
      { org: "LR", standard: "Rules", classification: "3YS" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "460 MPa (67 ksi)", tensileStrength: "550 MPa (80 ksi)", elongation: "28%", cvn: "95 J @ -29°C" },
    ],
    wireComposition: { C: "0.07", Mn: "1.50", Si: "0.88", P: "0.010", S: "0.008", Cu: "0.20" },
    operatingProcedures: [
      { diameter: "1.0 mm", transferMode: "Short Circuit", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "2.5-8.9 m/min", voltage: "17-22V", current: "70-200A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-16.5 m/min", voltage: "25-33V", current: "200-400A" },
    ],
    applications: ["Precision Robotics", "Automotive", "Visual Quality Welds", "Sheet Metal"],
  },
  {
    id: "metallo-er70s-3",
    name: "Metallo ER70S-3",
    classification: "AWS A5.18: ER70S-3",
    description: "Triple-deoxidized solid MIG wire for welding on clean to lightly oxidized base materials. Lower silicon content produces cleaner weld toes for improved fatigue performance.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "2SA" },
      { org: "CWB", standard: "CSA W48", classification: "B-G 49A 2 C1 S3" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "410 MPa (59 ksi)", tensileStrength: "500 MPa (73 ksi)", elongation: "30%" },
    ],
    wireComposition: { C: "0.08", Mn: "1.15", Si: "0.55", P: "0.010", S: "0.012" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "2.5-7.6 m/min", voltage: "17-21V", current: "60-175A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-16.5 m/min", voltage: "25-33V", current: "200-400A" },
    ],
    applications: ["Clean Base Materials", "Fatigue-Critical Joints", "Pressure Piping", "Nuclear"],
  },
  {
    id: "metallo-tig-316l",
    name: "Metallo TIG-316L",
    classification: "AWS A5.9: ER316L",
    description: "Low-carbon stainless steel TIG rod for maximum corrosion resistance in marine, chemical, and pharmaceutical environments. Extra-low carbon prevents sensitization.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "316L" },
      { org: "ASME", standard: "Section IX", classification: "F-No. 6" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "350 MPa (51 ksi)", tensileStrength: "550 MPa (80 ksi)", elongation: "35%" },
    ],
    wireComposition: { C: "0.03 max", Mn: "1.80", Si: "0.40", Cr: "18.0-20.0", Ni: "11.0-14.0", Mo: "2.0-3.0" },
    operatingProcedures: [
      { diameter: "1.6 mm", polarity: "DCEN", shieldingGas: "100% Argon", voltage: "10-14V", current: "60-130A" },
      { diameter: "2.4 mm", polarity: "DCEN", shieldingGas: "100% Argon", voltage: "10-16V", current: "100-200A" },
    ],
    applications: ["Chemical Processing", "Pharmaceutical", "Marine", "Food & Beverage"],
  },
];

/* ── CATEGORY 2: Stick Electrodes ──────────────────────────────── */

const STICK_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-7018mr",
    name: "Metallo 7018-MR",
    classification: "AWS A5.1: E7018-1 H4R",
    description: "Premium low-hydrogen stick electrode with moisture-resistant coating for critical structural and offshore applications. Provides exceptional low-temperature impact toughness down to -46°C.",
    features: ["Moisture-resistant (H4R) coating", "Exceptional -46°C toughness", "Smooth quiet arc with easy slag removal", "All position capability"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y, 3Y40, 4Y, 4Y40" },
      { org: "CWB", standard: "CSA W48", classification: "E49018-1-H4R" },
      { org: "DNV", standard: "Rules", classification: "III YMS H5" },
      { org: "LR", standard: "Rules", classification: "3, 4" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "440 MPa (64 ksi)", tensileStrength: "530 MPa (77 ksi)", elongation: "30%", cvn: "75 J @ -46°C" },
    ],
    wireComposition: { C: "0.05", Mn: "1.15", Si: "0.45", P: "0.010", S: "0.008", Ni: "0.02", Cr: "0.03", Mo: "0.01" },
    operatingProcedures: [
      { diameter: "2.5 mm", polarity: "DCEP / AC", voltage: "20-22V", current: "70-100A" },
      { diameter: "3.2 mm", polarity: "DCEP / AC", voltage: "21-24V", current: "100-150A" },
      { diameter: "4.0 mm", polarity: "DCEP / AC", voltage: "22-26V", current: "140-200A" },
      { diameter: "5.0 mm", polarity: "DCEP / AC", voltage: "23-28V", current: "180-280A" },
    ],
    applications: ["Offshore Platforms", "Structural Steel", "Pressure Vessels", "Bridge Construction"],
  },
  {
    id: "metallo-7018-h4r",
    name: "Metallo 7018-H4R",
    classification: "AWS A5.1: E7018 H4R",
    description: "Standard low-hydrogen electrode with hermetically sealed moisture-resistant packaging. Delivers consistent X-ray quality welds for code-critical fabrication.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y" },
      { org: "ASME", standard: "SFA 5.1", classification: "E7018" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "430 MPa (62 ksi)", tensileStrength: "520 MPa (75 ksi)", elongation: "28%", cvn: "50 J @ -29°C" },
    ],
    wireComposition: { C: "0.06", Mn: "1.20", Si: "0.50", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "DCEP / AC", voltage: "21-24V", current: "100-145A" },
      { diameter: "4.0 mm", polarity: "DCEP / AC", voltage: "22-26V", current: "140-195A" },
    ],
    applications: ["Code Work", "Structural Fabrication", "General Construction", "Pipe Welding"],
  },
  {
    id: "metallo-6010",
    name: "Metallo 6010",
    classification: "AWS A5.1: E6010",
    description: "Deep-penetration cellulosic electrode for pipeline root passes and open-root groove welds. Fast-freeze slag allows excellent vertical-down welding capability.",
    features: ["Deep penetration", "Fast-freeze slag", "Excellent for vertical-down", "Pipeline root pass standard"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "API", standard: "API 1104", classification: "Approved" },
      { org: "CWB", standard: "CSA W48", classification: "E43010" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "380 MPa (55 ksi)", tensileStrength: "460 MPa (67 ksi)", elongation: "25%" },
    ],
    wireComposition: { C: "0.10", Mn: "0.40", Si: "0.25", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "DCEP", voltage: "24-28V", current: "80-120A" },
      { diameter: "4.0 mm", polarity: "DCEP", voltage: "24-30V", current: "100-170A" },
      { diameter: "5.0 mm", polarity: "DCEP", voltage: "26-32V", current: "140-225A" },
    ],
    applications: ["Pipeline Construction", "Root Pass Welding", "Maintenance & Repair", "Field Welding"],
  },
  {
    id: "metallo-7024",
    name: "Metallo 7024",
    classification: "AWS A5.1: E7024",
    description: "High-deposition iron powder electrode for flat and horizontal fillet welds. Delivers exceptionally high deposition rates with a smooth, self-releasing slag.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.1", classification: "E7024" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "490 MPa (71 ksi)", elongation: "22%" },
    ],
    wireComposition: { C: "0.08", Mn: "0.80", Si: "0.35", P: "0.015", S: "0.012" },
    operatingProcedures: [
      { diameter: "4.0 mm", polarity: "DCEP / AC", voltage: "25-30V", current: "180-250A" },
      { diameter: "5.0 mm", polarity: "DCEP / AC", voltage: "27-33V", current: "250-350A" },
    ],
    applications: ["High-Deposition Fillets", "Flat Position Welding", "Heavy Fabrication", "Structural Steel"],
  },
  {
    id: "metallo-6011",
    name: "Metallo 6011",
    classification: "AWS A5.1: E6011",
    description: "AC/DC cellulosic all-position electrode for field welding and maintenance applications. Provides deep penetration with excellent arc stability on AC power sources.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "CWB", standard: "CSA W48", classification: "E43011" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "370 MPa (54 ksi)", tensileStrength: "450 MPa (65 ksi)", elongation: "24%" },
    ],
    wireComposition: { C: "0.10", Mn: "0.55", Si: "0.28", P: "0.015", S: "0.012" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "DCEP / AC", voltage: "24-28V", current: "80-130A" },
      { diameter: "4.0 mm", polarity: "DCEP / AC", voltage: "24-30V", current: "110-175A" },
    ],
    applications: ["Field Welding", "Maintenance & Repair", "Farm Equipment", "Galvanized Steel"],
  },
  {
    id: "metallo-8018-c3",
    name: "Metallo 8018-C3",
    classification: "AWS A5.5: E8018-C3",
    description: "Low-hydrogen Nickel-bearing electrode for cryogenic service down to -73°C. Designed for LNG storage tanks, cryogenic pressure vessels, and low-temperature structural applications.",
    features: ["Cryogenic service to -73°C", "1% Nickel for toughness", "X-ray quality deposits"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "4Y40" },
      { org: "DNV", standard: "Rules", classification: "IV Y40MS" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "490 MPa (71 ksi)", tensileStrength: "570 MPa (83 ksi)", elongation: "24%", cvn: "55 J @ -73°C" },
    ],
    wireComposition: { C: "0.05", Mn: "0.90", Si: "0.30", Ni: "1.00", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "DCEP", voltage: "22-25V", current: "100-145A" },
      { diameter: "4.0 mm", polarity: "DCEP", voltage: "23-27V", current: "140-200A" },
    ],
    applications: ["LNG Storage Tanks", "Cryogenic Vessels", "Low-Temperature Service", "Offshore Structures"],
  },
  {
    id: "metallo-9018-b3",
    name: "Metallo 9018-B3",
    classification: "AWS A5.5: E9018-B3 H4R",
    description: "Chrome-Moly low-hydrogen electrode for high-temperature creep-resistant service. Designed for power generation, refinery, and petrochemical piping systems operating at elevated temperatures.",
    features: ["2.25Cr-1Mo chemistry", "Creep resistant to 593°C", "Moisture resistant coating"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.5", classification: "E9018-B3" },
    ],
    mechanicalProperties: [
      { condition: "PWHT 690°C/1hr", yieldStrength: "520 MPa (75 ksi)", tensileStrength: "620 MPa (90 ksi)", elongation: "20%", cvn: "40 J @ -29°C" },
    ],
    wireComposition: { C: "0.08", Mn: "0.80", Si: "0.40", Cr: "2.25", Mo: "1.00", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "DCEP", voltage: "22-25V", current: "90-140A" },
      { diameter: "4.0 mm", polarity: "DCEP", voltage: "23-27V", current: "130-190A" },
    ],
    applications: ["Power Generation", "Refinery Piping", "Petrochemical", "High-Temperature Service"],
  },
];

/* ── CATEGORY 3: Metal-Cored Wires ────────────────────────────── */

const METAL_CORED_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-mc6",
    name: "Metallo MetalCore MC-6",
    classification: "AWS A5.18: E70C-6M H4",
    description: "Premium metal-cored wire delivering spray-like transfer with significantly higher deposition rates than solid wire. Engineered for high-speed automated and robotic fabrication.",
    features: ["Up to 30% faster travel speeds vs solid wire", "Low spatter", "Wide operating window", "Excellent gap bridging"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA, 3YSA H5" },
      { org: "CWB", standard: "CSA W48", classification: "E491C-6M-H4" },
      { org: "DNV", standard: "Rules", classification: "III YMS H10" },
      { org: "LR", standard: "Rules", classification: "3YS" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "460 MPa (67 ksi)", tensileStrength: "550 MPa (80 ksi)", elongation: "27%", cvn: "80 J @ -29°C" },
      { condition: "90/10 Ar/CO₂", yieldStrength: "480 MPa (70 ksi)", tensileStrength: "570 MPa (83 ksi)", elongation: "28%", cvn: "110 J @ -29°C" },
    ],
    wireComposition: { C: "0.05", Mn: "1.55", Si: "0.65", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "7.6-19.1 m/min", voltage: "26-35V", current: "220-450A" },
      { diameter: "1.4 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "5.1-15.2 m/min", voltage: "26-35V", current: "250-500A" },
    ],
    applications: ["Robotic Welding", "Heavy Fabrication", "Automotive", "Structural Steel"],
  },
  {
    id: "metallo-mc706",
    name: "Metallo MetalCore MC-706",
    classification: "AWS A5.36: E70C-6M-H4",
    description: "All-position metal-cored wire designed for vertical-up and overhead applications. Delivers fast travel speeds and excellent bead profile in all positions.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y" },
      { org: "CWB", standard: "CSA W48", classification: "E491C-6M-H4" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "540 MPa (78 ksi)", elongation: "26%", cvn: "65 J @ -29°C" },
    ],
    wireComposition: { C: "0.04", Mn: "1.50", Si: "0.60", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Pulsed Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "6.4-12.7 m/min", voltage: "24-32V", current: "180-350A" },
    ],
    applications: ["All Position Welding", "Shipbuilding", "Structural Steel", "Heavy Equipment"],
  },
  {
    id: "metallo-mc80ni1",
    name: "Metallo MetalCore MC-80Ni1",
    classification: "AWS A5.36: E80C-Ni1-H4",
    description: "Low alloy metal-cored wire with 1% Nickel for low-temperature offshore and structural applications requiring enhanced toughness at -40°C and below.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y40" },
      { org: "DNV", standard: "Rules", classification: "III Y40MS" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "500 MPa (73 ksi)", tensileStrength: "590 MPa (86 ksi)", elongation: "24%", cvn: "75 J @ -40°C" },
    ],
    wireComposition: { C: "0.05", Mn: "1.40", Si: "0.50", Ni: "0.90", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", wireSpeed: "7.6-16.5 m/min", voltage: "26-33V", current: "230-420A" },
    ],
    applications: ["Offshore Platforms", "Low-Temperature Service", "Wind Towers", "Arctic Structures"],
  },
];

/* ── CATEGORY 4: Self-Shielded Flux-Cored ─────────────────────── */

const SELF_SHIELDED_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-nr211mp",
    name: "Metallo NR-211MP",
    classification: "AWS A5.20: E71T-11",
    description: "Versatile self-shielded flux-cored wire for all-position welding without external gas. Ideal for outdoor field applications, maintenance, and general-purpose fabrication where portability is critical.",
    features: ["No external shielding gas required", "Excellent for outdoor/windy conditions", "All position capability", "Easy slag removal"],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "CWB", standard: "CSA W48", classification: "E491T-11" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "490 MPa (71 ksi)", elongation: "22%" },
    ],
    wireComposition: { C: "0.30 max", Mn: "0.50 max", Si: "0.30 max", P: "0.015", S: "0.010", Al: "1.60" },
    operatingProcedures: [
      { diameter: "0.8 mm", polarity: "DCEN", voltage: "15-18V", current: "35-100A" },
      { diameter: "0.9 mm", polarity: "DCEN", voltage: "16-20V", current: "50-130A" },
      { diameter: "1.2 mm", polarity: "DCEN", voltage: "17-21V", current: "80-200A" },
    ],
    applications: ["Field Welding", "Maintenance & Repair", "Outdoor Construction", "Farm Equipment"],
  },
  {
    id: "metallo-nr232",
    name: "Metallo NR-232",
    classification: "AWS A5.20: E71T-8 H8",
    description: "All-position self-shielded flux-cored wire for structural steel fabrication. Low hydrogen designation (H8) makes it suitable for code-critical applications where external gas is impractical.",
    features: ["H8 low hydrogen", "All position including vertical-up", "Code-approved for structural", "No gas required"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA" },
      { org: "CWB", standard: "CSA W48", classification: "E491T-8-H8" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "430 MPa (62 ksi)", tensileStrength: "520 MPa (75 ksi)", elongation: "24%", cvn: "27 J @ -29°C" },
    ],
    wireComposition: { C: "0.18", Mn: "0.60", Si: "0.20", Al: "1.30", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "1.8 mm", polarity: "DCEN", voltage: "19-22V", current: "150-250A" },
      { diameter: "2.0 mm", polarity: "DCEN", voltage: "20-23V", current: "175-300A" },
      { diameter: "2.4 mm", polarity: "DCEN", voltage: "21-25V", current: "200-400A" },
    ],
    applications: ["Structural Steel", "Multi-Story Buildings", "Bridge Fabrication", "Field Erection"],
  },
  {
    id: "metallo-nr311",
    name: "Metallo NR-311",
    classification: "AWS A5.20: E70T-7",
    description: "High-deposition self-shielded wire for flat and horizontal heavy plate welding. Delivers maximum deposition rates for thick-section fabrication without external gas.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.20", classification: "E70T-7" },
    ],
    mechanicalProperties: [
      { condition: "As Welded", yieldStrength: "410 MPa (60 ksi)", tensileStrength: "500 MPa (73 ksi)", elongation: "22%" },
    ],
    wireComposition: { C: "0.25", Mn: "0.55", Si: "0.25", Al: "1.50", P: "0.015", S: "0.012" },
    operatingProcedures: [
      { diameter: "2.0 mm", polarity: "DCEN", voltage: "21-24V", current: "200-350A" },
      { diameter: "2.4 mm", polarity: "DCEN", voltage: "22-26V", current: "250-450A" },
    ],
    applications: ["Heavy Plate Fabrication", "Shipbuilding", "Railroad", "Mining Equipment"],
  },
];

export const FILLER_METAL_CATEGORIES: FillerMetalCategory[] = [
  {
    id: "mig-tig",
    label: "MIG Wires & TIG Cut Lengths",
    subCategories: [
      { id: "mig-tig-all", label: "All Products", products: MIG_TIG_PRODUCTS },
    ],
  },
  {
    id: "stick",
    label: "Stick Electrodes",
    subCategories: [
      { id: "stick-all", label: "All Products", products: STICK_PRODUCTS },
    ],
  },
  {
    id: "metal-cored",
    label: "Metal-Cored Wires",
    subCategories: [
      { id: "metal-cored-all", label: "All Products", products: METAL_CORED_PRODUCTS },
    ],
  },
  {
    id: "self-shielded",
    label: "Self-Shielded Flux-Cored",
    subCategories: [
      { id: "self-shielded-all", label: "All Products", products: SELF_SHIELDED_PRODUCTS },
    ],
  },
  {
    id: "gas-shielded",
    label: "Gas Shielded Flux Cored",
    subCategories: [
      { id: "gas-shielded-all", label: "All Products", products: GAS_SHIELDED_PRODUCTS },
    ],
  },
  {
    id: "submerged-arc",
    label: "Submerged Arc",
    subCategories: [
      { id: "submerged-arc-all", label: "All Products", products: SUBMERGED_ARC_PRODUCTS },
    ],
  },
  {
    id: "stainless",
    label: "Stainless Alloys",
    subCategories: [
      { id: "stainless-all", label: "All Products", products: STAINLESS_PRODUCTS },
    ],
  },
  {
    id: "nickel",
    label: "Nickel Alloys",
    subCategories: [
      { id: "nickel-all", label: "All Products", products: NICKEL_PRODUCTS },
    ],
  },
  {
    id: "hardfacing",
    label: "Hardfacing",
    subCategories: [
      { id: "hardfacing-all", label: "All Products", products: HARDFACING_PRODUCTS },
    ],
  },
  {
    id: "aluminum",
    label: "Aluminum MIG & TIG",
    subCategories: [
      { id: "aluminum-all", label: "All Products", products: ALUMINUM_PRODUCTS },
    ],
  },
  {
    id: "chrome-moly",
    label: "Chrome-Moly Alloys",
    subCategories: [
      { id: "chrome-moly-all", label: "All Products", products: CHROME_MOLY_PRODUCTS },
    ],
  },
];
