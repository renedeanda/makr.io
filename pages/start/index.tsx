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
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ship Your First Web App
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Using AI Tools
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          An interactive, step-by-step guide that teaches you to ship a real web app—from idea to production—using AI coding tools. No technical experience required.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          className={cn(
            'rounded-xl border p-6 text-center',
            theme === 'dark'
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-gray-200 bg-white'
          )}
        >
          <FaClock className="h-8 w-8 mx-auto mb-3 text-blue-500" />
          <h3 className="text-3xl font-bold mb-1">2-5 hours</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total active time
          </p>
        </div>

        <div
          className={cn(
            'rounded-xl border p-6 text-center',
            theme === 'dark'
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-gray-200 bg-white'
          )}
        >
          <FaDollarSign className="h-8 w-8 mx-auto mb-3 text-green-500" />
          <h3 className="text-3xl font-bold mb-1">~$10</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total cost (just the domain)
          </p>
        </div>

        <div
          className={cn(
            'rounded-xl border p-6 text-center',
            theme === 'dark'
              ? 'border-gray-700 bg-gray-800/50'
              : 'border-gray-200 bg-white'
          )}
        >
          <FaRocket className="h-8 w-8 mx-auto mb-3 text-purple-500" />
          <h3 className="text-3xl font-bold mb-1">8 steps</h3>
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
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Workflow (8 Steps)</h2>
        <div className="space-y-3">
          {STEPS.map((step, index) => (
            <Link key={step.id} href={step.path}>
              <div
                className={cn(
                  'flex items-center gap-4 rounded-xl border p-4 transition-all cursor-pointer group',
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/30 hover:bg-gray-800/60 hover:border-gray-600'
                    : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
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
      <div className="text-center pt-8">
        <Link href="/start/step-0">
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            {hasStarted ? 'Continue Your Journey' : 'Start Your Journey'}
          </button>
        </Link>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Join thousands of makers who've shipped their first app
        </p>
      </div>
    </StartLayout>
  );
}
