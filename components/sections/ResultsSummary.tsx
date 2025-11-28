'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Briefcase, Globe, Award } from 'lucide-react';

const highlights = [
  {
    icon: <Briefcase size={20} />,
    value: '8+',
    label: 'Years Experience',
  },
  {
    icon: <Globe size={20} />,
    value: '3',
    label: 'Industries',
  },
  {
    icon: <Users size={20} />,
    value: '10+',
    label: 'Team Members Led',
  },
  {
    icon: <TrendingUp size={20} />,
    value: '15+',
    label: 'Campaigns Launched',
  },
  {
    icon: <Award size={20} />,
    value: '5',
    label: 'Languages Spoken',
  },
];

export function ResultsSummary() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 border-y border-[var(--card-border)] bg-[var(--primary-800)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-center"
            >
              <div className="p-2 rounded-lg bg-[var(--accent-500)]/20 text-[var(--accent-500)]">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-xl font-bold gradient-text">{item.value}</div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
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
