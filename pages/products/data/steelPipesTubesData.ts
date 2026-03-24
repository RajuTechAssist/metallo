import type { SteelProduct } from "./steelTypes";
import {
  createSteelTypeGallery,
  createSteelTypeItem,
  formatSteelList,
} from "./steelCatalogUtils";

const STEEL_PIPE_TUBE_IMAGE_DIR = "/Steel/pipes-tubes";

const pipeTubeImage = (fileName: string) =>
  `${STEEL_PIPE_TUBE_IMAGE_DIR}/${fileName}`;
const steelImage = (fileName: string) => `/Steel/${fileName}`;
const pipeTubeTypeImage = (slug: string, fileName: string) =>
  `${STEEL_PIPE_TUBE_IMAGE_DIR}/types/${slug}/${fileName}`;
const pipeTubeTypeItem = (slug: string, name: string, fileName: string) =>
  createSteelTypeItem(name, pipeTubeTypeImage(slug, fileName));
const steelTypeItem = (name: string, fileName: string) =>
  createSteelTypeItem(name, steelImage(fileName));

const PIPE_TUBE_COMMON_CERTIFICATIONS = [
  "ISO 9001:2015",
  "PED 2014/68/EU",
  "EN 10204 3.1",
  "PMI / NDT",
] as const;

type PipeMaterialGroup = "ss" | "gi" | "ms" | "special";

interface SteelPipeTubeSource {
  slug: string;
  name: string;
  subCategory: string;
  materialGroup: PipeMaterialGroup;
  imageFile: string;
  imagePath?: string;
  sourceUrl: string;
  descriptionParagraphs: string[];
  grades: string[];
  standards: string[];
  sizeRange: string;
  wallThickness: string;
  length: string;
  endFinish: string;
  surfaceFinish?: string;
  typeSummary: string[];
  materialFamilies: string[];
  testing: string;
  application: string;
  applications: string[];
  certifications?: string[];
  typeGalleryIntro: string;
  typeItems: ReturnType<typeof createSteelTypeGallery>["items"];
}

