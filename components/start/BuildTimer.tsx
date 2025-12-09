import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { formatTime } from '../../lib/utils';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function BuildTimer() {
  const { theme } = useContext(ThemeContext);
  const {
    currentProject,
    isTimerRunning,
    startTimer,
    pauseTimer,
    updateBuildTime,
  } = useProgressStore();

  const [elapsed, setElapsed] = useState(currentProject?.buildTimeSeconds || 0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsed((prev) => {
          const newTime = prev + 1;
          updateBuildTime(newTime);
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, updateBuildTime]);

  useEffect(() => {
    if (currentProject) {
      setElapsed(currentProject.buildTimeSeconds);
    }
  }, [currentProject]);

  if (!currentProject) {
    return null;
  }

  const handleToggle = () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl border p-6',
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800/50'
          : 'border-gray-200 bg-white'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Building: {currentProject.name}
          </p>
          <p className="mt-1 text-3xl font-bold font-mono tabular-nums">
            {formatTime(elapsed)}
          </p>
        </div>
        <button
          onClick={handleToggle}
          className={cn(
            'rounded-lg px-6 py-3 text-sm font-medium transition-all',
            isTimerRunning
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          )}
        >
          {isTimerRunning ? (
            <div className="flex items-center gap-2">
              <FaPause className="h-4 w-4" />
              Pause
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaPlay className="h-4 w-4" />
              Start
            </div>
          )}
        </button>
      </div>

      {/* Progress visualization */}
      <div className="mt-4">
        <div className="h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={cn(
              'h-full transition-all duration-300',
              isTimerRunning
                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                : 'bg-gray-400 dark:bg-gray-600'
            )}
            style={{
              width: `${Math.min((elapsed / 14400) * 100, 100)}%`, // Max 4 hours
            }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {isTimerRunning ? 'Timer running...' : 'Timer paused'}
        </p>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
