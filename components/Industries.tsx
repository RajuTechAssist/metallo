import React from 'react';

interface Industry {
  title: string;
  context: string;
  supply: string;
  image: string;
}

const industriesData: Industry[] = [
  {
    title: "Infrastructure & Construction",
    context: "Highways, Bridges, Metros.",
    supply: "TMT Bars, Structural Steel, Welding Consumables.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi"
  },
  {
    title: "Power & Transmission",
    context: "Substations, Power Grids, Solar Parks.",
    supply: "HT/LT Cables, Transformers (Tech Products), Conductors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw"
  },
  {
    title: "Automotive & Mobility",
    context: "EV Plants, Auto-ancillaries.",
    supply: "Die Casting Components, Precision Tools, Fasteners.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtBtj4Jf7u_tz6kK5SdwAJWl9rKn31fEry9IW7eoAA4QwOwaLOYxwhoBwCB-c7oEy5nAp9sFCJzggt6AsvurszNzL44FAv3HZirh-pQp8_FxH8ffcOt2nlyOnaMxeebdk_V2Tll0IFOHpAsZ4dAJKDTswFf5QfxtixK4o_SgyfsWTwEa-ti5tiVxBnUzXiaoyVTv47YLnnYjxjQtrmiwDHdeloHfhbDsqhqAUS7B9wgSpVg9jrn_NoAoIHaT9g6YKCc67jwJCU9jH_"
  },
  {
    title: "Heavy Engineering",
    context: "Steel Plants, Refineries, Cement Factories.",
    supply: "Welding Electrodes, Industrial Safety Gear, Grinding Wheels.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC61PXpZxOKywjlGmchQoyvj5kxgg74AzQNjsM6IlELg8WD9q08FA7iHgfgxPrbktiBFAYaAPpf4vj0SJSRdHT31rrDtKVgL7eI18czoXfNIzjCyUCgO9cDnjvEK4tI5nqXvzEzHpqdE0ljEyvtKhEa3a74QbVMgDkYuIRPaE-XbjlpGJ8mNwKNg8DayJN3fdXT9R-MQlt4xj5UGenHE1ZjK_nIm9ILPWm_f3pI6Wazz4P_5xt2LTjKqGly9KeXo5xQ91z7R087khNz"
  },
  {
    title: "Railways & Defence",
    context: "Tracks, Wagons, Ordnance Factories.",
    supply: "Signaling Cables, Special Alloy Steel, Maintenance Tools.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU"
  },
  {
    title: "Smart Cities & Urban Development",
    context: "Commercial Complexes, IT Parks.",
    supply: "Control & Instrumentation Cables, Plumbing/Piping, Fire Safety Systems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK"
  }
];

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-metallo-navy mb-4">
            Industries we serve
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* 
          Mobile: Flex row with overflow-x-auto for horizontal scroll.
          Desktop: Standard Grid layout.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:gap-4 md:pb-0 md:mx-0 md:px-0 md:overflow-visible no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {industriesData.map((industry, index) => (
            <div 
              key={index} 
              className="group relative h-[480px] min-w-[85vw] md:min-w-0 md:w-full snap-center overflow-hidden cursor-pointer bg-gray-900 rounded-sm"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;