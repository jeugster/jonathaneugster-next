import Header from '@components/Header'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import Main from '@components/Main'

export default function Home() {
  return (
    <div className="container-fluid">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}
