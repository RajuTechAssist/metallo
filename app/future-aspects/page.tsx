import type { Metadata } from "next";
import { Suspense } from "react";
import FutureAspects from "@/views/FutureAspects";

export const metadata: Metadata = {
  title: "Next-Gen Industrial Expansion — Robotics, Aerospace & Defence",
  description:
    "Metallo Group's future aspects and next-generation industrial expansion verticals: intelligent robotics and automation systems, custom aerospace component manufacturing, and autonomous fighter drone technologies.",
  openGraph: {
    title: "Next-Gen Industrial Expansion — Robotics, Aerospace & Defence | METALLO",
    description:
      "Metallo Group's future aspects and next-generation industrial expansion verticals: intelligent robotics and automation systems, custom aerospace component manufacturing, and autonomous fighter drone technologies.",
    url: "/future-aspects",
    type: "website",
  },
  alternates: { canonical: "/future-aspects" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white" />}>
      <FutureAspects />
    </Suspense>
  );
}
