import type { Metadata } from "next";
import WireCables from "@/views/products/WireCables";

export const metadata: Metadata = {
  title: "Wire & Cables — LT Power, HT Power, Control Cables",
  description:
    "Industrial-grade wire and cables: LT power, HT power, and control cables. Catalogue-aligned naming with technical selection support for grid and plant applications.",
  openGraph: {
    title: "Wire & Cables — LT Power, HT Power, Control Cables | METALLO Industrial",
    description:
      "Industrial-grade wire and cables: LT power, HT power, and control cables. Catalogue-aligned naming with technical selection support for grid and plant applications.",
    url: "/products/wire-cables",
    type: "website",
  },
  alternates: { canonical: "/products/wire-cables" },
};

export default function Page() {
  return <WireCables />;
}
