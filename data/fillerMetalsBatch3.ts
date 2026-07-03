import type { FillerMetalProduct } from "./fillerMetalsData";

export const HARDFACING_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-hf-lincore55",
    name: "Metallo HardCore 55",
    classification: "AWS A5.21: ERCCoCr-A",
    description: "Cobalt-based hardfacing wire depositing 55 HRC for severe metal-to-metal wear, high-temperature erosion, and corrosive environments. Maintains hardness up to 600°C without heat treatment.",
    features: ["55 HRC as-deposited", "Maintains hardness to 600°C", "Corrosion + wear resistant", "No heat treatment required"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.21", classification: "ERCCoCr-A" },
    ],
    mechanicalProperties: [
      { condition: "As Deposited", yieldStrength: "—", tensileStrength: "—", elongation: "—", cvn: "55 HRC" },
    ],
    wireComposition: { Co: "Bal.", Cr: "28.0", W: "4.5", C: "1.10", Ni: "3.0", Fe: "3.0", Si: "1.10", Mn: "0.50" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "26-30V", current: "150-250A" },
      { diameter: "1.6 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "28-33V", current: "200-320A" },
    ],
    applications: ["Valve Seats", "Hot Forging Dies", "Cutting Tools", "Pump Components"],
  },
  {
    id: "metallo-hf-lincore60o",
    name: "Metallo HardCore 60-O",
    classification: "AWS A5.21: ERFeCr-A1",
    description: "Open-arc self-shielded hardfacing wire for high-abrasion applications. Deposits chromium carbide overlay with 58-62 HRC hardness — ideal for earth-moving and mining equipment.",
    features: ["58-62 HRC", "Self-shielded (no gas)", "Excellent abrasion resistance", "Single or multi-layer"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.21", classification: "ERFeCr-A1" },
    ],
    mechanicalProperties: [
      { condition: "As Deposited (2 layers)", yieldStrength: "—", tensileStrength: "—", elongation: "—", cvn: "58-62 HRC" },
    ],
    wireComposition: { Fe: "Bal.", Cr: "28.0", C: "4.50", Mn: "1.50", Si: "1.20", Mo: "1.00" },
    operatingProcedures: [
      { diameter: "1.6 mm", polarity: "DCEP", voltage: "26-30V", current: "200-300A" },
      { diameter: "2.0 mm", polarity: "DCEP", voltage: "28-33V", current: "250-400A" },
    ],
    applications: ["Mining Equipment", "Earth-Moving Blades", "Crusher Hammers", "Dredge Cutters"],
  },
  {
    id: "metallo-hf-lincore40",
    name: "Metallo HardCore 40",
    classification: "AWS A5.21: ERFeMn-A",
    description: "Manganese steel hardfacing wire for impact and moderate abrasion resistance. Work-hardens under impact from 200 HB to 500+ HB — ideal for railroad and heavy impact applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.21", classification: "ERFeMn-A" },
    ],
    mechanicalProperties: [
      { condition: "As Deposited", yieldStrength: "370 MPa (54 ksi)", tensileStrength: "690 MPa (100 ksi)", elongation: "30%", cvn: "200 HB (work-hardens to 500+ HB)" },
    ],
    wireComposition: { Fe: "Bal.", Mn: "14.0", C: "0.70", Cr: "3.50", Ni: "0.50", Si: "0.50" },
    operatingProcedures: [
      { diameter: "1.6 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/CO₂", voltage: "27-32V", current: "200-300A" },
    ],
    applications: ["Railroad Frogs", "Crusher Jaws", "Dipper Teeth", "Impact Wear Parts"],
  },
];

export const ALUMINUM_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-al4043",
    name: "Metallo AlumPro 4043",
    classification: "AWS A5.10: ER4043",
    description: "Silicon-alloyed aluminum MIG/TIG wire for welding 6XXX series aluminum alloys. Provides excellent fluidity, crack resistance, and bright finish. Most widely used aluminum filler metal.",
    features: ["Most popular aluminum filler", "Excellent crack resistance", "Bright weld finish", "Good for anodized applications"],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.10", classification: "ER4043" },
      { org: "ASME", standard: "SFA 5.10", classification: "ER4043" },
      { org: "CWB", standard: "AWS A5.10", classification: "ER4043" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "70 MPa (10 ksi)", tensileStrength: "170 MPa (25 ksi)", elongation: "18%" },
    ],
    wireComposition: { Al: "Bal.", Si: "4.7-6.0", Fe: "0.80 max", Cu: "0.30 max", Mn: "0.05", Mg: "0.05 max", Ti: "0.20 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "100% Argon", voltage: "17-22V", current: "70-160A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "22-28V", current: "135-270A" },
      { diameter: "1.6 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "24-30V", current: "180-350A" },
    ],
    applications: ["Automotive", "Marine", "General Aluminum Fabrication", "HVAC"],
  },
  {
    id: "metallo-al5356",
    name: "Metallo AlumPro 5356",
    classification: "AWS A5.10: ER5356",
    description: "Magnesium-alloyed aluminum wire for welding 5XXX series and some 6XXX series aluminum alloys. Higher strength than 4043 with superior corrosion resistance in marine environments.",
    features: ["Higher strength than 4043", "Superior saltwater corrosion resistance", "Not recommended for anodizing", "Excellent for marine"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.10", classification: "ER5356" },
      { org: "ASME", standard: "SFA 5.10", classification: "ER5356" },
      { org: "ABS", standard: "Part 2", classification: "RA5356" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "120 MPa (17 ksi)", tensileStrength: "260 MPa (38 ksi)", elongation: "20%" },
    ],
    wireComposition: { Al: "Bal.", Mg: "4.5-5.5", Mn: "0.05-0.20", Cr: "0.05-0.20", Ti: "0.06-0.20", Fe: "0.40 max", Si: "0.25 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "100% Argon", voltage: "17-22V", current: "70-160A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "22-28V", current: "135-270A" },
    ],
    applications: ["Marine", "Shipbuilding", "Structural Aluminum", "Transportation"],
  },
  {
    id: "metallo-al5183",
    name: "Metallo AlumPro 5183",
    classification: "AWS A5.10: ER5183",
    description: "High-magnesium aluminum wire for welding 5083, 5086, and 5456 aluminum alloys used in marine and cryogenic applications. Provides superior strength and corrosion resistance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.10", classification: "ER5183" },
      { org: "ABS", standard: "Part 2", classification: "RA5183" },
      { org: "LR", standard: "Rules", classification: "5183" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "130 MPa (19 ksi)", tensileStrength: "275 MPa (40 ksi)", elongation: "18%" },
    ],
    wireComposition: { Al: "Bal.", Mg: "4.3-5.2", Mn: "0.50-1.00", Cr: "0.05-0.25", Ti: "0.15 max", Fe: "0.40 max", Si: "0.40 max" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "22-28V", current: "135-270A" },
      { diameter: "1.6 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "24-30V", current: "180-350A" },
    ],
    applications: ["LNG Tanks", "Marine Structures", "Cryogenic Vessels", "Military Vehicles"],
  },
];

