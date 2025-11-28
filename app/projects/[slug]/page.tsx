'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, Image as ImageIcon, Download, X, Lightbulb, Target, CheckCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MetricCounter } from '@/components/ui/MetricCounter';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button href="/#projects">Back to Projects</Button>
        </div>
      </div>
    );
  }

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'web3':
        return 'from-[var(--accent-500)] to-[#00a8cc]';
      case 'healthcare':
        return 'from-[var(--secondary-500)] to-[#ec4899]';
      default:
        return 'from-[var(--primary-500)] to-[var(--primary-700)]';
    }
  };

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
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              href="/#projects"
              variant="ghost"
              className="mb-8"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl p-8 md:p-12 mb-12 bg-gradient-to-r ${getIndustryColor(
              project.industry
            )}`}
          >
            <Badge variant="default" className="bg-white/20 text-white mb-4">
              {project.industry === 'web3' ? 'Web3' : 'Healthcare'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.company}
            </h1>
            <p className="text-white/90 text-xl mb-2">{project.title}</p>
            <p className="text-white/70">{project.role} | {project.period}</p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {project.results.map((result, index) => (
              <Card key={index} hover={false}>
                <MetricCounter
                  value={result.value}
                  suffix={result.suffix}
                  label={result.label}
                  duration={1.5}
                />
              </Card>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <Card hover={false}>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-500)]" />
                Challenge
              </h2>
              <p className="text-[var(--text-secondary)]">{project.challenge}</p>
            </Card>
            <Card hover={false}>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--secondary-500)]" />
                Solution
              </h2>
              <p className="text-[var(--text-secondary)]">{project.solution}</p>
            </Card>
          </motion.div>

          {/* Strategic Context - Director Level Insight */}
          {project.strategicContext && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="text-[var(--accent-500)]" size={24} />
                Strategic Thinking
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={18} className="text-[var(--accent-500)]" />
                    <h3 className="font-semibold">Business Context</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {project.strategicContext.businessContext}
                  </p>
                </Card>
                <Card hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={18} className="text-[var(--secondary-400)]" />
                    <h3 className="font-semibold">Strategic Approach</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {project.strategicContext.strategicApproach}
                  </p>
                </Card>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={18} className="text-green-400" />
                    <h3 className="font-semibold">Key Strategic Decisions</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.strategicContext.keyDecisions.map((decision, i) => (
                      <li key={i} className="text-[var(--text-secondary)] text-sm flex items-start gap-2">
                        <span className="text-[var(--accent-500)] mt-1">•</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={18} className="text-[var(--accent-400)]" />
                    <h3 className="font-semibold">Lessons Learned</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm italic">
                    &ldquo;{project.strategicContext.lessonsLearned}&rdquo;
                  </p>
                </Card>
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
            <h2 className="text-2xl font-bold mb-6">Technologies & Skills</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Collateral Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Project Collateral</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.collateral.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  {item.type === 'pdf' && (
                    <>
                      <div
                        className="aspect-[4/3] bg-[var(--primary-700)] flex items-center justify-center cursor-pointer group"
                        onClick={() => setSelectedPdf(getPdfPath(item.filename))}
                      >
                        <div className="text-center">
                          <FileText
                            size={48}
                            className="mx-auto mb-2 text-[var(--accent-500)] group-hover:scale-110 transition-transform"
                          />
                          <span className="text-sm text-[var(--text-muted)]">
                            Click to view
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2 line-clamp-2">{item.title}</h3>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedPdf(getPdfPath(item.filename))}
                            className="text-sm text-[var(--accent-500)] hover:underline"
                          >
                            View PDF
                          </button>
                          <span className="text-[var(--text-muted)]">|</span>
                          <a
                            href={getPdfPath(item.filename)}
                            download
                            className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-500)]"
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
                      <div className="aspect-[4/3] relative bg-[var(--primary-700)]">
                        <Image
                          src={getImagePath(item.filename)}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                          <ImageIcon size={14} />
                          <span>Image Asset</span>
                        </div>
                      </div>
                    </>
                  )}

                  {item.type === 'external' && (
                    <>
                      <div className="aspect-[4/3] bg-[var(--primary-700)] flex items-center justify-center">
                        <ExternalLink
                          size={48}
                          className="text-[var(--secondary-400)]"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--accent-500)] hover:underline flex items-center gap-1"
                        >
                          View on {item.source}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </>
                  )}
                </Card>
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
