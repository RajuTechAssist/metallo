"use client";

import React from "react";
import Image from "next/image";
import {
  VERTICAL_CERT_DATA,
  type CertificationItem,
  type PartnerItem,
} from "@/data/verticalCertificationsData";
// import { CONTAINER } from "@/components/product/productLayout";

/* ------------------------------------------------------------------ */
/*  Inline SVG certification badge renderer                           */
/* ------------------------------------------------------------------ */

const BADGE_LABELS: Record<CertificationItem["icon"], string> = {
  iso: "ISO",
  bis: "BIS",
  astm: "ASTM",
  asme: "ASME",
  iec: "IEC",
  aws: "AWS",
  ce: "CE",
  ul: "UL",
  api: "API",
  nema: "NEMA",
  cpri: "CPRI",
  aisc: "AISC",
  en: "EN",
};

const CertBadge: React.FC<{ cert: CertificationItem }> = ({ cert }) => {
  const label = BADGE_LABELS[cert.icon];

  return (
    <div className="flex flex-col items-center gap-2 group cursor-default shrink-0 transition-all duration-300 hover:-translate-y-1">
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 md:w-20 md:h-20 text-slate-800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="40"
          cy="40"
          r="37"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.15"
        />
        <circle
          cx="40"
          cy="40"
          r="33"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Badge body fill */}
        <circle cx="40" cy="40" r="30" fill="currentColor" opacity="0.06" />
        {/* Acronym text */}
        <text
          x="40"
          y="38"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize={label.length > 3 ? "12" : "14"}
          letterSpacing="1"
        >
          {label}
        </text>
        {/* Checkmark at bottom */}
        <circle cx="40" cy="56" r="7" fill="currentColor" opacity="0.12" />
        <path
          d="M36 56l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
      <div className="text-center">
        <span className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide whitespace-nowrap font-heading">
          {cert.name}
        </span>
        <span className="block text-[9px] text-slate-400 uppercase tracking-wider whitespace-nowrap mt-0.5">
          {cert.subtitle}
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Partner logo renderer                                             */
/* ------------------------------------------------------------------ */

const PartnerLogo: React.FC<{ partner: PartnerItem }> = ({ partner }) => (
  <div className="flex items-center justify-center h-12 md:h-14 px-3 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
    <Image
      src={partner.logo}
      alt={partner.name}
      width={160}
      height={56}
      className="max-h-full max-w-full object-contain"
    />
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

interface VerticalCertificationsProps {
  verticalKey: string;
}

const VerticalCertifications: React.FC<VerticalCertificationsProps> = ({
  verticalKey,
}) => {
  const data = VERTICAL_CERT_DATA[verticalKey];
  if (!data) return null;

  // Auto-scrolling is handled via purely CSS marquee (`animate-marquee`).
  return
  // return (
  //   <>
  //     {/* ── Partners Section ── Zetwerk-style: heading left, logos right, same line */}
  //     {data.partners.length > 0 && (
  //       <section className="bg-white border-b border-slate-100 py-14 md:py-20">
  //         <div className={`${CONTAINER}`}>
  //           <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12 pt-1 lg:pt-0">
  //             {/* Heading — left column, fixed width */}
  //             <div className="lg:w-[180px] xl:w-[220px] shrink-0 border-t-2 border-metallo-gold pt-2 inline-block">
  //               <h2 className="text-2xl md:text-[28px] font-serif text-slate-800 leading-snug">
  //                 Our Partners
  //               </h2>
  //             </div>

  //             {/* Logo row — Auto-scrolling Marquee on all devices */}
  //             <div className="flex-1 relative overflow-hidden flex items-center h-16 select-none group">
  //               <style>
  //                 {`
  //                   @keyframes slideMarquee {
  //                     0% { transform: translateX(0); }
  //                     100% { transform: translateX(-50%); }
  //                   }
  //                   .animate-marquee {
  //                     animation: slideMarquee 25s linear infinite;
  //                     display: flex;
  //                     width: max-content;
  //                   }
  //                   .animate-marquee:hover {
  //                     animation-play-state: paused;
  //                   }
  //                   @media (max-width: 1024px) {
  //                     .animate-marquee {
  //                       animation-duration: 20s;
  //                     }
  //                   }
  //                 `}
  //               </style>
  //               <div className="animate-marquee items-center min-w-max">
  //                 {/* Container 1: First Half (2 sets of partners) */}
  //                 <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
  //                   {[...data.partners, ...data.partners].map((partner, i) => (
  //                     <PartnerLogo key={`p1-${i}-${partner.name}`} partner={partner} />
  //                   ))}
  //                 </div>

  //                 {/* Container 2: Second Half (2 sets of partners - exact clone) */}
  //                 <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
  //                   {[...data.partners, ...data.partners].map((partner, i) => (
  //                     <PartnerLogo key={`p2-${i}-${partner.name}`} partner={partner} />
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Global left and right edge gradients for smoothness */}
  //               <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
  //               <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     )}

  //     {/* ── Certifications Section ── heading left, badges right, same line */}
  //     {data.certifications.length > 0 && (
  //       <section className="bg-slate-50 border-b border-slate-200 py-14 md:py-20 overflow-hidden">
  //         <div className={`${CONTAINER}`}>
  //           <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12 pt-1 lg:pt-0">
  //             {/* Heading — left column, same width as partners heading */}
  //             <div className="lg:w-[180px] xl:w-[220px] shrink-0 border-t-2 border-metallo-gold pt-2 inline-block">
  //               <h2 className="text-2xl md:text-[28px] font-serif text-slate-800 leading-snug">
  //                 Certifications
  //               </h2>
  //             </div>

  //             {/* Badge row — Auto-scrolling Marquee on all devices */}
  //             <div className="flex-1 relative overflow-hidden flex items-start select-none group">
  //               <div className="animate-marquee min-w-max">
  //                 {/* Container 1: First Half */}
  //                 <div className="flex items-start gap-8 md:gap-14 pr-8 md:pr-14">
  //                   {[...data.certifications, ...data.certifications].map((cert, i) => (
  //                     <CertBadge key={`c1-${i}-${cert.name}`} cert={cert} />
  //                   ))}
  //                 </div>

  //                 {/* Container 2: Second Half (exact clone for smooth infinite loop) */}
  //                 <div className="flex items-start gap-8 md:gap-14 pr-8 md:pr-14">
  //                   {[...data.certifications, ...data.certifications].map((cert, i) => (
  //                     <CertBadge key={`c2-${i}-${cert.name}`} cert={cert} />
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Global left and right edge gradients for smoothness (using slate-50 to match parent bg) */}
  //               <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
  //               <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 to-transparent" />
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     )}
  //   </>
  // );
};

export default VerticalCertifications;
