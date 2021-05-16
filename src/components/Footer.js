import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2021 Adam Kui</p>
            <nav>
                <ul className={styles.pages}>
                    <li className={styles.li}><Link href="/">Home</Link></li>
                    <li className={styles.li}><Link href="/portfolio">Portfolio</Link></li>
                    <li className={styles.li}><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </footer>
    )
}
