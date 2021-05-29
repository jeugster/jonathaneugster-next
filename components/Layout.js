import React from 'react'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

// Wrapper for design
export default function Layout({ children }) {
 return (
  <main className="flex-auto w-full m-4">
   <div className="overlay backdrop-blur"></div>
   <Nav />
   <div className="m-12">{children}</div>
   <Footer />
  </main>
 )
}
