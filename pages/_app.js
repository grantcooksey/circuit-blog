import Layout from '../components/layout';
import Head from 'next/head'
import Script from "next/script"
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Fire!</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-4KM1ERYDXT`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4KM1ERYDXT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
