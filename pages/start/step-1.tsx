import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import CodeBlock from '../../components/start/CodeBlock';
import { FaLightbulb, FaRobot } from 'react-icons/fa';

const starterPrompts = [
  {
    title: 'For AI with Memory',
    prompt: `Based on what you know about me, suggest some helpful utility web apps I can build & deploy with AI tools. Focus on simple, useful tools that solve real problems and can be completed in 2-4 hours.`,
  },
  {
    title: 'For AI without Memory',
    prompt: `I want to build a simple utility web app using AI coding tools that I can complete in 2-4 hours. Suggest 5 ideas for tools that:
- Solve a real everyday problem
- Can be built purely in the browser (no backend)
- Don't require complex infrastructure
- Use existing JavaScript libraries

Examples: QR generator, color palette tool, PDF merger`,
  },
];

const starterIdeas = [
  { name: 'QR Code Generator', difficulty: 'Easy', time: '1-2 hrs', library: 'qrcode.js' },
  { name: 'PDF Merger', difficulty: 'Medium', time: '3-4 hrs', library: 'pdf-lib.js' },
  { name: 'Chart Maker', difficulty: 'Medium', time: '3-4 hrs', library: 'Chart.js' },
  { name: 'Color Palette Tool', difficulty: 'Easy', time: '1-2 hrs', library: 'tinycolor' },
  { name: 'Markdown Editor', difficulty: 'Easy', time: '2-3 hrs', library: 'marked.js' },
  { name: 'JSON Formatter', difficulty: 'Easy', time: '1-2 hrs', library: 'none' },
];

export default function Step1() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, startProject } = useProgressStore();
  const [projectName, setProjectName] = useState('');
  const [projectIdea, setProjectIdea] = useState('');

  useEffect(() => {
    setCurrentStep('step-1');
  }, [setCurrentStep]);

  const handleComplete = () => {
    if (projectName && projectIdea) {
      startProject({
        name: projectName,
        idea: projectIdea,
        aiTool: 'Not selected yet',
      });
    }
    completeStep('step-1');
  };

  return (
    <StartLayout
      title="Step 1: Generate Your Idea"
      description="Use AI to brainstorm and refine your first app idea"
    >
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 1</span>
          <span>•</span>
          <span>~5 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Generate Your Idea
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Use your favorite AI tool to generate app ideas that solve real problems!
        </p>
      </header>

      <div className="space-y-12">
        {/* Starter Prompts */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaRobot className="h-8 w-8 text-purple-500" />
            <h2 className="text-2xl font-bold">Starter Prompts</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Copy and paste these prompts into Claude or ChatGPT to generate ideas:
          </p>

          <div className="space-y-4">
            {starterPrompts.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <CodeBlock code={item.prompt} />
              </div>
            ))}
          </div>
        </section>

        {/* Starter Ideas */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="h-8 w-8 text-yellow-500" />
            <h2 className="text-2xl font-bold">Need Inspiration?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {starterIdeas.map((idea, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-xl border p-5',
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                    : 'border-gray-200 bg-white hover:bg-gray-50',
                  'transition-colors cursor-pointer'
                )}
                onClick={() => setProjectName(idea.name)}
              >
                <h3 className="font-semibold text-lg mb-2">{idea.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {idea.difficulty}
                  </span>
                  <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    {idea.time}
                  </span>
                  {idea.library !== 'none' && (
                    <span className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      {idea.library}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Record Your Idea */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Record Your Idea</h2>
          <div
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  I'm building:
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g., QR Code Generator"
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border',
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-900'
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description (optional):
                </label>
                <textarea
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                  placeholder="What does it do? What problem does it solve?"
                  rows={3}
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border',
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-900'
                  )}
                />
              </div>

              {projectName && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    ✓ Great! You're building: <strong>{projectName}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <StepNavigation
        prevHref="/start/step-0"
        nextHref="/start/step-2"
        onComplete={handleComplete}
      />
    </StartLayout>
  );
}
