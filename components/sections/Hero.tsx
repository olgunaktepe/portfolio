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
  'account-based marketing',
  'CRM optimization',
  'pipeline acceleration',
  'conversion optimization',
  'marketing analytics',
  'customer acquisition',
  'integrated campaigns',
  'go-to-market strategy',
];

const brandLogos = [
  { name: 'UFC', logo: '/logos/1200px-UFC_Logo.svg.png' },
  { name: 'Formula 1', logo: '/logos/F1.svg.png' },
  { name: 'NBA', logo: '/logos/nba-logo-on-transparent-background-free-vector.jpg' },
  { name: 'Visa', logo: '/logos/Visa_Inc._logo.svg' },
  { name: 'Crypto.com', logo: '/logos/crypto-com-1.svg' },
  { name: 'Gala Games', logo: '/logos/Gala_Games_Logo.png' },
  { name: 'Thermo Fisher', logo: '/logos/thermo-fisher-scientific.webp' },
  { name: 'McKesson', logo: '/logos/mckesson.jpg' },
  { name: 'Medline', logo: '/logos/Mednews_logo_Medline.avif' },
  { name: 'Sketchdeck', logo: '/logos/logo_blue_small.png' },
  { name: 'Molecular Designs', logo: '/logos/MD_Featured Image.webp' },
  { name: '24Slides', logo: '/logos/24slides.webp' },
  { name: 'Lambda Biotech', logo: '/logos/Molecular_Designs_Lambda_Biotech_Logo.jpg' },
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
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 py-4 md:py-6 px-4 md:px-6 rounded-xl md:rounded-2xl bg-[var(--primary-800)]/60 backdrop-blur-sm border border-[var(--card-border)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Experience Statement */}
          <div className="flex items-center gap-3 md:border-r md:border-[var(--card-border)] md:pr-6 lg:pr-8">
            <div className="p-2 md:p-2.5 rounded-xl bg-[var(--accent-500)]/20">
              <Clock size={20} className="md:w-6 md:h-6 text-[var(--accent-500)]" />
            </div>
            <div className="text-left">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">8+ Years</div>
              <div className="text-[10px] md:text-xs text-[var(--text-muted)] uppercase tracking-wider">Marketing Experience</div>
            </div>
          </div>

          {/* Divider Text */}
          <div className="hidden md:block text-[var(--text-muted)] text-xs md:text-sm uppercase tracking-widest">
            Resulting In
          </div>

          {/* Results Metrics */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 md:p-2 rounded-lg bg-[var(--accent-500)]/20">
                <TrendingUp size={16} className="md:w-[18px] md:h-[18px] text-[var(--accent-500)]" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--accent-500)]">+65%</div>
                <div className="text-[9px] md:text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Lead Growth</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 md:p-2 rounded-lg bg-[var(--secondary-500)]/20">
                <Zap size={16} className="md:w-[18px] md:h-[18px] text-[var(--secondary-400)]" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--secondary-400)]">+55%</div>
                <div className="text-[9px] md:text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Sales Productivity</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 md:p-2 rounded-lg bg-green-500/20">
                <DollarSign size={16} className="md:w-[18px] md:h-[18px] text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-400">$5M+</div>
                <div className="text-[9px] md:text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Pipeline Influenced</div>
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
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {brandLogos.map((brand) => (
              <motion.div
                key={brand.name}
                className="px-3 py-2 md:px-4 md:py-3 rounded-lg bg-[#ffffff] shadow-md flex items-center justify-center"
                style={{ backgroundColor: '#ffffff' }}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,212,255,0.3)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={56}
                  className="object-contain h-12 md:h-14 w-auto max-w-[120px] md:max-w-[140px]"
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
