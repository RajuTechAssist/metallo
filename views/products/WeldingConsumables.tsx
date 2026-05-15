"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  WeldingHero,
  WeldingAbout,
  WeldingIndustries,
  WeldingOfferings,
  WeldingProductCatalog,
  ProductQABanner,
  VerticalCertifications,
} from "../../components/product";
import { QA_ITEMS } from "@/data/weldingData";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "consumables", label: "Consumables" },
  { id: "automation", label: "Automation" },
  { id: "accessories", label: "Accessories & Tools" },
  { id: "safety", label: "Safety & PPE" },
];

const WeldingPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const validCategories = ["consumables", "automation", "accessories", "safety"];
  const isProductsView = categoryParam && validCategories.includes(categoryParam);

  const activeSection = isProductsView && categoryParam ? categoryParam : "overview";

  const handleNavClick = (id: string) => {
    if (id === "overview") {
      router.push("/products/welding", { scroll: true });
    } else {
      router.push(`/products/welding?category=${id}`, { scroll: true });
    }
  };

  return (
    <div className="w-full bg-slate-50" style={{ overflowX: "clip" }}>
      <WeldingHero />

      {/* ═══ STICKY SECTION NAV ════════════════════════════════════ */}
      <nav className="sticky top-[30px] lg:top-[50px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-0 overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative whitespace-nowrap px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
                    activeSection === item.id
                      ? "text-yellow-600"
                      : "text-slate-500 hover:text-metallo-navy"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-500 rounded-t" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isProductsView && categoryParam ? (
        <div id="catalog-section" className="min-h-screen pt-4">
          <WeldingProductCatalog categoryKey={categoryParam} />
          
          <section id="quality" className="bg-white">
            <ProductQABanner title="Certified Welding Consumables" items={QA_ITEMS} />
          </section>
        </div>
      ) : (
        <>
          {/* Ecosystem uses id="ecosystem" internally */}
          <WeldingAbout />

          <section id="industries">
            <WeldingIndustries />
          </section>

          <section id="Products">
            <WeldingOfferings />
          </section>

          <section id="quality" className="bg-white">
            <VerticalCertifications verticalKey="welding" />
            <ProductQABanner title="Certified Welding Consumables" items={QA_ITEMS} />
          </section>
        </>
      )}
    </div>
  );
};

const WeldingConsumables: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50"></div>}>
      <WeldingPageContent />
    </Suspense>
  );
};

export default WeldingConsumables;
