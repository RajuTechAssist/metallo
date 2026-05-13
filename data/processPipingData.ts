import type { ConfigurableProductPageData } from "@/components/product";
import { SITE_IMAGES } from "@/config/images";

export const PROCESS_PIPING_PAGE_DATA: ConfigurableProductPageData = {
  hero: {
    backgroundImage: SITE_IMAGES.processPiping.hero,
    title: "Pipes & Piping Solutions",
    subtitle: "Built for Critical Flow.",
    description:
      "Process piping, modular skids, induction bends, heavy fabrication, pilot plants, and delivery support assembled into one source-driven offering for power, oil and gas, petrochemical, and industrial projects.",
    breadcrumbLabel: "Process Piping",
  },
  categories: [
    {
      key: "piping",
      label: "Piping Solutions",
      icon: "plumbing",
      match: ["Piping Solutions"] as readonly string[],
    },
    {
      key: "engineering",
      label: "Engineering & Pilot",
      icon: "engineering",
      match: ["Engineering & Pilot"] as readonly string[],
    },
    {
      key: "quality",
      label: "Quality & Delivery",
      icon: "verified",
      match: ["Quality & Delivery"] as readonly string[],
    },
  ] as const,
  defaultCategoryKey: "piping",
  verticalKey: "processPiping",
  certBadge: "Engineering / QC / Delivery",
  items: [
    {
      id: "shop-fabricated-piping",
      category: "Piping Solutions",
      subCategory: "Process Piping",
      name: "Shop Fabricated Piping",
      description:
        "A comprehensive process-piping package covering engineering, cutting and beveling, robotic and automatic welding, radiography, PWHT, hydro testing, passivation, blasting, and painting for complex industrial systems.",
      image: SITE_IMAGES.processPiping.products.shopFabricatedPiping,
      applications: ["Power Projects", "Process Plants", "Oil & Gas", "Alloy Service Lines"],
      badges: [{ label: "Robotic Welding", tone: "accent" }],
      specifications: [
        {
          label: "Service Scope",
          value:
            "Pre-bid, basic, detailed, and support engineering with prefabrication and final finishing.",
          icon: "design_services",
        },
        {
          label: "Fabrication Stack",
          value:
            "CNC cutting and beveling, semi-automatic and robotic welding, radiography, PWHT, hydro testing, pickling, passivation, blasting, and painting.",
          icon: "precision_manufacturing",
        },
        {
          label: "Material Capability",
          value:
            "Carbon steel, stainless steel, super duplex, alloy steel, inconel, and hastelloy.",
          icon: "layers",
        },
        {
          label: "Manufacturing Footprint",
          value:
            "Multiple manufacturing facilities across Gurugram, Gujarat, and Maharashtra.",
          icon: "factory",
        },
      ],
      highlights: [
        "Blends engineering and shop fabrication into one delivery workflow.",
        "Automated and robotic welding ensures repeatability at scale.",
        "Built for high-mix metallurgy where conventional shops struggle.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "skid-modular-piping",
      category: "Piping Solutions",
      subCategory: "Modular Skids",
      name: "Skid & Modular Piping",
      description:
        "Advanced pipe-rack and processing structures delivered as modular skids, designed for petrochemical, natural gas, and energy projects where safer installation, faster commissioning, and scalable layouts matter.",
      image: SITE_IMAGES.processPiping.products.skidModularPiping,
      applications: ["Petrochemicals", "Natural Gas", "Energy Projects", "Process Modules"],
      badges: [{ label: "Fast-Track Modules", tone: "accent" }],
      specifications: [
        {
          label: "Primary Use",
          value: "Pipe racks and processing structures delivered as modular skids.",
          icon: "view_in_ar",
        },
        {
          label: "Project Benefits",
          value:
            "Safer installation, quicker commissioning, improved material efficiency, and scalable design.",
          icon: "bolt",
        },
        {
          label: "Target Sectors",
          value: "Petrochemicals, natural gas infrastructure, and energy process systems.",
          icon: "energy_program_saving",
        },
      ],
      highlights: [
        "Moves site work into controlled fabrication environments.",
        "Reduces project disruption by shipping larger preassembled systems.",
        "Fits projects where predictable startup timelines are critical.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "induction-bending",
      category: "Piping Solutions",
      subCategory: "High-Frequency Bends",
      name: "High-Frequency Induction Bending",
      description:
        "Weld-less pipe spools and bends manufactured through high-frequency induction heating, covering seamless and LSAW bends in carbon, alloy, stainless, super duplex, and incoloy grades for demanding service conditions.",
      image: SITE_IMAGES.processPiping.products.inductionBending,
      applications: [
        "Thermal & Nuclear Power",
        "Oil & Gas",
        "Petrochemical Refineries",
        "Desalination & Cement",
      ],
      badges: [{ label: "High-Frequency", tone: "accent" }],
      specifications: [
        {
          label: "Product Range",
          value: "Seamless and LSAW induction bends made to project-specific angles.",
          icon: "radio_button_checked",
        },
        {
          label: "Material Grades",
          value:
            "Carbon steel, alloy steel, austenitic steel, stainless steel, super duplex, and incoloy.",
          icon: "category",
        },
        {
          label: "Specialty Capability",
          value: "P91 / P92 air-quench induction bends and stainless induction bending.",
          icon: "science",
        },
      ],
      highlights: [
        "Uses localized induction heat to form large-radius bends without conventional weld buildup.",
        "Enables higher-temperature and higher-alloy piping packages.",
        "Fits critical sectors where geometry and metallurgy both matter.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "heavy-fabrication",
      category: "Piping Solutions",
      subCategory: "Large-Diameter Fabrication",
      name: "Facility for Heavy Fabrication",
      description:
        "Metallo's heavy fabrication facility is dedicated to renewable-power and heavy piping work, producing wind turbine towers, industrial stacks, pressure vessels, steel fabrication, and LSAW pipe structures.",
      image: SITE_IMAGES.processPiping.products.heavyFabrication,
      applications: ["Renewable Power", "Industrial Stacks", "Pressure Equipment", "Large Pipe Structures"],
      badges: [{ label: "Large Diameter", tone: "accent" }],
      specifications: [
        {
          label: "Facility Area",
          value: "Approx. 88,429.61 square meters of dedicated fabrication space.",
          icon: "warehouse",
        },
        {
          label: "Manufacturing Range",
          value: "18 in to 200 in diameter, up to 60 mm thickness in carbon, stainless, and alloy steel.",
          icon: "straighten",
        },
        {
          label: "Output Mix",
          value: "Wind turbine towers, industrial stacks, pressure vessels, structural fabrication, and LSAW pipes.",
          icon: "apartment",
        },
      ],
      highlights: [
        "Extends capabilities from small fittings into very large fabricated sections.",
        "Supports renewable and process-industry structures with thick-wall fabrication.",
        "Creates a bridge between piping packages and associated heavy steel assemblies.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "industrial-pipe-fittings",
      category: "Piping Solutions",
      subCategory: "Fittings",
      name: "Industrial Pipe Fittings",
      description:
        "Industrial fittings for internal pipe spool fabrication and OEM supply, including elbows, tees, end caps, reducers, couplings, bends, plugs, and stub ends along with custom Y-pieces and long U-bends.",
      image: SITE_IMAGES.processPiping.products.pipeFittings,
      applications: ["Pipe Spools", "OEM Supply", "Power Projects", "Oil & Gas"],
      badges: [{ label: "OEM Supply", tone: "neutral" }],
      specifications: [
        {
          label: "Type of Fittings",
          value: "Elbows, tees, end caps, reducers, couplings, bends, plugs, and stub ends.",
          icon: "hub",
        },
        {
          label: "Special Fabrication",
          value: "Custom Y-pieces and long U-bends for power and hydrocarbon service lines.",
          icon: "device_hub",
        },
        {
          label: "Indicative Size Range",
          value: "2 in to 60 in and 2.77 to 140 mm wall thickness depending on fitting type.",
          icon: "swap_horiz",
        },
      ],
      highlights: [
        "Combines standard fitting supply with more specialized formed geometry.",
        "Supports both direct sale and integrated spool-building workflows.",
        "Connects small components to larger project fabrication packages.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "engineering-services",
      category: "Engineering & Pilot",
      subCategory: "Design Support",
      name: "Engineering Services",
      description:
        "Metallo's engineering services run in parallel with fabrication, covering pipe sizing, pressure-drop calculations, 3D modelling, stress analysis, support engineering, isometrics, layout engineering, spooling, and statutory documentation support.",
      image: SITE_IMAGES.processPiping.products.engineeringServices,
      applications: ["3D Plant Models", "Stress Analysis", "Routing Layouts", "Bid Support"],
      badges: [{ label: "3D Modelling", tone: "accent" }],
      specifications: [
        {
          label: "Service Families",
          value:
            "Basic, design, detailed, pre-bid, layout, as-built, skid pipe, and material engineering.",
          icon: "schema",
        },
        {
          label: "Core Outputs",
          value:
            "Pipe sizing, stress analysis, support detailing, isometrics, pipe spooling, and design calculations.",
          icon: "architecture",
        },
        {
          label: "Commercial Support",
          value:
            "Tonnage estimates, pressure-drop checks, and routing studies for competitive bids and execution planning.",
          icon: "calculate",
        },
      ],
      highlights: [
        "Useful when projects need design help before fabrication release.",
        "Connects engineering models to downstream spool and support packages.",
        "Improves constructability when space, loads, and maintenance access are tight.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "pilot-plant",
      category: "Engineering & Pilot",
      subCategory: "Pilot Plant Solutions",
      name: "Pilot Plant",
      description:
        "Metallo delivers pilot plants as a turnkey solution spanning concept development, 3D modelling, process simulation, control engineering, fabrication, construction, installation, and commissioning for innovation-led process industries.",
      image: SITE_IMAGES.processPiping.products.pilotPlant,
      applications: ["Green Chemistry", "Renewable Energy", "Specialty Chemicals", "Process R&D"],
      badges: [{ label: "Concept to Commissioning", tone: "accent" }],
      specifications: [
        {
          label: "Delivery Scope",
          value:
            "Conceptualisation, modelling, simulation, control engineering, fabrication, installation, and commissioning.",
          icon: "settings_suggest",
        },
        {
          label: "Plant Format",
          value: "Customized, cost-effective, and scalable skid-based or modular pilot plants.",
          icon: "view_in_ar",
        },
        {
          label: "Demand Drivers",
          value:
            "Advanced manufacturing, green chemistry, renewable energy, and pilot-scale innovation programs.",
          icon: "biotech",
        },
      ],
      highlights: [
        "Goes beyond pipe components into integrated process systems.",
        "Combines Metallo's piping and systems-integration expertise with R&D-scale builds.",
        "Useful for customers validating processes before full-scale capex.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "quality-control",
      category: "Quality & Delivery",
      subCategory: "Quality Systems",
      name: "Quality Control Testing and Certifications",
      description:
        "Metallo operates a multilevel quality-control stack that starts with incoming materials and continues through process-stage checks, internal audits, ERP-based traceability, and certification-backed management systems.",
      image: SITE_IMAGES.processPiping.products.qualityControl,
      applications: ["Material Traceability", "Regulatory Compliance", "Inspection Readiness", "Project QA"],
      badges: [{ label: "ERP Traceability", tone: "accent" }],
      specifications: [
        {
          label: "Quality Approach",
          value: "Raw-material inspection, in-process controls, and continuous business-process improvement.",
          icon: "rule",
        },
        {
          label: "Traceability",
          value: "ERP-supported material and process tracking for faster root-cause analysis.",
          icon: "account_tree",
        },
        {
          label: "Visible Certifications",
          value: "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.",
          icon: "workspace_premium",
        },
      ],
      highlights: [
        "Positions QA as part of production, not just a final inspection checkpoint.",
        "Useful for customers who need auditable traceability through fabrication stages.",
        "Supports regulated and customer-audited projects with documented controls.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "packaging-shipping",
      category: "Quality & Delivery",
      subCategory: "Logistics",
      name: "Packaging, Freight and Transportation",
      description:
        "Metallo's logistics capability covers packing, domestic and export dispatch coordination, consignee and door-delivery models, clearance workflows, and Incoterm-based shipment handling through third-party logistics networks.",
      image: SITE_IMAGES.processPiping.products.packagingShipping,
      applications: ["Door Delivery", "Export Shipments", "Port Dispatch", "Project Logistics"],
      badges: [{ label: "Export Ready", tone: "neutral" }],
      specifications: [
        {
          label: "Delivery Models",
          value: "CIF, consignee basis, and door-delivery arrangements based on project terms.",
          icon: "local_shipping",
        },
        {
          label: "Export Coordination",
          value:
            "Truck-to-port movement, clearance procedures, and release of bills of lading or air waybills.",
          icon: "flight_takeoff",
        },
        {
          label: "Commercial Framework",
          value: "Incoterm-driven responsibility for loading, unloading, and shipping documentation.",
          icon: "inventory_2",
        },
      ],
      highlights: [
        "Adds shipping execution to the manufacturing and engineering stack.",
        "Useful when projects need one supplier coordinating dispatch to site or port.",
        "Helps tie product readiness to practical delivery terms and export paperwork.",
      ],
      sourceLabel: "Metallo",
    },
  ],
  catalogCtaLabel: "Download Pipes Catalog",
  catalogCtaIcon: "download",
  qaBanner: {
    sectionLabel: "Delivery Readiness",
    title: "Process Piping Backed by Engineering and Quality",
    items: [
      {
        icon: "precision_manufacturing",
        title: "Automated Fabrication",
        desc: "CNC preparation paired with semi-automatic and robotic welding workflows.",
      },
      {
        icon: "verified",
        title: "Traceable QA",
        desc: "Incoming inspection, in-process checks, internal audits, and ERP-backed traceability support execution control.",
      },
      {
        icon: "view_in_ar",
        title: "Modular Delivery",
        desc: "Skids, heavy assemblies, and pilot-scale systems extend the offering beyond straight pipe supply.",
      },
      {
        icon: "local_shipping",
        title: "Dispatch Support",
        desc: "Packaging, freight, export coordination, and Incoterm-based delivery handling reduce project friction.",
      },
    ],
  },
  cta: {
    title: "Need a Piping Package Built to Spec?",
    description:
      "Share your BOQ, piping classes, or plant layout and we can shape the right mix of fabricated piping, skids, fittings, pilot systems, quality support, and delivery planning for the project.",
    ctaLabel: "Request a Piping Quote",
    ctaIcon: "request_quote",
  },
};

