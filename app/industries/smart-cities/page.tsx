import type { Metadata } from "next";
import SmartCities from "@/views/industries/SmartCities";

export const metadata: Metadata = {
  title: "Smart Cities Industry",
  description:
    "Cable management, power distribution, and structural systems for smart city projects: street furniture, lighting, communication, and intelligent infrastructure.",
  openGraph: {
    title: "Smart Cities Industry | METALLO Industrial",
    description:
      "Cable management, power distribution, and structural systems for smart city projects: street furniture, lighting, communication, and intelligent infrastructure.",
    url: "/industries/smart-cities",
    type: "website",
  },
  alternates: { canonical: "/industries/smart-cities" },
};

export default function Page() {
  return <SmartCities />;
}
