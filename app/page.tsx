import Hero from '@/components/Hero';
import About from '@/components/About';
import Verticals from '@/components/Verticals';
import WorldMap from '@/components/WorldMap';
import Industries from '@/components/Industries';
import Certifications from '@/components/Certifications';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Verticals />
      <WorldMap />
      <Industries />
      <Certifications />
    </>
  );
}
