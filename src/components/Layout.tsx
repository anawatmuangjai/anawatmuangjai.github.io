interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-cozy-cream-50 dark:bg-cozy-brown-900 text-cozy-brown-900 dark:text-cozy-cream-50 transition-colors duration-300">
      {children}
    </div>
  );
}