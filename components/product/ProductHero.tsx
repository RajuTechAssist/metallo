import React from "react";
import { Link } from "react-router-dom";
import { CONTAINER } from "./productLayout";

interface ProductHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  breadcrumbLabel: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
  breadcrumbLabel,
}) => (
  <section
    className="relative w-full overflow-hidden"
    style={{ height: "clamp(400px, 60vh, 700px)" }}
  >
    <img
      src={backgroundImage}
      alt={breadcrumbLabel}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute" />

    <div
      className={`relative z-10 flex flex-col justify-center h-full ${CONTAINER}`}
    >
      <div className="max-w-3xl inset-0 bg-slate-900/60 pt-10 pb-10 pl-10 pr-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-sans">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-yellow-500 font-medium">{breadcrumbLabel}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-[1.12] mb-5 md:mb-6">
          {title}
          <br />
          <span className="text-yellow-500">{subtitle}</span>
        </h1>

        {/* Description */}
        <p className="text-base lg:text-lg text-slate-300 max-w-2xl mb-6 lg:mb-8 font-sans leading-relaxed">
          {description}
        </p>

      </div>
    </div>

    {/* Bottom accent stripe */}
    <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-10" />
  </section>
);

export default ProductHero;
