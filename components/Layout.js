import React from 'react'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function Layout({ children }) {
 return (
  <div className="main">
   <div className="overlay"></div>
   <Nav />
   <div >{children}</div>
   <Footer />
  </div>
 )
}
