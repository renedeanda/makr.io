import { ReactNode, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';
import ProgressTracker from './ProgressTracker';
import { FaSun, FaMoon, FaHome } from 'react-icons/fa';

interface StartLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function StartLayout({ children, title, description }: StartLayoutProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const pageTitle = title ? `${title} - makr.io/start` : 'Ship Your First App - makr.io/start';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || 'Learn to ship your first web app using AI tools in just a few hours'} />
        <meta name="theme-color" content={theme === 'dark' ? '#111827' : '#FFFFFF'} />
      </Head>

      {/* Fixed Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
                  <FaHome className="h-4 w-4" />
                  <span className="text-sm font-medium">Home</span>
                </div>
              </Link>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
              <Link href="/start">
                <h1 className="text-xl font-bold cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  makr.io/start
                </h1>
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-lg transition-all',
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              )}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block">
            <ProgressTracker />
          </aside>

          {/* Content Area */}
          <main className="min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
