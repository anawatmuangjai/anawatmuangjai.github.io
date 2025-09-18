import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

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
  subheadline = 'Building Modern Web Applications',
  description = "I create beautiful, performant, and accessible web applications using cutting-edge technologies. Let's build something amazing together.",
  primaryCTA = { text: 'View My Work', href: '#projects' },
  secondaryCTA = { text: 'Get In Touch', href: '#contact' },
  className,
}: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-screen items-center justify-center',
        'to-primary-50 bg-gradient-to-br from-neutral-50',
        'overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-primary-500 animate-blob absolute top-0 left-0 h-72 w-72 rounded-full mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-0 right-0 h-72 w-72 rounded-full bg-yellow-300 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="from-primary-400 to-primary-600 mx-auto h-32 w-32 rounded-full bg-gradient-to-r p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span className="text-primary-600 text-4xl font-bold">AM</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-5xl leading-tight font-bold text-neutral-900 md:text-7xl">
              <span className="block text-balance">{headline}</span>
            </h1>

            <h2 className="text-primary-600 text-xl font-medium md:text-2xl">{subheadline}</h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-pretty text-neutral-600 md:text-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
              <a
                href={primaryCTA.href}
                className={cn(
                  'inline-flex items-center justify-center',
                  'px-8 py-4 text-lg font-semibold',
                  'bg-primary-600 rounded-lg text-white',
                  'hover:bg-primary-700 focus:bg-primary-700',
                  'transition-all duration-200',
                  'transform hover:scale-105 focus:scale-105',
                  'shadow-lg hover:shadow-xl'
                )}
              >
                {primaryCTA.text}
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    'px-8 py-4 text-lg font-semibold',
                    'border-primary-600 text-primary-600 rounded-lg border-2',
                    'hover:bg-primary-600 hover:text-white',
                    'focus:bg-primary-600 focus:text-white',
                    'transition-all duration-200',
                    'transform hover:scale-105 focus:scale-105'
                  )}
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
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
      </div>
    </section>
  );
}

// Add custom CSS for blob animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
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
