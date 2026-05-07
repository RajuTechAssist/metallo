"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import ProductHero from "./ProductHero";

/* ═══════════════════════════════════════════════════════════════
   WELDING INDUSTRY PAGE — Shared Template
   Reusable page layout for welding-focused industry pages.
   Uses the shared ProductHero component for the hero section.
   Sections: Hero → Challenge → Solution → Pillars → Technical → CTA
   ═══════════════════════════════════════════════════════════════ */

/* ── Data Types ── */

export interface WeldingIndustryHero {
  kicker: string;
  headline: string;
  subHeadline: string;
  image: string;
  breadcrumbLabel: string;
}

export interface WeldingIndustryChallenge {
  headline: string;
  body: string;
}

export interface WeldingIndustrySolution {
  headline: string;
  body: string;
}

export interface WeldingIndustryPillar {
  icon: string;
  title: string;
  description: string;
}

export interface WeldingIndustryTechnicalBlock {
  icon: string;
  title: string;
  items: string[];
}

export interface WeldingIndustryPageData {
  hero: WeldingIndustryHero;
  challenge: WeldingIndustryChallenge;
  solution: WeldingIndustrySolution;
  pillars: WeldingIndustryPillar[];
  technical: WeldingIndustryTechnicalBlock[];
  ctaHeadline: string;
  ctaBody: string;
}

/* ── Animation Variants ── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ── Animated Section Wrapper ── */

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ── Section Nav Items ── */

const NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Challenge", id: "challenge" },
  { label: "Solution", id: "solution" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Technical", id: "technical" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const WeldingIndustryPage: React.FC<{ data: WeldingIndustryPageData }> = ({
  data,
}) => {
  /* ─── Sticky nav tracking ─── */
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white global-justify-wrapper">
      {/* ═══ 1. HERO (Reusable ProductHero) ═══════════════════════ */}
      <ProductHero
        backgroundImage={data.hero.image}
        title={data.hero.headline}
        subtitle={data.hero.kicker}
        description={data.hero.subHeadline}
        breadcrumbLabel={data.hero.breadcrumbLabel}
      />

      {/* ═══ STICKY SECTION NAV ════════════════════════════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container">
          <div
            className="flex items-center gap-0 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative whitespace-nowrap px-5 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors shrink-0 ${
                  activeSection === item.id
                    ? "text-yellow-600"
                    : "text-slate-500 hover:text-metallo-navy"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-500 rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ 2. OVERVIEW / CHALLENGE ═══════════════════════════════ */}
      <AnimatedSection
        id="overview"
        className="py-20 lg:py-24 bg-white border-b border-slate-100"
      >
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">
              Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
              Metallo × WB Alloys for{" "}
              <span className="text-yellow-600">
                {data.hero.breadcrumbLabel}
              </span>
            </h2>
            <p className="text-base text-slate-700 font-sans leading-relaxed">
              {data.hero.subHeadline}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 3. THE INDUSTRY CHALLENGE ════════════════════════════ */}
      <AnimatedSection
        id="challenge"
        className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-red-500 mb-4">
                The Industry Challenge
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
                {data.challenge.headline}
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                {data.challenge.body}
              </p>
            </div>

            {/* Visual card */}
            <div className="bg-metallo-navy rounded-xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl text-red-400">
                  warning
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Key Pain Points
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Inconsistent batch quality from fragmented vendors",
                  "Uncalibrated site equipment causing weld failures",
                  "Failed NDT inspections and costly on-site rework",
                  "Complex compliance across multiple welding processes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-300 font-sans leading-relaxed"
                  >
                    <span className="material-symbols-outlined text-sm text-red-400 mt-0.5 shrink-0">
                      close
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 4. THE SOLUTION ══════════════════════════════════════ */}
      <AnimatedSection
        id="solution"
        className="py-20 lg:py-28 bg-white border-b border-slate-100"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Solution card */}
            <div className="bg-gradient-to-br from-metallo-navy to-slate-800 rounded-xl p-8 lg:p-10 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl text-yellow-500">
                  check_circle
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  The Metallo × WB Alloys Advantage
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Centralized welding ecosystem under one unified platform",
                  "Direct-manufactured, batch-certified consumables",
                  "Globally deployable NDT/NDE engineers and technicians",
                  "On-site machine calibration and extraction compliance",
                  "Complete safety infrastructure — fume extraction & PAPR",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-300 font-sans leading-relaxed"
                  >
                    <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">
                The Metallo × WB Alloys Solution
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight mb-8">
                {data.solution.headline}
              </h2>
              <p className="text-base text-slate-600 font-sans leading-relaxed">
                {data.solution.body}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 5. CORE CAPABILITIES (4 PILLARS) ════════════════════ */}
      <AnimatedSection
        id="capabilities"
        className="py-20 lg:py-28 bg-metallo-navy"
      >
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-500 mb-3">
              Core Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              The 4 Pillars for {data.hero.breadcrumbLabel}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-yellow-500">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 6. TECHNICAL SPECIFICATIONS ═════════════════════════ */}
      <AnimatedSection
        id="technical"
        className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200"
      >
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">
              Technical & Compliance
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-metallo-navy leading-tight">
              Standards, Testing & Traceability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.technical.map((block, i) => (
              <motion.div
                key={block.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-2xl text-yellow-600">
                    {block.icon}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-metallo-navy">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 font-sans"
                    >
                      <span className="material-symbols-outlined text-sm text-yellow-500 mt-0.5 shrink-0">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ 7. FINAL CTA ═══════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <img
          src={data.hero.image}
          alt={data.hero.breadcrumbLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-metallo-navy/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            {data.ctaHeadline}
          </h2>
          <p className="text-lg text-slate-300 font-sans max-w-2xl mx-auto mb-10">
            {data.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-metallo-navy text-sm font-heading font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">
                description
              </span>
              Request a Quote
            </Link>
            <Link
              href="/products/welding"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-sm font-heading font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">
                inventory_2
              </span>
              Browse Consumables
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeldingIndustryPage;
