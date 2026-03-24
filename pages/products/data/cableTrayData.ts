import type {
  CategoryConfig,
  ProductCTAConfig,
  ProductHeroConfig,
  ProductQABannerConfig,
  ProductSpecItem,
} from "../../../components/product";
import { slugify } from "../../../components/product";
import type {
  CableTrayRangeTable,
  CableTrayTypeGallery,
  CableTrayTypeGalleryItem,
  TrayProduct,
} from "./cableTrayTypes";

const DUDHAT_SOURCE = {
  label: "Dudhat product catalogue",
  url: "https://dudhat.in/products.php",
} as const;

const trayImage = (asset: string) => `/cable Trays/dudhat/${asset}`;
const accessoryImage = (asset: string) => trayImage(`accessories/${asset}`);
const finishingImage = (asset: string) => trayImage(`finishing/${asset}`);
const strutHardwareImage = (asset: string) =>
  trayImage(`strut-hardware/${asset}`);

const spec = (label: string, value: string, icon: string): ProductSpecItem => ({
  label,
  value,
  icon,
});

const rangeTable = (
  title: string,
  columns: string[],
  rows: string[][],
  notes?: string[],
): CableTrayRangeTable => ({
  title,
  columns,
  rows,
  notes,
});

const galleryItem = (
  name: string,
  image: string,
  description?: string,
): CableTrayTypeGalleryItem => ({
  name,
  image,
  description,
});

const typeGallery = (
  title: string,
  intro: string,
  items: CableTrayTypeGalleryItem[],
): CableTrayTypeGallery => ({
  title,
  intro,
  items,
});

interface TrayProductInput {
  category: string;
  subCategory: string;
  name: string;
  descriptionParagraphs: string[];
  thumbnail: string;
  technicalSpecifications: ProductSpecItem[];
  features?: string[];
  applications?: string[];
  rangeTables?: CableTrayRangeTable[];
  typeGallery?: CableTrayTypeGallery;
  sourceUrl: string;
}

const createTrayProduct = (input: TrayProductInput): TrayProduct => ({
  id: slugify(input.name),
  Category: input.category,
  "Sub-Category": input.subCategory,
  "Product Name": input.name,
  Description: input.descriptionParagraphs[0],
  descriptionParagraphs: input.descriptionParagraphs,
  thumbnail: input.thumbnail,
  applicationImage: input.thumbnail,
  technicalSpecifications: input.technicalSpecifications,
  features: input.features,
  applications: input.applications,
  rangeTables: input.rangeTables,
  typeGallery: input.typeGallery,
  sourceLabel: DUDHAT_SOURCE.label,
  sourceUrl: input.sourceUrl,
});

export const HERO: ProductHeroConfig = {
  backgroundImage: trayImage("ladder-tray.webp"),
  title: "Industrial Cable",
  subtitle: "Tray Systems.",
  description:
    "Metallo's cable tray program is rebuilt from live sourced product data, covering perforated, ladder, FRP, wire-mesh, raceway, support, accessory, and finishing systems through a single coordinated layout.",
  breadcrumbLabel: "Cable Tray Systems",
};

export const CTA: ProductCTAConfig = {
  title: "Need a project-ready tray package?",
  description:
    "Share your tray widths, finish requirements, support spacing, and accessory list. Our team will map the right Metallo configuration and respond with a source-backed supply proposal.",
  ctaLabel: "Request Tray Package Quote",
  ctaIcon: "request_quote",
};

export const QA_BANNER: ProductQABannerConfig = {
  title: "Source-Backed Cable Management Coverage",
  items: [
    {
      icon: "table_view",
      title: "Live Range Tables",
      desc: "Every tray-system card now uses published source width, height, thickness, and length ranges instead of the earlier placeholder summaries.",
    },
    {
      icon: "inventory_2",
      title: "Full System Mix",
      desc: "The page now covers metallic trays, FRP options, raceway systems, strut supports, clamps, accessories, and finishing processes in one connected catalog.",
    },
    {
      icon: "image",
      title: "Raw Source Images",
      desc: "The images are pulled from live source product pages and stored locally without the previous overlay treatment that was distorting the source visuals.",
    },
    {
      icon: "hub",
      title: "Config-Driven Structure",
      desc: "Hero copy, navigation, cards, tables, and galleries are driven from a single data module so updates flow through the page without duplicated edits.",
    },
  ],
};

export const CERT_BADGE = "MS / GI / SS / Aluminium / FRP Systems";

