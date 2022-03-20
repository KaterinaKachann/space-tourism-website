import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/NavigationMenu.module.scss'

import '../styles/NavigationMenu.module.scss'

const listMenuNav = [
    {
        id: 'Home',
        num: '00',
        name: 'Home',
        href: '/'

    },
    {
        id: 'Destination',
        num: '01',
        name: 'Destination',
        href: '/destination'
    },
    {
        id: 'Crew',
        num: '02',
        name: 'Crew',
        href: '/crew'
    },
    {
        id: 'Technology',
        num: '03',
        name: 'Technology',
        href: '/technology'
    },
];


export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(null);
    const openMenu = () => setIsOpen(!isOpen);
    const [style, setStyle] = useState('Home');
    const handleClick = (id)=> ()=> {
        const activeElement = listMenuNav.find((item)=> item.id == id )
    
        activeElement && setStyle(id)
      }
    const router = useRouter()

    return (
        <>
            <nav className={styles.navbar}>
                <Link href='/'> 
                    <a className={styles.navlogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                    </a>
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>

                    {listMenuNav.map(({ id, num, name, href }) => (   
                        <Link href={href}  onClick={handleClick(id)} >
                            <li key={id} className={router.pathname == href ? styles.navHover : styles.navitem} >
                                <span className={styles.navnum}>{num}
                                    <a className={styles.navlink}>&nbsp;{name}</a>
                                </span>
                        </li>
                       </Link>
                    ))}
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </>
    )
}
