"use client";

import React from 'react';
import { CONTAINER } from './product/productLayout';

export interface HelpSectionProps {
  /** When provided, the "Request a Quote" card scrolls to an on-page form instead of linking to /contact */
  onRequestQuote?: () => void;
  title?: string;
  subtitle?: string;
}

const HelpSection: React.FC<HelpSectionProps> = ({
  onRequestQuote,
  title = "How can we help you today?",
  subtitle,
}) => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className={CONTAINER}>
        <div className="mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-3 leading-tight">{title}</h2>
          <div className="w-16 h-1 bg-metallo-gold mb-4"></div>
          {subtitle && (
            <p className="text-sm md:text-base text-gray-500 max-w-3xl leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: RFQ */}
          {onRequestQuote ? (
            <div
              onClick={onRequestQuote}
              className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-gold transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-metallo-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-metallo-navy">description</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Customers</p>
              <h3 className="text-xl font-bold font-heading text-metallo-navy mb-3">Request a Quote</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Looking for Steel, Cables, or Tools for your project? Get a factory-direct proposal.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-gold-hover transition-colors">
                Fill Enquiry Form
                <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-y-1 transition-transform">arrow_downward</span>
              </span>
            </div>
          ) : (
            <a
              href="/contact"
              className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-gold transition-all duration-300 cursor-pointer relative overflow-hidden block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-metallo-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-metallo-navy">description</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Customers</p>
              <h3 className="text-xl font-bold font-heading text-metallo-navy mb-3">Request a Quote</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Looking for Steel, Cables, or Tools for your project? Get a factory-direct proposal.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-gold-hover transition-colors">
                Fill Enquiry Form
                <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
          )}

          {/* Card 2: Vendors */}
          <a
            href="mailto:procurement@metallo.com"
            className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-gold transition-all duration-300 cursor-pointer relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-metallo-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-gold transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl text-metallo-navy">handshake</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Vendors</p>
            <h3 className="text-xl font-bold font-heading text-metallo-navy mb-3">Become a Partner</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Supply raw materials or logistics services to the Metallo ecosystem.
            </p>
            <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-gold-hover transition-colors">
              procurement@metallo.com
              <span className="material-symbols-outlined text-lg ml-1">arrow_outward</span>
            </span>
          </a>

          {/* Card 3: Careers */}
          <a
            href="mailto:hr@metallo.com"
            className="group bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-metallo-gold transition-all duration-300 cursor-pointer relative overflow-hidden block"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-metallo-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="w-14 h-14 bg-metallo-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-metallo-gold transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl text-metallo-navy">work</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">For Careers</p>
            <h3 className="text-xl font-bold font-heading text-metallo-navy mb-3">Join the Team</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Build your career in the world's fastest-growing manufacturing platform.
            </p>
            <span className="inline-flex items-center text-sm font-bold text-metallo-navy group-hover:text-metallo-gold-hover transition-colors">
              hr@metallo.com
              <span className="material-symbols-outlined text-lg ml-1">arrow_outward</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
