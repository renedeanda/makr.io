export interface Badge {
  id: string;
  emoji: string;
  name: string;
  description: string;
  unlockCondition: string;
}

export const BADGES: Record<string, Badge> = {
  'idea-generator': {
    id: 'idea-generator',
    emoji: '🎯',
    name: 'Idea Generator',
    description: 'Generated your first app idea',
    unlockCondition: 'Complete Step 1'
  },
  'first-commit': {
    id: 'first-commit',
    emoji: '💻',
    name: 'First Commit',
    description: 'Created your GitHub repository',
    unlockCondition: 'Complete Step 2'
  },
  'builder': {
    id: 'builder',
    emoji: '🛠️',
    name: 'Builder',
    description: 'Built your first app with AI',
    unlockCondition: 'Complete Step 3'
  },
  'first-deploy': {
    id: 'first-deploy',
    emoji: '⚡',
    name: 'First Deploy',
    description: 'Deployed to Vercel',
    unlockCondition: 'Complete Step 5'
  },
  'domain-owner': {
    id: 'domain-owner',
    emoji: '🌐',
    name: 'Domain Owner',
    description: 'Connected custom domain',
    unlockCondition: 'Complete Step 6'
  },
  'shipped': {
    id: 'shipped',
    emoji: '🚀',
    name: 'Shipped',
    description: 'Launched your first app',
    unlockCondition: 'Complete all steps'
  },
  'built-in-public': {
    id: 'built-in-public',
    emoji: '📢',
    name: 'Built in Public',
    description: 'Shared your launch',
    unlockCondition: 'Complete Step 7'
  },
  'on-a-streak': {
    id: 'on-a-streak',
    emoji: '🔥',
    name: 'On a Streak',
    description: 'Shipped 3 apps',
    unlockCondition: '3 apps shipped'
  },
  'speed-demon': {
    id: 'speed-demon',
    emoji: '⚡',
    name: 'Speed Demon',
    description: 'Shipped an app in under 2 hours',
    unlockCondition: 'App completed < 2 hours'
  },
};

export function checkBadgeUnlock(badgeId: string, userProgress: any): boolean {
  switch (badgeId) {
    case 'idea-generator':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-1');
    case 'first-commit':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-2');
    case 'builder':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-3');
    case 'first-deploy':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-5');
    case 'domain-owner':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-6');
    case 'shipped':
      return userProgress.completedSteps.length >= 8;
    case 'built-in-public':
      return userProgress.completedSteps.some((s: any) => s.stepId === 'step-7');
    case 'on-a-streak':
      return userProgress.appsShipped >= 3;
    case 'speed-demon':
      return userProgress.shippedProjects.some((p: any) => p.timeSpent < 7200);
    default:
      return false;
  }
}
