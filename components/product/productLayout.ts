/* ═══════════════════════════════════════════════════════════════
   PRODUCT LAYOUT — Shared constants, utilities, and types
   for all product pages (Steel, PowerTools, Welding, etc.)
   ═══════════════════════════════════════════════════════════════ */

/** Standard container class used by every section on every product page */
export const CONTAINER = "mx-auto container px-4";

/** Framer Motion variants for detail panel transitions */
export const DETAIL_VARIANTS = {
  initial: { opacity: 0, x: 16 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: { opacity: 0, x: -12, transition: { duration: 0.15 } },
};

/** URL-safe slug from product name */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Category type used by all pages */
export interface CategoryConfig {
  key: string;
  label: string;
  icon: string;
  match: string | readonly string[];
}

/** QA item type used by all pages */
export interface QAItem {
  icon: string;
  title: string;
  desc: string;
}
