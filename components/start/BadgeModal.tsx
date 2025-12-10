import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { BADGES, checkBadgeUnlock } from '../../lib/badges';
import { cn } from '../../lib/utils';
import { FaTimes, FaTrophy } from 'react-icons/fa';

interface BadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BadgeModal({ isOpen, onClose }: BadgeModalProps) {
  const { theme } = useContext(ThemeContext);
  const progress = useProgressStore();

  const allBadges = Object.values(BADGES);
  const unlockedCount = allBadges.filter((badge) =>
    checkBadgeUnlock(badge.id, progress)
  ).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop + Centered Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                'w-full max-w-2xl',
                'max-h-[85vh] overflow-y-auto',
                'rounded-xl shadow-2xl p-4 sm:p-6',
                theme === 'dark'
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200'
              )}
            >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaTrophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Your Badges</h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {unlockedCount} of {allBadges.length} unlocked
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {allBadges.map((badge) => {
                const isUnlocked = checkBadgeUnlock(badge.id, progress);

                return (
                  <motion.div
                    key={badge.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'relative rounded-xl border p-4 transition-all',
                      isUnlocked
                        ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-50 grayscale'
                    )}
                  >
                    <div className="text-4xl mb-2 flex items-center justify-center">
                      {badge.emoji}
                    </div>
                    <p className="text-sm font-medium text-center mb-1">
                      {badge.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      {badge.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
                      {isUnlocked ? '✓ Unlocked' : badge.unlockCondition}
                    </p>

                    {isUnlocked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
