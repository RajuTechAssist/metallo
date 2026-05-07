"use client";

import React from "react";
import WeldingIndustryPage, {
  type WeldingIndustryPageData,
} from "@/components/product/WeldingIndustryPage";

/* ═══════════════════════════════════════════════════════════════
   PAGE 2: GENERAL FABRICATION & INFRASTRUCTURE (Welding Focus)
   ═══════════════════════════════════════════════════════════════ */

const PAGE_DATA: WeldingIndustryPageData = {
  hero: {
    kicker: "General Fabrication & Infrastructure",
    headline: "Versatile Precision. Structural Integrity.",
    subHeadline:
      "High-performance welding consumables, site equipment, and compliance testing for structural steelwork, bridges, and architectural assemblies.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=85&auto=format&fit=crop",
    breadcrumbLabel: "General Fabrication",
  },

  challenge: {
    headline: "The Cost of Compromise in Structural Fabrication.",
    body: "General fabricators and infrastructure developers operate on tight margins and aggressive project timelines. Sourcing reliable filler metals that meet strict IS:2062 or EN 1090 structural standards across diverse welding processes (MIG, TIG, MMA) often forces contractors to juggle multiple unvetted suppliers. Inconsistent wire quality and uncalibrated site equipment lead to weld failures, failed NDT inspections, and incredibly costly on-site rework.",
  },

  solution: {
    headline: "A Unified Supply Engine for Structural Integrity.",
    body: "Metallo Welding, powered by WB Alloys, delivers a complete, standardized welding ecosystem built for heavy structural fabrication. From high-deposition flux-cored wires designed for massive steel building skeletons to on-site machine calibration and portable extraction units, we ensure your fabrication shops and field teams operate with maximum efficiency and certified structural compliance.",
  },

  pillars: [
    {
      icon: "construction",
      title: "Structural Consumables",
      description:
        "AWS/ASME-certified MIG wires, TIG rods, and Stick electrodes optimized for mild steel, structural profiles, and versatile field repairs with exceptional arc stability.",
    },
    {
      icon: "engineering",
      title: "Site Services & Calibration",
      description:
        "Rapid deployment of WB Alloys technicians for CP7 gas equipment testing, welding machine calibration, and electrical PAT testing across your fabrication yards to prevent mid-project downtime.",
    },
    {
      icon: "air",
      title: "Fume Extraction (LEV)",
      description:
        "Mobile Kemper extraction systems and Tecmen PAPR helmets to keep enclosed fabrication shops, bridge decking, and on-site welding habitats compliant and safe for operators.",
    },
    {
      icon: "precision_manufacturing",
      title: "High-Yield Automation",
      description:
        "Mechanized welding tractors and automated systems designed to lay down miles of flawless, continuous structural welds on heavy bridge girders and portal frames.",
    },
  ],

  technical: [
    {
      icon: "menu_book",
      title: "Standards & Certifications",
      items: [
        "AWS D1.1 — Structural Welding Code (Steel)",
        "EN 1090 — Execution of Steel Structures",
        "IS:2062 — Hot Rolled Structural Steel",
        "ASME Section IX — Welding Qualifications",
        "ISO 9001:2015 — Quality Management",
        "ISO 14001 — Environmental Management",
        "ISO 45001 — Occupational Health & Safety",
        "BOHS P601 — LEV Compliance Standard",
      ],
    },
    {
      icon: "science",
      title: "Testing & Validation",
      items: [
        "Weld deposit chemistry and mechanical testing",
        "Charpy impact testing at sub-zero temperatures",
        "Macro and micro examination of weld profiles",
        "Radiographic (RT) and ultrasonic (UT) inspection",
        "Wire feed speed and arc stability validation",
        "CP7 gas equipment pressure testing",
        "Machine PAT testing and calibration records",
      ],
    },
    {
      icon: "qr_code_2",
      title: "Traceability & Documentation",
      items: [
        "Material Testing Certificates (MTCs) per batch",
        "Weld Procedure Specifications (WPS/PQR)",
        "Serialized consumable batch tracking",
        "Digital QC reports per project",
        "Machine calibration certificates",
        "LEV commissioning and COSHH assessments",
        "Export documentation for international projects",
      ],
    },
  ],

  ctaHeadline: "Ready to elevate your fabrication operations?",
  ctaBody:
    "From structural MIG wires and site calibration to portable fume extraction — Metallo × WB Alloys delivers the complete welding ecosystem for structural excellence.",
};

const WeldingGeneralFabrication: React.FC = () => {
  return <WeldingIndustryPage data={PAGE_DATA} />;
};

export default WeldingGeneralFabrication;
