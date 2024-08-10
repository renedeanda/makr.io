'use client';

import Head from 'next/head';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
  return (
    <div className="container mx-auto px-6 py-10">
      <Head>
        <title>15 Utility Web Apps in 30 Days</title>
        <meta name="description" content="A collection of 15 utility web apps created in 30 days" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">15 Utility Web Apps in 30 Days</h1>
        <p className="text-xl text-gray-600 mt-4">Crafted with love and care to enhance your productivity. 🚀</p>
      </header>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h2 className="text-3xl font-semibold text-secondary flex items-center">
              {project.emoji} {project.title}
              <FaExternalLinkAlt className="ml-2 text-primary" />
            </h2>
            <p className="text-gray-700 mt-4">{project.description}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
