"use client";

import React from "react";
import type { CategoryConfig } from "./productLayout";

interface ProductSidebarProps {
  activeCategory: CategoryConfig;
  products: { name: string; subLabel: string; thumbnail?: string }[];
  activeIdx: number;
  onSelect: (idx: number) => void;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({
  activeCategory,
  products,
  activeIdx,
  onSelect,
}) => (
  <aside className="hidden lg:block w-[260px] xl:w-[300px] shrink-0">
    <div className="sticky" style={{ top: "64px" }}>
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
        <span className="material-symbols-outlined text-lg text-yellow-500">
          {activeCategory.icon}
        </span>
        <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-slate-400">
          {activeCategory.label}
        </h3>
        <span className="ml-auto text-[10px] font-bold font-heading bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">
          {products.length} items
        </span>
      </div>

      {/* Product list */}
      <div
        className="flex flex-col space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1"
        style={{ scrollbarWidth: "thin" }}
      >
        {products.map((product, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full text-left p-2.5 transition-all duration-200 rounded-sm flex items-center gap-3 ${
              activeIdx === idx
                ? "bg-slate-900 text-white border-l-4 border-l-yellow-500 font-bold shadow-md"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent cursor-pointer"
            }`}
          >
            {/* Thumbnail */}
            <div
              className={`w-10 h-10 shrink-0 rounded-sm overflow-hidden border ${
                activeIdx === idx
                  ? "border-yellow-500/40"
                  : "border-slate-200"
              }`}
            >
              {product.thumbnail ? (
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    activeIdx === idx ? "bg-yellow-500/20" : "bg-slate-100"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-lg ${
                      activeIdx === idx ? "text-yellow-500" : "text-slate-400"
                    }`}
                  >
                    inventory_2
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <span
                className={`block text-[13px] font-heading leading-tight truncate ${
                  activeIdx === idx ? "font-bold" : "font-semibold"
                }`}
              >
                {product.name}
              </span>
              <span
                className={`block text-[10px] mt-0.5 ${
                  activeIdx === idx ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {product.subLabel}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default ProductSidebar;
