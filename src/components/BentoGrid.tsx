import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface BentoGridProps extends BaseComponentProps {
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
}

export function BentoGrid({ children, className, cols = 3, gap = 'md' }: BentoGridProps) {
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2',
        cols === 3 && 'lg:grid-cols-3',
        cols === 4 && 'lg:grid-cols-4',
        cols === 6 && 'lg:grid-cols-6',
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends BaseComponentProps {
  span?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  rowSpan?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  glass?: boolean;
  glassVariant?: 'default' | 'dark' | 'strong';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function BentoCard({
  children,
  className,
  span,
  rowSpan,
  glass = true,
  glassVariant = 'default',
  padding = 'lg',
}: BentoCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const glassClasses = {
    default: 'glass',
    dark: 'glass-dark',
    strong: 'glass-strong',
  };

  return (
    <div
      className={cn(
        'bento-card',
        glass && glassClasses[glassVariant],
        paddingClasses[padding],
        'shadow-lg hover:shadow-xl',
        // Column spans
        span?.mobile && `col-span-${span.mobile}`,
        span?.tablet && `md:col-span-${span.tablet}`,
        span?.desktop && `lg:col-span-${span.desktop}`,
        // Row spans
        rowSpan?.mobile && `row-span-${rowSpan.mobile}`,
        rowSpan?.tablet && `md:row-span-${rowSpan.tablet}`,
        rowSpan?.desktop && `lg:row-span-${rowSpan.desktop}`,
        className
      )}
    >
      {children}
    </div>
  );
}
