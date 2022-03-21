
import { useState } from 'react';
import styles from "../styles/Destination.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'
import Image from 'next/image'
import Info from '../public/data.json'








export default function Destination() {

    const [data] = useState(Info.destinations)
    const [value, setValue] = useState(1)
    const { name, images, description, distance, travel } = data[value]
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>Destination</title>
        </Head>

            <NavigationMenu />

            <div className={styles.container}>
                <div className={styles.title}>
                    <span className={styles.titlenum}>01&nbsp;</span>
                    <span className={styles.titledest}>Pick your destination</span>
                </div>
                <div className={styles.destinfo}>
                    <div className={styles.destimg}>
                        <Image
                            className={styles.desinfoimg}
                            src={images.webp}
                            alt={name}
                            width={300}
                            height={300}

                        />
                    </div>
                    <div className={styles.destdetail}>
                        <nav className={styles.navbar}>
                            <ul className={styles.navmenu}>
                                {data.map((item, index) => (
                                    <li key={index} >
                                        <button onClick={() => setValue(index)} className={index == value ? styles.navHover : styles.navitem}>
                                            <a className={styles.navlink}>{item.name}</a>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={styles.destname}>
                            <h1 className={styles.destnametitle}>{name}</h1>
                        </div><div className={styles.destdesc}>
                            <p className={styles.destdesctitle}>
                                {description}
                            </p>
                        </div><div className={styles.destnum}>
                            <div className={styles.destway}>
                                <p>AVG. DISTANCE</p>
                                <h1>{distance}</h1>
                            </div>
                            <div className={styles.destway}>
                                <p>Est. travel time</p>
                                <h1>{travel}</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}