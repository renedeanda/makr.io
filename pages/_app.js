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
        <title>Make with AI | AI-Powered Web Apps & Tools Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover innovative AI-powered web applications including AutoRoadmap (product roadmap generator), Rede.io (newsletter platform), and 15+ utility tools built with Claude, ChatGPT, and modern AI technologies." />
        <meta name="keywords" content="AI web apps, product roadmap generator, AI newsletter platform, utility apps, web tools, productivity, AI-powered tools, Claude AI, ChatGPT, v0, AutoRoadmap, Rede.io, René DeAnda, AI development" />
        <meta name="author" content="René DeAnda" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Make with AI | AI-Powered Web Apps & Tools by René DeAnda" />
        <meta property="og:description" content="Innovative AI-powered applications including AutoRoadmap for product roadmaps, Rede.io newsletter platform, and 15+ utility tools built with cutting-edge AI technologies." />
        <meta property="og:image" content="https://makr.io/og-image.jpg" />
        <meta property="og:url" content="https://makr.io" />
        <meta property="og:site_name" content="Make with AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Web Apps & Tools Portfolio" />
        <meta name="twitter:description" content="Discover AutoRoadmap, Rede.io, and 15+ innovative AI-powered web applications built with Claude, ChatGPT, and modern AI technologies." />
        <meta name="twitter:image" content="https://makr.io/og-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
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
              "jobTitle": "AI Developer & Product Builder",
              "worksFor": {
                "@type": "Organization",
                "name": "Make with AI"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Web Development",
                "Product Development",
                "AI-powered Applications"
              ],
              "creator": [
                {
                  "@type": "SoftwareApplication",
                  "name": "AutoRoadmap",
                  "url": "https://autoroadmap.com",
                  "description": "AI-powered product roadmap generator",
                  "applicationCategory": "ProductivityApplication"
                },
                {
                  "@type": "SoftwareApplication", 
                  "name": "Rede.io",
                  "url": "https://rede.io",
                  "description": "AI-powered newsletter agent platform",
                  "applicationCategory": "CommunicationApplication"
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