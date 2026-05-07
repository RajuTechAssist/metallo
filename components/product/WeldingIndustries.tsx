"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════
   WELDING INDUSTRIES — "Industries We Serve"
   Card section matching the home page Industries component,
   but scoped to welding-focused verticals.
   ═══════════════════════════════════════════════════════════════ */

interface WeldingIndustry {
  title: string;
  image: string;
  slug: string;
}

const WELDING_INDUSTRIES: WeldingIndustry[] = [
  {
    title: "Automotive & Transportation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop",
    slug: "/products/welding/industries/automotive",
  },
  {
    title: "General Fabrication",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop",
    slug: "/products/welding/industries/general-fabrication",
  },
  {
    title: "Oil & Gas / Process Industries",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop",
    slug: "/products/welding/industries/oil-gas",
  },
  {
    title: "Heavy Engineering",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop",
    slug: "/products/welding/industries/heavy-engineering",
  },
  {
    title: "Smart Cities & Urban Development",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80&auto=format&fit=crop",
    slug: "/products/welding/industries/smart-cities",
  },
];

const WeldingIndustries: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-10 h-px bg-yellow-500" />
            <span className="text-xs font-bold font-heading text-yellow-600 uppercase tracking-[0.2em]">
              Welding Applications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* Card grid — horizontally scrollable on mobile, 5-col grid on desktop */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WELDING_INDUSTRIES.map((industry) => (
            <Link
              href={industry.slug}
              key={industry.slug}
              className="group relative flex-shrink-0 w-[180px] h-[250px] md:w-[200px] md:h-[270px] lg:w-auto lg:h-[320px] rounded-md overflow-hidden cursor-pointer block"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 200px, 180px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-bold font-heading text-white leading-tight mb-1">
                  {industry.title}
                </h3>
                <span className="inline-flex items-center text-metallo-gold text-xs font-bold font-heading">
                  Explore{" "}
                  <span className="material-symbols-outlined text-sm ml-0.5">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeldingIndustries;
