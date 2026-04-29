import type { ConfigurableProductPageData } from "@/components/product";

export const FABRICATED_STRUCTURES_PAGE_DATA: ConfigurableProductPageData = {
  hero: {
    backgroundImage: "/fabricated-structures/fabricated-structures.png",
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
        "Supertech describes its pre-engineered metal building systems as custom-designed steel buildings optimized for space efficiency, strength, expandability, and harsh-climate performance across industrial and commercial projects.",
      image: "/fabricated-structures/pre-engineered-building.png",
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
        "Framed as a full building-system package instead of a single steel item.",
        "Designed for maximum usable space with maintenance-friendly exteriors.",
        "Intended for customers who want a faster, expandable steel-building route.",
      ],
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/pre-engineered-metal-building-system/",
    },
    {
      id: "primary-framing-system",
      category: "Building Systems",
      subCategory: "Primary Frame",
      name: "Primary Framing System",
      description:
        "Supertech positions primary framing as the structural backbone that transfers building loads to the foundation through endwall frames, rigid or bearing frames, wind bracing, and crane-supporting brackets.",
      image: "/fabricated-structures/primary-framing.png",
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
        "Keeps the page grounded in actual frame-system terminology from the source material.",
      ],
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/primary-framing-system/",
    },
    {
      id: "secondary-framing-system",
      category: "Building Systems",
      subCategory: "Secondary Frame",
      name: "Secondary Framing System",
      description:
        "Supertech describes secondary framing as the supporting system of roof purlins, wall girts, eave struts, and clips that carries sheeting loads and distributes them back into the primary frame.",
      image: "/fabricated-structures/secondary-framing.png",
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
        "Connects directly to the cold-formed section offering elsewhere on the page.",
      ],
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/secondary-framing-system/",
    },
    {
      id: "cranes-mezzanines",
      category: "Building Systems",
      subCategory: "Integrated Floors",
      name: "Cranes & Mezzanines",
      description:
        "Supertech's cranes and mezzanines offering combines in-building crane support systems with mezzanine framing built from beams, joists, decking panels, and bolted clip connections for industrial workspaces.",
      image: "/fabricated-structures/cranes-mezzanines.png",
      applications: ["Warehouse Floors", "Industrial Platforms", "Material Handling Bays", "Production Buildings"],
      badges: [{ label: "Integrated Floors", tone: "accent" }],
      specifications: [
        {
          label: "Crane Systems",
          value:
            "Used for overhead, overhung or under-slung, and monorail crane arrangements as called out by the source page.",
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
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/cranes-mezzanines/",
    },
    {
      id: "cold-form-section",
      category: "Envelope & Decking",
      subCategory: "Cold-Formed Sections",
      name: "Cold Form Section",
      description:
        "Supertech presents cold-formed sections as a lighter and more economical alternative to hot-rolled members, centered on Z and C section purlins supplied in required lengths with pre-punched holes.",
      image: "/fabricated-structures/cold-form-section.png",
      applications: ["Purlins", "Roof Support", "Wall Support", "Light Structural Systems"],
      badges: [{ label: "Z & C Profiles", tone: "accent" }],
      specifications: [
        {
          label: "Section Types",
          value: "Z section purlins and C section purlins.",
          icon: "category",
        },
        {
          label: "Stated Savings",
          value:
            "Up to 40-50% weight saving and 25-30% cost saving versus hot-rolled sections, per the source page.",
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
          value: "Grade of steel noted as 345 MPa on the source page.",
          icon: "verified",
        },
      ],
      highlights: [
        "Fits projects optimizing secondary steel weight and speed of erection.",
        "Bridges framing efficiency with more detailed profile-driven design.",
        "Adds the cold-formed structural layer that often sits between frame and sheeting.",
      ],
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/cold-form-section/",
    },
    {
      id: "metal-roofing-cladding",
      category: "Envelope & Decking",
      subCategory: "Roofing & Cladding",
      name: "Metal Roofing & Cladding Solution",
      description:
        "Supertech frames this range around profiled roofing and cladding sheets, including Hi-Rib panels with clip-on interlocked ribs, self-drilling fasteners, weatherproof side laps, and managed capillary runoff.",
      image: "/fabricated-structures/metal-roofing-cladding.png",
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
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/metal-roofing-cladding-solution/",
    },
    {
      id: "decking",
      category: "Envelope & Decking",
      subCategory: "Floor & Roof Decks",
      name: "Decking",
      description:
        "Supertech describes steel decking as a lightweight roofing, flooring, ceiling, and cladding solution that also acts as positive bending reinforcement in composite slabs and a working platform during construction.",
      image: "/fabricated-structures/decking.png",
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
      sourceLabel: "Supertech India",
      sourceUrl: "https://supertechindia.com/decking/",
    },
    {
      id: "specialised-structural-steel-fabrication",
      category: "Specialised Fabrication",
      subCategory: "Workshop Fabrication",
      name: "Specialised Structural Steel Fabrication",
      description:
        "Supertech presents specialised structural steel fabrication as customized workshop-built hot-rolled and welded structures for power plants, metro and rapid rail, stadiums, petrochemical facilities, high-rise buildings, airports, and port projects.",
      image: "/fabricated-structures/specialised-structural-fabrication.png",
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
        "Pushes the page beyond standard PEB systems into complex project fabrication.",
        "Fits customers balancing structural performance, speed, and presentation.",
      ],
      sourceLabel: "Supertech India",
      sourceUrl:
        "https://supertechindia.com/specialised-structural-steel-fabrication/",
    },
  ],
  catalogCtaLabel: "Download Fabricated Structures Catalog",
  catalogCtaIcon: "download",
  qaBanner: {
    sectionLabel: "Execution Standards",
    title: "Configured for Steel Buildings, Frames, and Envelope Systems",
    items: [
      {
        icon: "schema",
        title: "System-Based Design",
        desc: "The source material breaks the offer into buildings, framing, envelope, and fabrication systems rather than isolated products.",
      },
      {
        icon: "savings",
        title: "Weight & Time Efficiency",
        desc: "Cold-formed profiles, decking, and pre-engineered systems are framed around reduced weight, faster erection, and lower site effort.",
      },
      {
        icon: "roofing",
        title: "Envelope Integration",
        desc: "Roofing, cladding, purlins, and decking can be specified as connected layers instead of fragmented procurement lots.",
      },
      {
        icon: "construction",
        title: "Workshop Fabrication",
        desc: "Specialised structural steel fabrication is positioned as a higher-control alternative to conventional on-site fabrication.",
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
