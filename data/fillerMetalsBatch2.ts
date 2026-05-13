import type { FillerMetalProduct } from "./fillerMetalsData";

export const GAS_SHIELDED_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-gs71m",
    name: "Metallo FluxCore GS-71M",
    classification: "AWS A5.20: E71T-1M/9M-JH4",
    description: "Premium all-position gas-shielded flux-cored wire for structural steel and heavy fabrication. Delivers smooth arc, low spatter, and exceptional low-temperature toughness with mixed gas shielding.",
    features: ["All position capability", "H4 low hydrogen", "Excellent -40°C impact", "Fast freeze slag system"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA, 3Y40SA" },
      { org: "CWB", standard: "CSA W48", classification: "E491T-1M/9M-JH4" },
      { org: "DNV", standard: "Rules", classification: "III Y40MS H10" },
      { org: "LR", standard: "Rules", classification: "3YS, 4YS" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "470 MPa (68 ksi)", tensileStrength: "560 MPa (81 ksi)", elongation: "27%", cvn: "75 J @ -40°C" },
    ],
    wireComposition: { C: "0.04", Mn: "1.35", Si: "0.45", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", voltage: "24-30V", current: "180-320A" },
      { diameter: "1.4 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", voltage: "25-32V", current: "200-380A" },
    ],
    applications: ["Structural Steel", "Shipbuilding", "Offshore Platforms", "Bridge Construction"],
  },
  {
    id: "metallo-gs71c",
    name: "Metallo FluxCore GS-71C",
    classification: "AWS A5.20: E71T-1C/9C-JH4",
    description: "High-performance gas-shielded flux-cored wire optimized for 100% CO₂ shielding. Provides excellent penetration and high deposition rates for heavy structural fabrication.",
    features: ["Optimized for 100% CO₂", "High deposition rates", "All position", "Low hydrogen H4"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3YSA" },
      { org: "DNV", standard: "Rules", classification: "III YMS H10" },
    ],
    mechanicalProperties: [
      { condition: "100% CO₂", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "540 MPa (78 ksi)", elongation: "25%", cvn: "55 J @ -29°C" },
    ],
    wireComposition: { C: "0.05", Mn: "1.30", Si: "0.40", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% CO₂", voltage: "25-31V", current: "190-340A" },
      { diameter: "1.6 mm", transferMode: "Spray", shieldingGas: "100% CO₂", voltage: "27-34V", current: "250-450A" },
    ],
    applications: ["Heavy Fabrication", "Shipbuilding", "Structural Steel", "General Construction"],
  },
  {
    id: "metallo-gs81ni1",
    name: "Metallo FluxCore GS-81Ni1",
    classification: "AWS A5.29: E81T1-Ni1M-JH4",
    description: "Low alloy gas-shielded flux-cored wire with 1% Nickel for superior low-temperature toughness. Designed for offshore, wind tower, and arctic structural applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "3Y40SA" },
      { org: "DNV", standard: "Rules", classification: "III Y40MS H5" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/CO₂", yieldStrength: "510 MPa (74 ksi)", tensileStrength: "590 MPa (86 ksi)", elongation: "24%", cvn: "70 J @ -40°C" },
    ],
    wireComposition: { C: "0.04", Mn: "1.25", Si: "0.35", Ni: "0.85", P: "0.010", S: "0.008" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/CO₂", voltage: "24-30V", current: "180-320A" },
    ],
    applications: ["Offshore Structures", "Wind Towers", "Arctic Construction", "Low-Temperature Service"],
  },
];

