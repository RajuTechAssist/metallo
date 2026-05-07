import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-heading font-bold text-metallo-navy mb-4">
        404
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-metallo-navy text-white font-heading font-bold uppercase tracking-wider hover:bg-metallo-gold transition-colors"
      >
        Return Home
      </Link>
    </section>
  );
}
