import { SITE_IMAGES } from '@/config/images';
import type { SteelProduct } from "./steelTypes";
import { formatSteelList } from "./steelCatalogUtils";

const STEEL_FLANGE_IMAGE_DIR = "/Steel/flanges";



const FLANGE_COMMON_MATERIALS = [
  "Carbon steel forgings",
  "Stainless steel forgings",
  "Alloy steel grades",
  "Duplex and Super Duplex",
  "Nickel alloys",
] as const;

const FLANGE_COMMON_CERTIFICATIONS = [
  "ASME",
  "API",
  "MSS SP",
  "EN 10204 3.1",
] as const;

interface SteelFlangeSource {
  slug: string;
  name: string;
  subCategory: string;
  thumbnail: string;
  sourceUrl: string;
  descriptionParagraphs: string[];
  grades: string[];
  standards: string[];
  sizeRange: string;
  pressureClass: string;
  type: string;
  facingTypes: string;
  wallThickness?: string;
  surfaceFinish?: string;
  testing: string;
  application: string;
  applications: string[];
  certifications?: string[];
  materialFamilies?: string[];
}

const STEEL_FLANGE_SOURCES: SteelFlangeSource[] = [
  {
    slug: "slip-on-flanges",
    name: "Slip-On Flanges",
    subCategory: "Slip-On Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.slipOnFlange,
    sourceUrl: "",
    descriptionParagraphs: [
      "Metallo supplies slip-on flanges for utility, cooling-water, firefighting, and low-to-medium pressure process lines where fast alignment and practical fabrication control matter as much as pressure containment. The sourced range is built around double fillet welding, allowing fabricators to slide the pipe into position before completing the inside and outside welds.",
      "The product family covers ASME and DIN pressure classes, broad schedule compatibility, and multiple facing options so engineering teams can match the flange to general plant service as well as more demanding petrochemical lines. Metallo positions this range where installation speed, economical fabrication, and dependable sealing need to stay balanced.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF1 / LF2 / LF3",
      "ASTM A694 F42 / F52 / F60 / F65 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F321 / F347 / F310 / F904L",
      "ASTM A182 F11 / F22 / F1 / F5 / F9 / F91",
      "Duplex 2205 / Super Duplex 2507",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Titanium Gr2",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A",
      "ASME B16.47 Series B",
      "MSS SP44",
      "API 605",
      "AWWA C207",
      "BS 10",
    ],
    sizeRange: '1/2" to 24" standard, 26" to 60" large diameter, custom up to 200".',
    pressureClass:
      "ASME 150# to 2500# and DIN / PN 6 to PN 100 coverage.",
    type: "Slip-on flange with inside and outside fillet welding.",
    facingTypes:
      "Raised Face (RF), Flat Face (FF), RTJ, Tongue and Groove, Male / Female.",
    wallThickness: "Sch 10 through XXS.",
    surfaceFinish:
      "Anti-rust oil, black paint, yellow transparent coating, HDG, and zinc plated finishes.",
    testing:
      "Hydrostatic testing, ultrasonic testing, magnetic particle inspection, PMI, and dimensional verification.",
    application:
      "Cooling-water, firefighting, utility, and low-to-medium pressure petrochemical piping systems.",
    applications: [
      "Cooling Water Lines",
      "Firefighting Networks",
      "Utility Piping",
      "Petrochemical Plants",
    ],
  },
  {
    slug: "blind-spectacle-blind-flanges",
    name: "Blind and Spectacle Blind Flanges",
    subCategory: "Isolation Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.blindSpectacleBlindBanner,
    sourceUrl: "https://www.sotco.in/spectacle-blind-flange.html",
    descriptionParagraphs: [
      "Metallo uses blind and spectacle blind flanges where positive isolation, hydro-testing, and visible safety status are critical to plant operations. Blind flanges close line ends and vessel nozzles, while spectacle blinds provide a one-piece open-and-closed isolation device that crews can identify immediately during maintenance work.",
      "This sourced range covers high pressure classes, multiple facing styles, forged and plate-based constructions, and large custom diameters for refinery, terminal, and pipeline isolation duties. Metallo positions the family for shutdown planning, process segregation, and pressure-boundary safety programs that cannot rely on temporary line blanks.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A516 Gr.70 plate",
      "ASTM A694 F42 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A240 plate for spectacle blinds",
      "ASTM A182 F11 / F22 / F5 / F9 / F91",
      "Duplex 2205 / Super Duplex",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Titanium",
    ],
    standards: [
      "ASME B16.5",
      "ASME B16.47 Series A",
      "ASME B16.47 Series B",
      "ASME B16.48",
      "API 590",
      "MSS SP-44",
      "API 605",
      "AWWA C207",
    ],
    sizeRange:
      'Blind flanges from 1/2" to 60", spectacle blinds from 1/2" to 48", with custom diameters up to 200".',
    pressureClass:
      "ASME Class 150 through 2500 and DIN / PN 6 through PN 160 coverage.",
    type:
      "Solid blind flanges and spectacle blind isolation sets for shut-off and maintenance isolation.",
    facingTypes:
      "Raised Face (RF), Flat Face (FF), RTJ, Tongue and Groove, and Male / Female.",
    surfaceFinish:
      "Anti-rust oil, black phosphate, yellow zinc, HDG, and PTFE-coated finishes.",
    testing:
      "Dimensional inspection, flatness control, PMI, machining verification, and pressure-boundary fit checks for shutdown isolation service.",
    application:
      "Pipeline isolation, end-of-line shut-off, hydro-testing, and maintenance safety in process plants.",
    applications: [
      "Pipeline Isolation",
      "Hydro-Testing",
      "Maintenance Safety",
      "End-of-Line Shut-Off",
    ],
  },
  {
    slug: "lap-joint-flanges",
    name: "Lap Joint Flanges",
    subCategory: "Lap Joint Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.lapJointFlangeBanner,
    sourceUrl: "https://www.sotco.in/lap-joint-flange.html",
    descriptionParagraphs: [
      "Metallo supplies lap joint flanges for systems that need frequent dismantling, easy bolt-hole alignment, and material-cost optimization around expensive process pipe. The flange stays loose on the pipe and works with a butt-welded stub end, allowing 360 degree rotation during installation and maintenance.",
      "This layout is especially useful where the wetted component must stay in stainless or alloy material but the backing flange can be specified more economically. Metallo positions the lap joint range for cleanout, inspection, and recurring maintenance access across complex process piping networks.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF1 / LF2 / LF3",
      "ASTM A694 F42 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F321 / F347 / F310 / F904L",
      "ASTM A182 F11 / F22 / F1 / F5 / F9 / F91",
      "Duplex 2205 / Super Duplex",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Copper Nickel",
    ],
    standards: [
      "ANSI B16.5",
      "ANSI B16.47 Series A",
      "ANSI B16.47 Series B",
      "MSS SP44",
      "API 605",
      "AWWA",
    ],
    sizeRange:
      '1/2" to 24" standard, 26" to 48" large diameter, and custom builds up to 1200 NB.',
    pressureClass:
      "ASME 150# to 2500# and DIN / PN 6 to PN 64 coverage.",
    type:
      "Loose backing flange used with a butt-welded lap joint stub end.",
    facingTypes: "Flat Face (FF), Raised Face (RF), and RTJ.",
    surfaceFinish:
      "Anti-rust paint, black oil finish, yellow transparent coating, zinc plated, and HDG finishes.",
    testing:
      "Dimensional inspection, fit-up verification with stub ends, PMI, and machining checks for repeatable field alignment.",
    application:
      "Lines that need routine dismantling, inspection, cleaning, and material-cost optimization.",
    applications: [
      "Inspection Access",
      "Cleaning Systems",
      "Corrosive Service Lines",
      "Maintenance-Heavy Plants",
    ],
  },
  {
    slug: "socket-weld-flanges",
    name: "Socket Weld Flanges",
    subCategory: "Socket Weld Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.socketWeldFlangeBanner,
    sourceUrl: "https://www.sotco.in/socket-weld-flange.html",
    descriptionParagraphs: [
      "Metallo positions socket weld flanges for high-pressure small-bore piping where bore alignment, low turbulence, and dependable fatigue performance matter. The counter-bored hub accepts the pipe directly, keeping the internal flow path smoother than many alternative flange constructions.",
      "This sourced range covers raised-face, flat-face, and RTJ options across ASME and DIN pressure classes, making it suitable for steam, hydraulic, and process-instrument tie-ins. Metallo uses the socket weld family where compact bore sizes and reliable weld geometry are more important than field-adjustable fit-up.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF1 / LF2 / LF3",
      "ASTM A694 F42 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F321 / F347 / F310 / F904L",
      "ASTM A182 F11 / F22 / F5 / F9 / F91",
      "Duplex 2205 / Super Duplex",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Copper Nickel",
    ],
    standards: [
      "ANSI B16.5",
      "ANSI B16.47 Series A",
      "ANSI B16.47 Series B",
      "MSS SP44",
      "API 605",
      "AWWA",
      "Custom drawings",
    ],
    sizeRange:
      '1/2" to 4" standard, up to 24" for lower pressure service, and custom builds up to 48".',
    pressureClass:
      "ASME Class 150 through 2500 and DIN / PN 6 through PN 64 coverage.",
    type:
      "Counter-bored socket weld flange with external fillet weld connection.",
    facingTypes: "Raised Face (RF), Flat Face (FF), and RTJ.",
    wallThickness:
      "Sch 10S, 40S, 80S, 160, and XXS bore matches based on pipe schedule.",
    surfaceFinish:
      "Anti-rust paint, black oil finish, yellow transparent coating, zinc plated, and HDG finishes.",
    testing:
      "Dimensional inspection, socket-bore verification, PMI, and weld-preparation checks for high-pressure small-bore service.",
    application:
      "Hydraulic, steam, and compact-bore high-pressure piping where flow smoothness is critical.",
    applications: [
      "Hydraulic Systems",
      "Steam Lines",
      "Instrumentation Tie-Ins",
      "High-Pressure Small Bore",
    ],
  },
  {
    slug: "weld-neck-flanges",
    name: "Weld Neck Flanges",
    subCategory: "Critical Application Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.weldNeckFlange,
    sourceUrl: "https://www.sotco.in/weld-neck-flange.html",
    descriptionParagraphs: [
      "Metallo's weld neck flange range is built for pressure, temperature, and cyclic loading conditions where stress transfer through a tapered hub is essential. The long hub profile reduces stress concentration at the weld junction and helps the bore transition cleanly into the pipe wall.",
      "This makes weld neck flanges the preferred fit for refineries, power stations, offshore systems, and other critical lines where full-penetration butt welding and radiography-backed joint quality are expected. Metallo uses this family for applications where reliability under severe service outweighs fabrication convenience.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF2",
      "ASTM A694 F42 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F321 / F347 / F310 / F904L",
      "ASTM A182 F11 / F22 / F5 / F9 / F91",
      "Duplex 2205 / Super Duplex",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Copper Nickel",
    ],
    standards: [
      "ANSI B16.5",
      "ANSI B16.47 Series A",
      "ANSI B16.47 Series B",
      "MSS SP44",
      "API 605",
      "AWWA",
    ],
    sizeRange:
      '1/2" to 24" standard, 26" to 48" large diameter, and custom builds up to 1200 NB.',
    pressureClass:
      "ASME 150# to 2500# and DIN / PN 6 to PN 100 coverage.",
    type: "Long-hub butt-weld flange for critical service piping.",
    facingTypes: "Raised Face (RF), Flat Face (FF), and RTJ.",
    wallThickness:
      "Sch 10 through XXS bore matching, specified to the mating pipe schedule.",
    surfaceFinish:
      "Anti-rust paint, black oil finish, yellow transparent coating, zinc plated, and HDG finishes.",
    testing:
      "Dimensional verification, bore matching, PMI, radiography-ready weld preparation, and critical-service machining checks.",
    application:
      "High-pressure, high-temperature, and cyclic-duty piping in energy and process sectors.",
    applications: [
      "Oil and Gas",
      "Power Generation",
      "Offshore Systems",
      "Critical Process Piping",
    ],
  },
  {
    slug: "orifice-flanges",
    name: "Orifice Flanges",
    subCategory: "Instrumentation Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.orificeFlangeBanner,
    sourceUrl: "https://www.sotco.in/orifice-flange.html",
    descriptionParagraphs: [
      "Metallo supplies orifice flanges for flow-metering installations that need integrated pressure taps, repeatable plate access, and measurement hardware that fits standard orifice systems. The sourced design builds the tapping points directly into the flange ring so instrumentation teams can avoid separate carriers or pipe-wall drilling.",
      "Each set is intended for differential-pressure measurement programs where inspection access and gasket replacement must happen without excessive disturbance to the pipeline. Metallo positions this family for custody transfer, utilities, and process-control applications that depend on precise, maintainable metering hardware.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF2",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F11 / F22",
      "Duplex / Super Duplex",
      "Inconel",
      "Monel",
    ],
    standards: ["ASME B16.36"],
    sizeRange: '1" to 24" standard coverage.',
    pressureClass:
      "Weld neck classes 300 to 2500; slip-on and threaded variants available in class 300.",
    type:
      'Orifice flange sets with 2 x 1/2" NPT tappings, jack screws, and precision plugs.',
    facingTypes:
      "Raised Face (RF) with smooth or serrated finish, plus RTJ options.",
    testing:
      "Dimensional inspection, tapping alignment verification, jack-screw fit checks, and metering-service machining control.",
    application:
      "Differential-pressure flow measurement for liquid, gas, and utility pipelines.",
    applications: [
      "Flow Metering",
      "Instrumentation Systems",
      "Process Control",
      "Utilities and Custody Transfer",
    ],
    certifications: ["ASME B16.36", ...FLANGE_COMMON_CERTIFICATIONS],
  },
  {
    slug: "threaded-flanges",
    name: "Threaded Flanges",
    subCategory: "Low Pressure Flanges",
    thumbnail: SITE_IMAGES.steel.flanges.threadedFlangeBanner,
    sourceUrl: "https://www.sotco.in/threaded-flange.html",
    descriptionParagraphs: [
      "Metallo supplies threaded flanges for services where welding is restricted, hazardous, or impractical because of field conditions or plant safety constraints. The internal taper thread matches the pipe thread so crews can assemble or remove the joint quickly without hot work.",
      "This makes the range useful for air, water, utility, and maintenance-driven plant systems that value safe installation, rapid dismantling, and straightforward replacement. Metallo positions threaded flanges for low-pressure duties where zero-heat installation is the main advantage and seal welding remains an option when project specifications call for it.",
    ],
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF2",
      "ASTM A694 F42 / F70",
      "ASTM A182 F304 / F304L / F316 / F316L",
      "ASTM A182 F321 / F347",
      "ASTM A182 F11 / F22 / F5 / F9 / F91",
      "Duplex / Super Duplex",
      "Inconel",
      "Monel",
      "Hastelloy C276",
    ],
    standards: [
      "ANSI B16.5",
      "ANSI B16.47",
      "MSS SP44",
      "API 605",
      "AWWA",
    ],
    sizeRange: '1/2" to 24" standard, with custom builds up to 48".',
    pressureClass:
      "ASME Class 150 through 2500 and DIN / PN 6 through PN 64 coverage.",
    type:
      "Screwed / threaded flange with NPT thread profile and optional seal welding.",
    facingTypes: "Raised Face (RF), Flat Face (FF), and RTJ.",
    testing:
      "Thread gauging, dimensional inspection, PMI, and leak-path fit verification for no-weld installations.",
    application:
      "Utility services and hazardous areas where welding is undesirable or restricted.",
    applications: [
      "Compressed Air",
      "Water Systems",
      "Hazardous Areas",
      "Maintenance-Driven Utilities",
    ],
  },
];

const toSteelProduct = (source: SteelFlangeSource): SteelProduct => ({
  Category: "Flanges",
  "Sub-Category": source.subCategory,
  "Product Name": source.name,
  Description: source.descriptionParagraphs[0],
  Grades: formatSteelList(source.grades, 6),
  Standards: formatSteelList(source.standards, 6),
  Application: source.application,
  thumbnail: source.thumbnail,
  OD: source.sizeRange,
  WallThickness: source.wallThickness,
  EndFinish: source.facingTypes,
  SurfaceFinish: source.surfaceFinish,
  "Pressure Class": source.pressureClass,
  Type: source.type,
  Material: formatSteelList(source.materialFamilies ?? FLANGE_COMMON_MATERIALS, 5),
  Certification:
    source.certifications ?? Array.from(FLANGE_COMMON_CERTIFICATIONS),
  Testing: source.testing,
  Applications: source.applications,
  applicationImage: source.thumbnail,
  descriptionParagraphs: source.descriptionParagraphs,
  sourceUrl: source.sourceUrl,
});

export const STEEL_FLANGE_PRODUCTS: SteelProduct[] =
  STEEL_FLANGE_SOURCES.map(toSteelProduct);
