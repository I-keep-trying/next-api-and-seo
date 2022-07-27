import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//https://dev.to/ayo_tech/how-to-implement-google-authentication-with-nextjs-and-passport-2gji?signin=true
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Core Web Vitals</title>
        <meta name="description" content="oauth implementation" />
        <meta
          name="google-site-verification"
          content="d0JzYkb2uzRi7vfSBaSRu1Pm8psgy4rKxDavPi7fkdk"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h1 className={styles.title}>
        Hello and  Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
