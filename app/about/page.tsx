import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Metallo",
  description:
    "Learn about Metallo Industrial — our mission, leadership, history, and how we power critical industries across the globe.",
  openGraph: {
    title: "About Metallo | METALLO Industrial",
    description:
      "Learn about Metallo Industrial — our mission, leadership, history, and how we power critical industries across the globe.",
    url: "/about",
    type: "website",
  },
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}
