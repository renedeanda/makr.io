import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

interface StepNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  onComplete?: () => void;
}

export default function StepNavigation({
  prevHref,
  prevLabel = 'Previous Step',
  nextHref,
  nextLabel = 'Continue',
  onComplete,
}: StepNavigationProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        'flex items-center justify-between border-t pt-12 mt-20',
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      )}
    >
      {prevHref ? (
        <Link href={prevHref}>
          <button
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70',
              theme === 'dark'
                ? 'text-gray-400'
                : 'text-gray-600'
            )}
          >
            <FaArrowLeft className="h-3 w-3" />
            {prevLabel}
          </button>
        </Link>
      ) : (
        <div />
      )}

      {nextHref ? (
        <Link href={nextHref}>
          <button
            onClick={onComplete}
            className="flex items-center gap-2 rounded-md bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            {nextLabel}
            <FaArrowRight className="h-4 w-4" />
          </button>
        </Link>
      ) : onComplete ? (
        <button
          onClick={onComplete}
          className="flex items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
        >
          Complete
          <FaCheck className="h-4 w-4" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
