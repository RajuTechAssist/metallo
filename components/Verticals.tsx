import React from 'react';
import { Link } from 'react-router-dom';

interface Vertical {
  id: string;
  title: string;
  subtitle: string;
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
    icon: 'foundation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZmT_s2B9dm9-HBV823d6vMwXy9qsBMMQ3nGKJIKyS5fwDMVAFQfixx0y-sygCvmnG896hpbtiT4P0lI2r8wkCf2rvSOk6ngn7p0c0saTngyDwhMAJzTZ-oEfN69XK8hppDwDyF7vllPZmXYfvr1eo7o9qkdYxatryE1B-qzerwAsDc1GC0HLRmt55olsDJKVaIX-cEz-tNZCRpo8bR3tbk6Pq2kql-1SxTkbOZSj2TmdmFqPcWsv5yo3-v2lBhvJGy391-zatHuy8',
    points: ['IS:2062 & ASTM Compliant', 'Custom Fabricated Spools', '100% PMI Batch Tested'],
    link: '/products/steel'
  },
  {
    id: 'wire',
    title: 'Wire & Cable',
    subtitle: 'Powering the Grid',
    icon: 'electrical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw',
    points: ['LT & HT Power Cables', 'Specialty Industrial Cables', 'Control & Instrumentation'],
    link: '/products/wire-cables'
  },
  {
    id: 'cable-tray',
    title: 'Cable Trays',
    subtitle: 'Cable Management',
    icon: 'account_tree',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop',
    points: ['Ladder & Perforated Trays', 'GI / SS / Aluminium', 'Custom Sizes & Coatings'],
    link: '/products/cable-tray'
  },
  {
    id: 'welding',
    title: 'Welding Consumables',
    subtitle: 'Critical Joints',
    icon: 'whatshot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKZDAZ60J7WpIg7ouo1Jps0Oz0Z5zjXbRSoOqY_dxldAvPOLnuIUxrDX5Fvtqqniw2pTiHM96nzYOy-r3pOyo1SG_bOt73KZFtrtYOt9Slreqz4wWZwqgFRd9pyq0dPWIb7fWhnh6N7vCiGR1GSv7tRoRojZXrnDF3BfAKEhiZsLELM-MBsNpyeU1nETZOpedd5Wabsgw3aPWytCDpfy0mpocjz0e2gtvGrGOWLB-oMLv7ADKp5sobK1tYD-cMdvEENRr22ZwSSJ-',
    points: ['AWS & ASME Certified', 'Standardized SOPs', 'Flux-Cored & Solid Wires'],
    link: '/products/welding'
  },
  {
    id: 'tools',
    title: 'Industrial Tools',
    subtitle: 'Heavy-Duty Execution',
    icon: 'construction',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU',
    points: ['Industrial Motors', 'Safety Standards', 'Global Sourcing'],
    link: '/products/tools'
  },
  {
    id: 'die-casting',
    title: 'Precision Die Casting',
    subtitle: 'Micro-Tolerance',
    icon: 'precision_manufacturing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_',
    points: ['Automotive & Aerospace', 'CNC Integrated', 'Rapid Scaling'],
    link: '/products/die-casting'
  },
  {
    id: 'tech',
    title: 'Tech Products',
    subtitle: 'Infrastructure OS',
    icon: 'memory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK',
    points: ['Production Tracking', 'BOM Procurement', 'Digital QC Traceability'],
    link: '/products/tech-products'
  }
];

const Verticals: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 w-full" id="verticals">
      <div className="container">
        <div className="mb-10">
          <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">Our Product Spectrum</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">Complete Industrial Solutions</h2>
          <p className="text-gray-600 text-base max-w-3xl">From the foundation to the finishing touches, we manufacture the critical components that power your projects.</p>
        </div>

        {/* Compact Zetwerk-style image cards — single row, horizontally scrollable */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar xl:grid xl:grid-cols-7 xl:gap-4 xl:overflow-visible xl:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {verticalsData.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="group relative flex-shrink-0 w-[160px] h-[240px] md:w-[180px] md:h-[296px] xl:w-auto rounded-md overflow-hidden cursor-pointer block"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              {/* Icon badge */}
              <div className="absolute top-3 right-3 bg-metallo-navy/80 text-white p-1.5 rounded-full z-10">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight mb-0.5">{item.title}</h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-wider font-heading mb-2">{item.subtitle}</p>

                {/* Key points — compact list */}
                <ul className="space-y-0.5 mb-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-[10px] text-gray-200">
                      <span className="w-1 h-1 bg-metallo-gold rounded-full mr-1.5 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-metallo-gold text-xs font-bold font-heading">
                  Explore <span className="material-symbols-outlined text-sm ml-0.5">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;