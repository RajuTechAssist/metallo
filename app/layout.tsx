import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryBasket from "@/components/InquiryBasket";
import SocialSidebar from "@/components/SocialSidebar";
import { QuoteProvider } from "@/contexts/QuoteContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://metalloindustrial.com"),
  title: {
    default: "METALLO — Powering Global Infrastructure",
    template: "%s | METALLO Industrial",
  },
  description:
    "Industrial manufacturing and supply chain solutions provider. Steel, wire & cables, cable trays, welding consumables, power tools, pipes, fabricated structures, and process equipments.",
  keywords: [
    "industrial supply",
    "steel manufacturing",
    "wire and cables",
    "cable tray",
    "welding consumables",
    "fabricated structures",
    "industrial India",
    "global infrastructure",
    "Metallo",
    "process equipment",
  ],
  authors: [{ name: "Metallo Industrial" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "METALLO Industrial",
    title: "METALLO — Powering Global Infrastructure",
    description:
      "Industrial manufacturing and supply chain solutions provider.",
    images: ["/banner1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "METALLO — Powering Global Infrastructure",
    description:
      "Industrial manufacturing and supply chain solutions provider.",
    images: ["/banner1.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <QuoteProvider>
          <Suspense fallback={null}>
            <div className="flex flex-col min-h-screen text-metallo-navy font-sans">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <InquiryBasket />
              <SocialSidebar />
            </div>
          </Suspense>
        </QuoteProvider>
      </body>
    </html>
  );
}
