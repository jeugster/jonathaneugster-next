import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import TagManager from 'react-gtm-module'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const tagManagerArgs = {
  gtmId: 'GTM-PNX7XQD'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default Application

