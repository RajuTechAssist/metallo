import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Vertical {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  points: string[];
  link: string;
}

const verticalsData: Vertical[] = [
  {
    id: 'steel',
    title: 'Metallo Steel',
    subtitle: 'The Structural Foundation',
    description: 'We aggregate capacity across top-tier steel mills to deliver ASTM/IS:2062 compliant structural steel and custom spools. Centralized bulk procurement ensures grade consistency at infinite scale.',
    icon: 'foundation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZmT_s2B9dm9-HBV823d6vMwXy9qsBMMQ3nGKJIKyS5fwDMVAFQfixx0y-sygCvmnG896hpbtiT4P0lI2r8wkCf2rvSOk6ngn7p0c0saTngyDwhMAJzTZ-oEfN69XK8hppDwDyF7vllPZmXYfvr1eo7o9qkdYxatryE1B-qzerwAsDc1GC0HLRmt55olsDJKVaIX-cEz-tNZCRpo8bR3tbk6Pq2kql-1SxTkbOZSj2TmdmFqPcWsv5yo3-v2lBhvJGy391-zatHuy8',
    points: ['IS:2062 & ASTM Compliant', 'Custom Fabricated Spools', '100% PMI Batch Tested'],
    link: '/products/steel'
  },
  {
    id: 'wire',
    title: 'Wire & Cable',
    subtitle: 'Powering the National Grid.',
    description: "A unified manufacturing ecosystem for high-voltage transmission up to 33kV. 100% batch-tested at our Central QC Hub for zero downtime.",
    icon: 'electrical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw',
    points: ['LT & HT Power Cables', 'Specialty Industrial Cables', 'Control & Instrumentation Cables'],
    link: '/products/wire-cables'
  },
  {
    id: 'cable-tray',
    title: 'Cable Trays',
    subtitle: 'Heavy-Duty Cable Management.',
    description: 'Aggregating top-tier sheet metal fabricators to deliver perforated, ladder, and wire-mesh trays. Standardized galvanization for absolute structural integrity. ',
    icon: 'account_tree',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop',
    points: ['Ladder & Perforated Trays', 'GI / SS / Aluminium Options', 'Custom Sizes & Coatings'],
    link: '/products/cable-tray'
  },
  {
    id: 'welding',
    title: 'Welding Consumables',
    subtitle: 'Mission-Critical Joints',
    description: 'We standardize and supply AWS-certified welding alloys across our network, deploying strict Standard Operating Procedures (SOPs) to guarantee flawless high-stress industrial joints.',
    icon: 'whatshot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKZDAZ60J7WpIg7ouo1Jps0Oz0Z5zjXbRSoOqY_dxldAvPOLnuIUxrDX5Fvtqqniw2pTiHM96nzYOy-r3pOyo1SG_bOt73KZFtrtYOt9Slreqz4wWZwqgFRd9pyq0dPWIb7fWhnh6N7vCiGR1GSv7tRoRojZXrnDF3BfAKEhiZsLELM-MBsNpyeU1nETZOpedd5Wabsgw3aPWytCDpfy0mpocjz0e2gtvGrGOWLB-oMLv7ADKp5sobK1tYD-cMdvEENRr22ZwSSJ-',
    points: ['AWS & ASME Certified', 'Standardized MSME SOPs', 'Flux-Cored & Solid Wires'],
    link: '/products/welding'
  },
  {
    id: 'tools',
    title: 'Industrial Tools',
    subtitle: 'Heavy-Duty Execution',
    description: 'Sourced and certified through our globally compliant vendor network, our heavy-duty industrial tools are engineered for uncompromising safety and continuous operational scale.',
    icon: 'construction',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU',
    points: ['Industrial-Grade Motors', 'Ergonomic Safety Standards', 'Global Network Sourcing'],
    link: '/products/tools'
  },
  {
    id: 'die-casting',
    title: 'Precision Die Casting',
    subtitle: 'Micro-Tolerance Engineering',
    description: 'Seamlessly scaling from prototype to mass production, our distributed agile network delivers micro-tolerance aluminum components for the automotive and aerospace sectors.',
    icon: 'precision_manufacturing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_',
    points: ['Automotive & Aerospace', 'CNC Machining Integrated', 'Rapid Capacity Scaling'],
    link: '/products/die-casting'
  },
  {
    id: 'tech',
    title: 'Tech Products',
    subtitle: 'The OS for Infrastructure',
    description: 'Beyond physical products, we deploy an end-to-end digital tracking system. Major EPC contractors get real-time supply chain visibility and centralized Bill of Materials (BOM) management.',
    icon: 'memory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK',
    points: ['Real-Time Production Tracking', 'Centralized BOM Procurement', 'Digital QC Traceability'],
    link: '/products/tech-products'
  }
];