export const SUBMERGED_ARC_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-sa-l61",
    name: "Metallo SubArc L-61",
    classification: "AWS A5.17: EM12K",
    description: "General purpose submerged arc wire for single and multi-pass welding of carbon and carbon-manganese steels. Provides consistent, high-quality deposits with excellent mechanical properties.",
    features: ["High deposition rates", "Excellent bead profile", "Multi-pass capability", "Wide flux compatibility"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "SA2" },
      { org: "CWB", standard: "CSA W48", classification: "EM12K" },
      { org: "DNV", standard: "Rules", classification: "II YMS" },
      { org: "LR", standard: "Rules", classification: "2" },
    ],
    mechanicalProperties: [
      { condition: "Flux 860 (AC)", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "510 MPa (74 ksi)", elongation: "28%", cvn: "40 J @ -29°C" },
    ],
    wireComposition: { C: "0.09", Mn: "1.00", Si: "0.20", P: "0.015", S: "0.015", Cu: "0.15" },
    operatingProcedures: [
      { diameter: "2.4 mm", polarity: "DCEP / AC", voltage: "28-34V", current: "400-600A" },
      { diameter: "3.2 mm", polarity: "DCEP / AC", voltage: "30-36V", current: "500-800A" },
      { diameter: "4.0 mm", polarity: "DCEP / AC", voltage: "32-38V", current: "600-1000A" },
    ],
    applications: ["Pressure Vessels", "Structural Beams", "Heavy Plate", "Shipbuilding"],
  },
  {
    id: "metallo-sa-la71",
    name: "Metallo SubArc LA-71",
    classification: "AWS A5.23: EA1",
    description: "Low alloy submerged arc wire with molybdenum for elevated temperature service. Designed for pressure vessels and boiler components requiring creep resistance.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.23", classification: "EA1" },
    ],
    mechanicalProperties: [
      { condition: "Flux 860 (DCEP)", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "560 MPa (81 ksi)", elongation: "24%", cvn: "35 J @ -29°C" },
    ],
    wireComposition: { C: "0.10", Mn: "1.05", Si: "0.15", Mo: "0.50", P: "0.012", S: "0.010" },
    operatingProcedures: [
      { diameter: "2.4 mm", polarity: "DCEP", voltage: "28-34V", current: "400-600A" },
      { diameter: "3.2 mm", polarity: "DCEP", voltage: "30-36V", current: "500-800A" },
    ],
    applications: ["Pressure Vessels", "Boiler Components", "Power Generation", "Petrochemical"],
  },
  {
    id: "metallo-sa-880m",
    name: "Metallo SubArc 880M",
    classification: "AWS A5.17: F7A6-EM12K",
    description: "Active submerged arc flux designed for high-speed single-pass welding. Provides excellent bead appearance and easy slag removal on high-speed fillet and butt joints.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "SA2" },
      { org: "LR", standard: "Rules", classification: "2" },
    ],
    mechanicalProperties: [
      { condition: "Wire L-61 (AC)", yieldStrength: "420 MPa (61 ksi)", tensileStrength: "530 MPa (77 ksi)", elongation: "27%" },
    ],
    wireComposition: { C: "0.09", Mn: "1.00", Si: "0.20", P: "0.015", S: "0.015" },
    operatingProcedures: [
      { diameter: "3.2 mm", polarity: "AC", voltage: "30-36V", current: "500-900A" },
      { diameter: "4.0 mm", polarity: "AC", voltage: "32-38V", current: "600-1100A" },
    ],
    applications: ["High-Speed Fabrication", "Beam Lines", "Shipbuilding", "Tank Fabrication"],
  },
];

