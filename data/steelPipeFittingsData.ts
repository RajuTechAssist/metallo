import type { SteelProduct } from "./steelTypes";
import {
  createSteelTypeGallery,
  createSteelTypeItem,
  formatSteelList,
} from "./steelCatalogUtils";

const STEEL_PIPE_FITTING_IMAGE_DIR = "/Steel/pipe-fittings";

const pipeFittingImage = (fileName: string) =>
  `${STEEL_PIPE_FITTING_IMAGE_DIR}/${fileName}`;
const pipeFittingTypeImage = (slug: string, fileName: string) =>
  `${STEEL_PIPE_FITTING_IMAGE_DIR}/types/${slug}/${fileName}`;
const pipeFittingTypeItem = (slug: string, name: string, fileName: string) =>
  createSteelTypeItem(name, pipeFittingTypeImage(slug, fileName));

const PIPE_FITTING_COMMON_CERTIFICATIONS = [
  "ASME",
  "MSS SP",
  "EN 10204 3.1",
  "Project Traceability",
] as const;

interface SteelPipeFittingSource {
  slug: string;
  name: string;
  subCategory: string;
  imageFile: string;
  sourceUrl: string;
  descriptionParagraphs: string[];
  grades: string[];
  standards: string[];
  sizeRange: string;
  pressureClass?: string;
  wallThickness?: string;
  typeSummary: string[];
  materialFamilies: string[];
  testing: string;
  application: string;
  applications: string[];
  typeGalleryIntro: string;
  typeItems: ReturnType<typeof createSteelTypeGallery>["items"];
}

