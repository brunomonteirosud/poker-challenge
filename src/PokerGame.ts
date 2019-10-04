import Deck from "./Deck";
import { GameStatus, SHUFFLE_TIMES, CARDS_PER_PLAYER } from "./constants";
import { Card } from "./interfaces";

interface Player {
    name?: string;
    cards: Card[];
    victories: number;
    rank: number;
}

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
                victories: 0,
                rank: 0
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
        // TODO
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
        if (this.gameStatus === GameStatus.FINISHED){
            throw new Error ("Game already finished. Please reset the game.");
        }

        if (this.currentRound >= this.totalRounds){
            this.gameStatus = GameStatus.FINISHED;
        }

        Deck.resetDeck();
        Deck.shuffleDeck(SHUFFLE_TIMES);
        this.assignCardsToPlayers(this.getDealtCards());

        this.gameStatus = GameStatus.ONGOING;
    }

    rankHands(): void {
        this.players.forEach((player) => {
            this.rankPlayer(player);
        })
    }

    getPlayers(): Player[]{
        return this.players;
    }

    
}

export default PokerGame;
