
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
    <div className="container mx-auto p-6">
      <Head>
        <title>15 Utility Web Apps in 30 Days</title>
        <meta name="description" content="A collection of 15 utility web apps created in 30 days" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-primary">15 Utility Web Apps in 30 Days</h1>
        <p className="text-lg text-gray-600 mt-4">A journey of creating simple, yet powerful tools for the web. 🚀</p>
      </header>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-secondary flex items-center">
              {project.emoji} {project.title} 
              <FaExternalLinkAlt className="ml-2 text-primary" />
            </h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
    