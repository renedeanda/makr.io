import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const recentProjects = [
  {
    title: "Good Dad",
    description: "Daily mindful reminders to help you connect, grow, and thrive as a father. Simple. Gentle. Transformative.",
    link: "https://gooddad.makr.io",
    githubLink: null,
    emoji: "🧘‍♂️",
    madeWith: ["Warp", "Claude Code"],
    platforms: ["iOS", "Android"]
  },
  {
    title: "AutoRoadmap",
    description: "Turn product ideas into actionable roadmaps in seconds. Describe your vision and get professional roadmaps with phases, features, and timelines",
    link: "https://autoroadmap.com",
    githubLink: null,
    emoji: "🗺️",
    madeWith: ["v0"],
    aiPowered: true
  },
  {
    title: "Rede.io",
    description: "AI-powered newsletter agent platform powering the Tech Rede newsletter with OpenAI APIs & intelligent web crawling",
    link: "https://rede.io",
    githubLink: null,
    emoji: "📚",
    madeWith: ["OpenAI", "Claude", "ChatGPT"],
    aiPowered: true
  },
  {
    title: "Security Headers Analyzer",
    description: "Get instant security analysis and actionable recommendations to protect your website from XSS, clickjacking, and other attacks",
    link: "https://security.makr.io",
    githubLink: "https://github.com/renedeanda/security-headers-analyzer",
    emoji: "🔒",
    madeWith: ["Claude", "ChatGPT"]
  },
  {
    title: "Auth Flow Visualizer",
    description: "Understand authentication flows in 30 seconds with interactive visualizations",
    link: "https://accountdev.com",
    githubLink: "https://github.com/renedeanda/auth-flow-lens",
    emoji: "🔐",
    madeWith: ["Lovable"]
  },
  {
    title: "Product Makr",
    description: "The ultimate product building challenge - Learn how to ship fast with modern AI tools",
    link: "https://product.makr.io",
    githubLink: null,
    emoji: "🚀",
    madeWith: ["v0", "Bolt.new", "Claude Code"],
    isProductMakr: true
  },
];

const projects = [
  { title: "SVG to PNG", description: "Convert SVG files to PNG", link: "https://svg2png.makr.io", githubLink: "https://github.com/renedeanda/svg2png.makr.io", emoji: "🖼️", madeWith: ["Claude", "ChatGPT"] },
  { title: "Email Preview", description: "Preview HTML emails", link: "https://emailpreview.makr.io", githubLink: "https://github.com/renedeanda/emailpreview.makr.io", emoji: "📧", madeWith: ["Claude", "ChatGPT"] },
  { title: "RSS Feed Reader", description: "Read top RSS feeds", link: "https://rss.makr.io", githubLink: "https://github.com/renedeanda/rss.makr.io", emoji: "📡", madeWith: ["Claude", "ChatGPT"] },
  { title: "DMARC Domain Checker", description: "Check DMARC records", link: "https://dmarc.makr.io", githubLink: "https://github.com/renedeanda/dmarc.makr.io", emoji: "🔍", madeWith: ["Claude", "ChatGPT"] },
  { title: "Email Headers Analyzer", description: "Analyze email headers", link: "https://emailheaders.makr.io", githubLink: "https://github.com/renedeanda/emailheaders.makr.io", emoji: "📨", madeWith: ["Claude", "ChatGPT"] },
  { title: "Email Subject Line Tester", description: "Test your email subject lines", link: "https://subjectline.makr.io", githubLink: "https://github.com/renedeanda/subjectline.makr.io", emoji: "✉️", madeWith: ["Claude", "ChatGPT"] },
  { title: "Quotes Collection", description: "Browse a collection of inspirational quotes", link: "https://quotes.makr.io", githubLink: "https://github.com/renedeanda/quotes.makr.io", emoji: "💬", madeWith: ["Claude", "ChatGPT"] },
  { title: "Country Explorer", description: "Learn about and compare countries", link: "https://countries.makr.io", githubLink: "https://github.com/renedeanda/countries.makr.io", emoji: "🌍", madeWith: ["Claude", "ChatGPT"] },
  { title: "Color Picker", description: "Pick and explore colors", link: "https://color.makr.io", githubLink: "https://github.com/renedeanda/color.makr.io", emoji: "🎨", madeWith: ["Claude", "ChatGPT"] },
  { title: "Book Recommendations", description: "Create and share reading lists easily", link: "https://books.makr.io", githubLink: "https://github.com/renedeanda/books.makr.io", emoji: "📚", madeWith: ["Claude", "ChatGPT"] },
  { title: "Pomodoro Timer", description: "A simple, beautiful pomodoro timer", link: "https://pomodoro.makr.io", githubLink: "https://github.com/renedeanda/pomodoro.makr.io", emoji: "⏲️", madeWith: ["Claude", "ChatGPT"] },
  { title: "Agenda Planner", description: "Create an agenda with a built-in timer and export to PDF", link: "https://agenda.makr.io", githubLink: "https://github.com/renedeanda/agenda.makr.io", emoji: "📝", madeWith: ["Claude", "ChatGPT"] },
  { title: "HN Enhanced", description: "Explore the latest tech news and jobs with this modern client", link: "https://hn.makr.io", githubLink: "https://github.com/renedeanda/hn.makr.io", emoji: "🤓", madeWith: ["Claude", "ChatGPT"] },
  { title: "Git Repo Explorer", description: "Search GitHub repos with AI keyword detection", link: "https://git.makr.io", githubLink: "https://github.com/renedeanda/git.makr.io", emoji: "📓", madeWith: ["Claude", "ChatGPT"] },
  { title: "Event Countdown", description: "Create countdowns for things you're looking forward to", link: "https://countdown.makr.io", githubLink: "https://github.com/renedeanda/countdown.makr.io", emoji: "🎉", madeWith: ["Claude", "ChatGPT"] },
];

