"use client";

import React from "react";
import WeldingIndustryPage, {
  type WeldingIndustryPageData,
} from "@/components/product/WeldingIndustryPage";

/* ═══════════════════════════════════════════════════════════════
   PAGE 4: HEAVY ENGINEERING (Welding Focus)
   ═══════════════════════════════════════════════════════════════ */

const PAGE_DATA: WeldingIndustryPageData = {
  hero: {
    kicker: "Heavy Engineering & Fabrication",
    headline: "Deep Penetration. Absolute Structural Assurance.",
    subHeadline:
      "Deploying high-deposition consumables, thermal engineering, and NDT expertise for pressure vessels, heavy machinery, and mega-scale fabrications.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85&auto=format&fit=crop",
    breadcrumbLabel: "Heavy Engineering",
  },

  challenge: {
    headline: "The Massive Cost of Heavy Fabrication Rework.",
    body: "In heavy engineering—whether fabricating multi-ton pressure vessels, mining crushers, or bridge girders—weld integrity must be flawless from the root to the cap. Working with thick-plate steel and complex alloys requires precise pre-heating, continuous high-deposition filler metals, and rigorous ultrasonic testing (UT). Relying on fragmented suppliers for wire, thermal equipment, and NDT engineers often leads to inconsistent heat inputs, failed radiography tests, and incredibly expensive project delays.",
  },

  solution: {
    headline: "End-to-End Metallurgical Control for Mega-Projects.",
    body: "Metallo, powered by the specialized engineering legacy of WB Alloys, provides a unified welding ecosystem designed specifically for the extreme demands of heavy fabrication. We combine direct-manufactured, high-deposition Submerged Arc Welding (SAW) fluxes with deployable induction heating engineers and NDT technicians. We don't just supply the wire; we control the thermal environment and validate the final structural integrity.",
  },

  pillars: [
    {
      icon: "layers",
      title: "High-Deposition Consumables",
      description:
        "Premium SAW wire, fluxes, and heavy-duty flux-cored wires engineered for thick-plate carbon and alloy steels, maximizing deposition rates without sacrificing mechanical properties.",
    },
    {
      icon: "thermostat",
      title: "Advanced Thermal Engineering",
      description:
        "Global deployment of WB Alloys induction heating engineers to manage precise pre-heating and Post-Weld Heat Treatment (PWHT)—an absolute requirement for ASME-compliant pressure vessels and thick sections.",
    },
    {
      icon: "troubleshoot",
      title: "NDT & Integrity Validation",
      description:
        "Highly skilled NDE/NDT technicians mobilized to your fabrication yards to conduct rigorous ultrasonic, radiographic, and magnetic particle testing, ensuring every deep-penetration weld passes Tier-1 EPC audits.",
    },
    {
      icon: "air",
      title: "Heavy-Duty Fume Extraction",
      description:
        "High-capacity Kemper extraction systems and localized capture arms designed specifically to manage the immense fume volumes generated during continuous, heavy-flux welding in enclosed vessels and massive fabrication bays.",
    },
  ],

  technical: [
    {
      icon: "menu_book",
      title: "Standards & Certifications",
      items: [
        "ASME Section VIII — Pressure Vessel Construction",
        "ASME Section IX — Welding & Brazing Qualifications",
        "AWS D1.1 — Structural Welding Code (Steel)",
        "EN 13480 — Metallic Industrial Piping",
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
        "Ultrasonic testing (UT) including TOFD for thick sections",
        "Radiographic testing (RT) per ASME V",
        "Magnetic particle inspection (MPI/MT)",
        "Charpy impact testing at sub-zero temperatures",
        "PWHT temperature profile recording and validation",
        "Weld deposit chemistry and mechanical testing",
        "SAW flux basicity index and moisture testing",
        "Induction heating coil calibration records",
      ],
    },
    {
      icon: "qr_code_2",
      title: "Traceability & Documentation",
      items: [
        "Material Testing Certificates (MTCs) per heat/batch",
        "Weld Procedure Specifications (WPS) and PQR packages",
        "PWHT charts and heat treatment records",
        "NDT reports with UT/RT scan archives",
        "Serialized consumable batch and flux lot tracking",
        "Machine calibration and LEV commissioning certificates",
        "COSHH assessments and safety data sheets (SDS)",
      ],
    },
  ],

  ctaHeadline: "Ready to secure your heavy fabrication integrity?",
  ctaBody:
    "From high-deposition SAW fluxes and induction heating to NDT validation — Metallo × WB Alloys delivers end-to-end metallurgical control for mega-scale heavy engineering.",
};

const WeldingHeavyEngineering: React.FC = () => {
  return <WeldingIndustryPage data={PAGE_DATA} />;
};

export default WeldingHeavyEngineering;
