import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import RockPaperScissorsGame from '../comps/rockpaperscissorgame'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissor Game</title>
        <meta name="description" content="Testing our Next.js" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <Image src="/logo.svg" alt="Title" width={162} height={99} />
          <div className={styles.scoreContainer}>
            <p className={styles.scoreTitle}>SCORE</p>
            <p className={styles.scoreNumber}>0</p>
          </div>
        </div>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <RockPaperScissorsGame/>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a className={styles.rulesContainer}>
          <h1 className={styles.rules}> RULES </h1>
        </a>
      </footer>
    </div>
  )
}

export default Home
