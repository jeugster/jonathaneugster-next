import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-PNX7XQD'
}
 
TagManager.initialize(tagManagerArgs)

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application

