import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CompletedStep {
  stepId: string;
  completedAt: string;
}

export interface ShippedProject {
  name: string;
  url: string;
  builtWith: string;
  timeSpent: number;
  shippedAt: string;
}

export interface UnlockedBadge {
  id: string;
  name: string;
  unlockedAt: string;
}

export interface CurrentProject {
  name: string;
  idea: string;
  githubUrl?: string;
  vercelUrl?: string;
  customDomain?: string;
  aiTool: string;
  startedAt: string;
  buildTimeSeconds: number;
}

export interface UserProgress {
  id: string;
  startedAt: string;
  currentProject: CurrentProject | null;
  completedSteps: CompletedStep[];
  currentStepId: string;
  shippedProjects: ShippedProject[];
  badges: UnlockedBadge[];
  totalBuildTime: number;
  appsShipped: number;
  isTimerRunning: boolean;
}

interface ProgressStore extends UserProgress {
  completeStep: (stepId: string) => void;
  setCurrentStep: (stepId: string) => void;
  startProject: (project: Omit<CurrentProject, 'startedAt' | 'buildTimeSeconds'>) => void;
  updateProject: (updates: Partial<CurrentProject>) => void;
  shipProject: () => void;
  unlockBadge: (badge: Omit<UnlockedBadge, 'unlockedAt'>) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  updateBuildTime: (seconds: number) => void;
  reset: () => void;
}

const initialState: UserProgress = {
  id: '',
  startedAt: new Date().toISOString(),
  currentProject: null,
  completedSteps: [],
  currentStepId: 'step-0',
  shippedProjects: [],
  badges: [],
  totalBuildTime: 0,
  appsShipped: 0,
  isTimerRunning: false,
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      id: typeof window !== 'undefined' ? (localStorage.getItem('userId') || generateId()) : '',

      completeStep: (stepId: string) => {
        const state = get();
        if (!state.completedSteps.some(s => s.stepId === stepId)) {
          set({
            completedSteps: [
              ...state.completedSteps,
              { stepId, completedAt: new Date().toISOString() }
            ]
          });
        }
      },

      setCurrentStep: (stepId: string) => {
        set({ currentStepId: stepId });
      },

      startProject: (project) => {
        set({
          currentProject: {
            ...project,
            startedAt: new Date().toISOString(),
            buildTimeSeconds: 0,
          }
        });
      },

      updateProject: (updates) => {
        const state = get();
        if (state.currentProject) {
          set({
            currentProject: {
              ...state.currentProject,
              ...updates,
            }
          });
        }
      },

      shipProject: () => {
        const state = get();
        if (state.currentProject) {
          const shippedProject: ShippedProject = {
            name: state.currentProject.name,
            url: state.currentProject.customDomain || state.currentProject.vercelUrl || '',
            builtWith: state.currentProject.aiTool,
            timeSpent: state.currentProject.buildTimeSeconds,
            shippedAt: new Date().toISOString(),
          };

          set({
            shippedProjects: [...state.shippedProjects, shippedProject],
            appsShipped: state.appsShipped + 1,
            totalBuildTime: state.totalBuildTime + state.currentProject.buildTimeSeconds,
            currentProject: null,
            isTimerRunning: false,
          });
        }
      },

      unlockBadge: (badge) => {
        const state = get();
        if (!state.badges.some(b => b.id === badge.id)) {
          set({
            badges: [
              ...state.badges,
              { ...badge, unlockedAt: new Date().toISOString() }
            ]
          });
        }
      },

      startTimer: () => {
        set({ isTimerRunning: true });
      },

      pauseTimer: () => {
        set({ isTimerRunning: false });
      },

      updateBuildTime: (seconds) => {
        const state = get();
        if (state.currentProject) {
          set({
            currentProject: {
              ...state.currentProject,
              buildTimeSeconds: seconds,
            }
          });
        }
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'makr-start-progress',
    }
  )
);

function generateId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
