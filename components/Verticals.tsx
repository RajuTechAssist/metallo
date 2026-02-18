import React from 'react';
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
    subtitle: 'The Foundation of Infrastructure',
    description: 'Precision-engineered steel solutions designed for maximum load-bearing capacity and corrosion resistance. We supply the raw backbone for heavy industries.',
    icon: 'foundation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZmT_s2B9dm9-HBV823d6vMwXy9qsBMMQ3nGKJIKyS5fwDMVAFQfixx0y-sygCvmnG896hpbtiT4P0lI2r8wkCf2rvSOk6ngn7p0c0saTngyDwhMAJzTZ-oEfN69XK8hppDwDyF7vllPZmXYfvr1eo7o9qkdYxatryE1B-qzerwAsDc1GC0HLRmt55olsDJKVaIX-cEz-tNZCRpo8bR3tbk6Pq2kql-1SxTkbOZSj2TmdmFqPcWsv5yo3-v2lBhvJGy391-zatHuy8',
    points: ['Stainless Steel (SS 304, 316)', 'Structural Steel', 'High-Tensile TMT Bars'],
    link: '/products/steel'
  },
  {
    id: 'wire',
    title: 'Wire & Cable',
    subtitle: 'Powering the Future',
    description: 'High-conductivity copper and aluminum cabling manufactured to IS standards. Ensuring safety and efficiency in high-voltage industrial environments.',
    icon: 'electrical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw',
    points: ['LT & HT Power Cables', 'Specialty Industrial Cables', 'Control & Instrumentation Cables'],
    link: '/products/wire-cables'
  },
  {
    id: 'welding',
    title: 'Welding (WB Alloys)',
    subtitle: 'The Strength of the Bond',
    description: 'Comprehensive range of welding electrodes and wires for joining diverse metallurgies. Engineered for low spatter, high penetration, and defect-free joints.',
    icon: 'whatshot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKZDAZ60J7WpIg7ouo1Jps0Oz0Z5zjXbRSoOqY_dxldAvPOLnuIUxrDX5Fvtqqniw2pTiHM96nzYOy-r3pOyo1SG_bOt73KZFtrtYOt9Slreqz4wWZwqgFRd9pyq0dPWIb7fWhnh6N7vCiGR1GSv7tRoRojZXrnDF3BfAKEhiZsLELM-MBsNpyeU1nETZOpedd5Wabsgw3aPWytCDpfy0mpocjz0e2gtvGrGOWLB-oMLv7ADKp5sobK1tYD-cMdvEENRr22ZwSSJ-',
    points: ['Stick Electrodes', 'MIG/MAG Solid Wires', 'Flux Cored Wires'],
    link: '/products/welding'
  },
  {
    id: 'tools',
    title: 'Power & Hand Tools',
    subtitle: 'Engineered for Performance',
    description: 'Professional-grade tools built to withstand the rigors of the job site. Delivering superior torque, ergonomics, and durability for continuous use.',
    icon: 'construction',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU',
    points: ['Angle Grinders', 'Demolition Hammers', 'Precision Hand Tools'],
    link: '/products/tools'
  },
  {
    id: 'die-casting',
    title: 'Die Casting',
    subtitle: 'Precision Molding Excellence',
    description: 'Custom aluminum and zinc die-casting services for automotive and manufacturing. We turn complex designs into high-strength, lightweight metal components.',
    icon: 'precision_manufacturing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_',
    points: ['High-Pressure Die Casting', 'Gravity Die Casting', 'Automotive Components'],
    link: '/products/die-casting'
  },
  {
    id: 'tech',
    title: 'Tech Products',
    subtitle: 'Innovation for Industry 4.0',
    description: 'Advanced technology solutions driving the next wave of automation. From fluid management to robotics, we equip your facility for the future.',
    icon: 'smart_toy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK',
    points: ['Industrial Robotics', 'Heavy Duty Pumps', 'Automation Systems'],
    link: '/products/tech-products'
  }
];

const Verticals: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="verticals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">Our Product Spectrum</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-4">Complete Industrial Solutions</h2>
          <p className="text-gray-600 text-lg">From the foundation to the finishing touches, we manufacture the critical components that power your projects.</p>
        </div>

        {/* 
          Mobile: Flex row with overflow-x-auto for horizontal scroll.
          Desktop: Standard Grid layout.
        */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible no-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {verticalsData.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[85vw] snap-center md:min-w-0 md:w-full group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;