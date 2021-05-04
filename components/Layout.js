import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function Layout({ children }) {
 return (
  <div>
   <div className="overlay"></div>
   <Nav />
   {children}
   <Footer />
  </div>
 )
}
