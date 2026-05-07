import type { Metadata } from "next";
import WeldingConsumables from "@/views/products/WeldingConsumables";

export const metadata: Metadata = {
  title: "Welding Consumables — AWS & ASME Certified",
  description:
    "AWS and ASME-certified welding consumables: flux-cored wires, solid wires, and stick electrodes for critical industrial joints with standardised SOPs.",
  openGraph: {
    title: "Welding Consumables — AWS & ASME Certified | METALLO Industrial",
    description:
      "AWS and ASME-certified welding consumables: flux-cored wires, solid wires, and stick electrodes for critical industrial joints with standardised SOPs.",
    url: "/products/welding",
    type: "website",
  },
  alternates: { canonical: "/products/welding" },
};

export default function Page() {
  return <WeldingConsumables />;
}
