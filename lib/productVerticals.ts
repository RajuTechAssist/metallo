import { SITE_IMAGES } from "@/config/images";

export interface ProductVerticalConfig {
  key: string;
  name: string;
  path: string;
  icon: string;
  showInHeader: boolean;
  showInShowcase: boolean;
  showcaseTitle?: string;
  showcaseSubtitle?: string;
  showcaseImage?: string;
  showcasePoints?: string[];
}

export const PRODUCT_VERTICALS: ProductVerticalConfig[] = [
  {
    key: "steel",
    name: "Steel",
    path: "/products/steel",
    icon: "foundation",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Metallo Steel",
    showcaseSubtitle: "Structural Foundation",
    showcaseImage: SITE_IMAGES.home.verticals.steel,
    showcasePoints: [
      "IS:2062 & ASTM Compliant",
      "Custom Fabricated Spools",
      "100% PMI Batch Tested",
    ],
  },
  {
    key: "cables",
    name: "Wire & Cables",
    path: "/products/wire-cables",
    icon: "electrical_services",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Wire & Cable",
    showcaseSubtitle: "Powering the Grid",
    showcaseImage: SITE_IMAGES.home.verticals.wireCable,
    showcasePoints: [
      "LT Power & Control",
      "HT Power Cable",
      "Industrial Selection Support",
    ],
  },
  {
    key: "cabletray",
    name: "Cable Tray",
    path: "/products/cable-tray",
    icon: "grid_view",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Cable Trays",
    showcaseSubtitle: "Cable Management",
    showcaseImage: SITE_IMAGES.home.verticals.cableTrays,
    showcasePoints: [
      "Ladder & Perforated Trays",
      "GI / SS / Aluminium",
      "Custom Sizes & Coatings",
    ],
  },
  {
    key: "welding",
    name: "Welding & Allied",
    path: "/products/welding",
    icon: "whatshot",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Welding Consumables",
    showcaseSubtitle: "Critical Joints",
    showcaseImage: SITE_IMAGES.home.verticals.weldingConsumables,
    showcasePoints: [
      "AWS & ASME Certified",
      "Standardized SOPs",
      "Flux-Cored & Solid Wires",
    ],
  },
  {
    key: "tools",
    name: "Power Tools",
    path: "/products/tools",
    icon: "construction",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Industrial Tools",
    showcaseSubtitle: "Heavy-Duty Execution",
    showcaseImage: SITE_IMAGES.home.verticals.powerTools,
    showcasePoints: [
      "Industrial Motors",
      "Safety Standards",
      "Global Sourcing",
    ],
  },
  {
    key: "processPiping",
    name: "Process Piping",
    path: "/products/process-piping",
    icon: "plumbing",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Metallo Process Piping",
    showcaseSubtitle: "Process Flow Systems",
    showcaseImage: SITE_IMAGES.home.verticals.processPiping,
    showcasePoints: [
      "Fabricated Piping Packages",
      "Modular Skids & Bends",
      "QC, Pilot Plants & Logistics",
    ],
  },
  {
    key: "fabricatedStructures",
    name: "Fabricated Structures",
    path: "/products/fabricated-structures",
    icon: "apartment",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Metallo Fabricated Structures",
    showcaseSubtitle: "Engineered Steel Systems",
    showcaseImage: SITE_IMAGES.home.verticals.fabricatedStructures,
    showcasePoints: [
      "PEB & Framing Systems",
      "Roofing, Cladding & Decking",
      "Workshop Structural Fabrication",
    ],
  },
  {
    key: "processEquipments",
    name: "Process Equipments",
    path: "/products/process-equipments",
    icon: "engineering",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Metallo Process Equipments",
    showcaseSubtitle: "Critical Process Solutions",
    showcaseImage: SITE_IMAGES.home.verticals.processEquipments,
    showcasePoints: [
      "High-Pressure Heat Exchangers",
      "Waste Heat Boilers & Drums",
      "Power Plant Heat Transfer",
    ],
  },
  // {
  //   key: "casting",
  //   name: "Die Casting",
  //   path: "/products/die-casting",
  //   icon: "precision_manufacturing",
  //   showInHeader: false,
  //   showInShowcase: true,
  //   showcaseTitle: "Precision Die Casting",
  //   showcaseSubtitle: "Micro-Tolerance",
  //   showcaseImage:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_",
  //   showcasePoints: [
  //     "Automotive & Aerospace",
  //     "CNC Integrated",
  //     "Rapid Scaling",
  //   ],
  // },
  // {
  //   key: "tech",
  //   name: "Tech Products",
  //   path: "/products/tech-products",
  //   icon: "memory",
  //   showInHeader: false,
  //   showInShowcase: true,
  //   showcaseTitle: "Tech Products",
  //   showcaseSubtitle: "Infrastructure OS",
  //   showcaseImage:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK",
  //   showcasePoints: [
  //     "Production Tracking",
  //     "BOM Procurement",
  //     "Digital QC Traceability",
  //   ],
  // },
];

export const HEADER_PRODUCT_VERTICALS = PRODUCT_VERTICALS.filter(
  (vertical) => vertical.showInHeader,
);

export const SHOWCASE_PRODUCT_VERTICALS = PRODUCT_VERTICALS.filter(
  (vertical) => vertical.showInShowcase,
);

export const PRODUCT_VERTICAL_BY_KEY = Object.fromEntries(
  PRODUCT_VERTICALS.map((vertical) => [vertical.key, vertical]),
) as Record<string, ProductVerticalConfig>;
