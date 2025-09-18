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

          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left Column: Profile & Info */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="group relative">
                  <div className="from-primary-400 to-primary-600 absolute -inset-4 rounded-full bg-gradient-to-r opacity-20 blur transition duration-300 group-hover:opacity-30"></div>
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl">
                    <img
                      src="/img/am.jpg"
                      alt="Anawat Muangjai - Full Stack Developer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="to-primary-500/10 absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent"></div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute right-4 bottom-4 flex items-center space-x-2 rounded-full border bg-white px-3 py-2 shadow-lg">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-neutral-700">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-neutral-900">Hello, I'm Anawat 👋</h3>
                  <p className="text-primary-600 text-lg font-medium">
                    Full Stack Developer & Problem Solver
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-balance text-neutral-600">
                  {description}
                </p>

                {/* Quick Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 lg:justify-start">
                    <div className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-primary-600 text-sm">🎯</span>
                    </div>
                    <span className="text-neutral-700">Focused on clean, scalable solutions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 lg:justify-start">
                    <div className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-primary-600 text-sm">🚀</span>
                    </div>
                    <span className="text-neutral-700">
                      Passionate about modern web technologies
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 lg:justify-start">
                    <div className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-primary-600 text-sm">💡</span>
                    </div>
                    <span className="text-neutral-700">Always learning and sharing knowledge</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className={cn(
                      'inline-flex items-center',
                      'bg-primary-600 rounded-lg px-8 py-3 font-semibold text-white',
                      'hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg',
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

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center lg:text-left">
                    <div className="text-primary-600 text-3xl font-bold">5+</div>
                    <div className="text-sm text-neutral-600">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-primary-600 text-3xl font-bold">20+</div>
                    <div className="text-sm text-neutral-600">Projects Delivered</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-primary-600 text-3xl font-bold">10+</div>
                    <div className="text-sm text-neutral-600">Technologies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Experience Timeline */}
            <div className="lg:pl-8">
              <div className="sticky top-8">
                <h3 className="mb-8 flex items-center text-2xl font-bold text-neutral-900">
                  <span className="mr-3">💼</span>
                  Experience Journey
                </h3>
                <ExperienceTimeline experiences={experiences} />
              </div>
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
