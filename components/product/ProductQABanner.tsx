import React from "react";
import { CONTAINER } from "./productLayout";
import type { QAItem } from "./productLayout";

interface ProductQABannerProps {
  sectionLabel?: string;
  title: string;
  items: QAItem[];
}

const ProductQABanner: React.FC<ProductQABannerProps> = ({
  sectionLabel = "Quality Assurance",
  title,
  items,
}) => (
  <section className="bg-slate-900 text-white py-12 md:py-16 lg:py-20">
    <div className={CONTAINER}>
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-[2px] bg-yellow-500" />
          <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-yellow-500">
            {sectionLabel}
          </span>
          <span className="block w-10 h-[2px] bg-yellow-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
              <span className="material-symbols-outlined text-2xl text-yellow-500">
                {item.icon}
              </span>
            </div>
            <h3 className="text-base font-heading font-bold text-white mb-2 uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-[250px] mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductQABanner;
