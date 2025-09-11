import { personalInfo } from '../data';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { social } = personalInfo;

  return (
    <nav className="fixed top-0 w-full z-50 bg-cozy-cream-50/80 dark:bg-cozy-brown-900/80 backdrop-blur-md border-b border-cozy-cream-200 dark:border-cozy-brown-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 md:hidden">
            <ThemeToggle />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-cozy flex items-center space-x-2 text-cozy-brown-700 hover:text-cozy-orange-500 dark:text-cozy-cream-200 dark:hover:text-cozy-orange-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              <span className="hidden lg:inline">Facebook</span>
            </a>
            
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-cozy flex items-center space-x-2 text-cozy-brown-700 hover:text-cozy-orange-500 dark:text-cozy-cream-200 dark:hover:text-cozy-orange-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
            
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-cozy flex items-center space-x-2 text-cozy-brown-700 hover:text-cozy-orange-500 dark:text-cozy-cream-200 dark:hover:text-cozy-orange-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="hidden lg:inline">GitHub</span>
            </a>
            
            <a
              href={social.gitbook}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-cozy flex items-center space-x-2 text-cozy-brown-700 hover:text-cozy-orange-500 dark:text-cozy-cream-200 dark:hover:text-cozy-orange-400 transition-colors duration-200"
              aria-label="GitBook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4zM3 15.5a.5.5 0 0 0 .5.5H4a1 1 0 0 1 1 1v.5a.5.5 0 0 0 .5.5h13.5V7H4a1 1 0 0 1-1-1V15.5z"/>
              </svg>
              <span className="hidden lg:inline">GitBook</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}