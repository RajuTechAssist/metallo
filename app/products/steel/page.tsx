import type { Metadata } from "next";
import Steel from "@/views/products/Steel";

export const metadata: Metadata = {
  title: "Steel Products — Pipes, Plates, Fittings, Flanges, Fasteners",
  description:
    "IS:2062 and ASTM-compliant steel products: pipes, tubes, plates, sheets, flanges, pipe fittings, fasteners, and gaskets. Custom fabricated spools with 100% PMI batch testing.",
  openGraph: {
    title: "Steel Products — Pipes, Plates, Fittings, Flanges, Fasteners | METALLO Industrial",
    description:
      "IS:2062 and ASTM-compliant steel products: pipes, tubes, plates, sheets, flanges, pipe fittings, fasteners, and gaskets. Custom fabricated spools with 100% PMI batch testing.",
    url: "/products/steel",
    type: "website",
  },
  alternates: { canonical: "/products/steel" },
};

export default function Page() {
  return <Steel />;
}
