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

      {/* Floating Code Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="text-primary-300 animate-float absolute top-20 left-10 font-mono text-sm opacity-30">
          {'{ }'}
        </div>
        <div className="text-primary-400 animate-float-delayed absolute top-40 right-20 font-mono text-lg opacity-40">
          &lt;/&gt;
        </div>
        <div className="text-primary-300 animate-float absolute bottom-40 left-20 font-mono text-sm opacity-30">
          npm install
        </div>
        <div className="text-primary-200 animate-float-delayed absolute top-60 left-1/3 font-mono text-xs opacity-20">
          git commit -m "✨ magic"
        </div>
        <div className="text-primary-400 animate-float absolute right-10 bottom-60 font-mono text-sm opacity-30">
          const magic = true;
        </div>
        <div className="text-primary-300 animate-float-delayed absolute top-32 left-2/3 font-mono text-xs opacity-25">
          yarn dev
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 lg:hidden">
              <div className="from-primary-400 to-primary-600 mx-auto h-32 w-32 rounded-full bg-gradient-to-r p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <span className="text-primary-600 text-4xl font-bold">AM</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl leading-tight font-bold text-neutral-900 lg:text-6xl xl:text-7xl">
                <span className="block text-balance">{headline}</span>
              </h1>

              <h2 className="text-primary-600 text-xl font-medium lg:text-2xl">{subheadline}</h2>

              <p className="text-lg leading-relaxed text-pretty text-neutral-600 lg:text-xl">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row lg:items-start lg:justify-start">
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
          </div>

          {/* Right Visual - macOS Terminal */}
          <div className="hidden justify-center lg:flex">
            <MacTerminal />
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
    </section>
  );
}

// macOS Terminal Component
function MacTerminal() {
  return (
    <div className="w-full max-w-2xl">
      {/* Terminal Window */}
      <div className="rotate-2 transform overflow-hidden rounded-lg bg-neutral-900 shadow-2xl transition-transform duration-300 hover:rotate-0">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-neutral-800 px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm text-neutral-400">Terminal — zsh — 80×24</div>
          <div></div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-3 p-6 font-mono text-sm">
          <div className="flex items-center">
            <span className="text-green-400">anawat@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects</span>
            <span className="text-white">$</span>
            <span className="ml-2 text-white">
              git clone https://github.com/anawatmuangjai/awesome-project.git
            </span>
          </div>

          <div className="text-neutral-400">Cloning into 'awesome-project'...</div>

          <div className="flex items-center">
            <span className="text-green-400">anawat@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects</span>
            <span className="text-white">$</span>
            <span className="ml-2 text-white">cd awesome-project</span>
          </div>

          <div className="flex items-center">
            <span className="text-green-400">anawat@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects/awesome-project</span>
            <span className="text-white">$</span>
            <span className="ml-2 text-white">npm install</span>
          </div>

          <div className="text-neutral-400">✓ Installing dependencies...</div>

          <div className="flex items-center">
            <span className="text-green-400">anawat@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects/awesome-project</span>
            <span className="text-white">$</span>
            <span className="ml-2 text-white">npm run dev</span>
          </div>

          <div className="text-green-400">🚀 Server running at http://localhost:3000</div>

          <div className="flex items-center">
            <span className="text-green-400">anawat@MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects/awesome-project</span>
            <span className="text-white">$</span>
            <span className="ml-2 animate-pulse text-white">|</span>
          </div>
        </div>
      </div>
    </div>
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
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(-3deg);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
    animation-delay: -2s;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);
