import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import TagManager from 'react-gtm-module'
import Layout from '@components/Layout'
import SEO from '@components/SEO'

function Application({ Component, pageProps }) {
 return (
  <>
   <SEO />
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </>
 )
}

const tagManagerArgs = {
 gtmId: 'GTM-PX5R9R4',
}

if (process.browser) {
 TagManager.initialize(tagManagerArgs)
}

export default Application
