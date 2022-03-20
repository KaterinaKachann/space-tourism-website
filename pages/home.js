import styles from "../styles/Home.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'
import Link from 'next/link'

export default function Home() {
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>Space tourism</title>
        </Head>
        <NavigationMenu />
        <div className={styles.homeinfo}>
                <div className={styles.homeinfotitle}>
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className={styles.btninfo}>
                <Link href="/destination" passHref>
                    <button className={styles.circle}>
                        Explore
                    </button>
                    </Link>
                </div>
            </div></>
    )
}