import type { Metadata } from "next";
import WeldingOilGas from "@/views/products/welding-industries/WeldingOilGas";

export const metadata: Metadata = {
  title: "Oil & Gas / Process Industries Welding | Metallo × WB Alloys",
  description:
    "ASME/API-certified welding consumables, specialized orbital technicians, and absolute NDT assurance for global refineries, pipelines, and offshore platforms.",
  openGraph: {
    title: "Oil & Gas Welding | METALLO Industrial",
    description:
      "ASME/API-certified welding consumables, specialized orbital technicians, and absolute NDT assurance for global refineries, pipelines, and offshore platforms.",
    url: "/products/welding/industries/oil-gas",
    type: "website",
  },
  alternates: { canonical: "/products/welding/industries/oil-gas" },
};

export default function Page() {
  return <WeldingOilGas />;
}
