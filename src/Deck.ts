import { CARD_SUITS, CARD_VALUES} from "./constants";

class Deck {
    // This is to simulate the singleton pattern and make sure we are always using the "same" deck
    // This is an essential feature, specially when talking about multiple rounds
    private static instance: Deck;

    static getInstance() {
        if (!Deck.instance) {
            Deck.instance = new Deck();
        }
        return Deck.instance;
    }

    // Variable that will hold all cards of the deck
    private cards: string[];

    private constructor() {
        this.cards = this.generateNewDeck();
    }

    // Creates a new deck in sequence, just like a brand new deck of cards from the store
    private generateNewDeck() {
        const cards = [];
        for (let value of CARD_VALUES) {
            for (let suit of CARD_SUITS) {
                cards.push(`${value} of ${suit}`);
            }
        }
        return cards;
    }

    getDeck() {
        return this.cards;
    }

    // Shuffle the deck X times
    shuffleDeck(times: number){
        for(let i = 0; i < times; i++) {
            const shuffledDeck: string[] = [];

            while (this.cards.length > 0) {
                const randomNumber = Math.floor(Math.random() * Math.floor(this.cards.length));
                shuffledDeck.push(this.cards[randomNumber]);
                this.cards.splice(randomNumber, 1);
            };

            this.cards = shuffledDeck;
            console.log(`Shuffled ${i}:`, shuffledDeck);
        }
    }
}

export default Deck.getInstance();
