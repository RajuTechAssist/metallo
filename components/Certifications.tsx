import React, { useRef, useState, useEffect } from 'react';

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Text Data Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h4 className="text-metallo-navy/60 font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading">
            Benchmarks of Excellence
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif text-metallo-navy mb-6">
            Quality is not just a promise; it is a certified standard.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Metallo, compliance is non-negotiable. Our manufacturing facilities are ISO certified, and our products undergo rigorous testing to meet Bureau of Indian Standards (BIS) and international safety norms.
          </p>
        </div>

        {/* Logos Row – scroll on mobile, centered on desktop */}
        <div className="relative">

          {/* Left fade hint - Visible on mobile & tablet */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 transition-opacity duration-300 lg:hidden"
            style={{
              opacity: canScrollLeft ? 1 : 0,
              background: 'linear-gradient(to right, rgb(249 250 251), transparent)',
            }}
          />

          {/* Right fade hint + chevron - Visible on mobile & tablet */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 flex items-center justify-end pr-1 transition-opacity duration-300 lg:hidden"
            style={{ opacity: canScrollRight ? 1 : 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to left, rgb(249 250 251), transparent)' }}
            />
            <span className="material-symbols-outlined relative text-metallo-navy/40 text-2xl animate-pulse">
              chevron_right
            </span>
          </div>

          {/* Scrollable container – hidden scrollbar */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="overflow-x-auto -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Hide webkit scrollbar */}
            <style>{`
              .cert-scroll::-webkit-scrollbar { display: none; }
            `}</style>
            <div className="cert-scroll flex lg:justify-center items-center gap-12 lg:gap-16 min-w-max"
              ref={(el) => {
                // Forward scroll hiding to parent
                if (el?.parentElement) el.parentElement.classList.add('cert-scroll');
              }}
            >
            
              {/* ISO */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/iso.svg" alt="ISO 9001:2015" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">ISO 9001:2015</span>
              </div>

              {/* Indian Railways */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/india-railways.svg" alt="Indian Railways" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">Indian Railways</span>
              </div>

              {/* NPC */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/npc.svg" alt="NPC" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">NPC</span>
              </div>

              {/* NTPC */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/ntpc-1.svg" alt="NTPC" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">NTPC</span>
              </div>

              {/* EIL */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/eil.svg" alt="EIL" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">EIL</span>
              </div>

              {/* ASME */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1 transition-all duration-300 shrink-0">
                  <img src="/asme-logo-two.svg" alt="ASME" className="h-20 w-auto object-contain" />
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">ASME</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;