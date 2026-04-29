import type { Metadata } from "next";
import FabricatedStructures from "@/views/products/FabricatedStructures";

export const metadata: Metadata = {
  title: "Fabricated Structures — PEB, Roofing, Cladding",
  description:
    "Engineered steel systems: pre-engineered buildings (PEB), framing, roofing, cladding, decking, and workshop structural fabrication for industrial projects.",
  openGraph: {
    title: "Fabricated Structures — PEB, Roofing, Cladding | METALLO Industrial",
    description:
      "Engineered steel systems: pre-engineered buildings (PEB), framing, roofing, cladding, decking, and workshop structural fabrication for industrial projects.",
    url: "/products/fabricated-structures",
    type: "website",
  },
  alternates: { canonical: "/products/fabricated-structures" },
};

export default function Page() {
  return <FabricatedStructures />;
}
