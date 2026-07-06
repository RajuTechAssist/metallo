"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/lib/useLocation";
import { HEADER_PRODUCT_VERTICALS } from "@/lib/productVerticals";
import { SOCIAL_ICONS } from "@/lib/socialIcons";

const TOP_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  // { name: "Certifications", path: "/?section=certifications" },
  { name: "Why Metallo", path: "/why-metallo" },
  { name: "Growth & Innovation", path: "/future-aspects" },
  { name: "Contact Us", path: "/contact" },
] as const;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVerticalNavPinned, setIsVerticalNavPinned] = useState(false);
  const location = useLocation();
  const verticalNavMarkerRef = useRef<HTMLDivElement | null>(null);
  const verticalNavRef = useRef<HTMLDivElement | null>(null);
  const verticalNavTop = useRef(0);
  const [verticalNavHeight, setVerticalNavHeight] = useState(0);
  const scrollRAF = useRef<number | undefined>(undefined);

  useEffect(() => {
    const measureVerticalNav = () => {
      if (verticalNavMarkerRef.current) {
        verticalNavTop.current =
          verticalNavMarkerRef.current.getBoundingClientRect().top +
          window.scrollY;
      }

      if (verticalNavRef.current) {
        setVerticalNavHeight(verticalNavRef.current.offsetHeight);
      }

      setIsVerticalNavPinned(window.scrollY >= verticalNavTop.current);
    };

    const handleScroll = () => {
      if (scrollRAF.current !== undefined) return;
      scrollRAF.current = requestAnimationFrame(() => {
        setIsVerticalNavPinned(window.scrollY >= verticalNavTop.current);
        scrollRAF.current = undefined;
      });
    };

    measureVerticalNav();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureVerticalNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureVerticalNav);
      if (scrollRAF.current !== undefined) cancelAnimationFrame(scrollRAF.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full bg-white font-sans text-metallo-navy shadow-sm">
        <div className="w-full border-b border-gray-300 py-[clamp(0.5rem,0.82vw,0.80rem)] hidden md:block">
          <div className="container">
            <div className="flex justify-between items-center text-[clamp(0.625rem,0.78vw,0.8rem)] font-medium font-serif text-gray-600 tracking-wide">
              <div className="flex space-x-[clamp(1rem,2.57vw,2.6rem)]">
                {TOP_LINKS.map((link) => {
                  const isCertificationsLink = (link.name as string) === "Certifications";
                  const isActive = isCertificationsLink
                    ? location.pathname === "/" &&
                      new URLSearchParams(location.search).get("section") ===
                        "certifications"
                    : location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`uppercase transition-colors ${
                        isActive
                          ? "text-metallo-navy font-bold"
                          : "hover:text-metallo-navy"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-metallo-navy">
                <span className="material-symbols-outlined text-[clamp(0.875rem,1.1vw,1.125rem)]">
                  language
                </span>
                <span>Global</span>
                <span className="material-symbols-outlined text-[clamp(0.75rem,0.9vw,0.875rem)]">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="py-[clamp(0.5rem,1vw,1rem)] bg-white">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center group" title="METALLO MANUFACTURING TECHNOLOGIES GmbH">
                <Image
                  src="/logo.svg"
                  alt="METALLO MANUFACTURING TECHNOLOGIES GmbH"
                  width={600}
                  height={150}
                  priority
                  style={{ width: "clamp(10rem, 16vw, 15rem)", height: "auto" }}
                />
              </Link>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-[clamp(1rem,1.5vw,1.5rem)] py-[clamp(0.5rem,0.8vw,0.75rem)] bg-metallo-gold hover:bg-metallo-gold-hover text-metallo-navy font-bold text-[clamp(0.7rem,0.85vw,0.875rem)] uppercase tracking-wide transition-colors rounded-sm"
              >
                Contact Us
                <span className="material-symbols-outlined ml-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(0.875rem,1.1vw,1.125rem)]">
                  arrow_forward
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-metallo-navy p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>

        <div ref={verticalNavMarkerRef} className="hidden md:block" />
        {isVerticalNavPinned ? (
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{ height: verticalNavHeight }}
          />
        ) : null}
        <div
          ref={verticalNavRef}
          className={`hidden md:block w-full bg-white transition-all ${
            isVerticalNavPinned
              ? "fixed inset-x-0 top-0 z-50 border-b border-gray-200 shadow-md"
              : "relative"
          }`}
        >
          <div className="container">
            <div className="flex justify-between items-center h-[clamp(2.5rem,4vw,3.5rem)]">
              <nav
                className="flex items-center gap-[clamp(0.75rem,1.4vw,1.8rem)] overflow-x-auto pr-4"
                style={{ scrollbarWidth: "none" }}
              >
                {HEADER_PRODUCT_VERTICALS.map((vertical) => {
                  const isActive = location.pathname.startsWith(vertical.path);

                  return (
                    <Link
                      key={vertical.key}
                      href={vertical.path}
                      className={`whitespace-nowrap text-[clamp(0.6rem,0.72vw,0.72rem)] font-extrabold font-serif uppercase tracking-wider transition-all decoration-2 underline-offset-4 ${
                        isActive
                          ? "text-metallo-gold underline"
                          : "text-metallo-navy hover:text-metallo-gold hover:underline"
                      }`}
                    >
                      {vertical.name}
                    </Link>
                  );
                })}
              </nav>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-metallo-navy opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                  Menu
                </span>
                <span className="material-symbols-outlined text-metallo-navy">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`
        fixed inset-y-0 z-[100] bg-metallo-navy text-white
        w-[85vw] md:w-1/2 lg:w-1/2
        shadow-2xl overflow-hidden
        transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        left-0 md:left-auto md:right-0
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end items-center p-[clamp(1rem,3vw,1.5rem)] md:p-[clamp(1.5rem,3vw,2rem)]">
            <button onClick={() => setIsMenuOpen(false)} className="group p-2">
              <span className="material-symbols-outlined text-[clamp(1.5rem,3vw,2rem)] md:text-[clamp(1.75rem,3vw,2.25rem)] text-white group-hover:text-metallo-gold transition-all duration-300">
                close
              </span>
            </button>
          </div>

          <div className="flex-1 px-[clamp(1.5rem,5vw,2rem)] md:px-[clamp(2rem,5vw,4rem)] overflow-y-auto">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 flex flex-col space-y-[clamp(1rem,3vw,2rem)] pt-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1rem,3vw,2rem)] md:pb-0 pl-[clamp(0.5rem,2vw,1rem)] md:pl-[clamp(1rem,3vw,2rem)]">
                {TOP_LINKS.map((link) => {
                  const isCertificationsLink = (link.name as string) === "Certifications";
                  const isActive = isCertificationsLink
                    ? location.pathname === "/" &&
                      new URLSearchParams(location.search).get("section") ===
                        "certifications"
                    : location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-[clamp(1rem,2.5vw,1.25rem)] md:text-[clamp(1.25rem,2vw,1.5rem)] font-bold font-heading uppercase tracking-wide w-fit pb-1 transition-colors ${
                        isActive
                          ? "text-metallo-gold border-b-2 border-metallo-gold"
                          : "text-white hover:text-metallo-gold border-b-2 border-transparent hover:border-metallo-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="flex-1 md:border-l md:border-white/10 md:pl-[clamp(2rem,5vw,4rem)] pl-[clamp(0.5rem,2vw,1rem)] pt-[clamp(0.5rem,1.5vw,1rem)] pb-[clamp(1rem,3vw,2rem)]">
                <h3 className="text-[clamp(0.625rem,0.9vw,0.75rem)] font-bold text-white uppercase tracking-wider mb-[clamp(1rem,3vw,2rem)] font-heading">
                  Products
                </h3>
                <div className="flex flex-col space-y-[clamp(0.5rem,1.5vw,1rem)]">
                  {HEADER_PRODUCT_VERTICALS.map((vertical) => {
                    const isActive = location.pathname.startsWith(vertical.path);

                    return (
                      <Link
                        key={vertical.key}
                        href={vertical.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-base font-sans pb-1 block w-fit transition-all duration-300 border-b ${
                          isActive
                            ? "text-metallo-gold border-metallo-gold"
                            : "text-gray-300 hover:text-white hover:translate-x-2 border-transparent hover:border-metallo-gold"
                        }`}
                      >
                        {vertical.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="p-[clamp(1rem,3vw,2rem)] md:px-[clamp(2rem,5vw,4rem)] border-t border-white/10 mt-auto bg-metallo-navy z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-[clamp(1rem,2vw,1.5rem)]">
              {/* <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-white hover:text-metallo-gold uppercase tracking-wider transition-colors"
                >
                  Contact
                </Link>
              </div> */}

              <div className="flex gap-[clamp(0.5rem,1.5vw,1rem)] items-center">
                {SOCIAL_ICONS.map((icon) => (
                  <a
                    key={icon.name}
                    href="#"
                    aria-label={icon.name}
                    className="text-white hover:text-metallo-gold transition-colors"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
