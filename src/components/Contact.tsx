import { personalInfo } from '../data';

export default function Contact() {
  const { email, social } = personalInfo;

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      description: 'Drop me a line anytime',
      value: email,
      href: `mailto:${email}`,
      color: 'cozy-orange'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      value: 'linkedin.com/in/anawatse',
      href: social.linkedin,
      color: 'cozy-brown'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      title: 'GitHub',
      description: 'Check out my repositories',
      value: 'github.com/anawatmuangjai',
      href: social.github,
      color: 'cozy-cream'
    }
  ];

  const getColorClasses = (color: string) => {
    const variants = {
      'cozy-orange': 'bg-cozy-orange-500 hover:bg-cozy-orange-600',
      'cozy-brown': 'bg-cozy-brown-500 hover:bg-cozy-brown-600',
      'cozy-cream': 'bg-cozy-cream-600 hover:bg-cozy-cream-700'
    };
    return variants[color as keyof typeof variants];
  };

  return (
    <section id="contact" className="py-20 bg-cozy-cream-100 dark:bg-cozy-brown-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-cozy-brown-900 dark:text-cozy-cream-50 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-cozy-brown-700 dark:text-cozy-cream-200 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.title !== 'Email' ? '_blank' : undefined}
              rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group block bg-white dark:bg-cozy-brown-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-cozy-cream-200 dark:border-cozy-brown-700"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(method.color)} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold text-cozy-brown-900 dark:text-cozy-cream-50 mb-2">
                {method.title}
              </h3>
              
              <p className="text-cozy-brown-600 dark:text-cozy-cream-300 mb-4">
                {method.description}
              </p>
              
              <p className="text-cozy-brown-800 dark:text-cozy-cream-100 font-medium group-hover:text-cozy-orange-600 dark:group-hover:text-cozy-orange-400 transition-colors duration-200">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white dark:bg-cozy-brown-900 rounded-2xl p-8 shadow-lg border border-cozy-cream-200 dark:border-cozy-brown-700">
            <h3 className="text-2xl font-bold text-cozy-brown-900 dark:text-cozy-cream-50 mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-cozy-brown-700 dark:text-cozy-cream-200 mb-6 max-w-md mx-auto">
              Whether you need a full-stack application, API development, or technical consultation, I'm here to help bring your ideas to life.
            </p>
            <a
              href={`mailto:${email}?subject=Project Inquiry`}
              className="focus-cozy inline-flex items-center px-8 py-3 bg-cozy-orange-500 hover:bg-cozy-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}