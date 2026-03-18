import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhyMetallo from './pages/WhyMetallo';
import Contact from './pages/Contact';
import WireCables from './pages/products/WireCables';
import Steel from './pages/products/Steel';
import CableTray from './pages/products/CableTray';
import WeldingConsumables from './pages/products/WeldingConsumables';
import PowerTools from './pages/products/PowerTools';
import DieCasting from './pages/products/DieCasting';
import IndustrialTech from './pages/products/IndustrialTech';
import InfrastructureConstruction from './pages/industries/InfrastructureConstruction';
import PowerTransmission from './pages/industries/PowerTransmission';
import OilGasProcessIndustries from './pages/industries/OilGasProcessIndustries';
import AutomotiveMobility from './pages/industries/AutomotiveMobility';
import HeavyEngineering from './pages/industries/HeavyEngineering';
import RailwaysDefence from './pages/industries/RailwaysDefence';
import SmartCities from './pages/industries/SmartCities';
import Header from './components/Header';
import Footer from './components/Footer';
import { QuoteProvider } from './contexts/QuoteContext';
import InquiryBasket from './components/InquiryBasket';
import SocialSidebar from './components/SocialSidebar';

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
              <Route path="/products/welding" element={<WeldingConsumables />} />
              <Route path="/products/tools" element={<PowerTools />} />
              {/* <Route path="/products/die-casting" element={<DieCasting />} /> */}
              {/* <Route path="/products/tech-products" element={<IndustrialTech />} /> */}
              <Route path="/industries/infrastructure" element={<InfrastructureConstruction />} />
              <Route path="/industries/power-transmission" element={<PowerTransmission />} />
              <Route path="/industries/oil-gas" element={<OilGasProcessIndustries />} />
              <Route path="/industries/automotive" element={<AutomotiveMobility />} />
              <Route path="/industries/heavy-engineering" element={<HeavyEngineering />} />
              <Route path="/industries/railways-defence" element={<RailwaysDefence />} />
              <Route path="/industries/smart-cities" element={<SmartCities />} />
              {/* Placeholder routes for links */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <InquiryBasket />
          <SocialSidebar />
        </div>
      </QuoteProvider>
    </HashRouter>
  );
};

export default App;