"use client";

import React from "react";
import { CONTAINER } from "./productLayout";
import type { CategoryConfig } from "./productLayout";

interface ProductCategoryNavProps {
  categories: readonly CategoryConfig[];
  activeKey: string;
  onSelect: (key: string) => void;
  certBadge?: string;
}

const ProductCategoryNav: React.FC<ProductCategoryNavProps> = ({
  categories,
  activeKey,
  onSelect,
  certBadge,
}) => (
  <nav className="sticky top-0 md:top-14 z-40 bg-white border-b border-slate-200 shadow-sm">
    <div className={CONTAINER}>
      <div
        className="flex items-center gap-1 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`relative whitespace-nowrap px-3 lg:px-4 py-4 text-[13px] font-heading font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
              activeKey === cat.key
                ? "text-yellow-600 border-b-2 border-yellow-500"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span className="material-symbols-outlined text-base hidden sm:inline">
              {cat.icon}
            </span>
            {cat.label}
          </button>
        ))}

        {certBadge && (
          <div className="ml-auto hidden lg:flex items-center gap-2 text-xs text-slate-400 font-sans shrink-0 pl-4">
            <span className="material-symbols-outlined text-sm text-yellow-500">
              verified
            </span>
            {certBadge}
          </div>
        )}
      </div>
    </div>
  </nav>
);

export default ProductCategoryNav;
