import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo/government.png" width={44} height={44} alt="Municipality Logo" />
      </div>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link href="/">
            <span className={styles.link}>
              <i className="fas fa-home"></i>
              Home
            </span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/gallery">
            <span className={styles.link}>
              <i className="fas fa-images"></i>
              Gallery
            </span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">
            <span className={styles.link}>
              <i className="fas fa-info-circle"></i>
              About Us
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
