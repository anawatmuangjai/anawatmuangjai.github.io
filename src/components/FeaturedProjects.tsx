import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps, Project } from '@/types';
import { featuredProjects } from '@/data';

interface FeaturedProjectsProps extends BaseComponentProps {
  title?: string;
}

export function FeaturedProjects({
  title = 'Featured Projects',
  className,
}: FeaturedProjectsProps) {
  return (
    <section id="projects" className={cn('bg-neutral-50 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
          <div className="bg-primary-600 mx-auto h-1 w-24"></div>
          <p className="mt-6 text-lg text-neutral-600">
            Discover my latest work and contributions to the developer community
          </p>
        </div>

        <ScrollingProjects projects={featuredProjects} />
      </div>
    </section>
  );
}

// Scrolling Projects Component
function ScrollingProjects({ projects }: { projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let animationId: number;
    let startTime: number;
    const duration = 30000; // 30 seconds for full cycle

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      const scrollPosition = progress * maxScroll;
      scrollContainer.scrollLeft = scrollPosition;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-hidden pb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ scrollBehavior: 'auto' }}
    >
      {/* Render projects twice for seamless loop */}
      {[...projects, ...projects].map((project, index) => (
        <ProjectCard key={`${project.id}-${index}`} project={project} className="flex-shrink-0" />
      ))}
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <div
      className={cn(
        'w-80 rounded-xl bg-white p-6 shadow-lg transition-all duration-300',
        'border border-neutral-200 hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      {/* Project Header */}
      <div className="mb-4">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl leading-tight font-bold text-neutral-900">{project.title}</h3>
          <span
            className={cn(
              'rounded-full px-2 py-1 text-xs font-medium',
              getStatusColor(project.status)
            )}
          >
            {getStatusLabel(project.status)}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Project Links */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-1 text-sm font-medium text-neutral-600',
                'transition-colors duration-200 hover:text-neutral-900'
              )}
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-primary-600 flex items-center gap-1 text-sm font-medium',
                'hover:text-primary-700 transition-colors duration-200'
              )}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>

        {/* Category Badge */}
        <span className="text-xs text-neutral-500 capitalize">{project.category}</span>
      </div>
    </div>
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
