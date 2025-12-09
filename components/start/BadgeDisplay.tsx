import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { BADGES, checkBadgeUnlock } from '../../lib/badges';
import { cn } from '../../lib/utils';

export default function BadgeDisplay() {
  const { theme } = useContext(ThemeContext);
  const progress = useProgressStore();
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const allBadges = Object.values(BADGES);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-1">Your Badges</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Unlock badges as you complete steps
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {allBadges.map((badge) => {
          const isUnlocked = checkBadgeUnlock(badge.id, progress);

          return (
            <div
              key={badge.id}
              className="relative"
              onMouseEnter={() => setHoveredBadge(badge.id)}
              onMouseLeave={() => setHoveredBadge(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'relative rounded-xl border p-4 transition-all cursor-pointer',
                  isUnlocked
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-50 grayscale'
                )}
              >
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <p className="text-sm font-medium">{badge.name}</p>

                {isUnlocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredBadge === badge.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={cn(
                      'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 w-48',
                      'rounded-lg px-3 py-2 text-xs shadow-lg',
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 text-gray-200'
                        : 'bg-white border border-gray-200 text-gray-900'
                    )}
                  >
                    <p className="font-medium mb-1">{badge.description}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {badge.unlockCondition}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                      <div
                        className={cn(
                          'w-2 h-2 rotate-45',
                          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                        )}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
