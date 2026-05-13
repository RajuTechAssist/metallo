import { SITE_IMAGES } from '@/config/images';
import type { SteelProduct } from "./steelTypes";
import {
  createSteelTypeGallery,
  createSteelTypeItem,
  formatSteelList,
} from "./steelCatalogUtils";

const STEEL_SHEETS_PLATES_IMAGE_DIR = "/Steel/sheets-plates/shared";




const SHEET_PLATE_COMMON_CERTIFICATIONS = [
  "EN 10204 3.1",
  "ASTM / ASME",
  "PMI / MTC",
  "Project Traceability",
] as const;

interface SteelSheetPlateSource {
  name: string;
  subCategory: string;
  thumbnail: string;
  sourceUrl: string;
  descriptionParagraphs: string[];
  grades: string[];
  standards: string[];
  sizeRange: string;
  thickness: string;
  length?: string;
  surfaceFinish: string;
  typeSummary: string[];
  materialFamilies: string[];
  testing: string;
  application: string;
  applications: string[];
  certifications?: string[];
  typeGalleryIntro: string;
  typeItems: ReturnType<typeof createSteelTypeGallery>["items"];
}

const STEEL_SHEETS_PLATES_SOURCES: SteelSheetPlateSource[] = [
  {
    name: "Stainless Steel Sheets, Plates and Coils",
    subCategory: "Stainless Steel Flat Products",
    thumbnail: SITE_IMAGES.steel.sheetsPlates.sheetsPlates,
    sourceUrl:
      "https://www.kencotubes.com/stainless-steel-sheets-plates-supplier-exporter.html",
    descriptionParagraphs: [
      "Metallo's stainless flat-products range combines broad size coverage, finish flexibility, and a complete form mix for stainless sheet, plate, and coil supply across fabrication, architectural work, food and pharma equipment, and corrosion-resistant plant components.",
      "The sourced catalogue spans thin sheet, heavy plate, coils, strips, circles, perforated sheet, chequered plate, and flats in both hot-rolled and cold-rolled conditions. Metallo positions this family as the default stainless flat stock solution when projects need both broad grade availability and a wide mix of finished forms.",
    ],
    grades: [
      "304",
      "304H",
      "304L",
      "309",
      "310",
      "310S",
      "316",
      "316L",
      "317",
      "317L",
      "321",
      "321H",
      "347",
      "347H",
      "410",
      "420",
      "430",
      "904L",
      "UNS S31803",
    ],
    standards: ["ASTM A240", "ASME SA240", "EN 10088-2"],
    sizeRange: "Width 1000 mm to 2500 mm and length 2500 mm to 12500 mm.",
    thickness: "0.5 mm to 200 mm.",
    length: "Cut plates, sheets, coils, and project blanks to customer requirement.",
    surfaceFinish:
      "2B, 2D, satin matt, hot rolled, cold rolled, plastic-coated, polished, perforated, and chequered finishes.",
    typeSummary: [
      "Sheet",
      "Plate",
      "Coil",
      "Strip",
      "Circle",
      "Perforated sheet",
      "Chequered plate",
      "Flat",
    ],
    materialFamilies: [
      "Austenitic stainless",
      "Ferritic stainless",
      "Duplex-capable flat stock",
    ],
    testing:
      "PMI, gauge verification, flatness checks, surface inspection, MTC review, and project traceability for laser, fabrication, and forming work.",
    application:
      "Fabrication, architecture, food and pharma equipment, tanks, cladding, and corrosion-resistant platework.",
    applications: [
      "Architecture",
      "Food and Pharma",
      "Tank Fabrication",
      "Chemical Processing",
    ],
    typeGalleryIntro:
      "Metallo's stainless flat-products gallery covers the form mix most often required in fabrication, decorative work, and corrosion-resistant plate processing.",
    typeItems: [
      createSteelTypeItem("Stainless Steel Sheet", SITE_IMAGES.steel.sheetsPlates.ssSheets),
      createSteelTypeItem("Stainless Steel Plate", SITE_IMAGES.steel.sheetsPlates.ssPlates),
      createSteelTypeItem("Stainless Steel Coil", SITE_IMAGES.steel.sheetsPlates.steelCoils),
      createSteelTypeItem("Stainless Steel Strip", SITE_IMAGES.steel.sheetsPlates.ssStrips),
      createSteelTypeItem("Stainless Steel Circle", SITE_IMAGES.steel.sheetsPlates.ssCircle),
      createSteelTypeItem("Stainless Perforated Sheet", SITE_IMAGES.steel.sheetsPlates.types.ssPerforatedSheet),
      createSteelTypeItem("Stainless Chequered Plate", SITE_IMAGES.steel.sheetsPlates.ssChequeredPlate),
      createSteelTypeItem("Stainless Flats", SITE_IMAGES.steel.sheetsPlates.ssFlats),
    ],
  },
  {
    name: "Carbon Steel and Boiler Quality Sheets and Plates",
    subCategory: "Carbon and Boiler Plates",
    thumbnail: SITE_IMAGES.steel.sheetsPlates.csCoils,
    sourceUrl:
      "https://www.kencotubes.com/carbon-steel-sheets-plates-supplier-exporter.html",
    descriptionParagraphs: [
      "Metallo's carbon and boiler-quality flat stock is structured around a wide grade matrix, heavy thickness coverage, and fabrication-ready forms for structural platework, tanks, pressure parts, boiler shells, and general industrial steelwork where stainless is unnecessary.",
      "The sourced catalogue reaches from general carbon sheets and coils through chequered, perforated, galvanized, black, and boiler-quality plates. Metallo positions this family for projects that need mainstream carbon-steel sheet and plate supply with specification discipline rather than commodity-only purchasing.",
    ],
    grades: [
      "ASTM A588 Grade B",
      "ASTM A606",
      "ASTM A242",
      "ASTM A285 Grade A/B/C",
      "ASTM A515 Grade 55/60/65/70",
      "ASTM A537 Class 1/2",
      "ASTM A36",
      "ASTM A572 Grade 42/50/65",
      "ASTM A203 Grade A/B/C",
      "ASTM A204 Grade A/B/C",
      "API 2H Grade 50",
      "ASTM A387 Grade 5/9/11/12/22",
      "IS 2062",
      "EN8",
      "C45",
    ],
    standards: [
      "ASTM A516",
      "ASTM A515",
      "ASTM A36",
      "ASTM A572",
      "ASTM A387",
      "IS 2062",
    ],
    sizeRange:
      "Project-cut sheets, coils, and heavy plates for structural and pressure-part fabrication.",
    thickness: "1 mm to 300 mm.",
    length: "Supplied as sheets, coils, strips, blanks, chequered plate, and heavy plates.",
    surfaceFinish:
      "Hot rolled plate, cold rolled sheet, black finish, galvanized options, chequered, perforated, and fabrication-ready cut stock.",
    typeSummary: [
      "Sheet",
      "Plate",
      "Coil",
      "Strip",
      "Foil",
      "Perforated sheet",
      "Chequered plate",
      "Boiler plate",
    ],
    materialFamilies: [
      "Carbon steel",
      "Boiler quality plate",
      "Structural plate",
      "General fabrication sheet",
    ],
    testing:
      "Thickness verification, flatness checks, MTC review, and project QC for structural, pressure-vessel, and heavy fabrication supply.",
    application:
      "Boilers, pressure parts, structural fabrication, tank work, bridges, and heavy industrial construction.",
    applications: [
      "Boilers",
      "Structural Fabrication",
      "Pressure Parts",
      "Industrial Construction",
    ],
    typeGalleryIntro:
      "Metallo's carbon and boiler plate gallery covers the flat-product forms commonly procured for structural and heavy engineering projects.",
    typeItems: [
      createSteelTypeItem("Carbon Steel Sheet", SITE_IMAGES.steel.sheetsPlates.csSheets),
      createSteelTypeItem("Carbon Steel Plate", SITE_IMAGES.steel.sheetsPlates.csPlates),
      createSteelTypeItem("Carbon Steel Coil", SITE_IMAGES.steel.sheetsPlates.carbonCoils),
      createSteelTypeItem("Carbon Steel Strip", SITE_IMAGES.steel.sheetsPlates.csStips),
      createSteelTypeItem("Carbon Steel Foil", SITE_IMAGES.steel.sheetsPlates.csFoils),
      createSteelTypeItem("Carbon Perforated Sheet", SITE_IMAGES.steel.sheetsPlates.types.csPerforatedSheet),
      createSteelTypeItem("Carbon Chequered Plate", SITE_IMAGES.steel.sheetsPlates.csChequeredPlate),
      createSteelTypeItem("Carbon Steel Circles", SITE_IMAGES.steel.sheetsPlates.csCircles),
    ],
  },
  {
    name: "Alloy and Nickel Plates, Sheets and Coils",
    subCategory: "Alloy and Nickel Flat Products",
    thumbnail: SITE_IMAGES.steel.sheetsPlates.ssCoils,
    sourceUrl:
      "https://www.kencotubes.com/inconel-sheets-plates-supplier-exporter.html",
    descriptionParagraphs: [
      "Metallo's alloy and nickel flat-products range brings together alloy steel, boiler plate, high-speed steel, HCHCR, and nickel-alloy coverage in a single high-performance flat-stock family for severe temperature, corrosion, and wear conditions.",
      "The sourced material mix spans alloy plates for elevated-temperature pressure service, nickel-alloy sheets and coils for corrosive process environments, and specialty tool and wear grades where hardness or heat resistance becomes the deciding factor. Metallo positions this range for refineries, furnaces, chemical units, and fabrication shops handling severe-service metals.",
    ],
    grades: [
      "ASTM / ASME A / SA 387 F11 / F12 / F22 / F91",
      "SA516 Grade 70",
      "M2 / M3 / M35 / M42",
      "D2",
      "UNS 2200",
      "UNS 2201",
      "UNS 4400",
      "UNS 8020",
      "UNS 8825",
      "UNS 6600",
      "UNS 6601",
      "UNS 6625",
      "UNS 10276",
    ],
    standards: [
      "ASTM A387",
      "ASME SA387",
      "SA516",
      "ASTM B168",
      "ASME SB168",
      "Nickel-alloy plate standards",
    ],
    sizeRange: "Width 1000 mm to 2500 mm and length 2500 mm to 12500 mm.",
    thickness: "2 mm to 50 mm.",
    length: "Supplied as sheets, plates, coils, strips, blanks, perforated, and chequered variants.",
    surfaceFinish:
      "Hot rolled plate, cold rolled sheet, sheared blanks, chequered, perforated, foil, strip, and coil formats.",
    typeSummary: [
      "Alloy sheet",
      "Alloy plate",
      "Coil",
      "Foil",
      "Strip",
      "Perforated sheet",
      "Chequered plate",
      "Flat",
    ],
    materialFamilies: [
      "Alloy steel plate",
      "Nickel alloy plate",
      "Inconel and Incoloy forms",
      "Tool and wear grades",
    ],
    testing:
      "PMI, MTC review, thickness checks, and project traceability for elevated-temperature and corrosion-duty alloy flat stock.",
    application:
      "Furnaces, heat treatment, refineries, chemical plants, wear parts, and high-temperature pressure equipment.",
    applications: [
      "Refineries",
      "Furnace Systems",
      "Chemical Plants",
      "Severe-Service Fabrication",
    ],
    typeGalleryIntro:
      "Metallo's alloy and nickel flat-products gallery focuses on the sheet, plate, and coil formats most often specified in high-temperature and corrosion-critical fabrication work.",
    typeItems: [
      createSteelTypeItem("Alloy / Nickel Sheet", SITE_IMAGES.steel.sheetsPlates.ssSheets),
      createSteelTypeItem("Alloy / Nickel Plate", SITE_IMAGES.steel.sheetsPlates.ssPlates),
      createSteelTypeItem("Alloy / Nickel Coil", SITE_IMAGES.steel.sheetsPlates.steelCoils),
      createSteelTypeItem("Alloy / Nickel Foil", SITE_IMAGES.steel.sheetsPlates.ssFoils),
      createSteelTypeItem("Alloy / Nickel Strip", SITE_IMAGES.steel.sheetsPlates.ssStrips),
      createSteelTypeItem("Alloy Perforated Sheet", SITE_IMAGES.steel.sheetsPlates.ssPerforatedSheet),
      createSteelTypeItem("Alloy Chequered Plate", SITE_IMAGES.steel.sheetsPlates.ssChequeredPlate),
      createSteelTypeItem("Alloy Flats", SITE_IMAGES.steel.sheetsPlates.ssFlats),
    ],
  },
  {
    name: "Titanium Sheets and Coils",
    subCategory: "Titanium Flat Products",
    thumbnail: SITE_IMAGES.steel.sheetsPlates.steelCoils,
    sourceUrl:
      "https://www.kencotubes.com/titanium-gr-2-sheets-plates-supplier-exporter.html",
    descriptionParagraphs: [
      "Metallo's titanium flat-products range is built for buyers who need lightweight, corrosion-resistant sheet and coil supply for marine, chemical, medical, and fabricated exchanger applications, with multiple grades and project-ready flat-product forms.",
      "The sourced catalogue covers foils, shim sheet, rolls, perforated sheet, chequered plate, and project-cut titanium forms in multiple grades. Metallo positions this family where low density, chloride resistance, and long service life justify a more advanced flat-product specification than stainless or carbon steel can offer.",
    ],
    grades: ["Grade 1", "Grade 2", "Grade 4", "Grade 5", "Grade 7", "Grade 9", "Grade 12"],
    standards: ["ASTM B265"],
    sizeRange:
      "Sheets, coils, foils, shims, rolls, perforated sheets, and chequered plates cut to project requirement.",
    thickness: "0.5 mm to 6 mm.",
    length: "Rolls, sheet blanks, and fabricated cut sizes for process and marine applications.",
    surfaceFinish: "2B, 2D, satin matt, hot rolled, cold rolled, perforated, and chequered finishes.",
    typeSummary: [
      "Sheet",
      "Plate",
      "Coil",
      "Foil",
      "Strip",
      "Perforated sheet",
      "Chequered plate",
      "Flat",
    ],
    materialFamilies: [
      "Commercially pure titanium",
      "Titanium Grade 2",
      "Fabrication-grade titanium sheet",
    ],
    testing:
      "Gauge verification, MTC review, traceability control, and finish inspection for corrosion-resistant titanium flat stock.",
    application:
      "Chemical processing, desalination, medical equipment, marine hardware, and lightweight fabricated components.",
    applications: [
      "Chemical Processing",
      "Marine Hardware",
      "Medical Equipment",
      "Lightweight Fabrication",
    ],
    certifications: ["ASTM B265", "EN 10204 3.1", "PMI / MTC", "Project Traceability"],
    typeGalleryIntro:
      "Metallo's titanium gallery highlights the form mix typically required for corrosion-resistant lightweight fabrication and process-industry cut parts.",
    typeItems: [
      createSteelTypeItem("Titanium Sheet", SITE_IMAGES.steel.sheetsPlates.ssSheets),
      createSteelTypeItem("Titanium Plate", SITE_IMAGES.steel.sheetsPlates.ssPlates),
      createSteelTypeItem("Titanium Coil", SITE_IMAGES.steel.sheetsPlates.steelCoils),
      createSteelTypeItem("Titanium Foil", SITE_IMAGES.steel.sheetsPlates.ssFoils),
      createSteelTypeItem("Titanium Strip", SITE_IMAGES.steel.sheetsPlates.ssStrips),
      createSteelTypeItem("Titanium Perforated Sheet", SITE_IMAGES.steel.sheetsPlates.ssPerforatedSheet),
      createSteelTypeItem("Titanium Chequered Plate", SITE_IMAGES.steel.sheetsPlates.ssChequeredPlate),
      createSteelTypeItem("Titanium Flats", SITE_IMAGES.steel.sheetsPlates.ssFlats),
    ],
  },
];

