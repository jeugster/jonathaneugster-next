import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import TagManager from 'react-gtm-module'
import Layout from "@components/Layout"
import Head from "next/Head"

function Application({ Component, pageProps }) {
  return (
  <Layout>

    <Head>
      <title>Dev Portfolio - Jonathan Eugster</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content="WebDev, Portfolio, Resume, Jonathan Eugster"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="WebDev Portfolio and Resume for Jonathan Eugster"/> 
    </Head>

    <Component {...pageProps} />

  </Layout>
  )
}

const tagManagerArgs = {
  gtmId: 'GTM-PX5R9R4'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default Application

