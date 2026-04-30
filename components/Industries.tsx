"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface Industry {
  title: string;
  image: string;
  slug: string;
}

const industriesData: Industry[] = [
  {
    title: "Infrastructure & Construction",
    image: "/industries/infrastructure-construction.jpg",
    slug: "/industries/infrastructure",
  },
  {
    title: "Power & Transmission",
    image: "/industries/powerTransmission.jpg",
    slug: "/industries/power-transmission",
  },
  {
    title: "Oil & Gas / Process Industries",
    image: "/industries/oil-gas.jpg",
    slug: "/industries/oil-gas",
  },
  {
    title: "Heavy Engineering",
    image: "/industries/heavyEngineering.jpg",
    slug: "/industries/heavy-engineering",
  },
  {
    title: "Railways & Defence",
    image: "/industries/railway-station.webp",
    slug: "/industries/railways-defence",
  },
  {
    title: "Smart Cities & Urban Development",
    image: "/industries/smartCities.jpg",
    slug: "/industries/smart-cities",
  }
];

const Industries: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-metallo-navy mb-3">
            Industries we serve
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* Compact Zetwerk-style image cards — single row, horizontally scrollable */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industriesData.map((industry) => (
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