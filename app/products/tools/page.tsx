import type { Metadata } from "next";
import { Suspense } from "react";
import PowerTools from "@/views/products/PowerTools";

export const metadata: Metadata = {
  title: "Industrial Power Tools — Heavy-Duty Equipment",
  description:
    "Heavy-duty industrial power tools and motors meeting global safety standards. Globally sourced equipment for shop floors, fabrication yards, and project sites.",
  openGraph: {
    title: "Industrial Power Tools — Heavy-Duty Equipment | METALLO Industrial",
    description:
      "Heavy-duty industrial power tools and motors meeting global safety standards. Globally sourced equipment for shop floors, fabrication yards, and project sites.",
    url: "/products/tools",
    type: "website",
  },
  alternates: { canonical: "/products/tools" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <PowerTools />
    </Suspense>
  );
}
