export interface Step {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  estimatedTime: string;
  path: string;
}

export const STEPS: Step[] = [
  {
    id: 'step-0',
    number: 0,
    title: 'Set Up Your Developer Accounts',
    shortTitle: 'Setup Accounts',
    description: 'Create free accounts for GitHub, Vercel, Cloudflare, and your AI assistant',
    estimatedTime: '10 min',
    path: '/start/step-0',
  },
  {
    id: 'step-1',
    number: 1,
    title: 'Generate Your Idea',
    shortTitle: 'Generate Idea',
    description: 'Use AI to brainstorm and refine your first app idea',
    estimatedTime: '5 min',
    path: '/start/step-1',
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Create Your GitHub Repository',
    shortTitle: 'GitHub Repo',
    description: 'Set up version control for your project on GitHub',
    estimatedTime: '5 min',
    path: '/start/step-2',
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Build with AI Tool',
    shortTitle: 'Build App',
    description: 'Build your app using Claude Code, Lovable, v0, or Cursor',
    estimatedTime: '1-4 hours',
    path: '/start/step-3',
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Save Your Work to GitHub',
    shortTitle: 'Push to GitHub',
    description: 'Commit and push your code to your GitHub repository',
    estimatedTime: '2 min',
    path: '/start/step-4',
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Put Your App on the Internet',
    shortTitle: 'Deploy',
    description: 'Deploy your app to Vercel and get it live on the web',
    estimatedTime: '5 min',
    path: '/start/step-5',
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Get Your Custom Domain',
    shortTitle: 'Custom Domain',
    description: 'Buy a domain and connect it to your app',
    estimatedTime: '15 min',
    path: '/start/step-6',
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Share Your Launch',
    shortTitle: 'Share',
    description: 'Celebrate and share your accomplishment with the world',
    estimatedTime: '5 min',
    path: '/start/step-7',
  },
];

export function getStepById(id: string): Step | undefined {
  return STEPS.find(step => step.id === id);
}

export function getNextStep(currentId: string): Step | undefined {
  const currentIndex = STEPS.findIndex(step => step.id === currentId);
  if (currentIndex >= 0 && currentIndex < STEPS.length - 1) {
    return STEPS[currentIndex + 1];
  }
  return undefined;
}

export function getPreviousStep(currentId: string): Step | undefined {
  const currentIndex = STEPS.findIndex(step => step.id === currentId);
  if (currentIndex > 0) {
    return STEPS[currentIndex - 1];
  }
  return undefined;
}
