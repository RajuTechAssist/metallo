import { SITE_IMAGES } from '@/config/images';
import type { SteelProduct, SteelProductTypeGallery } from "./steelTypes";
import {
  createSteelTypeGallery,
  createSteelTypeItem,
  formatSteelList,
  normalizeSteelList,
} from "./steelCatalogUtils";

const STEEL_GASKET_IMAGE_DIR = "/Steel/sealing-gaskets";
const gasketImage = (slug: string) => `${STEEL_GASKET_IMAGE_DIR}/${slug}.png`;
const typeGallery = (
  title: string,
  intro: string,
  items: SteelProductTypeGallery["items"],
): SteelProductTypeGallery => createSteelTypeGallery(title, intro, items);

interface SteelSealingGasketSource {
  slug: string;
  name: string;
  subCategory: string;
  description: string;
  application: string;
  applications: string[];
  standards: string[];
  materials: string[];
  types: string[];
  features: string[];
  details: string[];
  certifications?: string[];
  grades?: string[];
  pressureClass?: string;
  od?: string;
  wallThickness?: string;
  hardness?: string;
  testing?: string;
}

interface SteelSealingGasketContent {
  descriptionParagraphs: string[];
  typeGallery?: SteelProductTypeGallery;
}

export const STEEL_SEALING_GASKET_SOURCES: SteelSealingGasketSource[] = [
  {
    slug: "ring-gasket",
    name: "Ring Gasket",
    subCategory: "RTJ Ring Gaskets",
    description:
      "Precision-machined RTJ metallic gaskets for high-pressure, high-temperature flange sealing. The range covers oval, octagonal, RX, BX, blind, Bridgeman, lens ring, and Kammprofile variants for refinery, petrochemical, offshore, and subsea service.",
    application:
      "High-pressure flange joints, wellheads, subsea systems, refineries, petrochemical plants, offshore drilling, and critical power piping.",
    applications: [
      "Oil and Gas",
      "Chemical Processing",
      "Power Generation",
      "Petrochemical",
      "Marine",
      "Mining",
    ],
    standards: ["API 6A", "ASME B16.20", "DIN", "BS", "UNS"],
    materials: [
      "Soft Iron",
      "SS 304/316/321",
      "High-alloy steel",
      "Monel",
      "Duplex and Super Duplex",
    ],
    types: [
      "Oval RTJ",
      "Octagonal RTJ",
      "RX",
      "BX",
      "SBX",
      "Blind Ring",
      "Bridgeman",
      "Lens Ring",
      "Kammprofile",
    ],
    features: [
      "Reliability",
      "Durability",
      "Temperature Resistance",
      "Chemical Compatibility",
      "Custom Solutions",
    ],
    details: [
      "Oval and octagonal RTJ gaskets are listed for operating pressures up to 10,000 PSI.",
      "R11 to R105 inventory and BX150 to BX303 high-pressure ranges are called out in the source material.",
      "API 17D SBX variants, transition rings, blind rings, and specialty profiles are included.",
      "Dimensional accuracy and groove-tolerance control are referenced against API 6A and ASME B16.20.",
    ],
    certifications: ["API 6A", "ASME B16.20", "DIN", "BS"],
    grades: [
      "Soft Iron",
      "SS 304/316/321",
      "Monel",
      "Duplex and Super Duplex",
    ],
    pressureClass:
      "Up to 10,000 PSI for oval and octagonal RTJ profiles, with BX and SBX variants for very high-pressure service.",
    od: "API ring numbers R11 to R105 and BX150 to BX303 per source ranges.",
    testing:
      "Precision machining, groove-tolerance control, dimensional verification, and source-backed material options for RTJ service.",
  },
  {
    slug: "spiral-wound-gasket",
    name: "Spiral Wound Gasket",
    subCategory: "Spiral Wound",
    description:
      "Premium semi-metallic spiral wound gaskets built around V-shaped metallic winding and high-performance fillers. They are positioned as dynamic seals for thermal cycling, vibration, corrosive media, and ASME-class flange joints.",
    application:
      "Raised-face, flat-face, tongue-and-groove, heat exchanger, valve, vessel, and process piping service across oil, gas, power, and chemical plants.",
    applications: [
      "Oil and Gas",
      "Petrochemical",
      "Chemical Processing",
      "Power Generation",
      "Water Treatment",
      "Pharmaceutical",
    ],
    standards: [
      "ASME B16.20",
      "ASME B16.5",
      "ASME B16.47 Series A",
      "ASME B16.47 Series B",
      "API 605",
      "MSS SP44",
      "EN 1514-2",
      "BS 3381",
      "BS 4865-2",
      "JIS B2404",
      "DIN 2632",
    ],
    materials: [
      "Flexible Graphite",
      "PTFE",
      "Mica",
      "Ceramic Fiber",
      "316L / 304 / 321 / 347 stainless",
      "Carbon Steel",
      "Monel",
      "Inconel",
      "Hastelloy",
      "Titanium",
    ],
    types: ["Type CGI", "Type CG", "Type GI", "Type G"],
    features: [
      "Excellent Sealing Performance",
      "Wide Temperature and Pressure Range",
      "Chemical Resistance",
      "Versatile Applications",
      "Easy Installation",
    ],
    details: [
      "Graphite-filled designs are described for temperatures up to 1000 C and ASME Class 150 to 2500 service.",
      "Type G, CGI, CG, and GI constructions are called out for different flange styles and compression-stop needs.",
      "Source copy highlights dimensional and compression testing plus raw-material traceability.",
      "Custom material, diameter, and reinforcement-ring options are available for non-standard flanges.",
    ],
    certifications: ["ASME B16.20", "ASME B16.5", "EN 1514-2", "API 605"],
    grades: [
      "316L / 304 / 321 / 347 stainless",
      "Carbon Steel",
      "Monel",
      "Inconel",
      "Hastelloy",
      "Titanium",
    ],
    pressureClass: "ASME Class 150 to 2500.",
    od: "Sized to suit ASME, API, EN, BS, JIS, and DIN flanges.",
    testing:
      "Dimensional and compression testing with traceable metal and filler combinations for critical flange joints.",
  },
  {
    slug: "ix-gaskets",
    name: "IX Gaskets",
    subCategory: "Compact Flange IX Seals",
    description:
      "Compact-flange IX seals manufactured for precision sealing where NORSOK-based dimensions, coating control, and high-pressure compact flange performance matter most.",
    application:
      "Compact flange systems in oil and gas, chemical processing, power generation, aerospace, and pharmaceutical installations.",
    applications: [
      "Oil and Gas",
      "Chemical Processing",
      "Power Generation",
      "Aerospace",
      "Pharmaceutical",
    ],
    standards: ["NORSOK L005", "NORSOK M650", "NORSOK M630"],
    materials: [
      "PTFE / Xylan coating",
      "Silver-coated machined components",
      "Customer-specific metallic seal materials",
    ],
    types: [
      "IX Ring Assembled In Compact Flange Position",
      "IX-RING-BLUE",
      "IX-RING-ORANGE",
      "IX-RING-YELLOW",
    ],
    features: [
      "Enhanced Safety",
      "Reduced Downtime",
      "Cost Efficiency",
      "Environmental Responsibility",
      "Versatility",
    ],
    details: [
      "Dimensions are referenced to NORSOK L005 with material qualification per NORSOK M650 and M630.",
      "Source copy calls out PTFE/Xylan color coding to identify IX seal material selection.",
      "IX seal numbers are listed from IX 15 to IX 1200.",
      "The product page highlights rigorous testing, custom engineering, and global technical support.",
    ],
    certifications: ["NORSOK L005", "NORSOK M650", "NORSOK M630"],
    grades: [
      "PTFE / Xylan coated metallic seal materials",
      "Silver-coated machined components",
    ],
    pressureClass: "Designed for high-pressure compact flange sealing service.",
    od: "IX 15 to IX 1200.",
    testing:
      "Rigorous testing, custom qualification support, and color-coded coating control for compact flange applications.",
  },
  {
    slug: "insulation-gasket",
    name: "Insulation Gasket",
    subCategory: "Flange Insulation Kits",
    description:
      "Electrically isolating flange gasket systems built to prevent galvanic corrosion while maintaining leak-tight flange sealing. The range includes complete kits with gasket, sleeves, washers, and backup washers for RF, FF, and RTJ flanges.",
    application:
      "Pipeline isolation, petrochemical and refinery flanges, power plants, chemical process lines, and water treatment systems where flange isolation and sealing must happen together.",
    applications: [
      "Oil and Gas",
      "Chemical Processing",
      "Power Generation",
      "Water Treatment Plants",
      "Marine",
    ],
    standards: ["ANSI", "API", "DIN", "BS", "ASME B16.5", "MSSP"],
    materials: [
      "Phenolic",
      "Neoprene-faced Phenolic",
      "G10 / G11 Glass Epoxy",
      "GRE",
      "PTFE",
      "Custom Composite Materials",
    ],
    types: ["Type D", "Type E", "Type F", "Type D G10", "Type F G10 316"],
    features: [
      "Electrical Isolation",
      "High Thermal Resistance",
      "Superior Sealing Performance",
      "Corrosion Protection",
      "Durable Construction",
    ],
    details: [
      "Complete kits include insulation gasket, insulating sleeves, insulating washers, and steel backup washers.",
      "Type D, E, and F builds are positioned for RTJ, full-face, and raised-face flange arrangements.",
      "G10 / G11 spring-energized options are described for Class 150 to 600 flange ratings.",
      "Source copy emphasizes high-purity PTFE, GRE, and epoxy-based options for aggressive services.",
    ],
    certifications: ["ASME B16.5", "ANSI", "API", "DIN"],
    grades: [
      "Phenolic",
      "Neoprene-faced Phenolic",
      "G10 / G11",
      "GRE",
      "PTFE",
    ],
    pressureClass:
      "RF, FF, and RTJ kit configurations, with G10 / G11 spring-energized sets noted for Class 150 to 600 service.",
    od: "Sized to ANSI, API, DIN, BS, ASME, and MSSP flange specifications.",
    testing:
      "Complete isolation kit fitment with corrosion-protection focus for raised-face, full-face, and RTJ flange systems.",
  },
  {
    slug: "vx-ax-gaskets",
    name: "VX and AX Gaskets",
    subCategory: "VX and AX Ring Seals",
    description:
      "High-performance VX and AX gasket ranges presented for demanding industrial sealing where extreme temperature, pressure, and chemical resistance are required for dependable flange and ring-joint service.",
    application:
      "Petrochemical, pharmaceutical, power generation, HVAC, plumbing, automotive, and other industrial sealing duties that need dependable high-pressure ring-joint style performance.",
    applications: [
      "Oil and Gas",
      "Chemical Industry",
      "Power Generation",
      "HVAC",
      "Automotive",
      "Plumbing",
    ],
    standards: [],
    materials: [
      "Soft gasket constructions",
      "Metallic gasket constructions",
      "Custom size and material combinations",
    ],
    types: ["VX", "AX"],
    features: [
      "High pressure and temperature resistance",
      "Chemical Resistance",
      "Long-lasting durability",
      "Multi-industry suitability",
      "Reliable sealing",
    ],
    details: [
      "The source positions VX for applications where top-end pressure, temperature, and chemical resistance are non-negotiable.",
      "AX is described as the reliability-focused series with broad size and material coverage.",
      "The page emphasizes multiple sizes, materials, and service combinations across industrial sealing use cases.",
    ],
    grades: ["Soft-to-metallic material options", "Multiple size and service combinations"],
    pressureClass:
      "Built for high-pressure and high-temperature flange and ring-joint sealing service.",
    testing:
      "Custom sizing and material selection support for pressure, temperature, and chemical-service sealing requirements.",
  },
  {
    slug: "rubber-gasket",
    name: "Rubber Gasket",
    subCategory: "Elastomer Gaskets",
    description:
      "Industrial rubber gaskets manufactured for flange and pipeline sealing with compound options tuned for oils, steam, chemicals, weathering, food-grade service, and high-vibration systems.",
    application:
      "Oil and gas, petrochemical, aerospace, construction, food and beverage, automotive, water treatment, and industrial manufacturing sealing duties.",
    applications: [
      "Oil and Gas",
      "Petrochemical",
      "Aerospace",
      "Construction",
      "Food and Beverage",
      "Automotive",
      "Industrial Manufacturing",
    ],
    standards: ["ISO 9001:2015", "ASME B16.21", "DIN", "EN 1514-1", "BS"],
    materials: [
      "NBR",
      "EPDM",
      "Viton (FKM)",
      "Silicone",
      "Neoprene",
      "Butyl",
      "SBR",
      "Natural Rubber",
    ],
    types: ["Full Face", "Raised Face", "Customized Rubber Gasket"],
    features: [
      "Extreme Temperature Resistance",
      "Chemical Resistance",
      "Industrial-grade Elastomer Formulations",
      "Customization",
      "Global Standards Compliance",
    ],
    details: [
      "The material guide uses the STAMPS framework for size, temperature, application, media, pressure, and standards selection.",
      "Source copy highlights ASME B16.21 dimensional control and Shore A hardness selection.",
      "Rubber thickness callouts include 1.5 mm, 3 mm, and custom-cut builds.",
      "Typical hardness ranges are 40-50, 60-70, and 80+ Shore A depending on service pressure and extrusion resistance.",
    ],
    certifications: ["ISO 9001:2015", "ASME B16.21", "DIN", "EN 1514-1"],
    grades: ["NBR", "EPDM", "FKM", "Silicone", "Neoprene", "Butyl", "SBR", "Natural Rubber"],
    pressureClass: "Class 150, 300, and custom flange sealing service per material selection.",
    wallThickness: "1.5 mm, 3 mm, and custom thicknesses.",
    hardness: "40-50, 60-70, and 80+ Shore A depending on service.",
    testing:
      "Compound selection guided by media, pressure, and temperature, with ISO-backed production and ASME dimensional control.",
  },
  {
    slug: "metal-gasket",
    name: "Metal Gasket",
    subCategory: "Metallic and Semi-Metallic",
    description:
      "A broad metallic sealing range covering spiral wound, RTJ, Kammprofile, corrugated, and metal-jacketed constructions for extreme pressure, temperature, and chemical service in critical flange joints.",
    application:
      "Oil and gas, petrochemical, refineries, power generation, marine, pharmaceutical, food processing, and heavy steel manufacturing installations.",
    applications: [
      "Oil and Gas",
      "Petrochemical and Chemical Processing",
      "Power Generation",
      "Refineries",
      "Marine and Shipbuilding",
      "Steel and Metal Manufacturing",
    ],
    standards: ["ASME B16.20", "API 601", "DIN EN 1514-4", "DIN EN 1514-6", "ISO"],
    materials: [
      "316L / 304 / 309 / 310 / 317L / 321 / 347 stainless",
      "Inconel 600 / 625 / X-750",
      "Incoloy 800 / 825",
      "Hastelloy B2 / C276",
      "Monel",
      "Duplex",
      "Titanium",
      "Copper / Brass / Bronze / Aluminum",
      "Graphite / PTFE / compressed fiber fillers",
    ],
    types: [
      "Spiral Wound",
      "Ring Type Joint",
      "Kammprofile",
      "Corrugated Metal",
      "Metal Jacketed",
    ],
    features: [
      "Reliability",
      "Temperature and Pressure Resistance",
      "Customization",
      "Versatility",
      "Longevity",
    ],
    details: [
      "The source page groups spiral wound, RTJ, Kammprofile, corrugated metal, and metal-jacketed options in one metallic sealing family.",
      "Material coverage extends from stainless and nickel alloys to duplex, titanium, copper, brass, bronze, and aluminum.",
      "API 601 and DIN EN 1514 references are called out for refinery and industrial compatibility.",
      "The positioning centers on leak reduction, plant safety, and extended service life in aggressive process media.",
    ],
    certifications: ["ASME B16.20", "API 601", "DIN EN 1514-4", "DIN EN 1514-6"],
    grades: [
      "316L / 304 / 321 / 347 stainless",
      "Inconel",
      "Incoloy",
      "Hastelloy",
      "Monel",
      "Duplex",
      "Titanium",
    ],
    pressureClass: "Configured for extreme high-pressure and high-temperature metallic sealing service.",
    testing:
      "Application-specific metallic and semi-metallic selection aimed at leak reduction, durability, and critical-service sealing integrity.",
  },
  {
    slug: "hammer-union",
    name: "Hammer Union",
    subCategory: "High-Pressure Union Seals",
    description:
      "Forged hammer unions designed for quick make-and-break high-pressure service in oilfield flowlines, drilling systems, fracturing lines, manifolds, and well servicing operations.",
    application:
      "Mud lines, cementing lines, fracturing lines, manifolds, flowlines, well servicing, and high-vibration oilfield systems.",
    applications: [
      "Oil and Gas",
      "Drilling Operations",
      "Pipeline",
      "Well Servicing",
      "Hydraulic Fracturing",
      "Petrochemical",
      "Marine",
    ],
    standards: ["API RP 14E", "NACE MR-01-75"],
    materials: [
      "Carbon Steel",
      "Alloy Steel",
      "Stainless Steel",
      "NACE sour-service steel",
      "Duplex and Super Duplex",
    ],
    types: [
      "Fig 50",
      "Fig 100",
      "Fig 200",
      "Fig 206",
      "Fig 211",
      "Fig 400",
      "Fig 600",
      "Fig 602",
      "Fig 1002",
      "Fig 1003",
      "Fig 1502",
      "Fig 2002 / 2202",
    ],
    features: [
      "Quick connection",
      "Secure wing-nut locking",
      "Pressure resistance",
      "Thermal tolerance",
      "Forged strength",
    ],
    details: [
      "The source specifies a three-piece union with wing nut, male sub, and female sub construction.",
      "Cold working pressure is listed up to 20,000 PSI with 1 in to 12 in size coverage.",
      "Metal-to-metal, O-ring-assisted, and lip-type seal variants are described for different pressure bands.",
      "Threaded and butt-weld end connections are both supported depending on figure and service needs.",
    ],
    certifications: ["API RP 14E", "NACE MR-01-75"],
    grades: [
      "Carbon Steel",
      "Alloy Steel",
      "Stainless Steel",
      "Sour-service steel",
      "Duplex and Super Duplex",
    ],
    pressureClass: "Up to 20,000 PSI cold working pressure.",
    od: "1 in to 12 in nominal sizes.",
    testing:
      "Precision-machined union components with seal-design selection for low, medium, and high-pressure oilfield service.",
  },
  {
    slug: "ptfe-and-cnaf-gaskets",
    name: "PTFE and CNAF Gaskets",
    subCategory: "PTFE and CNAF Sheet Gaskets",
    description:
      "PTFE and compressed non-asbestos fiber gasket range for corrosive chemicals, steam systems, boilers, water lines, and general industrial flange sealing, including custom-cut, full-face, raised-face, envelope, and expanded PTFE builds.",
    application:
      "Chemical processing, petrochemical plants, pharmaceutical production, food lines, oil and gas, boilers, pipelines, heat exchangers, marine, and mining service.",
    applications: [
      "Pharmaceutical",
      "Petrochemical",
      "Food and Beverage",
      "Aerospace",
      "Oil and Gas",
      "Boilers and Heat Exchangers",
      "Marine and Shipbuilding",
      "Mining and Heavy Machinery",
    ],
    standards: ["ASME", "DIN", "ANSI", "IS"],
    materials: [
      "Virgin PTFE",
      "Glass-filled PTFE",
      "Carbon-filled PTFE",
      "Expanded PTFE",
      "Aramid fibers",
      "Mineral fillers",
      "Elastomer binders",
    ],
    types: [
      "Raised-face PTFE",
      "Full-face PTFE",
      "Custom PTFE",
      "PTFE Envelope",
      "Expanded PTFE",
      "CNAF sheet gaskets",
      "Reinforced Graphite",
    ],
    features: [
      "Chemical Resistance",
      "Wide Temperature Range",
      "Low Friction",
      "FDA-friendly service options",
    ],
    details: [
      "The PTFE range includes virgin, carbon-filled, glass-filled, expanded PTFE, and envelope gasket solutions.",
      "Expanded PTFE service is described from -200 C to +260 C for irregular or damaged flange faces.",
      "CNAF builds use aramid fibers, mineral fillers, and elastomer binders for steam, water, and hydrocarbon service.",
      "Reinforced graphite and non-standard custom-cut gasket options are also part of the source range.",
    ],
    certifications: ["ASME", "DIN", "ANSI", "IS"],
    grades: [
      "Virgin PTFE",
      "Glass-filled PTFE",
      "Carbon-filled PTFE",
      "Expanded PTFE",
      "Aramid-reinforced CNAF",
    ],
    pressureClass:
      "Material-specific low-to-high pressure sealing coverage, with expanded PTFE called out for -200 C to +260 C service.",
    testing:
      "Material selection spans corrosive chemical, steam, boiler, and food-grade service with custom flange-fit options.",
  },
  {
    slug: "metal-jacketed-gasket",
    name: "Metal Jacketed Gasket",
    subCategory: "Heat Exchanger and Jacketed Gaskets",
    description:
      "Metal jacketed gaskets built around a resilient soft filler core enclosed in a metallic shell for heat exchangers, pressure vessels, boilers, refinery piping, and other high bolt-load assemblies.",
    application:
      "Heat exchangers, pressure vessels, boilers, refinery and petrochemical piping, aerospace, defense, mining, and minerals processing service.",
    applications: [
      "Oil and Gas",
      "Chemical Processing",
      "Power Generation",
      "Petrochemical Plants",
      "Aerospace",
      "Defense Industries",
      "Minerals Processing",
    ],
    standards: ["ASME B16.20", "API", "DIN", "BS"],
    materials: [
      "Soft Iron / Carbon Steel jackets",
      "SS 304 / 316L / 321 jackets",
      "Copper / Brass",
      "Monel 400",
      "Inconel 600 / 625",
      "Aluminum",
      "Flexible Graphite",
      "PTFE",
      "Ceramic Fiber",
      "Non-Asbestos Millboard",
    ],
    types: [
      "Single Jacketed",
      "Double Jacketed",
      "Double Jacketed Corrugated",
      "Corrugated Metal Gasket",
      "Exchanger Gasket",
      "Solid Gasket",
    ],
    features: [
      "High Blowout Resistance",
      "Thermal Stability",
      "Chemical Resistance",
      "Flange Surface Adaptability",
      "Geometry Flexibility",
    ],
    details: [
      "The source highlights single, double, exchanger, and corrugated metal-jacketed configurations.",
      "Flexible graphite is listed from -200 C to 550 C, PTFE below 260 C, and Inconel-based builds up to 1000 C.",
      "The product page emphasizes narrow-flange fitment, high bolt-load sealing, and blowout resistance.",
      "Material selection is positioned around service media, temperature, and exchanger geometry requirements.",
    ],
    certifications: ["ASME B16.20", "API", "DIN", "BS"],
    grades: [
      "Soft Iron / Carbon Steel",
      "SS 304 / 316L / 321",
      "Monel 400",
      "Inconel 600 / 625",
      "Flexible Graphite",
      "PTFE",
      "Ceramic Fiber",
    ],
    pressureClass:
      "Configured for high bolt-load, high-temperature exchanger and flange sealing service.",
    testing:
      "Application-specific jacket and filler selection focused on blowout resistance, exchanger fit, and thermal stability.",
  },
];

