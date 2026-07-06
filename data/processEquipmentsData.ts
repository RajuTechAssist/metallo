import type { ConfigurableProductPageData } from "@/components/product";
import { SITE_IMAGES } from "@/config/images";

export const PROCESS_EQUIPMENTS_PAGE_DATA: ConfigurableProductPageData = {
  hero: {
    backgroundImage: SITE_IMAGES.processEquipments.hero,
    title: "Metallo Process Equipments",
    subtitle: "EquipWorks Series.",
    description:
      "High-pressure heat exchangers, process gas waste heat boilers, feedwater heaters, surface condensers, and boiler drums — engineered for refining, petrochemical, fertilizer, and power generation facilities through Metallo's project-driven supply chain.",
    breadcrumbLabel: "Process Equipments",
  },
  categories: [
    {
      key: "plant",
      label: "Plant Equipment",
      icon: "factory",
      match: ["Plant Equipment"] as readonly string[],
    },
    {
      key: "power",
      label: "Power Plant Equipment",
      icon: "bolt",
      match: ["Power Plant Equipment"] as readonly string[],
    },
    {
      key: "services",
      label: "Field Services & Capabilities",
      icon: "handyman",
      match: ["Field Services & Capabilities"] as readonly string[],
    },
  ] as const,
  defaultCategoryKey: "plant",
  verticalKey: "processEquipments",
  certBadge: "ASME / TEMA / PED Compliant",
  items: [
    /* ──────────────────────────────────────────────────────────────
       PLANT EQUIPMENT
       ────────────────────────────────────────────────────────────── */
    {
      id: "process-gas-waste-heat-boilers",
      category: "Plant Equipment",
      subCategory: "Waste Heat Recovery",
      name: "Process Gas Waste Heat Boilers",
      description:
        "Metallo supplies process gas waste heat boilers designed for recovering thermal energy from hot synthesis and reformer gas streams. These units handle extreme tube-side temperatures and pressures encountered in ammonia, methanol, and hydrogen plants, converting waste heat into high-pressure steam for downstream process use.",
      image: SITE_IMAGES.processEquipments.products.processGasWasteHeatBoilers,
      applications: ["Ammonia Plants", "Methanol Facilities", "Hydrogen Units", "Reformer Circuits"],
      badges: [{ label: "Waste Heat Recovery", tone: "accent" }],
      specifications: [
        {
          label: "Operating Regime",
          value:
            "Engineered for high tube-side inlet temperatures with controlled steam generation on the shell side.",
          icon: "thermostat",
        },
        {
          label: "Construction Codes",
          value:
            "Built to ASME Section VIII Div. 1 & 2, TEMA, and PED requirements with full radiographic examination.",
          icon: "verified",
        },
        {
          label: "Metallurgy Range",
          value:
            "Carbon steel, low-alloy Cr-Mo grades, stainless steel, and Inconel overlays depending on gas composition.",
          icon: "layers",
        },
        {
          label: "Ancillary Systems",
          value:
            "Supplied with matched steam drums, interconnecting piping, relief valves, and level instrumentation.",
          icon: "settings_input_component",
        },
      ],
      highlights: [
        "Recovers thermal energy that would otherwise be vented, improving overall plant heat rate.",
        "Handles aggressive process gas compositions through appropriate metallurgy selection.",
        "Delivered as a coordinated package with steam drums and auxiliaries for faster site integration.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "steam-drums-auxiliaries",
      category: "Plant Equipment",
      subCategory: "Steam Separation",
      name: "Steam Drums & Auxiliaries",
      description:
        "Metallo provides high-pressure steam drums with integrated internals — cyclone separators, demisters, and driers — engineered to deliver dry, clean steam from waste heat boiler circuits. These drums serve as the gravity separation point between steam and water in high-pressure boiler systems.",
      image: SITE_IMAGES.processEquipments.products.steamDrumsAuxiliaries,
      applications: ["WHB Circuits", "HRSG Systems", "Process Steam Networks", "Utility Boilers"],
      badges: [{ label: "Steam Separation", tone: "neutral" }],
      specifications: [
        {
          label: "Design Pressure Range",
          value:
            "Rated for operating pressures up to 200 bar with wall thicknesses exceeding 150 mm where required.",
          icon: "compress",
        },
        {
          label: "Internal Fittings",
          value:
            "Factory-installed cyclone separators, chevron-type demisters, feedwater distribution pipes, and chemical dosing nozzles.",
          icon: "filter_alt",
        },
        {
          label: "Material Grades",
          value:
            "SA-516 Gr. 70, SA-387 Gr. 11/22 (Cr-Mo), with stainless or Inconel internal cladding as needed.",
          icon: "category",
        },
      ],
      highlights: [
        "Factory-assembled internals reduce field installation time and commissioning risk.",
        "Thick-wall fabrication capability addresses the most demanding high-pressure boiler circuits.",
        "Pairs directly with Metallo's waste heat boiler offering for a single-source steam system.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "breech-lock-heat-exchangers",
      category: "Plant Equipment",
      subCategory: "High-Pressure Exchangers",
      name: "Breech-Lock Heat Exchangers",
      description:
        "Metallo's breech-lock (screw-plug closure) heat exchangers are designed for extreme high-pressure, high-temperature services where conventional bolted flanges become impractical. The threaded closure ring allows rapid tube-bundle extraction for inspection and maintenance without disturbing the process piping.",
      image: SITE_IMAGES.processEquipments.products.breechLockHeatExchangers,
      applications: ["Hydrocracker Reactors", "Hydrotreaters", "High-Pressure Loops", "Refinery Feed-Effluent"],
      badges: [{ label: "Screw-Plug Closure", tone: "accent" }],
      specifications: [
        {
          label: "Closure Mechanism",
          value:
            "Threaded breech-lock ring that engages with the shell flange, enabling tube bundle removal without unbolting the main shell joint.",
          icon: "settings",
        },
        {
          label: "Pressure & Temperature",
          value:
            "Designed for shell-side pressures exceeding 200 bar and tube-side temperatures above 400 °C in hydrogen-rich environments.",
          icon: "thermostat",
        },
        {
          label: "Design Codes",
          value:
            "ASME Section VIII Div. 1 & 2, TEMA R-class, PED 2014/68/EU, and applicable client specifications.",
          icon: "gavel",
        },
        {
          label: "Metallurgy",
          value:
            "1¼ Cr-½ Mo, 2¼ Cr-1 Mo, stainless steel overlays, and Inconel weld cladding for corrosion resistance.",
          icon: "layers",
        },
      ],
      highlights: [
        "Eliminates large-diameter bolted flanges, reducing leak paths in high-pressure hydrogen service.",
        "Faster turnaround maintenance compared to conventional flanged exchangers.",
        "Suitable for the most demanding refinery and petrochemical high-pressure circuits.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "shell-tube-heat-exchangers",
      category: "Plant Equipment",
      subCategory: "Heat Transfer",
      name: "Shell & Tube Heat Exchangers",
      description:
        "Metallo supplies a full spectrum of shell and tube heat exchangers — from standard single-pass units to complex multi-pass, multi-shell configurations — covering condensers, reboilers, vaporisers, and gas coolers across refining, petrochemical, and chemical process applications.",
      image: SITE_IMAGES.processEquipments.products.shellTubeHeatExchangers,
      applications: ["Refineries", "Petrochemical Plants", "Chemical Processing", "Gas Treatment"],
      badges: [{ label: "TEMA Certified", tone: "accent" }],
      specifications: [
        {
          label: "Configuration Range",
          value:
            "Fixed tubesheet, floating head, U-tube, and kettle-type designs per TEMA B, C, and R classifications.",
          icon: "view_in_ar",
        },
        {
          label: "Design Capability",
          value:
            "In-house thermal and mechanical design using HTRI, PV Elite, and FEA for critical stress analysis.",
          icon: "engineering",
        },
        {
          label: "Material Palette",
          value:
            "Carbon steel, stainless steels (304/316/321/347), duplex, super duplex, Inconel, Hastelloy, and titanium tubes.",
          icon: "layers",
        },
        {
          label: "Tube Sizes",
          value:
            "Tube OD from 19.05 mm to 50.8 mm, lengths up to 12 metres, with expanded, welded, or strength-welded tube-to-tubesheet joints.",
          icon: "straighten",
        },
      ],
      highlights: [
        "Covers the widest range of TEMA types and service conditions under one procurement line.",
        "Thermal and mechanical design handled in-house shortens the engineering-to-fabrication cycle.",
        "Multi-metallurgy capability means exotic-alloy exchangers sit alongside carbon steel units in the same supply chain.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "ammonia-synthesis-heat-exchangers",
      category: "Plant Equipment",
      subCategory: "Synthesis Loop",
      name: "Ammonia Synthesis Loop Heat Exchangers",
      description:
        "Purpose-built for the ammonia synthesis loop, these high-pressure shell and tube exchangers operate in hydrogen-nitrogen atmospheres at pressures above 150 bar. Metallo supplies convertor feed-effluent exchangers, synthesis gas coolers, and inter-stage exchangers with metallurgy selected to resist hydrogen attack and nitriding.",
      image: SITE_IMAGES.processEquipments.products.ammoniaSynthesisHeatExchangers,
      applications: ["Ammonia Converters", "Synthesis Gas Circuits", "Urea Feed Systems", "Fertilizer Complexes"],
      badges: [{ label: "High-Pressure Loop", tone: "accent" }],
      specifications: [
        {
          label: "Service Conditions",
          value:
            "Operating pressures exceeding 150 bar in hydrogen-nitrogen mixtures at elevated temperatures.",
          icon: "compress",
        },
        {
          label: "Hydrogen Attack Resistance",
          value:
            "Metallurgy selected per API 941 (Nelson curves) — typically 2¼ Cr-1 Mo or stabilised stainless steels.",
          icon: "shield",
        },
        {
          label: "Quality Regime",
          value:
            "100% radiography, PWHT to controlled cycles, hardness surveys, and PMI on all pressure-retaining welds.",
          icon: "verified",
        },
      ],
      highlights: [
        "Metallurgy and weld procedures specifically qualified for high-pressure hydrogen service.",
        "Addresses the most safety-critical heat transfer duty in an ammonia plant.",
        "Can be packaged with waste heat boilers and steam drums for complete loop coverage.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "helical-heat-exchangers",
      category: "Plant Equipment",
      subCategory: "Enhanced Heat Transfer",
      name: "Helical (Helix) Baffle Heat Exchangers",
      description:
        "Metallo's helical baffle heat exchangers replace conventional segmental baffles with a continuous helical baffle arrangement, creating a near-plug-flow shell-side pattern. This design reduces shell-side pressure drop, minimises dead zones, and suppresses vibration — making it the preferred choice for fouling-prone and vibration-sensitive services.",
      image: SITE_IMAGES.processEquipments.products.helicalHeatExchangers,
      applications: ["Crude Preheat Trains", "Fouling Services", "Gas Cooling", "Vibration-Sensitive Duties"],
      badges: [{ label: "Helical Baffle", tone: "accent" }],
      specifications: [
        {
          label: "Baffle Geometry",
          value:
            "Continuous helical baffles at controlled pitch create a swirl-flow pattern on the shell side.",
          icon: "360",
        },
        {
          label: "Performance Gains",
          value:
            "Up to 40% lower shell-side pressure drop and significantly reduced fouling rates compared to segmental baffle designs.",
          icon: "trending_up",
        },
        {
          label: "Vibration Control",
          value:
            "Uniform tube support across the entire bundle length virtually eliminates flow-induced tube vibration.",
          icon: "vibration",
        },
      ],
      highlights: [
        "Best suited for services where fouling or tube vibration limits conventional exchanger run lengths.",
        "Lower pressure drop translates directly to reduced pumping energy costs.",
        "Plug-flow shell-side pattern improves effective temperature difference and heat transfer coefficient.",
      ],
      sourceLabel: "Metallo",
    },

    /* ──────────────────────────────────────────────────────────────
       POWER PLANT EQUIPMENT
       ────────────────────────────────────────────────────────────── */
    {
      id: "hp-feedwater-heaters",
      category: "Power Plant Equipment",
      subCategory: "Feedwater Heating",
      name: "HP Feedwater Heaters",
      description:
        "Metallo supplies high-pressure feedwater heaters that preheat boiler feed water using extracted turbine steam, improving overall Rankine cycle efficiency. These units operate at pressures matching the boiler feed pump discharge and are designed to handle de-superheating, condensing, and drain-cooling zones within a single shell.",
      image: SITE_IMAGES.processEquipments.products.hpFeedwaterHeaters,
      applications: ["Thermal Power Stations", "Combined Cycle Plants", "Cogeneration Systems", "Supercritical Units"],
      badges: [{ label: "Cycle Efficiency", tone: "accent" }],
      specifications: [
        {
          label: "Heating Zones",
          value:
            "Integrated de-superheating, condensing, and drain-cooling zones within a single pressure boundary.",
          icon: "thermostat",
        },
        {
          label: "Operating Parameters",
          value:
            "Tube-side pressures up to 350 bar for supercritical boiler feed service.",
          icon: "compress",
        },
        {
          label: "Design Standards",
          value:
            "ASME Section VIII, HEI Standards for feedwater heaters, and applicable power utility specifications.",
          icon: "gavel",
        },
        {
          label: "Tube Material",
          value:
            "Stainless steel, Monel, or carbon steel tubes depending on steam chemistry and erosion considerations.",
          icon: "layers",
        },
      ],
      highlights: [
        "Multi-zone design maximises heat recovery from extracted steam in a compact envelope.",
        "Directly improves plant heat rate by raising feedwater temperature before the economiser.",
        "Designed for the thermal cycling and load-following demands of modern power stations.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "lp-feedwater-heaters",
      category: "Power Plant Equipment",
      subCategory: "Feedwater Heating",
      name: "LP Feedwater Heaters",
      description:
        "Low-pressure feedwater heaters supplied by Metallo recover heat from low-pressure turbine extraction steam to raise condensate temperature before the deaerator. These horizontal or vertical units handle large condensate flow rates at moderate pressures with tube materials selected to resist ammonia and oxygen attack in the condensate circuit.",
      image: SITE_IMAGES.processEquipments.products.lpFeedwaterHeaters,
      applications: ["Condensate Systems", "Thermal Power Plants", "Combined Cycle HRSG", "Process Steam Networks"],
      badges: [{ label: "Condensate Recovery", tone: "neutral" }],
      specifications: [
        {
          label: "Configuration",
          value:
            "Horizontal or vertical orientation with U-tube or straight-tube bundles per plant layout constraints.",
          icon: "swap_vert",
        },
        {
          label: "Operating Range",
          value:
            "Shell-side extraction steam pressures from near-vacuum to approximately 15 bar absolute.",
          icon: "compress",
        },
        {
          label: "Corrosion Protection",
          value:
            "Tube materials selected to handle dissolved oxygen and ammonia levels typical of condensate circuits.",
          icon: "shield",
        },
      ],
      highlights: [
        "Recovers otherwise wasted low-grade heat, contributing measurably to overall cycle efficiency.",
        "Flexible mounting orientation adapts to turbine hall space constraints.",
        "Paired with HP feedwater heaters to form a complete regenerative feedwater heating train.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "water-cooled-surface-condensers",
      category: "Power Plant Equipment",
      subCategory: "Steam Condensation",
      name: "Water-Cooled Surface Condensers",
      description:
        "Metallo's water-cooled surface condensers create the low-pressure sink at the turbine exhaust, condensing spent steam against circulating cooling water. These large-footprint units are designed for minimal pressure drop, efficient air removal, and long tube life even with aggressive cooling water chemistry.",
      image: SITE_IMAGES.processEquipments.products.waterCooledSurfaceCondensers,
      applications: ["Steam Turbine Exhausts", "Power Stations", "Process Vacuum Systems", "Cogeneration Plants"],
      badges: [{ label: "Turbine Exhaust", tone: "accent" }],
      specifications: [
        {
          label: "Condenser Type",
          value:
            "Single-pass or multi-pass designs with tube bundles optimised for low back-pressure at turbine exhaust.",
          icon: "air",
        },
        {
          label: "Tube Materials",
          value:
            "Titanium, Cu-Ni 90/10, stainless steel, or admiralty brass depending on cooling water source.",
          icon: "layers",
        },
        {
          label: "Air Removal",
          value:
            "Integrated air-cooling sections and venting provisions to maintain design vacuum under all load conditions.",
          icon: "wind_power",
        },
        {
          label: "Design Basis",
          value:
            "HEI Standards for Steam Surface Condensers, ASME Section VIII, and site-specific thermal guarantees.",
          icon: "gavel",
        },
      ],
      highlights: [
        "Low back-pressure design directly affects turbine output and overall station heat rate.",
        "Tube material selection matched to cooling water chemistry extends run life and reduces maintenance.",
        "Sized for full-load, part-load, and seasonal variations in cooling water temperature.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "boiler-drums",
      category: "Power Plant Equipment",
      subCategory: "Boiler Pressure Parts",
      name: "High-Pressure Boiler Drums",
      description:
        "Metallo supplies high-pressure boiler drums — the critical gravity-separation vessel in a water-tube boiler circuit — with wall thicknesses up to 200 mm and factory-installed internals. These drums separate the steam-water mixture exiting the boiler bank, delivering dry steam to the superheater while returning water to the downcomers.",
      image: SITE_IMAGES.processEquipments.products.boilerDrums,
      applications: ["Utility Boilers", "HRSG Systems", "Industrial Boilers", "Supercritical Transition Drums"],
      badges: [{ label: "Thick-Wall Fabrication", tone: "accent" }],
      specifications: [
        {
          label: "Wall Thickness",
          value:
            "Fabrication capability for drum shells up to 200 mm (8 inches) wall thickness in Cr-Mo and carbon steel grades.",
          icon: "straighten",
        },
        {
          label: "Internals Package",
          value:
            "Factory-fitted cyclone separators, scrubber elements, feedwater distributors, and chemical feed nozzles.",
          icon: "filter_alt",
        },
        {
          label: "Design Codes",
          value:
            "ASME Section I (Power Boilers) and Section VIII, with 'S' stamp capability for power boiler components.",
          icon: "gavel",
        },
        {
          label: "Track Record",
          value:
            "Supply chain access to facilities that have delivered over 1,000 boiler drums including 250+ high-pressure units.",
          icon: "workspace_premium",
        },
      ],
      highlights: [
        "Thick-wall fabrication capability addresses the highest boiler operating pressures in service today.",
        "Factory-installed internals reduce site erection time and improve steam quality from day one.",
        "S-stamp qualified fabrication ensures compliance with power boiler regulatory requirements.",
      ],
      sourceLabel: "Metallo",
    },

    /* ──────────────────────────────────────────────────────────────
       FIELD SERVICES & CAPABILITIES
       ────────────────────────────────────────────────────────────── */
    {
      id: "site-fabricated-equipment",
      category: "Field Services & Capabilities",
      subCategory: "On-Site Fabrication",
      name: "Site-Fabricated Equipment",
      description:
        "For equipment too large to transport as a single piece, Metallo coordinates site fabrication of columns, reactors, and large-diameter vessels directly at the project location. Site fabrication teams follow the same weld procedures, NDE protocols, and quality plans used in the shop, ensuring code-compliant construction regardless of location.",
      image: SITE_IMAGES.processEquipments.products.siteFabricatedEquipment,
      applications: ["Oversized Columns", "Large Reactors", "Refinery Turnarounds", "Remote Project Sites"],
      badges: [{ label: "On-Site Build", tone: "neutral" }],
      specifications: [
        {
          label: "Scope",
          value:
            "Shell rolling, longitudinal and circumferential welding, nozzle fit-up, PWHT, and hydrotesting performed at the project site.",
          icon: "construction",
        },
        {
          label: "Quality Assurance",
          value:
            "Identical WPS/PQR qualifications, NDE coverage, and third-party inspection protocols as workshop fabrication.",
          icon: "verified",
        },
        {
          label: "Logistics Coordination",
          value:
            "Material staging, lifting plans, temporary weather shelters, and PWHT rig mobilisation managed as part of the scope.",
          icon: "local_shipping",
        },
      ],
      highlights: [
        "Eliminates transport-dimension constraints that limit equipment size in shop fabrication.",
        "Same code compliance and quality regime as workshop-built equipment.",
        "Particularly relevant for landlocked or remote project sites with limited heavy-haul access.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "in-situ-modification-repair",
      category: "Field Services & Capabilities",
      subCategory: "Maintenance & Repair",
      name: "In-Situ Modification & Repair",
      description:
        "Metallo's field service capability extends to in-situ modification and repair of operating process equipment — including nozzle additions, shell patches, re-tubing, and weld overlay repairs — performed during planned shutdowns or emergency outages with full code compliance.",
      image: SITE_IMAGES.processEquipments.products.inSituModificationRepair,
      applications: ["Shutdown Repairs", "Emergency Outages", "Capacity Upgrades", "Life Extension Projects"],
      badges: [{ label: "Field Repair", tone: "neutral" }],
      specifications: [
        {
          label: "Repair Scope",
          value:
            "Nozzle cut-outs, shell plate replacement, weld overlay restoration, and re-tubing of heat exchanger bundles.",
          icon: "build",
        },
        {
          label: "Code Compliance",
          value:
            "All repairs executed per ASME / NBIC (National Board Inspection Code) repair and alteration procedures.",
          icon: "gavel",
        },
        {
          label: "Turnaround Speed",
          value:
            "Pre-planned repair packages with staged materials and qualified welders to minimise plant downtime.",
          icon: "speed",
        },
      ],
      highlights: [
        "Keeps ageing equipment in service through code-compliant life extension interventions.",
        "Pre-staged materials and procedures reduce critical-path shutdown duration.",
        "Applicable across the full range of pressure vessels, exchangers, and columns in a process plant.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "packinox-heat-exchanger-services",
      category: "Field Services & Capabilities",
      subCategory: "Specialised Services",
      name: "Packinox Heat Exchanger Services",
      description:
        "Metallo provides specialised field services for Packinox-type plate heat exchangers used in continuous catalytic reforming (CCR) and para-xylene units. Services include plate pack extraction, cleaning, re-gasketing, pressure testing, and re-installation — typically executed during scheduled turnarounds.",
      image: SITE_IMAGES.processEquipments.products.packinoxServices,
      applications: ["CCR Units", "Para-Xylene Plants", "Refinery Turnarounds", "Aromatics Complexes"],
      badges: [{ label: "Packinox Specialist", tone: "accent" }],
      specifications: [
        {
          label: "Service Elements",
          value:
            "Plate pack extraction, high-pressure cleaning, gasket replacement, leak testing, and re-assembly.",
          icon: "plumbing",
        },
        {
          label: "Equipment Familiarity",
          value:
            "Experienced with Packinox welded-plate exchangers operating in high-temperature, high-pressure reformer service.",
          icon: "engineering",
        },
        {
          label: "Turnaround Integration",
          value:
            "Planned as a critical-path activity within the overall plant shutdown schedule.",
          icon: "event",
        },
      ],
      highlights: [
        "Addresses a niche maintenance need that requires specialised tooling and trained crews.",
        "Properly executed Packinox maintenance restores thermal performance and extends plate life.",
        "Reduces reliance on OEM-only service arrangements for turnaround scheduling flexibility.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "breech-lock-overhauling",
      category: "Field Services & Capabilities",
      subCategory: "Specialised Services",
      name: "Breech-Lock Overhauling & Maintenance",
      description:
        "Metallo provides complete overhauling and maintenance services for breech-lock heat exchangers — including closure ring inspection, re-machining, gasket replacement, tube plugging, bundle extraction, and hydraulic closure tooling — to maintain seal integrity and operational reliability in high-pressure refinery service.",
      image: SITE_IMAGES.processEquipments.products.breechLockOverhauling,
      applications: ["Refinery Shutdowns", "Hydroprocessing Units", "High-Pressure Loop Maintenance", "Turnaround Projects"],
      badges: [{ label: "Closure Integrity", tone: "accent" }],
      specifications: [
        {
          label: "Overhauling Scope",
          value:
            "Closure ring thread inspection, re-machining, Delta-V gasket replacement, tube bundle extraction and re-insertion.",
          icon: "build",
        },
        {
          label: "Tooling",
          value:
            "Hydraulic turning gear, bundle extractors, and precision alignment equipment for closure re-engagement.",
          icon: "precision_manufacturing",
        },
        {
          label: "Inspection & Testing",
          value:
            "Dye penetrant, magnetic particle, and ultrasonic examination of closure threads and shell-side welds.",
          icon: "search",
        },
      ],
      highlights: [
        "Ensures continued leak-free operation of the most critical high-pressure exchanger closure type.",
        "Specialised tooling avoids damage to precision-machined closure threads during maintenance.",
        "Can be combined with new exchanger supply for a single-source equipment lifecycle approach.",
      ],
      sourceLabel: "Metallo",
    },
    {
      id: "material-capabilities",
      category: "Field Services & Capabilities",
      subCategory: "Metallurgy & Testing",
      name: "Material & Testing Capabilities",
      description:
        "Metallo's process equipment supply chain encompasses a wide metallurgy range — from standard carbon steels through Cr-Mo alloy grades, austenitic and duplex stainless steels, to nickel-based alloys — backed by comprehensive testing including PMI, impact testing, PWHT, hardness surveys, and full volumetric NDE.",
      image: SITE_IMAGES.processEquipments.products.materialCapabilities,
      applications: ["Material Selection", "Weld Qualification", "Quality Assurance", "Code Compliance"],
      badges: [{ label: "Multi-Metallurgy", tone: "neutral" }],
      specifications: [
        {
          label: "Material Grades",
          value:
            "SA-516, SA-387 (Gr. 5/11/22/91), SA-240 (304/316/321/347), duplex 2205, Inconel 625/825, Hastelloy C-276, and titanium.",
          icon: "category",
        },
        {
          label: "Testing Portfolio",
          value:
            "100% PMI, Charpy impact testing, CTOD fracture toughness, intergranular corrosion testing, and hardness surveys.",
          icon: "science",
        },
        {
          label: "NDE Methods",
          value:
            "Radiography (RT), ultrasonic (UT including TOFD and phased array), magnetic particle (MT), and dye penetrant (PT).",
          icon: "biotech",
        },
        {
          label: "Heat Treatment",
          value:
            "Stress relief PWHT, solution annealing, normalising and tempering, and hydrogen bake-out per code and client requirements.",
          icon: "thermostat",
        },
      ],
      highlights: [
        "Single supply chain covers the full metallurgy spectrum from carbon steel to exotic nickel alloys.",
        "Comprehensive testing eliminates the need for separate third-party material qualification programs.",
        "Heat treatment capability addresses both code-mandatory and client-specific PWHT requirements.",
      ],
      sourceLabel: "Metallo",
    },
  ],
  catalogCtaLabel: "Download Process Equipments Catalog",
  catalogCtaIcon: "download",
  catalogCtaHref: "#",
  catalogCtaDisabled: true,
  qaBanner: {
    sectionLabel: "Engineering Assurance",
    title: "Process Equipment Backed by Code Compliance and Metallurgy Expertise",
    items: [
      {
        icon: "verified",
        title: "ASME & TEMA Compliant",
        desc: "All equipment designed and fabricated to ASME Section VIII, TEMA, and PED standards with full third-party inspection.",
      },
      {
        icon: "layers",
        title: "Multi-Metallurgy Capability",
        desc: "Carbon steel through Inconel and Hastelloy — metallurgy selected to match service conditions, not limited by shop capability.",
      },
      {
        icon: "biotech",
        title: "Comprehensive NDE",
        desc: "Radiography, ultrasonics (TOFD/phased array), magnetic particle, and dye penetrant testing across all critical welds.",
      },
      {
        icon: "handyman",
        title: "Field Services",
        desc: "Site fabrication, in-situ repair, and specialised maintenance services extend the offering beyond new-build supply.",
      },
    ],
  },
  cta: {
    title: "Need Process Equipment Engineered to Spec?",
    description:
      "Share your data sheets, design codes, P&IDs, or equipment specifications and we will configure the right mix of heat exchangers, pressure vessels, boiler drums, and field services for the project.",
    ctaLabel: "Request a Process Equipment Quote",
    ctaIcon: "request_quote",
  },
};
