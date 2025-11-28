'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layers, BarChart2, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skillCategories } from '@/data/skills';

const iconMap: { [key: string]: React.ReactNode } = {
  target: <Target size={28} />,
  layers: <Layers size={28} />,
  'bar-chart-2': <BarChart2 size={28} />,
  cpu: <Cpu size={28} />,
};

export function Skills() {
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

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Expertise across the full marketing technology stack
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.name} variants={cardVariants}>
              <Card className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      index % 2 === 0
                        ? 'bg-[var(--accent-500)]/20 text-[var(--accent-500)]'
                        : 'bg-[var(--secondary-500)]/20 text-[var(--secondary-400)]'
                    }`}
                  >
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
