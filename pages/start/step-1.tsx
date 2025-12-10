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
    title: 'Creative Prompt',
    prompt: `I want to build my first web app using AI coding tools. Suggest 5 simple but useful app ideas I can complete in 2-4 hours. Focus on tools that:

- Solve everyday problems people actually face
- Work entirely in the browser (no backend needed)
- Are delightful to use and shareable
- Can be built with React/Next.js and existing libraries

Think beyond typical developer tools. Consider productivity, wellness, creativity, decision-making, or fun utilities.`,
  },
  {
    title: 'Practical Prompt',
    prompt: `Suggest web app ideas for my first project that:
1. Solve a specific pain point (not general productivity)
2. Take 2-4 hours to build with AI assistance
3. Don't need databases or user accounts
4. People would actually bookmark and use daily

Examples: habit tracker, recipe scaler, time zone planner, reading timer`,
  },
];

const starterIdeas = [
  {
    name: 'Daily Gratitude Journal',
    difficulty: 'Easy',
    time: '2-3 hrs',
    description: 'Simple journaling with local storage',
    icon: '📝'
  },
  {
    name: 'Habit Streak Tracker',
    difficulty: 'Easy',
    time: '2-3 hrs',
    description: 'Track daily habits with visual streaks',
    icon: '✅'
  },
  {
    name: 'Reading Timer',
    difficulty: 'Easy',
    time: '1-2 hrs',
    description: 'Pomodoro-style reading sessions',
    icon: '⏱️'
  },
  {
    name: 'Recipe Converter',
    difficulty: 'Easy',
    time: '2-3 hrs',
    description: 'Scale recipes & convert measurements',
    icon: '🍳'
  },
  {
    name: 'Decision Helper',
    difficulty: 'Easy',
    time: '1-2 hrs',
    description: 'Pros/cons list with weighted scoring',
    icon: '🤔'
  },
  {
    name: 'Focus Timer',
    difficulty: 'Easy',
    time: '2-3 hrs',
    description: 'Beautiful Pomodoro with ambient sounds',
    icon: '🎯'
  },
  {
    name: 'Link Collection',
    difficulty: 'Medium',
    time: '3-4 hrs',
    description: 'Save & organize links with tags',
    icon: '🔖'
  },
  {
    name: 'Quick Poll Creator',
    difficulty: 'Medium',
    time: '3-4 hrs',
    description: 'Create shareable polls (no backend)',
    icon: '📊'
  },
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
      description="Use AI to brainstorm and refine your first app idea. Learn how to prompt AI assistants to generate simple, buildable web app concepts. Takes ~5 minutes."
      ogImage="https://makr.io/og-start-step-1.png"
      canonical="https://makr.io/start/step-1"
    >
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 1</span>
          <span>•</span>
          <span>~5 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Pick Your First App Idea
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose something simple, useful, and exciting to build. You can always build more later!
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
                  'transition-colors cursor-pointer group'
                )}
                onClick={() => setProjectName(idea.name)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{idea.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {idea.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {idea.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {idea.difficulty}
                  </span>
                  <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    {idea.time}
                  </span>
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
