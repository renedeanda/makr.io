import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  { title: "SVG to PNG", description: "Convert SVG files to PNG", link: "https://svg2png.makr.io", githubLink: "https://github.com/renedeanda/svg2png.makr.io", emoji: "🖼️" },
  { title: "Email Preview", description: "Preview HTML emails", link: "https://emailpreview.makr.io", githubLink: "https://github.com/renedeanda/emailpreview.makr.io", emoji: "📧" },
  { title: "RSS Feed Reader", description: "Read top RSS feeds", link: "https://rss.makr.io", githubLink: "https://github.com/renedeanda/rss.makr.io", emoji: "📡" },
  { title: "DMARC Domain Checker", description: "Check DMARC records", link: "https://dmarc.makr.io", githubLink: "https://github.com/renedeanda/dmarc.makr.io", emoji: "🔍" },
  { title: "Email Headers Analyzer", description: "Analyze email headers", link: "https://emailheaders.makr.io", githubLink: "https://github.com/renedeanda/emailheaders.makr.io", emoji: "📨" },
  { title: "Email Subject Line Tester", description: "Test your email subject lines", link: "https://subjectline.makr.io", githubLink: "https://github.com/renedeanda/subjectline.makr.io", emoji: "✉️" },
  { title: "Quotes Collection", description: "Browse a collection of inspirational quotes", link: "https://quotes.makr.io", githubLink: "https://github.com/renedeanda/quotes.makr.io", emoji: "💬" },
  { title: "Country Explorer", description: "Learn about and compare countries", link: "https://countries.makr.io", githubLink: "https://github.com/renedeanda/countries.makr.io", emoji: "🌍" },
  { title: "Color Picker", description: "Pick and explore colors", link: "https://color.makr.io", githubLink: "https://github.com/renedeanda/color.makr.io", emoji: "🎨" },
  { title: "Book Recommendations", description: "Create and share reading lists easily", link: "https://books.makr.io", githubLink: "https://github.com/renedeanda/books.makr.io", emoji: "📚" },
  { title: "Pomodoro Timer", description: "A simple, beautiful pomodoro timer", link: "https://pomodoro.makr.io", githubLink: "https://github.com/renedeanda/pomodoro.makr.io", emoji: "⏲️" },
  { title: "Agenda Planner", description: "Create an agenda with a built-in timer and export to PDF", link: "https://agenda.makr.io", githubLink: "https://github.com/renedeanda/agenda.makr.io", emoji: "📝" },
  { title: "HN Enhanced", description: "Explore the latest tech news and jobs with this modern client", link: "https://hn.makr.io", githubLink: "https://github.com/renedeanda/hn.makr.io", emoji: "🤓" },
  { title: "Git Repo Explorer", description: "Search GitHub repos with AI keyword detection", link: "https://git.makr.io", githubLink: "https://github.com/renedeanda/git.makr.io", emoji: "📓" },
  { title: "Event Countdown", description: "Create countdowns for things you're looking forward to", link: "https://countdown.makr.io", githubLink: "https://github.com/renedeanda/countdown.makr.io", emoji: "🎉" },
];

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const totalProjects = 15;
  const completedProjects = projects.length;
  const themeColor = theme === 'dark' ? '#1F2937' : '#FFFFFF';
  const productHuntPostId = process.env.NEXT_PUBLIC_PRODUCT_HUNT_POST_ID;

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Make with AI | 15 Web Apps in 30 Days</title>
        <meta name="description" content="A collection of 15 utility web apps made with AI in 30 days" />
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

      <div className="flex justify-center items-center p-6 flex-grow">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold">15 Web Apps Made with AI in 30 Days</h1>
          <p className="text-xl mt-4">
            Crafted with 🧡 + 🤖 by <a href="https://renedeanda.com/?utm_source=makr_15" className="text-amber-500 hover:underline">René DeAnda</a>
          </p>
          <p className="text-xl mt-4 font-bold">
            Status: {completedProjects} / {totalProjects} completed
          </p>

          {/* Product Hunt Badge */}
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.producthunt.com/posts/makr-io?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-makr&#0045;io" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=691220&theme=light" 
                alt="Makr.io - AI-built Next.js web apps – open-sourced for anyone to adapt" 
                width="250" 
                height="54" 
                style={{ width: '250px', height: '54px' }}
                className="hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </header>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:px-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="block p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold flex items-center">
              {project.emoji} {project.title}
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