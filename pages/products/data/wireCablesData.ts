const HAVELLS_SOURCE = {
  label: "Havells cable reference catalogue",
  url: "https://www.havells.com/",
} as const;

const wireImage = (asset: string) => `/wire&cable/${asset}`;
const catalogImage = (asset: string) => wireImage(`catalog/${asset}.png`);

const IMAGES = {
  ltPower: catalogImage("lt-power-cable"),
  ltMulti: catalogImage("lt-xlpe-multicore-cable"),
  mv: catalogImage("ht-xlpe-power-cable"),
  ht: catalogImage("ht-lszh-power-cable"),
  abc: catalogImage("aerial-bunched-cable"),
  fire: catalogImage("fire-survival-cable"),
  solar: catalogImage("solar-cable"),
  control: catalogImage("control-cable"),
  submersible: catalogImage("round-submersible-cable"),
  neutral: wireImage("wireCables.jpg"),
  neutralAlt: wireImage("R.jpg"),
  hero: wireImage("bg_hero_high_voltage_cables_v2.png"),
  transmission: wireImage("500kV_3-Phase_Transmission_Lines.png"),
} as const;

export interface CableProduct {
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
  CurrentRating?: string;
  BendingRadius?: string;
  Testing?: string;
  Applications?: string[];
  applicationImage?: string;
  descriptionParagraphs?: string[];
  sourceLabel?: string;
  sourceUrl?: string;
}

interface CableProductInput {
  category: string;
  subCategory: string;
  name: string;
  descriptionParagraphs: string[];
  conductor: string;
  insulation: string;
  voltageRating: string;
  standards: string;
  cores: string;
  crossSection: string;
  sheathing: string;
  armouring: string;
  tempRating: string;
  application: string;
  thumbnail: string;
  applications: string[];
  currentRating?: string;
  bendingRadius?: string;
  testing?: string;
  applicationImage?: string;
}

const paragraphs = (...items: string[]) => items.filter((item) => item.trim().length > 0);

const createCableProduct = (input: CableProductInput): CableProduct => ({
  Category: input.category,
  "Sub-Category": input.subCategory,
  "Product Name": input.name,
  Description: input.descriptionParagraphs[0],
  descriptionParagraphs: input.descriptionParagraphs,
  Conductor: input.conductor,
  Insulation: input.insulation,
  VoltageRating: input.voltageRating,
  Standards: input.standards,
  Cores: input.cores,
  CrossSection: input.crossSection,
  Sheathing: input.sheathing,
  Armouring: input.armouring,
  TempRating: input.tempRating,
  Application: input.application,
  thumbnail: input.thumbnail,
  applicationImage: input.applicationImage,
  CurrentRating: input.currentRating,
  BendingRadius: input.bendingRadius,
  Testing: input.testing,
  Applications: input.applications,
  sourceLabel: HAVELLS_SOURCE.label,
  sourceUrl: HAVELLS_SOURCE.url,
});

