'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { profile } from '@/data/profile';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactItems = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: profile.location,
      href: null,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-[var(--primary-800)]/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8">
            <div className="flex justify-center mb-8">
              <Badge variant="accent" className="text-base px-4 py-2">
                Open to Opportunities
              </Badge>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-[var(--primary-700)]/50 hover:bg-[var(--primary-700)] transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-[var(--accent-500)]/20 text-[var(--accent-500)] group-hover:bg-[var(--accent-500)] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--text-muted)]">{item.label}</p>
                        <p className="font-medium group-hover:text-[var(--accent-500)] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--primary-700)]/50">
                      <div className="p-3 rounded-lg bg-[var(--secondary-500)]/20 text-[var(--secondary-400)]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--text-muted)]">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/resume.pdf"
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
              <Button
                href={`mailto:${profile.email}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Mail size={18} className="mr-2" />
                Send Email
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
