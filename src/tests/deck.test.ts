import * as test from "tape";
import Deck from "../Deck";

test("Deck should start with 52 cards", (t: any) => {
    const cards = Deck.getCards();
    t.deepEqual(cards.length, 52);

    t.end();
});

test("Deck should shuffle properly", (t: any) => {
    const cards1 = Deck.getCards();
    
    Deck.shuffleDeck(1);
    
    const cards2 = Deck.getCards();
    
    t.notDeepEqual(cards1, cards2);

    t.end();
});

test("Deck should deal unique cards", (t: any) => {
    const dealtCards = Deck.dealCards(3, 2);

    t.notEqual(dealtCards[0], dealtCards[1]);
    t.notEqual(dealtCards[1], dealtCards[2]);
    t.notEqual(dealtCards[2], dealtCards[3]);

    t.end();
});

test("Deck should not deal when too many players", (t: any) => {
    t.throws(() => Deck.dealCards(50, 5));
    t.end();
});