const toSteelProduct = (source: SteelSheetPlateSource): SteelProduct => ({
  Category: "Sheets & Plates",
  "Sub-Category": source.subCategory,
  "Product Name": source.name,
  Description: source.descriptionParagraphs[0],
  Grades: formatSteelList(source.grades, 6),
  Standards: formatSteelList(source.standards, 6),
  Application: source.application,
  thumbnail: source.thumbnail,
  OD: source.sizeRange,
  Thickness: source.thickness,
  Length: source.length,
  SurfaceFinish: source.surfaceFinish,
  Type: formatSteelList(source.typeSummary, 6),
  Material: formatSteelList(source.materialFamilies, 5),
  Certification:
    source.certifications ?? Array.from(SHEET_PLATE_COMMON_CERTIFICATIONS),
  Testing: source.testing,
  Applications: source.applications,
  applicationImage: source.thumbnail,
  descriptionParagraphs: source.descriptionParagraphs,
  typeGallery: createSteelTypeGallery(
    `${source.name} Forms`,
    source.typeGalleryIntro,
    source.typeItems,
  ),
  sourceUrl: source.sourceUrl,
});

export const STEEL_SHEETS_PLATES_PRODUCTS: SteelProduct[] =
  STEEL_SHEETS_PLATES_SOURCES.map(toSteelProduct);
