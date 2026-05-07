"use client";

import React from "react";
import {
  WeldingHero,
  WeldingAbout,
  WeldingIndustries,
  WeldingOfferings,
  ProductQABanner,
  VerticalCertifications,
} from "../../components/product";
import {
  QA_ITEMS,
} from "@/data/weldingData";

const WeldingConsumables: React.FC = () => {
  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <WeldingHero />
      <WeldingAbout />
      <WeldingIndustries />
      <WeldingOfferings />

      <VerticalCertifications verticalKey="welding" />
      <ProductQABanner title="Certified Welding Consumables" items={QA_ITEMS} />
    </div>
  );
};

export default WeldingConsumables;