const STEEL_PIPE_FITTING_SOURCES: SteelPipeFittingSource[] = [
  {
    slug: "butt-weld",
    name: "Butt Weld Pipe Fittings",
    subCategory: "Butt Weld Fittings",
    imageFile: "butt-weld-fittings-banner.jpg",
    sourceUrl: "https://www.sotco.in/pipe-fittings.html",
    descriptionParagraphs: [
      "Metallo's butt weld pipe fitting range is built for permanent piping connections where flow path continuity, weld integrity, and broad material coverage are essential. The sourced family is organized around ASME B16.9 geometry and includes elbows, tees, reducers, bends, stub ends, caps, and crosses for carbon, stainless, alloy, and high-yield service.",
      "This gives project teams a single product family for direction changes, branch outlets, diameter transitions, and end closures across refinery, power, marine, and process-plant systems. Metallo positions these fittings for demanding line classes that need predictable welding fit-up and dependable long-term service rather than field-adjustable mechanical joints.",
    ],
    grades: [
      "ASTM A234 WPB / WPC",
      "ASTM A420 WPL6",
      "ASTM A860 WPHY 42 / 52 / 60 / 65 / 70",
      "ASTM A403 WP304 / WP304L / WP316 / WP316L",
      "ASTM A403 WP321 / WP347",
      "ASTM A234 WP11 / WP22 / WP5 / WP9 / WP91",
      "Duplex UNS S31803",
      "Inconel 625",
      "Monel 400",
      "Titanium",
      "Hastelloy",
    ],
    standards: [
      "ASME B16.9",
      "JIS",
      "DIN",
      "GB/T12459",
      "SH3408",
      "ISO",
      "SY/T0501",
    ],
    sizeRange: '1/2" to 48" (DN15 to DN1200).',
    wallThickness: "Sch 5 through Sch 160 and XXS.",
    typeSummary: [
      "45 deg elbows",
      "90 deg elbows",
      "180 deg elbows",
      "Straight tees",
      "Reducing tees",
      "Concentric reducers",
      "Eccentric reducers",
      "Pipe bends",
      "Lap joint stub ends",
      "Pipe caps",
      "Pipe crosses",
    ],
    materialFamilies: [
      "Carbon steel butt weld fittings",
      "Stainless steel butt weld fittings",
      "Alloy steel fittings",
      "Low-temperature grades",
      "Duplex and nickel alloys",
    ],
    testing:
      "Dimensional inspection, bevel verification, welding-end fit-up control, PMI, and project-specific mechanical certification.",
    application:
      "Direction changes, branch connections, diameter transitions, and terminal closures in permanent process piping.",
    applications: [
      "Oil and Gas",
      "Chemical Processing",
      "Marine Piping",
      "Power Plants",
    ],
    typeGalleryIntro:
      "Metallo's butt weld range combines the core B16.9 fitting geometries used to reroute, split, reduce, terminate, and align heavy-duty process lines.",
    typeItems: [
      pipeFittingTypeItem(
        "butt-weld",
        "Butt Weld Elbows",
        "pipe-fitting-elbow-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Pipe Tees",
        "pipe-fitting-tee-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Reducers",
        "pipe-fitting-reducers-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Pipe Bends",
        "pipe-fitting-pipe-bend-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Lap Joint Stub Ends",
        "pipe-fitting-stub-end-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Pipe Caps",
        "pipe-fitting-cap-card.jpg",
      ),
      pipeFittingTypeItem(
        "butt-weld",
        "Pipe Cross",
        "pipe-fitting-cross-card.jpg",
      ),
    ],
  },
  {
    slug: "forged",
    name: "Forged Pipe Fittings",
    subCategory: "Forged Fittings",
    imageFile: "forged-fittings.jpg",
    sourceUrl: "https://www.sotco.in/forged-fittings.html",
    descriptionParagraphs: [
      "Metallo supplies forged pipe fittings for small-bore, high-pressure piping where dense grain flow, compact geometry, and robust threaded or socket-weld connections are required. The sourced range is aligned with ASME B16.11 service and covers elbows, tees, crosses, couplings, caps, unions, plugs, bushings, and swage nipples.",
      "These fittings are built for instrument take-offs, steam lines, chemical injection points, and compact pressure systems where butt weld fittings are not the right mechanical fit. Metallo uses forged fittings when the application calls for high pressure capability, tight installation space, and dependable connection performance in smaller nominal bores.",
    ],
    grades: [
      "A105 / A105N",
      "A350 LF2",
      "A694 F42 through F70",
      "A182 F304 / F304L / F316 / F316L",
      "A182 F321 / F347 / F310",
      "A182 F11 / F22 / F5 / F9 / F91",
      "Duplex F51",
      "Super Duplex F53 / F55",
      "Inconel",
      "Monel",
      "Hastelloy",
    ],
    standards: [
      "ASME B16.11",
      "BS 3799",
      "MSS SP-83",
      "MSS SP-95",
      "JIS B2316",
      "DIN",
      "GB/T14383",
    ],
    sizeRange: '1/8" to 4" (DN6 to DN100), with unions up to 3".',
    pressureClass: "2000#, 3000#, 6000#, and up to 9000# depending on type.",
    typeSummary: [
      "45 deg elbows",
      "90 deg elbows",
      "Equal tees",
      "Reducing tees",
      "Crosses",
      "Full couplings",
      "Half couplings",
      "Caps",
      "Threaded unions",
      "Socket weld unions",
      "Plugs and bushings",
      "Swage nipples",
    ],
    materialFamilies: [
      "Forged carbon steel",
      "Forged stainless steel",
      "Alloy steel forgings",
      "Duplex and Super Duplex",
      "Nickel alloy forgings",
    ],
    testing:
      "Dimensional inspection, thread and socket verification, PMI, hardness checks, and pressure-class fit control for small-bore systems.",
    application:
      "Small-bore high-pressure piping, instrumentation take-offs, hydraulic lines, and steam service.",
    applications: [
      "Instrumentation",
      "Hydraulic Lines",
      "Steam Systems",
      "Oil and Gas Skids",
    ],
    typeGalleryIntro:
      "Metallo's forged fitting range covers the compact threaded and socket-weld geometries used across high-pressure small-bore piping and instrumentation systems.",
    typeItems: [
      pipeFittingTypeItem(
        "forged",
        "Forged Elbows (Threaded / Socket Weld)",
        "forged-fitting-elbow-card.jpg",
      ),
      pipeFittingTypeItem(
        "forged",
        "Forged Tees and Crosses",
        "forged-fitting-cross-tee.jpg",
      ),
      pipeFittingTypeItem(
        "forged",
        "Couplings and Caps",
        "forged-fittings-cap.jpg",
      ),
      pipeFittingTypeItem(
        "forged",
        "Forged Unions",
        "forged-fittings-union.jpg",
      ),
      pipeFittingTypeItem(
        "forged",
        "Plugs and Bushings",
        "forged-fittings-plug-bushing.jpg",
      ),
      pipeFittingTypeItem(
        "forged",
        "Swage Nipples",
        "forged-fittings-swage-nipple.jpg",
      ),
    ],
  },
];

const toSteelProduct = (source: SteelPipeFittingSource): SteelProduct => ({
  Category: "Pipe Fittings",
  "Sub-Category": source.subCategory,
  "Product Name": source.name,
  Description: source.descriptionParagraphs[0],
  Grades: formatSteelList(source.grades, 6),
  Standards: formatSteelList(source.standards, 6),
  Application: source.application,
  thumbnail: pipeFittingImage(source.imageFile),
  OD: source.sizeRange,
  WallThickness: source.wallThickness,
  "Pressure Class": source.pressureClass,
  Type: formatSteelList(source.typeSummary, 6),
  Material: formatSteelList(source.materialFamilies, 5),
  Certification: Array.from(PIPE_FITTING_COMMON_CERTIFICATIONS),
  Testing: source.testing,
  Applications: source.applications,
  applicationImage: pipeFittingImage(source.imageFile),
  descriptionParagraphs: source.descriptionParagraphs,
  typeGallery: createSteelTypeGallery(
    `${source.name} Types`,
    source.typeGalleryIntro,
    source.typeItems,
  ),
  sourceUrl: source.sourceUrl,
});

export const STEEL_PIPE_FITTING_PRODUCTS: SteelProduct[] =
  STEEL_PIPE_FITTING_SOURCES.map(toSteelProduct);
