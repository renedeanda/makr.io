import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <Head>
        <title>Make with AI | Product Portfolio & AI Development Showcase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Showcase of innovative AI-built products by René DeAnda, featuring Good Dad (mindful fatherhood app), AutoRoadmap (AI roadmap generator), Rede.io (newsletter platform), and Product Makr challenge. Built with v0, Claude Code, Bolt.new, and modern AI tools." />
        <meta name="keywords" content="AI product development, rapid prototyping, AI tools showcase, product portfolio, Good Dad, AutoRoadmap, Rede.io, Product Makr, v0, Claude Code, Bolt.new, ChatGPT, AI-powered apps, René DeAnda, AI builder" />
        <meta name="author" content="René DeAnda" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Make with AI | AI Product Development Portfolio by René DeAnda" />
        <meta property="og:description" content="Portfolio of innovative AI-built products including Good Dad, AutoRoadmap, Rede.io, and Product Makr. Showcasing rapid development with v0, Claude Code, and Bolt.new." />
        <meta property="og:image" content="https://makr.io/og-image.png" />
        <meta property="og:url" content="https://makr.io" />
        <meta property="og:site_name" content="Make with AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Product Development Portfolio & Showcase" />
        <meta name="twitter:description" content="Innovative AI-built products by René DeAnda: Good Dad, AutoRoadmap, Rede.io, and Product Makr challenge. Built with v0, Claude Code, and Bolt.new." />
        <meta name="twitter:image" content="https://makr.io/og-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <link rel="canonical" href="https://makr.io" />
        
        {/* Structured Data for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "René DeAnda",
              "url": "https://makr.io",
              "sameAs": [
                "https://renedeanda.com",
                "https://github.com/renedeanda"
              ],
              "jobTitle": "AI Product Builder & Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Make with AI"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Product Development",
                "Rapid Prototyping",
                "AI-powered Applications",
                "v0",
                "Claude Code",
                "Bolt.new"
              ],
              "creator": [
                {
                  "@type": "MobileApplication",
                  "name": "Good Dad",
                  "url": "https://gooddad.makr.io",
                  "description": "Daily mindful reminders to help fathers connect, grow, and thrive",
                  "applicationCategory": "LifestyleApplication",
                  "operatingSystem": "iOS, Android"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "AutoRoadmap",
                  "url": "https://autoroadmap.com",
                  "description": "Turn product ideas into actionable roadmaps in seconds with AI",
                  "applicationCategory": "ProductivityApplication"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Rede.io",
                  "url": "https://rede.io",
                  "description": "AI-powered newsletter agent platform with intelligent web crawling",
                  "applicationCategory": "CommunicationApplication"
                },
                {
                  "@type": "WebSite",
                  "name": "Product Makr",
                  "url": "https://product.makr.io",
                  "description": "Product building challenge demonstrating rapid development with AI tools",
                  "about": "AI-powered product development showcase"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
