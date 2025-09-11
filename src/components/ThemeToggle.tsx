import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '💻';
      default:
        return '☀️';
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode';
      case 'dark':
        return 'Dark mode';
      case 'system':
        return 'System mode';
      default:
        return 'Light mode';
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      className="focus-cozy inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cozy-cream-100 hover:bg-cozy-cream-200 dark:bg-cozy-brown-800 dark:hover:bg-cozy-brown-700 transition-colors duration-200"
      title={getLabel()}
      aria-label={getLabel()}
    >
      <span className="text-lg" role="img" aria-hidden="true">
        {getIcon()}
      </span>
    </button>
  );
}