export const PRODUCTS: CableProduct[] = [
  createCableProduct({
    category: "Power Cables",
    subCategory: "0.6/1 kV XLPE Single Core",
    name: "LT XLPE Single Core Power Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's LT single-core feeder range follows the analysed 0.6/1 kV XLPE catalogue program for copper and aluminium conductors used in feeders, substations, and utility boards.",
      "The reference range spans 6 sq mm to 1000 sq mm with IEC 60502-1 / BS 5467 aligned construction, PVC sheathing, and project-specific FRLS or LSZH upgrades where required.",
    ),
    conductor: "Copper or aluminium to IEC 60228 / BS 6360",
    insulation: "XLPE",
    voltageRating: "0.6/1 kV",
    standards: "IEC 60502-1, BS 5467, IEC 60228",
    cores: "1C",
    crossSection: "6 sq mm to 1000 sq mm",
    sheathing: "PVC outer sheath, black as standard",
    armouring: "Unarmoured or aluminium wire armour for AC single-core duty",
    tempRating: "90 C continuous, 250 C short-circuit",
    application: "Main feeders, substations, utility corridors, process units",
    thumbnail: IMAGES.ltPower,
    applications: ["Substation Feeders", "Industrial Utilities", "Main Distribution Boards", "Process Plants"],
    currentRating: "Current rating is installation-dependent across air, ground, and duct routes",
    bendingRadius: "15D handling guidance",
    testing: "HV withstand, IR, conductor resistance, sheath and dimensional checks",
  }),
  createCableProduct({
    category: "Power Cables",
    subCategory: "0.6/1 kV XLPE Multi-Core",
    name: "LT XLPE Multi-Core Power Cable",
    descriptionParagraphs: paragraphs(
      "This Metallo multicore family reflects the analysed 2-core, 3-core, 3.5-core, and 4-core XLPE program used across factory distribution, motor feeders, and utility trench runs.",
      "The source covers both unarmoured and galvanised steel armoured builds, giving a single supply range for tray work, direct burial, and mechanically exposed corridors.",
    ),
    conductor: "Copper or aluminium, circular or shaped stranded",
    insulation: "XLPE with PVC coverings",
    voltageRating: "0.6/1 kV",
    standards: "IEC 60502-1, BS 5467",
    cores: "2C, 3C, 3.5C, 4C",
    crossSection: "4 sq mm to 400 sq mm; 3.5C from 25 sq mm",
    sheathing: "PVC inner and outer sheath",
    armouring: "GI wire or strip armour on demand",
    tempRating: "90 C continuous, 250 C short-circuit",
    application: "Plant distribution, motor feeders, trench and tray systems",
    thumbnail: IMAGES.ltMulti,
    applications: ["Motor Feeders", "Cable Trays", "Direct Burial Runs", "Commercial Distribution"],
    currentRating: "Supports catalogue correction factors for grouping and soil conditions",
    bendingRadius: "15D multicore handling guidance",
    testing: "HV withstand, conductor resistance, IR, armour and sheath inspection",
  }),
  createCableProduct({
    category: "Power Cables",
    subCategory: "MV Screened XLPE",
    name: "MV XLPE Power Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's MV range follows the screened XLPE constructions listed across 1.8/3.0 kV, 3.6/6.0 kV, 6/10 kV, 8.7/15 kV, and 12/20 kV grades in the analysed catalogue.",
      "The source specifically notes conductor screening, insulation screening, metallic screen layers, and triple-extrusion processes for substations, captive power, and heavy industrial feeders.",
    ),
    conductor: "Copper or aluminium screened conductor system",
    insulation: "Screened XLPE",
    voltageRating: "1.8/3.0 (3.6) kV to 12/20 (24) kV",
    standards: "IEC 60502-1, IEC 60502-2, BS 5467",
    cores: "1C, 3C",
    crossSection: "25 sq mm to 1000 sq mm single core; 25 sq mm to 400 sq mm three core",
    sheathing: "PVC separation sheath and outer sheath",
    armouring: "Aluminium wire armour on 1C; GS wire armour on 3C",
    tempRating: "90 C continuous, 250 C short-circuit",
    application: "Primary distribution, captive power, utility substations",
    thumbnail: IMAGES.mv,
    applications: ["Primary Distribution", "Captive Power", "Utility Substations", "Heavy Engineering"],
    currentRating: "Catalogue current ratings cover air, duct, and direct-buried assumptions",
    bendingRadius: "15D to 20D depending on construction",
    testing: "HV withstand, screen integrity, IR, dimensional and short-circuit basis checks",
  }),
  createCableProduct({
    category: "Power Cables",
    subCategory: "HT XLPE 18/30 (36) kV",
    name: "HT XLPE Power Cable 18/30 (36) kV",
    descriptionParagraphs: paragraphs(
      "For major substations and long industrial feeder corridors, Metallo offers the 18/30 (36) kV screened XLPE family documented in the reference catalogue for single-core and three-core circuits.",
      "The analysed range covers single-core sizes from 50 sq mm to 1000 sq mm and three-core sizes from 50 sq mm to 300 sq mm with metallic screen, separation sheath, and duty-specific aluminium or steel armour.",
    ),
    conductor: "Copper or aluminium screened conductor system",
    insulation: "Screened XLPE",
    voltageRating: "18/30 (36) kV",
    standards: "IEC 60502-2",
    cores: "1C, 3C",
    crossSection: "50 sq mm to 1000 sq mm single core; 50 sq mm to 300 sq mm three core",
    sheathing: "PVC separation sheath and PVC outer sheath",
    armouring: "Round aluminium wire armour on 1C; GS wire armour on 3C",
    tempRating: "90 C continuous, 250 C short-circuit",
    application: "HT substations, critical feeders, utility tie-ins",
    thumbnail: IMAGES.ht,
    applications: ["HT Substations", "Critical Feeders", "Utility Tie-Ins", "Heavy Industry"],
    currentRating: "Supported by catalogue current and short-circuit tables for ground and air duty",
    bendingRadius: "15D to 20D depending on system arrangement",
    testing: "Screened-cable routine tests, HV withstand, IR, current and short-circuit basis checks",
  }),
  createCableProduct({
    category: "Control & Automation",
    subCategory: "Copper Control Cable",
    name: "Multi-Core Copper Control Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's control cable set is based on the 0.6/1 kV copper control program identified in the analysed catalogue for switchyards, relay circuits, DCS marshalling, and panel interconnections.",
      "The source lists 1.5 sq mm and 2.5 sq mm constructions from 2 cores up to 61 cores with PVC / XLPE insulation options and armoured or unarmoured builds for indoor and field routing.",
    ),
    conductor: "Solid or stranded plain / tinned copper",
    insulation: "PVC, HR PVC, or XLPE",
    voltageRating: "0.6/1 kV",
    standards: "IEC 60502-1, BS 5467",
    cores: "2C to 61C",
    crossSection: "1.5 sq mm and 2.5 sq mm; 4 sq mm and 6 sq mm up to 4 cores",
    sheathing: "PVC, HR PVC, FRLS, or LSZH sheath options",
    armouring: "Unarmoured or GI round wire / flat strip armour",
    tempRating: "70 C to 90 C depending on insulation",
    application: "Control panels, relay logic, switchyards, PLC / DCS interconnections",
    thumbnail: IMAGES.control,
    applications: ["Relay Logic", "PLC Panels", "Switchyards", "Control Rooms"],
    currentRating: "Control-duty sizing is driven by signal and auxiliary power service",
    bendingRadius: "Designed for tray and panel routing",
    testing: "Conductor resistance, IR, HV withstand, core identification, and sheath checks",
  }),
  createCableProduct({
    category: "Control & Automation",
    subCategory: "Instrumentation Signal",
    name: "Instrumentation Signal Cable",
    descriptionParagraphs: paragraphs(
      "This Metallo instrumentation offer follows the signal-cable section highlighted in the analysed range-at-a-glance spread for process-control loops, analog transmission, and noise-sensitive plant communication.",
      "The source notes PE / PVC / HR PVC / zero-halogen insulation options, individual or overall shielding, drain-wire arrangements, and armoured or unarmoured builds for refineries, utilities, and automation projects.",
    ),
    conductor: "Solid or stranded plain / tinned copper",
    insulation: "PVC, HR PVC, PE, or zero-halogen compounds",
    voltageRating: "225/500 V to 300/500 V instrumentation duty",
    standards: "BS 5308, IS 1554, IEC-aligned screened instrumentation practice",
    cores: "Pairs and multi-pair signal constructions",
    crossSection: "0.5 sq mm, 0.75 sq mm, 1.0 sq mm, 1.5 sq mm",
    sheathing: "PVC, HR PVC, FRLS, or zero-halogen compounds",
    armouring: "Unarmoured or GS wire / flat strip armour with screened options",
    tempRating: "70 C to 85 C depending on insulation package",
    application: "Analog loops, transmitters, marshalling cabinets, process control instrumentation",
    thumbnail: IMAGES.neutralAlt,
    applications: ["Process Control", "Transmitters", "Marshalling Panels", "Industrial Automation"],
    bendingRadius: "Optimized for compact indoor routing and screened cable termination",
    testing: "Shield continuity, conductor resistance, IR, identification, and construction checks",
  }),
  createCableProduct({
    category: "Control & Automation",
    subCategory: "Panel & Backup Wiring",
    name: "Heat Resistant Panel and Backup Cable",
    descriptionParagraphs: paragraphs(
      "Metallo groups the catalogue's energy cable and heat-resistant panel wire references into a focused panel-wiring range for UPS rooms, battery systems, telecom power, and heat-stressed control cabinets.",
      "The analysed pages call out 450/750 V single-core backup wiring, HR PVC 105 C panel wire, and flexible conductors used in compact equipment layouts, covering both clean panel interiors and auxiliary DC distribution.",
    ),
    conductor: "Bright annealed stranded copper",
    insulation: "HR PVC 105 C, FRLS PVC, HFFR, or zero-halogen options",
    voltageRating: "450/750 V",
    standards: "IS 6004, IEC 60227, BS 7211, IS 6231 family references",
    cores: "Single core and flexible single-core backup circuits",
    crossSection: "1.0 sq mm to 240 sq mm depending on duty",
    sheathing: "Unsheathed or sheathed PVC / FRLS constructions",
    armouring: "Primarily unarmoured internal wiring constructions",
    tempRating: "105 C for HR PVC panel-wire service",
    application: "UPS systems, battery banks, MCC internals, panel rooms, telecom DC circuits",
    thumbnail: IMAGES.neutral,
    applications: ["UPS Rooms", "Battery Banks", "Control Panels", "Auxiliary DC Circuits"],
    bendingRadius: "Suitable for compact switchboard and enclosure routing",
    testing: "Conductor resistance, insulation integrity, and panel-wiring grade checks",
  }),
  createCableProduct({
    category: "Specialty & Renewables",
    subCategory: "Solar Cable",
    name: "Solar DC Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's solar cable offer is based on the catalogue's tinned-copper XLPO construction built for photovoltaic strings, combiner boxes, and inverter links in exposed outdoor service.",
      "The analysed reference specifies 1800 V DC / 1000 V AC duty, TUV 2PFG 1169 / 08-2007 alignment, and XLPO / LSZH construction for long-life UV, ozone, and weather resistance in solar projects.",
    ),
    conductor: "Flexible tinned copper",
    insulation: "Cross-linked polyolefin (XLPO)",
    voltageRating: "1800 V DC / 1000 V AC",
    standards: "TUV 2PFG 1169/08-2007",
    cores: "1C",
    crossSection: "Project-led solar sizing",
    sheathing: "XLPO / LSZH sheathed construction",
    armouring: "Unarmoured flexible solar build",
    tempRating: "-40 C to 90 C outdoor service",
    application: "PV strings, solar farms, rooftop arrays, inverter connections",
    thumbnail: IMAGES.solar,
    applications: ["Solar Farms", "Rooftop PV", "Combiner Boxes", "Inverter Links"],
    bendingRadius: "Flexible routing for module strings and inverter terminations",
    testing: "Weathering, insulation integrity, conductor continuity, and solar-cable checks",
  }),
  createCableProduct({
    category: "Specialty & Renewables",
    subCategory: "Submersible",
    name: "Submersible Cable",
    descriptionParagraphs: paragraphs(
      "The analysed catalogue includes both round and flat submersible builds based on copper conductors with PVC insulation and PVC sheath systems for immersed pump and motor service.",
      "Metallo uses that construction window for water supply, dewatering, borewell, and utility pumping packages where moisture resistance, manageable cable handling, and dependable conductor integrity are essential.",
    ),
    conductor: "Annealed electrolytic or stranded copper",
    insulation: "PVC",
    voltageRating: "0.6/1 kV and IS 694-based submersible service",
    standards: "IS 694 general reference in the analysed catalogue",
    cores: "3C and pump-duty round / flat multicore constructions",
    crossSection: "1.5 sq mm to 120 sq mm",
    sheathing: "PVC inner sheath / outer sheath or flat PVC sheathed profile",
    armouring: "Unarmoured submerged-duty construction",
    tempRating: "70 C PVC service",
    application: "Submersible pumps, borewell motors, utility water systems, dewatering skids",
    thumbnail: IMAGES.submersible,
    applications: ["Borewell Pumps", "Water Supply", "Dewatering", "Utility Pump Sets"],
    bendingRadius: "Built for pump lowering and compact vertical riser runs",
    testing: "Insulation resistance, conductor continuity, and submersible construction checks",
  }),
  createCableProduct({
    category: "Specialty & Renewables",
    subCategory: "Flexible & Cord",
    name: "Flexible and Cord Cable",
    descriptionParagraphs: paragraphs(
      "This Metallo flexible-cable range follows the analysed cord and appliance-cable section covering multistrand copper conductors for machine tools, portable equipment, and maintenance power drops.",
      "The source highlights PVC insulated and sheathed builds from small control cords up to heavier flexible single-core and multicore service, making this family well suited to workshops, OEM assemblies, and temporary plant power.",
    ),
    conductor: "Multistrand flexible bright annealed copper",
    insulation: "PVC with FRLS options for selected applications",
    voltageRating: "300/500 V to 450/750 V",
    standards: "IS 6004, IEC 60227 family references",
    cores: "1C, 2C, 3C, 4C and flexible multicore cord sets",
    crossSection: "0.5 sq mm to 25 sq mm and flexible single core up to 240 sq mm",
    sheathing: "PVC or FRLS flexible sheath",
    armouring: "Unarmoured flexible construction",
    tempRating: "70 C to 90 C depending on compound system",
    application: "Portable equipment, machine tools, workshop drops, OEM assemblies",
    thumbnail: IMAGES.neutral,
    applications: ["Machine Tools", "Portable Equipment", "OEM Assemblies", "Workshop Utilities"],
    bendingRadius: "Designed for repetitive handling and tighter bend requirements",
    testing: "Flexibility, conductor resistance, insulation integrity, and sheath checks",
  }),
  createCableProduct({
    category: "Fire Safety & Mining",
    subCategory: "Fire Performance",
    name: "Fire Survival Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's fire-survival cable follows the catalogue construction built around copper conductor, mica-based heat barrier, XLPE insulation, LSZH inner sheath, galvanised steel armour, and LSZH outer sheath.",
      "The analysed source references BS 7846 and BS 6387 test expectations, making this range appropriate for emergency power, life-safety loads, smoke extraction systems, and fire alarm continuity.",
    ),
    conductor: "Solid or stranded plain / tinned copper",
    insulation: "Mica tape heat barrier with XLPE insulation",
    voltageRating: "0.6/1 kV life-safety power service",
    standards: "BS 7846, BS 6387, IEC fire-testing references",
    cores: "1C, 2C, 3C, 4C",
    crossSection: "Life-safety sizing aligned to project load",
    sheathing: "LSZH inner sheath and LSZH outer sheath",
    armouring: "GS round wire / flat strip armour where specified",
    tempRating: "Fire-survival construction for emergency circuit integrity",
    application: "Emergency systems, fire alarms, smoke extraction, critical evacuation infrastructure",
    thumbnail: IMAGES.fire,
    applications: ["Emergency Power", "Fire Alarms", "Smoke Extraction", "Critical Egress Systems"],
    testing: "Fire-performance verification, insulation integrity, continuity, and routine electrical tests",
  }),
  createCableProduct({
    category: "Fire Safety & Mining",
    subCategory: "FRLS / HFFR",
    name: "FRLS, HFFR, and Fire Resistant Wire",
    descriptionParagraphs: paragraphs(
      "The analysed catalogue repeatedly calls out FRLS, LSZH, HFFR, and fire-resistant wire options across power, control, and industrial wiring families, which Metallo packages into one low-smoke safety offer.",
      "This family is intended for airports, data halls, enclosed plant rooms, public infrastructure, and compact alarm / control circuits where reduced smoke, lower corrosive gas output, and fire continuity are core specifications.",
    ),
    conductor: "Copper conductors across wiring, control, and emergency-circuit formats",
    insulation: "FRLS PVC, LSZH, HFFR, glass mica tape plus HFFR where required",
    voltageRating: "450/750 V to 0.6/1 kV depending on duty",
    standards: "IEC 60332, IEC 754 references, BS 7211 family mention, zero-halogen options",
    cores: "Single core to multicore power and control constructions",
    crossSection: "Application-led sizing across wiring, control, and feeder duties",
    sheathing: "FRLS PVC, LSZH, or HFFR outer sheath",
    armouring: "Available in unarmoured and armoured industrial builds",
    tempRating: "70 C to 105 C depending on insulation family",
    application: "Enclosed infrastructure, public facilities, indoor process plants, evacuation routes",
    thumbnail: IMAGES.hero,
    applications: ["Public Buildings", "Data Facilities", "Process Plants", "Indoor Infrastructure"],
    testing: "Flame-retardance, smoke / halogen performance, IR, HV, and conductor verification",
  }),
  createCableProduct({
    category: "Overhead & Rail",
    subCategory: "Aerial Bunched",
    name: "Aerial Bunched Cable",
    descriptionParagraphs: paragraphs(
      "Metallo's ABC range reflects the analysed aerial-bunched construction for overhead LT distribution, using stranded compacted aluminium phase conductors and a messenger conductor for supported utility spans.",
      "The source explicitly positions this family as a safer bundled overhead solution where right-of-way constraints, theft reduction, and better contact protection matter.",
    ),
    conductor: "Stranded circular compacted aluminium with messenger conductor",
    insulation: "XLPE weather-resistant insulation on phase conductors",
    voltageRating: "0.6/1 kV aerial distribution duty",
    standards: "IEC 60502 part-reference aerial bundled construction",
    cores: "Bundled phase conductors plus messenger / neutral",
    crossSection: "Distribution-led sizing aligned to utility spans",
    sheathing: "Insulated phase conductors with bare or insulated messenger arrangement",
    armouring: "Not applicable for aerial bundled service",
    tempRating: "90 C XLPE service",
    application: "Overhead LT distribution, utility retrofits, township electrification",
    thumbnail: IMAGES.abc,
    applications: ["Overhead Distribution", "Township Utilities", "Feeder Upgrades", "Utility Retrofits"],
    bendingRadius: "Configured for suspended routing and pole-to-pole installation practice",
    testing: "Conductor, insulation, UV, and construction verification for overhead duty",
  }),
  createCableProduct({
    category: "Overhead & Rail",
    subCategory: "Service Drop & Lighting",
    name: "Service Drop and Street Lighting Bundle",
    descriptionParagraphs: paragraphs(
      "The same analysed aerial-bundle family also references messenger-supported street-light and service-drop arrangements, which Metallo offers for compact overhead branches and last-mile utility connections.",
      "This helps standardize housing clusters, utility poles, street-lighting runs, and campus distribution on a common weather-resistant conductor platform instead of mixing multiple unsupported cable systems.",
    ),
    conductor: "Compacted aluminium phase conductors with alloy messenger support",
    insulation: "Weather-resistant XLPE",
    voltageRating: "LT service-drop and lighting distribution duty",
    standards: "Aerial bundled service construction derived from the analysed cable range overview",
    cores: "Service and lighting combinations using bundled conductors",
    crossSection: "Sized to service-drop and lighting feeder requirements",
    sheathing: "Insulated conductors with bundled outdoor service construction",
    armouring: "Not applicable",
    tempRating: "90 C XLPE service",
    application: "Service drops, street lighting, campus roads, utility branches",
    thumbnail: IMAGES.transmission,
    applications: ["Service Drops", "Street Lighting", "Campus Roads", "Utility Branches"],
    testing: "Outdoor-duty conductor and insulation checks aligned to aerial service construction",
  }),
];

