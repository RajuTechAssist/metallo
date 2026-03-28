/**
 * Vertical-specific certifications & partner data.
 * Each vertical page gets its own set of industry-relevant certifications
 * and partner/customer logos, following the Zetwerk model.
 */

export interface CertificationItem {
  /** Display name e.g. "ISO 9001:2015" */
  name: string;
  /** Short subtitle e.g. "Quality Management" */
  subtitle: string;
  /** Icon key — maps to a certification badge rendered by the component */
  icon: "iso" | "bis" | "astm" | "asme" | "iec" | "aws" | "ce" | "ul" | "api" | "nema" | "cpri" | "aisc" | "en";
}

export interface PartnerItem {
  /** Company name */
  name: string;
  /** Logo path in /partners/ directory */
  logo: string;
}

export interface VerticalCertData {
  certifications: CertificationItem[];
  partners: PartnerItem[];
}

/* ------------------------------------------------------------------ */
/*  Certification definitions (shared across verticals)               */
/* ------------------------------------------------------------------ */

const ISO_9001: CertificationItem = {
  name: "ISO 9001:2015",
  subtitle: "Quality Management",
  icon: "iso",
};

const ISO_14001: CertificationItem = {
  name: "ISO 14001:2015",
  subtitle: "Environmental Management",
  icon: "iso",
};

const ISO_45001: CertificationItem = {
  name: "ISO 45001:2018",
  subtitle: "Occupational Safety",
  icon: "iso",
};

const ISO_3834: CertificationItem = {
  name: "ISO 3834",
  subtitle: "Welding Quality",
  icon: "iso",
};

const BIS_ISI: CertificationItem = {
  name: "BIS / ISI",
  subtitle: "Bureau of Indian Standards",
  icon: "bis",
};

const ASTM: CertificationItem = {
  name: "ASTM",
  subtitle: "International Standards",
  icon: "astm",
};

const ASME: CertificationItem = {
  name: "ASME",
  subtitle: "Mechanical Engineering",
  icon: "asme",
};

const EN_10204: CertificationItem = {
  name: "EN 10204",
  subtitle: "Material Test Certificate",
  icon: "en",
};

const IEC_60502: CertificationItem = {
  name: "IEC 60502",
  subtitle: "Power Cable Standards",
  icon: "iec",
};

const BS_5467: CertificationItem = {
  name: "BS 5467",
  subtitle: "Cable Construction",
  icon: "iec",
};

const CPRI: CertificationItem = {
  name: "CPRI Tested",
  subtitle: "Central Power Research",
  icon: "cpri",
};

const IEC_61537: CertificationItem = {
  name: "IEC 61537",
  subtitle: "Cable Tray Systems",
  icon: "iec",
};

const NEMA_VE1: CertificationItem = {
  name: "NEMA VE-1",
  subtitle: "Cable Tray Standards",
  icon: "nema",
};

const UL_LISTED: CertificationItem = {
  name: "UL Listed",
  subtitle: "Underwriters Lab",
  icon: "ul",
};

const AWS: CertificationItem = {
  name: "AWS",
  subtitle: "Welding Society",
  icon: "aws",
};

const ASME_SEC_IX: CertificationItem = {
  name: "ASME Sec. IX",
  subtitle: "Welding Qualification",
  icon: "asme",
};

const EN_1090: CertificationItem = {
  name: "EN 1090",
  subtitle: "Structural Steel CE",
  icon: "en",
};

const CE_MARK: CertificationItem = {
  name: "CE Marked",
  subtitle: "European Conformity",
  icon: "ce",
};

const IEC_60745: CertificationItem = {
  name: "IEC 60745",
  subtitle: "Power Tool Safety",
  icon: "iec",
};

const IS_1239: CertificationItem = {
  name: "IS 1239",
  subtitle: "Steel Tubes",
  icon: "bis",
};

const API_5L: CertificationItem = {
  name: "API 5L",
  subtitle: "Line Pipe Standard",
  icon: "api",
};

const IS_800: CertificationItem = {
  name: "IS 800",
  subtitle: "Steel Structures Code",
  icon: "bis",
};

const IS_2062: CertificationItem = {
  name: "IS 2062",
  subtitle: "Structural Steel",
  icon: "bis",
};

const AISC: CertificationItem = {
  name: "AISC",
  subtitle: "Steel Construction",
  icon: "aisc",
};

/* ------------------------------------------------------------------ */
/*  Per-vertical data                                                 */
/* ------------------------------------------------------------------ */

