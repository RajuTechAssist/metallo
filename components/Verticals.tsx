import React from 'react';
import { Link } from 'react-router-dom';
import { SHOWCASE_PRODUCT_VERTICALS } from '../utils/productVerticals';

const Verticals: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 w-full" id="verticals">
      <div className="container">
        <div className="mb-10">
          <span className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">
            Our Product Spectrum
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">
            Complete Industrial Solutions
          </h2>
          <p className="text-gray-600 text-base max-w-3xl">
            From the foundation to the finishing touches, we manufacture the critical
            components that power your projects.
          </p>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SHOWCASE_PRODUCT_VERTICALS.map((item) => (
            <Link
              to={item.path}
              key={item.key}
              className="group relative flex-shrink-0 w-[160px] h-[240px] md:w-[180px] md:h-[296px] rounded-md overflow-hidden cursor-pointer block"
            >
              <img
                src={item.showcaseImage}
                alt={item.showcaseTitle || item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute top-3 right-3 bg-metallo-navy/80 text-white p-1.5 rounded-full z-10">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-bold font-heading text-white leading-tight mb-0.5">
                  {item.showcaseTitle || item.name}
                </h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-wider font-heading mb-2">
                  {item.showcaseSubtitle}
                </p>

                <ul className="space-y-0.5 mb-2">
                  {(item.showcasePoints || []).map((point) => (
                    <li key={point} className="flex items-center text-[10px] text-gray-200">
                      <span className="w-1 h-1 bg-metallo-gold rounded-full mr-1.5 flex-shrink-0" />
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
