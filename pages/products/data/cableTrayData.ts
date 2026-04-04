import type {
  CategoryConfig,
  ProductCTAConfig,
  ProductHeroConfig,
  ProductQABannerConfig,
  ProductSpecItem,
} from "../../../components/product";
import { slugify } from "../../../components/product";
import type {
  CableTrayAccessoryGallery,
  CableTrayAccessoryItem,
  CableTrayRangeTable,
  CableTrayTypeGallery,
  CableTrayTypeGalleryItem,
  TrayProduct,
} from "./cableTrayTypes";

const CABLE_TRAY_CERTIFICATIONS = [
  "IS 14753",
  "IEC 61537",
  "NEMA VE 1",
  "UL Listed",
  "ASTM A123 (HDG)",
];

const CABLE_TRAY_INDUSTRIES = [
  "Oil & Gas",
  "Power & Energy",
  "Petrochemical",
  "Data Centres",
  "Pharmaceuticals",
  "Infrastructure",
  "Manufacturing",
  "Commercial Buildings",
];

const metalloImage = (asset: string) => `/cable Trays/metallo_cable_trays/${asset}`;
const trayImage = (asset: string) => `/cable Trays/dudhat/${asset}`;
const accessoryImage = (asset: string) => `/cable Trays/metallo_cable_trays/Accessories/PCT_Accessories/${asset}`;
const lctAccessoryImage = (asset: string) => `/cable Trays/metallo_cable_trays/Accessories/LCT_Accessories/${asset}`;
const ctcAccessoryImage = (asset: string) => `/cable Trays/metallo_cable_trays/Accessories/CTC_Accessories/${asset}`;
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

const accessoryItem = (
  name: string,
  image: string,
  description?: string,
): CableTrayAccessoryItem => ({
  name,
  image,
  description,
});

const accessoryGallery = (
  title: string,
  intro: string,
  items: CableTrayAccessoryItem[],
): CableTrayAccessoryGallery => ({
  title,
  intro,
  items,
});

const INDIANA_SOURCE = {
  label: "Indiana Group catalogue",
  url: "https://www.indianagroup.com",
} as const;

interface TrayProductInput {
  category: string;
  subCategory: string;
  name: string;
  descriptionParagraphs: string[];
  thumbnail: string;
  technicalSpecifications: ProductSpecItem[];
  features?: string[];
  applications?: string[];
  certifications?: string[];
  industries?: string[];
  rangeTables?: CableTrayRangeTable[];
  typeGallery?: CableTrayTypeGallery;
  accessoryGallery?: CableTrayAccessoryGallery;
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
  certifications: input.certifications || CABLE_TRAY_CERTIFICATIONS,
  industries: input.industries || CABLE_TRAY_INDUSTRIES,
  rangeTables: input.rangeTables,
  typeGallery: input.typeGallery,
  accessoryGallery: input.accessoryGallery,
});

export const HERO: ProductHeroConfig = {
  backgroundImage: trayImage("cableTrayHeroSection.png"),
  title: "Industrial Cable",
  subtitle: "Tray Systems.",
  description:
    "Metalloâ€™s cable tray program covers perforated, ladder, embossed, wire-mesh, FRP, floor trunking, tray covers, earthing, and finishing systems through a single coordinated layout.",
  breadcrumbLabel: "Cable Tray Systems",
};

export const CTA: ProductCTAConfig = {
  title: "Need a project-ready tray package?",
  description:
    "Share your tray widths, finish requirements, support spacing, and accessory list. Our team will map the right Metallo configuration and respond with a comprehensive supply proposal.",
  ctaLabel: "Request Tray Package Quote",
  ctaIcon: "request_quote",
};

