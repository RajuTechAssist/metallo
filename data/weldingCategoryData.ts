import { SITE_IMAGES } from "@/config/images";

/* ═══════════════════════════════════════════════════════════════
   WELDING MAIN CATEGORY DATA
   Rich descriptions, features, and applications for each
   main product category displayed on the Welding & Allied page.
   ═══════════════════════════════════════════════════════════════ */

export interface WeldingMainCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  features: string[];
  industries: string[];
  image: string;
  subCategories?: string[];
  standards?: string[];
  useCases?: { name: string; products?: string[]; standards: (string | { label: string; datasheetUrl: string })[] }[];
}

/* ── CONSUMABLES (Filler Metal Sub-Categories) ─────────────── */

export const CONSUMABLE_CATEGORIES: WeldingMainCategory[] = [
  {
    id: "mig-tig",
    label: "MIG Wires & TIG Cut Lengths",
    icon: "electric_bolt",
    description:
      "Precision-engineered solid wire electrodes for Gas Metal Arc Welding (GMAW) and TIG cut-length rods for Gas Tungsten Arc Welding (GTAW). Our MIG wires deliver exceptional arc stability, ultra-low spatter, and superior feedability across short-circuit, globular, and spray transfer modes. Available in copper-coated and copper-free surface technologies for robotic and manual applications.",
    features: [
      "ER70S-6, ER70S-3, ER80S-Ni1, ER90S-D2, ER100S-G classifications",
      "Copper-coated & copper-free surface options",
      "Optimized for robotic & automated systems",
      "Superior feedability in long conduit lengths",
      "Low diffusible hydrogen (H4/H8) designations",
      "ABS, DNV, CWB, LR marine approvals",
    ],
    industries: [
      "Shipbuilding & Marine",
      "Structural Steel Fabrication",
      "Offshore Platforms",
      "Automotive & Robotics",
      "Pressure Vessels",
      "Heavy Equipment Manufacturing",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.migTig,
    useCases: [
      {
        name: "MIG WIRES AND TIG RODS",
        products: [
          "Carbon Steel Solid MIG Wires (Copper-Coated & Bare)",
          "Carbon Steel TIG Cut Lengths",
          "Low Alloy Solid MIG Wires",
          "Low Alloy TIG Cut Lengths",
          "Silicon Bronze Wires"
        ],
        standards: [
          { label: "AWS A5.18: ER70S-6BS EN ISO 636-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_359f1812de2544dcab1ccc59ce3cd6a5.pdf?index=true" },
          { label: "AWS A5.18: ER70S-2", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_2993ed206cf742b782fbf0e05a6c7b01.pdf" },
          { label: "AWS A5.28: ER80S-Ni1-H4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_10586bc8e1df409aa51662684f32de80.pdf" },
          { label: "AWS A5.28: ER80S-G (A1)BS EN ISO 21952-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_300a1f3feda6410485250a6beb192690.pdf?index=true" },
          { label: "AWS A5.28: ER80S-D2 / ER90S-D2", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d82cd6b13c08452d8774e59deafb63c7.pdf?index=true" },
          { label: "AWS A5.28: ER80S-B2BS EN ISO 21952-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_e442575465354f9d8d5f4a91d920ab57.pdf" },
          { label: "AWS A5.28: ER80S-B8", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_a8465c5ab55740c9b009c5d7e6161ae7.pdf" },
          { label: "AWS A5.28: ER100S-G", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_427fb2165b2f49a29cc1549f0473cb87.pdf?index=true" },
          { label: "AWS A5.28: ER90S-G", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_1a90338e8250477396a04e4d1b33b95b.pdf?index=true" },
          { label: "AWS A5.1: E7016-1 H4 RBS EN ISO 2560-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_e46cc75f3f3e43a5b6ef959976074796.pdf" },
          { label: "AWS A5.5: E8018-G H4R RCC-M", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_75e8e1c158af4dde949fdd8b5f12d079.pdf" },
          { label: "AWS A5.5: E9018-M", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_c3e01665869a4e6284803b5af54a9923.pdf" },
          { label: "AWS A5.5: E11018-M H4RMIL-11018-M MIL-E-222000/1", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_493023ae8b944035a8d7919a1cb89de8.pdf" },
          { label: "AWS A5.5: E8016-GBS EN ISO 2560-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_15991309aab84fb9835f66b533485ff3.pdf" },
          { label: "AWS A5.5: E8018-B2BS EN ISO 3580-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_2a61d5359e114802867bb2365bbe337e.pdf" },
          { label: "AWS A5.5: E8018-C1-H4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_1c0623f74a534b789283de672e045a4c.pdf" },
          { label: "AWS A5.5: E8018-C3BS EN ISO 2560-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_1ca20647ec1e4024aac8d8149626c520.pdf" },
          { label: "AWS A5.5: E8018-W2", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_cf1459d1ecb945b1bbec5c1c53f6eefc.pdf" },
          { label: "AWS A5.5: E9018-G", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_b33e5f6d9d5445049e3cb89c41b2e137.pdf" },
          { label: "AWS A5.5: E10018-D2-H4 RBS EN ISO 18275", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_9792a1ec13a34f3683ff0bd4a02cbd6e.pdf" },
          { label: "AWS A5.5: E12018-GBS EN ISO 18275", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_b0653971d1f1493dbf2663f2213b534e.pdf" },
          { label: "AWS A5.5: E12018-MBS EN ISO 18275", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d800a35a327e401380be16ff5e62b4ee.pdf" },
          { label: "AWS A5.28: E90C-K3H4BS EN ISO 18276-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_f36f24f6381b404d9ea3695a0239db29.pdf?index=true" },
          { label: "AWS A5.36: E91T15-M21A8-K1-H4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_f36f24f6381b404d9ea3695a0239db29.pdf?index=true" },
          { label: "AWS A5.28: E110C-K4H4EN ISO 18276-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_e916ab535ab0431aa73f3e21ae67f5dd.pdf?index=true" },
          { label: "AWS A5.36: E110T15-M21A8-K4-H4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_e916ab535ab0431aa73f3e21ae67f5dd.pdf?index=true" },
          { label: "AWS A5.28: E120C-GH4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_223054e4e7374dadbdbc640a9083d75c.pdf?index=true" },
          "AWS A5.18: ER70S-3",
          "AWS A5.7: ERCuSi-A",
          "AWS A5.18: ER70S-9",
          "AWS A5.28: ER110S-G",
          "AWS A5.28: ER100S-1",
          "AWS A5.28: ER90S-B91",
          "AWS A5.28: ER90S-B3",
          "AWS A5.28: ER80S-B6",
          "AWS A5.28: ER90S-B92",
        ]
      }
    ],
  },
  {
    id: "stick",
    label: "Stick Electrodes",
    icon: "hardware",
    description:
      "Comprehensive range of shielded metal arc welding (SMAW) electrodes covering cellulosic, rutile, and low-hydrogen classifications. From deep-penetration pipeline root pass electrodes to moisture-resistant low-hydrogen rods for critical structural and offshore applications. Engineered for consistent X-ray quality deposits with excellent slag detachability.",
    features: [
      "E6010, E6011, E7018, E7024, E8018-C3, E9018-B3 classifications",
      "Moisture-resistant (H4R) coating technology",
      "Cryogenic service down to -73°C",
      "All-position welding capability",
      "Chrome-Moly for elevated temperature service",
      "API 1104 pipeline approved",
    ],
    industries: [
      "Pipeline Construction",
      "Offshore & Subsea",
      "Power Generation",
      "Refinery & Petrochemical",
      "Structural & Bridge Fabrication",
      "LNG & Cryogenic Storage",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.stick,
    useCases: [
      {
        name: "Stick Electrodes",
        products: [
          "Mild Steel Cellulosic Electrodes",
          "Mild Steel Rutile Electrodes",
          "Mild Steel Low-Hydrogen Electrodes",
          "Low Alloy Low-Hydrogen Electrodes",
          "Iron Powder Electrodes",
          "Creep-Resistant Stick Electrodes",
          "Cast Iron Stick Electrodes"
        ],
        standards: [
          { label: "AWS A5.5: E7018-G H4RBS EN ISO 2560-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_40f5203e8e49426f86ceab58ef6e94b1.pdf" },
          { label: "AWS A5.1: E6013 BS EN ISO 2560-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_40604265408840c69b8455eebe1c7f21.pdf" },
          { label: "AWS A5.1: E7018-1H4REN ISO 2560A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d72e2540d33a400fbc989595a13a882e.pdf" },
          { label: "AWS A5.1: E7018-1 H4 REN ISO 2560A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_a4219c411ff24a319a798ccdcefbf842.pdf" },
          "AWS A5.1: E6010",
          "AWS A5.1: E6011",
          "AWS A5.1: E6022",
          "AWS A5.1: E7014",
          "AWS A5.5: E7018-A1",
          "AWS A5.5: E7010-P1",
          "AWS A5.5: E8010-G",
          "AWS A5.5: E8010-P1",
          "AWS A5.5: E8018-C1",
          "AWS A5.5: E8018-C3",
          "AWS A5.1: E7024",
          "AWS A5.1: E7024-1",
          "AWS A5.1: E7028 H8",
          "AWS A5.5: E9010-G",
          "AWS A5.5: E9018M",
          "AWS A5.5: E9015-B3",
          "AWS A5.5: E9015-B91",
          "AWS A5.5: E9015-B92",
          "AWS A5.5: E9015-G22V",
          "AWS A5.5: E10018-D2",
          "AWS A5.5: E10045-P2",
          "AWS A5.5: E11018M",
          "AWS A5.15: ESt (Cast Iron)",
          "AWS Hardfacing / Wear-Resistant Specifications",
        ]
      }
    ],
  },
  {
    id: "metal-cored",
    label: "Metal-Cored Wires",
    icon: "precision_manufacturing",
    description:
      "High-productivity metal-cored wire electrodes that combine the efficiency of flux-cored wires with the clean weld appearance of solid wires. Deliver up to 30% faster travel speeds compared to solid wire with significantly wider operating windows, reduced spatter, and excellent gap-bridging capability for automated and robotic welding cells.",
    features: [
      "E70C-6M, E80C-Ni1 classifications",
      "Up to 30% faster travel speeds vs solid wire",
      "Wide operating parameter window",
      "Excellent gap bridging capability",
      "All-position including pulsed spray",
      "Low hydrogen H4 designation",
    ],
    industries: [
      "Robotic Welding Cells",
      "Heavy Fabrication",
      "Automotive Manufacturing",
      "Shipbuilding",
      "Wind Tower Production",
      "Arctic & Offshore Structures",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.metalCored,
    useCases: [
      {
        name: "Metal Cored Wires",
        products: [
          "Mild Steel Metal-Cored Wires",
          "Low Alloy Metal-Cored Wires",
          "High-Deposition Metal-Cored Wires"
        ],
        standards: [
          { label: "BS EN ISO 17632-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_8e884f41aeb1462d842f6e3b70573a56.pdf?index=true" },
          { label: "AWS A5.28: E80C-Ni1H4BS EN ISO 17632-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_81c0666a49254cd4950bad883df5bb73.pdf?index=true" },
          { label: "AWS A5.36: E80T15-M21A8-Ni1-H4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_81c0666a49254cd4950bad883df5bb73.pdf?index=true" },
          { label: "AWS A5.28: E80C-GH4BS EN ISO 17632-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_6ce3834c232f469bb33949bd2e564d9e.pdf?index=true" },
          { label: "AWS A5.36: E81T15-M21A8-GH4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_6ce3834c232f469bb33949bd2e564d9e.pdf?index=true" },
          "AWS A5.36: E70C-6M-H4",
          "AWS A5.36: E80T15-M21A5-Ni1-H4",
          "AWS A5.28: E90C-K3-H4",
          "AWS A5.36: E90T15-M20A6-K3-H4",
          "AWS A5.28: E110C-K4-H4",
          "AWS A5.36: E110T15-M20A6-K4-H4",
          "AWS A5.28: E120C-K4-H4",
          "AWS A5.36: E120T15-M20A6-K4-H4",
          "AWS A5.36: E70C-GM-H4",
          "AWS A5.36: E70C-GS",
          "AWS A5.36: E70C-6M-H8",
          "AWS A5.36: E70T15-M20A4-CS1-H4",
          "AWS A5.36: E70T15-M20A2-CS1-H8",
        ]
      }
    ],
  },
  {
    id: "self-shielded",
    label: "Self-Shielded Flux-Cored",
    icon: "shield",
    description:
      "Self-shielded flux-cored wires that require no external shielding gas, making them ideal for outdoor field welding, windy conditions, and remote locations. From versatile all-position maintenance wires to high-deposition structural fabrication electrodes with low-hydrogen designations for code-critical applications.",
    features: [
      "E71T-11, E71T-8, E70T-7 classifications",
      "No external shielding gas required",
      "Wind-tolerant for outdoor applications",
      "Low hydrogen H8 structural grades",
      "All-position including vertical-up",
      "High deposition rates for heavy plate",
    ],
    industries: [
      "Field Construction & Erection",
      "Multi-Story Buildings",
      "Bridge Fabrication",
      "Mining Equipment",
      "Farm & Agricultural Equipment",
      "Railroad & Infrastructure",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.selfShielded,
    useCases: [
      {
        name: "Self Shielded Flux Cored",
        products: [
          "Mild Steel Self-Shielded FCAW Wires",
          "Low Alloy Self-Shielded FCAW Wires",
          "Galvanized Steel FCAW-S Wires",
          "Seismic/Structural FCAW-S Wires"
        ],
        standards: [
          "AWS A5.20: E71T-8", "AWS A5.20: E71T-11", "AWS A5.20: E71TG-G",
          "AWS A5.29: E81T8-G", "AWS A5.20: E70T-6", "AWS A5.20: E70T-7",
          "AWS A5.20: E70T-4", "AWS A5.20: E70T-3", "AWS A5.20: E70T-10",
          "AWS A5.29: E91T8-G", "AWS A5.20: E71T-14", "AWS A5.29: E71T8-Ni1",
          "AWS A5.29: E71T8-Ni2", "AWS A5.20: E70T7-K2", "AWS A5.29: E80TG-K2",
          "AWS A5.29: E71T8-K6", "EN ISO 17632-A: T Fe9",
          "EN ISO 17632-A: T Fe1", "EN ISO 17632-A: T Fe2"
        ]
      }
    ],
  },
  {
    id: "gas-shielded",
    label: "Gas Shielded Flux-Cored",
    icon: "air",
    description:
      "Gas-shielded flux-cored arc welding (FCAW-G) wires designed for high-deposition, all-position welding with external CO₂ or mixed gas shielding. Offering superior penetration, excellent bead profile, and high deposition efficiency for structural steel, shipbuilding, and heavy fabrication applications.",
    features: [
      "E71T-1/9, E71T-12 classifications",
      "All-position high-deposition capability",
      "CO₂ and mixed gas compatible",
      "Excellent slag removal",
      "Superior penetration profiles",
      "Seismic-rated & code-approved",
    ],
    industries: [
      "Structural Steel",
      "Shipbuilding & Marine",
      "Heavy Equipment",
      "Seismic Construction",
      "Platform Fabrication",
      "General Fabrication",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.gasShielded,
    useCases: [
      {
        name: "Gas-Shielded Flux-Cored",
        products: [
          "Mild Steel Gas-Shielded FCAW Wires",
          "Low Alloy Gas-Shielded FCAW Wires",
          "Rutile Base FCAW Wires",
          "Basic Slag FCAW Wires",
          "Seamless Flux-Cored Wires"
        ],
        standards: [
          "AWS A5.20: E70T-5", "AWS A5.20: E70T-9", "AWS A5.20: E70T-12",
          "AWS A5.20: E71T-1", "AWS A5.20: E71T-9", "AWS A5.20: E71T-12",
          "AWS A5.29: E80T1-Ni1", "AWS A5.29: E80T5-B2", "AWS A5.29: E81T1-Ni1",
          "AWS A5.29: E81T1-Ni2", "AWS A5.29: E81T1-K2", "AWS A5.29: E81T1-B2",
          "AWS A5.29: E81T1-GM", "AWS A5.29: E81T1-K11", "AWS A5.29: E90T5-B3",
          "AWS A5.29: E91T1-K2", "AWS A5.29: E91T1-GM", "AWS A5.29: E101T1-K3",
          "AWS A5.29: E101T1-GM", "AWS A5.29: E111T1-K3", "AWS A5.29: E111T1-GM",
          "AWS A5.29: E121T1-GM", "AWS A5.29: E621T1-B91",
          "EN ISO 17632-A: T Fe2", "EN ISO 17634-A: T CrMo2 B M21 2 H5"
        ]
      }
    ],
  },
  {
    id: "submerged-arc",
    label: "Submerged Arc",
    icon: "layers",
    description:
      "Submerged arc welding (SAW) wire and flux combinations for high-productivity, deep-penetration welding of thick sections. Engineered for single and multi-pass welding in flat and horizontal positions, delivering exceptional deposition rates and consistent mechanical properties in heavy industrial applications.",
    features: [
      "Wire-flux combination systems",
      "High deposition rates up to 20+ kg/hr",
      "Deep penetration capability",
      "Consistent mechanical properties",
      "Multi-pass thick section welding",
      "Active & neutral flux options",
    ],
    industries: [
      "Pressure Vessel Manufacturing",
      "Shipbuilding & Marine",
      "Wind Tower Fabrication",
      "Pipeline Construction",
      "Heavy Plate Fabrication",
      "Structural Beam Production",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.submergedArc,
    useCases: [
      {
        name: "Submerged Arc",
        products: [
          "Mild Steel SAW Solid Wires",
          "Low Alloy SAW Solid Wires",
          "Active SAW Fluxes",
          "Neutral SAW Fluxes",
          "Highly Basic SAW Fluxes"
        ],
        standards: [
          { label: "AWS A5.17 : F7A2-EM12KAWS A5", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_3a7cb83ed6e94e328c4a0b6aaf3fec77.pdf?index=true" },
          { label: "AWS A5.17: F6 A4", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F7 A10", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.17: F6 A4 (Alt 2)", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23: F7 A10 (Alt 2)", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          "AWS A5.17: EM11K",
          "AWS A5.17: EM13K",
          "AWS A5.17: EH11K",
          "AWS A5.17: EL12",
          "AWS A5.23: EA1",
          "AWS A5.23: EM2",
          "AWS A5.23: ER100S-G",
          "AWS A5.23: ER110S-G",
          "AWS A5.17: EM14K",
          "AWS A5.23: ENi1K",
          "AWS A5.23: EA2TiB",
          "AWS A5.23: EF3",
          "AWS A5.23 (SAW low-alloy/creep-resistant filler metal specification)",
          "AWS A5.23: EB3R",
          "AWS A5.23: EB8",
          "AWS A5.23: EB91",
          "AWS A5.23: EG",
          "EN ISO 14174",
          "EN ISO 24598-A",
          "EN ISO 21598-A",
          "EN ISO 760",
        ]
      }
    ],
  },
  {
    id: "stainless",
    label: "Stainless Alloys",
    icon: "diamond",
    description:
      "Complete range of stainless steel welding consumables covering austenitic, duplex, super duplex, and precipitation-hardened grades. Engineered for superior corrosion resistance, high-temperature service, and critical applications in chemical processing, pharmaceutical, food & beverage, and marine environments.",
    features: [
      "308L, 309L, 316L, 2209 Duplex classifications",
      "Low carbon for sensitization resistance",
      "Duplex & super duplex grades",
      "Excellent corrosion resistance",
      "High-temperature service capability",
      "FDA & pharmaceutical compliant grades",
    ],
    industries: [
      "Chemical & Petrochemical Processing",
      "Pharmaceutical Manufacturing",
      "Food & Beverage",
      "Marine & Offshore",
      "Pulp & Paper",
      "Water Treatment & Desalination",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.stainless,
    useCases: [
      {
        name: "Stainless Alloys",
        products: [
          "Austenitic Stainless Solid Wires (MIG/TIG)",
          "Duplex & Super Duplex Stainless Wires",
          "Ferritic/Martensitic Stainless Wires",
          "Stainless Steel Stick Electrodes",
          "Stainless Steel Flux-Cored Wires"
        ],
        standards: [
          "AWS A5.9: ER308 / ER308H / ER308L / ER308LCF / ER308Si / ER308LSi",
          "AWS A5.9: ER309 / ER309L / ER309Si / ER309LSi / ER309LMo",
          "AWS A5.9: ER310", "AWS A5.9: ER312",
          "AWS A5.9: ER316 / ER316L / ER316LCF / ER316Si / ER316LSi",
          "AWS A5.9: ER317 / ER317L", "AWS A5.9: ER320LR", "AWS A5.9: ER330",
          "AWS A5.9: ER347", "AWS A5.9: ER385", "AWS A5.9: ER409 / ER409Nb / EC409",
          "AWS A5.9: ER410 / ER410NiMo", "AWS A5.9: ER420", "AWS A5.9: ER630 (17-4 PH)",
          "AWS A5.9: ER2209 (Duplex)", "AWS A5.9: ER2594 (Super Duplex)",
          "AWS A5.9: EC439 (Ferritic)", "AWS A5.4: E308 (-15, -16, -17, L, H)",
          "AWS A5.4: E309 (-15, -16, -17, L)", "AWS A5.4: E310-16",
          "AWS A5.4: E316 (-15, -16, -17, L)", "AWS A5.4: E320LR-16",
          "AWS A5.4: E347-16", "AWS A5.4: E385-16", "AWS A5.4: E410-16",
          "AWS A5.4: E410NiMo-16", "AWS A5.4: E630-16", "AWS A5.22: E2209T1-1/4",
          "AWS A5.22: E2594T1-4", "AWS A5.22: E308T0 / E308LT0",
          "AWS A5.22: E308T1 / E308LT1", "AWS A5.22: E309T0 / E309LT0",
          "AWS A5.22: E309T1 / E309LT1", "AWS A5.22: E316T0 / E316LT0",
          "AWS A5.22: E316T1 / E316LT1", "AWS A5.22: E308HT1-1/4",
          "AWS A5.9M: ER16.8.2", "ISO 14343-A: G 18 8 Mn",
          "ISO 14343-A: S 23 12 2 L", "EN ISO 14174: S A FB 2",
          "EN ISO 760: S A AF 2"
        ]
      }
    ],
  },
  {
    id: "nickel",
    label: "Nickel Alloys",
    icon: "science",
    description:
      "Specialty nickel-base and nickel alloy welding consumables for extreme service environments. Designed for high-temperature, corrosive, and cryogenic applications where conventional materials fail. Includes Inconel, Monel, and Hastelloy equivalent grades for aerospace, chemical processing, and power generation.",
    features: [
      "Inconel, Monel, Hastelloy equivalents",
      "Service temperatures up to 1100°C",
      "Exceptional corrosion resistance",
      "Dissimilar metal joining capability",
      "Cryogenic to elevated temperature range",
      "Aerospace & nuclear qualified grades",
    ],
    industries: [
      "Aerospace & Defense",
      "Nuclear Power",
      "Chemical Processing",
      "Oil & Gas Upstream",
      "Gas Turbine Manufacturing",
      "Pharmaceutical & Biotech",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.nickel,
    useCases: [
      {
        name: "Nickel Alloys",
        products: [
          "Solid Nickel Alloy MIG Wires",
          "Nickel Alloy TIG Cut Lengths",
          "Nickel Alloy Flux-Cored Wires",
          "Nickel Alloy Stick Electrodes"
        ],
        standards: [
          "AWS A5.14: ERNi-1", "AWS A5.14: ERNiCrMo-4", "AWS A5.7: ERCuNi",
          "AWS A5.14: ERNiCu-7", "AWS A5.15: ENiFe-Cl", "AWS A5.14: ERNiCr-3",
          "AWS A5.14: ERNiCrCoMo-1", "AWS A5.14: ERNiCrMo-10", "AWS A5.14: ERNiCrMo-3",
          "AWS A5.14: ERNiCrMo-14", "AWS A5.14: ERNiFeCr-2", "AWS A5.14: ERNiFeCr-1",
          "AWS A5.15: ERNi-CI", "AWS A5.14: ERNiCrMo-2", "AWS A5.11: ENiCrMo-3",
          "AWS A5.11: ENiCrCoMo-1", "AWS A5.11: ENi-1", "AWS A5.11: ENiCrFe-3",
          "AWS A5.11: ENiCu-7", "AWS A5.11: ENiCrMo-4", "AWS A5.15: ENi-Cl",
          "AWS A5.11: ENiCrFe-2", "AWS A5.34: ENiCrMo3T1-1/4",
          "EN ISO 12153: T Ni 6625 P M21 2", "EN ISO 12153: T Ni 6625 P C1 2",
          "EN ISO 17634-A: T CrMo2 B M21 2 H5"
        ]
      }
    ],
  },
  {
    id: "hardfacing",
    label: "Hardfacing",
    icon: "construction",
    description:
      "Wear-resistant hardfacing and build-up welding consumables for extending the service life of components subject to abrasion, impact, erosion, and metal-to-metal wear. Available as stick electrodes, flux-cored wires, and submerged arc wires to restore worn parts and apply protective overlays.",
    features: [
      "Abrasion-resistant overlay alloys",
      "Impact-resistant build-up grades",
      "Metal-to-metal wear solutions",
      "Chromium carbide & complex carbide alloys",
      "Build-up and dimensional restoration",
      "Multi-layer application capability",
    ],
    industries: [
      "Mining & Quarrying",
      "Cement & Aggregate",
      "Steel Mills & Rolling",
      "Earth Moving Equipment",
      "Sugar & Agriculture",
      "Dredging & Material Handling",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.hardfacing,
    useCases: [
      {
        name: "Hardfacing",
        products: [
          "Wear-Resistant SAW Wires",
          "Build-Up Metal-Cored Wires",
          "Abrasion-Resistant Fluxes",
          "Impact-Resistant Hardfacing Alloys"
        ],
        standards: [
          "EN 760: S A Z 3", "EN 760: S A CS 1", "EN 760: S A CS 2",
          "EN 760: S A FB 1", "EN 760: S A FB 2", "EN ISO: T Fe9",
          "EN ISO: T Fe1", "EN ISO: T Fe2"
        ]
      }
    ],
  },
  {
    id: "aluminum",
    label: "Aluminum MIG & TIG",
    icon: "auto_awesome",
    description:
      "High-purity aluminum MIG wire and TIG rod for welding all grades of aluminum and aluminum alloys. Engineered for consistent feedability, excellent arc characteristics, and superior weld quality in transportation, marine, and structural aluminum applications.",
    features: [
      "ER4043, ER5356, ER5183 classifications",
      "High-purity alloy compositions",
      "Shaved & polished surface finish",
      "Consistent diameter tolerance",
      "Excellent feedability & arc stability",
      "Low porosity deposits",
    ],
    industries: [
      "Transportation & Automotive",
      "Marine & Boatbuilding",
      "Aerospace",
      "Architectural & Structural",
      "HVAC & Heat Exchangers",
      "Trailer & Tank Manufacturing",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.aluminum,
    useCases: [
      {
        name: "Aluminum MIG and TIG",
        products: [
          "4000-Series Aluminum Spooled Wires (High Silicon)",
          "5000-Series Aluminum Spooled Wires (High Magnesium)",
          "Aluminum TIG Cut Lengths"
        ],
        standards: [
          "AWS A5.10 (Aluminum filler metal specification)",
          "AWS A5.10: ER4043 (MIG)", "AWS A5.10: R4043 (TIG)",
          "AWS A5.10: ER5356 (MIG)", "AWS A5.10: R5356 (TIG)",
          "AWS A5.10: ER5183 (MIG)", "AWS A5.10: R5183 (TIG)",
          "AWS A5.10: ER5556 (MIG)", "AWS A5.10: R5556 (TIG)",
          "AWS A5.10: ER5554 (MIG)", "AWS A5.10: R5554 (TIG)",
          "AWS A5.10: ER4047 (MIG)"
        ]
      }
    ],
  },
  {
    id: "chrome-moly",
    label: "Chrome-Moly Alloys",
    icon: "local_fire_department",
    description:
      "Chrome-Moly (Cr-Mo) welding consumables for high-temperature creep-resistant service in power generation, refinery, and petrochemical piping systems. Available in 1.25Cr-0.5Mo, 2.25Cr-1Mo, 5Cr-0.5Mo, and 9Cr-1Mo-V grades for service temperatures up to 650°C.",
    features: [
      "1.25Cr-0.5Mo through 9Cr-1Mo-V grades",
      "Creep resistant to 650°C",
      "Low hydrogen H4 designations",
      "PWHT optimized compositions",
      "ASME/AWS code compliant",
      "Consistent elevated-temp mechanicals",
    ],
    industries: [
      "Power Generation (Thermal & Nuclear)",
      "Refinery & Petrochemical",
      "Boiler & Pressure Vessel",
      "Process Piping",
      "Heat Recovery Systems",
      "Hydrogen Service Equipment",
    ],
    image: SITE_IMAGES.welding.categoryCards.consumables.chromeMoly,
    useCases: [
      {
        name: "Chrome-Moly Alloys",
        standards: [
          { label: "AWS A5.28: ER90S-B9BS EN ISO 21952-A", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_a7532d9e3e33459a8e3ec255563b0c26.pdf" },
          { label: "EN ISO 18275-A-E", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d30e7ff1717646329882c095dc7d9ba2.pdf?index=true" },
          { label: "AWS A5.23: F7A8", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: ENi1 F8P6ENi1WBSD3 1Ni 1/4Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F8A10-EG-G, F8P10-EG-G WBSD3 1Ni 1/2Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F9A6-EG-G, F9P6-EG-G WBSD3Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F1-P4-EG-GWBSD2 1NiCrMo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F1-P4-EG-GWBS3 NiCrMo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: EF5WBS2-2 1/2Cr1Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F9P2-EG-B3WBS2-Ni-3", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: F7P15-ENi3WBS2Ni1C", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: EGWB5Cr ER50", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.28: ER80S-B8WB9Cr ER50", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.28: ER90S-B9WB9Cr (mod)", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: EB9 WBP92", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23: EG", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_03315599bc3f41ec9be0831a6112425a.pdf?index=true" },
          { label: "AWS A5.23 : ENi1 F8P6ENi1WBSD3 1Ni 1/4Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F8A10-EG-G, F8P10-EG-G WBSD3 1Ni 1/2Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F9A6-EG-G, F9P6-EG-G WBSD3Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F1-P4-EG-GWBSD2 1NiCrMo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F1-P4-EG-GWBS3 NiCrMo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : EF5WBS2-1¼Cr½ Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F9P0-EB2-B2WBS2-21/2Cr1Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : F9P2-EG-EB3WBS2-Ni-3", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : , F7P15-ENi3WBS2Ni1Cu", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : EGWB5Cr ER502", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.28 : ER80S-B8WB9Cr ER505", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.28 : ER90S-B9WB9Cr", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.23 : EB91", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_736158987a7343aaa78e84373721e29f.pdf?index=true" },
          { label: "AWS A5.17: F7 AP8", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F8 AP4-EA2-A2F8 AP8-EG-GF8P2-EB2-B2F8P4-EB3-B3", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F8A10-EG-G, F8P10-EG-G WBSD3 1Ni 1/2Mo (Alt 2)", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F9A6-EG-G, F9P6-EG-G WBSD3Mo (Alt 2)", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F1-P4-EG-GWBS2-1¼Cr1/2Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F9P0-EB2-B2WBS2-2 1/2Cr1Mo", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
          { label: "AWS A5.23: F9P2-EG-B3", datasheetUrl: "https://www.wballoys.co.uk/_files/ugd/347c2c_d0666ae3800441968836fe9313d27be4.pdf?index=true" },
        ]
      }
    ],
  },
];

/* ── NON-CONSUMABLE CATEGORIES ─────────────────────────────── */

export const AUTOMATION_CATEGORIES: WeldingMainCategory[] = [
  {
    id: "robotic-welding",
    label: "Robotic Welding Systems",
    icon: "smart_toy",
    description:
      "From simple to advanced applications, robotic welding systems are designed to help decrease manufacturing costs, increase weld quality, improve welding productivity, and enhance your working environment. Fully integrated turnkey cells with advanced seam tracking, multi-pass programming, and real-time quality monitoring.",
    features: [
      "Turnkey robotic welding cells",
      "Advanced seam tracking systems",
      "Multi-pass weld programming",
      "Real-time quality monitoring",
      "High-speed production capability",
      "Offline programming software",
    ],
    industries: [
      "Automotive Manufacturing",
      "Heavy Equipment",
      "Structural Steel",
      "Shipbuilding",
      "Aerospace",
      "General Fabrication",
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.roboticWelding,
    useCases: [
      {
        name: "Pre-Engineered Robotic Welding Cells",
        products: [
          "Fixed-Table Robotic Welding Cells",
          "Turntable Robotic Welding Cells",
          "Ferris-Wheel Robotic Welding Systems"
        ],
        standards: [
          "ISO 10218-1 (Robots and robotic devices - Safety requirements)",
          "ISO 10218-2 (Industrial robot system integration)",
          "ANSI/RIA R15.06 (Industrial Robots and Robot Systems - Safety Requirements)",
          "A3 Robot Integrator Certified",
          "AWS D16.1 (Specification for Robotic Arc Welding Safety)"
        ]
      },
      {
        name: "Structural & Custom Robotic Systems",
        products: [
          "Structural Steel Robotic Welding Systems",
          "Mobile Robotic Welding Gantries",
          "Custom Heavy Fabrication Welding Cells"
        ],
        standards: [
          "ISO 10218-1", "ISO 10218-2", "ANSI/RIA R15.06", "CE / UL Listed Componentry"
        ]
      }
    ]
  },
  {
    id: "collaborative-robotic",
    label: "Collaborative Robotic Systems",
    icon: "group_work",
    description:
      "Collaborative welding robots (cobots) make automated welding solutions safe, easy to program, and accessible to shops of all sizes. With intuitive teach-pendant programming and built-in safety features, cobots enable small-to-medium fabricators to achieve consistent weld quality and fill skilled labor gaps.",
    features: [
      "Intuitive teach-pendant programming",
      "Built-in safety & force limiting",
      "No safety cage required",
      "Quick changeover between jobs",
      "Consistent weld quality",
      "Small footprint integration",
    ],
    industries: [
      "Small & Medium Fabrication",
      "Job Shops",
      "Agricultural Equipment",
      "HVAC & Ductwork",
      "Furniture Manufacturing",
      "Contract Manufacturing",
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.collaborativeRobotic,
    useCases: [
      {
        name: "Collaborative Welding Robots (Cobots)",
        products: [
          "Air-Cooled Welding Cobots",
          "Water-Cooled Welding Cobots",
          "Aluminum-Specific Welding Cobots",
          "Cobot Programming Tablets/Software",
          "Cobot-Compatible Welding Power Sources"
        ],
        standards: [
          "ISO/TS 15066 (Robots and robotic devices - Collaborative robots)",
          "ISO 10218-1",
          "ISO 13849-1 (Safety of machinery - Safety-related parts of control systems)",
          "ANSI/RIA R15.06"
        ]
      }
    ]
  },
  {
    id: "mechanized-automation",
    label: "Mechanized Automation",
    icon: "settings",
    description:
      "Mechanized automation equipment includes seam tracking, welding positioners, manipulators, gaw chucks, motorized slides, manual slides, pipe support stands, turning & idler rolls, and accessories for various applications. Cost-effective solutions for improving productivity without full robotic investment.",
    features: [
      "Welding positioners & manipulators",
      "Motorized & manual slides",
      "Turning rolls & idler systems",
      "Seam tracking equipment",
      "Column & boom systems",
      "Pipe welding rotators",
    ],
    industries: [
      "Pressure Vessel Manufacturing",
      "Pipe & Tube Fabrication",
      "Tank Manufacturing",
      "Wind Tower Production",
      "Structural Steel",
      "Shipbuilding",
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.mechanizedAutomation,
    useCases: [
      {
        name: "Orbital and Portable Mechanized Systems",
        products: [
          "Orbital TIG Welding Tractors",
          "Orbital MIG Welding Buggies",
          "Hot Wire TIG Mechanized Systems",
          "Track-Mounted Seam Welders"
        ],
        standards: [
          "CE (Conformité Européenne)",
          "IEC 60974-1 (Arc welding equipment - Power sources)",
          "IEC 60974-10 (Electromagnetic compatibility requirements)"
        ]
      },
      {
        name: "Mechanized Positioning & Controls",
        products: [
          "Mechanized Welding Manipulators",
          "Automated Weld Heads & Feeders",
          "Motorized Cross Slides",
          "Laser and Tactile Seam Trackers",
          "Mechanized Torches and Cables"
        ],
        standards: [
          "IEC 60974-7 (Torches for arc welding)",
          "RoHS Compliant (Directive 2011/65/EU)"
        ]
      },
      {
        name: "Resistance Automation",
        products: [
          "Automated Projection Resistance Welders",
          "Robotic Fastener Welding Systems"
        ],
        standards: [
          "RWMA (Resistance Welding Manufacturing Alliance) Standards",
          "A3 Robot Integrator Certified"
        ]
      }
    ]
  },
  {
    id: "automated-cutting",
    label: "Automated Cutting Systems & Equipment",
    icon: "content_cut",
    description:
      "Advanced CNC cutting solutions encompassing plasma cutting and mechanized cutting applications including automated pipe cutting, structural steel cutting, and precision profile cutting. Integrated with CAD/CAM software for optimized material utilization and production efficiency.",
    features: [
      "CNC plasma cutting tables",
      "Automated pipe cutting systems",
      "Structural beam cutting",
      "CAD/CAM integration",
      "Multi-torch configurations",
      "Bevel cutting capability",
    ],
    industries: [
      "Steel Service Centers",
      "Structural Fabrication",
      "Shipbuilding",
      "Pipe & Vessel Manufacturing",
      "Heavy Equipment",
      "Construction",
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.automatedCutting,
    useCases: [
      {
        name: "CNC Laser and Plasma Profilers",
        products: [
          "CNC Fiber Laser Flatbed Cutting Tables",
          "Structural Steel Plasma Coping Machines",
          "CNC Robotic Pipe Profile Cutting Machines",
          "CNC Plasma Cutting Tables"
        ],
        standards: [
          "FDA Class 1-Rated Enclosures (for Fiber Lasers)",
          "IEC 60825-1 (Laser Safety)",
          "ISO 11553-1 (Safety of machinery - Laser processing)",
          "ANSI B11.0 (Safety of Machinery - General Requirements)"
        ]
      }
    ]
  },
  {
    id: "positioners",
    label: "Positioners",
    icon: "360",
    description:
      "Positioners adapt part and robot orientations for a wide range of applications including welding, cladding, laser, material handling, grinding, and cutting. Available in configurations from benchtop to heavy-duty floor models with load capacities from 50 kg to 100+ tonnes.",
    features: [
      "Servo-driven precision positioning",
      "50 kg to 100+ tonne capacity",
      "Single & dual-axis configurations",
      "Headstock-tailstock systems",
      "Robot-synchronized motion",
      "Through-hole & chuck options",
    ],
    industries: [
      "Heavy Fabrication",
      "Pressure Vessels",
      "Pipe Spool Fabrication",
      "Aerospace Components",
      "Automotive",
      "General Manufacturing",
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.positioners,
    useCases: [
      {
        name: "Robotic Part Positioning",
        products: [
          "Robotic Servo Headstocks & Tailstocks",
          "Multi-Axis Skyhook Positioners",
          "Drop-Center Robotic Positioners",
          "Rotary Turntables"
        ],
        standards: [
          "ISO 10218-2 (Integration into robotic cells)",
          "UL / CSA Certified Electronics"
        ]
      }
    ]
  },
  {
    id: "robotic-laser-systems",
    label: "Robotic Laser Systems",
    icon: "flare",
    description: "High-precision robotic laser processing cells engineered for complex laser welding, cladding, and brazing applications. Featuring enclosed FDA Class 1 safety environments, these systems deliver exceptional throughput with minimal heat input and distortion.",
    features: [
      "FDA Class 1-rated enclosures",
      "Fiber laser power sources",
      "Integrated safety interlocks",
      "High-speed precision optics",
      "Multi-axis articulated robots"
    ],
    industries: [
      "Automotive Manufacturing",
      "Aerospace & Defense",
      "Medical Device Fabrication",
      "Electronics"
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.roboticLaser,
    useCases: [
      {
        name: "Laser Processing Cells",
        products: [
          "Robotic Laser Welding Cells",
          "Robotic Laser Cladding Systems",
          "Robotic Laser Brazing Systems"
        ],
        standards: [
          "IEC 60825-1 (Safety of laser products)",
          "ANSI Z136.1 (Safe Use of Lasers)",
          "FDA Class 1-Rated Laser Enclosures",
          "ISO 11553-1 (Safety of machinery - Laser processing machines)"
        ]
      }
    ]
  },
  {
    id: "robotic-grinding-systems",
    label: "Standard Robotic Grinding Systems",
    icon: "cleaning_services",
    description: "Automated material removal cells designed to safely and consistently grind, polish, and finish welds. Force-compliant spindles ensure uniform surface finishes while removing operators from high-particulate, ergonomically hazardous environments.",
    features: [
      "Force-compliant grinding spindles",
      "Automated media changeout",
      "Enclosed dust collection",
      "Programmable contact pressure",
      "Consistent surface finish"
    ],
    industries: [
      "Heavy Fabrication",
      "Castings & Forgings",
      "Architectural Metalwork",
      "Aerospace"
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.roboticGrinding,
    useCases: [
      {
        name: "Automated Material Removal",
        products: [
          "Robotic Weld Grinding Cells",
          "Automated Polishing and Sanding Systems",
          "Force-Compliant Robotic Grinding Spindles"
        ],
        standards: [
          "ISO 10218-1",
          "ISO 10218-2",
          "ANSI B11.0"
        ]
      }
    ]
  },
  {
    id: "part-inspection",
    label: "Part Inspection and Quality Control Systems",
    icon: "policy",
    description: "Turnkey automated metrology and inspection cells utilizing 3D optical scanning and robotic vision. Rapidly verify dimensional accuracy, identify defects, and sort components to guarantee 100% quality compliance before downstream processing.",
    features: [
      "3D optical scanning heads",
      "Automated defect recognition",
      "Go/No-Go robotic sorting",
      "Real-time SPC data tracking",
      "Sub-millimeter accuracy"
    ],
    industries: [
      "Automotive Tier 1",
      "Aerospace Manufacturing",
      "Medical Implants",
      "High-Volume Machining"
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.partInspection,
    useCases: [
      {
        name: "Automated Metrology",
        products: [
          "Automated 3D Optical Scanning Systems",
          "Robotic Vision Inspection Cells",
          "Automated Part Sorting and Identification Systems"
        ],
        standards: [
          "ISO 9001 Compatibility (for quality data tracking)",
          "CE"
        ]
      }
    ]
  },
  {
    id: "foundry-automation",
    label: "Spray and Die Casting / Foundry / Forging",
    icon: "precision_manufacturing",
    description: "Robust automation solutions built specifically for the extreme conditions of foundries and die casting facilities. From mechanized ladles to reciprocating spray systems, these cells protect workers from extreme heat while optimizing cycle times.",
    features: [
      "High-heat rated robotics",
      "Automated die lubrication",
      "Mechanized pouring ladles",
      "Heavy-duty part extraction",
      "Harsh-environment enclosures"
    ],
    industries: [
      "Foundries",
      "Die Casting",
      "Forging Operations",
      "Heavy Metallurgy"
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.foundryAutomation,
    useCases: [
      {
        name: "Foundry Automation",
        products: [
          "Mechanized Foundry Ladles",
          "Robotic Die Casting Extractors",
          "Reciprocating Spray Systems",
          "Automated Die Lubrication Systems"
        ],
        standards: [
          "ANSI/RIA R15.06",
          "ISO 10218-2",
          "NFPA 79 (Electrical Standard for Industrial Machinery)"
        ]
      }
    ]
  },
  {
    id: "plastics-automation",
    label: "Plastics Injection Molding Systems",
    icon: "category",
    description: "High-speed automation cells for plastics manufacturing, specializing in insert molding, part extraction, and secondary assembly. Seamlessly integrated with injection molding machines to reduce cycle times and eliminate operator handling risks.",
    features: [
      "High-speed extraction robotics",
      "Insert molding integration",
      "Secondary assembly stations",
      "Vision-guided alignment",
      "IMM interface compliance"
    ],
    industries: [
      "Plastics Manufacturing",
      "Consumer Goods",
      "Automotive Plastics",
      "Medical Devices"
    ],
    image: SITE_IMAGES.welding.categoryCards.automation.plasticsAutomation,
    useCases: [
      {
        name: "Plastics Automation",
        products: [
          "Robotic Injection Molding Extraction Systems",
          "Automated Plastics Assembly Cells",
          "Insert Molding Automation Systems"
        ],
        standards: [
          "ANSI/PLASTICS B151.1 (Safety Requirements for Injection Molding Machines)",
          "ISO 10218-2"
        ]
      }
    ]
  }
];

export const SAFETY_CATEGORIES: WeldingMainCategory[] = [
  {
    id: "hand-body-arm",
    label: "Hand, Body & Arm",
    icon: "back_hand",
    description:
      "Premium welding gloves, sleeves, jackets, and aprons engineered for maximum protection against heat, sparks, and UV radiation. Constructed from split cowhide, grain goatskin, and advanced flame-resistant materials for comfort and dexterity during extended welding operations.",
    features: [
      "Split cowhide & grain leather",
      "Flame-resistant cotton lining",
      "Kevlar stitching for durability",
      "Heat-resistant up to 250°C",
      "Full arm & body coverage options",
      "Ergonomic fit for dexterity",
    ],
    industries: [
      "All Welding Applications",
      "Metal Fabrication",
      "Construction",
      "Maintenance & Repair",
      "Shipbuilding",
      "Pipeline Construction",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.handBodyArm,
    subCategories: [
      "Welding Jackets", "Welding Gloves", "Protective Sleeves",
      "Aprons", "Welding Trousers", "Lab Coats", "Gaiters",
    ],
    useCases: [
      {
        name: "Welding Jackets",
        standards: [
          "ANSI Z49.1 (Safety in Welding, Cutting, and Allied Processes)",
          "ASTM D6413 (Standard Test Method for Flame Resistance of Textiles)",
          "ASTM F1506 (Standard Performance Specification for Flame Resistant and Arc Rated Textile Materials)",
          "NFPA 70E (Standard for Electrical Safety in the Workplace)",
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611:2015 Class 1/A1+A2 (Protective clothing for use in welding and allied processes)",
          "EN ISO 11611:2015 Class 2",
          "UNI EN ISO 13688:2013 (Protective clothing - General requirements)",
        ],
      },
      {
        name: "Welding Gloves",
        standards: [
          "ANSI Z49.1 (Safety in Welding, Cutting, and Allied Processes)",
          "ANSI/ISEA 105 (Hand Protection Classification)",
          "ANSI Level A4 Cut Resistance",
          "ANSI Level 5 Puncture Resistance",
          "EN 388:2016 (Protective gloves against mechanical risks)",
          "EN 407:2004 (Protective gloves against thermal risks)",
          "EN 420:2003+A1:2009 (Protective gloves - General requirements)",
          "EN 12477:2001+A1:2005 Type A (Protective gloves for welders)",
          "EU PPE Regulation (EU) 2016/425",
        ],
      },
      {
        name: "Protective Sleeves",
        standards: [
          "ASTM D6413 (Flame Resistance of Textiles)",
          "ANSI/ISEA 105 (Cut and Puncture Resistance)",
          "ANSI Z49.1 (Safety in Welding, Cutting, and Allied Processes)",
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611 A1 Class 2",
        ],
      },
      {
        name: "Aprons",
        standards: [
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611 A1 Class 2 (Protective clothing for use in welding)",
        ],
      },
      {
        name: "Welding Trousers",
        standards: [
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611:2015 Class 1/A1+A2",
          "ASTM D6413 (Flame Resistance)",
        ],
      },
      {
        name: "Lab Coats",
        standards: [
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611:2015 Class 1/A1+A2",
          "ASTM D6413 (Flame Resistance)",
        ],
      },
      {
        name: "Gaiters",
        standards: [
          "EU PPE Regulation (EU) 2016/425",
          "EN ISO 11611 A1 Class 2",
        ],
      },
    ],
  },
  {
    id: "head-face-eye",
    label: "Head, Face & Eye",
    icon: "face_retouching_natural",
    description:
      "Advanced auto-darkening welding helmets, safety glasses, and face shields providing superior optical clarity and protection. Featuring true-color lens technology, variable shade adjustment, and ergonomic headgear for all-day comfort in demanding welding environments.",
    features: [
      "Auto-darkening lens technology",
      "True-color optical clarity (1/1/1/1)",
      "Variable shade DIN 5–13",
      "Solar + battery powered",
      "Grinding mode capability",
      "Lightweight ergonomic design",
    ],
    industries: [
      "All Welding Processes",
      "Metal Fabrication",
      "Construction & Field Work",
      "Robotic Cell Monitoring",
      "Training & Education",
      "Maintenance & Repair",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.headFaceEye,
    subCategories: [
      "Welding Helmets", "Face Shields", "Safety Glasses & Goggles", "Protective Headwear",
    ],
    useCases: [
      {
        name: "Welding Helmets",
        standards: [
          "ANSI Z87.1+ (High Impact, Occupational and Educational Personal Eye and Face Protection Devices)",
          "CSA Z94.3 (Eye and Face Protectors)",
          "EN 379 (Personal eye-protection - Automatic welding filters, e.g., 1/1/1/1 Optical Clarity)",
          "ANSI Z89.1 (Industrial Head Protection - when used with hard hats)",
        ],
      },
      {
        name: "Face Shields",
        standards: [
          "ANSI Z87.1+ (High Impact Resistance)",
          "CSA Z94.3 (Eye and Face Protectors)",
        ],
      },
      {
        name: "Safety Glasses & Goggles",
        standards: [
          "ANSI Z87.1+ (High Impact Resistance)",
          "CSA Z94.3 (Eye and Face Protectors)",
        ],
      },
      {
        name: "Protective Headwear",
        standards: [
          "ASTM D6413 (Flame Resistance for beanies and caps)",
          "ANSI Z89.1 (Type 1, Class C/G/E for Hard Hats)",
          "EN ISO 11611:2015",
        ],
      },
    ],
  },
  {
    id: "personal-respiratory",
    label: "Personal Respiratory",
    icon: "masks",
    description:
      "Powered air-purifying respirators (PAPRs) and disposable particulate masks designed specifically for welding fume environments. Integrated helmet-respirator systems provide combined head, face, eye, and respiratory protection in a single comfortable unit.",
    features: [
      "PAPR integrated systems",
      "HEPA & combination filters",
      "Positive pressure protection",
      "Extended battery life (8+ hours)",
      "Lightweight & comfortable",
      "EN/NIOSH certified",
    ],
    industries: [
      "Confined Space Welding",
      "Heavy Fabrication Shops",
      "Shipbuilding",
      "Stainless & Nickel Alloy Welding",
      "Maintenance & Repair",
      "Construction Sites",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.personalRespiratory,
    subCategories: [
      "Powered Air Purifying Respirators (PAPR)", "PAPR Replacement Parts & Accessories",
      "Half Mask Respirators", "Respirator Filters",
    ],
    useCases: [
      {
        name: "Powered Air Purifying Respirators (PAPR)",
        standards: [
          "NIOSH 42 CFR Part 84 (Approval of Respiratory Protective Devices)",
          "ANSI Z87.1+ (Integrated Eye and Face Protection)",
          "ANSI Z89.1 (Integrated Head Protection)",
          "Assigned Protection Factor (APF) 25",
        ],
      },
      {
        name: "PAPR Replacement Parts & Accessories",
        standards: [
          "NIOSH 42 CFR Part 84 (Component-level compliance for HEPA filters and blowers)",
        ],
      },
      {
        name: "Half Mask Respirators",
        standards: [
          "NIOSH 42 CFR Part 84 Approved",
          "P100 Filtration Standard (99.97% Particulate Filtration Efficiency)",
        ],
      },
      {
        name: "Respirator Filters",
        standards: [
          "NIOSH Approved",
          "P100 Particulate Protection",
        ],
      },
    ],
  },
  {
    id: "safety-storage",
    label: "Safety Assortments & Storage",
    icon: "inventory_2",
    description:
      "Comprehensive safety starter kits, replacement lens assortments, and organized storage solutions for welding PPE. Curated sets ensure compliance with workplace safety standards while dedicated storage systems extend equipment life and maintain hygiene.",
    features: [
      "Complete PPE starter kits",
      "Replacement lens assortments",
      "Organized storage cabinets",
      "PPE maintenance accessories",
      "OSHA compliance packages",
      "Custom kit configurations",
    ],
    industries: [
      "Welding Training Centers",
      "Manufacturing Facilities",
      "Construction Companies",
      "Maintenance Departments",
      "Educational Institutions",
      "Safety Supply Distribution",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.safetyStorage,
    subCategories: [
      "Welding Gear Ready-Paks", "Welders Backpacks & Duffle Bags",
    ],
    useCases: [
      {
        name: "Welding Gear Ready-Paks",
        standards: [
          "Aggregate Certifications (Bundles contain mixed components meeting ANSI Z87.1, NIOSH 42 CFR Part 84, and ASTM D6413)",
        ],
      },
      {
        name: "Welders Backpacks & Duffle Bags",
        standards: [
          "1680 Denier Industrial Fabric Specification",
        ],
      },
    ],
  },
  {
    id: "foot-protection",
    label: "Foot Protection",
    icon: "do_not_step",
    description:
      "Industrial-grade welding boots and safety footwear engineered for hazardous welding environments. Featuring composite or steel toe caps, heat-resistant soles, and flame-retardant uppers to protect against molten metal splash, heavy impacts, and extreme temperatures on the shop floor.",
    features: [
      "Safety toe cap (200 Joule impact)",
      "Heat-resistant sole (HRO) up to 300°C",
      "Flame-retardant leather uppers",
      "Metatarsal guard options",
      "Slip-resistant outsoles",
      "Electrical hazard (EH) rated",
    ],
    industries: [
      "All Welding Operations",
      "Heavy Fabrication",
      "Construction Sites",
      "Foundries & Steel Mills",
      "Pipeline Construction",
      "Shipbuilding",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.footProtection,
    subCategories: [
      "Welding Shoes & Boots",
    ],
    useCases: [
      {
        name: "Welding Shoes & Boots",
        standards: [
          "ASTM F2413 (Standard Specification for Performance Requirements for Protective (Safety) Toe Cap Footwear)",
          "EN ISO 20345 (Personal protective equipment - Safety footwear)",
          "Heat Resistant Sole (HRO) up to 300°C",
          "200 Joule Impact Protection",
        ],
      },
    ],
  },
  {
    id: "hearing-protection",
    label: "Hearing Protection",
    icon: "hearing",
    description:
      "Professional hearing protection solutions designed for high-noise welding and fabrication environments. From disposable foam earplugs to premium electronic earmuffs with ambient sound amplification, ensuring OSHA-compliant noise reduction without compromising situational awareness.",
    features: [
      "Noise Reduction Rating (NRR) compliant",
      "Foam, silicone & electronic options",
      "Compatible with welding helmets",
      "Comfortable for extended wear",
      "Reusable & disposable variants",
      "OSHA noise regulation compliant",
    ],
    industries: [
      "All Welding Operations",
      "Heavy Fabrication Shops",
      "Grinding & Cutting Operations",
      "Construction Sites",
      "Shipbuilding",
      "Manufacturing Plants",
    ],
    image: SITE_IMAGES.welding.categoryCards.safety.hearingProtection,
    subCategories: [
      "Ear Protection",
    ],
    useCases: [
      {
        name: "Ear Protection",
        standards: [
          "ANSI S3.19-1974 (Method for the Measurement of Real-Ear Protection of Hearing Protectors and Physical Attenuation of Earmuffs)",
          "EPA NRR (Noise Reduction Rating) Compliance",
        ],
      },
    ],
  },
];

export const ACCESSORIES_CATEGORIES: WeldingMainCategory[] = [
  {
    id: "equipment-accessories",
    label: "Equipment Accessories",
    icon: "build",
    description: "Essential accessories for welding power sources, wire feeders, and ancillary equipment. Including remote controls, voltage sensing cables, and coolant systems to optimize your welding equipment performance and versatility.",
    features: [
      "Remote controls & pendants",
      "Voltage sensing cables",
      "Work clamps & ground cables",
      "Gas flow regulators & mixers",
      "Water coolers & coolant systems",
      "Power source adapters & plugs"
    ],
    subCategories: [
      "Carts, Undercarriages, Covers",
      "Coolers",
      "Control Cables",
      "Drive Rolls",
      "Wire Feeder Add-Ons",
      "Switches & Remote Controls",
      "Engine Drive Accessories",
      "Submerged Arc Welder & Feeder Accessories",
      "Sensors & Monitoring Products"
    ],
    industries: [
      "All Welding Operations",
      "Fabrication Shops",
      "Field & Site Welding",
      "Industrial Maintenance"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.equipment,
    useCases: [
      {
        name: "Control Cables",
        products: ["Control Cable 12 Pin", "Control Cable 14 Pin", "Control Cable 22 Pin", "Control Cable 9 Pin", "Control Cable 6 Pin", "Control Cable ArcLink 5 Pin", "Cable Sense Lead", "Weld/Work Cable"],
        standards: ["IEC 60974-12 (Coupling devices for welding cables)", "RoHS Compliant", "UL Listed (for specific power cables)"],
      },
      {
        name: "Coolers",
        products: ["Cool Arc 40", "Cool Arc 50", "Cool Arc 55", "Cool Arc 26"],
        standards: ["CE (Europe)", "C-Tick (Australia)", "IEC 60974-2 (Liquid cooling systems for arc welding)", "CSA Certified"],
      },
      {
        name: "Carts, Undercarriages, Covers",
        products: ["Welding Carts", "Undercarriages", "Protective Covers", "Cylinder Racks", "Running Gear Kits"],
        standards: [],
      },
      {
        name: "Drive Rolls",
        products: ["V-Groove Drive Rolls", "Knurled Drive Rolls", "U-Groove Drive Rolls", "Split Drive Rolls"],
        standards: [],
      },
      {
        name: "Wire Feeder Add-Ons",
        products: ["Feeder Conversion Kits", "Feeder Mounting Kits", "Wire Straighteners", "Feeder Brackets"],
        standards: [],
      },
      {
        name: "Switches & Remote Controls",
        products: ["Foot Amptrol", "Hand Amptrol", "Remote Output Controls", "Wireless Remotes"],
        standards: ["CE (Europe)", "FCC Part 15 (for Wireless Remotes)", "IEC 60974-1"],
      },
      {
        name: "Engine Drive Accessories",
        products: ["Spark Arrestors", "Battery Chargers", "Engine Covers", "Fuel Tanks"],
        standards: ["USDA Forest Service Approved (for Spark Arrestors)", "EPA/CARB Compliant (for Fuel Tanks/Emissions)"],
      },
      {
        name: "Submerged Arc Welder & Feeder Accessories",
        products: ["Flux Recovery Systems", "Sub Arc Torches", "Flux Hoppers", "Travel Carriages"],
        standards: ["IEC 60974-1"],
      },
      {
        name: "Sensors & Monitoring Products",
        products: ["Arc Monitoring Sensors", "Production Monitoring Modules", "Weld Data Tracking Devices"],
        standards: ["CE", "FCC Compliance"],
      },
    ],
  },
  {
    id: "cutting-accessories",
    label: "Cutting Accessories",
    icon: "content_cut",
    description: "Plasma cutting consumables and accessories for manual and automated cutting operations. Precision-engineered for clean cuts, extended consumable life, and optimal cut quality across a range of material types and thicknesses.",
    features: [
      "High-precision torch consumables",
      "Extended-life cutting nozzles",
      "Cutting guides & track systems",
      "Circle cutting attachments",
      "Mechanized cutting torches",
      "Replacement parts & kits"
    ],
    subCategories: [
      "Plasma Accessories",
      "Plasma Consumables",
      "Plasma Torches"
    ],
    industries: [
      "Steel Fabrication",
      "Demolition & Scrap",
      "Maintenance & Repair",
      "Construction"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.cutting,
    useCases: [
      {
        name: "Plasma Accessories",
        products: ["Torch Leads", "Work Clamps", "Air Filters", "Consumable Kits"],
        standards: ["IEC 60974-7 (Torches for arc welding and allied processes)"],
      },
      {
        name: "Plasma Consumables",
        products: ["Electrodes", "Nozzles", "Swirl Rings", "Retaining Caps", "Shield Cups"],
        standards: [],
      },
      {
        name: "Plasma Torches",
        products: ["Handheld Plasma Torches", "Machine Plasma Torches"],
        standards: ["IEC 60974-7", "CE", "CSA Certified"],
      },
    ],
  },
  {
    id: "gun-torch-accessories",
    label: "Gun & Torch Accessories",
    icon: "flashlight_on",
    description: "Complete range of MIG gun and TIG torch consumables including contact tips, nozzles, diffusers, liners, and torch bodies. Precision-manufactured for optimal current transfer, consistent wire feeding, and extended service life.",
    features: [
      "Contact tips, nozzles & diffusers",
      "Gun liners & conduit assemblies",
      "Torch bodies & handle assemblies",
      "Universal & brand-specific fitments",
      "Extended-life premium options",
      "Robotic gun consumables"
    ],
    subCategories: [
      "Gun Contact Tips",
      "Gun Nozzles",
      "Gun Adapters & Connectors",
      "Gun Diffusers & Insulators",
      "Gun Liners",
      "Gun Tubes",
      "TIG Torch Expendables",
      "Submerged Arc Torch Parts"
    ],
    industries: [
      "All MIG/MAG Welding",
      "TIG Welding Operations",
      "Robotic Welding Cells",
      "Fabrication Shops"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.gunTorch,
    useCases: [
      {
        name: "Gun Contact Tips & Expendables",
        products: ["Copper Contact Tips", "Heavy Duty Contact Tips", "Tapered Contact Tips", "Conical Nozzles", "Gas Diffusers", "Steel/Teflon Liners"],
        standards: [],
      },
      {
        name: "TIG Torch Expendables",
        products: ["Collets", "Collet Bodies", "Gas Lenses", "Ceramic Cups", "Back Caps"],
        standards: [],
      },
    ],
  },
  {
    id: "helmet-accessories",
    label: "Helmet Accessories",
    icon: "face_retouching_natural",
    description: "Replacement lenses, headgear, sweatbands, and specialized attachments for welding helmets to ensure continued safety, comfort, and optical clarity in demanding environments.",
    features: [
      "Auto-darkening replacement filters",
      "Impact-resistant cover plates",
      "Adjustable ergonomic headgear",
      "Magnifying diopter lenses",
      "PAPR connection kits"
    ],
    subCategories: [
      "Replacement Lenses",
      "Sweatbands & Headgear",
      "Hard Hat Adapters",
      "Cheater Lenses",
      "Helmet Shells"
    ],
    industries: [
      "All Welding Operations",
      "Metal Fabrication",
      "Training & Education",
      "Maintenance & Repair"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.helmet,
    useCases: [
      {
        name: "Replacement Lenses & Expendables",
        products: ["Outside Cover Lenses", "Inside Cover Lenses", "Grinding Shields", "Sweatbands", "Headgear Assemblies"],
        standards: ["ANSI Z87.1+ (High Impact Resistance for cover lenses)", "CSA Z94.3"],
      },
    ],
  },
  {
    id: "general-accessories",
    label: "General Accessories",
    icon: "category",
    description: "A wide array of general welding accessories to support daily operations, including gouging carbons, receptacles, stick options, and non-consumable tungsten electrodes.",
    features: [
      "Heavy-duty gouging carbons",
      "Industrial grade receptacles",
      "Electrode ovens & storage",
      "Tungsten sharpening tools",
      "Protective welding curtains"
    ],
    subCategories: [
      "Arc Gouging Carbons",
      "Miscellaneous",
      "Receptacles",
      "Stick Options",
      "Tungsten Electrodes"
    ],
    industries: [
      "Heavy Fabrication",
      "Maintenance & Repair",
      "Shipbuilding",
      "Pipeline Construction"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.general,
    useCases: [
      {
        name: "Arc Gouging Carbons",
        products: ["Pointed Gouging Electrodes", "Flat Gouging Electrodes", "Jointed Gouging Electrodes"],
        standards: [],
      },
      {
        name: "Tungsten Electrodes",
        products: ["2% Thoriated Tungsten", "2% Ceriated Tungsten", "Lanthanated Tungsten", "Pure Tungsten"],
        standards: ["AWS A5.12/A5.12M", "ISO 6848 (Non-consumable tungsten electrodes for inert gas shielded arc welding)"],
      },
      {
        name: "Receptacles",
        products: ["Power Receptacles", "Adapter Receptacles"],
        standards: ["UL Listed", "NEMA Configurations (e.g., NEMA 6-50)"],
      },
    ],
  },
  {
    id: "mechanized-automation-accessories",
    label: "Mechanized Automation Accessories",
    icon: "settings",
    description: "Enhance your mechanized automation systems with precision accessories, slides, and seam tracking components to improve weld consistency and increase throughput without full robotics.",
    features: [
      "High-precision motorized slides",
      "Tactile & laser seam tracking",
      "Pendulum oscillator systems",
      "Heavy-duty travel carriages",
      "Modular positioner additions"
    ],
    subCategories: [
      "Seam Tracking Components",
      "Slides & Controls",
      "Oscillator Systems",
      "Travel Carriages",
      "Positioner Add-ons"
    ],
    industries: [
      "Pressure Vessel Manufacturing",
      "Pipe & Tube Fabrication",
      "Tank Manufacturing",
      "Shipbuilding"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.mechanizedAutomation,
    useCases: [
      {
        name: "Robotic & Mechanized Systems",
        products: ["Projection-Pak\u2122 Resistance Systems", "TruAxis\u2122 Straightening Systems", "Robotic Peripherals"],
        standards: ["ISO 10218-1 (Robots and robotic devices - Safety requirements)", "ISO 10218-2 (Industrial robot system integration)", "ANSI/RIA R15.06"],
      },
    ],
  },
  {
    id: "robotic-automation-accessories",
    label: "Robotic Automation Accessories",
    icon: "smart_toy",
    description: "Crucial components to maintain peak performance in robotic welding cells, including torch cleaning stations, collision sensors, and specialized robotic wire delivery systems.",
    features: [
      "Automated reaming stations",
      "Anti-spatter injection systems",
      "Pneumatic wire cutters",
      "Quick-change collision sensors",
      "Robotic cable management"
    ],
    subCategories: [
      "Torch Cleaning Stations",
      "Wire Cutters",
      "TCP Alignment Tools",
      "Collision Sensors",
      "Robotic Cable Management"
    ],
    industries: [
      "Automotive Manufacturing",
      "Heavy Equipment",
      "Structural Steel",
      "High-Volume Production"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.roboticAutomation,
  },
  {
    id: "weld-fume-accessories",
    label: "Weld Fume Accessories",
    icon: "air",
    description: "Maintain a safe and compliant working environment with replacement filters, extraction arms, hoses, and accessories for your weld fume extraction systems.",
    features: [
      "HEPA & activated carbon filters",
      "Flexible articulated extraction arms",
      "High-vacuum hoses & nozzles",
      "Downdraft bench accessories",
      "Custom extraction hoods"
    ],
    subCategories: [
      "Replacement Filters",
      "Extraction Arms & Hoses",
      "Portable Fume Extractors",
      "Downdraft Tables",
      "Hoods & Canopies"
    ],
    industries: [
      "Confined Space Welding",
      "Heavy Fabrication Shops",
      "Training & Education",
      "Stainless Alloy Welding"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.weldFume,
    useCases: [
      {
        name: "Fume Extraction Parts",
        products: ["Filter Replacements", "Extraction Arms", "Fume Extraction Guns"],
        standards: ["MERV 14 / MERV 16 (Filter efficiency ratings)", "OSHA/NIOSH standard compliances (for airborne particulate reduction)"],
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "handyman",
    description: "Durable hand tools specifically designed for the welding professional. Including chipping hammers, wire brushes, pliers, clamps, and gauges to ensure precise fit-up and clean finish.",
    features: [
      "Spring-handle chipping hammers",
      "Stainless & carbon wire brushes",
      "Welding pliers & snips",
      "Heavy-duty C-clamps & magnets",
      "Precision fillet weld gauges"
    ],
    subCategories: [
      "Chipping Hammers",
      "Wire Brushes",
      "Pliers & Clamps",
      "Fillet Gauges",
      "Magnetic Squares"
    ],
    industries: [
      "All Welding Operations",
      "Fabrication Shops",
      "Construction Sites",
      "Maintenance Departments"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.tools,
    useCases: [
      {
        name: "Hand Tools & Fixtures",
        products: ["Chipping Hammers", "Wire Brushes", "Pliers", "Magnetic Squares", "Hand Lifters"],
        standards: [],
      },
      {
        name: "Rod Ovens",
        products: ["Portable Rod Ovens", "Bench Rod Ovens"],
        standards: ["UL Listed", "CE", "CSA Certified"],
      },
      {
        name: "Welding Curtains & Blankets",
        products: ["Welding Blankets", "Welding Curtains", "Spark Containment Curtains"],
        standards: ["ANSI / FM 4950 (Evaluating Welding Pads, Blankets and Curtains)", "NFPA 701 (Standard Methods of Fire Tests for Flame Propagation of Textiles and Films)", "ASTM D6413"],
      },
    ],
  },
  {
    id: "wire-delivery",
    label: "Wire Delivery Accessories",
    icon: "settings_input_component",
    description: "Optimize your wire feeding process with advanced wire delivery systems, conduit, straighteners, and bulk wire pay-off accessories for uninterrupted, high-volume automated welding.",
    features: [
      "Low-friction conduit systems",
      "Multi-roll wire straighteners",
      "Quick-connect conduit fittings",
      "Bulk drum pay-off hats",
      "Replacement feed roll kits"
    ],
    subCategories: [
      "Conduit Systems",
      "Wire Straighteners",
      "Quick Connects",
      "Feed Roll Kits",
      "Bulk Wire Pay-off Systems"
    ],
    industries: [
      "Robotic Welding Cells",
      "Automated Production Lines",
      "Heavy Equipment Manufacturing",
      "Shipbuilding"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.wireDelivery,
  },
  {
    id: "software",
    label: "Software",
    icon: "terminal",
    description: "Digital solutions to track, monitor, and optimize your welding operations. From real-time weld data monitoring to offline robotic programming and fleet management.",
    features: [
      "Real-time parameter monitoring",
      "Cloud-based production tracking",
      "3D offline robot programming",
      "Equipment fleet management",
      "Weld quality documentation"
    ],
    subCategories: [
      "Weld Data Monitoring",
      "Production Tracking Software",
      "Offline Programming",
      "Fleet Management",
      "Quality Assurance Tools"
    ],
    industries: [
      "High-Volume Manufacturing",
      "Automotive",
      "Aerospace",
      "Code-Critical Fabrication"
    ],
    image: SITE_IMAGES.welding.categoryCards.accessories.software,
    useCases: [
      {
        name: "Welding Software Solutions",
        products: ["Power Wave Utilities", "Weld Data Monitoring Software", "Weld Sequencer Software"],
        standards: ["ISO/IEC 27001 (Information Security Management - Cloud Services)", "SOC 2 Type II (Data Security Compliance)"],
      },
    ],
  }
];
