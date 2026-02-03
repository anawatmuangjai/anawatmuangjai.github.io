import { cn } from '@/utils';
import type { BaseComponentProps, Project } from '@/types';
import { featuredProjects } from '@/data';
import { BentoCard } from './BentoGrid';

interface FeaturedProjectsProps extends BaseComponentProps {
  title?: string;
}

export function FeaturedProjects({
  title = 'Featured Projects',
  className,
}: FeaturedProjectsProps) {
  return (
    <section id="projects" className={cn('bg-neutral-100 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-500 mx-auto h-1 w-24 rounded-full"></div>
            <p className="mt-6 text-lg text-neutral-600">
              Discover my latest work and contributions to the developer community
            </p>
          </div>

          {/* Auto-sliding Testimonial-style Carousel */}
          <div className="testimonial-carousel py-4">
            <div className="testimonial-track">
              {/* Duplicate projects for infinite scroll effect */}
              {[...featuredProjects, ...featuredProjects].map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="testimonial-item">
                  <ProjectCard project={project} featured={idx === 0} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
  index?: number;
}) {
  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⚡';
      case 'planned':
        return '📋';
      default:
        return '•';
    }
  };

  return (
    <BentoCard className={cn('hover-lift scroll-reveal-scale h-full')}>
      <div className="flex h-full min-h-[320px] flex-col">
        {/* Project Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center space-x-2">
              <span className="text-lg">{getStatusLabel(project.status)}</span>
              <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
            </div>
            <p
              className={cn(
                'text-sm leading-relaxed text-neutral-600',
                featured ? 'line-clamp-3' : 'line-clamp-2'
              )}
            >
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 6 : 3).map((tech, techIdx) => (
              <span
                key={tech}
                className="neuro-badge hover-glow animate-fade-in-scale px-2.5 py-1 text-xs font-medium text-neutral-700 transition-all hover:scale-110"
                style={{ animationDelay: `${0.5 + techIdx * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 6 : 3) && (
              <span className="neuro-badge animate-fade-in px-2.5 py-1 text-xs font-medium text-neutral-500">
                +{project.technologies.length - (featured ? 6 : 3)}
              </span>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-auto flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'neuro-button flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700',
                'hover-scale group transition-all duration-200'
              )}
            >
              <GithubIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'neuro-button neuro-button-primary flex items-center gap-2 px-4 py-2 text-sm font-medium',
                'transition-all duration-200'
              )}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </BentoCard>
  );
}

// Icons
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
