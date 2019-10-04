import PokerGame from "./PokerGame";

let pokerGame: PokerGame;

function startGame(){
    const playerElem = document.getElementById("playerNumber") as HTMLInputElement;
    const roundElem = document.getElementById("roundsNumber") as HTMLInputElement;

    if (!playerElem || !roundElem){
        alert("ERROR: Could not find Game Settings");
    } else {
        pokerGame = new PokerGame(parseInt(playerElem.value), parseInt(roundElem.value));
    }

    const players = pokerGame.getPlayers();
    players.map((player) => {
        return `${player.name} - Cards: ${player.cards} - Rank: ${player.rank} - Score: ${player.score}`;
    })
    console.log(players);

    const outputElem = document.getElementById("output") as HTMLElement;
    outputElem.innerHTML = players.join("\n");
    
}

function startRound(){
    pokerGame.startNewRound();
}

function rankHands(){
    pokerGame.rankHands();
}

function findWinner(){
    pokerGame.findGameWinner();
}

function restartGame(){
    pokerGame.resetGame();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    const startBtnElem = document.getElementById("startGameBtn") as HTMLElement;
    startBtnElem.addEventListener("click", startGame);

    const startRoundBtnElem = document.getElementById("startRoundBtn") as HTMLElement;
    startRoundBtnElem.addEventListener("click", startRound);

    const rankHandsBtnElem = document.getElementById("rankHandsBtn") as HTMLElement;
    rankHandsBtnElem.addEventListener("click", rankHands);

    const findWinnerBtnElem = document.getElementById("findWinnerBtn") as HTMLElement;
    findWinnerBtnElem.addEventListener("click", findWinner);

    const restartBtnElem = document.getElementById("restartBtn") as HTMLElement;
    restartBtnElem.addEventListener("click", restartGame);
})