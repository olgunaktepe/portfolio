'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export default function CaseStudiesPage() {
  return (
    <section className="pt-24 pb-16 bg-[var(--v3-navy-900)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--v3-text-secondary)] hover:text-[var(--v3-cream)] transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--v3-cream)] mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-[var(--v3-text-secondary)] max-w-3xl">
            Explore detailed case studies with project collateral, strategic context, and measurable results from my work across healthcare and Web3 industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="v3-card p-8"
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    project.industry === 'web3'
                      ? 'bg-[var(--v3-cream)]/10 text-[var(--v3-cream)]'
                      : 'bg-[var(--v3-cream)]/10 text-[var(--v3-cream)]'
                  }`}>
                    {project.industry === 'web3' ? 'Web3' : 'Healthcare'}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--v3-cream)] mb-2">
                    {project.company}
                  </h2>
                  <p className="text-lg text-[var(--v3-text-secondary)] font-medium">
                    {project.title}
                  </p>
                  <p className="text-sm text-[var(--v3-text-muted)] mt-1">
                    {project.role} | {project.period}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--v3-cream)] text-[var(--v3-navy-900)] rounded-lg font-medium hover:bg-[var(--v3-cream)]/90 transition-colors shrink-0"
                >
                  View Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Description */}
              <p className="text-[var(--v3-text-secondary)] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-[var(--v3-navy-700)]">
                {project.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-[var(--v3-navy-800)] rounded-lg">
                    <div className="text-2xl font-bold text-[var(--v3-cream)]">
                      {result.value}{result.suffix}
                    </div>
                    <div className="text-xs text-[var(--v3-text-secondary)] uppercase tracking-wider mt-1">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Collateral Preview */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--v3-text-secondary)] uppercase tracking-wider mb-4">
                  Project Collateral ({project.collateral.length} items)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.collateral.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--v3-navy-800)] rounded-lg text-sm"
                    >
                      {item.type === 'pdf' && <FileText size={14} className="text-[var(--v3-cream)]" />}
                      {item.type === 'image' && <ImageIcon size={14} className="text-[var(--v3-cream)]" />}
                      {item.type === 'external' && <ExternalLink size={14} className="text-[var(--v3-text-secondary)]" />}
                      <span className="text-[var(--v3-text-secondary)] truncate max-w-[200px]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                  {project.collateral.length > 6 && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-[var(--v3-navy-700)] rounded-lg text-sm text-[var(--v3-text-muted)]">
                      +{project.collateral.length - 6} more
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="v3-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
