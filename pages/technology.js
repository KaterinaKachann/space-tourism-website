import styles from "../styles/Home.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'

export default function Technology() {
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>SPACE LAUNCH 101</title>
        </Head>
        <NavigationMenu />
        <div className={styles.homeinfo}>
                <div className={styles.homeinfotitle}>
                <h1>Technology</h1>
                </div>
               
            </div></>
    )
}