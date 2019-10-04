import { CARD_SUITS, CARD_VALUES, DeckStatus} from "./constants";
import { Card } from "./interfaces";

class Deck {
    // This is to simulate the singleton pattern and make sure we are always using the "same" deck
    // This is an essential requirement, specially when talking about multiple players with unique cards
    private static instance: Deck;
    static getInstance() {
        if (!Deck.instance) {
            Deck.instance = new Deck();
        }
        return Deck.instance;
    }

    private cards: Card[];
    private deckStatus: DeckStatus;

    private constructor() {
        this.cards = this.generateNewDeck();
        this.deckStatus = DeckStatus.NEW;
    }

    // Creates a new deck in sequence, just like a brand new deck of cards from the store
    private generateNewDeck(): Card[] {
        const cards: Card[] = [];
        for (let value of CARD_VALUES) {
            for (let suit of CARD_SUITS) {
                cards.push({
                    "value": value,
                    "suit": suit
                });
            }
        }
        return cards;
    }

    getCards(): Card[]{
        return this.cards;
    }

    resetDeck(): void{
        this.cards = this.generateNewDeck();
        this.deckStatus = DeckStatus.NEW;
    }

    shuffleDeck(times: number): void{
        if (this.deckStatus === DeckStatus.INCOMPLETE){
            throw new Error("Deck is incomplete. Please restart the deck");
        }

        // Shuffle the deck X times
        for(let i = 0; i < times; i++) {
            const shuffledDeck: Card[] = [];

            while (this.cards.length > 0) {
                const randomNumber = Math.floor(Math.random() * Math.floor(this.cards.length));
                shuffledDeck.push(this.cards[randomNumber]);
                this.cards.splice(randomNumber, 1);
            };

            this.cards = shuffledDeck;
        }

        this.deckStatus = DeckStatus.SHUFFLED;
    }

    dealCards(numberOfPlayers: number, cardsPerPlayer: number = 2): Card[][]{
        if ((numberOfPlayers * cardsPerPlayer) > this.cards.length){
            throw new Error("Too many players for the current amount of cards.");
        }

        if (this.deckStatus !== DeckStatus.SHUFFLED){
            throw new Error("Deck not shuffled. Please shuffle the deck before dealing cards.");
        }

        // Deal X cards to each of X players (Default: 2 cards per player)
        const dealtCards:Card[][] = [];
        for (let i = 0; i < numberOfPlayers; i++){
            const playerCards:Card[] = [];
            for (let j = 0; j < cardsPerPlayer; j++){
                const drawCard = this.cards.shift()

                if (!drawCard){
                    throw new Error("Deck ran out of cards. Please reset the deck.");
                }
                playerCards.push(drawCard);
            }
            dealtCards.push(playerCards);
        }

        return dealtCards;
    }
}

export default Deck.getInstance();
