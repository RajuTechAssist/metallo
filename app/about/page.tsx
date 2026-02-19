import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About — METALLO',
  description: 'Learn about Metallo Industrial — India\'s integrated manufacturing ecosystem.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
