'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileText, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A showcase of marketing campaigns and transformations that drove measurable results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                {/* Header with gradient */}
                <div
                  className={`-mx-6 -mt-6 mb-6 p-6 bg-gradient-to-r ${getIndustryColor(
                    project.industry
                  )} rounded-t-2xl`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="default" className="bg-white/20 text-white">
                      {project.industry === 'web3' ? 'Web3' : 'Healthcare'}
                    </Badge>
                    <span className="text-white/80 text-sm">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.company}</h3>
                  <p className="text-white/80 text-sm">{project.role}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.results.slice(0, 2).map((result, i) => (
                      <div
                        key={i}
                        className="bg-[var(--primary-700)]/50 rounded-lg p-2 text-center"
                      >
                        <div className="text-lg font-bold gradient-text">
                          {result.value}{result.suffix}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Collateral Preview */}
                  <div className="flex items-center gap-4 mb-4 text-[var(--text-muted)] text-sm">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>
                        {project.collateral.filter((c) => c.type === 'pdf').length} PDFs
                      </span>
                    </div>
                    {project.collateral.some((c) => c.type === 'image') && (
                      <div className="flex items-center gap-1">
                        <ImageIcon size={14} />
                        <span>
                          {project.collateral.filter((c) => c.type === 'image').length} Images
                        </span>
                      </div>
                    )}
                    {project.collateral.some((c) => c.type === 'external') && (
                      <div className="flex items-center gap-1">
                        <ExternalLink size={14} />
                        <span>Articles</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="default" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* View Project Button */}
                <Button
                  href={`/projects/${project.slug}`}
                  variant="ghost"
                  className="w-full justify-between mt-auto pt-4 border-t border-[var(--card-border)]"
                >
                  View Project
                  <ArrowRight size={16} />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
