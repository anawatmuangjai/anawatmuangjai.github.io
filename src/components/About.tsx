import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface AboutProps extends BaseComponentProps {
  title?: string;
  description?: string;
  highlights?: string[];
}

export function About({
  title = 'About Me',
  description = "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.",
  highlights = [
    '5+ years of software development experience',
    'Expertise in React, TypeScript, and Node.js',
    'Strong focus on performance and accessibility',
    'Experience with cloud platforms and DevOps',
  ],
  className,
}: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-600">{description}</p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 mt-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-neutral-700">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className={cn(
                    'inline-flex items-center',
                    'text-primary-600 px-6 py-3 font-semibold',
                    'border-primary-600 rounded-lg border-2',
                    'hover:bg-primary-600 hover:text-white',
                    'transition-all duration-200'
                  )}
                >
                  Let's Work Together
                  <svg
                    className="ml-2 h-4 w-4"
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
              </div>
            </div>

            {/* Image/Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="from-primary-100 to-primary-200 flex h-80 w-80 items-center justify-center rounded-2xl bg-gradient-to-br">
                  <div className="text-center">
                    <div className="bg-primary-600 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
                      <svg
                        className="h-12 w-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <p className="text-primary-800 font-semibold">Code • Create • Innovate</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-yellow-400 opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-pink-400 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
