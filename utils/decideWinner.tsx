const typesArray = ["rock", "paper", "scissors"];

const housePicks = (typesArray: string[]) => {
    const index = Math.floor((Math.random() * typesArray.length));
    return typesArray[index];
}

const decideWinnerLogic = ( 
    playerType:string, 
    houseType: string
) => {

}

const decideWinner = (playerType:string) => {
    const houseType = housePicks(typesArray);
    const winner = decideWinnerLogic(playerType, houseType);
    return winner;
}

export default decideWinner;