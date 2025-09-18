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
    <section id="skills" className={cn('bg-neutral-50 py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Core technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-800">{category.name}</h3>
                </div>

                <div className="flex flex-col gap-2">
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
