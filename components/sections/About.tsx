'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Languages } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { profile } from '@/data/profile';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" ref={ref} className="section-padding bg-[var(--primary-800)]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Marketing operations leader with a passion for driving measurable results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Profile Summary */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent-500)] to-[var(--secondary-500)] flex items-center justify-center text-3xl font-bold">
                  OA
                </div>
                <div>
                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {profile.summary}
              </p>
            </Card>
          </motion.div>

          {/* Languages & Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Languages */}
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-[var(--accent-500)]" size={24} />
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <Badge
                    key={lang.code}
                    variant={lang.level === 'Native' ? 'accent' : 'default'}
                  >
                    {lang.name} ({lang.level})
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[var(--secondary-400)]" size={24} />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {profile.education.slice(0, 3).map((edu, index) => (
                  <div key={index} className="border-l-2 border-[var(--secondary-500)] pl-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {edu.degree} in {edu.field}
                      </span>
                      {edu.inProgress && (
                        <Badge variant="secondary">In Progress</Badge>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {edu.years} {edu.gpa && `| GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
