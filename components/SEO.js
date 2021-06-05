import Head from 'next/head'

export default function SEO() {
 //  Standard SEO properties to be modified by each page
 return (
  <Head>
   <title key="title">Dev Portfolio - Jonathan Eugster</title>
   <meta
    key="og-title"
    property="og:title"
    content="Dev Portfolio - Jonathan Eugster"
   />
   <link rel="icon" href="/favicon.ico" />
   <meta
    name="keywords"
    content="WebDev, Portfolio, Resume, Jonathan Eugster, Nextjs, React, Javascript, Jamstack"
    key="keywords"
   />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <meta
    name="description"
    content="WebDev Portfolio and Resume for Jonathan Eugster"
    key="description"
   />
   <meta key="og-url" property="og:url" content="https://jonathaneugster.com" />
   <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
  </Head>
 )
}
