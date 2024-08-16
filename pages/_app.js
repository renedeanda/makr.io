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
        <title>Make with AI | 15 Web Apps in 30 Days</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A collection of 15 utility web apps made with AI in 30 days by René DeAnda" />
        <meta name="keywords" content="utility apps, web tools, productivity, tech" />
        <meta property="og:title" content="Makr.io | 15 Utility Web Apps in 30 Days with AI by René DeAnda" />
        <meta property="og:description" content="A collection of 15 utility web apps made with AI in 30 days by René DeAnda" />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://makr.io" />
        <meta name="twitter:title" content="15 Utility Web Apps in 30 Days" />
        <meta name="twitter:description" content="A collection of 15 utility web apps made with AI in 30 days" />
        <meta name="twitter:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
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