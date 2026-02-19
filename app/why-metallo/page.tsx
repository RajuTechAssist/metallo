import type { Metadata } from 'next';
import WhyMetalloPageContent from './WhyMetalloPageContent';

export const metadata: Metadata = {
  title: 'Why Metallo — METALLO',
  description: 'Discover why 50+ EPC contractors have upgraded to the Metallo ecosystem.',
};

export default function WhyMetalloPage() {
  return <WhyMetalloPageContent />;
}
