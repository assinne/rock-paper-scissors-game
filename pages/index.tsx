import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import RockPaperScissorsGame from '../comps/rockpaperscissorgame';
import { loadScore, saveScore } from '../utils/sessionStorage';

type HomeProps = {};
type HomeState = {
    scoreCounter: number
};

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            scoreCounter: loadScore()
        }
        this.increaseScore = this.increaseScore.bind(this);
    }

    increaseScore() {
        saveScore(this.state.scoreCounter + 1);
        this.setState({scoreCounter: this.state.scoreCounter + 1});
    }

    render() {
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
                            <p className={styles.scoreNumber}>{this.state.scoreCounter}</p>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <RockPaperScissorsGame increaseScore={this.increaseScore}/>
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
}

export default Home