export const QA_BANNER: ProductQABannerConfig = {
  title: "Comprehensive Cable Management Coverage",
  items: [
    {
      icon: "table_view",
      title: "Complete Range Tables",
      desc: "Every tray-system card includes published width, height, thickness, and length ranges with detailed product specifications.",
    },
    {
      icon: "inventory_2",
      title: "Full System Mix",
      desc: "The page covers metallic trays, FRP options, wire mesh, floor trunking, tray covers, earthing, and finishing processes in one connected catalog.",
    },
    {
      icon: "verified",
      title: "Certified Systems",
      desc: "All cable tray systems comply with IS 14753, IEC 61537, NEMA VE 1, and UL standards with ASTM A123 certified hot-dip galvanizing.",
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
    key: "embossed",
    label: "Embossed Trays",
    icon: "texture",
    match: "Embossed Trays",
  },
  {
    key: "covers",
    label: "Tray Covers",
    icon: "roofing",
    match: "Tray Covers",
  },
  {
    key: "trunking",
    label: "Floor Trunking",
    icon: "space_bar",
    match: "Floor Trunking",
  },
  {
    key: "wiremesh",
    label: "Wire Mesh",
    icon: "grid_on",
    match: "Wire Mesh",
  },
  {
    key: "frp",
    label: "FRP Systems",
    icon: "blur_on",
    match: "FRP Systems",
  },
  {
    key: "earthing",
    label: "Earthing",
    icon: "bolt",
    match: "Earthing",
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
  "All dimensions are in mm.",
  "All sizes are standard, but custom sizes can be manufactured.",
];

export const PRODUCTS: TrayProduct[] = [
  createTrayProduct({
    category: "Perforated Trays",
    subCategory: "Ventilated Metallic Tray",
    name: "Perforated Cable Tray & Accessories",
    descriptionParagraphs: [
      "Metallo's perforated tray program is aligned to the product range for open cable routes that need airflow, heat dissipation, and straightforward field installation without moving to a ladder profile too early. Available in regular flange, U type flange, inside flange, outside flange, and heavy-duty inside flange constructions.",
      "The range covers MS (HR, CRC), pre-galvanized, aluminium, and stainless steel 304 / 316 builds with hot-dip galvanized, GI alkaline, powder-coated, aluminium-anodized, and stainless finishes. Standard tray widths run from 50 mm to 900 mm, with height combinations stepping from 25 mm through 150 mm and lengths in 2500 mm or 3000 mm sections.",
    ],
    thumbnail: metalloImage("Perforated-Straight-Flange-Tray.png"),
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
    typeGallery: typeGallery(
      "Perforated Cable Tray Flange Types",
      "The Indiana Group catalogue defines three standard flange profiles for perforated cable trays. Each profile provides different edge stiffness and cable protection characteristics.",
      [
        galleryItem(
          "ST00 â€” Straight Type",
          metalloImage("Perforated-Straight-Flange-Tray.png"),
          "Standard straight flange edge, the base profile for all perforated trays.",
        ),
        galleryItem(
          "RF15 â€” Return Flange (15 mm)",
          metalloImage("Straight_With_U_Bend.png"),
          "15 mm return flange along the top edge for added lateral stiffness and cable retention.",
        ),
        galleryItem(
          "IB15 â€” Inward Bend (15 mm)",
          metalloImage("Perforated-Inward-Bend-Flange-Tray.png"),
          "15 mm inward bend at top edge for enhanced edge protection and structural strength.",
        ),
      ],
    ),
    accessoryGallery: accessoryGallery(
      "Perforated Cable Tray Accessories",
      "Indiana Group catalogues a full set of field-routing accessories for perforated tray systems, covering horizontal and vertical direction changes, branching, width transitions, and section joining.",
      [
        accessoryItem("Horizontal Bend (Radial)", accessoryImage("PCTA_Horizontal_Bend_(Radial).png"), "Smooth curved horizontal bend at 90Â°, 60Â°, 45Â°, and 30Â° for radial direction changes."),
        accessoryItem("Horizontal Bend (Non-Radial)", accessoryImage("PCTA_Horizontal_Bend_(Non-Radial).png"), "Angular horizontal bend at 90Â°, 60Â°, 45Â°, and 30Â° for non-radial direction changes."),
        accessoryItem("Vertical Inside Bend (Radial)", accessoryImage("PCTA_Vertical_Inside_Bend_(Radial).png"), "Smooth curved vertical rise with radial profile for upward elevation transitions."),
        accessoryItem("Vertical Inside Bend (Non-Radial)", accessoryImage("PCTA_Vertical_Inside_Bend_(Non-Radial).png"), "Angular vertical rise with non-radial profile for upward elevation transitions."),
        accessoryItem("Vertical Outside Bend (Radial)", accessoryImage("PCTA_Vertical_Outside_Bend_(Radial).png"), "Smooth curved vertical drop with radial profile for downward elevation transitions."),
        accessoryItem("Vertical Outside Bend (Non-Radial)", accessoryImage("PCTA_Vertical_Outside_Bend_(Non-Radial).png"), "Angular vertical drop with non-radial profile for downward elevation transitions."),
        accessoryItem("Horizontal Cross (Radial)", accessoryImage("PCTA_Horizontal_Cross_(Radial).png"), "Four-way radial intersection fitting for complex routing layouts."),
        accessoryItem("Horizontal Cross (Non-Radial)", accessoryImage("PCTA_Horizontal_Cross_(Non-Radial).png"), "Four-way non-radial intersection fitting for complex routing layouts."),
        accessoryItem("Horizontal Tee (Radial)", accessoryImage("PCTA_Horizontal_Tee_(Radial).png"), "Equal radial T-branch fitting for three-way cable routing at junctions."),
        accessoryItem("Horizontal Tee (Non-Radial)", accessoryImage("PCTA_Horizontal_Tee_(Non-Radial).png"), "Equal non-radial T-branch fitting for three-way cable routing at junctions."),
        accessoryItem("Horizontal Tee Unequal (Radial)", accessoryImage("PCTA_Horizontal_Tee_Unequal_(Radial).png"), "Radial T-branch with different width on the branch leg for mixed tray sizes."),
        accessoryItem("Horizontal Tee Unequal (Non-Radial)", accessoryImage("PCTA_Horizontal_Tee_Unequal_(Non-Radial).png"), "Non-radial T-branch with different width on the branch leg for mixed tray sizes."),
        accessoryItem("Vertical Tee (Radial)", accessoryImage("PCTA_Vertical_Tee_(Radial).png"), "Radial vertical T-branch for combined horizontal and vertical routing."),
        accessoryItem("Reducer", accessoryImage("PCTA_Reducer.png"), "Width transition fitting â€” available in left, right, and center alignment."),
        accessoryItem("Coupler Plate", accessoryImage("PCTA_Coupler_Plate.png"), "Straight coupling plate for joining two tray sections end-to-end."),
      ],
    ),
  }),
  createTrayProduct({
    category: "Ladder Trays",
    subCategory: "Heavy-Duty Ladder System",
    name: "Ladder Cable Tray & Accessories",
    descriptionParagraphs: [
      "Metallo uses the sourced ladder tray range for heavier cable corridors where rung ventilation, cable separation, and structural carrying capacity matter more than a fully sheeted tray body. The catalogue positions this family around strong load-bearing performance, ventilation, ease of fastening, cost-effectiveness, and a neat finished appearance.",
      "The published material and finish matrix mirrors the broader metallic tray platform: MS (HR, CRC), pre-galvanized, aluminium, and stainless steel 304 / 316 with hot-dip galvanized, GI alkaline, pre-galvanized, powder-coated, anodized, and stainless finish options. Width coverage extends from 150 mm to 1500 mm, across 50 mm to 200 mm height options and 2500 mm or 3000 mm lengths.",
    ],
    thumbnail: metalloImage("LCT_Starlight_Length_Inner_Bend.png"),
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
    typeGallery: typeGallery(
      "Ladder Cable Tray Profile Types",
      "The Indiana Group catalogue defines four side-rail profiles and multiple rung configurations for ladder cable tray systems.",
      [
        galleryItem(
          "IB00 â€” Inner Bend",
          metalloImage("LCT_Starlight_Length_Inner_Bend.png"),
          "Side rail with inward-facing bend for cable protection and structural integrity.",
        ),
        galleryItem(
          "OB00 â€” Outer Bend",
          metalloImage("LCT_Starlight_Length_Outer_Bend.png"),
          "Side rail with outward-facing bend for easier cable loading from the top.",
        ),
        galleryItem(
          "IU00 â€” Inner U-Bend",
          metalloImage("LCT_Starlight_Length_Inner_U_Bend.png"),
          "U-shaped inward profile for enhanced edge stiffness and cable retention.",
        ),
        galleryItem(
          "OU00 â€” Outer U-Bend",
          metalloImage("LCT_Starlight_Length_Outer_U_Bend.png"),
          "U-shaped outward profile for maximum load distribution and cover compatibility.",
        ),
      ],
    ),
    accessoryGallery: accessoryGallery(
      "Ladder Cable Tray Accessories",
      "Indiana Group provides a complete set of ladder tray accessories for direction changes, branching, width transitions, and section joining â€” matching the same routing families available for perforated trays.",
      [
        accessoryItem("Horizontal Bend (Radial)", lctAccessoryImage("LCTA_Horizontal_Bend_(Radial).png"), "Smooth curved horizontal bend at 90Â°, 60Â°, 45Â°, and 30Â° for radial direction changes."),
        accessoryItem("Horizontal Bend (Non-Radial)", lctAccessoryImage("LCTA_Horizontal_Bend_(Non-Radial).png"), "Angular horizontal bend at 90Â°, 60Â°, 45Â°, and 30Â° for non-radial direction changes."),
        accessoryItem("Vertical Inside Bend (Radial)", lctAccessoryImage("LCTA_Vertical_Bend_Inside_(Radial).png"), "Smooth curved vertical rise with radial profile for upward elevation transitions."),
        accessoryItem("Vertical Inside Bend (Non-Radial)", lctAccessoryImage("LCTA_Vertical_Inside_Bend_(Non-Radial).png"), "Angular vertical rise with non-radial profile for upward elevation transitions."),
        accessoryItem("Vertical Outside Bend (Radial)", lctAccessoryImage("LCTA_Vertical_Bend_Outside_(Radial).png"), "Smooth curved vertical drop with radial profile for downward elevation transitions."),
        accessoryItem("Vertical Outside Bend (Non-Radial)", lctAccessoryImage("LCTA_Vertical_Outside_Bend_(Non-Radial).png"), "Angular vertical drop with non-radial profile for downward elevation transitions."),
        accessoryItem("Horizontal Cross (Radial)", lctAccessoryImage("LCTA_Horizontal_Cross_(Radial).png"), "Four-way radial intersection fitting."),
        accessoryItem("Horizontal Cross (Non-Radial)", lctAccessoryImage("LCTA_Horizontal_Cross_(Non-Radial).png"), "Four-way non-radial intersection fitting."),
        accessoryItem("Horizontal Tee (Radial)", lctAccessoryImage("LCTA_Horizontal_Tee_(Radial).png"), "Equal radial T-branch for three-way junction routing."),
        accessoryItem("Horizontal Tee (Non-Radial)", lctAccessoryImage("LCTA_Horizontal_Tee_Equal_(Non-Radial).png"), "Equal non-radial T-branch for three-way junction routing."),
        accessoryItem("Horizontal Tee Unequal (Radial)", lctAccessoryImage("LCTA_Horizontal_Tee_Unequal_(Radial).png"), "Radial T-branch with different width on the branch leg."),
        accessoryItem("Horizontal Tee Unequal (Non-Radial)", lctAccessoryImage("LCTA_Horizontal_Tee_Unequal_(Non-Radial).png"), "Non-radial T-branch with different width on the branch leg."),
        accessoryItem("Vertical Tee (Radial)", lctAccessoryImage("LCTA_Vertical_Tee_(Radial).png"), "Radial vertical T-branch for combined horizontal and vertical routing."),
        accessoryItem("Reducer", lctAccessoryImage("LCTA_Reducers.png"), "Width transition fitting â€” available in left, right, and center alignment."),
        accessoryItem("Coupler Plate", lctAccessoryImage("LCTA_Coupler_Plate.png"), "End-to-end tray section joining plate."),
      ],
    ),
  }),
  createTrayProduct({
    category: "FRP Systems",
    subCategory: "FRP Tray and Raceway Family",
    name: "FRP Perforated, Raceway & Ladder Cable Tray",
    descriptionParagraphs: [
      "Metallo's FRP cable management program is built from the FRP tray page, which groups perforated tray, raceway, and ladder configurations into one corrosion-focused system. The source emphasizes corrosion resistance, high mechanical strength, UV resistance, light weight, anti-static behavior, non-conductivity, and non-magnetic performance.",
      "The FRP range separates perforated or raceway formats from ladder builds, both in 3000 mm lengths with 4 mm or 6 mm thickness options. Perforated and raceway sizes run from 50 mm to 400 mm widths, while the ladder family extends up to 1200 mm with dedicated rung and runner dimensions published alongside the tray sizes.",
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
  }),
  createTrayProduct({
    category: "Wire Mesh",
    subCategory: "Open Basket Tray",
    name: "Wiremesh Cable Tray",
    descriptionParagraphs: [
      "Metallo's wiremesh tray offering follows the open basket range for cable routes that need fast drops, flexible field changes, and continuous airflow. The published source keeps the positioning close to the perforated tray family, highlighting ventilation, heat dissipation, strength, ease of installation, aesthetic appeal, and future-proofing.",
      "The range uses MS (HR, CRC) and stainless steel 304 / 316 with hot-dip galvanized, GI alkaline, electroplated, stainless, and powder-coated finish options. Standard widths run from 50 mm to 600 mm across height options from 50 mm through 155 mm, with 2500 mm lengths and wire thickness combinations from 3 mm through 6 mm.",
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
  }),
  createTrayProduct({
    category: "Raceway & Ducts",
    subCategory: "Floor Raceway / Trunking",
    name: "Raceway, Trunking & Cable Ducts",
    descriptionParagraphs: [
      "Metallo's raceway and cable-duct range follows the floor raceway product page for installations that need stronger cable protection and cleaner compartmentalized routing than an open tray system can provide. The source is built around inside-edge construction and allows single-compartment or multi-compartment arrangements.",
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
  }),
  createTrayProduct({
    category: "Support Systems",
    subCategory: "Support & Cover Clamps",
    name: "Support & Cover Clamps",
    descriptionParagraphs: [
      "Metallo's support and cover clamp range is rebuilt directly from the support and cover clamps programme. It is used to lock down tray covers, stabilize tray runs, and complete the mechanical support layer around the main tray system without moving into a separate, loosely matched hardware family.",
      "The live catalogue lists MS (HR, CRC) and pre-galvanized material options with hot-dip galvanized, pre-galvanized, and powder-coated finishes. Size coverage runs from 50 mm to 1000 mm, with 1.6 mm, 2.0 mm, and 2.5 mm thickness options.",
    ],
    thumbnail: trayImage("support-cover-clamps.webp"),
    technicalSpecifications: [
      spec("Material", "MS (HR, CRC), pre-galvanized", "diamond"),
      spec("Finish", "Hot dip galvanized, pre-galvanized, powder coated", "auto_awesome"),
      spec("Size Range", "50 mm to 1000 mm", "swap_horiz"),
      spec("Thickness", "1.6 mm, 2.0 mm, 2.5 mm", "straighten"),
    ],
  }),
  createTrayProduct({
    category: "Support Systems",
    subCategory: "Strut Channel and Hardware",
    name: "Strut Channel System",
    descriptionParagraphs: [
      "Metallo's strut system is based on the strut channel programme and covers the channel body plus the matching hardware used to finish and secure the support assembly. The published range centers on 41 x 21 mm and 41 x 41 mm channel sizes, with standard 3 meter lengths and two slot-size patterns.",
      "The range also includes the related Protection Cap and Spring Nut items used with the strut family. That lets the support frame, end protection, and fastening hardware stay within one coordinated coordinated set rather than being mixed from unrelated catalogues.",
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
      "Metallo pairs the sourced strut channels with the two hardware items shown on the same catalogue so end protection and captive fastening stay part of the same support-system package.",
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
  }),
  createTrayProduct({
    category: "Accessories",
    subCategory: "Installation Hardware Range",
    name: "Cable Tray Accessories & Installation Hardware",
    descriptionParagraphs: [
      "Metallo's accessory section now follows the live accessories gallery instead of the older generic placeholders. The product range spans tray joining, covers, suspension hardware, fastening components, cable tying, support stands, and related installation pieces used around a full tray package.",
      "Rather than collapsing these items into one vague accessories label, the page now keeps the individual accessory names visible in a dedicated gallery so teams can see what is actually represented in the underlying product inventory.",
    ],
    thumbnail: accessoryImage("cable-tray-cover.webp"),
    technicalSpecifications: [
      spec("Accessory Families", "9 catalogued items on the accessories programme", "inventory_2"),
      spec("Coverage", "Tray joining, covers, suspension, fastening, support, tying, and junction hardware", "category"),
    ],
    typeGallery: typeGallery(
      "Accessory Range",
      "The accessories programme exposes a set of discrete tray-support and installation items. Metallo uses the same families here so the page reflects the product inventory instead of a generic accessory placeholder.",
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
  }),
  createTrayProduct({
    category: "Finishing",
    subCategory: "Surface Treatment and Coil Inputs",
    name: "Finishing Systems",
    descriptionParagraphs: [
      "Metallo's finishing section is now based on the finishing programme rather than synthetic finish labels. The source shows the actual finishing and feed-material blocks presented alongside the tray products, giving the page a clearer view of how coated and base material options relate to the tray system.",
      "The live page highlights hot-dip finishing, electro plating, powder coating, and GP sheet coil / HR sheet coil presentation. Those captions are preserved here as gallery notes so the finishing section stays visibly tied to the underlying product content while still reading in Metallo's voice.",
    ],
    thumbnail: finishingImage("hot-dip-plant.webp"),
    technicalSpecifications: [
      spec("Visible Finishing Blocks", "Hot-dip plant, electro plating plant, powder coating plant, GP sheet coil / HR sheet coil", "format_paint"),
      spec("Use In Page", "Surface-finish and base-material reference for tray-system supply planning", "design_services"),
    ],
    typeGallery: typeGallery(
      "Available Finishing Processes",
      "The finishing programme presents four visual process or feed-material blocks. Metallo keeps those specific families in the page so finishing is represented by the actual process set instead of a generic finish badge.",
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
  }),
  createTrayProduct({
    category: "Embossed Trays",
    subCategory: "Embossed Metallic Tray",
    name: "Embossed Cable Tray & Accessories",
    descriptionParagraphs: [
      "Metallo's embossed cable tray program follows the Indiana Group catalogue range for installations where longitudinal embossing on the tray base delivers higher load-carrying capacity and a cleaner decorative finish compared to standard perforated or plain trays.",
      "The Indiana catalogue lists ST (straight), UT (U-flange), RF15 (return flange), and IB15 (inward bend) profiles with widths from 150 mm to 600 mm, heights from 25 mm through 150 mm, and thickness options from 1.0 mm to 2.0 mm in 2500 mm, 3000 mm, and 6000 mm lengths.",
    ],
    thumbnail: metalloImage("ECT_Starlight_Flange_ray.png"),
    technicalSpecifications: [
      spec("Raw Material", "MS (Mild Steel), pre-galvanized, stainless steel 304 & 316, aluminium", "diamond"),
      spec("Finish Of Product", "Hot-dip galvanized, powder coated, pickling & passivation, painted, self colour", "auto_awesome"),
      spec("Profile Types", "ST (Straight), UT (U-flange), RF15 (Return Flange 15 mm), IB15 (Inward Bend 15 mm)", "build"),
      spec("Width Coverage", "150 mm to 600 mm", "swap_horiz"),
      spec("Height Coverage", "25 / 50 / 75 / 100 / 150 mm", "height"),
      spec("Thickness", "1.0 / 1.2 / 1.5 / 2.0 mm", "straighten"),
      spec("Length Coverage", "2500 / 3000 / 6000 mm", "straighten"),
    ],
    features: [
      "High Load-Carrying Capacity",
      "Longitudinal Embossing Pattern",
      "Decorative Finish",
      "Strength & Rigidity",
      "Ease of Installation",
      "Multiple Flange Options",
    ],
    rangeTables: [
      rangeTable(
        "Embossed Tray Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["150", "25 / 50 / 75 / 100", "1.0 / 1.2 / 1.5 / 2.0", "2500 / 3000 / 6000"],
          ["200", "25 / 50 / 75 / 100", "1.0 / 1.2 / 1.5 / 2.0", "2500 / 3000 / 6000"],
          ["300", "50 / 75 / 100 / 150", "1.0 / 1.2 / 1.5 / 2.0", "2500 / 3000 / 6000"],
          ["450", "50 / 75 / 100 / 150", "1.2 / 1.5 / 2.0", "2500 / 3000 / 6000"],
          ["600", "50 / 75 / 100 / 150", "1.2 / 1.5 / 2.0", "2500 / 3000 / 6000"],
        ],
        RANGE_NOTES_STANDARD,
      ),
    ],
    typeGallery: typeGallery(
      "Embossed Cable Tray Profile Types",
      "The Indiana Group catalogue lists four profile types for embossed trays, each providing different edge treatment for varying load and coverage requirements.",
      [
        galleryItem("ST â€” Straight Type", metalloImage("ECT_Starlight_Flange_ray.png"), "Standard straight edge profile for embossed cable trays."),
        galleryItem("UT â€” U-Flange Type", metalloImage("Straight_With_U_Bend.png"), "15 mm U-shaped flange at the top edge for added cable retention and stiffness."),
        galleryItem("RF15 â€” Return Flange (15 mm)", metalloImage("ECT_Starlight_Return_Flange_Tray.png"), "Return flange along the top edge for enhanced lateral stiffness."),
        galleryItem("IB15 â€” Inward Bend (15 mm)", metalloImage("ECT_Straight_With_Inner_Bend.png"), "Inward bend at top edge for edge protection and structural strength."),
      ],
    ),
    accessoryGallery: accessoryGallery(
      "Embossed Cable Tray Accessories",
      "Indiana Group provides dedicated accessories for the embossed tray family, including press-fit covers and coupling plates.",
      [
        accessoryItem("Press Fit Cover", metalloImage("Press_Fit_Cover_(Embossed).png"), "Quick-assembly snap-on cover designed specifically for embossed tray profiles."),
        accessoryItem("Straight Coupler Plate (STC)", accessoryImage("PCTA_Coupler_Plate.png"), "End-to-end joining plate for embossed tray sections."),
        accessoryItem("Horizontal Bend (HB)", accessoryImage("PCTA_Horizontal_Bend_(Radial).png"), "Direction-change fitting at 90Â°, 60Â°, 45Â°, and 30Â° angles."),
        accessoryItem("Vertical Inside Bend (VIB)", accessoryImage("PCTA_Vertical_Inside_Bend_(Radial).png"), "Vertical rise fitting for elevation changes."),
        accessoryItem("Reducer (REDC)", accessoryImage("PCTA_Reducer.png"), "Width transition fitting for changing tray sizes."),
      ],
    ),
  }),
  createTrayProduct({
    category: "Tray Covers",
    subCategory: "Cable Tray Cover Systems",
    name: "Tray Cover & Cover Accessories",
    descriptionParagraphs: [
      "Metallo's tray cover program follows the Indiana Group catalogue range for installations that need cable protection from dust, debris, and physical damage while maintaining system accessibility. The catalogue defines five cover profiles â€” plain, ventilated, louvre, dome-faced, and dome-faced with spacing.",
      "Standard cover widths match the tray range from 50 mm to 900 mm with a 15 mm cover height and thicknesses from 1.0 mm to 3.0 mm. Cover accessories include bend covers, tee covers, cross covers, and reducer covers to protect the full routing system.",
    ],
    thumbnail: metalloImage("Cable_Tray_Cover_VT00.png"),
    technicalSpecifications: [
      spec("Raw Material", "MS (Mild Steel), pre-galvanized, stainless steel 304 & 316, aluminium", "diamond"),
      spec("Finish Of Product", "Hot-dip galvanized, powder coated, pickling & passivation, painted, self colour", "auto_awesome"),
      spec("Cover Types", "PT00 (Plain), VT00 (Ventilated), LT00 (Louvre), DF00 (Dome Faced), DS00 (Dome Faced with spacing)", "build"),
      spec("Width Coverage", "50 mm to 900 mm", "swap_horiz"),
      spec("Height", "15 mm", "height"),
      spec("Thickness", "1.0 / 1.2 / 1.5 / 2.0 / 2.5 / 3.0 mm", "straighten"),
      spec("Length Coverage", "2500 / 3000 mm", "straighten"),
    ],
    features: [
      "Cable Protection",
      "Dust & Debris Shielding",
      "Multiple Ventilation Options",
      "Easy Access & Installation",
      "Full System Coverage",
      "Press-Fit Compatibility",
    ],
    rangeTables: [
      rangeTable(
        "Tray Cover Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["50", "15", "1.0 / 1.2 / 1.5", "2500 / 3000"],
          ["100", "15", "1.0 / 1.2 / 1.5", "2500 / 3000"],
          ["150", "15", "1.0 / 1.2 / 1.5", "2500 / 3000"],
          ["200", "15", "1.0 / 1.2 / 1.5 / 2.0", "2500 / 3000"],
          ["300", "15", "1.2 / 1.5 / 2.0", "2500 / 3000"],
          ["450", "15", "1.2 / 1.5 / 2.0 / 2.5", "2500 / 3000"],
          ["600", "15", "1.5 / 2.0 / 2.5", "2500 / 3000"],
          ["750", "15", "1.5 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["900", "15", "2.0 / 2.5 / 3.0", "2500 / 3000"],
        ],
        RANGE_NOTES_STANDARD,
      ),
    ],
    typeGallery: typeGallery(
      "Tray Cover Profile Types",
      "The Indiana Group catalogue defines five cover profiles, each offering different ventilation and protection characteristics for cable tray systems.",
      [
        galleryItem("PT00 â€” Plain Type", metalloImage("Cable_Tray_Cover_PT00.png"), "Solid flat cover for maximum cable protection from dust and debris."),
        galleryItem("VT00 â€” Ventilated Type", metalloImage("Cable_Tray_Cover_VT00.png"), "Perforated cover with ventilation slots for heat dissipation while protecting cables."),
        galleryItem("LT00 â€” Louvre Type", trayImage("tray-cover.png"), "Angled louvre slots for directional airflow and water drainage."),
        galleryItem("DF00 â€” Dome Faced", metalloImage("Cable_Tray_Cover_DF00.png"), "Raised dome profile for additional cable clearance and structural stiffness."),
        galleryItem("DS00 â€” Dome Faced with Spacing", metalloImage("Cable_Tray_Cover_DS00.png"), "Dome profile with integrated spacing for clip-on mounting without fasteners."),
      ],
    ),
    accessoryGallery: accessoryGallery(
      "Tray Cover Accessories",
      "Indiana Group provides matching cover accessories so the entire cable routing system stays protected at direction changes, branches, and transitions.",
      [
        accessoryItem("Bend Cover", ctcAccessoryImage("CTCA_Horizontal_Bend.png"), "Covers for horizontal and vertical bend fittings."),
        accessoryItem("Tee Cover", ctcAccessoryImage("CTCA_Horizontal_Tee.png"), "Covers for T-junction branching points."),
        accessoryItem("Cross Cover", ctcAccessoryImage("CTCA_Horizontal_Cross.png"), "Covers for four-way intersection fittings."),
        accessoryItem("Reducer Cover", ctcAccessoryImage("CTCA_Reducers.png"), "Covers for width-transition reducer fittings."),
        accessoryItem("Press Fit Cover (Embossed)", metalloImage("Press_Fit_Cover_(Embossed).png"), "Snap-on cover for embossed cable tray systems."),
      ],
    ),
  }),
  createTrayProduct({
    category: "Floor Trunking",
    subCategory: "Industrial Floor Duct",
    name: "Industrial Floor Trunking & Accessories",
    descriptionParagraphs: [
      "Metallo's industrial floor trunking program is based on the Indiana Group catalogue for floor-level cable routing installations where cables need to be run under floors or along floor surfaces with maximum protection and compartmentalized routing options.",
      "The Indiana catalogue uses an IB00 (inward bend with 15 mm flange) profile with widths from 100 mm to 600 mm, heights of 35 mm, 75 mm, and 100 mm, thickness from 1.5 mm to 3.0 mm, and optional longitudinal dividers for separating power and data cables within a single trunking run.",
    ],
    thumbnail: metalloImage("Industrial_Floor_Trunking.png"),
    technicalSpecifications: [
      spec("Raw Material", "MS (Mild Steel), pre-galvanized, stainless steel 304 & 316, aluminium", "diamond"),
      spec("Finish Of Product", "Hot-dip galvanized, powder coated, pickling & passivation, painted, self colour", "auto_awesome"),
      spec("Profile Type", "IB00 â€” Inward Bend (15 mm flange)", "build"),
      spec("Width Coverage", "100 mm to 600 mm", "swap_horiz"),
      spec("Height Coverage", "35 / 75 / 100 mm", "height"),
      spec("Thickness", "1.5 / 2.0 / 2.5 / 3.0 mm", "straighten"),
      spec("Length Coverage", "2500 / 3000 mm", "straighten"),
      spec("Configuration", "Available with longitudinal dividers for cable separation", "view_stream"),
    ],
    features: [
      "Floor-Level Cable Protection",
      "Compartmentalized Routing",
      "Optional Dividers",
      "Inward-Bend Flange Design",
      "Dust & Impact Protection",
      "Easy Floor Installation",
    ],
    rangeTables: [
      rangeTable(
        "Floor Trunking Product Range",
        ["Width", "Height", "Thickness", "Length"],
        [
          ["100", "35 / 75 / 100", "1.5 / 2.0 / 2.5", "2500 / 3000"],
          ["150", "35 / 75 / 100", "1.5 / 2.0 / 2.5", "2500 / 3000"],
          ["200", "35 / 75 / 100", "1.5 / 2.0 / 2.5", "2500 / 3000"],
          ["300", "35 / 75 / 100", "1.5 / 2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["400", "75 / 100", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["450", "75 / 100", "2.0 / 2.5 / 3.0", "2500 / 3000"],
          ["600", "75 / 100", "2.0 / 2.5 / 3.0", "2500 / 3000"],
        ],
        RANGE_NOTES_STANDARD,
      ),
    ],
    accessoryGallery: accessoryGallery(
      "Floor Trunking Accessories",
      "Indiana Group provides dedicated floor-compatible accessories for trunking systems, covering direction changes, branching, and divider integration.",
      [
        accessoryItem("Horizontal Bend (HB)", accessoryImage("PCTA_Horizontal_Bend_(Radial).png"), "Floor-compatible bend fittings at 90Â° and 45Â° angles."),
        accessoryItem("Floor Tee (RTEE)", accessoryImage("PCTA_Horizontal_Tee_(Radial).png"), "T-junction fitting for floor-level branching."),
        accessoryItem("Floor Cross (CR)", accessoryImage("PCTA_Horizontal_Cross_(Radial).png"), "Four-way floor crossing fitting."),
        accessoryItem("Reducer (REDC)", accessoryImage("PCTA_Reducer.png"), "Width transition fitting for floor trunking."),
        accessoryItem("Longitudinal Divider", metalloImage("Industrial_Floor_Trunking_With_Divider.png"), "Internal divider for separating power and data cables."),
        accessoryItem("Coupler Plate (STC)", accessoryImage("PCTA_Coupler_Plate.png"), "End-to-end section joining for floor trunking runs."),
      ],
    ),
  }),
  createTrayProduct({
    category: "Earthing",
    subCategory: "Earthing & Grounding Materials",
    name: "Earthing Material & Components",
    descriptionParagraphs: [
      "Metallo's earthing material program is based on the Indiana Group catalogue for the complete grounding and bonding scope that pairs with the cable tray infrastructure. The range covers GI wire, copper conductors, rigid and flexible conduits, earth electrodes, terminal lugs, flat bars, and bonding jumpers.",
      "These earthing components are catalogued alongside the cable management system so project teams can source the full installation scope â€” tray, accessories, support, finishing, and grounding â€” through a single coordinated supply chain rather than splitting earthing across a separate, disconnected inventory.",
    ],
    thumbnail: trayImage("earthing-material.png"),
    technicalSpecifications: [
      spec("Coverage", "GI wire, copper conductors, conduits, earth electrodes, lugs, flat bars, bonding jumpers", "category"),
      spec("Conductor Types", "GI wire and copper conductors in various gauges and configurations", "cable"),
      spec("Conduit Types", "Rigid and flexible conduits for cable protection", "route"),
      spec("Earth Electrodes", "Copper and CU solid rod electrodes for ground connections", "grounding"),
      spec("Terminal Lugs", "Various lug types for secure electrical terminations", "power"),
      spec("Standards", "IS 2629, ASTM A123, AS 4680, BS EN ISO 1461 for galvanizing", "verified"),
    ],
    features: [
      "Complete Grounding Scope",
      "GI Wire & Copper Conductors",
      "Rigid & Flexible Conduits",
      "Earth Electrodes",
      "Terminal Lugs & Connectors",
      "Bonding Jumpers & Flat Bars",
    ],
    typeGallery: typeGallery(
      "Earthing Material Range",
      "The Indiana Group catalogue presents the earthing material family as a visual product grid covering wire, conduit, conductor, and electrode categories.",
      [
        galleryItem("GI Wire", trayImage("earthing-material.png"), "Galvanized iron wire for earthing connections and bonding."),
        galleryItem("Flexible Conduit", trayImage("earthing-material.png"), "Flexible protective conduit for cable routing in tight spaces."),
        galleryItem("Rigid Conduit", trayImage("earthing-material.png"), "Steel rigid conduit for fixed cable protection runs."),
        galleryItem("Copper Conductor", trayImage("earthing-material.png"), "Copper conductor cables for high-conductivity grounding."),
        galleryItem("Earth Electrode (CU Rod)", trayImage("earthing-material.png"), "Copper solid rod electrode for ground connections."),
        galleryItem("Terminal Lugs", trayImage("earthing-material.png"), "Various terminal lug types for secure electrical terminations."),
        galleryItem("Flat Bars", trayImage("earthing-material.png"), "Flat copper or GI bars for busbar and bonding applications."),
        galleryItem("Bonding Jumpers", trayImage("earthing-material.png"), "Pre-formed jumpers for bonding cable tray sections."),
      ],
    ),
  }),
];
