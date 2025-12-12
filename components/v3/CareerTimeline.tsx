'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences } from '@/data/experience';

export function CareerTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>('molecular-designs');

  const formatDate = (dateStr: string) => {
    if (dateStr === 'Present') return 'Present';
    const [year, month] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section
      id="career"
      ref={ref}
      className="v3-section bg-[var(--v3-navy-900)]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="v3-heading-lg text-[var(--v3-text-primary)]">
            CAREER
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="v3-timeline-line" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isCurrent = exp.endDate === 'Present';
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div
                    className={`v3-timeline-dot absolute left-0 top-1 ${
                      isCurrent ? 'v3-timeline-dot-current' : ''
                    }`}
                  />

                  {/* Content */}
                  <div
                    className="cursor-pointer group"
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-[var(--v3-text-primary)] group-hover:text-[var(--v3-cream)] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-[var(--v3-text-muted)]">
                        {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                      </span>
                    </div>

                    <p className="text-[var(--v3-burgundy-light)] font-medium mb-2">
                      {exp.title}
                    </p>

                    {/* Condensed view */}
                    {!isExpanded && (
                      <p className="text-[var(--v3-text-secondary)] text-sm">
                        {exp.description}
                      </p>
                    )}

                    {/* Expanded view */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="v3-card p-6">
                          <p className="text-[var(--v3-text-secondary)] mb-4">
                            {exp.description}
                          </p>

                          {/* Key achievements */}
                          <div className="space-y-2 mb-4">
                            {exp.achievements.slice(0, 4).map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-[var(--v3-text-secondary)]"
                              >
                                <span className="text-[var(--v3-burgundy-light)] mt-1">•</span>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>

                          {/* Metrics */}
                          {exp.metrics && exp.metrics.length > 0 && (
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--v3-navy-700)]">
                              {exp.metrics.map((metric) => (
                                <div key={metric.label} className="text-center">
                                  <div className="text-2xl font-bold text-[var(--v3-cream)]">
                                    {metric.value}{metric.suffix}
                                  </div>
                                  <div className="text-xs text-[var(--v3-text-muted)] uppercase tracking-wider">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Click hint */}
                    <div className="text-xs text-[var(--v3-text-muted)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
