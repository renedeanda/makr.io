import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { STEPS } from '../../lib/steps';
import StartLayout from '../../components/start/StartLayout';
import BadgeDisplay from '../../components/start/BadgeDisplay';
import { cn, formatDuration } from '../../lib/utils';
import { FaRocket, FaClock, FaDollarSign, FaCheck } from 'react-icons/fa';

export default function StartPage() {
  const { theme } = useContext(ThemeContext);
  const { shippedProjects, totalBuildTime, currentStepId } = useProgressStore();

  const hasStarted = currentStepId !== 'step-0' || shippedProjects.length > 0;

  return (
    <StartLayout
      title="Ship Your First App"
      description="Learn to ship your first web app using AI tools in just a few hours"
    >
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Ship Your First Web App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          An interactive, step-by-step guide that teaches you to ship a real web app—from idea to production—using AI coding tools. No technical experience required.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div
          className={cn(
            'rounded-lg border p-6',
            theme === 'dark'
              ? 'border-gray-800 bg-gray-900/50'
              : 'border-gray-200 bg-gray-50'
          )}
        >
          <div className="text-2xl font-bold mb-1">2-5 hours</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total active time
          </p>
        </div>

        <div
          className={cn(
            'rounded-lg border p-6',
            theme === 'dark'
              ? 'border-gray-800 bg-gray-900/50'
              : 'border-gray-200 bg-gray-50'
          )}
        >
          <div className="text-2xl font-bold mb-1">~$10</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total cost (just the domain)
          </p>
        </div>

        <div
          className={cn(
            'rounded-lg border p-6',
            theme === 'dark'
              ? 'border-gray-800 bg-gray-900/50'
              : 'border-gray-200 bg-gray-50'
          )}
        >
          <div className="text-2xl font-bold mb-1">8 steps</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            From idea to live app
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <div
        className={cn(
          'rounded-xl border p-8 mb-12',
          theme === 'dark'
            ? 'border-gray-700 bg-gray-800/50'
            : 'border-gray-200 bg-gray-50'
        )}
      >
        <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Modern development workflow (GitHub → Vercel)',
            'AI-assisted coding with tools like Claude Code',
            'Domain management and DNS configuration',
            'Continuous deployment pipelines',
            'Building in public and sharing your work',
            'Professional development tools and workflows',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Workflow */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">The 8 Steps</h2>
        <div className="space-y-4">
          {STEPS.map((step, index) => (
            <Link key={step.id} href={step.path}>
              <div
                className={cn(
                  'flex items-start gap-5 rounded-lg border p-5 transition-all cursor-pointer group',
                  theme === 'dark'
                    ? 'border-gray-800 hover:border-gray-700 hover:bg-gray-900/30'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                )}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm flex-shrink-0 mt-1">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 flex-shrink-0 mt-1 font-mono">
                  {step.estimatedTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Your Progress */}
      {hasStarted && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Progress</h2>

          {shippedProjects.length > 0 && (
            <div
              className={cn(
                'rounded-xl border p-6 mb-6',
                theme === 'dark'
                  ? 'border-green-800 bg-green-900/20'
                  : 'border-green-200 bg-green-50'
              )}
            >
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                🎉 Congratulations!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                You've shipped {shippedProjects.length} {shippedProjects.length === 1 ? 'app' : 'apps'}!
                {totalBuildTime > 0 && ` Total build time: ${formatDuration(totalBuildTime)}`}
              </p>

              <div className="mt-4 space-y-2">
                {shippedProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {project.url}
                      </a>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDuration(project.timeSpent)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <BadgeDisplay />
        </div>
      )}

      {/* CTA */}
      <div className="pt-8">
        <Link href="/start/step-0">
          <button className="w-full rounded-lg bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-base font-semibold hover:opacity-90 transition-opacity">
            {hasStarted ? 'Continue Your Journey →' : 'Start Your Journey →'}
          </button>
        </Link>
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-500">
          Free to follow • Takes 2-5 hours • Just $10 for the domain
        </p>
      </div>
    </StartLayout>
  );
}
