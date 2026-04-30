"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/lib/useLocation";
import { HEADER_PRODUCT_VERTICALS } from "@/lib/productVerticals";

const TOP_LINKS = [
  { name: "About Us", path: "/about" },
  { name: "Certifications", path: "/?section=certifications" },
  { name: "Why Metallo", path: "/why-metallo" },
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
      setIsVerticalNavPinned(window.scrollY >= verticalNavTop.current);
    };

    measureVerticalNav();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureVerticalNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureVerticalNav);
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
                  const isCertificationsLink = link.name === "Certifications";
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
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo.svg"
                  alt="Metallo"
                  width={600}
                  height={150}
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
                  const isCertificationsLink = link.name === "Certifications";
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
                  Product
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
              <div className="flex gap-[clamp(1rem,2vw,1.5rem)]">
                <Link
                  href="/?section=certifications"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-white hover:text-metallo-gold uppercase tracking-wider transition-colors"
                >
                  Certifications
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-white hover:text-metallo-gold uppercase tracking-wider transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="flex gap-[clamp(0.5rem,1.5vw,1rem)] items-center">
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-metallo-gold transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
