import type { Metadata } from "next";
import { Suspense } from "react";
import ProcessEquipments from "@/views/products/ProcessEquipments";

export const metadata: Metadata = {
  title: "Process Equipments — Heat Exchangers, Boiler Drums, Pressure Vessels",
  description:
    "Metallo EquipWorks Series: high-pressure heat exchangers, process gas waste heat boilers, feedwater heaters, surface condensers, and boiler drums for refining, petrochemical, fertilizer, and power generation projects.",
  openGraph: {
    title: "Process Equipments — Heat Exchangers, Boiler Drums, Pressure Vessels | METALLO Industrial",
    description:
      "Metallo EquipWorks Series: high-pressure heat exchangers, process gas waste heat boilers, feedwater heaters, surface condensers, and boiler drums for refining, petrochemical, fertilizer, and power generation projects.",
    url: "/products/process-equipments",
    type: "website",
  },
  alternates: { canonical: "/products/process-equipments" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ProcessEquipments />
    </Suspense>
  );
}
