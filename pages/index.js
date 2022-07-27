import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'

export default function Home() {
  const { data: session } = useSession()
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
      {/*   {loading && <p>Loading..</p>} */}
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              // signIn('google', { callbackUrl: 'http://localhost:3002/' })
              signIn()
            }
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  )
}
