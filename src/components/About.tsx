import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';
import { experiences } from '@/data';
import { BentoGrid, BentoCard } from './BentoGrid';

interface AboutProps extends BaseComponentProps {
  title?: string;
  description?: string;
}

export function About({
  title = 'About Me',
  description = "I'm a passionate full-stack developer with 5+ years of experience turning complex problems into elegant digital solutions. I specialize in modern web technologies like React, TypeScript, and .NET, with a strong focus on clean architecture and user-centered design. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
  className,
}: AboutProps) {
  return (
    <section id="about" className={cn('bg-neutral-100 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-500 mx-auto h-1 w-24 rounded-full"></div>
          </div>

          <BentoGrid cols={3} gap="md">
            {/* Bio Card - Spans 2 columns */}
            <BentoCard
              className="scroll-reveal-left col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2"
              glassVariant="strong"
            >
              <div className="flex h-full flex-col">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-neutral-900">Hello, I'm Anawat 👋</h3>
                  <p className="text-primary-600 text-lg font-semibold">
                    Full Stack Developer & Problem Solver
                  </p>
                </div>

                <p className="mb-6 text-base leading-relaxed text-balance text-neutral-600">
                  {description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-3">
                  {[
                    { icon: '🎯', text: 'Clean, scalable solutions' },
                    { icon: '🚀', text: 'Modern web technologies' },
                    { icon: '💡', text: 'Continuous learning' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="animate-slide-right flex items-center space-x-3"
                      style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                    >
                      <div className="bg-primary-100 hover-rotate flex h-8 w-8 items-center justify-center rounded-xl transition-all">
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      <span className="text-sm text-neutral-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className={cn(
                      'neuro-button neuro-button-primary hover-lift group',
                      'inline-flex items-center',
                      'px-6 py-3 font-semibold',
                      'transition-all duration-200',
                      'animate-fade-in-scale animation-delay-600'
                    )}
                  >
                    Let's Work Together
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </BentoCard>

            {/* Profile Image Card */}
            <BentoCard
              className="animate-bounce-in animation-delay-300 col-span-1 md:col-span-1 lg:col-span-1"
              padding="none"
            >
              <div className="relative h-full min-h-[240px] overflow-hidden">
                <div className="from-primary-300 to-primary-500 absolute inset-0 bg-gradient-to-br"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-float-gentle mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <span className="text-4xl font-bold text-white">AM</span>
                    </div>
                    <p className="animate-bounce text-sm font-medium text-white">👋</p>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Experience Cards */}
            {experiences.slice(0, 3).map((exp, idx) => (
              <BentoCard
                key={exp.id}
                className={cn(
                  'hover-lift col-span-1',
                  idx === 0 && 'md:col-span-2 lg:col-span-1',
                  'animate-slide-up',
                  idx === 0 && 'animation-delay-400',
                  idx === 1 && 'animation-delay-500',
                  idx === 2 && 'animation-delay-600'
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-xl',
                        idx === 0 ? 'bg-primary-600' : 'bg-neutral-300'
                      )}
                    >
                      <span className="text-lg">{idx === 0 ? '💼' : '📋'}</span>
                    </div>
                    {idx === 0 && (
                      <span className="neuro-badge rounded-full px-2 py-1 text-xs font-medium text-neutral-700">
                        Current
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-neutral-900">{exp.title}</h4>
                    <p className="text-primary-600 text-sm font-medium">{exp.company}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {new Date(exp.startDate).getFullYear()} -{' '}
                      {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {exp.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="neuro-badge px-2 py-1 text-xs font-medium text-neutral-700 transition-all hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
