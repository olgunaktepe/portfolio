'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { formatDuration } from '@/lib/utils';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="section-padding bg-[var(--primary-800)]/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            8+ years of driving growth across Web3 and healthcare industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-500)] via-[var(--secondary-500)] to-[var(--primary-700)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full border-2 border-[var(--accent-500)] bg-[var(--primary-900)] ${
                    index % 2 === 0
                      ? '-left-2 md:left-auto md:-right-2'
                      : '-left-2'
                  } md:${index % 2 === 0 ? '-right-2' : '-left-2'}`}
                  style={{
                    left: index % 2 === 0 ? undefined : '-8px',
                    right: index % 2 === 0 ? undefined : undefined,
                  }}
                />

                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          exp.industry === 'web3'
                            ? 'bg-[var(--accent-500)]/20'
                            : exp.industry === 'healthcare'
                            ? 'bg-[var(--secondary-500)]/20'
                            : 'bg-[var(--primary-600)]/20'
                        }`}
                      >
                        <Briefcase
                          size={20}
                          className={
                            exp.industry === 'web3'
                              ? 'text-[var(--accent-500)]'
                              : exp.industry === 'healthcare'
                              ? 'text-[var(--secondary-400)]'
                              : 'text-[var(--text-secondary)]'
                          }
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p className="text-[var(--text-secondary)] text-sm">
                          {exp.title}
                        </p>
                      </div>
                    </div>
                    <Badge variant={exp.endDate === 'Present' ? 'accent' : 'default'}>
                      {exp.endDate === 'Present' ? 'Current' : formatDuration(exp.startDate, exp.endDate)}
                    </Badge>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-[var(--accent-500)]" />
                        <span className="text-sm">
                          <span className="font-bold text-[var(--accent-500)]">
                            {metric.value}{metric.suffix}
                          </span>{' '}
                          <span className="text-[var(--text-muted)]">{metric.label}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Date Range */}
                  <div className="text-sm text-[var(--text-muted)]">
                    {new Date(exp.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    -{' '}
                    {exp.endDate === 'Present'
                      ? 'Present'
                      : new Date(exp.endDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
