import type { Metadata } from "next";
import Pipes from "@/views/products/Pipes";

export const metadata: Metadata = {
  title: "Industrial Pipes — Process Flow Systems",
  description:
    "Fabricated piping packages, modular skids, and bends for process flow systems. Includes QC, pilot plants, and logistics for end-to-end project delivery.",
  openGraph: {
    title: "Industrial Pipes — Process Flow Systems | METALLO Industrial",
    description:
      "Fabricated piping packages, modular skids, and bends for process flow systems. Includes QC, pilot plants, and logistics for end-to-end project delivery.",
    url: "/products/pipes",
    type: "website",
  },
  alternates: { canonical: "/products/pipes" },
};

export default function Page() {
  return <Pipes />;
}
