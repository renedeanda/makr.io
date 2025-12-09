import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

export interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
  onChange?: (completedIds: string[]) => void;
}

export default function Checklist({ items, onChange }: ChecklistProps) {
  const { theme } = useContext(ThemeContext);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompleted(newCompleted);
    if (onChange) {
      onChange(Array.from(newCompleted));
    }
  };

  const allCompleted = completed.size === items.length;

  return (
    <div
      className={cn(
        'space-y-3 rounded-xl border p-6',
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800/50'
          : 'border-gray-200 bg-gray-50'
      )}
    >
      {allCompleted && (
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm font-medium text-green-800 dark:text-green-300">
            ✓ All items completed!
          </p>
        </div>
      )}

      {items.map((item) => {
        const isCompleted = completed.has(item.id);

        return (
          <label
            key={item.id}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => handleToggle(item.id)}
              className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <p
                className={cn(
                  'text-sm transition-all',
                  isCompleted
                    ? 'text-gray-500 dark:text-gray-500 line-through'
                    : 'text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                )}
              >
                {item.label}
              </p>
              {item.description && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}