const STEEL_PIPE_TUBE_SOURCES: SteelPipeTubeSource[] = [
  {
    slug: "seamless",
    name: "Stainless Steel Seamless Pipe",
    subCategory: "Seamless Pipes",
    materialGroup: "ss",
    imageFile: "seamless-pipe1.png",
    sourceUrl: "https://www.triloksteel.com/stainless-steel-seamless-pipe.html",
    descriptionParagraphs: [
      "Metallo supplies stainless steel seamless pipe for pressure-duty lines where weld-free construction, tighter integrity under cyclic loading, and dependable corrosion resistance are the main project drivers. The sourced range is positioned around ASTM A312 and EN 10216-5 manufacturing, covering the core austenitic grades used in process piping, utility headers, fabrication spools, and plant maintenance stock.",
      "This family is especially suited to chemical, water, food, and power-sector installations that need schedule-based pipe supply with mill traceability, project inspection support, and flexible finishing routes. Metallo frames the range as the workhorse option for stainless pressure piping when fabricators want broad schedule availability without stepping into site-specific custom fabrication too early.",
    ],
    grades: [
      "201",
      "304",
      "304L",
      "309",
      "310",
      "316",
      "316L",
      "321",
      "347",
      "409",
      "430",
      "904L",
    ],
    standards: [
      "ASTM A312",
      "ASME SA312",
      "EN 10216-5",
      "ASTM A213",
      "ASTM A269",
      "ASME B36.19",
    ],
    sizeRange:
      '1/4" NB to 24" NB with schedule-based supply from 10S through 160S and XXS project requirements.',
    wallThickness: "0.1 mm to 60 mm depending on diameter and schedule.",
    length: "Single random, double random, and cut-to-length project supply.",
    endFinish:
      "Plain end, beveled end, threaded preparations, and fabrication-ready cut lengths.",
    surfaceFinish:
      "Bright, cold finish, annealed, polished, and pickled finishing routes.",
    typeSummary: [
      "Round seamless pipe",
      "Schedule 40 process pipe",
      "Cold rolled seamless pipe",
      "High pressure line pipe",
      "Large diameter stainless pipe",
    ],
    materialFamilies: [
      "Austenitic stainless",
      "Heat-resistant stainless",
      "Ferritic stainless",
      "Project-specific stainless grades",
    ],
    testing:
      "Mill test certificates, EN 10204 3.1 documentation, PMI, mechanical reports, chemical reports, visual inspection, and destructive / non-destructive test support.",
    application:
      "Corrosion-resistant process piping, utility headers, pressure service, and fabrication spools.",
    applications: [
      "Chemical Processing",
      "Water Treatment",
      "Food and Beverage",
      "Power Projects",
    ],
    typeGalleryIntro:
      "Metallo's seamless pipe program covers the most common pressure-piping supply variants requested for plant fabrication, schedule-based line replacement, and stainless process upgrades.",
    typeItems: [
      pipeTubeTypeItem(
        "seamless",
        "Seamless Process Pipes",
        "stainless-steel-seamless-pipes1.png",
      ),
      pipeTubeTypeItem(
        "seamless",
        "Round Stainless Pipe",
        "stainless-steel-round-pipe1.png",
      ),
      pipeTubeTypeItem(
        "seamless",
        "Schedule 40 Seamless Pipe",
        "schedule-40-seamless-stainless-steel-pipe1.png",
      ),
      pipeTubeTypeItem(
        "seamless",
        "Cold Rolled Seamless Pipe",
        "cold-rolled-seamless-stainless-steel-pipe1.png",
      ),
      pipeTubeTypeItem(
        "seamless",
        "High Pressure Seamless Pipe",
        "stainless-steel-high-pressure-pipe1.png",
      ),
    ],
  },
  {
    slug: "erw",
    name: "Stainless Steel ERW / EFW Pipe",
    subCategory: "Welded Pipes",
    materialGroup: "ss",
    imageFile: "erw-pipe1.png",
    sourceUrl: "https://www.triloksteel.com/stainless-steel-erw-pipe.html",
    descriptionParagraphs: [
      "Metallo's ERW and EFW stainless pipe range is built for projects that need large-diameter welded coverage, controlled bead-finished supply, and broad geometric flexibility across round, square, rectangular, hydraulic, and honed sections. The sourced listing pairs ANSI / ASME pipe dimension standards with stainless welded manufacturing routes that suit utility, structural, and process applications alike.",
      "This range is useful where seamless construction is not mandatory but schedule variety, diameter scale, and fabrication speed matter. Metallo positions these welded products for transmission lines, custom skids, fabricated headers, and stainless utility work where customers still expect traceable stainless grades and project-compliant surface finishing.",
    ],
    grades: [
      "201",
      "304",
      "304L",
      "309",
      "310",
      "316",
      "316L",
      "321",
      "347",
      "409",
      "430",
      "904L",
    ],
    standards: [
      "ANSI / ASME B36.10M",
      "ANSI / ASME B36.19M",
      "ASTM A312",
      "ASTM A778",
      "ASTM A358",
      "IS 13316",
    ],
    sizeRange:
      '1/2" NB to 60" NB with custom large-diameter welded pipe supply and fabricated project lengths.',
    wallThickness:
      "SCH 5 through SCH 160, XXS, XS, and custom wall combinations for welded build-outs.",
    length: "Single random, double random, and custom cut lengths.",
    endFinish:
      "Plain, beveled, threaded, single-end or double-end prepared pipe ends.",
    surfaceFinish:
      "2B, No.1, No.4, No.8 mirror finish, and customer-specific finishing.",
    typeSummary: [
      "ERW pipe",
      "EFW pipe",
      "Large diameter welded pipe",
      "Spiral welded pipe",
      "Bead-removed welded pipe",
    ],
    materialFamilies: [
      "Austenitic stainless",
      "Ferritic stainless",
      "Heat-resistant stainless",
      "Custom-fabricated stainless sections",
    ],
    testing:
      "Project inspection support, radiography-backed welded options, dimensional checks, MTC review, and finish verification for custom stainless pipe supply.",
    application:
      "Transmission lines, utility pipework, fabricated headers, structural stainless runs, and custom skids.",
    applications: [
      "Utility Piping",
      "Water Systems",
      "Custom Fabrication",
      "Structural Stainless",
    ],
    typeGalleryIntro:
      "Metallo's welded stainless program balances diameter scale, fabrication flexibility, and visual finish options for customers who need more than a single ERW stock item.",
    typeItems: [
      pipeTubeTypeItem(
        "erw",
        "Welded Stainless Pipe",
        "stainless-steel-welded-pipe1.png",
      ),
      pipeTubeTypeItem(
        "erw",
        "EFW Stainless Pipe",
        "stainless-steel-efw-pipe1.png",
      ),
      pipeTubeTypeItem(
        "erw",
        "Large Diameter Welded Pipe",
        "large-diameter-stainless-steel-welded-pipe1.png",
      ),
      pipeTubeTypeItem(
        "erw",
        "Spiral Welded Pipe",
        "stainless-steel-spiral-welded-pipe1.png",
      ),
      pipeTubeTypeItem(
        "erw",
        "SCH 10 Welded Pipe",
        "sch-10-ss-welded-pipe1.png",
      ),
    ],
  },
  {
    slug: "tube",
    name: "Stainless Steel Industrial Tube",
    subCategory: "Industrial Tubes",
    materialGroup: "ss",
    imageFile: "industrial-tube1.png",
    sourceUrl: "https://www.triloksteel.com/stainless-steel-tube.html",
    descriptionParagraphs: [
      "Metallo supplies stainless steel industrial tubing for hydraulic, pneumatic, structural, decorative, food, and fluid-handling applications where profile flexibility matters as much as corrosion resistance. The sourced range covers welded and seamless tube in round, rectangular, square, and spiral-welded formats, with delivery conditions that include bright annealed, annealed and pickled, cold drawn, and polished finishes.",
      "That gives engineering teams a single stainless tube family that can move from clean fluid service to guard structures, support frames, and polished fabrication details without switching suppliers or specifications halfway through a project. Metallo positions this range as the most versatile stainless tube option in the Steel catalogue.",
    ],
    grades: ["304", "304L", "316", "316L"],
    standards: [
      "ASTM A269",
      "ASTM A213",
      "ASTM A554",
      "EN 10296-2",
      "EN 10312",
    ],
    sizeRange:
      "Round tube from 4.76 mm to 203.2 mm OD, rectangular tube from 12.7 x 25.4 mm to 200 x 100 mm, square tube from 12.7 mm to 150 A/F, and spiral-welded tube from 76.2 mm to 1016 mm OD.",
    wallThickness: "0.7 mm to 6.0 mm.",
    length: "Single random, double random, and required cut lengths.",
    endFinish: "Plain end, beveled end, and threaded supply options.",
    surfaceFinish:
      "No.8, No.4, 2B, No.1, mirror finish, electropolished, and bright annealed variants.",
    typeSummary: [
      "Food tube",
      "Decorative tube",
      "Fluid tube",
      "Structural tube",
      "Cold drawn tube",
    ],
    materialFamilies: [
      "Austenitic stainless tube",
      "Process-grade tubing",
      "Structural stainless sections",
    ],
    testing:
      "Dimensional inspection, finish verification, MTC review, polishing checks, and source-backed inspection reporting.",
    application:
      "Hydraulic, pneumatic, fluid, structural, decorative, and food-service tube installations.",
    applications: [
      "Hydraulic Systems",
      "Pneumatic Lines",
      "Food Equipment",
      "Structural Frames",
    ],
    typeGalleryIntro:
      "Metallo's industrial tube offer covers the profile and finish combinations most often required in plant tubing, polished fabrications, and stainless structural details.",
    typeItems: [
      pipeTubeTypeItem(
        "tube",
        "Seamless Tube",
        "stainless-steel-seamless-tube11.png",
      ),
      pipeTubeTypeItem("tube", "Welded Tubing", "ss-welded-tubing11.png"),
      pipeTubeTypeItem(
        "tube",
        "Cold Drawn Tube",
        "cold-drawn-stainless-steel-tube11.png",
      ),
      pipeTubeTypeItem(
        "tube",
        "Round Tube",
        "stainless-steel-round-tube11.png",
      ),
      pipeTubeTypeItem("tube", "Thick Wall Tube", "ss-thick-wall-tubes11.png"),
    ],
  },
  {
    slug: "polished",
    name: "Stainless Steel Polished Tube",
    subCategory: "Polished and Decorative Tubes",
    materialGroup: "ss",
    imageFile: "polished-tube1.png",
    sourceUrl:
      "https://www.triloksteel.com/stainless-steel-polished-tube.html",
    descriptionParagraphs: [
      "Metallo's polished stainless tubing is built for clean visual presentation, inside-out finish control, and decorative or hygienic applications where surface quality directly affects project outcomes. The sourced page highlights seamless, ERW, EFW, bead-removed, and semi-seamless construction with electropolished and BA-finished options across broad nominal bore and OD ranges.",
      "This makes the range suitable for premium architectural detailing, pharma and food equipment, exposed utility installations, and polished fabrication where end users notice finish consistency. Metallo positions it as the stainless tube family for projects that need both functional corrosion resistance and a high-grade finished appearance.",
    ],
    grades: ["201", "304", "304L", "316", "316L"],
    standards: ["ASTM A249", "ASTM A269", "ASTM A270", "ASTM A554"],
    sizeRange:
      '1/8" NB to 24" NB and 1/4" OD to 24" OD polished tube sizes.',
    wallThickness: "1 mm to 20 mm.",
    length: "Up to 6 meters.",
    endFinish: "Plain-cut ends, capped ends, and fabrication-ready tube lengths.",
    surfaceFinish:
      "Electropolished ID / OD, BA finish, No.4 brushed, and mirror-polished variants.",
    typeSummary: [
      "Seamless polished tube",
      "ERW polished tube",
      "EFW polished tube",
      "Bead-removed polished tube",
      "Semi-seamless polished tube",
    ],
    materialFamilies: [
      "Austenitic polished tube",
      "Architectural stainless",
      "Clean-service stainless tubing",
    ],
    testing:
      "EN 10204 3.1 certification, finish verification, dimensional checks, and packing control with sleeved, capped, and boxed dispatch.",
    application:
      "Architectural, hygienic, decorative, and exposed-service stainless tubing.",
    applications: [
      "Architecture",
      "Food and Pharma",
      "Interior Fabrication",
      "Clean Utilities",
    ],
    typeGalleryIntro:
      "Metallo's polished tube gallery focuses on the finish-led variants most often specified for exposed stainless installations and hygienic fabrication packages.",
    typeItems: [
      pipeTubeTypeItem(
        "polished",
        "Polished Pipe",
        "stainless-steel-polished-pipe1.png",
      ),
      pipeTubeTypeItem(
        "polished",
        "Polished Tubing",
        "stainless-steel-polished-tubing1.png",
      ),
      pipeTubeTypeItem(
        "polished",
        "ASTM A554 Gr 304 Polished Pipe",
        "astm-a554-gr-304-polished-pipe1.png",
      ),
      pipeTubeTypeItem(
        "polished",
        "Polished Stainless Tube",
        "polished-stainless-steel-tube1.png",
      ),
      pipeTubeTypeItem(
        "polished",
        "ASTM A554 Gr 201 Polished Pipe",
        "astm-a554-gr-201-polished-pipe1.png",
      ),
    ],
  },
  {
    slug: "heat-exchanger",
    name: "Stainless Steel Heat Exchanger Tube",
    subCategory: "Heat Exchanger Tubes",
    materialGroup: "special",
    imageFile: "heat-exchanger-tube1.png",
    sourceUrl:
      "https://www.triloksteel.com/stainless-steel-heat-exchanger-tube.html",
    descriptionParagraphs: [
      "Metallo supplies heat exchanger tubing for condensers, shell-and-tube packages, coolers, and thermal process equipment where close dimensional tolerance, long straight lengths, and controlled bend performance matter. The sourced range is aligned with ASTM A249, ASTM A269, and ASTM A789 / ASME equivalents, covering straight, coiled, seamless, and welded exchanger tubing formats.",
      "This product family is designed for projects that need more than standard tubing stock. Metallo positions it for EPC packages, OEM thermal equipment, replacement bundle work, and corrosion-resistant heat-transfer service where tubing must arrive ready for bending, expansion, decoiling, or fabricated exchanger assembly.",
    ],
    grades: [
      "304",
      "304L",
      "316",
      "316L",
      "321",
      "347",
      "Duplex project grades",
    ],
    standards: [
      "ASTM A249 / ASME SA249",
      "ASTM A269 / ASME SA269",
      "ASTM A789 / ASME SA789",
      "ASTM A213",
    ],
    sizeRange: "6.53 mm to 127 mm OD.",
    wallThickness: "0.5 mm to 5 mm.",
    length: "Up to 20 meters.",
    endFinish: "Plain end, beveled end, and threaded preparations where required.",
    surfaceFinish:
      "Annealed and pickled, bright annealed, polished, cold drawn, and mill-finished exchanger tubing.",
    typeSummary: [
      "Straight exchanger tube",
      "Coil tubing for exchangers",
      "Shell and tube service",
      "Seamless exchanger tube",
      "Welded exchanger tube",
    ],
    materialFamilies: [
      "Austenitic exchanger tube",
      "Duplex-capable thermal tubing",
      "OEM thermal equipment tubing",
    ],
    testing:
      "Tolerance control to +/-0.05 mm, bend-radius verification, inspection reporting, and project processing support including cutting, decoiling, bending, punching, welding, and moulding.",
    application:
      "Heat exchangers, condensers, coolers, process heaters, marine thermal systems, and OEM bundle work.",
    applications: [
      "Heat Exchangers",
      "Condensers",
      "Process Cooling",
      "Marine Thermal Systems",
    ],
    typeGalleryIntro:
      "Metallo's heat exchanger tube offer spans the exchanger-specific configurations commonly required for bundles, shell-and-tube builds, and long-length thermal process assemblies.",
    typeItems: [
      pipeTubeTypeItem(
        "heat-exchanger",
        "Heat Exchanger Tubes",
        "stainless-steel-heat-exchanger-tubes1.png",
      ),
      pipeTubeTypeItem(
        "heat-exchanger",
        "Coil Tubing Heat Exchanger",
        "stainless-steel-coil-tubing-heat-exchanger1.png",
      ),
      pipeTubeTypeItem(
        "heat-exchanger",
        "Shell and Tube Exchanger",
        "stainless-steel-shell-and-tube-heat-exchanger1.png",
      ),
      pipeTubeTypeItem(
        "heat-exchanger",
        "Straight Exchanger Tubing",
        "stainless-steel-heat-exchanger-straight-tubing1.png",
      ),
      pipeTubeTypeItem(
        "heat-exchanger",
        "Seamless Exchanger Tubes",
        "ss-seamless-heat-exchanger-tubes1.png",
      ),
    ],
  },
  {
    slug: "boiler",
    name: "Stainless Steel Boiler Tube",
    subCategory: "Boiler Tubes",
    materialGroup: "special",
    imageFile: "boiler-tube1.png",
    sourceUrl:
      "https://www.triloksteel.com/stainless-steel-boiler-tubes.html",
    descriptionParagraphs: [
      "Metallo's stainless boiler tubing range is built for steam-duty, water-tube, and high-temperature package work where schedule discipline, clean internal flow paths, and dependable stainless metallurgy are essential. The sourced specification set references ASTM A249, A269, A312, A554, and A270 families, giving the range flexibility across welded and seamless boiler tubing supply.",
      "This card is aimed at customers buying for pressure sections, economizers, heat-recovery upgrades, or stainless retrofits in moisture- and corrosion-sensitive boiler environments. Metallo positions the family where boiler duty needs a cleaner stainless alternative to conventional carbon tubing without sacrificing fabrication readiness.",
    ],
    grades: ["304", "304L", "316", "316L", "316Ti", "321", "347"],
    standards: [
      "ASTM A249",
      "ASTM A269",
      "ASTM A312",
      "ASTM A554",
      "ASTM A270",
      "ASTM A213",
    ],
    sizeRange:
      '1/8" through 6" nominal tube and boiler-size coverage for welded and seamless supply.',
    wallThickness:
      "SCH 5 through SCH 160, including XS, XXS, and heavy-wall boiler tubing requirements.",
    length: "Single random, double random, and fabricated boiler-cut lengths.",
    endFinish: "Beveled end, plain end, and threaded options.",
    surfaceFinish: "2B, No.1, No.4, and No.8 mirror finish.",
    typeSummary: [
      "Boiler tube",
      "Seamless boiler tubing",
      "Welded boiler tube",
      "Water-tube boiler tubing",
      "Pressure-duty stainless tubing",
    ],
    materialFamilies: [
      "Austenitic boiler tube",
      "High-temperature stainless tubing",
      "Steam and condensate service tube",
    ],
    testing:
      "Schedule verification, surface-finish checks, MTC review, and fabrication support including welding, decoiling, cutting, bending, punching, and moulding.",
    application:
      "Boilers, economizers, superheaters, heat-recovery equipment, and stainless steam-duty tube bundles.",
    applications: ["Boilers", "Steam Systems", "Heat Recovery", "Power Utilities"],
    typeGalleryIntro:
      "Metallo's boiler tube gallery reflects the formats commonly procured for pressure sections, water-tube service, and stainless boiler retrofits.",
    typeItems: [
      pipeTubeTypeItem(
        "boiler",
        "Boiler Tube",
        "stainless-steel-boiler-tube1.png",
      ),
      pipeTubeTypeItem(
        "boiler",
        "SS 304 Seamless Boiler Tubing",
        "ss-304-seamless-boiler-tubing1.png",
      ),
      pipeTubeTypeItem(
        "boiler",
        "Water Tube Boiler",
        "stainless-steel-water-tube-boiler1.png",
      ),
      pipeTubeTypeItem(
        "boiler",
        "Seamless Boiler Tubes",
        "ss-seamless-boiler-tubes1.png",
      ),
      pipeTubeTypeItem(
        "boiler",
        "Welded Boiler Tube",
        "stainless-steel-welded-boiler-tube1.png",
      ),
    ],
  },
  {
    slug: "gi-pipe",
    name: "Galvanized Iron Conduit and Utility Pipe",
    subCategory: "GI / Conduit Pipes",
    materialGroup: "gi",
    imageFile: "conduit-pipe.jpg",
    imagePath: steelImage("Galvanised-Iron-Pipe.png"),
    sourceUrl: "https://www.triloksteel.com/stainless-steel-conduit-pipe.html",
    descriptionParagraphs: [
      "Metallo's galvanized iron conduit and utility pipe range is intended for cable protection, low-pressure service, and exposed utility routing where a zinc-coated exterior still makes the most commercial sense. The sourced conduit reference highlights rigid threaded installation, galvanized construction, smooth-finish conduit supply, and practical size coverage used in electrical and building services work.",
      "We position this family for commercial buildings, utility corridors, maintenance retrofits, and plant support systems that need dependable conduit runs without moving into stainless for every application. It keeps the Steel page's GI offering active for buyers who specifically want galvanized pipe and conduit options alongside stainless and specialty ranges.",
    ],
    grades: [
      "Galvanized Iron",
      "Zinc-Coated Mild Steel",
      "Hot-Dip Galvanized Utility Pipe",
      "Threaded GI Conduit",
    ],
    standards: ["BS 4568", "IS 9537", "IS 1239", "Project Utility Specifications"],
    sizeRange:
      '20 mm to 50 mm conduit sizes, plus project utility pipe requirements from 1/2" through commercial service diameters.',
    wallThickness:
      "Light, medium, and heavy utility wall builds, including threaded conduit wall configurations.",
    length: "3 meter and 4 meter trade lengths, plus project cut lengths.",
    endFinish:
      "Threaded, socket-ready, plain-end, and coupling-based installation formats.",
    surfaceFinish:
      "Hot-dip galvanized, zinc-coated, passivated, and site-ready utility finishes.",
    typeSummary: [
      "Rigid GI conduit",
      "Threaded GI pipe",
      "Electrical metallic tubing",
      "Utility protection tube",
      "Heavy-duty galvanized line",
    ],
    materialFamilies: [
      "Zinc-coated mild steel",
      "Galvanized utility conduit",
      "Building-services pipe systems",
    ],
    testing:
      "Coating checks, thread verification, dimensional inspection, and dispatch QC for electrical and utility installation work.",
    application:
      "Electrical conduit, building services, low-pressure utility runs, maintenance retrofits, and cable protection systems.",
    applications: [
      "Electrical Systems",
      "Commercial Buildings",
      "Utility Corridors",
      "Plant Maintenance",
    ],
    certifications: ["BS 4568", "IS 9537", "IS 1239", "Project QC"],
    typeGalleryIntro:
      "Metallo's GI pipe and conduit program keeps the practical galvanized formats available for electrical and utility projects that do not require full stainless construction.",
    typeItems: [
      steelTypeItem("Galvanized Iron Pipe", "Galvanised-Iron-Pipe.png"),
      steelTypeItem("Threaded Utility Pipe", "Customised-Steel-Pipe.png"),
      steelTypeItem("GI Conduit Runs", "pipes&tubes.jpg"),
      steelTypeItem("Commercial Utility Pipe", "pipes&tubes1.png"),
      steelTypeItem("Plant Support Conduit", "Structural-Steel.png"),
    ],
  },
  {
    slug: "ms-pipe",
    name: "Carbon Steel and Mild Steel Pipe",
    subCategory: "MS / CS Pipes",
    materialGroup: "ms",
    imageFile: "seamless-pipe.jpg",
    imagePath: steelImage("Customised-Steel-Pipe.png"),
    sourceUrl: "https://www.triloksteel.com/",
    descriptionParagraphs: [
      "Metallo's carbon steel and mild steel pipe range is included for buyers who still need mainstream line pipe, utility pipe, and fabrication stock alongside the stainless and specialty products in the Steel catalogue. The reference material used for this range covers carbon steel pipes and tubes, low-temperature carbon steel variants, and general MS pipe supply for industrial utility and structural service.",
      "We position this family for water transfer, fire lines, fabrication skids, support structures, plant utilities, and general project procurement where carbon steel remains the right balance of strength, availability, and cost. This restores the MS offering in the Pipes & Tubes tab without falling back to placeholder-only content.",
    ],
    grades: [
      "ASTM A106 Grade B / C",
      "ASTM A53 Grade B",
      "API 5L Grade B / X42 / X52",
      "IS 1239",
      "Low Temperature Carbon Steel",
    ],
    standards: ["ASTM A106", "ASTM A53", "API 5L", "IS 1239", "EN 10255"],
    sizeRange:
      '1/2" NB to 24" NB line-pipe supply, with project OD and schedule combinations for utility and fabrication work.',
    wallThickness:
      "SCH 10 to SCH 160, medium and heavy classes, and custom project wall combinations.",
    length: "6 meter, 12 meter, single random, double random, and cut lengths.",
    endFinish:
      "Plain, beveled, threaded, grooved, and fabrication-ready cut ends.",
    surfaceFinish:
      "Black, varnished, mill finish, primer-coated, and galvanized-on-request supply.",
    typeSummary: [
      "Seamless carbon pipe",
      "ERW mild steel pipe",
      "Line pipe",
      "Structural utility pipe",
      "Low-temperature carbon pipe",
    ],
    materialFamilies: [
      "Mild steel utility pipe",
      "Carbon steel line pipe",
      "Low-temperature carbon steel",
    ],
    testing:
      "Hydro testing, dimensional checks, MTC review, and project QC for utility, line-pipe, and fabrication supply.",
    application:
      "Water transmission, fire protection, structural fabrication, plant utilities, and general industrial piping.",
    applications: [
      "Water Systems",
      "Fire Protection",
      "Structural Fabrication",
      "Industrial Utilities",
    ],
    certifications: ["ASTM / API", "EN 10204 3.1", "Hydro Tested", "Project QC"],
    typeGalleryIntro:
      "Metallo's MS and carbon-steel pipe range covers the practical pipe forms most often used in plant utility, fabrication, and general industrial projects.",
    typeItems: [
      steelTypeItem("Carbon Steel Utility Pipe", "Customised-Steel-Pipe.png"),
      steelTypeItem("Project Line Pipe", "pipes&tubes.jpg"),
      steelTypeItem("Mild Steel Pipe Stock", "pipes&tubes1.png"),
      steelTypeItem("Fabrication Pipe Supply", "structural-steel-product-range.jpg"),
      steelTypeItem("Industrial Support Pipe", "Structural-Steel.png"),
    ],
  },
  {
    slug: "duplex",
    name: "Duplex Stainless Pipe and Tube",
    subCategory: "Duplex Pipe and Tube",
    materialGroup: "special",
    imageFile: "duplex-pipe1.png",
    sourceUrl: "https://www.triloksteel.com/duplex-pipe.html",
    descriptionParagraphs: [
      "Metallo supplies duplex stainless pipe and tube for chloride-bearing, pressure-intensive, and mechanically demanding service where standard austenitic stainless can be stretched beyond its comfort zone. The sourced range is built around ASTM A790 grades S31803 and S32205, with schedule, wall-thickness, and finish combinations that support seawater, offshore, chemical, and process-plant service.",
      "Because the source also calls out square, round, coiled, U-shape, hollow, hydraulic, and tube formats, this range gives project teams a broader duplex toolkit than a simple pipe-only listing. Metallo positions it where corrosion performance and higher strength have to work together across fluid lines, fabrications, and long-life plant assets.",
    ],
    grades: ["UNS S31803", "UNS S32205", "Duplex 2205", "Project Super Duplex"],
    standards: ["ASTM A790", "ASTM A789", "ASME", "EN", "DIN", "JIS", "GB"],
    sizeRange:
      'Tube OD from 6 mm to 250 mm, pipe sizes up to 12" NB, and sourced dimensional coverage extending to 1219.2 mm OD for project supply.',
    wallThickness:
      "0.3 mm to 50 mm with SCH 5, SCH 10, SCH 40, SCH 80, SCH 80S, SCH 160, XS, and XXS availability.",
    length: "Single random, double random, standard, and cut lengths.",
    endFinish: "Beveled end, plain end, and threaded pipe options.",
    surfaceFinish:
      "Annealed and pickled, mirror finish, polished, bright annealed, No.1, No.4, BA, 2B, HL, and 8K.",
    typeSummary: [
      "Seamless duplex pipe",
      "Welded duplex pipe",
      "Duplex tube",
      "Hydraulic duplex tube",
      "Coiled and U-shape duplex tube",
    ],
    materialFamilies: [
      "Duplex 2205",
      "Pressure-duty duplex tube",
      "Corrosion-resistant process pipe",
    ],
    testing:
      "Dimensional verification, schedule control, finish checks, MTC review, and project packing for high-corrosion service.",
    application:
      "Seawater, offshore, desalination, chemical processing, and mechanically demanding stainless piping systems.",
    applications: ["Offshore", "Desalination", "Chemical Processing", "Marine Systems"],
    typeGalleryIntro:
      "Metallo's duplex supply range goes beyond standard straight pipe by covering the welded, seamless, tube, and special-form variants most often specified in corrosion-intensive projects.",
    typeItems: [
      pipeTubeTypeItem(
        "duplex",
        "Duplex 2205 Seamless Pipe",
        "duplex-2205-seamless-pipe1.png",
      ),
      pipeTubeTypeItem("duplex", "Duplex 2205 Tube", "duplex-2205-tube1.png"),
      pipeTubeTypeItem(
        "duplex",
        "ASTM A790 S32205 Tubing",
        "astm-a790-gr-s32205-tubing1.png",
      ),
      pipeTubeTypeItem(
        "duplex",
        "Duplex Stainless Pipe",
        "duplex-stainless-steel-pipe1.png",
      ),
      pipeTubeTypeItem("duplex", "2205 ERW Pipe", "2205-steel-erw-pipe1.pngg"),
    ],
  },
  {
    slug: "hollow",
    name: "Stainless Steel Hollow Section",
    subCategory: "Hollow Sections",
    materialGroup: "special",
    imageFile: "hollow-section1.png",
    sourceUrl:
      "https://www.triloksteel.com/stainless-steel-hollow-section.html",
    descriptionParagraphs: [
      "Metallo supplies stainless hollow sections for architectural, fabrication, and structural work where the section profile itself is part of the design requirement. The sourced range covers round, square, and rectangular hollow sections under ASTM A554 and ASTM A312 with delivery conditions that include polished, annealed and pickled, cold drawn, and bright annealed supply.",
      "This family is ideal for stainless railings, support frames, skids, machine structures, exposed fabrication, and structural members that benefit from corrosion resistance without sacrificing appearance. Metallo positions it as the stainless answer for projects that sit between pressure piping and finished metalwork.",
    ],
    grades: ["304", "304L", "308", "309S", "310", "310S", "316", "316L"],
    standards: [
      "ASTM A554",
      "ASTM A312",
      "ANSI / ASME B36.10M",
      "ANSI / ASME B36.19M",
    ],
    sizeRange:
      "Round, square, and rectangular sections from 12.7 mm profiles through 200 x 100 mm hollow sections, with heavier structural sizes supplied to project requirements.",
    wallThickness:
      "SCH 5 through SCH 160, including XS, XXS, and formed section wall variants.",
    length: "Mill lengths and project cut lengths for fabrication and structure work.",
    endFinish: "Plain cut, deburred, polished, and fabrication-ready ends.",
    surfaceFinish: "No.1, 2B, No.4, and No.8 mirror finish.",
    typeSummary: [
      "Square hollow section",
      "Circular hollow section",
      "Rectangular hollow tube",
      "Seamless hollow tube",
      "Structural stainless section",
    ],
    materialFamilies: [
      "Austenitic hollow section",
      "Architectural stainless profiles",
      "Structural stainless tube",
    ],
    testing:
      "Section-size verification, wall-thickness checks, welding-route control, and finish validation for exposed fabrication work.",
    application:
      "Architectural fabrication, support frames, handrails, machine bases, skids, and utility structures.",
    applications: ["Architecture", "Fabrication", "Support Structures", "Machine Frames"],
    typeGalleryIntro:
      "Metallo's hollow section range covers the profile combinations most often specified for stainless structural and architectural fabrication.",
    typeItems: [
      pipeTubeTypeItem(
        "hollow",
        "Square Hollow Section",
        "stainless-steel-square-hollow-section1.png",
      ),
      pipeTubeTypeItem(
        "hollow",
        "Circular Hollow Section",
        "stainless-steel-circular-hollow-section1.png",
      ),
      pipeTubeTypeItem(
        "hollow",
        "Rectangular Hollow Tube",
        "astm-a554-grade-201-rectangular-hollow-tube1.png",
      ),
      pipeTubeTypeItem(
        "hollow",
        "316 Circular Hollow Tube",
        "ss-316-circular-hollow-tube1.png",
      ),
      pipeTubeTypeItem(
        "hollow",
        "316L Seamless Hollow Tube",
        "astm-a554-tp-316l-seamless-hollow-tube1.png",
      ),
    ],
  },
  {
    slug: "conduit",
    name: "Stainless Steel Conduit Pipe",
    subCategory: "Conduit Tubes",
    materialGroup: "special",
    imageFile: "conduit-pipe1.png",
    sourceUrl:
      "https://www.triloksteel.com/stainless-steel-conduit-pipe.html",
    descriptionParagraphs: [
      "Metallo's stainless conduit program is built for electrical and utility protection in corrosive or washdown-heavy environments where painted or galvanized conduit falls short over the long term. The sourced range centers on rigid threaded conduit in 304 and 316 stainless with common sizes from 20 mm to 50 mm and NPT-based entries for project installations.",
      "Because the product page also calls out UL 6A and cULus-backed standards plus brushed finishes, this family fits applications where inspectors, operators, and maintenance teams need both compliance and appearance. Metallo positions it for food, marine, utility, and industrial cable-routing systems where longevity is more valuable than low first cost.",
    ],
    grades: [
      "304",
      "304L",
      "316",
      "316L",
      "EN 1.4301",
      "EN 1.4307",
      "EN 1.4401",
      "EN 1.4404",
    ],
    standards: ["ASTM A554", "BS 4568", "CSA C22.2 No.45.2-08", "cULus", "UL 6A"],
    sizeRange:
      '20 mm, 25 mm, 32 mm, 40 mm, 50 mm, and 1/2" to 2" NPT conduit sizes.',
    wallThickness:
      "1.5 mm thread configuration and sourced conduit wall builds for rigid electrical service.",
    length: "3 meter standard lengths.",
    endFinish: "Threaded connection, rigid conduit format, and ready-to-couple supply.",
    surfaceFinish: "Brushed stainless finish.",
    typeSummary: [
      "Rigid conduit",
      "Conduit tube",
      "Electrical metallic tubing",
      "Flexible conduit",
      "Threaded conduit pipe",
    ],
    materialFamilies: [
      "304 stainless conduit",
      "316 stainless conduit",
      "Corrosion-resistant cable routing systems",
    ],
    testing:
      "Conduit-size checks, thread verification, finish inspection, and compliance-backed supply aligned with electrical conduit service.",
    application:
      "Electrical conduit, cable routing, hygienic facilities, marine installations, and corrosive industrial environments.",
    applications: [
      "Electrical Systems",
      "Food Facilities",
      "Marine Installations",
      "Industrial Utilities",
    ],
    certifications: ["UL 6A", "cULus", "CSA C22.2", "ASTM A554"],
    typeGalleryIntro:
      "Metallo's conduit range spans the rigid, tube, EMT, and flexible stainless conduit forms used to protect wiring in demanding industrial environments.",
    typeItems: [
      pipeTubeTypeItem(
        "conduit",
        "Conduit Tube",
        "stainless-steel-conduit-tube1.png",
      ),
      pipeTubeTypeItem(
        "conduit",
        "Stainless Conduits",
        "stainless-steel-conduits1.png",
      ),
      pipeTubeTypeItem(
        "conduit",
        "Electrical Metallic Tubing",
        "electrical-metallic-tubing1.png",
      ),
      pipeTubeTypeItem(
        "conduit",
        "316L Rigid Conduit",
        "aisi-316l-rigid-stainless-steel-conduit1.png",
      ),
      pipeTubeTypeItem(
        "conduit",
        "Flexible Stainless Conduit",
        "stainless-steel-flexible-conduit1.png",
      ),
    ],
  },
];

