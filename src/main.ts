import PokerGame from "./PokerGame";
import { Card, Player } from "./interfaces";

let pokerGame: PokerGame;

function getCardsString(cards: Card[]){
    const suits = {
        "1": "Diamonds",
        "2": "Hearts",
        "3": "Clubs",
        "4": "Spades"
    } as any;

    const values = {
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "Jack",
        "11": "Queen",
        "12": "King",
        "13": "Ace"
    } as any;

    const finalString = cards.map((card) => {
        return `${values[card.value.toString()]} of ${suits[card.suit.toString()]}`;
    }).join(" | ");

    return finalString;
}

function printOutput(){
    const players = pokerGame.getPlayers();
    const outputString = players.map((player) => {
        return `${player.name}, Cards: (${getCardsString(player.cards)}), Rank: ${player.rank}, Score: ${player.score}`;
    })

    const outputElem = document.getElementById("output") as HTMLElement;
    outputElem.innerHTML = outputString.join("<br>");

    const currRound = pokerGame.getCurrentRound();
    const roundLabelElem = document.getElementById("roundLabel") as HTMLElement;

    const roundElem = document.getElementById("roundsNumber") as HTMLInputElement;
    roundLabelElem.innerHTML = `(Round ${currRound.toString()} of ${roundElem.value})`;
}

function printOutputWinner(winner: Player){
    const players = pokerGame.getPlayers();
    const outputString = players.map((player) => {
        if (winner.name === player.name){
            return `<strong>${player.name}, Cards: (${getCardsString(player.cards)}), Rank: ${player.rank}, Score: ${player.score} (WINNER)</strong>`;
        } else {
            return `${player.name}, Cards: (${getCardsString(player.cards)}), Rank: ${player.rank}, Score: ${player.score}`;
        }
    })

    const outputElem = document.getElementById("output") as HTMLElement;
    outputElem.innerHTML = outputString.join("<br>");

    const currRound = pokerGame.getCurrentRound();
    const roundLabelElem = document.getElementById("roundLabel") as HTMLElement;

    const roundElem = document.getElementById("roundsNumber") as HTMLInputElement;
    roundLabelElem.innerHTML = `(Round ${currRound.toString()} of ${roundElem.value})`;
}

function startGame(){
    const playerElem = document.getElementById("playerNumber") as HTMLInputElement;
    const roundElem = document.getElementById("roundsNumber") as HTMLInputElement;

    if (!playerElem || !roundElem){
        alert("ERROR: Could not find Game Settings");
    } else {
        pokerGame = new PokerGame(parseInt(playerElem.value), parseInt(roundElem.value));
    }

    printOutput();
}

function startRound(){
    try {
        pokerGame.startNewRound();
        printOutput();    
    } catch (error) {
        alert(error);
    }
}

function rankHands(){
    try {
        pokerGame.rankHands();
        printOutput();
    } catch (error) {
        alert(error);
    }
}

function findWinner(){
    try {
        const winner = pokerGame.findGameWinner();
        printOutputWinner(winner);
    } catch (error) {
        alert(error);
    }
}

function restartGame(){
    try {
        pokerGame.resetGame();
        printOutput();    
    } catch (error) {
        alert(error);
    }
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