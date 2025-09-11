import { personalInfo } from '../data';

export default function Hero() {
  const { name, title, location, bio, avatar, email } = personalInfo;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cozy-cream-50 via-cozy-cream-100 to-cozy-brown-100 dark:from-cozy-brown-900 dark:via-cozy-brown-800 dark:to-cozy-brown-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cozy-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-cozy-brown-400"/>
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cozy-orange-300"/>
              <circle cx="50" cy="10" r="1" fill="currentColor" className="text-cozy-orange-300"/>
              <circle cx="10" cy="50" r="1" fill="currentColor" className="text-cozy-orange-300"/>
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-cozy-orange-300"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cozy-pattern)"/>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <img
              src={avatar}
              alt={name}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-2xl ring-4 ring-cozy-cream-200 dark:ring-cozy-brown-600"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cozy-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">👋</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-cozy-brown-900 dark:text-cozy-cream-50 mb-4">
            {name}
          </h1>
          
          <p className="text-xl md:text-2xl text-cozy-brown-700 dark:text-cozy-cream-200 mb-2 font-medium">
            {title}
          </p>
          
          <div className="flex items-center justify-center text-cozy-brown-600 dark:text-cozy-cream-300 mb-8">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </div>

          {/* Bio */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg leading-relaxed text-cozy-brown-700 dark:text-cozy-cream-200">
              {bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="focus-cozy inline-flex items-center px-8 py-3 bg-cozy-orange-500 hover:bg-cozy-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <a
              href={`mailto:${email}`}
              className="focus-cozy inline-flex items-center px-8 py-3 bg-transparent border-2 border-cozy-brown-300 hover:border-cozy-brown-400 dark:border-cozy-cream-300 dark:hover:border-cozy-cream-200 text-cozy-brown-700 dark:text-cozy-cream-200 font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cozy-brown-400 dark:text-cozy-cream-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}