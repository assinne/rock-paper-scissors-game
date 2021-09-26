import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import RockPaperScissorsGame from '../comps/rockpaperscissorgame';
import { loadScore, saveScore } from '../utils/sessionStorage';
import RulesModal from '../comps/rules';

type HomeProps = {};
type HomeState = {
    scoreCounter: number,
    showRulesModal: boolean,
};

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            scoreCounter: loadScore(),
            showRulesModal: false,
        }
        this.increaseScore = this.increaseScore.bind(this);
        this.openRulesModal = this.openRulesModal.bind(this);
        this.closeRulesModal =this.closeRulesModal.bind(this);
    }

    increaseScore() {
        saveScore(this.state.scoreCounter + 1);
        this.setState({scoreCounter: this.state.scoreCounter + 1});
    }

    openRulesModal() {
        this.setState({showRulesModal: true});
    }
    closeRulesModal() {
        this.setState({showRulesModal: false});
    }

    render() {
        const score = this.state.scoreCounter;
        const showRulesModal = this.state.showRulesModal;

        return (
            <div className={styles.container}>
                <Head>
                    <title>Rock Paper Scissor Game</title>
                    <meta name='description' content='Testing our Next.js' />
                    <link rel='icon' href='/favicon.ico?v=2' />
                </Head>

                <main className={styles.main}>
                    <div className={styles.titleContainer}>
                        <Image src='/logo.svg' alt='Title' width={162} height={99} />
                        <div className={styles.scoreContainer}>
                            <p className={styles.scoreTitle}>SCORE</p>
                            <p className={styles.scoreNumber}>{score}</p>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <RockPaperScissorsGame increaseScore={this.increaseScore}/>
                    </div>
                    
                    <RulesModal handleClose={this.closeRulesModal} show={showRulesModal}/>
                </main>

                <footer className={styles.footer}>
                    <a className={styles.rulesContainer} onClick={this.openRulesModal}>
                        <h1 className={styles.rules}> RULES </h1>
                    </a>
                </footer>
            </div>
        )
    }
}

export default Home
