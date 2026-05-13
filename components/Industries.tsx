"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { SITE_IMAGES } from '@/config/images';

export interface Industry {
  title: string;
  image: string;
  slug: string;
}

export const defaultIndustriesData: Industry[] = [
  {
    title: "Infrastructure & Construction",
    image: SITE_IMAGES.industries.grid.infrastructure,
    slug: "/industries/infrastructure",
  },
  {
    title: "Power & Transmission",
    image: SITE_IMAGES.industries.grid.powerTransmission,
    slug: "/industries/power-transmission",
  },
  {
    title: "Oil & Gas / Process Industries",
    image: SITE_IMAGES.industries.grid.oilGas,
    slug: "/industries/oil-gas",
  },
  {
    title: "Heavy Engineering",
    image: SITE_IMAGES.industries.grid.heavyEngineering,
    slug: "/industries/heavy-engineering",
  },
  {
    title: "Railways & Defence",
    image: SITE_IMAGES.industries.grid.railways,
    slug: "/industries/railways-defence",
  },
  {
    title: "Smart Cities & Urban Development",
    image: SITE_IMAGES.industries.grid.smartCities,
    slug: "/industries/smart-cities",
  }
];

interface IndustriesProps {
  data?: Industry[];
  title?: string;
  subtitle?: string;
  gridCols?: 5 | 6;
}

const Industries: React.FC<IndustriesProps> = ({ 
  data = defaultIndustriesData, 
  title = "Industries we serve", 
  subtitle,
  gridCols = 6 
}) => {
  const gridClass = gridCols === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6";

  return (
    <section className="w-full py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="mb-10">
          {subtitle && (
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-10 h-px bg-yellow-500" />
              <span className="text-xs font-bold font-heading text-yellow-600 uppercase tracking-[0.2em]">
                {subtitle}
              </span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-serif text-metallo-navy mb-3">
            {title}
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* Compact Zetwerk-style image cards — single row, horizontally scrollable */}
        <div
          className={`flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid ${gridClass} lg:gap-4 lg:overflow-visible lg:pb-0`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((industry) => (
            <Link
              href={industry.slug}
              key={industry.slug}
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[296px] rounded-md overflow-hidden cursor-pointer block"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 180px, 160px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-base font-bold font-heading text-white leading-tight">
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

export default Industries;