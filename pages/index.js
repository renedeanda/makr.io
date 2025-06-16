import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const recentProjects = [
  {
    title: "Security Headers Analyzer",
    description: "Get instant security analysis and actionable recommendations to protect your website from XSS, clickjacking, and other attacks",
    link: "https://security.makr.io",
    githubLink: "https://github.com/renedeanda/security-headers-analyzer",
    emoji: "🔒",
    madeWith: "Claude.ai & ChatGPT"
  },
  {
    title: "Auth Flow Visualizer",
    description: "Understand authentication flows in 30 seconds with interactive visualizations",
    link: "https://accountdev.com",
    githubLink: "https://github.com/renedeanda/auth-flow-lens",
    emoji: "🔐",
    madeWith: "Lovable"
  },
];

const projects = [
  { title: "SVG to PNG", description: "Convert SVG files to PNG", link: "https://svg2png.makr.io", githubLink: "https://github.com/renedeanda/svg2png.makr.io", emoji: "🖼️", madeWith: "Claude.ai & ChatGPT" },
  { title: "Email Preview", description: "Preview HTML emails", link: "https://emailpreview.makr.io", githubLink: "https://github.com/renedeanda/emailpreview.makr.io", emoji: "📧", madeWith: "Claude.ai & ChatGPT" },
  { title: "RSS Feed Reader", description: "Read top RSS feeds", link: "https://rss.makr.io", githubLink: "https://github.com/renedeanda/rss.makr.io", emoji: "📡", madeWith: "Claude.ai & ChatGPT" },
  { title: "DMARC Domain Checker", description: "Check DMARC records", link: "https://dmarc.makr.io", githubLink: "https://github.com/renedeanda/dmarc.makr.io", emoji: "🔍", madeWith: "Claude.ai & ChatGPT" },
  { title: "Email Headers Analyzer", description: "Analyze email headers", link: "https://emailheaders.makr.io", githubLink: "https://github.com/renedeanda/emailheaders.makr.io", emoji: "📨", madeWith: "Claude.ai & ChatGPT" },
  { title: "Email Subject Line Tester", description: "Test your email subject lines", link: "https://subjectline.makr.io", githubLink: "https://github.com/renedeanda/subjectline.makr.io", emoji: "✉️", madeWith: "Claude.ai & ChatGPT" },
  { title: "Quotes Collection", description: "Browse a collection of inspirational quotes", link: "https://quotes.makr.io", githubLink: "https://github.com/renedeanda/quotes.makr.io", emoji: "💬", madeWith: "Claude.ai & ChatGPT" },
  { title: "Country Explorer", description: "Learn about and compare countries", link: "https://countries.makr.io", githubLink: "https://github.com/renedeanda/countries.makr.io", emoji: "🌍", madeWith: "Claude.ai & ChatGPT" },
  { title: "Color Picker", description: "Pick and explore colors", link: "https://color.makr.io", githubLink: "https://github.com/renedeanda/color.makr.io", emoji: "🎨", madeWith: "Claude.ai & ChatGPT" },
  { title: "Book Recommendations", description: "Create and share reading lists easily", link: "https://books.makr.io", githubLink: "https://github.com/renedeanda/books.makr.io", emoji: "📚", madeWith: "Claude.ai & ChatGPT" },
  { title: "Pomodoro Timer", description: "A simple, beautiful pomodoro timer", link: "https://pomodoro.makr.io", githubLink: "https://github.com/renedeanda/pomodoro.makr.io", emoji: "⏲️", madeWith: "Claude.ai & ChatGPT" },
  { title: "Agenda Planner", description: "Create an agenda with a built-in timer and export to PDF", link: "https://agenda.makr.io", githubLink: "https://github.com/renedeanda/agenda.makr.io", emoji: "📝", madeWith: "Claude.ai & ChatGPT" },
  { title: "HN Enhanced", description: "Explore the latest tech news and jobs with this modern client", link: "https://hn.makr.io", githubLink: "https://github.com/renedeanda/hn.makr.io", emoji: "🤓", madeWith: "Claude.ai & ChatGPT" },
  { title: "Git Repo Explorer", description: "Search GitHub repos with AI keyword detection", link: "https://git.makr.io", githubLink: "https://github.com/renedeanda/git.makr.io", emoji: "📓", madeWith: "Claude.ai & ChatGPT" },
  { title: "Event Countdown", description: "Create countdowns for things you’re looking forward to", link: "https://countdown.makr.io", githubLink: "https://github.com/renedeanda/countdown.makr.io", emoji: "🎉", madeWith: "Claude.ai & ChatGPT" },
];

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const totalProjects = 15;
  const completedProjects = projects.length;
  const themeColor = theme === 'dark' ? '#1F2937' : '#FFFFFF';

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Make with AI | Recent Projects & 15 Apps Challenge</title>
        <meta name="description" content="Recent AI-powered web apps and the complete collection of 15 utility web apps made with AI in 30 days" />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Themed Banner with GitHub Icon and Theme Button */}
      <div className={`py-2 text-center flex justify-between items-center px-4 ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-900'}`}>
        <a href="https://rede.io/?utm_source=makr_15" className="font-bold hover:underline">
          Check out 📚 Rede.io for your daily tech newsletter!
        </a>
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
          <p className="text-lg text-gray-600 dark:text-gray-400">Latest AI-powered web applications</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-blue-200 dark:border-blue-700"
            >
              <h3 className="text-xl font-semibold flex items-center">
                {project.emoji} {project.title}
                {project.madeWith && (
                  <span className="ml-2 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full font-medium">
                    Made with {project.madeWith}
                  </span>
                )}
              </h3>
              <p className="text-lg mt-3">{project.description}</p>
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

      {/* Original Header Section */}
      <div className="flex justify-center items-center p-6">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold">15 Web Apps Made with AI in 30 Days</h1>
          <p className="text-xl mt-4">
            Crafted with 🧡 + 🤖 by <a href="https://renedeanda.com/?utm_source=makr_15" className="text-amber-500 hover:underline">René DeAnda</a>
          </p>
          <p className="text-xl mt-4 font-bold">
            Status: {completedProjects} / {totalProjects} completed
          </p>
        </header>
      </div>

      {/* Original Projects Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:px-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="block p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold flex items-center">
              {project.emoji} {project.title}
              {project.madeWith && (
                <span className="ml-2 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full font-medium">
                  Made with {project.madeWith}
                </span>
              )}
            </h2>
            <p className="text-xl mt-4">{project.description}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={`${project.link}?utm_source=makr_15`}
                target="_blank"
                className="text-primary dark:text-darkText hover:underline flex items-center"
              >
                Visit Site <FaExternalLinkAlt className="ml-1" />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="text-primary dark:text-darkText hover:underline flex items-center"
              >
                GitHub <FaGithub className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}