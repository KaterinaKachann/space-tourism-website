import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';
import styles from "../styles/Destination.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'
import Image from 'next/image'
import moon from '../public/assets/destination/image-moon.webp'

const listMenuNav = [
    {
        id: 'Moon',
        name: 'Moon',
        href: '/moon'

    },
    {
        id: 'Mars',
        name: 'Mars',
        href: '/mars'

    },
    {
        id: 'Europa',
        name: 'Europa',
        href: '/europa'

    },
    {
        id: 'Titan',
        name: 'Titan',
        href: '/titan'

    },
    
]

export default function Destination() {
    const router = useRouter()
    const [style, setStyle] = useState('Moon');
    const handleClick = (id)=> ()=> {
        const activeElement = listMenuNav.find((item)=> item.id == id )
    
        activeElement && setStyle(id)
      }
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
                    <Image
                        className={styles.desinfoimg}
                        src={moon}
                        alt="Picture of the moon"
                    />
                    <div className={styles.destdetail}>
                        <nav className={styles.navbar}>
                            <ul className={styles.navmenu}>
                            {listMenuNav.map(({ id, name, href }) => (  
                            <Link href={href}  onClick={handleClick(id)}>
                                <li key={id} className={router.pathname == href ? styles.navHover : styles.navitem} >
                                    
                                        <a className={styles.navlink}>{name}</a>
                                    
                                </li>
                                </Link>
                                ))}
                            </ul>
                        </nav>
                        <div className={styles.destname}>
                            <h1 className={styles.destnametitle}>MARS</h1>
                        </div>
                        <div className={styles.destdesc}>
                            <p className={styles.destdesctitle}>
                                Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                            </p>
                        </div>
                        <div className={styles.destnum}>
                            <div className={styles.destway}>
                                <p>AVG. DISTANCE</p>
                                <h1>225 MIL. km</h1>
                            </div>
                            <div className={styles.destway}>
                                <p>Est. travel time</p>
                                <h1>9 months</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}