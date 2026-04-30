import type { Metadata } from "next";
import OilGasProcessIndustries from "@/views/industries/OilGasProcessIndustries";

export const metadata: Metadata = {
  title: "Oil, Gas & Process Industries",
  description:
    "Compliant materials and fabrication for oil, gas, refineries, and process plants. Pipes, flanges, gaskets, and welding consumables to API and ASME standards.",
  openGraph: {
    title: "Oil, Gas & Process Industries | METALLO Industrial",
    description:
      "Compliant materials and fabrication for oil, gas, refineries, and process plants. Pipes, flanges, gaskets, and welding consumables to API and ASME standards.",
    url: "/industries/oil-gas",
    type: "website",
  },
  alternates: { canonical: "/industries/oil-gas" },
};

export default function Page() {
  return <OilGasProcessIndustries />;
}
