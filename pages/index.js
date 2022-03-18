import Head from 'next/head'

import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
      <link rel="icon" href="./favicon.png" />
      <title>Space tourism</title>
      </Head>
      <NavigationMenu />
      <main>Main</main>
      <Footer />
    </div>
  )
}
