import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Municipality Project</title>
        <meta name="description" content="A Next.js project for the municipality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>

        <div className={styles.box}>
          <h1 className={styles.title}>Batroun: A Historic and Vibrant City on the Mediterranean Coast</h1>
          <div className={styles.slideshow}>
            {/* Add your slideshow or video component here */}
          </div>
          
        </div>

        <p className={styles.description}>
          Batroun is a coastal city in northern Lebanon and one of the oldest continuously 
          inhabited cities in the world. It is the capital city of Batroun District, 
          which is part of the North Governorate. Batroun is known for its historic churches, 
          its beach resort, its fresh lemonade and its international festival. 
          The city has a diverse population of Maronite, Melkite and Greek Orthodox Christians.
        </p>

      </main>
      <Footer/>
    </div>
  )
}