/* ─── Card component (shared between grid and scroll views) ─── */
const VerticalCard: React.FC<{ item: Vertical; className?: string }> = ({ item, className = '' }) => (
  <div
    className={`group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}
  >
    {/* Image Header */}
    <div className="h-48 overflow-hidden relative shrink-0">
      <img
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={item.image}
      />
      <div className="absolute top-4 right-4 bg-metallo-navy text-white p-2 rounded-full shadow-lg z-10">
        <span className="material-symbols-outlined">{item.icon}</span>
      </div>
      <div className="absolute inset-0 bg-metallo-navy/0 group-hover:bg-metallo-navy/10 transition-colors duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold font-heading text-metallo-navy mb-2 group-hover:text-metallo-gold-hover transition-colors">{item.title}</h3>
      <p className="text-xs font-bold text-metallo-navy/60 uppercase tracking-widest mb-4 font-heading">{item.subtitle}</p>
      <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed border-b border-gray-100 pb-6">
        {item.description}
      </p>

      <ul className="text-sm text-gray-500 space-y-2 mb-6">
        {item.points.map((point, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-metallo-gold rounded-full mr-2"></span>
            {point}
          </li>
        ))}
      </ul>

      <Link
        to={item.link}
        className="inline-flex items-center text-metallo-navy font-bold uppercase text-sm font-heading hover:text-metallo-gold-hover transition-colors mt-auto group/link"
      >
        {item.id === 'die-casting' ? 'Explore Capabilities' : item.id === 'tech' ? 'Discover Tech' : `View ${item.title.split(' ')[0]} Catalog`}
        <span className="material-symbols-outlined text-sm ml-1 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
      </Link>
    </div>
  </div>
);

const Verticals: React.FC = () => {
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

    const cards = container.querySelectorAll('[data-card]');
    if (cards.length === 0) return;
    const cardEl = cards[0] as HTMLElement;
    const cardWidth = cardEl.offsetWidth + 16;
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
    const card = scrollRef.current.querySelector('[data-card]') as HTMLElement;
    const cardWidth = card?.offsetWidth || 400;
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
    <section className="py-24 bg-gray-50" id="verticals">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">Our Product Spectrum</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-4">Complete Industrial Solutions</h2>
          <p className="text-gray-600 text-lg max-w-3xl">From the foundation to the finishing touches, we manufacture the critical components that power your projects.</p>
        </div>

        {/* ── Desktop xl+: Grid layout (same as Industries: 4+3) ── */}
        <div className="hidden xl:grid xl:grid-cols-12 xl:gap-4">
          {verticalsData.map((item, index) => (
            <VerticalCard
              key={item.id}
              item={item}
              className={index < 4 ? 'xl:col-span-3' : 'xl:col-span-4'}
            />
          ))}
        </div>

        {/* ── Mobile / Tablet: Horizontal scroll with side arrows ── */}
        <div className="xl:hidden relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 text-metallo-navy"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-metallo-navy hover:text-white hover:border-metallo-navy transition-all duration-300 text-metallo-navy"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 pb-2 -mx-4 px-4 no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {verticalsData.map((item) => (
              <div key={item.id} data-card className="min-w-[85vw] max-w-[90vw] sm:min-w-[60vw] sm:max-w-[65vw] md:min-w-[45vw] md:max-w-[48vw] lg:min-w-[30vw] lg:max-w-[33vw] snap-center shrink-0">
                <VerticalCard item={item} className="h-full" />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
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
      </div>
    </section>
  );
};

export default Verticals;