/*
    These array order must be kept the same, normally this should be inside another file and folder called 'static'.
    Given the small size of the project in question I have opted to keep here to keep the layout as simple as possible
*/
export const handsArray = ['rock', 'paper', 'scissors'];
const extendedHandsArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

type Result = {
    winner: string,
    houseHand: string,
}
type HandCount = {
    playerCount: number,
    houseCount: number,
}

// Generate house picks
const housePicks = (handsArray: string[]): string => {
    const index:number = Math.floor((Math.random() * handsArray.length));
    return handsArray[index];
}

/*
    For adding Spock and lizard the below function will need to modified with rule:
        Beat -1 and +2 (increase count)
        Lose +1 and -2 (decrease count)
    Changes these number will allow the order to decide who would win, assume we follow the order in array above
*/
// Find count for ordering
const findCount = (
    playerHand: string,
    houseHand: string,
    handsArray: string[],
): HandCount => {
    let playerCount = handsArray.indexOf(playerHand);
    let houseCount = handsArray.indexOf(houseHand);
    // Check for number swaps 0 to 2, if 2 is present with 0. Set 0 to 3
    if (
        (playerCount === 0 && houseCount === 2) || 
        (houseCount === 0 && playerCount === 2)
    ) { 
        playerCount === 0? playerCount = 3: houseCount = 3;
    }   
    return {
        playerCount,
        houseCount
    }
}

//Decide Winner based on ordering
const decideWinnerLogic = ( 
    playerHand: string, 
    houseHand: string,
    handsArray: string[],
): Result => {
    const resultObj: Result = {
        winner: 'Draw',
        houseHand,
    }; 
    // Find count
    const { playerCount, houseCount } = findCount(playerHand, houseHand, handsArray);
    // Tie
    if (playerCount === houseCount) return resultObj;
    // Player Wins
    if (playerCount > houseCount) {
        resultObj.winner = 'You Win';
    } else { // House Wins
        resultObj.winner = 'House Wins';
    }   
    return resultObj;
}

// Main function to decide the winner
const decideWinner = (playerHand:string): Result => {
    const houseHand: string = housePicks(handsArray);
    const result: Result = decideWinnerLogic(playerHand, houseHand, handsArray);
    return result;
}

export default decideWinner;