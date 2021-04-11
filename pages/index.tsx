import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brand Impact</title>
        <link rel="icon" href="logo.svg" />
      </Head>

      <div className={styles.header}>
        <img className={styles.logo} src="logo.svg" alt="logo" />
        <nav>
          <ul className={styles.nav__links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Directory</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </nav>
        <ul className={styles.nav__links}>
          <li><a className={styles.cta}><button className={styles.header__button}>Login</button></a></li>
          <li><a className={styles.cta}><button className={styles.header__button}>Sign Up</button></a></li>
        </ul>
      </div>

      <main className={styles.main}>
        <section className={styles.who_we_are}>
          <div className={styles.title_wrapper}>
            <p className={styles.title}>
              We Are Marketing Agency
            </p>
            <p>
            Brand Impact is an online business directory, marketing agency, and online presence manager where shops, companies, and associations can list themselves on different digital platforms from which they can have their brand more presentable and achievable to all kind of audience.
            </p>
          </div>
          <div>
            <img src="image1.svg"></img>
          </div>
        </section>
        <section className={styles.gallery_steps}>
          <div>
          <ul className={styles.nav__links}>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
          </div>
        </section>
        <section className={styles.services}>
          <div className={styles.services_content}>
          <p style={{
            width: 'fit-content',
            margin: 'auto'
          }} className={styles.title}>
            Services
          </p>
          <p >
          Tristique cras tellus sapien eu ac purus scelerisque eget. Massa est duis volutpat eu, metus, eget.Tristique cras tellus sapien eu ac purus scelerisque eget. Massa est duis volutpat eu, metus, eget.
          </p>
          <div>

          </div>
          </div>

        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
