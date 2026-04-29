"use client";

import React, { useEffect } from 'react';
import { useLocation } from "@/lib/useLocation";
import Hero from '../components/Hero';
import About from '../components/About';
import Verticals from '../components/Verticals';
import WorldMap from '../components/WorldMap';
import Industries from '../components/Industries';
import Certifications from '../components/Certifications';

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
      <Hero />
      <About />
      <Industries />
      <Verticals />
      <WorldMap />
      <Certifications />
    </>
  );
};

export default Home;
