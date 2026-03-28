import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
      <Certifications />
      <About />
      <Industries />
      <Verticals />
      <WorldMap />
    </>
  );
};

export default Home;
