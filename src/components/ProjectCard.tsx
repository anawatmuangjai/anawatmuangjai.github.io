import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, githubUrl, liveUrl } = project;

  return (
    <div className="group bg-cozy-cream-50 dark:bg-cozy-brown-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-cozy-cream-200 dark:border-cozy-brown-700">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-cozy-brown-900 dark:text-cozy-cream-50 group-hover:text-cozy-orange-600 dark:group-hover:text-cozy-orange-400 transition-colors duration-200">
          {title}
        </h3>
        <div className="flex space-x-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-cozy p-2 rounded-lg bg-cozy-cream-100 hover:bg-cozy-cream-200 dark:bg-cozy-brown-700 dark:hover:bg-cozy-brown-600 text-cozy-brown-700 dark:text-cozy-cream-200 transition-colors duration-200"
            aria-label="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-cozy p-2 rounded-lg bg-cozy-orange-100 hover:bg-cozy-orange-200 dark:bg-cozy-orange-900 dark:hover:bg-cozy-orange-800 text-cozy-orange-700 dark:text-cozy-orange-300 transition-colors duration-200"
              aria-label="View live demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-cozy-brown-700 dark:text-cozy-cream-200 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 text-sm font-medium bg-cozy-brown-100 dark:bg-cozy-brown-700 text-cozy-brown-800 dark:text-cozy-cream-200 rounded-full border border-cozy-brown-200 dark:border-cozy-brown-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}