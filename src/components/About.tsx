import { cn } from '@/utils';
import type { BaseComponentProps, Experience } from '@/types';
import { experiences } from '@/data';

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
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Professional Summary */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-balance text-neutral-600">
                  {description}
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className={cn(
                      'inline-flex items-center',
                      'text-primary-600 px-8 py-3 font-semibold',
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

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-primary-600 text-2xl font-bold">5+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-primary-600 text-2xl font-bold">20+</div>
                  <div className="text-sm text-neutral-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-primary-600 text-2xl font-bold">10+</div>
                  <div className="text-sm text-neutral-600">Technologies Mastered</div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-neutral-900">Experience Timeline</h3>
              <ExperienceTimeline experiences={experiences} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Timeline Component
function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-4 w-px bg-neutral-200"></div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative pl-12">
            {/* Timeline dot */}
            <div
              className={cn(
                'absolute top-2 left-0 h-8 w-8 rounded-full border-4 border-white shadow-md',
                index === 0 ? 'bg-primary-600' : 'bg-neutral-400'
              )}
            >
              {index === 0 && (
                <div className="bg-primary-600 absolute inset-0 animate-pulse rounded-full opacity-75"></div>
              )}
            </div>

            {/* Experience content */}
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-bold text-neutral-900">{experience.title}</h4>
                <p className="text-primary-600 font-medium">{experience.company}</p>
                <p className="text-sm text-neutral-500">
                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)} •{' '}
                  {experience.location}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-neutral-600">{experience.description}</p>

              {/* Key achievements */}
              <div className="space-y-1">
                {experience.achievements.slice(0, 2).map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="bg-primary-600 mt-2 h-1 w-1 flex-shrink-0 rounded-full"></div>
                    <p className="text-sm text-neutral-600">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-2">
                {experience.technologies.slice(0, 4).map(tech => (
                  <span
                    key={tech}
                    className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
