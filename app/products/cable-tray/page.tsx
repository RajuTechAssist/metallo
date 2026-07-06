import type { Metadata } from "next";
import { Suspense } from "react";
import CableTray from "@/views/products/CableTray";

export const metadata: Metadata = {
  title: "Cable Trays — Ladder, Perforated, Embossed",
  description:
    "Cable management systems: ladder, perforated, and embossed cable trays. GI, SS, and aluminium options with custom sizes, coatings, and full accessory programmes.",
  openGraph: {
    title: "Cable Trays — Ladder, Perforated, Embossed | METALLO Industrial",
    description:
      "Cable management systems: ladder, perforated, and embossed cable trays. GI, SS, and aluminium options with custom sizes, coatings, and full accessory programmes.",
    url: "/products/cable-tray",
    type: "website",
  },
  alternates: { canonical: "/products/cable-tray" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <CableTray />
    </Suspense>
  );
}
