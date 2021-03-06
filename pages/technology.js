import styles from "../styles/Technology.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'
import Info from '../public/data.json'
import Image from 'next/image'
import { useState } from 'react'

export default function Technology() {
    const [data] = useState(Info.technology)
    const [value, setValue] = useState(0)
    const { name, images, description } = data[value]
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>Technology</title>
        </Head>
            <NavigationMenu />
            <div className={styles.container}>
                <div className={styles.title}>
                    <span className={styles.titlenum}>03&nbsp;</span>
                    <span className={styles.titletech}>SPACE LAUNCH 101</span>
                </div>
                <div className={styles.techinfo}>
                    <div className={styles.techdetail}>

                        <div className={styles.techcontent}>
                            <div className={styles.techrole}>
                                <p className={styles.techtitle}>
                                    THE TERMINOLOGY…
                                </p>
                            </div>
                            <div className={styles.techname}>
                                <h1 className={styles.techtitle}>{name}</h1>
                            </div>
                            <div className={styles.techdesc}>
                                <p className={styles.techtitle}>
                                    {description}
                                </p>
                            </div>
                            <nav className={styles.navbar}>
                                <ul className={styles.navmenu}>
                                    {data.map((item, index) => (
                                        <li key={index} className={index}>
                                            <button onClick={() => setValue(index)} className={index === value ? styles.navHover : styles.navitem}>
                                                <a>{index + 1}</a>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.techimg} style={{ position: "relative", width: "50%", height: "50%", paddingBottom: "30%" }}>
                            <Image
                                className={styles.techinfoimg}
                                src={images.portrait}
                                alt={name}
                                layout="fill"
                                objectFit="contain"

                            />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}