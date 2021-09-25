const loadScore = (): number => {
    let score: number;
    try {   
        const scoreStr:string = sessionStorage.getItem("score") as string;
        if (scoreStr === null) throw new Error("Null found");
        score = Number.parseInt(scoreStr);
    } catch(error) {
        console.log("No previous score found defaulting to 0");
        score = 0;
    }
    return score;
}
const saveScore = (score: number) => {
    sessionStorage.setItem("score", `${score}`);
}

export {
    loadScore, 
    saveScore}
;