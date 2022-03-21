import styles from "../styles/Home.module.scss"
import Head from 'next/head'
import NavigationMenu from '../components/NavigationMenu'
import style from "../styles/Crew.module.scss"
import { useState } from 'react'
import Info from '../public/data.json'
import Image from 'next/image'

export default function Crew() {
    const [data] = useState(Info.crew)
    const [value, setValue] = useState(0)
    const { name, images, role, bio } = data[value]
    return (
        <><Head>
            <link rel="icon" href="./favicon.png" />
            <title>Meet your crew</title>
        </Head>
            <NavigationMenu />
            <div className={style.container}>

                <div className={style.crewinfo}>

                    <div className={style.crewdetail}>
                        <div className={style.title}>
                            <span className={style.titlenum}>02&nbsp;</span>
                            <span className={style.titlecrew}>Pick your destination</span>
                        </div>
                        <div className={style.crewrole}>
                            <p className={style.crewtitle}>
                                {role}
                            </p>
                        </div>
                        <div className={style.crewname}>
                            <h1 className={style.crewtitle}>{name}</h1>
                        </div>
                        <div className={style.crewbio}>
                            <p className={style.crewtitle}>
                                {bio}
                            </p>
                        </div>
                        <nav className={style.navbar}>
                            <ul className={style.navmenu}>
                                {data.map(( item, index) => (
                                    <li key={index} className={index}>
                                        <button onClick={() => setValue(index)} className={index === value ? style.navHover : style.navitem}>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className={style.crewimg}>
                        <Image
                            className={style.crewinfoimg}
                            src={images.webp}
                            alt={name}
                            width={400}
                            height={700}
                        />
                    </div>
                </div>
            </div></>
    )
}