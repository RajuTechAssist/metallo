import React from 'react';
import { Link } from 'react-router-dom';

interface Industry {
  title: string;
  image: string;
  slug: string;
}

const industriesData: Industry[] = [
  {
    title: "Infrastructure & Construction",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvJM6qnxAt2dKFffbMpPfbpiY7ubZxxyjoHeXfXW7vlMYogDc2DKEEadk48s0aOS_IM-SABTEs0XmqHERJ1xqWE8k5dMFxC3NV23s1JmAY_2_qIJChkoM90FRnk8QylFpy6ChFKEYc0YQpOzXBUkQxbyVBuvC-rSk3rJ78SGFhDBOZR91prnaE0MisDsgU4c_mYC2obktRkY_6vsuUKjFlT_eJamzYm9uHYOOqChpDTs2maDJ7qdBtHw_T3rIn3pWhF4nh5zChyHpi",
    slug: "/industries/infrastructure",
  },
  {
    title: "Power & Transmission",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDZjVbwQlrHRd6tRUogRI_cXM6vV-f54c71VgTeceUIEGedcTl_LKDQV4qw1XdT_Fxvt4M_BE3bKJ53rI3IT3bYIZvEWUdLBMuiGCmNWg5JRcHUSrwUPwx4yPdCESaoIM-Pq05ife-3USdw9u4cZVo_Y2hN00koG3kCxK7jMvgzYjstw7QcHz_Ygzdz5nM46pQlvW6L-PzIxgsfTwf9DkQ3C98THO019yg5QRv9VVh433yNPzhRril8pV0_BG9dlP4bgvfYyGYXSYw",
    slug: "/industries/power-transmission",
  },
  {
    title: "Oil & Gas / Process Industries",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    slug: "/industries/oil-gas",
  },
  {
    title: "Heavy Engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC61PXpZxOKywjlGmchQoyvj5kxgg74AzQNjsM6IlELg8WD9q08FA7iHgfgxPrbktiBFAYaAPpf4vj0SJSRdHT31rrDtKVgL7eI18czoXfNIzjCyUCgO9cDnjvEK4tI5nqXvzEzHpqdE0ljEyvtKhEa3a74QbVMgDkYuIRPaE-XbjlpGJ8mNwKNg8DayJN3fdXT9R-MQlt4xj5UGenHE1ZjK_nIm9ILPWm_f3pI6Wazz4P_5xt2LTjKqGly9KeXo5xQ91z7R087khNz",
    slug: "/industries/heavy-engineering",
  },
  {
    title: "Railways & Defence",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Bz4tUWnHbL1aZBaCZsnkfKCLZdFuqi4f8jGamOr53cDK4Qc2_T5RGGPBpJamlx4NFiBwQVVCuLrYT4XsLB8LJmBo0peB4I0P0pkFe3r9RNiq8to5H4wMzD-jvpey1495Rk7q6tivph2aPiZre2fF6ytxuWSwy8f6n15hAbaGXke_mmjPx6YaM1ORY8hRQvnYb7ey-z9RyEtL-9qO9p2P4r8GzP-bhloXjkYnK8gINFDmRZ9j2kiPcawcl_nyDVYgJPjjk_wpzChU",
    slug: "/industries/railways-defence",
  },
  {
    title: "Smart Cities & Urban Development",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKs8siiRfxuZGeiEFtUE_A5slo4Zb--Ajw56FSrLeWu0wPS0jO7N_lxWhfBV3l_TolzB4tdvCqejo8lIP_8e1ftTiEoVfcipEdiStFi3PV2oxt5LqkcCQBsLGA6R7TjsBdyDnBEQGYQFctOBCWnHkVh_1h0GsK9sYpDT4jGUFUbgPaUtNsQPsNQ9RMDMg4OJk6nUH436NqG2SkVUFWy74kmIQ8gTKezMor_vxRLgXBsu-DbzVwm6Saf4uRNOhtyNSpPIlhNsxcd1UK",
    slug: "/industries/smart-cities",
  }
];

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-metallo-navy mb-3">
            Industries we serve
          </h2>
          <div className="w-20 h-1 bg-metallo-gold"></div>
        </div>

        {/* Compact Zetwerk-style image cards — single row, horizontally scrollable */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industriesData.map((industry, index) => (
            <Link
              to={industry.slug}
              key={index}
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[180px] md:h-[240px] lg:w-auto lg:h-[260px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight">{industry.title}</h3>
                <span className="inline-flex items-center mt-1.5 text-metallo-gold text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;