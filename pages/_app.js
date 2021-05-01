import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import TagManager from 'react-gtm-module'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const tagManagerArgs = {
  gtmId: 'GTM-PX5R9R4'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default Application

