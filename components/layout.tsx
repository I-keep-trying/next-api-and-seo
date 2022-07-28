import Header from './header'
import Footer from './footer'
import type { ReactChildren } from 'react'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="d0JzYkb2uzRi7vfSBaSRu1Pm8psgy4rKxDavPi7fkdk"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
