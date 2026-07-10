export interface ManagementSystem {
  id: string;
  title: string;
  focus: string;
  icon: string;
  summary: string;
  highlights: string[];
}

export interface CertificateArchiveItem {
  id: string;
  title: string;
  systemTitle: string;
  systemFocus: string;
  fileName: string;
  previewImage: string;
  pdfUrl: string;
  summary: string;
}

export const CERTIFICATION_INTRO_POINTS = [
  "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 are surfaced first as the clearest company-level trust signals.",
  "Archived certificate scans are shown as visible documents, not hidden behind vague badge sections or dark UI panels.",
  "Latest validity details, tender packs, and supporting QA records remain available from Metallo on request.",
];

export const MANAGEMENT_SYSTEMS: ManagementSystem[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    focus: "Quality management",
    icon: "/certifications/iso-9001.svg",
    summary:
      "Supports controlled processes, documented inspections, and repeatable quality outcomes across sourcing, fabrication, and dispatch.",
    highlights: [
      "Process discipline across manufacturing workflows",
      "Documented inspection and approval checkpoints",
      "Stronger confidence for EPC and procurement teams",
    ],
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    focus: "Environmental management",
    icon: "/certifications/iso-14001.svg",
    summary:
      "Reinforces responsible operating practices and environmental control across the manufacturing ecosystem Metallo coordinates.",
    highlights: [
      "Environmental controls aligned to industrial operations",
      "Useful for ESG-conscious project owners and audits",
      "Signals disciplined plant and process governance",
    ],
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    focus: "Occupational health and safety",
    icon: "/certifications/iso-45001.svg",
    summary:
      "Adds a visible safety layer to the broader trust story, especially for buyers operating in heavy industry, infra, and energy environments.",
    highlights: [
      "Safety-led operating mindset",
      "Stronger fit for site-critical and heavy engineering buyers",
      "Supports pre-qualification and vendor due diligence",
    ],
  },
];

export const CERTIFICATE_ARCHIVE: CertificateArchiveItem[] = [
  {
    id: "scan0169",
    title: "ISO 9001:2015 certificate scan",
    systemTitle: "ISO 9001:2015",
    systemFocus: "Quality management system",
    fileName: "SCAN0169.PDF",
    previewImage: "/certificates/scan0169-preview.jpg",
    pdfUrl: "/certificates/SCAN0169.PDF",
    summary:
      "One-page archived original surfaced for procurement and compliance review.",
  },
  {
    id: "scan0170",
    title: "ISO 14001:2015 certificate scan",
    systemTitle: "ISO 14001:2015",
    systemFocus: "Environmental management system",
    fileName: "SCAN0170.PDF",
    previewImage: "/certificates/scan0170-preview.jpg",
    pdfUrl: "/certificates/SCAN0170.PDF",
    summary:
      "Direct PDF evidence from Metallo's public certification archive.",
  },
  {
    id: "scan0171",
    title: "ISO 45001:2018 certificate scan",
    systemTitle: "ISO 45001:2018",
    systemFocus: "Occupational health and safety system",
    fileName: "SCAN0171.PDF",
    previewImage: "/certificates/scan0171-preview.jpg",
    pdfUrl: "/certificates/SCAN0171.PDF",
    summary:
      "Ready for buyer due diligence, tender support, and internal vendor review.",
  },
];

export const QA_ASSURANCES = [
  {
    title: "Material verification",
    copy:
      "Manufacturer certificates, grade checks, and document-backed traceability before fabrication begins.",
  },
  {
    title: "Process inspection",
    copy:
      "Dimensional inspection, finishing checks, and calibrated measurement checkpoints during execution.",
  },
  {
    title: "Test-backed release",
    copy:
      "MTCs, lab validation, and project-ready documentation for demanding industrial deliveries.",
  },
];

export const TRUST_CATEGORIES = [
  {
    title: "Company-level management systems",
    copy:
      "The management-system certifications shown on this site establish how Metallo governs quality, environmental controls, and safety across operations.",
  },
  {
    title: "Engineering standards and references",
    copy:
      "ASTM, ASME, IEC, API, BIS, NEMA, EN, and similar references guide product specification and inspection requirements. They are standards references, not interchangeable with company certificates.",
  },
  {
    title: "Project documentation",
    copy:
      "For buyer confidence, Metallo pairs production with MTCs, QA records, and other document packs that support tender, audit, and dispatch workflows.",
  },
];
