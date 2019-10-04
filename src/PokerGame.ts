import Deck from "./Deck";
import { GameStatus, SHUFFLE_TIMES, CARDS_PER_PLAYER, PokerRanks } from "./constants";
import { Card, Player } from "./interfaces";
import { isStraightFlush, isFlush, isStraight, isPair, isHighCard, comparePlayerCards } from "./rankHelper";

class PokerGame {
    private gameStatus: GameStatus;
    private players: Player[];
    private totalRounds: number;
    private currentRound: number;

    constructor(numberOfPlayers: number, numberOfRounds: number) {
        this.gameStatus = GameStatus.NEW;
        this.players = this.generatePlayers(numberOfPlayers);
        this.totalRounds = numberOfRounds;
        this.currentRound = 0;
    }

    private generatePlayers(numberOfPlayers: number): Player[]{
        let generatedPlayers = [];
        for (let i = 0; i < numberOfPlayers; i++){
            generatedPlayers.push({
                name: `Player ${i}`,
                cards: [],
                rank: 0,
                score: 0
            })
        }

        return generatedPlayers;
    }

    private getDealtCards(): Card[][]{
        const dealtCards = Deck.dealCards(this.players.length, CARDS_PER_PLAYER)
        if (!dealtCards){
            throw new Error("Cards not available. Please reset the game.");
        }
        return dealtCards;
    }

    private assignCardsToPlayers(cards: Card[][]): void{
        cards.forEach((playerCards, index) => {
            if (playerCards === undefined) return;

            this.players[index].cards = playerCards;
        });
    }

    private rankPlayer(player: Player): void{
        if (isStraightFlush(player.cards)){
            player.rank = PokerRanks.STRAIGHT_FLUSH;
            return;
        }
        if (isFlush(player.cards)){
            player.rank = PokerRanks.FLUSH;
            return;
        }
        if (isStraight(player.cards)){
            player.rank = PokerRanks.STRAIGHT;
            return;
        }
        if (isPair(player.cards)){
            player.rank = PokerRanks.PAIR;
            return;
        }
        if (isHighCard(player.cards)){
            player.rank = PokerRanks.HIGH_CARD;
            return;
        }
    }

    private findRoundWinner(): void{
        this.players.sort((player1, player2) => {
            return comparePlayerCards(player1, player2);
        });

        this.players.forEach((player, index) => {
            // Simple math to compensate the inverted winner order
            player.score += (this.players.length - index);
        })
    }

    resetGame(): void{
        this.gameStatus = GameStatus.NEW;
        this.players = this.generatePlayers(this.players.length);
        this.currentRound = 0;
    }

    getCurrentRound(): number{
        return this.currentRound;
    }

    startNewRound(): void{
        if (this.currentRound >= this.totalRounds){
            this.gameStatus = GameStatus.FINISHED;
        } else {
            this.gameStatus = GameStatus.ONGOING;
        }

        if (this.gameStatus === GameStatus.FINISHED){
            throw new Error ("Game already finished. Please reset the game.");
        }

        Deck.resetDeck();
        Deck.shuffleDeck(SHUFFLE_TIMES);
        this.assignCardsToPlayers(this.getDealtCards());

        this.currentRound++;
    }

    rankHands(): void{
        this.players.forEach((player) => {
            this.rankPlayer(player);
        })
        this.findRoundWinner();
    }

    findGameWinner(): Player{
        this.players.sort((player1, player2) => {
            if (player1.score > player2.score){
                return -1;
            } else if (player1.score < player2.score){
                return 1;
            }
            return 0;
        });

        return this.players[0];
    }

    getPlayers(): Player[]{
        return this.players;
    }

    
}

export default PokerGame;
