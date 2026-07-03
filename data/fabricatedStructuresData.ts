import type { ConfigurableProductPageData } from "@/components/product";
import { SITE_IMAGES } from "@/config/images";

export const FABRICATED_STRUCTURES_PAGE_DATA: ConfigurableProductPageData = {
  hero: {
    backgroundImage: SITE_IMAGES.fabricatedStructures.hero,
    title: "Metallo Fabricated Structures",
    subtitle: "Engineered Steel Systems.",
    description:
      "Pre-engineered buildings, framing systems, cranes and mezzanines, cold-formed sections, roofing and cladding, decking, and specialised structural fabrication presented through a single product-driven steel structures page.",
    breadcrumbLabel: "Fabricated Structures",
  },
  categories: [
    {
      key: "building",
      label: "Building Systems",
      icon: "apartment",
      match: ["Building Systems"] as readonly string[],
    },
    {
      key: "envelope",
      label: "Envelope & Decking",
      icon: "roofing",
      match: ["Envelope & Decking"] as readonly string[],
    },
    {
      key: "specialised",
      label: "Specialised Fabrication",
      icon: "precision_manufacturing",
      match: ["Specialised Fabrication"] as readonly string[],
    },
  ] as const,
  defaultCategoryKey: "building",
  verticalKey: "fabricatedStructures",
  certBadge: "PEB / Framing / Cladding",
  items: [
    {
      id: "pre-engineered-building",
      category: "Building Systems",
      subCategory: "PEB Solution",
      name: "Pre Engineered Metal Building System",
      description:
        "Metallo's pre-engineered metal building systems are custom-designed steel buildings optimized for space efficiency, strength, expandability, and harsh-climate performance across industrial and commercial projects.",
      image: SITE_IMAGES.fabricatedStructures.products.preEngineeredBuilding,
      applications: ["Factories", "Warehouses", "Workshops", "Hangars & Cold Storage"],
      badges: [{ label: "Integrated Package", tone: "accent" }],
      specifications: [
        {
          label: "Included Systems",
          value:
            "Primary and secondary framing, linear panels, crane beams and rails, wall systems, roof systems, flashings, and connections.",
          icon: "inventory_2",
        },
        {
          label: "Optional Integration",
          value:
            "Thermal or acoustic insulation, sealants, mezzanine floors, and integrated accessories.",
          icon: "tune",
        },
        {
          label: "Project Use",
          value:
            "Factories, warehouses, workshops, aircraft hangars, cold storages, stadiums, supermarkets, and other high-rise applications.",
          icon: "business",
        },
      ],
      highlights: [
        "Delivered as a full building-system package instead of a single steel item.",
        "Designed for maximum usable space with maintenance-friendly exteriors.",
        "Ideal for customers who want a faster, expandable steel-building route.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "primary-framing-system",
      category: "Building Systems",
      subCategory: "Primary Frame",
      name: "Primary Framing System",
      description:
        "The primary framing system serves as the structural backbone that transfers building loads to the foundation through endwall frames, rigid or bearing frames, wind bracing, and crane-supporting brackets.",
      image: SITE_IMAGES.fabricatedStructures.products.primaryFraming,
      applications: ["Industrial Buildings", "Load-Bearing Frames", "Crane Buildings", "Large Bay Structures"],
      badges: [{ label: "Load Transfer", tone: "accent" }],
      specifications: [
        {
          label: "Structural Role",
          value:
            "Primary elements transfer building loads to the foundation through main frames and endwall frames.",
          icon: "foundation",
        },
        {
          label: "Bracing System",
          value:
            "Cross-bracing is arranged in side walls and roof bays based on load type and building length.",
          icon: "share_location",
        },
        {
          label: "Crane Integration",
          value:
            "Crane brackets are attached to columns that carry the load of crane beams.",
          icon: "construction",
        },
        {
          label: "Planning Measures",
          value:
            "Building width, building length, end bay length, and interior bay length are treated as design drivers.",
          icon: "straighten",
        },
      ],
      highlights: [
        "Useful where frame planning, bracing, and crane loads must work together.",
        "Fits steel buildings that need engineered geometry before cladding and accessories are layered on.",
        "Grounded in industry-standard frame-system terminology and design practice.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "secondary-framing-system",
      category: "Building Systems",
      subCategory: "Secondary Frame",
      name: "Secondary Framing System",
      description:
        "The secondary framing system encompasses roof purlins, wall girts, eave struts, and clips that carry sheeting loads and distribute them back into the primary frame.",
      image: SITE_IMAGES.fabricatedStructures.products.secondaryFraming,
      applications: ["Roof Systems", "Wall Systems", "Industrial Buildings", "Sheeting Support"],
      badges: [{ label: "Purlin & Girt", tone: "neutral" }],
      specifications: [
        {
          label: "System Components",
          value: "Roof purlins, wall girts, eave struts, clips, and related cold-formed members.",
          icon: "grid_view",
        },
        {
          label: "Profile Logic",
          value:
            "C and Z cold-formed sections with variable depth and thickness are used based on project requirements.",
          icon: "view_column",
        },
        {
          label: "Function",
          value:
            "Supports roof and wall sheeting while helping transfer these loads back to the primary framing system.",
          icon: "roofing",
        },
      ],
      highlights: [
        "Important when a project needs more than a headline steel-frame description.",
        "Brings roof and wall support members into the same product story as main frames.",
        "Connects directly to the cold-formed section offering elsewhere in the range.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "cranes-mezzanines",
      category: "Building Systems",
      subCategory: "Integrated Floors",
      name: "Cranes & Mezzanines",
      description:
        "Metallo's cranes and mezzanines offering combines in-building crane support systems with mezzanine framing built from beams, joists, decking panels, and bolted clip connections for industrial workspaces.",
      image: SITE_IMAGES.fabricatedStructures.products.cranesMezzanines,
      applications: ["Warehouse Floors", "Industrial Platforms", "Material Handling Bays", "Production Buildings"],
      badges: [{ label: "Integrated Floors", tone: "accent" }],
      specifications: [
        {
          label: "Crane Systems",
          value:
            "Overhead, overhung or under-slung, and monorail crane arrangements to suit specific project requirements.",
          icon: "forklift",
        },
        {
          label: "Mezzanine Build-Up",
          value:
            "Beams connect to columns with clips and high-strength bolts, joists sit between beams, and deck panels are screwed in place.",
          icon: "view_agenda",
        },
        {
          label: "Execution Notes",
          value:
            "Openings are framed before reinforcement and concrete should be evenly spread to avoid local deck or joist deflection.",
          icon: "checklist",
        },
      ],
      highlights: [
        "Useful for projects that need vertical expansion inside the building envelope.",
        "Connects structure, floor system, and material-handling requirements in one package.",
        "Supports warehouse, process, and factory layouts where clear space and utility coexist.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "cold-form-section",
      category: "Envelope & Decking",
      subCategory: "Cold-Formed Sections",
      name: "Cold Form Section",
      description:
        "Cold-formed sections offer a lighter and more economical alternative to hot-rolled members, centred on Z and C section purlins supplied in required lengths with pre-punched holes.",
      image: SITE_IMAGES.fabricatedStructures.products.coldFormSection,
      applications: ["Purlins", "Roof Support", "Wall Support", "Light Structural Systems"],
      badges: [{ label: "Z & C Profiles", tone: "accent" }],
      specifications: [
        {
          label: "Section Types",
          value: "Z section purlins and C section purlins.",
          icon: "category",
        },
        {
          label: "Weight Savings",
          value:
            "Up to 40–50% weight saving and 25–30% cost saving versus hot-rolled sections.",
          icon: "savings",
        },
        {
          label: "Supply Format",
          value:
            "Required lengths with pre-punched holes to reduce fabrication, erection time, and material wastage.",
          icon: "content_cut",
        },
        {
          label: "Material Grade",
          value: "Steel grade of 345 MPa.",
          icon: "verified",
        },
      ],
      highlights: [
        "Fits projects optimizing secondary steel weight and speed of erection.",
        "Bridges framing efficiency with more detailed profile-driven design.",
        "Adds the cold-formed structural layer that often sits between frame and sheeting.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "metal-roofing-cladding",
      category: "Envelope & Decking",
      subCategory: "Roofing & Cladding",
      name: "Metal Roofing & Cladding Solution",
      description:
        "Metallo's roofing and cladding range features profiled sheets and Hi-Rib panels with clip-on interlocked ribs, self-drilling fasteners, weatherproof side laps, and managed capillary runoff.",
      image: SITE_IMAGES.fabricatedStructures.products.metalRoofingCladding,
      applications: ["Industrial Roofing", "Commercial Cladding", "Domestic Roofing", "Wall Envelopes"],
      badges: [{ label: "Weatherproof Rib", tone: "accent" }],
      specifications: [
        {
          label: "System Types",
          value: "Profile sheets and structurally engineered Hi-Rib roofing and cladding panels.",
          icon: "roofing",
        },
        {
          label: "Fixing Method",
          value:
            "Single-length panels fixed with self-drilling fasteners and interlocked clip-on ribs.",
          icon: "build",
        },
        {
          label: "Envelope Performance",
          value:
            "Weatherproof side laps with capillary moisture trapped and dispersed through runoff.",
          icon: "water_drop",
        },
      ],
      highlights: [
        "Useful where the steel package must continue through the building envelope.",
        "Combines appearance, weather performance, and fast installation logic.",
        "Pairs naturally with cold-formed supports and decking systems.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "decking",
      category: "Envelope & Decking",
      subCategory: "Floor & Roof Decks",
      name: "Decking",
      description:
        "Steel decking serves as a lightweight roofing, flooring, ceiling, and cladding solution that also acts as positive bending reinforcement in composite slabs and a working platform during construction.",
      image: SITE_IMAGES.fabricatedStructures.products.decking,
      applications: ["High-Rise Buildings", "Commercial Buildings", "Power Plant Buildings", "Mezzanine Floors"],
      badges: [{ label: "Composite Slab", tone: "accent" }],
      specifications: [
        {
          label: "Profile Options",
          value: "Decking sheets in 44 mm, 52 mm, and 75 mm depth formats.",
          icon: "view_week",
        },
        {
          label: "Dimensional Range",
          value: "Lengths up to 15 m and thickness from 0.63 mm to 1.6 mm.",
          icon: "straighten",
        },
        {
          label: "Construction Benefit",
          value: "No separate slab formwork required and reduced overall construction time.",
          icon: "speed",
        },
      ],
      highlights: [
        "Useful for customers who need the structure and slab interface to be designed together.",
        "Supports mezzanine, floor, and roof applications from the same product family.",
        "Fits fast-track steel buildings where site productivity matters.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "specialised-structural-steel-fabrication",
      category: "Specialised Fabrication",
      subCategory: "Workshop Fabrication",
      name: "Specialised Structural Steel Fabrication",
      description:
        "Metallo's specialised structural steel fabrication delivers customized workshop-built hot-rolled and welded structures for power plants, metro and rapid rail, stadiums, petrochemical facilities, high-rise buildings, airports, and port projects.",
      image: SITE_IMAGES.fabricatedStructures.products.specialisedStructuralFabrication,
      applications: ["Power Plants", "Metro & Rapid Rail", "High-Rise Buildings", "Airports & Ports"],
      badges: [{ label: "Workshop Built", tone: "accent" }],
      specifications: [
        {
          label: "Fabrication Type",
          value: "Customized workshop fabricated hot-rolled and welded structures.",
          icon: "precision_manufacturing",
        },
        {
          label: "Sector Reach",
          value:
            "Power, rail, stadiums, oil and gas, petrochemicals, high-rise, airports, ports, and specialised structures.",
          icon: "travel_explore",
        },
        {
          label: "Workshop Advantage",
          value:
            "Improved finish quality, less wastage, faster timelines, and lower labour intensity than on-site fabrication.",
          icon: "factory",
        },
      ],
      highlights: [
        "Useful for non-standard or architecturally expressive steel packages.",
        "Goes beyond standard PEB systems into complex project fabrication.",
        "Fits customers balancing structural performance, speed, and presentation.",
      ],
      sourceLabel: "Metallo",
    },
  ],
  catalogCtaLabel: "Download Fabricated Structures Catalog",
  catalogCtaIcon: "download",
  catalogCtaHref: "https://1urnlf5q52zhr3wc.public.blob.vercel-storage.com/Metallo%20Steels%20Catalogue-mmRto6JCHzaghFxfZ1ueyUdsV9USmh.pdf",
  catalogCtaDisabled: true,
  qaBanner: {
    sectionLabel: "Execution Standards",
    title: "Configured for Steel Buildings, Frames, and Envelope Systems",
    items: [
      {
        icon: "schema",
        title: "System-Based Design",
        desc: "The offering is structured around buildings, framing, envelope, and fabrication systems rather than isolated products.",
      },
      {
        icon: "savings",
        title: "Weight & Time Efficiency",
        desc: "Cold-formed profiles, decking, and pre-engineered systems are designed around reduced weight, faster erection, and lower site effort.",
      },
      {
        icon: "roofing",
        title: "Envelope Integration",
        desc: "Roofing, cladding, purlins, and decking can be specified as connected layers instead of fragmented procurement lots.",
      },
      {
        icon: "construction",
        title: "Workshop Fabrication",
        desc: "Specialised structural steel fabrication provides higher-control conditions compared to conventional on-site fabrication.",
      },
    ],
  },
  cta: {
    title: "Planning a Steel Building or Fabricated Structure?",
    description:
      "Share your concept, span data, or BOQ and we can shape the right mix of PEB systems, framing, roofing, decking, and customised structural fabrication for the project.",
    ctaLabel: "Request Structural Support",
    ctaIcon: "assignment",
  },
};
