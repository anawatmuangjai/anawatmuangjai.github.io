import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';
import { BentoGrid, BentoCard } from './BentoGrid';

interface HeroProps extends BaseComponentProps {
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function Hero({
  headline = 'Full Stack Developer',
  subheadline = 'Crafting Code, Building Dreams',
  description = 'From terminal commands to production deployments, I transform ideas into elegant, scalable applications. Specializing in React, TypeScript, and modern web technologies.',
  primaryCTA = { text: 'View My Work', href: '#projects' },
  secondaryCTA = { text: 'Get In Touch', href: '#contact' },
  className,
}: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-screen py-20',
        'to-primary-50 bg-gradient-to-br from-neutral-50 via-blue-50',
        'overflow-hidden',
        className
      )}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="bg-primary-400 animate-blob absolute top-20 left-20 h-96 w-96 rounded-full mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-40 right-20 h-96 w-96 rounded-full bg-purple-400 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-pink-400 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <BentoGrid cols={6} gap="md">
          {/* Main Profile Card - Spans 4 columns on desktop */}
          <BentoCard
            className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2"
            glassVariant="strong"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-6">
                <div className="glass inline-flex items-center rounded-full px-4 py-2">
                  <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-neutral-700">Available for work</span>
                </div>

                <div>
                  <h1 className="mb-3 text-5xl leading-tight font-bold text-neutral-900 md:text-6xl lg:text-7xl">
                    <span className="block text-balance">{headline}</span>
                  </h1>
                  <h2 className="text-primary-600 mb-6 text-2xl font-semibold lg:text-3xl">
                    {subheadline}
                  </h2>
                  <p className="text-lg leading-relaxed text-pretty text-neutral-600 lg:text-xl">
                    {description}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a
                  href={primaryCTA.href}
                  className={cn(
                    'inline-flex items-center justify-center',
                    'px-6 py-3 text-base font-semibold',
                    'bg-primary-600 rounded-2xl text-white',
                    'hover:bg-primary-700',
                    'transition-all duration-300',
                    'shadow-lg hover:-translate-y-1 hover:shadow-xl'
                  )}
                >
                  {primaryCTA.text}
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>

                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    className={cn(
                      'inline-flex items-center justify-center',
                      'px-6 py-3 text-base font-semibold',
                      'glass rounded-2xl text-neutral-700',
                      'hover:bg-neutral-100',
                      'transition-all duration-300',
                      'hover:-translate-y-1'
                    )}
                  >
                    {secondaryCTA.text}
                  </a>
                )}
              </div>
            </div>
          </BentoCard>

          {/* Profile Image Card */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-2" padding="none">
            <div className="relative h-full min-h-[280px] overflow-hidden">
              <div className="from-primary-500 absolute inset-0 bg-gradient-to-br to-purple-600 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <span className="text-5xl font-bold text-white">AM</span>
                  </div>
                  <p className="text-lg font-semibold text-white">Anawat Muangjai</p>
                  <p className="text-sm text-white/80">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Quick Stats Cards */}
          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="text-center">
              <div className="text-primary-600 mb-2 text-4xl font-bold">5+</div>
              <div className="text-sm font-medium text-neutral-600">Years Experience</div>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="text-center">
              <div className="text-primary-600 mb-2 text-4xl font-bold">20+</div>
              <div className="text-sm font-medium text-neutral-600">Projects</div>
            </div>
          </BentoCard>

          {/* Mini Terminal Card */}
          <BentoCard
            className="col-span-1 md:col-span-2 lg:col-span-3"
            glassVariant="dark"
            padding="md"
          >
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center text-green-400">
                <span className="mr-2">❯</span>
                <span className="text-white">npm run dev</span>
              </div>
              <div className="text-neutral-300">🚀 Server running at localhost:3000</div>
              <div className="flex items-center text-green-400">
                <span className="mr-2">❯</span>
                <span className="animate-pulse text-white">|</span>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', '.NET', 'Tailwind'].map(tech => (
                  <span
                    key={tech}
                    className="glass rounded-xl px-3 py-1.5 text-sm font-medium text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="h-6 w-6 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0%, 100% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);
