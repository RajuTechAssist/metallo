"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useQuote, type QuoteProduct } from '@/contexts/QuoteContext';

/* ═══════════════════════════════════════════════════════════════
   INQUIRY BASKET SIDEBAR + FLOATING BADGE + SUCCESS STATE
   ═══════════════════════════════════════════════════════════════ */

/* ── Frequently-paired suggestion pool (subset of catalog) ── */

const PAIRED_POOL: QuoteProduct[] = [
  {
    id: 'g1',
    name: 'Spiral Wound Gasket',
    category: 'Gaskets & Seals',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
    grades: ['SS 304 + Graphite', 'SS 316 + Graphite'],
    specs: ['ASME B16.20', '150#–2500#', 'SS+Graphite'],
    standard: 'ASME B16.20',
  },
  {
    id: 'ft1',
    name: '90° / 45° Elbow',
    category: 'Fittings',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    specs: ['ASME B16.9', 'Seamless/Welded', 'LR/SR'],
    standard: 'ASME B16.9',
  },
  {
    id: 'f1',
    name: 'Weld Neck Flange',
    category: 'Flanges',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    specs: ['ASME B16.5', '150#–2500#', 'WNRF'],
    standard: 'ASME B16.5',
  },
  {
    id: 'p1',
    name: 'SS Seamless Pipe',
    category: 'Pipes & Tubes',
    image: 'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
    grades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'SS 904L'],
    specs: ['ASTM A312', 'Seamless', 'Sch 10-160'],
    standard: 'ASTM A312',
  },
  {
    id: 'sp1',
    name: 'SS HR Plate',
    category: 'Plates & Sheets',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
    grades: ['SS 304', 'SS 316L', 'SS 310S'],
    specs: ['5mm–100mm', 'Hot Rolled', 'ASTM A240'],
    standard: 'ASTM A240',
  },
];

