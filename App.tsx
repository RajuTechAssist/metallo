import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhyMetallo from './pages/WhyMetallo';
import Contact from './pages/Contact';
import WireCables from './pages/products/WireCables';
import Steel from './pages/products/Steel';
import CableTray from './pages/products/CableTray';
import Header from './components/Header';
import Footer from './components/Footer';
import { QuoteProvider } from './contexts/QuoteContext';
import InquiryBasket from './components/InquiryBasket';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <QuoteProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-metallo-navy font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-metallo" element={<WhyMetallo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/wire-cables" element={<WireCables />} />
            <Route path="/products/steel" element={<Steel />} />
            <Route path="/products/cable-tray" element={<CableTray />} />
            {/* Placeholder routes for links */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <InquiryBasket />
      </div>
      </QuoteProvider>
    </HashRouter>
  );
};

export default App;