export const CATEGORIES = [
  { key: "power", label: "Power Cables", icon: "electrical_services", match: ["Power Cables"] as readonly string[] },
  { key: "control", label: "Control & Automation", icon: "settings_input_component", match: ["Control & Automation"] as readonly string[] },
  { key: "specialty", label: "Specialty & Renewables", icon: "solar_power", match: ["Specialty & Renewables"] as readonly string[] },
  { key: "safety", label: "Fire Safety & Mining", icon: "local_fire_department", match: ["Fire Safety & Mining"] as readonly string[] },
  { key: "overhead", label: "Overhead & Rail", icon: "train", match: ["Overhead & Rail"] as readonly string[] },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export const SPEC_FIELDS: { key: keyof CableProduct; label: string; icon: string }[] = [
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

export const QA_ITEMS = [
  { icon: "verified", title: "IEC / BS Aligned Designs", desc: "The analysed reference range is built around IEC 60502, BS 5467, BS 7846, and related screened / fire-performance construction standards." },
  { icon: "layers", title: "Screened XLPE Systems", desc: "MV and HT constructions use conductor screening, insulation screening, metallic screen layers, and triple-extrusion processes for insulation reliability." },
  { icon: "local_fire_department", title: "Low Smoke Options", desc: "FRLS, LSZH, HFFR, and fire-survival constructions are covered for life-safety, public, and enclosed industrial installations." },
  { icon: "biotech", title: "Routine Electrical Testing", desc: "The catalogue references conductor resistance, IR, HV withstand, dimensional checks, current-rating assumptions, and short-circuit validation criteria." },
];
