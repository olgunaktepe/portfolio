'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const caseStudies = [
  {
    id: 'molecular-designs',
    slug: 'molecular-designs',
    company: 'Molecular Designs',
    title: 'Healthcare RevOps Transformation',
    description: 'Built revenue operations infrastructure from scratch across a 3-company healthcare portfolio.',
    metrics: [
      { value: '65%', label: 'Lead Growth' },
      { value: '55%', label: 'Productivity' },
      { value: '25%', label: 'Acquisition' },
    ],
    tags: ['HubSpot Enterprise', 'AI Automation', 'ABM'],
  },
  {
    id: 'streamline-scientific',
    slug: 'streamline-scientific',
    company: 'Streamline Scientific',
    title: 'Urgent Care Market Expansion',
    description: 'Led market expansion targeting urgent care networks, securing enterprise-level clients with 150+ locations.',
    metrics: [
      { value: '150+', label: 'Location Deal' },
      { value: '3x', label: 'Pipeline Growth' },
      { value: '35%', label: 'Conversion Lift' },
    ],
    tags: ['Content Marketing', 'ABM', 'Enterprise Sales'],
  },
  {
    id: 'lamda-biotech',
    slug: 'lamda-biotech',
    company: 'Lamda Biotech',
    title: 'Post-Acquisition Rebrand & eCommerce',
    description: 'Directed complete rebrand and website redesign post-acquisition with new eCommerce platform.',
    metrics: [
      { value: '25%', label: 'Inquiries Up' },
      { value: '500+', label: 'Samples Sent' },
      { value: '15+', label: 'Distributors' },
    ],
    tags: ['Brand Strategy', 'eCommerce', 'Product Marketing'],
  },
  {
    id: 'crypto-com',
    slug: 'crypto-com',
    company: 'Crypto.com',
    title: 'Global Partnership Marketing',
    description: 'Developed enterprise partnership marketing strategies with UFC, NBA, and Formula 1.',
    metrics: [
      { value: '30%', label: 'User Acquisition' },
      { value: '400K+', label: 'Social Followers' },
      { value: '50%', label: 'Traffic Increase' },
    ],
    tags: ['Partnership Marketing', 'Paid Media', 'Global Campaigns'],
  },
  {
    id: 'gala-games',
    slug: 'gala-games',
    company: 'Gala Games',
    title: 'Web3 Gaming Community & Partnerships',
    description: 'Built and managed one of the largest blockchain gaming communities with 100K+ Discord members.',
    metrics: [
      { value: '100K+', label: 'Community' },
      { value: '50%', label: 'Brand Awareness' },
      { value: '30%', label: 'Engagement' },
    ],
    tags: ['Community Management', 'Web3', 'Partnerships'],
  },
];

export function CaseStudyGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={ref}
      className="v3-section v3-section-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="v3-heading-lg text-[var(--v3-navy-900)]">
            CASE STUDIES
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, i) => (
            <Link
              key={study.id}
              href={`/projects/${study.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="v3-case-card group h-full"
              >
                {/* Company badge */}
                <div className="text-sm text-[var(--v3-burgundy-light)] font-semibold uppercase tracking-wider mb-2">
                  {study.company}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[var(--v3-text-primary)] mb-4">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--v3-text-secondary)] mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[var(--v3-navy-700)]">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-[var(--v3-cream)]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--v3-text-muted)] uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="v3-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[var(--v3-cream)] font-semibold group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[var(--v3-navy-900)] font-semibold hover:text-[var(--v3-burgundy)] transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
