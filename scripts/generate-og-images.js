const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure scripts directory exists
const publicDir = path.join(__dirname, '..', 'public');

// Define OG image specifications
const width = 1200;
const height = 630;

// Define the pages and their content
const pages = [
  {
    filename: 'og-start.png',
    title: 'Ship Your First Web App',
    subtitle: 'Build and deploy in 2-5 hours using AI',
    badge: '8 Steps',
    gradient: ['#6366f1', '#8b5cf6']
  },
  {
    filename: 'og-start-step-0.png',
    title: 'Step 0: Developer Accounts',
    subtitle: 'GitHub • Vercel • Cloudflare • AI Tools',
    badge: '~10 min',
    gradient: ['#3b82f6', '#6366f1']
  },
  {
    filename: 'og-start-step-1.png',
    title: 'Step 1: Generate Your Idea',
    subtitle: 'Use AI to brainstorm app concepts',
    badge: '~5 min',
    gradient: ['#8b5cf6', '#a855f7']
  },
  {
    filename: 'og-start-step-2.png',
    title: 'Step 2: GitHub Repository',
    subtitle: 'Set up version control',
    badge: '~5 min',
    gradient: ['#06b6d4', '#3b82f6']
  },
  {
    filename: 'og-start-step-3.png',
    title: 'Step 3: Build with AI',
    subtitle: 'Claude Code • Lovable • Cursor • v0',
    badge: '1-4 hrs',
    gradient: ['#10b981', '#06b6d4']
  },
  {
    filename: 'og-start-step-4.png',
    title: 'Step 4: Save to GitHub',
    subtitle: 'Commit and push your code',
    badge: '~2 min',
    gradient: ['#f59e0b', '#ef4444']
  },
  {
    filename: 'og-start-step-5.png',
    title: 'Step 5: Deploy to Vercel',
    subtitle: 'Make your app live on the internet',
    badge: '~5 min',
    gradient: ['#ec4899', '#8b5cf6']
  },
  {
    filename: 'og-start-step-6.png',
    title: 'Step 6: Custom Domain',
    subtitle: 'Get your own .com domain',
    badge: '~15 min',
    gradient: ['#f43f5e', '#ec4899']
  },
  {
    filename: 'og-start-step-7.png',
    title: 'Step 7: Share Your Launch',
    subtitle: 'Celebrate and build in public',
    badge: '~5 min',
    gradient: ['#14b8a6', '#10b981']
  }
];

// Function to hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Generate SVG for each page
async function generateOGImage(page) {
  const { filename, title, subtitle, badge, gradient } = page;

  // Create a gradient background SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${gradient[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${gradient[1]};stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#grad)"/>

      <!-- Subtle pattern overlay -->
      <rect width="${width}" height="${height}" fill="url(#grad)" opacity="0.1"/>

      <!-- Content Container -->
      <rect x="80" y="120" width="${width - 160}" height="${height - 240}" fill="rgba(255,255,255,0.1)" rx="20"/>

      <!-- Badge -->
      <rect x="100" y="140" width="140" height="48" fill="rgba(255,255,255,0.25)" rx="24"/>
      <text x="170" y="172" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="white">
        ${badge}
      </text>

      <!-- Title -->
      <text x="600" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" text-anchor="middle" fill="white" style="text-shadow: 0 4px 8px rgba(0,0,0,0.2)">
        ${title}
      </text>

      <!-- Subtitle -->
      <text x="600" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="500" text-anchor="middle" fill="rgba(255,255,255,0.9)">
        ${subtitle}
      </text>

      <!-- Brand -->
      <text x="600" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="600" text-anchor="middle" fill="rgba(255,255,255,0.8)">
        makr.io/start
      </text>
    </svg>
  `;

  // Convert SVG to PNG using sharp
  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(publicDir, filename));
    console.log(`✓ Generated ${filename}`);
  } catch (error) {
    console.error(`✗ Error generating ${filename}:`, error.message);
  }
}

// Generate all images
async function generateAll() {
  console.log('🎨 Generating OG images...\n');

  for (const page of pages) {
    await generateOGImage(page);
  }

  console.log('\n✨ All OG images generated successfully!');
}

generateAll().catch(console.error);
