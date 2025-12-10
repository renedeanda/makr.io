import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { BADGES, checkBadgeUnlock } from '../../lib/badges';
import { cn } from '../../lib/utils';
import { FaTrophy, FaTimes } from 'react-icons/fa';

export default function BadgeDisplay() {
  const { theme } = useContext(ThemeContext);
  const progress = useProgressStore();
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const allBadges = Object.values(BADGES);
  const selectedBadgeData = selectedBadge ? BADGES[selectedBadge] : null;

  const handleBadgeClick = (badgeId: string) => {
    setSelectedBadge(badgeId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedBadge(null), 300);
  };

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
            <div key={badge.id}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleBadgeClick(badge.id)}
                className={cn(
                  'relative rounded-xl border p-4 transition-all cursor-pointer hover:scale-105',
                  isUnlocked
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-50 grayscale'
                )}
              >
                <div className="text-3xl mb-2 flex items-center justify-center">{badge.emoji}</div>
                <p className="text-sm font-medium text-center">{badge.name}</p>

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
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedBadgeData && (
          <>
            {/* Backdrop + Centered Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  'w-full max-w-md rounded-xl shadow-2xl p-4 sm:p-6',
                  theme === 'dark'
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-white border border-gray-200'
                )}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FaTimes className="h-4 w-4" />
                </button>

                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{selectedBadgeData.emoji}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedBadgeData.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                    {selectedBadgeData.description}
                  </p>
                  <div
                    className={cn(
                      'w-full rounded-lg p-3 sm:p-4',
                      checkBadgeUnlock(selectedBadgeData.id, progress)
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                    )}
                  >
                    <p
                      className={cn(
                        'text-sm font-medium',
                        checkBadgeUnlock(selectedBadgeData.id, progress)
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-600 dark:text-gray-400'
                      )}
                    >
                      {checkBadgeUnlock(selectedBadgeData.id, progress) ? '✓ Unlocked!' : 'Locked'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {selectedBadgeData.unlockCondition}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