const toSteelProduct = (source: SteelPipeTubeSource): SteelProduct => ({
  Category: "Pipes & Tubes",
  "Sub-Category": source.subCategory,
  materialGroup: source.materialGroup,
  "Product Name": source.name,
  Description: source.descriptionParagraphs[0],
  Grades: formatSteelList(source.grades, 6),
  Standards: formatSteelList(source.standards, 6),
  Application: source.application,
  thumbnail: source.imagePath ?? pipeTubeImage(source.imageFile),
  OD: source.sizeRange,
  WallThickness: source.wallThickness,
  Length: source.length,
  EndFinish: source.endFinish,
  SurfaceFinish: source.surfaceFinish,
  Type: formatSteelList(source.typeSummary, 5),
  Material: formatSteelList(source.materialFamilies, 5),
  Certification:
    source.certifications ?? Array.from(PIPE_TUBE_COMMON_CERTIFICATIONS),
  Testing: source.testing,
  Applications: source.applications,
  applicationImage: source.imagePath ?? pipeTubeImage(source.imageFile),
  descriptionParagraphs: source.descriptionParagraphs,
  typeGallery: createSteelTypeGallery(
    `${source.name} Types`,
    source.typeGalleryIntro,
    source.typeItems,
  ),
  sourceUrl: source.sourceUrl,
});

export const STEEL_PIPE_TUBE_PRODUCTS: SteelProduct[] =
  STEEL_PIPE_TUBE_SOURCES.map(toSteelProduct);
