import styles from "../styles/Home.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'

export default function Crew() {
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>Meet your crew</title>
        </Head>
        <NavigationMenu />
        <div className={styles.homeinfo}>
                <div className={styles.homeinfotitle}>
                <h1>Crew</h1>
                </div>
               
            </div></>
    )
}