'use client';

import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  { title: "SVG to PNG", description: "Convert SVG files to PNG", link: "https://svg2png.makr.io", emoji: "🖼️" },
  { title: "Email Preview", description: "Preview HTML emails", link: "https://emailpreview.makr.io", emoji: "📧" },
  { title: "RSS Feed Reader", description: "Read top RSS feeds", link: "https://rss.makr.io", emoji: "📡" },
  { title: "DMARC Domain Checker", description: "Check DMARC records", link: "https://dmarc.makr.io", emoji: "🔍" },
  { title: "Email Headers Analyzer", description: "Analyze email headers", link: "https://emailheaders.makr.io", emoji: "📨" },
  { title: "Email Subject Line Tester", description: "Test your email subject lines", link: "https://subjectline.makr.io", emoji: "✉️" },
  { title: "Quotes Collection", description: "Browse a collection of inspirational quotes", link: "https://quotes.makr.io", emoji: "💬" },
  { title: "Country Explorer", description: "Learn about and compare countries", link: "https://countries.makr.io", emoji: "🌍" },
  { title: "Color Picker", description: "Pick and explore colors", link: "https://color.makr.io", emoji: "🎨" },
];

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const totalProjects = 15; // Set your target number of projects
  const completedProjects = projects.length;
  
  const themeColor = theme === 'dark' ? '#1F2937' : '#FFFFFF'; // Example colors for dark and light themes

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Make with AI | 15 Web Apps in 30 Days</title>
        <meta name="description" content="A collection of 15 utility web apps made with AI in 30 days" />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Themed Clickable Banner with Theme Button */}
      <div className={`py-2 text-center flex justify-between items-center px-4 ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-900'}`}>
        <a href="https://rede.io/?utm_source=makr_15" className="font-bold hover:underline">
          Check out 📚 Rede.io for your daily tech newsletter!
        </a>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'bg-gray-200 border-gray-300'}`}
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
        </button>
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
        </header>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:px-8 mb-16">
        {projects.map((project, index) => (
          <a
            key={index}
            href={`${project.link}?utm_source=makr_15`}
            target="_blank"
            className="block p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold flex items-center">
              {project.emoji} {project.title}
              <FaExternalLinkAlt className="ml-2 text-primary dark:text-darkText" />
            </h2>
            <p className="text-xl mt-4">{project.description}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
