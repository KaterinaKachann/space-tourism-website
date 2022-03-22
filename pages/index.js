import Head from 'next/head'
import Home from '../pages/home'


export default function LandingPage() {
  return (
    <div >
      <Head>
        <link rel="icon" href="./favicon.png" />
        <title>Space tourism</title>
      </Head>
      <Home />
    </div>
  )
}
