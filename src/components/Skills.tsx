export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'C#', level: 95 },
        { name: '.NET Core', level: 90 },
        { name: 'ASP.NET', level: 88 },
        { name: 'SQL Server', level: 85 },
        { name: 'Entity Framework', level: 82 }
      ],
      color: 'cozy-orange'
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 82 },
        { name: 'HTML/CSS', level: 88 },
        { name: 'Tailwind CSS', level: 78 }
      ],
      color: 'cozy-brown'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'MongoDB', level: 72 },
        { name: 'Node.js', level: 75 }
      ],
      color: 'cozy-cream'
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' = 'bg') => {
    const variants = {
      'cozy-orange': type === 'bg' ? 'bg-cozy-orange-500' : 'text-cozy-orange-600 dark:text-cozy-orange-400',
      'cozy-brown': type === 'bg' ? 'bg-cozy-brown-500' : 'text-cozy-brown-600 dark:text-cozy-brown-400',
      'cozy-cream': type === 'bg' ? 'bg-cozy-cream-600' : 'text-cozy-cream-700 dark:text-cozy-cream-400'
    };
    return variants[color as keyof typeof variants];
  };

  return (
    <section className="py-20 bg-cozy-cream-50 dark:bg-cozy-brown-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-cozy-brown-900 dark:text-cozy-cream-50 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-cozy-brown-700 dark:text-cozy-cream-200 max-w-2xl mx-auto">
            8 years of hands-on experience with modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-cozy-brown-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className={`text-2xl font-bold mb-6 ${getColorClasses(category.color, 'text')}`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-cozy-brown-800 dark:text-cozy-cream-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cozy-brown-600 dark:text-cozy-cream-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-cozy-cream-200 dark:bg-cozy-brown-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-cozy-orange-100 dark:bg-cozy-orange-900 text-cozy-orange-800 dark:text-cozy-orange-200 rounded-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Always learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}