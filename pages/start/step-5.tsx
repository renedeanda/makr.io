import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import Checklist, { ChecklistItem } from '../../components/start/Checklist';
import { SiVercel } from 'react-icons/si';
import { FaRocket } from 'react-icons/fa';

const checklistItems: ChecklistItem[] = [
  { id: 'imported', label: 'GitHub repo imported to Vercel' },
  { id: 'deployed', label: 'App deployed successfully' },
  { id: 'visited', label: 'Visited live Vercel URL' },
  { id: 'url', label: 'Saved Vercel URL' },
];

export default function Step5() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, currentProject } = useProgressStore();

  useEffect(() => {
    setCurrentStep('step-5');
  }, [setCurrentStep]);

  const suggestedRepoName = currentProject?.name
    ? currentProject.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    : 'your-app-name';

  return (
    <StartLayout
      title="Step 5: Deploy to Vercel"
      description="Deploy your app to Vercel and get it live on the web. Learn how modern deployment platforms work with GitHub integration. Takes ~5 minutes."
      ogImage="https://makr.io/og-start-step-5.png"
      canonical="https://makr.io/start/step-5"
    >
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 5</span>
          <span>•</span>
          <span>~5 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Put Your App on the Internet
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Deploy your app to Vercel and get it live on the web
        </p>
      </header>

      <div className="space-y-8">
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-blue-800 bg-blue-900/20' : 'border-blue-200 bg-blue-50'
          )}
        >
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
            What's "deploying"?
          </h3>
          <p className="text-sm text-blue-900 dark:text-blue-300 mb-4">
            Taking your app from your computer (or GitHub) and making it accessible to anyone with internet access.
          </p>
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">What Vercel does for you:</h4>
          <ul className="space-y-1 text-sm text-blue-900 dark:text-blue-300">
            <li>• Reads your code from GitHub</li>
            <li>• Builds it into a website</li>
            <li>• Gives it a URL anyone can visit</li>
            <li>• Handles all the technical server stuff</li>
            <li>• Updates automatically when you make changes</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <SiVercel className="h-8 w-8" />
            Deploy to Vercel
          </h2>

          <div className="space-y-6">
            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">1. Go to Vercel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Visit vercel.com/new or click "Add New" → "Project"
              </p>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                <SiVercel />
                Deploy on Vercel
              </a>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">2. Import your GitHub repo</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• You'll see "Import Git Repository"</li>
                <li>• Find your repo in the list</li>
                <li>• Click "Import"</li>
              </ul>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">3. Configure (or don't!)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Good news:</strong> Vercel auto-detects everything!
              </p>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ Framework Preset: Auto-detected</li>
                <li>✓ Build Command: Auto-detected</li>
                <li>✓ Root Directory: ./</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                You don't need to touch anything here!
              </p>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">4. Deploy!</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Click the big "Deploy" button and wait ~1-2 minutes...
              </p>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-3">
                <FaRocket className="h-5 w-5" />
                <span className="font-semibold">You'll see confetti when it's done! 🎉</span>
              </div>
            </div>
          </div>
        </section>

        {/* Success */}
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-green-800 bg-green-900/20' : 'border-green-200 bg-green-50'
          )}
        >
          <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
            Success! Your app is LIVE!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Vercel gives you a temporary URL like: <code className="font-mono text-sm">{suggestedRepoName}.vercel.app</code>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Test it by clicking "Visit" or copying the URL. {currentProject?.name && `Your ${currentProject.name} app`} should load!
          </p>
        </section>

        <Checklist items={checklistItems} />
      </div>

      <StepNavigation
        prevHref="/start/step-4"
        nextHref="/start/step-6"
        onComplete={() => completeStep('step-5')}
      />
    </StartLayout>
  );
}
