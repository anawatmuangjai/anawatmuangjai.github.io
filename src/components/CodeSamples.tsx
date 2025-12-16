import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';
import { BentoGrid, BentoCard } from './BentoGrid';

interface CodeSamplesProps extends BaseComponentProps {
  title?: string;
}

export function CodeSamples({ title = 'Development Philosophy', className }: CodeSamplesProps) {
  const principles = [
    {
      icon: '🎯',
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that follows best practices',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every line',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Building with security-first mindset and best practices',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: '🧪',
      title: 'Testing',
      description: 'Comprehensive testing for reliable, bug-free applications',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="code-samples" className={cn('bg-neutral-50 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24 rounded-full"></div>
            <p className="mt-6 text-lg text-neutral-600">
              My approach to building quality software
            </p>
          </div>

          <BentoGrid cols={4} gap="md">
            {principles.map(principle => (
              <BentoCard key={principle.title} className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex h-full flex-col">
                  <div
                    className={cn(
                      'mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br',
                      principle.color
                    )}
                  >
                    <span className="text-3xl">{principle.icon}</span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-neutral-900">{principle.title}</h3>
                  <p className="text-sm text-neutral-600">{principle.description}</p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
