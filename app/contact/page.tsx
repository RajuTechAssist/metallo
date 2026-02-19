import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact — METALLO',
  description: 'Get in touch with Metallo Industrial for a project quote or partnership.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