export const CHROME_MOLY_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-cm-b2",
    name: "Metallo ChromMoly B2",
    classification: "AWS A5.28: ER80S-B2",
    description: "1.25Cr-0.5Mo chrome-moly MIG/TIG wire for welding P11 and similar Cr-Mo steels in power generation and refinery service. Provides excellent creep resistance at elevated temperatures up to 538°C.",
    features: ["1.25Cr-0.5Mo chemistry", "Creep resistant to 538°C", "PWHT compatible", "Low hydrogen"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.28", classification: "ER80S-B2" },
      { org: "AWS", standard: "A5.28", classification: "ER80S-B2" },
    ],
    mechanicalProperties: [
      { condition: "PWHT 690°C/1hr", yieldStrength: "460 MPa (67 ksi)", tensileStrength: "560 MPa (81 ksi)", elongation: "22%", cvn: "45 J @ -29°C" },
    ],
    wireComposition: { C: "0.08", Mn: "0.55", Si: "0.40", Cr: "1.25", Mo: "0.50", P: "0.010", S: "0.010" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/CO₂", voltage: "18-22V", current: "70-170A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/CO₂", voltage: "25-31V", current: "200-370A" },
    ],
    applications: ["Power Generation", "Refinery Piping", "Boiler Tubes", "Heat Exchangers"],
  },
  {
    id: "metallo-cm-b3",
    name: "Metallo ChromMoly B3",
    classification: "AWS A5.28: ER90S-B3",
    description: "2.25Cr-1Mo chrome-moly MIG/TIG wire for welding P22 and similar high-temperature steels. Designed for critical refinery and petrochemical applications requiring long-term creep resistance at 593°C.",
    features: ["2.25Cr-1Mo chemistry", "Creep resistant to 593°C", "Hydrogen-controlled deposits", "Excellent PWHT response"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.28", classification: "ER90S-B3" },
    ],
    mechanicalProperties: [
      { condition: "PWHT 690°C/1hr", yieldStrength: "520 MPa (75 ksi)", tensileStrength: "620 MPa (90 ksi)", elongation: "20%", cvn: "40 J @ -18°C" },
    ],
    wireComposition: { C: "0.10", Mn: "0.55", Si: "0.30", Cr: "2.25", Mo: "1.00", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/CO₂", voltage: "18-22V", current: "70-170A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/CO₂", voltage: "25-31V", current: "200-370A" },
    ],
    applications: ["Refinery Reactors", "Petrochemical Piping", "Steam Headers", "Power Plants"],
  },
  {
    id: "metallo-cm-b9",
    name: "Metallo ChromMoly B9",
    classification: "AWS A5.28: ER90S-B9",
    description: "9Cr-1Mo-V modified chrome-moly wire for welding P91/T91 creep-strength-enhanced ferritic steels. Engineered for ultra-supercritical power plants and high-temperature petrochemical service up to 620°C.",
    features: ["9Cr-1Mo-V-Nb chemistry", "Creep resistant to 620°C", "Ultra-supercritical grade", "Controlled Nb + V additions"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.28", classification: "ER90S-B9" },
    ],
    mechanicalProperties: [
      { condition: "PWHT 760°C/2hr", yieldStrength: "550 MPa (80 ksi)", tensileStrength: "680 MPa (99 ksi)", elongation: "18%", cvn: "35 J @ 20°C" },
    ],
    wireComposition: { C: "0.10", Mn: "0.50", Si: "0.25", Cr: "9.00", Mo: "1.00", V: "0.20", Nb: "0.06", N: "0.04", Ni: "0.40" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/CO₂", voltage: "18-22V", current: "70-170A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/CO₂", voltage: "25-31V", current: "200-350A" },
    ],
    applications: ["Ultra-Supercritical Power Plants", "P91/T91 Piping", "Steam Turbines", "Advanced HRSG"],
  },
];
