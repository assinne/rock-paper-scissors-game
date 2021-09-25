import React from 'react';
import Image from 'next/image';
import styles from '../styles/game.module.css';
import decideWinner from '../utils/decideWinner';

type RockPaperScissorsProps = {
    increaseScore: () => void,
}

type RockPaperScissorsStates = {
    gameView: boolean,
    playerHand: string,
    winnerMessage: string,
    houseHand: string,
}

class RockPaperScissorsGame extends React.Component<RockPaperScissorsProps, RockPaperScissorsStates> {
    constructor(props:RockPaperScissorsProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {gameView : true, playerHand: 'paper', winnerMessage: 'Draw', houseHand: 'paper'};
    }

    handleClick(e:any) {
        const hand = e.target.className;
        if (this.state.gameView) {
            const { winner, houseHand} = decideWinner(hand);
            this.setState({ gameView: false, playerHand: hand, winnerMessage: winner, houseHand});
            if (winner === 'You Win') this.props.increaseScore();
        } else {
            this.setState({ gameView: true, playerHand: hand });
        }
    }

    render() {
        const gameView = this.state.gameView;
        const playerHand = this.state.playerHand;
        const houseHand = this.state.houseHand;
        const winnerMessage = this.state.winnerMessage;
        if (gameView) {
            return (
                <div className={styles.container}>
                    <Image className={'rock'} src='/icon-rock.svg' onClick={this.handleClick} alt='Rock' width={100} height={100} />
                    <Image className={'paper'} src='/icon-paper.svg' onClick={this.handleClick} alt='Paper' width={100} height={100} />
                    <Image className={'scissors'} src='/icon-scissors.svg' onClick={this.handleClick} alt='Scissors' width={100} height={100} />
                </div>
            )
        } else {
            return (
                <div className={styles.container}>
                    <Image className={playerHand} src={`/icon-${playerHand}.svg`} onClick={this.handleClick} alt={playerHand} width={100} height={100} />
                    <p>{winnerMessage}</p>
                    <Image className={houseHand} src={`/icon-${houseHand}.svg`} onClick={this.handleClick} alt={houseHand} width={100} height={100} />
                </div>
            )
        }
    }
}

export default RockPaperScissorsGame;