import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'cozy-file-service',
    title: 'Cozy File Service',
    description: 'A file management and sharing service built with modern web technologies. Provides secure file upload, storage, and sharing capabilities.',
    techStack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/anawatmuangjai/cozy-file-service',
    featured: true
  },
  {
    id: 'cozy-bs-api',
    title: 'Cozy BS API',
    description: 'A RESTful API service providing business logic and data management solutions. Features authentication, validation, and comprehensive API documentation.',
    techStack: ['C#', '.NET', 'SQL Server', 'Swagger', 'JWT'],
    githubUrl: 'https://github.com/anawatmuangjai/cozy-bs-api',
    featured: true
  },
  {
    id: 'cozy-expense',
    title: 'Cozy Expense',
    description: 'A personal expense tracking application with intuitive interface and comprehensive reporting. Helps users manage their finances effectively.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Local Storage', 'CSS Modules'],
    githubUrl: 'https://github.com/anawatmuangjai/cozy-expense',
    featured: true
  },
  {
    id: 'document-gitbook',
    title: 'Document GitBook',
    description: 'A comprehensive documentation hub covering software development topics, best practices, and technical guides. Organized knowledge base for developers.',
    techStack: ['GitBook', 'Markdown', 'Documentation', 'Technical Writing'],
    githubUrl: 'https://github.com/anawatmuangjai/Document-Gitbook',
    liveUrl: 'https://anawat-muangjai.gitbook.io/software-development/',
    featured: true
  }
];

export const personalInfo = {
  name: 'Anawat Muangjai',
  title: 'Software Developer - C# Developer',
  location: 'Bangkok, Thailand',
  email: 'anawat.muangjai@gmail.com',
  bio: '8 years of experience designing and developing applications based on Microsoft .NET technology. An expert in C# languages, with strong design skills, a wealth of software development knowledge and powerful problem solving abilities.',
  avatar: '/img/am.jpg',
  social: {
    github: 'https://github.com/anawatmuangjai',
    linkedin: 'https://www.linkedin.com/in/anawatse/',
    facebook: 'https://www.facebook.com/anawat.muangjai',
    gitbook: 'https://anawat-muangjai.gitbook.io/software-development/'
  }
};