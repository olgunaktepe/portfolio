import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/v3/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Olgun Aktepe | Growth Marketing & GTM Operations Leader',
    template: '%s | Olgun Aktepe',
  },
  description:
    'Growth Marketing and GTM Operations Leader with 8+ years driving B2B revenue through AI-powered marketing systems, demand generation, and revenue operations.',
  keywords: [
    'growth marketing',
    'GTM operations',
    'revenue operations',
    'HubSpot expert',
    'B2B marketing',
    'healthcare marketing',
    'AI marketing',
    'demand generation',
  ],
  authors: [{ name: 'Olgun Aktepe' }],
  creator: 'Olgun Aktepe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Olgun Aktepe Portfolio',
    title: 'Olgun Aktepe | Growth Marketing & GTM Operations Leader',
    description:
      'Growth Marketing and GTM Operations Leader with 8+ years driving B2B revenue through AI-powered marketing systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olgun Aktepe | Growth Marketing & GTM Operations Leader',
    description:
      'Growth Marketing and GTM Operations Leader with 8+ years driving B2B revenue.',
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
      <body className={`${inter.variable} antialiased v3-theme`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
