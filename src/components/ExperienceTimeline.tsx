export default function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      period: '2016 - Present',
      title: 'Senior Software Developer',
      company: 'Microsoft .NET Ecosystem',
      description: 'Specializing in C# and .NET technologies, building scalable web applications and APIs. Leading development projects and mentoring junior developers.',
      highlights: [
        'Designed and developed enterprise-level applications',
        'Implemented microservices architecture',
        'Led team of developers on critical projects',
        'Optimized application performance and scalability'
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET', 'SQL Server', 'Azure']
    },
    {
      id: 2,
      period: '2020 - Present',
      title: 'Full-Stack Developer',
      company: 'Modern Web Technologies',
      description: 'Expanding expertise into modern frontend frameworks and cloud technologies. Building end-to-end solutions with React and TypeScript.',
      highlights: [
        'Developed responsive web applications',
        'Integrated REST APIs and GraphQL',
        'Implemented CI/CD pipelines',
        'Worked with cloud services (AWS, Azure)'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      id: 3,
      period: '2022 - Present',
      title: 'Technical Documentation Lead',
      company: 'Knowledge Sharing Initiative',
      description: 'Creating comprehensive technical documentation and educational content. Maintaining GitBook documentation hub for software development best practices.',
      highlights: [
        'Authored technical guides and tutorials',
        'Maintained comprehensive GitBook documentation',
        'Conducted knowledge sharing sessions',
        'Created developer onboarding resources'
      ],
      technologies: ['GitBook', 'Markdown', 'Technical Writing', 'Documentation']
    }
  ];

  return (
    <section className="py-20 bg-cozy-brown-50 dark:bg-cozy-brown-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-cozy-brown-900 dark:text-cozy-cream-50 mb-6">
            Experience Timeline
          </h2>
          <p className="text-lg text-cozy-brown-700 dark:text-cozy-cream-200 max-w-2xl mx-auto">
            My journey in software development over the years
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cozy-orange-300 dark:bg-cozy-orange-600"></div>

            {experiences.map((experience) => (
              <div key={experience.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-cozy-orange-500 rounded-full shadow-lg mr-8 flex-shrink-0">
                  <div className="w-8 h-8 bg-white dark:bg-cozy-brown-900 rounded-full flex items-center justify-center">
                    <span className="text-cozy-orange-600 font-bold text-sm">
                      {String(experience.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-cozy-brown-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cozy-brown-900 dark:text-cozy-cream-50 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-cozy-orange-600 dark:text-cozy-orange-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-cozy-cream-100 dark:bg-cozy-brown-700 text-cozy-brown-800 dark:text-cozy-cream-200 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-cozy-brown-700 dark:text-cozy-cream-200 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cozy-brown-800 dark:text-cozy-cream-100 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start text-cozy-brown-700 dark:text-cozy-cream-200"
                        >
                          <svg className="w-5 h-5 text-cozy-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-cozy-brown-800 dark:text-cozy-cream-100 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 text-sm font-medium bg-cozy-orange-100 dark:bg-cozy-orange-900 text-cozy-orange-800 dark:text-cozy-orange-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}