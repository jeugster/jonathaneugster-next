import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Main from '@components/Main'

export default function Home() {
  return (
    <div className="container-fluid overlay">
      <Head>
        <title>Dev Portfolio - Jonathan Eugster</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="WebDev, Portfolio, Resume, Jonathan Eugster"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="WebDev Portfolio and Resume for Jonathan Eugster"/> 
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