export const CATEGORIES: readonly CategoryConfig[] = [
  {
    key: "perforated",
    label: "Perforated Trays",
    icon: "view_comfy",
    match: "Perforated Trays",
  },
  {
    key: "ladder",
    label: "Ladder Trays",
    icon: "grid_view",
    match: "Ladder Trays",
  },
  {
    key: "frp",
    label: "FRP Systems",
    icon: "blur_on",
    match: "FRP Systems",
  },
  {
    key: "wiremesh",
    label: "Wire Mesh",
    icon: "grid_on",
    match: "Wire Mesh",
  },
  {
    key: "raceway",
    label: "Raceway & Ducts",
    icon: "route",
    match: "Raceway & Ducts",
  },
  {
    key: "supports",
    label: "Support Systems",
    icon: "construction",
    match: "Support Systems",
  },
  {
    key: "accessories",
    label: "Accessories",
    icon: "extension",
    match: "Accessories",
  },
  {
    key: "finishing",
    label: "Finishing",
    icon: "format_paint",
    match: "Finishing",
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

const RANGE_NOTES_STANDARD = [
  "All dimensions are in mm where noted on the source page.",
  "All sizes are standard, but custom sizes can be manufactured.",
];

const PERFORATED_SOURCE_URL =
  "https://dudhat.in/perforated-type-cable-tray-accessories.php";
const LADDER_SOURCE_URL =
  "https://dudhat.in/ladder-type-cable-tray-accessories.php";
const FRP_SOURCE_URL = "https://dudhat.in/frp-cable-tray.php";
const WIREMESH_SOURCE_URL = "https://dudhat.in/wiremesh-type-cable-tray.php";
const RACEWAY_SOURCE_URL =
  "https://dudhat.in/flooring-raceway-trunking-ducts.php";
const SUPPORT_SOURCE_URL = "https://dudhat.in/support-and-cover-clamps.php";
const STRUT_SOURCE_URL = "https://dudhat.in/strut-channels.php";
const ACCESSORIES_SOURCE_URL = "https://dudhat.in/accessories.php";
const FINISHING_SOURCE_URL = "https://dudhat.in/finishing.php";

export const PRODUCTS: TrayProduct[] = [
  createTrayProduct({
    category: "Perforated Trays",
    subCategory: "Ventilated Metallic Tray",
    name: "Perforated Cable Tray & Accessories",
    descriptionParagraphs: [
      "Metallo's perforated tray program is aligned to the sourced live range for open cable routes that need airflow, heat dissipation, and straightforward field installation without moving to a ladder profile too early. The source specifically lists regular flange, U type flange, inside flange, outside flange, and heavy-duty inside flange constructions.",
      "The sourced range covers MS (HR, CRC), pre-galvanized, aluminium, and stainless steel 304 / 316 builds with hot-dip galvanized, GI alkaline, powder-coated, aluminium-anodized, and stainless finishes. Standard tray widths run from 50 mm to 900 mm, with height combinations stepping from 25 mm through 150 mm and lengths in 2500 mm or 3000 mm sections.",
    ],
    thumbnail: trayImage("perforated-tray.webp"),
    technicalSpecifications: [
      spec(
        "Raw Material",
        "MS (HR, CRC), pre-galvanized, aluminium, stainless steel 304 & 316",
        "diamond",
      ),
      spec(
        "Finish Of Product",
        "Hot-dip galvanized, GI alkaline, pre-galvanized, stainless steel 304 & 316, powder coated, aluminium anodized",
        "auto_awesome",
      ),
      spec(
        "Flange Type",
        "Regular flange, U type flange, inside flange, outside flange, heavy-duty inside flange",
        "build",
      ),
      spec("Width Coverage", "50 mm to 900 mm", "swap_horiz"),
      spec("Length Coverage", "2500 mm / 3000 mm", "straighten"),
    ],
    features: [
      "Ventilation",
      "Heat Dissipation",
      "Strength & Durability",
      "Ease of Installation",
      "Aesthetic Appeal",
      "Future-Proofing",
    ],
    rangeTables: [
      rangeTable(
        "Perforated Tray Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "25 / 35 / 50", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["75", "25 / 35 / 50", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["100", "25 / 35 / 50 / 75 / 100", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["150", "25 / 35 / 50 / 75 / 100", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["200", "25 / 35 / 50 / 75 / 100", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["300", "25 / 35 / 50 / 75 / 100", "1.2 / 1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["400", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["450", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["500", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["600", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["750", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["900", "25 / 35 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
        ],
        RANGE_NOTES_STANDARD,
      ),
    ],
    sourceUrl: PERFORATED_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Ladder Trays",
    subCategory: "Heavy-Duty Ladder System",
    name: "Ladder Cable Tray & Accessories",
    descriptionParagraphs: [
      "Metallo uses the sourced ladder tray range for heavier cable corridors where rung ventilation, cable separation, and structural carrying capacity matter more than a fully sheeted tray body. The source page positions this family around strong load-bearing performance, ventilation, ease of fastening, cost-effectiveness, and a neat finished appearance.",
      "The published material and finish matrix mirrors the broader metallic tray platform: MS (HR, CRC), pre-galvanized, aluminium, and stainless steel 304 / 316 with hot-dip galvanized, GI alkaline, pre-galvanized, powder-coated, anodized, and stainless finish options. Width coverage extends from 150 mm to 1500 mm, across 50 mm to 200 mm height options and 2500 mm or 3000 mm lengths.",
    ],
    thumbnail: trayImage("ladder-tray.webp"),
    technicalSpecifications: [
      spec(
        "Raw Material",
        "MS (HR, CRC), pre-galvanized, aluminium, stainless steel 304 & 316",
        "diamond",
      ),
      spec(
        "Finish Of Product",
        "Hot-dip galvanized, GI alkaline, pre-galvanized, stainless steel 304 & 316, powder coated, aluminium anodized",
        "auto_awesome",
      ),
      spec("Width Coverage", "150 mm to 1500 mm", "swap_horiz"),
      spec("Height Coverage", "50 / 75 / 100 / 150 / 200 mm", "height"),
      spec("Length Coverage", "2500 mm / 3000 mm", "straighten"),
    ],
    features: [
      "Strong Load-Bearing Capacity",
      "Excellent Ventilation",
      "Easy to fastening",
      "Cost-Effectiveness",
      "Neat Appearance",
    ],
    rangeTables: [
      rangeTable(
        "Ladder Tray Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["150", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["200", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["250", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["300", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["350", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["400", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["450", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["500", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["550", "50 / 75 / 100 / 150 / 200", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["600", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["650", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["700", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["750", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["800", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["900", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["1000", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["1200", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["1500", "50 / 75 / 100 / 150 / 200", "2.0 / 2.5 / 3.0", "2500 / 3000"],
        ],
        RANGE_NOTES_STANDARD,
      ),
    ],
    sourceUrl: LADDER_SOURCE_URL,
  }),
  createTrayProduct({
    category: "FRP Systems",
    subCategory: "FRP Tray and Raceway Family",
    name: "FRP Perforated, Raceway & Ladder Cable Tray",
    descriptionParagraphs: [
      "Metallo's FRP cable management program is built from the sourced FRP tray page, which groups perforated tray, raceway, and ladder configurations into one corrosion-focused system. The source emphasizes corrosion resistance, high mechanical strength, UV resistance, light weight, anti-static behavior, non-conductivity, and non-magnetic performance.",
      "The sourced FRP range separates perforated or raceway formats from ladder builds, both in 3000 mm lengths with 4 mm or 6 mm thickness options. Perforated and raceway sizes run from 50 mm to 400 mm widths, while the ladder family extends up to 1200 mm with dedicated rung and runner dimensions published alongside the tray sizes.",
    ],
    thumbnail: trayImage("frp-tray.webp"),
    technicalSpecifications: [
      spec("System Family", "FRP perforated tray, FRP raceway, FRP ladder tray", "category"),
      spec("Perforated / Raceway Widths", "50 mm to 400 mm", "swap_horiz"),
      spec("Ladder Widths", "50 mm to 1200 mm", "swap_horiz"),
      spec("Thickness", "4 mm / 6 mm", "straighten"),
      spec("Length", "3000 mm", "straighten"),
    ],
    features: [
      "Corrosion Resistance",
      "High Mechanical Strength",
      "UV Resistant",
      "Light Weight",
      "Anti-Static",
      "Non-Conductive",
      "Non-Magnetic",
    ],
    rangeTables: [
      rangeTable(
        "FRP Product Range For Perforated Tray & Raceway",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "25 / 50 / 75 / 100", "4 / 6", "3000"],
          ["100", "25 / 50 / 75 / 100", "4 / 6", "3000"],
          ["150", "25 / 50 / 75 / 100", "4 / 6", "3000"],
          ["200", "25 / 50 / 75 / 100", "4 / 6", "3000"],
          ["300", "25 / 50 / 75 / 100", "4 / 6", "3000"],
          ["400", "25 / 50 / 75 / 100", "4 / 6", "3000"],
        ],
        ["All sizes are standard, but custom sizes can be manufactured."],
      ),
      rangeTable(
        "FRP Product Range For Ladder Tray",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["300", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["400", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["500", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["600", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["750", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["900", "50 / 75 / 100 / 150", "4 / 6", "3000"],
          ["1200", "50 / 75 / 100 / 150", "4 / 6", "3000"],
        ],
        ["All sizes are standard, but custom sizes can be manufactured."],
      ),
      rangeTable(
        "FRP Rungs & Runners Dimensions",
        ["Member", "Dimension", "Thickness", "Distance Between Rungs"],
        [
          ["Rung", "25 x 25", "As same as tray thickness", "300"],
          ["Runner", "H x 25 x 25", "As same as tray thickness", "300"],
        ],
      ),
    ],
    sourceUrl: FRP_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Wire Mesh",
    subCategory: "Open Basket Tray",
    name: "Wiremesh Cable Tray",
    descriptionParagraphs: [
      "Metallo's wiremesh tray offering follows the sourced open basket range for cable routes that need fast drops, flexible field changes, and continuous airflow. The published source keeps the positioning close to the perforated tray family, highlighting ventilation, heat dissipation, strength, ease of installation, aesthetic appeal, and future-proofing.",
      "The sourced range uses MS (HR, CRC) and stainless steel 304 / 316 with hot-dip galvanized, GI alkaline, electroplated, stainless, and powder-coated finish options. Standard widths run from 50 mm to 600 mm across height options from 50 mm through 155 mm, with 2500 mm lengths and wire thickness combinations from 3 mm through 6 mm.",
    ],
    thumbnail: trayImage("wiremesh-tray.webp"),
    technicalSpecifications: [
      spec("Raw Material", "MS (HR, CRC), stainless steel 304 & 316", "diamond"),
      spec(
        "Finish Of Product",
        "Hot-dip galvanized, GI alkaline, electroplated, stainless steel 304 & 316, powder coated",
        "auto_awesome",
      ),
      spec("Width Coverage", "50 mm to 600 mm", "swap_horiz"),
      spec("Length Coverage", "2500 mm", "straighten"),
      spec("Wire Thickness", "3 mm to 6 mm", "straighten"),
    ],
    features: [
      "Ventilation",
      "Heat Dissipation",
      "Strength & Durability",
      "Ease of Installation",
      "Aesthetic Appeal",
      "Future-Proofing",
    ],
    rangeTables: [
      rangeTable(
        "Wiremesh Tray Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "50", "3 / 4 / 5", "2500"],
          ["100", "50", "3 / 4 / 5", "2500"],
          ["150", "50 / 55 / 75 / 100 / 105", "3 / 4 / 5", "2500"],
          ["200", "50 / 55 / 75 / 100 / 105", "3 / 4 / 5", "2500"],
          ["300", "50 / 55 / 75 / 100 / 105", "3 / 4 / 5", "2500"],
          ["400", "50 / 55 / 75 / 100 / 105 / 155", "4 / 5 / 6", "2500"],
          ["450", "50 / 55 / 75 / 100 / 105 / 155", "4 / 5 / 6", "2500"],
          ["500", "50 / 55 / 75 / 100 / 105 / 155", "4 / 5 / 6", "2500"],
          ["600", "50 / 55 / 75 / 100 / 105 / 155", "4 / 5 / 6", "2500"],
        ],
        [
          "All dimensions are in mm.",
          "All sizes are standard, but custom sizes can be manufactured.",
        ],
      ),
    ],
    sourceUrl: WIREMESH_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Raceway & Ducts",
    subCategory: "Floor Raceway / Trunking",
    name: "Raceway, Trunking & Cable Ducts",
    descriptionParagraphs: [
      "Metallo's raceway and cable-duct range follows the sourced floor raceway product page for installations that need stronger cable protection and cleaner compartmentalized routing than an open tray system can provide. The source is built around inside-edge construction and allows single-compartment or multi-compartment arrangements.",
      "The published metallic material matrix covers MS (HR, CRC), pre-galvanized, aluminium, and stainless steel 304 / 316. Width coverage runs from 50 mm to 600 mm, with height options from 25 mm to 150 mm, thickness options from 1.2 mm through 3.0 mm, and standard lengths of 2500 mm or 3000 mm.",
    ],
    thumbnail: trayImage("raceway-trunking.webp"),
    technicalSpecifications: [
      spec(
        "Raw Material",
        "MS (HR, CRC), pre-galvanized, aluminium, stainless steel 304 & 316",
        "diamond",
      ),
      spec(
        "Finish Of Product",
        "Hot-dip galvanized, GI alkaline, pre-galvanized, stainless steel 304 & 316, powder coated, aluminium anodized",
        "auto_awesome",
      ),
      spec("Flange Type", "Inside edge", "build"),
      spec("Configuration", "With compartment or single compartment", "view_stream"),
      spec("Width Coverage", "50 mm to 600 mm", "swap_horiz"),
    ],
    features: [
      "Strength & Durability",
      "Ease of Installation",
      "Aesthetic Appeal",
      "High capacity",
      "Rigid Structure",
      "Maximum Cable Protection",
    ],
    rangeTables: [
      rangeTable(
        "Raceway / Trunking Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "25 / 35 / 38 / 50", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["75", "25 / 35 / 38 / 50", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["100", "25 / 35 / 38 / 50 / 75 / 100", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["150", "25 / 35 / 38 / 50 / 75 / 100", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["200", "25 / 35 / 38 / 50 / 75 / 100", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["300", "25 / 35 / 38 / 50 / 75 / 100", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["400", "25 / 35 / 38 / 50 / 75 / 100", "1.2 / 1.6 / 2.0", "2500 / 3000"],
          ["450", "25 / 35 / 38 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["500", "25 / 35 / 38 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["600", "25 / 35 / 38 / 50 / 75 / 100 / 150", "1.6 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
        ],
        [
          "All dimensions are in mm.",
          "All sizes are standard, but custom sizes can be manufactured.",
        ],
      ),
    ],
    sourceUrl: RACEWAY_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Support Systems",
    subCategory: "Support & Cover Clamps",
    name: "Support & Cover Clamps",
    descriptionParagraphs: [
      "Metallo's support and cover clamp range is rebuilt directly from the sourced support-and-cover-clamps page. It is used to lock down tray covers, stabilize tray runs, and complete the mechanical support layer around the main tray system without moving into a separate, loosely matched hardware family.",
      "The live source page lists MS (HR, CRC) and pre-galvanized material options with hot-dip galvanized, pre-galvanized, and powder-coated finishes. Size coverage runs from 50 mm to 1000 mm, with 1.6 mm, 2.0 mm, and 2.5 mm thickness options.",
    ],
    thumbnail: trayImage("support-cover-clamps.webp"),
    technicalSpecifications: [
      spec("Material", "MS (HR, CRC), pre-galvanized", "diamond"),
      spec("Finish", "Hot dip galvanized, pre-galvanized, powder coated", "auto_awesome"),
      spec("Size Range", "50 mm to 1000 mm", "swap_horiz"),
      spec("Thickness", "1.6 mm, 2.0 mm, 2.5 mm", "straighten"),
    ],
    sourceUrl: SUPPORT_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Support Systems",
    subCategory: "Strut Channel and Hardware",
    name: "Strut Channel System",
    descriptionParagraphs: [
      "Metallo's strut system is based on the sourced strut channel page and covers the channel body plus the matching hardware used to finish and secure the support assembly. The published range centers on 41 x 21 mm and 41 x 41 mm channel sizes, with standard 3 meter lengths and two slot-size patterns.",
      "The same source also lists the related Protection Cap and Spring Nut items used with the strut family. That lets the support frame, end protection, and fastening hardware stay within one coordinated source-backed set rather than being mixed from unrelated catalogues.",
    ],
    thumbnail: trayImage("strut-channels.webp"),
    technicalSpecifications: [
      spec(
        "Material",
        "MS (HR / TRC), pre-galvanized, stainless steel 304 / 316, with other materials on request",
        "diamond",
      ),
      spec(
        "Finish Available",
        "Electro-galvanized, hot dip galvanized, pre-galvanized, powder coating",
        "auto_awesome",
      ),
      spec("Size Range", "41 x 21 mm, 41 x 41 mm", "swap_horiz"),
      spec("Thickness", "1.6 mm, 2.0 mm, 2.5 mm", "straighten"),
      spec("Length", "3 mtr (std), other sizes upon request", "straighten"),
      spec("Slot Size", "14 x 28 mm, 12 x 25 mm", "grid_view"),
    ],
    typeGallery: typeGallery(
      "Strut Hardware",
      "Metallo pairs the sourced strut channels with the two hardware items shown on the same source page so end protection and captive fastening stay part of the same support-system package.",
      [
        galleryItem(
          "Protection Cap",
          strutHardwareImage("protection-cap.webp"),
          "PVC cap for 41 x 21 mm and 41 x 41 mm strut sizes.",
        ),
        galleryItem(
          "Spring Nut",
          strutHardwareImage("spring-nut.webp"),
          "MS (HR, CRC) / pre-galvanized spring nut with M6, M8, and M10 hole sizes.",
        ),
      ],
    ),
    sourceUrl: STRUT_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Accessories",
    subCategory: "Installation Hardware Range",
    name: "Cable Tray Accessories & Installation Hardware",
    descriptionParagraphs: [
      "Metallo's accessory section now follows the live accessories gallery instead of the older generic placeholders. The sourced range spans tray joining, covers, suspension hardware, fastening components, cable tying, support stands, and related installation pieces used around a full tray package.",
      "Rather than collapsing these items into one vague accessories label, the page now keeps the individual sourced accessory names visible in a dedicated gallery so teams can see what is actually represented in the underlying product inventory.",
    ],
    thumbnail: accessoryImage("cable-tray-cover.webp"),
    technicalSpecifications: [
      spec("Accessory Families", "9 catalogued items on the source accessories page", "inventory_2"),
      spec("Coverage", "Tray joining, covers, suspension, fastening, support, tying, and junction hardware", "category"),
    ],
    typeGallery: typeGallery(
      "Accessory Range",
      "The source accessories page exposes a set of discrete tray-support and installation items. Metallo uses the same families here so the page reflects the live source inventory instead of a generic accessory placeholder.",
      [
        galleryItem("Jointing Plate", accessoryImage("jointing-plate.webp")),
        galleryItem("Nut Bolts", accessoryImage("nut-bolts.webp")),
        galleryItem("Cable Tray Cover", accessoryImage("cable-tray-cover.webp")),
        galleryItem("Full Thread Rod", accessoryImage("full-thread-rod.webp")),
        galleryItem("Bullet Fastener", accessoryImage("bullet-fastener.webp")),
        galleryItem("Junction Box", accessoryImage("junction-box.webp")),
        galleryItem("C - Channel For Hanging", accessoryImage("c-channel-for-hanging.webp")),
        galleryItem("L Cable Tray Support Stand", accessoryImage("l-cable-tray-support-stand.webp")),
        galleryItem("Cable Tie", accessoryImage("cable-tie.webp")),
      ],
    ),
    sourceUrl: ACCESSORIES_SOURCE_URL,
  }),
  createTrayProduct({
    category: "Finishing",
    subCategory: "Surface Treatment and Coil Inputs",
    name: "Finishing Systems",
    descriptionParagraphs: [
      "Metallo's finishing section is now based on the sourced finishing page rather than synthetic finish labels. The source shows the actual finishing and feed-material blocks presented alongside the tray products, giving the page a clearer view of how coated and base material options relate to the tray system.",
      "The live page highlights hot-dip finishing, electro plating, powder coating, and GP sheet coil / HR sheet coil presentation. Those source captions are preserved here as gallery notes so the finishing section stays visibly tied to the underlying sourced content while still reading in Metallo's voice.",
    ],
    thumbnail: finishingImage("hot-dip-plant.webp"),
    technicalSpecifications: [
      spec("Visible Finishing Blocks", "Hot-dip plant, electro plating plant, powder coating plant, GP sheet coil / HR sheet coil", "format_paint"),
      spec("Use In Page", "Surface-finish and base-material reference for tray-system supply planning", "design_services"),
    ],
    typeGallery: typeGallery(
      "Available Finishing Processes",
      "The source finishing page presents four visual process or feed-material blocks. Metallo keeps those specific families in the page so finishing is represented by the actual sourced process set instead of a generic finish badge.",
      [
        galleryItem(
          "Hot-Dip Plant",
          finishingImage("hot-dip-plant.webp"),
          "70-100 micron layer",
        ),
        galleryItem(
          "Electro Plating Plant",
          finishingImage("electro-plating-plant.webp"),
          "120 GSM",
        ),
        galleryItem(
          "Powder Coating Plant",
          finishingImage("powder-coating-plant.webp"),
          "Tank process",
        ),
        galleryItem(
          "G.P. Sheet Coil (Essar Steel)",
          finishingImage("gp-sheet-coil-essar-steel.webp"),
          "HR sheet coil",
        ),
      ],
    ),
    sourceUrl: FINISHING_SOURCE_URL,
  }),
];
