'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Brain, Workflow } from 'lucide-react';

const aiProjects = [
  {
    icon: Bot,
    title: 'LLM Quote Generator',
    description:
      'Built custom solution integrating OpenAI with HubSpot CRM. Sales team now generates accurate quotes in minutes instead of days.',
    result: '40% faster turnaround',
    tags: ['Python', 'OpenAI API', 'HubSpot API'],
  },
  {
    icon: Brain,
    title: 'ML Company Fit Scoring',
    description:
      'Developed ML-based scoring engine using intent signals and firmographic data to predict company fit and prioritize sales outreach.',
    result: '35% better lead qualification',
    tags: ['ML Scoring', 'Intent Data', 'Predictive Analytics'],
  },
  {
    icon: Workflow,
    title: 'AI-Enhanced Automation',
    description:
      'Designed automation infrastructure using Zapier, n8n, and HubSpot APIs including automated lead routing, real-time data enrichment, and cross-platform sync.',
    result: '60% manual processes reduced',
    tags: ['Zapier', 'n8n', 'HubSpot APIs', 'Data Enrichment'],
  },
];

export function AIShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="ai"
      ref={ref}
      className="v3-section bg-[var(--v3-navy-900)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="v3-heading-lg text-[var(--v3-text-primary)] mb-4 v3-name-underline inline-block">
            I BUILD WITH AI
          </h2>
          <p className="text-[var(--v3-text-secondary)] text-xl mt-8">
            Not just prompt engineering. Real applications.
          </p>
        </motion.div>

        {/* AI Project Cards */}
        <div className="space-y-6">
          {aiProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="v3-ai-card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-[var(--v3-cream)] w-fit">
                  <project.icon size={28} className="text-[var(--v3-burgundy)]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--v3-text-primary)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--v3-text-secondary)] mb-4 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="v3-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="md:text-right">
                  <div className="text-sm text-[var(--v3-text-muted)] uppercase tracking-wider mb-1">
                    Result
                  </div>
                  <div className="text-xl font-bold text-[var(--v3-cream)]">
                    {project.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
