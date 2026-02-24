import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQuote } from '../../contexts/QuoteContext';

/* ═══════════════════════════════════════════════════════════════
   STEEL PRODUCT DATA  (from Metallo_Steel_Product_Master_v2.csv)
   ═══════════════════════════════════════════════════════════════ */

interface SteelProduct {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  grades: string[];
  standard: string;
  type: string;
  specs: string[];       // badge labels
  application: string;
  images: string[];      // product photos
}

const STEEL_PRODUCTS: SteelProduct[] = [
  // ── Pipes & Tubes ──────────────────────
  {
    id: 'p1',
    name: 'SS Seamless Pipe',
    category: 'Pipes & Tubes',
    subCategory: 'Seamless Pipes',
    description: 'Made from a solid round steel billet which is heated and pushed or pulled over a form until shaped into a hollow tube. No weld seam.',
    grades: ['SS 304', 'SS 304L', 'SS 316', 'SS 316L', 'SS 904L'],
    standard: 'ASTM A312',
    type: 'Seamless',
    specs: ['ASTM A312', 'Seamless', 'Sch 10-160'],
    application: 'Oil & Gas, Chemical Processing, Power Plants',
    images: [
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'p2',
    name: 'SS Welded / ERW Pipe',
    category: 'Pipes & Tubes',
    subCategory: 'Welded Pipes',
    description: 'Made by rolling a steel plate/sheet into a cylinder and welding the seam. Cost-effective alternative to seamless.',
    grades: ['SS 304', 'SS 316', 'SS 202'],
    standard: 'ASTM A312',
    type: 'Welded',
    specs: ['ASTM A312', 'ASTM A358', 'Welded/ERW'],
    application: 'Water Treatment, General Piping, Structural',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'p3',
    name: 'SS Instrumentation Tube',
    category: 'Pipes & Tubes',
    subCategory: 'Tubes',
    description: 'Smaller, thinner, and more precise than pipes. Used for high-pressure hydraulic lines and instrument connections.',
    grades: ['SS 304', 'SS 316L', '6Mo'],
    standard: 'ASTM A269',
    type: 'Seamless',
    specs: ['ASTM A269', 'Seamless', 'OD 6-25mm'],
    application: 'Hydraulic Lines, Instrumentation, Offshore',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'p4',
    name: 'Heat Exchanger U-Tube',
    category: 'Pipes & Tubes',
    subCategory: 'Tubes',
    description: 'U-shaped tubes used in boilers and heat exchangers to cool or heat fluids efficiently.',
    grades: ['SS 304H', 'SS 316H', 'SS 321'],
    standard: 'ASTM A213',
    type: 'Seamless',
    specs: ['ASTM A213', 'Seamless', 'U-Bend'],
    application: 'Heat Exchangers, Boilers, Condensers',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
    ],
  },

  // ── Sheets & Plates ────────────────────
  {
    id: 'sp1',
    name: 'SS HR Plate (Hot Rolled)',
    category: 'Plates & Sheets',
    subCategory: 'Plates',
    description: 'Thick steel plates used for making tanks, vessel bodies, and heavy structures. Available in 5mm to 100mm thickness.',
    grades: ['SS 304', 'SS 316L', 'SS 310S'],
    standard: 'ASTM A240',
    type: 'Hot Rolled',
    specs: ['5mm–100mm', 'Hot Rolled', 'ASTM A240'],
    application: 'Pressure Vessels, Tanks, Structural Fabrication',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'sp2',
    name: 'SS CR Sheet (Cold Rolled)',
    category: 'Plates & Sheets',
    subCategory: 'Sheets',
    description: 'Thinner, smoother, and shinier sheets used for kitchen equipment, cladding, and elevators.',
    grades: ['SS 304', 'SS 430', 'SS 202'],
    standard: 'ASTM A240',
    type: 'Cold Rolled',
    specs: ['0.5mm–6mm', 'Cold Rolled', '2B/BA Finish'],
    application: 'Kitchen Equipment, Cladding, Elevators',
    images: [
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'sp3',
    name: 'SS Coil / Strip',
    category: 'Plates & Sheets',
    subCategory: 'Coils',
    description: 'Long continuous rolls of thin steel used for mass production of stamped and formed parts.',
    grades: ['SS 304', 'SS 316L'],
    standard: 'ASTM A240',
    type: 'Cold Rolled',
    specs: ['ASTM A240', 'Coil/Strip', 'Precision Slit'],
    application: 'Automotive, Stampings, Mass Production',
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop',
    ],
  },

  // ── Flanges ────────────────────────────
  {
    id: 'f1',
    name: 'Weld Neck Flange',
    category: 'Flanges',
    subCategory: 'Weld Neck',
    description: 'Has a long tapered hub. Welded directly to the pipe. Best for high-pressure and high-temperature applications.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.5',
    type: 'Forged',
    specs: ['ASME B16.5', '150#–2500#', 'WNRF'],
    application: 'High Pressure Piping, Refineries, Power Plants',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'f2',
    name: 'Slip-On Flange',
    category: 'Flanges',
    subCategory: 'Slip On',
    description: 'Slips over the pipe and is welded inside and out. Easier to align and install, but lower pressure rating than Weld Neck.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.5',
    type: 'Forged',
    specs: ['ASME B16.5', '150#–300#', 'SORF'],
    application: 'Low-Medium Pressure, Water Lines, HVAC',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'f3',
    name: 'Blind Flange',
    category: 'Flanges',
    subCategory: 'Blind',
    description: 'A solid disk used to block off the end of a piping system. Allows easy future access for expansion.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.5',
    type: 'Forged',
    specs: ['ASME B16.5', '150#–2500#', 'Raised Face'],
    application: 'Dead Ends, Pressure Testing, Isolation',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    ],
  },

  // ── Fittings ───────────────────────────
  {
    id: 'ft1',
    name: '90° / 45° Elbow',
    category: 'Fittings',
    subCategory: 'Elbows',
    description: 'Used to change the direction of flow in a piping system. Available in long radius and short radius.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.9',
    type: 'Seamless',
    specs: ['ASME B16.9', 'Seamless/Welded', 'LR/SR'],
    application: 'All Piping Systems, Direction Change',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'ft2',
    name: 'Equal / Reducing Tee',
    category: 'Fittings',
    subCategory: 'Tees',
    description: 'Used to split the flow into two directions. Reducing tees connect different pipe sizes.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.9',
    type: 'Seamless',
    specs: ['ASME B16.9', 'Seamless/Welded', 'Equal/Reducing'],
    application: 'Branch Connections, Flow Distribution',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'ft3',
    name: 'Concentric / Eccentric Reducer',
    category: 'Fittings',
    subCategory: 'Reducers',
    description: 'Connects a large pipe to a smaller pipe. Eccentric reducers prevent air locks in horizontal lines.',
    grades: ['SS 304', 'SS 316', 'Carbon Steel'],
    standard: 'ASME B16.9',
    type: 'Seamless',
    specs: ['ASME B16.9', 'Seamless/Welded', 'Con/Ecc'],
    application: 'Pipe Size Transition, Pump Inlets',
    images: [
      'https://images.unsplash.com/photo-1590846458616-10c42ee47da8?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop',
    ],
  },

  // ── Gaskets ────────────────────────────
  {
    id: 'g1',
    name: 'Spiral Wound Gasket',
    category: 'Gaskets & Seals',
    subCategory: 'Gaskets',
    description: 'A mix of metal wire and filler (graphite/teflon). Placed between two flanges to prevent leakage under pressure.',
    grades: ['SS 304 + Graphite', 'SS 316 + Graphite'],
    standard: 'ASME B16.20',
    type: 'Spiral Wound',
    specs: ['ASME B16.20', '150#–2500#', 'SS+Graphite'],
    application: 'Flange Joints, Refineries, Chemical Plants',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'g2',
    name: 'Ring Joint Gasket (RTJ)',
    category: 'Gaskets & Seals',
    subCategory: 'Gaskets',
    description: 'Solid metal oval/octagonal ring used in very high-pressure oil & gas flanges.',
    grades: ['Soft Iron', 'SS 304', 'SS 316'],
    standard: 'API 6A',
    type: 'Forged',
    specs: ['API 6A', 'Oval/Octagonal', 'High Pressure'],
    application: 'Oil & Gas Wellheads, High-Pressure Flanges',
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 'g3',
    name: 'O-Ring Seal',
    category: 'Gaskets & Seals',
    subCategory: 'O-Rings',
    description: 'A simple rubber or metal loop sitting in a groove to seal a connection. Available in Viton, Nitrile, or Metal Encapsulated.',
    grades: ['Viton', 'Nitrile', 'Metal Encapsulated'],
    standard: 'AS 568',
    type: 'Molded',
    specs: ['Viton/Nitrile', 'Metal Encap.', 'Custom Sizes'],
    application: 'Pumps, Valves, Hydraulic Cylinders',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop',
    ],
  },
];

