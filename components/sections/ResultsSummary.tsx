'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Zap, DollarSign, Clock } from 'lucide-react';

export function ResultsSummary() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-10 border-y border-[var(--card-border)] bg-[var(--primary-800)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Experience Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 lg:border-r lg:border-[var(--card-border)] lg:pr-10"
          >
            <div className="p-3 rounded-xl bg-[var(--accent-500)]/20">
              <Clock size={28} className="text-[var(--accent-500)]" />
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">8+ Years</div>
              <div className="text-sm text-[var(--text-muted)]">Marketing Experience</div>
            </div>
          </motion.div>

          {/* Divider Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="hidden lg:block text-[var(--text-muted)] text-sm uppercase tracking-widest"
          >
            Resulting In
          </motion.div>

          {/* Results Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8"
          >
            {/* Lead Growth */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--accent-500)]/20">
                <TrendingUp size={20} className="text-[var(--accent-500)]" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-[var(--accent-500)]">+65%</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Lead Growth</div>
              </div>
            </div>

            {/* Sales Productivity */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--secondary-500)]/20">
                <Zap size={20} className="text-[var(--secondary-400)]" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-[var(--secondary-400)]">+55%</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Sales Productivity</div>
              </div>
            </div>

            {/* Revenue Influence */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <DollarSign size={20} className="text-green-400" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-green-400">$2M+</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Pipeline Influenced</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
