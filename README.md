# Metallo

A B2B industrial supply catalog built with **Next.js 15 (App Router)** and **React 19**. Static SPA with no backend — all product data is TypeScript modules.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15.1.3 (App Router) |
| UI Library | React 19.2.4 |
| Language | TypeScript 5.8.2 |
| Styling | Tailwind CSS 3.4.19 |
| Animation | Framer Motion 12.34.3 |
| Icons | React Icons 5.5.0 |
| Maps/3D | React Globe GL, D3-geo, Three.js |
| Email | EmailJS Browser 4.4.1 |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone and install
git clone <repo>
cd metallo
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm run start     # Run the production build
npm run lint      # Run ESLint
```

## Project Structure

```
metallo/
├── app/                # Next.js App Router (server components + metadata)
├── views/              # Page-level client components
├── components/         # Reusable UI components
│   └── product/        # Product page building blocks
├── lib/                # Hooks, helpers, routing constants
├── data/               # Static product catalogs (TypeScript)
├── contexts/           # React Context (QuoteContext for basket)
├── public/             # Static assets (images, PDFs)
└── assets/             # SVG logos imported in code
```

## Routing Overview

The app has **18 routes** across 3 categories:

- **4 core pages**: Home, About, Contact, Why Metallo
- **7 product verticals**: Steel, Wire & Cables, Cable Tray, Welding, Tools, Pipes, Fabricated Structures
- **7 industry verticals**: Automotive, Heavy Engineering, Infrastructure, Oil & Gas, Power Transmission, Railways & Defence, Smart Cities

All routes are server components with metadata (SEO). Each page renders a client component from `views/`.

## Key Patterns

### Adding a New Page

1. Create `app/<route>/page.tsx` (server component):
   ```tsx
   import { Metadata } from 'next';
   import PageView from '@/views/PageView';

   export const metadata: Metadata = {
     title: 'Page Title',
     description: 'Page description for SEO',
   };

   export default function Page() {
     return <PageView />;
   }
   ```

2. Create `views/PageView.tsx` (client component with `"use client"`):
   ```tsx
   'use client';
   
   export default function PageView() {
     return <div>Content here</div>;
   }
   ```

### Adding a Product Vertical

Product verticals are defined in `lib/productVerticals.ts` — the source of truth for navigation and routing.

1. **Add to `lib/productVerticals.ts`**:
   ```ts
   {
     key: 'new-vertical',
     label: 'New Vertical',
     path: '/products/new-vertical',
     icon: NewVerticalIcon,
   }
   ```

2. **Create the route**: `app/products/new-vertical/page.tsx`

3. **Create data file**: `data/newVerticalData.ts` with `ConfigurableProductPageData` shape

4. **Create view**: `views/products/NewVertical.tsx` importing the data and rendering `<ConfigurableProductPage data={data} />`

### Using the Quote Basket (Global State)

The app has a floating inquiry basket for collecting product quotes. Manage it via `contexts/QuoteContext.tsx`:

```tsx
'use client';

import { useQuote } from '@/contexts/QuoteContext';

export default function Component() {
  const { addToQuote, items, basketOpen } = useQuote();
  
  return (
    <button onClick={() => addToQuote(product)}>
      Add to Quote
    </button>
  );
}
```

**Quote Actions**: `addToQuote`, `removeFromQuote`, `updateQuantity`, `updateGrade`, `submitQuote`, `clearQuote`, `resetQuote`, `isInQuote`

**Reference Format**: `#MET-{5-digit random}` generated on submit.

## Import Paths

Use the `@/` alias instead of relative `../../` paths:

```tsx
import Header from '@/components/Header';           // Good
import steelData from '@/data/steelData';           // Good
import { useQuote } from '@/contexts/QuoteContext'; // Good
```

The alias resolves to the project root.

## Design System

### Brand Colors (Tailwind)

- **Navy**: `metallo-navy` (`#0F172A`) — primary dark
- **Gold**: `metallo-gold` (`#EAB308`) — accent
- **Background**: `#F8FAFC`

Use them in Tailwind classes: `bg-metallo-navy`, `text-metallo-gold`, etc.

### Fonts

- **Body**: Inter (`font-sans`)
- **Headings**: Manrope (`font-heading`)
- **Accent**: Merriweather (`font-serif`)

## Notes

- **Server vs Client**: `app/**/page.tsx` is always a server component. Everything in `views/`, `components/`, and `contexts/` is client-side (`"use client"`).
- **Strict Mode Off**: TypeScript strict mode is disabled (`"strict": false` in `tsconfig.json`). Be mindful of type safety.
- **No Test Suite**: The project has no automated tests. Manual testing in the browser is the validation method.
- **Suspense Boundary**: The root layout wraps children in `<Suspense>` for `useSearchParams()` compatibility.

## Deployment

The project is configured for **Vercel** via `vercel.json`. The build targets the `bom1` (Mumbai) region.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Alternatively, connect the repository in the Vercel dashboard — it will pick up `vercel.json` automatically and deploy on every push to `main`.

## Contributing

See `CLAUDE.md` for detailed architecture notes and developer guidance.
