import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useProgressStore } from '../../lib/store';
import { cn } from '../../lib/utils';
import StartLayout from '../../components/start/StartLayout';
import StepNavigation from '../../components/start/StepNavigation';
import Checklist, { ChecklistItem } from '../../components/start/Checklist';
import { SiCloudflare, SiVercel } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';

const checklistItems: ChecklistItem[] = [
  { id: 'purchased', label: 'Domain purchased on Cloudflare (~$15)' },
  { id: 'connected', label: 'Domain connected to Vercel' },
  { id: 'propagated', label: 'DNS propagated (domain loads)' },
  { id: 'ssl', label: 'SSL certificate active (padlock shows)' },
];

export default function Step6() {
  const { theme } = useContext(ThemeContext);
  const { completeStep, setCurrentStep, updateProject, currentProject } = useProgressStore();
  const [customDomain, setCustomDomain] = useState(currentProject?.customDomain || '');

  useEffect(() => {
    setCurrentStep('step-6');
  }, [setCurrentStep]);

  const handleDomainChange = (value: string) => {
    setCustomDomain(value);
    updateProject({ customDomain: value });
  };

  return (
    <StartLayout
      title="Step 6: Get Your Custom Domain"
      description="Buy a custom domain on Cloudflare and connect it to your app. Learn DNS configuration and make your app feel professional. Takes ~15 minutes, costs ~$15/year."
      ogImage="https://makr.io/og-start-step-6.png"
      canonical="https://makr.io/start/step-6"
    >
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>STEP 6</span>
          <span>•</span>
          <span>~15 minutes</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Get Your Custom Domain
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Buy a domain and connect it to your app
        </p>
      </header>

      <div className="space-y-8">
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-purple-800 bg-purple-900/20' : 'border-purple-200 bg-purple-50'
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            <FaGlobe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300">
              This is what makes it feel REAL
            </h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-300 mb-2">
            <strong>Right now:</strong> your-app.vercel.app (random generated URL)
          </p>
          <p className="text-sm text-purple-900 dark:text-purple-300">
            <strong>After this step:</strong> yourapp.com (professional custom domain!)
          </p>
        </section>

        {/* Part A: Buy Domain */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <SiCloudflare className="h-8 w-8 text-orange-500" />
            Part A: Buy Your Domain on Cloudflare
          </h2>

          <div className="space-y-6">
            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">Search for your domain</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Visit cloudflare.com/products/registrar and search for your domain idea.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Domain naming tips:</h4>
                <ul className="space-y-1 text-sm text-blue-900 dark:text-blue-300">
                  <li>• Keep it SHORT (easier to remember and type)</li>
                  <li>• Make it CLEAR what your app does</li>
                  <li>• .com is most affordable (~$15/year)</li>
                  <li>• Avoid hyphens if possible</li>
                </ul>
              </div>

              <a
                href="https://cloudflare.com/products/registrar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <SiCloudflare />
                Search for domains
              </a>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">Purchase (the only cost!)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Add to cart and complete purchase. Should be ~$15 for .com
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-sm text-yellow-900 dark:text-yellow-300">
                  <strong>⚠️ Don't buy any add-ons!</strong> You don't need domain privacy (included free), email hosting, or SSL certificates (Vercel provides this).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part B: Connect Domain */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <SiVercel className="h-8 w-8" />
            Part B: Connect Your Domain to Vercel
          </h2>

          <div className="space-y-6">
            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">1. Add domain in Vercel</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Go to your project in Vercel</li>
                <li>• Click "Settings" → "Domains"</li>
                <li>• Click "Add Domain"</li>
                <li>• Type your domain: yourdomain.com</li>
                <li>• Click "Add"</li>
              </ul>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">2. Let Vercel handle the DNS</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                If you're logged into Cloudflare, Vercel will detect it and offer to configure automatically!
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-300">
                  Click "Yes" or "Configure with Cloudflare" and Vercel automatically sets up DNS records and SSL. Takes ~30 seconds!
                </p>
              </div>
            </div>

            <div
              className={cn(
                'rounded-xl border p-6',
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
              )}
            >
              <h3 className="font-semibold mb-3">3. Wait for DNS propagation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                It takes 5-30 minutes for DNS to propagate worldwide. Grab a coffee ☕
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Then visit https://yourdomain.com and your app should load!
              </p>
            </div>
          </div>
        </section>

        {/* Record Your Domain */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Record Your Domain</h2>
          <div
            className={cn(
              'rounded-xl border p-6',
              theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
            )}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your custom domain:
                </label>
                <input
                  type="text"
                  value={customDomain}
                  onChange={(e) => handleDomainChange(e.target.value)}
                  placeholder="e.g., myapp.com"
                  className={cn(
                    'w-full px-4 py-2 rounded-lg border',
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-900'
                  )}
                />
              </div>

              {customDomain && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    ✓ Your app will be live at: <strong>{customDomain}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Success */}
        <section
          className={cn(
            'rounded-xl border p-6',
            theme === 'dark' ? 'border-green-800 bg-green-900/20' : 'border-green-200 bg-green-50'
          )}
        >
          <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
            What you just did:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Think about this for a second. You went from idea to:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✓ Custom domain</li>
            <li>✓ Live website</li>
            <li>✓ Secure (HTTPS)</li>
            <li>✓ Global CDN</li>
            <li>✓ Auto-deployment</li>
            <li>✓ Professional setup</li>
          </ul>
          <p className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
            All in one afternoon. For $15. Welcome to the new era of building. 🚀
          </p>
        </section>

        <Checklist items={checklistItems} />
      </div>

      <StepNavigation
        prevHref="/start/step-5"
        nextHref="/start/step-7"
        onComplete={() => completeStep('step-6')}
      />
    </StartLayout>
  );
}
