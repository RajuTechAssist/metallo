import type { Metadata } from "next";
import PowerTransmission from "@/views/industries/PowerTransmission";

export const metadata: Metadata = {
  title: "Power Transmission Industry",
  description:
    "Cables, structures, and industrial supplies for power transmission and distribution networks. Grid-grade materials and project execution support.",
  openGraph: {
    title: "Power Transmission Industry | METALLO Industrial",
    description:
      "Cables, structures, and industrial supplies for power transmission and distribution networks. Grid-grade materials and project execution support.",
    url: "/industries/power-transmission",
    type: "website",
  },
  alternates: { canonical: "/industries/power-transmission" },
};

export default function Page() {
  return <PowerTransmission />;
}
