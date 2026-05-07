import type { Metadata } from "next";
import RailwaysDefence from "@/views/industries/RailwaysDefence";

export const metadata: Metadata = {
  title: "Railways & Defence Industry",
  description:
    "Materials and fabrication for railway infrastructure and defence-sector projects. Compliant steel, cabling, and structural components.",
  openGraph: {
    title: "Railways & Defence Industry | METALLO Industrial",
    description:
      "Materials and fabrication for railway infrastructure and defence-sector projects. Compliant steel, cabling, and structural components.",
    url: "/industries/railways-defence",
    type: "website",
  },
  alternates: { canonical: "/industries/railways-defence" },
};

export default function Page() {
  return <RailwaysDefence />;
}
