"use client";

import React from "react";
import WeldingIndustryPage, {
  type WeldingIndustryPageData,
} from "@/components/product/WeldingIndustryPage";

/* ═══════════════════════════════════════════════════════════════
   PAGE 5: SMART CITIES & URBAN DEVELOPMENT (Welding Focus)
   ═══════════════════════════════════════════════════════════════ */

const PAGE_DATA: WeldingIndustryPageData = {
  hero: {
    kicker: "Smart Cities & Urban Development",
    headline: "Rapid Urbanization. Uncompromising Safety.",
    subHeadline:
      "Deploying architectural-grade welding consumables, urban-safe fume extraction, and site compliance testing for global smart city infrastructure.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=85&auto=format&fit=crop",
    breadcrumbLabel: "Smart Cities & Urban Development",
  },

  challenge: {
    headline: "The Complexity of Building in the Public Eye.",
    body: "Constructing smart city infrastructure—from sleek metro stations and pedestrian bridges to modular EV charging hubs—requires a delicate balance. EPCs must execute rapid, high-strength welds while maintaining flawless architectural aesthetics for public-facing structures. Furthermore, welding in densely populated urban zones introduces severe safety and environmental challenges. Relying on sub-standard consumables leads to excessive spatter and rework, while inadequate fume control violates strict municipal environmental regulations.",
  },

  solution: {
    headline: "Clean, Compliant, and Architectural-Grade Execution.",
    body: "Metallo Welding, integrating the specialized equipment and consumable lines of WB Alloys, provides a complete ecosystem tailored for modern urban environments. We deliver ultra-clean TIG and MIG wires for flawless stainless steel finishes, paired with mobile, BOHS P601-compliant fume extraction systems. We ensure your urban projects are built safely, rapidly, and to the highest aesthetic standards without disrupting the city around them.",
  },

  pillars: [
    {
      icon: "palette",
      title: "Architectural & Stainless Consumables",
      description:
        "Premium TIG rods and clean-running MIG wires engineered specifically for stainless steel and aluminum, delivering the spatter-free, high-aesthetic finishes required for transit hubs, street furniture, and public stadiums.",
    },
    {
      icon: "grid_view",
      title: "Modular Infrastructure Welding",
      description:
        "High-efficiency filler metals designed for the rapid pre-fabrication of modular utility enclosures, telecom towers, and smart-grid substations, accelerating on-site erection times.",
    },
    {
      icon: "eco",
      title: "Urban-Safe Fume Extraction",
      description:
        "Deploying mobile Kemper SmartFil systems and localized capture technology to eliminate hazardous welding fumes at the source, ensuring strict environmental and public safety compliance in dense city centers.",
    },
    {
      icon: "health_and_safety",
      title: "On-Site Safety & Calibration",
      description:
        "Mobilizing WB Alloys technicians for on-site LEV (Local Exhaust Ventilation) testing, HAVS assessment, and PAT electrical testing to guarantee that your urban construction sites operate flawlessly and pass every municipal safety audit.",
    },
  ],

  technical: [
    {
      icon: "menu_book",
      title: "Standards & Certifications",
      items: [
        "EN 1090 — Execution of Steel & Aluminium Structures",
        "AWS D1.1 / D1.6 — Structural & Stainless Welding Codes",
        "IS:2062 — Hot Rolled Structural Steel",
        "ISO 9001:2015 — Quality Management",
        "ISO 14001 — Environmental Management",
        "ISO 45001 — Occupational Health & Safety",
        "BOHS P601 — LEV Compliance Standard",
        "Municipal environmental and noise regulations",
      ],
    },
    {
      icon: "science",
      title: "Testing & Validation",
      items: [
        "Visual weld inspection (VT) for architectural finish quality",
        "Dye penetrant testing (DPI/PT) for surface-critical welds",
        "Spatter analysis and wire feed performance validation",
        "Stainless steel passivation and surface finish testing",
        "LEV system airflow and capture velocity measurements",
        "HAVS exposure monitoring and PAT electrical testing",
        "Noise level monitoring for urban-zone compliance",
      ],
    },
    {
      icon: "qr_code_2",
      title: "Traceability & Documentation",
      items: [
        "Material Testing Certificates (MTCs) per batch",
        "EN 1090 execution class documentation",
        "Weld Procedure Specifications (WPS/PQR)",
        "LEV commissioning reports and COSHH assessments",
        "PAT testing and machine calibration certificates",
        "Environmental compliance audit trails",
        "Digital QC reports per project milestone",
      ],
    },
  ],

  ctaHeadline: "Ready to build smarter, cleaner, faster?",
  ctaBody:
    "From architectural-grade stainless consumables and urban-safe extraction to full municipal compliance — Metallo × WB Alloys delivers the complete welding ecosystem for smart city excellence.",
};

const WeldingSmartCities: React.FC = () => {
  return <WeldingIndustryPage data={PAGE_DATA} />;
};

export default WeldingSmartCities;
