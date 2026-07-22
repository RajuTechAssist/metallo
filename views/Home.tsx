"use client";

import React, { useEffect } from 'react';
import { useLocation } from "@/lib/useLocation";
import Hero from '../components/Hero';
import About from '../components/About';
import Verticals from '../components/Verticals';
import MetalloOSPlatform from '../components/MetalloOSPlatform';
import WorldMap from '../components/WorldMap';
import Industries from '../components/Industries';
import Certifications from '../components/Certifications';
import HelpSection from '../components/HelpSection';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section');
    if (!section) return;

    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timeoutId = window.setTimeout(scrollToSection, 60);
    return () => window.clearTimeout(timeoutId);
  }, [location.search]);

  return (
    <>
      {/* Who we are → What we do → Who we serve → Where we operate → What we
      manufacture → Why we're different → Contact us. */}
      <Hero />
      <About />
      {/* <MetalloSymbol /> */}
      <Industries />
      <WorldMap />
      <Verticals />
      <MetalloOSPlatform />
      <HelpSection
        title="How can our global manufacturing network advance your enterprise operations today?"
        subtitle="Select your engagement pathway below for factory-direct procurement, strategic vendor integration, or executive career opportunities within the Metallo ecosystem."
      />
      {/* <Certifications /> */}
    </>
  );
};

export default Home;