// Brand color mappings for different tools
const getBrandChipStyles = (tool) => {
  const brandColors = {
    'Claude': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Claude Code': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'ChatGPT': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'OpenAI': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Warp': 'bg-black text-white dark:bg-white dark:text-black',
    'v0': 'bg-black text-white dark:bg-white dark:text-black',
    'Bolt.new': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold',
    'Lovable': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
  };

  return brandColors[tool] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
};

const MadeWithChips = ({ tools }) => (
  <div className="flex flex-wrap gap-1 mt-2">
    {tools.map((tool, index) => (
      <span
        key={index}
        className={`px-2 py-1 rounded-full text-xs font-medium ${getBrandChipStyles(tool)}`}
      >
        {tool}
      </span>
    ))}
  </div>
);

const PlatformBadges = ({ platforms }) => (
  <div className="flex flex-wrap gap-1 mt-2">
    {platforms.map((platform, index) => (
      <span
        key={index}
        className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      >
        {platform}
      </span>
    ))}
  </div>
);

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeColor = theme === 'dark' ? '#1F2937' : '#FFFFFF';

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Make with AI | Product Showcase & AI Development Portfolio</title>
        <meta name="description" content="Showcase of innovative AI-built products including Good Dad, AutoRoadmap, Rede.io, and Product Makr - demonstrating rapid development with Claude, v0, and modern AI tools" />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Themed Banner with GitHub Icon and Theme Button */}
      <div className={`py-2 text-center flex justify-between items-center px-4 ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-900'}`}>
        <div className="font-bold">
          Building the future with AI 🤖✨
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/renedeanda/makr.io"
            target="_blank"
            className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'}`}
            aria-label="GitHub Repository"
          >
            <FaGithub className="text-xl" />
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'bg-gray-200 border-gray-300'}`}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="py-8 px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">✨ Recent Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Latest AI-built mobile and web applications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className={`block p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-2 relative ${
                project.isProductMakr
                  ? 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-red-900/30 border-amber-300 dark:border-amber-600 ring-2 ring-amber-400 dark:ring-amber-500'
                  : 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700'
              }`}
            >
              {project.isProductMakr && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    🏆 CHALLENGE
                  </span>
                </div>
              )}
              {project.aiPowered && !project.isProductMakr && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    AI-POWERED
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold flex items-center">
                {project.emoji} {project.title}
              </h3>
              <p className="text-lg mt-3">{project.description}</p>
              {project.platforms && (
                <PlatformBadges platforms={project.platforms} />
              )}
              {project.madeWith && (
                <MadeWithChips tools={project.madeWith} />
              )}
              <div className="flex space-x-4 mt-4">
                <a
                  href={`${project.link}?utm_source=makr_recent`}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center font-medium"
                >
                  Visit Site <FaExternalLinkAlt className="ml-1" />
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center font-medium"
                  >
                    GitHub <FaGithub className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Makr Challenge Card */}
      <div className="py-12 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <a
            href="https://product.makr.io/challenge?utm_source=makr_showcase"
            target="_blank"
            className="block p-8 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 dark:from-amber-900/40 dark:via-orange-900/40 dark:to-red-900/40 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-4 border-amber-300 dark:border-amber-600 relative overflow-hidden group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-5xl">🚀</span>
                  <h2 className="text-3xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Product Makr Challenge
                  </h2>
                </div>
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  15 in 30 Days
                </span>
              </div>

              <p className="text-xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                Discover how I built 15 web applications in 30 days using AI tools like Claude, ChatGPT, and v0.
                Learn the process, tools, and techniques behind rapid product development.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  🎯 15 Apps Built
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700">
                  🤖 AI-Powered
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700">
                  ⚡ Rapid Development
                </span>
              </div>

              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-semibold text-lg">
                View Full Challenge
                <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
