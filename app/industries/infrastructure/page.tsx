import type { Metadata } from "next";
import InfrastructureConstruction from "@/views/industries/InfrastructureConstruction";

export const metadata: Metadata = {
  title: "Infrastructure & Construction Industry",
  description:
    "Metallo's industrial supply solutions for infrastructure, construction, and civil engineering projects across India.",
  openGraph: {
    title: "Infrastructure & Construction Industry | METALLO Industrial",
    description:
      "Metallo's industrial supply solutions for infrastructure, construction, and civil engineering projects across India.",
    url: "/industries/infrastructure",
    type: "website",
  },
  alternates: { canonical: "/industries/infrastructure" },
};

export default function Page() {
  return <InfrastructureConstruction />;
}
