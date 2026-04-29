"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

/* ═══════════════════════════════════════════════════════════════
   QUOTE / INQUIRY BASKET — Global State
   ═══════════════════════════════════════════════════════════════ */

/* ─── Types ─────────────────────────────────────────────── */

export interface QuoteProduct {
  id: string;
  name: string;
  category: string;
  image: string;          // primary product image for thumbnail
  grades: string[];       // available grades
  specs: string[];        // specification badges
  standard: string;       // e.g. "ASTM A312"
}

export interface QuoteItem {
  product: QuoteProduct;
  quantity: number;
  unit: string;           // "Meters" | "Kg" | "Units"
  selectedGrade: string;  // chosen grade for this line item
}

export interface ProjectDetails {
  fullName: string;
  businessEmail: string;
  projectName: string;
  specificRequirements: string;
  attachedFiles: File[];
}

interface QuoteContextType {
  /* state */
  items: QuoteItem[];
  basketOpen: boolean;
  submitted: boolean;
  referenceNumber: string;
  projectDetails: ProjectDetails;
  totalUnits: number;

  /* actions */
  addToQuote: (product: QuoteProduct) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  updateGrade: (productId: string, grade: string) => void;
  clearQuote: () => void;
  openBasket: () => void;
  closeBasket: () => void;
  isInQuote: (productId: string) => boolean;
  submitQuote: (details: ProjectDetails) => void;
  resetQuote: () => void;
  setProjectDetails: React.Dispatch<React.SetStateAction<ProjectDetails>>;
}

/* ─── Helpers ───────────────────────────────────────────── */

export function getUnitForCategory(category: string): string {
  if (category === 'Pipes & Tubes') return 'Meters';
  if (category === 'Plates & Sheets') return 'Kg';
  return 'Units';
}

/* ─── Context ───────────────────────────────────────────── */

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [basketOpen, setBasketOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    fullName: '',
    businessEmail: '',
    projectName: '',
    specificRequirements: '',
    attachedFiles: [],
  });

  /* ── Add / increment ────────────────── */
  const addToQuote = useCallback((product: QuoteProduct) => {
    // Clear any stale submitted state so basket shows items, not success
    setSubmitted(false);
    setReferenceNumber('');

    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          unit: getUnitForCategory(product.category),
          selectedGrade: product.grades[0] || '',
        },
      ];
    });
    setBasketOpen(true);
  }, []);

  /* ── Remove ─────────────────────────── */
  const removeFromQuote = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  /* ── Quantity ────────────────────────── */
  const updateQuantity = useCallback((productId: string, qty: number) => {
    if (qty < 1) return;
    setItems(prev =>
      prev.map(i => (i.product.id === productId ? { ...i, quantity: qty } : i))
    );
  }, []);

  /* ── Grade ───────────────────────────── */
  const updateGrade = useCallback((productId: string, grade: string) => {
    setItems(prev =>
      prev.map(i => (i.product.id === productId ? { ...i, selectedGrade: grade } : i))
    );
  }, []);

  /* ── Clear all items ─────────────────── */
  const clearQuote = useCallback(() => setItems([]), []);

  /* ── Check membership ────────────────── */
  const isInQuote = useCallback(
    (productId: string) => items.some(i => i.product.id === productId),
    [items]
  );

  /* ── Derived total ───────────────────── */
  const totalUnits = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  /* ── Submit ──────────────────────────── */
  const submitQuote = useCallback((_details: ProjectDetails) => {
    const ref = `#MET-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
  }, []);

  /* ── Full reset (after success) ──────── */
  const resetQuote = useCallback(() => {
    setItems([]);
    setSubmitted(false);
    setReferenceNumber('');
    setProjectDetails({ fullName: '', businessEmail: '', projectName: '', specificRequirements: '', attachedFiles: [] });
    setBasketOpen(false);
  }, []);

  return (
    <QuoteContext.Provider
      value={{
        items,
        basketOpen,
        submitted,
        referenceNumber,
        projectDetails,
        totalUnits,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        updateGrade,
        clearQuote,
        openBasket: () => setBasketOpen(true),
        closeBasket: () => setBasketOpen(false),
        isInQuote,
        submitQuote,
        resetQuote,
        setProjectDetails,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

/* ─── Hook ──────────────────────────────────────────────── */

export function useQuote(): QuoteContextType {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within a <QuoteProvider>');
  return ctx;
}
