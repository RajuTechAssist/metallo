import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { PRODUCT_VERTICAL_BY_KEY } from "../utils/productVerticals";

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
    category: "Steel",
    title: "Infinite Capacity. Standardized Quality.",
    desc: "Access India's largest aggregated network of IS:2062 compliant steel mills. Heavy engineering, delivered on demand through our Distributed Manufacturing OS.",
    image: "/Steel/oil_industry1.jpg",
    link: PRODUCT_VERTICAL_BY_KEY.steel.path,
  },
  {
    id: "02",
    category: "Wire & Cable",
    title: "Powering the National Grid.",
    desc: "A unified manufacturing ecosystem for high-voltage transmission up to 33kV. 100% batch-tested at our Central QC Hub for zero downtime.",
    image: "/wire&cable/wireCables.jpg",
    link: PRODUCT_VERTICAL_BY_KEY.cables.path,
  },
  {
    id: "03",
    category: "Cable Trays",
    title: "Structural Routing Systems",
    desc: "A unified manufacturing ecosystem for high-voltage transmission and heavy-duty Cable Trays & Supports. 100% batch-tested at our Central QC Hub.",
    image: "/cable Trays/cableTrays2.jpg",
    link: PRODUCT_VERTICAL_BY_KEY.cabletray.path,
  },
  {
    id: "04",
    category: "Welding Consumables",
    title: "Mission-Critical Precision.",
    desc: "AWS-certified alloys manufactured across our audited, asset-light network. Strict SOPs deployed for flawless high-stress industrial joints.",
    image: "/Welding Consumables/welding_consumables.jpg",
    link: PRODUCT_VERTICAL_BY_KEY.welding.path,
  },
  {
    id: "05",
    category: "Power Tools",
    title: "Heavy-Duty Execution at Scale.",
    desc: "Industrial-grade tools built for uncompromising safety. Sourced, standardized, and certified through our globally compliant vendor network.",
    image: "/powerTools/powerTools2.png",
    link: PRODUCT_VERTICAL_BY_KEY.tools.path,
  },
  {
    id: "06",
    category: "Pipes",
    title: "Process Flow Systems.",
    desc: "Fabricated piping packages, modular skids, and bends. Engineered and tested for mission-critical industrial flow networks.",
    image: "/pipes/shop-fabricated-piping.png",
    link: PRODUCT_VERTICAL_BY_KEY.pipes.path,
  },
  {
    id: "07",
    category: "Fabricated Structures",
    title: "Engineered Steel Systems.",
    desc: "From PEB frameworks to heavy workshop fabrication. End-to-end structural solutions built for rapid assembly and lifetime durability.",
    image: "/fabricated-structures/cold-form-section.png",
    link: PRODUCT_VERTICAL_BY_KEY.fabricatedStructures.path,
  },
  // {
  //   id: "08",
  //   category: "Die Casting",
  //   title: "Micro-Tolerance Engineering.",
  //   desc: "Precision aluminum components for automotive and aerospace. Seamlessly scalable from prototype to mass production via our agile capacity.",
  //   image: "/diecasting/die-casting-process-foundry.jpg",
  //   link: PRODUCT_VERTICAL_BY_KEY.casting.path,
  // },
  // {
  //   id: "09",
  //   category: "Industrial Tech",
  //   title: "The Operating System for Infrastructure.",
  //   desc: "End-to-end digital production tracking, centralized procurement, and seamless supply chain visibility for major EPC contractors.",
  //   image: "/industrialTech/IIoT-applications-industrial-IoT-applications-robot.jpeg",
  //   link: PRODUCT_VERTICAL_BY_KEY.tech.path,
  // },
];

const TOTAL = String(SLIDES.length).padStart(2, "0");

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.55, 0, 1, 0.45];

/* ── Animation Variants ── */

const categoryVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_STANDARD },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

const titleVariants: Variants = {
  initial: { y: "110%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
      delay: 0.15,
    },
  },
  exit: {
    y: "-110%",
    transition: { duration: 0.5, ease: EASE_IN },
  },
};

const descVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.55 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const ctaVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const TRANSITION_LOCK_MS = 800; // ignore clicks during this window

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  // Stable ref for current index so callbacks don't depend on `current`
  const currentRef = useRef(current);
  currentRef.current = current;

  // Transition lock to prevent rapid-fire clicks from causing flicker
  const isTransitioning = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning.current) return; // ignore while animating
    isTransitioning.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      isTransitioning.current = false;
    }, TRANSITION_LOCK_MS);

    setCurrent(index);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goToSlide((currentRef.current + 1) % SLIDES.length);
  }, [goToSlide]);

  const prev = useCallback(() => {
    goToSlide((currentRef.current - 1 + SLIDES.length) % SLIDES.length);
  }, [goToSlide]);

  /* Auto-advance driven by progress bar duration */
  useEffect(() => {
    const timer = setTimeout(() => {
      // Bypass the transition lock for auto-advance
      isTransitioning.current = false;
      next();
    }, SLIDE_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [progressKey, next]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden h-[50dvh] md:h-[calc(80vh-80px)] min-h-[400px] md:min-h-[500px]">
      {/* ── Background Images with Ken Burns ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0 w-full"
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
      <div className="absolute inset-x-0 bottom-0 h-[40%] z-[2] bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative container z-10 flex flex-col justify-center h-full pt-[5%] pb-[10%]">
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id}>
              {/* Category Subtitle */}
              <motion.div
                className="flex items-center gap-[clamp(0.5rem,1.5%,0.75rem)] mb-[clamp(0.75rem,2%,1.5rem)]"
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
              <div className="overflow-hidden mb-[clamp(0.75rem,2%,1.5rem)] pb-2">
                <motion.h1
                  className="text-[clamp(2rem,5vw,3.75rem)] font-heading font-extrabold text-white leading-[1.15] tracking-tight"
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
                className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-gray-300 font-sans max-w-xl leading-relaxed mb-[clamp(1.5rem,4%,2.5rem)]"
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
                  className="inline-flex items-center gap-[clamp(0.5rem,1%,0.75rem)] px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1vw,0.75rem)] bg-yellow-500 text-slate-900 text-[clamp(0.75rem,0.9vw,0.875rem)] font-heading font-extrabold uppercase tracking-wider hover:bg-yellow-400 transition-colors"
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
      <div className="absolute container flex justify-between items-center bottom-0 inset-x-0 z-20 pb-[3%]">
        {/* Slide Track Dots */}
        <div className="flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i)}
              className={`h-[2px] transition-all duration-300 ${i === current
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
