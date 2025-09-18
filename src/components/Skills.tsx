import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';
import { skills } from '@/data';

interface SkillsProps extends BaseComponentProps {
  title?: string;
}

export function Skills({ title = 'Skills & Technologies', className }: SkillsProps) {
  // Group skills by category and select top 3 for each
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '⚛️',
      skills: skills
        .filter(skill => skill.category === 'frontend')
        .slice(0, 3)
        .map(skill => ({ name: skill.name, icon: skill.icon })),
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: skills
        .filter(skill => skill.category === 'backend')
        .slice(0, 3)
        .map(skill => ({ name: skill.name, icon: skill.icon })),
    },
    {
      name: 'Database',
      icon: '🗄️',
      skills: skills
        .filter(skill => skill.category === 'database')
        .slice(0, 3)
        .map(skill => ({ name: skill.name, icon: skill.icon })),
    },
    {
      name: 'Tools',
      icon: '🛠️',
      skills: skills
        .filter(skill => skill.category === 'tools')
        .slice(0, 3)
        .map(skill => ({ name: skill.name, icon: skill.icon })),
    },
  ];

  return (
    <section id="skills" className={cn('bg-neutral-50 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Here are the core technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-6">
                <div className="text-center">
                  <div className="mb-3 text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-800">{category.name}</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={cn(
                        'group flex items-center justify-center rounded-lg bg-white px-4 py-3 shadow-sm',
                        'border border-neutral-200 transition-all duration-200',
                        'hover:border-primary-300 hover:-translate-y-1 hover:shadow-md'
                      )}
                      style={{
                        animationDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`,
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <SkillIcon name={skill.icon || ''} />
                        <span className="font-medium text-neutral-700 group-hover:text-neutral-900">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Developer Setup Section */}
          <div className="mt-20">
            <h3 className="mb-12 text-center text-2xl font-bold text-neutral-800">
              My Development Setup
            </h3>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Hardware */}
              <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      className="h-8 w-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-neutral-800">Hardware</h4>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>MacBook Pro M2</li>
                    <li>32GB RAM</li>
                    <li>External 4K Monitor</li>
                    <li>Mechanical Keyboard</li>
                  </ul>
                </div>
              </div>

              {/* Software */}
              <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-8 w-8 text-blue-600"
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
                  <h4 className="mb-2 text-lg font-semibold text-neutral-800">Software</h4>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>VS Code</li>
                    <li>iTerm2 + Zsh</li>
                    <li>Figma</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>

              {/* Workflow */}
              <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-neutral-800">Workflow</h4>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>Git Flow</li>
                    <li>CI/CD Pipelines</li>
                    <li>Test-Driven Development</li>
                    <li>Code Reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skill Icon Component
function SkillIcon({ name }: { name?: string }) {
  const iconMap: Record<string, string> = {
    react: '⚛️',
    typescript: '🔷',
    javascript: '🟨',
    html: '🔶',
    css: '🎨',
    tailwind: '💨',
    csharp: '🔵',
    dotnet: '🔷',
    nodejs: '🟢',
    express: '⚡',
    sqlserver: '🗄️',
    mongodb: '🍃',
    git: '📊',
    docker: '🐳',
    vscode: '💙',
  };

  return <span className="text-lg">{iconMap[name || ''] || '⚙️'}</span>;
}
