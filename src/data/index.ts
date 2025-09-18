import type { Project, Skill, ContactInfo, NavigationItem, Experience } from '@/types';

// Navigation data
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'code-samples', label: 'Code', href: '#code-samples' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Featured projects data
export const featuredProjects: Project[] = [
  {
    id: 'cozy-expense',
    title: 'CozyExpense',
    description:
      'A comprehensive expense tracking application built with .NET and React. Features real-time expense categorization, budget planning, and financial analytics.',
    longDescription:
      'CozyExpense is a full-stack personal finance management application that helps users track expenses, set budgets, and analyze spending patterns. Built with clean architecture principles using .NET 8, Entity Framework, and React with TypeScript.',
    technologies: ['C#', '.NET 8', 'React', 'TypeScript', 'Entity Framework', 'SQL Server'],
    imageUrl: '/img/projects/cozy-expense.jpg',
    liveUrl: 'https://cozyexpense.anawatmuangjai.dev',
    githubUrl: 'https://github.com/anawatmuangjai/cozy-expense',
    featured: true,
    status: 'completed',
    category: 'web',
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio',
    description:
      'Modern, responsive portfolio website showcasing development skills and projects. Built with React, TypeScript, and Tailwind CSS.',
    longDescription:
      'A sleek, developer-focused portfolio website featuring interactive terminal mockups, VS Code themes, and smooth animations. Demonstrates modern web development practices and design principles.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages'],
    imageUrl: '/img/projects/portfolio.jpg',
    liveUrl: 'https://anawatmuangjai.github.io',
    githubUrl: 'https://github.com/anawatmuangjai/anawatmuangjai.github.io',
    featured: true,
    status: 'completed',
    category: 'web',
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description:
      'Scalable API Gateway built with .NET Core for microservices architecture. Includes authentication, rate limiting, and service discovery.',
    longDescription:
      'Enterprise-grade API Gateway solution that provides centralized authentication, request routing, rate limiting, and monitoring for microservices. Built with OCELOT and .NET Core.',
    technologies: ['C#', '.NET Core', 'OCELOT', 'Docker', 'Redis', 'JWT'],
    imageUrl: '/img/projects/api-gateway.jpg',
    githubUrl: 'https://github.com/anawatmuangjai/microservices-gateway',
    featured: true,
    status: 'completed',
    category: 'api',
  },
  {
    id: 'react-components',
    title: 'React Component Library',
    description:
      'Reusable UI component library built with React, TypeScript, and Storybook. Published to NPM with comprehensive documentation.',
    longDescription:
      'A comprehensive set of reusable React components designed for modern web applications. Features TypeScript support, Storybook documentation, and automated testing.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'NPM'],
    imageUrl: '/img/projects/component-library.jpg',
    githubUrl: 'https://github.com/anawatmuangjai/react-ui-components',
    featured: true,
    status: 'in-progress',
    category: 'library',
  },
  {
    id: 'data-analytics',
    title: 'Sales Analytics Dashboard',
    description:
      'Real-time sales analytics dashboard with interactive charts and data visualization. Built with Node.js backend and React frontend.',
    longDescription:
      'A powerful analytics platform that provides real-time insights into sales performance, customer behavior, and revenue trends. Features interactive charts, custom reports, and automated alerts.',
    technologies: ['Node.js', 'Express', 'React', 'Chart.js', 'MongoDB', 'Socket.io'],
    imageUrl: '/img/projects/analytics-dashboard.jpg',
    githubUrl: 'https://github.com/anawatmuangjai/sales-analytics',
    featured: true,
    status: 'completed',
    category: 'web',
  },
  {
    id: 'mobile-app',
    title: 'Task Management Mobile App',
    description:
      'Cross-platform mobile application for task management and team collaboration. Built with React Native and Firebase.',
    longDescription:
      'A comprehensive task management solution for teams and individuals. Features real-time collaboration, push notifications, offline support, and cloud synchronization.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    imageUrl: '/img/projects/task-manager.jpg',
    githubUrl: 'https://github.com/anawatmuangjai/task-manager-mobile',
    featured: true,
    status: 'in-progress',
    category: 'mobile',
  },
];

// Skills data
export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', proficiency: 'expert', icon: 'react' },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 'expert',
    icon: 'typescript',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 'expert',
    icon: 'javascript',
  },
  { id: 'html', name: 'HTML5', category: 'frontend', proficiency: 'expert', icon: 'html' },
  { id: 'css', name: 'CSS3', category: 'frontend', proficiency: 'expert', icon: 'css' },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 'advanced',
    icon: 'tailwind',
  },

  // Backend
  { id: 'csharp', name: 'C#', category: 'backend', proficiency: 'expert', icon: 'csharp' },
  { id: 'dotnet', name: '.NET Core', category: 'backend', proficiency: 'expert', icon: 'dotnet' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', proficiency: 'advanced', icon: 'nodejs' },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 'advanced',
    icon: 'express',
  },

  // Database
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'database',
    proficiency: 'advanced',
    icon: 'sqlserver',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    proficiency: 'intermediate',
    icon: 'mongodb',
  },

  // Tools
  { id: 'git', name: 'Git', category: 'tools', proficiency: 'expert' },
  { id: 'docker', name: 'Docker', category: 'tools', proficiency: 'advanced' },
  { id: 'vscode', name: 'VS Code', category: 'tools', proficiency: 'expert' },
];

// Experience data
export const experiences: Experience[] = [
  {
    id: 'senior-fullstack-dev',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Co.',
    location: 'Bangkok, Thailand',
    startDate: '2022-01',
    endDate: null, // Current position
    description:
      'Leading development of scalable web applications using React, TypeScript, and .NET Core.',
    achievements: [
      'Architected and delivered 3 major client projects increasing revenue by 40%',
      'Mentored 5 junior developers and established code review processes',
      'Reduced application load times by 60% through performance optimization',
    ],
    technologies: ['React', 'TypeScript', '.NET Core', 'Azure', 'SQL Server'],
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    company: 'Digital Agency Ltd.',
    location: 'Bangkok, Thailand',
    startDate: '2020-03',
    endDate: '2021-12',
    description:
      'Developed responsive web applications and RESTful APIs for various client projects.',
    achievements: [
      'Built 10+ responsive websites with 99.9% uptime',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
      'Collaborated with design team to improve user experience metrics by 35%',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    company: 'Startup Inc.',
    location: 'Bangkok, Thailand',
    startDate: '2019-06',
    endDate: '2020-02',
    description:
      'Focused on creating modern, responsive user interfaces using React and modern JavaScript.',
    achievements: [
      'Developed component library used across 5 different projects',
      'Improved website performance scores from 65 to 95 on Lighthouse',
      'Established frontend testing practices with 90% code coverage',
    ],
    technologies: ['React', 'JavaScript', 'Sass', 'Jest', 'Webpack'],
  },
];

// Contact information
export const contactInfo: ContactInfo = {
  email: 'hello@anawatmuangjai.dev',
  location: 'Bangkok, Thailand',
  social: {
    github: 'https://github.com/anawatmuangjai',
    linkedin: 'https://linkedin.com/in/anawatmuangjai',
    instagram: 'https://instagram.com/anawatmuangjai',
  },
};
