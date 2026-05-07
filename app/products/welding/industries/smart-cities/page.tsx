import type { Metadata } from "next";
import WeldingSmartCities from "@/views/products/welding-industries/WeldingSmartCities";

export const metadata: Metadata = {
  title: "Smart Cities & Urban Development Welding | Metallo × WB Alloys",
  description:
    "Architectural-grade welding consumables, urban-safe fume extraction, and site compliance testing for global smart city infrastructure.",
  openGraph: {
    title: "Smart Cities Welding | METALLO Industrial",
    description:
      "Architectural-grade welding consumables, urban-safe fume extraction, and site compliance testing for global smart city infrastructure.",
    url: "/products/welding/industries/smart-cities",
    type: "website",
  },
  alternates: { canonical: "/products/welding/industries/smart-cities" },
};

export default function Page() {
  return <WeldingSmartCities />;
}
