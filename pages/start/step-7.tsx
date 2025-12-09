import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn, formatDuration } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import BadgeDisplay from '../../components/start/BadgeDisplay';
import CodeBlock from '../../components/start/CodeBlock';
import { FaTwitter, FaLinkedin, FaShare, FaRocket } from 'react-icons/fa';

export default function Step7() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, currentProject, shipProject } = useProgressStore();
  const [shipped, setShipped] = useState(false);

  useEffect(() => {
    setCurrentStep('step-7');
  }, [setCurrentStep]);

  const handleShip = () => {
    shipProject();
    completeStep('step-7');
    setShipped(true);
  };

  const buildTime = currentProject?.buildTimeSeconds || 0;
  const appName = currentProject?.name || 'Your App';
  const appUrl = currentProject?.customDomain || currentProject?.vercelUrl || 'yourdomain.io';

  const twitterPost = `Just shipped my first AI-built app! 🚀\n\nBuilt ${appName} in ${formatDuration(buildTime)} using AI tools\nLive at: ${appUrl}\n\nFollowing makr.io/start\n\n#buildinpublic #indiehacker #ai`;

  const linkedinPost = `Excited to share my first web app! 🎉\n\nI just built and deployed ${appName} using AI coding tools in ${formatDuration(buildTime)}. The barrier to building software has never been lower.\n\nCheck it out: ${appUrl}\n\nBuilt following makr.io/start guide\n\n#webdevelopment #ai #buildinpublic`;

  return (
    <StartLayout title="Step 7: Share Your Launch">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 7</span>
          <span>•</span>
          <span>~5 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Share Your Launch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Celebrate and share your accomplishment with the world
        </p>
      </header>

      <div className="space-y-8">
        {/* Congratulations */}
        {!shipped && (
          <section
            className={cn(
              'rounded-xl border p-8 text-center',
              theme === 'dark' ? 'border-purple-800 bg-purple-900/20' : 'border-purple-200 bg-purple-50'
            )}
          >
            <FaRocket className="h-16 w-16 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl font-bold mb-3">🎉 Congratulations!</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              You shipped your first app: <strong>{appName}</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Live at: <a href={`https://${appUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">{appUrl}</a>
            </p>
            {buildTime > 0 && (
              <p className="text-gray-600 dark:text-gray-400">
                Time to ship: <strong>{formatDuration(buildTime)}</strong>
              </p>
            )}
            <button
              onClick={handleShip}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Mark as Shipped! 🚀
            </button>
          </section>
        )}

        {shipped && (
          <section
            className={cn(
              'rounded-xl border p-8 text-center',
              theme === 'dark' ? 'border-green-800 bg-green-900/20' : 'border-green-200 bg-green-50'
            )}
          >
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-3">
              ✓ Officially Shipped!
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You're now part of the maker community. Time to share your win!
            </p>
          </section>
        )}

        {/* Share on Social */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaShare className="h-6 w-6 text-blue-500" />
            Share Your Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Twitter */}
            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaTwitter className="h-6 w-6 text-blue-400" />
                <h3 className="font-semibold text-lg">Twitter</h3>
              </div>
              <CodeBlock code={twitterPost} />
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterPost)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-2"
              >
                <FaTwitter />
                Tweet Now
              </a>
            </div>

            {/* LinkedIn */}
            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLinkedin className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg">LinkedIn</h3>
              </div>
              <CodeBlock code={linkedinPost} />
              <a
                href="https://www.linkedin.com/sharing/share-offsite/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-2"
              >
                <FaLinkedin />
                Share on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Your Badges */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Badges</h2>
          <BadgeDisplay />
        </section>

        {/* What's Next */}
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
          )}
        >
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Ready to build your second app?</strong> It'll be even faster now that you know the workflow!
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Iterate on your current app based on feedback</li>
              <li>• Build something more complex</li>
              <li>• Try a different AI tool to compare</li>
              <li>• Share your learnings with others</li>
            </ul>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="/start/step-1"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Build Another App
            </a>
            <a
              href="/"
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-colors',
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              )}
            >
              Back to Home
            </a>
          </div>
        </section>
      </div>

      <StepNavigation
        prevHref="/start/step-6"
        prevLabel="Previous Step"
      />
    </StartLayout>
  );
}
