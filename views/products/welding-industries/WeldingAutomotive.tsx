"use client";

import React from "react";
import WeldingIndustryPage, {
  type WeldingIndustryPageData,
} from "@/components/product/WeldingIndustryPage";

/* ═══════════════════════════════════════════════════════════════
   PAGE 1: AUTOMOTIVE & TRANSPORTATION (Welding Focus)
   ═══════════════════════════════════════════════════════════════ */

const PAGE_DATA: WeldingIndustryPageData = {
  hero: {
    kicker: "Automotive & Mobility",
    headline: "High-Volume Precision. Zero-Defect Assembly.",
    subHeadline:
      "Deploying high-integrity welding consumables and advanced automation for global automotive OEMs and Tier-1 suppliers.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&auto=format&fit=crop",
    breadcrumbLabel: "Automotive & Transportation",
  },

  challenge: {
    headline: "The Cost of Imperfection in Mobility.",
    body: "In global automotive and transportation manufacturing, cycle times are measured in seconds, and weld integrity is a matter of life and death. Traditional procurement forces OEMs to juggle multiple vendors for filler metals, robotics, and safety equipment, leading to inconsistent batch quality and dangerous supply chain bottlenecks on the assembly line.",
  },

  solution: {
    headline: "Unified Welding Ecosystems for Assembly Lines.",
    body: "Metallo, powered by the metallurgical legacy of WB Alloys, provides a centralized operating system for high-volume automotive welding. From premium, zero-spatter MIG/TIG consumables to automated robotic integration and complete factory-floor fume extraction, we ensure your assembly lines run continuously, safely, and with absolute precision.",
  },

  pillars: [
    {
      icon: "smart_toy",
      title: "Automated & Robotic Welding",
      description:
        "High-feed, precision filler wires designed specifically for cobots and automated welding tractors to maximize assembly speed.",
    },
    {
      icon: "whatshot",
      title: "High-Integrity Consumables",
      description:
        "Direct-manufactured MIG and TIG wires engineered for thin-gauge automotive steel, aluminum chassis, and high-tensile components.",
    },
    {
      icon: "air",
      title: "Factory-Scale Extraction",
      description:
        "BOHS P601 compliant Kemper SmartFil systems designed to capture harmful fumes across massive, high-density manufacturing floors.",
    },
    {
      icon: "build",
      title: "Preventative Maintenance",
      description:
        "Global deployment of WB Alloys technicians for machine calibration, PAT testing, and robotic preventative maintenance to guarantee zero unplanned downtime.",
    },
  ],

  technical: [
    {
      icon: "menu_book",
      title: "Standards & Certifications",
      items: [
        "AWS A5.18 / A5.28 — MIG Wire Specifications",
        "AWS A5.9 — Stainless Steel Filler Metals",
        "ISO 9001:2015 — Quality Management",
        "ISO 14001 — Environmental Management",
        "ISO 45001 — Occupational Health & Safety",
        "IATF 16949 — Automotive QMS Alignment",
        "BOHS P601 — LEV Compliance Standard",
      ],
    },
    {
      icon: "science",
      title: "Testing & Validation",
      items: [
        "Chemical composition analysis per batch",
        "Tensile and yield strength verification",
        "Wire cast and helix measurement",
        "Spatter analysis and feed performance",
        "Weld deposit chemistry validation",
        "Fume emission rate testing (BOHS P601)",
        "Machine PAT testing and calibration logs",
      ],
    },
    {
      icon: "qr_code_2",
      title: "Traceability & Documentation",
      items: [
        "Serialized batch IDs per wire spool / electrode lot",
        "Material Testing Certificates (MTCs) per heat",
        "Digital QC reports and weld procedure specs (WPS)",
        "Machine calibration certificates",
        "LEV system commissioning reports",
        "COSHH assessments and safety data sheets",
      ],
    },
  ],

  ctaHeadline: "Ready to optimize your automotive welding line?",
  ctaBody:
    "From zero-spatter MIG wires and robotic integration to factory-wide fume extraction — Metallo × WB Alloys delivers the complete welding ecosystem for automotive excellence.",
};

const WeldingAutomotive: React.FC = () => {
  return <WeldingIndustryPage data={PAGE_DATA} />;
};

export default WeldingAutomotive;
