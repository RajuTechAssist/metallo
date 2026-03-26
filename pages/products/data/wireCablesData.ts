import type {
  CategoryConfig,
  ProductCTAConfig,
  ProductHeroConfig,
  ProductQABannerConfig,
  ProductSpecItem,
} from "../../../components/product";
import { slugify } from "../../../components/product";
import type { WireCableProduct } from "./wireCablesTypes";

const LT_CATEGORY = "LT Power & Control Cable";
const HT_CATEGORY = "HT Power Cable";

const wireImage = (asset: string) => `/wire&cable/${asset}`;
export const CATALOGUE_DOWNLOAD = "/Wire_Cables_Power_Control_Catalogue.pdf";
const havellsCropImage = (asset: string) =>
  new URL(
    `../../../scraped-sources/wire-cables/generated-crops/${asset}.png`,
    import.meta.url,
  ).href;

const spec = (
  label: string,
  value: string,
  icon = "check_circle",
): ProductSpecItem => ({
  label,
  value,
  icon,
});

const paragraphs = (...items: string[]) =>
  items.filter((item) => item.trim().length > 0);

interface WireCableProductInput {
  category: string;
  subCategory: string;
  name: string;
  descriptionParagraphs: string[];
  panelImage: string;
  technicalSpecifications: ProductSpecItem[];
  constructionSpecifications: ProductSpecItem[];
  applicableStandards: string[];
  insulatedMaterials: string[];
  industries: string[];
  certifications: string[];
  rangeNotes?: string[];
}

interface LTPowerProductOptions {
  subCategory: string;
  name: string;
  image: string;
  typeOfCable: string;
  ratedVoltage: string;
  sizeRange: string;
  application: string;
  identification: string;
  familyLabel: string;
  routeText: string;
  protectionText: string;
  constructionSpecifications: ProductSpecItem[];
  insulatedMaterials: string[];
  industries?: string[];
}

interface LTControlProductOptions {
  subCategory: string;
  image: string;
  name: string;
  typeOfCable: string;
  sizeRange: string;
  conductorSize: string;
  armoured: boolean;
  constructionSpecifications: ProductSpecItem[];
}

interface HTProductOptions {
  subCategory: string;
  image: string;
  name: string;
  typeOfCable: string;
  ratedVoltage: string;
  sizeRange: string;
  identification: string;
  coreFamily: string;
  constructionSpecifications: ProductSpecItem[];
  insulatedMaterials: string[];
}

const createProduct = (input: WireCableProductInput): WireCableProduct => ({
  id: slugify(`${input.category}-${input.subCategory}-${input.name}`),
  Category: input.category,
  "Sub-Category": input.subCategory,
  "Product Name": input.name,
  Description: input.descriptionParagraphs[0],
  descriptionParagraphs: input.descriptionParagraphs,
  thumbnail: input.panelImage,
  panelImage: input.panelImage,
  technicalSpecifications: input.technicalSpecifications,
  constructionSpecifications: input.constructionSpecifications,
  applicableStandards: input.applicableStandards,
  insulatedMaterials: input.insulatedMaterials,
  industries: input.industries,
  certifications: input.certifications,
  rangeNotes: input.rangeNotes,
});

const technicalDetails = (input: {
  typeOfCable: string;
  ratedVoltage: string;
  sizeRange: string;
  specification: string;
  application: string;
  identification: string;
  packing?: string;
}): ProductSpecItem[] => [
  spec("Type Of Cable", input.typeOfCable, "sell"),
  spec("Rated Voltage", input.ratedVoltage, "bolt"),
  spec("Size Range", input.sizeRange, "straighten"),
  spec("Specification", input.specification, "rule"),
  spec("Application", input.application, "electrical_services"),
  spec("Identification of Core", input.identification, "palette"),
  spec("Type Of Packing", input.packing || "Wooden Drum", "inventory_2"),
];

