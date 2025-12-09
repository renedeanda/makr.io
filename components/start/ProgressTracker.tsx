import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { STEPS } from '../../lib/steps';
import { cn } from '../../lib/utils';
import { FaCheck } from 'react-icons/fa';

export default function ProgressTracker() {
  const { theme } = useContext(ThemeContext);
  const { completedSteps, currentStepId } = useProgressStore();

  const isStepCompleted = (stepId: string) => {
    return completedSteps.some(s => s.stepId === stepId);
  };

  const isStepCurrent = (stepId: string) => {
    return currentStepId === stepId;
  };

  return (
    <nav className="sticky top-24 space-y-2">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Your Progress
        </h3>
        <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${(completedSteps.length / STEPS.length) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {completedSteps.length} of {STEPS.length} steps completed
        </p>
      </div>

      {STEPS.map((step) => {
        const completed = isStepCompleted(step.id);
        const current = isStepCurrent(step.id);

        return (
          <Link key={step.id} href={step.path}>
            <div
              className={cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2 transition-all cursor-pointer',
                completed && 'text-green-600 dark:text-green-400',
                current && !completed && 'bg-blue-50 dark:bg-blue-900/20 font-medium',
                !current && !completed && 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              )}
            >
              <div className="flex h-6 w-6 items-center justify-center flex-shrink-0">
                {completed ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                    <FaCheck className="h-3 w-3" />
                  </div>
                ) : current ? (
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                ) : (
                  <span className="text-xs text-gray-400 dark:text-gray-600 font-medium">
                    {step.number}
                  </span>
                )}
              </div>

              <span className="text-sm flex-1">{step.shortTitle}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
