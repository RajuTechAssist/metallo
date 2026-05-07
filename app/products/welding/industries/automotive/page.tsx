import type { Metadata } from "next";
import WeldingAutomotive from "@/views/products/welding-industries/WeldingAutomotive";

export const metadata: Metadata = {
  title: "Automotive & Transportation Welding | Metallo × WB Alloys",
  description:
    "High-integrity welding consumables and advanced automation for global automotive OEMs and Tier-1 suppliers. MIG/TIG wires, robotic integration, and factory-scale fume extraction.",
  openGraph: {
    title: "Automotive & Transportation Welding | METALLO Industrial",
    description:
      "High-integrity welding consumables and advanced automation for global automotive OEMs and Tier-1 suppliers.",
    url: "/products/welding/industries/automotive",
    type: "website",
  },
  alternates: { canonical: "/products/welding/industries/automotive" },
};

export default function Page() {
  return <WeldingAutomotive />;
}
