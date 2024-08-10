'use client';

import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  { title: "SVG to PNG", description: "Convert SVG files to PNG", link: "https://svg2png.makr.io", emoji: "🖼️" },
  { title: "Email Preview", description: "Preview HTML emails", link: "https://emailpreview.makr.io", emoji: "📧" },
  { title: "RSS Feed Reader", description: "Read and organize RSS feeds", link: "https://rss.makr.io", emoji: "📡" },
  { title: "DMARC Domain Checker", description: "Check DMARC records", link: "https://dmarc.makr.io", emoji: "🔍" },
  { title: "Email Headers Analyzer", description: "Analyze email headers", link: "https://emailheaders.makr.io", emoji: "📨" },
  { title: "Email Subject Line Tester", description: "Test your email subject lines", link: "https://subjectline.makr.io", emoji: "✉️" },
  { title: "Quotes Generator", description: "Generate inspirational quotes", link: "https://quotes.makr.io", emoji: "💬" },
];

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container mx-auto px-6 py-10 ${theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>15 Utility Web Apps in 30 Days</title>
        <meta name="description" content="A collection of 15 utility web apps created in 30 days" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="flex justify-between items-center mb-8">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold">15 Utility Web Apps in 30 Days</h1>
          <p className="text-2xl mt-4">Crafted with love and care to enhance your productivity. 🚀</p>
        </header>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-darkBackground border border-gray-300 dark:border-gray-700 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
        </button>
      </div>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
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
