import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import CodeBlock from '../../components/start/CodeBlock';
import Checklist, { ChecklistItem } from '../../components/start/Checklist';

const checklistItems: ChecklistItem[] = [
  { id: 'code', label: 'My code is on GitHub (verified!)' },
];

export default function Step4() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep } = useProgressStore();

  useEffect(() => {
    setCurrentStep('step-4');
  }, [setCurrentStep]);

  return (
    <StartLayout title="Step 4: Save Your Work to GitHub">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 4</span>
          <span>•</span>
          <span>~2 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Save Your Work to GitHub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Commit and push your code to your GitHub repository
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
            What's happening here?
          </h3>
          <p className="text-sm text-blue-900 dark:text-blue-300 mb-2">
            You've built your app locally (on your computer). Now you need to save it to GitHub (on the internet) so Vercel can deploy it.
          </p>
          <p className="text-sm text-blue-900 dark:text-blue-300">
            <strong>Before:</strong> Your app only exists on your laptop<br />
            <strong>After:</strong> Your app is backed up online and ready to go live
          </p>
        </section>

        {/* Browser-based tools */}
        <section>
          <h2 className="text-xl font-bold mb-4">If you used Lovable, v0, or browser-based tool:</h2>
          <div
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
            )}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Good news:</strong> They usually have a "Push to GitHub" button. Click it, and you're done!
            </p>
            <div className="space-y-2 text-sm">
              <p>Look for buttons like:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>"Push to GitHub"</li>
                <li>"Sync with GitHub"</li>
                <li>"Deploy"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terminal-based tools */}
        <section>
          <h2 className="text-xl font-bold mb-4">If you used Claude Code or Cursor:</h2>
          <div
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
            )}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The AI tool probably did this for you already! To check: Go to your GitHub repo page and refresh. Do you see files beyond just the README?
            </p>

            <div className="my-4">
              <p className="text-sm font-semibold mb-2">Manual save (if needed):</p>
              <CodeBlock code={`git add .\ngit commit -m "Built my first app!"\ngit push origin main`} />
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                How do I know it worked?
              </h3>
              <p className="text-sm text-green-900 dark:text-green-300">
                Go to your GitHub repo page and refresh. You should see multiple files (not just README), a commit message, and a recent timestamp.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Why does this matter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={cn(
                'rounded-xl border p-5',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
              )}
            >
              <h3 className="font-semibold mb-2">1. Backup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If your laptop crashes, your code is safe on GitHub
              </p>
            </div>
            <div
              className={cn(
                'rounded-xl border p-5',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
              )}
            >
              <h3 className="font-semibold mb-2">2. Auto-deployment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vercel watches this repo. Every time you push, your live site updates automatically!
              </p>
            </div>
          </div>
        </section>

        <Checklist items={checklistItems} />
      </div>

      <StepNavigation
        prevHref="/start/step-3"
        nextHref="/start/step-5"
        onComplete={() => completeStep('step-4')}
      />
    </StartLayout>
  );
}
