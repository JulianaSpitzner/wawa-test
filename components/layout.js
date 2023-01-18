import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import logo from '../public/images/logo.jpg';
import store from '../public/images/store.png';
import Navbar from './Navbar';
import coffee from '../public/images/free-coffee.png';
import lines from '../public/images/red-lines.png';
import Homedata from './home-data';
// import './App.css';

const name = 'Juliana Spitzner';
export const siteTitle = 'Wawa';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Juliana"
          content="Wawa Landing Page"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.tabs}>
              <div className={styles.headercontainer}>
                  <div id="tab-1" className={styles.tabitem}>
                  <Image
                    priority
                    src={logo}
                    height={144}
                    width={144}
                    alt=""
                  />
                  </div>
              </div>
              <div className={styles.headercontainer}>
                  <div id="tab-2" className={styles.tabitem}>
                  <input type = "text" className={styles.search} id = "searchBar" oninput = "Search((this.value).toLowerCase())" placeholder = "Search...">
                    </input>
                  </div>
              </div>
              <div className={styles.headercontainer}>
                  <div id="tab-3" className={styles.tabitem}>
                    <Image
                    priority
                    src={store}
                    height={40}
                    width={40}
                    alt=""
                    />
                      <p class="text">Find a Store</p>
                  </div>
              </div>
              <div className={styles.headercontainer}>
                  <div id="tab-4" class="tab-item">
                    <button type="button" className={styles.btn}>Order Now</button>
                  </div>
              </div>            
          </div>
          <Navbar />
            {/* <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            /> */}
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}

            <Homedata />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}