import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--primary-700)] text-[var(--text-secondary)]',
    accent: 'bg-[var(--accent-500)]/20 text-[var(--accent-500)]',
    secondary: 'bg-[var(--secondary-500)]/20 text-[var(--secondary-400)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
