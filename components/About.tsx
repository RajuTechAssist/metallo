"use client";

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-6 leading-tight">
              The Distributed Manufacturing OS for{" "}
              <span className="text-metallo-gold-hover">Global Infrastructure</span>.
            </h2>
            <h3 className="text-xl font-medium text-gray-500 mb-8 uppercase tracking-wide font-sans">
              We don&apos;t just build factories. We aggregate, standardize, and
              scale the world&apos;s idle industrial capacity.
            </h3>
            <div className="prose prose-lg text-gray-600 mb-10 space-y-4">
              <p>
                The global supply chain for heavy engineering is massive, yet heavily fragmented.
                Metallo acts as the central orchestrator—aggregating underutilized capacity across an
                audited, international network of specialized facilities, from high-grade steel mills to heavy-duty cable fabricators.
                We enforce universal Tier-1 standards to integrate them into a single, borderless production ecosystem.
              </p>
              <p>
                Operating on an agile, asset-light model, we provide multinational EPC contractors with infinite scaling flexibility.
                Every component is standardized via our strict SOPs, centrally procured, and certified at our Central QC Hub—delivering
                mission-critical infrastructure products across continents without traditional heavy-CAPEX bottlenecks.
              </p>
              <p>
                We don&apos;t just supply products; we engineer certainty. Whether
                you are building a mega-factory, a smart city, or a port,
                Metallo provides the standardized quality and manufacturing
                velocity you need to deliver on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {/* Pillar 1 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">
                  account_tree
                </span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">
                  Global Scaling
                </h4>
                <p className="text-sm text-gray-600">
                  Infinite manufacturing capacity across a worldwide audited network.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">
                  fact_check
                </span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">
                  Central QC Hub
                </h4>
                <p className="text-sm text-gray-600">
                  100% batch-tested to meet international Tier-1 EPC standards.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">
                  inventory_2
                </span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">
                  Unified Procurement
                </h4>
                <p className="text-sm text-gray-600">
                  One borderless platform for your entire infrastructure BOM.
                </p>
              </div>
            </div>
          </div>
          {/* Image Cards — Zetwerk-style */}
          <div className="order-2 flex flex-col gap-6">
            {/* Card 1 — India Entry for Global Manufacturers */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop"
                alt="Global Manufacturing Entry point"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  Your Single Gateway
                  <br />
                  Into GLOBAL Manufacturing
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover mt-2 tracking-wide">
                  Audited worldwide capacity, global standards, faster market entry.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  Skip the complexity of fragmented supply chains.
                  Metallo&apos;s Manufacturing OS connects you to an audited international network of specialized
                  facilities with standardized SOPs, Central QC Hub testing, and full MTC traceability—production-ready from day one.
                </p>
              </div>
            </div>

            {/* Card 2 — Global Expansion for Indian Manufacturers */}
            <div className="group relative rounded-lg overflow-hidden shadow-2xl h-[340px] lg:h-[380px] cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85&auto=format&fit=crop"
                alt="Global Expansion for Indian Manufacturers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-metallo-navy/70 via-transparent to-metallo-navy/90" />

              {/* Top Headline */}
              <div className="absolute top-0 left-0 right-0 p-7 inset-0 bg-black bg-opacity-50">
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase leading-tight tracking-wide">
                  From India to the World,
                  <br />
                  Built to Spec
                </h3>
                <p className="text-sm font-sans text-metallo-gold-hover overlay-black mt-2 tracking-wide">
                  Export‑grade processes, unified QA, faster go‑to‑market.
                </p>
              </div>

              {/* Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                  Metallo converts your idle capacity into export‑grade output.
                  We handle unified BOMs, procurement, and quality traceability
                  across your Small and Medium Enterprise network—so you win international tenders in
                  the Middle East, Africa, and beyond without adding CAPEX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;