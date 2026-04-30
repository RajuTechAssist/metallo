import type { Metadata } from "next";
import HeavyEngineering from "@/views/industries/HeavyEngineering";

export const metadata: Metadata = {
  title: "Heavy Engineering Industry",
  description:
    "Heavy-engineering supply: structural steel, fabricated assemblies, fasteners, and welding consumables for cranes, machinery, and capital equipment manufacturers.",
  openGraph: {
    title: "Heavy Engineering Industry | METALLO Industrial",
    description:
      "Heavy-engineering supply: structural steel, fabricated assemblies, fasteners, and welding consumables for cranes, machinery, and capital equipment manufacturers.",
    url: "/industries/heavy-engineering",
    type: "website",
  },
  alternates: { canonical: "/industries/heavy-engineering" },
};

export default function Page() {
  return <HeavyEngineering />;
}
