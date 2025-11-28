'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Building2, Zap, Target } from 'lucide-react';

const highlights = [
  {
    icon: <TrendingUp size={20} />,
    value: '65%',
    label: 'Lead Growth',
    color: 'accent',
  },
  {
    icon: <Zap size={20} />,
    value: '55%',
    label: 'Sales Productivity Boost',
    color: 'secondary',
  },
  {
    icon: <Building2 size={20} />,
    value: '3',
    label: 'Companies Managed',
    color: 'accent',
  },
  {
    icon: <Users size={20} />,
    value: '10+',
    label: 'Cross-Functional Teams',
    color: 'secondary',
  },
  {
    icon: <Target size={20} />,
    value: '30%',
    label: 'User Acquisition',
    color: 'accent',
  },
];

export function ResultsSummary() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-6 border-y border-[var(--card-border)] bg-[var(--primary-800)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`p-2 rounded-lg ${
                  item.color === 'accent'
                    ? 'bg-[var(--accent-500)]/20 text-[var(--accent-500)]'
                    : 'bg-[var(--secondary-500)]/20 text-[var(--secondary-400)]'
                }`}
              >
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold gradient-text">{item.value}</div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
