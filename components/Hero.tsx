import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════
   CINEMATIC HERO SLIDER
   Full-screen background slider with masked text reveals,
   Ken Burns effect, and industrial track navigation.
   ═══════════════════════════════════════════════════════════════ */

const SLIDE_DURATION = 6; // seconds

interface Slide {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

const SLIDES: Slide[] = [
  {
    id: "01",
    category: "Structural Steel",
    title: "Forging the Backbone of Infrastructure.",
    desc: "IS:2062 compliant high-tensile steel for heavy engineering.",
    image: "/banner1.jpg",
    link: "/products/steel",
  },
  {
    id: "02",
    category: "Wire & Cable",
    title: "Powering the National Grid.",
    desc: "Engineered high-voltage transmission up to 33kV. Zero downtime.",
    image: "/banner2.jpg",
    link: "/products/wire-cables",
  },
  {
    id: "03",
    category: "Cable Tray",
    title: "Structured Cable Management.",
    desc: "GI, SS & Aluminium cable trays engineered for industrial routing.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80&auto=format&fit=crop",
    link: "/products/cable-tray",
  },
  {
    id: "04",
    category: "Welding Consumables",
    title: "Mission-Critical Precision.",
    desc: "AWS certified alloys for high-stress industrial joints.",
    image: "/banner3.jpg",
    link: "/products/welding",
  },
  {
    id: "05",
    category: "Power Tools",
    title: "Heavy-Duty Execution.",
    desc: "Industrial-grade tools built for uncompromising safety and scale.",
    image: "/banner4.jpg",
    link: "/products/tools",
  },
  {
    id: "06",
    category: "Die Casting",
    title: "Micro-Tolerance Engineering.",
    desc: "Precision aluminum components for automotive and aerospace.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80&auto=format&fit=crop",
    link: "/products/die-casting",
  },
  {
    id: "07",
    category: "Industrial Tech",
    title: "Automating the Future.",
    desc: "Smart platform integration for seamless supply chain visibility.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop",
    link: "/products/tech-products",
  },
];

const TOTAL = String(SLIDES.length).padStart(2, "0");

/* ── Animation Variants ── */

const categoryVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

const titleVariants = {
  initial: { y: "110%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    },
  },
  exit: {
    y: "-110%",
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
  },
};

const descVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.55 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const ctaVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goToSlide((current + 1) % SLIDES.length);
  }, [current, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goToSlide]);

  /* Auto-advance driven by progress bar duration */
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, SLIDE_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [progressKey, next]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden h-full md:h-[calc(80vh-80px)]">
      {/* ── Background Images with Ken Burns ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={slide.image}
            alt={slide.category}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION + 1, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 z-[1] bg-slate-900/60" />
      {/* Bottom vignette for track nav readability */}
      <div className="absolute inset-x-0 bottom-0 h-60 z-[2] bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 lg:px-20 pt-16 pb-40">
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id}>
              {/* Category Subtitle */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                variants={categoryVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <span className="block w-8 h-px bg-yellow-500" />
                <span className="text-xs font-bold font-heading text-yellow-500 uppercase tracking-[0.2em]">
                  {slide.id} &mdash; {slide.category}
                </span>
              </motion.div>

              {/* Masked Title Reveal */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.05] tracking-tight"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {slide.title}
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-gray-300 font-sans max-w-xl leading-relaxed mb-10"
                variants={descVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {slide.desc}
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={ctaVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-500 text-slate-900 text-sm font-heading font-extrabold uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                >
                  Explore Capabilities
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Industrial Track Navigation ── */}
      <div className="absolute flex justify-between items-center bottom-0 inset-x-0 z-20 px-6 sm:px-12 lg:px-20 pb-8 md:pb-10">
        {/* Slide Track Dots */}
        <div className="flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === current
                  ? "w-10 bg-yellow-500"
                  : "w-5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${s.id}`}
            />
          ))}
        </div>

        <div className="flex items-end justify-between gap-6">
          {/* Right: Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all flex items-center justify-center"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined text-xl">
                arrow_back
              </span>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all flex items-center justify-center"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
