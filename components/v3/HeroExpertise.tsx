'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Target, Sparkles, BarChart3 } from 'lucide-react';
import { profile } from '@/data/profile';

const expertiseAreas = [
  {
    icon: Target,
    title: 'GTM & Revenue Ops',
    description: '$2M+ pipeline influenced across 3 companies',
    highlight: '55% productivity gain',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description: 'Custom LLM & ML applications that drive real results',
    highlight: '40% faster turnaround',
  },
  {
    icon: BarChart3,
    title: 'Demand Generation',
    description: '$2.5M+ annual budgets · $750K closed-won revenue',
    highlight: '65% lead growth',
  },
];

export function HeroExpertise() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--v3-navy-900)] via-[var(--v3-navy-800)] to-[var(--v3-navy-900)]" />

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--v3-burgundy)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--v3-cream)] opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h1 className="v3-heading-xl v3-name-underline inline-block mb-6">
            {profile.name.toUpperCase()}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xl md:text-2xl text-[var(--v3-text-secondary)] mb-16 max-w-2xl mx-auto"
        >
          {profile.title}
        </motion.p>

        {/* Expertise Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="v3-expertise-block group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--v3-cream)]">
                  <area.icon size={24} className="text-[var(--v3-burgundy)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--v3-text-primary)]">
                  {area.title}
                </h3>
              </div>
              <p className="text-[var(--v3-text-secondary)] mb-4 leading-relaxed">
                {area.description}
              </p>
              <div className="text-[var(--v3-cream)] font-semibold text-lg">
                {area.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#work" className="v3-btn-primary inline-flex items-center gap-2">
            See Results
            <ArrowDown size={18} />
          </a>
          <a
            href="/Olgun_Aktepe_Resume.pdf"
            download
            className="v3-btn-secondary inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--v3-text-muted)] flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-[var(--v3-cream)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
