import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import BuildTimer from '../../components/start/BuildTimer';
import CodeBlock from '../../components/start/CodeBlock';

const tools = [
  {
    name: 'Claude Code',
    description: 'Terminal-based, most powerful. Best for complex apps.',
    requirements: 'Basic terminal comfort',
    recommended: true,
  },
  {
    name: 'Lovable',
    description: 'Browser-based, fastest to start. Zero local setup.',
    requirements: 'Nothing, just browser',
    recommended: false,
  },
  {
    name: 'Cursor',
    description: 'VS Code fork with AI built-in. Familiar IDE experience.',
    requirements: 'Coding experience helpful',
    recommended: false,
  },
  {
    name: 'v0',
    description: 'Vercel\'s component builder. Visual, component-focused.',
    requirements: 'Some React knowledge helpful',
    recommended: false,
  },
];

export default function Step3() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, currentProject, updateProject } = useProgressStore();
  const [selectedTool, setSelectedTool] = useState('');

  useEffect(() => {
    setCurrentStep('step-3');
  }, [setCurrentStep]);

  const suggestedRepoName = currentProject?.name
    ? currentProject.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    : 'my-app';

  const claudeCodePrompt = currentProject?.name
    ? `Build ${currentProject.name}${currentProject.idea ? ` - ${currentProject.idea}` : ''}.

Tech stack: React + Vite, TypeScript, Tailwind CSS

Features:
- [Feature 1]
- [Feature 2]
- Mobile responsive
- Clean, modern UI

Make it production-ready and delightful.`
    : `Build [your-app-name] - a [description].

Tech stack: React + Vite, TypeScript, Tailwind CSS

Features:
- [Feature 1]
- [Feature 2]
- Mobile responsive
- Clean, modern UI

Make it production-ready and delightful.`;

  const handleComplete = () => {
    if (selectedTool) {
      updateProject({ aiTool: selectedTool });
    }
    completeStep('step-3');
  };

  return (
    <StartLayout
      title="Step 3: Build with AI Tool"
      description="Build your first web app using AI coding tools like Claude Code, Lovable, Cursor, or v0. Learn to use AI assistants for development. Takes 1-4 hours."
      ogImage="https://makr.io/og-start-step-3.png"
      canonical="https://makr.io/start/step-3"
    >
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 3</span>
          <span>•</span>
          <span>1-4 hours</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Build with AI Tool
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose your AI coding tool and build your app
        </p>
      </header>

      <div className="space-y-8">
        {currentProject && <BuildTimer />}

        {/* Choose Your Tool */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Choose Your AI Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                onClick={() => setSelectedTool(tool.name)}
                className={cn(
                  'rounded-xl border p-5 cursor-pointer transition-all',
                  selectedTool === tool.name
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                  {tool.recommended && (
                    <span className="px-2 py-1 text-xs bg-green-500 text-white rounded">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {tool.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Requires: {tool.requirements}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Claude Code Example */}
        {selectedTool === 'Claude Code' && (
          <section
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
            )}
          >
            <h2 className="text-xl font-bold mb-4">Claude Code Workflow</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Clone your repo</h3>
                <CodeBlock code={`git clone https://github.com/[user]/${suggestedRepoName}\ncd ${suggestedRepoName}`} />
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Start Claude Code</h3>
                <CodeBlock code="claude-code" />
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Use this starter prompt</h3>
                <CodeBlock code={claudeCodePrompt} />
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Test locally</h3>
                <CodeBlock code="npm run dev" />
              </div>
            </div>
          </section>
        )}

        {selectedTool === 'Lovable' && (
          <section
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
            )}
          >
            <h2 className="text-xl font-bold mb-4">Lovable Workflow</h2>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>1. Go to lovable.dev</li>
              <li>2. Start a new project</li>
              <li>3. Describe your app in the prompt</li>
              <li>4. Iterate as needed</li>
              <li>5. Connect to your GitHub repo when ready</li>
            </ol>
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Open Lovable
            </a>
          </section>
        )}
      </div>

      <StepNavigation
        prevHref="/start/step-2"
        nextHref="/start/step-4"
        onComplete={handleComplete}
      />
    </StartLayout>
  );
}
