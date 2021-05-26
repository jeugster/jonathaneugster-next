import React from 'react'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function Layout({ children }) {
 return (
  <div>
   <div className="overlay"></div>
   <Nav />
   <div className="main">{children}</div>
   <Footer />
  </div>
 )
}
