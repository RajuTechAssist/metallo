import { SITE_IMAGES } from "@/config/images";

/* ═══════════════════════════════════════════════════════════════
   WELDING MAIN CATEGORY DATA
   Rich descriptions, features, and applications for each
   main product category displayed on the Welding & Allied page.
   ═══════════════════════════════════════════════════════════════ */

export interface WeldingProduct {
  name: string;
  certifications: string[];
  datasheetUrl?: string;
}

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
  useCases?: { name: string; products?: (string | WeldingProduct)[]; standards?: (string | { label: string; datasheetUrl: string })[] }[];
}

/* ── CONSUMABLES (Filler Metal Sub-Categories) ─────────────── */
/* Data sourced from wballoys_full_clean_List.json — 5 consumable categories
   with product sub-groups and certifications mapped to local PDF datasheets */

export const CONSUMABLE_CATEGORIES: WeldingMainCategory[] = [
  {
    id: "mig-gmaw",
    label: "MIG Welding Wire (GMAW)",
    icon: "electric_bolt",
    description: "Precision-engineered solid wire electrodes for Gas Metal Arc Welding (GMAW). Our MIG wires deliver exceptional arc stability, ultra-low spatter, and superior feedability across short-circuit, globular, and spray transfer modes. Available in steel, stainless steel, and nickel & copper alloy grades for robotic and manual applications.",
    features: ["ER70S-6, ER80S-Ni1, ER90S-D2, ER100S-G classifications", "Copper-coated & copper-free surface options", "Optimized for robotic & automated systems", "Superior feedability in long conduit lengths", "Low diffusible hydrogen (H4/H8) designations", "ABS, DNV, CWB, LR marine approvals"],
    industries: ["Shipbuilding & Marine", "Structural Steel Fabrication", "Offshore Platforms", "Automotive & Robotics", "Pressure Vessels", "Heavy Equipment Manufacturing"],
    image: SITE_IMAGES.welding.categoryCards.consumables.migTig,
    useCases: [
      {
        name: "Steel Non & Low Alloyed",
        products: [
          {
            name: "WB100S-G",
            certifications: ["AWS A5.28: ER100S-G", "BS EN 16834-A: G 62 4 M21 Mn3NiCrMo"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB100S-G.pdf"
          },
          {
            name: "WB120S-G",
            certifications: ["AWS A5.28: ER120S-G", "BS EN 16834-A: G 89 4 M21 Mn4Ni2CrMo"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB120S-G.pdf"
          },
          {
            name: "WB6000",
            certifications: ["AWS A5.18: ER70S-6", "BS EN ISO 14341-A: G 46 4 M21 3Si1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6000.pdf"
          },
          {
            name: "WB6002",
            certifications: ["AWS A5.18: ER70S-6", "BS EN ISO 14341-A: G 46 5 M21 4Si1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6002.pdf"
          },
          {
            name: "WB6012M",
            certifications: ["AWS A5.28: ER80S-G"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6012M.pdf"
          },
          {
            name: "WB6013",
            certifications: ["AWS A5.28: ER80S-Ni1", "BS EN ISO 14341-A: G 46 6 M 3 Ni1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6013.pdf"
          },
          {
            name: "WB6040",
            certifications: ["AWS A5.28: ER80S-Ni2 B", "BS EN ISO 14341-A: G 50 6 M 2 Ni2"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6040.pdf"
          },
          {
            name: "WB6041E",
            certifications: ["AWS A5.28: ER80S-D2/ER90S-D2", "BS EN ISO 14341-A: G 50 5 M21 4Mo"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6041E.pdf"
          },
          {
            name: "WB6042",
            certifications: ["AWS A5.28: ER80S-B2", "BS EN ISO 21952-A: G CrMo1Si"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6042.pdf"
          },
          {
            name: "WB6047P",
            certifications: ["AWS A5.28: ER100S-G"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Steel_Non_&_Low_Alloyed/WB6047P.pdf"
          },
        ]
      },
      {
        name: "Stainless Steel",
        products: [
          {
            name: "WB17-4PH",
            certifications: ["AWS A5.9: ER630"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB 17-4PH.pdf"
          },
          {
            name: "WB22-9-3LM",
            certifications: ["AWS A5.9: ER2209", "BS EN ISO 14343-A: G 22 9 3 NL"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB22-9-3LM.pdf"
          },
          {
            name: "WB25-9-3LM",
            certifications: ["AWS A5.9: ER2594", "BS EN ISO 14343-A: G 25 9 4 NL"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB25-9-3LM.pdf"
          },
          {
            name: "WB308HM",
            certifications: ["AWS A5.9: ER308H", "BS EN ISO 14343-A: G 19 9 H"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB308HM.pdf"
          },
          {
            name: "WB308LM",
            certifications: ["AWS A5.9: ER308LSi", "BS EN ISO 14343-A: G 19 9 LSi"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB308LM.pdf"
          },
          {
            name: "WB309LM",
            certifications: ["AWS A5.9: ER309LSi", "BS EN ISO 14343-A: G 23 12 L Si"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB309LM.pdf"
          },
          {
            name: "WB309L",
            certifications: ["AWS A5.9: ER309L", "BS EN ISO 14343-A: G 23 12 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB309L.pdf"
          },
          {
            name: "WB309LMo-M",
            certifications: ["AWS A5.9: ER309LMo", "BS EN ISO 14343-A: G 23 12 2 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB309LMo-M.pdf"
          },
          {
            name: "WB310M",
            certifications: ["AWS A5.9: ER310", "BS EN ISO 14343-A: G 25 20"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB310M.pdf"
          },
          {
            name: "WB316HM",
            certifications: ["AWS A5.9: ER316H", "BS EN ISO 14343-A: G 19 12 3 H"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB316HM.pdf"
          },
          {
            name: "WB316LM",
            certifications: ["AWS A5.9: ER316LSi", "BS EN 14343-A: G 19 12 3 LSi"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB316LM.pdf"
          },
          {
            name: "WB316L",
            certifications: ["AWS A5.9: ER316L", "BS EN 14343-A: G 19 12 3 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Stainless_Steel/WB316L.pdf"
          },
        ]
      },
      {
        name: "Nickel & Copper Alloy",
        products: [
          {
            name: "WB59M",
            certifications: ["AWS A5.14: ERNiCrMo-13", "BS EN ISO 18274: NiCr23Mo16"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB59M.pdf"
          },
          {
            name: "WB61M",
            certifications: ["AWS A5.14: ERNi-1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB61M.pdf"
          },
          {
            name: "WB67M",
            certifications: ["AWS A5.7: ERCuNi"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB67M.pdf"
          },
          {
            name: "WB718M",
            certifications: ["AWS A5.14/A5.14M: ERNiFeCr-2 UNS: N07718"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB718M.pdf"
          },
          {
            name: "WB82M",
            certifications: ["AWS A5.14: ERNiCr-3", "BS EN ISO 18274: NiCr20Mn3Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB82M.pdf"
          },
          {
            name: "WB625M",
            certifications: ["AWS A5.14: ERNiCrMo-3", "BS EN ISO 18274: NiCr22Mo9Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WB625M.pdf"
          },
          {
            name: "WBC26M",
            certifications: ["AWS A5.7: ERCuNiAl", "BS EN ISO 24373: CuAl9Ni5Fe3Mn2"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MIG_WELDING_WIRE(GMAW)/Nickel_&_Copper_Alloy/WBC26M.pdf"
          },
        ]
      },
    ]
  },

  {
    id: "fcaw",
    label: "Flux Core Wire Welding (FCAW)",
    icon: "air",
    description: "Gas-shielded and self-shielded flux-cored arc welding (FCAW) wires designed for high-deposition, all-position welding. Covering flux-cored, metal-cored, creep-resisting, and stainless steel grades, these wires offer superior penetration, excellent bead profile, and high deposition efficiency for structural steel, shipbuilding, and heavy fabrication applications.",
    features: ["E71T-1/9, E81T1-Ni1 classifications", "All-position high-deposition capability", "CO₂ and mixed gas compatible", "Metal-cored options for robotic welding", "Creep-resisting grades for power generation", "Stainless steel cored wires for corrosion resistance"],
    industries: ["Structural Steel", "Shipbuilding & Marine", "Heavy Equipment", "Power Generation", "Platform Fabrication", "General Fabrication"],
    image: SITE_IMAGES.welding.categoryCards.consumables.gasShielded,
    useCases: [
      {
        name: "Flux Cored Non & Low Alloyed",
        products: [
          {
            name: "WB6121",
            certifications: ["AWS A5.29: E81T1-Ni1M/C-JH4", "BS EN ISO 17632-A: T50 6 1Ni P M21 1 H5", "AWS A5.36: E81T1-M21A8-Ni1 H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6121-Cu.pdf"
          },
          {
            name: "WB6121-SR",
            certifications: ["AWS A5.29: E81T1-Ni1M/C-JH4", "BS EN ISO 17632-A: T50 6 1Ni P M21 1 H5", "AWS A5.36: E81T1-M21A8-Ni1 H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6121SR.pdf"
          },
          {
            name: "WB6111E-NG",
            certifications: ["AWS A5.20: E71T-8", "AWS A5.36/A5.36M: E71T8-A2"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6111E-NG.pdf"
          },
          {
            name: "WB6111E",
            certifications: ["AWS A5.20-95: E71T1-M/T9M/T-12M JDH4", "AWS A5.36: E71T1-M21A4-CS1-DH4 / E71T1-C1A2-C S1-DH4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/E71T-1- M WB6111E.pdf"
          },
          {
            name: "WB6114",
            certifications: ["AWS A5.20: E71T1-M/T9M/T-12M JDH4", "E71T1C/T-9C/T-12C DH4", "AWS A5.36: E71T1-M21A4-CS1-DH4 / E71T1-C1A2-C S1-DH4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6114.pdf"
          },
          {
            name: "WB6121-Mo",
            certifications: ["AWS A5.29: E101T1-K2M-JH4", "BS EN ISO 18276-A: T62 4 Mn1.5Ni P M21 1 H5", "AWS A5.36: E81T1-M21A4-G-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6121-Mo.pdf"
          },
          {
            name: "WB6121-Cu",
            certifications: ["AWS A5.29: E81T1-WGM-H4", "BS EN ISO 17632-A: T46 4 Z P M21 1 H5", "AWS A5.36: E81T1-M21A4-G-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6121-Cu.pdf"
          },
          {
            name: "WB6123",
            certifications: ["AWS A5.29: E81T1-Ni2M/C-JH4", "BS EN ISO 17632-A: T50 6 2Ni P M21 1 H5", "AWS A5.36: E71T5-M21-A4-CS1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6123.pdf"
          },
          {
            name: "WB6130",
            certifications: ["AWS A5.20: E71T5-M/C-JH4", "BS EN ISO 17632-A: T42 4 B M21 1 H5", "AWS A5.36: E71T5-M21-A4-CS1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6130.pdf"
          },
          {
            name: "WB6131",
            certifications: ["AWS A5.36: E91-T5-K4", "BS EN ISO 17632-A: T42 4 B M21 1 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6131.pdf"
          },
          {
            name: "WB6132",
            certifications: ["AWS A5.29: E110T5-K4M-H4", "BS EN ISO 18276-A: T69 6 Mn2NiCrMo B 4 2 H5", "AWS A5.36: E110T5-M21A8-K4-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6132.pdf"
          },
          {
            name: "WB6132-R",
            certifications: ["AWS A5.29: E111T1-GM-JH4", "EN ISO 18276-A: T69 6 Mn2NiMo P M21 1 H5", "AWS A5.36: E111T1-M21A8-K3-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Flux_Cored_Non_&_Low_Alloyed/WB6132-R.pdf"
          },
        ]
      },
      {
        name: "Metal Cored Non & Low Alloyed",
        products: [
          {
            name: "WB6105",
            certifications: ["AWS A5.18: E70C-6M-H4", "BS EN ISO 17632-A: T46 6 M M21 1 H5", "AWS A5.36: E70T15-M21A8-CS1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6105.pdf"
          },
          {
            name: "6105-Ni1",
            certifications: ["AWS A5.28: E80C-Ni1H4", "BS EN ISO 17632-A: T50 6 1Ni M M21 1 H5", "AWS A5.36: E80T15-M21A8-Ni1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB Alloys 6105-Ni1.pdf"
          },
          {
            name: "WB6105-NiCu",
            certifications: ["AWS A5.28: E80C-GH4", "BS EN ISO 17632-A: T46 6 Z M M21 1 H5", "AWS A5.36: E81T15-M21A8-GH4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6105-NiCu.pdf"
          },
          {
            name: "WB6105-NiMo",
            certifications: ["AWS A5.28: E90C-K3H4", "BS EN ISO 18276-A: T55 6 1NiMo M M21 1 H5", "AWS A5.36: E91T15-M21A8-K1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6105-NiMo.pdf"
          },
          {
            name: "WB6132-MC",
            certifications: ["AWS A5.28: E110C-K4H4", "EN ISO 18276-A: T69 6 Mn2NiCrMo M M21 1 H5", "AWS A5.36: E110T15-M21A8-K4-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6132-MC.pdf"
          },
          {
            name: "WB6134-MC",
            certifications: ["AWS A5.28: E120C-GH4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6134-MC.pdf"
          },
          {
            name: "WB6154-MC",
            certifications: ["DIN 8555-83: MSG6-60 + MF10-GF-65-GR"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Metal_Cored_Non_&_Low_Alloyed/WB6154-MC.pdf"
          },
        ]
      },
      {
        name: "Cored Wire Creep Resisting Steel",
        products: [
          {
            name: "WB6P91",
            certifications: ["AWS A5.29: E91T1-B9MH4", "BS EN ISO 17634-B: T69T1-1M-9C1MV-H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WB6P91.pdf"
          },
          {
            name: "WB6602",
            certifications: ["AWS A5.29: E80T5-GM-H4", "BS EN ISO 17634-A: T46 CrMo1 B M21 4 H5", "AWS A5.36: E80T5-G-M21-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WB6602.pdf"
          },
          {
            name: "WB6602ER",
            certifications: ["AWS A5.29: E81T1-B2M-H4", "BS EN ISO 17634-A: T CrMo1 P M21 1 H5", "AWS A5.36: E81T1-B3C-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WB6602ER.pdf"
          },
          {
            name: "WB6603ER",
            certifications: ["AWS A5.29: E91T1-B3M-H4", "BS EN ISO 17634-A: T CrMo2 P M21 1 H5", "AWS A5.36: E91T1-B3C-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WB6603ER.pdf"
          },
          {
            name: "WB6615ER",
            certifications: ["AWS A5.36: E81T1-B2M"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WB6615ER.pdf"
          },
          {
            name: "WBP91-MC",
            certifications: ["AWS A5.28: E90C-B9MH4", "BS EN ISO 17634-B: T69T15-0M-9C1MV-H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Cored_Wire_Creep_Resisting_Steel/WBP91MC.pdf"
          },
        ]
      },
      {
        name: "Stainless Steel Cored Wires",
        products: [
          {
            name: "WB6308H",
            certifications: ["AWS A5.22: E308HT0-4", "BS EN ISO 17633-A: T 19 9 H"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6308H.pdf"
          },
          {
            name: "WB6308HP",
            certifications: ["AWS A5.22: E308HT1-1/4", "BS EN ISO 17633-A: T 19 9 H P M21 1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6308HP.pdf"
          },
          {
            name: "WB6308L",
            certifications: ["AWS A5.22: E308LTO-1/4", "BS EN ISO 17633-A: T 19 9 L R M21 3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6308L.pdf"
          },
          {
            name: "WB6308LP",
            certifications: ["AWS A5.22: E308LT1-1/4", "BS EN ISO 17633-A: T 19 9 L P M1/C 1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6308LP.pdf"
          },
          {
            name: "WB6309L",
            certifications: ["AWS A5.22: E309LTO-1/4", "BS EN ISO 17633-A: T 23 12 L R M21 3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6309L.pdf"
          },
          {
            name: "WB6309LP",
            certifications: ["AWS A5.22: E309LT1-1/4", "BS EN ISO 17633-A: T 23 12 L P M1/C 1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6309LP.pdf"
          },
          {
            name: "WB6309LMoP",
            certifications: ["AWS A5.22: E309LMoT1-1/4", "BS EN ISO 17633-A: T 23 12 2 L P M1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6309LMoP.pdf"
          },
          {
            name: "WB6310",
            certifications: ["AWS A5.22: E310T0-1/4", "BS EN ISO 17633-A: T 25 20 R C1/M21 3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6310.pdf"
          },
          {
            name: "WB6316HP",
            certifications: ["AWS A5.22: E316T1-1/4", "BS EN ISO 17633-A: T 19 12 3 H P M21 1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6316HP.pdf"
          },
          {
            name: "WB6316L",
            certifications: ["AWS A5.22: E316LTO-1/4", "BS EN ISO 17633-A: T 19 12 3 L R M3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6316L.pdf"
          },
          {
            name: "WB6316LP",
            certifications: ["AWS A5.22: E316LT1-1/4", "BS EN ISO 17633-A: T 19 12 3 L P M1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6316LP.pdf"
          },
          {
            name: "WB6347",
            certifications: ["AWS A5.22: E347T0-1/4", "BS EN ISO 17633-A: T 19 9 Nb R M3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6347.pdf"
          },
          {
            name: "WB6347P",
            certifications: ["AWS A5.22: E347T1-1/4", "BS EN ISO 17633-A: T 19 9 Nb P M1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6347P.pdf"
          },
          {
            name: "WB6410NiMo",
            certifications: ["AWS A5.22: E410NiMoT0-1/4", "BS EN ISO 17633-A: T 13 4 M M3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6410NiMo.pdf"
          },
          {
            name: "WB6410NiMoP",
            certifications: ["AWS A5.22: E410NiMoT1-1/4", "BS EN ISO 17633-A: T 13 4 R C/M1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6410NiMoP.pdf"
          },
          {
            name: "WB6625-P",
            certifications: ["BS EN ISO 12153: T Ni6625 P M 2", "AWS A5.34: ENiCrMo3T1-1/4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB6625-P.pdf"
          },
          {
            name: "WB62293L",
            certifications: ["AWS A5.22: E2209T0-1/4", "BS EN ISO 17633-A: T 22 9 3 N L R"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB62293L.pdf"
          },
          {
            name: "WB62293LP",
            certifications: ["AWS A5.22-95: E2209T1-1/4", "BS EN ISO 17633-A: T 22 9 3 N L P"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/FLUX_CORE_WIRE_WELDING(FCAW)/Stainless_Steel_Cored_Wires/WB62293LP.pdf"
          },
          {
            name: "WB62593L",
            certifications: ["AWS A5.22: E2594T0-1/4", "BS EN ISO 17633-A: T 25 9 4 Cu N L R M3"]
          },
          {
            name: "WB62593LP",
            certifications: ["AWS A5.22: E2594T1-1/4", "BS EN ISO 17633-A: T 25 9 4 Cu N L P M21 1"]
          },
        ]
      },
    ]
  },

  {
    id: "tig-gtaw",
    label: "TIG Welding (GTAW)",
    icon: "hardware",
    description: "Premium TIG welding cut-length rods for Gas Tungsten Arc Welding (GTAW). Engineered for precise, high-quality welds with excellent arc stability and minimal spatter. Available in non & low alloy steel, stainless steel, and nickel & copper alloy grades for critical applications requiring superior weld integrity.",
    features: ["ER70S-6, ER70S-2 classifications", "Precision-cut lengths for manual TIG welding", "Excellent arc stability & weld pool control", "Low spatter, clean weld deposits", "Stainless steel duplex & super duplex grades", "Nickel alloy grades for extreme environments"],
    industries: ["Aerospace & Defense", "Pharmaceutical Manufacturing", "Food & Beverage", "Nuclear Power", "Chemical Processing", "Precision Fabrication"],
    image: SITE_IMAGES.welding.categoryCards.consumables.stick,
    useCases: [
      {
        name: "Non & Low Alloy Steel",
        products: [
          {
            name: "WB6500",
            certifications: ["AWS A5.18: ER70S-6", "BS EN ISO 636-A: W42 3 W3Si1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6500.pdf"
          },
          {
            name: "WB6510",
            certifications: ["AWS A5.18: ER70S-2"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6510.pdf"
          },
          {
            name: "WB6513",
            certifications: ["AWS A5.28: ER80S-Ni1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6513.pdf"
          },
          {
            name: "WB6541",
            certifications: ["AWS A5.28: ER80S-G (A1)", "BS EN ISO 21952-A: G MoSi"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6541.pdf"
          },
          {
            name: "WB6541E",
            certifications: ["AWS A5.28: ER80S-D2 / ER90S-D2"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6541E.pdf"
          },
          {
            name: "WB6542T",
            certifications: ["AWS A5.28: ER80S-B2", "BS EN ISO 21952-A: W CrMo1Si"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/Wb6542.pdf"
          },
          {
            name: "WB6545",
            certifications: ["AWS A5.28: ER90S-B9", "BS EN ISO 21952-A: W CrMo91"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6545.pdf"
          },
          {
            name: "WB6546",
            certifications: ["AWS A5.28: ER80S-B8"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6546.pdf"
          },
          {
            name: "WB6547P",
            certifications: ["AWS A5.28: ER100S-G"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6547P.pdf"
          },
          {
            name: "WB6591",
            certifications: ["AWS A5.28: ER90S-G"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Non_&_Low_Alloy_Steel/WB6591.pdf"
          },
        ]
      },
      {
        name: "Stainless Steel",
        products: [
          {
            name: "WB17-4PH",
            certifications: ["AWS A5.9: ER630", "BS EN ISO 636-A: W42 3 W3Si1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB 17-4PH.pdf"
          },
          {
            name: "WB22-9-3LT",
            certifications: ["AWS A5.9: ER2209", "BS EN ISO 14343-A: W 22 9 3 N L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB22-9-3LT.pdf"
          },
          {
            name: "WB25-9-3LT",
            certifications: ["AWS A5.9: ER2594", "BS EN ISO 14343-A: W 25 9 4 N L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB25-9-3LT.pdf"
          },
          {
            name: "WB308HT",
            certifications: ["AWS A5.9: ER308H", "BS EN ISO 14343-A: W 19 9 H"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB308HT.pdf"
          },
          {
            name: "WB308LT",
            certifications: ["AWS A5.9: ER308L", "BS EN ISO 14343-A: W 19 9 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB308LT.pdf"
          },
          {
            name: "WB309LMoT",
            certifications: ["AWS A5.9: ER309LMo", "BS EN ISO 14343-A: W 23 12 2 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB309LMoT.pdf"
          },
          {
            name: "WB309LT",
            certifications: ["AWS A5.9: ER309L", "BS EN ISO 14343-A: W 23 12 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB309LT.pdf"
          },
          {
            name: "WB310T",
            certifications: ["AWS A5.9: ER310", "BS EN ISO 14343-A: W 25 20"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB310T.pdf"
          },
          {
            name: "WB316HT",
            certifications: ["AWS A5.9: ER316H", "BS EN ISO 14343-A: W 19 12 3 H"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB316HT.pdf"
          },
          {
            name: "WB316LT",
            certifications: ["AWS A5.9: ER316L", "BS EN ISO 14343-A: W 19 12 3 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB316LT.pdf"
          },
          {
            name: "WB409NbT",
            certifications: ["AWS A5.9/A5.9M: ER409Nb", "ASME SFA-5.9: ER409Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB409NbT.pdf"
          },
          {
            name: "WB410NiMoT",
            certifications: ["AWS A5.9: ER410NiMo", "BS EN ISO 14343-A: W 13 4 L"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB410NiMoT.pdf"
          },
          {
            name: "WB800H",
            certifications: ["BS EN ISO 14343-A: W 21 33 Mn Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB800H.pdf"
          },
          {
            name: "WB625T",
            certifications: ["AWS A5.14/A5.14M: ERNiCrMo-3", "BS EN ISO 18274: NiCr22Mo9Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB625T.pdf"
          },
        ]
      },
      {
        name: "Nickel & Copper Alloy",
        products: [
          {
            name: "WB59T",
            certifications: ["AWS A5.14: ERNiCrMo-13"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB59T.pdf"
          },
          {
            name: "WB61T",
            certifications: ["AWS A5.14: ERNi-1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB61T.pdf"
          },
          {
            name: "WB617T",
            certifications: ["AWS A5.14: ERNiCoMo-1", "BS EN ISO 18274-A: NiCr22Co12Mo9"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB617T.pdf"
          },
          {
            name: "WB67T",
            certifications: ["AWS A5.7: ERCuNi"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB67T.pdf"
          },
          {
            name: "WB718T",
            certifications: ["AWS A5.14/A5.14M: ERNiFeCr-2", "UNS: N07718"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB718T.pdf"
          },
          {
            name: "WB82T",
            certifications: ["AWS A5.14: ERNiCr-3", "BS EN ISO 18274: NiCr22Mo9Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB82T.pdf"
          },
          {
            name: "WB90-10CuNi",
            certifications: ["AWS A5.7: ERCuNi10Fe"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WB90_10CuNi.pdf"
          },
          {
            name: "WB625T",
            certifications: ["AWS A5.14/A5.14M: ERNiCrMo-3", "BS EN ISO 18274: NiCr22Mo9Nb"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Stainless_Steel_TiG_Wires/WB625T.pdf"
          },
          {
            name: "WBC27T",
            certifications: ["BS EN ISO 24373: Cu 5410 (CuSn12P)", "EN 14640: CuSn12P"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WBC27T.pdf"
          },
          {
            name: "WBNiCu-7T",
            certifications: ["AWS A5.14: ERNiCu-7", "ASME SFA 5.14"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/TIG_WELDING_(GTAW)/Nickel_&_Copper_Alloy_TIG_Wires/WBNiCu-7T.pdf"
          },
        ]
      },
    ]
  },

  {
    id: "mma-stick",
    label: "MMA Welding (Stick Welding)",
    icon: "construction",
    description: "Comprehensive range of shielded metal arc welding (SMAW) electrodes covering cellulosic, rutile, and low-hydrogen classifications. From deep-penetration pipeline root pass electrodes to moisture-resistant low-hydrogen rods for critical structural and offshore applications. Engineered for consistent X-ray quality deposits with excellent slag detachability.",
    features: ["E6013, E7018, E8018-C3, E9018-M classifications", "Moisture-resistant (H4R) coating technology", "Cryogenic service capability", "All-position welding capability", "Chrome-Moly for elevated temperature service", "Stainless steel & nickel alloy electrodes"],
    industries: ["Pipeline Construction", "Offshore & Subsea", "Power Generation", "Refinery & Petrochemical", "Structural & Bridge Fabrication", "LNG & Cryogenic Storage"],
    image: SITE_IMAGES.welding.categoryCards.consumables.metalCored,
    useCases: [
      {
        name: "Non & Low Alloyed",
        products: [
          {
            name: "H8",
            certifications: ["AWS A5.5: E11018-G MOD 769", "EN ISO 18275-A: E692ZB3 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/H8.pdf"
          },
          {
            name: "WB56S",
            certifications: ["AWS A5.1: E7016-1 H4 R", "BS EN ISO 2560-A: E 42 5 B1 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB56S.pdf"
          },
          {
            name: "WB76S",
            certifications: ["AWS A5.5: E7018-G H4R", "BS EN ISO 2560-A: E 50 6 Mn1Ni B 3 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB76S.pdf"
          },
          {
            name: "WB2000E",
            certifications: ["AWS A5.1-04: E6013", "BSEN 499-95: E42 AR 1 2 LRS: GRADE 1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB2000E.pdf"
          },
          {
            name: "WB2024E",
            certifications: ["AWS A5.1: E6013 B", "BS EN ISO 2560-A: E 42 2R12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB2024E.pdf"
          },
          {
            name: "WB2218E",
            certifications: ["AWS A5.5: E8018-G H4R RCC-M", "MIL-11018-M", "MIL-E-222000/1"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB2218E.pdf"
          },
          {
            name: "WB2318E",
            certifications: ["AWS A5.5: E9018-M"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB2318E AWS ISO[86].pdf"
          },
          {
            name: "WB2518E",
            certifications: ["AWS A5.5: E11018-M H4R", "EN ISO 2560A: E465B32H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB2518E.pdf"
          },
          {
            name: "WB7018-1",
            certifications: ["AWS A5.1: E7018-1H4R", "ABS: 4Y", "DNV: 4Y 40H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB7018-1 VP ABS 2025.pdf"
          },
          {
            name: "WB7018-A1",
            certifications: ["AWS A5.1: E7018-1 H4R", "EN ISO 2560A: E46 2 Mo B3 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB7018-A1.pdf"
          },
          {
            name: "WB8016-G",
            certifications: ["AWS A5.5: E8016-G", "BS EN ISO 2560-A: E 50 6 Mn1Ni B 12 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB8016-G r1.pdf"
          },
          {
            name: "WB8018-B2",
            certifications: ["AWS A5.5: E8018-B2", "BS EN ISO 3580-A: ECrMo1 B 3 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB8018-B2.pdf"
          },
          {
            name: "WB8018-C1",
            certifications: ["AWS A5.5: E8018-C1-H4"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB8018-C1.pdf"
          },
          {
            name: "WB8018-C3",
            certifications: ["AWS A5.5: E8018-C3", "BS EN ISO 2560-A: E 46 4 1Ni B 3 2H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB8018-C3.pdf"
          },
          {
            name: "WB8018-W2",
            certifications: ["AWS A5.5: E8018-W2", "BS EN ISO 2560-A: E 46 4 1Ni B 3 2H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB8018-W2.pdf"
          },
          {
            name: "WB9018-G",
            certifications: ["AWS A5.5: E9018-G", "BS EN 14700: EFe6 Hv700"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB9018-G.pdf"
          },
          {
            name: "WB9119E",
            certifications: ["BS EN 14700: EFe6 Hv700"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB9119E.pdf"
          },
          {
            name: "WB10018-D2",
            certifications: ["AWS A5.5: E10018-D2-H4 R", "BS EN ISO 18275: E625 MnMo BT 3 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB10018-D2 - 2024.pdf"
          },
          {
            name: "WB12018-G",
            certifications: ["AWS A5.5: E12018-G", "BS EN ISO 18275: E79 4 Mn3.5Ni1CrMo B 4 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB12018-G.pdf"
          },
          {
            name: "WB12018-M",
            certifications: ["AWS A5.5: E12018-M", "BS EN ISO 18275: E79 4 Mn2Ni1CrMo B 4 2 H5"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Non_&_Low_Alloyed_welding_Electrodes/WB12018-M.pdf"
          },
        ]
      },
      {
        name: "Stainless Steel",
        products: [
          {
            name: "WB4404E",
            certifications: ["AWS A5.4: E308L-17", "BS EN ISO 3581-A: E199LR12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4404E.pdf"
          },
          {
            name: "WB4414E",
            certifications: ["AWS A5.4: E308H-17", "BS EN ISO 3581: E199HR12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4414E.pdf"
          },
          {
            name: "WB4444E",
            certifications: ["AWS A5.4: E2594-16", "BS EN ISO 3581: E2594NLR"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4444E.pdf"
          },
          {
            name: "WB4445E",
            certifications: ["AWS A5.4: E2595-16", "BS EN ISO 3581: E2595NLR"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4445E.pdf"
          },
          {
            name: "WB4405E",
            certifications: ["AWS A5.4-92: E308Mo-15", "BS EN ISO 3581-A: E308Mo-15"]
          },
          {
            name: "WB4545E",
            certifications: ["AWS A5.4: E2209-17", "BS EN ISO 3581-A: E2293NLR"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4545E.pdf"
          },
          {
            name: "WB4545E-15",
            certifications: ["AWS A5.4: E2209-15", "BS EN ISO 3581-A: E2293NLB"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4545E-15.pdf"
          },
          {
            name: "WB4555E",
            certifications: ["AWS A5.4: E309L-16", "BS EN ISO 3581-A: E2312LR12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4555E.pdf"
          },
          {
            name: "WB4560E",
            certifications: ["AWS A5.4: E309MoL-17", "BS EN ISO 3581-A: E23122LR12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4560E.pdf"
          },
          {
            name: "WB4606E",
            certifications: ["AWS A5.4: E312-17", "BS EN ISO 3581-A: E299R12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4606E.pdf"
          },
          {
            name: "WB4707E",
            certifications: ["AWS A5.4: E310-17", "BS EN ISO 3581: E2520R12"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB4707E.pdf"
          },
        ]
      },
      {
        name: "Nickel & Copper Alloy",
        products: [
          {
            name: "WB5505E",
            certifications: ["AWS A5.11: ENiCrFe-3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB5505E.pdf"
          },
          {
            name: "WB5535E",
            certifications: ["AWS A5.11: ENiCrMo-3", "BS EN ISO 14172: E Ni 6625 (NiCr22Mo9Nb)"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/MMA_Welding(STICK_WELDING)/Stainless_Steel_MMA_Electrodes/WB5535E.pdf"
          },
        ]
      },
    ]
  },

  {
    id: "saw",
    label: "Submerged Arc Welding (SAW)",
    icon: "layers",
    description: "Submerged arc welding (SAW) wire and flux combinations for high-productivity, deep-penetration welding of thick sections. Engineered for single and multi-pass welding in flat and horizontal positions, delivering exceptional deposition rates and consistent mechanical properties in heavy industrial applications.",
    features: ["Wire-flux combination systems", "High deposition rates up to 20+ kg/hr", "Deep penetration capability", "Consistent mechanical properties", "Multi-pass thick section welding", "Active & neutral flux options"],
    industries: ["Pressure Vessel Manufacturing", "Shipbuilding & Marine", "Wind Tower Fabrication", "Pipeline Construction", "Heavy Plate Fabrication", "Structural Beam Production"],
    image: SITE_IMAGES.welding.categoryCards.consumables.submergedArc,
    useCases: [
      {
        name: "SAW WIRE AND FLUX",
        products: [
          {
            name: "WBSAWF-B1",
            certifications: ["AWS A5.17: F7A2-EM12K", "AWS A5.17: F6 A4 - EM12", "F7 A8 - F7 P8 - EH12K", "DIN 32 522: B FB 165 AC 12", "MHP5 EN760: A AB 167ACH5", "WBS1: AWS A5.17 F7A2-EL12 / BSEN 14171-A: S1", "WBS15Si: AWS A5.17 F7A2-EL12K / BSEN 14171-A: S1Si", "WBS2Si: AWS A5.17 F7A2-EM12K / BSEN 14171-A: S2Si", "WBS3Si: AWS A5.23 F7A8-EG-G, F7P8-EG-G"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/SUBMERGED_ARC_WELDING(SAW)/SAW_WIRE_AND_FLUX/WBSAWF-B1.pdf"
          },
          {
            name: "WBSAWF-B3",
            certifications: ["AWS A5.17: F6 A4 - EM12", "F7 A8 - F7 P8 - EH12K", "AWS A5.23: F7 A10-E Ni1 - Ni1", "F8 A6 - F8 P6 - EA3 - A3", "F8 A2 - F7 P4 - EB2 - B2", "F9P0-EB2-B2, F7P15-ENi3", "F9P2-EG-B3, EB9", "EF5", "F7A4-EM12K", "F7A5-EM12K", "F7A2-EM12K", "DIN 32 522: B FB 155 AC 10 MHP5", "EN 14171: A FB 1 55 AC H 5", "WBS3Si: AWS A5.23 F7A8-EG-G, F7P8-EG-G", "WBSD2 1Ni: AWS A5.23: ENi1 F8P6ENi1", "WBSD3 1Ni 1/4Mo: AWS A5.23: F8A10-EG-G, F8P10-EG-G", "WBSD3 1Ni 1/2Mo: AWS A5.23: F9A6-EG-G, F9P6-EG-G", "WBSD3Mo: AWS A5.23 F8A6-EG-A4, F8P6EGA4", "WBSD2 1NiCrMo: AWS A5.23: F1-P4-EG-G", "WBS3 NiCrMo: AWS A5.23: EF5", "WBS2-1/2Cr1Mo: AWS A5.23: F9P0-EB2-B2", "WBS2-2 1/2Cr1Mo: AWS A5.23: F9P2-EG-B3", "WBS2-Ni-3: AWS A5.23: F7P15-ENi3", "WBS2Ni1C: AWS A5.23: EG", "WB5Cr ER50: AWS A5.28: ER80S-B8", "WB9Cr ER50: AWS A5.28: ER90S-B9", "WB9Cr (mod): AWS A5.23: EB91"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/SUBMERGED_ARC_WELDING(SAW)/SAW_WIRE_AND_FLUX/WBSAWF-B3.pdf"
          },
          {
            name: "WBSAWF-B3SR",
            certifications: ["AWS A5.17: F6 A4 - EM12", "F7 A8 - F7 P8 - EH12K", "AWS A5.23: F7 A10-E Ni1 - Ni1", "F8 A6 - F8 P6 - EA3 - A3", "F8 A2 - F7 P4 - EB2 - B2", "F9P0-EB2-B2, F7P15-ENi3", "F9P2-EG-B3, EB9", "EF5", "F7A4-EM12K", "F7A5-EM12K", "F7A2-EM12K", "DIN 32 522: B FB 155 AC 10 MHP5", "EN 14171: A FB 1 55 AC H 5", "WBS3Si: AWS A5.23 F7A8-EG-G, F7P8-EG-G", "WBSD2 1Ni: AWS A5.23: ENi1 F8P6ENi1", "WBSD3 1Ni 1/4Mo: AWS A5.23: F8A10-EG-G, F8P10-EG-G", "WBSD3 1Ni 1/2Mo: AWS A5.23: F9A6-EG-G, F9P6-EG-G", "WBSD3Mo: AWS A5.23 F8A6-EG-A4, F8P6EGA4", "WBSD2 1NiCrMo: AWS A5.23: F1-P4-EG-G", "WBS3 NiCrMo: AWS A5.23: EF5", "WBS2-1/2Cr1Mo: AWS A5.23: F9P0-EB2-B2", "WBS2-2 1/2Cr1Mo: AWS A5.23: F9P2-EG-B3", "WBS2-Ni-3: AWS A5.23: F7P15-ENi3", "WBSONITCu: AWS A5.23: EG", "WB5Cr ER502: AWS A5.28: ER80S-B8", "WB9Cr ER505: AWS A5.28: ER90S-B9", "WB9Cr: AWS A5.23: EB91"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/SUBMERGED_ARC_WELDING(SAW)/SAW_WIRE_AND_FLUX/WBSAWF-B3SR.pdf"
          },
          {
            name: "WBSAWF-B4",
            certifications: ["AWS A5.17: F7 AP8 - EH12K", "AWS A5.23: F8 AP4-EA2-A2", "F8 AP8-EG-G", "F8P2-EB2-B2", "F8P4-EB3-B3", "EN 14174: SA FB 1 55 AC H5", "EN 14171: S 46 6 FB S3S", "S 50 4 FB S2 Mo", "S 50 6 FB S0", "WBSD3: AWS A5.23 F7A8-EG-G, F7P8-EG-G", "WBSD3 1Ni 1/4Mo: AWS A5.23: F8A10-EG-G, F8P10-EG-G", "WBSD3 1Ni 1/2Mo: AWS A5.23: F9A6-EG-G, F9P6-EG-G", "WBSD3Mo: AWS A5.23 F8A6-EG-A4, F8P6EGA4", "WBSD2 1NiCrMo: AWS A5.23: F1-P4-EG-G", "WBS2-1/2Cr1Mo: AWS A5.23: F9P0-EB2-B2", "WBS2-2 1/2Cr1Mo: AWS A5.23: F9P2-EG-B3"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/SUBMERGED_ARC_WELDING(SAW)/SAW_WIRE_AND_FLUX/WBSAWF-B4.pdf"
          },
          {
            name: "WBSAWF-SSCR",
            certifications: ["BS EN 14174: S A AF 2 5644 DC H5 TUV /CE", "WB308L-SAW: AWS A5.9: ER308L", "WB253MA-SAW: AWS A5.9: EG", "WB347H-SAW: AWS A5.9: ER347H", "WB316L-SAW: AWS A5.9: ER316L", "WB309L-SAW: AWS A5.9: ER309L", "WB309LMo-SAW: AWS A5.9: ER309LMo", "WB22-9-3L-SAW: AWS A5.9: ER2209", "WB25-9-3L-SAW: AWS A5.9: ER2594"],
            datasheetUrl: "/Welding Consumables/Consumables_dataSheets/SUBMERGED_ARC_WELDING(SAW)/SAW_WIRE_AND_FLUX/WBSAWF-SSCR.pdf"
          },
        ]
      },
    ]
  }
];;;

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
];
