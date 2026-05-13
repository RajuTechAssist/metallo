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

const OVERVIEW_NAV_ITEMS = [
  { id: "ecosystem", label: "Ecosystem" },
  { id: "industries", label: "Industries" },
  { id: "Products", label: "Products" },
  { id: "quality", label: "Quality & Certifications" },
];

const PRODUCTS_NAV_ITEMS = [
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

  const activeNavItems = isProductsView ? PRODUCTS_NAV_ITEMS : OVERVIEW_NAV_ITEMS;
  const defaultActive = isProductsView ? categoryParam : "ecosystem";
  
  const [activeSection, setActiveSection] = useState<string>(defaultActive);

  // Sync state when categoryParam changes
  useEffect(() => {
    if (isProductsView && categoryParam) {
      setActiveSection(categoryParam);
      // Optional: scroll slightly down to the catalog section
      setTimeout(() => {
        const el = document.getElementById("catalog-section");
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      setActiveSection("ecosystem");
    }
  }, [categoryParam, isProductsView]);

  // Scrollspy for the overview view
  useEffect(() => {
    const handleScroll = () => {
      if (isProductsView) return; // Disable scrollspy in products view

      const sections = activeNavItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeNavItems, isProductsView]);

  const scrollToSection = (id: string) => {
    if (isProductsView) {
      // Navigate to the other category
      router.push(`/products/welding?category=${id}`, { scroll: false });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
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
              {activeNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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

            {/* Back to Overview button when in Products View */}
            {isProductsView && (
              <button 
                onClick={() => router.push("/products/welding")}
                className="hidden md:flex items-center gap-1 text-sm font-bold font-heading text-metallo-navy hover:text-yellow-600 transition-colors uppercase tracking-wider whitespace-nowrap px-4"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Overview
              </button>
            )}
          </div>
        </div>
      </nav>

      {isProductsView && categoryParam ? (
        <div id="catalog-section" className="min-h-screen">
          {/* Mobile Back Button */}
          <div className="md:hidden container pt-6">
             <button 
                onClick={() => router.push("/products/welding")}
                className="flex items-center gap-1 text-sm font-bold font-heading text-metallo-navy hover:text-yellow-600 transition-colors uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Overview
              </button>
          </div>
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
