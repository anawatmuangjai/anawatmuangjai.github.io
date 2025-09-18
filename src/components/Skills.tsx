import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface SkillsProps extends BaseComponentProps {
  title?: string;
}

export function Skills({ title = 'Skills & Technologies', className }: SkillsProps) {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-800' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'C# / .NET', level: 90, color: 'bg-purple-600' },
        { name: 'Express.js', level: 80, color: 'bg-gray-600' },
        { name: 'GraphQL', level: 70, color: 'bg-pink-500' },
      ],
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-600' },
        { name: 'SQL Server', level: 90, color: 'bg-red-600' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'Docker', level: 80, color: 'bg-blue-400' },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95, color: 'bg-orange-600' },
        { name: 'VS Code', level: 98, color: 'bg-blue-500' },
        { name: 'GitHub Actions', level: 85, color: 'bg-gray-700' },
        { name: 'Vite', level: 90, color: 'bg-purple-500' },
      ],
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
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-6">
                <h3 className="text-center text-xl font-bold text-neutral-800">{category.name}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-700">{skill.name}</span>
                        <span className="text-sm text-neutral-500">{skill.level}%</span>
                      </div>

                      <div className="h-2 w-full rounded-full bg-neutral-200">
                        <div
                          className={cn(
                            'h-2 rounded-full transition-all duration-1000 ease-out',
                            skill.color
                          )}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`,
                          }}
                        ></div>
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
