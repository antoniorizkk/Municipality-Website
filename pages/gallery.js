import Head from 'next/head'
import styles from '../styles/Gallery.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="A photo and video gallery for the municipality project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image src="/image/image1.jpg" width={500} height={333} alt="Saint Stefano church" />
          <p>Saint Stefano church</p>
        </div>
        <div className={styles.column}>
          <Image src="/image/image2.jpg" width={500} height={333} alt="Batroun Acient Wall" />
          <p>Batroun Acient Wall</p>
        </div>
        <div className={styles.column}>
          <Image src="/image/image3.jpg" width={500} height={333} alt="Strolling in Batroun old streets" />
          <p>Strolling in Batroun old streets</p>
        </div>
      </div>


      <div className={styles.row}>
        <div className={styles.column}>
          <Image src="/image/image4.jpg" width={500} height={333} alt="Batroun old harbor" />
          <p>Batroun old harbor</p>
        </div>
        <div className={styles.column}>
          <Image src="/image/image5.jpg" width={500} height={333} alt="Enjoy a great meal" />
          <p> Enjoy a great meal</p>
        </div>
        <div className={styles.column}>
          <Image src="/image/image6.jpg" width={500} height={333} alt="Enjoy drinking Lemonade, Batroun speciality drink" />
          <p>Enjoy drinking Lemonade, Batroun speciality drink</p>
        </div>
      </div>


        <video src="/video/video.mp4" width="500" height="333" controls alt="A video showing the beauty and culture of Batroun">
          Your browser does not support the video tag.
          
        </video>
      </main>
      <Footer/>
    </div>
  )
}
