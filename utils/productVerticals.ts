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
    showcaseImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZmT_s2B9dm9-HBV823d6vMwXy9qsBMMQ3nGKJIKyS5fwDMVAFQfixx0y-sygCvmnG896hpbtiT4P0lI2r8wkCf2rvSOk6ngn7p0c0saTngyDwhMAJzTZ-oEfN69XK8hppDwDyF7vllPZmXYfvr1eo7o9qkdYxatryE1B-qzerwAsDc1GC0HLRmt55olsDJKVaIX-cEz-tNZCRpo8bR3tbk6Pq2kql-1SxTkbOZSj2TmdmFqPcWsv5yo3-v2lBhvJGy391-zatHuy8",
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
    showcaseImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw",
    showcasePoints: [
      "LT & HT Power Cables",
      "Specialty Industrial Cables",
      "Control & Instrumentation",
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
    showcaseImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop",
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
    showcaseImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTKZDAZ60J7WpIg7ouo1Jps0Oz0Z5zjXbRSoOqY_dxldAvPOLnuIUxrDX5Fvtqqniw2pTiHM96nzYOy-r3pOyo1SG_bOt73KZFtrtYOt9Slreqz4wWZwqgFRd9pyq0dPWIb7fWhnh6N7vCiGR1GSv7tRoRojZXrnDF3BfAKEhiZsLELM-MBsNpyeU1nETZOpedd5Wabsgw3aPWytCDpfy0mpocjz0e2gtvGrGOWLB-oMLv7ADKp5sobK1tYD-cMdvEENRr22ZwSSJ-",
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
    showcaseImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU",
    showcasePoints: [
      "Industrial Motors",
      "Safety Standards",
      "Global Sourcing",
    ],
  },
  {
    key: "pipes",
    name: "Pipes",
    path: "/products/pipes",
    icon: "plumbing",
    showInHeader: true,
    showInShowcase: true,
    showcaseTitle: "Metallo Pipes",
    showcaseSubtitle: "Process Flow Systems",
    showcaseImage: "/pipes/shop-fabricated-piping.jpg",
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
    showcaseImage: "/fabricated-structures/fabricated-structures.png",
    showcasePoints: [
      "PEB & Framing Systems",
      "Roofing, Cladding & Decking",
      "Workshop Structural Fabrication",
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
