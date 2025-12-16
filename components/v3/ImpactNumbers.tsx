'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const impactMetrics = [
  { value: 2, prefix: '$', suffix: 'M+', label: 'Pipeline Influenced' },
  { value: 750, prefix: '$', suffix: 'K', label: 'Closed-Won Revenue' },
  { value: 55, suffix: '%', label: 'Sales Productivity' },
  { value: 65, suffix: '%', label: 'Lead Growth' },
];

function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  isInView
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function ImpactNumbers() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="impact"
      ref={ref}
      className="v3-section v3-section-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="v3-heading-lg text-[var(--v3-navy-900)] mb-4">
            IMPACT
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="v3-impact-number text-[var(--v3-burgundy)]">
                <AnimatedNumber
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="v3-impact-label">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[var(--v3-navy-600)] text-lg max-w-2xl mx-auto"
        >
          These aren't projections. These are results from the last 18 months leading
          marketing across 3 healthcare companies.
        </motion.p>
      </div>
    </section>
  );
}
