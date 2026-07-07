"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/config/images";

const FutureAspects: React.FC = () => {
  const products = [
    {
      id: "robotics-automation",
      title: "Robotics & Automation",
      subtitle: "Intelligent Manufacturing Systems",
      description:
        "Metallo is pioneering the design and deployment of multi-axis robotic assembly cells, custom automated welding stations, and fully integrated smart factory systems. We deliver autonomous production capabilities that optimize throughput, eliminate manual safety risks, and implement real-time AI-based quality checks across complex assembly workflows.",
      image: SITE_IMAGES.futureAspects.products.robotics,
      specs: [
        { label: "Automation Tech", value: "Automated production technologies & conveyor integration", icon: "precision_manufacturing" },
        { label: "Robotics Core", value: "Multi-axis robotic fabrication, handling & precision assembly", icon: "smart_toy" },
        { label: "Process Control", value: "Real-time process optimization & sensor feedback systems", icon: "tune" },
        { label: "IoT Integration", value: "Smart factory dashboard control and end-to-end telemetry", icon: "hub" },
      ],
      highlights: [
        "Increases factory throughput by up to 40% through automated cycle synchronization.",
        "Custom welding trajectories programmed for complex high-strength steel fabrications.",
        "Plug-and-play IoT modules integrate with existing ERP systems for digital oversight.",
      ],
      icon: "smart_toy",
    },
    {
      id: "aerospace-components",
      title: "Aerospace Component Manufacturing",
      subtitle: "Engineering for Extreme Environments",
      description:
        "Operating under the most stringent structural tolerances and strict material certifications, Metallo manufactures precision aerospace engine mounts, high-performance structural airframe components, and specialized landing gear fittings. Our supply network is certified to AS9100 Rev D standards to ensure compliance with global flight-safety requirements.",
      image: SITE_IMAGES.futureAspects.products.aerospace,
      specs: [
        { label: "Machining Accuracy", value: "5-axis high-speed CNC milling and precision turning", icon: "architecture" },
        { label: "Superalloy Expertise", value: "Titanium Gr. 5, Inconel 718, and custom aerospace steel grades", icon: "layers" },
        { label: "Structural Role", value: "Load-bearing wing ribs, turbine brackets, and structural frames", icon: "view_in_ar" },
        { label: "Quality Compliance", value: "AS9100 Rev D, 100% dye penetrant and ultrasonic inspection", icon: "verified" },
      ],
      highlights: [
        "100% raw material PMI (Positive Material Identification) and batch test certificates.",
        "Deep expertise in machining heat-resistant superalloys with minimal tool deflection.",
        "Fully digital QA data package shipped with every aerospace consignment.",
      ],
      icon: "flight",
    },
    {
      id: "fighter-drones",
      title: "Fighter Drones (Defence)",
      subtitle: "Autonomous Combat & Tactical Systems",
      description:
        "Metallo's defence system engineering division designs and manufactures tactical UAV platforms for critical missions. Equipped with secure edge-AI computing, encrypted battlefield datalinks, and mission-modular payload spaces, our fighter drones are optimized to deliver intelligence, reconnaissance, surveillance, and tactical aerial superiority under contested conditions.",
      image: SITE_IMAGES.futureAspects.products.drones,
      specs: [
        { label: "Navigation Systems", value: "Autonomous GPS-denied navigation and optical flow alignment", icon: "explore" },
        { label: "Intelligence Integration", value: "Edge-AI processing, targeting analytics, and auto-tracking", icon: "psychology" },
        { label: "ISR Capacity", value: "High-resolution thermal, EO/IR sensors with real-time video feed", icon: "videocam" },
        { label: "Connectivity", value: "Tactical mesh networking and secure encrypted ground link", icon: "cell_tower" },
      ],
      highlights: [
        "Carbon-fiber reinforced airframes built to resist harsh winds and thermal loads.",
        "Modular payload system allows swapping sensors, communications, or cargo in under 5 minutes.",
        "Advanced flight algorithms enable swarm-based search and rescue or surveillance.",
      ],
      icon: "flight_takeoff",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_IMAGES.futureAspects.banner}
            alt="Next-Gen Industrial Expansion"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl bg-slate-900/60 p-10">
            <span className="block text-metallo-gold font-bold uppercase tracking-[0.2em] mb-4 text-sm font-heading">
              Metallo Company Profile
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 uppercase tracking-wide leading-tight">
              Next-Gen{" "}
              <span className="text-metallo-gold">Industrial Expansion</span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 font-sans max-w-3xl mb-3 md:mb-4">
              Expanding our engineering boundaries into advanced technology
              horizons — intelligent robotics, aerospace component manufacturing,
              and autonomous aerial combat systems in the defence sector.
            </p>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl mb-8 md:mb-10">
              Engineering the future of industrial infrastructure at Metallo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="#robotics-automation"
                className="px-8 py-4 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider hover:bg-white transition-all shadow-xl text-center text-sm"
              >
                Explore Future Verticals
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold font-heading uppercase tracking-wider hover:bg-white hover:text-metallo-navy transition-all shadow-xl text-center text-sm"
              >
                Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OVERVIEW SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="block text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-4 text-sm font-heading">
              Future Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-6 leading-tight">
              Building Systems to Power the Future
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Metallo is investing in three transformative industrial verticals
              that will define the next era of engineering excellence. From
              intelligent factory automation to mission-critical defence
              platforms, each vertical is backed by our proven manufacturing
              ecosystem.
            </p>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-metallo-gold hover:shadow-lg transition-all duration-300"
              >
                <span className="material-symbols-outlined text-3xl text-metallo-gold mb-4 block">
                  {product.icon}
                </span>
                <h3 className="text-lg font-heading font-bold text-metallo-navy mb-2 group-hover:text-metallo-gold-hover transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">{product.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DETAILED PRODUCT SECTIONS
          ═══════════════════════════════════════════════════════════ */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-gray-50";
        return (
          <section
            id={product.id}
            key={product.id}
            className={`py-20 md:py-28 ${bgColor} scroll-mt-24`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`relative w-full h-[300px] md:h-[420px] rounded-lg overflow-hidden shadow-xl ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-xl text-metallo-gold">
                      {product.icon}
                    </span>
                    <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] text-xs font-heading">
                      Growth & Innovation {index + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-2 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-metallo-gold-hover text-sm font-semibold tracking-wide font-heading mb-5">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Core Specs Grid */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-metallo-navy border-b border-gray-200 pb-2 mb-4 font-heading">
                      Core Technology Stack
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-gray-50 border border-gray-100 p-4 rounded-lg hover:border-metallo-gold/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="material-symbols-outlined text-sm text-metallo-gold">
                              {spec.icon}
                            </span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase font-heading">
                              {spec.label}
                            </span>
                          </div>
                          <span className="text-xs text-gray-700 leading-relaxed">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-metallo-navy mb-3 font-heading">
                      Operational Highlights
                    </h3>
                    <ul className="space-y-2">
                      {product.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-metallo-gold rounded-full mr-3 mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════════
          CALL TO ACTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-metallo-navy z-0" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-left">
          <span className="block text-metallo-gold font-bold uppercase tracking-[0.2em] mb-4 text-sm font-heading">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight uppercase">
            Ready to Build the{" "}
            <span className="text-metallo-gold">Next Generation?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-5xl">
            Metallo collaborates with defence contractors, aerospace firms, and
            advanced manufacturing plants to design, test, and scale
            next-generation components and robotic automation suites. Share your
            design codes or technical requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider hover:bg-white transition-all shadow-xl text-sm"
            >
              Contact Engineering Team
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold font-heading uppercase tracking-wider hover:bg-white hover:text-metallo-navy transition-all shadow-xl text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureAspects;
