'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPageContent() {
  return (
    <div className="mt-[92px] md:mt-[175px] w-full bg-white">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Metallo_office.png" 
            alt="Factory Floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-metallo-navy/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wide leading-tight">
            Engineering the <br/><span className="text-metallo-gold">Future of Industry.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-serif max-w-3xl mx-auto">
            We are not just manufacturers. We are the operating system for India&apos;s infrastructure growth.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE METALLO STORY */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-4 text-sm font-heading">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-metallo-navy mb-8 leading-none">
                Rewiring the <br/>Industrial Supply Chain.
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-sans">
                <p>
                  For decades, the industrial supply chain has been fragmented. A single infrastructure project required navigating a maze of vendors: one for structural steel, another for high-voltage cabling, a third for welding consumables, and a fourth for precision tools. This fragmentation led to delays, inconsistent quality, and cost overruns.
                </p>
                <p className="font-bold text-metallo-navy">
                  Metallo was born to fix this.
                </p>
                <p>
                  We envisioned a new standard: an <span className="text-metallo-navy font-semibold">Integrated Manufacturing Ecosystem</span> where the critical pillars of infrastructure—Steel, Power, and Joining—converge under one roof. By consolidating six specialized verticals into a single, tech-enabled platform, Metallo delivers what the industry has always needed: Velocity, Visibility, and Value.
                </p>
                <p>
                  Today, from our manufacturing hubs in Noida and Gurgaon, we empower EPC contractors and heavy industries to procure their entire Bill of Materials (BOM) from a single, trusted partner. We are building the backbone of the nation, one beam and one cable at a time.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
               <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-100 rounded-tr-[4rem] -z-10"></div>
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi" 
                 alt="Industrial Construction" 
                 className="rounded-lg shadow-2xl w-full h-full object-cover"
               />
               <div className="absolute -bottom-8 -left-8 bg-metallo-navy p-8 text-white max-w-xs shadow-xl hidden md:block">
                 <p className="font-heading text-2xl font-bold mb-2">Since 2008</p>
                 <p className="text-sm opacity-80">Solving complex procurement challenges for Global EPCs.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION */}
      <section className="bg-metallo-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            {/* Vision */}
            <div className="pr-0 md:pr-12">
              <h3 className="text-metallo-gold text-lg font-bold uppercase tracking-widest mb-6 font-heading flex items-center gap-2">
                <span className="material-symbols-outlined">visibility</span> The Vision
              </h3>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                &ldquo;To be the global benchmark for integrated industrial manufacturing, driving the transition from fragmented procurement to a seamless, unified ecosystem.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="pt-12 md:pt-0 pl-0 md:pl-12">
              <h3 className="text-metallo-gold text-lg font-bold uppercase tracking-widest mb-6 font-heading flex items-center gap-2">
                <span className="material-symbols-outlined">flag</span> The Mission
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                To empower the world&apos;s builders with precision-engineered materials. We commit to delivering:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">shield</span>
                  <div>
                    <strong className="text-white block font-heading uppercase">Uncompromising Safety</strong>
                    <span className="text-sm text-gray-400">In our cables, steel, and protective gear.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">precision_manufacturing</span>
                  <div>
                    <strong className="text-white block font-heading uppercase">Operational Excellence</strong>
                    <span className="text-sm text-gray-400">In our manufacturing processes and logistics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-metallo-gold mt-1">lightbulb</span>
                  <div>
                    <strong className="text-white block font-heading uppercase">Sustainable Innovation</strong>
                    <span className="text-sm text-gray-400">Through our advanced tech products and R&D.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: THE SYMBOL */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Globe "O" Symbol from Logo */}
            <div className="flex-shrink-0 relative group flex flex-col items-center">
               <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <img src="/logo-icon.svg" alt="Metallo Globe Symbol" className="w-full h-full object-contain animate-spin-slow" />
               </div>
               <div className="mt-4">
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Continuity in Motion</span>
               </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-metallo-navy mb-2">The Unbroken Loop of Progress.</h2>
              <h3 className="text-xl text-gray-500 mb-8 font-serif italic">Why our emblem is a circular railway track.</h3>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  At the heart of the Metallo identity lies a simple yet profound symbol: <strong className="text-metallo-navy">The Circular Railway Track.</strong>
                </p>
                <p>
                  In the world of heavy infrastructure, a track represents direction and strength. But a circular track represents something more—<strong className="text-metallo-navy">Continuity</strong>.
                </p>
                <p>
                  It signifies an unbreakable loop of value. Just as a train on a continuous track never stops moving, Metallo&apos;s commitment to your supply chain is non-stop. It represents:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <li className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">The Infinite Cycle</strong>
                    <span className="text-sm">From raw material extraction to finished construction, we are present at every stage.</span>
                  </li>
                  <li className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">Uninterrupted Momentum</strong>
                    <span className="text-sm">A supply chain that never breaks, ensuring your project timeline flows without a pause.</span>
                  </li>
                  <li className="bg-white p-4 rounded border border-gray-100 shadow-sm sm:col-span-2">
                    <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1">Boundless Connectivity</strong>
                    <span className="text-sm">Like the railway network that unites the nation, our platform connects disparate verticals—Steel, Power, and Tools—into one unified whole.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: INFRASTRUCTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-metallo-navy/60 font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading">Capacity &amp; Scale</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-6">
              Built for Scale. Engineered for Precision.
            </h2>
            <p className="text-gray-600 text-lg">
              Metallo&apos;s promise is backed by robust manufacturing capabilities. Our facilities are designed to handle high-volume production without compromising on the micro-tolerances required for precision engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="bg-gray-50 p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">factory</span>
                <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Strategic Locations</h3>
                <p className="text-sm text-gray-600">
                  State-of-the-art units in Noida (UP) and Gurgaon (Haryana), strategically located for rapid logistics across North and Central India.
                </p>
             </div>
             <div className="bg-gray-50 p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">precision_manufacturing</span>
                <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Advanced Machinery</h3>
                <p className="text-sm text-gray-600">
                   Equipped with automated Cable Extrusion Lines, CNC Machining Centers for Die Casting, and High-Capacity Furnaces for Alloy processing.
                </p>
             </div>
             <div className="bg-gray-50 p-8 border-b-4 border-metallo-gold hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">science</span>
                <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Quality Labs</h3>
                <p className="text-sm text-gray-600">
                   In-house testing facilities for Tensile Strength, High-Voltage Conductivity, and Spectro Analysis to ensure every batch meets IS/ISO standards.
                </p>
             </div>
             <div className="bg-gray-50 p-8 border-b-4 border-metallo-navy hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-5xl text-metallo-navy mb-6">inventory_2</span>
                <h3 className="text-xl font-bold font-heading text-metallo-navy uppercase mb-3">Inventory Power</h3>
                <p className="text-sm text-gray-600">
                   Massive warehousing capacity ensuring &ldquo;Just-in-Time&rdquo; delivery for critical structural steel and standard cable sizes.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE VALUES */}
      <section className="bg-metallo-navy py-20 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                 <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">gavel</span>
                 <h3 className="text-xl font-bold font-heading uppercase mb-2">Integrity First</h3>
                 <p className="text-gray-400 text-sm">We deliver what we promise. If we say &ldquo;Electrolytic Copper,&rdquo; it is 99.9% pure. No compromises.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                 <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">health_and_safety</span>
                 <h3 className="text-xl font-bold font-heading uppercase mb-2">Safety Obsession</h3>
                 <p className="text-gray-400 text-sm">In our business, safety is not a feature; it is a necessity. Our FRLS cables and Safety Tools protect lives.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                 <span className="material-symbols-outlined text-4xl text-metallo-gold mb-4">support_agent</span>
                 <h3 className="text-xl font-bold font-heading uppercase mb-2">Customer Centricity</h3>
                 <p className="text-gray-400 text-sm">We don&apos;t just sell products; we solve procurement headaches. Your deadline is our deadline.</p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 7: LEADERSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-4">Led by Industry Veterans.</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                With over 15 years of rigorous experience in high-stakes sectors like Oil &amp; Gas and Infrastructure, our directors built Metallo to solve the problems they faced in the field.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              {/* Leader 1 */}
              <div className="group relative bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
                 <div className="w-full md:w-1/3 bg-gray-200 min-h-[250px] relative overflow-hidden">
                    <img src="/AnandDirector.png" alt="Anand Kumar" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                       <h3 className="text-2xl font-bold font-heading text-white">Anand Kumar</h3>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/80">Director</p>
                    </div>
                 </div>
                 <div className="p-8 w-full md:w-2/3">
                    <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">format_quote</span>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      &ldquo;A seasoned industry leader with over 15 years of expertise in Heavy Infrastructure and Oil &amp; Gas projects. Mr. Kumar understands that in sectors like HVAC and energy, a delay of one day can cost millions. His strategic vision focuses on building a supply chain that is as resilient as the materials we manufacture.&rdquo;
                    </p>
                    <p className="text-metallo-navy font-bold font-heading text-lg">
                      &ldquo;We don&apos;t just manufacture products; we engineer certainty for critical infrastructure.&rdquo;
                    </p>
                 </div>
              </div>

              {/* Leader 2 */}
              <div className="group relative bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
                 <div className="w-full md:w-1/3 bg-gray-200 min-h-[250px] relative overflow-hidden">
                    <img src="/AnandDirector.png" alt="Mr. Vinay" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                       <h3 className="text-2xl font-bold font-heading text-white">Mr. Vinay</h3>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/80">Director</p>
                    </div>
                 </div>
                 <div className="p-8 w-full md:w-2/3">
                    <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">format_quote</span>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      &ldquo;Mr. Vinay brings a decade and a half of technical precision from the HVAC and Industrial sectors. His deep knowledge of material sciences—from the thermal properties of insulation to the tensile strength of steel—drives Metallo&apos;s operational excellence.&rdquo;
                    </p>
                    <p className="text-metallo-navy font-bold font-heading text-lg">
                      &ldquo;In Oil &amp; Gas and Infrastructure, safety is non-negotiable. That is the standard we deliver every day.&rdquo;
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA */}
      <section className="bg-metallo-gold py-16 md:py-24 text-metallo-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase mb-6">Experience the Power of Integration.</h2>
           <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">Stop managing 20 vendors. Start building with Metallo.</p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-metallo-navy text-white font-bold font-heading uppercase tracking-wider hover:bg-white hover:text-metallo-navy transition-all shadow-xl">
                 Download Corporate Profile
              </button>
              <Link href="/contact" className="px-8 py-4 bg-white text-metallo-navy border-2 border-metallo-navy font-bold font-heading uppercase tracking-wider hover:bg-metallo-navy hover:text-white transition-all shadow-xl">
                 Contact Our Team
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
