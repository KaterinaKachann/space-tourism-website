import Head from 'next/head'

import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'
import Home from '../pages/home'
// import Destination from './destination'
// import Crew from './crew'
// import Technology from './technology'

export default function LandingPage() {
  return (
    <div >
      <Head>
      <link rel="icon" href="./favicon.png" />
      <title>Space tourism</title>
      </Head>
      <Home />
      {/* <Destination />
      <Crew />
      <Technology />
      <Footer /> */}
    </div>
  )
}
