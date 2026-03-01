import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Industry {
  title: string;
  context: string;
  supply: string;
  image: string;
  slug: string;
}

const industriesData: Industry[] = [
  {
    title: "Infrastructure & Construction",
    context: "Highways, Bridges, Metros.",
    supply: "TMT Bars, Structural Steel, Welding Consumables.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi",
    slug: "/industries/infrastructure",
  },
  {
    title: "Power & Transmission",
    context: "Substations, Power Grids, Solar Parks.",
    supply: "HT/LT Cables, Transformers (Tech Products), Conductors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw",
    slug: "/industries/power-transmission",
  },
  {
    title: "Oil & Gas / Process Industries",
    context: "Refineries, Pipelines, Chemical Plants.",
    supply: "SS Pipes & Fittings, Modular Skids, Valves, Industrial Fabrications.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    slug: "/industries/oil-gas",
  },
  {
    title: "Automotive & Mobility",
    context: "EV Plants, Auto-ancillaries.",
    supply: "Die Casting Components, Precision Tools, Fasteners.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_",
    slug: "/industries/automotive",
  },
  {
    title: "Heavy Engineering",
    context: "Steel Plants, Refineries, Cement Factories.",
    supply: "Welding Electrodes, Industrial Safety Gear, Grinding Wheels.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC61PXpZxOKywjlGmchQoyvj5kxgg74AzQNjsM6IlELg8WD9q08FA7iHgfgxPrbktiBFAYaAPpf4vj0SJSRdHT31rrDtKVgL7eI18czoXfNIzjCyUCgO9cDnjvEK4tI5nqXvzEzHpqdE0ljEyvtKhEa3a74QbVMgDkYuIRPaE-XbjlpGJ8mNwKNg8DayJN3fdXT9R-MQlt4xj5UGenHE1ZjK_nIm9ILPWm_f3pI6Wazz4P_5xt2LTjKqGly9KeXo5xQ91z7R087khNz",
    slug: "/industries/heavy-engineering",
  },
  {
    title: "Railways & Defence",
    context: "Tracks, Wagons, Ordnance Factories.",
    supply: "Signaling Cables, Special Alloy Steel, Maintenance Tools.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU",
    slug: "/industries/railways-defence",
  },
  {
    title: "Smart Cities & Urban Development",
    context: "Commercial Complexes, IT Parks.",
    supply: "Control & Instrumentation Cables, Plumbing/Piping, Fire Safety Systems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK",
    slug: "/industries/smart-cities",
  }
];

const Industries: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(1);

  const updateDots = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth <= clientWidth) {
      setTotalDots(1);
      setActiveIndex(0);
      return;
    }

    // Count visible cards to determine number of "pages"
    const cards = container.querySelectorAll('a');
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 16; // gap
    const visibleCards = Math.round(clientWidth / cardWidth);
    const pages = Math.ceil(cards.length / visibleCards);
    setTotalDots(pages);

    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / maxScroll;
    const idx = Math.round(progress * (pages - 1));
    setActiveIndex(Math.min(idx, pages - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateDots();
    container.addEventListener('scroll', updateDots, { passive: true });
    window.addEventListener('resize', updateDots);
    return () => {
      container.removeEventListener('scroll', updateDots);
      window.removeEventListener('resize', updateDots);
    };
  }, [updateDots]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('a')?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const goToDot = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = totalDots <= 1 ? 0 : (index / (totalDots - 1)) * maxScroll;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-metallo-navy mb-4">
            Industries we serve
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* Carousel wrapper with side arrows */}
        <div className="relative group/carousel">

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 text-metallo-navy xl:hidden"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 text-metallo-navy xl:hidden"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-4 px-4 xl:grid xl:grid-cols-12 xl:gap-4 xl:pb-0 xl:mx-0 xl:px-0 xl:overflow-visible no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industriesData.map((industry, index) => (
              <Link
                to={industry.slug}
                key={index}
                className={`group relative h-[480px] min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-[30vw] xl:min-w-0 snap-center overflow-hidden cursor-pointer bg-gray-900 rounded-sm block ${index < 4 ? 'xl:col-span-3' : 'xl:col-span-4'}`}
              >
                {/* Background Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

                {/* Title & Arrow - Always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-10">
                  <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold font-heading text-white leading-tight max-w-[80%] drop-shadow-md">
                      {industry.title}
                    </h3>

                    {/* Arrow Button */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-metallo-gold flex items-center justify-center transform transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                      <span className="material-symbols-outlined text-metallo-navy text-xl font-bold">navigate_next</span>
                    </div>
                  </div>
                </div>

                {/* Hidden Meta Data - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 bg-gradient-to-t from-black/95 to-black/80">
                  {/* Title & Arrow (duplicated for hover state) */}
                  <div className="flex justify-between items-end mb-4 pt-6">
                    <h3 className="text-xl font-bold font-heading text-white leading-tight max-w-[80%] drop-shadow-md">
                      {industry.title}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center scale-110">
                      <span className="material-symbols-outlined text-metallo-navy text-xl font-bold">navigate_next</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-white/20 pt-4">
                    <div>
                      <p className="text-[10px] font-bold text-metallo-gold uppercase tracking-widest mb-1">Context</p>
                      <p className="text-gray-200 text-sm font-medium leading-snug">{industry.context}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-metallo-gold uppercase tracking-widest mb-1">Metallo Supply</p>
                      <p className="text-gray-200 text-sm font-medium leading-snug">{industry.supply}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Dots — visible below xl */}
        <div className="flex justify-center gap-2 mt-6 xl:hidden">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === activeIndex
                  ? 'w-8 h-2.5 bg-metallo-navy'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;