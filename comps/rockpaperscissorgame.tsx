import React from 'react';
import Image from 'next/image';
import styles from '../styles/game.module.css';

type RockPaperScissorsProps = {
    score: number
}

type RockPaperScissorsStates = {
    gameView: boolean
    picked: string
}

class RockPaperScissorsGame extends React.Component<RockPaperScissorsProps, RockPaperScissorsStates> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { gameView : true, picked: "paper"}
    }

    handleClick(e:any) {
        console.log("I am being clucked");
        console.log(e.target.className);
        const type = e.target.className
        if (this.state.gameView) {
            this.setState({ gameView: false, picked: type })
        } else {
            this.setState({ gameView: true, picked: type })
        }
    }

    render() {
        const gameView = this.state.gameView;
        const picked = this.state.picked;
        if (gameView) {
            return (
                <div className={styles.container}>
                    <Image className={"rock"} src="/icon-rock.svg" onClick={this.handleClick} alt="Rock" width={100} height={100} />
                    <Image className={"paper"} src="/icon-paper.svg" onClick={this.handleClick} alt="Paper" width={100} height={100} />
                    <Image className={"scissors"} src="/icon-scissors.svg" onClick={this.handleClick} alt="Scissors" width={100} height={100} />
                </div>
            )
        } else {
            return (
                <div className={styles.container}>
                    <Image className={picked} src={`/icon-${picked}.svg`} onClick={this.handleClick} alt={picked} width={100} height={100} />
                </div>
            )
        }
    }
}

export default RockPaperScissorsGame;