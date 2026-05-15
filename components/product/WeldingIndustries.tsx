"use client";

import React from "react";
import Industries, { type Industry } from "@/components/Industries";
import { SITE_IMAGES } from '@/config/images';

/* ═══════════════════════════════════════════════════════════════
   WELDING INDUSTRIES — "Industries We Serve"
   Card section utilizing the reusable Industries component from the home page,
   scoped to welding-focused verticals.
   ═══════════════════════════════════════════════════════════════ */

const WELDING_INDUSTRIES: Industry[] = [
  {
    title: "Automotive & Transportation",
    image: SITE_IMAGES.welding.industries.automotive,
    slug: "/products/welding/industries/automotive",
  },
  {
    title: "General Fabrication",
    image: SITE_IMAGES.welding.industries.generalFabrication,
    slug: "/products/welding/industries/general-fabrication",
  },
  {
    title: "Oil & Gas / Process Industries",
    image: SITE_IMAGES.welding.industries.oilGas,
    slug: "/products/welding/industries/oil-gas",
  },
  {
    title: "Heavy Engineering",
    image: SITE_IMAGES.welding.industries.heavyEngineering,
    slug: "/products/welding/industries/heavy-engineering",
  },
  {
    title: "Smart Cities & Urban Development",
    image: SITE_IMAGES.welding.industries.smartCities,
    slug: "/products/welding/industries/smart-cities",
  },
];

const WeldingIndustries: React.FC = () => {
  return (
    <Industries 
      data={WELDING_INDUSTRIES} 
      title="Industries We Serve" 
      subtitle="Welding Applications" 
      gridCols={5} 
    />
  );
};

export default WeldingIndustries;
