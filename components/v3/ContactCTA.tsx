'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Download, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="v3-section bg-[var(--v3-navy-900)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="v3-heading-lg text-[var(--v3-text-primary)] mb-6">
            LET'S BUILD SOMETHING
          </h2>
          <p className="text-[var(--v3-text-secondary)] text-xl mb-12 max-w-2xl mx-auto">
            Looking for a marketing leader who can actually build AI-powered systems? Let's talk.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`mailto:${profile.email}`}
            className="v3-btn-primary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="/Olgun_Aktepe_Resume.pdf"
            download
            className="v3-btn-secondary inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="v3-btn-secondary inline-flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--v3-text-muted)] text-sm"
        >
          <p>{profile.location}</p>
          <p className="mt-1">{profile.email}</p>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-[var(--v3-navy-700)]"
        >
          <p className="text-[var(--v3-text-muted)] text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
