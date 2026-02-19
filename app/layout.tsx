import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ──────────────────────────────────────────────
   Typography – "Modern Industrial" style
   Manrope  → Headings  (--font-manrope)
   Inter    → Body text  (--font-inter)
   ────────────────────────────────────────────── */

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'METALLO — Powering Industrial India',
  description:
    "Metallo Industrial — India's integrated industrial supply-chain partner for steel, cables, welding, tools, precision, and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-white`}
      >
        <div className="flex flex-col min-h-screen text-metallo-navy font-sans">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
