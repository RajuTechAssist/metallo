import type { Metadata } from "next";
import WeldingGeneralFabrication from "@/views/products/welding-industries/WeldingGeneralFabrication";

export const metadata: Metadata = {
  title: "General Fabrication & Infrastructure Welding | Metallo × WB Alloys",
  description:
    "High-performance welding consumables, site equipment, and compliance testing for structural steelwork, bridges, and architectural assemblies.",
  openGraph: {
    title: "General Fabrication Welding | METALLO Industrial",
    description:
      "High-performance welding consumables, site equipment, and compliance testing for structural steelwork, bridges, and architectural assemblies.",
    url: "/products/welding/industries/general-fabrication",
    type: "website",
  },
  alternates: { canonical: "/products/welding/industries/general-fabrication" },
};

export default function Page() {
  return <WeldingGeneralFabrication />;
}