const STEEL_SEALING_GASKET_CONTENT: Record<string, SteelSealingGasketContent> = {
  "ring-gasket": {
    descriptionParagraphs: [
      "Metallo manufactures precision-machined RTJ ring gaskets for flange joints that operate under severe pressure, high temperature, and aggressive media. The range is built for oil and gas, petrochemical, refinery, subsea, and power projects where dependable metal-to-metal sealing and groove compatibility are critical.",
      "The portfolio covers Type R oval and octagonal profiles along with RX, BX, SBX, blind, Bridgeman, lens ring, and Kammprofile variants. Material choices span soft iron, stainless grades, Monel, duplex, and other corrosion-resistant alloys so the sealing geometry and metallurgy can both be matched to the service condition.",
      "Metallo positions these RTJ products for projects that need dimensional accuracy to API and ASME requirements, dependable sealing across repeated make-and-break cycles, and specialty options such as zinc-coated, PTFE-inserted, silver-coated, and high-pressure subsea profiles.",
    ],
    typeGallery: typeGallery(
      "Ring Gasket Types",
      "Metallo's RTJ range covers the standard Type R family and a broader set of specialty profiles for ultra-high-pressure, subsea, transition, blind, and adapted flange systems.",
      [
        createSteelTypeItem("Ring Gasket - Octagonal", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["ringGasketOctagonal"]),
        createSteelTypeItem("Ring Gasket - Oval", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["ringGasketOval"]),
        createSteelTypeItem("BX Type Ring Gaskets", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["bxTypeRingGaskets"]),
        createSteelTypeItem("SBX Type Ring Gaskets", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["sbxTypeRingGaskets"]),
        createSteelTypeItem("RX Types Ring Gaskets", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["rxTypesRingGaskets"]),
        createSteelTypeItem("Zinc Coated Ring Gasket", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["zincCoatedRingGasket"]),
        createSteelTypeItem("Seat Rings", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["seatRings"]),
        createSteelTypeItem("Silver Coated Gasket", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["silverCoatedGasket"]),
        createSteelTypeItem("Lip Seal", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["lipSeal"]),
        createSteelTypeItem("Bonnet Gasket", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["bonnetGasket"]),
        createSteelTypeItem("Ring Gasket with PTFE Inserted", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["ringGasketWithPtfeInserted"]),
        createSteelTypeItem("Bridgeman Gaskets", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["bridgemanGaskets"]),
        createSteelTypeItem("R Type Kammprofile Gaskets - Adapter", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["rTypeKammprofileGasketsAdapter"]),
        createSteelTypeItem("Ring Type Blind Gaskets", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["ringTypeBlindGaskets"]),
        createSteelTypeItem("R Type Kammprofile Gaskets - Octagonal", SITE_IMAGES.steel.sealingGaskets.types["ringGasket"]["rTypeKammprofileGasketsOctagonal"]),
      ],
    ),
  },
  "spiral-wound-gasket": {
    descriptionParagraphs: [
      "Metallo supplies spiral wound gaskets for high-pressure and high-temperature flange service where thermal cycling, bolt-load variation, and vibration quickly expose the limits of soft gasket designs. The construction pairs a formed metallic winding with engineered filler layers to create a resilient sealing element that can recover under demanding operating conditions.",
      "Material options cover graphite, PTFE, mica, ceramic fiber, stainless steels, carbon steel, Monel, Inconel, Hastelloy, titanium, and other specialty alloys. That lets the same SPW family be adapted for refinery, chemical, utility, and process-piping service across a wide range of flange standards and media conditions.",
      "Metallo's spiral wound offering is built around the four core constructions used across industrial piping systems: basic Type G, centering-ring Type CG, inner-ring Type GI, and combined inner-plus-outer-ring Type CGI. Each configuration is chosen according to flange geometry, compression control, and service severity.",
    ],
    typeGallery: typeGallery(
      "Spiral Wound Gasket (SPW) Types",
      "Metallo's SPW range is organized around the four standard configurations used for different flange designs, centering needs, and high-pressure operating conditions.",
      [
        createSteelTypeItem("Type CGI", SITE_IMAGES.steel.sealingGaskets.types["spiralWoundGasket"]["typeCgi"]),
        createSteelTypeItem("Type CG", SITE_IMAGES.steel.sealingGaskets.types["spiralWoundGasket"]["typeCg"]),
        createSteelTypeItem("Type GI", SITE_IMAGES.steel.sealingGaskets.types["spiralWoundGasket"]["typeGi"]),
        createSteelTypeItem("Type G", SITE_IMAGES.steel.sealingGaskets.types["spiralWoundGasket"]["typeG"]),
      ],
    ),
  },
  "ix-gaskets": {
    descriptionParagraphs: [
      "Metallo's IX gasket range is designed for compact flange sealing where dimensional accuracy, coating control, and high sealing reliability are essential. These seals are aligned with NORSOK-based dimensional and material qualification requirements for critical oil and gas and process-system service.",
      "The IX family uses coated metallic seal constructions with color-coded identification, and the available sizes span from IX 15 through IX 1200. The range is suited to installations that need high-integrity compact flange performance, dependable load transfer, and project-specific machining support.",
      "Metallo positions IX gaskets for operators who need reduced leakage risk, long service life, and the ability to customize the seal geometry and coating system around project-specific compact flange arrangements.",
    ],
    typeGallery: typeGallery(
      "IX Gasket Types",
      "Metallo provides four IX gasket variants for compact flange applications, giving teams a clear path to match seal geometry and coating identification to the required service condition.",
      [
        createSteelTypeItem("IX Ring Assembled In Compact Flange Position", SITE_IMAGES.steel.sealingGaskets.types["ixGaskets"]["ixRingAssembledInCompactFlangePosition"]),
        createSteelTypeItem("IX-RING-BLUE", SITE_IMAGES.steel.sealingGaskets.types["ixGaskets"]["ixRingBlue"]),
        createSteelTypeItem("IX-RING-ORANGE", SITE_IMAGES.steel.sealingGaskets.types["ixGaskets"]["ixRingOrange"]),
        createSteelTypeItem("IX-RING-YELLOW", SITE_IMAGES.steel.sealingGaskets.types["ixGaskets"]["ixRingYellow"]),
      ],
    ),
  },
  "insulation-gasket": {
    descriptionParagraphs: [
      "Metallo manufactures flange insulation gasket kits for applications where sealing and electrical isolation have to work together. These assemblies are used to interrupt galvanic paths, protect flange faces from corrosion, and maintain leak-tight performance across refinery, pipeline, utility, and process-system connections.",
      "The complete kit can include the insulation gasket, sleeves, insulating washers, and metal backup washers, with material choices such as phenolic, neoprene-faced phenolic, G10/G11 glass epoxy, GRE, PTFE, and custom composites. Configurations are matched to RF, FF, and RTJ flange systems based on operating pressure, temperature, and media exposure.",
      "Metallo's insulation gasket program is aimed at projects that need standardized flange compatibility, corrosion control, and repeatable field installation without sacrificing the long-term electrical isolation needed on critical piping networks.",
    ],
    typeGallery: typeGallery(
      "Insulation Gasket Types",
      "Metallo offers insulation gasket geometries for raised-face, full-face, and RTJ flange systems so isolation performance can be aligned with the actual flange design in service.",
      [
        createSteelTypeItem("Type D", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeD"]),
        createSteelTypeItem("Type D G10", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeDG10"]),
        createSteelTypeItem("Type E", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeE"]),
        createSteelTypeItem("Type F", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeF"]),
        createSteelTypeItem("Type F G10 316", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeFG10316"]),
        createSteelTypeItem("Type F G10 PTF", SITE_IMAGES.steel.sealingGaskets.types["insulationGasket"]["typeFG10Ptf"]),
      ],
    ),
  },
  "vx-ax-gaskets": {
    descriptionParagraphs: [
      "Metallo's VX and AX gasket offering is positioned for sealing duties where pressure, temperature, and chemical resistance cannot be treated as secondary concerns. The VX series is tuned for higher-severity operating conditions, while the AX series focuses on dependable sealing across a broad range of industrial service environments.",
      "This range is suited to petrochemical, pharmaceutical, power, automotive, HVAC, plumbing, and general industrial systems that need reliable ring-joint style sealing with multiple material and size combinations available. Metallo uses the VX/AX family where customers need a practical route to strong sealing performance without narrowing the application window to a single media or plant type.",
    ],
  },
  "rubber-gasket": {
    descriptionParagraphs: [
      "Metallo manufactures industrial rubber gaskets for flange and pipeline sealing across oil and gas, water treatment, chemical processing, utilities, automotive, and food-related service. The range is built around elastomer selection first, so sealing performance can be matched to the actual combination of media, temperature, pressure, and environmental exposure.",
      "Material options include NBR, EPDM, FKM, silicone, neoprene, butyl, SBR, and natural rubber, with different hardness levels and thicknesses available depending on bolt load and extrusion resistance. The range supports both general plant service and more specialized duties such as fuel exposure, weather resistance, hygienic production, steam resistance, and high-vibration equipment.",
      "Metallo's rubber gasket program follows the same practical selection logic engineers use in the field: flange size, operating temperature, media chemistry, pressure class, and applicable standards. That makes it useful for teams who need a reliable material recommendation rather than a one-compound-fits-all approach.",
    ],
    typeGallery: typeGallery(
      "Rubber Gasket Types",
      "Metallo offers rubber gasket forms that line up with common flange faces and custom-cut requirements, while the elastomer compound itself is chosen around media compatibility and operating conditions.",
      [
        createSteelTypeItem("Full Face Type", SITE_IMAGES.steel.sealingGaskets.types["rubberGasket"]["fullFaceType"]),
        createSteelTypeItem("Raised Face", SITE_IMAGES.steel.sealingGaskets.types["rubberGasket"]["raisedFace"]),
        createSteelTypeItem("Customized Rubber Gasket", SITE_IMAGES.steel.sealingGaskets.types["rubberGasket"]["customizedRubberGasket"]),
      ],
    ),
  },
  "metal-gasket": {
    descriptionParagraphs: [
      "Metallo's metal gasket range covers the sealing families used when pressure, temperature, chemical exposure, and flange loading push beyond the safe limits of standard soft-gasket designs. The offering is built for refinery, petrochemical, utility, marine, heavy manufacturing, and process-plant applications where sealing reliability directly affects uptime and safety.",
      "The program spans metallic and semi-metallic constructions including spiral wound, RTJ, Kammprofile, corrugated metal, and metal jacketed options. Material coverage extends from stainless steels and nickel alloys to duplex, titanium, copper, brass, bronze, aluminum, graphite-faced, and PTFE-backed configurations so the final gasket can be tuned to both the media and the flange condition.",
      "Metallo uses this family as a broader industrial sealing platform: one catalog that lets project teams compare recovery, blowout resistance, bolting demands, and corrosion behavior across the major metallic gasket technologies instead of treating each one as a separate procurement exercise.",
    ],
    typeGallery: typeGallery(
      "Metal Gasket Types",
      "Metallo groups its metal gasket offer around the core metallic sealing constructions most often specified in critical piping, exchanger, and pressure-boundary applications.",
      [
        createSteelTypeItem("Spiral Wound Gasket", SITE_IMAGES.steel.sealingGaskets.types["metalGasket"]["spiralWoundGasket"]),
        createSteelTypeItem("Metal Jacketed Gaskets", SITE_IMAGES.steel.sealingGaskets.types["metalGasket"]["metalJacketedGaskets"]),
        createSteelTypeItem("Ring Gaskets", SITE_IMAGES.steel.sealingGaskets.types["metalGasket"]["ringGaskets"]),
      ],
    ),
  },
  "hammer-union": {
    descriptionParagraphs: [
      "Metallo supplies forged hammer unions for fast make-and-break high-pressure service in drilling, well servicing, fracturing, cementing, mud-line, manifold, and flowline systems. The three-piece construction is aimed at crews that need a secure connection under vibration and pressure without moving to slower or more complex field assembly methods.",
      "Material options include carbon steel, alloy steel, stainless steel, sour-service grades, and duplex materials, with figure-series selections available for different pressure bands and connection styles. The range is intended for operators who need dependable pressure containment, robust sealing surfaces, and a predictable maintenance path in oilfield service.",
      "Metallo also positions the hammer union family around service-specific seal design, offering metal-to-metal, assisted, and lip-type approaches so the connection can be matched to both the pressure level and the working environment.",
    ],
    typeGallery: typeGallery(
      "Hammer Union Types",
      "Metallo's hammer union range covers the figure series commonly specified for oilfield flowlines and high-pressure service connections, with options spanning standard threaded and butt-weld end formats.",
      [
        createSteelTypeItem("Fig 50 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig50Union"]),
        createSteelTypeItem("Fig 100 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig100Union"]),
        createSteelTypeItem("Fig 200 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig200Union"]),
        createSteelTypeItem("Fig 206 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig206Union"]),
        createSteelTypeItem("Fig 211 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig211Union"]),
        createSteelTypeItem("Fig 400 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig400Union"]),
        createSteelTypeItem("Fig 600 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig600Union"]),
        createSteelTypeItem("Fig 602 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig602Union"]),
        createSteelTypeItem("Fig 1002 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig1002Union"]),
        createSteelTypeItem("Fig 1003 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig1003Union"]),
        createSteelTypeItem("Fig 1502 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig1502Union"]),
        createSteelTypeItem("Fig 2002 & 2202 Union", SITE_IMAGES.steel.sealingGaskets.types["hammerUnion"]["fig20022202Union"]),
      ],
    ),
  },
  "ptfe-and-cnaf-gaskets": {
    descriptionParagraphs: [
      "Metallo's PTFE and CNAF gasket range is built for plant teams that need dependable sealing across both corrosive chemical service and more general steam, water, oil, and utility duties. The family includes virgin and filled PTFE grades, expanded PTFE options, CNAF sheet materials, and reinforced graphite solutions for applications that span from pharmaceutical lines to boiler rooms.",
      "PTFE constructions are selected where chemical resistance, low friction, and clean-service behavior matter most, while CNAF options are used where compressibility, economy, and thermal-pressure durability need to stay balanced. Together, the range gives customers a practical path from aggressive media service to general industrial flange sealing without changing suppliers or design logic mid-project.",
      "Metallo uses this product line for raised-face, full-face, envelope, custom-cut, and irregular flange applications where temperature stability, creep control, and pressure performance all have to be considered together.",
    ],
    typeGallery: typeGallery(
      "PTFE and CNAF Gasket Types",
      "Metallo's PTFE and CNAF offer combines chemically resistant PTFE sealing with reinforced sheet-gasket options for steam, utility, and general industrial service.",
      [
        createSteelTypeItem("Reinforced Graphite Gasket Reinforcements", SITE_IMAGES.steel.sealingGaskets.types["ptfeAndCnafGaskets"]["reinforcedgraphiteGasketReinforcements"]),
        createSteelTypeItem("General Compressed Non-Asbestos Fibre", SITE_IMAGES.steel.sealingGaskets.types["ptfeAndCnafGaskets"]["generalCompressedNonAsbestosFibre"]),
      ],
    ),
  },
  "metal-jacketed-gasket": {
    descriptionParagraphs: [
      "Metallo manufactures metal jacketed gaskets for exchanger channels, vessels, boilers, and flange assemblies that operate with elevated temperature, high bolt load, and demanding media exposure. These gaskets combine a resilient filler core with a metallic jacket so the sealing element can deliver controlled compression while still resisting damage in harder service conditions.",
      "The range includes single-jacketed, double-jacketed, exchanger-style, corrugated, and solid variants along with filler materials such as flexible graphite, PTFE, ceramic fiber, and non-asbestos millboard. Jacket materials span carbon steel, stainless steels, Monel, Inconel, copper, brass, and aluminum depending on the thermal and chemical demands of the application.",
      "Metallo positions this family for situations where narrow flange widths, thermal cycling, blowout resistance, and flange-surface irregularities all matter. That makes it especially relevant for heat exchangers and process equipment that cannot rely on standard sheet gasket behavior.",
    ],
    typeGallery: typeGallery(
      "Metal Jacketed Gasket Types",
      "Metallo's metal jacketed family includes the core constructions used for exchanger channels, confined flange spaces, and higher-temperature pressure-boundary sealing duties.",
      [
        createSteelTypeItem("Single Jacketed Gasket", SITE_IMAGES.steel.sealingGaskets.types["metalJacketedGasket"]["singleJacketedGasket"]),
        createSteelTypeItem("Corrugated Gasket", SITE_IMAGES.steel.sealingGaskets.types["metalJacketedGasket"]["corrugatedGasket"]),
        createSteelTypeItem("Solid Gasket", SITE_IMAGES.steel.sealingGaskets.types["metalJacketedGasket"]["solidGasket"]),
        createSteelTypeItem("Metal Jacketed Gasket", SITE_IMAGES.steel.sealingGaskets.types["metalJacketedGasket"]["metalJacktedGasket"]),
      ],
    ),
  },
};

