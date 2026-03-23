import React from "react";
import { Link } from "react-router-dom";
import { CONTAINER } from "./productLayout";

interface ProductCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaIcon?: string;
  ctaLink?: string;
}

const ProductCTA: React.FC<ProductCTAProps> = ({
  title,
  description,
  ctaLabel,
  ctaIcon = "request_quote",
  ctaLink = "/contact",
}) => (
  <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
    <div className={CONTAINER}>
      <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 md:p-10 lg:p-14 border-l-4 border-l-yellow-500 shadow-sm max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="w-16 h-16 shrink-0 bg-yellow-500/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-yellow-600">
              {ctaIcon}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-heading font-extrabold text-slate-900 mb-3">
              {title}
            </h3>
            <p className="text-base text-slate-500 font-sans leading-relaxed">
              {description}
            </p>
          </div>
          <Link
            to={ctaLink}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">
              {ctaIcon}
            </span>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ProductCTA;
