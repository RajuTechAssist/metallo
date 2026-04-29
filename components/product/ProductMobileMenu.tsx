"use client";

import React from "react";

interface ProductMobileMenuProps {
  open: boolean;
  toggle: () => void;
  activeLabel: string;
  products: { name: string; subLabel: string }[];
  activeIdx: number;
  onSelect: (idx: number) => void;
}

const ProductMobileMenu: React.FC<ProductMobileMenuProps> = ({
  open,
  toggle,
  activeLabel,
  products,
  activeIdx,
  onSelect,
}) => (
  <div className="lg:hidden mb-6">
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-sm font-heading font-bold uppercase tracking-wider"
    >
      <span className="flex items-center gap-2">
        <span className="material-symbols-outlined text-lg text-yellow-500">
          menu
        </span>
        {activeLabel}
      </span>
      <span
        className={`material-symbols-outlined text-lg transition-transform ${
          open ? "rotate-180" : ""
        }`}
      >
        expand_more
      </span>
    </button>

    {open && (
      <div className="border border-slate-200 border-t-0 bg-white max-h-80 overflow-y-auto">
        {products.map((product, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full text-left px-4 py-3 text-sm font-sans transition-colors border-b border-slate-50 ${
              activeIdx === idx
                ? "bg-slate-900 text-white font-bold border-l-4 border-l-yellow-500"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span className="block font-heading font-semibold truncate">
              {product.name}
            </span>
            <span className="block text-xs opacity-60 mt-0.5">
              {product.subLabel}
            </span>
          </button>
        ))}
      </div>
    )}
  </div>
);

export default ProductMobileMenu;
