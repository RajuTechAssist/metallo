import type { Metadata } from "next";
import WeldingHeavyEngineering from "@/views/products/welding-industries/WeldingHeavyEngineering";

export const metadata: Metadata = {
  title: "Heavy Engineering Welding | Metallo × WB Alloys",
  description:
    "High-deposition consumables, thermal engineering, and NDT expertise for pressure vessels, heavy machinery, and mega-scale fabrications.",
  openGraph: {
    title: "Heavy Engineering Welding | METALLO Industrial",
    description:
      "High-deposition consumables, thermal engineering, and NDT expertise for pressure vessels, heavy machinery, and mega-scale fabrications.",
    url: "/products/welding/industries/heavy-engineering",
    type: "website",
  },
  alternates: { canonical: "/products/welding/industries/heavy-engineering" },
};

export default function Page() {
  return <WeldingHeavyEngineering />;
}
