import { SITE_IMAGES } from '@/config/images';
import type { SteelProduct } from "./steelTypes";
import {
  createSteelTypeGallery,
  createSteelTypeItem,
  formatSteelList,
} from "./steelCatalogUtils";

const STEEL_FASTENER_IMAGE_DIR = "/products/steel/fasteners-bars";




const FASTENER_COMMON_CERTIFICATIONS = [
  "ASTM",
  "ASME",
  "DIN / ISO",
  "Project Traceability",
] as const;

interface SteelFastenerSource {
  slug: string;
  name: string;
  subCategory: string;
  sourceUrl: string;
  descriptionParagraphs: string[];
  grades: string[];
  standards: string[];
  sizeRange: string;
  typeSummary: string[];
  materialFamilies: string[];
  testing: string;
  application: string;
  applications: string[];
  thumbnail: string;
  typeGalleryIntro: string;
  typeItems: ReturnType<typeof createSteelTypeGallery>["items"];
  certification?: string[];
  tensileStrength?: string;
  hardness?: string;
  surfaceFinish?: string;
}

const FASTENER_SOURCES: SteelFastenerSource[] = [
    {
    slug: "stainless-fasteners",
    name: "Stainless Steel Fasteners",
    subCategory: "Stainless Steel Fasteners",
    sourceUrl: "https://www.deepakfasteners.com/stainless",
    descriptionParagraphs: [
      "Metallo supplies stainless steel fasteners for corrosive, hygienic, marine, and outdoor service where the fastening system needs corrosion resistance as well as mechanical consistency. The sourced range spans screws, bolts, nuts, washers, spring washers, and threaded rods across metric and inch standards.",
      "The program is organized around A2 and A4 stainless grades together with ASTM F-series inch requirements, giving engineering teams a clear path from general corrosion-resistant bolting to more specification-driven stainless assemblies. Metallo positions this family where plant durability and clean-service suitability outweigh the cost of carbon-steel hardware.",
    ],
    grades: [
      "A2-70 / A2-80",
      "A4-70 / A4-80",
      "ASTM F837",
      "ASTM F593",
      "ASTM F594",
      "304 stainless",
      "316 stainless",
    ],
    standards: [
      "DIN 912 / ISO 4762",
      "DIN 933 / ISO 4017",
      "DIN 931 / ISO 4014",
      "DIN 934 / ISO 4032",
      "DIN 125 A",
      "DIN 127 B",
      "DIN 7980",
      "DIN 975",
      "ASME B18.3 / ASTM F837",
      "ASME B18.2.1 / ASTM F593",
      "ASME B18.2.2 / ASTM F594",
      "ANSI B18.21.1",
    ],
    sizeRange:
      'M3 to M64 metric coverage and 3/16" to 1 1/2" inch stainless hardware formats.',
    typeSummary: [
      "Socket Head Cap Screw",
      "Hex Head Screw",
      "Hex Head Bolt",
      "Hex Nut",
      "Plain Washer",
      "Spring Washers",
      "Threaded Rod",
    ],
    materialFamilies: [
      "304 stainless steel",
      "316 stainless steel",
      "A2 fasteners",
      "A4 fasteners",
    ],
    testing:
      "Thread and dimension checks, grade verification, corrosion-service traceability, and lot-based quality inspection.",
    application:
      "Corrosion-resistant bolting for marine, chemical, hygienic, and outdoor equipment service.",
    applications: [
      "Marine Equipment",
      "Chemical Plants",
      "Hygienic Systems",
      "Outdoor Installations",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.stainless,
    typeGalleryIntro:
      "Metallo's stainless range brings together the core screw, bolt, nut, washer, and threaded-rod formats needed for corrosion-resistant fastening systems.",
    typeItems: [
      createSteelTypeItem("Socket Head Cap Screw - Metric", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s1"]),
      createSteelTypeItem("Hex Head Screw (Full Thread)", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s2"]),
      createSteelTypeItem("Hex Head Bolt (Partial Thread)", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s3"]),
      createSteelTypeItem("Hex Nut - Metric", SITE_IMAGES.steel.fasteners.types.stainlessFasteners.s4),
      createSteelTypeItem("Plain Washer - Metric", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s6"]),
      createSteelTypeItem("Flat Section Spring Washer - Metric", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s7"]),
      createSteelTypeItem("Square Section Spring Washer - Metric", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s8"]),
      createSteelTypeItem("Threaded Rod - Metric", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s9"]),
      createSteelTypeItem("Socket Head Cap Screw ASTM F837", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s10"]),
      createSteelTypeItem("Hex Head Bolt / Screw ASTM F593", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s11"]),
      createSteelTypeItem("304 / 316 Hex Nut ASTM F594", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s12"]),
      createSteelTypeItem("Plain Washer ANSI B18.21.1", SITE_IMAGES.steel.fasteners.types["stainlessFasteners"]["s13"]),
    ],
  },

  {
    slug: "hex-bolts",
    name: "Hex Bolts and Screws",
    subCategory: "Hex Bolts / Screws",
    sourceUrl: "https://www.deepakfasteners.com/hexbolts",
    descriptionParagraphs: [
      "Metallo supplies hex bolts and screws for mechanical assemblies, fabricated equipment, steel structures, and site bolting programs that need dependable clamp load across both metric and inch standards. The sourced range includes full-thread and half-thread builds plus standard cap-screw and general-purpose hex-bolt formats.",
      "This gives procurement teams access to high-strength metric class 10.9 bolts alongside ASME and ASTM inch-series options for OEM, retrofit, and maintenance work. Metallo positions the family where thread engagement, tensile capability, and standard compliance need to stay consistent across mixed project specifications.",
    ],
    grades: [
      "Property Class 10.9",
      "Grade 8",
      "Grade 5",
      "ASTM A307 Grade A",
    ],
    standards: ["ISO 4017", "ISO 4014", "ASME B18.2.1", "ASTM A307"],
    sizeRange: 'M4 to M80 metric and 1/4" to 2" inch coverage.',
    typeSummary: [
      "Hex Head Bolt / Screw - Metric",
      "Hex Cap Screw Grade 8",
      "Hex Cap Screw Grade 5",
      "Hex Bolt ASTM A307",
    ],
    materialFamilies: [
      "High-strength carbon steel",
      "Alloy steel fasteners",
      "Project-specific coated steel",
    ],
    testing:
      "Thread gauging, mechanical verification, dimensional inspection, hardness checks, and traceable lot control.",
    application:
      "General industrial bolting, fabricated assemblies, equipment mounting, and structural steel connections.",
    applications: [
      "Equipment Assembly",
      "Plant Maintenance",
      "Structural Steel",
      "OEM Manufacturing",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.hexbolts,
    typeGalleryIntro:
      "Metallo's hex bolt program spans metric and inch fasteners for general-duty through high-strength industrial assemblies.",
    typeItems: [
      createSteelTypeItem("Hex Head Bolt / Screw - Metric", SITE_IMAGES.steel.fasteners.types["hexBolts"]["hex1"]),
      createSteelTypeItem("Hex Cap Screw Grade 8", SITE_IMAGES.steel.fasteners.types.hexBolts.hex2),
      createSteelTypeItem("Hex Cap Screw Grade 5", SITE_IMAGES.steel.fasteners.types.hexBolts.hex3),
      createSteelTypeItem("Hex Bolt ASTM A307", SITE_IMAGES.steel.fasteners.types.hexBolts.hex4),
    ],
    tensileStrength:
      "Metric class 10.9 at 1040 N/mm^2 minimum, with inch-series grades from 60 Ksi minimum through 150,000 psi minimum depending on standard.",
  },
  {
    slug: "hex-nuts",
    name: "Hex Nuts",
    subCategory: "Hex Nuts",
    sourceUrl: "https://www.deepakfasteners.com/hexnuts",
    descriptionParagraphs: [
      "Metallo's hex nut range is built for bolt-and-stud assemblies that need repeatable thread fit, load retention, and compatibility across metric and inch fastener standards. The sourced assortment includes standard hex nuts, nylock variants, weld nuts, serrated flange nuts, and coupling nuts.",
      "That mix makes the range practical for everything from general machine assembly and structural connections to vibration-prone installations that benefit from prevailing-torque or locking designs. Metallo positions this family where nut geometry and retention style need to be matched to the joint, not treated as an afterthought.",
    ],
    grades: [
      "Property Class 10",
      "Property Class 8",
      "Grade 8",
      "Grade 5",
      "ASME Grade 2",
      "Project-specific hardness classes",
    ],
    standards: [
      "ISO 4032",
      "DIN 982",
      "DIN 985",
      "DIN 929",
      "ASME B18.2.2",
      "ASME B18.16.6",
      "ASME B18.16.4",
    ],
    sizeRange:
      'M6 to M42 metric, M6 to M24 nylock coverage, and 1/4" to 2" inch formats.',
    typeSummary: [
      "Hex Nut ISO 4032",
      "Nylock Nut DIN 982",
      "Nylock Nut DIN 985",
      "Hex Weld Nut DIN 929",
      "Hex Nut ASME B18.2.2",
      "Hex Serrated Flange Nut",
      "Hex Coupling Nut",
    ],
    materialFamilies: [
      "Carbon steel nuts",
      "Alloy steel nuts",
      "Locking nut constructions",
      "Project-specific machined nuts",
    ],
    testing:
      "Thread inspection, dimensional checks, hardness verification, locking-feature review, and lot traceability.",
    application:
      "Stud and bolt retention across industrial equipment, fabricated structures, and vibration-sensitive connections.",
    applications: [
      "Stud Assemblies",
      "Heavy Machinery",
      "Fabrication Shops",
      "Vibration-Sensitive Joints",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.hexnut,
    typeGalleryIntro:
      "Metallo's nut program covers standard, locking, welding, flange, and coupling designs so the fastening method can match the joint requirement.",
    typeItems: [
      createSteelTypeItem("Hex Nut ISO 4032", SITE_IMAGES.steel.fasteners.types.hexNuts.n1),
      createSteelTypeItem("Nylock Nut DIN 982", SITE_IMAGES.steel.fasteners.types.hexNuts.n2),
      createSteelTypeItem("Nylock Nut DIN 985", SITE_IMAGES.steel.fasteners.types.hexNuts.n2),
      createSteelTypeItem("Hex Weld Nut DIN 929", SITE_IMAGES.steel.fasteners.types.hexNuts.n4),
      createSteelTypeItem("Hex Nut ASME B18.2.2 Grade 8", SITE_IMAGES.steel.fasteners.types["hexNuts"]["in1"]),
      createSteelTypeItem("Hex Nut ASME B18.2.2 Grade 5", SITE_IMAGES.steel.fasteners.types["hexNuts"]["in1"]),
      createSteelTypeItem("Nylock Nut ASME B18.16.6", SITE_IMAGES.steel.fasteners.types["hexNuts"]["in3"]),
      createSteelTypeItem("Hex Serrated Flange Nut", SITE_IMAGES.steel.fasteners.types["hexNuts"]["in4"]),
      createSteelTypeItem("Hex Coupling Nut", SITE_IMAGES.steel.fasteners.types.hexNuts.in5),
    ],
  },
  {
    slug: "washers",
    name: "Washers",
    subCategory: "Washers",
    sourceUrl: "https://www.deepakfasteners.com/washers",
    descriptionParagraphs: [
      "Metallo supplies washer families that control load distribution, surface protection, and anti-loosening behavior across structural, mechanical, and plant-maintenance bolting systems. The sourced range covers spring, hardened, plain, and lock-washer formats in both metric and inch standards.",
      "This lets engineering teams align washer hardness and geometry with the bolt grade, coating system, and joint behavior instead of treating washers as generic hardware. Metallo positions the range for assemblies where preload retention and bearing-surface protection directly affect joint performance.",
    ],
    grades: [
      "HV 430 to 530",
      "HV 300 to 370",
      "HRC 38 to 46",
      "Rockwell 26 to 45",
    ],
    standards: [
      "DIN 7980",
      "DIN 127 B",
      "IS 2016",
      "ASTM F436M",
      "ASME B18.21.1-A",
      "ASME B18.21.1",
      "ASTM F436",
    ],
    sizeRange: '3 mm to 56 mm metric and 1/4" to 2" inch coverage.',
    typeSummary: [
      "Square Section Spring Washer",
      "Flat Section Spring Washer",
      "Hardened Washer",
      "Hardened Steel Washer",
      "USS Plain Washer",
      "SAE Plain Washer",
      "Spring-Lock Washer",
    ],
    materialFamilies: [
      "Spring steel washers",
      "Hardened steel washers",
      "Plain load-distribution washers",
      "Coated and HDG-compatible washers",
    ],
    testing:
      "Hardness verification, dimensional inspection, coating review, and surface-condition checks for preload-critical joints.",
    application:
      "Load spreading, bearing-surface protection, and anti-loosening support in industrial bolted joints.",
    applications: [
      "Structural Connections",
      "Heavy Equipment",
      "General Maintenance",
      "Preload-Critical Joints",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.washers,
    typeGalleryIntro:
      "Metallo's washer offer spans spring, plain, and hardened designs so load distribution and loosening resistance can be specified together.",
    typeItems: [
      createSteelTypeItem("Square Section Spring Washer", SITE_IMAGES.steel.fasteners.types["washers"]["w1"]),
      createSteelTypeItem("Flat Section Spring Washer", SITE_IMAGES.steel.fasteners.types["washers"]["w2"]),
      createSteelTypeItem("Hardened Washer IS 2016", SITE_IMAGES.steel.fasteners.types.washers.w3),
      createSteelTypeItem("Hardened Steel Washer ASTM F436M", SITE_IMAGES.steel.fasteners.types["washers"]["w3"]),
      createSteelTypeItem("USS Plain Washer", SITE_IMAGES.steel.fasteners.types.washers.w3),
      createSteelTypeItem("SAE Plain Washer", SITE_IMAGES.steel.fasteners.types.washers.w3),
      createSteelTypeItem("Spring-Lock Washer", SITE_IMAGES.steel.fasteners.types.washers.w4),
      createSteelTypeItem("Hardened Washer ASTM F436", SITE_IMAGES.steel.fasteners.types.washers.w3),
    ],
    hardness:
      "Hardness coverage spans approximately HV 300 to 530 and HRC 38 to 46 depending on washer family and coating condition.",
  },
  {
    slug: "petrochemical-stud-bolts",
    name: "Petrochemical Stud Bolts",
    subCategory: "Petrochemical Stud Bolts",
    sourceUrl: "https://www.deepakfasteners.com/petrochemical_studbolts",
    descriptionParagraphs: [
      "Metallo's petrochemical bolting range is built around stud-bolt and nut assemblies used on flanges, valves, pressure vessels, and process equipment where traceable ASTM material combinations are expected. The sourced program covers both metric and inch dimensions so refinery and process-plant teams can align to regional project standards without changing product family.",
      "The available grade mix spans common high-temperature, low-temperature, stainless, and corrosion-resistant bolting combinations used across critical flange joints. Metallo positions this range for shutdown spares, capital projects, and routine plant maintenance where matching the stud and nut system to the line class is essential.",
    ],
    grades: [
      "ASTM A193 B7 / B7M / B8 / B8M / B16",
      "ASTM A320 L7 / L7M",
      "ASTM A194 2H / 2HM / 4 / 7 / 8 / 8M",
    ],
    standards: [
      "ASTM A193",
      "ASTM A193M",
      "ASTM A320",
      "ASTM A320M",
      "ASTM A194",
      "ASTM A194M",
      "ANSI B18.2.4.6M",
    ],
    sizeRange: 'M12 to M56 metric and 1/2" to 2 1/4" inch stud coverage.',
    typeSummary: [
      "Stud Bolt - Metric",
      "Heavy Hex Nut - Metric",
      "Stud Bolt - Inch",
      "Heavy Hex Nut - Inch",
    ],
    materialFamilies: [
      "Alloy steel stud bolting",
      "Low-temperature bolting alloys",
      "Stainless steel process bolting",
      "Pressure-boundary nut grades",
    ],
    testing:
      "Mechanical verification, thread gauging, dimensional inspection, grade traceability, and refinery-bolting lot control.",
    application:
      "Flange bolting, pressure vessels, valves, exchangers, and refinery process equipment.",
    applications: [
      "Refinery Flanges",
      "Pressure Vessels",
      "Heat Exchangers",
      "Critical Process Equipment",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.studbolt,
    typeGalleryIntro:
      "Metallo's petrochemical bolting program pairs stud bolts and nuts in the ASTM material systems most commonly specified for pressure-boundary joints.",
    typeItems: [
      createSteelTypeItem("Stud Bolt - Metric", SITE_IMAGES.steel.fasteners.types["petrochemicalStudBolts"]["s1"]),
      createSteelTypeItem("Heavy Hex Nut - Metric", SITE_IMAGES.steel.fasteners.types["petrochemicalStudBolts"]["s2"]),
      createSteelTypeItem("Stud Bolt - Inch", SITE_IMAGES.steel.fasteners.types["petrochemicalStudBolts"]["s1"]),
      createSteelTypeItem("Heavy Hex Nut - Inch", SITE_IMAGES.steel.fasteners.types["petrochemicalStudBolts"]["s2"]),
    ],
  },

  {
    slug: "structural-assemblies",
    name: "Structural Assemblies",
    subCategory: "Structural Assemblies",
    sourceUrl: "https://www.deepakfasteners.com/assemblies",
    descriptionParagraphs: [
      "Metallo's structural assembly range is built for preloaded and non-preloaded steel connections where bolt, nut, and washer performance has to line up with erection method and design code. The sourced family covers EN, IS, ASTM, and AS structural bolting systems, including heavy hex, HR, HV, and tension-control formats.",
      "This allows engineering and site teams to source complete assembly families for bridges, towers, industrial structures, and fabricated steel frames without mixing incompatible nut and washer systems. Metallo positions the range for joint-critical structural work where preload behavior, hardness, and standard compliance drive the fastener selection.",
    ],
    grades: [
      "8.8 / 10.9",
      "10.9S",
      "4.6 / 5.6 / 6.8 / 8.8 / 10.9",
      "ASTM A325",
      "ASTM A490",
      "ASTM A563",
      "ASTM A194 2H",
      "ASTM F1852",
      "ASTM F2280",
    ],
    standards: [
      "BS EN 14399-3",
      "BS EN 14399-4",
      "BS EN 14399-6",
      "BS EN 14399-10",
      "BS EN 15048-1",
      "BS EN 15048-2",
      "AS1252",
      "IS 3757",
      "IS 6623",
      "IS 6649",
      "ASTM A325",
      "ASTM A490",
      "ASTM A563",
      "ASTM A194 2H",
      "ASTM F436",
      "ASTM F1852",
      "ASTM F2280",
    ],
    sizeRange: 'M12 to M36 metric and 1/4" to 2" inch structural assembly coverage.',
    typeSummary: [
      "HR structural bolts",
      "HV structural bolts",
      "Pre-load nuts",
      "Structural washers",
      "Heavy hex systems",
      "Tension-control assemblies",
      "Non pre-load structural sets",
    ],
    materialFamilies: [
      "High-strength structural steel bolting",
      "Preload bolt systems",
      "Heavy hex structural hardware",
      "Code-compliant structural washers and nuts",
    ],
    testing:
      "Mechanical verification, preload-system matching, hardness control, thread gauging, and structural lot traceability.",
    application:
      "Preloaded and non-preloaded steel connections in fabricated structures, bridges, towers, and heavy frames.",
    applications: [
      "Industrial Structures",
      "Bridge Steelwork",
      "Towers and Masts",
      "Heavy Fabrication",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.structurebolt,
    typeGalleryIntro:
      "Metallo's structural assembly program groups the bolt, nut, and washer systems used across EN, IS, ASTM, and Australian structural fastening requirements.",
    typeItems: [
      createSteelTypeItem("System HR Structural Bolt", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a1"]),
      createSteelTypeItem("System HR Pre-Load Nut", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a2"]),
      createSteelTypeItem("Plain Chamfered Washer", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a3"]),
      createSteelTypeItem("System HV Structural Bolt", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a4"]),
      createSteelTypeItem("System HV Pre-Load Nut", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a5"]),
      createSteelTypeItem("Tension Control Structural Bolt BS EN 14399-10", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a6"]),
      createSteelTypeItem("Pre-Load Nut BS EN 14399-10", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a7"]),
      createSteelTypeItem("Non Pre-Load Structural Bolt", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a9"]),
      createSteelTypeItem("Non Pre-Load Structural Nut", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a10"]),
      createSteelTypeItem("High-Strength Structural Bolt AS1252", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a11"]),
      createSteelTypeItem("Structural Nut AS1252", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a12"]),
      createSteelTypeItem("Structural Washer AS1252", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a13"]),
      createSteelTypeItem("Heavy Hex Structural Bolt IS 3757", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a15"]),
      createSteelTypeItem("Heavy Hex Nut IS 6623", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a16"]),
      createSteelTypeItem("Structural Washer IS 6649", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a17"]),
      createSteelTypeItem("Heavy Hex Structural Bolt ASTM A325", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a18"]),
      createSteelTypeItem("Heavy Hex Structural Bolt ASTM A490", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a19"]),
      createSteelTypeItem("Heavy Hex Nuts Grade DH ASTM A563", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a20"]),
      createSteelTypeItem("Heavy Hex Nut Grade 2H ASTM A194", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a21"]),
      createSteelTypeItem("Hardened Washer ASTM F436", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a22"]),
      createSteelTypeItem("Tension Control Structural Bolt ASTM F1852", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a23"]),
      createSteelTypeItem("Tension Control Structural Bolt ASTM F2280", SITE_IMAGES.steel.fasteners.types["structuralAssemblies"]["a24"]),
    ],
  },
  {
    slug: "special-fasteners-bars",
    name: "Special Fasteners and Threaded Bars",
    subCategory: "Special Fasteners & Threaded Bars",
    sourceUrl: "https://www.deepakfasteners.com/specials",
    descriptionParagraphs: [
      "Metallo's special fastener and threaded bar range is designed for applications that sit outside standard commodity hardware, including shear connectors, rebar couplers, specialty bolts, security fasteners, and project-specific bar products. The sourced portfolio mixes industrial, structural, infrastructure, and custom-machined items in both metric and inch formats.",
      "This is the section Metallo uses when a project needs fastening hardware that aligns to a particular site method, civil connection detail, or proprietary equipment requirement rather than a standard hex-bolt specification. Threaded bars are included here as part of the sourced family, giving the Steel catalog a proper fasteners-and-bars offer instead of only standard bolting hardware.",
    ],
    grades: [
      "Type SD1 / SD2",
      "4.6 / 5.8 / 6.8 / 8.8 / 10.9 / 12.9",
      "ASTM A193 B7 / B7M / B8 / B8M / B16 / L7 / L7M",
      "ASTM A307 Grade A",
      "Project-specific custom grades",
    ],
    standards: [
      "ISO 13918",
      "ASTM A615",
      "ASTM A706",
      "ASTM A775",
      "IS 1786",
      "IS 16172",
      "DIN 439",
      "DIN 603",
      "DIN 935",
      "DIN 937",
      "DIN 975",
      "DIN 976",
      "ASTM A193",
      "ASTM A307",
      "ASTM A563",
    ],
    sizeRange:
      'M3 to M64 fasteners, 1/4" to 2" threaded bars, and rebar couplers from 20 mm to 80 mm.',
    typeSummary: [
      "Arc welding studs",
      "Rebar couplers",
      "Tee bolts",
      "Trackshoe bolts",
      "Special nuts",
      "Security fasteners",
      "Carriage bolts",
      "Threaded bars",
    ],
    materialFamilies: [
      "Project-specific alloy steel",
      "Structural steel hardware",
      "Custom-machined fasteners",
      "Threaded bar systems",
    ],
    testing:
      "Dimensional inspection, application-fit review, hardness or tensile verification where specified, and project-traceable special-fastener control.",
    application:
      "Infrastructure anchoring, civil rebar joining, custom machinery, security fittings, and threaded bar supply.",
    applications: [
      "Civil Infrastructure",
      "Steel Fabrication",
      "Custom Machinery",
      "Threaded Bar Supply",
    ],
    thumbnail: SITE_IMAGES.steel.fasteners.special,
    typeGalleryIntro:
      "Metallo's special-fastener range covers the non-standard hardware, couplers, and threaded bar products that projects often need alongside standard bolts and nuts.",
    typeItems: [
      createSteelTypeItem("Arc Welding Stud / Shear Connector", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s1"]),
      createSteelTypeItem("Upset Parallel Threaded Rebar Coupler", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s2"]),
      createSteelTypeItem("Parallel Threaded Rebar Coupler", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s3"]),
      createSteelTypeItem("Tee Bolt - Metric", SITE_IMAGES.steel.fasteners.types.specialFastenersBars.s4),
      createSteelTypeItem("Trackshoe Bolt - Metric", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s5"]),
      createSteelTypeItem("Square Nut - Metric", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s6"]),
      createSteelTypeItem("Hex Lock Nut", SITE_IMAGES.steel.fasteners.types.specialFastenersBars.s7),
      createSteelTypeItem("Hex Slotted and Castle Nut", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s8"]),
      createSteelTypeItem("Anchor Plate", SITE_IMAGES.steel.fasteners.types.specialFastenersBars.s9),
      createSteelTypeItem("Shear Nut", SITE_IMAGES.steel.fasteners.types.specialFastenersBars.s10),
      createSteelTypeItem("Anti-Theft Bolt", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s11"]),
      createSteelTypeItem("Carriage Bolt - Metric", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s12"]),
      createSteelTypeItem("Threaded Bar DIN 975 / DIN 976", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s13"]),
      createSteelTypeItem("Tee Bolt - Inch", SITE_IMAGES.steel.fasteners.types.specialFastenersBars.s14),
      createSteelTypeItem("Carriage Bolt ASTM A307", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s15"]),
      createSteelTypeItem("Trackshoe Bolt - Inch", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s16"]),
      createSteelTypeItem("Square Nut - Inch", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s17"]),
      createSteelTypeItem("Threaded Bar ASTM A193", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s18"]),
      createSteelTypeItem("Threaded Bar ASTM A307", SITE_IMAGES.steel.fasteners.types["specialFastenersBars"]["s19"]),
    ],
  },
];

const toSteelProduct = (source: SteelFastenerSource): SteelProduct => ({
  Category: "Fasteners & Bars",
  "Sub-Category": source.subCategory,
  "Product Name": source.name,
  Description: source.descriptionParagraphs[0],
  Grades: formatSteelList(source.grades, 6),
  Standards: formatSteelList(source.standards, 6),
  Application: source.application,
  thumbnail: source.thumbnail,
  OD: source.sizeRange,
  Type: formatSteelList(source.typeSummary, 6),
  Material: formatSteelList(source.materialFamilies, 5),
  SurfaceFinish: source.surfaceFinish,
  TensileStrength: source.tensileStrength,
  Hardness: source.hardness,
  Certification:
    source.certification ?? Array.from(FASTENER_COMMON_CERTIFICATIONS),
  Testing: source.testing,
  Applications: source.applications,
  applicationImage: source.thumbnail,
  descriptionParagraphs: source.descriptionParagraphs,
  typeGallery: createSteelTypeGallery(
    `${source.name} Types`,
    source.typeGalleryIntro,
    source.typeItems,
  ),
  sourceUrl: source.sourceUrl,
});

export const STEEL_FASTENER_PRODUCTS: SteelProduct[] =
  FASTENER_SOURCES.map(toSteelProduct);
