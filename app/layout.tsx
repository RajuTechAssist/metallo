import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

/* ──────────────────────────────────────────────
   Typography – "Modern Industrial" style
   Manrope  → Headings  (--font-manrope)
   Inter    → Body text  (--font-inter)
   ────────────────────────────────────────────── */

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  // Variable font — all weights available automatically (200-800)
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Variable font — all weights available automatically (100-900)
});

export const metadata: Metadata = {
  title: 'METALLO — Powering Industrial India',
  description:
    'Metallo Industrial — India\'s integrated industrial supply-chain partner for steel, cables, welding, tools, precision, and automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
