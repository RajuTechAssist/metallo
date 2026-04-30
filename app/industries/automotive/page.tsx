import type { Metadata } from "next";
import AutomotiveMobility from "@/views/industries/AutomotiveMobility";

export const metadata: Metadata = {
  title: "Automotive & Mobility Industry",
  description:
    "Steel, fasteners, and precision components for automotive OEMs and the broader mobility sector.",
  openGraph: {
    title: "Automotive & Mobility Industry | METALLO Industrial",
    description:
      "Steel, fasteners, and precision components for automotive OEMs and the broader mobility sector.",
    url: "/industries/automotive",
    type: "website",
  },
  alternates: { canonical: "/industries/automotive" },
};

export default function Page() {
  return <AutomotiveMobility />;
}
