import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import Checklist, { ChecklistItem } from '../../components/start/Checklist';
import { FaGithub, FaCloud, FaRobot } from 'react-icons/fa';
import { SiVercel, SiCloudflare } from 'react-icons/si';

const checklistItems: ChecklistItem[] = [
  {
    id: 'github',
    label: 'GitHub account created',
    description: 'Your version control and code hosting platform',
  },
  {
    id: 'vercel',
    label: 'Vercel account created and linked to GitHub',
    description: 'Your deployment platform',
  },
  {
    id: 'cloudflare',
    label: 'Cloudflare account created',
    description: 'Your domain registrar (don\'t buy domain yet)',
  },
  {
    id: 'ai',
    label: 'AI assistant account created (Claude or ChatGPT)',
    description: 'Your coding co-pilot',
  },
];

export default function Step0() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep } = useProgressStore();

  useEffect(() => {
    setCurrentStep('step-0');
  }, [setCurrentStep]);

  const handleComplete = () => {
    completeStep('step-0');
  };

  return (
    <StartLayout
      title="Step 0: Set Up Your Developer Accounts"
      description="Create free accounts for GitHub, Vercel, Cloudflare, and your AI assistant"
    >
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 0</span>
          <span>•</span>
          <span>~10 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Set Up Your Developer Accounts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          You're setting up the same workflow professional developers use: version control (GitHub), deployment platform (Vercel), domain management (Cloudflare), and AI assistance.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12">
        {/* GitHub */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 dark:bg-white">
              <FaGithub className="h-7 w-7 text-white dark:text-gray-900" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">1. GitHub</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Version Control & Code Hosting
              </p>
            </div>
          </div>

          <div
            className={cn(
              'rounded-xl border p-6 mb-4',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <h3 className="font-semibold mb-2">What is GitHub?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Git repository hosting platform. Think of it as version control in the cloud—every change to your code is tracked, you can roll back mistakes, and it integrates with modern deployment pipelines.
            </p>

            <h3 className="font-semibold mb-2">Why GitHub specifically?</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• Industry standard (used by 100M+ developers)</li>
              <li>• Best integration with Vercel (auto-deploy on push)</li>
              <li>• Free unlimited repos</li>
              <li>• Professional portfolio (your GitHub profile matters)</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Setup Steps:
              </h3>
              <ol className="space-y-1 text-sm text-blue-900 dark:text-blue-300">
                <li>1. Go to github.com/signup</li>
                <li>2. Choose username (professional—this becomes your developer identity)</li>
                <li>3. Verify email</li>
                <li>4. Complete setup</li>
              </ol>
            </div>

            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              <FaGithub />
              Sign up for GitHub
            </a>
          </div>
        </section>

        {/* Vercel */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black dark:bg-white">
              <SiVercel className="h-6 w-6 text-white dark:text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">2. Vercel</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deployment Platform
              </p>
            </div>
          </div>

          <div
            className={cn(
              'rounded-xl border p-6 mb-4',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <h3 className="font-semibold mb-2">What is Vercel?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Modern deployment platform built for frontend frameworks. Handles build process, CDN distribution, SSL certificates, and continuous deployment. When you push to GitHub, Vercel automatically rebuilds and deploys your app.
            </p>

            <h3 className="font-semibold mb-2">Why Vercel?</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• Zero-config deployment (auto-detects your framework)</li>
              <li>• Global CDN (fast loading worldwide)</li>
              <li>• Free SSL/HTTPS</li>
              <li>• Generous free tier (100GB bandwidth/month)</li>
              <li>• Preview deployments for every commit</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Setup Steps:
              </h3>
              <ol className="space-y-1 text-sm text-blue-900 dark:text-blue-300">
                <li>1. Go to vercel.com/signup</li>
                <li>2. Click "Continue with GitHub" (single sign-on)</li>
                <li>3. Authorize Vercel to access your GitHub account</li>
                <li>4. Done—accounts are now linked</li>
              </ol>
            </div>

            <a
              href="https://vercel.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              <SiVercel />
              Sign up for Vercel
            </a>
          </div>
        </section>

        {/* Cloudflare */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
              <SiCloudflare className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">3. Cloudflare</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Domain Registrar & DNS
              </p>
            </div>
          </div>

          <div
            className={cn(
              'rounded-xl border p-6 mb-4',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <h3 className="font-semibold mb-2">What is Cloudflare?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Domain registrar, DNS provider, CDN, and security platform. Unlike traditional registrars (GoDaddy, Namecheap), Cloudflare sells domains at cost with no markup.
            </p>

            <h3 className="font-semibold mb-2">Why Cloudflare over GoDaddy?</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• <strong>Price:</strong> $9/year for .io (vs $15-20 on GoDaddy)</li>
              <li>• <strong>No upsells:</strong> They don't try to sell you unnecessary add-ons</li>
              <li>• <strong>Best DNS:</strong> Fastest DNS network globally (1.1.1.1)</li>
              <li>• <strong>Vercel integration:</strong> One-click DNS configuration</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-900 dark:text-yellow-300">
                <strong>Note:</strong> Don't buy a domain yet! We'll do that in Step 6 after you've built your app and chosen a name.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Setup Steps:
              </h3>
              <ol className="space-y-1 text-sm text-blue-900 dark:text-blue-300">
                <li>1. Go to cloudflare.com</li>
                <li>2. Click "Sign Up"</li>
                <li>3. Create account with email</li>
                <li>4. Done (don't buy domain yet—Step 6)</li>
              </ol>
            </div>

            <a
              href="https://cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              <SiCloudflare />
              Sign up for Cloudflare
            </a>
          </div>
        </section>

        {/* AI Assistant */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black dark:bg-white">
              <FaRobot className="h-7 w-7 text-white dark:text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">4. Claude Pro</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your AI coding assistant
              </p>
            </div>
          </div>

          <div
            className={cn(
              'rounded-xl border p-6 mb-4',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <h3 className="font-semibold mb-3">Recommended: Claude Pro ($20/month)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Claude Code is my preferred way to build. It's powerful, understands context deeply, and generates production-quality code. The Pro subscription gives you unlimited usage—essential when you're iterating on designs or debugging.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-100 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Unlimited messages with Claude Sonnet</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-100 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Priority access during peak times</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-100 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Early access to new features</p>
              </div>
            </div>

            <div
              className={cn(
                'rounded-lg border p-4 mb-4',
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-800/80'
                  : 'border-gray-200 bg-white'
              )}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Can you use the free tier?</strong>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Yes—the free tier works for building 1-2 simple apps. But you'll hit rate limits quickly when iterating. For this guide, I'm assuming you have Pro.
              </p>
            </div>

            <a
              href="https://claude.ai/upgrade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
            >
              Get Claude Pro →
            </a>
          </div>

          <div
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800/50'
                : 'border-gray-200 bg-gray-50'
            )}
          >
            <h3 className="font-semibold mb-3">Alternative: ChatGPT Plus ($20/month)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              ChatGPT Plus also works well for building apps. Similar pricing, similar capabilities. Use whichever you prefer—the workflow is the same.
            </p>
            <a
              href="https://chat.openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
            >
              Try ChatGPT →
            </a>
          </div>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Accounts Complete ✓</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check off each account as you create it:
          </p>
          <Checklist items={checklistItems} />
        </section>

        {/* Summary */}
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark'
              ? 'border-green-800 bg-green-900/20'
              : 'border-green-200 bg-green-50'
          )}
        >
          <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
            What you now have:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✓ GitHub account (code storage)</li>
            <li>✓ Vercel account (linked to GitHub)</li>
            <li>✓ Cloudflare account (for domain later)</li>
            <li>✓ AI assistant (Claude or ChatGPT)</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            <strong>The pipeline:</strong> GitHub → Vercel is connected. Push code, get deployed. That's modern development.
          </p>
        </section>
      </div>

      {/* Navigation */}
      <StepNavigation
        prevHref="/start"
        prevLabel="Back to Overview"
        nextHref="/start/step-1"
        nextLabel="Continue to Step 1"
        onComplete={handleComplete}
      />
    </StartLayout>
  );
}
