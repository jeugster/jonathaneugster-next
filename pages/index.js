import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container-fluid overlay">
      <Head>
        <title>Dev Portfolio - Jonathan Eugster</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="WebDev, Portfolio, Resume, Jonathan Eugster"/>
      </Head>

      <main>
      <Header/>
      </main>

      <Footer/>

    </div>
  )
}
