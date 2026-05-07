import type { Metadata } from "next";
import WhyMetallo from "@/views/WhyMetallo";

export const metadata: Metadata = {
  title: "Why Metallo",
  description:
    "Discover why leading EPC contractors, OEMs, and project owners choose Metallo for industrial sourcing — quality, compliance, and end-to-end project support.",
  openGraph: {
    title: "Why Metallo | METALLO Industrial",
    description:
      "Discover why leading EPC contractors, OEMs, and project owners choose Metallo for industrial sourcing — quality, compliance, and end-to-end project support.",
    url: "/why-metallo",
    type: "website",
  },
  alternates: { canonical: "/why-metallo" },
};

export default function Page() {
  return <WhyMetallo />;
}
