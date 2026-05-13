import type { Metadata } from "next";
import ProcessPiping from "@/views/products/ProcessPiping";

export const metadata: Metadata = {
  title: "Process Piping — Industrial Flow Systems",
  description:
    "Fabricated piping packages, modular skids, and bends for process flow systems. Includes QC, pilot plants, and logistics for end-to-end project delivery.",
  openGraph: {
    title: "Process Piping — Industrial Flow Systems | METALLO Industrial",
    description:
      "Fabricated piping packages, modular skids, and bends for process flow systems. Includes QC, pilot plants, and logistics for end-to-end project delivery.",
    url: "/products/process-piping",
    type: "website",
  },
  alternates: { canonical: "/products/process-piping" },
};

export default function Page() {
  return <ProcessPiping />;
}
