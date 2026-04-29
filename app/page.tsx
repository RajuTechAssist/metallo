import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  description:
    "METALLO Industrial — Powering Industrial India with steel, wire & cables, cable trays, welding consumables, power tools, pipes, and fabricated structures.",
  openGraph: {
    title: "METALLO — Powering Industrial India",
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
