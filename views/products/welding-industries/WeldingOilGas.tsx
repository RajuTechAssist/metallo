"use client";

import React from "react";
import WeldingIndustryPage, {
  type WeldingIndustryPageData,
} from "@/components/product/WeldingIndustryPage";

/* ═══════════════════════════════════════════════════════════════
   PAGE 3: OIL & GAS / PROCESS INDUSTRIES (Welding Focus)
   ═══════════════════════════════════════════════════════════════ */

const PAGE_DATA: WeldingIndustryPageData = {
  hero: {
    kicker: "Oil, Gas & Process Industries",
    headline: "Critical Integrity. Extreme Environments.",
    subHeadline:
      "Delivering ASME/API-certified welding consumables, specialized orbital technicians, and absolute NDT assurance for global refineries, pipelines, and offshore platforms.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=85&auto=format&fit=crop",
    breadcrumbLabel: "Oil & Gas / Process Industries",
  },

  challenge: {
    headline: "The High Stakes of High-Pressure Execution.",
    body: "In the petrochemical and offshore sectors, a single weld failure is catastrophic. EPCs constructing LNG terminals, cross-country pipelines, or modular skids face immense pressure to maintain absolute traceability and corrosion resistance across complex alloys (Duplex, Super Duplex, SS 316). Sourcing unvetted filler wires or relying on fragmented site services leads to failed radiography tests (RT), delayed commissioning, and massive compliance risks under strict ASME Section IX regulations.",
  },

  solution: {
    headline: "The Ultimate Metallurgical Assurance Platform.",
    body: "Metallo Welding, backed by the specialized engineering legacy of WB Alloys, offers a unified ecosystem for mission-critical process industries. We combine direct-manufactured, high-alloy consumables with globally deployable NDT engineers and orbital welding specialists. We don't just supply wire—we guarantee the metallurgical integrity of your entire pipeline and process equipment supply chain.",
  },

  pillars: [
    {
      icon: "science",
      title: "High-Alloy Consumables",
      description:
        "Premium TIG, MIG, and SAW wires specifically engineered for stainless steel, duplex, and exotic alloys, ensuring flawless root passes and superior corrosion resistance in harsh chemical environments.",
    },
    {
      icon: "engineering",
      title: "Specialized Site Engineering",
      description:
        "Global mobilization of highly skilled NDT/NDE engineers, orbital welding technicians, and induction heating experts for complex on-site pipeline tie-ins and critical turnaround maintenance.",
    },
    {
      icon: "masks",
      title: "Confined-Space Safety",
      description:
        "Deploying advanced Tecmen PAPR respiratory systems and localized Kemper extraction to protect welders operating in high-risk, confined-space offshore and refinery environments.",
    },
    {
      icon: "tune",
      title: "Equipment Calibration & Assurance",
      description:
        "On-site CP7 gas testing, hose testing, and precision machine calibration to ensure every arc struck on your process plant meets strict ISO and ASME operational tolerances.",
    },
  ],

  technical: [
    {
      icon: "menu_book",
      title: "Standards & Certifications",
      items: [
        "ASME Section IX — Welding & Brazing Qualifications",
        "API 1104 — Pipeline Welding Standard",
        "AWS A5.4 / A5.9 — Stainless Steel Consumables",
        "NACE MR0175 — Sulfide Stress Cracking Resistance",
        "PED 2014/68/EU — Pressure Equipment Directive",
        "ISO 9001:2015 — Quality Management",
        "ISO 14001 / ISO 45001 — Environmental & Safety",
        "BOHS P601 — LEV Compliance Standard",
      ],
    },
    {
      icon: "science",
      title: "Testing & Validation",
      items: [
        "Radiographic testing (RT) per ASME V / API 1104",
        "Ultrasonic testing (UT) including TOFD and phased array",
        "Ferrite number (FN) measurement for duplex alloys",
        "Intergranular corrosion testing (ASTM A262)",
        "Charpy impact testing at cryogenic temperatures",
        "Weld deposit chemistry validation per heat",
        "CP7 gas pressure testing and hose integrity checks",
      ],
    },
    {
      icon: "qr_code_2",
      title: "Traceability & Documentation",
      items: [
        "Material Testing Certificates (MTCs) per heat/batch",
        "Weld Procedure Specifications (WPS) and PQR packages",
        "Welder qualification records per ASME Section IX",
        "NDT reports with radiograph/scan archives",
        "Serialized consumable lot tracking",
        "Machine calibration and LEV commissioning certificates",
        "COSHH assessments and safety data sheets (SDS)",
      ],
    },
  ],

  ctaHeadline: "Ready to secure your process plant integrity?",
  ctaBody:
    "From high-alloy consumables and orbital welding specialists to confined-space extraction — Metallo × WB Alloys delivers the ultimate metallurgical assurance for oil, gas, and process industries.",
};

const WeldingOilGas: React.FC = () => {
  return <WeldingIndustryPage data={PAGE_DATA} />;
};

export default WeldingOilGas;
