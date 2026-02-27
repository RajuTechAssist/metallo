import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Verticals from '../components/Verticals';
import WorldMap from '../components/WorldMap';
import Industries from '../components/Industries';
import Certifications from '../components/Certifications';

const Home: React.FC = () => {
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