const LT_POWER_STANDARDS = ["IEC 60502-1", "BS 5467"];
const LT_CONTROL_STANDARDS = ["IEC 60502-1", "BS 5467"];
const HT_POWER_STANDARDS = ["IEC 60502-2", "BS 6622"];

const LT_POWER_INDUSTRIES = [
  "Plant electrical distribution",
  "Utilities and substations",
  "OEM panels and MCCs",
  "Commercial infrastructure",
];

const LT_CONTROL_INDUSTRIES = [
  "Automation panels",
  "MCC marshalling",
  "Process interlocks",
  "Control and relay circuits",
];

const LT_INTERMEDIATE_INDUSTRIES = [
  "Captive power distribution",
  "Heavy industrial feeders",
  "Utilities and substations",
  "Plant-wide power circuits",
];

const HT_INDUSTRIES = [
  "Utility substations",
  "Industrial distribution networks",
  "Oil, gas and process plants",
  "Cement, metals and heavy industry",
];

const LT_POWER_COMPLIANCE = [
  "IEC 60502-1 design alignment",
  "BS 5467 construction reference",
  "Routine conductor and insulation test protocol",
  "Core identification and drum-wise traceability support",
];

const LT_CONTROL_COMPLIANCE = [
  "IEC 60502-1 design alignment",
  "BS 5467 control-cable construction reference",
  "Numbered-core identification for termination discipline",
  "Routine electrical testing and drum-wise traceability support",
];

const HT_POWER_COMPLIANCE = [
  "IEC 60502-2 design alignment",
  "BS 6622 construction reference",
  "Screened cable build for medium-voltage duty",
  "Routine electrical test protocol and traceability support",
];

const buildLTPowerDescription = (input: {
  ratedVoltage: string;
  familyLabel: string;
  routeText: string;
  protectionText: string;
}) =>
  paragraphs(
    `Metallo supplies this ${input.ratedVoltage} ${input.familyLabel} for ${input.routeText}.`,
    input.protectionText,
  );

const buildLTControlDescription = (input: {
  conductorSize: string;
  armoured: boolean;
}) =>
  paragraphs(
    `Metallo uses this numbered-core ${input.conductorSize} XLPE control cable for MCC marshalling, interlocks, annunciation loops, and panel-to-field control wiring where orderly identification is essential.`,
    input.armoured
      ? "The armoured build fits plant cable trenches, outdoor runs, and exposed routes that need additional mechanical protection without changing the base control-cable logic."
      : "The unarmoured build keeps routing compact inside protected trays, ducts, and control panel layouts where neat termination and manageable bend radius matter most.",
  );

const buildHTDescription = (input: {
  ratedVoltage: string;
  coreFamily: string;
}) =>
  paragraphs(
    `Metallo applies this screened ${input.ratedVoltage} HT ${input.coreFamily} to medium-voltage distribution circuits where conductor screening, insulation screening, metallic screening, and armouring are required for stable field performance.`,
    "It is suited to utility substations, heavy-industry feeders, and plant distribution networks that need dependable electrical performance together with robust mechanical protection and disciplined installation practice.",
  );

const ltPowerProduct = (input: LTPowerProductOptions): WireCableProduct =>
  createProduct({
    category: LT_CATEGORY,
    subCategory: input.subCategory,
    name: input.name,
    descriptionParagraphs: buildLTPowerDescription({
      ratedVoltage: input.ratedVoltage,
      familyLabel: input.familyLabel,
      routeText: input.routeText,
      protectionText: input.protectionText,
    }),
    panelImage: havellsCropImage(input.image),
    technicalSpecifications: technicalDetails({
      typeOfCable: input.typeOfCable,
      ratedVoltage: input.ratedVoltage,
      sizeRange: input.sizeRange,
      specification: "IEC-60502-1",
      application: input.application,
      identification: input.identification,
    }),
    constructionSpecifications: input.constructionSpecifications,
    applicableStandards: LT_POWER_STANDARDS,
    insulatedMaterials: input.insulatedMaterials,
    industries: input.industries || LT_POWER_INDUSTRIES,
    certifications: LT_POWER_COMPLIANCE,
  });

