import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  description:
    "METALLO Industrial — Powering Global Infrastructure with steel, wire & cables, cable trays, welding consumables, power tools, pipes, fabricated structures, and process equipments.",
  openGraph: {
    title: "METALLO — Powering Global Infrastructure",
    description:
      "Industrial manufacturing and supply chain solutions provider.",
    url: "/",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
