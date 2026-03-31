import React from 'react';
import { Link } from 'react-router-dom';
import { CONTAINER } from '../components/product/productLayout';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION — Company Identity
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Metallo_office.png"
            alt="Metallo Industrial Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute mix-blend-multiply"></div>
        </div>

        <div className={`relative z-10 flex flex-col justify-center ${CONTAINER}`}>
          <div className='max-w-4xl inset-0 bg-slate-900/60 pt-10 pb-10 pl-10 pr-10'>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 uppercase tracking-wide leading-tight">
              Powering the Future of
              <br /><span className="text-metallo-gold">Industrial Infrastructure</span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 font-serif max-w-4xl mb-3 md:mb-4">
              Metallo is a manufacturing-technology platform that integrates global industrial capacity into a scalable, quality-controlled production ecosystem.
            </p>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl mb-8 md:mb-10">
              Delivering engineered metal solutions with precision, scale, and global reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button className="px-8 py-4 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider hover:bg-white transition-all shadow-xl">
                Download Corporate Profile
              </button>
              <Link to="/contact" className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold font-heading uppercase tracking-wider hover:bg-white hover:text-metallo-navy transition-all shadow-xl">
                Contact Our Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: COMPANY OVERVIEW — The Metallo Story
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-4 text-sm font-heading">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-8 leading-tight">
                Rewiring the Industrial Supply Chain.
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-sans">
                <p>
                  Metallo is a modern manufacturing-technology platform built to power the next generation of industrial infrastructure. We integrate specialised manufacturing facilities, engineering expertise, and global supply networks into a single coordinated ecosystem that delivers high-performance engineered materials worldwide.
                </p>
                <p>
                  Unlike traditional manufacturers limited by fixed factory capacity, Metallo operates an asset-light distributed production model. By connecting pipe mills, CNC machining centres, fabrication units, and industrial assembly facilities into a unified manufacturing network, we enable scalable production while maintaining strict engineering and quality standards.
                </p>
                <p>
                  This platform-driven approach allows Metallo to deliver reliable industrial metal solutions—from stainless steel piping systems to precision-engineered components—while eliminating the bottlenecks that slow down industrial supply chains.
                </p>
                <p className="font-bold text-metallo-navy">
                  Metallo was built to simplify industrial sourcing—bringing together manufacturing capacity, engineering precision, and global logistics into one seamless platform.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-100 rounded-tr-[4rem] -z-10"></div>
              <img
                src="/Steel/oil_industry1.jpg"
                alt="Industrial Construction"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              {/* <div className="absolute -bottom-8 -left-8 bg-metallo-navy p-8 text-white max-w-xs shadow-xl hidden md:block">
                <p className="font-heading text-2xl font-bold mb-2">Since 2026</p>
                <p className="text-sm opacity-80">Solving complex procurement challenges for Global EPCs.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: THE METALLO SYMBOL
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className={CONTAINER}>
          <div className="mb-12">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">The Metallo Symbol</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-2">The Unbroken Loop of Progress</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16 justify-between">
            {/* Globe "O" Symbol from Logo */}
            <div className="flex-shrink-0 relative group flex flex-col items-center md:items-start lg:ml-12">
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <img src="/logo-icon.svg" alt="Metallo Globe Symbol" className="w-full h-full object-contain animate-spin-slow" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Continuity in Motion</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="space-y-6 text-gray-600">
                <p>
                  At the heart of the Metallo identity lies a simple yet powerful symbol — <strong className="text-metallo-navy">the Circular Railway Track.</strong>
                </p>
                <p>
                  In heavy infrastructure, a railway track represents strength, direction, and engineered precision. But a circular track carries a deeper meaning: <strong className="text-metallo-navy">continuity without interruption.</strong>
                </p>
                <p>
                  It reflects Metallo's philosophy of delivering 360-degree industrial solutions, where every stage of the supply chain is connected, coordinated, and constantly moving forward.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">The Infinite Cycle</strong>
                    <span className="text-sm">From raw material sourcing to finished infrastructure, Metallo supports every stage of the industrial lifecycle — creating a complete, end-to-end ecosystem for engineered metal solutions.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">Uninterrupted Momentum</strong>
                    <span className="text-sm">Just as a train on a continuous track never stops moving, Metallo ensures a resilient supply chain that keeps projects progressing without disruption.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm sm:col-span-2">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">Boundless Connectivity</strong>
                    <span className="text-sm">Like a railway network connecting cities and industries, Metallo connects multiple industrial verticals — from steel and structural components to electrical infrastructure and industrial tools — into a unified platform.</span>
                  </li>
                </ul>
                <p className="font-bold text-metallo-navy mt-6">
                  The Metallo symbol represents our commitment to delivering seamless, 360-degree solutions that keep industries moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: THE METALLO PLATFORM ADVANTAGE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className={CONTAINER}>
          <div className="mb-16">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">The Metallo Platform Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-6">
              Distributed Manufacturing. Scalable Industrial Capacity.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Metallo operates a modern distributed manufacturing platform designed to eliminate the limitations of traditional factory-based production. Instead of relying on a single manufacturing facility, we integrate a network of specialised industrial partners—including pipe mills, CNC machining centres, fabrication units, and component manufacturers—into one coordinated production ecosystem.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through centralized raw material procurement, standardized production protocols, and digital production tracking, Metallo ensures consistent quality across every manufacturing partner. This asset-light platform architecture allows us to scale production rapidly, fulfill complex industrial orders efficiently, and deliver high-precision metal components without the bottlenecks of conventional manufacturing models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">hub</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Networked Manufacturing Capacity</h3>
              <p className="text-sm text-gray-600">
                A coordinated ecosystem of specialized production facilities working as one unified manufacturing network.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">inventory</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Centralized Raw Material Procurement</h3>
              <p className="text-sm text-gray-600">
                Bulk material sourcing ensures consistent quality standards and cost efficiency across the entire production ecosystem.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">engineering</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Standardized Engineering Processes</h3>
              <p className="text-sm text-gray-600">
                Strict Standard Operating Procedures (SOPs) ensure consistent fabrication quality, dimensional accuracy, and material integrity.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">trending_up</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Scalable Production Delivery</h3>
              <p className="text-sm text-gray-600">
                Distributed manufacturing capacity enables rapid scaling for high-volume infrastructure and industrial projects.
              </p>
            </div>
          </div>

          <div className="text-left mt-12 bg-metallo-gold/10 inline-block px-8 py-4 border-l-4 border-metallo-gold">
            <p className="text-lg font-bold text-metallo-navy font-heading">
              Metallo transforms fragmented industrial capacity into a unified, scalable manufacturing platform.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: QUALITY ASSURANCE & ENGINEERING STANDARDS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className={CONTAINER}>
          <div className="mb-16">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Engineering Precision & Quality Assurance</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-6">
              A Rigorous 3-Layer Quality Assurance System
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Engineering precision and material reliability are fundamental to every product delivered by Metallo. To guarantee consistent performance across all industrial applications, we operate a structured 3-Layer Quality Assurance Process that verifies materials, manufacturing accuracy, and final product integrity.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every product—whether stainless steel piping systems, structural components, or precision fabricated assemblies—undergoes strict inspection and testing procedures designed to meet global engineering standards. Our quality control framework combines material certification verification, dimensional inspection, and advanced laboratory testing to ensure every component performs reliably in demanding industrial environments.
            </p>
          </div>

          {/* 3-Layer QA Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative bg-gray-50 p-8 border-t-4 border-metallo-gold">
              <div className="absolute -top-5 left-8 bg-metallo-navy text-white w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-lg">1</div>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-4 mt-4">Material Certification Verification</h3>
              <p className="text-sm text-gray-600">
                All raw materials are validated through manufacturer test certificates and third-party documentation before entering the production process, ensuring compliance with required material grades and specifications.
              </p>
            </div>
            <div className="relative bg-gray-50 p-8 border-t-4 border-metallo-gold">
              <div className="absolute -top-5 left-8 bg-metallo-navy text-white w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-lg">2</div>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-4 mt-4">Dimensional & Finishing Inspection</h3>
              <p className="text-sm text-gray-600">
                Our quality control teams perform detailed inspections of dimensions, tolerances, wall thickness, surface finishing, and product markings using calibrated inspection equipment.
              </p>
            </div>
            <div className="relative bg-gray-50 p-8 border-t-4 border-metallo-gold">
              <div className="absolute -top-5 left-8 bg-metallo-navy text-white w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-lg">3</div>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-4 mt-4">Laboratory Testing & Validation</h3>
              <p className="text-sm text-gray-600">
                Material samples undergo chemical and mechanical testing at NABL-accredited and ISO-certified laboratories to verify structural integrity and compliance with international engineering standards.
              </p>
            </div>
          </div>

          {/* Advanced Testing Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-metallo-navy text-white p-10 rounded-sm">
              <h3 className="text-xl font-bold font-heading uppercase mb-6 text-metallo-gold">Advanced Testing Capabilities</h3>
              <p className="text-gray-300 text-sm mb-6">Metallo's quality assurance framework includes multiple in-house and third-party testing procedures to detect defects and verify product performance.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">check_circle</span>
                  Hydrostatic Testing for leak detection
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">check_circle</span>
                  Eddy Current Testing for subsurface flaws
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">check_circle</span>
                  Ultrasonic Testing for internal defects
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">check_circle</span>
                  Positive Material Identification (PMI) testing
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">check_circle</span>
                  Mechanical and chemical material testing
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-10 rounded-sm">
              <h3 className="text-xl font-bold font-heading uppercase mb-6 text-metallo-navy">Compliance & Certification</h3>
              <p className="text-gray-600 text-sm mb-6">Metallo operates under globally recognised quality standards and supports independent inspection by leading third-party agencies.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">verified</span>
                  <span className="text-gray-700">ISO 9001:2015 Certified Quality Management System</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">verified</span>
                  <span className="text-gray-700">Compliance with ASTM, ASME, DIN, and international engineering specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">verified</span>
                  <span className="text-gray-700">Third-party inspection partners may include agencies such as DNV, EIL, BHEL, and other certified inspection bodies.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-left mt-12 bg-metallo-gold/10 inline-block px-8 py-4 border-l-4 border-metallo-gold">
            <p className="text-lg font-bold text-metallo-navy font-heading">
              Quality is not inspected into our products—it is engineered into every stage of production.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: GLOBAL SUPPLY CHAIN INTEGRATION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className={CONTAINER}>
          <div className="mb-16">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Global Supply Chain & Project Delivery</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-6">
              Delivering Metal Solutions — Globally and Locally
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Metallo simplifies complex industrial sourcing through an integrated global supply chain designed for reliability, speed, and efficiency. By combining international manufacturing partnerships with strategically coordinated logistics, we ensure that critical engineering materials reach project sites on time—no matter where they are in the world.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, Metallo exports engineered metal products to more than 29 countries across multiple continents, supporting large-scale infrastructure, energy, and industrial manufacturing projects. Our global logistics network enables us to deliver both standard industrial materials and custom-engineered assemblies with consistent quality and dependable delivery timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">public</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">International Distribution Network</h3>
              <p className="text-sm text-gray-600">
                Metallo maintains a strong international presence through strategic partnerships and regional distribution capabilities, supporting customers across global infrastructure and manufacturing markets.
              </p>
            </div>
            <div className="bg-white p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">warehouse</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Strategic Global Inventory</h3>
              <p className="text-sm text-gray-600">
                To enable rapid dispatch and reduced transit times, we maintain stock with trusted logistics partners across key global locations including the United States, Europe, and Singapore.
              </p>
            </div>
            <div className="bg-white p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">local_shipping</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Efficient Export Operations</h3>
              <p className="text-sm text-gray-600">
                Our export infrastructure supports high-volume shipments, specialized packaging, and coordinated logistics management for international project deliveries.
              </p>
            </div>
            <div className="bg-white p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">assignment</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Project Export Expertise</h3>
              <p className="text-sm text-gray-600">
                Metallo manages complex project exports by coordinating multi-product shipments, logistics planning, and delivery schedules for large industrial and infrastructure projects.
              </p>
            </div>
          </div>

          {/* AEO Status */}
          <div className="bg-metallo-navy text-white p-10 rounded-sm mb-12">
            <h3 className="text-xl font-bold font-heading uppercase mb-4 text-metallo-gold">Compliance & Logistics Efficiency</h3>
            <p className="text-gray-200 leading-relaxed mb-3">
              Metallo holds Authorized Economic Operator (AEO) status, enabling faster customs clearance, improved port handling efficiency, and streamlined international trade processes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This certification allows us to minimize logistical delays and ensure reliable delivery schedules for time-critical infrastructure and industrial projects.
            </p>
          </div>

          <div className="text-left mt-12 bg-metallo-gold/10 inline-block px-8 py-4 border-l-4 border-metallo-gold">
            <p className="text-lg font-bold text-metallo-navy font-heading">
              From raw material sourcing to global project delivery, Metallo ensures your supply chain moves without interruption.
            </p>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: MISSION & VISION
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-metallo-navy text-white py-24">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 mb-16">

            {/* Vision */}
            <div className="pr-0 md:pr-12">
              <h3 className="text-metallo-gold text-lg font-bold uppercase tracking-widest mb-6 font-heading flex items-center gap-2">
                <span className="material-symbols-outlined">visibility</span> The Vision
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our vision is to be the world's most trusted industrial manufacturing platform — uniting engineering innovation, distributed manufacturing capacity, and global logistics to power the future of infrastructure. We aim to lead across multiple verticals (steel, electrical support systems, precision components, and industrial technology), while advancing sustainable practices, global standards compliance, and dependable project exports.
              </p>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90 italic">
                "To be the trusted global platform for engineered industrial solutions."
              </p>
            </div>

            {/* Mission */}
            <div className="pt-12 md:pt-0 pl-0 md:pl-12">
              <h3 className="text-metallo-gold text-lg font-bold uppercase tracking-widest mb-6 font-heading flex items-center gap-2">
                <span className="material-symbols-outlined">flag</span> The Mission
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our mission is to simplify industrial sourcing and manufacturing by building a connected ecosystem of manufacturers, suppliers, and engineering expertise. We combine centralized procurement, standardized production processes, and digital supply-chain visibility to deliver reliable, high-quality industrial products and customised fabrication solutions — on time and to specification. We partner with customers as engineering collaborators, using modern manufacturing technologies and rigorous quality controls to reduce risk and accelerate project delivery.
              </p>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90 italic">
                "Simplifying industrial sourcing through connected manufacturing and engineering excellence."
              </p>
            </div>

          </div>

          {/* Supporting Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 p-6 rounded-sm">
              <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">verified</span>
              <h4 className="text-lg font-bold font-heading uppercase mb-2">Quality & Compliance</h4>
              <p className="text-gray-400 text-sm">ISO-driven processes, NABL lab testing, and third-party inspections to meet ASTM/ASME/DIN standards.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 p-6 rounded-sm">
              <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">scale</span>
              <h4 className="text-lg font-bold font-heading uppercase mb-2">Platform Scalability</h4>
              <p className="text-gray-400 text-sm">Asset-light distributed manufacturing that scales to meet large project demands.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 p-6 rounded-sm">
              <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">handshake</span>
              <h4 className="text-lg font-bold font-heading uppercase mb-2">Customer Partnership</h4>
              <p className="text-gray-400 text-sm">Engineering support, technical selection guidance, and turnkey project export management.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 p-6 rounded-sm">
              <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">eco</span>
              <h4 className="text-lg font-bold font-heading uppercase mb-2">Sustainability & Responsibility</h4>
              <p className="text-gray-400 text-sm">Responsible procurement and production practices that minimize waste and support long-term industrial resilience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: WHY CHOOSE METALLO
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className={CONTAINER}>
          <div className="mb-16">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Why Industry Leaders Choose Metallo</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-6">
              Engineering Precision. Scalable Manufacturing. Reliable Delivery.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Metallo combines engineering expertise, distributed manufacturing capacity, and strict quality control systems to deliver reliable industrial metal solutions at scale. Our platform-driven approach enables faster production, consistent material quality, and dependable supply chains for complex infrastructure and industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-50 p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">account_tree</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Distributed Manufacturing Platform</h3>
              <p className="text-sm text-gray-600">
                Our network of specialized manufacturing partners allows us to scale production capacity quickly while maintaining strict engineering standards.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">rule</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Centralized Procurement & Standardization</h3>
              <p className="text-sm text-gray-600">
                Centralized raw material sourcing and standardized operating procedures ensure consistent fabrication quality, dimensional accuracy, and material integrity across our manufacturing ecosystem.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">science</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Advanced Testing & Quality Assurance</h3>
              <p className="text-sm text-gray-600">
                Our rigorous 3-Layer Quality Assurance Process includes dimensional inspection, material certification verification, and advanced laboratory testing using hydrostatic, ultrasonic, eddy current, and PMI testing methods.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">workspace_premium</span>
              <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Certified Reliability</h3>
              <p className="text-sm text-gray-600">
                We collaborate with NABL-accredited laboratories and support third-party inspections from internationally recognized agencies to ensure compliance with global engineering standards.
              </p>
            </div>
          </div>

          <div className="text-left mt-12 bg-metallo-gold/10 inline-block px-8 py-4 border-l-4 border-metallo-gold">
            <p className="text-lg font-bold text-metallo-navy font-heading">
              Metallo delivers engineering-grade reliability across every stage of the industrial supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: INDUSTRIES WE SERVE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className={CONTAINER}>
          <div className="mb-10">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-4">
              Supporting Critical Infrastructure & Industrial Development
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Metallo's engineered metal solutions are designed to support mission-critical infrastructure, manufacturing, and energy projects across a wide range of industrial sectors. Our products are built to perform in demanding environments where durability, reliability, and engineering precision are essential.
            </p>
          </div>

          {/* Zetwerk-style compact image cards — single row, horizontally scrollable on mobile/tablet */}
          <div
            className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Infrastructure & Construction */}
            <Link
              to="/industries/infrastructure"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi"
                alt="Infrastructure & Construction"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Infrastructure & Construction</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>

            {/* Power & Transmission */}
            <Link
              to="/industries/power-transmission"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw"
                alt="Power & Transmission"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Power & Transmission</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>

            {/* Oil & Gas / Process Industries */}
            <Link
              to="/industries/oil-gas"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop"
                alt="Oil & Gas / Process Industries"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Oil & Gas / Process Industries</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>

            {/* Heavy Engineering */}
            <Link
              to="/industries/heavy-engineering"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61PXpZxOKywjlGmchQoyvj5kxgg74AzQNjsM6IlELg8WD9q08FA7iHgfgxPrbktiBFAYaAPpf4vj0SJSRdHT31rrDtKVgL7eI18czoXfNIzjCyUCgO9cDnjvEK4tI5nqXvzEzHpqdE0ljEyvtKhEa3a74QbVMgDkYuIRPaE-XbjlpGJ8mNwKNg8DayJN3fdXT9R-MQlt4xj5UGenHE1ZjK_nIm9ILPWm_f3pI6Wazz4P_5xt2LTjKqGly9KeXo5xQ91z7R087khNz"
                alt="Heavy Engineering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Heavy Engineering</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>

            {/* Railways & Defence */}
            <Link
              to="/industries/railways-defence"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU"
                alt="Railways & Defence"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Railways & Defence</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>

            {/* Smart Cities & Urban Development */}
            <Link
              to="/industries/smart-cities"
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK"
                alt="Smart Cities & Urban Development"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">Smart Cities & Urban Development</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: LEADERSHIP — Directors
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className={CONTAINER}>
          <div className="mb-16">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-4">Led by Industry Experts</h2>
            <p className="text-gray-600 text-lg mb-4">
              Metallo is guided by leaders with extensive experience across heavy infrastructure, energy systems, and industrial manufacturing. Having worked directly within high-stakes industries where reliability and precision are critical, our directors built Metallo to solve real supply chain challenges faced by engineers, contractors, and infrastructure developers.
            </p>
            <p className="text-gray-600 text-lg">
              Their combined expertise in engineering, project execution, and industrial procurement shapes Metallo's mission to deliver dependable metal solutions for global infrastructure and manufacturing projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

            {/* Leader 1 — Vinay */}
            <div className="group relative bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gray-200 min-h-[250px] relative overflow-hidden">
                <img src="/.jpg" alt="Vinay" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                  <h3 className="text-2xl font-bold font-heading text-white">Vinay</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/80">Director</p>
                </div>
              </div>
              <div className="p-8 w-full md:w-2/3">
                <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">format_quote</span>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  With over 15 years of experience in heavy infrastructure and oil & gas projects, Vinay Kumar brings deep strategic insight into large-scale industrial operations. His experience across critical infrastructure sectors has shaped Metallo's vision of building a resilient and dependable industrial supply network capable of supporting high-value engineering projects.
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Understanding that even a minor delay in sectors like energy and infrastructure can result in significant financial impact, he focuses on strengthening Metallo's supply chain reliability and production scalability.
                </p>
                <p className="text-metallo-navy font-bold font-heading text-lg">
                  "We don't just manufacture products; we engineer certainty for critical infrastructure."
                </p>
              </div>
            </div>

            {/* Leader 2 — Anand Kumar */}
            <div className="group relative bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gray-200 min-h-[250px] relative overflow-hidden">
                <img src="/.jpg" alt="Anand Kumar" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                  <h3 className="text-2xl font-bold font-heading text-white">Anand Kumar</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/80">Director</p>
                </div>
              </div>
              <div className="p-8 w-full md:w-2/3">
                <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">format_quote</span>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Anand Kumar brings more than 15 years of technical and operational experience across HVAC and industrial manufacturing sectors. His deep understanding of material performance, engineering standards, and industrial fabrication processes drives Metallo's commitment to precision and product reliability.
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  With expertise spanning material sciences and industrial engineering, he plays a key role in maintaining the technical integrity and quality assurance standards that define Metallo's manufacturing ecosystem.
                </p>
                <p className="text-metallo-navy font-bold font-heading text-lg">
                  "In infrastructure and energy projects, safety and reliability are non-negotiable. That is the standard we deliver every day."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