/* ── Filter options ──────────────────────── */
const CATEGORY_OPTIONS = ['Pipes & Tubes', 'Plates & Sheets', 'Flanges', 'Fittings', 'Gaskets & Seals'];
const GRADE_OPTIONS    = ['SS 304', 'SS 316', 'SS 316L', 'Carbon Steel', 'Duplex'];
const TYPE_OPTIONS     = ['Seamless', 'Welded', 'Forged', 'Hot Rolled', 'Cold Rolled'];

const ITEMS_PER_PAGE = 6;

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const Steel: React.FC = () => {
  const [searchParams] = useSearchParams();
  const quoteCtx = useQuote();
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [gradeFilters, setGradeFilters]       = useState<string[]>([]);
  const [typeFilters, setTypeFilters]         = useState<string[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<SteelProduct | null>(null);

  // Product card image auto-scroll (per-card)
  const [cardSlides, setCardSlides] = useState<Record<string, number>>({});
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [modalSlide, setModalSlide] = useState(0);
  const modalTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance product card images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCardSlides(prev => {
        const next: Record<string, number> = {};
        STEEL_PRODUCTS.forEach(p => {
          const current = prev[p.id] || 0;
          next[p.id] = (current + 1) % p.images.length;
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance modal images every 4s
  useEffect(() => {
    if (selectedProduct) {
      setModalSlide(0);
      if (modalTimer.current) clearInterval(modalTimer.current);
      modalTimer.current = setInterval(() => {
        setModalSlide(prev => (prev + 1) % (selectedProduct?.images.length || 1));
      }, 4000);
    }
    return () => { if (modalTimer.current) clearInterval(modalTimer.current); };
  }, [selectedProduct]);

  const openGallery = useCallback((images: string[], title: string, startIdx = 0) => {
    setGalleryImages(images);
    setGalleryTitle(title);
    setGalleryIdx(startIdx);
    setShowGallery(true);
  }, []);

  const closeGallery = useCallback(() => setShowGallery(false), []);
  const galleryPrev = useCallback(() => setGalleryIdx(i => (i - 1 + galleryImages.length) % galleryImages.length), [galleryImages.length]);
  const galleryNext = useCallback(() => setGalleryIdx(i => (i + 1) % galleryImages.length), [galleryImages.length]);

  // Lock body scroll when modal or gallery is open
  useEffect(() => {
    if (selectedProduct || showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct, showGallery]);

  // Read URL params → apply category filters & scroll to product
  useEffect(() => {
    const cats = searchParams.getAll('cat');
    const product = searchParams.get('product');

    if (cats.length > 0) {
      setCategoryFilters(cats);
      setGradeFilters([]);
      setTypeFilters([]);
      setCurrentPage(1);
    }

    if (product) {
      setHighlightId(product);
      const timer = setTimeout(() => {
        const el = document.getElementById(`product-${product}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 400);
      // Remove highlight after 3s
      const fade = setTimeout(() => setHighlightId(null), 3500);
      return () => { clearTimeout(timer); clearTimeout(fade); };
    }
  }, [searchParams]);

  const toggle = (arr: string[], val: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const filteredProducts = useMemo(() => {
    return STEEL_PRODUCTS.filter(p => {
      const catMatch   = categoryFilters.length === 0 || categoryFilters.includes(p.category);
      const gradeMatch = gradeFilters.length === 0    || p.grades.some(g => gradeFilters.some(f => g.includes(f)));
      const typeMatch  = typeFilters.length === 0     || typeFilters.includes(p.type);
      return catMatch && gradeMatch && typeMatch;
    });
  }, [categoryFilters, gradeFilters, typeFilters]);

  const activeFilterCount = categoryFilters.length + gradeFilters.length + typeFilters.length;

  const clearAll = () => { setCategoryFilters([]); setGradeFilters([]); setTypeFilters([]); setCurrentPage(1); };

  // Reset page when filters change
  useEffect(() => { setCurrentPage(1); }, [categoryFilters, gradeFilters, typeFilters]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const startItem = filteredProducts.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of catalog
    const el = document.getElementById('catalog-top');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageNumbers = (): (number | '...')[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (currentPage > 3) pages.push('...');
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  /* ── Reusable Filter Panel ──────────── */
  const FilterPanel = ({ className = '' }: { className?: string }) => (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold font-heading uppercase tracking-widest text-metallo-navy">Filters</h3>
        {activeFilterCount > 0 && (
          <button onClick={clearAll} className="text-xs text-metallo-gold hover:text-metallo-gold-hover font-bold uppercase tracking-wide transition-colors">
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-heading">Category</h4>
        <div className="space-y-2.5">
          {CATEGORY_OPTIONS.map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={categoryFilters.includes(opt)}
                onChange={() => toggle(categoryFilters, opt, setCategoryFilters)}
                className="w-4 h-4 rounded-sm border-gray-300 text-metallo-gold accent-metallo-gold focus:ring-metallo-gold cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-metallo-navy transition-colors font-sans">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Grade */}
      <div className="mb-8">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-heading">Grade</h4>
        <div className="space-y-2.5">
          {GRADE_OPTIONS.map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={gradeFilters.includes(opt)}
                onChange={() => toggle(gradeFilters, opt, setGradeFilters)}
                className="w-4 h-4 rounded-sm border-gray-300 text-metallo-gold accent-metallo-gold focus:ring-metallo-gold cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-metallo-navy transition-colors font-sans">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-heading">Type</h4>
        <div className="space-y-2.5">
          {TYPE_OPTIONS.map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={typeFilters.includes(opt)}
                onChange={() => toggle(typeFilters, opt, setTypeFilters)}
                className="w-4 h-4 rounded-sm border-gray-300 text-metallo-gold accent-metallo-gold focus:ring-metallo-gold cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-metallo-navy transition-colors font-sans">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="mt-[92px] md:mt-[175px] w-full bg-white overflow-x-hidden">

      {/* ═══ SECTION 1 : HERO ═══════════════════════════════ */}
      <section className="relative bg-metallo-navy overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)' }}></div>
        {/* Decorative ring */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-metallo-gold/10 rounded-full hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-metallo-gold font-medium">Steel</span>
            </nav>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
              Industrial-Grade<br/>
              <span className="text-metallo-gold">Steel Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-sans leading-relaxed">
              Pipes, Plates, Flanges & Fittings — all grades from SS 304 to Duplex. ASTM & ASME certified, factory-direct to your project site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-colors shadow-lg">
                <span className="material-symbols-outlined text-xl">download</span>
                Download Catalog
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold font-heading uppercase tracking-wider text-sm hover:bg-white hover:text-metallo-navy transition-all">
                <span className="material-symbols-outlined text-xl">request_quote</span>
                Request Bulk Pricing
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
              <div>
                <span className="text-3xl font-heading font-extrabold text-metallo-gold">16+</span>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-sans">Product Lines</p>
              </div>
              <div>
                <span className="text-3xl font-heading font-extrabold text-white">5</span>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-sans">Categories</p>
              </div>
              <div>
                <span className="text-3xl font-heading font-extrabold text-white">ASTM</span>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-sans">& ASME Certified</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-metallo-gold via-metallo-gold/60 to-transparent"></div>
      </section>

      {/* ═══ SECTION 2 : FILTERABLE CATALOG ═════════════════ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] text-sm font-heading">Product Range</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-metallo-navy mt-3">Steel Product Catalog</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-sans">
              Browse our comprehensive inventory. Use the filters to narrow down by category, grade, or manufacturing type.
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-metallo-navy text-white text-sm font-bold font-heading uppercase tracking-wider w-full justify-center"
            >
              <span className="material-symbols-outlined text-lg">tune</span>
              {mobileFilterOpen ? 'Hide Filters' : `Show Filters${activeFilterCount ? ` (${activeFilterCount})` : ''}`}
            </button>
            {mobileFilterOpen && (
              <div className="mt-4 bg-white border border-gray-200 p-6 shadow-sm">
                <FilterPanel />
              </div>
            )}
          </div>

          <div className="flex gap-8">
            {/* ── Desktop Sidebar ── */}
            <aside className="hidden lg:block w-[260px] shrink-0">
              <div className="sticky top-[200px] bg-white border border-gray-200 p-6 shadow-sm">
                <FilterPanel />
              </div>
            </aside>

            {/* ── Product Grid ── */}
            <div className="flex-1 min-w-0">
              {/* Results count */}
              <div id="catalog-top" className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500 font-sans">
                  Showing <span className="font-bold text-metallo-navy">{startItem}–{endItem}</span> of {filteredProducts.length} products
                </p>
                {activeFilterCount > 0 && (
                  <button onClick={clearAll} className="text-xs text-metallo-gold hover:underline font-bold uppercase tracking-wide lg:hidden">
                    Clear Filters
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-gray-200 p-16 text-center">
                  <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">search_off</span>
                  <h3 className="text-xl font-heading font-bold text-metallo-navy mb-2">No products found</h3>
                  <p className="text-gray-500 text-sm mb-4 font-sans">Try adjusting your filters to see more results.</p>
                  <button onClick={clearAll} className="text-sm font-bold text-metallo-gold hover:text-metallo-gold-hover uppercase tracking-wider">
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paginatedProducts.map(product => (
                    <div key={product.id} id={`product-${product.id}`} className={`group bg-white border flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${highlightId === product.id ? 'border-metallo-gold ring-2 ring-metallo-gold shadow-lg' : 'border-gray-200'}`}>
                      
                      {/* Product images — auto-scrolling */}
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        {product.images.map((img, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={img}
                            alt={`${product.name} ${imgIdx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ${
                              (cardSlides[product.id] || 0) === imgIdx ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        ))}
                        {/* Category badge */}
                        <span className="absolute top-3 left-3 bg-metallo-navy/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 font-heading z-10">
                          {product.category}
                        </span>
                        {/* Fullscreen icon */}
                        <button
                          onClick={(e) => { e.stopPropagation(); openGallery(product.images, product.name, cardSlides[product.id] || 0); }}
                          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                          title="View images in full screen"
                        >
                          <span className="material-symbols-outlined text-base">fullscreen</span>
                        </button>
                        {/* Dot indicators */}
                        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1 z-10">
                          {product.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                (cardSlides[product.id] || 0) === dotIdx ? 'bg-metallo-gold w-4' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                        {/* Gradient overlay at bottom for dots */}
                        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5 flex flex-col">
                        <h3 className="text-base font-heading font-bold text-metallo-navy mb-2 leading-snug">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-3 font-sans leading-relaxed line-clamp-2">{product.description}</p>

                        {/* Spec badges */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.specs.map(s => (
                            <span key={s} className="text-[10px] font-bold text-metallo-navy bg-gray-100 px-2 py-1 uppercase tracking-wider font-heading">
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Grades */}
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4 font-sans">
                          <span className="font-bold">Grades:</span> {product.grades.join(', ')}
                        </p>

                        {/* Actions */}
                        <div className="mt-auto flex gap-2">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 py-2.5 text-xs font-bold font-heading uppercase tracking-wider border-2 border-metallo-navy text-metallo-navy hover:bg-metallo-navy hover:text-white transition-all text-center"
                          >
                            View Specs
                          </button>
                          {quoteCtx.isInQuote(product.id) ? (
                            <button
                              onClick={() => quoteCtx.openBasket()}
                              className="flex-1 py-2.5 text-xs font-bold font-heading uppercase tracking-wider bg-metallo-navy text-white inline-flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              Added
                            </button>
                          ) : (
                            <button
                              onClick={() => quoteCtx.addToQuote({
                                id: product.id,
                                name: product.name,
                                category: product.category,
                                image: product.images[0],
                                grades: product.grades,
                                specs: product.specs,
                                standard: product.standard,
                              })}
                              className="flex-1 py-2.5 text-xs font-bold font-heading uppercase tracking-wider bg-metallo-gold text-metallo-navy hover:bg-metallo-gold-hover transition-colors text-center"
                            >
                              Add to Quote
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Pagination Controls ── */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    {/* Prev */}
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 flex items-center justify-center border transition-colors font-sans text-sm ${
                        currentPage === 1
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                          : 'border-gray-300 text-metallo-navy hover:border-metallo-gold hover:text-metallo-gold'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>

                    {/* Page numbers */}
                    {getPageNumbers().map((pg, idx) =>
                      pg === '...' ? (
                        <span key={`dots-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400 font-sans text-sm">…</span>
                      ) : (
                        <button
                          key={pg}
                          onClick={() => goToPage(pg)}
                          className={`w-10 h-10 flex items-center justify-center border font-bold font-sans text-sm transition-colors ${
                            currentPage === pg
                              ? 'bg-metallo-gold border-metallo-gold text-metallo-navy'
                              : 'border-gray-300 text-metallo-navy hover:border-metallo-gold hover:text-metallo-gold'
                          }`}
                        >
                          {pg}
                        </button>
                      )
                    )}

                    {/* Next */}
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 flex items-center justify-center border transition-colors font-sans text-sm ${
                        currentPage === totalPages
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                          : 'border-gray-300 text-metallo-navy hover:border-metallo-gold hover:text-metallo-gold'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                  </div>
                )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : STANDARDS TABLE ════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-metallo-gold-hover font-bold uppercase tracking-[0.2em] text-sm font-heading">Compliance</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-metallo-navy mt-3">Standards & Certifications</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-sans">
              All Metallo steel products are manufactured and tested per ASTM, ASME, and BIS standards with 100% traceability.
            </p>
          </div>

          <div className="border border-gray-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-metallo-navy text-white grid grid-cols-12 gap-4 px-6 py-4 text-xs font-bold font-heading uppercase tracking-wider hidden sm:grid">
              <div className="col-span-3">Standard</div>
              <div className="col-span-4">Covers</div>
              <div className="col-span-5">Applicable Products</div>
            </div>
            {[
              { std: 'ASTM A312', covers: 'Seamless & Welded Austenitic SS Pipes', products: 'SS Seamless Pipe, SS Welded / ERW Pipe' },
              { std: 'ASTM A213', covers: 'Seamless Alloy-Steel Boiler Tubes', products: 'Heat Exchanger U-Tubes' },
              { std: 'ASTM A269', covers: 'Seamless & Welded Austenitic SS Tubing', products: 'Instrumentation Tubes' },
              { std: 'ASTM A240', covers: 'Chromium-Nickel SS Plate, Sheet & Strip', products: 'HR Plates, CR Sheets, Coils' },
              { std: 'ASME B16.5', covers: 'Pipe Flanges & Flanged Fittings', products: 'Weld Neck, Slip-On, Blind Flanges' },
              { std: 'ASME B16.9', covers: 'Factory-Made Wrought Buttweld Fittings', products: 'Elbows, Tees, Reducers' },
              { std: 'ASME B16.20', covers: 'Metallic Gaskets for Pipe Flanges', products: 'Spiral Wound Gaskets' },
              { std: 'API 6A', covers: 'Wellhead & Christmas Tree Equipment', products: 'Ring Joint Gaskets (RTJ)' },
            ].map((row, i) => (
              <div key={row.std} className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-4 items-start border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="sm:col-span-3">
                  <span className="font-bold text-metallo-navy font-heading text-sm inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-metallo-gold text-base">verified</span>
                    {row.std}
                  </span>
                </div>
                <div className="sm:col-span-4 text-sm text-gray-600">{row.covers}</div>
                <div className="sm:col-span-5 text-sm text-gray-500">{row.products}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : LEAD GEN CTA ══════════════════════ */}
      <section className="relative bg-metallo-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metallo-gold via-metallo-gold/60 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Need a <span className="text-metallo-gold">Custom Steel Schedule?</span>
              </h2>
              <p className="text-lg text-gray-300 font-sans leading-relaxed">
                Upload your BOQ, piping isometric, or material take-off sheet. Our engineering team will respond within 24 hours with factory-direct pricing and Mill Test Certificates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-colors shadow-lg">
                <span className="material-symbols-outlined text-xl">upload_file</span>
                Upload BOQ
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold font-heading uppercase tracking-wider text-sm hover:bg-white hover:text-metallo-navy transition-all">
                <span className="material-symbols-outlined text-xl">call</span>
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>

    {/* ═══ PRODUCT SPEC MODAL ═══════════════════════════════ */}
    {selectedProduct && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        />

        {/* Modal */}
        <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10">
          {/* Image carousel */}
          <div className="relative h-44 sm:h-52 bg-gray-900 overflow-hidden">
            {selectedProduct.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${selectedProduct.name} ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ${
                  modalSlide === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Gradient overlay */}
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-metallo-navy to-transparent"></div>
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors z-20"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            {/* Fullscreen button */}
            <button
              onClick={() => openGallery(selectedProduct.images, selectedProduct.name, modalSlide)}
              className="absolute top-3 right-14 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full backdrop-blur-sm transition-all z-20"
              title="View in full screen"
            >
              <span className="material-symbols-outlined text-lg">fullscreen</span>
            </button>
            {/* Prev/Next */}
            <button
              onClick={() => setModalSlide(i => (i - 1 + selectedProduct.images.length) % selectedProduct.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full transition-all z-20"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              onClick={() => setModalSlide(i => (i + 1) % selectedProduct.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full transition-all z-20"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-20">
              {selectedProduct.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setModalSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    modalSlide === i ? 'bg-metallo-gold w-5' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            {/* Image counter */}
            <span className="absolute bottom-3 right-3 text-[10px] text-white/70 font-sans z-20">
              {modalSlide + 1}/{selectedProduct.images.length}
            </span>
          </div>

          {/* Header with gradient */}
          <div className="relative bg-metallo-navy px-6 sm:px-8 pb-6 pt-3">
            <span className="inline-block px-2.5 py-0.5 bg-metallo-gold text-metallo-navy text-[10px] font-bold uppercase tracking-wider rounded-sm mb-3 font-sans">
              {selectedProduct.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
              {selectedProduct.name}
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-sans">{selectedProduct.subCategory}</p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-heading">Description</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">{selectedProduct.description}</p>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Standard */}
              <div className="bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">verified</span>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-heading">Standard</h4>
                </div>
                <p className="text-sm font-bold text-metallo-navy font-sans">{selectedProduct.standard}</p>
              </div>

              {/* Type */}
              <div className="bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">settings</span>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-heading">Manufacturing Type</h4>
                </div>
                <p className="text-sm font-bold text-metallo-navy font-sans">{selectedProduct.type}</p>
              </div>

              {/* Category */}
              <div className="bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">category</span>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-heading">Category</h4>
                </div>
                <p className="text-sm font-bold text-metallo-navy font-sans">{selectedProduct.category}</p>
              </div>

              {/* Sub Category */}
              <div className="bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-metallo-gold text-lg">label</span>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-heading">Sub Category</h4>
                </div>
                <p className="text-sm font-bold text-metallo-navy font-sans">{selectedProduct.subCategory}</p>
              </div>
            </div>

            {/* Grades */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-heading">Available Grades</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.grades.map(g => (
                  <span key={g} className="px-3 py-1.5 bg-metallo-navy/5 border border-metallo-navy/10 text-sm font-bold text-metallo-navy font-sans">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-heading">Specifications</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.specs.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-metallo-gold/10 border border-metallo-gold/20 text-sm font-bold text-metallo-navy font-heading uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-heading">Applications</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {selectedProduct.application.split(', ').map(app => (
                  <span key={app} className="inline-flex items-center gap-1 text-sm text-gray-600 font-sans">
                    <span className="material-symbols-outlined text-metallo-gold text-sm">check_circle</span>
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100"></div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              {quoteCtx.isInQuote(selectedProduct.id) ? (
                <button
                  onClick={() => { setSelectedProduct(null); quoteCtx.openBasket(); }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-metallo-navy text-white font-bold font-heading uppercase tracking-wider text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  View Inquiry Basket
                </button>
              ) : (
                <button
                  onClick={() => {
                    quoteCtx.addToQuote({
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      category: selectedProduct.category,
                      image: selectedProduct.images[0],
                      grades: selectedProduct.grades,
                      specs: selectedProduct.specs,
                      standard: selectedProduct.standard,
                    });
                    setSelectedProduct(null);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-metallo-gold text-metallo-navy font-bold font-heading uppercase tracking-wider text-sm hover:bg-metallo-gold-hover transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Add to Quote
                </button>
              )}
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-gray-200 text-gray-600 font-bold font-heading uppercase tracking-wider text-sm hover:border-metallo-navy hover:text-metallo-navy transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* ═══ FULLSCREEN IMAGE GALLERY ═══════════════════════════ */}
    {showGallery && galleryImages.length > 0 && (
      <div className="fixed inset-0 z-[300] bg-black flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 bg-black/80 backdrop-blur-sm border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-metallo-gold text-xl">photo_library</span>
            <span className="text-white font-heading font-bold text-sm uppercase tracking-wider">{galleryTitle}</span>
            <span className="text-white/40 font-sans text-xs ml-2">{galleryIdx + 1} / {galleryImages.length}</span>
          </div>
          <button
            onClick={closeGallery}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Main image */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img.replace('w=600', 'w=1920')}
              alt={`${galleryTitle} ${i + 1}`}
              className={`absolute max-w-[90vw] max-h-[75vh] object-contain transition-all duration-500 ${
                galleryIdx === i
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            />
          ))}

          {/* Prev / Next */}
          <button
            onClick={galleryPrev}
            className="absolute left-4 sm:left-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full backdrop-blur-sm transition-all"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={galleryNext}
            className="absolute right-4 sm:right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-metallo-gold text-white hover:text-metallo-navy rounded-full backdrop-blur-sm transition-all"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex items-center justify-center gap-2 px-4 py-4 bg-black/80 border-t border-white/10 overflow-x-auto shrink-0">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setGalleryIdx(i)}
              className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                galleryIdx === i
                  ? 'border-metallo-gold ring-1 ring-metallo-gold/50'
                  : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${galleryTitle} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    )}
    </>
  );
};

export default Steel;
