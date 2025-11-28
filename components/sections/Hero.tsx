'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, TrendingUp, Zap, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

const rotatingWords = [
  'demand generation',
  'marketing automation',
  'strategic partnerships',
  'revenue operations',
  'AI-powered solutions',
  'growth marketing',
  'lead nurturing',
  'brand strategy',
  'data-driven campaigns',
  'cross-functional leadership',
];

const brandLogos = [
  { name: 'UFC', logo: '/logos/1200px-UFC_Logo.svg.png' },
  { name: 'Formula 1', logo: '/logos/F1.svg.png' },
  { name: 'NBA', logo: '/logos/5bbc0e1f32507.jpg' },
  { name: 'Visa', logo: '/logos/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png' },
  { name: 'Crypto.com', logo: '/logos/crypto-com-1.svg' },
  { name: 'Gala Games', logo: '/logos/Gala_Games_Logo.png' },
  { name: 'Thermo Fisher', logo: '/logos/thermo-fisher-scientific-laboratory-research-science-thermo-fisher-scientific-logo.jpg' },
  { name: 'Medline', logo: '/logos/medline-dynacor-medline-industries-inc-surgery-hospital-others.jpg' },
  { name: 'WellNow', logo: '/logos/563-5635057_wellnow-urgent-care-logo-hd-png-download.png' },
  { name: 'WellStreet', logo: '/logos/wellstreet-1.png' },
  { name: '24Slides', logo: '/logos/24slides.webp' },
  { name: 'Lambda Biotech', logo: '/logos/Molecular_Designs_Lambda_Biotech_Logo.jpg' },
  { name: 'SmartSource', logo: '/logos/png-clipart-logo-film-poster-brand-coupon-smartsource-interactive-group-blue-text-thumbnail.png' },
  { name: 'Scientific Labs', logo: '/logos/SL_Horizontal_RGB_Logo.jpg' },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profile.title}
        </motion.p>

        {/* Animated Rotating Text */}
        <motion.div
          className="text-lg md:text-xl mb-10 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[var(--text-muted)]">I drive growth through </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-[var(--accent-500)] font-semibold inline-block"
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Results Bar - "8+ Years → Resulting In → Metrics" */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-10 py-6 px-6 rounded-2xl bg-[var(--primary-800)]/60 backdrop-blur-sm border border-[var(--card-border)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Experience Statement */}
          <div className="flex items-center gap-3 lg:border-r lg:border-[var(--card-border)] lg:pr-8">
            <div className="p-2.5 rounded-xl bg-[var(--accent-500)]/20">
              <Clock size={24} className="text-[var(--accent-500)]" />
            </div>
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-bold gradient-text">8+ Years</div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Marketing Experience</div>
            </div>
          </div>

          {/* Divider Text */}
          <div className="hidden lg:block text-[var(--text-muted)] text-sm uppercase tracking-widest">
            Resulting In
          </div>

          {/* Results Metrics */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[var(--accent-500)]/20">
                <TrendingUp size={18} className="text-[var(--accent-500)]" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-[var(--accent-500)]">+65%</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Lead Growth</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[var(--secondary-500)]/20">
                <Zap size={18} className="text-[var(--secondary-400)]" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-[var(--secondary-400)]">+55%</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Sales Productivity</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-green-500/20">
                <DollarSign size={18} className="text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-green-400">$2M+</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Pipeline Influenced</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="#projects" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </motion.div>

        {/* Brand Logo Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">
            Brands &amp; Companies I&apos;ve Worked With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
            {brandLogos.map((brand) => (
              <motion.div
                key={brand.name}
                className="px-5 py-3 rounded-xl bg-white shadow-md flex items-center justify-center min-w-[100px]"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,212,255,0.3)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={50}
                  className="object-contain h-10 md:h-12 w-auto max-w-[120px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="text-[var(--text-muted)] hover:text-[var(--accent-500)] transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
