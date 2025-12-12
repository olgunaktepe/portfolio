'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, Image as ImageIcon, Download, X, Lightbulb, Target, CheckCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--v3-navy-900)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--v3-text-primary)]">Case Study Not Found</h1>
          <a href="/case-studies" className="v3-btn-primary inline-flex items-center gap-2">
            Back to Case Studies
          </a>
        </div>
      </div>
    );
  }

  const getPdfPath = (filename: string | undefined) => {
    if (!filename) return '';
    return `/projects/${project.slug}/pdfs/${encodeURIComponent(filename)}`;
  };

  const getImagePath = (filename: string | undefined) => {
    if (!filename) return '';
    return `/projects/${project.slug}/images/${encodeURIComponent(filename)}`;
  };

  return (
    <>
      <section className="pt-24 pb-16 bg-[var(--v3-navy-900)] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[var(--v3-text-secondary)] hover:text-[var(--v3-cream)] transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Case Studies
            </a>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-12 mb-12 bg-gradient-to-r from-[var(--v3-navy-700)] to-[var(--v3-navy-800)]"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--v3-cream)]/20 text-[var(--v3-cream)] text-sm font-medium mb-4">
              {project.industry === 'web3' ? 'Web3' : 'Healthcare'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--v3-cream)] mb-4">
              {project.company}
            </h1>
            <p className="text-[var(--v3-text-secondary)] text-xl mb-2">{project.title}</p>
            <p className="text-[var(--v3-text-muted)]">{project.role} | {project.period}</p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {project.results.map((result, index) => (
              <div key={index} className="v3-card p-6 text-center">
                <div className="text-3xl font-bold text-[var(--v3-cream)] mb-1">
                  {result.value}{result.suffix}
                </div>
                <div className="text-sm text-[var(--v3-text-secondary)] uppercase tracking-wider">
                  {result.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="v3-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--v3-text-primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--v3-cream)]" />
                Challenge
              </h2>
              <p className="text-[var(--v3-text-secondary)]">{project.challenge}</p>
            </div>
            <div className="v3-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--v3-text-primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--v3-cream)]" />
                Solution
              </h2>
              <p className="text-[var(--v3-text-secondary)]">{project.solution}</p>
            </div>
          </motion.div>

          {/* Strategic Context - Director Level Insight */}
          {project.strategicContext && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--v3-text-primary)]">
                <Lightbulb className="text-[var(--v3-cream)]" size={24} />
                Strategic Thinking
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="v3-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={18} className="text-[var(--v3-cream)]" />
                    <h3 className="font-semibold text-[var(--v3-text-primary)]">Business Context</h3>
                  </div>
                  <p className="text-[var(--v3-text-secondary)] text-sm">
                    {project.strategicContext.businessContext}
                  </p>
                </div>
                <div className="v3-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={18} className="text-[var(--v3-cream)]" />
                    <h3 className="font-semibold text-[var(--v3-text-primary)]">Strategic Approach</h3>
                  </div>
                  <p className="text-[var(--v3-text-secondary)] text-sm">
                    {project.strategicContext.strategicApproach}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="v3-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={18} className="text-green-400" />
                    <h3 className="font-semibold text-[var(--v3-text-primary)]">Key Strategic Decisions</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.strategicContext.keyDecisions.map((decision, i) => (
                      <li key={i} className="text-[var(--v3-text-secondary)] text-sm flex items-start gap-2">
                        <span className="text-[var(--v3-cream)] mt-1">•</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="v3-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={18} className="text-[var(--v3-cream)]" />
                    <h3 className="font-semibold text-[var(--v3-text-primary)]">Lessons Learned</h3>
                  </div>
                  <p className="text-[var(--v3-text-secondary)] text-sm italic">
                    &ldquo;{project.strategicContext.lessonsLearned}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--v3-text-primary)]">Technologies & Skills</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="v3-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Collateral Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--v3-text-primary)]">Project Collateral</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.collateral.map((item) => (
                <div key={item.id} className="v3-card overflow-hidden">
                  {item.type === 'pdf' && (
                    <>
                      <div
                        className="aspect-[4/3] bg-[var(--v3-navy-700)] flex items-center justify-center cursor-pointer group"
                        onClick={() => setSelectedPdf(getPdfPath(item.filename))}
                      >
                        <div className="text-center">
                          <FileText
                            size={48}
                            className="mx-auto mb-2 text-[var(--v3-cream)] group-hover:scale-110 transition-transform"
                          />
                          <span className="text-sm text-[var(--v3-text-secondary)]">
                            Click to view
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2 line-clamp-2 text-[var(--v3-text-primary)]">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-[var(--v3-text-secondary)] mb-3">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedPdf(getPdfPath(item.filename))}
                            className="text-sm text-[var(--v3-cream)] hover:underline"
                          >
                            View PDF
                          </button>
                          <span className="text-[var(--v3-text-secondary)]">|</span>
                          <a
                            href={getPdfPath(item.filename)}
                            download
                            className="text-sm text-[var(--v3-text-secondary)] hover:text-[var(--v3-cream)]"
                          >
                            <Download size={14} className="inline mr-1" />
                            Download
                          </a>
                        </div>
                      </div>
                    </>
                  )}

                  {item.type === 'image' && (
                    <>
                      <div className="aspect-[4/3] relative bg-[var(--v3-navy-700)]">
                        <Image
                          src={getImagePath(item.filename)}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2 text-[var(--v3-text-primary)]">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-[var(--v3-text-secondary)] mb-3">
                            {item.description}
                          </p>
                        )}
                        <div className="flex items-center gap-1 text-sm text-[var(--v3-text-muted)]">
                          <ImageIcon size={14} />
                          <span>Image Asset</span>
                        </div>
                      </div>
                    </>
                  )}

                  {item.type === 'external' && (
                    <>
                      <div className="aspect-[4/3] bg-[var(--v3-navy-700)] flex items-center justify-center">
                        <ExternalLink
                          size={48}
                          className="text-[var(--v3-cream)]"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2 text-[var(--v3-text-primary)]">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-[var(--v3-text-secondary)] mb-3">
                            {item.description}
                          </p>
                        )}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--v3-cream)] hover:underline flex items-center gap-1"
                        >
                          View on {item.source}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPdf && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
