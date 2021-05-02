import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Main from '@components/Main'

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="overlay"></div>
      <Head/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
