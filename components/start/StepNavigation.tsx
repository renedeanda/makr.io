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
        'flex items-center justify-between border-t pt-8 mt-12',
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      )}
    >
      {prevHref ? (
        <Link href={prevHref}>
          <button
            className={cn(
              'flex items-center gap-2 text-sm transition-colors',
              theme === 'dark'
                ? 'text-gray-400 hover:text-gray-200'
                : 'text-gray-600 hover:text-gray-900'
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
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
          >
            {nextLabel}
            <FaArrowRight className="h-4 w-4" />
          </button>
        </Link>
      ) : onComplete ? (
        <button
          onClick={onComplete}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 transition-colors"
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