export const STAINLESS_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-ss308l",
    name: "Metallo SS-308L",
    classification: "AWS A5.9: ER308L",
    description: "Low-carbon austenitic stainless steel MIG/TIG wire for welding 304 and 304L base metals. Extra-low carbon content prevents intergranular corrosion in service.",
    features: ["Extra-low carbon (0.03% max)", "Resistant to intergranular corrosion", "All position", "Excellent for cryogenic service"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "308L" },
      { org: "ASME", standard: "SFA 5.9", classification: "ER308L" },
      { org: "CWB", standard: "CSA W48", classification: "ER308L" },
      { org: "DNV", standard: "Rules", classification: "308L" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/O₂", yieldStrength: "380 MPa (55 ksi)", tensileStrength: "570 MPa (83 ksi)", elongation: "38%" },
    ],
    wireComposition: { C: "0.03 max", Mn: "1.80", Si: "0.40", Cr: "19.5-22.0", Ni: "9.0-11.0", Mo: "0.75 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/O₂", voltage: "18-22V", current: "60-160A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/O₂", voltage: "25-31V", current: "180-350A" },
    ],
    applications: ["Food & Beverage", "Chemical Processing", "Pharmaceutical", "Architectural"],
  },
  {
    id: "metallo-ss316l",
    name: "Metallo SS-316L",
    classification: "AWS A5.9: ER316L",
    description: "Molybdenum-bearing austenitic stainless wire for superior pitting and crevice corrosion resistance. Ideal for marine, chemical, and pulp & paper environments.",
    features: ["2-3% Molybdenum for pitting resistance", "Low carbon for sensitization resistance", "Marine grade"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "ABS", standard: "Part 2", classification: "316L" },
      { org: "ASME", standard: "SFA 5.9", classification: "ER316L" },
      { org: "DNV", standard: "Rules", classification: "316L" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/O₂", yieldStrength: "370 MPa (54 ksi)", tensileStrength: "560 MPa (81 ksi)", elongation: "36%" },
    ],
    wireComposition: { C: "0.03 max", Mn: "1.80", Si: "0.40", Cr: "18.0-20.0", Ni: "11.0-14.0", Mo: "2.0-3.0" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "98/2 Ar/O₂", voltage: "18-22V", current: "60-160A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/O₂", voltage: "25-31V", current: "180-350A" },
    ],
    applications: ["Marine", "Chemical Processing", "Pulp & Paper", "Desalination"],
  },
  {
    id: "metallo-ss309l",
    name: "Metallo SS-309L",
    classification: "AWS A5.9: ER309L",
    description: "Higher alloy austenitic stainless wire for joining dissimilar metals — stainless to carbon steel. Also used as first layer cladding on carbon steel substrates.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.9", classification: "ER309L" },
      { org: "CWB", standard: "CSA W48", classification: "ER309L" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/O₂", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "590 MPa (86 ksi)", elongation: "34%" },
    ],
    wireComposition: { C: "0.03 max", Mn: "1.80", Si: "0.40", Cr: "23.0-25.0", Ni: "12.0-14.0" },
    operatingProcedures: [
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/O₂", voltage: "25-31V", current: "180-350A" },
    ],
    applications: ["Dissimilar Metal Joints", "Cladding", "Transition Joints", "Petrochemical"],
  },
  {
    id: "metallo-ss2209",
    name: "Metallo SS-2209",
    classification: "AWS A5.9: ER2209",
    description: "Duplex stainless steel wire for welding 2205 and similar duplex grades. Provides balanced austenite-ferrite microstructure for exceptional strength and corrosion resistance.",
    features: ["Duplex microstructure", "High strength + corrosion resistance", "Suitable for sour service"],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    conformance: [
      { org: "ASME", standard: "SFA 5.9", classification: "ER2209" },
      { org: "DNV", standard: "Rules", classification: "2209" },
    ],
    mechanicalProperties: [
      { condition: "98/2 Ar/O₂", yieldStrength: "550 MPa (80 ksi)", tensileStrength: "720 MPa (104 ksi)", elongation: "25%" },
    ],
    wireComposition: { C: "0.02 max", Mn: "1.50", Si: "0.50", Cr: "22.0-24.0", Ni: "8.0-10.0", Mo: "3.0-3.5", N: "0.14-0.20" },
    operatingProcedures: [
      { diameter: "1.0 mm", transferMode: "Pulsed Spray", shieldingGas: "98/2 Ar/N₂", voltage: "22-28V", current: "120-280A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "98/2 Ar/N₂", voltage: "25-31V", current: "180-350A" },
    ],
    applications: ["Oil & Gas", "Desalination", "Chemical Processing", "Offshore Platforms"],
  },
];

