import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import CodeBlock from '../../components/start/CodeBlock';
import Checklist, { ChecklistItem } from '../../components/start/Checklist';
import { FaGithub } from 'react-icons/fa';

const checklistItems: ChecklistItem[] = [
  { id: 'repo', label: 'Repository created on GitHub' },
  { id: 'readme', label: 'Initialized with README' },
  { id: 'url', label: 'Repository URL saved' },
];

export default function Step2() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, currentProject } = useProgressStore();

  useEffect(() => {
    setCurrentStep('step-2');
  }, [setCurrentStep]);

  // Generate a suggested repo name from project name
  const suggestedRepoName = currentProject?.name
    ? currentProject.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    : 'my-app';

  return (
    <StartLayout title="Step 2: Create Your GitHub Repository">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 2</span>
          <span>•</span>
          <span>~5 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Create Your GitHub Repository
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Set up version control for your project on GitHub
        </p>
      </header>

      <div className="space-y-8">
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
          )}
        >
          <h2 className="text-xl font-bold mb-4">Create Your Repository</h2>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">1. Navigate to GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Go to github.com/new or click the + icon → "New repository"
              </p>
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaGithub />
                Create New Repository
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Configure Your Repository</h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Repository name:</strong> {currentProject?.name ? (
                  <>Use <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">{suggestedRepoName}</code> (from your project: {currentProject.name})</>
                ) : (
                  'Use lowercase-with-hyphens (e.g., my-app)'
                )}</p>
                <p><strong>Visibility:</strong> Public (recommended) or Private</p>
                <p><strong>Initialize:</strong> ✓ Add a README file</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Save Your Repository URL</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Format: https://github.com/[username]/{suggestedRepoName}
              </p>
              <CodeBlock
                code={`https://github.com/yourusername/${suggestedRepoName}`}
                showCopy={false}
              />
            </div>
          </div>

          <Checklist items={checklistItems} />
        </section>

        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-blue-800 bg-blue-900/20' : 'border-blue-200 bg-blue-50'
          )}
        >
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Why create the repo before building?
          </h3>
          <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-300">
            <li>• Establishes version control from day one</li>
            <li>• Creates commit history (shows your progress)</li>
            <li>• Enables GitHub → Vercel deployment pipeline</li>
            <li>• Professional workflow (always start with a repo)</li>
          </ul>
        </section>
      </div>

      <StepNavigation
        prevHref="/start/step-1"
        nextHref="/start/step-3"
        onComplete={() => completeStep('step-2')}
      />
    </StartLayout>
  );
}
