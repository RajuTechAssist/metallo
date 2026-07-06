"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { SHOWCASE_PRODUCT_VERTICALS } from "@/lib/productVerticals";

const Verticals: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 240; // width of a card on desktop
      const gap = 16; // gap between cards
      const scrollAmount = (cardWidth + gap) * 2; // scroll 2 cards at a time
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-50 w-full" id="verticals">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">
              Our Product Spectrum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">
              Complete Industrial Solutions
            </h2>
            <p className="text-gray-600 text-base">
              From the foundation to the finishing touches, we manufacture the critical
              components that power your projects.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2.5 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-metallo-navy hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-metallo-gold"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined font-bold">chevron_left</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-metallo-navy hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-metallo-gold"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined font-bold">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHOWCASE_PRODUCT_VERTICALS.map((item) => (
            <Link
              href={item.path}
              key={item.key}
              className="group relative flex-shrink-0 w-[160px] h-[230px] md:w-[185px] md:h-[260px] lg:w-[220px] lg:h-[310px] xl:w-[240px] xl:h-[340px] rounded-md overflow-hidden cursor-pointer block snap-start"
            >
              <Image
                src={item.showcaseImage || ''}
                alt={item.showcaseTitle || item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 15vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute top-3 right-3 bg-metallo-navy/80 text-white p-1.5 rounded-full z-10">
                <span className="material-symbols-outlined text-base flex justify-center items-center w-5 h-5">{item.icon}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <h3 className="text-sm font-bold font-heading text-white leading-tight mb-0.5">
                  {item.showcaseTitle || item.name}
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-wider font-heading mb-2">
                  {item.showcaseSubtitle}
                </p>

                <ul className="space-y-0.5 mb-2.5">
                  {(item.showcasePoints || []).map((point, idx) => (
                    <li key={idx} className="flex items-center text-[10px] text-gray-200">
                      <span className="w-1 h-1 bg-metallo-gold rounded-full mr-1.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-metallo-gold text-xs font-bold font-heading">
                  Explore <span className="material-symbols-outlined text-sm ml-0.5">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;