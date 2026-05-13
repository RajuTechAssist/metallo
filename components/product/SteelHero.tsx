"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTAINER } from "./productLayout";
import { SITE_IMAGES } from '@/config/images';

interface SteelHeroProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbLabel: string;
}

const panels = [
  { name: "", img: SITE_IMAGES.steel.hero.pipesTubes },
  { name: "", img: SITE_IMAGES.steel.hero.sheetsPlates },
  { name: "", img: SITE_IMAGES.steel.hero.flanges },
  { name: "", img: SITE_IMAGES.steel.hero.pipeFittings },
  { name: "", img: SITE_IMAGES.steel.hero.fastenersBars },
  { name: "", img: SITE_IMAGES.steel.hero.gaskets },
];

const SteelHero: React.FC<SteelHeroProps> = ({
  title,
  subtitle,
  description,
  breadcrumbLabel,
}) => (
  <section
    className="relative w-full overflow-hidden flex bg-slate-900"
    style={{ height: "clamp(400px, 60vh, 700px)" }}
  >
    {/* 6 Panels Background */}
    <div className="absolute  flex w-full h-full">
      {panels.map((panel, idx) => (
        <div key={idx} className="relative flex-1 h-full border-r border-slate-800/80 last:border-r-0 group overflow-hidden">
          <Image
            src={panel.img}
            alt={panel.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 17vw"
            priority
          />
          {/* Default Overlay & Hover Effect */}
          {/* <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500" /> */}

          {/* Bottom Gradient for Name */}
          {/* <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" /> */}

          <div className="absolute bottom-6 sm:bottom-8 w-full text-center px-1 md:px-2">
            <span className="text-white text-[9px] sm:text-[10px] md:text-sm font-heading font-bold uppercase tracking-widest relative z-20 group-hover:text-yellow-500 transition-colors">
              {panel.name}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Overall gradient overlay left to right for main text readability */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent w-full md:w-2/3 pointer-events-none" /> */}

    {/* Content */}
    <div
      className={`relative z-10 flex flex-col justify-center h-full ${CONTAINER} pointer-events-none`}
    >
      <div className="max-w-2xl pointer-events-auto inset-0 bg-slate-900/60 pt-10 pb-10 pl-10 pr-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-sans">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-yellow-500 font-medium">{breadcrumbLabel}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.12] mb-6">
          {title}
          <br className="hidden sm:block" />
          <span className="block sm:inline text-yellow-500">{subtitle}</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    {/* Bottom accent stripe */}
    <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500/60 to-transparent z-30" />
  </section>
);

export default SteelHero;
