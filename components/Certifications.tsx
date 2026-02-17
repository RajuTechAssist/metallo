import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Text Data Section - Restored */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h4 className="text-metallo-navy/60 font-bold uppercase tracking-[0.2em] mb-3 text-sm font-oswald">
            Benchmarks of Excellence
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif text-metallo-navy mb-6">
            Quality is not just a promise; it is a certified standard.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Metallo, compliance is non-negotiable. Our manufacturing facilities are ISO certified, and our products undergo rigorous testing to meet Bureau of Indian Standards (BIS) and international safety norms.
          </p>
        </div>

        {/* Logos Row - Horizontal Layout */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            
            {/* ISO */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/iso.svg" alt="ISO 9001:2015" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">ISO 9001:2015</span>
            </div>

            {/* Indian Railways */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/india-railways.svg" alt="Indian Railways" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Indian Railways</span>
            </div>

            {/* NPC */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/npc.svg" alt="NPC" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">NPC</span>
            </div>

            {/* NTPC */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/ntpc-1.svg" alt="NTPC" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">NTPC</span>
            </div>

            {/* EIL */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/eil.svg" alt="EIL" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">EIL</span>
            </div>

            {/* ASME */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <img src="/asme-logo-two.svg" alt="ASME" className="h-16 md:h-20 w-auto object-contain" />
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">ASME</span>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;