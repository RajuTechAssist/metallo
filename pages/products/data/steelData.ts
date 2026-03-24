import { STEEL_FASTENER_PRODUCTS } from "./steelFastenersBarsData";
import { STEEL_FLANGE_PRODUCTS } from "./steelFlangesData";
import { STEEL_PIPE_FITTING_PRODUCTS } from "./steelPipeFittingsData";
import { STEEL_PIPE_TUBE_PRODUCTS } from "./steelPipesTubesData";
import { STEEL_GASKET_PRODUCTS } from "./steelSealingGasketsData";
import { STEEL_SHEETS_PLATES_PRODUCTS } from "./steelSheetsPlatesData";
import type { SteelProduct } from "./steelTypes";

export type { SteelProduct } from "./steelTypes";

export const MATERIAL_GROUPS = [
  {
    key: "ss",
    label: "Stainless Steel (SS Pipe)",
    color: "bg-blue-500",
    ring: "ring-blue-500",
  },
  {
    key: "gi",
    label: "Galvanized (GI) Pipe",
    color: "bg-teal-500",
    ring: "ring-teal-500",
  },
  {
    key: "ms",
    label: "Carbon Steel / Mild Steel (MS)",
    color: "bg-amber-500",
    ring: "ring-amber-500",
  },
  {
    key: "special",
    label: "Specialty / Custom",
    color: "bg-violet-500",
    ring: "ring-violet-500",
  },
] as const;

export const MAT_LABEL: Record<string, string> = Object.fromEntries(
  MATERIAL_GROUPS.map((group) => [group.key, group.label]),
);

export const MAT_COLOR: Record<string, string> = Object.fromEntries(
  MATERIAL_GROUPS.map((group) => [group.key, group.color]),
);

export const MAT_ORDER = MATERIAL_GROUPS.map((group) => group.key);

export const STEEL_CORE_CERTIFICATIONS = [
  "IS",
  "BIS",
  "ISI Marked",
  "ASTM",
  "MTC EN",
] as const;

export const PRODUCTS: SteelProduct[] = [
  ...STEEL_PIPE_TUBE_PRODUCTS,
  ...STEEL_SHEETS_PLATES_PRODUCTS,
  ...STEEL_FLANGE_PRODUCTS,
  ...STEEL_PIPE_FITTING_PRODUCTS,
  ...STEEL_FASTENER_PRODUCTS,
  ...STEEL_GASKET_PRODUCTS,
];

export const CATEGORIES = [
  {
    key: "pipes",
    label: "Pipes & Tubes",
    icon: "plumbing",
    match: ["Pipes & Tubes"],
  },
  {
    key: "sheets",
    label: "Sheets & Plates",
    icon: "layers",
    match: ["Sheets & Plates"],
  },
  {
    key: "flanges",
    label: "Flanges",
    icon: "radio_button_checked",
    match: ["Flanges"],
  },
  {
    key: "fittings",
    label: "Pipe Fittings",
    icon: "hub",
    match: ["Pipe Fittings"],
  },
  {
    key: "fasteners",
    label: "Fasteners & Bars",
    icon: "hardware",
    match: ["Fasteners & Bars"],
  },
  {
    key: "gaskets",
    label: "Sealing & Gaskets",
    icon: "trip_origin",
    match: ["Sealing & Gaskets"],
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export const SPEC_FIELDS: { key: keyof SteelProduct; label: string }[] = [
  { key: "Grades", label: "Grades" },
  { key: "Standards", label: "Standards" },
  { key: "OD", label: "Size / Outer Diameter" },
  { key: "WallThickness", label: "Wall Thickness / Schedule" },
  { key: "Length", label: "Length" },
  { key: "Thickness", label: "Thickness" },
  { key: "EndFinish", label: "End Finish" },
  { key: "SurfaceFinish", label: "Surface Finish" },
  { key: "Pressure Class", label: "Pressure Class" },
  { key: "Type", label: "Type" },
  { key: "Material", label: "Material" },
  { key: "TensileStrength", label: "Tensile Strength" },
  { key: "YieldStrength", label: "Yield Strength" },
  { key: "Elongation", label: "Elongation" },
  { key: "Hardness", label: "Hardness" },
  { key: "Testing", label: "Testing & QC" },
];

export const QA_ITEMS = [
  {
    icon: "biotech",
    title: "100% PMI Testing",
    desc: "Positive Material Identification on every heat lot using XRF analyzers.",
  },
  {
    icon: "water_drop",
    title: "Hydrostatic Testing",
    desc: "Pressure-tested per ASTM standards to ensure zero-leak integrity.",
  },
  {
    icon: "radar",
    title: "NDT Inspection",
    desc: "Non-Destructive Testing - UT, RT, and Eddy Current per ASME Section V.",
  },
  {
    icon: "verified",
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System across all manufacturing facilities.",
  },
];
