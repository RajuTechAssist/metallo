"use client";

import React from "react";
import Image from "next/image";
import { CONTAINER } from "../components/product/productLayout";

const MetalloSymbol: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className={CONTAINER}>
        <div className="mb-12">
          <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">
            The Metallo Symbol
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-metallo-navy mb-2">
            The Unbroken Loop of Progress
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 justify-between">
          {/* Globe "O" Symbol from Logo */}
          <div className="flex-shrink-0 relative group flex flex-col items-center md:items-start lg:ml-12">
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <Image
                src="/logo-icon.svg"
                alt="Metallo Globe Symbol"
                width={320}
                height={320}
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                Continuity in Motion
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <div className="space-y-6 text-gray-600 max-w-3xl">
              <p>
                At the heart of the Metallo identity lies a simple yet powerful
                symbol &mdash;{" "}
                <strong className="text-metallo-navy font-semibold">
                  the Circular Railway Track.
                </strong>
              </p>
              <p>
                In heavy infrastructure, a railway track represents strength,
                direction, and engineered precision. But a circular track
                carries a deeper meaning:{" "}
                <strong className="text-metallo-navy font-semibold">
                  continuity without interruption.
                </strong>
              </p>
              <p>
                It reflects Metallo's philosophy of delivering 360-degree
                industrial solutions, where every stage of the supply chain is
                connected, coordinated, and constantly moving forward.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm">
                  <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1 font-bold">
                    The Infinite Cycle
                  </strong>
                  <span className="text-sm">
                    From raw material sourcing to finished infrastructure,
                    Metallo supports every stage of the industrial lifecycle
                    &mdash; creating a complete, end-to-end ecosystem for
                    engineered metal solutions.
                  </span>
                </li>
                <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm">
                  <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1 font-bold">
                    Uninterrupted Momentum
                  </strong>
                  <span className="text-sm">
                    Just as a train on a continuous track never stops moving,
                    Metallo ensures a resilient supply chain that keeps projects
                    progressing without disruption.
                  </span>
                </li>
                <li className="bg-gray-50 p-4 rounded border border-gray-100 shadow-sm sm:col-span-2">
                  <strong className="block text-metallo-navy font-heading uppercase text-sm mb-1 font-bold">
                    Boundless Connectivity
                  </strong>
                  <span className="text-sm">
                    Like a railway network connecting cities and industries,
                    Metallo connects multiple industrial verticals &mdash; from
                    steel and structural components to electrical infrastructure
                    and industrial tools &mdash; into a unified platform.
                  </span>
                </li>
              </ul>
              <p className="font-bold text-metallo-navy mt-6">
                The Metallo symbol represents our commitment to delivering
                seamless, 360-degree solutions that keep industries moving
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetalloSymbol;
