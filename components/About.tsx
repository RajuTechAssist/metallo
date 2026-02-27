import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-6 leading-tight">
              The Distributed Manufacturing OS for <span className="text-metallo-gold-hover">Industrial India</span>.
            </h2>
            <h3 className="text-xl font-medium text-gray-500 mb-8 uppercase tracking-wide font-sans">
              We don't just build factories. We aggregate, standardize, and scale the nation's idle industrial capacity.
            </h3>
            <div className="prose prose-lg text-gray-600 mb-10 space-y-4">
              <p>
                The Indian manufacturing sector is massive but highly fragmented. Metallo acts as the central orchestrator—aggregating idle capacity across MSME facilities, from stainless steel pipe mills to cable tray fabricators. We upgrade them to global standards and integrate them into one seamless production ecosystem.
              </p>
              <p>
                By operating an asset-light model, we offer EPC contractors infinite scaling flexibility. Every product—whether a structural steel beam or an industrial assembly—undergoes rigorous testing at our Central QC Hub, ensuring Tier-1 quality without the heavy CAPEX overhead.
              </p>
              <p>
                We don't just supply products; we engineer certainty. Whether you are building a mega-factory, a smart city, or a port, Metallo provides the standardized quality and manufacturing velocity you need to deliver on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {/* Pillar 1 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">account_tree</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Asset-Light Scaling</h4>
                <p className="text-sm text-gray-600">Infinite manufacturing capacity across our audited MSME network.</p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">fact_check</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Central QC Hub</h4>
                <p className="text-sm text-gray-600">100% batch-tested with strict SOPs & Material Testing Certificates (MTC).</p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-gold transition-colors">inventory_2</span>
                <h4 className="text-lg font-bold font-heading text-metallo-navy">Unified Procurement</h4>
                <p className="text-sm text-gray-600">One integrated platform for your entire infrastructure Bill of Materials (BOM).</p>
              </div>
            </div>
          </div>
          {/* Image Card */}
          <div className="order-1 flex flex-col gap-6">
            <div className="group relative h-full min-h-[350px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
              <img
                alt="Industrial Construction Site"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-metallo-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="text-5xl font-bold font-heading text-metallo-gold">10+</div>
                  <div className="text-sm uppercase tracking-widest border-l-2 border-metallo-gold pl-4 font-bold">Facilities across<br />India & The Globe</div>
                </div>
              </div>
            </div>
            <div className="group relative h-full min-h-[350px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
              <img
                alt="Industrial Construction Site"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-metallo-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="text-5xl font-bold font-heading text-metallo-gold">10+</div>
                  <div className="text-sm uppercase tracking-widest border-l-2 border-metallo-gold pl-4 font-bold">Facilities across<br />India & The Globe</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;