const PAIRED_ICONS: Record<string, string> = {
  'Gaskets & Seals': 'settings',
  'Fittings': 'turn_right',
  'Flanges': 'plumbing',
  'Pipes & Tubes': 'valve',
  'Plates & Sheets': 'layers',
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const InquiryBasket: React.FC = () => {
  const {
    items, basketOpen, submitted, referenceNumber, projectDetails,
    removeFromQuote, updateQuantity, clearQuote,
    closeBasket, openBasket, addToQuote,
    isInQuote, totalUnits, submitQuote, resetQuote, setProjectDetails,
  } = useQuote();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const ACCEPTED_TYPES = '.pdf,.xlsx,.xls,.csv,.doc,.docx,.dwg,.dxf,.zip';
  const MAX_FILE_SIZE_MB = 25;

  const addFiles = (newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles).filter(f => f.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
    setProjectDetails(prev => ({
      ...prev,
      attachedFiles: [...prev.attachedFiles, ...arr].slice(0, 5), // max 5 files
    }));
  };

  const removeFile = (idx: number) => {
    setProjectDetails(prev => ({
      ...prev,
      attachedFiles: prev.attachedFiles.filter((_, i) => i !== idx),
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  /* ── Lock body scroll when basket is open ── */
  useEffect(() => {
    if (basketOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [basketOpen]);

  /* ── Escape key to close ── */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && basketOpen) closeBasket();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [basketOpen, closeBasket]);

  /* ── Dynamic "frequently paired" suggestions ── */
  const suggestions = useMemo(() => {
    const inCartCategories = new Set(items.map(i => i.product.category));
    const inCartIds = new Set(items.map(i => i.product.id));

    // Prefer items from categories NOT already in the cart
    const fromOtherCategories = PAIRED_POOL.filter(
      p => !inCartIds.has(p.id) && !inCartCategories.has(p.category)
    );
    const remaining = PAIRED_POOL.filter(
      p => !inCartIds.has(p.id) && inCartCategories.has(p.category)
    );
    return [...fromOtherCategories, ...remaining].slice(0, 3);
  }, [items]);

  /* ── Submit handler ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    submitQuote(projectDetails);
  };

  /* ── Download summary as text file ── */
  const downloadSummary = () => {
    const lines = [
      '═══════════════════════════════════════════',
      '  METALLO — Inquiry Summary',
      '═══════════════════════════════════════════',
      '',
      `Reference:  ${referenceNumber}`,
      `Date:       ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`,
      '',
      '───────────────────────────────────────────',
      '  PROJECT DETAILS',
      '───────────────────────────────────────────',
      `Name:       ${projectDetails.fullName}`,
      `Email:      ${projectDetails.businessEmail}`,
      `Project:    ${projectDetails.projectName}`,
      ...(projectDetails.specificRequirements ? [`Requirements: ${projectDetails.specificRequirements}`] : []),
      ...(projectDetails.attachedFiles.length > 0 ? [`Attached:   ${projectDetails.attachedFiles.map(f => f.name).join(', ')}`] : []),
      '',
      '───────────────────────────────────────────',
      '  ITEMS',
      '───────────────────────────────────────────',
      ...items.map((item, i) =>
        `${i + 1}. ${item.product.name}\n   Grade: ${item.selectedGrade}  |  Qty: ${item.quantity} ${item.unit}  |  Std: ${item.product.standard}`
      ),
      '',
      `Total Units: ${totalUnits}`,
      '',
      '───────────────────────────────────────────',
      'Our engineering team will review your project',
      'details and respond with a formal quote',
      'within 24 business hours.',
      '═══════════════════════════════════════════',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `metallo-inquiry-${referenceNumber.replace('#', '')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ═══════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════ */

  return (
    <>
      {/* ── Floating basket badge (shown when closed + items exist) ── */}
      {!basketOpen && items.length > 0 && !submitted && (
        <button
          onClick={openBasket}
          className="fixed bottom-6 right-6 z-150 flex items-center gap-2.5 px-5 py-3.5 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-all group"
          style={{ boxShadow: '0 8px 32px rgba(234, 179, 8, 0.35)' }}
        >
          <span className="material-symbols-outlined text-xl">shopping_cart</span>
          <span className="hidden sm:inline">Quote Basket</span>
          <span className="inline-flex items-center justify-center w-6 h-6 bg-metallo-navy text-white text-xs font-bold rounded-full">
            {items.length}
          </span>
        </button>
      )}

      {/* ── Overlay ── */}
      <div
        className={`fixed inset-0 z-200 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          basketOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={submitted ? resetQuote : closeBasket}
      />

      {/* ── Sidebar Panel ── */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-201 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          basketOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {submitted ? (
          /* ═══════════════════════════════════════
             SUCCESS STATE
             ═══════════════════════════════════════ */
          <div className="flex-1 flex flex-col">
            {/* Close */}
            <div className="flex justify-end p-4 shrink-0">
              <button
                onClick={resetQuote}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-metallo-navy transition-colors rounded-full hover:bg-gray-100"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
              {/* Green checkmark */}
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-green-600"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>

              <h2 className="text-2xl font-heading font-bold text-metallo-navy text-center mb-2">
                Inquiry Submitted Successfully!
              </h2>
              <p className="text-sm text-gray-500 font-sans mb-1">Reference Number:</p>
              <span className="text-lg font-bold text-metallo-gold font-heading mb-8">
                {referenceNumber}
              </span>

              {/* Info card */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-8 w-full max-w-sm">
                <p className="text-sm text-gray-600 font-sans text-center leading-relaxed">
                  Our engineering team will review your project details and respond with a formal quote within{' '}
                  <strong className="text-metallo-navy">24 business hours</strong>.
                </p>
              </div>

              {/* Back to Catalog */}
              <button
                onClick={resetQuote}
                className="w-full max-w-sm py-3.5 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-colors flex items-center justify-center gap-2"
              >
                Back to Catalog
              </button>

              {/* Download Summary */}
              <button
                onClick={downloadSummary}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-metallo-navy hover:text-metallo-gold transition-colors font-heading uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Download Summary
              </button>

              {/* Fine print */}
              <p className="text-xs text-gray-400 font-sans mt-auto pt-8 text-center italic">
                A confirmation email has been sent to your business email address.
              </p>
            </div>
          </div>
        ) : (
          /* ═══════════════════════════════════════
             BASKET STATE
             ═══════════════════════════════════════ */
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-100 shrink-0">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-heading font-bold text-metallo-navy">
                    Your Inquiry Basket
                  </h2>
                  <p className="text-sm text-gray-500 font-sans mt-0.5">
                    Review items and provide project details
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeBasket}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-metallo-navy transition-colors rounded-full hover:bg-gray-100 -mt-1 -mr-2"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* ── Scrollable content ── */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

              {/* ─────── SELECTED ITEMS ─────── */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-metallo-gold-hover uppercase tracking-[0.15em] font-heading">
                    Selected Items ({items.length})
                  </h3>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={clearQuote}
                      className="text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-wide transition-colors font-heading"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  /* Empty state */
                  <div className="bg-gray-50 border border-dashed border-gray-200 rounded-lg p-8 text-center">
                    <span className="material-symbols-outlined text-4xl text-gray-300 mb-2 block">
                      add_shopping_cart
                    </span>
                    <p className="text-sm text-gray-400 font-sans">
                      No items yet. Browse the catalog and add products to your inquiry.
                    </p>
                  </div>
                ) : (
                  /* Item cards */
                  <div className="space-y-3">
                    {items.map(item => (
                      <div
                        key={item.product.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex gap-3">
                          {/* Thumbnail */}
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-bold text-metallo-navy font-heading leading-snug truncate">
                                {item.product.name}
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeFromQuote(item.product.id)}
                                className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                                title="Remove item"
                              >
                                <span className="material-symbols-outlined text-lg">close</span>
                              </button>
                            </div>
                            <p className="text-[11px] text-gray-400 font-sans mt-0.5">
                              Grade: {item.selectedGrade}, {item.product.standard}
                            </p>
                          </div>
                        </div>

                        {/* Quantity stepper */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="inline-flex items-center border border-gray-200 rounded">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-metallo-navy hover:bg-gray-50 transition-colors disabled:opacity-30"
                              disabled={item.quantity <= 1}
                            >
                              <span className="material-symbols-outlined text-base">remove</span>
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={e =>
                                updateQuantity(item.product.id, parseInt(e.target.value) || 1)
                              }
                              className="w-12 h-8 text-center text-sm font-bold text-metallo-navy border-x border-gray-200 font-sans outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              min={1}
                            />
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-metallo-navy hover:bg-gray-50 transition-colors"
                            >
                              <span className="material-symbols-outlined text-base">add</span>
                            </button>
                          </div>
                          <span className="text-xs text-gray-400 font-sans">{item.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ─────── FREQUENTLY PAIRED ─────── */}
              {suggestions.length > 0 && items.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-metallo-gold-hover uppercase tracking-[0.15em] font-heading mb-4">
                    Frequently Paired
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {suggestions.map(s => (
                      <div
                        key={s.id}
                        className="border border-gray-200 rounded-lg p-3 text-center hover:border-metallo-gold/40 transition-colors"
                      >
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl text-gray-500">
                            {PAIRED_ICONS[s.category] || 'category'}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-metallo-navy font-heading leading-tight mb-2 line-clamp-2">
                          {s.name}
                        </p>
                        {isInQuote(s.id) ? (
                          <span className="block w-full py-1.5 text-[10px] font-bold uppercase tracking-wider bg-metallo-navy text-white rounded font-heading">
                            Added
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => addToQuote(s)}
                            className="w-full py-1.5 text-[10px] font-bold uppercase tracking-wider bg-metallo-gold text-metallo-navy hover:bg-metallo-gold-hover transition-colors rounded font-heading"
                          >
                            ADD
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─────── PROJECT DETAILS ─────── */}
              {items.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-metallo-gold-hover uppercase tracking-[0.15em] font-heading mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 font-heading">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={projectDetails.fullName}
                          onChange={e =>
                            setProjectDetails(prev => ({ ...prev, fullName: e.target.value }))
                          }
                          placeholder="John Doe"
                          className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm font-sans text-metallo-navy placeholder-gray-300 focus:border-metallo-gold focus:ring-1 focus:ring-metallo-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 font-heading">
                          Business Email
                        </label>
                        <input
                          type="email"
                          required
                          value={projectDetails.businessEmail}
                          onChange={e =>
                            setProjectDetails(prev => ({
                              ...prev,
                              businessEmail: e.target.value,
                            }))
                          }
                          placeholder="john@company.com"
                          className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm font-sans text-metallo-navy placeholder-gray-300 focus:border-metallo-gold focus:ring-1 focus:ring-metallo-gold outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 font-heading">
                        Project Name
                      </label>
                      <input
                        type="text"
                        required
                        value={projectDetails.projectName}
                        onChange={e =>
                          setProjectDetails(prev => ({ ...prev, projectName: e.target.value }))
                        }
                        placeholder="e.g. Pipeline Expansion Phase II"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm font-sans text-metallo-navy placeholder-gray-300 focus:border-metallo-gold focus:ring-1 focus:ring-metallo-gold outline-none transition-colors"
                      />
                    </div>

                    {/* Specific Requirements */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 font-heading">
                        Specific Requirements <span className="font-normal text-gray-300">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={projectDetails.specificRequirements}
                        onChange={e =>
                          setProjectDetails(prev => ({ ...prev, specificRequirements: e.target.value }))
                        }
                        placeholder="e.g. Need IBR approved, specific wall thickness, delivery to Jamnagar site..."
                        className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm font-sans text-metallo-navy placeholder-gray-300 focus:border-metallo-gold focus:ring-1 focus:ring-metallo-gold outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* File Upload — BOM / BOQ */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 font-heading">
                        Upload BOM / BOQ <span className="font-normal text-gray-300">(optional, max 5 files)</span>
                      </label>

                      {/* Drop zone */}
                      <div
                        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={e => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                          dragOver
                            ? 'border-metallo-gold bg-metallo-gold/5'
                            : 'border-gray-200 hover:border-metallo-gold/50 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept={ACCEPTED_TYPES}
                          onChange={e => { if (e.target.files) addFiles(e.target.files); e.target.value = ''; }}
                          className="hidden"
                        />
                        <span className="material-symbols-outlined text-2xl text-gray-300 mb-1 block">upload_file</span>
                        <p className="text-xs text-gray-400 font-sans">
                          <span className="text-metallo-gold font-bold">Click to browse</span> or drag & drop
                        </p>
                        <p className="text-[10px] text-gray-300 font-sans mt-1">
                          PDF, Excel, CSV, DWG, Word, ZIP — up to {MAX_FILE_SIZE_MB}MB each
                        </p>
                      </div>

                      {/* File list */}
                      {projectDetails.attachedFiles.length > 0 && (
                        <div className="mt-2 space-y-1.5">
                          {projectDetails.attachedFiles.map((file, idx) => (
                            <div key={`${file.name}-${idx}`} className="flex items-center gap-2 bg-gray-50 rounded px-3 py-2">
                              <span className="material-symbols-outlined text-base text-metallo-gold">description</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-metallo-navy font-sans truncate">{file.name}</p>
                                <p className="text-[10px] text-gray-400 font-sans">{formatFileSize(file.size)}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                              >
                                <span className="material-symbols-outlined text-sm">close</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Honeypot (anti-spam) */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ── Sticky footer — Summary + CTA ── */}
            {items.length > 0 && (
              <div className="shrink-0 border-t border-gray-100 px-6 py-4 bg-white">
                {/* Summary row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-metallo-navy font-heading">Summary</span>
                  <span className="text-sm font-bold text-metallo-navy font-heading">
                    {totalUnits} Total {totalUnits === 1 ? 'Unit' : 'Units'}
                  </span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Quote
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>

                <p className="text-[10px] text-gray-400 font-sans text-center mt-3 italic">
                  Our engineers will respond with a formal quote within 24 business hours.
                </p>
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default InquiryBasket;
