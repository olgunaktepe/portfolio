'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  external,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';

  const variants = {
    primary: 'bg-gradient-to-r from-[var(--accent-500)] to-[var(--secondary-500)] text-white hover:opacity-90 glow',
    secondary: 'border border-[var(--accent-500)] text-[var(--accent-500)] hover:bg-[var(--accent-500)] hover:text-[var(--primary-900)]',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--accent-500)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined } : {};

  return (
    <Component
      {...linkProps}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
