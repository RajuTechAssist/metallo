import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-metallo-navy mb-6 leading-tight">
              The Operating System for <span className="text-metallo-lime-hover">Industrial India</span>.
            </h2>
            <h3 className="text-xl font-medium text-gray-500 mb-8 uppercase tracking-wide font-sans">
              Fragmented supply chains slow you down. Metallo consolidates the critical manufacturing backbone into a single, integrated platform.
            </h3>
            <div className="prose prose-lg text-gray-600 mb-10 space-y-4">
              <p>
                Metallo is not just a manufacturer; we are an integrated ecosystem. We bridge the gap between raw material supply and finished project execution. By unifying six critical verticals - from Structural Steel and High-Voltage Cabling to Precision Tools and Welding Consumables - we eliminate the inefficiencies of multi-vendor procurement.
              </p>
              <p>
                We don't just supply products; we engineer certainty. Whether you are building a mega-factory, a smart city, or a port, Metallo provides the standardized quality and manufacturing velocity you need to deliver on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-lime transition-colors">hub</span>
                <h4 className="text-lg font-bold font-oswald text-metallo-navy">Single-Source Efficiency</h4>
                <p className="text-sm text-gray-600">One partner. Reduce vendor friction by 100%.</p>
              </div>
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-lime transition-colors">verified_user</span>
                <h4 className="text-lg font-bold font-oswald text-metallo-navy">Standardized Quality</h4>
                <p className="text-sm text-gray-600">ISO-compliant manufacturing across all verticals.</p>
              </div>
              <div className="flex flex-col gap-2 group cursor-default">
                <span className="material-symbols-outlined text-4xl text-metallo-navy group-hover:text-metallo-lime transition-colors">engineering</span>
                <h4 className="text-lg font-bold font-oswald text-metallo-navy">Lifecycle Partner</h4>
                <p className="text-sm text-gray-600">From foundation to finishing and operation.</p>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="order-1 lg:order-2 relative h-full min-h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl group">
            <img 
              alt="Industrial Construction Site" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-metallo-navy/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="text-5xl font-bold font-oswald text-metallo-lime">10+</div>
                <div className="text-sm uppercase tracking-widest border-l-2 border-metallo-lime pl-4 font-bold">Facilities across<br />India & The Globe</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;