const ltControlProduct = (input: LTControlProductOptions): WireCableProduct =>
  createProduct({
    category: LT_CATEGORY,
    subCategory: input.subCategory,
    name: input.name,
    descriptionParagraphs: buildLTControlDescription({
      conductorSize: input.conductorSize,
      armoured: input.armoured,
    }),
    panelImage: havellsCropImage(input.image),
    technicalSpecifications: technicalDetails({
      typeOfCable: input.typeOfCable,
      ratedVoltage: "0.6/1 kV",
      sizeRange: input.sizeRange,
      specification: "IEC-60502-1, BS 5467",
      application: "For Electric Power Circuit",
      identification: "Black with white numbering",
    }),
    constructionSpecifications: input.constructionSpecifications,
    applicableStandards: LT_CONTROL_STANDARDS,
    insulatedMaterials: [
      "XLPE insulation",
      "PVC inner sheath",
      "PVC outer sheath",
    ],
    industries: LT_CONTROL_INDUSTRIES,
    certifications: LT_CONTROL_COMPLIANCE,
  });

const htProduct = (input: HTProductOptions): WireCableProduct =>
  createProduct({
    category: HT_CATEGORY,
    subCategory: input.subCategory,
    name: input.name,
    descriptionParagraphs: buildHTDescription({
      ratedVoltage: input.ratedVoltage,
      coreFamily: input.coreFamily,
    }),
    panelImage: havellsCropImage(input.image),
    technicalSpecifications: technicalDetails({
      typeOfCable: input.typeOfCable,
      ratedVoltage: input.ratedVoltage,
      sizeRange: input.sizeRange,
      specification: "IEC-60502-2",
      application: "For Electric Power Circuit",
      identification: input.identification,
    }),
    constructionSpecifications: input.constructionSpecifications,
    applicableStandards: HT_POWER_STANDARDS,
    insulatedMaterials: input.insulatedMaterials,
    industries: HT_INDUSTRIES,
    certifications: HT_POWER_COMPLIANCE,
  });

export const HERO: ProductHeroConfig = {
  backgroundImage: wireImage("Hero_wire&cable.png"),
  title: "Wire & Cables",
  subtitle: "Power & Control Cables",
  description:
    "Metallo supplies industrial Power & Control cables across LT Power & Control Cable and HT Power Cable ranges, with catalogue-aligned product naming, construction details, applicable standards, and application guidance organized for faster engineering selection.",
  breadcrumbLabel: "Wire & Cables",
};

export const CTA: ProductCTAConfig = {
  title: "Need help choosing LT or HT power cable?",
  description:
    "Share voltage grade, conductor preference, installation route, armouring need, and project application. Metallo can align the right power or control cable family for tendering, BOQ preparation, and technical submittals.",
  ctaLabel: "Request Cable Selection Support",
  ctaIcon: "request_quote",
};

export const QA_BANNER: ProductQABannerConfig = {
  title: "Engineered for Industrial Power Networks",
  items: [
    {
      icon: "bolt",
      title: "16 LT Cable Variants",
      desc: "The LT section covers single-core, multicore, numbered control, and intermediate-voltage builds for feeders, control circuits, and plant distribution.",
    },
    {
      icon: "offline_bolt",
      title: "10 HT Cable Variants",
      desc: "The HT range spans screened single-core and three-core constructions from 3.6/6.0 (7.2) kV up to 18/30 (36) kV for industrial and utility duty.",
    },
    {
      icon: "rule",
      title: "Standards & Materials Visible",
      desc: "Each product card surfaces applicable standards, insulated materials, technical specifications, and construction details in one clear engineering view.",
    },
    {
      icon: "domain",
      title: "Application-Led Selection",
      desc: "Industries, applications, and compliance cues are highlighted so project teams can shortlist the right cable family without scanning the full catalogue first.",
    },
  ],
};