export const NICKEL_PRODUCTS: FillerMetalProduct[] = [
  {
    id: "metallo-ni208",
    name: "Metallo NiAlloy 208",
    classification: "AWS A5.14: ERNi-1",
    description: "Pure nickel MIG/TIG wire for welding Nickel 200 and 201 alloys. Ideal for dissimilar joints between nickel alloys and stainless or ferritic steels in chemical processing environments.",
    features: ["93% min Nickel content", "Excellent corrosion resistance", "Dissimilar metal joining"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.14", classification: "ERNi-1" },
      { org: "CWB", standard: "AWS A5.14", classification: "ERNi-1" },
    ],
    mechanicalProperties: [
      { condition: "75/25 Ar/He", yieldStrength: "240 MPa (35 ksi)", tensileStrength: "480 MPa (70 ksi)", elongation: "35%" },
    ],
    wireComposition: { Ni: "93.0 min", Ti: "2.0-3.5", Mn: "0.40", Si: "0.40", C: "0.01", Fe: "0.01 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Short Circuit", shieldingGas: "75/25 Ar/He", voltage: "26-29V", current: "150-190A" },
      { diameter: "1.1 mm", transferMode: "Spray", shieldingGas: "75/25 Ar/He", voltage: "28-32V", current: "180-220A" },
    ],
    applications: ["Chemical Processing", "Caustic Service", "Food Processing", "Electronics"],
  },
  {
    id: "metallo-ni625",
    name: "Metallo NiAlloy 625",
    classification: "AWS A5.14: ERNiCrMo-3",
    description: "Nickel-chromium-molybdenum alloy wire for welding Inconel 625, 601, and similar nickel alloys. Provides outstanding resistance to pitting, crevice corrosion, and stress corrosion cracking.",
    features: ["Exceptional corrosion resistance", "High-temperature strength to 980°C", "Versatile base metal compatibility"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.14", classification: "ERNiCrMo-3" },
      { org: "ASME", standard: "SFA 5.14", classification: "ERNiCrMo-3" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "450 MPa (65 ksi)", tensileStrength: "760 MPa (110 ksi)", elongation: "40%" },
    ],
    wireComposition: { Ni: "58.0 min", Cr: "20.0-23.0", Mo: "8.0-10.0", Nb: "3.15-4.15", Fe: "5.0 max", C: "0.10 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Pulsed Spray", shieldingGas: "100% Argon", voltage: "24-28V", current: "120-180A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "26-32V", current: "160-260A" },
    ],
    applications: ["Aerospace", "Chemical Processing", "Marine", "Nuclear"],
  },
  {
    id: "metallo-ni82",
    name: "Metallo NiAlloy 82",
    classification: "AWS A5.14: ERNiCr-3",
    description: "Nickel-chromium alloy wire for welding Inconel 600, 601 and for dissimilar joints between nickel alloys and stainless steels. Widely used in nuclear and power generation applications.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
    conformance: [
      { org: "AWS", standard: "A5.14", classification: "ERNiCr-3" },
      { org: "ASME", standard: "SFA 5.14", classification: "ERNiCr-3" },
    ],
    mechanicalProperties: [
      { condition: "100% Argon", yieldStrength: "400 MPa (58 ksi)", tensileStrength: "680 MPa (99 ksi)", elongation: "38%" },
    ],
    wireComposition: { Ni: "67.0 min", Cr: "18.0-22.0", Nb: "2.0-3.0", Mn: "3.0", Fe: "3.0 max", C: "0.10 max" },
    operatingProcedures: [
      { diameter: "0.9 mm", transferMode: "Pulsed Spray", shieldingGas: "100% Argon", voltage: "24-28V", current: "120-175A" },
      { diameter: "1.2 mm", transferMode: "Spray", shieldingGas: "100% Argon", voltage: "26-32V", current: "160-250A" },
    ],
    applications: ["Nuclear", "Power Generation", "Dissimilar Joints", "High-Temperature Service"],
  },
];
