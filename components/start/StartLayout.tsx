import { ReactNode, useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';
import ProgressTracker from './ProgressTracker';
import BadgeModal from './BadgeModal';
import { FaSun, FaMoon, FaHome, FaTrophy } from 'react-icons/fa';

interface StartLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
}

export default function StartLayout({ children, title, description, ogImage, canonical }: StartLayoutProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const pageTitle = title ? `${title} - makr.io/start` : 'Ship Your First App - makr.io/start';
  const pageDescription = description || 'Learn to ship your first web app using AI tools in just a few hours';
  const pageOgImage = ogImage || 'https://makr.io/og-start.png';
  const pageUrl = canonical || 'https://makr.io/start';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="theme-color" content={theme === 'dark' ? '#111827' : '#FFFFFF'} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="makr.io" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Fixed Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
                  ← Home
                </span>
              </Link>
              <Link href="/start">
                <h1 className="text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity">
                  Ship Your First App
                </h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBadgeModal(true)}
                className={cn(
                  'p-2 rounded-lg transition-all',
                  theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                )}
                aria-label="View Badges"
              >
                <FaTrophy className="h-5 w-5 text-yellow-500" />
              </button>
              <button
                onClick={toggleTheme}
                className={cn(
                  'p-2 rounded-lg transition-all',
                  theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                )}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <BadgeModal isOpen={showBadgeModal} onClose={() => setShowBadgeModal(false)} />

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[200px_1fr]">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block">
            <ProgressTracker />
          </aside>

          {/* Content Area */}
          <main className="min-w-0 max-w-3xl">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