export const CERT_BADGE = "IEC 60502-1 / IEC 60502-2 / BS 5467 / BS 6622";

export const CATEGORIES: readonly CategoryConfig[] = [
  {
    key: "power-control",
    label: "Power & Control",
    icon: "bolt",
    match: [LT_CATEGORY, HT_CATEGORY],
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export const POWER_CONTROL_GROUPS = [
  {
    key: "lt",
    label: "LT Power & Control Cable",
    match: LT_CATEGORY,
  },
  {
    key: "ht",
    label: "HT Power Cable",
    match: HT_CATEGORY,
  },
] as const;

export type PowerControlGroupKey =
  (typeof POWER_CONTROL_GROUPS)[number]["key"];

export const PRODUCTS: WireCableProduct[] = [
  ltPowerProduct({
    subCategory: "0.6/1 kV | Single Core",
    name: "XLPE Insulated Unarmoured Single Core Cable",
    image: "lt-single-core-unarmoured",
    typeOfCable: "N2XY/NA2XY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "6 to 1000 sq mm",
    application: "For Electric Power Circuit",
    identification: "Natural",
    familyLabel: "single-core XLPE power cable",
    routeText:
      "low-voltage feeders, panel interconnections, and protected tray or duct routes",
    protectionText:
      "The unarmoured build keeps termination straightforward while retaining XLPE insulation stability for industrial distribution networks, utilities, and commercial infrastructure.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Single Core",
    name: "XLPE Insulated Armoured Single Core Cable",
    image: "lt-single-core-armoured",
    typeOfCable: "N2XRaY/NA2XRaY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "6 to 1000 sq mm",
    application:
      "Indoor and outdoor installation direct burial where mechanical stress must be envisaged",
    identification: "Natural",
    familyLabel: "single-core XLPE power cable",
    routeText:
      "indoor or outdoor feeder routes, direct-buried sections, and installations with higher mechanical exposure",
    protectionText:
      "The round aluminium wire armouring adds the mechanical protection needed for tougher cable paths while preserving the same LT single-core selection logic for plant and utility distribution.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Two Core",
    name: "XLPE Insulated Unarmoured Two Core Cable",
    image: "lt-two-core-unarmoured",
    typeOfCable: "N2XY/NA2XY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "4 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red & Black",
    familyLabel: "two-core XLPE power cable",
    routeText:
      "compact low-voltage feeder runs where paired-core power distribution is required inside protected routing systems",
    protectionText:
      "This unarmoured construction keeps the cable compact for industrial boards, control-power distribution, and feeder loops while maintaining the same XLPE/PVC build philosophy.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Two Core",
    name: "XLPE Insulated Armoured Two Core Cable",
    image: "lt-two-core-armoured",
    typeOfCable: "N2XRY/NA2XRY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "6 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red & Black",
    familyLabel: "two-core XLPE power cable",
    routeText:
      "industrial feeder routes, trenches, and exposed installation paths where paired-core construction and mechanical protection are both required",
    protectionText:
      "Galvanized round steel wire armouring supports tougher site conditions while keeping the same two-core LT feeder format for plant and infrastructure projects.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Three Core",
    name: "XLPE Insulated Unarmoured Three Core Cable",
    image: "lt-three-core-unarmoured",
    typeOfCable: "N2XY/NA2XY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "4 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow & Blue",
    familyLabel: "three-core XLPE power cable",
    routeText:
      "balanced low-voltage power circuits in protected tray, duct, and indoor plant routing",
    protectionText:
      "The three-core unarmoured build suits panel feeders and industrial distribution circuits where phase identification is needed without the added bulk of armour.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Three Core",
    name: "XLPE Insulated Armoured Three Core Cable",
    image: "lt-three-core-armoured",
    typeOfCable: "N2XRY/NA2XRY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "4 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow & Blue",
    familyLabel: "three-core XLPE power cable",
    routeText:
      "three-phase low-voltage feeder routes where outdoor exposure, cable trenches, or mechanical stress call for armouring",
    protectionText:
      "Galvanized round steel wire armouring makes this build more resilient for plant distribution circuits while keeping the familiar three-core phase-identified arrangement.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Three & half Core",
    name: "XLPE Insulated Unarmoured Three & half Core Cable",
    image: "lt-three-half-core-unarmoured",
    typeOfCable: "N2XY/NA2XY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "25 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow, Blue & Black",
    familyLabel: "three & half core XLPE power cable",
    routeText:
      "three-phase plus neutral distribution where protected routing and orderly core identification are the main priorities",
    protectionText:
      "The unarmoured build keeps the cable manageable for plant boards, utility distribution, and commercial infrastructure where a neutral core is required inside a protected route.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Three & half Core",
    name: "XLPE Insulated Armoured Three & half Core Cable",
    image: "lt-three-half-core-armoured",
    typeOfCable: "N2XRY/NA2XRY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "25 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow, Blue & Black",
    familyLabel: "three & half core XLPE power cable",
    routeText:
      "three-phase plus neutral feeder routes where plant conditions demand stronger mechanical protection",
    protectionText:
      "Galvanized round steel wire armouring supports tougher industrial routing while preserving the same core arrangement used for balanced low-voltage distribution with neutral return.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Four Core",
    name: "XLPE Insulated Unarmoured Four Core Cable",
    image: "lt-four-core-unarmoured",
    typeOfCable: "N2XY/NA2XY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "4 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow, Blue & Black",
    familyLabel: "four-core XLPE power cable",
    routeText:
      "low-voltage distribution circuits that need four-core configuration inside protected trays, ducts, and indoor plant routes",
    protectionText:
      "This unarmoured build keeps the cable compact for distribution boards and packaged systems while retaining clear phase and auxiliary core identification.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltPowerProduct({
    subCategory: "0.6/1 kV | Four Core",
    name: "XLPE Insulated Armoured Four Core Cable",
    image: "lt-four-core-armoured",
    typeOfCable: "N2XRY/NA2XRY",
    ratedVoltage: "0.6/1 kV",
    sizeRange: "4 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow, Blue & Black",
    familyLabel: "four-core XLPE power cable",
    routeText:
      "industrial low-voltage routes that need four-core construction together with mechanical protection for trenches, yards, and exposed runs",
    protectionText:
      "Galvanized round steel wire armouring adds resilience for harder site conditions while keeping the four-core LT selection suitable for plant and infrastructure distribution.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
  }),
  ltControlProduct({
    subCategory: "0.6/1 kV | Control | 1.5 sq mm",
    name: "XLPE Insulated Unarmoured Control Cable",
    image: "lt-control-unarmoured-1-5",
    typeOfCable: "N2XY",
    sizeRange: "2 to 61 x 1.5 sq mm",
    conductorSize: "1.5 sq mm",
    armoured: false,
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
  }),
  ltControlProduct({
    subCategory: "0.6/1 kV | Control | 1.5 sq mm",
    name: "XLPE Insulated Armoured Control Cable",
    image: "lt-control-armoured-1-5",
    typeOfCable: "N2XRY",
    sizeRange: "2 to 61 x 1.5 sq mm",
    conductorSize: "1.5 sq mm",
    armoured: true,
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
  }),
  ltControlProduct({
    subCategory: "0.6/1 kV | Control | 2.5 sq mm",
    name: "XLPE Insulated Unarmoured Control Cable",
    image: "lt-control-unarmoured-2-5",
    typeOfCable: "N2XY",
    sizeRange: "2 to 61 x 2.5 sq mm",
    conductorSize: "2.5 sq mm",
    armoured: false,
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
  }),
  ltControlProduct({
    subCategory: "0.6/1 kV | Control | 2.5 sq mm",
    name: "XLPE Insulated Armoured Control Cable",
    image: "lt-control-armoured-2-5",
    typeOfCable: "N2XRY",
    sizeRange: "2 to 61 x 2.5 sq mm",
    conductorSize: "2.5 sq mm",
    armoured: true,
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
  }),
  ltPowerProduct({
    subCategory: "1.8/3.0 (3.6) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core Cable",
    image: "lt-1-8-single-core-armoured",
    typeOfCable: "N2XRaY/NA2XRaY",
    ratedVoltage: "1.8/3.0 (3.6) kV",
    sizeRange: "25 to 630 sq mm",
    application:
      "Indoor and outdoor installation direct burial where mechanical stress must be envisaged",
    identification: "Natural",
    familyLabel: "single-core intermediate-voltage power cable",
    routeText:
      "projects that need a step above conventional LT feeder duty while retaining armoured single-core construction",
    protectionText:
      "This 1.8/3.0 (3.6) kV build bridges the gap between standard low-voltage feeders and screened HT systems for heavier industrial distribution duties.",
    constructionSpecifications: [
      spec("Conductor", "Annealed Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC outer sheath"],
    industries: LT_INTERMEDIATE_INDUSTRIES,
  }),
  ltPowerProduct({
    subCategory: "1.8/3.0 (3.6) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core Cable",
    image: "lt-1-8-three-core-armoured",
    typeOfCable: "N2XRY/NA2XRY",
    ratedVoltage: "1.8/3.0 (3.6) kV",
    sizeRange: "25 to 400 sq mm",
    application: "For Electric Power Circuit",
    identification: "Red, Yellow & Blue",
    familyLabel: "three-core intermediate-voltage power cable",
    routeText:
      "higher-duty industrial distribution circuits that need three-core construction with mechanical protection",
    protectionText:
      "Galvanized round steel wire armouring supports heavier industrial routes while the 1.8/3.0 (3.6) kV grade gives additional voltage headroom for plant distribution packages.",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Insulation", "XLPE", "layers"),
      spec("Inner Sheath", "Extruded PVC", "shield"),
      spec("Armouring", "Galvanized Round Steel Wire", "shield"),
      spec("Outer Sheath", "Extruded PVC", "shield"),
    ],
    insulatedMaterials: ["XLPE insulation", "PVC inner sheath", "PVC outer sheath"],
    industries: LT_INTERMEDIATE_INDUSTRIES,
  }),
  htProduct({
    subCategory: "3.6/6.0 (7.2) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core HT Cable",
    image: "ht-single-core-3-6",
    typeOfCable: "N2XHSYRaY/NA2XHSYRaY",
    ratedVoltage: "3.6/6.0 (7.2) kV",
    sizeRange: "25 to 1000 sq mm",
    identification: "Natural",
    coreFamily: "single-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Separation Sheath", "PVC", "shield"),
      spec("Armouring", "Aluminium Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC separation sheath",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "3.6/6.0 (7.2) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core HT Cable",
    image: "ht-three-core-3-6",
    typeOfCable: "N2XSEYRY/NA2XSEYRY",
    ratedVoltage: "3.6/6.0 (7.2) kV",
    sizeRange: "25 to 400 sq mm",
    identification: "Red, Yellow & Blue",
    coreFamily: "three-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Filler", "Included", "category"),
      spec("Inner Covering", "Included", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC inner covering",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "6/10 (12) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core HT Cable",
    image: "ht-single-core-6-10",
    typeOfCable: "N2XHSYRaY/NA2XHSYRaY",
    ratedVoltage: "6/10 (12) kV",
    sizeRange: "25 to 1000 sq mm",
    identification: "Natural",
    coreFamily: "single-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Separation Sheath", "PVC", "shield"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC separation sheath",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "6/10 (12) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core HT Cable",
    image: "ht-three-core-6-10",
    typeOfCable: "N2XSEYRY/NA2XSEYRY",
    ratedVoltage: "6/10 (12) kV",
    sizeRange: "25 to 400 sq mm",
    identification: "Red, Yellow & Blue",
    coreFamily: "three-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Filler", "Included", "category"),
      spec("Inner Covering", "Included", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC inner covering",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "8.7/15 (17.5) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core HT Cable",
    image: "ht-single-core-8-7-15",
    typeOfCable: "N2XHSYRaY/NA2XHSYRaY",
    ratedVoltage: "8.7/15 (17.5) kV",
    sizeRange: "25 to 1000 sq mm",
    identification: "Natural",
    coreFamily: "single-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Separation Sheath", "PVC", "shield"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC separation sheath",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "8.7/15 (17.5) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core HT Cable",
    image: "ht-three-core-8-7-15",
    typeOfCable: "N2XSEYRY/NA2XSEYRY",
    ratedVoltage: "8.7/15 (17.5) kV",
    sizeRange: "25 to 300 sq mm",
    identification: "Red, Yellow & Blue",
    coreFamily: "three-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Filler", "Included", "category"),
      spec("Inner Covering", "Included", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC inner covering",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "12/20 (24) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core HT Cable",
    image: "ht-single-core-12-20",
    typeOfCable: "N2XHSYRaY/NA2XHSYRaY",
    ratedVoltage: "12/20 (24) kV",
    sizeRange: "25 to 1000 sq mm",
    identification: "Natural",
    coreFamily: "single-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Separation Sheath", "PVC", "shield"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC separation sheath",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "12/20 (24) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core HT Cable",
    image: "ht-three-core-12-20",
    typeOfCable: "N2XSEYRY/NA2XSEYRY",
    ratedVoltage: "12/20 (24) kV",
    sizeRange: "35 to 300 sq mm",
    identification: "Red, Yellow & Blue",
    coreFamily: "three-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Filler", "Included", "category"),
      spec("Inner Covering", "Included", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC inner covering",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "18/30 (36) kV | Single Core",
    name: "XLPE Insulated Armoured Single Core HT Cable",
    image: "ht-single-core-18-30",
    typeOfCable: "N2XHSYRaY/NA2XHSYRaY",
    ratedVoltage: "18/30 (36) kV",
    sizeRange: "50 to 1000 sq mm",
    identification: "Natural",
    coreFamily: "single-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Separation Sheath", "PVC", "shield"),
      spec("Armouring", "Round Aluminium Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC separation sheath",
      "PVC outer sheath",
    ],
  }),
  htProduct({
    subCategory: "18/30 (36) kV | Three Core",
    name: "XLPE Insulated Armoured Three Core HT Cable",
    image: "ht-three-core-18-30",
    typeOfCable: "N2XSEYRY/NA2XSEYRY",
    ratedVoltage: "18/30 (36) kV",
    sizeRange: "50 to 300 sq mm",
    identification: "Red, Yellow & Blue",
    coreFamily: "three-core cable",
    constructionSpecifications: [
      spec("Conductor", "Copper/Aluminium", "settings_input_component"),
      spec("Conductor Screen", "Semi-conducting", "layers"),
      spec("Insulation", "XLPE", "layers"),
      spec("Insulation Screen", "Semi-conducting", "layers"),
      spec("Metallic Screen", "Included", "shield"),
      spec("Filler", "Included", "category"),
      spec("Inner Covering", "Included", "shield"),
      spec("Armouring", "Galvanized Steel Round Wire", "shield"),
      spec("Outer Sheath", "PVC", "shield"),
    ],
    insulatedMaterials: [
      "XLPE insulation",
      "Semi-conducting conductor screen",
      "Semi-conducting insulation screen",
      "PVC inner covering",
      "PVC outer sheath",
    ],
  }),
];
