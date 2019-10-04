import PokerGame from "./PokerGame";

const myGame = new PokerGame(5, 3);
myGame.startNewRound();
console.log(myGame.getPlayers());