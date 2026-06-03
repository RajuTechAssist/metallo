"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_IMAGES } from '@/config/images';

/* ═══════════════════════════════════════════════════════════════
   WELDING OFFERINGS
   4-column product offerings section showing categories and sub-items.
   ═══════════════════════════════════════════════════════════════ */

interface OfferingCategory {
  title: string;
  image: string;
  link: string;
  items: { label: string; href: string }[];
}

const OFFERING_CATEGORIES: OfferingCategory[] = [
  {
    title: "Consumables",
    image:
      SITE_IMAGES.welding.offerings.consumables,
    link: "/products/welding?category=consumables",
    items: [
      { label: "MIG Wire and TIG Cut Lengths", href: "/products/welding?category=consumables" },
      { label: "Stick Electrodes", href: "/products/welding?category=consumables" },
      { label: "Metal-Cored Wires", href: "/products/welding?category=consumables" },
      { label: "Self Shielded Flux Cored", href: "/products/welding?category=consumables" },
      { label: "Submerged Arc", href: "/products/welding?category=consumables" },
      { label: "Stainless Alloys", href: "#" },
    ],
  },
  {
    title: "Automation",
    image:
      SITE_IMAGES.welding.offerings.safetyPPE,
    link: "/products/welding?category=automation",
    items: [
      { label: "Robotic Welding Systems", href: "#" },
      { label: "Collaborative Robotic Systems", href: "#" },
      { label: "Mechanized Automation", href: "#" },
      { label: "Robotic Laser Systems", href: "#" },
      { label: "Positioners", href: "#" },
    ],
  },
  {
    title: "Accessories & Tools",
    image:
      SITE_IMAGES.welding.offerings.accessoriesTools,
    link: "/products/welding?category=accessories",
    items: [
      { label: "Equipment Accessories", href: "#" },
      { label: "Cutting Accessories", href: "#" },
      { label: "Gun & Torch Accessories", href: "#" },
      { label: "Helmet Accessories", href: "#" },
      { label: "General Accessories", href: "#" },
    ],
  },
  {
    title: "Safety & PPE",
    image:
      SITE_IMAGES.welding.offerings.automation,
    link: "/products/welding?category=safety",
    items: [
      { label: "Hand, Body and Arm", href: "#" },
      { label: "Personal Respiratory Protection", href: "#" },
      { label: "Weld Fume Control", href: "#" },
      { label: "Head, Face and Eye", href: "#" },
      { label: "Safety Gear Bags", href: "#" },
      { label: "Weld Booths", href: "#" },
    ],
  },
];

const WeldingOfferings: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-4">
            Product Offerings
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-sans max-w-4xl">
            Metallo x WB Alloys, offers everything you need for your welding &
            cutting, consumables, automation, weld fume control and safety & ppe
            needs.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OFFERING_CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col">
              {/* Image */}
              <Link href={category.link} className="block w-full h-[220px] relative mb-6 overflow-hidden rounded-sm group">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </Link>

              {/* Category Title */}
              <Link href={category.link} className="group inline-flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold font-heading text-metallo-navy group-hover:text-yellow-600 transition-colors">
                  {category.title}
                </h3>
                <span className="material-symbols-outlined text-metallo-navy group-hover:text-yellow-600 transition-colors">
                  chevron_right
                </span>
              </Link>

              {/* Items List */}
              <ul className="flex flex-col space-y-3">
                {category.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm font-sans text-yellow-600 hover:text-yellow-500 hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeldingOfferings;
