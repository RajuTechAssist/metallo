"use client";

import React from "react";
import Image from "next/image";
import { SITE_IMAGES } from '@/config/images';

/* ═══════════════════════════════════════════════════════════════
   WELDING ABOUT — "The Legacy Banner"
   Explains the Metallo × WB Alloys integration and how it
   benefits multinational EPC contractors. Mirrors the layout
   of the home page About section (2-col grid + image cards).
   ═══════════════════════════════════════════════════════════════ */

const PILLARS = [
  {
    icon: "precision_manufacturing",
    title: "Metallurgical Engineering",
    desc: "Decades of specialized filler wire, flux, and alloy formulation from WB Alloys' manufacturing legacy.",
  },
  {
    icon: "hub",
    title: "NDT/NDE On-Site",
    desc: "World-class non-destructive testing engineers deployed directly to your global mega-project sites.",
  },
  {
    icon: "verified_user",
    title: "LEV & Extraction Compliance",
    desc: "State-of-the-art fume extraction, PAPR respiratory systems, and on-site LEV certification as standard.",
  },
] as const;

const WeldingAbout: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="ecosystem">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Text Content ── */}
          <div className="order-1">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-10 h-px bg-yellow-500" />
              <span className="text-xs font-bold font-heading text-yellow-600 uppercase tracking-[0.2em]">
                Global Scale. Specialized DNA.
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-6 leading-tight">
              Centralized Control.{" "}
              <span className="text-metallo-gold-hover">
                Unmatched Metallurgical Execution.
              </span>
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl font-medium text-gray-500 mb-8 uppercase tracking-wide font-sans">
              Metallo × WB Alloys — A complete technical ecosystem for multinational welding operations.
            </h3>

            {/* Body Paragraphs */}
            <div className="prose prose-lg text-gray-600 mb-10 space-y-4">
              <p>
                By integrating WB Alloys into the Metallo Distributed OS, we are redefining
                industrial welding procurement. We have combined Metallo&apos;s infinite scaling
                capacity with WB Alloys&apos; legacy as a premier manufacturer of high-integrity
                filler wire, fluxes, and advanced welding equipment.
              </p>
              <p>
                This is more than a supply chain—it is a complete technical ecosystem.
                From our global training schools and on-site NDT/NDE engineering to rigorous
                machine calibration and extraction compliance, we offer multinational EPC
                contractors end-to-end welding solutions under one unified platform.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-2 group cursor-default"
                >
                  <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">
                    {pillar.icon}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-metallo-navy">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-gray-600">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image Cards ── */}
          <div className="order-2 flex flex-col gap-6">
            {/* Card 1 — WB Alloys Integration */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <Image
                src={SITE_IMAGES.welding.about.mainImage}
                alt="WB Alloys welding integration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  Powered by
                  <br />
                  WB Alloys Engineering
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover mt-2 tracking-wide">
                  Advanced metallurgical DNA. Agile global delivery.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  WB Alloys brings decades of specialized welding consumable manufacturing—from
                  high-integrity filler wires and fluxes to precision-engineered welding equipment.
                  Now unified under Metallo&apos;s Distributed OS for borderless deployment.
                </p>
              </div>
            </div>

            {/* Card 2 — Global Training & Compliance */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <Image
                src={SITE_IMAGES.welding.about.secondaryImage}
                alt="Global welding training and compliance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  End-to-End Welding
                  <br />
                  Technical Ecosystem
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover mt-2 tracking-wide">
                  Training schools. NDT/NDE. Machine calibration. LEV certification.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  From Glasgow to Virginia and the UAE—our global training schools certify
                  welding engineers to Tier-1 standards. On-site NDT/NDE inspection, machine
                  calibration, and full extraction compliance deliver zero-compromise safety
                  at every mega-project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeldingAbout;