const toSteelProduct = (source: SteelSealingGasketSource): SteelProduct => {
  const certifications = normalizeSteelList(
    source.certifications ?? source.standards,
  ).slice(
    0,
    4,
  );
  const content = STEEL_SEALING_GASKET_CONTENT[source.slug];
  return {
    Category: "Sealing & Gaskets",
    "Sub-Category": source.subCategory,
    "Product Name": source.name,
    Description: content?.descriptionParagraphs?.[0] ?? source.description,
    Grades: formatSteelList(source.grades ?? source.materials, 6),
    Standards: formatSteelList(source.standards, 6),
    Application: source.application,
    thumbnail: gasketImage(source.slug),
    "Pressure Class": source.pressureClass,
    Type: formatSteelList(source.types, 6),
    Material: formatSteelList(source.materials, 6),
    OD: source.od,
    WallThickness: source.wallThickness,
    Hardness: source.hardness,
    Certification: certifications.length > 0 ? certifications : undefined,
    Testing:
      source.testing ??
      formatSteelList([...source.features, ...source.details], 4),
    Applications: source.applications,
    applicationImage: gasketImage(source.slug),
    descriptionParagraphs: content?.descriptionParagraphs,
    typeGallery: content?.typeGallery,
  };
};

export const STEEL_GASKET_PRODUCTS: SteelProduct[] =
  STEEL_SEALING_GASKET_SOURCES.map(toSteelProduct);
