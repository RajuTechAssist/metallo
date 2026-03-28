import React, { useEffect, useState } from "react";
import {
  CERTIFICATE_ARCHIVE,
  CERTIFICATION_INTRO_POINTS,
  type CertificateArchiveItem,
} from "../utils/certificates";

const Certifications: React.FC = () => {
  const [activeCertificate, setActiveCertificate] =
    useState<CertificateArchiveItem | null>(null);

  useEffect(() => {
    if (!activeCertificate) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCertificate]);

  return (
    <>
      <section id="certifications" className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="w-full">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-10 w-2 flex-none -skew-x-[18deg] bg-metallo-gold" />
              <div>
                <span className="block font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-metallo-gold-hover md:text-sm">
                  Compliance & Trust
                </span>
                <h2 className="mt-3 text-3xl font-bold text-metallo-navy md:text-5xl">
                  Certifications
                </h2>
              </div>
            </div>

            <ul className="mt-6 space-y-3 pl-5 text-sm leading-relaxed text-slate-600 md:text-base">
              {CERTIFICATION_INTRO_POINTS.map((point) => (
                <li
                  key={point}
                  className="list-disc marker:text-metallo-gold-hover"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {CERTIFICATE_ARCHIVE.map((item) => (
              <article key={item.id}>
                <div className="mb-5 flex items-start gap-4">
                  <span className="mt-1 h-9 w-2 flex-none -skew-x-[18deg] bg-metallo-gold" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Management system as per
                    </p>
                    <h3 className="text-2xl font-bold text-metallo-navy">
                      {item.systemTitle}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCertificate(item)}
                  className="group inline-block text-left transition duration-300 hover:-translate-y-1"
                >
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="h-72 sm:h-[400px] w-auto border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.08)] bg-white transition duration-300 group-hover:shadow-[0_22px_56px_rgba(15,23,42,0.12)] group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeCertificate ? (
        <div className="fixed inset-0 z-[140] bg-white/95 backdrop-blur-sm">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 md:px-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-metallo-gold-hover">
                  Certificate Viewer
                </p>
                <h3 className="mt-1 text-lg font-bold text-metallo-navy md:text-2xl">
                  {activeCertificate.systemTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-metallo-navy transition-colors hover:border-metallo-gold hover:text-metallo-gold-hover"
                aria-label="Close certificate viewer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div
              className="flex-1 overflow-auto px-4 py-6 md:px-8 md:py-8 flex justify-center items-center bg-slate-100"
            >
              <object
                data={activeCertificate.pdfUrl}
                type="application/pdf"
                className="w-full max-w-5xl h-full shadow-[0_24px_80px_rgba(15,23,42,0.14)] bg-white border border-slate-200"
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">picture_as_pdf</span>
                  <p className="text-slate-600 mb-4">Your browser does not support embedded PDFs.</p>
                  <a 
                    href={activeCertificate.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-metallo-gold text-metallo-navy px-6 py-3 font-bold uppercase tracking-wider hover:bg-metallo-gold-hover transition-colors shadow-lg"
                  >
                    <span className="material-symbols-outlined">download</span>
                    Download PDF Document
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Certifications;
