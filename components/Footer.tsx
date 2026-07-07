"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocation } from "@/lib/useLocation";
import { PRODUCT_VERTICALS } from "@/lib/productVerticals";
import { SOCIAL_ICONS } from "@/lib/socialIcons";

interface SocialIconProps {
  name: string;
  path: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, path, className = "" }) => (
  <a
    href="#"
    aria-label={name}
    className={className}
  >
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [honeypot, setHoneypot] = useState("");
  const formLoadTime = useRef(Date.now());
  const location = useLocation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (honeypot) {
      console.warn("Bot detected: Honeypot filled");
      return;
    }

    // 2. Time-based check (< 2 seconds is suspicious)
    if (Date.now() - formLoadTime.current < 2000) {
      console.warn("Bot detected: Form submitted too fast");
      return;
    }

    // 3. Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      alert("Please confirm your consent to receive communications.");
      return;
    }

    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");
    setConsent(false);

    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };
  const topLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "Certifications", path: "/?section=certifications" },
    { name: "Why Metallo", path: "/why-metallo" },
    { name: "Contact Us", path: "/contact" },
  ] as const;
  return (
    <footer className="bg-metallo-navy text-white mt-auto">
      {/* Yellow CTA Strip */}
      {location.pathname !== '/contact' && (
      <div className="bg-metallo-gold text-metallo-navy py-12 relative z-20">
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading uppercase mb-2">
              Ready to Consolidate Your Supply Chain?
            </h3>
            <p className="text-metallo-navy/80 font-medium">
              Get a unified quote for Steel, Cables, Tools, and more today.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3 bg-metallo-navy text-white font-bold font-heading uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center"
          >
            Get Started{" "}
            <span className="material-symbols-outlined ml-2">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
      )}

      <div className="container pt-12 pb-8">
        {/* Top Row: Logo (Left) and Socials (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-700/50 pb-8 gap-6">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" title="METALLO MANUFACTURING TECHNOLOGIES GmbH">
            <Image
              src="/logo-white.svg"
              alt="METALLO MANUFACTURING TECHNOLOGIES GmbH"
              width={600}
              height={150}
              style={{ width: "20rem", height: "auto" }}
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {SOCIAL_ICONS.map((icon) => (
              <SocialIcon
                key={icon.name}
                name={icon.name}
                path={icon.path}
                className="bg-white text-metallo-navy hover:bg-metallo-gold transition-colors p-2 rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* 3-Column Layout on Tablet/Desktop: Communication | Company | Industries */}
        <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">
          {/* Communication */}
          <div className="w-full lg:max-w-[35%] mb-8 md:mb-0">
            <h4 className="text-xl font-bold font-heading mb-4 text-white">
              Join our communication
            </h4>

            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-8 text-center animate-fade-in">
                <span className="material-symbols-outlined text-green-500 text-3xl mb-2">
                  mark_email_read
                </span>
                <p className="text-white font-bold text-sm">
                  Thanks for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <input
                  type="text"
                  name="website_url"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row gap-0 mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="flex-grow px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none placeholder-gray-500 rounded-sm sm:rounded-r-none w-full border-transparent focus:border-metallo-gold focus:ring-1 focus:ring-metallo-gold transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-metallo-gold text-metallo-slate font-bold px-6 py-3 uppercase tracking-wider hover:bg-metallo-gold-hover transition-colors rounded-sm sm:rounded-l-none whitespace-nowrap mt-2 sm:mt-0 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {status === "submitting" ? (
                      <span className="material-symbols-outlined animate-spin text-sm">
                        progress_activity
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 accent-metallo-gold shrink-0"
                  />
                  <label
                    htmlFor="consent"
                    className={`text-xs leading-tight cursor-pointer transition-colors ${consent ? "text-gray-300" : "text-gray-400"}`}
                  >
                    I would like to receive emails, calls, messages, posts, and
                    other form of communications from Metallo Industrial
                    Solutions
                  </label>
                </div>
              </form>
            )}

            {/* <div className="text-sm text-gray-400">
              <p className="font-bold text-white mb-1">Registered Office:</p>
              <p>710, Tower A, Emaar Digital Greens,</p>
              <p>Sector 61, Gurgaon, Haryana, India, 122101</p>
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-12 justify-between md:gap-20">
            {/* Manufacturer & Supplier of */}
            <div>
              <h4 className="text-sm lg:text-lg font-bold font-heading mb-6 uppercase tracking-wider text-white">
                Manufacturer & Supplier of
              </h4>
              <ul className="space-y-3 text-sm lg:text-base text-gray-400">
                {PRODUCT_VERTICALS.map((vertical) => (
                  <li key={vertical.key}>
                    <Link
                      href={vertical.path}
                      className="hover:text-white transition-colors"
                    >
                      {vertical.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm lg:text-lg font-bold font-heading mb-6 uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm lg:text-base text-gray-400">
                {topLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} METALLO MANUFACTURING TECHNOLOGIES GmbH. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            {/* <Link
              href="/?section=certifications"
              className="hover:text-white transition-colors"
            >
              Certifications
            </Link> */}
            <Link href="/why-metallo" className="hover:text-white transition-colors">
              Why Metallo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