export const VERTICAL_CERT_DATA: Record<string, VerticalCertData> = {
  /* ---- Steel ---- */
  steel: {
    certifications: [ISO_9001, BIS_ISI, ASTM, ASME, EN_10204, ISO_14001],
    partners: [
      { name: "SAIL", logo: "/partners/sail.png" },
      { name: "Tata Steel", logo: "/partners/tata-steel.png" },
      { name: "JSW Steel", logo: "/partners/jsw-steel.png" },
      { name: "Jindal", logo: "/partners/jindal.png" },
      { name: "ISMT", logo: "/partners/ismt.svg" },
      { name: "Ratnamani", logo: "/partners/ratnamani.svg" },
      { name: "APL Apollo", logo: "/partners/apl-apollo.svg" },
      { name: "Welspun Corp", logo: "/partners/welspun-corp.svg" },
    ],
  },

  /* ---- Wire & Cables ---- */
  cables: {
    certifications: [IEC_60502, BS_5467, BIS_ISI, ISO_9001, CPRI, ISO_45001],
    partners: [
      { name: "Polycab", logo: "/partners/polycab.svg" },
      { name: "Havells", logo: "/partners/havells.svg" },
      { name: "KEI Industries", logo: "/partners/kei-industries.svg" },
      { name: "Finolex", logo: "/partners/finolex.svg" },
      { name: "RR Kabel", logo: "/partners/rr-kabel.svg" },
      { name: "Anchor", logo: "/partners/anchor.svg" },
      { name: "Universal Cables", logo: "/partners/universal-cables.svg" },
      { name: "Gloster Cables", logo: "/partners/gloster-cables.svg" },
    ],
  },

  /* ---- Cable Tray ---- */
  cabletray: {
    certifications: [IEC_61537, NEMA_VE1, ISO_9001, UL_LISTED, ISO_14001, ISO_45001],
    partners: [
      { name: "Schneider Electric", logo: "/partners/schneider-electric.svg" },
      { name: "ABB", logo: "/partners/abb.svg" },
      { name: "Legrand", logo: "/partners/legrand.svg" },
      { name: "Eaton", logo: "/partners/eaton.svg" },
      { name: "Siemens", logo: "/partners/siemens.svg" },
      { name: "Rittal", logo: "/partners/rittal.svg" },
      { name: "Hilti", logo: "/partners/hilti.svg" },
      { name: "Panduit", logo: "/partners/panduit.svg" },
    ],
  },

  /* ---- Welding & Allied ---- */
  welding: {
    certifications: [AWS, ASME_SEC_IX, ISO_3834, EN_1090, ISO_9001, ISO_45001],
    partners: [
      { name: "ESAB", logo: "/partners/esab.svg" },
      { name: "Lincoln Electric", logo: "/partners/lincoln-electric.svg" },
      { name: "Ador Welding", logo: "/partners/ador-welding.svg" },
      { name: "D&H Sécheron", logo: "/partners/dh-secheron.svg" },
      { name: "Fronius", logo: "/partners/fronius.svg" },
      { name: "Kemppi", logo: "/partners/kemppi.svg" },
      { name: "Miller", logo: "/partners/miller.svg" },
      { name: "Thermadyne", logo: "/partners/thermadyne.svg" },
    ],
  },

  /* ---- Power Tools ---- */
  tools: {
    certifications: [CE_MARK, ISO_9001, UL_LISTED, IEC_60745, ISO_14001, ISO_45001],
    partners: [
      { name: "Bosch", logo: "/partners/bosch.svg" },
      { name: "Makita", logo: "/partners/makita.svg" },
      { name: "DeWalt", logo: "/partners/dewalt.svg" },
      { name: "Hilti", logo: "/partners/hilti.svg" },
      { name: "Stanley", logo: "/partners/stanley.svg" },
      { name: "Milwaukee", logo: "/partners/milwaukee.svg" },
      { name: "Metabo", logo: "/partners/metabo.svg" },
      { name: "Kress", logo: "/partners/kress.svg" },
    ],
  },

  /* ---- Pipes ---- */
  pipes: {
    certifications: [IS_1239, ASTM, API_5L, ISO_9001, BIS_ISI, ISO_14001],
    partners: [
      { name: "ISMT", logo: "/partners/ismt.svg" },
      { name: "Maha Seamless", logo: "/partners/maha-seamless.svg" },
      { name: "Jindal Saw", logo: "/partners/jindal-saw.svg" },
      { name: "Ratnamani", logo: "/partners/ratnamani.svg" },
      { name: "Surya Roshni", logo: "/partners/surya-roshni.svg" },
      { name: "Man Industries", logo: "/partners/man-industries.svg" },
      { name: "Welspun Corp", logo: "/partners/welspun-corp.svg" },
      { name: "APL Apollo", logo: "/partners/apl-apollo.svg" },
    ],
  },

  /* ---- Fabricated Structures ---- */
  fabricatedStructures: {
    certifications: [IS_800, IS_2062, AISC, ISO_3834, ISO_9001, ISO_45001],
    partners: [
      { name: "L&T", logo: "/partners/lt.svg" },
      { name: "TATA Projects", logo: "/partners/tata-projects.png" },
      { name: "Godrej", logo: "/partners/godrej.svg" },
      { name: "KEC Intl.", logo: "/partners/kec-intl.png" },
      { name: "Kalpataru", logo: "/partners/kalpataru.svg" },
      { name: "Sterling & Wilson", logo: "/partners/sterling-wilson.svg" },
      { name: "Shapoorji Pallonji", logo: "/partners/shapoorji-pallonji.svg" },
      { name: "JMC Projects", logo: "/partners/jmc-projects.svg" },
    ],
  },
};
