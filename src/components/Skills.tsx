import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';
import { skills } from '@/data';
import { BentoGrid, BentoCard } from './BentoGrid';

interface SkillsProps extends BaseComponentProps {
  title?: string;
}

export function Skills({ title = 'Skills & Technologies', className }: SkillsProps) {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '⚛️',
      color: 'from-primary-200 to-primary-400',
      skills: skills.filter(skill => skill.category === 'frontend').slice(0, 4),
    },
    {
      name: 'Backend',
      icon: '⚙️',
      color: 'from-primary-300 to-primary-500',
      skills: skills.filter(skill => skill.category === 'backend').slice(0, 4),
    },
    {
      name: 'Database',
      icon: '🗄️',
      color: 'from-primary-200 to-primary-400',
      skills: skills.filter(skill => skill.category === 'database').slice(0, 4),
    },
    {
      name: 'Tools',
      icon: '🛠️',
      color: 'from-primary-300 to-primary-500',
      skills: skills.filter(skill => skill.category === 'tools').slice(0, 4),
    },
  ];

  return (
    <section id="skills" className={cn('bg-neutral-50 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-500 mx-auto h-1 w-24 rounded-full"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Core technologies and tools I use to bring ideas to life
            </p>
          </div>

          <BentoGrid cols={4} gap="md">
            {skillCategories.map(category => (
              <BentoCard key={category.name} className="col-span-1 md:col-span-1 lg:col-span-1">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br',
                        category.color
                      )}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{category.name}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="group neuro-badge px-3 py-2 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center space-x-2">
                          <SkillIcon name={skill.icon || ''} />
                          <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                            {skill.name}
                          </span>
                        </div>
                      </div>
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
