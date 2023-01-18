// `pages/_app.js`
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

//main entry point into the app
//every individual page starts with this template