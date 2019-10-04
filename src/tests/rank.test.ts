import * as test from "tape";
import { isStraightFlush, isFlush, isStraight, isPair, comparePlayerCards } from "../rankHelper";

test("Should identify Straight Flush correctly", (t: any) => {
    const cards1 = [{value: 2, suit: 1}, {value: 3, suit: 1}];
    t.true(isStraightFlush(cards1));

    const cards2 = [{value: 2, suit: 1}, {value: 3, suit: 2}];
    t.false(isStraightFlush(cards2));

    const cards3 = [{value: 2, suit: 1}, {value: 4, suit: 1}];
    t.false(isStraightFlush(cards3));

    t.end();
});

test("Should identify Flush correctly", (t: any) => {
    const cards1 = [{value: 2, suit: 1}, {value: 4, suit: 1}];
    t.true(isFlush(cards1));

    const cards2 = [{value: 2, suit: 1}, {value: 3, suit: 2}];
    t.false(isFlush(cards2));

    const cards3 = [{value: 2, suit: 1}, {value: 4, suit: 1}];
    t.true(isFlush(cards3));

    t.end();
});

test("Should identify Straight correctly", (t: any) => {
    const cards0 = [{value: 8, suit: 4}, {value: 9, suit: 1}];
    t.true(isStraight(cards0));

    const cards1 = [{value: 2, suit: 1}, {value: 3, suit: 1}];
    t.false(isStraight(cards1));

    const cards2 = [{value: 2, suit: 1}, {value: 3, suit: 2}];
    t.true(isStraight(cards2));

    const cards3 = [{value: 2, suit: 1}, {value: 4, suit: 1}];
    t.false(isStraight(cards3));

    t.end();
});

test("Should identify Straight correctly", (t: any) => {
    const cards0 = [{value: 9, suit: 4}, {value: 9, suit: 1}];
    t.true(isPair(cards0));

    const cards1 = [{value: 2, suit: 1}, {value: 2, suit: 1}];
    t.true(isPair(cards1));

    const cards2 = [{value: 2, suit: 1}, {value: 3, suit: 2}];
    t.false(isPair(cards2));

    t.end();
});

test("Should compare cards correctly", (t: any) => {
    const player1 = {
        name: "A",
        cards: [{value: 9, suit: 4}, {value: 9, suit: 1}],
        rank: 0,
        score: 0
    };
    const player2 = {
        name: "B",
        cards: [{value: 8, suit: 4}, {value: 9, suit: 2}],
        rank: 0,
        score: 0
    };
    
    t.equal(comparePlayerCards(player1, player2), 1);

    t.end();
});