import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--primary-900)] border-t border-[var(--card-border)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} Olgun Aktepe. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/olgun-aktepe-5408aa284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-500)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:olgunaktepe@gmail.com"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-500)] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:205-261-3601"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-500)] transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
            <span>EN</span>
            <span>|</span>
            <span>NL</span>
            <span>|</span>
            <span>TR</span>
            <span>|</span>
            <span>FR</span>
            <span>|</span>
            <span>DE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
