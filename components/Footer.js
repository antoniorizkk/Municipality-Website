import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.info}>
      <p>Address: Batroun Municipality, Main Street, Batroun, Lebanon</p>
          <p>Phone: +961 6 740 000</p>
          <p>Email: info@batroun.gov.lb</p>
      </div>

    </footer>
  )
}
