import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us and our location on the map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.h1}>About us</h1>
        <p>We are Batroun municipality, the local authority of the coastal city of Batroun and its surrounding towns and villages in the North Governorate of Lebanon. We are proud to serve our community and to promote its development, heritage and culture.</p>
        
        <h2 className={styles.h2}>Our Vision</h2>
        <p>Make Batroun a model city in Lebanon and the region, where people can enjoy a high quality of life, a rich history and a vibrant economy. We aim to preserve our natural and cultural resources, to foster social cohesion and civic engagement, and to provide efficient and transparent public services</p>
        
        <h2 className={styles.h2}>Our Mission</h2>
        <p>Serve the public interest by implementing the policies and plans of the central government, by managing the municipal budget and assets, by providing essential services such as water, electricity, sanitation, security, education, health and tourism, and by addressing the needs and aspirations of our citizens.</p>
        
        <h2 className={styles.h2}>Our Values</h2>
        <p>They are based on the principles of democracy, accountability, integrity, innovation and excellence. We believe in respecting the diversity and dignity of all people, in collaborating with our partners and stakeholders, in fostering a culture of learning and improvement, and in striving for excellence in everything we do.</p>
        
        <h2 className={styles.h2}>Our History</h2>
        <p>Batroun is one of the oldest continuously inhabited cities in the world. It was founded by the Phoenicians more than 3000 years ago, and it has witnessed many civilizations and events throughout history. It was an important maritime and commercial center, a seat of bishops and a fortress against invaders. It has a rich architectural and archaeological heritage, such as the ancient Phoenician wall, the St. Stephen’s Cathedral, the El-Mseilha Fort and many churches and monasteries. It is also famous for its citrus groves and its fresh lemonade</p>
        
        <h2 className={styles.h2}>Location</h2>
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105528.44994206108!2d35.577242576928356!3d34.25456361122107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f58b173e7dc25%3A0x9a549b8742547920!2sBatroun%20Municipality!5e0!3m2!1sen!2slb!4v1690975439515!5m2!1sen!2slb"  width="500" height="450" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt="A Google map showing the location of Batroun Municipality"></iframe></p>

      </main>
      <Footer/>
    </div>
  )
}
