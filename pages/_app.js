import Layout from '../components/layout';
import Head from 'next/head'
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Fire!</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
