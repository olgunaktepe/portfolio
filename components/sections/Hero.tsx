'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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

        {/* Key Results - Clear & Impactful */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">65%</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Lead Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">55%</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Sales Productivity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">8+</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">3</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Industries</div>
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
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {brandLogos.map((brand) => (
              <motion.div
                key={brand.name}
                className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-[var(--card-border)] flex items-center justify-center"
                whileHover={{ scale: 1.05, borderColor: 'var(--accent-500)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={40}
                  className="object-contain h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
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
