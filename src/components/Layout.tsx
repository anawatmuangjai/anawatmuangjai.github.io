import type { ReactNode } from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface LayoutProps extends BaseComponentProps {
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}

export function Layout({ children, headerContent, footerContent, className }: LayoutProps) {
  return (
    <div className={cn('flex min-h-screen flex-col', className)}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">{headerContent || <DefaultHeader />}</div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-8">{footerContent || <DefaultFooter />}</div>
      </footer>
    </div>
  );
}

function DefaultHeader() {
  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl font-bold text-neutral-900">Anawat Muangjai</div>

      <div className="hidden items-center space-x-8 md:flex">
        {navigation.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-primary-600 text-neutral-700 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="hover:text-primary-600 p-2 text-neutral-700 md:hidden"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}

function DefaultFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center">
      <p className="text-neutral-400">© {currentYear} Anawat Muangjai. All rights reserved.</p>
    </div>
  );
}
