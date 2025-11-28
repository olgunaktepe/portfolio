import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Olgun Aktepe | Digital Marketing & Marketing Operations Leader',
    template: '%s | Olgun Aktepe',
  },
  description:
    'Digital marketing leader with 8+ years driving B2B revenue growth. Expert in HubSpot, demand generation, and AI solution development. View my portfolio of work with Crypto.com, Gala Games, and healthcare companies.',
  keywords: [
    'digital marketing',
    'marketing operations',
    'HubSpot expert',
    'B2B marketing',
    'healthcare marketing',
    'Web3 marketing',
    'demand generation',
  ],
  authors: [{ name: 'Olgun Aktepe' }],
  creator: 'Olgun Aktepe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Olgun Aktepe Portfolio',
    title: 'Olgun Aktepe | Digital Marketing & Marketing Operations Leader',
    description:
      'Digital marketing leader with 8+ years driving B2B revenue growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olgun Aktepe | Marketing Operations Leader',
    description:
      'Digital marketing leader with 8+ years driving B2B revenue growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
